/* MasterChef Türkiye 2026 — veri dosyası
   Kaynak: tam sezon transkript dosyası (tum_kompakt.txt, 132 bölüm) + 27 Ekim 2026 (590 sayfalık grup transkripti).
   Yeni transkript geldiğinde: EPISODES dizisinin BAŞINA yeni bir bölüm nesnesi ekle,
   CONTESTANTS içindeki ilgili yarışmacının wins / status alanını güncelle.
   Bilinmeyen yemek/kazanan ASLA uydurulmaz — "bilinmiyor" olarak bırakılır.
   Yemek adları ORİJİNAL haliyle yazılır (Türkçe Türkçe, yabancı yabancı dilde). */
const SITE = {
 "title": "MasterChef Türkiye 2026",
 "subtitle": "Gün gün yemek listesi — kim ne pişirdi, kim kazandı",
 "updated": "9 Kasım 2026",
 "note": "Tam sezon transkript dosyası çıkarıldı (132 bölüm + 27 Ekim): 135 bölüm, 2.724 yemek kaydı. 6 Kasım artık transkriptten (Kırmızı kazandı, Tolgahan dokunulmazlık, Şadi + Kübra aday; Tolgahan potada kaldı). 7 Kasım son takım oyunu (Kırmızı 4-3, Armağan son dokunulmazlık); 8 Kasım eleme web doğrulamasıyla işlendi — Kübra elendi, 13 kaldı (transkript bekleniyor, tam yemekler gelince düzeltilecek). 9 Kasım 14. hafta kaptanlık web doğrulamasıyla işlendi — Tolga Mavi kaptan, Tolgahan Kırmızı kaptan (kaptanlık yemeği bilinmiyor, transkript bekleniyor; takım kadroları MK'den geldi (Enes Mavi, 10 Kas doğrulandı); yeni eleme sistemi duyuruldu (dokunulmazlık sadece kendini korur, Pazar potası 4 kişi). Bilinmeyen yemek/kazanan uydurulmaz — 'bilinmiyor' yazılır.",
 "remaining": [
  "Armağan Kırant",
  "Muhammed Yahya Haliloğlu",
  "Tolga Çakuş",
  "Şadi Altınay",
  "Tolgahan Özden",
  "Ayşe Nur İnal",
  "Şükran Boyraz",
  "Bahar Kaya",
  "Burçin Oğuz",
  "Nurten Ocak Tamer",
  "Eyüp Can Güneş",
  "Elif Nilay Özgen",
  "Enes Vardar"
 ],
 "eliminated": [
  {
   "name": "Demirhan Ali Tekin",
   "date": "16 Ağustos 2026"
  },
  {
   "name": "Gülbahar Meşe",
   "date": "23 Ağustos 2026"
  },
  {
   "name": "Simge Çıtak",
   "date": "30 Ağustos 2026"
  },
  {
   "name": "Koray Saygı",
   "date": "6 Eylül 2026"
  },
  {
   "name": "Cansu Şöhret",
   "date": "13 Eylül 2026"
  },
  {
   "name": "Faruk Garip",
   "date": "20 Eylül 2026"
  },
  {
   "name": "Recep Batur",
   "date": "27 Eylül 2026"
  },
  {
   "name": "Batuhan Nazikoğlu",
   "date": "4 Ekim 2026"
  },
  {
   "name": "Buse Baştan",
   "date": "11 Ekim 2026"
  },
  {
   "name": "Şiringül Kaya",
   "date": "18 Ekim 2026"
  },
  {
   "name": "Emre İrkilmez",
   "date": "25 Ekim 2026"
  },
  {
   "name": "Hasan Alp Karabacak",
   "date": "1 Kasım 2026"
  },
  {
   "name": "Kübra Satılmış",
   "date": "8 Kasım 2026"
  }
 ],
 "transcriptComplete": [
  "13 Haziran 2026",
  "14 Haziran 2026",
  "20 Haziran 2026",
  "21 Haziran 2026",
  "22 Haziran 2026",
  "23 Haziran 2026",
  "24 Haziran 2026",
  "25 Haziran 2026",
  "26 Haziran 2026",
  "27 Haziran 2026",
  "28 Haziran 2026",
  "29 Haziran 2026",
  "30 Haziran 2026",
  "1 Temmuz 2026",
  "2 Temmuz 2026",
  "3 Temmuz 2026",
  "4 Temmuz 2026",
  "5 Temmuz 2026",
  "6 Temmuz 2026",
  "7 Temmuz 2026",
  "8 Temmuz 2026",
  "9 Temmuz 2026",
  "10 Temmuz 2026",
  "11 Temmuz 2026",
  "12 Temmuz 2026",
  "13 Temmuz 2026",
  "14 Temmuz 2026",
  "15 Temmuz 2026",
  "16 Temmuz 2026",
  "17 Temmuz 2026",
  "18 Temmuz 2026",
  "19 Temmuz 2026",
  "20 Temmuz 2026",
  "21 Temmuz 2026",
  "23 Temmuz 2026",
  "24 Temmuz 2026",
  "25 Temmuz 2026",
  "26 Temmuz 2026",
  "27 Temmuz 2026",
  "29 Temmuz 2026",
  "30 Temmuz 2026",
  "31 Temmuz 2026",
  "1 Ağustos 2026",
  "2 Ağustos 2026",
  "4 Ağustos 2026",
  "5 Ağustos 2026",
  "6 Ağustos 2026",
  "7 Ağustos 2026",
  "8 Ağustos 2026",
  "10 Ağustos 2026",
  "11 Ağustos 2026",
  "12 Ağustos 2026",
  "13 Ağustos 2026",
  "14 Ağustos 2026",
  "16 Ağustos 2026",
  "17 Ağustos 2026",
  "19 Ağustos 2026",
  "20 Ağustos 2026",
  "21 Ağustos 2026",
  "22 Ağustos 2026",
  "23 Ağustos 2026",
  "24 Ağustos 2026",
  "25 Ağustos 2026",
  "27 Ağustos 2026",
  "28 Ağustos 2026",
  "29 Ağustos 2026",
  "30 Ağustos 2026",
  "31 Ağustos 2026",
  "1 Eylül 2026",
  "2 Eylül 2026",
  "3 Eylül 2026",
  "4 Eylül 2026",
  "6 Eylül 2026",
  "7 Eylül 2026",
  "8 Eylül 2026",
  "9 Eylül 2026",
  "10 Eylül 2026",
  "11 Eylül 2026",
  "12 Eylül 2026",
  "13 Eylül 2026",
  "14 Eylül 2026",
  "15 Eylül 2026",
  "16 Eylül 2026",
  "17 Eylül 2026",
  "18 Eylül 2026",
  "19 Eylül 2026",
  "20 Eylül 2026",
  "21 Eylül 2026",
  "22 Eylül 2026",
  "23 Eylül 2026",
  "24 Eylül 2026",
  "25 Eylül 2026",
  "26 Eylül 2026",
  "27 Eylül 2026",
  "28 Eylül 2026",
  "29 Eylül 2026",
  "30 Eylül 2026",
  "1 Ekim 2026",
  "2 Ekim 2026",
  "3 Ekim 2026",
  "4 Ekim 2026",
  "5 Ekim 2026",
  "6 Ekim 2026",
  "7 Ekim 2026",
  "8 Ekim 2026",
  "9 Ekim 2026",
  "10 Ekim 2026",
  "11 Ekim 2026",
  "12 Ekim 2026",
  "13 Ekim 2026",
  "14 Ekim 2026",
  "15 Ekim 2026",
  "16 Ekim 2026",
  "17 Ekim 2026",
  "18 Ekim 2026",
  "19 Ekim 2026",
  "20 Ekim 2026",
  "21 Ekim 2026",
  "22 Ekim 2026",
  "24 Ekim 2026",
  "25 Ekim 2026",
  "26 Ekim 2026",
  "27 Ekim 2026",
  "28 Ekim 2026",
  "29 Ekim 2026",
  "30 Ekim 2026",
  "31 Ekim 2026",
  "1 Kasım 2026",
  "2 Kasım 2026",
  "3 Kasım 2026",
  "5 Kasım 2026",
  "6 Kasım 2026",
  "7 Kasım 2026"
 ]
};

/* Yarışmacılar — wins: yalnızca kaynaklarda açıkça yazan galibiyetler.
   status: "yarışıyor" | "elendi" | "seçmelerde elendi" | "yedek" */
const CONTESTANTS = [
 {
  "name": "Batuhan Nazikoğlu",
  "short": "Batuhan",
  "apron": 1,
  "group": "1. Grup",
  "status": "elendi",
  "elimDate": "4 Ekim 2026",
  "wins": [
   "17 Tem — Ali Nazik (1. önlük)",
   "11 Eyl — bireysel dokunulmazlık (patlıcan)"
  ]
 },
 {
  "name": "Elif Nilay Özgen",
  "short": "Nilay",
  "photo": "images/elif-nilay-ozgen.jpg",
  "apron": 2,
  "group": "1. Grup",
  "status": "yarışıyor",
  "wins": [
   "18 Tem — önlük (tavukla yaratıcı tabak)",
   "26 Eyl — bireysel dokunulmazlık",
   "24 Eki — bireysel dokunulmazlık",
   "11 Ağu — bireysel dokunulmazlık (egg fried rice)",
   "3 Eki — bireysel dokunulmazlık (Halep vişne kebabı)",
   "25 Eyl — ödül oyunu (Ödül oyunu — Bayramiç beyazı (bireysel etap), 100.000 TL)"
  ]
 },
 {
  "name": "Hasan Alp Karabacak",
  "short": "Hasan Alp",
  "apron": 3,
  "group": "1. Grup",
  "status": "elendi",
  "elimDate": "1 Kasım 2026",
  "wins": [
   "19 Tem — önlük (yemek bilinmiyor)",
   "20 Ağu — bireysel dokunulmazlık (armutla yaratıcı tabak)",
   "26 Eki — kaptanlık (Kırmızı kaptan; Kübra'nın seçimi)",
   "12 Ağu — bireysel dokunulmazlık (Semizotlu süt ve çiğ balık salamura)",
   "27 Ağu — bireysel dokunulmazlık (Barbunya plaki tabağı)",
   "4 Eyl — bireysel dokunulmazlık (Sandal sefası)",
   "12 Eyl — bireysel dokunulmazlık (Sıfır atık tabağı)"
  ]
 },
 {
  "name": "Şiringül Kaya",
  "short": "Şiringül",
  "apron": 4,
  "group": "1. Grup",
  "status": "elendi",
  "elimDate": "18 Ekim 2026",
  "wins": [
   "20 Tem — önlük (kuzu kulağını merkeze alan yaratıcı tabak)",
   "24 Eyl — bireysel dokunulmazlık (Şeftali tart tatin)"
  ]
 },
 {
  "name": "Enes Vardar",
  "short": "Enes",
  "photo": "images/enes-vardar.jpg",
  "apron": 5,
  "group": "1. Grup",
  "status": "yarışıyor",
  "wins": [
   "21 Tem — önlük (kazandibi)",
   "22 Eki — bireysel dokunulmazlık",
   "19 Eyl — bireysel dokunulmazlık (Izgara yürek)",
   "28 Eyl — ödül oyunu (Ödül oyunu 2. etap — Hünnap yaratıcılık, 100.000 TL)"
  ]
 },
 {
  "name": "Eyüp Can Güneş",
  "short": "Eyüp Can",
  "photo": "images/eyup-can-gunes.jpg",
  "apron": 6,
  "group": "2. Grup",
  "status": "yarışıyor",
  "wins": [
   "23 Tem — önlük (Altı Ezmeli Kebap)",
   "13 Ağu — bireysel dokunulmazlık (Bıçak arası)",
   "31 Ağu — kaptanlık (Tantuni, Mavi kaptan)",
   "29 Eyl — kaptanlık (Çiğ köfte, Mavi kaptan)"
  ]
 },
 {
  "name": "Demirhan Ali Tekin",
  "short": "Demirhan",
  "apron": 7,
  "group": "2. Grup",
  "status": "elendi",
  "elimDate": "16 Ağustos 2026",
  "wins": [
   "24 Tem — önlük (yemek bilinmiyor)"
  ]
 },
 {
  "name": "Nurten Ocak Tamer",
  "short": "Nurten",
  "photo": "images/nurten-ocak-tamer.jpg",
  "apron": 8,
  "group": "2. Grup",
  "status": "yarışıyor",
  "wins": [
   "25 Tem — önlük (su böreği)",
   "5 Kas — bireysel dokunulmazlık (zeytinyağlı kuru incir dolması, kariyerinde ilk)"
  ]
 },
 {
  "name": "Şadi Altınay",
  "short": "Şadi",
  "photo": "images/sadi-altinay.jpg",
  "apron": 9,
  "group": "2. Grup",
  "status": "yarışıyor",
  "wins": [
   "26 Tem — önlük (yemek bilinmiyor)",
   "13 Eki — bireysel dokunulmazlık (Fesenjan)",
   "7 Eki — bireysel dokunulmazlık (Eton Mess)",
   "19 Eki — kaptanlık (Tiramisu, Mavi kaptan)"
  ]
 },
 {
  "name": "Burçin Oğuz",
  "short": "Burçin",
  "photo": "images/burcin-oguz.jpg",
  "apron": 10,
  "group": "2. Grup",
  "instagram": {"handle": "burcinoguz", "followers": "15 B"},
  "status": "yarışıyor",
  "wins": [
   "27 Tem — önlük (tiramisu)",
   "22 Eyl — bireysel dokunulmazlık (köfteli İslim kebabı)",
   "18 Eyl — bireysel dokunulmazlık",
   "20 Eki — bireysel dokunulmazlık",
   "10 Ağu — kaptanlık (menemen, Mavi kaptan)"
  ]
 },
 {
  "name": "Tolga Çakuş",
  "short": "Tolga",
  "photo": "images/tolga-cakus.jpg",
  "apron": 11,
  "group": "3. Grup",
  "instagram": {"handle": "mastercheftolga", "followers": "30 B"},
  "status": "yarışıyor",
  "wins": [
   "29 Tem — önlük (Hatay usulü tepsi kebabı)",
   "15 Eki — bireysel dokunulmazlık",
   "7 Eyl — kaptanlık (Kayseri yağlaması, Mavi kaptan)",
   "6 Eki — kaptanlık (Kaymaklı havuç dilimi Antep baklavası, Mavi kaptan)",
   "17 Eyl — ödül oyunu (Cennet çamuru (final), 100.000 TL)"
  ]
 },
 {
  "name": "Muhammed Yahya Haliloğlu",
  "short": "Muhammed",
  "photo": "images/muhammed-haliloglu.jpg",
  "apron": 12,
  "group": "3. Grup",
  "instagram": {"handle": "muhammed.chefff", "followers": "140 B"},
  "status": "yarışıyor",
  "wins": [
   "30 Tem — önlük (yemek bilinmiyor)",
   "27 Eki — bireysel dokunulmazlık (lavaş kebabı)",
   "17 Eki — bireysel dokunulmazlık",
   "14 Ağu — bireysel dokunulmazlık (Burratalı tabak)",
   "22 Ağu — bireysel dokunulmazlık (Lavaşlı köfte)",
   "10 Eyl — bireysel dokunulmazlık (Kızılcıklı tabak)",
   "2 Eki — bireysel dokunulmazlık (Sıfır atık tabağı)",
   "8 Eki — bireysel dokunulmazlık (Kuru dolma yorumu (kuzu + patlıcan))",
   "10 Eki — bireysel dokunulmazlık (Asitte pişmiş sardalya (sıfır atık))",
   "17 Ağu — kaptanlık (Tepsi pizza, Mavi kaptan)",
   "12 Eki — kaptanlık (Cağ kebabı, Mavi kaptan)"
  ]
 },
 {
  "name": "Ayşe Nur İnal",
  "short": "Ayşe",
  "photo": "images/ayse-nur-inal.jpg",
  "apron": 13,
  "group": "3. Grup",
  "status": "yarışıyor",
  "wins": [
   "31 Tem — önlük (Empanada — teyit edilecek)",
   "16 Eki — bireysel dokunulmazlık (banduma)",
   "30 Eki — ödül oyunu (100.000 TL)",
   "3 Eyl — bireysel dokunulmazlık (Cubano sandviç)",
   "14 Eki — ödül oyunu (Pastel de Choclo (2. etap), 100.000 TL)"
  ]
 },
 {
  "name": "Kübra Satılmış",
  "short": "Kübra",
  "apron": 14,
  "group": "3. Grup",
  "status": "elendi",
  "elimDate": "8 Kasım 2026",
  "wins": [
   "1 Ağu — önlük (sebze güveci)",
   "16 Eyl — bireysel dokunulmazlık",
   "26 Eki — kaptanlık (testi kebabı, Mavi kaptan)",
   "3 Kas — bireysel dokunulmazlık (karidesli dumpling)",
   "9 Eki — bireysel dokunulmazlık (Enchiladas Rojas (vejetaryen))"
  ]
 },
 {
  "name": "Gülbahar Meşe",
  "short": "Gülbahar",
  "apron": 15,
  "group": "3. Grup",
  "status": "elendi",
  "elimDate": "23 Ağustos 2026",
  "wins": [
   "2 Ağu — önlük (ekler)"
  ]
 },
 {
  "name": "Simge Çıtak",
  "short": "Simge",
  "apron": 16,
  "group": "4. Grup",
  "status": "elendi",
  "elimDate": "30 Ağustos 2026",
  "wins": [
   "4 Ağu — önlük (pideli köfte)",
   "25 Ağu — bireysel dokunulmazlık"
  ]
 },
 {
  "name": "Bahar Kaya",
  "short": "Bahar",
  "photo": "images/bahar-kaya.jpg",
  "apron": 17,
  "group": "4. Grup",
  "instagram": {"handle": "baharatplay", "followers": "28 B"},
  "status": "yarışıyor",
  "wins": [
   "5 Ağu — önlük (levreği merkeze alan yaratıcı tabak)",
   "8 Eyl — bireysel dokunulmazlık (helva-i hakani)",
   "21 Eki — bireysel dokunulmazlık",
   "23 Eyl — bireysel dokunulmazlık (Şekeri meyvelerden gelen tatlı)"
  ]
 },
 {
  "name": "Şükran Boyraz",
  "short": "Şükran",
  "photo": "images/sukran-boyraz.jpg",
  "apron": 18,
  "group": "4. Grup",
  "status": "yarışıyor",
  "wins": [
   "6 Ağu — önlük (sebzeli gyoza)",
   "21 Ağu — bireysel dokunulmazlık (Eli böğründe)",
   "28 Ağu — bireysel dokunulmazlık (Çeşmi Nigar çorbası)",
   "1 Eyl — bireysel dokunulmazlık (İrmik helvası)",
   "21 Eyl — kaptanlık (Lahmacun, Mavi kaptan)"
  ]
 },
 {
  "name": "Armağan Kırant",
  "short": "Armağan",
  "photo": "images/armagan-kirant.jpg",
  "apron": 19,
  "group": "4. Grup",
  "instagram": {"handle": "armagankirantt", "followers": "62 B"},
  "status": "yarışıyor",
  "wins": [
   "7 Ağu — önlük (asma yaprağını merkeze alan yaratıcı tabaklar)",
   "19 Ağu — bireysel dokunulmazlık",
   "2 Eyl — bireysel dokunulmazlık (incir)",
   "2 Kas — kaptanlık (kıymalı kaşarlı pide, Mavi kaptan)",
   "7 Kas — bireysel dokunulmazlık (Kadın budu yorumu (buğdaylı köfte))",
   "14 Eyl — kaptanlık (Profiterol, Mavi kaptan)"
  ]
 },
 {
  "name": "Koray Saygı",
  "short": "Koray",
  "apron": 20,
  "group": "4. Grup",
  "status": "elendi",
  "elimDate": "6 Eylül 2026",
  "wins": [
   "8 Ağu — önlük (crème brûlée)"
  ]
 },
 {
  "name": "Recep Batur",
  "short": "Recep",
  "apron": null,
  "group": "Yedek 1",
  "status": "elendi",
  "elimDate": "27 Eylül 2026",
  "wins": [
   "15 Ağu — yedekten ana kadroya (testi kebabı)"
  ]
 },
 {
  "name": "Emre İrkilmez",
  "short": "Emre",
  "apron": null,
  "group": "Yedek 2",
  "status": "elendi",
  "elimDate": "25 Ekim 2026",
  "wins": [
   "18 Ağu — yedekten ana kadroya (ratatuy)",
   "29 Ağu — bireysel dokunulmazlık (Narenciye soslu levrek)",
   "15 Eyl — bireysel dokunulmazlık (Orman meyveli brownie)",
   "24 Ağu — kaptanlık (Fırın sütlaç, Mavi kaptan)"
  ]
 },
 {
  "name": "Cansu Şöhret",
  "short": "Cansu",
  "apron": null,
  "group": "Yedek 3",
  "status": "elendi",
  "elimDate": "13 Eylül 2026",
  "wins": [
   "26 Ağu — yedekten ana kadroya (yemek bilinmiyor)"
  ]
 },
 {
  "name": "Tolgahan Özden",
  "short": "Tolgahan",
  "photo": "images/tolgahan-ozden.jpg",
  "apron": null,
  "group": "Yedek 4",
  "status": "yarışıyor",
  "wins": [
   "5 Eyl — yedekten ana kadroya (mantarlı ravioli)",
   "9 Eyl — ödül oyunu",
   "28 Eki — bireysel dokunulmazlık (tavuk baget)",
   "29 Eki — bireysel dokunulmazlık (yeşil mercimek)",
   "31 Eki — bireysel dokunulmazlık (sıfır atık)",
   "30 Eyl — bireysel dokunulmazlık (Meyveli tart)",
   "6 Kas — bireysel dokunulmazlık (Karides muslin + alıç jeli + karides bisk)",
   "5 Eki — ödül oyunu (Tokat Batı (final), 100.000 TL)"
  ]
 },
 {
  "name": "Faruk Garip",
  "short": "Faruk",
  "apron": null,
  "group": "Yedek 5",
  "status": "elendi",
  "elimDate": "20 Eylül 2026",
  "wins": [
   "7 Eyl — yedekten ana kadroya (yarışmacı oylaması)"
  ]
 },
 {
  "name": "Buse Baştan",
  "short": "Buse",
  "apron": null,
  "group": "Yedek 6",
  "status": "elendi",
  "elimDate": "11 Ekim 2026",
  "wins": [
   "7 Eyl civarı — yedekten ana kadroya (halk oylaması, ~%74)"
  ]
 },
 {
  "name": "Mine",
  "short": "Mine",
  "apron": null,
  "group": "1. Grup (seçmeler)",
  "status": "seçmelerde elendi",
  "wins": [
   "17 Tem — Tur 1 birincisi (tuzlu pataşu)"
  ]
 },
 {
  "name": "Hami Efe Hanedan",
  "short": "Hami Efe",
  "apron": null,
  "group": "1. Grup yedek",
  "status": "seçmelerde elendi",
  "wins": []
 },
 {
  "name": "Fatma Yılmaz",
  "short": "Fatma",
  "apron": null,
  "group": "1. Grup yedek",
  "status": "seçmelerde elendi",
  "wins": []
 },
 {
  "name": "Hatice",
  "short": "Hatice",
  "apron": null,
  "group": "1. Grup (seçmeler)",
  "status": "seçmelerde elendi",
  "wins": []
 },
 {
  "name": "Fazlı Bulut",
  "short": "Fazlı",
  "apron": null,
  "group": "1. Grup (seçmeler)",
  "status": "seçmelerde elendi",
  "wins": []
 },
 {
  "name": "Beyhan Aysal",
  "short": "Beyhan",
  "apron": null,
  "group": "1. Grup (seçmeler)",
  "status": "seçmelerde elendi",
  "wins": []
 },
 {
  "name": "Nevzat Güzel",
  "short": "Nevzat",
  "apron": null,
  "group": "1. Grup (seçmeler)",
  "status": "seçmelerde elendi",
  "wins": []
 }
];

