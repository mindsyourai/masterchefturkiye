// Eleme Gecesi Puanları — her eleme gecesi, her tur, her şefin her yarışmacıya verdiği puan.
// Kaynak: MK'nin bölüm bildirimleri (canlı puanlar). Toplamlar aritmetikle doğrulanır.
// Kartlar: brand/ig-posts/post-NN.png dosyalarının web/images/ altındaki kopyaları + Instagram bağlantısı.
const ELEME_NIGHTS = [
  {
    "date": "15 Kasım 2026",
    "dateISO": "2026-11-15",
    "title": "15 Kasım eleme gecesi",
    "pot": ["Nurten Ocak Tamer", "Burçin Oğuz", "Bahar Kaya", "Enes Vardar"],
    "eliminated": "Nurten Ocak Tamer",
    "rounds": [
      {
        "name": "1. tur",
        "product": "Kereviz",
        "card": {"image": "images/eleme-2026-11-15-r1.png", "ig": "https://www.instagram.com/p/DfxrZyFDGJ3/"},
        "scores": [
          {"name": "Enes Vardar", "mehmet": 6.5, "danilo": 7, "somer": 7.5, "total": 21},
          {"name": "Burçin Oğuz", "mehmet": 5.5, "danilo": 6.5, "somer": 7, "total": 19},
          {"name": "Bahar Kaya", "mehmet": 5.5, "danilo": 6, "somer": 6.5, "total": 18},
          {"name": "Nurten Ocak Tamer", "mehmet": 5, "danilo": 5.5, "somer": 6, "total": 16.5}
        ]
      },
      {
        "name": "2. tur",
        "product": "Ravioli",
        "card": {"image": "images/eleme-2026-11-15-r2.png", "ig": null},
        "scores": [
          {"name": "Burçin Oğuz", "mehmet": 6, "danilo": 7.5, "somer": 6.5, "total": 20},
          {"name": "Enes Vardar", "mehmet": 6, "danilo": 7, "somer": 6, "total": 19},
          {"name": "Bahar Kaya", "mehmet": 5.5, "danilo": 6.5, "somer": 6, "total": 18},
          {"name": "Nurten Ocak Tamer", "mehmet": 4.5, "danilo": 6, "somer": 6, "total": 16.5}
        ]
      }
    ]
  }
];
