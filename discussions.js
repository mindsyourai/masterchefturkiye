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
  },
  {
    id: "2026-08-08-elit-grup-gerginligi",
    date: "8 Ağustos 2026",
    dateISO: "2026-08-08",
    title: "'Elit grup' gerginliği",
    participants: ["Ayşe Nur İnal", "Şadi Altınay", "Koray Saygı", "Nurten Ocak Tamer"],
    kind: "tartışma",
    summary: "Ana kadro seçimlerinin son gününde ilk çıkan grup ile dördüncü grup arasında 'elit grup' atışması yaşandı. Ayşe ile Şadi arasında da tartışma çıktı; Şadi her konuyu açmakla suçlandı. Koray, Nurten'e 'kızlar evi ile erkekler evi' arasında kaptanlık teklifi götürdü, Nurten kabul etmedi.",
    source: "8 Ağustos 2026 bölümü transkripti"
  },
  {
    id: "2026-08-10-sadi-takim-disi",
    date: "10 Ağustos 2026",
    dateISO: "2026-08-10",
    title: "Şadi'nin takım dışı kalması",
    participants: ["Şadi Altınay", "Burçin Oğuz", "Batuhan Nazikoğlu", "Tolga Çakuş"],
    kind: "gündem",
    summary: "Kaptanlık sonrası takım seçimlerinde Mavi takım üyeleri Şadi ile aynı takımda olmamaktan memnun olduklarını söyledi; bazıları Şadi'yi 'antipatik' diye niteledi. Burçin, Batuhan'ı önce, hamur işi için Tolga'yı sonra aldığını, Şadi'yi bu yüzden sonlara bıraktığını açıkladı. Şadi, Burçin'in kendisini 'sırtından vurduğunu' söyledi; tartışma 11 Ağustos'ta Şadi'nin listesi üzerinden sürdü.",
    source: "10 Ağustos 2026 bölümü transkripti"
  },
  {
    id: "2026-08-14-muhammed-nilay-bagirma",
    date: "14 Ağustos 2026",
    dateISO: "2026-08-14",
    title: "Muhammed'in Nilay'a bağırması ve özrü",
    participants: ["Muhammed Yahya Haliloğlu", "Elif Nilay Özgen"],
    kind: "tartışma",
    summary: "Mavi'nin galibiyeti sonrası Muhammed, Nilay'a bağırdı; ardından özür diledi ve Nilay'ın kendisinden küçük olduğunu söyleyerek pişmanlığını dile getirdi. Nilay özrü kabul etti ve aralarında çözüldüğünü söyledi.",
    source: "14 Ağustos 2026 bölümü transkripti"
  },
  {
    id: "2026-08-16-blok-karar-konsey",
    date: "16 Ağustos 2026",
    dateISO: "2026-08-16",
    title: "İlk hafta konseyi: 'blok karar' tartışması",
    participants: ["Şadi Altınay", "Simge Çıtak", "Enes Vardar", "Muhammed Yahya Haliloğlu", "Tolga Çakuş", "Burçin Oğuz"],
    kind: "tartışma",
    summary: "16 Ağustos bölümünün açılış özetinde ilk hafta Kırmızı konseyinin 'blok karar' oylaması uzun uzun tartışıldı. Kaptan Ayşe'nin çağırdığı toplantıda takımın istatistiğe göre karar verdiği, Şadi'nin defter tuttuğu anlatıldı. Muhammed oylamadan pişman olduğunu söylerken Tolga boş oylara kızdı; Burçin ile Şadi'nin arkadaşlığı da bu süreçte koptu.",
    source: "16 Ağustos 2026 bölümü transkripti"
  },
  {
    id: "2026-08-19-ayse-sukran-pilav",
    date: "19 Ağustos 2026",
    dateISO: "2026-08-19",
    title: "Ayşe–Şükran pilav tartışması",
    participants: ["Ayşe Nur İnal", "Şükran Boyraz"],
    kind: "tartışma",
    summary: "Bulgur pilavı tadımında Ayşe'nin Şükran'a müdahale etmesi üzerine ikili arasında tartışma çıktı; konu konseye de taşındı. Tartışma ertesi gün de sürdü ve iki yarışmacı arasındaki gerilim ilk haftadaki Tamela olayına dayandırıldı.",
    source: "19 Ağustos 2026 bölümü transkripti"
  },
  {
    id: "2026-08-21-gruplasma-tartismasi",
    date: "21 Ağustos 2026",
    dateISO: "2026-08-21",
    title: "'Gruplaşma' tartışması",
    participants: ["Elif Nilay Özgen", "Simge Çıtak", "Ayşe Nur İnal", "Koray Saygı", "Recep Batur", "Gülbahar Meşe", "Kübra Satılmış", "Şükran Boyraz"],
    kind: "tartışma",
    summary: "Dokunulmazlık girişinde Nilay, Simge, Ayşe, Koray, Recep ve Gülbahar'dan oluşan bir grubun gruplaşmakla suçladı. Kübra iki ayrı grup saydı; Şükran ile Ayşe arasında 'manipülasyoncu' ve 'psiko' sözleri geçen bir atışma yaşandı. Konu 20 Ağustos'ta da konuşulmuştu; Kübra 30 Ağustos'ta arkadaşlarının gruplaşarak kendisini potaya attığını yeniden dile getirdi.",
    source: "21 Ağustos 2026 bölümü transkripti"
  },
  {
    id: "2026-08-28-pirinc-skandali",
    date: "28 Ağustos 2026",
    dateISO: "2026-08-28",
    title: "Pirinç skandalı ve sabotaj iddiaları",
    participants: ["Elif Nilay Özgen", "Simge Çıtak", "Şadi Altınay", "Eyüp Can Güneş", "Kübra Satılmış", "Şükran Boyraz", "Recep Batur"],
    kind: "tartışma",
    summary: "Asya mutfağı oyununda üç pirinç türünün karıştırılıp herkesin tek pirinç kullanması üzerine 'pirinç skandalı' tartışması çıktı. Nilay, kimseyi sabote etme derdi olmadığını savundu; Eyüp Can, namaz kılarken Kübra ile Şükran'ın Recep'i gönderme planı konuştuğunu duyduğunu söyledi. Şefler, yanlış pirinç kullanan üç yarışmacının da potada olduğuna dikkat çekti; Recep takımı 'iğrenç' diye niteleyip sonra özür diledi.",
    source: "28 Ağustos 2026 bölümü transkripti"
  },
  {
    id: "2026-08-29-siringul-sukran-kavgasi",
    date: "29 Ağustos 2026",
    dateISO: "2026-08-29",
    title: "Şiringül–Şükran kavgası: ikisi de stüdyodan çıkarıldı",
    participants: ["Şiringül Kaya", "Şükran Boyraz"],
    kind: "tartışma",
    summary: "Künefe oyununda Şükran'ın Şiringül'e tarif sorması üzerine 'kes sesini' atışması büyüdü. Şefler ikisini de stüdyodan çıkardı; son düellonun künefelerini kaptanlar sundu. Şükran, mutfak hiyerarşisi bilen bir kadın olarak düştüğü durumdan pişman olduğunu söyleyip özür diledi.",
    source: "29 Ağustos 2026 bölümü transkripti"
  },
  {
    id: "2026-09-03-sadi-ayse-guven",
    date: "3 Eylül 2026",
    dateISO: "2026-09-03",
    title: "Şadi–Ayşe güven tartışması",
    participants: ["Şadi Altınay", "Ayşe Nur İnal", "Şükran Boyraz"],
    kind: "tartışma",
    summary: "Banana bread tarifini Şadi'nin vermesi ve İzmir bombası hamurunun Şadi'ye ait olması üzerine ikili arasında güven tartışması çıktı. Ayşe, Şadi'yi potaya gönderdi; Şadi, 20'li yaşlarından beri hiç kimseye hakkını helal etmediğini söyledi. Aynı bölümde Şükran'ın potaya atılması ve 'Git Şükran'ı potaya at' telkini de konuşuldu.",
    source: "3 Eylül 2026 bölümü transkripti"
  },
  {
    id: "2026-09-11-sadi-telefon-itirafi",
    date: "11 Eylül 2026",
    dateISO: "2026-09-11",
    title: "Şadi'nin telefon itirafı",
    participants: ["Şadi Altınay", "Emre İrkilmez"],
    kind: "gündem",
    summary: "Şadi, eve telefon soktuğunu itiraf etti; telefonun bir gün önce ekip tarafından bulunduğu, nerede olduğunun bilinmediği konuşuldu. Şefler yaptırım uygulanacağını söyledi. Aynı bölümde Emre, Şadi'nin pide oyununda kendisine bilerek Nurten'i verdiğini iddia etti; Kırmızı takım Şadi'ye alaycı bir 'teşekkür belgesi' verdi.",
    source: "11 Eylül 2026 bölümü transkripti"
  },
  {
    id: "2026-09-12-sevgi-skalasi",
    date: "12 Eylül 2026",
    dateISO: "2026-09-12",
    title: "'Sevgi skalası' oylama tartışması",
    participants: ["Hasan Alp Karabacak", "Muhammed Yahya Haliloğlu", "Enes Vardar", "Armağan Kırant", "Batuhan Nazikoğlu", "Eyüp Can Güneş", "Nurten Ocak Tamer"],
    kind: "tartışma",
    summary: "Oylamanın 'sevgi skalası'na göre yapıldığı tartışması çıktı; Hasan Alp, Muhammed, Enes, Armağan, Batuhan ve Eyüp Can'ın birbirini koruduğu iddia edildi. Tartışma 19 Eylül konseyinde de sürdü; Enes, pota korkusunun bazı yarışmacılarda nefreti öne geçirdiğini söyledi. Nurten, Enes'in dokunulmazlığı almasıyla kendisinin ve Ayşe'nin gideceğini önceden tahmin ettiğini belirtti.",
    source: "12 Eylül 2026 bölümü transkripti"
  },
  {
    id: "2026-09-16-faruk-oy-degistirme",
    date: "16 Eylül 2026",
    dateISO: "2026-09-16",
    title: "Faruk'un oy değiştirme skandalı",
    participants: ["Faruk Garip", "Şadi Altınay", "Bahar Kaya", "Şükran Boyraz"],
    kind: "gündem",
    summary: "Konseyde Faruk, oylama bittikten sonra oy pusulasını değiştirip Şükran yazdığı oyu silerek yerine Tolga'yı yazınca iki oyu da iptal edildi. Yarışmada ilk kez oy iptali yaşandı. Aynı konseyde Şadi, Bahar ile Şükran'ın oyları organize ettiğini iddia etti; Bahar reddetti ve şefler ertesi gün görüntüleri inceleyip kanıt bulamadı.",
    source: "16 Eylül 2026 bölümü transkripti"
  },
  {
    id: "2026-09-18-tolga-burcin-intikam",
    date: "18 Eylül 2026",
    dateISO: "2026-09-18",
    title: "Tolga–Burçin 'intikam' hattı",
    participants: ["Tolga Çakuş", "Burçin Oğuz"],
    kind: "tartışma",
    summary: "Burçin, kadınbudu köfteyle dokunulmazlık kazanıp Tolga'yı potaya gönderdi; Tolga bunu ilk haftanın intikamı saydı. Burçin, oylamanın o günkü performansa dayandığını söyledi. Tartışma 20 Eylül eleme bölümünün açılışında da sürdü; Tolga 30 Eylül'de Burçin'i potaya göndereceğini söyleyerek konuyu yeniden açtı.",
    source: "18 Eylül 2026 bölümü transkripti"
  },
  {
    id: "2026-09-21-kanca-suclamalari",
    date: "21 Eylül 2026",
    dateISO: "2026-09-21",
    title: "'Kanca' grubu suçlamaları",
    participants: ["Tolga Çakuş", "Recep Batur", "Emre İrkilmez", "Burçin Oğuz", "Kübra Satılmış", "Şadi Altınay"],
    kind: "tartışma",
    summary: "Tolga, arkasından konuşulduğunu söyleyip isim vereceğini açıkladı; 'kanca' grubunda Recep ve Emre'nin üyeliği tartışıldı. 'Kanca' ve gruplaşma tartışması sezon boyunca sürdü: 22 Eylül'de 'çakma üç silahşörler' suçlaması, 7 Ekim'de 'kanca/çete' konseyi, 11 Ekim'de grubun dağılması ve 25–26 Ekim'de kancalar üzerine uzun açılış tartışmaları yaşandı.",
    source: "21 Eylül 2026 bölümü transkripti"
  },
  {
    id: "2026-09-23-derin-dondurucu-ihlali",
    date: "23 Eylül 2026",
    dateISO: "2026-09-23",
    title: "Derin dondurucu kural ihlali",
    participants: ["Muhammed Yahya Haliloğlu", "Emre İrkilmez", "Tolga Çakuş", "Şadi Altınay"],
    kind: "gündem",
    summary: "Kazan dibi oyunu 5-5 berabere bitti, ancak Muhammed, Emre ve Tolga'nın tepsileri normal buzdolabı yerine derin dondurucuya koyduğu ortaya çıktı. Şadi'nin ihbarı üzerine görüntüler incelendi ve kural gereği Mavi yenik sayılarak Kırmızı galip ilan edildi.",
    source: "23 Eylül 2026 bölümü transkripti"
  },
  {
    id: "2026-10-01-siringul-bahar-armagan",
    date: "1 Ekim 2026",
    dateISO: "2026-10-01",
    title: "Şiringül–Bahar–Armağan kavgası",
    participants: ["Şiringül Kaya", "Bahar Kaya", "Armağan Kırant"],
    kind: "tartışma",
    summary: "Mezeler oyununda Şiringül'ün Armağan'ın Girit ezmesi ve mütembel tabaklarına müdahale edip etmediği tartışması büyüdü. Bahar, dokunulmazlık kazanmasına rağmen Şiringül'ü potaya gönderdi; gerekçe olarak Armağan'ın kafasının karışmasını gösterdi. Şiringül, ailesinin kendisine 'Bahar'a dikkat et' dediğini söylerken, ikilinin ilk günden beri anlaşmazlık yaşadığı, aynı oda ve banyo kapısı olayına dayandığı anlatıldı. Aynı bölümde Şiringül'ün yardım ettiği yemeklere el kaldırması da tartışıldı; Bahar, Şiringül'ün patlıcanı 'ucuyla çevirdiğini' söyledi.",
    source: "1 Ekim 2026 bölümü transkripti"
  },
  {
    id: "2026-10-02-sukran-siringul-kavgasi",
    date: "2 Ekim 2026",
    dateISO: "2026-10-02",
    title: "Şükran–Şiringül kavgası: 'yalancısın' / 'varoşsun'",
    participants: ["Şükran Boyraz", "Şiringül Kaya"],
    kind: "tartışma",
    summary: "Baharatlı yemekler oyununda Şükran, Şiringül'e 'yalancısın' dedi; Şiringül 'varoşsun, kötüsün' diye karşılık verdi. Pedagog mesleği de tartışmaya girdi: Şükran çocuklarla böyle konuşmadığını söylerken Şiringül buranın kreş olmadığını söyledi. Şefler araya girip ikisini de seviyeyi ayarlamaları için uyardı; ilk günkü aynı oda ve banyo kapısı olayı yeniden gündeme geldi.",
    source: "2 Ekim 2026 bölümü transkripti"
  },
  {
    id: "2026-10-02-besli-grup-dovecegim",
    date: "2 Ekim 2026",
    dateISO: "2026-10-02",
    title: "'Beşli grup' tartışması ve Muhammed'in 'döveceğim' sözü",
    participants: ["Tolgahan Özden", "Muhammed Yahya Haliloğlu", "Batuhan Nazikoğlu", "Emre İrkilmez", "Şadi Altınay"],
    kind: "tartışma",
    summary: "Tolgahan, Muhammed ve Batuhan'ın çok yemek alıp birbirine el kaldırarak istatistik yükselttiğini savundu; Muhammed 'pohpohlama' kelimesine itiraz etti. Aynı konseyde Muhammed, dokunulmazlık kazanan Tolgahan'ı oy pusulasına yazınca iki oyu iptal edildi; şefler bunun son uyarı olduğunu söyledi. Konsey sonrası Muhammed'in Tolgahan hakkında söylediği iddia edilen 'döveceğim' sözü 3 Ekim'de uzun uzadıya konuşuldu; Muhammed hatırlamadığını, söylemiş de olabileceğini söyledi ve şefler şiddet söylemine karşı uyardı.",
    source: "2 Ekim 2026 bölümü transkripti"
  },
  {
    id: "2026-10-08-muhammed-nilay-intikam",
    date: "8 Ekim 2026",
    dateISO: "2026-10-08",
    title: "Muhammed–Nilay 'intikam / adalet' tartışması",
    participants: ["Muhammed Yahya Haliloğlu", "Elif Nilay Özgen"],
    kind: "tartışma",
    summary: "Muhammed, dokunulmazlık kazanıp Nilay'ı potaya gönderdi; gerekçe olarak Nilay'ın haftalar önce kendisini potaya göndermesini gösterdi. Nilay, skorları düşük insanlar varken kaptanı göndermenin emek haksızlığı olduğunu söyledi. Muhammed, onurunun kırıldığını ve Nilay'ın aynısını yaşamasını istediğini söyledi.",
    source: "8 Ekim 2026 bölümü transkripti"
  },
  {
    id: "2026-10-16-el-kaldirma-tartismasi",
    date: "16 Ekim 2026",
    dateISO: "2026-10-16",
    title: "Emre–Burçin/Nurten 'el kaldırma' tartışması",
    participants: ["Emre İrkilmez", "Burçin Oğuz", "Nurten Ocak Tamer"],
    kind: "tartışma",
    summary: "Emre, Burçin ve Nurten arasında yardımla yapılan yemekte kimin puan alacağı tartışması çıktı. Emre, tart hamurlarını kendisinin yaptığını, Burçin'in yalnızca hamur kopardığını söyledi; Nurten ise düdüklüde ayva tatlısı yaptığı için eleştirildi. Konu, sezon boyunca tekrar eden 'el kaldırma' ve yardım kredisi tartışmalarının bir parçası olarak konuşuldu.",
    source: "16 Ekim 2026 bölümü transkripti"
  },
  {
    id: "2026-10-18-siringul-muhammed-tayfa",
    date: "18 Ekim 2026",
    dateISO: "2026-10-18",
    title: "Şiringül–Muhammed / 'tayfa' tartışması",
    participants: ["Şiringül Kaya", "Muhammed Yahya Haliloğlu", "Şükran Boyraz", "Enes Vardar", "Tolga Çakuş", "Burçin Oğuz"],
    kind: "tartışma",
    summary: "Eleme bölümünde Şiringül, hasta haliyle elinde serumla yarıştığını, 6'da 3 yapmasına rağmen Şükran'ın potaya gönderilmesini ve Enes'in 'şansa bırakılmasını' adaletsiz bulduğunu söyledi. '4'te varsa 4' kuralını savundu; Muhammed ve çevresinin kendisine selam vermediğini anlattı. Aynı bölümde Tolga ile Burçin de geçmişteki 'kinci, nefretçi' sözleri üzerine ödeştiklerini söyledi.",
    source: "18 Ekim 2026 bölümü transkripti"
  },
  {
    id: "2026-10-20-ucuz-kahramanlik",
    date: "20 Ekim 2026",
    dateISO: "2026-10-20",
    title: "'Ucuz kahramanlık' tartışması",
    participants: ["Enes Vardar", "Hasan Alp Karabacak", "Burçin Oğuz"],
    kind: "tartışma",
    summary: "Burçin'in dokunulmazlık kazanıp Enes'i potaya göndermesi üzerine Enes, kendi isteğiyle potaya gittiğini söyledi. Hasan Alp, Enes'in bu tavrını 'ucuz kahramanlık' diye niteledi; Enes ise bunu strateji olarak gördüğünü savundu. Aynı konseyde Hasan Alp'in torbadan Armağan'ın adını çekip silmesi de gündem oldu.",
    source: "20 Ekim 2026 bölümü transkripti"
  },
  {
    id: "2026-11-05-kubra-oyunu-satmak",
    date: "5 Kasım 2026",
    dateISO: "2026-11-05",
    title: "Kübra'nın 'oyunu satmak' suçlaması",
    participants: ["Kübra Satılmış", "Tolga Çakuş", "Ayşe Nur İnal"],
    kind: "tartışma",
    summary: "5 Kasım bölümünün açılışında Kübra, Tolga ve Ayşe'yi oyunu satmakla suçladı; şekerpare göndermesi de tartışmaya karıştı. Suçlama 6 Kasım bölümünün açılışında da sürdü. Konu, 6 Kasım konseyi sonrası yaşanan Tolga/Kübra–Ayşe/Şadi kavgasının zeminini oluşturdu.",
    source: "5 Kasım 2026 bölümü transkripti"
  },
  {
    id: "2026-11-06-celme-olayi",
    date: "6 Kasım 2026",
    dateISO: "2026-11-06",
    title: "'Çelme' olayı: Tolgahan–Şadi",
    participants: ["Tolgahan Özden", "Şadi Altınay", "Muhammed Yahya Haliloğlu"],
    kind: "tartışma",
    summary: "Takım oyunu sırasında Tolgahan, Şadi'nin kendisine bilerek çelme taktığını iddia etti; görüntüler izlendi. Şadi, öne adım atarken kazara olduğunu savundu; Muhammed, Şadi'nin göz rahatsızlığına dikkat çekti. Niyet konusu çözümsüz kaldı; Tolgahan dokunulmazlık kazanmasına rağmen Şadi'yi potaya gönderdi.",
    source: "6 Kasım 2026 bölümü transkripti"
  },
  {
    id: "2026-11-07-tolga-kubra-ayse-sadi",
    date: "7 Kasım 2026",
    dateISO: "2026-11-07",
    title: "6 Kasım konseyi sonrası Tolga/Kübra–Ayşe/Şadi kavgası",
    participants: ["Tolga Çakuş", "Kübra Satılmış", "Ayşe Nur İnal", "Şadi Altınay", "Eyüp Can Güneş", "Bahar Kaya"],
    kind: "tartışma",
    summary: "7 Kasım bölümünde 6 Kasım konseyinde yaşananlar üzerine uzun tartışma çıktı; 'intikam' ve sosyal medya takipçi sayıları gündeme geldi. Tolga ve Kübra, Ayşe ile Şadi'yi hedef aldı; Ayşe ve Şadi karşılık verdi. Aynı bölümde Eyüp Can, Bahar'ın kendisine iki kez boş oy attığını söyledi; Bahar, en düşük puan alana oy verdiğini savundu.",
    source: "7 Kasım 2026 bölümü transkripti"
  }
];
