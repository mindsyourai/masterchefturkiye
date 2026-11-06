/* MasterChef Türkiye 2026 — veri dosyası
   Kaynak: LISTE.md + LISTE_WEB.md (transkriptler + web araştırması, YouTube yok)
   Yeni transkript geldiğinde: EPISODES dizisinin BAŞINA yeni bir bölüm nesnesi ekle,
   CONTESTANTS içindeki ilgili yarışmacının wins / status alanını güncelle.
   Bilinmeyen yemek/kazanan ASLA uydurulmaz — "bilinmiyor" olarak bırakılır.
   Yemek adları ORİJİNAL haliyle yazılır (Türkçe Türkçe, yabancı yabancı dilde). */
const SITE = {
  title: "MasterChef Türkiye 2026",
  subtitle: "Gün gün yemek listesi — kim ne pişirdi, kim kazandı",
  updated: "6 Kasım 2026",
  note: "Yeni transkriptler geldikçe gün gün ekleniyor. Transkripti olmayan bölümlerde yalnızca webde yazan bilgiler var; yemek listesi eksikse 'bilinmiyor — transkript bekleniyor' diye yazılır.",
  remaining: ["Armağan Kırant","Muhammed Yahya Haliloğlu","Tolga Çakuş","Kübra Satılmış","Şadi Altınay","Tolgahan Özden","Ayşe Nur İnal","Şükran Boyraz","Bahar Kaya","Burçin Oğuz","Nurten Ocak Tamer","Eyüp Can Güneş","Elif Nilay Özgen","Enes Vardar"],
  eliminated: [
    {name:"Demirhan Ali Tekin", date:"16 Ağustos 2026"},
    {name:"Gülbahar Meşe", date:"23 Ağustos 2026"},
    {name:"Simge Çıtak", date:"30 Ağustos 2026"},
    {name:"Koray Saygı", date:"6 Eylül 2026"},
    {name:"Cansu Şöhret", date:"13 Eylül 2026"},
    {name:"Faruk Garip", date:"20 Eylül 2026"},
    {name:"Recep Batur", date:"27 Eylül 2026"},
    {name:"Batuhan Nazikoğlu", date:"4 Ekim 2026"},
    {name:"Buse Baştan", date:"11 Ekim 2026"},
    {name:"Şiringül Kaya", date:"18 Ekim 2026"},
    {name:"Emre İrkilmez", date:"25 Ekim 2026"},
    {name:"Hasan Alp Karabacak", date:"1 Kasım 2026"}
  ],
  transcriptComplete: ["17 Temmuz 2026","2 Kasım 2026","3 Kasım 2026","5 Kasım 2026"]
};

/* Yarışmacılar — wins: yalnızca kaynaklarda açıkça yazan galibiyetler.
   status: "yarışıyor" | "elendi" | "seçmelerde elendi" | "yedek" */
const CONTESTANTS = [
  {name:"Batuhan Nazikoğlu", short:"Batuhan", apron:1, group:"1. Grup", status:"elendi", elimDate:"4 Ekim 2026", wins:["17 Tem — Ali Nazik (1. önlük)","11 Eyl — bireysel dokunulmazlık (patlıcan)"]},
  {name:"Elif Nilay Özgen", short:"Nilay", apron:2, group:"1. Grup", status:"yarışıyor", wins:["18 Tem — önlük (tavukla yaratıcı tabak)","26 Eyl — bireysel dokunulmazlık","24 Eki — bireysel dokunulmazlık"]},
  {name:"Hasan Alp Karabacak", short:"Hasan Alp", apron:3, group:"1. Grup", status:"elendi", elimDate:"1 Kasım 2026", wins:["19 Tem — önlük (yemek bilinmiyor)","20 Ağu — bireysel dokunulmazlık (armutla yaratıcı tabak)"]},
  {name:"Şiringül Kaya", short:"Şiringül", apron:4, group:"1. Grup", status:"elendi", elimDate:"18 Ekim 2026", wins:["20 Tem — önlük (kuzu kulağını merkeze alan yaratıcı tabak)"]},
  {name:"Enes Vardar", short:"Enes", apron:5, group:"1. Grup", status:"yarışıyor", wins:["21 Tem — önlük (kazandibi)","22 Eki — bireysel dokunulmazlık"]},
  {name:"Eyüp Can Güneş", short:"Eyüp Can", apron:6, group:"2. Grup", status:"yarışıyor", wins:["23 Tem — önlük (Altı Ezmeli Kebap)"]},
  {name:"Demirhan Ali Tekin", short:"Demirhan", apron:7, group:"2. Grup", status:"elendi", elimDate:"16 Ağustos 2026", wins:["24 Tem — önlük (yemek bilinmiyor)"]},
  {name:"Nurten Ocak Tamer", short:"Nurten", apron:8, group:"2. Grup", status:"yarışıyor", wins:["25 Tem — önlük (su böreği)","5 Kas — bireysel dokunulmazlık (zeytinyağlı kuru incir dolması, kariyerinde ilk)"]},
  {name:"Şadi Altınay", short:"Şadi", apron:9, group:"2. Grup", status:"yarışıyor", wins:["26 Tem — önlük (yemek bilinmiyor)","13 Eki — bireysel dokunulmazlık (Fesenjan)"]},
  {name:"Burçin Oğuz", short:"Burçin", apron:10, group:"2. Grup", status:"yarışıyor", wins:["27 Tem — önlük (tiramisu)","22 Eyl — bireysel dokunulmazlık (köfteli İslim kebabı)","18 Eyl — bireysel dokunulmazlık","20 Eki — bireysel dokunulmazlık"]},
  {name:"Tolga Çakuş", short:"Tolga", apron:11, group:"3. Grup", status:"yarışıyor", wins:["29 Tem — önlük (Hatay usulü tepsi kebabı)","15 Eki — bireysel dokunulmazlık"]},
  {name:"Muhammed Yahya Haliloğlu", short:"Muhammed", apron:12, group:"3. Grup", status:"yarışıyor", wins:["30 Tem — önlük (yemek bilinmiyor)","27 Eki — bireysel dokunulmazlık (lavaş kebabı)","17 Eki — bireysel dokunulmazlık"]},
  {name:"Ayşe Nur İnal", short:"Ayşe", apron:13, group:"3. Grup", status:"yarışıyor", wins:["31 Tem — önlük (Empanada — teyit edilecek)","16 Eki — bireysel dokunulmazlık (banduma)","30 Eki — ödül oyunu (100.000 TL)"]},
  {name:"Kübra Satılmış", short:"Kübra", apron:14, group:"3. Grup", status:"yarışıyor", wins:["1 Ağu — önlük (sebze güveci)","16 Eyl — bireysel dokunulmazlık","3 Kas — bireysel dokunulmazlık (karidesli dumpling)"]},
  {name:"Gülbahar Meşe", short:"Gülbahar", apron:15, group:"3. Grup", status:"elendi", elimDate:"23 Ağustos 2026", wins:["2 Ağu — önlük (ekler)"]},
  {name:"Simge Çıtak", short:"Simge", apron:16, group:"4. Grup", status:"elendi", elimDate:"30 Ağustos 2026", wins:["4 Ağu — önlük (pideli köfte)","25 Ağu — bireysel dokunulmazlık"]},
  {name:"Bahar Kaya", short:"Bahar", apron:17, group:"4. Grup", status:"yarışıyor", wins:["5 Ağu — önlük (levreği merkeze alan yaratıcı tabak)","8 Eyl — bireysel dokunulmazlık (helva-i hakani)","21 Eki — bireysel dokunulmazlık"]},
  {name:"Şükran Boyraz", short:"Şükran", apron:18, group:"4. Grup", status:"yarışıyor", wins:["6 Ağu — önlük (sebzeli gyoza)"]},
  {name:"Armağan Kırant", short:"Armağan", apron:19, group:"4. Grup", status:"yarışıyor", wins:["7 Ağu — önlük (asma yaprağını merkeze alan yaratıcı tabaklar)","19 Ağu — bireysel dokunulmazlık","2 Eyl — bireysel dokunulmazlık (incir)","2 Kas — kaptanlık (kıymalı kaşarlı pide, Mavi kaptan)"]},
  {name:"Koray Saygı", short:"Koray", apron:20, group:"4. Grup", status:"elendi", elimDate:"6 Eylül 2026", wins:["8 Ağu — önlük (crème brûlée)"]},
  {name:"Recep Batur", short:"Recep", apron:null, group:"Yedek 1", status:"elendi", elimDate:"27 Eylül 2026", wins:["15 Ağu — yedekten ana kadroya (testi kebabı)"]},
  {name:"Emre İrkilmez", short:"Emre", apron:null, group:"Yedek 2", status:"elendi", elimDate:"25 Ekim 2026", wins:["18 Ağu — yedekten ana kadroya (ratatuy)","30 Eyl — bireysel dokunulmazlık (meyveli tart)"]},
  {name:"Cansu Şöhret", short:"Cansu", apron:null, group:"Yedek 3", status:"elendi", elimDate:"13 Eylül 2026", wins:["26 Ağu — yedekten ana kadroya (yemek bilinmiyor)"]},
  {name:"Tolgahan Özden", short:"Tolgahan", apron:null, group:"Yedek 4", status:"yarışıyor", wins:["5 Eyl — yedekten ana kadroya (mantarlı ravioli)","9 Eyl — ödül oyunu","28 Eki — bireysel dokunulmazlık (tavuk baget)","29 Eki — bireysel dokunulmazlık (yeşil mercimek)","31 Eki — bireysel dokunulmazlık (sıfır atık)"]},
  {name:"Faruk Garip", short:"Faruk", apron:null, group:"Yedek 5", status:"elendi", elimDate:"20 Eylül 2026", wins:["7 Eyl — yedekten ana kadroya (yarışmacı oylaması)"]},
  {name:"Buse Baştan", short:"Buse", apron:null, group:"Yedek 6", status:"elendi", elimDate:"11 Ekim 2026", wins:["7 Eyl civarı — yedekten ana kadroya (halk oylaması, ~%74)"]},
  {name:"Mine", short:"Mine", apron:null, group:"1. Grup (seçmeler)", status:"seçmelerde elendi", wins:["17 Tem — Tur 1 birincisi (tuzlu pataşu)"]},
  {name:"Hami Efe Hanedan", short:"Hami Efe", apron:null, group:"1. Grup yedek", status:"seçmelerde elendi", wins:[]},
  {name:"Fatma", short:"Fatma", apron:null, group:"1. Grup yedek", status:"seçmelerde elendi", wins:[]},
  {name:"Hatice", short:"Hatice", apron:null, group:"1. Grup (seçmeler)", status:"seçmelerde elendi", wins:[]},
  {name:"Fazlı", short:"Fazlı", apron:null, group:"1. Grup (seçmeler)", status:"seçmelerde elendi", wins:[]},
  {name:"Beyhan", short:"Beyhan", apron:null, group:"1. Grup (seçmeler)", status:"seçmelerde elendi", wins:[]},
  {name:"Nevzat", short:"Nevzat", apron:null, group:"1. Grup (seçmeler)", status:"seçmelerde elendi", wins:[]}
];

