# MasterChef Türkiye 2026 — Dish-Level Dataset: Schema & Guide

**Files:** `dishes.csv` (277 rows) · `dishes.json` (same rows + header block) · `contestants.csv` (33 contestants) · `build_dishes.py` (generator — re-run to rebuild)
**Built:** 2026-11-06 · **Encoding:** UTF-8 · **Language:** Turkish (dish names in original language)
**Rule:** No dish, ingredient, or winner was invented. Every row is traceable to one of the five sources below. Where a dish or a participant set is unknown, **no row was created** — the gap is listed in COVERAGE instead.

## Sources

| source value | Meaning |
|---|---|
| `transkript_17.07.2026` | 17.07.2026 episode transcript (full, in LISTE.md) |
| `transkript_02.11.2026` | 02.11.2026 episode transcript (MasterChef-2.11.26.pdf, read in full) |
| `transkript_03.11.2026` | 03.11.2026 episode transcript (MasterChef-3.11.26.pdf, read in full) |
| `transkript_05.11.2026` | 05.11.2026 episode transcript (MasterChef-5.11.26.pdf, read in full) |
| `web` | LISTE_WEB.md — TV8, yemek.com, news sites. YouTube was NOT used. |

**source_confidence:** `yuksek` = transcript · `orta` = web news / inference from transcript context · `dusuk` = single weak source (e.g. Instagram summary) or unclear final group.

## Columns (dishes.csv / dishes.json)

