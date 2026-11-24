// Eleme Gecesi Puanları — her eleme gecesi, her tur, her şefin her yarışmacıya verdiği puan.
// Kaynak: MK'nin bölüm bildirimleri (canlı puanlar). Toplamlar aritmetikle doğrulanır.
// Kartlar: brand/ig-posts/post-NN.png dosyalarının web/images/ altındaki kopyaları + Instagram bağlantısı.
const ELEME_NIGHTS = [
  {
    "date": "22 Kasım 2026",
    "dateISO": "2026-11-22",
    "title": "22 Kasım eleme gecesi",
    "pot": ["Şükran Boyraz", "Tolgahan Özden", "Şadi Altınay", "Armağan Kırant"],
    "eliminated": "Şükran Boyraz",
    "note": "Şef başına puan dağılımı MK'nin transkriptinden (24 Kasım 2026). Tolgahan 2. tur toplamı 17.5 (web kaynaklarındaki 18 hatalıydı) — genel toplam 35.",
    "rounds": [
      {
        "name": "1. tur",
        "product": "Yer elması",
        "scores": [
          {"name": "Armağan Kırant", "mehmet": 6.5, "danilo": 8, "somer": 7, "total": 21.5},
          {"name": "Şükran Boyraz", "mehmet": 6, "danilo": 7.5, "somer": 7.5, "total": 21},
          {"name": "Şadi Altınay", "mehmet": 6.5, "danilo": 7, "somer": 7, "total": 20.5},
          {"name": "Tolgahan Özden", "mehmet": 5, "danilo": 6, "somer": 6.5, "total": 17.5}
        ]
      },
      {
        "name": "2. tur",
        "product": "Ben Saksı Değilim",
        "scores": [
          {"name": "Armağan Kırant", "mehmet": 6.5, "danilo": 7, "somer": 7, "total": 20.5},
          {"name": "Şadi Altınay", "mehmet": 6, "danilo": 6.5, "somer": 6.5, "total": 19},
          {"name": "Tolgahan Özden", "mehmet": 5.5, "danilo": 6, "somer": 6, "total": 17.5},
          {"name": "Şükran Boyraz", "mehmet": 4, "danilo": 4.5, "somer": 4.5, "total": 13}
        ]
      }
    ]
  },
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
        "card": {"image": "images/eleme-2026-11-15-r2.png", "ig": "https://www.instagram.com/p/DfyAa7wE95D/"},
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
