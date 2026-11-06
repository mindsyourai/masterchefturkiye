/* MasterChef Türkiye 2026 — Tartışmalar & Gündem
   Yalnızca bölüm transkriptlerinde geçen olaylar; tarafsız, olgusal özetler.
   Diyalog uydurulmaz, taraf tutulmaz. Yemek listesinden ayrı tutulur.
   Yeni transkript geldiğinde buraya yeni bir nesne eklenir. */
const DISCUSSIONS = [
  {
    id: "2026-11-02-uskumru-tartismasi",
    date: "2 Kasım 2026",
    dateISO: "2026-11-02",
    title: "Evde uskumru tartışması",
    participants: ["Şükran Boyraz", "Nurten Ocak Tamer", "Elif Nilay Özgen", "Ayşe Nur İnal"],
    kind: "tartışma",
    summary: "Pota için sipariş edilen 15 uskumrudan geriye 4'ü kaldı; dördü de patlaktı. Şükran, balıkların pota çalışması için istendiğini söyleyerek tepki gösterdi. Tartışmada 'saygısız' ve 'bomboş insansın' sözleri geçti. Nilay, ders çalışırken çıkan gürültüden yakındı; şefler konuyu bölümde uzun uzun konuşturdu.",
    source: "2 Kasım 2026 bölümü transkripti"
  },
  {
    id: "2026-11-02-nurten-sitem",
    date: "2 Kasım 2026",
    dateISO: "2026-11-02",
    title: "Nurten'in sitemi: 'Çalışıyorsun, yetersiz ondan çalışıyor'",
    participants: ["Nurten Ocak Tamer", "Şükran Boyraz"],
    kind: "tartışma",
    summary: "Nurten, 'çalışıyorsun, yetersiz ondan çalışıyor' sözlerinin kendisine söylendiğini düşündüğünü ve kırıldığını anlattı. Şükran, sözün Esra hakkındaki bir konuşmadan alındığını, Nurten'e söylenmediğini; Nurten potadayken onu teselli etmek için söylediğini anlattı. İki taraf da bölümde kendi anlatımını aktardı.",
    source: "2 Kasım 2026 bölümü transkripti"
  },
  {
    id: "2026-11-02-muhammed-hodri",
    date: "2 Kasım 2026",
    dateISO: "2026-11-02",
    title: "Muhammed'in 'hodri meydan' konuşması",
    participants: ["Muhammed Yahya Haliloğlu"],
    kind: "gündem",
    summary: "Hasan Alp'in elenmesi sonrası Muhammed, 'Kurt kışı geçirir ama ayazı unutmaz' dedi. Artık tek başına, ceket ve şampiyonluk hedefiyle yarışacağını söyledi; Hasan Alp'e cekete ulaşıp şampiyon olacağına dair verdiği sözü hatırlattı. Üzerinde baskı/mobbing hissettiğini de anlattı.",
    source: "2 Kasım 2026 bölümü transkripti"
  },
  {
    id: "2026-11-03-sadi-ayse",
    date: "3 Kasım 2026",
    dateISO: "2026-11-03",
    title: "Şadi–Ayşe kavgası: konsey oylamasında gerginlik",
    participants: ["Şadi Altınay", "Ayşe Nur İnal"],
    kind: "tartışma",
    summary: "Konsey oylaması sırasında Şadi, oy pusulasını Ayşe'nin önünde masaya vurdu. Mehmet Şef ikisini de stüdyodan çıkardı. Ayşe, o bölümde potaya girdiğini öğrenemedi; bu durum 5 Kasım bölümünün açılış özetinde doğrulandı.",
    source: "3 Kasım 2026 bölümü transkripti"
  },
  {
    id: "2026-11-03-uskumru-provasi",
    date: "3 Kasım 2026",
    dateISO: "2026-11-03",
    title: "Uskumru provası tartışması (evde)",
    participants: ["Şükran Boyraz", "Nurten Ocak Tamer", "Ayşe Nur İnal", "Elif Nilay Özgen"],
    kind: "tartışma",
    summary: "3 Kasım bölümünün açılış özetinde anlatıldı: evde uskumru provası sırasında Şükran, Nurten, Ayşe ve Nilay arasında tartışma çıktı. Konu, 2 Kasım bölümündeki uskumru meselesinin devamı olarak bölüm başında konuşuldu.",
    source: "3 Kasım 2026 bölümü transkripti (açılış özeti)"
  },
  {
    id: "2026-11-05-sadi-ayse-suruyor",
    date: "5 Kasım 2026",
    dateISO: "2026-11-05",
    title: "Şadi–Ayşe gerginliği sürüyor",
    participants: ["Şadi Altınay", "Ayşe Nur İnal"],
    kind: "gündem",
    summary: "5 Kasım bölümünün açılış özetinde 3 Kasım'daki Şadi–Ayşe tartışması ve ikisinin stüdyodan çıkarılması yeniden anıldı. Aynı bölümde kaptanlık düellosunda Armağan, renk körlüğü (diskromatopsi) olduğunu söyledi — bu bir tartışma değil, bölüm gündemi olarak buraya eklendi.",
    source: "5 Kasım 2026 bölümü transkripti"
  },
  {
    id: "2026-11-02-eyup-gonullu",
    date: "2 Kasım 2026",
    dateISO: "2026-11-02",
    title: "Eyüp Can: 'Gönüllü kırmızı kaptan olurum'",
    participants: ["Eyüp Can Güneş"],
    kind: "gündem",
    summary: "Takım seçimleri sırasında Eyüp Can, gelecek hafta mavi kaptan kim olursa olsun gönüllü olarak kırmızı kaptan olmaya hazır olduğunu söyledi. '5 kişi olsun, bir kişi de ben onlara hediye edeyim' dedi.",
    source: "2 Kasım 2026 bölümü transkripti"
  }
];