/* Bölümler — EN SON önce. source: "transkript" | "web" | "teyit" */
const EPISODES = [
{
 "candidates": [],
 "captains": {
  "blue": "Tolga Çakuş",
  "red": "Tolgahan Özden"
 },
 "date": "9 Kasım 2026",
 "eliminated": null,
 "games": [
  {
   "detail": "Kaptanlık yemeği web kaynaklarında belirtilmedi; transkript gelince eklenecek",
   "name": "Kaptanlık oyunu",
   "winner": "Tolga Çakuş — Mavi kaptan"
  }
 ],
 "id": "2026-11-09",
 "immunity": null,
 "notes": [
  "Web doğrulaması: haberlesende.com, bakirkoytv.com.tr (9 Kas 2026) — ikisi de Tolga'nın kaptanlığı kazandığını ve Tolgahan'ı Kırmızı kaptan seçtiğini yazıyor; transkript bekleniyor",
  "Yeni eleme sistemi (Somer Şef, 9 Kas bölümünde duyurdu): dokunulmazlığı alan artık sadece kendini korur, aday söylemez; bir aday konsey oylarıyla belirlenir, Pazar potası 4 kişi olur (önceden 6–8 idi). Not: 3 Kasım'da da benzer bir 'pota 4 kişi' duyurusu olmuş ama 13. haftanın potası 6 kişi olmuştu — yeni kuralın uygulanışı izlenecek",
  "Takım kadroları MK tarafından iletildi; Enes Vardar'ın Mavi takımda olduğu 10 Kasım'da doğrulandı",
  "Kaptanlık yemeği web kaynaklarında belirtilmedi; transkript gelince eklenecek"
 ],
 "pot": [],
 "source": "web",
 "summary": "14. hafta başladı: kaptanlık oyununu Tolga Çakuş kazandı, Mavi kaptan oldu; Kırmızı kaptan olarak Tolgahan Özden'i seçti. Kalan 13 yarışmacı.",
 "teams": {
  "blue": [
   "Tolga Çakuş",
   "Eyüp Can Güneş",
   "Armağan Kırant",
   "Burçin Oğuz",
   "Şadi Altınay",
   "Ayşe Nur İnal",
   "Enes Vardar"
  ],
  "red": [
   "Tolgahan Özden",
   "Muhammed Yahya Haliloğlu",
   "Bahar Kaya",
   "Nurten Ocak Tamer",
   "Şükran Boyraz",
   "Elif Nilay Özgen"
  ]
 },
 "title": "Kaptanlık: Tolga Mavi kaptan",
 "week": "14. Hafta",
 "weekday": "Pazartesi"
},
{
 "candidates": [],
 "captains": {
  "blue": "Armağan Kırant",
  "red": "Şükran Boyraz"
 },
 "date": "8 Kasım 2026",
 "eliminated": "Kübra Satılmış",
 "games": [
  {
   "detail": "Ana ürün bal; Ayşe, Bahar, Tolga ve Şadi kurtuldu, Tolgahan, Eyüp Can, Kübra ve Muhammed 2. tura kaldı",
   "name": "Eleme 1. tur — Bal yaratıcılık",
   "winner": null
  },
  {
   "detail": "Mehmet Şef'in 'Kömür' tatlısı (pâte à choux, mus, püre, ganaj, aktif karbon); Eyüp Can ve Muhammed kurtuldu, son ikiye Kübra ve Tolgahan kaldı; şeflerin kararıyla teknik hatalar nedeniyle Kübra elendi",
   "name": "Eleme 2. tur — Kömür (Mehmet Şef)",
   "winner": null
  }
 ],
 "id": "2026-11-08",
 "immunity": null,
 "notes": [
  "Web doğrulaması: lezzet.com.tr, gazeteyenisoz.com, haberlesende.com (8–9 Kas 2026) — üçü de aynı isim ve tur detaylarında birleşiyor; transkript bekleniyor",
  "Kübra 6 Kasım konseyinde en çok oyu (6) almıştı",
  "Bireysel yemek adları web kaynaklarında yok; transkript gelince düzeltilecek"
 ],
 "pot": [
  "Bahar Kaya",
  "Kübra Satılmış",
  "Ayşe Nur İnal",
  "Tolgahan Özden",
  "Eyüp Can Güneş",
  "Şadi Altınay",
  "Muhammed Yahya Haliloğlu",
  "Tolga Çakuş"
 ],
 "source": "web",
 "summary": "Eleme gecesi: 1. turda ana ürün balda Ayşe, Bahar, Tolga ve Şadi kurtuldu. 2. turda Mehmet Şef'in 'Kömür' tatlısında Eyüp Can ve Muhammed kurtuldu; son ikiye Kübra ve Tolgahan kaldı, şeflerin kararıyla teknik hatalar nedeniyle Kübra Satılmış elendi. Kalan 13 yarışmacı.",
 "teams": {
  "blue": [
   "Armağan Kırant",
   "Muhammed Yahya Haliloğlu",
   "Tolga Çakuş",
   "Kübra Satılmış",
   "Şadi Altınay",
   "Tolgahan Özden",
   "Ayşe Nur İnal"
  ],
  "red": [
   "Şükran Boyraz",
   "Bahar Kaya",
   "Burçin Oğuz",
   "Nurten Ocak Tamer",
   "Eyüp Can Güneş",
   "Elif Nilay Özgen",
   "Enes Vardar"
  ]
 },
 "title": "Eleme: Kübra elendi",
 "week": "13. Hafta",
 "weekday": "Pazar"
},
 {
  "candidates": [
   "Muhammed Yahya Haliloğlu",
   "Tolga Çakuş"
  ],
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Şükran Boyraz"
  },
  "date": "7 Kasım 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 7 düello: Papardelle Bolognese Şükran, Fettuccine ai funghi Muhammed, Tagliatelle con polpette Burçin, Balkabaklı gnocchi Nurten, Spaghetti all'arrabbiata Tolga, Ravioli ai frutti di mare Tolgahan, Çikolatalı ravioli Bahar kazandı",
    "name": "Takım oyunu — Makarna",
    "winner": "Kırmızı 4-3"
   },
   {
    "detail": "45 dk, yalnızca Mavi (Armağan, Muhammed, Tolga); kutu: kuzu külbastı, uskumru, kivi, siyah sarımsak, kuşkonmaz, bal kabağı, kuru incir, tel peynir, keçiboynuzu unu, aşurelik buğday, balık sosu, kırmızı üzüm sirkesi",
    "name": "Bireysel dokunulmazlık — Sıfır atık kutu",
    "winner": "Armağan Kırant"
   }
  ],
  "id": "2026-11-07",
  "immunity": {
   "detail": "1. Armağan (kadın budu yorumu), 2. Tolga, 3. Muhammed; seçim yok, sıralamayla potaya gittiler",
   "name": "Sıfır atık kutu",
   "winner": "Armağan Kırant"
  },
  "notes": [
   "Tolga bu hafta 4/4 yemeğini kazanmasına rağmen potaya gitti",
   "Haftayı Kırmızı kazandı (3 Kas Kırmızı, 5 Kas Mavi, 6 Kas Kırmızı, 7 Kas Kırmızı)",
   "7 Kasım düello 3 kazananı Burçin — orta güven"
  ],
  "pot": [
   "Bahar Kaya",
   "Kübra Satılmış",
   "Ayşe Nur İnal",
   "Tolgahan Özden",
   "Eyüp Can Güneş",
   "Şadi Altınay",
   "Muhammed Yahya Haliloğlu",
   "Tolga Çakuş"
  ],
  "source": "transkript",
  "summary": "13. haftanın son takım oyununda makarna düellolarını Kırmızı 4-3 kazandı ve haftayı Kırmızı aldı. Sıfır atık kutusuyla oynanan Mavi dokunulmazlığını Armağan kazandı; Muhammed ve Tolga potaya gitti. Final pota 8 kişi: Bahar, Kübra, Ayşe, Tolgahan, Eyüp Can, Şadi, Muhammed, Tolga. Eleme 8 Kasım Pazar.",
  "teams": {
   "blue": [
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Kübra Satılmış",
    "Şadi Altınay",
    "Tolgahan Özden",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Şükran Boyraz",
    "Bahar Kaya",
    "Burçin Oğuz",
    "Nurten Ocak Tamer",
    "Eyüp Can Güneş",
    "Elif Nilay Özgen",
    "Enes Vardar"
   ]
  },
  "title": "Son takım oyunu: Makarna — Kırmızı 4-3",
  "week": "13. Hafta",
  "weekday": "Cumartesi"
 },
 {
  "candidates": [
   "Şadi Altınay",
   "Kübra Satılmış"
  ],
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Şükran Boyraz"
  },
  "date": "6 Kasım 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 7 misafir jüri, 35 oy; domates çorbası Ayşe 7-0, kereviz Kırmızı 4-3, orman kebabı Nilay+Burçin 7-0, içli pilav Mavi 4-2, revani Nurten 4-3; 17-17 berabere, şefler Kırmızı 3-2 karar verdi",
    "name": "Takım oyunu — Klasik Türk yemekleri",
    "winner": "Kırmızı"
   },
   {
    "detail": "30 dk, yalnızca Mavi, Bolu alıcı; 1. Tolgahan, 2. Şadi, 3. Ayşe",
    "name": "Bireysel dokunulmazlık — Alıç",
    "winner": "Tolgahan Özden"
   }
  ],
  "id": "2026-11-06",
  "immunity": {
   "detail": "1. Tolgahan (karides muslin + alıç jeli), 2. Şadi, 3. Ayşe; Tolgahan'ın seçimi Şadi",
   "name": "Alıç ile yaratıcı yemek",
   "winner": "Tolgahan Özden"
  },
  "notes": [
   "Tolgahan dokunulmazlığı kazanmasına rağmen potada kaldı (3 Kasım'dan adaydı)",
   "Konsey: Kübra 6, Muhammed 5, Tolga 3",
   "'Çelme' tartışması: Tolgahan Şadi'yi suçladı, niyet çözümsüz kaldı",
   "Kereviz aşçıları bilinmiyor; pilav aşçıları ve dokunulmazlık 2. sıra orta güven"
  ],
  "pot": [
   "Tolgahan Özden",
   "Ayşe Nur İnal",
   "Bahar Kaya",
   "Eyüp Can Güneş",
   "Şadi Altınay",
   "Kübra Satılmış"
  ],
  "source": "transkript",
  "summary": "5 klasik Türk yemeği, 7 misafir jüri, 35 oy: 17-17 berabere bitti, şefler Kırmızı'yı 3-2 galip ilan etti. Alıç dokunulmazlığını Tolgahan kazandı (haftanın 3. dokunulmazlığı) ama potada kaldı. Tolgahan'ın seçimi Şadi (5. aday), konseyde Kübra en çok oyu aldı (6. aday). Pota 6 kişi.",
  "teams": {
   "blue": [
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Kübra Satılmış",
    "Şadi Altınay",
    "Tolgahan Özden",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Şükran Boyraz",
    "Bahar Kaya",
    "Burçin Oğuz",
    "Nurten Ocak Tamer",
    "Eyüp Can Güneş",
    "Elif Nilay Özgen",
    "Enes Vardar"
   ]
  },
  "title": "3. takım oyunu: Klasik Türk yemekleri — Kırmızı kazandı (beraberlikte şef kararı)",
  "week": "13. Hafta",
  "weekday": "Cuma"
 },
 {
  "id": "2026-11-05",
  "date": "5 Kasım 2026",
  "weekday": "Perşembe",
  "week": "13. Hafta",
  "title": "2. Takım Oyunu — Uskumru Dolması Düellosu",
  "source": "transkript",
  "summary": "Somer Şef'in imza tabağı uskumru dolması, 50 dakika, düello formatı. Yanında nar ekşili ince kıyım salata. Kaplama: un, yumurta, mısır unu. İç harç: soğan, kuş üzümü, dolmalık fıstık, tarçın, yenibahar, maydanoz + balığın kendi eti.",
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Şükran Boyraz"
  },
  "teams": {
   "blue": [
    "Armağan",
    "Muhammed",
    "Tolga",
    "Kübra",
    "Şadi",
    "Tolgahan",
    "Ayşe"
   ],
   "red": [
    "Şükran",
    "Bahar",
    "Burçin",
    "Nurten",
    "Eyüp Can",
    "Nilay",
    "Enes"
   ]
  },
  "games": [
   {
    "name": "Takım oyunu — Uskumru Dolması (Somer Şef imza tabağı)",
    "duration": "50 dk",
    "winner": "Mavi Takım 5-2",
    "score": "Mavi 5 – 2 Kırmızı",
    "dishes": [
     {
      "dish": "Uskumru Dolması",
      "blue": "Şadi",
      "red": "Burçin",
      "winner": "Şadi (Mavi)",
      "score": "1-0",
      "note": "Burçin'in kuyruğu kızartırken koptu."
     },
     {
      "dish": "Uskumru Dolması",
      "blue": "Muhammed",
      "red": "Nilay",
      "winner": "Nilay (Kırmızı)",
      "score": "1-1",
      "note": "Muhammed'in balığında küçük delik/kırık; salatası daha iyiydi."
     },
     {
      "dish": "Uskumru Dolması",
      "blue": "Tolgahan",
      "red": "Eyüp Can",
      "winner": "Tolgahan (Mavi)",
      "score": "2-1",
      "note": "Eyüp Can'ın kaplaması altın sarısı olmadı."
     },
     {
      "dish": "Uskumru Dolması",
      "blue": "Armağan (kaptan)",
      "red": "Şükran (kaptan)",
      "winner": "Armağan (Mavi)",
      "score": "3-1",
      "note": "Şükran'ın balığının sırtı açılmış; Armağan renk körlüğü (diskromatopsi) olduğunu söyledi."
     },
     {
      "dish": "Uskumru Dolması",
      "blue": "Tolga",
      "red": "Enes",
      "winner": "Tolga (Mavi) — teyit edilecek",
      "score": "4-1",
      "note": "ASR'da kazanan ismi bozuk çıkmış; 'Tolga ve bütün Mavi takımı … oyunu kazanıyor' cümlesinden çıkarım."
     },
     {
      "dish": "Uskumru Dolması",
      "blue": "Kübra",
      "red": "Bahar",
      "winner": "Kübra (Mavi)",
      "score": "5-1",
      "note": "Bahar'ın kaplaması ıslak kaldı; Kübra'nınki altın sarısı."
     },
     {
      "dish": "Uskumru Dolması",
      "blue": "Ayşe",
      "red": "Nurten",
      "winner": "Nurten (Kırmızı)",
      "score": "5-2",
      "note": "Ayşe'nin balığında çatlak + iç harçta burukluk."
     }
    ]
   }
  ],
  "immunity": {
   "name": "Bireysel dokunulmazlık — Kırmızı takım: Zeytinyağlı Kuru İncir Dolması",
   "duration": "35 dk (webde 45 dk yazıyor; transkript 35 dk diyor)",
   "winner": "Nurten Ocak Tamer — 1. (kariyerinde ilk bireysel dokunulmazlığı)",
   "dishes": [
    {
     "dish": "Zeytinyağlı Kuru İncir Dolması",
     "name": "Nurten Ocak Tamer",
     "rank": "1.",
     "note": "İçini en fazla alan, dolgusu ve ekşisi en doğru olan tabak."
    },
    {
     "dish": "Zeytinyağlı Kuru İncir Dolması",
     "name": "Bahar Kaya",
     "rank": "2.",
     "note": "Limonu en çok gelen tabak."
    },
    {
     "dish": "Zeytinyağlı Kuru İncir Dolması",
     "name": "Elif Nilay Özgen",
     "rank": "3.",
     "note": "Baharatı en güzel gelen, ama ekşisi ve dereotu eksik."
    },
    {
     "dish": "Zeytinyağlı Kuru İncir Dolması",
     "name": "Enes Vardar",
     "rank": "—",
     "note": "Soğanı fazla, baharatı az."
    },
    {
     "dish": "Zeytinyağlı Kuru İncir Dolması",
     "name": "Burçin Oğuz",
     "rank": "—",
     "note": "Limonu az, tatlıyı bastıramadı."
    },
    {
     "dish": "Zeytinyağlı Kuru İncir Dolması",
     "name": "Eyüp Can Güneş",
     "rank": "—",
     "note": "Limonu az, içi az doldurulmuş."
    },
    {
     "dish": "Zeytinyağlı Kuru İncir Dolması",
     "name": "Şükran Boyraz",
     "rank": "—",
     "note": "İçini az doldurmuş."
    }
   ]
  },
  "candidates": [
   "Bahar Kaya — 3. aday (Nurten'in seçimi; 13 haftada ilk kez potaya girdi)",
   "Eyüp Can Güneş — 4. aday (konsey oylaması: Eyüp Can 5, Enes 3, Şükran 2, Burçin 1)"
  ],
  "pot": [
   "Tolgahan Özden",
   "Ayşe Nur İnal",
   "Bahar Kaya",
   "Eyüp Can Güneş"
  ],
  "notes": [
   "Hafta skoru 1-1 oldu (3 Kasım'ı Kırmızı kazanmıştı).",
   "Bölüm başı: 3 Kasım'da Şadi–Ayşe tartışmasında Mehmet Şef ikisini de stüdyodan çıkarmıştı; Ayşe potaya gittiğini bölümde öğrenemedi."
  ]
 },
 {
  "id": "2026-11-03",
  "date": "3 Kasım 2026",
  "weekday": "Salı",
  "week": "13. Hafta",
  "title": "1. Takım Oyunu — Patatesli Yemekler",
  "source": "transkript",
  "summary": "Patatesli yemekler, 45 dakika, 7 yemek. Bölüm başında önceki haftanın uskumru tartışması konuşuldu. Şefler duyurdu: gelecek haftadan itibaren yeni sistem — potaya toplam 4 kişi, iki ayaklı puanlama.",
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Şükran Boyraz"
  },
  "teams": {
   "blue": [
    "Armağan",
    "Muhammed",
    "Tolga",
    "Kübra",
    "Şadi",
    "Tolgahan",
    "Ayşe"
   ],
   "red": [
    "Şükran",
    "Bahar",
    "Burçin",
    "Nurten",
    "Eyüp Can",
    "Nilay",
    "Enes"
   ]
  },
  "games": [
   {
    "name": "Takım oyunu — Patatesli Yemekler",
    "duration": "45 dk",
    "winner": "Kırmızı Takım 4-3",
    "score": "Kırmızı 4 – 3 Mavi",
    "dishes": [
     {
      "dish": "Bavyera usulü patates salatası",
      "blue": "Tolga Çakuş",
      "red": "Eyüp Can",
      "winner": "Tolga (Mavi)",
      "score": "1-0",
      "note": "Eyüp Can'ın sosu yok, yavan; Tolga'nın ilikli kemik suyu + Dijon hardal sosu başarılı."
     },
     {
      "dish": "Sütlü patates çorbası",
      "blue": "Armağan (kaptan)",
      "red": "Enes",
      "winner": "Enes (Kırmızı)",
      "score": "1-1",
      "note": "Armağan'ın çorbası tatsız / süt tadı gelmiyor."
     },
     {
      "dish": "Patatesli hıngal",
      "blue": "Muhammed",
      "red": "Nurten",
      "winner": "Muhammed (Mavi)",
      "score": "2-1",
      "note": "Nurten'in hıngalları farklı boy/kalınlıkta; Muhammed'in işçiliği düzgün."
     },
     {
      "dish": "Tavuklu sandal patates",
      "blue": "Tolgahan",
      "red": "Burçin",
      "winner": "Burçin (Kırmızı)",
      "score": "2-2",
      "note": "Tolgahan'ın patatesi kalın, lezzet nüfuz etmemiş; Burçin'in tavuk sote + salçalı su + kaşar başarılı."
     },
     {
      "dish": "Erzurum patatesli lahana sarması (patates dolması)",
      "blue": "Kübra",
      "red": "Nilay",
      "winner": "Nilay (Kırmızı)",
      "score": "2-3",
      "note": "Kübra'nın sarmaları farklı boyda; Nilay'ınki eşit boyda, yanıklığı avantaj."
     },
     {
      "dish": "Gatto di Patate (Napoli patates pastası/keki)",
      "blue": "Şadi",
      "red": "Bahar",
      "winner": "Şadi (Mavi)",
      "score": "3-3",
      "note": "Bahar'ın içinde ek malzeme fazla, patates baskın değil; Şadi'ninki kek gibi, yüksek."
     },
     {
      "dish": "Zwetschgenknödel (erikli Alman tatlısı)",
      "blue": "Ayşe",
      "red": "Şükran (+ Bahar, Enes, Eyüp Can yardımı)",
      "winner": "Şükran (Kırmızı)",
      "score": "3-4",
      "note": "Ayşe'nin patates hamuru çiğ; Kırmızı'nın eriği ve hamuru güzel, panko karamelizasyonu eksik — yoksa 'gecenin yemeği' olurdu."
     }
    ]
   }
  ],
  "immunity": {
   "name": "Bireysel dokunulmazlık — Mavi takım: Tahin ve Pekmezle Yaratıcı Tabak",
   "duration": "45 dk",
   "winner": "Kübra Satılmış — 1. ('tahinin en iyi geldiği tabak')",
   "dishes": [
    {
     "dish": "Karidesli dumpling — tahin sos (mirin, sirke, limon, lime), acı yağ, pekmezli turp turşusu",
     "name": "Kübra Satılmış",
     "rank": "1.",
     "note": "Dengeli, karides ve iç dolgu güzel. Şefler: son 4 haftada en fazla çıkış yapan kişi Kübra."
    },
    {
     "dish": "Kakao–kahve–pekmez mantolamalı kuzu + pekmezli–tahinli mantar dolma ve kıtır",
     "name": "Muhammed Yahya Haliloğlu",
     "rank": "2. (çıkarım)",
     "note": "İlk 3'ten çıkarım — 1. Kübra, 3. Ayşe olduğuna göre kalan Muhammed."
    },
    {
     "dish": "Tadım menüsü çorbası — tahinli semolina hamur ravioli, pekmez–tereyağında karides, kestane–tahin–pekmez–patlıcan püresi, miso–tahinli sebze stok",
     "name": "Ayşe Nur İnal",
     "rank": "3.",
     "note": "Tahin hiç gelmiyor, pekmez tatlılığı geliyor; ravioli güzel, karides doğru pişmiş."
    },
    {
     "dish": "Katmer + pekmezli çikolatalı fondü, cevizli pekmezli yalancı kaymak (irmikli süt)",
     "name": "Tolga Çakuş",
     "rank": "—",
     "note": ""
    },
    {
     "dish": "Tahin bazlı krep — ceviz, hurma, pekmez iç; pekmez kreması; beyaz çikolata–tahin ve bitter çikolata–pekmez soslar; esmer şeker krokan",
     "name": "Şadi Altınay",
     "rank": "—",
     "note": ""
    },
    {
     "dish": "Tahin–pekmez sablé, pekmez–kahve ile ıslatılmış pandispanya, mascarpone kreması (mavi haşhaş, ceviz, tarçın), Saganaki peyniri çıtır, pekmez dondurması",
     "name": "Armağan Kırant",
     "rank": "—",
     "note": "Pandispanya biraz daha ıslatılabilirdi."
    },
    {
     "dish": "Levrek, tahin vinegretli yedi kule marul (döküm tava), tahinli patates püresi, krema–tahin sos, pastırma tozu (surf and turf)",
     "name": "Tolgahan Özden",
     "rank": "—",
     "note": "Pastırma tozu biraz fazla, burukluk veriyor."
    }
   ]
  },
  "candidates": [
   "Tolgahan Özden — 1. aday (Kübra'nın seçimi)",
   "Ayşe Nur İnal — 2. aday (oylama: Ayşe 5, Muhammed 4, Tolga 3, Şadi 2)"
  ],
  "notes": [
   "Oylamada Şadi–Ayşe tartışması; Şadi oy pusulasını Ayşe'nin önünde masaya vurdu; Mehmet Şef ikisini de stüdyodan çıkardı."
  ]
 },
 {
  "id": "2026-11-02",
  "date": "2 Kasım 2026",
  "weekday": "Pazartesi",
  "week": "13. Hafta",
  "title": "Kaptanlık — Pide",
  "source": "transkript",
  "summary": "Pide, 45 dakika — her yarışmacı iki pide yaptı (biri bitmiş, biri fırına hazır). Kazanan Armağan Kırant, Mavi kaptan oldu; Şükran'ı Kırmızı kaptan seçti. Bahar Kaya 13 haftadır potaya hiç girmedi — MasterChef rekoru.",
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Şükran Boyraz"
  },
  "teams": {
   "blue": [
    "Armağan",
    "Muhammed",
    "Tolga",
    "Kübra",
    "Şadi",
    "Tolgahan",
    "Ayşe"
   ],
   "red": [
    "Şükran",
    "Bahar",
    "Burçin",
    "Nurten",
    "Eyüp Can",
    "Nilay",
    "Enes"
   ]
  },
  "games": [
   {
    "name": "Kaptanlık oyunu — pide",
    "duration": "45 dk",
    "winner": "Armağan Kırant — 1. (Mavi kaptan, 2. kaptanlığı)",
    "detail": "Serbest pide türü. Her yarışmacı iki pide yaptı: biri bitmiş, biri fırına girmeye hazır; şefler ilkini tattı, en iyi ikiyi (Nurten ve Armağan) tekrar tattı.",
    "dishes": [
     {
      "dish": "Kıymalı kaşarlı pide (Musa Dağdeviren'in Türk mutfağı kitabından hamur tarifi; kıyma sulu, ince, çıtır kenarlar, kenarlarda kaşar)",
      "name": "Armağan Kırant",
      "rank": "1.",
      "note": "Kazanan — Mavi kaptan (2. kaptanlığı; ilki profiterol, 6. hafta)."
     },
     {
      "dish": "Bursa cantığı (kıyma, domates, biber, soğan suyu; hamur kepekle açıldı, buzlu su; dışı çıtır içi yumuşak, sulu; elle bütün yenir; Tatar kökenli)",
      "name": "Enes Vardar",
      "rank": "2. (çıkarım)",
      "note": "Şefler: 'son dönemin en iyi iki pidesi' (Enes ve Armağan). 2.'lik çıkarım — son ikiye Enes ve Armağan kaldı, Armağan kazandı."
     },
     {
      "dish": "Soslu pide (alt: soğan + domates + bol tereyağı; kavurma — antrikotu kendisi tereyağında haşladı — pastırma, sucuk, kaşar, yumurta sarısı)",
      "name": "Muhammed Yahya Haliloğlu",
      "rank": "3.",
      "note": "Biraz kuru olmasına rağmen işçilik, kenarlar ve üç pide de lezzetli."
     },
     {
      "dish": "Karışık 3 bölümlü pide (kuşbaşılı + kavurmalı kaşarlı + sucuklu yumurtalı)",
      "name": "Tolga Çakuş",
      "rank": "4.",
      "note": "Sucuklu-yumurtalı orta bölüm şefleri şaşırttı, üst malzeme fazla, biraz ıslak; hamuru çok iyi."
     },
     {
      "dish": "Sütlü peynirli ev pidesi (beyaz peynir + kaşar, süt, soğan, kapya biber, maydanoz, kuru nane; saçta yapılan çökelekli börek usulü)",
      "name": "Şükran Boyraz",
      "rank": "5.",
      "note": "Hiç protein yok — ilk 6'nın en ilginç pidesi; hamur biraz kalın/az pişmiş."
     },
     {
      "dish": "Develi cıvıklısı (kıyma, kapya biber, yeşil biber, domates, karabiber, pul biber, tuz)",
      "name": "Nurten Ocak Tamer",
      "rank": "6.",
      "note": "Kıyma cıvıklı için çok fazla (az, küçük kuşbaşı ve sulu olmalı); tabanı ince ve çıtır — övüldü."
     },
     {
      "dish": "Kavurmalı kaşarlı pide (kapya + yeşil biber, pul/karabiber)",
      "name": "Şadi Altınay",
      "rank": "—",
      "note": "Lezzetli ama biraz kuru."
     },
     {
      "dish": "Kıymalı, kuşbaşılı, soğanlı, biberli, maydanozlu pide",
      "name": "Elif Nilay Özgen",
      "rank": "—",
      "note": "İçi çok iyi, hamur yumuşak; ama bir köşesini kesmiş."
     },
     {
      "dish": "Kuşbaşılı pide + karamelize soğan (antrikot, kaşar, yumurta sarısı, yeşil/kırmızı biber)",
      "name": "Tolgahan Özden",
      "rank": "—",
      "note": ""
     },
     {
      "dish": "Sade kuşbaşılı pide (domates, biber, hepsi çiğden)",
      "name": "Burçin Oğuz",
      "rank": "—",
      "note": ""
     },
     {
      "dish": "Kıymalı kaşarlı pide (sütlü mayalı hamur; kıyma kuru, altı iyi)",
      "name": "Kübra Satılmış",
      "rank": "—",
      "note": ""
     },
     {
      "dish": "Urfa pidesi (domates ve biber ayrı zırhta, domatesin suyu çektirilmiş, kenarlara bol kaşar, kalın hamur)",
      "name": "Eyüp Can Güneş",
      "rank": "—",
      "note": "Hamur kalın, biraz daha pişebilirdi, fazla beyaz."
     },
     {
      "dish": "Kıymalı soğanlı pide, altında beyaz peynir + pastırma + yumurta (kendine üçüncü pide de yaptı)",
      "name": "Ayşe Nur İnal",
      "rank": "—",
      "note": "Pidesinde kusur yok, sadece ilk ikiden iyi değil."
     },
     {
      "dish": "Kıymalı kaşarlı pide (domates, soğan, biber, maydanoz, kaşar hafif çıtır)",
      "name": "Bahar Kaya",
      "rank": "—",
      "note": "Harcı güzel, hamur ince değil."
     }
    ]
   }
  ],
  "notes": [
   "Takım seçimi: Armağan Şükran'ı Kırmızı kaptan seçti (sürpriz — genelde takım arkadaşı olarak seçerdi). Armağan'ın seçim sırası: 1. Muhammed, 2. Tolga, 3. Kübra, 4. Şadi, 5. Tolgahan, 6. Ayşe. Şükran'ın seçim sırası: 1. Burçin, 2. Nurten, 3. Eyüp Can, 4. Nilay, 5. Enes.",
   "Bahar Kaya: 13 haftadır potaya hiç girmedi — MasterChef rekoru (önceki rekor Onur, 11 hafta).",
   "Instagram takipçi sayıları (bölümde söylendi): Muhammed 114.000, Eyüp Can 50.500, Ayşe 41.000, Enes 35.500, Armağan 28.500, Bahar 26.600, Tolga 25.500, Nurten 18.000, Burçin 14.000, Kübra 14.000, Nilay 13.600, Şadi 13.000, Şükran 6.000, Tolgahan 5.500.",
   "Not: ASR bir yerde bu kaptanlığı '14. hafta' diye geçiriyor; hafta numaralandırmamız değişmedi (13. hafta, 2–8 Kasım)."
  ]
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Kübra Satılmış",
   "red": "Hasan Alp Karabacak"
  },
  "date": "1 Kasım 2026",
  "eliminated": "Hasan Alp Karabacak",
  "games": [
   {
    "detail": "45 dk, 4 armut çeşidi; 1. Enes, 2. Muhammed üst tura çıktı",
    "name": "Eleme 1. tur — Armut yaratıcılık",
    "winner": "Enes Vardar"
   },
   {
    "detail": "45 dk, Somer Şef yemeği, /10 puanlama; 1. Şükran, 2. Nurten, 3. Armağan, 4. Hasan Alp elendi",
    "name": "Eleme 2. tur — Kalamar Dolması ve Sucuklu Tereyağında Deniz Tarağı",
    "winner": "Şükran Boyraz"
   }
  ],
  "id": "2026-11-01",
  "immunity": null,
  "notes": [
   "Final ikilisi Armağan–Hasan Alp",
   "1. turda ilk 2 dışındaki 4 kişinin sıralaması açıklanmadı"
  ],
  "pot": [
   "Nurten Ocak Tamer",
   "Enes Vardar",
   "Şükran Boyraz",
   "Hasan Alp Karabacak",
   "Armağan Kırant",
   "Muhammed Yahya Haliloğlu"
  ],
  "source": "transkript",
  "summary": "Eleme gecesi: 1. tur armut yaratıcılıkta Enes 1., Muhammed 2. olup kurtuldu. 2. turda Somer Şef'in kalamar dolması + sucuklu tereyağında deniz tarağı yemeğinde Şükran 1., Nurten 2., Armağan 3. oldu; Hasan Alp Karabacak elendi. Kalan 14 yarışmacı.",
  "teams": {
   "blue": [
    "Kübra Satılmış",
    "Ayşe Nur İnal",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Eyüp Can Güneş",
    "Elif Nilay Özgen",
    "Şadi Altınay",
    "Bahar Kaya"
   ],
   "red": [
    "Hasan Alp Karabacak",
    "Muhammed Yahya Haliloğlu",
    "Şükran Boyraz",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Armağan Kırant",
    "Tolgahan Özden"
   ]
  },
  "title": "Eleme: Hasan Alp elendi",
  "week": "12. Hafta",
  "weekday": "Pazar"
 },
 {
  "candidates": [
   "Nurten Ocak Tamer",
   "Enes Vardar",
   "Şükran Boyraz",
   "Hasan Alp Karabacak",
   "Armağan Kırant",
   "Muhammed Yahya Haliloğlu"
  ],
  "captains": {
   "blue": "Kübra Satılmış",
   "red": "Hasan Alp Karabacak"
  },
  "date": "31 Ekim 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk; Tolgahan, Nilay, Armağan, Tolga, Muhammed, Burçin (gecenin yemeği Harput köftesi), Şadi kazandı",
    "name": "Takım oyunu — 7 bölge 7 yemek",
    "winner": "Mavi 4-3"
   },
   {
    "detail": "45 dk, Kırmızı'nın 7'si oynadı; kutu: kuzu pirzola, barbun, frenk üzümü, beyaz susam, beluga mercimek, kabuksuz badem, kapari meyvesi, mascarpone, ponzu, kırmızı kinoa, nar, kültür mantarı, biber",
    "name": "Kurtarma oyunu — Sıfır atık",
    "winner": "Tolgahan Özden"
   }
  ],
  "id": "2026-10-31",
  "immunity": {
   "detail": "Kazanan kurtuldu; diğer 6'sı oylamasız potaya gitti; haftanın 3. dokunulmazlığı",
   "name": "Sıfır atık kurtarma oyunu",
   "winner": "Tolgahan Özden"
  },
  "notes": [
   "Çerçeve düzeltmesi: tek aday değil, 6 kişi aynı anda otomatik potaya gitti",
   "Bahar'ın yanık olayı: Nilay düdüklüdeki sıcak suyu döktü"
  ],
  "pot": [
   "Nurten Ocak Tamer",
   "Enes Vardar",
   "Şükran Boyraz",
   "Hasan Alp Karabacak",
   "Armağan Kırant",
   "Muhammed Yahya Haliloğlu"
  ],
  "source": "transkript",
  "summary": "7 bölge 7 yemek takım oyununu Mavi 4-3 kazandı (haftayı 4-0 aldı). Kırmızı'nın 7'sinin oynadığı sıfır atık kurtarma oyununu Tolgahan kazandı; kazanamayan 6 kişi (Nurten, Enes, Şükran, Hasan Alp, Armağan, Muhammed) oylamasız potaya gitti. Bahar takım oyununda kolunu sıcak suyla yaktı.",
  "teams": {
   "blue": [
    "Kübra Satılmış",
    "Ayşe Nur İnal",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Eyüp Can Güneş",
    "Elif Nilay Özgen",
    "Şadi Altınay",
    "Bahar Kaya"
   ],
   "red": [
    "Hasan Alp Karabacak",
    "Muhammed Yahya Haliloğlu",
    "Şükran Boyraz",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Armağan Kırant",
    "Tolgahan Özden"
   ]
  },
  "title": "4. takım oyunu: 7 bölge 7 yemek — Mavi 4-3; sıfır atık kurtarma",
  "week": "12. Hafta",
  "weekday": "Cumartesi"
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Kübra Satılmış",
   "red": "Hasan Alp Karabacak"
  },
  "date": "30 Ekim 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, misafir şef Joe Barza; 8 yemek: zahterli manuş, humus, mütebbel, tabule, muhammara, batata harra, balıklı tajin, tavuk ciğeri",
    "name": "Takım oyunu — Lübnan mutfağı",
    "winner": "Mavi 5-3"
   },
   {
    "detail": "30 dk, 15 oyuncu, market 3 dk; 1. Ayşe, 2. Şadi, 3. Bahar",
    "name": "Bireysel ödül oyunu — Burgu peyniri",
    "winner": "Ayşe Nur İnal"
   }
  ],
  "id": "2026-10-30",
  "immunity": null,
  "notes": [
   "Menü 8 yemek, web kaydındaki 9 düzeltildi",
   "Balıklı tajin aşçıları [bulunamadı], kazanan Kırmızı orta güven",
   "100.000 TL tutar yalnızca web kaydından; transkriptte geçmiyor"
  ],
  "pot": [],
  "source": "transkript",
  "summary": "Lübnan mutfağı takım oyununu (misafir şef Joe Barza) Mavi 5-3 kazandı; menü 8 yemekti (web kaydı 9 diyordu). Burgu peyniri bireysel ödül oyununu Ayşe Nur İnal kazandı (100.000 TL — tutar web kaydından). Aile video mesajları bölüm açılışında gösterildi.",
  "teams": {
   "blue": [
    "Kübra Satılmış",
    "Ayşe Nur İnal",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Eyüp Can Güneş",
    "Elif Nilay Özgen",
    "Şadi Altınay",
    "Bahar Kaya"
   ],
   "red": [
    "Hasan Alp Karabacak",
    "Muhammed Yahya Haliloğlu",
    "Şükran Boyraz",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Armağan Kırant",
    "Tolgahan Özden"
   ]
  },
  "title": "Ödül oyunu: Lübnan mutfağı — Mavi 5-3; burgu peyniri ödülünü Ayşe kazandı",
  "week": "12. Hafta",
  "weekday": "Cuma"
 },
 {
  "candidates": [
   "Armağan Kırant",
   "Muhammed Yahya Haliloğlu"
  ],
  "captains": {
   "blue": "Kübra Satılmış",
   "red": "Hasan Alp Karabacak"
  },
  "date": "29 Ekim 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "7 çeşit gala menüsü, süre [bulunamadı]; Burçin, Enes, Şükran, Bahar, Şadi+Eyüp Can, Muhammed+Armağan, Ayşe kazandı",
    "name": "Takım oyunu — Cumhuriyet galası",
    "winner": "Mavi 4-3"
   },
   {
    "detail": "45 dk; Tolgahan 1., Muhammed 2., Enes 3., Armağan 4.; Enes balkondan gönüllü katıldı",
    "name": "Kurtarma oyunu — Yeşil mercimek",
    "winner": "Tolgahan Özden"
   }
  ],
  "id": "2026-10-29",
  "immunity": {
   "detail": "Dokunulmazlık değil; kazanan kurtuldu, Muhammed ve Armağan otomatik potaya gitti",
   "name": "Yeşil mercimek kurtarma oyunu",
   "winner": "Tolgahan Özden"
  },
  "notes": [
   "27 Ekim 2. adayı Enes olarak kesinleşti (potada 4 + oynayan 3 = 7)",
   "Takım oyunu süre sınırı [bulunamadı]",
   "30 Ekim'de yalnızca ödül oyunu var (bölümde duyuruldu)"
  ],
  "pot": [
   "Nurten Ocak Tamer",
   "Enes Vardar",
   "Şükran Boyraz",
   "Hasan Alp Karabacak",
   "Armağan Kırant",
   "Muhammed Yahya Haliloğlu"
  ],
  "source": "transkript",
  "summary": "Cumhuriyet Bayramı galasında (103. yıl) 7 çeşit gala menüsünü Mavi 4-3 kazandı. Yeşil mercimek kurtarma oyununu Tolgahan kazandı; Muhammed ve Armağan otomatik potaya gitti. Enes'in zaten potada olduğu kesinleşti — 27 Ekim'in bilinmeyen 2. adayı Enes'ti. Pota 6 kişi.",
  "teams": {
   "blue": [
    "Kübra Satılmış",
    "Ayşe Nur İnal",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Eyüp Can Güneş",
    "Elif Nilay Özgen",
    "Şadi Altınay",
    "Bahar Kaya"
   ],
   "red": [
    "Hasan Alp Karabacak",
    "Muhammed Yahya Haliloğlu",
    "Şükran Boyraz",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Armağan Kırant",
    "Tolgahan Özden"
   ]
  },
  "title": "3. takım oyunu: Cumhuriyet galası — Mavi 4-3; yeşil mercimek kurtarma",
  "week": "12. Hafta",
  "weekday": "Perşembe"
 },
 {
  "candidates": [
   "Şükran Boyraz",
   "Hasan Alp Karabacak"
  ],
  "captains": {
   "blue": "Kübra Satılmış",
   "red": "Hasan Alp Karabacak"
  },
  "date": "28 Ekim 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 7 yemek (düğün çorbası, kabak borani, bardak altı, içli köfte, Kilis tava, şiş köfte, profiterol); çorba Mavi, borani Kırmızı, bardak altı Mavi, içli köfte bölündü, Kilis tava Kırmızı, şiş köfte Mavi, profiterol Kırmızı",
    "name": "Takım oyunu — Klasik yemekler",
    "winner": "Mavi"
   },
   {
    "detail": "45 dk, yalnızca Kırmızı; 1. Tolgahan, 2. Armağan, 3. Muhammed; Nurten'in yemeği [bulunamadı]",
    "name": "Bireysel dokunulmazlık — Tavuk baget",
    "winner": "Tolgahan Özden"
   }
  ],
  "id": "2026-10-28",
  "immunity": {
   "detail": "1. Tolgahan (baklava hamurlu baget + sıcak salata), 2. Armağan, 3. Muhammed; Tolgahan'ın seçimi Şükran",
   "name": "Tavuk bagetle yaratıcı yemek",
   "winner": "Tolgahan Özden"
  },
  "notes": [
   "Konsey: Hasan Alp 5, Muhammed 4, Armağan 3",
   "İçli köfte jüri bölünmesi (1. jüri Mavi, 2. jüri Kırmızı); puan sistemi tam çözülemedi",
   "Mavi 12. haftayı kazandı; Kübra elenme riski olmadan 13. haftaya geçti",
   "Düğün çorbası, kabak borani (Kırmızı tarafı) ve içli köfte aşçıları [bulunamadı]"
  ],
  "pot": [
   "Nurten Ocak Tamer",
   "Enes Vardar",
   "Şükran Boyraz",
   "Hasan Alp Karabacak"
  ],
  "source": "transkript",
  "summary": "4 misafir jürinin (2025 yarışmacıları Mert, Murat Can, Sezer, Barış) iki oturumda tattığı 7 klasik yemeği Mavi kazandı (1. jüri 4-3; puan yarışı bardak altıda Mavi lehine bitti). Tavuk baget dokunulmazlığını Tolgahan kazandı; seçimi Şükran (3. aday). Konseyde Hasan Alp en çok oyu aldı (4. aday). Pota: Nurten, Enes, Şükran, Hasan Alp. Mavi 12. haftayı kazandı.",
  "teams": {
   "blue": [
    "Kübra Satılmış",
    "Ayşe Nur İnal",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Eyüp Can Güneş",
    "Elif Nilay Özgen",
    "Şadi Altınay",
    "Bahar Kaya"
   ],
   "red": [
    "Hasan Alp Karabacak",
    "Muhammed Yahya Haliloğlu",
    "Şükran Boyraz",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Armağan Kırant",
    "Tolgahan Özden"
   ]
  },
  "title": "2. takım oyunu: Klasik yemekler — Mavi kazandı (4 misafir jüri)",
  "week": "12. Hafta",
  "weekday": "Çarşamba"
 },
 {
  "id": "2026-10-27",
  "date": "27 Ekim 2026",
  "weekday": "Salı",
  "week": "12. Hafta",
  "title": "1. Takım Oyunu — Patlıcan Yemekleri",
  "source": "transkript",
  "summary": "Takım: patlıcan yemekleri, 9 düello, 45 dk — Mavi kazandı 6-3 (webdeki 'oy birliği' iddiası yanlış; transkript düello düello 6-3 veriyor). Bireysel: lavaş kebabı, 40 dk; kazanan Muhammed (final Nurten–Muhammed). 1. aday Nurten (Muhammed'in seçimi); 2. aday bölüm sonuna kadar açıklanmadı — transkript 2:23:08'de, konsey oylaması bitmeden sona eriyor.",
  "games": [
   {
    "name": "Takım oyunu — patlıcan yemekleri, 9 düello",
    "duration": "45 dk",
    "winner": "Mavi Takım 6-3",
    "score": "Mavi 6 – 3 Kırmızı",
    "dishes": [
     {
      "dish": "Ajvar",
      "blue": "Elif Nilay Özgen, Tolga Çakuş",
      "red": "Armağan Kırant (ikinci Kırmızı aşçı adlandırılmıyor)",
      "winner": "Kırmızı Takım",
      "score": "Mavi 0-1"
     },
     {
      "dish": "Köz patlıcan çorbası",
      "blue": "Bahar Kaya",
      "red": "Armağan Kırant",
      "winner": "Mavi Takım",
      "score": "Mavi 1-1"
     },
     {
      "dish": "Nasu Dengaku",
      "blue": "Bahar Kaya",
      "red": "Tolgahan Özden",
      "winner": "Kırmızı Takım",
      "score": "Mavi 1-2"
     },
     {
      "dish": "Patlıcanlı Bozcaada böreği",
      "blue": "Tolga Çakuş",
      "red": "Nurten Ocak Tamer",
      "winner": "Mavi Takım",
      "score": "Mavi 2-2"
     },
     {
      "dish": "Şeyh Mualla",
      "blue": "Burçin Oğuz",
      "red": "Şükran Boyraz",
      "winner": "Mavi Takım",
      "score": "Mavi 3-2"
     },
     {
      "dish": "Malatya Danilo kebabı",
      "blue": "Eyüp Can Güneş",
      "red": "Muhammed Yahya Haliloğlu",
      "winner": "Kırmızı Takım",
      "score": "Mavi 3-3"
     },
     {
      "dish": "Hünkar Beğendi",
      "blue": "Şadi Altınay",
      "red": "Hasan Alp Karabacak",
      "winner": "Mavi Takım",
      "score": "Mavi 4-3"
     },
     {
      "dish": "Patlıcanlı pilav",
      "blue": "Kübra Satılmış",
      "red": "Şükran Boyraz",
      "winner": "Mavi Takım",
      "score": "Mavi 5-3",
      "note": "Mavi pilavda oyunu garantiledi."
     },
     {
      "dish": "Patlıcan tatlısı",
      "blue": "Ayşe Nur İnal",
      "red": "Enes Vardar",
      "winner": "Mavi Takım",
      "score": "Mavi 6-3"
     }
    ]
   }
  ],
  "immunity": {
   "name": "Bireysel dokunulmazlık — lavaş kebabı",
   "duration": "40 dk",
   "winner": "Muhammed Yahya Haliloğlu (final Nurten–Muhammed)"
  },
  "candidates": [
   "Nurten Ocak Tamer — 1. aday (Muhammed'in seçimi)",
   "2. aday bilinmiyor — transkript bölüm sonuna (2:23:08) kadar 2. adayı açıklamıyor; web 'Enes' diyor, doğrulanmadı"
  ]
 },
 {
  "id": "2026-10-26",
  "date": "26 Ekim 2026",
  "weekday": "Pazartesi",
  "week": "12. Hafta",
  "title": "Kaptanlık — Testi Kebabı",
  "source": "transkript",
  "summary": "Kübra testi kebabı (1 saat) ile Mavi kaptan oldu; Hasan Alp'i Kırmızı kaptan seçti. En başarılı 5 tabak: 1. Kübra, 3. Nurten, 4. Şadi, 5. Şükran (2. açıklanmadı).",
  "captains": {
   "blue": "Kübra Satılmış",
   "red": "Hasan Alp Karabacak"
  },
  "teams": {
   "blue": [
    "Kübra",
    "Ayşe",
    "Tolga",
    "Burçin",
    "Eyüp Can",
    "Nilay",
    "Şadi",
    "Bahar"
   ],
   "red": [
    "Hasan Alp",
    "Muhammed",
    "Şükran",
    "Nurten",
    "Enes",
    "Armağan",
    "Tolgahan"
   ]
  },
  "games": [
   {
    "name": "Kaptanlık oyunu — testi kebabı",
    "duration": "1 saat",
    "winner": "Kübra Satılmış (Mavi kaptan)",
    "detail": "Herkes 2 adet testi kebabı yaptı; kazanan 1:42:17'de açıklandı. Hasan Alp Karabacak Kırmızı kaptan seçildi.",
    "dishes": [
     {
      "dish": "Testi kebabı",
      "name": "Kübra Satılmış",
      "rank": "1.",
      "note": "En başarılı tabak; Mavi kaptan oldu."
     },
     {
      "dish": "Testi kebabı",
      "name": "Nurten Ocak Tamer",
      "rank": "3.",
      "note": "En başarılı 3. tabak."
     },
     {
      "dish": "Testi kebabı",
      "name": "Şadi Altınay",
      "rank": "4.",
      "note": "En başarılı 4. tabak."
     },
     {
      "dish": "Testi kebabı",
      "name": "Şükran Boyraz",
      "rank": "5.",
      "note": "En başarılı 5. tabak."
     },
     {
      "dish": "Testi kebabı",
      "name": "Armağan Kırant",
      "rank": "—"
     },
     {
      "dish": "Testi kebabı",
      "name": "Muhammed Yahya Haliloğlu",
      "rank": "—"
     },
     {
      "dish": "Testi kebabı",
      "name": "Tolga Çakuş",
      "rank": "—"
     },
     {
      "dish": "Testi kebabı",
      "name": "Tolgahan Özden",
      "rank": "—"
     },
     {
      "dish": "Testi kebabı",
      "name": "Ayşe Nur İnal",
      "rank": "—"
     },
     {
      "dish": "Testi kebabı",
      "name": "Bahar Kaya",
      "rank": "—"
     },
     {
      "dish": "Testi kebabı",
      "name": "Burçin Oğuz",
      "rank": "—"
     },
     {
      "dish": "Testi kebabı",
      "name": "Eyüp Can Güneş",
      "rank": "—"
     },
     {
      "dish": "Testi kebabı",
      "name": "Elif Nilay Özgen",
      "rank": "—"
     },
     {
      "dish": "Testi kebabı",
      "name": "Enes Vardar",
      "rank": "—"
     },
     {
      "dish": "Testi kebabı",
      "name": "Hasan Alp Karabacak",
      "rank": "—",
      "note": "Kırmızı kaptan seçildi."
     }
    ]
   }
  ],
  "notes": [
   "Takım listesi transkriptten doğrulandı; elele.com.tr'nin Kübra'yı atlayıp Bahar'ı Mavi'de gösteren listesi hatalı sayıldı."
  ]
 },
 {
  "id": "2026-10-25",
  "date": "25 Ekim 2026",
  "weekday": "Pazar",
  "week": "11. Hafta",
  "title": "Eleme — Emre Elendi",
  "source": "transkript",
  "summary": "Elenen: Emre İrkilmez (son ikiye Ayşe ile kaldı). Tur 1 (siyah sarımsak): kurtuluş sırası 1. Burçin, 2. Nilay, 3. Tolgahan, 4. Enes. Tur 2 (Crespelle): 1. Hasan Alp, 2. Eyüp Can, 3. Ayşe; Emre elendi.",
  "pot": [
   "Enes Vardar",
   "Emre İrkilmez",
   "Ayşe Nur İnal",
   "Eyüp Can Güneş",
   "Elif Nilay Özgen",
   "Burçin Oğuz",
   "Tolgahan Özden",
   "Hasan Alp Karabacak"
  ],
  "eliminated": "Emre İrkilmez",
  "games": [
   {
    "name": "Eleme — 1. etap: siyah sarımsaklı özgün tabaklar",
    "detail": "Kurtuluş sırası: 1. Burçin, 2. Nilay, 3. Tolgahan, 4. Enes.",
    "winner": "Burçin Oğuz, Elif Nilay Özgen, Tolgahan Özden, Enes Vardar kurtuldu"
   },
   {
    "name": "Eleme — 2. etap: Crespelle (Danilo Şef imza tabağı)",
    "detail": "Kurtuluş sırası: 1. Hasan Alp, 2. Eyüp Can, 3. Ayşe; son iki Emre–Ayşe.",
    "winner": "Hasan Alp Karabacak, Eyüp Can Güneş, Ayşe Nur İnal kurtuldu"
   }
  ]
 },
 {
  "id": "2026-10-24",
  "date": "24 Ekim 2026",
  "weekday": "Cumartesi",
  "week": "11. Hafta",
  "title": "4. (Son) Takım Oyunu — Ekşili Yemekler",
  "source": "transkript",
  "summary": "Takım: ekşili yemekler, 9 düello, 45 dk — Mavi kazandı 5-4 (hafta skoru Mavi 3-1). Bireysel: sıfır atık konsepti, gizli kutu; kazanan Nilay (final Nilay–Nurten). Konseyde Hasan Alp 8. aday oldu (oylama 5-5, kaptan Enes seçti). (23 Ekim'de bölüm yayınlanmadı.)",
  "games": [
   {
    "name": "Takım oyunu — ekşili yemekler, 9 düello",
    "duration": "45 dk",
    "winner": "Mavi Takım 5-4",
    "score": "Mavi 5 – 4 Kırmızı",
    "dishes": [
     {
      "dish": "Ekşili kuru dolma",
      "blue": "Eyüp Can Güneş",
      "red": "Nurten Ocak Tamer",
      "winner": "Kırmızı Takım",
      "score": "Mavi 0-1",
      "note": "Eyüp Can 6 dakika geç başladı."
     },
     {
      "dish": "Canh Chua",
      "blue": "Bahar Kaya",
      "red": "Hasan Alp Karabacak",
      "winner": "Mavi Takım",
      "score": "Mavi 1-1"
     },
     {
      "dish": "Aloo Tikki",
      "blue": "Ayşe Nur İnal",
      "red": "Elif Nilay Özgen",
      "winner": "Kırmızı Takım",
      "score": "Mavi 1-2",
      "note": "Kırmızı aşçı ASR'da 'çattınila' diye geçiyor; 'Bravo Nilay' anonsundan Nilay olduğu anlaşıldı."
     },
     {
      "dish": "Palamut ekşilisi",
      "blue": "Muhammed Yahya Haliloğlu",
      "red": "Enes Vardar",
      "winner": "Mavi Takım",
      "score": "Mavi 2-2",
      "note": "Enes kaptan yaptı."
     },
     {
      "dish": "Sweet and Sour Chicken",
      "blue": "Tolga Çakuş",
      "red": "Tolgahan Özden",
      "winner": "Kırmızı Takım",
      "score": "Mavi 2-3"
     },
     {
      "dish": "Ekşili ayak sulusu",
      "blue": "Şükran Boyraz",
      "red": "Burçin Oğuz",
      "winner": "Mavi Takım",
      "score": "Mavi 3-3"
     },
     {
      "dish": "Ghormeh Sabzi",
      "blue": "Şadi Altınay, Bahar Kaya, Eyüp Can Güneş (birlikte)",
      "red": "Armağan Kırant (diğer Kırmızı aşçı/ları adlandırılmıyor)",
      "winner": "Mavi Takım",
      "score": "Mavi 4-3",
      "note": "Mavi'de Şadi, Bahar ve Eyüp Can birlikte yaptı."
     },
     {
      "dish": "İhsangazi Ekşili Pilavı",
      "blue": "Kübra Satılmış",
      "red": "Armağan Kırant",
      "winner": "Mavi Takım",
      "score": "Mavi 5-3",
      "note": "Kübra'nın tabağı 'çok lezzetli, ekşiliği ve kıvamı yerinde'; Armağan'ınki 'kısır olmuş, pilav deme şansımız yok'. Bu puanla Mavi oyunu garantiledi."
     },
     {
      "dish": "Lemon Delicious Pudding",
      "blue": "Şadi Altınay",
      "red": "Emre İrkilmez",
      "winner": "Kırmızı Takım",
      "score": "Mavi 5-4",
      "note": "Oyun Mavi'nin olmasına rağmen tatlı düellosu oynandı; son puan Kırmızı'nın."
     }
    ]
   }
  ],
  "immunity": {
   "name": "Bireysel dokunulmazlık — kutu oyunu (sıfır atık konsepti, gizli kutu)",
   "winner": "Elif Nilay Özgen (final Nurten–Nilay)",
   "dishes": [
    {
     "dish": "Dumpling",
     "name": "Elif Nilay Özgen",
     "rank": "1.",
     "note": "Kazanan; Tolgahan'ı 7. aday olarak potaya gönderdi."
    },
    {
     "dish": "Kutu oyunu yaratıcı tabak",
     "name": "Nurten Ocak Tamer",
     "rank": "2.",
     "note": "Final Nilay–Nurten."
    },
    {
     "dish": "Hindi bonfile sarma",
     "name": "Emre İrkilmez",
     "rank": "3.",
     "note": "En başarılı 3. tabak."
    },
    {
     "dish": "Kutu oyunu yaratıcı tabak",
     "name": "Enes Vardar",
     "rank": "4. (orta güven)",
     "note": "4.'lük ASR'dan çıkarım — kesin değil."
    },
    {
     "dish": "Kutu oyunu yaratıcı tabak",
     "name": "Hasan Alp Karabacak",
     "rank": "—",
     "note": "Konseyde 8. aday oldu (oylama 5-5; kaptan Enes seçti)."
    },
    {
     "dish": "Kutu oyunu yaratıcı tabak",
     "name": "Tolgahan Özden",
     "rank": "—",
     "note": "Nilay'ın seçimiyle 7. aday oldu."
    },
    {
     "dish": "Kutu oyunu yaratıcı tabak",
     "name": "Burçin Oğuz",
     "rank": "—"
    },
    {
     "dish": "Kutu oyunu yaratıcı tabak",
     "name": "Armağan Kırant",
     "rank": "—",
     "note": "Konseyde Hasan Alp ile 5-5 berabere kaldı."
    }
   ]
  },
  "candidates": [
   "Tolgahan Özden — 7. aday (Nilay'ın seçimi)",
   "Hasan Alp Karabacak — 8. aday (oylama 5-5; kaptan Enes Hasan Alp'i seçti)"
  ],
  "pot": [
   "Enes Vardar",
   "Emre İrkilmez",
   "Ayşe Nur İnal",
   "Eyüp Can Güneş",
   "Elif Nilay Özgen",
   "Burçin Oğuz",
   "Tolgahan Özden",
   "Hasan Alp Karabacak"
  ]
 },
 {
  "id": "2026-10-22",
  "date": "22 Ekim 2026",
  "weekday": "Perşembe",
  "week": "11. Hafta",
  "title": "3. takım oyunu — Su böreği (Mavi, beraberlik bozmayla) + sufle (Enes)",
  "source": "transkript",
  "summary": "Su böreği düelloları (1 saat, 8 düello) 4-4 bitti; beraberlik bozma kalem böreği (15 dk, 6 adet) — Tolga Enes'i yendi, Mavi 3. oyunu kazandı (hafta 2-1). Bireysel çikolatalı sufle (25 dk): Enes kazandı (2. Armağan, 3. Burçin). Enes Nilay'ı, konsey beraberliği sonrası Burçin'i potaya gönderdi.",
  "captains": {
   "blue": "Şadi Altınay",
   "red": "Enes Vardar"
  },
  "teams": {
   "blue": [
    "Şadi Altınay",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Eyüp Can Güneş",
    "Kübra Satılmış",
    "Şükran Boyraz",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Enes Vardar",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Burçin Oğuz",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Tolgahan Özden",
    "Hasan Alp Karabacak"
   ]
  },
  "pot": [
   "Enes Vardar",
   "Emre İrkilmez",
   "Ayşe Nur İnal",
   "Eyüp Can Güneş",
   "Elif Nilay Özgen",
   "Burçin Oğuz"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Su böreği (takım oyunu)",
    "detail": "8 düello, 1 saat; 4-4 beraberlik",
    "winner": "Beraberlik"
   },
   {
    "name": "Kalem böreği (beraberlik bozma)",
    "detail": "15 dk, 6 adet; Tolga (Mavi) Enes'i (Kırmızı kaptan) yendi",
    "winner": "Tolga Çakuş"
   },
   {
    "name": "Çikolatalı sufle (bireysel)",
    "detail": "25 dk; 1. Enes, 2. Armağan, 3. Burçin",
    "winner": "Enes Vardar"
   }
  ],
  "immunity": {
   "name": "Çikolatalı sufle",
   "winner": "Enes Vardar",
   "detail": "25 dk; 1. oldu (zaten 1. adaydı, potada kalıyor)"
  },
  "candidates": [
   "Elif Nilay Özgen",
   "Burçin Oğuz"
  ],
  "notes": [
   "Konsey Burçin–Tolgahan 5-5 berabere kaldı; kaptan Enes Burçin'i seçti.",
   "Enes'in oyları: Nurten + Burçin; diğer oy dağılımı net değil (orta güven)."
  ]
 },
 {
  "id": "2026-10-21",
  "date": "21 Ekim 2026",
  "weekday": "Çarşamba",
  "week": "11. Hafta",
  "title": "2. takım oyunu — Misafir jürisi (Kırmızı 15-6) + miso (Bahar)",
  "source": "transkript",
  "summary": "Misafir jürisi oyunu (45 dk): konuklar Demet Akalın, Şafak Sezer ve Naim Süleymanoğlu filmi şarkısının yorumcusu; ham toplam Mavi 6, Kırmızı 15 — Kırmızı kazandı. Bireysel miso yaratıcılık (45 dk): Bahar kazandı (2. Ayşe, 3. Tolga, 4. Kübra). Bahar Ayşe'yi, konsey beraberliği sonrası kaptan Şadi Eyüp Can'ı potaya gönderdi.",
  "captains": {
   "blue": "Şadi Altınay",
   "red": "Enes Vardar"
  },
  "teams": {
   "blue": [
    "Şadi Altınay",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Eyüp Can Güneş",
    "Kübra Satılmış",
    "Şükran Boyraz",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Enes Vardar",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Burçin Oğuz",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Tolgahan Özden",
    "Hasan Alp Karabacak"
   ]
  },
  "pot": [
   "Enes Vardar",
   "Emre İrkilmez",
   "Ayşe Nur İnal",
   "Eyüp Can Güneş"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Misafir jürisi (takım oyunu)",
    "detail": "45 dk; 7 yemek; konuk oyları ham toplam Mavi 6, Kırmızı 15",
    "winner": "Kırmızı takım"
   },
   {
    "name": "Miso yaratıcılık (bireysel)",
    "detail": "45 dk; shiro/beyaz miso + koyu/fermente miso; 1. Bahar, 2. Ayşe, 3. Tolga, 4. Kübra",
    "winner": "Bahar Kaya"
   }
  ],
  "immunity": {
   "name": "Miso yaratıcılık",
   "winner": "Bahar Kaya",
   "detail": "Levrek, porcini mantar püresi, miso glaze, patates sufle"
  },
  "candidates": [
   "Ayşe Nur İnal",
   "Eyüp Can Güneş"
  ],
  "notes": [
   "Üçüncü konuğun adı transkriptte yakalanamadı.",
   "Sarma sayısında 1 puanlık kaydırma şüphesi var (Mavi 4 sarma servis etti); kazanan değişmiyor, düzeltilmiş skor muhtemelen 14-7 (orta güven).",
   "Konsey: Eyüp Can 5, Muhammed 5, Şükran 3, Kübra 2, Tolgahan 1 (=16)."
  ]
 },
 {
  "id": "2026-10-20",
  "date": "20 Ekim 2026",
  "weekday": "Salı",
  "week": "11. Hafta",
  "title": "1. takım oyunu — Güveçler (Mavi 6-3) + Leveniye (Burçin)",
  "source": "transkript",
  "summary": "Güveçler takım oyunu (1 saat, 9 düello) — Mavi 6-3 kazandı; gecenin yemeği Tolga'nın yaprak sarma güveci. Bireysel Leveniye çorbası (45 dk): Burçin 3. dokunulmazlığını kazandı (2. Tolgahan, 3. Nurten, 4. Nilay). Burçin Enes'i kendi isteğiyle, konsey Emre'yi potaya gönderdi.",
  "captains": {
   "blue": "Şadi Altınay",
   "red": "Enes Vardar"
  },
  "teams": {
   "blue": [
    "Şadi Altınay",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Eyüp Can Güneş",
    "Kübra Satılmış",
    "Şükran Boyraz",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Enes Vardar",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Burçin Oğuz",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Tolgahan Özden",
    "Hasan Alp Karabacak"
   ]
  },
  "pot": [
   "Enes Vardar",
   "Emre İrkilmez"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Güveçler (takım oyunu)",
    "detail": "9 düello, 1 saat; Mavi 6-3; gecenin yemeği Tolga'nın yaprak sarması",
    "winner": "Mavi takım"
   },
   {
    "name": "Leveniye çorbası (bireysel)",
    "detail": "45 dk; 1. Burçin, 2. Tolgahan, 3. Nurten, 4. Nilay",
    "winner": "Burçin Oğuz"
   }
  ],
  "immunity": {
   "name": "Leveniye çorbası",
   "winner": "Burçin Oğuz",
   "detail": "Pirinçli köfte, yumurta+yoğurt terbiye, tereyağlı karabiberli sos; 3. dokunulmazlık"
  },
  "candidates": [
   "Enes Vardar",
   "Emre İrkilmez"
  ],
  "notes": [
   "D8 Chicken Handi kazananı skor aritmetiğinden çıkarıldı (Hasan Alp, orta güven); eleştiri sırası ASR'de belirsiz.",
   "Konsey sayıları eksik açıklandı (Emre 5, Nurten 2, Nilay 2, Armağan 1; toplam beklenen 14'ten az).",
   "Emre'nin '6 oy aldım' iddiası açıklanan 5 oyla çelişiyor."
  ]
 },
 {
  "id": "2026-10-19",
  "date": "19 Ekim 2026",
  "weekday": "Pazartesi",
  "week": "11. Hafta",
  "title": "Kaptanlık — Tiramisu (Şadi kazandı)",
  "source": "transkript",
  "summary": "Tiramisu kaptanlık oyunu (Danilo Şef, 45 dk, 2 adet). Kazanan Şadi Altınay Mavi kaptan oldu; Enes Vardar'ı Kırmızı kaptan seçti. Sıralama: 1. Şadi, 2. Bahar, 3. Kübra, 4. Tolga, 5. Nurten, 6. Burçin, 7. Eyüp Can.",
  "captains": {
   "blue": "Şadi Altınay",
   "red": "Enes Vardar"
  },
  "teams": {
   "blue": [
    "Şadi Altınay",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Eyüp Can Güneş",
    "Kübra Satılmış",
    "Şükran Boyraz",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Enes Vardar",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Burçin Oğuz",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Hasan Alp Karabacak",
    "Tolgahan Özden"
   ]
  },
  "pot": [],
  "eliminated": null,
  "games": [
   {
    "name": "Tiramisu (kaptanlık)",
    "detail": "45 dk, 2 adet; Danilo Şef",
    "winner": "Şadi Altınay"
   }
  ],
  "notes": [
   "Kaptan seçim sırası ASR'de kısmen bozuk; son seçimde Şadi Ayşe'yi aldı, Hasan Alp Kırmızı'ya kaldı (orta güven).",
   "11. hafta potası henüz oluşmadı."
  ],
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-10-18",
  "date": "18 Ekim 2026",
  "weekday": "Pazar",
  "week": "10. Hafta",
  "title": "Eleme — Şiringül veda etti",
  "source": "transkript",
  "summary": "Eleme gecesi. Tur 1 pırasa yaratıcılık (45 dk): Tolga, Burçin, Şükran, Enes kurtuldu. Tur 2 Mehmet Şef Uskumru Tarator (45 dk): Hasan Alp ve Tolgahan kurtuldu; finalde Nurten kaldı, Şiringül Kaya elendi (patates kırık + ikra eksik).",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Kübra Satılmış"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Elif Nilay Özgen",
    "Eyüp Can Güneş",
    "Enes Vardar",
    "Şiringül Kaya",
    "Hasan Alp Karabacak",
    "Şadi Altınay"
   ],
   "red": [
    "Kübra Satılmış",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Emre İrkilmez",
    "Tolgahan Özden",
    "Ayşe Nur İnal"
   ]
  },
  "pot": [
   "Şiringül Kaya",
   "Hasan Alp Karabacak",
   "Burçin Oğuz",
   "Nurten Ocak Tamer",
   "Tolga Çakuş",
   "Tolgahan Özden",
   "Şükran Boyraz",
   "Enes Vardar"
  ],
  "eliminated": "Şiringül Kaya",
  "games": [
   {
    "name": "Pırasa yaratıcılık (Tur 1)",
    "detail": "45 dk; kurtuluş sırası: Tolga, Burçin, Şükran, Enes",
    "winner": "Tolga Çakuş"
   },
   {
    "name": "Uskumru Tarator (Tur 2, Mehmet Şef)",
    "detail": "45 dk; puanlama: patates 3, balık taratür 2, düz taratür 1, kuzu kulağı jel 2, elma turşusu 1, görsel 1; sıra: Hasan Alp, Tolgahan, Nurten, Şiringül",
    "winner": "Hasan Alp Karabacak"
   }
  ],
  "candidates": [],
  "notes": [
   "Şiringül 11. elenen (ondan önce 10 kişi gitmişti).",
   "Nurten babası için oynadı (babası hastanede)."
  ],
  "immunity": null
 },
 {
  "id": "2026-10-17",
  "date": "17 Ekim 2026",
  "weekday": "Cumartesi",
  "week": "10. Hafta",
  "title": "4. (son) takım oyunu — Doğu Anadolu (Kırmızı 5-4) + sıfır atık (Muhammed)",
  "source": "transkript",
  "summary": "Doğu Anadolu takım oyunu (9 düello) — Kırmızı 5-4 kazandı; gecenin yemeği Emre'nin Gasefe'si; hafta 2-2 berabere bitti. Bireysel sıfır atık (30 dk): Muhammed 6. dokunulmazlığını kazandı (ilk 3: Nilay, Armağan, Muhammed). Muhammed Şükran'ı, konsey beraberliği sonrası Enes'i potaya gönderdi.",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Kübra Satılmış"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Elif Nilay Özgen",
    "Eyüp Can Güneş",
    "Enes Vardar",
    "Şiringül Kaya",
    "Hasan Alp Karabacak",
    "Şadi Altınay"
   ],
   "red": [
    "Kübra Satılmış",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Emre İrkilmez",
    "Tolgahan Özden",
    "Ayşe Nur İnal"
   ]
  },
  "pot": [
   "Şiringül Kaya",
   "Hasan Alp Karabacak",
   "Burçin Oğuz",
   "Nurten Ocak Tamer",
   "Tolga Çakuş",
   "Tolgahan Özden",
   "Şükran Boyraz",
   "Enes Vardar"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Doğu Anadolu yemekleri (takım oyunu)",
    "detail": "9 düello; Kırmızı 5-4; gecenin yemeği Emre'nin Gasefe'si",
    "winner": "Kırmızı takım"
   },
   {
    "name": "Sıfır atık — yaratıcı tabak (bireysel)",
    "detail": "30 dk; tavuk kanat, kuru kayısı, üzüm sirkesi, bulgur, mercimek, ayva, lime, akçaağaç şurubu, kapya, kimyon, Emmental, ilikli kemik; ilk 3: Nilay, Armağan, Muhammed",
    "winner": "Muhammed Yahya Haliloğlu"
   }
  ],
  "immunity": {
   "name": "Sıfır atık yaratıcılık",
   "winner": "Muhammed Yahya Haliloğlu",
   "detail": "Kemiksiz çıtır kanat ve Mardin pilavı; 6. dokunulmazlık"
  },
  "candidates": [
   "Şükran Boyraz",
   "Enes Vardar"
  ],
  "notes": [
   "Takım oyununun süresi transkriptte geçmiyor.",
   "Konsey: Enes 6, Şadi 6, Eyüp Can 2, Armağan 1, Nilay 1 (=16); kaptan Muhammed beraberliği bozup Enes'i seçti.",
   "Nilay'ın sıfır atık yemeği transkriptte anlatılmıyor; Hasan Alp potada olduğu için yarışma dışı (denemeye indi).",
   "Nurten babası rahatsız olduğu için bireyselde yoktu (hastanede)."
  ]
 },
 {
  "id": "2026-10-16",
  "date": "16 Ekim 2026",
  "weekday": "Cuma",
  "week": "10. Hafta",
  "title": "3. takım oyunu — Meyveli tatlılar (Mavi 5-4) + banduma (Ayşe)",
  "source": "transkript",
  "summary": "Meyveli tatlılar takım oyunu (1 saat, 9 düello) — Mavi 5-4 kazandı; gecenin tatlısı Armağan'ın Lemon Meringue Pie'ı. Bireysel banduma (45 dk, Mehmet Şef): Ayşe 2. dokunulmazlığını kazandı (2. Tolga, 3. Kübra). Ayşe Tolga'yı, konsey beraberliği sonrası kaptan Kübra Tolgahan'ı potaya gönderdi.",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Kübra Satılmış"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Elif Nilay Özgen",
    "Eyüp Can Güneş",
    "Enes Vardar",
    "Şiringül Kaya",
    "Hasan Alp Karabacak",
    "Şadi Altınay"
   ],
   "red": [
    "Kübra Satılmış",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Emre İrkilmez",
    "Tolgahan Özden",
    "Ayşe Nur İnal"
   ]
  },
  "pot": [
   "Şiringül Kaya",
   "Hasan Alp Karabacak",
   "Burçin Oğuz",
   "Nurten Ocak Tamer",
   "Tolga Çakuş",
   "Tolgahan Özden"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Meyveli tatlılar (takım oyunu)",
    "detail": "9 düello, 1 saat; Mavi 5-4; gecenin tatlısı Armağan'ın Lemon Meringue Pie'ı",
    "winner": "Mavi takım"
   },
   {
    "name": "Banduma (bireysel)",
    "detail": "45 dk; Batı Karadeniz (Kastamonu); hindi but, ince yufka, cevizli tereyağı; 1. Ayşe, 2. Tolga, 3. Kübra",
    "winner": "Ayşe Nur İnal"
   }
  ],
  "immunity": {
   "name": "Banduma",
   "winner": "Ayşe Nur İnal",
   "detail": "En doğru pişen yufka, hindi yumuşak, su ve ceviz oranı doğru; 2. dokunulmazlık"
  },
  "candidates": [
   "Tolga Çakuş",
   "Tolgahan Özden"
  ],
  "notes": [
   "Konsey: Kübra 5, Tolgahan 5, Bahar 2, Emre 2 (=14); kaptan Kübra beraberliği bozup Tolgahan'ı seçti.",
   "Pudra şekeri ekip hatası: sadece Mavi tarafa verildi, Kırmızı'ya verilmedi; şefler Kırmızı'ya verip yeniden tattı, karar değişmedi.",
   "Nurten'in banduma sunumu transkriptte yok; Emre ve Tolgahan'ın sunumları atfedilemedi (sadece eleştirileri var).",
   "LISTE_WEB'deki 'Mavi kazandı (2-1)' ifadesi 3 düello sonrası ara skordu; final Mavi 5-4."
  ]
 },
 {
  "id": "2026-10-15",
  "date": "15 Ekim 2026",
  "weekday": "Perşembe",
  "week": "10. Hafta",
  "title": "2. takım oyunu — İspanyol yemekleri (Mavi 7-2)",
  "source": "transkript",
  "summary": "İspanyol yemekleri düelloları (9 düello, 45 dk): Mavi 7-2 kazandı (D6'da 5-1 ile garantilendi). Dokunulmazlık nohut yaratıcılığı Tolga kazandı; 3. aday Burçin (Tolga'nın seçimi), konseyde Kübra–Nurten 5-5 berabere kaldı, kaptan Kübra Nurten'i seçerek 4. aday yaptı.",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Kübra Satılmış"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Elif Nilay Özgen",
    "Eyüp Can Güneş",
    "Enes Vardar",
    "Şiringül Kaya",
    "Hasan Alp Karabacak",
    "Şadi Altınay"
   ],
   "red": [
    "Kübra Satılmış",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Emre İrkilmez",
    "Tolgahan Özden",
    "Ayşe Nur İnal"
   ]
  },
  "pot": [
   "Şiringül Kaya",
   "Hasan Alp Karabacak",
   "Burçin Oğuz",
   "Nurten Ocak Tamer"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "İspanyol yemekleri",
    "detail": "9 düello, 45 dk",
    "winner": "Mavi takım"
   }
  ],
  "immunity": {
   "name": "Nohut yaratıcılık",
   "winner": "Tolga Çakuş",
   "detail": "45 dk; Kırmızı 8 kişi; ilk 4: Kübra, Burçin + 2 (biri Tolga, diğeri net değil)"
  },
  "candidates": [
   "Burçin Oğuz",
   "Nurten Ocak Tamer"
  ],
  "notes": [
   "Konsey: Kübra 5, Nurten 5, Ayşe 3 (?), Bahar 1, Tolgahan 1; beraberliği kaptan Kübra bozdu",
   "Emre'nin Leche Frita'sı çok övüldü ama 'gecenin yemeği' ifadesi ASR'da net değil"
  ]
 },
 {
  "id": "2026-10-14",
  "date": "14 Ekim 2026",
  "weekday": "Çarşamba",
  "week": "10. Hafta",
  "title": "Ödül oyunu — Yumurta (Kırmızı 5-2, Ayşe kazandı)",
  "source": "transkript",
  "summary": "Yumurta konseptli ödül oyunu (7 kurs, 45 dk): Kırmızı 5-2 kazandı. 2. etapta Pastel de Choclo (Şili) yapıldı; Ayşe Nur İnal büyük ödülü kazandı (2. Nurten, 3. Tolga, 4. Burçin).",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Kübra Satılmış"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Elif Nilay Özgen",
    "Eyüp Can Güneş",
    "Enes Vardar",
    "Şiringül Kaya",
    "Hasan Alp Karabacak",
    "Şadi Altınay"
   ],
   "red": [
    "Kübra Satılmış",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Emre İrkilmez",
    "Tolgahan Özden",
    "Ayşe Nur İnal"
   ]
  },
  "pot": [],
  "eliminated": null,
  "games": [
   {
    "name": "Ödül oyunu (Yumurta)",
    "detail": "7 kurs (çorba, soğuk başlangıç, 2 ara sıcak, 2 ana yemek, tatlı), 45 dk; iki aşamalı (önce 4'er kişi)",
    "winner": "Kırmızı takım"
   },
   {
    "name": "Pastel de Choclo (2. etap)",
    "detail": "Kırmızı 8 kişi; süre transkriptte görülmedi",
    "winner": "Ayşe Nur İnal"
   }
  ],
  "immunity": null,
  "candidates": [],
  "notes": [
   "Büyük ödül 100.000 TL olduğu yarışmacı söyleminden (resmi anons görülmedi)",
   "Açılış: bir önceki akşam yarışmacılar Danilo Şef'in restoranında yemek yedi (kamera dışı)",
   "Önceki ödül kazananları: Tolga 2, Enes, Nilay"
  ]
 },
 {
  "id": "2026-10-13",
  "date": "13 Ekim 2026",
  "weekday": "Salı",
  "week": "10. Hafta",
  "title": "1. takım oyunu — Kızartmalar (Kırmızı 5-3)",
  "source": "transkript",
  "summary": "Kızartma düelloları (9 düello, 45 dk): Kırmızı, D8'de 5-3 ile oyunu garantiledi (D9 kazananı net duyulmadı). Dokunulmazlık Fesenjan'ı Şadi kazandı; 1. aday Şiringül (Şadi'nin seçimi), konseyde Hasan Alp 6 oyla 2. aday oldu.",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Kübra Satılmış"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Elif Nilay Özgen",
    "Eyüp Can Güneş",
    "Enes Vardar",
    "Şiringül Kaya",
    "Hasan Alp Karabacak",
    "Şadi Altınay"
   ],
   "red": [
    "Kübra Satılmış",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Emre İrkilmez",
    "Tolgahan Özden",
    "Ayşe Nur İnal"
   ]
  },
  "pot": [
   "Şiringül Kaya",
   "Hasan Alp Karabacak"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Kızartmalar",
    "detail": "9 düello, 45 dk",
    "winner": "Kırmızı takım"
   }
  ],
  "immunity": {
   "name": "Fesenjan",
   "winner": "Şadi Altınay",
   "detail": "Mavi 9 kişi; ilk 3: Hasan Alp, Şadi, Eyüp Can; süre transkriptte görülmedi (web 45 dk diyor)"
  },
  "candidates": [
   "Şiringül Kaya",
   "Hasan Alp Karabacak"
  ],
  "notes": [
   "WEB İLE ÇELİŞKİ: web 'oy birliği' diyor — transkript düello düello 5-3 veriyor (D8'de garantilendi)",
   "D9 Jalebi kazananı net duyulmadı (final skor 5-4 veya 6-3)",
   "Konsey ara sayımları ASR'da tutarsız (Hasan Alp 6, Enes 4, Şükran 3, Armağan 2, Eyüp Can 1)"
  ]
 },
 {
  "id": "2026-10-12",
  "date": "12 Ekim 2026",
  "weekday": "Pazartesi",
  "week": "10. Hafta",
  "title": "Kaptanlık — Cağ kebabı (Muhammed kazandı)",
  "source": "transkript",
  "summary": "Cağ kebabı kaptanlık oyunu (70 dk): Muhammed Yahya Haliloğlu kazandı, Mavi kaptan oldu; karşı kaptan olarak Kübra'yı seçti. İlk 6: Muhammed, Tolga, Armağan, Şiringül, Enes, Hasan Alp. Şükran hasta olduğu için katılmadı.",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Kübra Satılmış"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Elif Nilay Özgen",
    "Eyüp Can Güneş",
    "Enes Vardar",
    "Şiringül Kaya",
    "Hasan Alp Karabacak",
    "Şadi Altınay"
   ],
   "red": [
    "Kübra Satılmış",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Emre İrkilmez",
    "Tolgahan Özden",
    "Ayşe Nur İnal"
   ]
  },
  "pot": [],
  "eliminated": null,
  "games": [
   {
    "name": "Kaptanlık oyunu (Cağ kebabı)",
    "detail": "70 dk; 16 kişi pişirdi (Şükran hasta)",
    "winner": "Muhammed Yahya Haliloğlu"
   }
  ],
  "immunity": null,
  "candidates": [],
  "notes": [
   "Açılışta 11 Ekim konseyinin uzun özeti var (Kübra–Hasan–Enes 'kanca' tartışması) — o bölüm 11 Ekim'e aittir",
   "Takımlar teams_weeks1-12.csv ile birebir doğrulandı"
  ]
 },
 {
  "id": "2026-10-11",
  "date": "11 Ekim 2026",
  "weekday": "Pazar",
  "week": "9. Hafta",
  "title": "Eleme — Buse elendi",
  "source": "transkript",
  "summary": "Mandalina yaratıcılık turunda Ayşe 1., Enes 2., Hasan Alp 3., Nilay 4. oldu. Finalde Somer Şef'in Flying Noodles'ı yapıldı: Nurten 1., Şadi 2., Kübra 3. oldu; Buse Baştan elendi (yumurtayı koyamadı, eti kalın kesti).",
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Elif Nilay Özgen"
  },
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Tolgahan Özden",
    "Şiringül Kaya"
   ],
   "red": [
    "Elif Nilay Özgen",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Şadi Altınay",
    "Kübra Satılmış",
    "Buse Baştan"
   ]
  },
  "pot": [
   "Nurten Ocak Tamer",
   "Ayşe Nur İnal",
   "Elif Nilay Özgen",
   "Buse Baştan",
   "Hasan Alp Karabacak",
   "Şadi Altınay",
   "Enes Vardar",
   "Kübra Satılmış"
  ],
  "eliminated": "Buse Baştan",
  "games": [
   {
    "name": "Mandalina yaratıcılık",
    "detail": "1. tur; 45 dk; 8 pota yarışmacısı",
    "winner": "Ayşe Nur İnal"
   },
   {
    "name": "Flying Noodles (Uçan Erişte)",
    "detail": "Somer Şef'in tabağı; 60 dk; 2. tur (final)",
    "winner": "Nurten Ocak Tamer"
   }
  ],
  "immunity": null,
  "candidates": [
   "Ayşe Nur İnal",
   "Enes Vardar",
   "Hasan Alp Karabacak",
   "Elif Nilay Özgen"
  ],
  "notes": [
   "Şükran hasta — doktora gitti, gecede yoktu",
   "Buse: seyirci oylamasıyla %74 oyla ana kadroya giren son yarışmacı, 22 yaşında",
   "Şadi'nin 'Yolun açık olsun' notu"
  ]
 },
 {
  "id": "2026-10-10",
  "date": "10 Ekim 2026",
  "weekday": "Cumartesi",
  "week": "9. Hafta",
  "title": "4. takım oyunu — İç Anadolu (Mavi 7-2, hafta 4-0)",
  "source": "transkript",
  "summary": "İç Anadolu mutfağı (9 yemek): Mavi 7-2 kazandı, hafta 4-0 bitti (9. haftada ilk 4-0). Eyüp Can'ın Karaman Çağla'sı 'açık ara gecenin yemeği' seçildi. Sıfır atık dokunulmazlığını Muhammed kazandı (5. dokunulmazlığı, ilk kez 5'e ulaşan yarışmacı); Enes 7., Kübra 8. aday olarak doğrudan potaya gitti.",
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Elif Nilay Özgen"
  },
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Tolgahan Özden",
    "Şiringül Kaya"
   ],
   "red": [
    "Elif Nilay Özgen",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Şadi Altınay",
    "Kübra Satılmış",
    "Buse Baştan"
   ]
  },
  "pot": [
   "Nurten Ocak Tamer",
   "Ayşe Nur İnal",
   "Elif Nilay Özgen",
   "Buse Baştan",
   "Hasan Alp Karabacak",
   "Şadi Altınay",
   "Enes Vardar",
   "Kübra Satılmış"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "İç Anadolu Mutfağı",
    "detail": "9 yemek, 45 dk (güveç söyleminden)",
    "winner": "Mavi takım"
   }
  ],
  "immunity": {
   "name": "Sıfır atık",
   "winner": "Muhammed Yahya Haliloğlu",
   "detail": "45 dk; sadece 3 kişi (Kübra, Enes, Muhammed); oylama yok — kazanan haftaya geçer, diğer ikisi doğrudan potaya"
  },
  "candidates": [
   "Enes Vardar",
   "Kübra Satılmış"
  ],
  "notes": [
   "Kayseri Tavası menüde anons edildi ama tadım listesinde adı geçmedi",
   "Un meselesi devamı (Mert demo); Nilay'ın 'Şadi abi takımı karıştırıyor' sözü + özrü; Kübra: 'iletişimsizlik bizi zayıflattı'"
  ]
 },
 {
  "id": "2026-10-09",
  "date": "9 Ekim 2026",
  "weekday": "Cuma",
  "week": "9. Hafta",
  "title": "3. takım oyunu — Hamsili pilav (Mavi 5-4)",
  "source": "transkript",
  "summary": "Hamsili pilav düello formatı (9 düello, 45 dk): herkes aynı yemeği yaptı; Mavi 5-4 kazandı, hafta 3-0 oldu. Bahar'ın hamsili pilavı 'Gecenin yemeği' seçildi. Dokunulmazlık Enchiladas Rojas'ı Kübra kazandı; 5. aday Hasan Alp (Kübra'nın seçimi), konseyde Şadi 8 oyla 6. aday oldu.",
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Elif Nilay Özgen"
  },
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Tolgahan Özden",
    "Şiringül Kaya"
   ],
   "red": [
    "Elif Nilay Özgen",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Şadi Altınay",
    "Kübra Satılmış",
    "Buse Baştan"
   ]
  },
  "pot": [
   "Nurten Ocak Tamer",
   "Ayşe Nur İnal",
   "Elif Nilay Özgen",
   "Buse Baştan",
   "Hasan Alp Karabacak",
   "Şadi Altınay"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Hamsili pilav",
    "detail": "9 düello, 45 dk; herkes aynı yemek",
    "winner": "Mavi takım"
   }
  ],
  "immunity": {
   "name": "Enchiladas Rojas",
   "winner": "Kübra Satılmış",
   "detail": "30 dk; Kırmızı'dan sadece 5 kişi (pota dışı); 3. Muhammed, 2. Enes; tarif krizi: glutensiz tortilla sarılamadı"
  },
  "candidates": [
   "Hasan Alp Karabacak",
   "Şadi Altınay"
  ],
  "notes": [
   "Konsey final: Şadi 8, Enes 7, Muhammed 3 (toplam 18)",
   "Hasan Alp tadım sırasında kapıdan çıkıp gitti; tortilla tarifi tartışması; Şadi–Kübra küsmesi"
  ]
 },
 {
  "id": "2026-10-08",
  "date": "8 Ekim 2026",
  "weekday": "Perşembe",
  "week": "9. Hafta",
  "title": "2. takım oyunu — Asya + Diyarbakır füzyon (Mavi 5-4)",
  "source": "transkript",
  "summary": "Konuk şef Burcu Şef'in Asya + Diyarbakır füzyon menüsü (9 yemek): Mavi 5-4 kazandı. Dokunulmazlık kuru dolmayı Muhammed kazandı (4. dokunulmazlığı); 3. aday Nilay (Muhammed'in seçimi), konseyde Buse 8 oyla 4. aday oldu.",
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Elif Nilay Özgen"
  },
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Tolgahan Özden",
    "Şiringül Kaya"
   ],
   "red": [
    "Elif Nilay Özgen",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Şadi Altınay",
    "Kübra Satılmış",
    "Buse Baştan"
   ]
  },
  "pot": [
   "Nurten Ocak Tamer",
   "Ayşe Nur İnal",
   "Elif Nilay Özgen",
   "Buse Baştan"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Asya + Diyarbakır füzyon (Burcu Şef)",
    "detail": "9 yemek, 5 alan kazanır; süre transkriptte görülmedi",
    "winner": "Mavi takım"
   }
  ],
  "immunity": {
   "name": "Kuru dolma",
   "winner": "Muhammed Yahya Haliloğlu",
   "detail": "30 dk; Kırmızı 9 kişi; 3. Nilay, 2. Enes"
  },
  "candidates": [
   "Elif Nilay Özgen",
   "Buse Baştan"
  ],
  "notes": [
   "Muhammed–Nilay 'intikam' tartışması; Şadi'nin kaptan Tolga'ya 'feda yemek' itirazı; Burçin kokoreçi tabağa koymayı unuttu"
  ]
 },
 {
  "id": "2026-10-07",
  "date": "7 Ekim 2026",
  "weekday": "Çarşamba",
  "week": "9. Hafta",
  "title": "1. takım oyunu — Köfteler (Mavi 4-3)",
  "source": "transkript",
  "summary": "Köfte düelloları (9 düello): Mavi 4-3 kazandı. D7 şiş köfte ve D8 Abdigör köfte berabere bitti (puan yok). Dokunulmazlık Eton Mess'i Şadi kazandı (ilk dokunulmazlığı); 1. aday Nurten (Şadi'nin seçimi), konseyde Ayşe 5 oyla 2. aday oldu.",
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Elif Nilay Özgen"
  },
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Tolgahan Özden",
    "Şiringül Kaya"
   ],
   "red": [
    "Elif Nilay Özgen",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Şadi Altınay",
    "Kübra Satılmış",
    "Buse Baştan"
   ]
  },
  "pot": [
   "Nurten Ocak Tamer",
   "Ayşe Nur İnal"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Köfteler",
    "detail": "9 düello (Islama, İnegöl, Çine, Tekirdağ, Akhisar, Sivas, Şiş, Abdigör, Maç köftesi)",
    "winner": "Mavi takım"
   }
  ],
  "immunity": {
   "name": "Eton Mess",
   "winner": "Şadi Altınay",
   "detail": "30 dk; Kırmızı 9 kişi; 4. Ayşe, 3. Buse, 2. Enes veya Muhammed (net değil)"
  },
  "candidates": [
   "Nurten Ocak Tamer",
   "Ayşe Nur İnal"
  ],
  "notes": [
   "D9 kazananı ASR'da garbled — Armağan (orta güven)",
   "D1 kazananı Hasan Alp (Kırmızı) — teams tablosu ile doğrulandı",
   "Konsey: Ayşe 5, Buse 3, Muhammed 2, Enes 1, Nilay 1; Hasan Alp 'boş oy' kullandı (Ayşe'nin söylemi)",
   "'Kanca/çete' grubu tartışması"
  ]
 },
 {
  "id": "2026-10-06",
  "date": "6 Ekim 2026",
  "weekday": "Salı",
  "week": "9. Hafta",
  "title": "Kaptanlık — Baklava (Tolga kazandı)",
  "source": "transkript",
  "summary": "Baklava kaptanlık oyunu (60 dk): her yarışmacı bir aile üyesiyle birlikte pişirdi. Tolga Çakuş (eşi Ebru ile, kaymaklı havuç dilimi Antep baklavası) kazandı, Mavi kaptan oldu; karşı kaptan olarak Nilay'ı seçti. Şefler sadece birinciyi açıkladı.",
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Elif Nilay Özgen"
  },
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Tolgahan Özden",
    "Şiringül Kaya"
   ],
   "red": [
    "Elif Nilay Özgen",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Şadi Altınay",
    "Kübra Satılmış",
    "Buse Baştan"
   ]
  },
  "pot": [],
  "eliminated": null,
  "games": [
   {
    "name": "Kaptanlık oyunu (Baklava)",
    "detail": "60 dk; aile üyesiyle birlikte (2 kişi, 4 el); soğuk baklava yasak",
    "winner": "Tolga Çakuş"
   }
  ],
  "immunity": null,
  "candidates": [],
  "notes": [
   "Takım seçimi aile üyeleri tarafından yapıldı (Ebru + Eray); seçim sırası transkriptte dağınık",
   "Buse + Nurşen şöbiyet ile 'Tolga olmasaydı birinci olurduk' övgüsü aldı",
   "Takımlar teams_weeks1-12.csv ile doğrulandı"
  ]
 },
 {
  "id": "2026-10-05",
  "date": "5 Ekim 2026",
  "weekday": "Pazartesi",
  "week": "9. Hafta",
  "title": "Ödül oyunu — Tolgahan kazandı",
  "source": "transkript",
  "summary": "9 zor ürünle bıçak çekme düelloları (45 dk): Nurten, Emre, Bahar, Tolgahan, Armağan, Eyüp Can, Şükran, Kübra ve Enes finale çıktı. Finalde Tokat Batı (30 dk) yapıldı; Tolgahan Özden büyük ödülü kazandı, Emre 2., Enes 3. oldu.",
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Elif Nilay Özgen"
  },
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Şükran Boyraz",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Tolgahan Özden",
    "Şiringül Kaya"
   ],
   "red": [
    "Elif Nilay Özgen",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Şadi Altınay",
    "Kübra Satılmış",
    "Buse Baştan"
   ]
  },
  "pot": [],
  "eliminated": null,
  "games": [
   {
    "name": "Ödül oyunu 1. tur",
    "detail": "9 zor ürün, bıçak çekme düelloları, 45 dk",
    "winner": ""
   },
   {
    "name": "Tokat Batı (final)",
    "detail": "30 dk; 9 finalist",
    "winner": "Tolgahan Özden"
   }
  ],
  "immunity": null,
  "candidates": [],
  "notes": [
   "Büyük ödül 20.000 TL olduğu yarışmacı söyleminden (resmi anons görülmedi)",
   "Şükran pişirme sırasında düştü; Tokat Batı rahmetli Eren Şef anısına"
  ]
 },
 {
  "id": "2026-10-04",
  "date": "4 Ekim 2026",
  "weekday": "Pazar",
  "week": "8. Hafta",
  "title": "Eleme — Batuhan elendi",
  "source": "transkript",
  "summary": "Pancar yaratıcılık turunda Nurten 1., Ayşe 2., Kübra 3., Tolgahan 4. oldu. Finalde Danilo Şef'in Vitello Tonnato'su yapıldı: Şükran 1., Şiringül 2., Buse 3. oldu; Batuhan Nazikoğlu elendi (ekmek yapmadı, köpükte ton balığı tadı yok, et çiğ).",
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Nurten Ocak Tamer"
  },
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Enes Vardar",
    "Hasan Alp Karabacak",
    "Şiringül Kaya",
    "Buse Baştan",
    "Şadi Altınay"
   ],
   "red": [
    "Nurten Ocak Tamer",
    "Şükran Boyraz",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Emre İrkilmez",
    "Elif Nilay Özgen",
    "Tolgahan Özden",
    "Ayşe Nur İnal",
    "Kübra Satılmış"
   ]
  },
  "pot": [
   "Kübra Satılmış",
   "Ayşe Nur İnal",
   "Şiringül Kaya",
   "Buse Baştan",
   "Batuhan Nazikoğlu",
   "Nurten Ocak Tamer",
   "Şükran Boyraz",
   "Tolgahan Özden"
  ],
  "eliminated": "Batuhan Nazikoğlu",
  "games": [
   {
    "name": "Pancar yaratıcılık",
    "detail": "1. tur; 8 pota yarışmacısı",
    "winner": "Nurten Ocak Tamer"
   },
   {
    "name": "Vitello Tonnato",
    "detail": "Danilo Şef'in tabağı; 2. tur (final)",
    "winner": "Şükran Boyraz"
   }
  ],
  "immunity": null,
  "candidates": [
   "Nurten Ocak Tamer",
   "Ayşe Nur İnal",
   "Kübra Satılmış",
   "Tolgahan Özden"
  ],
  "notes": [
   "R1 süre transkriptte görülmedi",
   "R2 süre transkriptte görülmedi",
   "Batuhan: ana kadroya ilk çıkan yarışmacı; elendiği gün kız bebek beklediklerini öğrendiler",
   "Tolgahan–Muhammed/Batuhan 'pohpohluyor' tartışması; Buse'nin pataşu/fırın olayı"
  ]
 },
 {
  "candidates": [
   "Şükran Boyraz",
   "Tolgahan Özden"
  ],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Nurten Ocak Tamer"
  },
  "date": "3 Ekim 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "1 saat, 9 yemek: toyga çorbası, tabule, cacıklı Arap köftesi, kitel, tavuklu keşkek, simit kebabı, lahana sarması, etli meyhane pilavı, Muğla saraylısı. Mavi 5-4 kazandı. Gecenin yemeği: Nilay'ın lahana sarması.",
    "name": "4. Takım Oyunu — Buğday Yemekleri",
    "winner": "Mavi"
   }
  ],
  "id": "2026-10-03",
  "immunity": {
   "detail": "35 dk (Lahm-i Kiraz). İlk 3: Nilay, Muhammed, Emre. Nilay 7. aday olarak Şükran'ı seçti (3. dokunulmazlığı).",
   "name": "Halep vişne kebabı",
   "winner": "Elif Nilay Özgen"
  },
  "notes": [
   "Konsey (Kırmızı): Tolgahan 8, Emre 6, Muhammed 4.",
   "Batuhan'ın ikinci kızı doğdu (bölümde açıklandı; ilk kız Nehir).",
   "Pot listesi web'in 4 Ekim pot listesiyle birebir uyumlu."
  ],
  "pot": [
   "Kübra Satılmış",
   "Ayşe Nur İnal",
   "Şiringül Kaya",
   "Buse Baştan",
   "Batuhan Nazikoğlu",
   "Nurten Ocak Tamer",
   "Şükran Boyraz",
   "Tolgahan Özden"
  ],
  "source": "transkript",
  "summary": "Buğday yemekleri, 9 yemek, Mavi 5-4 kazandı (hafta 3-1). Gecenin yemeği Nilay'ın lahana sarması. Bireysel dokunulmazlık Nilay'ın (Halep vişne kebabı); Şükran ve Tolgahan potaya gitti, pot 8 kişiyle tamamlandı.",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Enes Vardar",
    "Hasan Alp Karabacak",
    "Şiringül Kaya",
    "Buse Baştan",
    "Şadi Altınay"
   ],
   "red": [
    "Nurten Ocak Tamer",
    "Şükran Boyraz",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Emre İrkilmez",
    "Elif Nilay Özgen",
    "Tolgahan Özden",
    "Ayşe Nur İnal",
    "Kübra Satılmış"
   ]
  },
  "title": "4. Takım Oyunu — Buğday Yemekleri",
  "week": "8. Hafta",
  "weekday": "Cumartesi"
 },
 {
  "candidates": [
   "Batuhan Nazikoğlu",
   "Nurten Ocak Tamer"
  ],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Nurten Ocak Tamer"
  },
  "date": "2 Ekim 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "Tavuk 1 saat, diğerleri 45 dk. 9 yemek: Gougère fromage, Körözött, Harira, Chili con queso, Escovitch fish, Aloo Gobi, Murgh Musallam, Steak au poivre, Cinnamon roll. Mavi 5-4 kazandı.",
    "name": "3. Takım Oyunu — Baharatlı Dünya Yemekleri",
    "winner": "Mavi"
   }
  ],
  "id": "2026-10-02",
  "immunity": {
   "detail": "45 dk, kuzu pirzola ve sıfır atık malzemeleri. Sıralama: 1. Muhammed, 2. Tolgahan, 3. Ayşe, 4. Kübra. Muhammed 5. aday olarak Batuhan'ı seçti.",
   "name": "Sıfır atık",
   "winner": "Muhammed Yahya Haliloğlu"
  },
  "notes": [
   "Konsey (Kırmızı): Nurten 6, Şükran 4, Muhammed 4, Nilay 2 (Muhammed'in 2 oyu iptal, 16 sayıldı). Muhammed dokunulmazlık kazanan Tolgahan'ı yazdı.",
   "Cinnamon roll kazananı Kırmızı (orta-yüksek güven); Harira kazananı Mavi (orta güven)."
  ],
  "pot": [
   "Kübra Satılmış",
   "Ayşe Nur İnal",
   "Şiringül Kaya",
   "Buse Baştan",
   "Batuhan Nazikoğlu",
   "Nurten Ocak Tamer"
  ],
  "source": "transkript",
  "summary": "Baharatlı dünya yemekleri, 9 yemek, Mavi 5-4 kazandı (hafta 2-1). Bireysel dokunulmazlık Muhammed'in (sıfır atık); Batuhan ve kaptan Nurten potaya gitti. Konseyde Muhammed'in oyları iptal edildi.",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Enes Vardar",
    "Hasan Alp Karabacak",
    "Şiringül Kaya",
    "Buse Baştan",
    "Şadi Altınay"
   ],
   "red": [
    "Nurten Ocak Tamer",
    "Şükran Boyraz",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Emre İrkilmez",
    "Elif Nilay Özgen",
    "Tolgahan Özden",
    "Ayşe Nur İnal",
    "Kübra Satılmış"
   ]
  },
  "title": "3. Takım Oyunu — Baharatlı Dünya Yemekleri",
  "week": "8. Hafta",
  "weekday": "Cuma"
 },
 {
  "candidates": [
   "Şiringül Kaya",
   "Buse Baştan"
  ],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Nurten Ocak Tamer"
  },
  "date": "1 Ekim 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 11 meze: humus, Girit ezmesi, tekmil fava, şakşuka, fasulye pilaki, mütembel, acılı ezme, Siciliano, havuç tarator, vişneli yaprak sarma, midye pilaki. Kırmızı 7-4 kazandı.",
    "name": "2. Takım Oyunu — Mezeler",
    "winner": "Kırmızı"
   }
  ],
  "id": "2026-10-01",
  "immunity": {
   "detail": "45 dk. Bahar kazandı ve 3. aday olarak Şiringül'ü seçti (Armağan'ın tabaklarına müdahale iddiası).",
   "name": "Kuzu beyni",
   "winner": "Bahar Kaya"
  },
  "notes": [
   "Konsey (Mavi) ara sayım: Buse 7, Tolga 6, Hasan Alp 3, Armağan 2 (2 oy kayıtlarda sahipsiz).",
   "Havuç tarator kazananı skor aritmetiğinden Kübra (orta-yüksek güven).",
   "Dokunulmazlıkta 4 tabak sahipsiz; iskelet not 'Armağan kazandı' diyordu, transkript Bahar diyor."
  ],
  "pot": [
   "Kübra Satılmış",
   "Ayşe Nur İnal",
   "Şiringül Kaya",
   "Buse Baştan"
  ],
  "source": "transkript",
  "summary": "Mezeler, 11 yemek, Kırmızı 7-4 kazandı (hafta 1-1). Bireysel dokunulmazlık Bahar'ın (kuzu beyni); Şiringül ve Buse potaya gitti.",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Enes Vardar",
    "Hasan Alp Karabacak",
    "Şiringül Kaya",
    "Buse Baştan",
    "Şadi Altınay"
   ],
   "red": [
    "Nurten Ocak Tamer",
    "Şükran Boyraz",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Emre İrkilmez",
    "Elif Nilay Özgen",
    "Tolgahan Özden",
    "Ayşe Nur İnal",
    "Kübra Satılmış"
   ]
  },
  "title": "2. Takım Oyunu — Mezeler",
  "week": "8. Hafta",
  "weekday": "Perşembe"
 },
 {
  "candidates": [
   "Kübra Satılmış",
   "Ayşe Nur İnal"
  ],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Nurten Ocak Tamer"
  },
  "date": "30 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "9 yemek: kumpir, nohutlu tavuklu pilav, midye tava, balık dürüm, ıslak hamburger, Arnavut ciğeri, midye dolma, Adana et şiş dürüm, halka tatlısı. Mavi 5-4 kazandı. Süre transkriptte bulunamadı.",
    "name": "1. Takım Oyunu — Türk Sokak Yemekleri",
    "winner": "Mavi"
   }
  ],
  "id": "2026-09-30",
  "immunity": {
   "detail": "Klasik tart + pastacı kreması + meyveler + jöle. Sıralama: 1. Tolgahan, 2. Emre, 3. Nurten. Tolgahan 1. aday olarak Kübra'yı seçti. Süre transkriptte bulunamadı.",
   "name": "Meyveli tart",
   "winner": "Tolgahan Özden"
  },
  "notes": [
   "Konsey (Kırmızı): Ayşe 8, Tolgahan 5, Şükran 2, Nurten 2, Nilay 1.",
   "Web kaydı (LISTE_WEB.md) bireysel kazananı Emre verir; transkript Tolgahan'ı gösterir."
  ],
  "pot": [
   "Kübra Satılmış",
   "Ayşe Nur İnal"
  ],
  "source": "transkript",
  "summary": "Türk sokak yemekleri, 9 yemek, Mavi 5-4 kazandı. Bireysel dokunulmazlık Tolgahan'ın (meyveli tart); Kübra ve Ayşe potaya gitti. Web Emre diyor; transkript Tolgahan diyor.",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Enes Vardar",
    "Hasan Alp Karabacak",
    "Şiringül Kaya",
    "Buse Baştan",
    "Şadi Altınay"
   ],
   "red": [
    "Nurten Ocak Tamer",
    "Şükran Boyraz",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Emre İrkilmez",
    "Elif Nilay Özgen",
    "Tolgahan Özden",
    "Ayşe Nur İnal",
    "Kübra Satılmış"
   ]
  },
  "title": "1. Takım Oyunu — Türk Sokak Yemekleri",
  "week": "8. Hafta",
  "weekday": "Çarşamba"
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Nurten Ocak Tamer"
  },
  "date": "29 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 19 kişi çiğ köfte yaptı (etli/etsiz). Sıralama (kısmi): 1. Eyüp Can, 2. Armağan, 3. Enes, 4. Şadi, 7. Hasan Alp. 5. ve 6. sıra transkriptte doğrulanamadı.",
    "name": "Kaptanlık oyunu — Çiğ köfte",
    "winner": "Eyüp Can Güneş"
   }
  ],
  "id": "2026-09-29",
  "immunity": null,
  "notes": [
   "teams_weeks1-12.csv 8. hafta Kırmızı kaptanı Şadi, Mavi 9 / Kırmızı 10 kişi gösterir; transkript: Kırmızı kaptan Nurten, Şadi Mavi'de, Mavi 10 / Kırmızı 9 kişi.",
   "8. hafta potu 30 Eylül'de oluşmaya başlar; bu bölüm sonunda potada kimse yok."
  ],
  "pot": [],
  "source": "transkript",
  "summary": "8. hafta kaptanlık oyunu: çiğ köfte (45 dk). Eyüp Can Güneş 1. olup Mavi kaptan oldu (2. Mavi kaptanlığı); Nurten Ocak Tamer'i Kırmızı kaptan seçti. Bu hafta düello yok, dört takım oyunu var.",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Enes Vardar",
    "Hasan Alp Karabacak",
    "Şiringül Kaya",
    "Buse Baştan",
    "Şadi Altınay"
   ],
   "red": [
    "Nurten Ocak Tamer",
    "Şükran Boyraz",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Emre İrkilmez",
    "Elif Nilay Özgen",
    "Tolgahan Özden",
    "Ayşe Nur İnal",
    "Kübra Satılmış"
   ]
  },
  "title": "Kaptanlık — Çiğ Köfte",
  "week": "8. Hafta",
  "weekday": "Salı"
 },
 {
  "candidates": [],
  "date": "28 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 19 kişi. En iyi: Tolga (kusursuza yakın). 11 kişi 2. etaba geçti.",
    "name": "Ödül oyunu 1. etap — Krem karamel",
    "winner": "Tolga Çakuş"
   },
   {
    "detail": "30 dk, 11 kişi. Sıralama: 1. Enes, 2. Batuhan, 3. Şükran. Enes 100.000 TL kazandı.",
    "name": "Ödül oyunu 2. etap — Hünnap yaratıcılık",
    "winner": "Enes Vardar"
   }
  ],
  "id": "2026-09-28",
  "notes": [
   "8. hafta potu 30 Eylül'de oluşmaya başlar; bu bölüm sonunda potada kimse yok."
  ],
  "pot": [],
  "source": "transkript",
  "summary": "8. hafta açılışı: ödül oyunu (100.000 TL), kaptanlık yok. 1. etap krem karamel (Tolga en iyi), 2. etap hünnap yaratıcılık: Enes kazandı, 100.000 TL aldı. 19 kişi beyaz önlük giydi.",
  "title": "Ödül Oyunu — Krem Karamel ve Hünnap",
  "week": "8. Hafta",
  "weekday": "Pazartesi",
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Nurten Ocak Tamer"
  },
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Armağan Kırant",
    "Tolga Çakuş",
    "Burçin Oğuz",
    "Enes Vardar",
    "Hasan Alp Karabacak",
    "Şiringül Kaya",
    "Buse Baştan",
    "Şadi Altınay"
   ],
   "red": [
    "Nurten Ocak Tamer",
    "Şükran Boyraz",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Emre İrkilmez",
    "Elif Nilay Özgen",
    "Tolgahan Özden",
    "Ayşe Nur İnal",
    "Kübra Satılmış"
   ]
  },
  "immunity": null
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Şükran Boyraz",
   "red": "Şiringül Kaya"
  },
  "date": "27 Eylül 2026",
  "eliminated": "Recep Batur",
  "games": [
   {
    "detail": "45 dk. Sıralama: 1. Muhammed, 2. Armağan, 3. Nilay, 4. Ayşe. Recep, Enes, Hasan Alp, Eyüp Can 2. etaba kaldı.",
    "name": "Eleme 1. etap — Zencefil yaratıcılık",
    "winner": "Muhammed Yahya Haliloğlu"
   },
   {
    "detail": "45 dk, Mehmet Şef imza tabağı (bonfile, döner inceliğinde). Sıralama: 1. Eyüp Can, 2. Enes, 3. Hasan Alp, 4. Recep elendi.",
    "name": "Eleme 2. etap — Dana Şaşırma",
    "winner": "Eyüp Can Güneş"
   }
  ],
  "id": "2026-09-27",
  "notes": [
   "1. etapta 2. etaba kalan 4 kişinin tabak tarifleri ASR'de çok belirsiz (düşük güven)."
  ],
  "pot": [
   "Recep Batur",
   "Armağan Kırant",
   "Eyüp Can Güneş",
   "Elif Nilay Özgen",
   "Enes Vardar",
   "Hasan Alp Karabacak",
   "Muhammed Yahya Haliloğlu",
   "Ayşe Nur İnal"
  ],
  "source": "transkript",
  "summary": "7. hafta elemesi. 1. etap zencefil yaratıcılık: Muhammed, Armağan, Nilay, Ayşe kurtuldu. 2. etap Mehmet Şef Dana Şaşırma: Eyüp Can, Enes, Hasan Alp kurtuldu; Recep Batur elendi.",
  "teams": {
   "blue": [
    "Şükran Boyraz",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Buse Baştan"
   ],
   "red": [
    "Şiringül Kaya",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Hasan Alp Karabacak",
    "Batuhan Nazikoğlu",
    "Enes Vardar",
    "Burçin Oğuz",
    "Recep Batur",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "Eleme — Recep Batur Elendi",
  "week": "7. Hafta",
  "weekday": "Pazar",
  "immunity": null
 },
 {
  "candidates": [
   "Muhammed Yahya Haliloğlu",
   "Ayşe Nur İnal"
  ],
  "captains": {
   "blue": "Şükran Boyraz",
   "red": "Şiringül Kaya"
  },
  "date": "26 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "1 saat, 5 çeşit x 2 düello: Adana böreği, pırasalı/Arnavut böreği, kıymalı kol böreği, gül böreği, balkabaklı börek. Kırmızı 6-4 kazandı; hafta 2-2 berabere.",
    "name": "4. Takım Oyunu — Börekler",
    "winner": "Kırmızı"
   }
  ],
  "id": "2026-09-26",
  "immunity": {
   "detail": "45 dk, lipsos balığı ve sıfır atık malzemeleri. Sıralama: 1. Nilay, 2. Tolga, 3. Muhammed. Nilay 7. aday olarak Muhammed'i seçti.",
   "name": "Sıfır atık",
   "winner": "Elif Nilay Özgen"
  },
  "notes": [
   "Konsey (Mavi): Ayşe 8, Bahar 5, Tolgahan 3, Tolga 2, Emre 1, Buse 1.",
   "Sıfır atıkta 4. sıra ve iki tabak sahipsiz (Bahar/Tolgahan)."
  ],
  "pot": [
   "Recep Batur",
   "Armağan Kırant",
   "Eyüp Can Güneş",
   "Elif Nilay Özgen",
   "Enes Vardar",
   "Hasan Alp Karabacak",
   "Muhammed Yahya Haliloğlu",
   "Ayşe Nur İnal"
  ],
  "source": "transkript",
  "summary": "Yöresel börekler, 10 düello, Kırmızı 6-4 kazandı; hafta 2-2 berabere bitti. Bireysel dokunulmazlık Nilay'ın (sıfır atık); Muhammed ve Ayşe potaya gitti, pot 8 kişiyle tamamlandı.",
  "teams": {
   "blue": [
    "Şükran Boyraz",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Buse Baştan"
   ],
   "red": [
    "Şiringül Kaya",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Hasan Alp Karabacak",
    "Batuhan Nazikoğlu",
    "Enes Vardar",
    "Burçin Oğuz",
    "Recep Batur",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "4. Takım Oyunu — Börekler",
  "week": "7. Hafta",
  "weekday": "Cumartesi"
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Şükran Boyraz",
   "red": "Şiringül Kaya"
  },
  "date": "25 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 11 yemek: soğan çorbası, kereviz, kaponata, kabak dolması, imam bayıldı, mücver, karnabahar steak, sebzeli tajin, parmigiana, sebzeli pilav, balkabaklı cheesecake. Mavi 8-3 kazandı.",
    "name": "Ödül oyunu — Sebzeli yemekler (takım etabı)",
    "winner": "Mavi"
   },
   {
    "detail": "30 dk, 10 Mavi yarışmacı. Sıralama: 1. Nilay, 2. Bahar, 3. Ayşe, 4. Muhammed, 5. Tolgahan. Nilay 100.000 TL kazandı.",
    "name": "Ödül oyunu — Bayramiç beyazı (bireysel etap)",
    "winner": "Elif Nilay Özgen"
   }
  ],
  "id": "2026-09-25",
  "notes": [
   "Gecenin yemeği (takım etabı) net değil: Danilo+Mehmet Şef cheesecake, Somer Şef tajin dedi.",
   "Kerevizde Mavi aşçının ismi ASR'de bozuk.",
   "Emre markette Bayramiç beyazı boğazına kaçtı; Mehmet Şef müdahale etti, 1 dk ek süre verildi."
  ],
  "pot": [
   "Recep Batur",
   "Armağan Kırant",
   "Eyüp Can Güneş",
   "Elif Nilay Özgen",
   "Enes Vardar",
   "Hasan Alp Karabacak"
  ],
  "source": "transkript",
  "summary": "3. ödül oyunu (100.000 TL). Takım etabı sebze yemekleri: Mavi 8-3. Bireysel etap Bayramiç beyazı: Nilay kazandı, 100.000 TL aldı.",
  "teams": {
   "blue": [
    "Şükran Boyraz",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Buse Baştan"
   ],
   "red": [
    "Şiringül Kaya",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Hasan Alp Karabacak",
    "Batuhan Nazikoğlu",
    "Enes Vardar",
    "Burçin Oğuz",
    "Recep Batur",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "3. Ödül Oyunu — Sebze Yemekleri ve Bayramiç Beyazı",
  "week": "7. Hafta",
  "weekday": "Cuma",
  "immunity": null
 },
 {
  "candidates": [
   "Enes Vardar",
   "Hasan Alp Karabacak"
  ],
  "captains": {
   "blue": "Şükran Boyraz",
   "red": "Şiringül Kaya"
  },
  "date": "24 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "60 dk, 11 yemek: karalahana sarması, Akçaabat köftesi, mısır ekmeği + ayran, kaygana, fasulye diblesi, hamsi kuşu, Çayeli kuru fasulyesi, tavuklu siron, Rize kavurması + pilav, karalahana çorbası, pepeçura. Mavi 6-5 kazandı.",
    "name": "3. Takım Oyunu — Karadeniz",
    "winner": "Mavi"
   }
  ],
  "id": "2026-09-24",
  "immunity": {
   "detail": "30 dk. Sıralama: 1. Şiringül, 2. Burçin, 3. Armağan, 4. Recep. Şiringül 5. aday olarak Enes'i seçti (Enes kendisi istedi).",
   "name": "Şeftali tart tatin",
   "winner": "Şiringül Kaya"
  },
  "notes": [
   "Konsey (Kırmızı): Hasan Alp 5, Burçin 4, Nurten 4, Kübra 4, Şadi 2, Batuhan 1."
  ],
  "pot": [
   "Recep Batur",
   "Armağan Kırant",
   "Eyüp Can Güneş",
   "Elif Nilay Özgen",
   "Enes Vardar",
   "Hasan Alp Karabacak"
  ],
  "source": "transkript",
  "summary": "Karadeniz yemekleri, 11 yemek, Mavi 6-5 kazandı (hafta 2-1). Bireysel dokunulmazlık Şiringül'ün (şeftali tart tatin); Enes ve Hasan Alp potaya gitti.",
  "teams": {
   "blue": [
    "Şükran Boyraz",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Buse Baştan"
   ],
   "red": [
    "Şiringül Kaya",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Hasan Alp Karabacak",
    "Batuhan Nazikoğlu",
    "Enes Vardar",
    "Burçin Oğuz",
    "Recep Batur",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "3. Takım Oyunu — Karadeniz",
  "week": "7. Hafta",
  "weekday": "Perşembe"
 },
 {
  "candidates": [
   "Eyüp Can Güneş",
   "Elif Nilay Özgen"
  ],
  "captains": {
   "blue": "Şükran Boyraz",
   "red": "Şiringül Kaya"
  },
  "date": "23 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "60 dk, 10 düello, 5-5 berabere. Emre, Muhammed ve Tolga tepsileri derin dondurucuya koydu (4 uyarıya rağmen); Şadi ihbar etti, görüntüler incelendi ve Mavi kural gereği kaybetti. Hafta skoru 1-1.",
    "name": "2. Takım Oyunu — Kazan Dibi",
    "winner": "Kırmızı"
   }
  ],
  "id": "2026-09-23",
  "immunity": {
   "detail": "30 dk, ilave şeker yok. Sıralama: 1. Bahar, 2. Ayşe, 3. Şükran. Bahar 3. aday olarak Eyüp Can'ı seçti.",
   "name": "Şekeri meyvelerden gelen tatlı",
   "winner": "Bahar Kaya"
  },
  "notes": [
   "Konsey (Mavi): Nilay 8, Muhammed 6, Tolga 4, Tolgahan 2.",
   "Mısır unlu helva yapan kişi bilinmiyor (muhtemelen Buse)."
  ],
  "pot": [
   "Recep Batur",
   "Armağan Kırant",
   "Eyüp Can Güneş",
   "Elif Nilay Özgen"
  ],
  "source": "transkript",
  "summary": "Kazan dibi 5-5 berabere bitti ama Mavi'nin derin dondurucu kural ihlali nedeniyle Kırmızı kazandı. Bireysel dokunulmazlık Bahar'ın; Eyüp Can ve Nilay potaya gitti.",
  "teams": {
   "blue": [
    "Şükran Boyraz",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Buse Baştan"
   ],
   "red": [
    "Şiringül Kaya",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Hasan Alp Karabacak",
    "Batuhan Nazikoğlu",
    "Enes Vardar",
    "Burçin Oğuz",
    "Recep Batur",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "2. Takım Oyunu — Kazan Dibi",
  "week": "7. Hafta",
  "weekday": "Çarşamba"
 },
 {
  "candidates": [
   "Recep Batur",
   "Armağan Kırant"
  ],
  "captains": {
   "blue": "Şükran Boyraz",
   "red": "Şiringül Kaya"
  },
  "date": "22 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 9 yemek: Beyran çorbası, Acılı atom, Cajun karides, Spicy ramen, Isot kebabı, Spaghetti all'assassina, Berbere tavuk güveci / Doro Wat, Rogan Josh, Acılı çikolatalı tart. Mavi 5-4 kazandı.",
    "name": "1. Takım Oyunu — Acı Dünya Mutfağı",
    "winner": "Mavi"
   }
  ],
  "id": "2026-09-22",
  "immunity": {
   "detail": "30 dk. Sıralama: 1. Burçin, 2. Enes, 3. Şadi, 4. Recep. Burçin 1. aday olarak Recep Batur'u seçti.",
   "name": "Köfteli İslim kebabı",
   "winner": "Burçin Oğuz"
  },
  "notes": [
   "Konsey (Kırmızı): Armağan 6, Enes 5, Şadi 5, Hasan Alp 2, Batuhan 1, Nurten 1.",
   "Cajun karides ve ramen kazananları skordan çıkarımla (orta güven)."
  ],
  "pot": [
   "Recep Batur",
   "Armağan Kırant"
  ],
  "source": "transkript",
  "summary": "Acı dünya mutfağı, 9 düello, Mavi 5-4 kazandı. Gecenin yemeği Emre'nin acılı çikolatalı tartı. Bireysel dokunulmazlık Burçin'in (köfteli İslim kebabı); Recep ve Armağan potaya gitti.",
  "teams": {
   "blue": [
    "Şükran Boyraz",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Buse Baştan"
   ],
   "red": [
    "Şiringül Kaya",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Hasan Alp Karabacak",
    "Batuhan Nazikoğlu",
    "Enes Vardar",
    "Burçin Oğuz",
    "Recep Batur",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "1. Takım Oyunu — Acı Dünya Mutfağı",
  "week": "7. Hafta",
  "weekday": "Salı"
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Şükran Boyraz",
   "red": "Şiringül Kaya"
  },
  "date": "21 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 3 adet lahmacun. Sıralama: 1. Şükran, 2. Eyüp Can, 4. Şadi, 5. Ayşe, 6. Tolgahan, 7. Hasan Alp. Bahar sıralamaya alınmadı (ceviz kabuğu).",
    "name": "Kaptanlık oyunu — Lahmacun",
    "winner": "Şükran Boyraz"
   }
  ],
  "id": "2026-09-21",
  "immunity": null,
  "notes": [
   "3. sıra [bulunamadı] — oval lahmacun yapan kişinin ismi transkriptte net değil.",
   "Buse Baştan'ın lahmacunu transkriptte anlatılmadı.",
   "Web 9+9 kişi listeler; transkript 10+10 gösterir (Buse ve Şadi webde eksik)."
  ],
  "pot": [],
  "source": "transkript",
  "summary": "7. hafta kaptanlık oyunu: lahmacun (45 dk, 3 adet). Şükran Boyraz 1. olup Mavi kaptan oldu; Şiringül Kaya'yı Kırmızı kaptan seçti.",
  "teams": {
   "blue": [
    "Şükran Boyraz",
    "Bahar Kaya",
    "Muhammed Yahya Haliloğlu",
    "Tolga Çakuş",
    "Elif Nilay Özgen",
    "Emre İrkilmez",
    "Eyüp Can Güneş",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Buse Baştan"
   ],
   "red": [
    "Şiringül Kaya",
    "Armağan Kırant",
    "Nurten Ocak Tamer",
    "Hasan Alp Karabacak",
    "Batuhan Nazikoğlu",
    "Enes Vardar",
    "Burçin Oğuz",
    "Recep Batur",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "Kaptanlık — Lahmacun",
  "week": "7. Hafta",
  "weekday": "Pazartesi"
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Bahar Kaya"
  },
  "date": "20 Eylül 2026",
  "eliminated": "Faruk Garip",
  "games": [
   {
    "detail": "Market 3 dk; pişirme süresi transkriptte söylenmedi. 8 yarışmacı; 1. Şiringül Kaya, 2. Nurten Ocak Tamer, 3. Şadi Altınay, 4. Tolga Çakuş geçti.",
    "name": "Tahin (1. tur)",
    "winner": "Şiringül Kaya"
   },
   {
    "detail": "Somer Şef (Greg Malouf tarifi); 50 dk; puanlama iç 5, hamur 3, salata 2. 1. Ayşe Nur İnal, 2. Tolgahan Özden, 3. Kübra Satılmış, 4. Faruk Garip elendi.",
    "name": "Ördek bastilla + Fas salatası (2. tur)",
    "winner": "Ayşe Nur İnal"
   }
  ],
  "id": "2026-09-20",
  "immunity": null,
  "notes": [
   "6. hafta potası transkripte göre 8 kişidir; brief/web DÜZELTME (5 kişi) ile çelişiyor — karar bekleniyor.",
   "1. tur pişirme süresi [bulunamadı] (yalnızca market 3 dk söylendi).",
   "2. tur 50 dk geçen süre olarak söylendi, duyurulan limit değil (orta güven).",
   "Karar anındaki 'veda eden Kübra' cümlesi ASR bozukluğudur; elenen Faruk'tur."
  ],
  "pot": [
   "Şiringül Kaya",
   "Tolgahan Özden",
   "Faruk Garip",
   "Şadi Altınay",
   "Tolga Çakuş",
   "Kübra Satılmış",
   "Nurten Ocak Tamer",
   "Ayşe Nur İnal"
  ],
  "source": "transkript",
  "summary": "6. hafta eleme gecesi. 1. tur tahin: 8 yarışmacı pişirdi; Şiringül 1., Nurten 2., Şadi 3., Tolga 4. olarak geçti. 2. turda Somer Şef'in ördek bastilla + Fas salatası yapıldı; Ayşe 1., Tolgahan 2., Kübra 3. oldu, Faruk Garip elendi.",
  "teams": {
   "blue": [
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Şiringül Kaya",
    "Recep Batur",
    "Emre İrkilmez"
   ],
   "red": [
    "Bahar Kaya",
    "Elif Nilay Özgen",
    "Şükran Boyraz",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Faruk Garip",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "Eleme — Tahin ve Ördek Bastilla; Faruk elendi",
  "week": "6. Hafta",
  "weekday": "Pazar"
 },
 {
  "candidates": [
   "Nurten Ocak Tamer (7. aday, Enes'in seçimi)",
   "Ayşe Nur İnal (8. aday, konsey 8 oy)"
  ],
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Bahar Kaya"
  },
  "date": "19 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, tabakta 3 adet; Kırmızı 6–4 kazandı. Eyüp Can'ın şekerparesi günün tabağı.",
    "name": "Şekerpare",
    "winner": "Kırmızı takım"
   },
   {
    "detail": "30 dk; 1. Enes Vardar, 2. Ayşe Nur İnal, 3. Muhammed Yahya Haliloğlu, 4. Armağan Kırant.",
    "name": "Sıfır atık (bireysel dokunulmazlık)",
    "winner": "Enes Vardar"
   }
  ],
  "id": "2026-09-19",
  "immunity": {
   "detail": "30 dk; kuzu sırt/yürek, siyah pirinç, mürdüm eriği, armut, kabak, fındık, rezene, otlu peynir, çipotle. 1. Enes, 2. Ayşe, 3. Muhammed, 4. Armağan (4. sıra orta güven).",
   "name": "Sıfır atık",
   "winner": "Enes Vardar"
  },
  "notes": [
   "Dokunulmazlık 4.sü Armağan (isim ASR'da bozuk, orta güven).",
   "Tolgahan Özden'in dokunulmazlık yemeği transkriptte yakalanamadı.",
   "Konsey toplamı 18 oy (9 seçmen × 2)."
  ],
  "pot": [
   "Şiringül Kaya",
   "Tolgahan Özden",
   "Faruk Garip",
   "Şadi Altınay",
   "Tolga Çakuş",
   "Kübra Satılmış",
   "Nurten Ocak Tamer",
   "Ayşe Nur İnal"
  ],
  "source": "transkript",
  "summary": "Şekerpare takım oyununu Kırmızı 6–4 kazandı; hafta 2–2 berabere bitti (sezonda ilk). Sıfır atık dokunulmazlığını Enes Vardar kazandı, Nurten'i seçti; konseyde Ayşe 8 oyla 8. aday oldu.",
  "teams": {
   "blue": [
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Şiringül Kaya",
    "Recep Batur",
    "Emre İrkilmez"
   ],
   "red": [
    "Bahar Kaya",
    "Elif Nilay Özgen",
    "Şükran Boyraz",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Faruk Garip",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "Şekerpare Takım Oyunu ve Sıfır Atık Dokunulmazlığı",
  "week": "6. Hafta",
  "weekday": "Cumartesi"
 },
 {
  "candidates": [
   "Tolga Çakuş (5. aday, Burçin'in seçimi)",
   "Kübra Satılmış (6. aday, konsey beraberliğinde kaptan seçimi)"
  ],
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Bahar Kaya"
  },
  "date": "18 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 9 yemek; Mavi 6–3 kazandı.",
    "name": "80'ler yemekleri",
    "winner": "Mavi takım"
   }
  ],
  "id": "2026-09-18",
  "immunity": {
   "detail": "30 dk, 3 adet + püre; 1. Burçin, 2. [bulunamadı], 3. Tolga, 4. Şükran. Faruk +3 dk ek süre aldı.",
   "name": "Kadınbudu köfte",
   "winner": "Burçin Oğuz"
  },
  "notes": [
   "Dokunulmazlık 2.si transkriptte adlandırılmadı.",
   "Tolga, Burçin'in seçimini 1. haftanın intikamı saydı."
  ],
  "source": "transkript",
  "summary": "80'ler yemekleri takım oyununu Mavi 6–3 kazandı; Tolgahan'ın portakallı ördeği gecenin yemeği oldu. Kadınbudu köfte dokunulmazlığını Burçin Oğuz kazandı, Tolga'yı seçti; konseyde Kübra ve Eyüp Can 6–6 berabere kaldı, kaptan Bahar Kübra'yı seçti.",
  "teams": {
   "blue": [
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Şiringül Kaya",
    "Recep Batur",
    "Emre İrkilmez"
   ],
   "red": [
    "Bahar Kaya",
    "Elif Nilay Özgen",
    "Şükran Boyraz",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Faruk Garip",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "80'ler Yemekleri ve Kadınbudu Köfte Dokunulmazlığı",
  "week": "6. Hafta",
  "weekday": "Cuma",
  "pot": []
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Bahar Kaya"
  },
  "date": "17 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "60 dk, çiftler; 5 burger türü (Klasik cheeseburger, Chili, Simple, White, Old School). Çoğu çiftin türü bilinmiyor.",
    "name": "Smash Burger (1. tur)",
    "winner": null
   },
   {
    "detail": "30 dk, 10 finalist; 1. Tolga Çakuş, 2. Tolgahan Özden (orta güven), 3. Ayşe Nur İnal, 4. Muhammed Yahya Haliloğlu.",
    "name": "Cennet çamuru (final)",
    "winner": "Tolga Çakuş"
   }
  ],
  "id": "2026-09-17",
  "immunity": null,
  "notes": [
   "Şadi–Recep düello galibi '6-2' skorundan çıkarıldı (orta güven).",
   "Cennet çamuru 2.si Tolgahan (orta güven).",
   "Emre tabağı yetiştiremedi; ceza: ertesi gün herkese burger pişirecek."
  ],
  "source": "transkript",
  "summary": "Ödül oyunu: 1. turda Serhat Doğramacı smash burger çiftler halinde pişirildi (Mavi 7, Kırmızı 3 finale çıktı); finalde Cennet çamuru yapıldı, Tolga Çakuş kazandı ve 100.000 TL hediye çeki aldı.",
  "teams": {
   "blue": [
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Şiringül Kaya",
    "Recep Batur",
    "Emre İrkilmez"
   ],
   "red": [
    "Bahar Kaya",
    "Elif Nilay Özgen",
    "Şükran Boyraz",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Faruk Garip",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "Ödül Oyunu — Smash Burger ve Cennet Çamuru",
  "week": "6. Hafta",
  "weekday": "Perşembe",
  "pot": []
 },
 {
  "candidates": [
   "Faruk Garip (3. aday, Kübra'nın seçimi)",
   "Şadi Altınay (4. aday, konsey beraberliğinde kaptan seçimi)"
  ],
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Bahar Kaya"
  },
  "date": "16 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 10 mantı türü; Mavi 8–2 kazandı.",
    "name": "Mantılar (düello)",
    "winner": "Mavi takım"
   }
  ],
  "id": "2026-09-16",
  "immunity": {
   "detail": "30 dk; 1. Kübra ('Hatasız bir tabak'), 2. Hasan Alp, 3. Nilay. Bahar süre bitiminde tabağa dokunduğu için değerlendirilmedi.",
   "name": "Cafe de Paris soslu antrikot",
   "winner": "Kübra Satılmış"
  },
  "notes": [
   "Faruk'un iki oyu iptal edildi — yarışmada ilk oy iptali.",
   "Şadi, Bahar/Şükran'ın oyları organize ettiğini iddia etti; 17 Eylül'de görüntüler incelendi, kanıt bulunamadı."
  ],
  "source": "transkript",
  "summary": "Mantılar düellosunu Mavi 8–2 kazandı. Cafe de Paris soslu antrikot dokunulmazlığını Kübra Satılmış kazandı, Faruk'u seçti; konseyde Şadi ve Şükran 7–7 berabere kaldı, Faruk'un oy değiştirme nedeniyle iki oyu iptal edildi, kaptan Bahar Şadi'yi seçti.",
  "teams": {
   "blue": [
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Şiringül Kaya",
    "Recep Batur",
    "Emre İrkilmez"
   ],
   "red": [
    "Bahar Kaya",
    "Elif Nilay Özgen",
    "Şükran Boyraz",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Faruk Garip",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "Mantılar Düellosu ve Antrikot Dokunulmazlığı",
  "week": "6. Hafta",
  "weekday": "Çarşamba",
  "pot": []
 },
 {
  "candidates": [
   "Şiringül Kaya (1. aday, Emre'nin seçimi)",
   "Tolgahan Özden (2. aday, konsey 9 oy)"
  ],
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Bahar Kaya"
  },
  "date": "15 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "60 dk, 9 yemek; Kırmızı 5–3 kazandı. Baget düellosunda puan verilmedi (iki tabak da çiğ).",
    "name": "Tavuk menüsü",
    "winner": "Kırmızı takım"
   }
  ],
  "id": "2026-09-15",
  "immunity": {
   "detail": "45 dk; 1. Emre ('aklımda kalan en iyi tatlılardan biri'), 2. Enes, 3. Armağan, 4. Ayşe. Şiringül değerlendirilmedi (süre sonrası sifonu blast chiller'a koydu).",
   "name": "Orman meyveleri",
   "winner": "Emre İrkilmez"
  },
  "notes": [
   "Konsey toplamı 19 oy; ara sayımlar transkriptte tutarsız (sonuç kesin).",
   "Nilay'ın galantin farsı lavaboya düştü; Şadi su tuttu."
  ],
  "source": "transkript",
  "summary": "Tavuk menüsü takım oyununu Kırmızı 5–3 kazandı; Tolga'nın şinitzeli gecenin yemeği oldu. Orman meyveleri dokunulmazlığını Emre İrkilmez kazandı, Şiringül'ü seçti; konseyde Tolgahan 9 oyla 2. aday oldu.",
  "teams": {
   "blue": [
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Şiringül Kaya",
    "Recep Batur",
    "Emre İrkilmez"
   ],
   "red": [
    "Bahar Kaya",
    "Elif Nilay Özgen",
    "Şükran Boyraz",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Faruk Garip",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "Tavuk Menüsü ve Orman Meyveleri Dokunulmazlığı",
  "week": "6. Hafta",
  "weekday": "Salı",
  "pot": []
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Armağan Kırant",
   "red": "Bahar Kaya"
  },
  "date": "14 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "60 dk, 25 adet; 1. Armağan Kırant, 2. Enes Vardar, 3. Emre İrkilmez, 4. Bahar Kaya, 5. Kübra Satılmış, 6. Şiringül Kaya, 7. Hasan Alp Karabacak, 8. Nurten Ocak Tamer.",
    "name": "Profiterol (kaptanlık)",
    "winner": "Armağan Kırant"
   }
  ],
  "id": "2026-09-14",
  "immunity": null,
  "notes": [
   "Muhammed ve Tolgahan tamamlayamadı; Tolga'nın sayısı yetmedi; Faruk yanlış tarifle yaptı.",
   "Faruk Garip 5. yedek olarak yarışmacı oylarıyla ana kadroya giren ilk yedek; Buse Baştan sıradaki yedek (Instagram oylaması)."
  ],
  "source": "transkript",
  "summary": "Kaptanlık oyunu profiterol (60 dk, 25 adet): Armağan Kırant 1. olarak Mavi kaptan oldu, Bahar Kaya'yı Kırmızı kaptan seçti; takımlar kuruldu. Açılışta Cansu'nun elendiği ve Faruk'un 5. yedek olarak girdiği duyuruldu.",
  "teams": {
   "blue": [
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Ayşe Nur İnal",
    "Tolgahan Özden",
    "Şiringül Kaya",
    "Recep Batur",
    "Emre İrkilmez"
   ],
   "red": [
    "Bahar Kaya",
    "Elif Nilay Özgen",
    "Şükran Boyraz",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Eyüp Can Güneş",
    "Burçin Oğuz",
    "Faruk Garip",
    "Kübra Satılmış",
    "Şadi Altınay"
   ]
  },
  "title": "Kaptanlık — Profiterol",
  "week": "6. Hafta",
  "weekday": "Pazartesi",
  "pot": []
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Şadi Altınay"
  },
  "date": "13 Eylül 2026",
  "eliminated": "Cansu Şöhret",
  "games": [
   {
    "detail": "45 dk, market 3 dk; 1. Armağan Kırant, 2. Elif Nilay Özgen, 3. Şadi Altınay, 4. Tolgahan Özden geçti. Recep Batur yemek çıkaramadı.",
    "name": "Mürdüm eriği (1. tur)",
    "winner": "Armağan Kırant"
   },
   {
    "detail": "Danilo Şef; 45 dk; puanlama et 3, sos 3, püre 2, köpük 1, görsel 1. 1. Batuhan Nazikoğlu, 2. Recep Batur, 3. Emre İrkilmez, 4. Cansu Şöhret elendi.",
    "name": "Filetto di manzo con purè di patate (2. tur)",
    "winner": "Batuhan Nazikoğlu"
   }
  ],
  "id": "2026-09-13",
  "immunity": null,
  "notes": [
   "5. hafta potası transkripte göre 8 kişidir (webdeki 6 vs 8 çelişkisi çözüldü).",
   "Batuhan'ın 1. tur yemeğinin adı ASR'da bozuk ('dil balığı', orta güven).",
   "Bir şef Batuhan'ın balığındaki iki kılçığı yuttu."
  ],
  "pot": [
   "Cansu Şöhret",
   "Elif Nilay Özgen",
   "Tolgahan Özden",
   "Emre İrkilmez",
   "Recep Batur",
   "Şadi Altınay",
   "Batuhan Nazikoğlu",
   "Armağan Kırant"
  ],
  "source": "transkript",
  "summary": "5. hafta eleme gecesi. 1. tur mürdüm eriği: Armağan 1., Nilay 2., Şadi 3., Tolgahan 4. olarak geçti; Recep yemek çıkaramadı. 2. turda Danilo Şef'in filetto di manzo con purè di patate yemeği yapıldı; Batuhan 1., Recep 2., Emre 3. oldu, Cansu Şöhret elendi.",
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Şükran Boyraz",
    "Cansu Şöhret",
    "Şiringül Kaya",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Nurten Ocak Tamer",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Şadi Altınay",
    "Eyüp Can Güneş",
    "Tolgahan Özden",
    "Emre İrkilmez",
    "Enes Vardar",
    "Muhammed Yahya Haliloğlu",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Armağan Kırant",
    "Batuhan Nazikoğlu"
   ]
  },
  "title": "Eleme — Mürdüm Eriği ve Filetto di Manzo; Cansu elendi",
  "week": "5. Hafta",
  "weekday": "Pazar"
 },
 {
  "candidates": [
   "Batuhan Nazikoğlu (7. aday, Hasan Alp'in seçimi)",
   "Armağan Kırant (8. aday, konsey 8 oy)"
  ],
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Şadi Altınay"
  },
  "date": "12 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "60 dk; Mavi 5–4 kazandı. Hasan Alp–Şiringül düellosunda puan verilmedi.",
    "name": "Perde Pilavı",
    "winner": "Mavi takım"
   }
  ],
  "id": "2026-09-12",
  "immunity": {
   "detail": "30 dk; tavuk göğsü, ricotta, panko, portakal, sarı mercimek, yoğurt, susam yağı, ceviz, beyaz lahana, beyaz üzüm suyu, limon otu. 1. Hasan Alp, 2. Muhammed, 3. Şadi, 4. Armağan (orta güven).",
   "name": "Sıfır atık",
   "winner": "Hasan Alp Karabacak"
  },
  "notes": [
   "7. düello galip anonsu ASR'da bozuk; skor akışına göre Nurten (orta güven).",
   "Dokunulmazlık 4.sü Armağan (orta güven).",
   "Emre'nin konsey oyları [bulunamadı]; Şadi'nin ikinci oyu belirsiz.",
   "'6 kişilik grup' ve 'sevgi skalası' tartışması; Şadi tuz fırlatma talimatını itiraf etti."
  ],
  "source": "transkript",
  "summary": "Perde pilavı takım oyununu Mavi 5–4 kazandı; hafta 3–1 Mavi (sezonda ilk geri dönüş). Sıfır atık dokunulmazlığını Hasan Alp Karabacak kazandı, Batuhan'ı seçti; konseyde Armağan 8 oyla 8. aday oldu.",
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Şükran Boyraz",
    "Cansu Şöhret",
    "Şiringül Kaya",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Nurten Ocak Tamer",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Şadi Altınay",
    "Eyüp Can Güneş",
    "Tolgahan Özden",
    "Emre İrkilmez",
    "Enes Vardar",
    "Muhammed Yahya Haliloğlu",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Armağan Kırant",
    "Batuhan Nazikoğlu"
   ]
  },
  "title": "Perde Pilavı ve Sıfır Atık Dokunulmazlığı",
  "week": "5. Hafta",
  "weekday": "Cumartesi",
  "pot": []
 },
 {
  "candidates": [
   "Recep Batur (5. aday, Batuhan'ın seçimi)",
   "Şadi Altınay (6. aday, konsey 6 oy)"
  ],
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Şadi Altınay"
  },
  "date": "11 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 9 yemek; Mavi 5–2 kazandı. Kare Kare ve Dulce de Coco düellolarında puan verilmedi.",
    "name": "Hindistan cevizi yemekleri",
    "winner": "Mavi takım"
   }
  ],
  "id": "2026-09-11",
  "immunity": {
   "detail": "35 dk (Diyarbakır); 1. Batuhan ('Üçümüzün de birincisi'), 2. Armağan (orta güven), 3. Eyüp Can (orta güven).",
   "name": "Patlıcan Meftunesi",
   "winner": "Batuhan Nazikoğlu"
  },
  "notes": [
   "Ön oyun hindistan cevizi açma yarışını Kırmızı kazandı (mini oyun, takım oyunu değil).",
   "Armağan bugün üç yemek yaptı.",
   "Konsey toplamı 19 oy; bir oy kayıp/açıklanamadı.",
   "Şadi eve telefon soktuğunu itiraf etti; yaptırım uygulanacağı söylendi."
  ],
  "source": "transkript",
  "summary": "Hindistan cevizi yemekleri takım oyununu Mavi 5–2 kazandı; Bahar'ın balık köri gecenin yemeği oldu. Patlıcan meftunesi dokunulmazlığını Batuhan Nazikoğlu kazandı, Recep'i seçti; konseyde Şadi 6 oyla 6. aday oldu.",
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Şükran Boyraz",
    "Cansu Şöhret",
    "Şiringül Kaya",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Nurten Ocak Tamer",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Şadi Altınay",
    "Eyüp Can Güneş",
    "Tolgahan Özden",
    "Emre İrkilmez",
    "Enes Vardar",
    "Muhammed Yahya Haliloğlu",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Armağan Kırant",
    "Batuhan Nazikoğlu"
   ]
  },
  "title": "Hindistan Cevizi Yemekleri ve Patlıcan Meftunesi Dokunulmazlığı",
  "week": "5. Hafta",
  "weekday": "Cuma",
  "pot": []
 },
 {
  "candidates": [
   "Tolgahan Özden (3. aday, Muhammed'in seçimi)",
   "Emre İrkilmez (4. aday, konsey 7 oy)"
  ],
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Şadi Altınay"
  },
  "date": "10 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 10 pide türü; Mavi 9–1 kazandı.",
    "name": "Pideler",
    "winner": "Mavi takım"
   }
  ],
  "id": "2026-09-10",
  "immunity": {
   "detail": "30 dk; 1. Muhammed, 2. Hasan Alp, 3. Recep. ('3. dokunulmazlık' ifadesi orta güven.)",
   "name": "Kızılcık",
   "winner": "Muhammed Yahya Haliloğlu"
  },
  "notes": [
   "10. düello galibi Burçin ve 'gecenin pidesi' (orta güven).",
   "Bahar süre bitiminde Muhammed'e pidesinden tattırdı (yasak, uyarı aldı).",
   "8 Eylül konsey sayıları tartışması ep059'a aittir; web kaydıyla çelişiyor gibi — burada iddia edilmedi."
  ],
  "source": "transkript",
  "summary": "Pideler takım oyununu Mavi 9–1 kazandı (rekor skor). Kızılcık dokunulmazlığını Muhammed Yahya Haliloğlu kazandı, Tolgahan'ı seçti; konseyde Emre 7 oyla 4. aday oldu.",
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Şükran Boyraz",
    "Cansu Şöhret",
    "Şiringül Kaya",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Nurten Ocak Tamer",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Şadi Altınay",
    "Eyüp Can Güneş",
    "Tolgahan Özden",
    "Emre İrkilmez",
    "Enes Vardar",
    "Muhammed Yahya Haliloğlu",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Armağan Kırant",
    "Batuhan Nazikoğlu"
   ]
  },
  "title": "Pideler ve Kızılcık Dokunulmazlığı",
  "week": "5. Hafta",
  "weekday": "Perşembe",
  "pot": []
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Şadi Altınay"
  },
  "date": "9 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "45 dk, 9 yemek; oyun ortasında iki takım masa değiştirdi. Kırmızı 5–4 kazandı.",
    "name": "Ege yemekleri (1. tur)",
    "winner": "Kırmızı takım"
   },
   {
    "detail": "30 dk, yalnızca Kırmızı (10 yarışmacı); 1. Tolgahan Özden, 2. Eyüp Can Güneş, 3. Batuhan Nazikoğlu. Ödülün niteliği transkriptte adlandırılmadı.",
    "name": "Chili con carne (2. tur)",
    "winner": "Tolgahan Özden"
   }
  ],
  "id": "2026-09-09",
  "immunity": null,
  "notes": [
   "Keşkek galibi Mavi (orta güven), lor tatlısı galibi Kırmızı (orta güven — final skordan çıkarım).",
   "2. tur sunumlarından 2'sinin sunucusu eleştiriye dayalı atandı (orta güven).",
   "Ödülün niteliği [bulunamadı].",
   "Yusuf Usta (Akhisar) vefatı anıldı."
  ],
  "source": "transkript",
  "summary": "Ödül oyunu: 1. turda Ege yemekleri pişirildi, oyun ortasında istasyon değişimi yapıldı; Kırmızı 5–4 kazandı. 2. turda (yalnızca Kırmızı) chili con carne yapıldı; Tolgahan Özden kazandı, Eyüp Can 2., Batuhan 3. oldu.",
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Şükran Boyraz",
    "Cansu Şöhret",
    "Şiringül Kaya",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Nurten Ocak Tamer",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Şadi Altınay",
    "Eyüp Can Güneş",
    "Tolgahan Özden",
    "Emre İrkilmez",
    "Enes Vardar",
    "Muhammed Yahya Haliloğlu",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Armağan Kırant",
    "Batuhan Nazikoğlu"
   ]
  },
  "title": "Ödül Oyunu — Ege Yemekleri ve Chili con Carne",
  "week": "5. Hafta",
  "weekday": "Çarşamba",
  "pot": []
 },
 {
  "candidates": [
   "Cansu Şöhret",
   "Elif Nilay Özgen"
  ],
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Şadi Altınay"
  },
  "date": "8 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "9 yemek: Balık Ekmek, Balık Çorbası, Levrek Marin, Palamut Pilaki, Mantarlı Karides Güveç, Hamsi Tava, Kırlangıç Buğulama, Kalamar Tava, Kofana Izgara. Süre transkriptte duyurulmadı (45 dk çıkarımı, orta güven).",
    "name": "Balık restoranı yemekleri",
    "winner": "Kırmızı (6-3)"
   }
  ],
  "id": "2026-09-08",
  "immunity": {
   "detail": "Kaybeden Mavi takımın dokunulmazlığı; süre [bulunamadı]. Bahar 'en ipeksi, en kıvamında' helvayla kazandı.",
   "name": "Helva-i Hakani",
   "winner": "Bahar Kaya"
  },
  "notes": [
   "Balık çorbası kazanan adı ASR bozuk ('Akemey' — Recep çıkarımı, orta güven).",
   "Kırlangıç buğulama aşçıları net değil (Bahar? / Hasan Alp?, düşük güven) — yemek satırı yok.",
   "Gecenin yemeğinde şefler bölündü, uzlaşı yok.",
   "Cansu'nun 'gruplaşma' iddiası ve Şadi'nin turşu suyu tartışması yaşandı."
  ],
  "pot": [
   "Cansu Şöhret",
   "Elif Nilay Özgen"
  ],
  "source": "transkript",
  "summary": "5. hafta 1. takım oyunu: klasik balık restoranı yemekleri, 9 düello. Kırmızı 6-3 kazandı (Balık ekmek Mavi; Balık çorbası, Levrek marin, Palamut pilaki, Hamsi tava, Kırlangıç buğulama, Kofana ızgara Kırmızı; Kalamar tava, Mantarlı karides güveç Mavi). Gecenin yemeğinde şefler bölündü (pilaki / hamsi), uzlaşı yok. Dokunulmazlık: Helva-i Hakani — Bahar kazandı, Cansu'yu potaya gönderdi; konseyde Nilay 8 oyla 2. aday oldu.",
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Şükran Boyraz",
    "Burçin Oğuz",
    "Kübra Satılmış",
    "Nurten Ocak Tamer",
    "Şiringül Kaya",
    "Cansu Şöhret",
    "Elif Nilay Özgen",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Şadi Altınay",
    "Eyüp Can Güneş",
    "Tolgahan Özden",
    "Hasan Alp Karabacak",
    "Emre İrkilmez",
    "Recep Batur",
    "Muhammed Yahya Haliloğlu",
    "Enes Vardar",
    "Armağan Kırant",
    "Batuhan Nazikoğlu"
   ]
  },
  "title": "Balık restoranı yemekleri — Kırmızı 6-3 kazandı",
  "week": "5. Hafta",
  "weekday": "Salı"
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Tolga Çakuş",
   "red": "Şadi Altınay"
  },
  "date": "7 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "Kaptanlık oyunu, 45 dk. İlk 5: 1. Tolga Çakuş, 2. Muhammed, 3. Ayşe, 4. Armağan, 5. Şadi.",
    "name": "Kayseri yağlaması",
    "winner": "Tolga Çakuş (Mavi kaptan)"
   }
  ],
  "id": "2026-09-07",
  "immunity": null,
  "notes": [
   "Faruk Garip yarışmacı oyuyla (6 oy) ana kadroya girdi; Buse halk oylamasına kaldı.",
   "Koray transkriptte hiç geçmiyor — kaptanlığa katılmadı, nedeni bilinmiyor.",
   "Kübra, Nilay, Faruk ve Şükran'ın tadım bölümü transkriptte yok.",
   "Eyüp Can, Şadi'nin takımına ilk seçilmesine isyan etti."
  ],
  "pot": [],
  "source": "transkript",
  "summary": "5. hafta kaptanlık: Kayseri yağlaması, 45 dk. Tolga Çakuş 1. oldu, Mavi kaptan seçildi; Şadi Altınay'ı Kırmızı kaptan seçti. Bölüm başında yedek oylaması: Faruk Garip 6 oyla ana kadroya girdi (Buse 4, Hami Efe 4, Asuman 3, Olabi 2, Esra 1).",
  "teams": {
   "blue": [
    "Tolga Çakuş",
    "Bahar Kaya",
    "Şükran Boyraz",
    "Burçin Oğuz",
    "Kübra Satılmış",
    "Nurten Ocak Tamer",
    "Şiringül Kaya",
    "Cansu Şöhret",
    "Elif Nilay Özgen",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Şadi Altınay",
    "Eyüp Can Güneş",
    "Tolgahan Özden",
    "Hasan Alp Karabacak",
    "Emre İrkilmez",
    "Recep Batur",
    "Muhammed Yahya Haliloğlu",
    "Enes Vardar",
    "Armağan Kırant",
    "Batuhan Nazikoğlu"
   ]
  },
  "title": "Kaptanlık: Kayseri yağlaması — Tolga Mavi kaptan oldu",
  "week": "5. Hafta",
  "weekday": "Pazartesi"
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Cansu Şöhret"
  },
  "date": "6 Eylül 2026",
  "eliminated": "Koray Saygı",
  "games": [
   {
    "detail": "Tur 1: Milas yağlı, memecik, Edremit yeşil, domat, gemlik siyah, halhal zeytini. Süre duyurulmadı. Kurtulan 4: Muhammed, Şadi, Şükran, Nurten.",
    "name": "Zeytin yaratıcılık",
    "winner": "Muhammed Yahya Haliloğlu (Tur 1 birincisi)"
   },
   {
    "detail": "Tur 2, 55 dk, 10 puanlık sistem. 1. Cansu, 2. Şiringül, 3. Emre, 4. Koray.",
    "name": "Mehmet Şef imza tabağı (deniz ürünleri + patlıcan)",
    "winner": "Cansu Şöhret"
   }
  ],
  "id": "2026-09-06",
  "immunity": null,
  "notes": [
   "Şadi bir gün önce göz ameliyatı geçirmiş, tek gözle 45 dk'da yemek çıkardı.",
   "'Bu oyunu kazananı Koray' cümlesi veda montajına aittir (ana-kadro seçimi geri dönüşü), bu bölümün oyunu değil.",
   "Şükran–Muhammed barışması yaşandı."
  ],
  "pot": [
   "Muhammed Yahya Haliloğlu",
   "Koray Saygı",
   "Şükran Boyraz",
   "Emre İrkilmez",
   "Şadi Altınay",
   "Cansu Şöhret",
   "Şiringül Kaya",
   "Nurten Ocak Tamer"
  ],
  "source": "transkript",
  "summary": "4. hafta eleme. Tur 1 zeytin yaratıcılık: Muhammed, Şadi, Şükran, Nurten yukarı çıktı; Cansu, Koray, Şiringül, Emre 2. tura kaldı. Tur 2 Mehmet Şef imza tabağı (deniz ürünleri + patlıcan, 55 dk): 1. Cansu, 2. Şiringül, 3. Emre, 4. Koray — Koray Saygı elendi (final Emre vs Koray).",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Enes Vardar",
    "Burçin Oğuz",
    "Kübra Satılmış",
    "Şiringül Kaya"
   ],
   "red": [
    "Cansu Şöhret",
    "Emre İrkilmez",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Koray Saygı",
    "Şükran Boyraz",
    "Ayşe Nur İnal",
    "Recep Batur",
    "Şadi Altınay"
   ]
  },
  "title": "Eleme — Koray Saygı elendi",
  "week": "4. Hafta",
  "weekday": "Pazar"
 },
 {
  "candidates": [
   "Şiringül Kaya",
   "Nurten Ocak Tamer"
  ],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Cansu Şöhret"
  },
  "date": "4 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "5 yemek: Soğuk Ayran Aşı Çorbası, Zeytinyağlı Enginar, Sebzeli Talaş Böreği, İzmir Köfte + Pirinç Pilavı, Vişneli Muhallebi. 50 dk + 5 dk uzatma. 9 misafir jüri, her yemek 9 oy.",
    "name": "Darülaceze menüsü",
    "winner": "Kırmızı (24-21)"
   }
  ],
  "id": "2026-09-04",
  "immunity": {
   "detail": "30 dk. Final 4: Burçin, Hasan Alp, Şiringül, Nilay. Hasan Alp 'beşamelli tavuklu' tabakla kazandı (yemek adı ASR'da 'sandal sefası', düşük güven).",
   "name": "Sıfır atık yaratıcılık",
   "winner": "Hasan Alp Karabacak"
  },
  "notes": [
   "Web kaydının '3-0'ı ilk 3 oyun sonrası liderliktir; hafta Mavi 3-1 bitti.",
   "İzmir köfte aşçıları net değil — yemek satırı yok.",
   "Enginar Kırmızı aşçısı [bulunamadı].",
   "Enes vs Şiringül '4. jüri' tartışması; Şadi yalnızca patates soydu."
  ],
  "pot": [
   "Muhammed Yahya Haliloğlu",
   "Koray Saygı",
   "Şükran Boyraz",
   "Emre İrkilmez",
   "Şadi Altınay",
   "Cansu Şöhret",
   "Şiringül Kaya",
   "Nurten Ocak Tamer"
  ],
  "source": "transkript",
  "summary": "4. hafta 3. takım oyunu: Darülaceze dış çekim, 9 misafir jüri, 5 yemek, toplam 45 oy. Kırmızı 24-21 kazandı (Çorba Mavi 5-3, Enginar Kırmızı 8-1, Talaş böreği Mavi 8-1, İzmir köfte Kırmızı 5-1, Vişneli muhallebi Kırmızı). Hafta skoru Mavi 3-1. Dokunulmazlık: sıfır atık yaratıcılık — Hasan Alp kazandı, Şiringül'ü gönderdi; konseyde Nurten 8 oyla son aday oldu.",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Enes Vardar",
    "Burçin Oğuz",
    "Kübra Satılmış",
    "Şiringül Kaya"
   ],
   "red": [
    "Cansu Şöhret",
    "Emre İrkilmez",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Koray Saygı",
    "Şükran Boyraz",
    "Ayşe Nur İnal",
    "Recep Batur",
    "Şadi Altınay"
   ]
  },
  "title": "Darülaceze dış çekim — Kırmızı 24-21 kazandı",
  "week": "4. Hafta",
  "weekday": "Cuma"
 },
 {
  "candidates": [
   "Şadi Altınay",
   "Cansu Şöhret"
  ],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Cansu Şöhret"
  },
  "date": "3 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "10 yemek: Banana Bread, Dolgulu Kek, Altın Turta, İzmir Bombası, Muffin, Krep, Pancake, Cookie, Krapfen, Waffle. 1 saat. Kırmızı 4 yemeği yapamadı/eksik yaptı.",
    "name": "Çikolatalı hamur işleri",
    "winner": "Mavi (6-4)"
   }
  ],
  "id": "2026-09-03",
  "immunity": {
   "detail": "Süre [bulunamadı]. Final 2: Ayşe + Recep. Ayşe haftanın 3. dokunulmazlığını kazandı.",
   "name": "Cubano sandviç",
   "winner": "Ayşe Nur İnal"
  },
  "notes": [
   "Şeflerin en beğendiği 5 tatlı: 1. muffin (Şükran), 2. cookie (Bahar), 3. krapfen (Enes), 4. waffle (Batuhan), 5. banana bread (Koray).",
   "Konsey final: Cansu 7, Recep 6, Batuhan 4, Armağan 1.",
   "Şadi–Ayşe güven tartışması ve Şadi'nin 'hakkımı helal etmiyorum' çıkışı yaşandı.",
   "Ertesi gün ilk dış çekim (Darülaceze) duyuruldu."
  ],
  "pot": [
   "Muhammed Yahya Haliloğlu",
   "Koray Saygı",
   "Şükran Boyraz",
   "Emre İrkilmez",
   "Şadi Altınay",
   "Cansu Şöhret"
  ],
  "source": "transkript",
  "summary": "4. hafta 2. takım oyunu: ana ürün çikolata, 10 yemek, 1 saat. Mavi 6-4 kazandı (Kek, Pancake, Cookie, Krep, İzmir bombası, Krapfen Mavi; Banana bread, Altın turta, Muffin, Waffle Kırmızı). Gecenin açık ara 1. tatlısı Şükran'ın muffin'i. Dokunulmazlık: Cubano sandviç — Ayşe kazandı, Şadi'yi gönderdi; konseyde Cansu 7 oyla 6. aday oldu.",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Enes Vardar",
    "Burçin Oğuz",
    "Kübra Satılmış",
    "Şiringül Kaya"
   ],
   "red": [
    "Cansu Şöhret",
    "Emre İrkilmez",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Koray Saygı",
    "Şükran Boyraz",
    "Ayşe Nur İnal",
    "Recep Batur",
    "Şadi Altınay"
   ]
  },
  "title": "Çikolatalı hamur işleri — Mavi 6-4 kazandı",
  "week": "4. Hafta",
  "weekday": "Perşembe"
 },
 {
  "candidates": [
   "Şükran Boyraz",
   "Emre İrkilmez"
  ],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Cansu Şöhret"
  },
  "date": "2 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "5 çeşit × 2 tur: Valenciana, Marisco, Verduras, Bacalao y Coliflor, Arroz Negro. 45 dk. 1. tur 2-3 Kırmızı, 2. tur Mavi çevirdi.",
    "name": "Paella",
    "winner": "Mavi (6-4)"
   }
  ],
  "id": "2026-09-02",
  "immunity": {
   "detail": "45 dk. İlk 3: 1. Armağan, 2. Cansu, 3. Muhammed. Potadaki Muhammed ve Koray da gönüllü yarıştı.",
   "name": "Kuru incir yaratıcılık",
   "winner": "Armağan Kırant"
  },
  "notes": [
   "WEB ÇELİŞKİSİ: web konsey 2. adayı Recep yazıyor; transkript Emre (7 oy) diyor.",
   "Nilay bacalao düellosunda çift adım hatasını itiraf etti.",
   "Armağan–Şükran kısasa kısas tartışması yaşandı."
  ],
  "pot": [
   "Muhammed Yahya Haliloğlu",
   "Koray Saygı",
   "Şükran Boyraz",
   "Emre İrkilmez"
  ],
  "source": "transkript",
  "summary": "4. hafta 2. takım oyunu (not: bölüm içi sıralamada 2. oyun; 01.09 kuzu 1. oyundu): 5 çeşit paella × 2 tur = 10 düello, 45 dk. Mavi 6-4 kazandı (kaptan düellosu Eyüp Can vs Cansu'yu Mavi aldı). Dokunulmazlık: kuru incir yaratıcılık — Armağan kazandı, Şükran'ı gönderdi (kısasa kısas); konseyde Emre 7 oyla 4. aday oldu. WEB KAYDI ÇELİŞKİSİ: web 2. adayı Recep yazıyor, transkript Emre diyor.",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Enes Vardar",
    "Burçin Oğuz",
    "Kübra Satılmış",
    "Şiringül Kaya"
   ],
   "red": [
    "Cansu Şöhret",
    "Emre İrkilmez",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Koray Saygı",
    "Şükran Boyraz",
    "Ayşe Nur İnal",
    "Recep Batur",
    "Şadi Altınay"
   ]
  },
  "title": "Paella düelloları — Mavi 6-4 kazandı",
  "week": "4. Hafta",
  "weekday": "Çarşamba"
 },
 {
  "candidates": [
   "Muhammed Yahya Haliloğlu",
   "Koray Saygı"
  ],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Cansu Şöhret"
  },
  "date": "1 Eylül 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "9 yemek: Kelle Söğüş, Ciğer Sarma, Kelle Paça Çorbası, Kuzu Şiş, Kuzu Haşlama, Konya Trit Kebabı, Tepsi Kuzu Pirzola, Kuzu Kol Sarma, Kuzu Küşleme + Beğendi. Süre duyurulmadı.",
    "name": "Kuzu yemekleri",
    "winner": "Mavi (7-2)"
   }
  ],
  "id": "2026-09-01",
  "immunity": {
   "detail": "25 dk. Şükran '3. dokunulmazlığı alan ilk yarışmacı'.",
   "name": "İrmik helvası",
   "winner": "Şükran Boyraz"
  },
  "notes": [
   "WEB ÇELİŞKİSİ (tarih): web kuzu oyununu 31 Ağustos'a yazıyor; transkript 01.09'da gösteriyor. 31.08 kaptanlık günüydü.",
   "Kol sarma kararı ASR bozukluğu (skor akışı Mavi, orta güven).",
   "Gecenin yemeği: kuzu haşlama (Bahar), 2. küşleme (Şadi).",
   "Şükran–Muhammed intikam tartışması; 'çok yemek almak' eleştirisi (Batuhan 3, Armağan 2 yemek)."
  ],
  "pot": [
   "Muhammed Yahya Haliloğlu",
   "Koray Saygı",
   "Şükran Boyraz",
   "Emre İrkilmez"
  ],
  "source": "transkript",
  "summary": "4. hafta 1. takım oyunu: bütün kuzu konsepti, 9 yemek. Mavi 7-2 kazandı. Gecenin yemeği Bahar'ın kuzu haşlaması (incik). Dokunulmazlık: irmik helvası (25 dk) — Şükran kazandı (3. dokunulmazlığı alan ilk yarışmacı), Muhammed'i gönderdi; konseyde Emre 5 / Koray 5 beraberliğini kaptan Cansu tie-break ile Koray lehine çözdü.",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Enes Vardar",
    "Burçin Oğuz",
    "Kübra Satılmış",
    "Şiringül Kaya"
   ],
   "red": [
    "Cansu Şöhret",
    "Emre İrkilmez",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Koray Saygı",
    "Şükran Boyraz",
    "Ayşe Nur İnal",
    "Recep Batur",
    "Şadi Altınay"
   ]
  },
  "title": "Bütün kuzu — Mavi 7-2 kazandı",
  "week": "4. Hafta",
  "weekday": "Salı"
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Eyüp Can Güneş",
   "red": "Cansu Şöhret"
  },
  "date": "31 Ağustos 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "Kaptanlık oyunu, 45 dk, 3 adet tabakta. İlk 7: 1. Eyüp Can, 2. Şükran, 3. Nurten, 4. Tolgahan, 5. Nilay, 6. Batuhan, 7. Muhammed.",
    "name": "Tantuni",
    "winner": "Eyüp Can Güneş (Mavi kaptan)"
   }
  ],
  "id": "2026-08-31",
  "immunity": null,
  "notes": [
   "Enes ve Armağan'ın tadım bölümü transkriptte yok.",
   "Cansu kaptan olmak istemediğini söylemesine rağmen seçildi.",
   "Muhammed'in Eyüp Can'a vurması konuşuldu.",
   "Eren Kaşıkçı anması (yarışma dışı)."
  ],
  "pot": [],
  "source": "transkript",
  "summary": "4. hafta kaptanlık: Mersin tantunisi, 45 dk. Eyüp Can Güneş 1. oldu, Mavi kaptan seçildi; Cansu Şöhret'i Kırmızı kaptan seçti. Bölüm yaz arası dönüşüyle açılır: Eren Kaşıkçı anması ve memleket ziyaretleri.",
  "teams": {
   "blue": [
    "Eyüp Can Güneş",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Hasan Alp Karabacak",
    "Enes Vardar",
    "Burçin Oğuz",
    "Kübra Satılmış",
    "Şiringül Kaya"
   ],
   "red": [
    "Cansu Şöhret",
    "Emre İrkilmez",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Batuhan Nazikoğlu",
    "Koray Saygı",
    "Şükran Boyraz",
    "Ayşe Nur İnal",
    "Recep Batur",
    "Şadi Altınay"
   ]
  },
  "title": "Kaptanlık: Tantuni — Eyüp Can Mavi kaptan oldu",
  "week": "4. Hafta",
  "weekday": "Pazartesi"
 },
 {
  "candidates": [],
  "captains": {
   "blue": "Emre İrkilmez",
   "red": "Burçin Oğuz"
  },
  "date": "30 Ağustos 2026",
  "eliminated": "Simge Çıtak",
  "games": [
   {
    "detail": "Tur 1, 45 dk. 1. Nilay ('Vişne ve Asit Dengesi'), 2. Hasan Alp, 3. Şadi, 4. Ayşe.",
    "name": "Vişne yaratıcılık",
    "winner": "Elif Nilay Özgen (Tur 1 birincisi)"
   },
   {
    "detail": "Tur 2, 45 dk, 10 puanlık sistem. 1. Recep, 2. Şükran, 3. Kübra, 4. Simge.",
    "name": "Somer Şef imza tabağı (Kadayıflı karides)",
    "winner": "Recep Batur"
   }
  ],
  "id": "2026-08-30",
  "immunity": null,
  "notes": [
   "Web kaydıyla tam uyumlu (pot, final Simge vs Kübra).",
   "Kübra'nın 1. etap tabağının detayı transkriptte yok.",
   "'Bu oyunda birincisi ve bu duello kazananı Simge' cümleleri veda montajına aittir, bu bölümün oyunu değil.",
   "Simge 3 haftadır potadaydı; Kübra gruplaşma iddiasında bulundu."
  ],
  "pot": [
   "Elif Nilay Özgen",
   "Hasan Alp Karabacak",
   "Şadi Altınay",
   "Ayşe Nur İnal",
   "Şükran Boyraz",
   "Simge Çıtak",
   "Kübra Satılmış",
   "Recep Batur"
  ],
  "source": "transkript",
  "summary": "3. hafta eleme (30 Ağustos Zafer Bayramı). Tur 1 vişne yaratıcılık (45 dk): Nilay, Hasan Alp, Şadi, Ayşe yukarı çıktı; Şükran, Simge, Kübra, Recep 2. tura kaldı. Tur 2 Somer Şef imza tabağı kadayıflı karides + muhammara (45 dk): 1. Recep, 2. Şükran, 3. Kübra, 4. Simge — Simge Çıtak elendi (final Simge vs Kübra; sezonun 3. eleneni).",
  "teams": {
   "blue": [
    "Emre İrkilmez",
    "Şadi Altınay",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Kübra Satılmış",
    "Şükran Boyraz",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Simge Çıtak",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Burçin Oğuz",
    "Bahar Kaya",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Eyüp Can Güneş",
    "Şiringül Kaya",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Koray Saygı"
   ]
  },
  "title": "Eleme — Simge Çıtak elendi",
  "week": "3. Hafta",
  "weekday": "Pazar"
 },
 {
  "candidates": [
   "Hasan Alp Karabacak",
   "Şükran Boyraz"
  ],
  "captains": {
   "blue": "Emre İrkilmez",
   "red": "Burçin Oğuz"
  },
  "date": "29 Ağustos 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "10 düello, 30 dk, iki grup halinde. Tolga'nın künefesi 'şu ana kadar gecenin en iyi künefesi' diye övüldü.",
    "name": "Künefe",
    "winner": "Kırmızı (7-3)"
   }
  ],
  "id": "2026-08-29",
  "immunity": {
   "detail": "45 dk. Sadece potada olmayan 4 kişi yarıştı. 4. Şükran, 3. Tolga, 2. Hasan Alp (çıkarım), 1. Emre.",
   "name": "Sıfır atık yaratıcılık",
   "winner": "Emre İrkilmez"
  },
  "notes": [
   "Son düello (Şiringül vs Şükran) kazanan adı net değil; skor akışı Kırmızı'yı gösteriyor (orta güven).",
   "Şiringül–Şükran kavgası: ikisi de stüdyodan çıkarıldı, künefeleri kaptanlar sundu.",
   "Konsey final sayımı 'Şükran 9 oy' kendi ifadesine dayanıyor (orta güven).",
   "Hasan Alp: 3 haftadır kaybeden takımda (1. hafta 3-1, 2. ve 3. hafta 4-0)."
  ],
  "pot": [
   "Elif Nilay Özgen",
   "Hasan Alp Karabacak",
   "Şadi Altınay",
   "Ayşe Nur İnal",
   "Şükran Boyraz",
   "Simge Çıtak",
   "Kübra Satılmış",
   "Recep Batur"
  ],
  "source": "transkript",
  "summary": "3. hafta 4. takım oyunu: künefe, 30 dk, 10 düello. Kırmızı 7-3 kazandı; hafta Kırmızı 4-0 bitti. Dokunulmazlık: sıfır atık yaratıcılık (45 dk) — Emre kazandı, Hasan Alp'i gönderdi; konseyde Şükran 9 oyla 8. aday oldu.",
  "teams": {
   "blue": [
    "Emre İrkilmez",
    "Şadi Altınay",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Kübra Satılmış",
    "Şükran Boyraz",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Simge Çıtak",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Burçin Oğuz",
    "Bahar Kaya",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Eyüp Can Güneş",
    "Şiringül Kaya",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Koray Saygı"
   ]
  },
  "title": "Künefe düelloları — Kırmızı 7-3 kazandı (hafta 4-0)",
  "week": "3. Hafta",
  "weekday": "Cumartesi"
 },
 {
  "candidates": [
   "Recep Batur",
   "Kübra Satılmış"
  ],
  "captains": {
   "blue": "Emre İrkilmez",
   "red": "Burçin Oğuz"
  },
  "date": "28 Ağustos 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "9 yemek: Spring Rolls, Dim Sum, California Roll, Chicken Satay, General Tso's Chicken, Bulgogi, Dan Dan Noodle, Nasi Goreng, Mango Sticky Rice. Süre duyurulmadı.",
    "name": "Asya mutfağı",
    "winner": "Kırmızı (5-4)"
   }
  ],
  "id": "2026-08-28",
  "immunity": {
   "detail": "30 dk. Final 2: Şükran + Emre (kaptan). Şükran 'açık ara en iyi' çorbayla kazandı.",
   "name": "Çeşmi Nigar çorbası",
   "winner": "Şükran Boyraz"
  },
  "notes": [
   "Pirinç skandalı: Nasi Goreng Nilay, Sushi Simge, Mango Sticky Şadi — üçü de potadaydı.",
   "Bahar'ın California roll'ü ve Muhammed'in bulgogi'si 'şu ana kadarki gecenin yemeği' diye övüldü (final kararı değil).",
   "Konsey final: Kübra 8, Emre 7, Hasan Alp 3, Tolga 2.",
   "Recep'in 'iğrenç bir takım' çıkışı ve özrü; Tolga ve Hasan Alp rahatsızlanıp dışarı alındı."
  ],
  "pot": [
   "Elif Nilay Özgen",
   "Şadi Altınay",
   "Ayşe Nur İnal",
   "Simge Çıtak",
   "Recep Batur",
   "Kübra Satılmış"
  ],
  "source": "transkript",
  "summary": "3. hafta 3. takım oyunu: Asya mutfağı, 9 yemek. Kırmızı 5-4 kazandı (belirleyici yemek Mango Sticky Rice — Bahar). Pirinç skandalı: üç pirinç türü karıştırıldı, herkes tek pirinç kullandı. Dokunulmazlık: Çeşmi Nigar çorbası (30 dk) — Şükran kazandı, Recep'i gönderdi; konseyde Kübra 8 oyla 6. aday oldu.",
  "teams": {
   "blue": [
    "Emre İrkilmez",
    "Şadi Altınay",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Kübra Satılmış",
    "Şükran Boyraz",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Simge Çıtak",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Burçin Oğuz",
    "Bahar Kaya",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Eyüp Can Güneş",
    "Şiringül Kaya",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Koray Saygı"
   ]
  },
  "title": "Asya mutfağı — Kırmızı 5-4 kazandı",
  "week": "3. Hafta",
  "weekday": "Cuma"
 },
 {
  "candidates": [
   "Simge Çıtak",
   "Ayşe Nur İnal"
  ],
  "captains": {
   "blue": "Emre İrkilmez",
   "red": "Burçin Oğuz"
  },
  "date": "27 Ağustos 2026",
  "eliminated": null,
  "games": [
   {
    "detail": "10 yemek: Ayran Aşı, Etli Enginar, Analı Kızlı (2 puanlık), Ankara Tava, Fasulye Diblesi, Piruhi, Tepsi Patlıcan Kebabı, Bozbaş, Boşnak Mantısı, Hayrabolu. Süre duyurulmadı.",
    "name": "Bölgesel yemekler",
    "winner": "Kırmızı (7-5)"
   }
  ],
  "id": "2026-08-27",
  "immunity": {
   "detail": "45 dk, haftanın ikinci bireysel dokunulmazlığı. Şefler tabakları beğenmedi; sadece 2 tabak değerlendirmeye alındı. 2. finalist isimlendirilmedi.",
   "name": "Barbunya yaratıcılık",
   "winner": "Hasan Alp Karabacak"
  },
  "notes": [
   "Bozbaş kazananı övgü/eleştiri atfı net değil; skor akışı Kırmızı'yı gösteriyor (orta güven).",
   "25.08'de Simge dokunulmazlığı kazanıp Şadi'yi gönderdi; konsey Nilay'ı seçti (27.08 referanslarından).",
   "26.08'de takım oyunu yok görünüyor; 4 oyun 25, 27, 28, 29 Ağustos'ta oynandı (071. bölümde teyit edilmeli).",
   "Emre'nin kaptan dokunulmazlığı bu gecenin sonunda bitti."
  ],
  "pot": [
   "Şadi Altınay",
   "Elif Nilay Özgen",
   "Simge Çıtak",
   "Ayşe Nur İnal"
  ],
  "source": "transkript",
  "summary": "3. hafta 2. takım oyunu: bölgesel yemekler, 10 düello. 5-5 beraberlikte siyah top açıldı: 2 puanlık yemek Analı Kızlı (Nurten, Kırmızı) çıktı, Kırmızı 7-5 kazandı. Hafta skoru Kırmızı 2-0. Dokunulmazlık: barbunya yaratıcılık (45 dk) — Hasan Alp kazandı (2. dokunulmazlığı), Simge'yi gönderdi; konseyde Ayşe 6 oyla 2. aday oldu.",
  "teams": {
   "blue": [
    "Emre İrkilmez",
    "Şadi Altınay",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Kübra Satılmış",
    "Şükran Boyraz",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Simge Çıtak",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Burçin Oğuz",
    "Bahar Kaya",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Eyüp Can Güneş",
    "Şiringül Kaya",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Koray Saygı"
   ]
  },
  "title": "Bölgesel yemekler — Kırmızı 7-5 kazandı (2 puanlık Analı Kızlı)",
  "week": "3. Hafta",
  "weekday": "Perşembe"
 },
 {
  "id": "2026-08-25",
  "date": "25 Ağustos 2026",
  "weekday": "Salı",
  "week": "3. Hafta",
  "title": "Fırın konsepti — Kırmızı 7-5",
  "source": "transkript",
  "summary": "3. hafta 1. takım oyunu: Fırın konsepti (13 ürün, 70 dk). Kırmızı 7-5 kazandı. Bireysel dokunulmazlık Shepherd's Pie — kazanan Simge Çıtak; adaylar Şadi (seçim) ve Nilay (oylama, 9 oy).",
  "captains": {
   "blue": "Emre İrkilmez",
   "red": "Burçin Oğuz"
  },
  "teams": {
   "blue": [
    "Emre İrkilmez",
    "Şadi Altınay",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Kübra Satılmış",
    "Şükran Boyraz",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Simge Çıtak",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Burçin Oğuz",
    "Bahar Kaya",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Eyüp Can Güneş",
    "Şiringül Kaya",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Koray Saygı"
   ]
  },
  "pot": [
   "Şadi Altınay",
   "Elif Nilay Özgen"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Fırın konsepti",
    "detail": "13 ürün, 70 dk, her üründen 3 adet; sandviç düellosu iki takımın da sıfır sonrası dokunması nedeniyle iptal; Portakallı kek tadımı transkriptte yok",
    "winner": "Kırmızı 7-5"
   }
  ],
  "immunity": {
   "name": "Shepherd's Pie",
   "winner": "Simge Çıtak",
   "detail": "Mavi takım; 2. Ayşe, 3. Şadi, 4. Recep; süre duyurulmadı"
  },
  "candidates": [
   "Şadi Altınay",
   "Elif Nilay Özgen"
  ],
  "notes": [
   "Skor boşluğu: kurabiye sonrası 5-3, boyoz öncesi 6-4; bir puanın galibi bilinmiyor",
   "Boyoz gecenin en iyi yemeği belirsizliği — Enes'in boyozu övüldü ama düelloyu Mavi kazandı",
   "Konsey: Nilay 9, Hasan Alp 6, Kübra 3, Ayşe 1 (toplam 19/20)"
  ]
 },
 {
  "id": "2026-08-24",
  "date": "24 Ağustos 2026",
  "weekday": "Pazartesi",
  "week": "3. Hafta",
  "title": "Kaptanlık — Sütlaç",
  "source": "transkript",
  "summary": "3. hafta kaptanlık: Sütlaç (serbest usul, 40 dk). Kazanan Emre İrkilmez — Mavi kaptan; Kırmızı kaptan olarak Burçin Oğuz'u seçti.",
  "captains": {
   "blue": "Emre İrkilmez",
   "red": "Burçin Oğuz"
  },
  "teams": {
   "blue": [
    "Emre İrkilmez",
    "Şadi Altınay",
    "Elif Nilay Özgen",
    "Tolga Çakuş",
    "Kübra Satılmış",
    "Şükran Boyraz",
    "Hasan Alp Karabacak",
    "Recep Batur",
    "Simge Çıtak",
    "Ayşe Nur İnal"
   ],
   "red": [
    "Burçin Oğuz",
    "Bahar Kaya",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Nurten Ocak Tamer",
    "Eyüp Can Güneş",
    "Şiringül Kaya",
    "Enes Vardar",
    "Batuhan Nazikoğlu",
    "Koray Saygı"
   ]
  },
  "games": [
   {
    "name": "Sütlaç",
    "detail": "Serbest usul sütlaç, 40 dk; 2. Şükran, 3. Şadi, 4. Tolga, 5. [bulunamadı], 6. Nurten, 7. Ayşe",
    "winner": "Emre İrkilmez"
   }
  ],
  "immunity": null,
  "notes": [
   "5. sütlaç ismi duyuruda bozuk",
   "Emre'nin doğum günü",
   "Şadi seçim öncesi Emre'ye önceden yazılmış takım listesi uzattı"
  ],
  "pot": [],
  "eliminated": null,
  "candidates": []
 },
 {
  "id": "2026-08-23",
  "date": "23 Ağustos 2026",
  "weekday": "Pazar",
  "week": "2. Hafta",
  "title": "Eleme — Gülbahar Meşe elendi",
  "source": "transkript",
  "summary": "2. hafta eleme: Tur 1 patlıcan yaratıcılık (45 dk), Tur 2 Danilo Şef Ricciola (45 dk). Final Gülbahar vs Koray — elenen Gülbahar Meşe.",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Şadi Altınay"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Gülbahar Meşe",
    "Armağan Kırant",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Koray Saygı",
    "Şükran Boyraz",
    "Recep Batur",
    "Simge Çıtak",
    "Enes Vardar"
   ],
   "red": [
    "Şadi Altınay",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Batuhan Nazikoğlu",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Şiringül Kaya",
    "Eyüp Can Güneş"
   ]
  },
  "pot": [
   "Ayşe Nur İnal",
   "Koray Saygı",
   "Gülbahar Meşe",
   "Simge Çıtak",
   "Recep Batur",
   "Enes Vardar",
   "Şükran Boyraz",
   "Armağan Kırant"
  ],
  "eliminated": "Gülbahar Meşe",
  "games": [
   {
    "name": "Patlıcan yaratıcılık",
    "detail": "Tur 1, 45 dk; 1. Enes, 2. Armağan, 3. Şükran, 4. Ayşe güvenli",
    "winner": "Enes Vardar"
   },
   {
    "name": "Danilo Şef Ricciola",
    "detail": "Tur 2, 45 dk; trüf mantarlı ricotta dolgulu makarna; 1. Simge, 2. Recep güvenli; final Gülbahar vs Koray",
    "winner": "Simge Çıtak"
   }
  ],
  "immunity": null,
  "candidates": [
   "Ayşe Nur İnal",
   "Koray Saygı",
   "Gülbahar Meşe",
   "Simge Çıtak",
   "Recep Batur",
   "Enes Vardar",
   "Şükran Boyraz",
   "Armağan Kırant"
  ],
  "notes": [
   "Mavi hafta 2'de 4-0 kaybetti; potun tamamı Mavi",
   "Kaptan Muhammed potada değil (kaptan dokunulmazlığı); Hasan Alp potada değil (20 Ağustos dokunulmazlığı)"
  ]
 },
 {
  "id": "2026-08-22",
  "date": "22 Ağustos 2026",
  "weekday": "Cumartesi",
  "week": "2. Hafta",
  "title": "Trileçe düelloları — Kırmızı 7-3",
  "source": "transkript",
  "summary": "2. hafta 4. takım oyunu: Trileçe düelloları. Kırmızı 7-3 kazandı; hafta Kırmızı 4-0 (tarihte ilk). Bireysel dokunulmazlık Sıfır atık (45 dk) — kazanan Muhammed; adaylar Şükran (seçim) ve Armağan (oylama).",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Şadi Altınay"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Gülbahar Meşe",
    "Armağan Kırant",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Koray Saygı",
    "Şükran Boyraz",
    "Recep Batur",
    "Simge Çıtak",
    "Enes Vardar"
   ],
   "red": [
    "Şadi Altınay",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Batuhan Nazikoğlu",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Şiringül Kaya",
    "Eyüp Can Güneş"
   ]
  },
  "pot": [
   "Ayşe Nur İnal",
   "Koray Saygı",
   "Gülbahar Meşe",
   "Simge Çıtak",
   "Recep Batur",
   "Enes Vardar",
   "Şükran Boyraz",
   "Armağan Kırant"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Trileçe",
    "detail": "Düello formatı; ilk 6 puanı alan kazanır; Nurten-Armağan ve Bahar-Ayşe düelloları gösterilmedi; gecenin en iyi trileçesi Şadi'nin",
    "winner": "Kırmızı 7-3"
   }
  ],
  "immunity": {
   "name": "Sıfır atık",
   "winner": "Muhammed Yahya Haliloğlu",
   "detail": "45 dk, Mavi takım; 2. Armağan, 3. Şükran, 4. Hasan Alp"
  },
  "candidates": [
   "Şükran Boyraz",
   "Armağan Kırant"
  ],
  "notes": [
   "Konseyde kişi başı tek oy, yalnızca Hasan Alp ile Armağan arasında; final Armağan 7, Hasan Alp 3",
   "Nurten-Armağan ve Bahar-Ayşe düelloları gösterilmedi — bireysel galip yok"
  ]
 },
 {
  "id": "2026-08-21",
  "date": "21 Ağustos 2026",
  "weekday": "Cuma",
  "week": "2. Hafta",
  "title": "Akdeniz lezzetleri — Kırmızı 5-4",
  "source": "transkript",
  "summary": "2. hafta 3. takım oyunu: Akdeniz lezzetleri (9 yemek). Kırmızı 5-4 kazandı. Bireysel dokunulmazlık Eli böğründe (45 dk) — kazanan Şükran Boyraz; adaylar Recep (seçim) ve Enes (oylama, 9 oy).",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Şadi Altınay"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Gülbahar Meşe",
    "Armağan Kırant",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Koray Saygı",
    "Şükran Boyraz",
    "Recep Batur",
    "Simge Çıtak",
    "Enes Vardar"
   ],
   "red": [
    "Şadi Altınay",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Batuhan Nazikoğlu",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Şiringül Kaya",
    "Eyüp Can Güneş"
   ]
  },
  "pot": [
   "Ayşe Nur İnal",
   "Koray Saygı",
   "Gülbahar Meşe",
   "Simge Çıtak",
   "Recep Batur",
   "Enes Vardar"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Akdeniz lezzetleri",
    "detail": "9 yemek; Davut Paşa köfte Kübra'nın — gecenin tabağı olarak önerildi (koşullu); Pastel de nata Kırmızı aşçısı bilinmiyor",
    "winner": "Kırmızı 5-4"
   }
  ],
  "immunity": {
   "name": "Eli böğründe",
   "winner": "Şükran Boyraz",
   "detail": "45 dk, Mavi takım; açık farkla kazandı; 2./3./4. açıklanmadı"
  },
  "candidates": [
   "Recep Batur",
   "Enes Vardar"
  ],
  "notes": [
   "Konsey: Enes 9, Hasan Alp 6, Armağan 3, Muhammed 1 (toplam 19/20)",
   "Düzeltme: 21 Ağustos konseyinde Muhammed'e oy veren yalnızca Enes (Armağan değil)",
   "Gruplaşma tartışması"
  ]
 },
 {
  "id": "2026-08-20",
  "date": "20 Ağustos 2026",
  "weekday": "Perşembe",
  "week": "2. Hafta",
  "title": "Zeytinyağlılar — Kırmızı 6-4",
  "source": "transkript",
  "summary": "2. hafta 2. takım oyunu: Zeytinyağlılar (10 düello). Kırmızı 6-4 kazandı. Bireysel dokunulmazlık Armut (45 dk) — kazanan Hasan Alp Karabacak; adaylar Gülbahar (seçim) ve Simge (oylama, 7 oy).",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Şadi Altınay"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Gülbahar Meşe",
    "Armağan Kırant",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Koray Saygı",
    "Şükran Boyraz",
    "Recep Batur",
    "Simge Çıtak",
    "Enes Vardar"
   ],
   "red": [
    "Şadi Altınay",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Batuhan Nazikoğlu",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Şiringül Kaya",
    "Eyüp Can Güneş"
   ]
  },
  "pot": [
   "Ayşe Nur İnal",
   "Koray Saygı",
   "Gülbahar Meşe",
   "Simge Çıtak"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Zeytinyağlılar",
    "detail": "10 düello, 5 çeşit x 2; gecenin yemeği Muhammed ile Batuhan'ın ıspanak kökü arasında tartışıldı, sonuçsuz",
    "winner": "Kırmızı 6-4"
   }
  ],
  "immunity": {
   "name": "Armut",
   "winner": "Hasan Alp Karabacak",
   "detail": "45 dk, Mavi takım; 2. Muhammed; 3. [bulunamadı]"
  },
  "candidates": [
   "Gülbahar Meşe",
   "Simge Çıtak"
  ],
  "notes": [
   "Konsey: Simge 7, Armağan 5, Recep 5, Enes 2, Şükran 1",
   "D3 sarma galip ismi duyuruda bozuk (Kübra olarak kaydedildi, orta güven)"
  ]
 },
 {
  "id": "2026-08-19",
  "date": "19 Ağustos 2026",
  "weekday": "Çarşamba",
  "week": "2. Hafta",
  "title": "Mangal — Kırmızı 6-3",
  "source": "transkript",
  "summary": "2. hafta 1. takım oyunu: Mangal (9 yemek). Kırmızı 6-3 kazandı. Bireysel dokunulmazlık Paris Brest (45 dk) — kazanan Armağan Kırant; adaylar Ayşe (seçim) ve Koray (oylama, 7 oy).",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Şadi Altınay"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Gülbahar Meşe",
    "Armağan Kırant",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Koray Saygı",
    "Şükran Boyraz",
    "Recep Batur",
    "Simge Çıtak",
    "Enes Vardar"
   ],
   "red": [
    "Şadi Altınay",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Batuhan Nazikoğlu",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Şiringül Kaya",
    "Eyüp Can Güneş"
   ]
  },
  "pot": [
   "Ayşe Nur İnal",
   "Koray Saygı"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Mangal",
    "detail": "9 yemek; süre duyurulmadı",
    "winner": "Kırmızı 6-3"
   }
  ],
  "immunity": {
   "name": "Paris Brest",
   "winner": "Armağan Kırant",
   "detail": "45 dk, Mavi takım; 2. Muhammed, 3. Enes, 4. Gülbahar"
  },
  "candidates": [
   "Ayşe Nur İnal",
   "Koray Saygı"
  ],
  "notes": [
   "Konsey: Koray 7, Şükran 5, Hasan Alp 4, Gül 1, Simge 1, Recep 1 (toplam 19/20)",
   "D9 Yağlı kara galibi orta güven"
  ]
 },
 {
  "id": "2026-08-17",
  "date": "17 Ağustos 2026",
  "weekday": "Pazartesi",
  "week": "2. Hafta",
  "title": "Kaptanlık — Tepsi pizza",
  "source": "transkript",
  "summary": "2. hafta kaptanlık: Tepsi pizza (serbest/yaratıcı). Kazanan Muhammed Yahya Haliloğlu — Mavi kaptan; Kırmızı kaptan olarak Şadi Altınay'ı seçti.",
  "captains": {
   "blue": "Muhammed Yahya Haliloğlu",
   "red": "Şadi Altınay"
  },
  "teams": {
   "blue": [
    "Muhammed Yahya Haliloğlu",
    "Gülbahar Meşe",
    "Armağan Kırant",
    "Ayşe Nur İnal",
    "Hasan Alp Karabacak",
    "Koray Saygı",
    "Şükran Boyraz",
    "Recep Batur",
    "Simge Çıtak",
    "Enes Vardar"
   ],
   "red": [
    "Şadi Altınay",
    "Bahar Kaya",
    "Nurten Ocak Tamer",
    "Tolga Çakuş",
    "Batuhan Nazikoğlu",
    "Elif Nilay Özgen",
    "Kübra Satılmış",
    "Burçin Oğuz",
    "Şiringül Kaya",
    "Eyüp Can Güneş"
   ]
  },
  "games": [
   {
    "name": "Tepsi pizza",
    "detail": "Serbest/yaratıcı pizza; süre duyurulmadı; ilk 8: Muhammed, Eyüp Can, Ayşe, Burçin, Bahar, Şadi, Şükran, Tolga",
    "winner": "Muhammed Yahya Haliloğlu"
   }
  ],
  "immunity": null,
  "notes": [
   "ASR seçim sırası bozuk — final takımlar 19 Ağustos ile doğrulandı",
   "20 kişi: 19 kalan ana kadro + Recep Batur (yedek-1, 15.08.2026'da girdi)"
  ],
  "pot": [],
  "eliminated": null,
  "candidates": []
 },
 {
  "id": "2026-08-16",
  "date": "16 Ağustos 2026",
  "weekday": "Pazar",
  "week": "1. Hafta",
  "title": "Eleme — Demirhan Ali Tekin elendi",
  "source": "transkript",
  "summary": "1. hafta eleme: Tur 1 domates yaratıcılık (45 dk), Tur 2 Mehmet Şef Kırlangıç yüzgeci çorbası. Finalde Enes 3., Demirhan 4. — elenen Demirhan Ali Tekin (sezonun ilk eleneni).",
  "captains": {
   "blue": "Burçin Oğuz",
   "red": "Ayşe Nur İnal"
  },
  "teams": {
   "blue": [
    "Burçin Oğuz",
    "Batuhan Nazikoğlu",
    "Bahar Kaya",
    "Kübra Satılmış",
    "Tolga Çakuş",
    "Eyüp Can Güneş",
    "Hasan Alp Karabacak",
    "Elif Nilay Özgen",
    "Demirhan Ali Tekin",
    "Şiringül Kaya"
   ],
   "red": [
    "Ayşe Nur İnal",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Enes Vardar",
    "Simge Çıtak",
    "Şükran Boyraz",
    "Gülbahar Meşe",
    "Koray Saygı",
    "Nurten Ocak Tamer",
    "Şadi Altınay"
   ]
  },
  "pot": [
   "Batuhan Nazikoğlu",
   "Demirhan Ali Tekin",
   "Burçin Oğuz",
   "Elif Nilay Özgen",
   "Kübra Satılmış",
   "Tolga Çakuş",
   "Simge Çıtak",
   "Enes Vardar"
  ],
  "eliminated": "Demirhan Ali Tekin",
  "games": [
   {
    "name": "Domates yaratıcılık",
    "detail": "Tur 1, 45 dk; 1. Nilay, 2. Simge, 3. Batuhan, 4. Kübra güvenli",
    "winner": "Elif Nilay Özgen"
   },
   {
    "name": "Kırlangıç yüzgeci çorbası",
    "detail": "Tur 2, Mehmet Şef; 1. Tolga, 2. Burçin, 3. Enes güvenli; 4. Demirhan elendi",
    "winner": "Tolga Çakuş"
   }
  ],
  "immunity": null,
  "candidates": [
   "Batuhan Nazikoğlu",
   "Demirhan Ali Tekin",
   "Burçin Oğuz",
   "Elif Nilay Özgen",
   "Kübra Satılmış",
   "Tolga Çakuş",
   "Simge Çıtak",
   "Enes Vardar"
  ],
  "notes": [
   "Tur 1 2./3. sıra güveni orta",
   "Açılıştaki uzun konsey tartışması 11-14 Ağustos'a aittir"
  ]
 },
 {
  "id": "2026-08-14",
  "date": "14 Ağustos 2026",
  "weekday": "Cuma",
  "week": "1. Hafta",
  "title": "Salatalar — Mavi 6-3",
  "source": "transkript",
  "summary": "1. hafta 4. takım oyunu: Salatalar (10 salata, 30 dk). Mavi 6-3 kazandı — haftanın ilk Mavi galibiyeti; hafta finali Kırmızı 3-1. Bireysel dokunulmazlık Sıfır atık — kazanan Muhammed Yahya Haliloğlu; adaylar Simge (seçim) ve Enes (oylama, 9 oy).",
  "captains": {
   "blue": "Burçin Oğuz",
   "red": "Ayşe Nur İnal"
  },
  "teams": {
   "blue": [
    "Burçin Oğuz",
    "Batuhan Nazikoğlu",
    "Bahar Kaya",
    "Kübra Satılmış",
    "Tolga Çakuş",
    "Eyüp Can Güneş",
    "Hasan Alp Karabacak",
    "Elif Nilay Özgen",
    "Demirhan Ali Tekin",
    "Şiringül Kaya"
   ],
   "red": [
    "Ayşe Nur İnal",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Enes Vardar",
    "Simge Çıtak",
    "Şükran Boyraz",
    "Gülbahar Meşe",
    "Koray Saygı",
    "Nurten Ocak Tamer",
    "Şadi Altınay"
   ]
  },
  "pot": [
   "Batuhan Nazikoğlu",
   "Demirhan Ali Tekin",
   "Elif Nilay Özgen",
   "Burçin Oğuz",
   "Kübra Satılmış",
   "Tolga Çakuş",
   "Simge Çıtak",
   "Enes Vardar"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Salatalar",
    "detail": "10 salata, 30 dk; Niçoise düellosunda puan yok (0-0); D1 ve D10 galibi orta güven",
    "winner": "Mavi 6-3"
   }
  ],
  "immunity": {
   "name": "Sıfır atık",
   "winner": "Muhammed Yahya Haliloğlu",
   "detail": "Kırmızı takım; süre duyurulmadı; ilk 3'e çağrılanlar Şadi ve Şükran (2./3. sırası açıklanmadı)"
  },
  "candidates": [
   "Simge Çıtak",
   "Enes Vardar"
  ],
  "notes": [
   "Konsey: Enes 9, Koray 5, Şükran 3, Şadi 1 (+2 oy net değil)",
   "Kırmızı konsey ön anlaşması (istatistik temelli) tartışması"
  ]
 },
 {
  "id": "2026-08-13",
  "date": "13 Ağustos 2026",
  "weekday": "Perşembe",
  "week": "1. Hafta",
  "title": "Meksika mutfağı — Kırmızı 5-3",
  "source": "transkript",
  "summary": "1. hafta 3. takım oyunu: Meksika mutfağı (9 yemek). Kırmızı 5-3 kazandı. Bireysel dokunulmazlık Bıçak arası (30 dk) — kazanan Eyüp Can Güneş; adaylar Kübra (seçim) ve Tolga (oylama, 9 oy).",
  "captains": {
   "blue": "Burçin Oğuz",
   "red": "Ayşe Nur İnal"
  },
  "teams": {
   "blue": [
    "Burçin Oğuz",
    "Batuhan Nazikoğlu",
    "Bahar Kaya",
    "Kübra Satılmış",
    "Tolga Çakuş",
    "Eyüp Can Güneş",
    "Hasan Alp Karabacak",
    "Elif Nilay Özgen",
    "Demirhan Ali Tekin",
    "Şiringül Kaya"
   ],
   "red": [
    "Ayşe Nur İnal",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Enes Vardar",
    "Simge Çıtak",
    "Şükran Boyraz",
    "Gülbahar Meşe",
    "Koray Saygı",
    "Nurten Ocak Tamer",
    "Şadi Altınay"
   ]
  },
  "pot": [
   "Batuhan Nazikoğlu",
   "Demirhan Ali Tekin",
   "Elif Nilay Özgen",
   "Burçin Oğuz",
   "Kübra Satılmış",
   "Tolga Çakuş"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Meksika mutfağı",
    "detail": "9 yemek, menü formatı; mole düellosu iki takımda da tavuk çiğ olduğu için iptal; Nurten'in Chiles en Nogada'sı gecenin yemeği",
    "winner": "Kırmızı 5-3"
   }
  ],
  "immunity": {
   "name": "Bıçak arası",
   "winner": "Eyüp Can Güneş",
   "detail": "30 dk, Mavi takım; 2. Tolga, 3. Bahar"
  },
  "candidates": [
   "Kübra Satılmış",
   "Tolga Çakuş"
  ],
  "notes": [
   "Çorba dökülmesi tartışması",
   "Mavi'nin takolarında karides yoktu (arabada kayboldu)",
   "Tamales galibi orta güven"
  ]
 },
 {
  "id": "2026-08-12",
  "date": "12 Ağustos 2026",
  "weekday": "Çarşamba",
  "week": "1. Hafta",
  "title": "Tulumba tatlısı — Kırmızı 7-3",
  "source": "transkript",
  "summary": "1. hafta 2. takım oyunu: Tulumba tatlısı (10 düello, 45 dk). Kırmızı 7-3 kazandı. Bireysel dokunulmazlık Semizotu — kazanan Hasan Alp Karabacak (galip çelişkisi notu ile); adaylar Nilay (seçim) ve Burçin (oylama, 7 oy).",
  "captains": {
   "blue": "Burçin Oğuz",
   "red": "Ayşe Nur İnal"
  },
  "teams": {
   "blue": [
    "Burçin Oğuz",
    "Batuhan Nazikoğlu",
    "Bahar Kaya",
    "Kübra Satılmış",
    "Tolga Çakuş",
    "Eyüp Can Güneş",
    "Hasan Alp Karabacak",
    "Elif Nilay Özgen",
    "Demirhan Ali Tekin",
    "Şiringül Kaya"
   ],
   "red": [
    "Ayşe Nur İnal",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Enes Vardar",
    "Simge Çıtak",
    "Şükran Boyraz",
    "Gülbahar Meşe",
    "Koray Saygı",
    "Nurten Ocak Tamer",
    "Şadi Altınay"
   ]
  },
  "pot": [
   "Batuhan Nazikoğlu",
   "Demirhan Ali Tekin",
   "Elif Nilay Özgen",
   "Burçin Oğuz"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "Tulumba tatlısı",
    "detail": "10 düello, herkes aynı yemek, 45 dk; gecenin tulumbası isimlendirilmedi",
    "winner": "Kırmızı 7-3"
   }
  ],
  "immunity": {
   "name": "Semizotu",
   "winner": "Hasan Alp Karabacak",
   "detail": "Mavi takım; 2. Kübra, 3. Nilay; süre duyurulmadı; GALİP ÇELİŞKİSİ: resmî duyuru Hasan Alp diyor ama Kübra lehine cümleler var"
  },
  "candidates": [
   "Elif Nilay Özgen",
   "Burçin Oğuz"
  ],
  "notes": [
   "Dokunulmazlık galibi çelişkisi — Hasan Alp olarak kaydedildi, güven orta",
   "D8/D9 galip isimleri bozuk (skor matematiğiyle çıkarım)",
   "teams_weeks1-12.csv Hafta 1'de Batuhan yok, Ayşe yanlış takımda, Armağan yanlış kaptan"
  ]
 },
 {
  "id": "2026-08-11",
  "date": "11 Ağustos 2026",
  "weekday": "Salı",
  "title": "1. Hafta 1. Takım Oyunu — Esnaf Lokantası Yaz Yemekleri",
  "source": "transkript",
  "week": "1. Hafta",
  "summary": "Sezonun ilk takım oyunu: esnaf lokantası yaz yemekleri (9 yemek). Kırmızı takım 6-3 kazandı; gecenin yemeği Enes'in güveçte taze fasulyesi oldu. Kaybeden Mavi takım bireysel dokunulmazlık oynadı (kızarmış pilav): Nilay kazandı ve Batuhan'ı potaya gönderdi. Konseyde Demirhan 6 oyla 2. aday oldu. Pota: Batuhan, Demirhan.",
  "captains": {
   "blue": "Burçin Oğuz",
   "red": "Ayşe Nur İnal"
  },
  "teams": {
   "blue": [
    "Burçin Oğuz",
    "Batuhan Nazikoğlu",
    "Bahar Kaya",
    "Kübra Satılmış",
    "Tolga Çakuş",
    "Eyüp Can Güneş",
    "Hasan Alp Karabacak",
    "Elif Nilay Özgen",
    "Demirhan Ali Tekin",
    "Şiringül Kaya"
   ],
   "red": [
    "Ayşe Nur İnal",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Enes Vardar",
    "Simge Çıtak",
    "Şükran Boyraz",
    "Gülbahar Meşe",
    "Koray Saygı",
    "Nurten Ocak Tamer",
    "Şadi Altınay"
   ]
  },
  "pot": [
   "Batuhan Nazikoğlu",
   "Demirhan Ali Tekin"
  ],
  "eliminated": null,
  "games": [
   {
    "name": "esnaf lokantası yaz yemekleri",
    "detail": "9 yemek: soğuk ayran aşı çorbası, imam bayıldı (3 adet), güveçte taze fasulye, bahar pilavı, terbiyeli kabak dolması, etli pazı sarma (12 adet), sebzeli fırın köfte (1 tepsi), şeftali kompostosu (3 adet), vişneli muhallebi (3 adet); süre transkriptte yok; skor Kırmızı 6 - Mavi 3",
    "winner": "Kırmızı takım"
   },
   {
    "name": "kızarmış pilav (bireysel dokunulmazlık)",
    "detail": "Çin usulü kızarmış pilav / egg fried rice; Mavi takım (10 kişi); süre transkriptte yok; ilk 3: Bahar, Eyüp Can, Demirhan; final: Demirhan vs Nilay",
    "winner": "Elif Nilay Özgen"
   }
  ],
  "immunity": {
   "name": "kızarmış pilav",
   "winner": "Elif Nilay Özgen",
   "detail": "'Açık ara en iyi Fried Rice' — çıtır çıtırlık, soslar dengeli; sezonun ilk bireysel dokunulmazlığı"
  },
  "candidates": [
   "Batuhan Nazikoğlu",
   "Demirhan Ali Tekin"
  ],
  "notes": [
   "Yemek yemek skor: ayran aşı Mavi, imam bayıldı Kırmızı, fasulye Kırmızı (gecenin yemeği), bahar pilavı Mavi, kabak dolması Kırmızı, pazı sarma Kırmızı, fırın köfte Mavi, komposto Kırmızı, muhallebi Kırmızı.",
   "❓ Ayran aşı kazananı Bahar (Mavi) — orta güven (hüküm cümlesi bozuk; skor ilerlemesi destekliyor).",
   "❓ Dokunulmazlıkta iki kimliksiz tadım (karides+tavuk oyster soslu; dana chorizo'lu) Bahar ile Eyüp Can'a ait olmalı — hangi tabağın kimin olduğu bilinmiyor.",
   "Konsey final sayımı: Demirhan 6, Tolga 5, Kübra 5, Şiringül 4 (20 oy). Bilinen oylar: Demirhan→Tolga+Kübra; Bahar→Şiringül+Demirhan; Nilay→Kübra+Demirhan; Burçin→Demirhan+Şiringül; Batuhan→Tolga+?; Eyüp Can→Kübra+Şiringül (orta); Şiringül→Tolga+Kübra (orta); Tolga→Demirhan+?; Kübra→? (Armağan'a oy verdiği söylendi — Armağan Kırmızı'da, geçersiz); Hasan Alp→? Ara sayımlar ASR'de tutarsız, final sayım esas alındı.",
   "Bölüm açılışı 10.08 özeti + Şadi tartışması — bilgiler 10.08'e aittir."
  ]
 },
 {
  "id": "2026-08-10",
  "date": "10 Ağustos 2026",
  "weekday": "Pazartesi",
  "title": "1. Hafta Kaptanlık — Menemen",
  "source": "transkript",
  "week": "1. Hafta",
  "summary": "1. haftanın kaptanlık günü. Menemen oyunu (20 dk) oynandı; 20 yarışmacı arasında Burçin Oğuz birinci oldu ve ilk Mavi kaptan seçildi. Burçin, karşısına Kırmızı kaptan olarak Ayşe Nur İnal'ı seçti. Takımlar 10'ar kişi olarak kuruldu: Mavi'de Batuhan, Bahar, Kübra, Tolga, Eyüp Can, Hasan Alp, Nilay, Demirhan, Şiringül; Kırmızı'da Armağan, Muhammed, Enes, Simge, Şükran, Gülbahar, Koray, Nurten, Şadi.",
  "captains": {
   "blue": "Burçin Oğuz",
   "red": "Ayşe Nur İnal"
  },
  "teams": {
   "blue": [
    "Burçin Oğuz",
    "Batuhan Nazikoğlu",
    "Bahar Kaya",
    "Kübra Satılmış",
    "Tolga Çakuş",
    "Eyüp Can Güneş",
    "Hasan Alp Karabacak",
    "Elif Nilay Özgen",
    "Demirhan Ali Tekin",
    "Şiringül Kaya"
   ],
   "red": [
    "Ayşe Nur İnal",
    "Armağan Kırant",
    "Muhammed Yahya Haliloğlu",
    "Enes Vardar",
    "Simge Çıtak",
    "Şükran Boyraz",
    "Gülbahar Meşe",
    "Koray Saygı",
    "Nurten Ocak Tamer",
    "Şadi Altınay"
   ]
  },
  "eliminated": null,
  "games": [
   {
    "name": "menemen",
    "detail": "Kaptanlık oyunu; 20 dk; iki grup (Eyüp Can + Kübra önce, 5 dk sonra diğerleri); çeşitli domatesler, salça, beyaz peynir, kaşar, iki çeşit biber",
    "winner": "Burçin Oğuz"
   }
  ],
  "candidates": [],
  "notes": [
   "Yeni sezon kuralları açıklandı: 4 takım oyunu; kaybeden takım dokunulmazlık oynar, dokunulmazlık kazananı 1 aday söyler, konsey 2. adayı oylar; pazar finali 8 kişiyle; haftada 1 kişi elenir; elenenin yerine yedek gelir.",
   "Mavi kaptan dokunulmazlık rozeti alır; Kırmızı kaptanın böyle bir dokunulmazlığı yok.",
   "❓ Menemen 4.sü Kübra (orta güven — 'mavi giymiştim' + ilk-6 anonsu).",
   "TEAMS DOĞRULAMASI: teams_weeks1-12.csv'in hafta-1 kaydı 3 noktada yanlış — Kırmızı kaptan Armağan değil Ayşe; Ayşe Mavi üye değil Kırmızı kaptan; Batuhan tabloda yok ama Mavi takımda (Burçin'in ilk seçimi). Transkript kazanır.",
   "Şadi'nin kızlar-erkekler takımı teklifi herkes tarafından reddedildi; Ayşe 'saçma bir fikir' dedi."
  ],
  "pot": [],
  "immunity": null
 },
 {
  "id": "2026-08-08",
  "date": "8 Ağustos 2026",
  "weekday": "Cumartesi",
  "title": "4. Grup 5. Gün — Şanlıurfa Isotu Yaratıcılık ve Crème Brûlée",
  "source": "transkript",
  "summary": "4. grubun son günü. Tur 1'de Şanlıurfa isotu yaratıcılık (45 dk) oynandı; 10 yarışmacıdan 7'si geçti, Tur 1'in en iyi yaratıcı tabağını İrem yaptı. Tur 2'de şef yemeği crème brûlée (35 dk) yapıldı; 7 tabaktan yalnızca Koray'ınki gerçek bir crème brûlée sayıldı — Koray Saygı 20. ve son önlüğü kazandı. Podyum yoktu. Ana kadro tamamlandı; kalan 9 yarışmacı yedek yarışmasına kaldı.",
  "eliminated": null,
  "games": [
   {
    "name": "Şanlıurfa isotu yaratıcılık",
    "detail": "Şanlıurfa isotu yaratıcılık; 45 dk; 10 yarışmacı, 7 geçen",
    "winner": "İrem (Tur 1 en iyi yaratıcı tabak)"
   },
   {
    "name": "crème brûlée",
    "detail": "Şef yemeği tatlısı crème brûlée; tencerede/benmari usulü gerekli, fırında bitirmek mantıksız; 35 dk; 7 yarışmacı; yalnızca 1 tabak geçerli sayıldı",
    "winner": "Koray Saygı"
   }
  ],
  "candidates": [],
  "notes": [
   "Podyum yok: 'podyuma çıkacak bir ekip yok... ikinci 3üncü teselli ikramiyesi yok.' Jüri tahmini final ikilisi: Sercan vs Koray (resmi değil).",
   "Koray anne babasını kaybetmiş; o sabah mezarlarını ziyaret edip vedalaşmış.",
   "Berin'e tarif verildi iddiası (07.08'e dair, 08.08 sabahı gündeme geldi); 'elit grup' (1. grup) ile 4. grup arasında gerginlik; Ayşe ile Şadi tartışması."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "immunity": null
 },
 {
  "id": "2026-08-07",
  "date": "7 Ağustos 2026",
  "weekday": "Cuma",
  "title": "4. Grup 4. Gün — Kuru Fasulye ve Pilav ve Asma Yaprağı Yaratıcılık",
  "source": "transkript",
  "summary": "4. grubun dördüncü günü. Tur 1'de şef yemeği kuru fasulye ve pilav (süre net açıklanmadı) yapıldı; 11 yarışmacıdan 6'sı geçti, en iyi kuru fasulyeyi Berin yaptı. Tur 2'de asma yaprağı yaratıcılık (süre transkriptte yok) oynandı; Armağan Kırant vegan soğuk çorba ile 19. önlüğü kazandı, finalde İrem ile son ikiye kaldı.",
  "eliminated": null,
  "games": [
   {
    "name": "kuru fasulye ve pilav",
    "detail": "Şef yemeği kuru fasulye ve pilav; süre net açıklanmadı (40/45/50 dk tartışıldı); 11 yarışmacı, 6 geçen",
    "winner": "Berin (Tur 1 en iyi kuru fasulye)"
   },
   {
    "name": "asma yaprağı yaratıcılık",
    "detail": "Taze üzüm yaprağı; saplar yenilebilir olmalı; süre transkriptte yok; 6 yarışmacı",
    "winner": "Armağan Kırant"
   }
  ],
  "candidates": [],
  "notes": [
   "❓ Tur 1 süresi net açıklanmadı — 50 dk tartışmada öneri olarak geçti, süre hanesi boş bırakıldı.",
   "Nurettin'in agar-agar olayı: markette agar-agar (ve lesitin) paketlerini cebine koyduğu ihbar edildi; jüri kameradan inceledi, 'ciddi bir sorun yok' dedi ama malzemelerin önce tezgâhta olması gerektiğini hatırlattı.",
   "Tarif verme yasağı uyarısı: bir yarışmacı diğerine yaprağı blanşe etmeyi söyledi; jüri yaratıcılık turunda tarif vermenin yasak olduğunu söyledi."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "immunity": null
 },
 {
  "id": "2026-08-06",
  "date": "6 Ağustos 2026",
  "weekday": "Perşembe",
  "title": "4. Grup 3. Gün — Erik Yaratıcılık ve Sebzeli Gyoza",
  "source": "transkript",
  "summary": "4. grubun üçüncü günü. Tur 1'de erik yaratıcılık (3 çeşit erik; süre transkriptte yok) oynandı; 12 yarışmacıdan 6'sı geçti. Tur 2'de sebzeli gyoza (en az 3 adet, klasik altı kızarmış üstü buharda; süre transkriptte yok) yapıldı; Şükran Boyraz 18. önlüğü kazandı, finalde Armağan ile son ikiye kaldı, 3. Nurettin oldu.",
  "eliminated": null,
  "games": [
   {
    "name": "erik yaratıcılık",
    "detail": "Üç çeşit erik (yeşil/can, kırmızı, sarı/Angelik); süre transkriptte yok; 12 yarışmacı, 6 geçen",
    "winner": "Nurettin (Tur 1 en iyi, orta güven)"
   },
   {
    "name": "sebzeli gyoza",
    "detail": "Klasik gyoza: altı kızarmış, üstü buharda; hamur %30 nişasta %70 un, sıcak su, patates nişastası; iç lahana, soğan, mantar, sarımsak, zencefil; en az 3 adet; süre transkriptte yok; 6 yarışmacı",
    "winner": "Şükran Boyraz"
   }
  ],
  "candidates": [],
  "notes": [
   "❓ Tur 1 en iyi konusunda çelişen iki sinyal var (Nurettin 'birincisin' vs Armağan 'ürünü en iyi kullanarak'); Nurettin orta güvenle en iyi sayıldı.",
   "❓ Tur 1 bonfile tadımcısı İrem'e atandı (dusuk güven — havuz hesabı).",
   "Asuman gyoza turunda çift tadım yaptı (soya sosunu kaşıkla iki kez tattı, Recep'in sosunu kullandı) — jüri 'bu aşamada çok büyük bir hata' dedi. Olabi tabak çıkaramadı."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "immunity": null
 },
 {
  "id": "2026-08-05",
  "date": "5 Ağustos 2026",
  "weekday": "Çarşamba",
  "title": "4. Grup 2. Gün — Bal Kabağı Çorbası ve Levrek Yaratıcılık",
  "source": "transkript",
  "summary": "4. grubun ikinci günü; tur sırası tersine döndü. Tur 1'de şef yemeği bal kabağı çorbası (kremalı; süre transkriptte yok) yapıldı; 13 yarışmacıdan 7'si geçti, en iyi çorba Olabi ve Armağan arasında paylaşıldı (eş-birinci, sıralama yok). Tur 2'de levrek yaratıcılık (süre transkriptte yok) oynandı; Bahar Kaya balık köri ile 17. önlüğü kazandı, finalde Şükran ile son ikiye kaldı.",
  "eliminated": null,
  "games": [
   {
    "name": "bal kabağı çorbası",
    "detail": "Kremalı bal kabağı çorbası; bal kabağını hissettirmeli; 'Masaya bir şey gelmeyecek'; süre transkriptte yok; 13 yarışmacı, 7 geçen",
    "winner": "Olabi ve Armağan Kırant (eş-birinci, Tur 1 en iyi çorba)"
   },
   {
    "name": "levrek yaratıcılık",
    "detail": "Levrek merkezde yaratıcı tabak; süre transkriptte yok; 7 yarışmacı",
    "winner": "Bahar Kaya"
   }
  ],
  "candidates": [],
  "notes": [
   "❓ Tur 2 üçüncüsü Sercan (orta güven).",
   "❓ Armağan'ın tabağı bir jürinin kişisel birincisiydi ama ilk 3'e girmedi."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "immunity": null
 },
 {
  "id": "2026-08-04",
  "date": "4 Ağustos 2026",
  "weekday": "Salı",
  "title": "4. Grup 1. Gün — Havuç Yaratıcılık ve Bursa Pideli Köfte",
  "source": "transkript",
  "summary": "4. grubun ilk günü; ana kadroda 15 kişi var, 5 önlük daha verilecek. Tur 1'de havuç yaratıcılık (45 dk) oynandı; 14 yarışmacıdan 9'u geçti — grup rekoru. Tur 1'in en iyi tabağını Simge yaptı. Tur 2'de Bursa pideli köfte (45 dk, en az 5 köfte) yapıldı; Simge Çıtak 16. önlüğü kazandı, finalde Şerif ile son ikiye kaldı.",
  "eliminated": null,
  "games": [
   {
    "name": "havuç yaratıcılık",
    "detail": "Üç çeşit havuç; havuç birkaç farklı şekilde kullanılmalı (sadece püre değil); 45 dk; 14 yarışmacı, 9 geçen (rekor)",
    "winner": "Simge Çıtak (Tur 1 en iyi tabak)"
   },
   {
    "name": "Bursa pideli köfte",
    "detail": "İskender'in başka bir versiyonu; en az 5 adet köfte (~30-50 g); pide yumuşacık + İskender sos + köfte + yoğurt + domates/biber ızgara + tereyağı masada dökülür; bayat ekmek yasak; 45 dk; 9 yarışmacı",
    "winner": "Simge Çıtak"
   }
  ],
  "candidates": [],
  "notes": [
   "Özel davet: Olabi (Nijeryalı Türk, Trabzonlu; daha önce bir 2. turda Tomyum çorbası yapmış — 'ikinci şans'). Abdülcelil daha önce davet edilip çıkamamış.",
   "❓ Olabi: 'Benim ismim Çağdi' transkriptte böyle geçiyor; soyadı bilinmiyor.",
   "❓ Tur 2 değerlendirmesinde geçen 'Osman' muhtemelen Asuman ASR bozukluğu."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "immunity": null
 },
 {
  "id": "2026-08-02",
  "date": "2 Ağustos 2026",
  "weekday": "Pazar",
  "title": "3. Grup 5. Gün — Sumak Yaratıcılık ve Ekler",
  "source": "transkript",
  "summary": "3. grubun son günü. Tur 1'de sumak yaratıcılık (45 dk) oynandı; 10 yarışmacıdan 7'si geçti, Tur 1'in en iyi tabağını Tolga Han yaptı. Tur 2'de şef yemeği ekler (50 dk, 1 adet) yapıldı; Gülbahar Meşe 15. önlüğü kazandı, finalde Buse ile son ikiye kaldı. Ana kadronun ilk 15'i tamamlandı.",
  "eliminated": null,
  "games": [
   {
    "name": "sumak yaratıcılık",
    "detail": "Sumak yaratıcılık; 45 dk; 10 yarışmacı, 7 geçen",
    "winner": "Tolga Han (Tur 1 en iyi tabak, orta güven)"
   },
   {
    "name": "ekler",
    "detail": "Final tatlısı ekler, 1 adet; 50 dk; 7 yarışmacı",
    "winner": "Gülbahar Meşe"
   }
  ],
  "candidates": [],
  "notes": [
   "❓ Transkriptte 'Doğukan' olarak geçen tadımcı yarışmacı listesinde yok; havuz hesabıyla Sultan'a atandı (dusuk güven).",
   "❓ Kazanan anonsunda 'Gürcan' adı geçiyor — kimliği bilinmiyor; ilk-15 sayımında Şadi eksik (ASR/editing boşluğu).",
   "Yaren tur 2'de rahatsızlandı (kalbi sıkıştı, başı döndü, nabzı ölçüldü) — sağlık notu, tartışma değil."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "immunity": null
 },
 {
  "id": "2026-08-01",
  "date": "1 Ağustos 2026",
  "weekday": "Cumartesi",
  "title": "3. Grup 4. Gün — Sebze Güveci ve Pazı Yaratıcılık",
  "source": "transkript",
  "summary": "3. grubun dördüncü günü. Tur 1'de şef yemeği sebze güveci (40 dk) yapıldı; 11 yarışmacıdan 6'sı geçti, en iyi güveci Kübra yaptı. Tur 2'de pazı yaratıcılık (45 dk) oynandı; Kübra pazı sarmalı karides ile 14. önlüğü kazandı, finalde Buse ile son ikiye kaldı.",
  "eliminated": null,
  "games": [
   {
    "name": "sebze güveci",
    "detail": "Şef yemeği sebze güveci; 40 dk; 11 yarışmacı, 6 geçen",
    "winner": "Kübra Satılmış (Tur 1 en iyi güveç)"
   },
   {
    "name": "pazı yaratıcılık",
    "detail": "Pazı yaratıcılık; 45 dk; 6 yarışmacı",
    "winner": "Kübra Satılmış"
   }
  ],
  "candidates": [],
  "notes": [
   "❓ Transkriptte 'Bu oyun birinci ve kazananı >> Buse' satırları var — ASR bozukluğu; kazanan Kübra (önlük konuşması + 02.08 açılışı 'Kübra hem ilk yemekte hem ikinci yemekte birinci oldu' + web kaydı).",
   "❓ Balkonda 'Nefise' adı bir kez geçiyor — kimliği bilinmiyor.",
   "31.07 balkon kavgasının devamı: Şadi'nin balkondan yardım ettiği iddiası; Batuhan özür diledi; Demirhan 'önlük giymeyen konuşmasın' dedi."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "immunity": null
 },
 {
  "id": "2026-07-31",
  "date": "31 Temmuz 2026",
  "weekday": "Cuma",
  "title": "3. Grup 3. Gün — Kiraz Yaratıcılık ve Empanada",
  "source": "transkript",
  "summary": "3. grubun üçüncü günü. Tur 1'de kiraz yaratıcılık (45 dk) oynandı; 12 yarışmacıdan 6'sı geçti, Tur 1'in en iyi tabağını Ayşe yaptı (somon gravlaks, kiraz kür). Tur 2'de şef yemeği Empanada yapıldı; Ayşe Nur İnal 13. önlüğü kazandı, finalde Kübra ile son ikiye kaldı.",
  "eliminated": null,
  "games": [
   {
    "name": "kiraz yaratıcılık",
    "detail": "Kiraz yaratıcılık; 45 dk; 12 yarışmacı, 6 geçen",
    "winner": "Ayşe Nur İnal (Tur 1 en iyi tabak)"
   },
   {
    "name": "Empanada",
    "detail": "Hamur kıyır kıyır, yumurtalı; iç kıyma, chorizo, patates, kişniş, soğan, sarımsak; yan sos domatesli sarımsaklı İspanyol sos ayrı kapta; yarım ay katlama + çimdikleme; fırında veya kızartma; süre transkriptte yok; 6 yarışmacı",
    "winner": "Ayşe Nur İnal"
   }
  ],
  "candidates": [],
  "notes": [
   "Empanada web kaydında '[teyit edilecek — tek kaynak Instagram özet hesabı]' idi; transkript doğruladı.",
   "❓ İki kimliksiz tadım (kirazlı kek → Buse, tortellini → Türkan) eleme hesabıyla atandı (orta güven).",
   "Balkonda kavga: Celil (Abdülcelil) birini 'kötü bir insan' diye çağırdı; Şiringül önlüğünü alırken alkışlanmadığını söyledi; balkondan tarif/hint verildiği iddia edildi; Şadi suçlandı."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "immunity": null
 },
 {
  "id": "2026-07-30",
  "date": "30 Temmuz 2026",
  "weekday": "Perşembe",
  "title": "3. Grup 2. Gün — Düğün Çorbası ve Dana Kıyma Yaratıcılık",
  "source": "transkript",
  "summary": "3. grubun ikinci günü; tur sırası tersine döndü. Tur 1'de şef yemeği Düğün çorbası (45 dk) yapıldı; 13 yarışmacıdan 7'si geçti. Tur 2'de dana kıyma yaratıcılık (45 dk) oynandı; Muhammed köfte + kebap ile birinci olup 12. önlüğü kazandı, finalde Batuhan ile son ikiye kaldı.",
  "eliminated": null,
  "games": [
   {
    "name": "Düğün çorbası",
    "detail": "Kuzu eti, nohut, buğday; terbiye limon+yumurta+un+yoğurt; 45 dk; 13 yarışmacı, 7 geçen",
    "winner": null
   },
   {
    "name": "dana kıyma yaratıcılık",
    "detail": "Dana kıyma ile her şey serbest (Türk, yabancı, klasik, modern, tuzlu); 45 dk; 7 yarışmacı",
    "winner": "Muhammed Yahya Haliloğlu"
   }
  ],
  "candidates": [],
  "notes": [
   "❓ Tur 1 en iyi çorba Sultan ile Gül arasında çözülemedi — en iyi atanmadı.",
   "Bölüm açılışı önceki bölümün özeti ve stüdyo sohbeti (ana kadro üyeleriyle) — yarışma bilgisi değil."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "immunity": null
 },
 {
  "id": "2026-07-29",
  "date": "29 Temmuz 2026",
  "weekday": "Çarşamba",
  "title": "3. Grup 1. Gün — Bezelye Yaratıcılık ve Hatay Usulü Tepsi Kebabı",
  "source": "transkript",
  "summary": "3. grubun ilk günü. Tur 1'de taze bezelye yaratıcılık (45 dk) oynandı; 14 yarışmacıdan 8'i geçti, Tur 1'in en iyi tabağını Kübra yaptı. Tur 2'de Hatay usulü tepsi kebabı (40 dk) yapıldı; Tolga Çakuş 'mükemmele yakın' kebabıyla 11. önlüğü kazandı, finalde Muhammed ile son ikiye kaldı.",
  "eliminated": null,
  "games": [
   {
    "name": "bezelye yaratıcılık",
    "detail": "Taze bezelye yıldız olmalı (garnitür değil; etli bezelye yasak); 45 dk; 14 yarışmacı, 8 geçen",
    "winner": "Kübra Satılmış (Tur 1 en iyi tabak)"
   },
   {
    "name": "Hatay usulü tepsi kebabı",
    "detail": "Dana kaburga + kuzu kol + kuzu boşluğu, zırh; Samandağ biber uyarısı; 1 adet tırnaklı pide; salçalı su; 40 dk; 8 yarışmacı",
    "winner": "Tolga Çakuş"
   }
  ],
  "candidates": [],
  "notes": [
   "❓ 3. gruptaki 'Batuhan' soyadı bilinmiyor; Batuhan Nazikoğlu değil; süre bitiminden sonra tabağı sildiği için tabağı tadılmadı (kural ihlali).",
   "❓ 'Togan/Tolgan' ASR formları = Tolga Han; Tolga Çakuş'tan ayrı kişi (30.07'de isim benzerliği doğrulandı).",
   "❓ Tur 2'de 3./4. sıra (Gül / Kübra) belirsiz; '4üncü başarılı kebap' kimliği çözülemedi."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "immunity": null
 },
 {
  "date": "27 Temmuz 2026",
  "games": [
   {
    "detail": "Tur 1, 45 dk. 10 yarışmacı; 6'sı üst tura geçti (Faruk, Burçin, Nesibe, Betül, Fatmanur, Ferdi). Öne çıkan tabak: Burçin'in sucuğu.",
    "name": "Yenibahar yaratıcılık",
    "winner": "Burçin"
   },
   {
    "detail": "Tur 2 (final), 45 dk. Klasik İtalyan tiramisu: kedi dili kendileri yapıldı, sabayon + mascarpone, ara çikolata parçacıkları, üstte kakao. Sıralama: 1. Burçin, 2. Nesibe, 3. Fatmanur, 4. Betül, 5. Faruk, 6. Ferdi.",
    "name": "Tiramisu",
    "winner": "Burçin"
   }
  ],
  "id": "2026-07-27",
  "notes": [
   "Önlük 10: Burçin — 5/5 Tur 2, hep ilk 3.",
   "Nesibe 3 kez 2. oldu (24, 26, 27 Temmuz).",
   "Yedek seçilmedi; kalan 9 yarışmacı yedekler yarışmasına devam ediyor.",
   "Tartışmalar: Şadi'nin alkışlanmaması; 'kral ve kraliçe' (Batuhan/Şiringül) iddiası; Eyüp Can'ın sessizliği; Fatmanur'un şarkı şikâyeti; Abdülcelil–Hasan Alp atışması; Faruk–Ferdi yer değişimi.",
   "Web kaydı (yenibahar + tiramisu) transkriptle uyumlu, çelişki yok."
  ],
  "source": "transkript",
  "summary": "2. Grup'un son günü. 10 yarışmacı yenibahar yaratıcılıkta yarıştı, 6'sı Tur 2'ye geçti. Finalde klasik tiramisu yapıldı; Burçin hem Tur 1'de sucuk tabağıyla hem Tur 2'de tiramisu birincisiyle 10. ve son önlüğü aldı. İlk 10 tamamlandı: Batuhan, Nilay, Hasan Alp, Şiringül, Enes, Eyüp Can, Demirhan, Nurten, Şadi, Burçin.",
  "title": "Ana Kadro Seçimi — 10. Önlük: Burçin (Yenibahar + Tiramisu)",
  "week": "0. Hafta",
  "weekday": "Pazartesi",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "26 Temmuz 2026",
  "games": [
   {
    "detail": "Tur 1, 45 dk. 11 yarışmacı; 5'i üst tura geçti (Burçin, Betül, Nesibe, Şadi, Fatmanur). Tur 1 birincisi: Nesibe.",
    "name": "Ege usulü çiçek enginar dolması",
    "winner": "Nesibe"
   },
   {
    "detail": "Tur 2 (final), 45 dk. Sıralama: 1. Şadi (krep suzette), 2. Nesibe (kabak dolması), 3. Burçin (naneli karides tempura), 4. Betül (çift renkli tortellini ❓ orta), 5. Fatmanur (sıra açıklanmadı).",
    "name": "Nane yaratıcılık",
    "winner": "Şadi"
   }
  ],
  "id": "2026-07-26",
  "notes": [
   "Önlük 9: Şadi.",
   "Esra geri döndü ve özür diledi (25 Temmuz'da çekilmişti).",
   "Tartışmalar: Ferdi vs Somer Şef (enginarın üstünü kesme); Furkan'ın yukarıdan yardım isyanı; Burçin'in 'risotto' yorumuyla moralinin bozulması; Fatmanur'un ağlaması; Abdülcelil'in hayat hikâyesi.",
   "❓ Betül'ün Tur 1 enginar detayları [bulunamadı]; tortellini = Betül ❓ orta; Şadi'nin soyadı transkriptte yok.",
   "Web kaydında Şadi'nin yemekleri [bulunamadı] idi — transkriptle dolduruldu; çelişki yok."
  ],
  "source": "transkript",
  "summary": "2. Grup 4. gün. 11 yarışmacı Ege usulü çiçek enginar dolması yaptı, 5'i Tur 2'ye geçti; Tur 1 birincisi Nesibe ('çok açık ara'). Finalde nane yaratıcılıkta Şadi'nin krep suzette'i 9. önlüğü aldı. Esra bir gün önce çekildiğini açıkladıktan sonra geri döndü ve özür diledi.",
  "title": "Ana Kadro Seçimi — 9. Önlük: Şadi (Enginar Dolması + Nane)",
  "week": "0. Hafta",
  "weekday": "Pazar",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "25 Temmuz 2026",
  "games": [
   {
    "detail": "Tur 1, 45 dk. 12 yarışmacı; 7'si üst tura geçti (Ferdi, Burçin, Betül, Nurten, Faruk, Temanur, Nesibe). Şef tabağı: Faruk ve Betül; 3. Nurten. Şadi değerlendirmeye alınmadı (süre sonrası tabak silme). Esra Tur 2 öncesi çekildi.",
    "name": "Yenidünya yaratıcılık",
    "winner": null
   },
   {
    "detail": "Tur 2 (final), 50 dk. Sıralama: 1. Nurten, 2. Faruk, 3. Burçin, 4. Nesibe; elenenler Betül, Ferdi, Temanur.",
    "name": "Su böreği",
    "winner": "Nurten"
   }
  ],
  "id": "2026-07-25",
  "notes": [
   "Önlük 8: Nurten — su böreği 'textbook' bulundu.",
   "Esra Tur 2 öncesi kendi inisiyatifiyle çekildi (26 Temmuz'da geri döndü).",
   "Şadi süre bitiminden sonra tabağını sildi — kural ihlali, değerlendirmeye alınmadı; yemeği [bulunamadı].",
   "Ferdi market sırasında fırın açtığı için 1 dakika cezalıydı.",
   "Tartışmalar: dörtlü grup iddiası (iki farklı anlatım); Esra'nın çekilmesi; Şadi'nin kural ihlali.",
   "Web kaydı (yenidünya + su böreği) transkriptle uyumlu, çelişki yok."
  ],
  "source": "transkript",
  "summary": "2. Grup 3. gün. 12 yarışmacı yenidünya yaratıcılıkta yarıştı; Faruk ve Betül şef tabağı çıkardı, Nurten 3. oldu. Şadi süre sonrası tabağını sildiği için değerlendirmeye alınmadı. Esra Tur 2 öncesi yarışmadan çekildi. Finalde su böreğini en iyi yapan Nurten 8. önlüğü aldı.",
  "title": "Ana Kadro Seçimi — 8. Önlük: Nurten (Yenidünya + Su Böreği)",
  "week": "0. Hafta",
  "weekday": "Cumartesi",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "24 Temmuz 2026",
  "games": [
   {
    "detail": "Tur 1, 40 dk. 13 yarışmacı; 6'sı üst tura geçti (Nesibe, Betül, Burçin, Esra, Fatmanur, Demirhan). En başarılı çorbanın ismi ASR'da yakalanamadı [bulunamadı]; Demirhan en iyi 3'teydi.",
    "name": "Yüksük çorbası",
    "winner": null
   },
   {
    "detail": "Tur 2 (final), 45 dk. Sıralama: 1. Demirhan (ciğer pate elmalı), 2. Nesibe, 3. Burçin; elenenler Fatmanur, Betül, Esra.",
    "name": "Kuzu ciğeri yaratıcılık",
    "winner": "Demirhan"
   }
  ],
  "id": "2026-07-24",
  "notes": [
   "Önlük 7: Demirhan.",
   "Eyüp Can ve Abdülcelil barıştı (çiğ köfte; künefe Urfa'nın şakası; başkanlık devri).",
   "Tartışmalar: Fatmanur–Şadi 'az konuşun' kavgası; dörtlü kadın grubu iddiası (iki anlatım); Şadi'nin çift tadımı; Esra'nın kişisel açıklaması.",
   "❓ Esra/Burçin Tur 1 tadım segmentleri yok (detay [bulunamadı]); Esra'nın 'yükseliş' tabağı ❓ orta; 'duy' segmenti = Faruk ❓ orta; parmağını kesen kişi bilinmiyor.",
   "Web kaydında Demirhan'ın yemekleri [bulunamadı] idi — transkriptle dolduruldu; çelişki yok."
  ],
  "source": "transkript",
  "summary": "2. Grup 2. gün. 13 yarışmacı yüksük çorbası yaptı, 6'sı Tur 2'ye geçti. Finalde kuzu ciğeri yaratıcılıkta Demirhan'ın ciğer pate elmalı tabağı 'açık ara en iyi tabak' seçildi ve 7. önlüğü aldı. Nesibe 2. oldu.",
  "title": "Ana Kadro Seçimi — 7. Önlük: Demirhan (Yüksük Çorbası + Kuzu Ciğeri)",
  "week": "0. Hafta",
  "weekday": "Cuma",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "23 Temmuz 2026",
  "games": [
   {
    "detail": "Tur 1, 45 dk. 14 yarışmacı; 7'si üst tura geçti (Ferdi, Fatmanur, Eyüp Can, Şadi, Burçin, Faruk, Demirhan). Şef tabağı: Demirhan + 2 isim ASR'da kayıp. 4 Tur 1 tabağı isimsiz kaldı (atama bilinmiyor).",
    "name": "Taze fasulye yaratıcılık",
    "winner": null
   },
   {
    "detail": "Tur 2 (final), 45 dk. Sıralama: 1. Eyüp Can, 2. Burçin, 3. Demirhan (eleme yoluyla ❓ yuksek), 4. Şadi, 5. Fatmanur (eleme yoluyla ❓ yuksek); elenenler Faruk, Ferdi.",
    "name": "Altı Ezmeli Kebap",
    "winner": "Eyüp Can"
   }
  ],
  "id": "2026-07-23",
  "notes": [
   "Önlük 6: Eyüp Can.",
   "2. Grup kadrosu: Nesibe, Fatmanur, Burçin, Demirhan, Esra, Nurten, Abdülcelil (davetle döndü), Eyüp Can, Betül, Temanur, Ferdi, Furkan, Şadi, Faruk.",
   "Tartışmalar: Burçin'in ilaç dağıtma şakası; Hatay–Urfa yemek tartışması; Ferdi'nin 'hak etmeyen biri var' çıkışı; Esra'nın '1.5 yılda şef olacağım' iddiası.",
   "❓ İlk tanıtım segmentindeki yarışmacı = Nesibe ❓ orta; 4 isimsiz Tur 1 tabağı atanamadı; Abdülcelil'in tam adı 'Mehmet Abdülcelil' olabilir ❓ orta.",
   "Web kaydı (Ayşe Kadın fasulyesi + Altı Ezmeli Kebap) transkriptle uyumlu, çelişki yok."
  ],
  "source": "transkript",
  "summary": "2. Grup 1. gün. 14 yarışmacı taze fasulye (Ayşe Kadın + çalı) yaratıcılıkta yarıştı, 7'si Tur 2'ye geçti. Finalde Altı Ezmeli Kebap'ı en iyi yapan Eyüp Can 6. önlüğü aldı; Burçin 2., Demirhan 3. oldu.",
  "title": "Ana Kadro Seçimi — 6. Önlük: Eyüp Can (Taze Fasulye + Altı Ezmeli Kebap)",
  "week": "0. Hafta",
  "weekday": "Perşembe",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "21 Temmuz 2026",
  "games": [
   {
    "detail": "Tur 1, 45 dk. 10 yarışmacı; 6'sı üst tura geçti (Fazlı, Hatice, Fatma, Enes, Hami Efe, Emre). En başarılı 2 tabak: Enes ve Hami Efe (sıra anonsu ASR'da bozuk ❓ orta).",
    "name": "Kimyon yaratıcılık",
    "winner": "Enes"
   },
   {
    "detail": "Tur 2 (final), 45 dk. Sıralama: 1. Enes, 2. Emre, 3. Hami Efe, 4. Fatma, 5. Fazlı, 6. Hatice.",
    "name": "Kazan dibi",
    "winner": "Enes"
   }
  ],
  "id": "2026-07-21",
  "notes": [
   "Önlük 5: Enes Vardar — 1. Grup tamamlandı (Batuhan, Nilay, Hasan Alp, Şiringül, Enes).",
   "Jüri planı: 3 grup × 5 = 15 ana kadro (söylendiği gibi kaydedildi, doğrulanmadı).",
   "Fazlı ilk kez Tur 2'ye çıktı.",
   "Web kaydı (kimyon + kazandibi; finalde Emre ile son ikiye kaldı) transkriptle uyumlu, çelişki yok."
  ],
  "source": "transkript",
  "summary": "1. Grup son günü. 10 yarışmacı kimyon yaratıcılıkta yarıştı, 6'sı Tur 2'ye geçti; Enes ve Hami Efe Tur 1'in en başarılı 2 tabağını yaptı. Finalde kazan dibini en iyi yapan Enes 5. önlüğü aldı; 1. Grup tamamlandı.",
  "title": "Ana Kadro Seçimi — 5. Önlük: Enes (Kimyon + Kazan Dibi)",
  "week": "0. Hafta",
  "weekday": "Salı",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "20 Temmuz 2026",
  "games": [
   {
    "detail": "Tur 1, 40 dk. 11 yarışmacı; 7'si üst tura geçti (Enes, Mine, Şiringül, Beyhan, Cansu, Hatice, Nevzat). Tur 1 birincisi: Cansu.",
    "name": "Falafel",
    "winner": "Cansu Şöhret"
   },
   {
    "detail": "Tur 2 (final), 45 dk. Sıralama: 1. Şiringül (dana dil), 2. Enes, 3. Nevzat; 4.-7. sıralar açıklanmadı (Cansu, Mine, Beyhan, Hatice).",
    "name": "Kuzu kulağı yaratıcılık",
    "winner": "Şiringül Kaya"
   }
  ],
  "id": "2026-07-20",
  "notes": [
   "Önlük 4: Şiringül Kaya.",
   "Mine 3/3 Tur 2 görünümüyle tek yarışmacı (açılışta söylendi).",
   "❓ Tur 2'de 4.-7. sıralar açıklanmadı.",
   "Web kaydı (falafel + kuzu kulağı) transkriptle uyumlu, çelişki yok."
  ],
  "source": "transkript",
  "summary": "1. Grup 4. gün. 11 yarışmacı falafel yaptı, 7'si Tur 2'ye geçti; Tur 1 birincisi Cansu, en güzel falafel Mine'ninkiydi ama sos hatası nedeniyle 1. olamadı. Finalde kuzu kulağı yaratıcılıkta Şiringül'ün dana dili 4. önlüğü aldı.",
  "title": "Ana Kadro Seçimi — 4. Önlük: Şiringül (Falafel + Kuzu Kulağı)",
  "week": "0. Hafta",
  "weekday": "Pazartesi",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "19 Temmuz 2026",
  "games": [
   {
    "detail": "Tur 1, 45 dk. 12 yarışmacı; 5'i üst tura geçti (Beyhan, Mine, Hasan Alp, Şiringül, Emre). Tur 1 birincisi: Hasan Alp. Cansu'nun yemeği [bulunamadı] (satır açılmadı).",
    "name": "Kayısı yaratıcılık",
    "winner": "Hasan Alp Karabacak"
   },
   {
    "detail": "Tur 2 (final), 45 dk. Minimum 3 kat. Sıralama: 1. Hasan Alp, 2. Şiringül, 3. Emre, 4. Mine, 5. Beyhan.",
    "name": "Lazanya",
    "winner": "Hasan Alp Karabacak"
   }
  ],
  "id": "2026-07-19",
  "notes": [
   "Önlük 3: Hasan Alp Karabacak.",
   "Nevzat 1 dakika geç başlama cezası aldı (dolap açık bıraktı).",
   "❓ Poğaça atfı = Beyhan ❓ dusuk; kayısı dolması atfı = Fazlı ❓ orta; Cansu'nun Tur 1 yemeği [bulunamadı].",
   "Web kaydı (Hasan Alp önlüğü) doğrulandı; yemek detayları transkriptle dolduruldu; çelişki yok."
  ],
  "source": "transkript",
  "summary": "1. Grup 3. gün. 12 yarışmacı kayısı yaratıcılıkta yarıştı, 5'i Tur 2'ye geçti; Tur 1 birincisi Hasan Alp (levrek + kayısı turşusu). Finalde lazanyayı en iyi yapan Hasan Alp 3. önlüğü aldı. Nevzat 1 dakika geç başlama cezası aldı.",
  "title": "Ana Kadro Seçimi — 3. Önlük: Hasan Alp (Kayısı + Lazanya)",
  "week": "0. Hafta",
  "weekday": "Pazar",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "18 Temmuz 2026",
  "games": [
   {
    "detail": "Tur 1, 45 dk. 13 yarışmacı; 6'sı üst tura geçti (Nilay, Mine, Hami Efe, Nevzat, Hasan Alp, Cansu). Tur 1 birincisi: Nevzat. Hatice kural hatası yaptı (süre sonrası ekmek koydu, tabağı değerlendirmeye alınmadı).",
    "name": "Fransız usulü soğan çorbası",
    "winner": "Nevzat"
   },
   {
    "detail": "Tur 2 (final), 45 dk. Sıralama: 1. Nilay (tavuk sarma), 2. Hami Efe, 3. Hasan Alp, 4. Nevzat, 5. Mine, 6. Cansu.",
    "name": "Tavuk yaratıcılık",
    "winner": "Elif Nilay Özgen"
   }
  ],
  "id": "2026-07-18",
  "notes": [
   "Önlük 2: Elif Nilay Özgen.",
   "'41 tabak' doğrulaması bu bölümde geçiyor (14+8+13+6).",
   "Web kaydında 18 Temmuz'un bireysel tabak detayları yoktu — transkript doldurdu; webdeki Tur 2 'katildi' sonuçları sıralı sonuçlarla düzeltildi. Çelişki yok."
  ],
  "source": "transkript",
  "summary": "1. Grup 2. gün. 13 yarışmacı Fransız usulü soğan çorbası yaptı, 6'sı Tur 2'ye geçti; Tur 1 birincisi Nevzat ('açık ara'). Finalde tavuk yaratıcılıkta Nilay'ın tavuk sarması 2. önlüğü aldı.",
  "title": "Ana Kadro Seçimi — 2. Önlük: Nilay (Soğan Çorbası + Tavuk)",
  "week": "0. Hafta",
  "weekday": "Cumartesi",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "17 Temmuz 2026",
  "games": [
   {
    "detail": "Tur 1, 45 dk. 14 yarışmacı; 8'i üst tura geçti (Batuhan, Nilay, Emre, Fatma, Hami Efe, Hasan Alp, Hatice, Mine). Tur 1 birincisi: Mine (tuzlu pataşu).",
    "name": "Biber yaratıcılık",
    "winner": "Mine"
   },
   {
    "detail": "Tur 2 (final), 45 dk. Sıralama: 1. Batuhan, 2. Hasan Alp, 3. Emre; elenenler Hami Efe, Nilay, Hatice, Mine, Fatma.",
    "name": "Ali Nazik",
    "winner": "Batuhan Nazikoğlu"
   }
  ],
  "id": "2026-07-17",
  "notes": [
   "Önlük 1: Batuhan Nazikoğlu.",
   "RECONCILE: LISTE.md ile tam uyum. Veri setindeki 2 çıkarım satırı (Batuhan — Somon bayıldı; Şiringül — Ciğer) bu transkriptle doğrulandı, güven orta → yuksek.",
   "Elenenler ertesi gün geri döner ('yarın sizin için tabii ki de şans devam ediyor').",
   "CSV'de yalnızca 2 düzeltme satırı var; 17 Temmuz'un geri kalanı veri setinde zaten mevcut."
  ],
  "source": "transkript",
  "summary": "1. Grup 1. gün. 14 yarışmacı biber yaratıcılıkta yarıştı, 8'i Tur 2'ye geçti; Tur 1 birincisi Mine (tuzlu pataşu). Finalde Ali Nazik'i kurallara uygun yapan tek yarışmacı Batuhan 1. önlüğü aldı. LISTE.md ile tam uyum (RECONCILE).",
  "title": "Ana Kadro Seçimi — 1. Önlük: Batuhan (Biber + Ali Nazik)",
  "week": "0. Hafta",
  "weekday": "Cuma",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "16 Temmuz 2026",
  "games": [
   {
    "detail": "Üçlü düello. Sıralama: 1. Batuhan Dağlı, 2. Amin Sasani, 3. Burak Yıldız. Süre transkriptte belirtilmemiş [bulunamadı].",
    "name": "Hamburger",
    "winner": "Batuhan Dağlı"
   },
   {
    "detail": "Üçlü düello, 25 dk. Üç yarışmacı da (Rüya Tekin, Ayça, ismi geçmeyen Uşaklı yarışmacı) standartı tutturamadı; kazanan yok.",
    "name": "Çikolatalı sufle"
   },
   {
    "detail": "Üçlü düello, 25 dk, 3 adet. Sıralama: 1. Nurten Ocak Tamer, 2. Miray/Mirac Çalışkan ❓ dusuk, 3. Altın Güsevim.",
    "name": "Çiğ börek",
    "winner": "Nurten Ocak Tamer"
   },
   {
    "detail": "Üçlü düello, 45 dk. Sıralama: 1. Tolga, 2. Kenan Bektaş. Ahmet Taylan Duman kaza nedeniyle çekildi (yarışmadı).",
    "name": "Bursa Cantık pidesi",
    "winner": "Tolga"
   }
  ],
  "id": "2026-07-16",
  "notes": [
   "3. tura geçenler: Batuhan Dağlı, Nurten Ocak Tamer, Tolga.",
   "Ahmet Taylan Duman motosiklet kazası (ciddi kol kırıkları) nedeniyle çekildi; seneye 2. tura davetli.",
   "❓ Sufle düellosundaki Uşaklı yarışmacının ismi [bulunamadı]; Ayça'nın soyadı [bulunamadı]; Miray/Mirac ilk isim ❓ dusuk; Tolga'nın soyadı transkriptte yok.",
   "Tur 1 geri dönüşleri daha erken bir tarihe aittir (tarih transkriptte belirtilmiyor)."
  ],
  "source": "transkript",
  "summary": "Seçim 2. turu: 4 üçlü düello, 12 yarışmacı. Kazananlar 3. tura (ana kadro seçimi) geçti: Batuhan Dağlı (hamburger), Nurten Ocak Tamer (çiğ börek), Tolga (Bursa Cantık pidesi). Çikolatalı sufle düellosunda üç yarışmacı da standartı tutturamadı, kimse geçemedi. Ahmet Taylan Duman motosiklet kazası nedeniyle çekildi.",
  "title": "2. Tur — Üçlü Düello (Hamburger, Sufle, Çiğ Börek, Cantık)",
  "week": "0. Hafta",
  "weekday": "Perşembe",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "date": "15 Temmuz 2026",
  "games": [
   {
    "detail": "Üçlü düello, 20 dk. Sıralama: 1. Enes, 2. Yakup Yıldız, 3. Levent Odabaş.",
    "name": "Sezar Salata",
    "winner": "Enes"
   },
   {
    "detail": "Üçlü düello. Sıralama: 1. Temanur Korkmaz, 2. Şeyma Çalık, 3. Mesut Çetinkaya. Süre transkriptte belirtilmemiş [bulunamadı].",
    "name": "Karidesli avokadolu tako",
    "winner": "Temanur Korkmaz"
   },
   {
    "detail": "Üçlü düello. Sıralama: 1. Türkan Arı, 2. Ayşegül, 3. Zeynep Kılıçparlar. Süre transkriptte belirtilmemiş [bulunamadı].",
    "name": "İrmik helvası",
    "winner": "Türkan Arı"
   },
   {
    "detail": "Üçlü düello, 40 dk. Sıralama: 1. Mehmet, 2. Ferit Altıntop, 3. Soner Aksür.",
    "name": "Beyti Kebabı",
    "winner": "Mehmet"
   }
  ],
  "id": "2026-07-15",
  "notes": [
   "3. tura geçenler: Enes, Temanur Korkmaz, Türkan Arı, Mehmet.",
   "❓ Mehmet'in soyadı ❓ dusuk ('Mehmet Şerifiz' / 'Mehmet Ense'); Enes'in Tur 1 yemeği adı ASR'da bozuk ('Burdu soslu bonfile', muhtemelen Bordelaise).",
   "Tur 1 geri dönüşleri daha erken bir tarihe aittir (tarih transkriptte belirtilmiyor)."
  ],
  "source": "transkript",
  "summary": "Seçim 2. turu: 4 üçlü düello, 12 yarışmacı. Kazananlar 3. tura (ana kadro seçimi) geçti: Enes (Sezar Salata), Temanur Korkmaz (karidesli avokadolu tako), Türkan Arı (irmik helvası), Mehmet (Beyti Kebabı).",
  "title": "2. Tur — Üçlü Düello (Sezar Salata, Tako, İrmik Helvası, Beyti)",
  "week": "0. Hafta",
  "weekday": "Çarşamba",
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-14",
  "date": "14 Temmuz 2026",
  "weekday": "Salı",
  "week": "0. Hafta",
  "title": "Seçim Turu — Gözleme, Terbiye Balık Çorbası, Çüros ve Patlıcan Kebabı Düelloları",
  "source": "transkript",
  "summary": "1. turda 9 yarışmacı geçti; 4 üçlü düello yapıldı. Koray Saygı (gözleme), Hatice Yurttaş Demir (terbiyeli balık çorbası), Simge (çüros) ve Yalçın Ballı (patlıcan kebabı, ❓ orta) 3. tura çıktı. Gülşen çüros çıkaramadı.",
  "games": [
   {
    "name": "Kıymalı kaşarlı gözleme",
    "detail": "25 dk",
    "winner": "Koray Saygı"
   },
   {
    "name": "Terbiyeli balık çorbası",
    "detail": "30 dk; herkes kendi balığını seçti",
    "winner": "Hatice Yurttaş Demir"
   },
   {
    "name": "Çüros + acı çikolata sos",
    "detail": "Min 3 adet; süre [bulunamadı]",
    "winner": "Simge"
   },
   {
    "name": "Patlıcan kebabı + lavaş",
    "detail": "40 dk, mangalda",
    "winner": "Yalçın Ballı"
   }
  ],
  "notes": [
   "Düello 4 kazanan anonsu ASR'de çelişkili (Hasan/Yalçın) — geri bildirim Yalçın'ı destekliyor, ❓ orta.",
   "Gülşen düelloda tabak çıkaramadı."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-13",
  "date": "13 Temmuz 2026",
  "weekday": "Pazartesi",
  "week": "0. Hafta",
  "title": "Seçim Turu — Süt Helvası, Sakızlı Ahtapot, Menemen ve Fettuccine Alfredo Düelloları",
  "source": "transkript",
  "summary": "1. turda 12 yarışmacı geçti; 4 üçlü düello yapıldı. Beyrin Demirkol (süt helvası), Üveys Kürşat Eroğlu (sakızlı ahtapot), Gökçe (menemen) ve Demirhan Eltekin (fettuccine Alfredo) 3. tura çıktı. Masya Tırpan KAŞIK hediyesi aldı.",
  "games": [
   {
    "name": "Süt helvası",
    "detail": "Süre [bulunamadı]",
    "winner": "Beyrin Demirkol"
   },
   {
    "name": "Sakızlı ahtapot",
    "detail": "30 dk; Mehmet Şef'in imza yemeği",
    "winner": "Üveys Kürşat Eroğlu"
   },
   {
    "name": "Menemen",
    "detail": "15 dk",
    "winner": "Gökçe"
   },
   {
    "name": "Fettuccine Alfredo",
    "detail": "30 dk; taze makarna, parmesan sos",
    "winner": "Demirhan Eltekin"
   }
  ],
  "notes": [
   "Masya Tırpan 1. turda KAŞIK hediyesi aldı."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-12",
  "date": "12 Temmuz 2026",
  "weekday": "Pazar",
  "week": "0. Hafta",
  "title": "Seçim Turu — Kadın Budu Köfte, Künefe, Etli Yaprak Sarma ve Viyana Şnitzel Düelloları",
  "source": "transkript",
  "summary": "1. turda 12 yarışmacı geçti; 4 üçlü düello yapıldı. Fatmanur Yazıcı (kadın budu köfte), Alkan Sapmaz (künefe), Çiğdem Korkmaz Gülkan (etli yaprak sarma) ve Emre Can Ilkilmez (Viyana şnitzel) 3. tura çıktı. Acarkan Yukarı olası yedek olarak not edildi.",
  "games": [
   {
    "name": "Kadın budu köfte",
    "detail": "35 dk",
    "winner": "Fatmanur Yazıcı"
   },
   {
    "name": "Künefe",
    "detail": "25 dk; 1 porsiyon, kendi kabında",
    "winner": "Alkan Sapmaz"
   },
   {
    "name": "Etli yaprak sarma",
    "detail": "40 dk; min 10 adet",
    "winner": "Çiğdem Korkmaz Gülkan"
   },
   {
    "name": "Viyana şnitzel",
    "detail": "35 dk; baby patates + Bavyera patates salatası",
    "winner": "Emre Can Ilkilmez"
   }
  ],
  "notes": [
   "Janet Kayar'a gelecek yıl ön elemesiz 1. tur hakkı teklif edildi.",
   "Acarkan Yukarı olası yedek olarak not edildi.",
   "Zümrüt Sarıgül ve Şükran Boyraz annelerinin anısına pişirdi."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-11",
  "date": "11 Temmuz 2026",
  "weekday": "Cumartesi",
  "week": "0. Hafta",
  "title": "Seçim Turu — Risotto, Edirne Tava Ciğeri, Panna Cotta ve Kilis Tava Düelloları",
  "source": "transkript",
  "summary": "1. turda 10 yarışmacı geçti; 4 düello yapıldı ama panna cotta düellosunda üç yarışmacı da tabak çıkaramadı ve kazanan olmadı. İrem Güven (risotto), Elif (Edirne tava ciğeri) ve Eyüp Can (Kilis tava) 3. tura çıktı — bu bölümden sadece 3 kişi geçti. Abdulcelil Erkan olası yedek olarak not edildi.",
  "games": [
   {
    "name": "Porcini mantarlı risotto",
    "detail": "Süre [bulunamadı]",
    "winner": "İrem Güven"
   },
   {
    "name": "Edirne tava ciğeri + fasulye piyazı",
    "detail": "30 dk",
    "winner": "Elif"
   },
   {
    "name": "Beyaz çikolatalı orman meyveli soslu panna cotta",
    "detail": "Kazanan yok — üç yarışmacı da tabak çıkaramadı",
    "winner": null
   },
   {
    "name": "Kilis tava + tırnaklı pide",
    "detail": "40 dk",
    "winner": "Eyüp Can"
   }
  ],
  "notes": [
   "Panna cotta düellosu: Mehmet, Aziz, Enes — üçü de elendi, kazanan yok.",
   "Abdulcelil Erkan olası yedek olarak not edildi."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-10",
  "date": "10 Temmuz 2026",
  "weekday": "Cuma",
  "week": "0. Hafta",
  "title": "Seçim Turu — Levrek Buğlama, Gnocchi, Ekşili Kuru Dolma ve Soğanlama Düelloları",
  "source": "transkript",
  "summary": "1. turda 12 yarışmacı geçti; 4 üçlü düello yapıldı. Tolga Han Özden (levrek buğlama), Kübra Satılmış (gnocchi), Armağan Kant (ekşili kuru dolma) ve Nevzat Güzel (soğanlama) 3. tura çıktı. Cihan Günay yemeğini tamamlayamadı, Onur Güven Yalçın yemeği ocakta bıraktığı için kural gereği elendi.",
  "games": [
   {
    "name": "Terbiyeli levrek buğlama",
    "detail": "30 dk",
    "winner": "Tolga Han Özden"
   },
   {
    "name": "Pesto soslu gnocchi Genovese",
    "detail": "30 dk",
    "winner": "Kübra Satılmış"
   },
   {
    "name": "Ekşili kuru dolma",
    "detail": "40 dk",
    "winner": "Armağan Kant"
   },
   {
    "name": "Soğanlama",
    "detail": "20 dk; saray mutfağı aşçı alım yemeği",
    "winner": "Nevzat Güzel"
   }
  ],
  "notes": [
   "Cihan Günay yemeğini tahtada bıraktı — tadım dışı elendi.",
   "Onur Güven Yalçın yemeği ocakta bıraktı — kural gereği elendi.",
   "Ekşili kuru dolma düellosunda 2./3. sıra ayrışmadı ❓."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-09",
  "date": "09 Temmuz 2026",
  "weekday": "Perşembe",
  "week": "0. Hafta",
  "title": "Seçim Turu — Kalamar Dolması, Ratatouille, Tagliatelle Bolognese ve Etli Bamya Çorbası Düelloları",
  "source": "transkript",
  "summary": "1. turda 12 yarışmacı geçti; 4 üçlü düello yapıldı. Sercan Okyay (kalamar dolması), Hüseyin Kekeçim (ratatouille), Ayşe Nur İnal (tagliatelle Bolognese) ve Hatice Azman (etli bamya çorbası) 3. tura çıktı.",
  "games": [
   {
    "name": "Kalamar dolması",
    "detail": "35 dk",
    "winner": "Sercan Okyay"
   },
   {
    "name": "Ratatouille",
    "detail": "35 dk; film versiyonu",
    "winner": "Hüseyin Kekeçim"
   },
   {
    "name": "Tagliatelle Bolognese",
    "detail": "Süre [bulunamadı]",
    "winner": "Ayşe Nur İnal"
   },
   {
    "name": "Etli bamya çorbası",
    "detail": "45 dk; Konya mutfağı, kuru bamya",
    "winner": "Hatice Azman"
   }
  ],
  "notes": [
   "Ceylan pişirme sırasında Hatice Azman'dan bamya tavsiyesi istedi; jüriler Hatice'nin karakterini övdü.",
   "Hatice Azman'ın kazanan ünvanı ASR'de bozuk ('Kısıkurda' ❓)."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-08",
  "date": "08 Temmuz 2026",
  "weekday": "Çarşamba",
  "week": "0. Hafta",
  "title": "Seçim Turu — Fish & Chips, Gyoza, Peynirli Pide ve Tom Yam Kung Düelloları",
  "source": "transkript",
  "summary": "1. turda 12 yarışmacı geçti; 4 üçlü düello yapıldı. Fazlı Bulut (fish & chips), Betül Altay (gyoza), Beyhan Aysal (peynirli pide) ve Olabi Laval (Tom Yam Kung) 3. tura çıktı. Hasan Alp Karabacak olası yedek olarak konuşuldu.",
  "games": [
   {
    "name": "Fish & chips",
    "detail": "35 dk; fish fingers + tarator sos",
    "winner": "Fazlı Bulut"
   },
   {
    "name": "Gyoza",
    "detail": "35 dk; 3 adet",
    "winner": "Betül Altay"
   },
   {
    "name": "Peynirli pide",
    "detail": "35 dk; beyaz peynir + gravyer + kaşar",
    "winner": "Beyhan Aysal"
   },
   {
    "name": "Tom Yam Kung",
    "detail": "35 dk",
    "winner": "Olabi Laval"
   }
  ],
  "notes": [
   "Hasan Alp Karabacak olası yedek olarak konuşuldu.",
   "Tom Yam Kung düellosunda 2./3. sıra çıkarım (❓ orta)."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-07",
  "date": "07 Temmuz 2026",
  "weekday": "Salı",
  "week": "0. Hafta",
  "title": "Seçim Turu — Buffalo Wings, Çökertme Kebabı, Şıhıl Mahşi ve Kabak Çiçeği Dolması Düelloları",
  "source": "transkript",
  "summary": "Bölüm düello ortasında açılıyor; Düello 1 katılımcılarının 1. tur tabakları bu bölümün transkript parçasında yok. 4 düello yapıldı: Furkan (Buffalo Wings), Gülbahar ❓ (çökertme kebabı), Esra (Şıhıl Mahşi) ve Mine (kabak çiçeği dolması) 3. tura çıktı. Deniz Canan Pamukçu çift tadım kural ihlaliyle diskalifiye oldu. Şıhıl Mahşi'nin yöresi (Kilis vs Diyarbakır) tartışması yaşandı.",
  "games": [
   {
    "name": "Buffalo Wings",
    "detail": "Min 6 kanat; süre [bulunamadı]",
    "winner": "Furkan"
   },
   {
    "name": "Çökertme kebabı",
    "detail": "35 dk, klasik",
    "winner": "Gülbahar"
   },
   {
    "name": "Şıhıl Mahşi",
    "detail": "45 dk; Kilis coğrafi işaretli",
    "winner": "Esra"
   },
   {
    "name": "Kabak çiçeği dolması",
    "detail": "35 dk; 5 adet",
    "winner": "Mine"
   }
  ],
  "notes": [
   "Bölüm düello ortasında açılıyor — Düello 1 katılımcılarının 1. tur tabakları [bulunamadı].",
   "Deniz Canan Pamukçu çift tadım nedeniyle diskalifiye oldu.",
   "Şıhıl Mahşi'nin yöresi tartışması: Esra Diyarbakır dedi, Kilis çıktı; Somer Şef şapka çıkardı.",
   "Gülbahar ismi ASR'de çok varyantlı (Gülbar/Gülbari/Gülbağa, anons 'Gülens') ❓ orta."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-06",
  "date": "06 Temmuz 2026",
  "weekday": "Pazartesi",
  "week": "0. Hafta",
  "title": "Seçim Turu — Ravioli, İslim Kebabı, Steak Tartare ve Karnıyarık Düelloları",
  "source": "transkript",
  "summary": "1. turda 12 yarışmacı geçti; 4 üçlü düello yapıldı. Bahar Kaya (ravioli), Hami Efe (İslim kebabı), Ferdi Yaka (steak tartare) ve Asuman Esmeray (karnıyarık) 3. tura çıktı. Asuman geçen sene elenmiş, ikinci denemesinde 3. tura çıktı.",
  "games": [
   {
    "name": "Ravioli",
    "detail": "35 dk; 5 adet, domates soslu + parmesan",
    "winner": "Bahar Kaya"
   },
   {
    "name": "İslim kebabı",
    "detail": "Süre [bulunamadı]; klasik köfteli versiyon",
    "winner": "Hami Efe"
   },
   {
    "name": "Steak tartare",
    "detail": "Süre [bulunamadı]",
    "winner": "Ferdi Yaka"
   },
   {
    "name": "Karnıyarık + pilav",
    "detail": "40 dk",
    "winner": "Asuman Esmeray"
   }
  ],
  "notes": [
   "İslim kebabı düellosunda 2./3. sıra ayrışmadı ❓.",
   "Katarina ismi ASR'de 'Katzıcı' diye de geçti ❓ orta.",
   "Hami Efe ve Ferdi Yaka isimleri ASR varyantlı ❓ orta."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-05",
  "date": "05 Temmuz 2026",
  "weekday": "Pazar",
  "week": "0. Hafta",
  "title": "Seçim Turu — Avcı Böreği, Kalamar Tava, Paella ve Pizza Margherita Düelloları",
  "source": "transkript",
  "summary": "1. turda 12 yarışmacı geçti; 4 üçlü düello yapıldı. Fatma Yılmaz (avcı böreği), Nurettin ❓ (kalamar tava), Muhammed Yahya Haliloğlu (paella) ve Buse (pizza Margherita) 3. tura çıktı. Gülçin Baygın pizza çıkaramadığı için düello ortasında elendi.",
  "games": [
   {
    "name": "Avcı böreği",
    "detail": "3 adet; süre [bulunamadı]",
    "winner": "Fatma Yılmaz"
   },
   {
    "name": "Kalamar tava + cevizli tarator",
    "detail": "30 dk",
    "winner": "Nurettin"
   },
   {
    "name": "Paella",
    "detail": "35 dk; safran tek istenen baharat",
    "winner": "Muhammed Yahya Haliloğlu"
   },
   {
    "name": "Pizza Margherita",
    "detail": "30 dk",
    "winner": "Buse"
   }
  ],
  "notes": [
   "Gülçin Baygın pizza çıkaramadı — düello ortasında elendi.",
   "Kalamar tava düellosunun kazananı açıkça anons edilmedi; Nurettin çıkarım (❓ orta).",
   "Buse'nin giriş cümlesi ASR'de bozuk ('Museş'tan') ❓ orta."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-04",
  "date": "04 Temmuz 2026",
  "weekday": "Cumartesi",
  "week": "0. Hafta",
  "title": "Seçim Turu — Hokkien Fried Rice, İçli Köfte, Minestrone ve Kadayıf Dolması Düelloları",
  "source": "transkript",
  "summary": "1. turda 15 yarışmacı geçti; 4 üçlü düello yapıldı. Mertcan Şirin (Hokkien Fried Rice), Sultan Yılmaz (içli köfte), Burçin (Minestrone) ve Şadi (kadayıf dolması) 3. tura çıktı. Tayyar süre bitiminde tabağını tezgâha koyamadığı için kural gereği elendi. Kadayıf dolması düellosunda jüriler 2-1 ayrıştı, kararı Mehmet Şef verdi.",
  "games": [
   {
    "name": "Hokkien Fried Rice",
    "detail": "Tayvan; yasemin pirinci, wok; süre [bulunamadı]",
    "winner": "Mertcan Şirin"
   },
   {
    "name": "İçli köfte",
    "detail": "40 dk; 3 adet",
    "winner": "Sultan Yılmaz"
   },
   {
    "name": "Minestrone çorbası",
    "detail": "40 dk",
    "winner": "Burçin"
   },
   {
    "name": "Kadayıf dolması",
    "detail": "3 adet; süre [bulunamadı]",
    "winner": "Şadi"
   }
  ],
  "notes": [
   "Tayyar kural ihlaliyle elendi (süre bitiminde tabak tezgâhta değildi); önlüğü kızı Hanzade'ye hediye edildi.",
   "Kadayıf dolması düellosunda jüriler 2-1 ayrıştı; karar Mehmet Şef'e kaldı.",
   "Bölümde iki ayrı keşkek kaydı var (Zeynep Hanım ve Pelin Peker); Zeynep Hanım'ın keşkek ataması bölüm yapısından çıkarım ❓ orta.",
   "Hakan Beyoğlu'na küçük bir yedek umudu bırakıldı.",
   "Dörtyol'da yaşayan enginar yarışmacısının adı transkriptte söylenmedi."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-03",
  "date": "03 Temmuz 2026",
  "weekday": "Cuma",
  "week": "0. Hafta",
  "title": "Seçim Turu — Tatlı Ekşi Soslu Tavuk, Otlu Mücver, İzmir Köfte ve Saç Tava Düelloları",
  "source": "transkript",
  "summary": "1. turda 12 yarışmacı geçti; 4 üçlü düello yapıldı. Faruk Garip (tatlı ekşi soslu tavuk), Cansu Şöhret (otlu mücver), Nesibe Yalçın (İzmir köfte) ve Batuhan Nazikoğlu (saç tava) 3. tura çıktı. Nesibe önlüğünü imzalatıp oğlu Efe'ye gönderdi.",
  "games": [
   {
    "name": "Tatlı ekşi soslu tavuk",
    "detail": "Ananas, Sriracha, bal, sirke, soya sos; wok; süre [bulunamadı]",
    "winner": "Faruk Garip"
   },
   {
    "name": "Otlu mücver",
    "detail": "Ege usulü; 3 adet çay tabağı; domates sos + sarımsaklı limonlu yoğurt; süre [bulunamadı]",
    "winner": "Cansu Şöhret"
   },
   {
    "name": "İzmir köfte + pirinç pilavı",
    "detail": "45 dk; üç yarışmacı da İzmirli",
    "winner": "Nesibe Yalçın"
   },
   {
    "name": "Saç tava + meyane pilavı",
    "detail": "Süre [bulunamadı]",
    "winner": "Batuhan Nazikoğlu"
   }
  ],
  "notes": [
   "Özlem Bozkaya'nın empanada ataması eleme yoluyla ❓ orta.",
   "Nesibe Yalçın önlüğünü imzalatıp oğlu Efe'ye gönderdi."
  ],
  "captains": null,
  "teams": null,
  "pot": [],
  "eliminated": null,
  "immunity": null,
  "candidates": []
 },
 {
  "id": "2026-07-02",
  "date": "2 Temmuz 2026",
  "weekday": "Perşembe",
  "week": "0. Hafta",
  "title": "Seçim Turu — Son Önlükler",
  "source": "transkript",
  "summary": "Seçim turunun son önlükleri: 15 aday yemek yaptı, 9'u ikinci tura geçti, 6'sı elendi. Hatice Tuncay'ın 2 yıldır herkese yazarak başvurması, Aleyna Sena Övündür'ün çok tuzlu sosu ve Mirsat'ın sınırdan geçişi öne çıktı.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "9 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Tuğçe",
   "İbrahim",
   "Hatice Tuncay",
   "Asya Tırpan",
   "Şiringül Kaya",
   "Selin Öztürk",
   "Çiğdem Korkmaz Gürkan",
   "Mert Can Şirin",
   "Mirsat"
  ],
  "notes": [
   "Aleyna Sena Övündür 1 evet 2 hayır ile elendi (bir hayır 'hayır demek için yeterli bir sebep' ifadesiyle ima ediliyor).",
   "Mirsat'ın geçişi 'sınır' ifadesiyle ❓ orta güven.",
   "Tuğçe'nin soyadı net değil ❓; İbrahim'in soyadı ve yemek adı çıkarımla ❓."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-07-01",
  "date": "1 Temmuz 2026",
  "weekday": "Çarşamba",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "14 aday yemek yaptı, 10'u ikinci tura geçti, 4'ü elendi. Emine Dolg elendi ama annesi Ruki Akbel Yay'a 1,5 saatlik ikinci şans verildi; Ruki de elendi. Cem Çam basketbol ribaund oyununu kazanıp önlüğü aldı. Neslihan Tokay 4 evetle (3 şef + kızı) geçti.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "10 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Zübeyde Hanım Altınkeser",
   "Tayyar Seçkin",
   "Hatice Azman",
   "Levent Karasalih",
   "Nurten Tamam",
   "Aslı Çelik",
   "Cem Çam",
   "Umut Onursal",
   "Neslihan Tokay",
   "Koray Saygı"
  ],
  "notes": [
   "Tayyar Seçkin ve Aslı Çelik'in yemek adları transkriptte yakalanamadı [bulunamadı].",
   "Emine Dolg 1 evet 2 hayır ile elendi."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-30",
  "date": "30 Haziran 2026",
  "weekday": "Salı",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "11 aday yemek yaptı, 9'u ikinci tura geçti, 2'si elendi. Mukaddes Sargut'un kararı 11 yaşındaki oğlu Ulaş'ın yanında açıklanmak istenmedi; Ulaş'a hediye önlük verildi. Hakkı Kanat'ın kardeşi Ayaz önlüğü bağladı.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "9 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Ayça Çelik",
   "Türkan Arı",
   "Davut Savaşçı",
   "Fatma Yılmaz",
   "Hakkı Kanat",
   "Nevzat Güzel",
   "Özlem Bozkaya",
   "Batuhan Nazikoğlu",
   "Gülçin Baygın"
  ],
  "notes": [
   "Mukaddes Sargut 1 evet 1 hayır sonrası Mehmet Şef'in 'biraz daha çalışın' sözüyle elendi (karar Ulaş'ın yanında açıklanmadı).",
   "Ayça Çelik'in yemek adı transkriptte yakalanamadı [bulunamadı]."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-29",
  "date": "29 Haziran 2026",
  "weekday": "Pazartesi",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "14 aday yemek yaptı, 11'i ikinci tura geçti, 3'ü elendi. Taylan Duman'ın 'private şef' tanımı şeflerle tartışma yarattı.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "11 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Ceylan Danışmaz",
   "Taylan Duman",
   "Hami Güntepe",
   "Şengül Karapınar",
   "Rüya Tekin",
   "Gülşen Kaba",
   "Burçin Oğuş",
   "Betül Altay",
   "Sercan Okyay",
   "Doğukan Akkuş",
   "Onur Güven Yalçın"
  ],
  "notes": [
   "Şengül Karapınar'ın yemek adı transkriptte yakalanamadı [bulunamadı].",
   "Onur Güven Yalçın'ın yemeği 'Karmaç + et' olarak çıkarımla ❓."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-28",
  "date": "28 Haziran 2026",
  "weekday": "Pazar",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "14 aday yemek yaptı, 9'u ikinci tura geçti, 5'i elendi. Tokatlı pastacı Ahmet'in tabağı Sezer'in geçen seneki tabağına benzetildi; 'Kaybol' sözüyle elendi.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "9 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Pelin Peker",
   "Feride Dalkesen",
   "Yusuf Gürses",
   "Katerina Yazıcı",
   "Şükran Boyraz",
   "Demirhan Eltekin",
   "Yusuf Pınar",
   "Üveyis Kürşatoğlu",
   "Kezban Çintaş Çolak"
  ],
  "notes": [
   "Erzurumlu öğrencinin adı şeflerin hitabıyla 'Enes' ❓, soyadı bilinmiyor; 3 hayır ile elendi.",
   "Ahmet'in soyadı ASR'da 'Hamfanedan' gibi duyuluyor ❓.",
   "Kezban Çintaş Çolak'ın yemek adı transkriptte yakalanamadı [bulunamadı]."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-27",
  "date": "27 Haziran 2026",
  "weekday": "Cumartesi",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "19 aday yemek yaptı, 14'ü ikinci tura geçti, 5'i elendi. Zeliha Kahraman 2 evet 1 hayır ile geçti. Nursena'nın ailesi segmentinde 'tabağa dokundu, iptal etti' ifadesi geçiyor; ayrı bir yarışmacı sayılmadı.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "14 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Gülten Bayram",
   "Birkan",
   "Mesud Çetinkaya",
   "Mahide",
   "Zeliha Kahraman",
   "Sena",
   "Büşra Büke",
   "Dilara",
   "Yasemin Gürel",
   "Nursena",
   "Emine Karaca",
   "Armağan Kant",
   "Mehmet Şerif Filiz",
   "Ömer Aydın"
  ],
  "notes": [
   "Sena, Armağan Kant ve Mehmet Şerif Filiz'in yemek adları transkriptte yakalanamadı [bulunamadı].",
   "Nursena ailesi segmentindeki 'iptal' ifadesi belirsiz ❓."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-26",
  "date": "26 Haziran 2026",
  "weekday": "Cuma",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "13 aday yemek yaptı, 12'si ikinci tura geçti, 1'i elendi. Umut Mavi yarışmadan elendi ama Danilo Şef İzmir restoranına iş teklifi yaptı. Nesibe Mutlu Erken'in kızlarına 'annen kazanmadı' şakası yapıldı — aslında geçti. Vural Çelik oğlak örme kokoreç ile geçti.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "12 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Tolga Döker",
   "Nesibe Mutlu Erken",
   "Nurettin Erçoğun",
   "Ali Sinan Can Arslan",
   "Elif Coşar",
   "Faruk Garip",
   "Fazlı Bulut",
   "Çağla",
   "Alper Arsanbaş",
   "Vural Çelik",
   "Deniz Canan Pamukçu",
   "Ayşe Nur İnal"
  ],
  "notes": [
   "Nurettin Erçoğun ve Ali Sinan Can Arslan'ın yemek adları transkriptte yakalanamadı [bulunamadı].",
   "Alper Arsanbaş 2 evet 1 hayır ile geçti ('Hadi bir daha görelim seni')."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-25",
  "date": "25 Haziran 2026",
  "weekday": "Perşembe",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "11 aday yemek yaptı, 10'u ikinci tura geçti, 1'i elendi. Nesibe Yalçın'ın hamur dolması (annesi Kütahyalı, babası Antalyalı; 'Meles' lakabı) ikinci turu geçti. Furkan Genç'e 'Numaranı aldım oğlum senin' denilerek önlük verildi.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "10 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Hüseyin Kekeç",
   "Berin Demirkol",
   "Mustafa Karakurt",
   "Nesibe Yalçın",
   "Elçin Taş",
   "Hakan Beyoğlu",
   "Sevda",
   "Kübra Satılmış",
   "Furkan Genç",
   "Berinay Palamut"
  ],
  "notes": [
   "Hamur dolması yarışmacısı ile Nesibe Yalçın aynı kişidir (bloklar birleştirildi).",
   "Furkan Genç'in geçişi 'Numaranı aldım' ifadesiyle ❓ orta güven.",
   "Hüseyin Kekeç'in yemek adı transkriptte yakalanamadı [bulunamadı]."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-24",
  "date": "24 Haziran 2026",
  "weekday": "Çarşamba",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "13 aday yemek yaptı, 10'u ikinci tura geçti, 3'ü elendi. Enes Vardar 140 kilodan 90 kiloya düştüğünü anlattı. Gökhan Gökpınar'a 'seneye öngörüşmeden seni direkt alalım' denilerek elendi.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "10 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Selinay Kocaer",
   "Hasan Emanet",
   "Umut Esen",
   "Mine",
   "Buse Baş",
   "Şadi Altınay",
   "Enes Vardar",
   "Mazlum Kıylık",
   "Hatice Yurttaş Demir",
   "Ferit Altıntop"
  ],
  "notes": [
   "Mine, Enes Vardar ve Ferit Altıntop'un yemek adları transkriptte yakalanamadı [bulunamadı].",
   "Hasan Emanet'in yemek adı 'Nocetto/Nojetto Pollo' ASR ❓."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-23",
  "date": "23 Haziran 2026",
  "weekday": "Salı",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "16 aday yemek yaptı, 11'i ikinci tura geçti, 5'i elendi. Tolga 'ilk etabın açık ara en etkileyici performansı' övgüsünü aldı. Fatma Aşlar 6 yıldır bekleyip katıldı ama elendi.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "11 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Emel Kübra Tayanç",
   "Veysel Kaş",
   "Yakup Ceylan",
   "Arda Mutlu",
   "Tolga",
   "Esra Türk",
   "Büşra",
   "Nisa Toprak",
   "Abdullah Sefer Yıldız",
   "Yıldız",
   "Emre İlkililmez"
  ],
  "notes": [
   "Fatma Aşlar'ın soyadı ham kontrolden: 'Fatma Aşlar', Nevşehir Avanos doğumlu; yemeği tavuk (adı verilmedi) — CSV'de yok.",
   "Arda Mutlu, Tolga ve Yıldız'ın yemek adları transkriptte yakalanamadı [bulunamadı].",
   "Burak'ın yemeği 'Robes Pier' ASR ❓."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-22",
  "date": "22 Haziran 2026",
  "weekday": "Pazartesi",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "11 aday yemek yaptı, 9'u ikinci tura geçti, 2'si elendi. Emin Uslu'ya 'ana kadroya girmezsen şaşırım' denildi. Hüsne geçen sene kadayıf dolmasıyla katılmış, üçlü düelloda Rukiye'ye elenmiş; bu sene 3 evetle geçti.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "9 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Amin Sasani",
   "Hüsne",
   "Cahide Akdeniz",
   "Emin Uslu",
   "Sena",
   "Aziz Söğütlü",
   "Ferçal Yaka",
   "Şeyma Çalık",
   "Eyüp Can Güneş"
  ],
  "notes": [
   "Hüsne'nin soyadı ve yemek adı transkriptte yakalanamadı [bulunamadı]; isim 'Hüsne' ❓ orta güven.",
   "Emin Uslu'nun yemek adı transkriptte yakalanamadı [bulunamadı]."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-21",
  "date": "21 Haziran 2026",
  "weekday": "Pazar",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "19 aday yemek yaptı, 13'ü ikinci tura geçti, 6'sı elendi. Melih Yılmaz'a ustası Araz Şef'in ahilik önlük töreni anlatıldı. Asuman Esmeray geçen sene de katılmıştı; bu sene de elendi. Baran'ın levrek simidi sonuçlanmadı.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "13 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Tuğba Karayaka",
   "Gülzar Kutluk",
   "Burak Yıldız",
   "Hacı Erkan Yukarı",
   "Beyhan Aysal",
   "Altın Güsevim",
   "Yaren Türkmen",
   "Janet Kayar",
   "Harun Üzen",
   "Enes",
   "Yakup Yıldız",
   "Melih Yılmaz",
   "Recep"
  ],
  "notes": [
   "Hacı Erkan Yukarı ham kontrolden geçti ('bir kez daha görmek istiyorum. Evet diyorum').",
   "Asuman Esmeray 'yetenekler maalesef daha ileriye gidemiyor' sözüyle elendi.",
   "Janet Kayar, Harun Üzen ve Melih Yılmaz'ın yemek adları transkriptte yakalanamadı [bulunamadı]; Recep'in yemeği 'kelle' çıkarımla ❓."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-20",
  "date": "20 Haziran 2026",
  "weekday": "Cumartesi",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "13 aday yemek yaptı, 10'u ikinci tura geçti, 3'ü elendi. Sezer Odavaş horoz billuru ile geçti. Fatma Nur Yazıcı'ya Danilo Şef restoranında eğitim teklifi de geçti. Simge Çıtak 3 evetle geçti.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "10 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Zeynep Çelik",
   "Zeynep Gözde Soytemiz",
   "Abdulcelil Erkan",
   "Arif Semet Asar",
   "Sultan Yılmaz",
   "Fatma Nur Yazıcı",
   "Emre",
   "Ayşegül Güney",
   "Sezer Odavaş",
   "Simge Çıtak"
  ],
  "notes": [
   "Batuhan Dağlı 1 evet 2 hayır ile elendi.",
   "Abdulcelil Erkan'ın adı ASR'da 'Abdulcel/Abdulce Erkan' ❓; Arif Semet Asar'ın yemeği 'Şifle' ASR ❓; Simge Çıtak'ın yemek adı transkriptte yakalanamadı [bulunamadı]."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-14",
  "date": "14 Haziran 2026",
  "weekday": "Pazar",
  "week": "0. Hafta",
  "title": "Seçim Turu",
  "source": "transkript",
  "summary": "11 aday yemek yaptı, 8'i ikinci tura geçti, 3'ü elendi. Gülbahar Meşe 3 evetle geçti; oğlu Mustafa Batuhan'ın doğum günüydü. Hande Dalyler'in çikolatalı tatlısının kapağı kırıldı; 'yolculuğum burada sona eriyor' diyerek elendi.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "8 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Kazya Çalık",
   "Gökçe",
   "Merve",
   "Gülbahar Meşe",
   "Yalçın Ballı",
   "Bahar",
   "Tolga Han Özden",
   "Faruk Önder"
  ],
  "notes": [
   "Kazya Çalık'ın adı 'Kadriye Çalık' olarak da duyuluyor ❓.",
   "Gökçe ve Faruk Önder'in yemek adları transkriptte yakalanamadı [bulunamadı]; Faruk'un tatlısı lokma temalı ❓.",
   "Hande Dalyler 1 evet 1 hayır sonrası Mehmet Şef'in kararıyla elendi."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 },
 {
  "id": "2026-06-13",
  "date": "13 Haziran 2026",
  "weekday": "Cumartesi",
  "week": "0. Hafta",
  "title": "Sezon Prömiyeri — Seçim Turu (İllere Gidiş)",
  "source": "transkript",
  "summary": "Sezon prömiyeri: şefler ilk kez merkez illere gidip adayların ayağına gitti. 12 aday yemek yaptı, 11'i ikinci tura geçti, 1'i elendi. Filiz Aksoy'un önlüğünü kızı taktı; Olab Laval (Trabzonlu/Nijeryalı, futbolcuların özel aşçısı) Jollof rice ile geçti; Hasan Alp Karabacak'ın önlüğünü ablası taktı.",
  "pot": [],
  "games": [
   {
    "name": "Seçim",
    "detail": "Her aday 5 dakikada bir yemek yapar; 2+ evet ikinci tura geçirir.",
    "winner": "11 aday ikinci tura geçti"
   }
  ],
  "candidates": [
   "Filiz Aksoy",
   "Cihan Günay",
   "Soner Aktürk",
   "Yiğit Donduran",
   "Nilay Özgen",
   "Ahmet Yıldırım",
   "Levent Odabaş",
   "Olab Laval",
   "Cansu Şöhret",
   "Erkan",
   "Hasan Alp Karabacak"
  ],
  "notes": [
   "Hasan Temiz'in kararı transkriptte yarım kalıyor; yumurta çiğ + hollandez olmamış + 'olmaması lazımdı' ifadeleriyle elendi ❓ yuksek güven.",
   "Cihan Günay'ın adı 'Can Günay' olarak da duyuluyor ❓; Nilay Özgen ve Erkan'ın yemek adları transkriptte yakalanamadı [bulunamadı]; Levent Odabaş'ın yemeği kuzu (adı verilmedi)."
  ],
  "captains": null,
  "teams": null,
  "eliminated": null,
  "immunity": null
 }
];