| Column | Definition |
|---|---|
| `episode_date` | YYYY-MM-DD (episode air date) |
| `week_no` | 0 = ana kadro seçimleri (Jul–Aug, before weekly format); 1–13 = weekly format (Hafta 1 = 10–16 Aug … Hafta 13 = 2–8 Nov) |
| `episode_type` | `ana_kadro_secim` / `kaptanlik` / `takim_oyunu` / `bireysel_dokunulmazlik` / `odul_oyunu` / `eleme` |
| `game_name` | Game label (e.g. `Uskumru dolması — Somer Şef imza tabağı, düello formatı`, `Tahin ve pekmezle yaratıcı tabak`, `Ali Nazik`) |
| `round_no` | Round within the game (duel number, Tur 1/2, eleme Tur 1/2) |
| `contestant` | Canonical full name. `Elif Nilay Özgen` is always written in full (alias: Nilay). Surnames unknown for Mine, Fazlı, Beyhan, Nevzat, Fatma, Hatice — first name only. `Hami Efe Hanedan` surname unconfirmed. |
| `contestant_team` | `Mavi` / `Kirmizi` / `yok` (no team yet — selection phase, elimination pot) |
| `opponent` | Duel opponent, or empty. Only filled for head-to-head duels. |
| `dish_name` | **Original name as spoken/written.** Turkish dish in Turkish (`Uskumru dolması`, `Hıngal`); foreign dish in its original name (`Fesenjan`, `Vitello Tonnato`, `Crespelle`, `filetto di manzo con purè di patate`, `Gatto di Patate`, `Zwetschgenknödel`, `Crème brûlée`, `Tiramisu`, `Ratatuy` — spelled as in the source). Yaratıcı dishes: descriptive name + key details in `dish_details`. |
| `dish_category` | One of: `geleneksel` (traditional Turkish) · `yaratici` (creative, theme-based) · `sef_imza` (a judge's signature dish) · `yabanci_mutfak` (foreign cuisine) · `tatli` (dessert) · `corba` (soup) · `hamur_isi` (pastry/börek) · `makarna_hamur` (pasta/dumpling) · `zeytinyagli` (olive-oil dish) |
| `main_ingredient` | Primary ingredient (e.g. `uskumru`, `patates`, `tahin`, `kuzu`, `levrek`, `kuru incir`). `çeşitli` where the game is a concept (sıfır atık). |
| `dish_details` | Ingredients, technique, judges' notes — concise, in Turkish. |
| `time_limit_min` | Minutes, when stated in the source; empty otherwise. |
| `result` | `kazandi` (won the duel/game) · `kaybetti` (lost the duel) · `gecti` (survived / safe in elimination, or advanced past the round) · `elendi` (eliminated) · `ust_tur` (advanced to next round) · `finalist` (reached the final of that game) · `2.` / `3.` (ranked 2nd/3rd in an individual game) · `ilk_6` (ranked in the top 6 of a ranked game, winner excluded — used for the 2 Nov captain game where ranks 1–6 were announced) · `dokunulmazlik_kazandi` (won individual immunity) · `katildi` (took part; no win/loss recorded for that contestant in that game) |
| `rank_in_game` | 1 / 2 / 3 when the judges ranked the top 3; empty otherwise. |
| `is_best_dish` | `evet` only when (a) judges explicitly called it the best/most successful dish of the game, or (b) the contestant won that game outright with that dish (individual immunity, captain game, ana kadro final). Duel winners are `hayir` — a duel win is head-to-head, not "best dish of the game". Elimination survival is `hayir` unless explicitly "en iyi" (e.g. Nurten, Flying Noodles 11 Oct). |
| `score_note` | Team score progression (e.g. `Mavi 2-1`), prize (`Ödül: 100.000 TL`), or outcome note. |
| `source` / `source_confidence` | See Sources above. |
| `notes` | Caveats: inferences, contradictions, ASR garbles, missing participant sets. |

## Row-construction rules (so the data stays honest)

1. **One row per contestant-dish.** In games where everyone cooks the *same* dish (individual immunity, elimination rounds, captain game), one row is created per *known* participant.
2. **Participant set must be known.** Team-game menus whose cooks are unattributed (e.g. the 28 Oct düğün menu, 29 Oct gala menu) get **no rows** — they are listed under COVERAGE as "known menu, cooks unattributed".
3. **Winner/finalist-only web records:** where the web names only the winner (e.g. 02 Sep Armağan/incir, 30 Sep Emre/meyveli tart), only the named contestants get rows.
4. **Inferences are flagged** in `notes` with `source_confidence` `orta`/`dusuk` (e.g. 5 Nov Tolga–Enes duel winner, 3 Nov Muhammed 2nd place, Batuhan = somon bayıldı, Şiringül = ciğer).

## Using it for stats

- **Win rate per contestant:** `result IN (kazandi, dokunulmazlik_kazandi)` / total rows per contestant. Duel win rate: filter `episode_type = takim_oyunu` and `opponent != ''`, then `kazandi` / (`kazandi` + `kaybetti`).
- **Per dish category / main ingredient:** group by `dish_category` or `main_ingredient`, count `is_best_dish = evet` and wins. Example: `uskumru` appears as main ingredient in 17 Jul (Hasan Alp), 18 Oct (Uskumru Tarator), 5 Nov (14 duels).
- **Survival:** join `contestants.csv` (`elimination_date`) with dish rows; `gecti` rows in `eleme` = survived pots.
- **Time pressure:** `time_limit_min` vs `result` (35/40/45/50/60 min games).
- **Team effect:** `contestant_team` vs `result` in `takim_oyunu` / `bireysel_dokunulmazlik`.

## Bayesian network suggestion

Nodes (with states) and edges — a starting DAG, to be refined once more transcripts arrive:

- `Contestant` (33 states) → `dish_category` → `result`
- `Contestant` → `main_ingredient` → `result`
- `contestant_team` → `result` (team games only)
- `opponent` (strength: opponent's past win rate) → `result` (duels only)
- `time_limit_min` → `result`
- `episode_type` → `result` (different base rates: immunity games vs duels vs elimination)
- `week_no` → `result` (learning/fatigue over the season)
- `is_best_dish` as an observed child of `result` (not a parent — it is a judge label, not a cause)

Suggested CPT estimation: count rows per (parent state → result) with Laplace smoothing; the current 277 rows are thin for 33 contestants, so pool by category/ingredient first and add contestant-level priors only where a contestant has ≥ 5 rows. **Do not treat `web` rows and `transcript` rows as equal evidence** — weight by `source_confidence` (yuksek = 1.0, orta = 0.6, dusuk = 0.3) or model confidence as a separate node.

## Knowledge-graph suggestion

Node types and edges:

- **Contestant** —(COOKED)→ **Dish** —(IN_GAME)→ **Game** —(IN_EPISODE)→ **Episode** (date, week_no)
- **Contestant** —(MEMBER_OF)→ **Team** (Mavi/Kırmızı, per week — team membership changes weekly; model as dated edges)
- **Contestant** —(DUELLED)→ **Contestant** (via `opponent`; edge property: winner)
- **Dish** —(HAS_MAIN_INGREDIENT)→ **Ingredient**; **Dish** —(HAS_CATEGORY)→ **Category**
- **Contestant** —(WON_IMMUNITY)→ **Episode**; **Contestant** —(ELIMINATED_IN)→ **Episode**
- **Dish** —(JUDGE_NOTE)→ **Note** (free text in `dish_details`/`notes`)
- Candidate edge types for later: **Dish** —(VARIANT_OF)→ **Dish** (e.g. uskumru dolması vs Uskumru Tarator); **Contestant** —(SENT_TO_POT)→ **Contestant** (immunity picks; recorded in `notes` for now, not as rows).

## COVERAGE

### Dish-complete episodes (every contestant-dish in the episode is a row)
| Date | Episode | Rows |
|---|---|---|
| 2026-07-17 | Ana kadro 1. Gün — Biber yaratıcılık (14) + Ali Nazik (8) | 22 |
| 2026-11-02 | 13. Hafta kaptanlık — Pide (14) | 14 |
| 2026-11-03 | 13. Hafta 1. oyun — Patatesli yemekler düello (14) + Tahin-pekmez bireysel (7) | 21 |
| 2026-11-05 | 13. Hafta 2. oyun — Uskumru dolması düello (14) + Kuru incir dolması bireysel (7) | 21 |

### Week-level only (winner/finalist rows; most participant dishes unknown)
Ana kadro seçimleri 18 Jul–8 Aug (winners' dishes only; #3 Hasan Alp, #7 Demirhan, #9 Şadi, #12 Muhammed dishes unknown; #13 Ayşe empanada = Instagram-only, dusuk). Reserves (Recep, Emre, Tolgahan dishes known; Cansu/Faruk/Buse by vote, no dish). Captain games (9 winning dishes only; 2 Nov fully attributed with all 14 pides — see above). Individual immunity games where the dish + losing-team roster are known (20 Aug armut, 8 Sep helva-i hakani, 11 Sep patlıcan, 22 Sep İslim kebabı, 13 Oct Fesenjan, 16 Oct banduma, 27–31 Oct, 30 Oct ödül oyunu finalists only). Elimination games where the dish is named (16/23 Aug patlıcan + Ricciola; 13 Sep filetto; 20 Sep tahin + ördek bastilla [Faruk only]; 27 Sep Dana Şaşırma [Recep only]; 4 Oct Vitello Tonnato; 11 Oct mandalina + Flying Noodles; 18 Oct Uskumru Tarator; 25 Oct siyah sarımsak + Crespelle; 1 Nov Kalamar Dolması…).

### Known menus, cooks unattributed (NO rows — needs transcripts)
3 Nov patates menüsü is fully attributed (see above). Unattributed: 28 Oct düğün menüsü (7 yemek), 29 Oct Cumhuriyet gala (7), 31 Oct 7 bölge 7 yemek, 13 Oct kızartmalar (9), 15 Oct İspanyol (9), 16 Oct tatlı (9), 11 Sep Hindistan cevizi (9), 8 Sep balık (9), 2 Sep paella (5), 30 Oct Lübnan (9), 30 Sep sokak lezzetleri.

### Missing entirely (no dish info at all in sources used)
- **28 Sep–3 Oct games** (8. Hafta dokunulmazlık oyunları) — unresearched.
- **5–8 Oct games** (9. Hafta dokunulmazlık oyunları) — unresearched.
- 6 Nov episode — unconfirmed (Instagram comments only).
- 7 Nov (3. oyun) and 8 Nov (eleme) — not yet aired at build time.
- Most individual-immunity dishes in weeks 1–7 where only the winner's name is known (e.g. 16 Sep Kübra, 18 Sep Burçin, 26 Sep Nilay, 20/21/22/24 Oct, 15/17 Oct).
- Elimination Tur 1 dishes: 30 Aug, 6 Sep, 18 Oct, 1 Nov (ürün bilinmiyor).

## Per-contestant row counts (dishes.csv)

| Contestant | Rows | Contestant | Rows | Contestant | Rows |
|---|---|---|---|---|---|
| Enes Vardar | 20 | Nurten Ocak Tamer | 18 | Armağan Kırant | 18 |
| Şükran Boyraz | 16 | Hasan Alp Karabacak | 15 | Ayşe Nur İnal | 14 |
| Tolgahan Özden | 14 | Elif Nilay Özgen | 13 | Kübra Satılmış | 13 |
| Muhammed Yahya Haliloğlu | 13 | Burçin Oğuz | 12 | Tolga Çakuş | 11 |
| Şadi Altınay | 11 | Emre İrkilmez | 10 | Eyüp Can Güneş | 10 |
| Bahar Kaya | 9 | Şiringül Kaya | 8 | Batuhan Nazikoğlu | 6 |
| Recep Batur | 6 | Gülbahar Meşe | 5 | Simge Çıtak | 5 |
| Koray Saygı | 5 | Cansu Şöhret | 4 | Hami Efe Hanedan | 3 |
| Mine | 3 | Buse Baştan | 3 | Fatma | 2 |
| Hatice | 2 | Nevzat | 2 | Demirhan Ali Tekin | 2 |
| Faruk Garip | 2 | Beyhan | 1 | Fazlı | 1 |

**Rows by source:** transkript_17.07.2026: 22 · transkript_02.11.2026: 14 · transkript_03.11.2026: 21 · transkript_05.11.2026: 21 · web: 199. **Rows by episode_type:** ana_kadro_secim 58 · kaptanlik 23 · takim_oyunu 28 · bireysel_dokunulmazlik 101 · odul_oyunu 2 · eleme 65.

## Konsey oyları — votes.csv / votes.json / votes.js

Kim kime oy verdi. Üç dosya aynı veriyi tutar: `votes.csv` (45 satır), `votes.json` (başlıklı yapı),
`votes.js` (web uygulaması için `const VOTES`).

### Kural — gizli pusula
Konsey oyları gizli pusulayla kullanılır; yayında yalnızca TOPLAMLAR açıklanır. Bu yüzden bireysel
oylar yalnızca yarışmacının kendi oyunu kamerada sözlü olarak söylediği durumlarda kaydedildi.
Toplamlardan geriye dönük oy çıkarımı YAPILMADI; bilinmeyen oylar `bilinmiyor` bırakıldı.

### "Boş oy" ne demek?
Yarışmacıların "boş oy" dediği oy, genelde ciddiye alınmayan bir isme yazılan GÖSTERMELİK oydur ve
toplamda SAYILIR — gerçek boş pusula değildir. Kanıt: 5 Kasım'da Bahar "Nilay'a da boş oy attım"
dedi ve Nilay açıklanan toplamda 1 oy aldı. 3 Kasım'da Ayşe ve Tolga "boş oy" dediklerini söylese de
açıklanan toplamlar (5+4+3+2=14) 7 seçmen × 2 oyun tamamının isimli olduğunu gösteriyor.

### Bilinenler (transkript)
- **3 Kasım 2026 (Mavi):** toplam Ayşe 5, Muhammed 4, Tolga 3, Şadi 2 (=14). Söylenen oylar: 4/14 —
  Muhammed→Ayşe, Tolga→Ayşe, Şadi→Ayşe (5 Kas özetinde Ayşe'nin sözü), Ayşe→Şadi. Kalan 10 oy bilinmiyor.
  Ara sayım (Tolgahan'dan sonra): Ayşe 3, Muhammed 3, Tolga 2, Şadi 2. Sonuç: Ayşe 2. aday oldu.
- **5 Kasım 2026 (Kırmızı):** toplam Eyüp Can 5, Enes 3, Şükran 2, Nilay 1, Burçin 1 (=12). Söylenen oylar:
  9/12 sayılan oy + Nurten'in sonuç-sonrası 1 oyu — Şükran→Eyüp Can, Enes; Nilay→Eyüp Can, Burçin
  (yanlışlıkla, Enes demek istemiş); belirsiz konuşmacı→Eyüp Can, Şükran (göstermelik); Bahar→Eyüp Can,
  Nilay (göstermelik "boş oy"); Eyüp Can→Şükran (yanlışlıkla, orta güven); Nurten→Burçin (sonuç açıklandıktan sonra,
  toplamlara dahil değil). Kalan 3 oy bilinmiyor (Eyüp Can'ın 2. oyu + son seçmenin 2 oyu). Ara sayım (Bahar'dan önce): Eyüp Can 4, Enes 3, Şükran 2, Burçin 1. Sonuç:
  Eyüp Can 4. aday oldu. Not: Nurten'in oyları toplam dışı olduğu için sayılan oy 12'dir (6 seçmen × 2);
  7. seçmen Nurten'in 2 oyu ayrıca atıldı.

### Düzeltme (6 Kasım 2026) — 3 Kasım konuşmacısı
İlk sürümde 3 Kasım 1:57:29'daki "O kişi sensin Şadi abi" konuşması yanlışlıkla Nilay'a yazılmıştı.
Doğrusu **Ayşe→Şadi**: sıra anonsu "Sıra şimdi Ayşe'da" diyor ve Nilay o hafta Kırmızı takımdaydı,
Mavi konseyinde oy kullanamaz. Konuşmacı tespiti sıra anonsuna dayandığı için güven **orta** (ASR'da
konuşmacı etiketi yok). Ayrıca 5 Kasım özetinde geçen "Muhammed ve Şadi'ye oy vererek" cümlesindeki
oy verenin kim olduğu ASR'dan tespit edilemedi — satır olarak eklenmedi.

### Web haftaları
Konsey TOPLAMLARI hiçbir web kaynağında yazmıyor — yalnızca sonuç (potaya giden aday) biliniyor. Bu
yüzden web haftaları için konsey satırı yok; yalnızca dokunulmazlık kazananının seçimi (23 satır) ve
kaptan beraberlik kararları (4 satır: 15 Eki Kübra→Nurten, 17 Eki Muhammed→Enes, 21 Eki Şadi→Eyüp Can,
27 Eki Hasan Alp→Enes) listelendi.

### votes.csv sütunları
`episode_date, vote_type, voter, voted_for, source, source_confidence, notes` —
vote_type: `konsey` (gizli pusula oyu) · `dokunulmazlik_secimi` (dokunulmazlık kazananının aday seçimi) ·
`kaptan_beraberlik` (oylama eşitliğinde kaptan kararı). `voted_for` = `bilinmiyor` ise oy atıldığı
söylendi ama hedef tespit edilemedi; `belirsiz` (voter) ise hedef söylendi ama konuşmacı ASR'dan
tespit edilemedi. Her satırın `notes` alanında dayandığı transkript zaman damgası var.
