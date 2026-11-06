/* MasterChef Türkiye 2026 — render (data.js'den okur, sayfayı çizer) */
(function () {
  "use strict";
  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }
  function sourceBadge(src) {
    if (src === "transkript") return '<span class="badge badge-t">✅ transkript</span>';
    if (src === "teyit") return '<span class="badge badge-q">❓ teyit edilecek</span>';
    return '<span class="badge badge-w">🌐 web</span>';
  }
  function teamChip(team, names) {
    if (!names || !names.length) return "";
    return '<div class="team ' + (team === "blue" ? "team-blue" : "team-red") + '"><strong>' +
      (team === "blue" ? "🔵 Mavi" : "🔴 Kırmızı") + ":</strong> " + esc(names.join(", ")) + "</div>";
  }
  function dishTable(dishes) {
    var duel = dishes.some(function (d) { return d.blue || d.red; });
    if (duel) {
      var rows = dishes.map(function (d) {
        return "<tr><td><strong>" + esc(d.dish) + "</strong>" +
          (d.note ? "<br><span class='note'>" + esc(d.note) + "</span>" : "") + "</td><td>" +
          esc(d.blue || "—") + "</td><td>" + esc(d.red || "—") + "</td><td><strong>" +
          esc(d.winner || "—") + "</strong>" + (d.score ? "<br><span class='score'>" + esc(d.score) + "</span>" : "") + "</td></tr>";
      }).join("");
      return '<div class="table-wrap"><table class="dish-table"><thead><tr><th>Yemek</th><th>Mavi</th><th>Kırmızı</th><th>Kazanan</th></tr></thead><tbody>' + rows + "</tbody></table></div>";
    }
    var items = dishes.map(function (d) {
      var who = d.name ? "<strong>" + esc(d.name) + "</strong> — " : "";
      var res = d.result ? " <span class='result'>" + esc(d.result) + "</span>" : "";
      var rank = d.rank && d.rank !== "—" ? " <span class='rank'>" + esc(d.rank) + "</span>" : "";
      var win = d.winner ? " <span class='result'>" + esc(d.winner) + "</span>" : "";
      return "<li>" + who + "<strong>" + esc(d.dish) + "</strong>" + rank + res + win +
        (d.note ? "<br><span class='note'>" + esc(d.note) + "</span>" : "") + "</li>";
    }).join("");
    return '<ul class="dish-list">' + items + "</ul>";
  }
  function renderEpisode(ep) {
    var h = '<article class="ep" data-search="' + esc(JSON.stringify(ep).toLowerCase()) + '">';
    h += '<header class="ep-head"><div><div class="ep-date">' + esc(ep.date) + " · " + esc(ep.weekday || "") + " · " + esc(ep.week) + "</div>" +
      '<h3>' + esc(ep.title) + "</h3></div>" + sourceBadge(ep.source) + "</header>";
    if (ep.summary) h += '<p class="ep-summary">' + esc(ep.summary) + "</p>";
    if (ep.captains) h += '<p class="captains">Kaptanlar: 🔵 <strong>' + esc(ep.captains.blue) + "</strong> · 🔴 <strong>" + esc(ep.captains.red) + "</strong></p>";
    if (ep.teams) h += '<div class="teams">' + teamChip("blue", ep.teams.blue) + teamChip("red", ep.teams.red) + "</div>";
    (ep.games || []).forEach(function (g) {
      h += '<section class="game"><h4>' + esc(g.name) + (g.duration ? ' <span class="dur">' + esc(g.duration) + "</span>" : "") + "</h4>";
      if (g.winner) h += '<p class="winner-line">🏆 ' + esc(g.winner) + (g.score ? " — <strong>" + esc(g.score) + "</strong>" : "") + "</p>";
      if (g.detail) h += '<p class="note">' + esc(g.detail) + "</p>";
      if (g.dishes && g.dishes.length) h += dishTable(g.dishes);
      h += "</section>";
    });
    if (ep.immunity) {
      h += '<section class="immunity"><h4>🛡️ ' + esc(ep.immunity.name) + (ep.immunity.duration ? ' <span class="dur">' + esc(ep.immunity.duration) + "</span>" : "") + "</h4>" +
        '<p class="winner-line">🏆 ' + esc(ep.immunity.winner) + "</p>";
      if (ep.immunity.dishes && ep.immunity.dishes.length) h += dishTable(ep.immunity.dishes);
      if (ep.immunity.detail) h += '<p class="note">' + esc(ep.immunity.detail) + "</p>";
      h += "</section>";
    }
    if (ep.candidates && ep.candidates.length) {
      h += '<p class="candidates">🎯 <strong>Eleme adayları:</strong> ' + ep.candidates.map(esc).join(" · ") + "</p>";
    }
    if (ep.pot && ep.pot.length) h += '<p class="pot"><strong>Pota:</strong> ' + ep.pot.map(esc).join(", ") + "</p>";
    if (ep.eliminated) h += '<p class="eliminated">❌ <strong>Elenen:</strong> ' + esc(ep.eliminated) + "</p>";
    if (ep.notes && ep.notes.length) {
      h += '<ul class="ep-notes">' + ep.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>";
    }
    return h + "</article>";
  }
  function renderSummary() {
    var s = SITE;
    el("summary-strip").innerHTML =
      '<div class="stat"><span class="stat-num">' + s.remaining.length + '</span><span class="stat-label">yarışmacı kaldı</span><span class="stat-names">' + esc(s.remaining.join(", ")) + "</span></div>" +
      '<div class="stat"><span class="stat-num">' + s.eliminated.length + '</span><span class="stat-label">elendi</span><span class="stat-names">' +
      s.eliminated.map(function (e) { return esc(e.name) + " (" + esc(e.date) + ")"; }).join(", ") + "</span></div>" +
      '<div class="stat"><span class="stat-num">' + s.transcriptComplete.length + '</span><span class="stat-label">bölüm transkriptten tam</span><span class="stat-names">' + esc(s.transcriptComplete.join(", ")) + "</span></div>";
    el("updated").textContent = "Son güncelleme: " + s.updated;
    el("site-note").textContent = s.note;
  }
  function renderApron() {
    var main = CONTESTANTS.filter(function (c) { return c.apron; }).sort(function (a, b) { return a.apron - b.apron; });
    var res = CONTESTANTS.filter(function (c) { return !c.apron && c.group.indexOf("Yedek") === 0; });
    function row(c) {
      var win = (c.wins || []).join("; ") || "bilinmiyor — transkript bekleniyor";
      return "<tr><td>" + c.apron + "</td><td><strong>" + esc(c.name) + "</strong></td><td>" + esc(c.group) + "</td><td>" + esc(win) + "</td></tr>";
    }
    el("apron-table").innerHTML = '<div class="table-wrap"><table class="dish-table"><thead><tr><th>Önlük</th><th>Yarışmacı</th><th>Grup</th><th>Kazanan yemek / etap</th></tr></thead><tbody>' +
      main.map(row).join("") + "</tbody></table></div>" +
      "<h3>Yedekten ana kadroya girenler</h3>" +
      '<div class="table-wrap"><table class="dish-table"><thead><tr><th>Yedek</th><th>Yarışmacı</th><th>Yöntem / yemek</th></tr></thead><tbody>' +
      res.map(function (c) {
        return "<tr><td>" + esc(c.group) + "</td><td><strong>" + esc(c.name) + "</strong></td><td>" + esc((c.wins || []).join("; ") || "bilinmiyor") + "</td></tr>";
      }).join("") + "</tbody></table></div>";
  }
  var statusFilter = "all";
  function renderContestants() {
    var q = (el("search").value || "").trim().toLowerCase();
    var list = CONTESTANTS.filter(function (c) {
      if (statusFilter === "active" && c.status !== "yarışıyor") return false;
      if (statusFilter === "out" && c.status === "yarışıyor") return false;
      return true;
    });
    if (!q) {
      el("contestants-grid").innerHTML = list.map(card).join("");
    } else {
      el("contestants-grid").innerHTML = list.filter(function (c) {
        return (c.name + " " + (c.wins || []).join(" ")).toLowerCase().indexOf(q) !== -1;
      }).map(card).join("");
    }
    function card(c) {
      var badge = c.status === "yarışıyor" ? '<span class="badge badge-t">yarışıyor</span>' :
        (c.status === "elendi" ? '<span class="badge badge-out">elendi' + (c.elimDate ? " — " + esc(c.elimDate) : "") + "</span>" :
        '<span class="badge badge-w">' + esc(c.status) + "</span>");
      var wins = (c.wins && c.wins.length) ? "<ul>" + c.wins.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul>" :
        "<p class='note'>Bilinen galibiyet yok.</p>";
      return '<div class="contestant" data-search="' + esc((c.name + " " + (c.wins || []).join(" ")).toLowerCase()) + '">' +
        "<h4>" + esc(c.name) + "</h4>" + badge +
        "<p class='c-meta'>" + (c.apron ? "Önlük " + c.apron + " · " : "") + esc(c.group) + "</p>" + wins + "</div>";
    }
  }
  function renderEpisodes() {
    el("episodes").innerHTML = EPISODES.map(renderEpisode).join("");
    el("ep-count").textContent = EPISODES.length + " bölüm / gün kaydı";
  }
  function applySearch() {
    var q = (el("search").value || "").trim().toLowerCase();
    var shown = 0;
    document.querySelectorAll("#episodes .ep").forEach(function (card) {
      var hit = !q || card.getAttribute("data-search").indexOf(q) !== -1;
      card.style.display = hit ? "" : "none";
      if (hit) shown++;
    });
    el("search-info").textContent = q ? shown + " bölüm eşleşti — '" + el("search").value.trim() + "'" : "";
    renderContestants();
    var anyContestant = document.querySelectorAll("#contestants-grid .contestant").length;
    el("contestants-info").textContent = q ? anyContestant + " yarışmacı eşleşti" : "";
  }
  function init() {
    if (typeof SITE === "undefined" || typeof EPISODES === "undefined" || typeof CONTESTANTS === "undefined") {
      el("episodes").innerHTML = "<p>Veri yüklenemedi (data.js bulunamadı).</p>";
      return;
    }
    renderSummary();
    renderEpisodes();
    renderApron();
    renderContestants();
    var search = el("search");
    if (search) search.addEventListener("input", applySearch);
    document.querySelectorAll("[data-status]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        statusFilter = btn.getAttribute("data-status");
        document.querySelectorAll("[data-status]").forEach(function (b) { b.classList.toggle("active", b === btn); });
        renderContestants();
      });
    });
    document.querySelectorAll("[data-goto]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var t = document.getElementById(btn.getAttribute("data-goto"));
        if (!t) return;
        try {
          if (typeof t.scrollIntoView === "function") t.scrollIntoView({ behavior: "smooth" });
          else window.location.hash = "#" + btn.getAttribute("data-goto");
        } catch (e) {
          window.location.hash = "#" + btn.getAttribute("data-goto");
        }
      });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