/* Bölümler — EN SON önce. source: "transkript" | "web" | "teyit" */
const EPISODES = [
{
  id:"2026-11-06", date:"6 Kasım 2026", weekday:"Cuma", week:"13. Hafta", title:"3. Takım Oyunu", source:"teyit",
  summary:"Yalnızca resmî Instagram yorumlarından gelen bir iddia var: Tolgahan bireysel dokunulmazlığı kazandı, Şadi'yi aday gösterdi. Takım oyunu kazananı, yemekler ve oylama haber sitelerine henüz düşmedi.",
  games:[{name:"3. takım oyunu", detail:"Yemek listesi bilinmiyor — transkript bekleniyor.", winner:"bilinmiyor"}],
  immunity:{name:"Bireysel dokunulmazlık", winner:"Tolgahan Özden (teyit edilecek — yalnızca Instagram yorumlarından)", detail:"Şadi'yi aday gösterdiği iddia ediliyor."},
  candidates:["Şadi Altınay (teyit edilecek)"],
  notes:["7 Kasım (son dokunulmazlık) ve 8 Kasım (eleme) henüz yayınlanmadı."]
},
{
  id:"2026-11-05", date:"5 Kasım 2026", weekday:"Perşembe", week:"13. Hafta", title:"2. Takım Oyunu — Uskumru Dolması Düellosu", source:"transkript",
  summary:"Somer Şef'in imza tabağı uskumru dolması, 50 dakika, düello formatı. Yanında nar ekşili ince kıyım salata. Kaplama: un, yumurta, mısır unu. İç harç: soğan, kuş üzümü, dolmalık fıstık, tarçın, yenibahar, maydanoz + balığın kendi eti.",
  captains:{blue:"Armağan Kırant", red:"Şükran Boyraz"},
  teams:{blue:["Armağan","Muhammed","Tolga","Kübra","Şadi","Tolgahan","Ayşe"], red:["Şükran","Bahar","Burçin","Nurten","Eyüp Can","Nilay","Enes"]},
  games:[{name:"Takım oyunu — Uskumru Dolması (Somer Şef imza tabağı)", duration:"50 dk", winner:"Mavi Takım 5-2", score:"Mavi 5 – 2 Kırmızı",
    dishes:[
      {dish:"Uskumru Dolması", blue:"Şadi", red:"Burçin", winner:"Şadi (Mavi)", score:"1-0", note:"Burçin'in kuyruğu kızartırken koptu."},
      {dish:"Uskumru Dolması", blue:"Muhammed", red:"Nilay", winner:"Nilay (Kırmızı)", score:"1-1", note:"Muhammed'in balığında küçük delik/kırık; salatası daha iyiydi."},
      {dish:"Uskumru Dolması", blue:"Tolgahan", red:"Eyüp Can", winner:"Tolgahan (Mavi)", score:"2-1", note:"Eyüp Can'ın kaplaması altın sarısı olmadı."},
      {dish:"Uskumru Dolması", blue:"Armağan (kaptan)", red:"Şükran (kaptan)", winner:"Armağan (Mavi)", score:"3-1", note:"Şükran'ın balığının sırtı açılmış; Armağan renk körlüğü (diskromatopsi) olduğunu söyledi."},
      {dish:"Uskumru Dolması", blue:"Tolga", red:"Enes", winner:"Tolga (Mavi) — teyit edilecek", score:"4-1", note:"ASR'da kazanan ismi bozuk çıkmış; 'Tolga ve bütün Mavi takımı … oyunu kazanıyor' cümlesinden çıkarım."},
      {dish:"Uskumru Dolması", blue:"Kübra", red:"Bahar", winner:"Kübra (Mavi)", score:"5-1", note:"Bahar'ın kaplaması ıslak kaldı; Kübra'nınki altın sarısı."},
      {dish:"Uskumru Dolması", blue:"Ayşe", red:"Nurten", winner:"Nurten (Kırmızı)", score:"5-2", note:"Ayşe'nin balığında çatlak + iç harçta burukluk."}
    ]}],
  immunity:{name:"Bireysel dokunulmazlık — Kırmızı takım: Zeytinyağlı Kuru İncir Dolması", duration:"35 dk (webde 45 dk yazıyor; transkript 35 dk diyor)", winner:"Nurten Ocak Tamer — 1. (kariyerinde ilk bireysel dokunulmazlığı)",
    dishes:[
      {dish:"Zeytinyağlı Kuru İncir Dolması", name:"Nurten Ocak Tamer", rank:"1.", note:"İçini en fazla alan, dolgusu ve ekşisi en doğru olan tabak."},
      {dish:"Zeytinyağlı Kuru İncir Dolması", name:"Bahar Kaya", rank:"2.", note:"Limonu en çok gelen tabak."},
      {dish:"Zeytinyağlı Kuru İncir Dolması", name:"Elif Nilay Özgen", rank:"3.", note:"Baharatı en güzel gelen, ama ekşisi ve dereotu eksik."},
      {dish:"Zeytinyağlı Kuru İncir Dolması", name:"Enes Vardar", rank:"—", note:"Soğanı fazla, baharatı az."},
      {dish:"Zeytinyağlı Kuru İncir Dolması", name:"Burçin Oğuz", rank:"—", note:"Limonu az, tatlıyı bastıramadı."},
      {dish:"Zeytinyağlı Kuru İncir Dolması", name:"Eyüp Can Güneş", rank:"—", note:"Limonu az, içi az doldurulmuş."},
      {dish:"Zeytinyağlı Kuru İncir Dolması", name:"Şükran Boyraz", rank:"—", note:"İçini az doldurmuş."}
    ]},
  candidates:["Bahar Kaya — 3. aday (Nurten'in seçimi; 13 haftada ilk kez potaya girdi)","Eyüp Can Güneş — 4. aday (konsey oylaması: Eyüp Can 5, Enes 3, Şükran 2, Burçin 1)"],
  pot:["Tolgahan Özden","Ayşe Nur İnal","Bahar Kaya","Eyüp Can Güneş"],
  notes:["Hafta skoru 1-1 oldu (3 Kasım'ı Kırmızı kazanmıştı).","Bölüm başı: 3 Kasım'da Şadi–Ayşe tartışmasında Mehmet Şef ikisini de stüdyodan çıkarmıştı; Ayşe potaya gittiğini bölümde öğrenemedi."]
},
{
  id:"2026-11-03", date:"3 Kasım 2026", weekday:"Salı", week:"13. Hafta", title:"1. Takım Oyunu — Patatesli Yemekler", source:"transkript",
  summary:"Patatesli yemekler, 45 dakika, 7 yemek. Bölüm başında önceki haftanın uskumru tartışması konuşuldu. Şefler duyurdu: gelecek haftadan itibaren yeni sistem — potaya toplam 4 kişi, iki ayaklı puanlama.",
  captains:{blue:"Armağan Kırant", red:"Şükran Boyraz"},
  teams:{blue:["Armağan","Muhammed","Tolga","Kübra","Şadi","Tolgahan","Ayşe"], red:["Şükran","Bahar","Burçin","Nurten","Eyüp Can","Nilay","Enes"]},
  games:[{name:"Takım oyunu — Patatesli Yemekler", duration:"45 dk", winner:"Kırmızı Takım 4-3", score:"Kırmızı 4 – 3 Mavi",
    dishes:[
      {dish:"Bavyera usulü patates salatası", blue:"Tolga Çakuş", red:"Eyüp Can", winner:"Tolga (Mavi)", score:"1-0", note:"Eyüp Can'ın sosu yok, yavan; Tolga'nın ilikli kemik suyu + Dijon hardal sosu başarılı."},
      {dish:"Sütlü patates çorbası", blue:"Armağan (kaptan)", red:"Enes", winner:"Enes (Kırmızı)", score:"1-1", note:"Armağan'ın çorbası tatsız / süt tadı gelmiyor."},
      {dish:"Patatesli hıngal", blue:"Muhammed", red:"Nurten", winner:"Muhammed (Mavi)", score:"2-1", note:"Nurten'in hıngalları farklı boy/kalınlıkta; Muhammed'in işçiliği düzgün."},
      {dish:"Tavuklu sandal patates", blue:"Tolgahan", red:"Burçin", winner:"Burçin (Kırmızı)", score:"2-2", note:"Tolgahan'ın patatesi kalın, lezzet nüfuz etmemiş; Burçin'in tavuk sote + salçalı su + kaşar başarılı."},
      {dish:"Erzurum patatesli lahana sarması (patates dolması)", blue:"Kübra", red:"Nilay", winner:"Nilay (Kırmızı)", score:"2-3", note:"Kübra'nın sarmaları farklı boyda; Nilay'ınki eşit boyda, yanıklığı avantaj."},
      {dish:"Gatto di Patate (Napoli patates pastası/keki)", blue:"Şadi", red:"Bahar", winner:"Şadi (Mavi)", score:"3-3", note:"Bahar'ın içinde ek malzeme fazla, patates baskın değil; Şadi'ninki kek gibi, yüksek."},
      {dish:"Zwetschgenknödel (erikli Alman tatlısı)", blue:"Ayşe", red:"Şükran (+ Bahar, Enes, Eyüp Can yardımı)", winner:"Şükran (Kırmızı)", score:"3-4", note:"Ayşe'nin patates hamuru çiğ; Kırmızı'nın eriği ve hamuru güzel, panko karamelizasyonu eksik — yoksa 'gecenin yemeği' olurdu."}
    ]}],
  immunity:{name:"Bireysel dokunulmazlık — Mavi takım: Tahin ve Pekmezle Yaratıcı Tabak", duration:"45 dk", winner:"Kübra Satılmış — 1. ('tahinin en iyi geldiği tabak')",
    dishes:[
      {dish:"Karidesli dumpling — tahin sos (mirin, sirke, limon, lime), acı yağ, pekmezli turp turşusu", name:"Kübra Satılmış", rank:"1.", note:"Dengeli, karides ve iç dolgu güzel. Şefler: son 4 haftada en fazla çıkış yapan kişi Kübra."},
      {dish:"Kakao–kahve–pekmez mantolamalı kuzu + pekmezli–tahinli mantar dolma ve kıtır", name:"Muhammed Yahya Haliloğlu", rank:"2. (çıkarım)", note:"İlk 3'ten çıkarım — 1. Kübra, 3. Ayşe olduğuna göre kalan Muhammed."},
      {dish:"Tadım menüsü çorbası — tahinli semolina hamur ravioli, pekmez–tereyağında karides, kestane–tahin–pekmez–patlıcan püresi, miso–tahinli sebze stok", name:"Ayşe Nur İnal", rank:"3.", note:"Tahin hiç gelmiyor, pekmez tatlılığı geliyor; ravioli güzel, karides doğru pişmiş."},
      {dish:"Katmer + pekmezli çikolatalı fondü, cevizli pekmezli yalancı kaymak (irmikli süt)", name:"Tolga Çakuş", rank:"—", note:""},
      {dish:"Tahin bazlı krep — ceviz, hurma, pekmez iç; pekmez kreması; beyaz çikolata–tahin ve bitter çikolata–pekmez soslar; esmer şeker krokan", name:"Şadi Altınay", rank:"—", note:""},
      {dish:"Tahin–pekmez sablé, pekmez–kahve ile ıslatılmış pandispanya, mascarpone kreması (mavi haşhaş, ceviz, tarçın), Saganaki peyniri çıtır, pekmez dondurması", name:"Armağan Kırant", rank:"—", note:"Pandispanya biraz daha ıslatılabilirdi."},
      {dish:"Levrek, tahin vinegretli yedi kule marul (döküm tava), tahinli patates püresi, krema–tahin sos, pastırma tozu (surf and turf)", name:"Tolgahan Özden", rank:"—", note:"Pastırma tozu biraz fazla, burukluk veriyor."}
    ]},
  candidates:["Tolgahan Özden — 1. aday (Kübra'nın seçimi)","Ayşe Nur İnal — 2. aday (oylama: Ayşe 5, Muhammed 4, Tolga 3, Şadi 2)"],
  notes:["Oylamada Şadi–Ayşe tartışması; Şadi oy pusulasını Ayşe'nin önünde masaya vurdu; Mehmet Şef ikisini de stüdyodan çıkardı."]
},
{
  id:"2026-11-02", date:"2 Kasım 2026", weekday:"Pazartesi", week:"13. Hafta", title:"Kaptanlık — Pide", source:"transkript",
  summary:"Pide, 45 dakika — her yarışmacı iki pide yaptı (biri bitmiş, biri fırına hazır). Kazanan Armağan Kırant, Mavi kaptan oldu; Şükran'ı Kırmızı kaptan seçti. Bahar Kaya 13 haftadır potaya hiç girmedi — MasterChef rekoru.",
  captains:{blue:"Armağan Kırant", red:"Şükran Boyraz"},
  teams:{blue:["Armağan","Muhammed","Tolga","Kübra","Şadi","Tolgahan","Ayşe"], red:["Şükran","Bahar","Burçin","Nurten","Eyüp Can","Nilay","Enes"]},
  games:[{name:"Kaptanlık oyunu — pide", duration:"45 dk", winner:"Armağan Kırant — 1. (Mavi kaptan, 2. kaptanlığı)", detail:"Serbest pide türü. Her yarışmacı iki pide yaptı: biri bitmiş, biri fırına girmeye hazır; şefler ilkini tattı, en iyi ikiyi (Nurten ve Armağan) tekrar tattı.",
    dishes:[
      {dish:"Kıymalı kaşarlı pide (Musa Dağdeviren'in Türk mutfağı kitabından hamur tarifi; kıyma sulu, ince, çıtır kenarlar, kenarlarda kaşar)", name:"Armağan Kırant", rank:"1.", note:"Kazanan — Mavi kaptan (2. kaptanlığı; ilki profiterol, 6. hafta)."},
      {dish:"Bursa cantığı (kıyma, domates, biber, soğan suyu; hamur kepekle açıldı, buzlu su; dışı çıtır içi yumuşak, sulu; elle bütün yenir; Tatar kökenli)", name:"Enes Vardar", rank:"2. (çıkarım)", note:"Şefler: 'son dönemin en iyi iki pidesi' (Enes ve Armağan). 2.'lik çıkarım — son ikiye Enes ve Armağan kaldı, Armağan kazandı."},
      {dish:"Soslu pide (alt: soğan + domates + bol tereyağı; kavurma — antrikotu kendisi tereyağında haşladı — pastırma, sucuk, kaşar, yumurta sarısı)", name:"Muhammed Yahya Haliloğlu", rank:"3.", note:"Biraz kuru olmasına rağmen işçilik, kenarlar ve üç pide de lezzetli."},
      {dish:"Karışık 3 bölümlü pide (kuşbaşılı + kavurmalı kaşarlı + sucuklu yumurtalı)", name:"Tolga Çakuş", rank:"4.", note:"Sucuklu-yumurtalı orta bölüm şefleri şaşırttı, üst malzeme fazla, biraz ıslak; hamuru çok iyi."},
      {dish:"Sütlü peynirli ev pidesi (beyaz peynir + kaşar, süt, soğan, kapya biber, maydanoz, kuru nane; saçta yapılan çökelekli börek usulü)", name:"Şükran Boyraz", rank:"5.", note:"Hiç protein yok — ilk 6'nın en ilginç pidesi; hamur biraz kalın/az pişmiş."},
      {dish:"Develi cıvıklısı (kıyma, kapya biber, yeşil biber, domates, karabiber, pul biber, tuz)", name:"Nurten Ocak Tamer", rank:"6.", note:"Kıyma cıvıklı için çok fazla (az, küçük kuşbaşı ve sulu olmalı); tabanı ince ve çıtır — övüldü."},
      {dish:"Kavurmalı kaşarlı pide (kapya + yeşil biber, pul/karabiber)", name:"Şadi Altınay", rank:"—", note:"Lezzetli ama biraz kuru."},
      {dish:"Kıymalı, kuşbaşılı, soğanlı, biberli, maydanozlu pide", name:"Elif Nilay Özgen", rank:"—", note:"İçi çok iyi, hamur yumuşak; ama bir köşesini kesmiş."},
      {dish:"Kuşbaşılı pide + karamelize soğan (antrikot, kaşar, yumurta sarısı, yeşil/kırmızı biber)", name:"Tolgahan Özden", rank:"—", note:""},
      {dish:"Sade kuşbaşılı pide (domates, biber, hepsi çiğden)", name:"Burçin Oğuz", rank:"—", note:""},
      {dish:"Kıymalı kaşarlı pide (sütlü mayalı hamur; kıyma kuru, altı iyi)", name:"Kübra Satılmış", rank:"—", note:""},
      {dish:"Urfa pidesi (domates ve biber ayrı zırhta, domatesin suyu çektirilmiş, kenarlara bol kaşar, kalın hamur)", name:"Eyüp Can Güneş", rank:"—", note:"Hamur kalın, biraz daha pişebilirdi, fazla beyaz."},
      {dish:"Kıymalı soğanlı pide, altında beyaz peynir + pastırma + yumurta (kendine üçüncü pide de yaptı)", name:"Ayşe Nur İnal", rank:"—", note:"Pidesinde kusur yok, sadece ilk ikiden iyi değil."},
      {dish:"Kıymalı kaşarlı pide (domates, soğan, biber, maydanoz, kaşar hafif çıtır)", name:"Bahar Kaya", rank:"—", note:"Harcı güzel, hamur ince değil."}
    ]}],
  notes:["Takım seçimi: Armağan Şükran'ı Kırmızı kaptan seçti (sürpriz — genelde takım arkadaşı olarak seçerdi). Armağan'ın seçim sırası: 1. Muhammed, 2. Tolga, 3. Kübra, 4. Şadi, 5. Tolgahan, 6. Ayşe. Şükran'ın seçim sırası: 1. Burçin, 2. Nurten, 3. Eyüp Can, 4. Nilay, 5. Enes.","Bahar Kaya: 13 haftadır potaya hiç girmedi — MasterChef rekoru (önceki rekor Onur, 11 hafta).","Instagram takipçi sayıları (bölümde söylendi): Muhammed 114.000, Eyüp Can 50.500, Ayşe 41.000, Enes 35.500, Armağan 28.500, Bahar 26.600, Tolga 25.500, Nurten 18.000, Burçin 14.000, Kübra 14.000, Nilay 13.600, Şadi 13.000, Şükran 6.000, Tolgahan 5.500.","Not: ASR bir yerde bu kaptanlığı '14. hafta' diye geçiriyor; hafta numaralandırmamız değişmedi (13. hafta, 2–8 Kasım)."]
},
{
  id:"2026-11-01", date:"1 Kasım 2026", weekday:"Pazar", week:"12. Hafta", title:"Eleme — Hasan Alp Elendi", source:"web",
  summary:"Elenen: Hasan Alp Karabacak (son ikiye Armağan Kırant ile kaldı).",
  pot:["Nurten Ocak Tamer","Enes Vardar","Şükran Boyraz","Hasan Alp Karabacak","Armağan Kırant","Muhammed Yahya Haliloğlu"],
  eliminated:"Hasan Alp Karabacak",
  games:[{name:"Eleme — 1. etap: yaratıcılık tabağı", detail:"Ürün bilinmiyor — transkript bekleniyor. Enes ve Muhammed kurtuldu.", winner:"Enes Vardar, Muhammed Yahya Haliloğlu kurtuldu"},
    {name:"Eleme — 2. etap: Kalamar Dolması ve Sucuklu Tereyağında Deniz Tarağı (Somer Şef imza tabağı)", detail:"Nurten ve Şükran kurtuldu; son iki Armağan–Hasan Alp.", winner:"Nurten Ocak Tamer, Şükran Boyraz kurtuldu"}]
},
{
  id:"2026-10-31", date:"31 Ekim 2026", weekday:"Cumartesi", week:"12. Hafta", title:"4. (Son) Takım Oyunu — 7 Bölge 7 Yemek", source:"web",
  summary:"Takım oyunu: 7 bölge 7 yemek — Mavi kazandı 4-3. Bireysel: sıfır atık konsepti yaratıcı yemek; kazanan Tolgahan (bu haftaki 3. bireysel dokunulmazlığı).",
  games:[{name:"Takım oyunu — 7 bölge 7 yemek", winner:"Mavi Takım 4-3", score:"Mavi 4 – 3 Kırmızı",
    dishes:[
      {dish:"Mahluta çorbası", winner:"Mavi Takım"},
      {dish:"Çerkes tavuğu", winner:"Mavi Takım"},
      {dish:"Patlıcan çırpması", winner:"Mavi Takım"},
      {dish:"Sembusek", winner:"Mavi Takım"},
      {dish:"Ayva dolması", winner:"Mavi Takım"},
      {dish:"Harput köftesi", winner:"Mavi Takım"},
      {dish:"Zerde", winner:"Mavi Takım"}
    ], detail:"Hangi yemeği kimin yaptığı webde yazmıyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık — sıfır atık konsepti yaratıcı yemek", winner:"Tolgahan Özden (final Armağan–Tolgahan)"},
  candidates:["Armağan Kırant — oylama yapılmadı; Kırmızı'da potaya girmeyen tek isim Tolgahan'dı, o da dokunulmazlığı alınca kalan Armağan otomatik potaya girdi."],
  pot:["Nurten Ocak Tamer","Enes Vardar","Şükran Boyraz","Hasan Alp Karabacak","Armağan Kırant","Muhammed Yahya Haliloğlu"]
},
{
  id:"2026-10-30", date:"30 Ekim 2026", weekday:"Cuma", week:"12. Hafta", title:"Ödül Oyunu (Dokunulmazlık Değil)", source:"web",
  summary:"Takım: Lübnan mutfağı 9 çeşit — Mavi kazandı. Bireysel: burgu peyniriyle yaratıcı tabak; kazanan Ayşe — 100.000 TL.",
  games:[{name:"Takım oyunu — Lübnan mutfağı, 9 çeşit", winner:"Mavi Takım", detail:"Menüdeki yemekler webde yazmıyor — transkript bekleniyor."}],
  immunity:{name:"Ödül oyunu — burgu peyniriyle yaratıcı tabak", winner:"Ayşe Nur İnal — 100.000 TL (final Şadi–Ayşe)"}
},
{
  id:"2026-10-29", date:"29 Ekim 2026", weekday:"Perşembe", week:"12. Hafta", title:"3. Takım Oyunu — Cumhuriyet Bayramı Gala Yemeği", source:"web",
  summary:"Takım: Cumhuriyet Bayramı gala yemeği, 7 çeşit — Mavi kazandı. Bireysel: yeşil mercimekle yaratıcı tabak; kazanan Tolgahan.",
  games:[{name:"Takım oyunu — Cumhuriyet Bayramı gala yemeği, 7 çeşit", winner:"Mavi Takım",
    dishes:[
      {dish:"Kremalı mantar çorbası", winner:"Mavi Takım"},
      {dish:"Enginar üzeri fava", winner:"Mavi Takım"},
      {dish:"Selanik usulü ıspanaklı börek", winner:"Mavi Takım"},
      {dish:"Kremalı levrek fileto", winner:"Mavi Takım"},
      {dish:"Kuzu küşleme-beğendi", winner:"Mavi Takım"},
      {dish:"Mantar soslu dana fileto", winner:"Mavi Takım"},
      {dish:"Meyveli elmasiye", winner:"Mavi Takım"}
    ], detail:"Hangi yemeği kimin yaptığı webde yazmıyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık — yeşil mercimekle yaratıcı tabak", duration:"45 dk", winner:"Tolgahan Özden"},
  candidates:["Armağan Kırant ve Muhammed Yahya Haliloğlu — oylama yapılmadı; Kırmızı'da Nurten, Enes, Şükran, Hasan Alp zaten potadaydı, Tolgahan dokunulmazlığı alınca kalan iki isim otomatik potaya girdi."]
},
{
  id:"2026-10-28", date:"28 Ekim 2026", weekday:"Çarşamba", week:"12. Hafta", title:"2. Takım Oyunu — Düğün Menüsü", source:"web",
  summary:"Takım oyunu 45 dakika — Mavi kazandı (tadımı 2025 yarışmacılarından konuk jüri yaptı). Bireysel: tavuk bagetle yaratıcı yemek; kazanan Tolgahan.",
  games:[{name:"Takım oyunu — düğün menüsü", duration:"45 dk", winner:"Mavi Takım",
    dishes:[
      {dish:"Düğün çorbası", winner:"Mavi Takım"},
      {dish:"Kabak borani", winner:"Mavi Takım"},
      {dish:"Bardak altı", winner:"Mavi Takım"},
      {dish:"İçli köfte", winner:"Mavi Takım"},
      {dish:"Kilis tava", winner:"Mavi Takım"},
      {dish:"Şiş köfte", winner:"Mavi Takım"},
      {dish:"Profiterol", winner:"Mavi Takım"}
    ], detail:"Hangi yemeği kimin yaptığı webde yazmıyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık — tavuk bagetle yaratıcı yemek", duration:"45 dk", winner:"Tolgahan Özden (final Armağan–Tolgahan)"},
  candidates:["Şükran Boyraz — 3. aday (Tolgahan'ın seçimi)","Hasan Alp Karabacak — 4. aday (oylama)"],
  pot:["Nurten Ocak Tamer","Enes Vardar","Şükran Boyraz","Hasan Alp Karabacak"]
},
{
  id:"2026-10-27", date:"27 Ekim 2026", weekday:"Salı", week:"12. Hafta", title:"1. Takım Oyunu — Patlıcan Yemekleri", source:"web",
  summary:"Takım: patlıcan yemekleri konsepti — Mavi kazandı (oy birliği). Bireysel: lavaş kebabı, 40 dk; kazanan Muhammed.",
  games:[{name:"Takım oyunu — patlıcan yemekleri", winner:"Mavi Takım (oy birliği)", detail:"Menüdeki yemekler bilinmiyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık — lavaş kebabı", duration:"40 dk", winner:"Muhammed Yahya Haliloğlu (final Nurten–Muhammed)"},
  candidates:["Nurten Ocak Tamer — 1. aday (Muhammed'in seçimi)","Enes Vardar — 2. aday (oylama eşitliği Enes/Şükran; kaptan Hasan Alp Enes'i seçti)"]
},
{
  id:"2026-10-26", date:"26 Ekim 2026", weekday:"Pazartesi", week:"12. Hafta", title:"Kaptanlık", source:"web",
  summary:"Kübra testi kebabı (1 saat) ile Mavi kaptan oldu; Hasan Alp'i Kırmızı kaptan seçti.",
  captains:{blue:"Kübra Satılmış", red:"Hasan Alp Karabacak"},
  teams:{blue:["Kübra","Ayşe","Tolga","Burçin","Eyüp Can","Nilay","Şadi","Bahar"], red:["Hasan Alp","Muhammed","Şükran","Nurten","Enes","Armağan","Tolgahan"]},
  games:[{name:"Kaptanlık oyunu — testi kebabı", duration:"1 saat", winner:"Kübra Satılmış (Mavi kaptan)", detail:"Hasan Alp Karabacak Kırmızı kaptan seçildi."}],
  notes:["elele.com.tr'nin takım listesi Kübra'yı atlayıp Bahar'ı Mavi'de gösteriyor — hatalı sayıldı; 15 kişilik kadro hesabı Mavi'nin 8 kişi olduğunu gerektiriyor."]
}
];

/* Hafta 11–1 ve ana kadro seçimleri — EPISODES dizisine eklenir (en son önce sıralı) */
EPISODES.push(
{
  id:"2026-10-25", date:"25 Ekim 2026", weekday:"Pazar", week:"11. Hafta", title:"Eleme — Emre Elendi", source:"web",
  summary:"Elenen: Emre İrkilmez (son ikiye Ayşe ile kaldı).",
  pot:["Enes Vardar","Emre İrkilmez","Ayşe Nur İnal","Eyüp Can Güneş","Elif Nilay Özgen","Burçin Oğuz","Tolgahan Özden","Hasan Alp Karabacak"],
  eliminated:"Emre İrkilmez",
  games:[{name:"Eleme — 1. etap: siyah sarımsaklı özgün tabaklar", detail:"Enes, Nilay, Burçin, Tolgahan kurtuldu.", winner:"Enes Vardar, Elif Nilay Özgen, Burçin Oğuz, Tolgahan Özden kurtuldu"},
    {name:"Eleme — 2. etap: Crespelle (Danilo Şef imza tabağı)", detail:"Hasan Alp, sonra Eyüp Can kurtuldu; son iki Emre–Ayşe.", winner:"Hasan Alp Karabacak, Eyüp Can Güneş kurtuldu"}]
},
{
  id:"2026-10-24", date:"24 Ekim 2026", weekday:"Cumartesi", week:"11. Hafta", title:"4. (Son) Takım Oyunu", source:"web",
  summary:"Takım: 9 yemek, 45 dk — Mavi kazandı. Bireysel kazanan Nilay. (23 Ekim'de bölüm yayınlanmadı.)",
  games:[{name:"Takım oyunu — 9 yemek", duration:"45 dk", winner:"Mavi Takım", detail:"Menü bilinmiyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık", winner:"Elif Nilay Özgen"},
  candidates:["Tolgahan Özden — 7. aday (Nilay'ın seçimi)","Hasan Alp Karabacak — 8. aday (oylama)"],
  pot:["Enes Vardar","Emre İrkilmez","Ayşe Nur İnal","Eyüp Can Güneş","Elif Nilay Özgen","Burçin Oğuz","Tolgahan Özden","Hasan Alp Karabacak"]
},
{
  id:"2026-10-22", date:"22 Ekim 2026", weekday:"Perşembe", week:"11. Hafta", title:"3. Takım Oyunu", source:"web",
  summary:"Takım oyunu — Mavi kazandı. Bireysel kazanan Enes — dikkat: Enes zaten haftanın 1. adayıydı; adayken bireysel dokunulmazlık kazandı ama potada kaldı.",
  games:[{name:"Takım oyunu", winner:"Mavi Takım", detail:"Yemek bilinmiyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık", winner:"Enes Vardar"},
  candidates:["Elif Nilay Özgen — 5. aday (Enes'in seçimi)","Burçin Oğuz — 6. aday (oylama)"],
  pot:["Enes Vardar","Emre İrkilmez","Ayşe Nur İnal","Eyüp Can Güneş","Elif Nilay Özgen","Burçin Oğuz"]
},
{
  id:"2026-10-21", date:"21 Ekim 2026", weekday:"Çarşamba", week:"11. Hafta", title:"2. Takım Oyunu", source:"web",
  summary:"Takım oyunu — Kırmızı kazandı (konukların oylarıyla). Bireysel kazanan Bahar.",
  games:[{name:"Takım oyunu", winner:"Kırmızı Takım", detail:"Yemek bilinmiyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık", winner:"Bahar Kaya (Mavi)"},
  candidates:["Ayşe Nur İnal — 3. aday (Bahar'ın seçimi)","Eyüp Can Güneş — 4. aday (oylama eşitliği sonrası kaptan Şadi'nin seçimi)"],
  notes:["gazetebirlik.com'un 21 Ekim yazısı bireysel kazananı Burçin, adayları Enes/Emre/Ayşe/Eyüp Can diye veriyor — 20 Ekim bilgileriyle karışmış, hatalı sayıldı."]
},
{
  id:"2026-10-20", date:"20 Ekim 2026", weekday:"Salı", week:"11. Hafta", title:"1. Takım Oyunu — Düello", source:"web",
  summary:"Takım oyunu düello formatı — Mavi kazandı. Bireysel kazanan Burçin (Kırmızı).",
  games:[{name:"Takım oyunu — düello formatı", winner:"Mavi Takım", detail:"Yemek bilinmiyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık", winner:"Burçin Oğuz (Kırmızı)"},
  candidates:["Enes Vardar — 1. aday (Burçin'in seçimi)","Emre İrkilmez — 2. aday (oylama)"]
},
{
  id:"2026-10-19", date:"19 Ekim 2026", weekday:"Pazartesi", week:"11. Hafta", title:"Kaptanlık", source:"web",
  summary:"Şadi tiramisu ile Mavi kaptan oldu; Enes'i Kırmızı kaptan seçti.",
  captains:{blue:"Şadi Altınay", red:"Enes Vardar"},
  teams:{blue:["Şadi","Bahar","Muhammed","Tolga","Eyüp Can","Kübra","Ayşe"], red:["Enes","Armağan","Burçin","Nilay","Emre","Tolgahan","Hasan Alp"]},
  games:[{name:"Kaptanlık oyunu — tiramisu", winner:"Şadi Altınay (Mavi kaptan)", detail:"Enes Vardar Kırmızı kaptan seçildi."}],
  notes:["Nurten ve Şükran'dan hangisi hangi takımdaydı — kaynaklarda ikisi de iki listede geçiyor, teyit edilecek."]
},
{
  id:"2026-10-18", date:"18 Ekim 2026", weekday:"Pazar", week:"10. Hafta", title:"Eleme — Şiringül Elendi", source:"web",
  summary:"Elenen: Şiringül Kaya (son ikiye Nurten ile kaldı).",
  pot:["Şiringül Kaya","Hasan Alp Karabacak","Burçin Oğuz","Nurten Ocak Tamer","Tolga Çakuş","Tolgahan Özden","Şükran Boyraz","Enes Vardar"],
  eliminated:"Şiringül Kaya",
  games:[{name:"Eleme — 1. etap", detail:"Bilinmiyor — transkript bekleniyor.", winner:"bilinmiyor"},
    {name:"Eleme — 2. etap: Uskumru Tarator (Mehmet Şef imza tabağı)", winner:"bilinmiyor"}]
},
{
  id:"2026-10-17", date:"17 Ekim 2026", weekday:"Cumartesi", week:"10. Hafta", title:"4. (Son) Takım Oyunu — Doğu Anadolu Yemekleri", source:"web",
  summary:"Takım: Doğu Anadolu yemekleri konsepti — Kırmızı kazandı. Bireysel kazanan Muhammed (Mavi kaptanı).",
  games:[{name:"Takım oyunu — Doğu Anadolu yemekleri", winner:"Kırmızı Takım", detail:"Menüdeki yemekler bilinmiyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık", winner:"Muhammed Yahya Haliloğlu (Mavi kaptanı)"},
  candidates:["Şükran Boyraz — 7. aday (Muhammed'in seçimi)","Enes Vardar — 8. aday (oylama eşitliği Şadi/Enes; kaptan Muhammed Enes'i seçti)"],
  pot:["Şiringül Kaya","Hasan Alp Karabacak","Burçin Oğuz","Nurten Ocak Tamer","Tolga Çakuş","Tolgahan Özden","Şükran Boyraz","Enes Vardar"]
},
{
  id:"2026-10-16", date:"16 Ekim 2026", weekday:"Cuma", week:"10. Hafta", title:"3. Takım Oyunu — Tatlı Menüsü", source:"web",
  summary:"Takım: tatlı menüsü — Mavi kazandı (2-1). Bireysel: banduma, 45 dk; kazanan Ayşe (final Ayşe–Tolga).",
  games:[{name:"Takım oyunu — tatlı menüsü", duration:"1 saat", winner:"Mavi Takım (2-1)",
    dishes:[
      {dish:"Ayva Tatlısı", winner:"Mavi Takım"},
      {dish:"Peche Melba", winner:"Mavi Takım"},
      {dish:"Mango Sticky Rice", winner:"Mavi Takım"},
      {dish:"Apple Pie", winner:"Mavi Takım"},
      {dish:"Lemon Meringue Pie", winner:"Mavi Takım"},
      {dish:"Zwetschgenkuchen Mit Streuseln", winner:"Mavi Takım"},
      {dish:"İncir Uyutması", winner:"Mavi Takım"},
      {dish:"Kabak Tatlısı", winner:"Mavi Takım"},
      {dish:"Muzlu Rulo Pasta", winner:"Mavi Takım"}
    ], detail:"Hangi tatlıyı kimin yaptığı webde yazmıyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık — banduma", duration:"45 dk", winner:"Ayşe Nur İnal (final Ayşe–Tolga)"},
  candidates:["Tolga Çakuş — 5. aday (Ayşe'nin seçimi)","Tolgahan Özden — 6. aday (oylama)"],
  pot:["Şiringül Kaya","Hasan Alp Karabacak","Burçin Oğuz","Nurten Ocak Tamer","Tolga Çakuş","Tolgahan Özden"]
},
{
  id:"2026-10-15", date:"15 Ekim 2026", weekday:"Perşembe", week:"10. Hafta", title:"2. Takım Oyunu — İspanyol Yemekleri", source:"web",
  summary:"Takım: İspanyol yemekleri — Mavi kazandı. Bireysel kazanan Tolga.",
  games:[{name:"Takım oyunu — İspanyol yemekleri", winner:"Mavi Takım",
    dishes:[
      {dish:"Gazpachuelo Malagueno", winner:"Mavi Takım"},
      {dish:"Escalivada", winner:"Mavi Takım"},
      {dish:"Mejillones a La Marinera", winner:"Mavi Takım"},
      {dish:"Tortilla Espanola", winner:"Mavi Takım"},
      {dish:"Arroz Con Polo", winner:"Mavi Takım"},
      {dish:"Atun Encebollado", winner:"Mavi Takım"},
      {dish:"Pollo Al Ajillo", winner:"Mavi Takım"},
      {dish:"Estofado De Ternera", winner:"Mavi Takım"},
      {dish:"Leche Frita", winner:"Mavi Takım"}
    ], detail:"Hangi yemeği kimin yaptığı webde yazmıyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık", winner:"Tolga Çakuş"},
  candidates:["Burçin Oğuz — 3. aday (Tolga'nın seçimi)","Nurten Ocak Tamer — 4. aday (oylama eşitliği Nurten/Kübra; kaptan Kübra Nurten'i seçti)"],
  pot:["Şiringül Kaya","Hasan Alp Karabacak","Burçin Oğuz","Nurten Ocak Tamer"]
},
{
  id:"2026-10-13", date:"13 Ekim 2026", weekday:"Salı", week:"10. Hafta", title:"1. Takım Oyunu — Kızartmalar", source:"web",
  summary:"Takım: 'Kızartmalar' konsepti — Kırmızı kazandı (oy birliği). Bireysel: Fesenjan (İran mutfağı), 45 dk; kazanan Şadi. (14 Ekim'de dokunulmazlık oyunu bulunamadı.)",
  games:[{name:"Takım oyunu — Kızartmalar", duration:"45 dk", winner:"Kırmızı Takım (oy birliği)",
    dishes:[
      {dish:"Edirne tava ciğeri", winner:"Kırmızı Takım"},
      {dish:"Kayseri yağ mantısı", winner:"Kırmızı Takım"},
      {dish:"calamari fritti", winner:"Kırmızı Takım"},
      {dish:"tempura sebze ve karides", winner:"Kırmızı Takım"},
      {dish:"dana eti katsu", winner:"Kırmızı Takım"},
      {dish:"fried sardines", winner:"Kırmızı Takım"},
      {dish:"ton mun goong", winner:"Kırmızı Takım"},
      {dish:"karipap", winner:"Kırmızı Takım"},
      {dish:"jalabi", winner:"Kırmızı Takım"}
    ], detail:"Hangi yemeği kimin yaptığı webde yazmıyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık — Fesenjan (İran mutfağı)", duration:"45 dk", winner:"Şadi Altınay"},
  candidates:["Şiringül Kaya — 1. aday (Şadi'nin seçimi)","Hasan Alp Karabacak — 2. aday (oylama)"]
},
{
  id:"2026-10-12", date:"12 Ekim 2026", weekday:"Pazartesi", week:"10. Hafta", title:"Kaptanlık", source:"web",
  summary:"Muhammed cağ kebabı ile Mavi kaptan oldu; Kübra'yı Kırmızı kaptan seçti.",
  captains:{blue:"Muhammed Yahya Haliloğlu", red:"Kübra Satılmış"},
  teams:{blue:["Muhammed","Armağan","Nilay","Eyüp Can","Enes","Şükran","Şiringül","Hasan Alp","Şadi"], red:["Kübra","Ayşe","Tolgahan","Emre","Burçin","Tolga","Bahar","Nurten"]},
  games:[{name:"Kaptanlık oyunu — cağ kebabı", winner:"Muhammed Yahya Haliloğlu (Mavi kaptan)", detail:"Kübra Satılmış Kırmızı kaptan seçildi."}],
  notes:["Ayşe/Şadi'nin takım yerleşimi kaynaklarda çelişiyor — teyit edilecek."]
},
{
  id:"2026-10-11", date:"11 Ekim 2026", weekday:"Pazar", week:"9. Hafta", title:"Eleme — Buse Elendi", source:"web",
  summary:"Elenen: Buse Baştan (son ikiye Kübra ile kaldı). 5–8 Ekim dokunulmazlık oyunları araştırılmadı.",
  pot:["Nurten Ocak Tamer","Ayşe Nur İnal","Elif Nilay Özgen","Buse Baştan","Hasan Alp Karabacak","Şadi Altınay","Enes Vardar","Kübra Satılmış"],
  eliminated:"Buse Baştan",
  games:[{name:"Eleme — 1. etap: mandalina yaratıcılık", detail:"Ayşe, Nilay, Hasan Alp, Enes kurtuldu.", winner:"Ayşe Nur İnal, Elif Nilay Özgen, Hasan Alp Karabacak, Enes Vardar kurtuldu"},
    {name:"Eleme — 2. etap: Flying Noodles / Uçan Erişte (Somer Şef)", detail:"Nurten en iyi, sonra Şadi; Buse 2 teknik hatayla elendi.", winner:"Nurten Ocak Tamer en iyi"}]
},
{
  id:"2026-10-04", date:"4 Ekim 2026", weekday:"Pazar", week:"9. Hafta", title:"Eleme — Batuhan Elendi", source:"web",
  summary:"Elenen: Batuhan Nazikoğlu (son ikiye Buse ile kaldı). 28 Eylül–3 Ekim oyunları araştırılmadı.",
  pot:["Kübra Satılmış","Ayşe Nur İnal","Şiringül Kaya","Buse Baştan","Batuhan Nazikoğlu","Nurten Ocak Tamer","Şükran Boyraz","Tolgahan Özden"],
  eliminated:"Batuhan Nazikoğlu",
  games:[{name:"Eleme — 2. etap: Vitello Tonnato (Danilo Şef)", detail:"Şükran ilk kurtulan.", winner:"Şükran Boyraz ilk kurtulan"}]
},
{
  id:"2026-09-30", date:"30 Eylül 2026", weekday:"Çarşamba", week:"8. Hafta", title:"Haftanın İlk Oyunu — Sokak Lezzetleri (kısmi)", source:"web",
  summary:"Takım oyunu: sokak lezzetleri — Mavi 5-4. Bireysel: Emre — meyveli tart (final vs Tolgahan).",
  games:[{name:"Takım oyunu — sokak lezzetleri", winner:"Mavi Takım 5-4", detail:"Menü bilinmiyor — transkript bekleniyor."}],
  immunity:{name:"Bireysel dokunulmazlık — meyveli tart", winner:"Emre İrkilmez (final Emre–Tolgahan)"},
  candidates:["Kübra Satılmış — 1. aday (Emre'nin seçimi)","Ayşe Nur İnal — 2. aday (oylama)"]
}
);

/* Hafta 7–1 (kompakt hafta kartları) ve ana kadro seçim günleri */
EPISODES.push(
{
  id:"2026-09-27", date:"27 Eylül 2026", weekday:"Pazar", week:"7. Hafta", title:"Eleme — Recep Elendi", source:"web",
  summary:"Hafta 7: kaptanlar Şükran (Mavi, lahmacun) / Şiringül (Kırmızı). 22 Eyl: acı kullanılan dünya mutfağı yemekleri — Mavi kazandı; bireysel Burçin (köfteli İslim kebabı), Recep'i potaya gönderdi. 26 Eyl: yöresel börek çeşitleri — Kırmızı kazandı; bireysel Nilay, Muhammed'i aday gösterdi, oylamayla son aday Ayşe oldu. 23–25 Eyl oyunları bilinmiyor.",
  captains:{blue:"Şükran Boyraz", red:"Şiringül Kaya"},
  teams:{blue:["Şükran","Bahar","Muhammed","Nilay","Emre","Eyüp Can","Ayşe","Tolgahan","Tolga"], red:["Şiringül","Armağan","Hasan Alp","Batuhan","Enes","Burçin","Recep","Kübra","Nurten"]},
  pot:["Recep Batur","Armağan Kırant","Eyüp Can Güneş","Elif Nilay Özgen","Enes Vardar","Hasan Alp Karabacak","Muhammed Yahya Haliloğlu","Ayşe Nur İnal"],
  eliminated:"Recep Batur",
  games:[{name:"Eleme — final: Dana Şaşırma (Mehmet Şef imza tabağı)", winner:"Recep Batur elendi"}],
  notes:["Bu haftanın yemek listesi transkript bekleniyor — takım oyunu menüleri webde yazmıyor."]
},
{
  id:"2026-09-20", date:"20 Eylül 2026", weekday:"Pazar", week:"6. Hafta", title:"Eleme — Faruk Elendi", source:"web",
  summary:"Hafta 6: kaptanlar Armağan (Mavi, profiterol) / Bahar (Kırmızı). 15 Eyl: 1. oyun — Kırmızı kazandı; potaya ilk 2 aday Şiringül, Tolgahan. 16 Eyl: düello — Mavi kazandı; bireysel Kübra, Faruk'u seçti, oylamayla 4. aday Şadi oldu. 18 Eyl: 80'ler yemekleri — Mavi kazandı; bireysel Burçin, Tolga'yı seçti. 17 ve 19 Eyl oyunları bilinmiyor.",
  captains:{blue:"Armağan Kırant", red:"Bahar Kaya"},
  teams:{blue:["Armağan","Muhammed","Nurten","Enes","Batuhan","Ayşe","Tolgahan","Şiringül","Recep","Emre Can"], red:["Bahar","Nilay","Şükran","Tolga","Hasan Alp","Eyüp Can","Burçin","Faruk","Kübra","Şadi"]},
  pot:["Şiringül Kaya","Tolgahan Özden","Faruk Garip","Şadi Altınay","Tolga Çakuş"],
  eliminated:"Faruk Garip",
  games:[{name:"Eleme — Tur 1: tahin", detail:"Final: ördek bastilla — Faruk vs Tolgahan.", winner:"Faruk Garip elendi"}],
  notes:["Bu haftanın yemek listesi transkript bekleniyor.","Düzeltme (6 Kas 2026): web kaynağındaki 9 kişilik pota listesi hatalıydı — Bahar, Kübra, Nurten, Ayşe çıkarıldı. 2 Kasım transkriptinde şefler Bahar'ın 13 haftadır hiç potaya girmediğini söylüyor; Kübra o hafta bireysel dokunulmazlık kazanmıştı."]
},
{
  id:"2026-09-13", date:"13 Eylül 2026", weekday:"Pazar", week:"5. Hafta", title:"Eleme — Cansu Elendi", source:"web",
  summary:"Hafta 5: kaptanlar Tolga (Mavi, yağlama) / Şadi (Kırmızı). 8 Eyl: balık yemekleri — Kırmızı kazandı; bireysel Bahar (helva-i hakani), Cansu'yu seçti, oylamayla 2. aday Nilay oldu. 9 Eyl: ödül oyunu — Kırmızı 5-4; ödülü Tolgahan kazandı (final Tolgahan–Eyüp Can). 11 Eyl: Hindistan cevizi teması — Mavi kazandı; bireysel Batuhan (patlıcan), Recep'i seçti, oylamayla 6. aday Şadi oldu. 9–10 Eyl bireysel oyunları bilinmiyor.",
  captains:{blue:"Tolga Çakuş", red:"Şadi Altınay"},
  teams:{blue:["Tolga","Bahar","Şükran","Burçin","Kübra","Nurten","Şiringül","Cansu","Nilay","Ayşe"], red:["Şadi","Eyüp Can","Tolgahan","Hasan Alp","Emre","Recep","Muhammed","Enes","Armağan","Batuhan"]},
  pot:["Cansu Şöhret","Elif Nilay Özgen","Tolgahan Özden","Emre İrkilmez","Recep Batur","Şadi Altınay"],
  eliminated:"Cansu Şöhret",
  games:[{name:"Eleme — Tur 1: mürdüm eriği yaratıcılık", detail:"Final: filetto di manzo con purè di patate (Danilo Şef) — Cansu vs Emre.", winner:"Cansu Şöhret elendi"}],
  notes:["Pota sayısı kaynaklarda çelişiyor (6 vs 8) — teyit edilecek.","8 Eyl balık menüsü ve 11 Eyl Hindistan cevizi menüsü fan/tarif hesabından, teyit edilecek: balık — Balık Çorbası, Levrek Marin, Palamut Pilaki, Mantarlı Karides Güveç, Hamsi Tava, Kırlangıç Buğulama, Kalamar Tava, Kofana Izgara, Balık Ekmek – Turşu Suyu; Hindistan cevizi — Kokoda, Tom Kha Gai, Jerk Chicken and Rice and Peas, Sri Lanka Coconut Fish Curry, Beef Kare-Kare, Moqueca Baiana Karides, Massaman Beef Curry, Dulce de Coco, Coconut Lime Cheesecake."]
},
{
  id:"2026-09-06", date:"6 Eylül 2026", weekday:"Pazar", week:"4. Hafta", title:"Eleme — Koray Elendi", source:"web",
  summary:"Hafta 4: kaptanlar Eyüp Can (Mavi) / Cansu (Kırmızı). 31 Ağu: bütün kuzu / kuzu yemekleri — kazanan bilinmiyor. 2 Eyl: paella çeşitleri (İspanya) — Mavi kazandı; bireysel Armağan (incir), Şükran'ı potaya gönderdi, oylamayla 2. aday Recep oldu. 3–5 Eyl oyunları bilinmiyor.",
  captains:{blue:"Eyüp Can Güneş", red:"Cansu Şöhret"},
  pot:["Muhammed Yahya Haliloğlu","Koray Saygı","Şükran Boyraz","Emre İrkilmez","Şadi Altınay","Cansu Şöhret","Şiringül Kaya","Nurten Ocak Tamer"],
  eliminated:"Koray Saygı",
  games:[{name:"Eleme — final: Emre vs Koray", winner:"Koray Saygı elendi"}],
  notes:["31 Ağu kuzu oyunu sonucunun tarihi belirsiz — resmî Instagram 1 Eyl'de 'Mavi kazandı' dedi.","2 Eyl paella menüsü fan hesabından, teyit edilecek: Paella Valenciana, Paella de Marisco, Paella de Verduras, Paella de Bacalao y Coliflor, Arroz Negro.","Bu haftanın yemek listesi transkript bekleniyor."]
},
{
  id:"2026-08-30", date:"30 Ağustos 2026", weekday:"Pazar", week:"3. Hafta", title:"Eleme — Simge Elendi", source:"web",
  summary:"Hafta 3: kaptanlar Emre (Mavi, sütlaç) / Burçin (Kırmızı). 25 Ağu: 1. oyun — Kırmızı kazandı; bireysel Simge kazandı. 26–28 Ağu oyunları bilinmiyor.",
  captains:{blue:"Emre İrkilmez", red:"Burçin Oğuz"},
  teams:{blue:["Emre","Şadi","Nilay","Tolga","Kübra","Şükran","Hasan Alp","Recep","Simge","Ayşe"], red:["Burçin","Bahar","Armağan","Muhammed","Nurten","Eyüp Can","Şiringül","Enes","Batuhan","Koray"]},
  pot:["Şadi Altınay","Elif Nilay Özgen","Simge Çıtak","Ayşe Nur İnal","Recep Batur","Kübra Satılmış","Hasan Alp Karabacak","Şükran Boyraz"],
  eliminated:"Simge Çıtak",
  games:[{name:"Eleme — Tur 1: Simge, Kübra, Şükran, Recep 2. tura kaldı; final Simge vs Kübra", winner:"Simge Çıtak elendi"}],
  notes:["Bu haftanın yemek listesi transkript bekleniyor."]
},
{
  id:"2026-08-23", date:"23 Ağustos 2026", weekday:"Pazar", week:"2. Hafta", title:"Eleme — Gülbahar Elendi", source:"web",
  summary:"Hafta 2: kaptanlar Muhammed (Mavi, tepsi pizza) / Şadi (Kırmızı). 19 Ağu: 1. oyun — Kırmızı kazandı 6-3; bireysel Armağan, Ayşe'yi seçti, oylamayla 2. aday Koray oldu. 20 Ağu: zeytinyağlılar menüsü — Kırmızı kazandı; bireysel Hasan Alp (armutla yaratıcı tabak); potaya Gülbahar ve Simge girdi. 21–22 Ağu oyunları bilinmiyor.",
  captains:{blue:"Muhammed Yahya Haliloğlu", red:"Şadi Altınay"},
  pot:["Ayşe Nur İnal","Koray Saygı","Gülbahar Meşe","Simge Çıtak","Recep Batur","Enes Vardar","Şükran Boyraz","Armağan Kırant"],
  eliminated:"Gülbahar Meşe",
  games:[{name:"Eleme — Tur 1: patlıcan; final: Ricciola (Danilo Şef) — Gül vs Koray", winner:"Gülbahar Meşe elendi"}],
  notes:["Takım listeleri kaynaklar arasında çelişiyor — teyit edilecek.","Bu haftanın yemek listesi transkript bekleniyor."]
},
{
  id:"2026-08-16", date:"16 Ağustos 2026", weekday:"Pazar", week:"1. Hafta", title:"Eleme — Demirhan Elendi (Sezonun İlk Eleneni)", source:"web",
  summary:"Hafta 1: kaptanlar Burçin (Mavi, menemen) / Ayşe (Kırmızı). 11 Ağu: 1. oyun — Kırmızı kazandı; bireysel Nilay ile Burçin kendini potadan kurtaran isimler olarak geçiyor (tek kazanan mı, iki kişi mi belirsiz); 1. aday Batuhan, 2. aday (oylama) Demirhan oldu. 12–14 Ağu oyunları bilinmiyor.",
  captains:{blue:"Burçin Oğuz", red:"Ayşe Nur İnal"},
  teams:{blue:["Burçin","Batuhan","Bahar","Kübra","Tolga","Eyüp Can","Hasan Alp","Nilay","Demirhan"], red:["Ayşe","Koray","Gülbahar","Şükran","Simge","Enes","Muhammed","Armağan","Nurten","Şadi"]},
  pot:["Batuhan Nazikoğlu","Demirhan Ali Tekin","Burçin Oğuz","Elif Nilay Özgen","Kübra Satılmış","Tolga Çakuş","Simge Çıtak","Enes Vardar"],
  eliminated:"Demirhan Ali Tekin",
  games:[{name:"Eleme — final: Demirhan vs Enes", winner:"Demirhan Ali Tekin elendi"}],
  notes:["Kırmızı takım sayısı kaynaklarda çelişiyor (10 kişi / kaptan + 8) — teyit edilecek.","Bu haftanın yemek listesi transkript bekleniyor."]
},
{
  id:"2026-08-08", date:"8 Ağustos 2026", weekday:"Cumartesi", week:"Ana Kadro", title:"20. Önlük — Koray Saygı (Ana Kadro Tamamlandı)", source:"web",
  summary:"4. Grup son gün: Koray Saygı crème brûlée ile 20. ve son önlüğü aldı; ana kadro tamamlandı.",
  games:[{name:"Ana kadro seçimi — Tur 1: Şanlıurfa isotu yaratıcı tabak; Tur 2: crème brûlée", winner:"Koray Saygı — 20. önlük"}]
},
{
  id:"2026-08-07", date:"7 Ağustos 2026", weekday:"Cuma", week:"Ana Kadro", title:"19. Önlük — Armağan Kırant", source:"web",
  summary:"4. Grup: Tur 1 kuru fasulye ve pilav; Tur 2 asma yaprağını merkeze alan yaratıcı tabaklar (finalde İrem ile son ikiye kaldı).",
  games:[{name:"Ana kadro seçimi", winner:"Armağan Kırant — 19. önlük"}]
},
{
  id:"2026-08-06", date:"6 Ağustos 2026", weekday:"Perşembe", week:"Ana Kadro", title:"18. Önlük — Şükran Boyraz", source:"web",
  summary:"4. Grup: Tur 1 erikle yaratıcı tabak; Tur 2 sebzeli gyoza.",
  games:[{name:"Ana kadro seçimi", winner:"Şükran Boyraz — 18. önlük"}]
},
{
  id:"2026-08-05", date:"5 Ağustos 2026", weekday:"Çarşamba", week:"Ana Kadro", title:"17. Önlük — Bahar Kaya", source:"web",
  summary:"4. Grup: Tur 1 bal kabağı çorbası; Tur 2 levreği merkeze alan yaratıcı tabak.",
  games:[{name:"Ana kadro seçimi", winner:"Bahar Kaya — 17. önlük"}]
},
{
  id:"2026-08-04", date:"4 Ağustos 2026", weekday:"Salı", week:"Ana Kadro", title:"16. Önlük — Simge Çıtak", source:"web",
  summary:"4. Grup: Tur 1 havuçla yaratıcı tabak; Tur 2 pideli köfte.",
  games:[{name:"Ana kadro seçimi", winner:"Simge Çıtak — 16. önlük"}]
},
{
  id:"2026-08-02", date:"2 Ağustos 2026", weekday:"Pazar", week:"Ana Kadro", title:"15. Önlük — Gülbahar Meşe", source:"web",
  summary:"3. Grup: Tur 1 sumakla tabak; Final: ekler.",
  games:[{name:"Ana kadro seçimi", winner:"Gülbahar Meşe — 15. önlük"}],
  notes:["3 Ağustos'ta önlük verildiğine dair webde kayıt bulunamadı."]
},
{
  id:"2026-08-01", date:"1 Ağustos 2026", weekday:"Cumartesi", week:"Ana Kadro", title:"14. Önlük — Kübra Satılmış", source:"web",
  summary:"3. Grup: Tur 1 sebze güveci; Tur 2 yemek adı bilinmiyor (finalde Buse ile son ikiye kaldı).",
  games:[{name:"Ana kadro seçimi — Tur 1: sebze güveci; Tur 2: bilinmiyor", winner:"Kübra Satılmış — 14. önlük"}]
},
{
  id:"2026-07-31", date:"31 Temmuz 2026", weekday:"Cuma", week:"Ana Kadro", title:"13. Önlük — Ayşe Nur İnal", source:"web",
  summary:"3. Grup: Empanada (yalnızca Instagram özet hesabından — teyit edilecek). 2. tura kalanlar: Kübra, Ayşe, Gül, Tolgahan, Buse, Yaren.",
  games:[{name:"Ana kadro seçimi — Empanada (teyit edilecek)", winner:"Ayşe Nur İnal — 13. önlük"}]
},
{
  id:"2026-07-30", date:"30 Temmuz 2026", weekday:"Perşembe", week:"Ana Kadro", title:"12. Önlük — Muhammed Yahya Haliloğlu", source:"web",
  summary:"3. Grup: Önlük yemeği webde bulunamadı. (Düello: paella — önlük yemeği değil.)",
  games:[{name:"Ana kadro seçimi — yemek bilinmiyor", winner:"Muhammed Yahya Haliloğlu — 12. önlük"}]
},
{
  id:"2026-07-29", date:"29 Temmuz 2026", weekday:"Çarşamba", week:"Ana Kadro", title:"11. Önlük — Tolga Çakuş", source:"web",
  summary:"3. Grup: Tur 1 bezelye yaratıcı tabak; Final: Hatay usulü tepsi kebabı (40 dk; finalde Muhammed ile son ikiye kaldı).",
  games:[{name:"Ana kadro seçimi — Tur 1: bezelye yaratıcı tabak; Final: Hatay usulü tepsi kebabı", duration:"40 dk", winner:"Tolga Çakuş — 11. önlük"}]
},
{
  id:"2026-07-27", date:"27 Temmuz 2026", weekday:"Pazartesi", week:"Ana Kadro", title:"10. Önlük — Burçin Oğuz", source:"web",
  summary:"2. Grup: Tur 1 yenibahar yaratıcı tabak; Final: tiramisu (finalde Nesibe ile son ikiye kaldı).",
  games:[{name:"Ana kadro seçimi — Tur 1: yenibahar yaratıcı tabak; Final: tiramisu", winner:"Burçin Oğuz — 10. önlük"}]
},
{
  id:"2026-07-26", date:"26 Temmuz 2026", weekday:"Pazar", week:"Ana Kadro", title:"9. Önlük — Şadi Altınay", source:"web",
  summary:"2. Grup: Önlük yemeği webde bulunamadı. (İlk tur: modern sütlaç yorumu; düello: çoban yemeği — bunlar önlük yemeği değil.)",
  games:[{name:"Ana kadro seçimi — yemek bilinmiyor", winner:"Şadi Altınay — 9. önlük"}]
},
{
  id:"2026-07-25", date:"25 Temmuz 2026", weekday:"Cumartesi", week:"Ana Kadro", title:"8. Önlük — Nurten Ocak Tamer", source:"web",
  summary:"2. Grup: Tur 1 yenidünya yaratıcı tabak; Final: su böreği (50 dk).",
  games:[{name:"Ana kadro seçimi — Tur 1: yenidünya yaratıcı tabak; Final: su böreği", duration:"50 dk", winner:"Nurten Ocak Tamer — 8. önlük"}]
},
{
  id:"2026-07-24", date:"24 Temmuz 2026", weekday:"Cuma", week:"Ana Kadro", title:"7. Önlük — Demirhan Ali Tekin", source:"web",
  summary:"2. Grup: Önlük yemeği webde bulunamadı. Tur 1'i geçenler: Nesibe, Demirhan, Betül, Fatmanur, Burçin, Esra.",
  games:[{name:"Ana kadro seçimi — yemek bilinmiyor", winner:"Demirhan Ali Tekin — 7. önlük"}]
},
{
  id:"2026-07-23", date:"23 Temmuz 2026", weekday:"Perşembe", week:"Ana Kadro", title:"6. Önlük — Eyüp Can Güneş", source:"web",
  summary:"2. Grup ilk önlüğü: Tur 1 Ayşe Kadın fasulyesi + çalı fasulyesi yaratıcı tabak; Final: Altı Ezmeli Kebap.",
  games:[{name:"Ana kadro seçimi — Tur 1: Ayşe Kadın fasulyesi + çalı fasulyesi; Final: Altı Ezmeli Kebap", winner:"Eyüp Can Güneş — 6. önlük"}]
},
{
  id:"2026-07-21", date:"21 Temmuz 2026", weekday:"Salı", week:"Ana Kadro", title:"5. Önlük — Enes Vardar", source:"web",
  summary:"1. Grup: Tur 1 kimyonla yaratıcı tabak; Final: kazandibi (finalde Emre ile son ikiye kaldı).",
  games:[{name:"Ana kadro seçimi — Tur 1: kimyonla yaratıcı tabak; Final: kazandibi", winner:"Enes Vardar — 5. önlük"}]
},
{
  id:"2026-07-20", date:"20 Temmuz 2026", weekday:"Pazartesi", week:"Ana Kadro", title:"4. Önlük — Şiringül Kaya", source:"web",
  summary:"1. Grup: Tur 1 falafel; Tur 2 kuzu kulağını merkeze alan yaratıcı tabak.",
  games:[{name:"Ana kadro seçimi — Tur 1: falafel; Tur 2: kuzu kulağını merkeze alan yaratıcı tabak", winner:"Şiringül Kaya — 4. önlük"}]
},
{
  id:"2026-07-19", date:"19 Temmuz 2026", weekday:"Pazar", week:"Ana Kadro", title:"3. Önlük — Hasan Alp Karabacak", source:"web",
  summary:"1. Grup: Önlük yemeği webde bulunamadı — yalnızca 'şeflerin belirlediği yemek + yaratıcılık turu' yazıyor.",
  games:[{name:"Ana kadro seçimi — yemek bilinmiyor", winner:"Hasan Alp Karabacak — 3. önlük"}]
},
{
  id:"2026-07-18", date:"18 Temmuz 2026", weekday:"Cumartesi", week:"Ana Kadro", title:"2. Önlük — Elif Nilay Özgen", source:"web",
  summary:"1. Grup: Tur 1 Fransız usulü soğan çorbası; Tur 2 tavukla yaratıcı tabak. Yaratıcılık turuna kalan 6 kişi: Nilay, Mine, Hami Efe, Nevzat, Hasan Alp, Cansu. Nilay 24 yaşında, Bolu Mengen'den.",
  games:[{name:"Ana kadro seçimi — Tur 1: Fransız usulü soğan çorbası; Tur 2: tavukla yaratıcı tabak", winner:"Elif Nilay Özgen — 2. önlük"}],
  notes:["Tam yemek listesi için transkript bekleniyor."]
},
{
  id:"2026-07-17", date:"17 Temmuz 2026", weekday:"Cuma", week:"Ana Kadro", title:"1. Gün — Biber Yaratıcılık + Ali Nazik (Batuhan 1. Önlük)", source:"transkript",
  summary:"Jüri: Mehmet Yalçınkaya, Somer Sivrioğlu, Danilo Zanna. 14 yarışmacı, 2 tur. Tur 1'de 8 kişi üst tura, Tur 2'de 1 kişi ana kadroya.",
  games:[
    {name:"Tur 1 — Yaratıcılık: BİBER", duration:"45 dk", winner:"Tur 1 birincisi: Mine — tuzlu pataşu",
     dishes:[
      {dish:"Tuzlu pataşu — sarı Kaliforniya biber + çili biberli hamur, köz biberli domates-soğan-sarımsak dolgu, üstte krema", name:"Mine", result:"Üst tur — Tur 1 birincisi"},
      {dish:"Tavuk fars — biberli tavuk fars, derisiyle sarma, bulgurlu biberli ekşili salata, kök sebze + biber püresi", name:"Elif Nilay Özgen", result:"Üst tur"},
      {dish:"Somon bayıldı — imam bayıldı yorumu, bütün biberler + çili/yeşil biber reçeli, biber yağı (teyit edilecek — çıkarım)", name:"Batuhan Nazikoğlu", result:"Üst tur"},
      {dish:"Dip soslu köz biber tabağı — ezine peyniri, tahin, süzme yoğurtlu dip, köz kapya biber, beyaz peynir, çili ballı sos, çıtır biber", name:"Hatice", result:"Üst tur"},
      {dish:"Salamura uskumru + iç pilav — ıspanaklı reyhanlı biberli garnitür, soya / oyster sos, rezene", name:"Hasan Alp Karabacak", result:"Üst tur"},
      {dish:"Biberli köfte dürüm — kapya biberli hamur/lavaş, köftede biber, köz biber meze, sarımsaklı yoğurt-cevizli dip", name:"Fatma", result:"Üst tur"},
      {dish:"Biber bayıldı — 5 çeşit biber, sarımsak, kırmızı soğan, dereotu, süzme yoğurt-limon kabuğu-tahin-reyhan yatak, köz kapya-ceviz-sarımsak", name:"Emre İrkilmez", result:"Üst tur"},
      {dish:"Biber sarma — elma sirkeli biber turşusu, vanilya çubuklu sote, kıymalı harç, biber salçası, köz biber sos", name:"Hami Efe Hanedan", result:"Üst tur"},
      {dish:"Biberli ravioli — hamurunda biber, mantarlı kıymalı biberli harç, yeşil biber, acı yağ", name:"Cansu Şöhret", result:"Elendi — hamur pişmemiş / yumuşak"},
      {dish:"Biberli pizza / flatbread", name:"Fazlı", result:"Elendi — süre yönetimi, tabak tamamlanamadı"},
      {dish:"Meze tabağı — şili/köy biberi, soğan, üzüm sirkesi, ballı yatak, peynir dolgulu köz biber, domates-kapya sos, köz patlıcan", name:"Beyhan", result:"Elendi — sarımsak fazla, özensiz tabaklama"},
      {dish:"Acı pirzola — mantarlı ezme, kaliforniya biberli çıtır ekmek, kırmızı sos", name:"Nevzat", result:"Elendi — et çok pişmiş, griye dönmüş"},
      {dish:"Biberli tatlı — pandispanya, krema, keçi peynirli pancarlı yeşil/kırmızı biberli muhallebi, beyaz çikolata fındıklı tuile", name:"Enes Vardar", result:"Elendi — tatlıda hiç acı gelmiyor, risk"},
      {dish:"Ciğer (teyit edilecek — çıkarım: ocakta unutuldu, tabağa çıkamadı)", name:"Şiringül Kaya", result:"Elendi — ocakta ürün unutma"}
     ]},
    {name:"Tur 2 — Şeflerin Yemeği: ALİ NAZİK", duration:"45 dk", winner:"Batuhan Nazikoğlu — 1. önlük",
     dishes:[
      {dish:"Ali Nazik — küp doğranmış et (çoğunlukla boşluk), kuyruk yağında çevirme, patlıcan söğürme + yoğurtlu patlıcan, tereyağı", name:"Batuhan Nazikoğlu", result:"1. — En başarılı tabak, eti doğru pişmiş, patlıcanı güzel"},
      {dish:"Ali Nazik — tike et, kuyruk yağı + tereyağı, patlıcanı yoğurtla ezme", name:"Hasan Alp Karabacak", result:"2. — Et güzel ama tabaklama karışık, maydanoz fazla"},
      {dish:"Ali Nazik — kıyma (kuşbaşı planlamış, kıymaya dönmüş), kuyruk yağı", name:"Emre İrkilmez", result:"3. — Kıyma fazla kavrulmuş, sosu az"},
      {dish:"Ali Nazik", name:"Hami Efe Hanedan", result:"Elendi — kıyma yanık"},
      {dish:"Ali Nazik", name:"Elif Nilay Özgen", result:"Elendi — patlıcanı maydanoza boğdu, et sote gibi oldu"},
      {dish:"Ali Nazik", name:"Hatice", result:"Elendi — et kuru, jülyen kesim"},
      {dish:"Ali Nazik", name:"Mine", result:"Elendi — eti düdüklü tencerede pişirdi, et oranı az, kurala uymadı"},
      {dish:"Ali Nazik", name:"Fatma", result:"Elendi — Ali Nazik bile değil, domates soslu patlıcanlı yemek"}
     ],
     detail:"Kuzu kol + kuzu boşluk + kuyruk yağı. Alt: patlıcan söğürme + sarımsaklı yoğurt. Şeflerin özeti: 'Kurallara uygun yapılan tek Ali Nazik seninkiydi.'"}
  ],
  candidates:[],
  notes:["Batuhan = somon bayıldı çıkarımı: üst tura çıkan 8 kişiden 7'sinin yemeği isimle belli, geriye kalan tek yemek somon bayıldı ve geriye kalan tek yarışmacı Batuhan.","Şiringül = ciğer çıkarımı: 14 yemekten 13'ü isimle belli, geriye kalan tek isim Şiringül ve geriye kalan tek olay ocakta unutulan ciğer."]
}
);
