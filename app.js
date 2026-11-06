/* MasterChef Türkiye 2026 — render v2 (yarışmacı odaklı)
   Okur: data.js (SITE, EPISODES, CONTESTANTS) + discussions.js (DISCUSSIONS)
   DISHES: data/dishes.csv'den üretilmiş anlık görüntü (277 satır, 2026-11-06).
   Yeni transkript geldiğinde data.js güncellenir; sayfa kendini günceller.
   Hiçbir sayı elle yazılmaz — sıralamalar kayıtlardan hesaplanır. */
(function () {
  "use strict";
  var DISHES = {"Batuhan Nazikoğlu":[{"d":"2026-10-04","g":"Vitello Tonnato","dish":"Vitello Tonnato","r":"elendi"},{"d":"2026-09-22","g":"Köfteli İslim kebabı","dish":"Köfteli İslim kebabı","r":"katildi"},{"d":"2026-09-11","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"dokunulmazlik_kazandi","b":1},{"d":"2026-08-16","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-07-17","g":"Ali Nazik","dish":"Ali Nazik","r":"kazandi","rk":"1","b":1,"n":"En başarılı tabak; 'kurallara uygun yapılan tek Ali Nazik seninkiydi'"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Somon bayıldı","r":"ust_tur","n":"Çıkarım: isim anonsu eksik; 8 üst tur isminden 7'si eşleşti, geriye kalan tek yemek ve tek isim — teyit edilecek"}],"Elif Nilay Özgen":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kazandi","n":"Hatasız; kuyruk kıvrılması dışında kusursuz; salatası ince kıyım değil"},{"d":"2026-11-05","g":"Zeytinyağlı kuru incir dolması","dish":"Zeytinyağlı kuru incir dolması","r":"3.","rk":"3","n":"Ekşisi az, dereotu yok; içi biraz daha alınabilirdi"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Erzurum patatesli lahana sarması","r":"kazandi"},{"d":"2026-11-02","g":"Pide","dish":"Kıymalı kuşbaşılı pide","r":"katildi","n":"İçi çok iyi, hamur yumuşak; ama bir köşesini kesmiş"},{"d":"2026-10-25","g":"Siyah sarımsaklı özgün tabak","dish":"Siyah sarımsaklı özgün tabak","r":"gecti"},{"d":"2026-10-13","g":"Fesenjan","dish":"Fesenjan","r":"katildi","n":"Ayşe/Şadi takım yerleşimi kaynaklarda çelişiyor — teyit edilecek"},{"d":"2026-10-11","g":"Mandalina ile yaratıcı tabak","dish":"Mandalina ile yaratıcı tabak","r":"gecti"},{"d":"2026-09-08","g":"Helva-i hakani","dish":"Helva-i hakani","r":"katildi"},{"d":"2026-08-16","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-07-18","g":"Ana kadro seçimi — Tur 1","dish":"Fransız usulü soğan çorbası","r":"ust_tur","n":"Diğer 5 yarışmacının Tur 1 sonucu biliniyor ama bireysel tabak detayı yok; yalnızca Nilay satırı açıldı"},{"d":"2026-07-18","g":"Ana kadro seçimi — Tur 2 (tavuk yaratıcılık)","dish":"Tavukla yaratıcı tabak","r":"kazandi","b":1},{"d":"2026-07-17","g":"Ali Nazik","dish":"Ali Nazik","r":"elendi","n":"Patlıcanı maydanoza boğdu, et sote gibi oldu"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Tavuk fars (biberli)","r":"ust_tur"}],"Emre İrkilmez":[{"d":"2026-10-25","g":"Crespelle","dish":"Crespelle","r":"elendi"},{"d":"2026-10-25","g":"Siyah sarımsaklı özgün tabak","dish":"Siyah sarımsaklı özgün tabak","r":"finalist"},{"d":"2026-10-16","g":"Banduma","dish":"Banduma","r":"katildi"},{"d":"2026-09-30","g":"Meyveli tart","dish":"Meyveli tart","r":"dokunulmazlik_kazandi","b":1,"n":"Katılımcı kümesi webde yok; yalnızca finalistler biliniyor. Emre 1. aday olarak Kübra'yı, oylama 2. aday olarak Ayşe'yi seçti"},{"d":"2026-09-13","g":"filetto di manzo con purè di patate","dish":"filetto di manzo con purè di patate","r":"gecti"},{"d":"2026-09-11","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"katildi"},{"d":"2026-08-24","g":"Kaptanlık oyunu","dish":"Sütlaç","r":"kazandi","b":1,"n":"Kaptanlık yemeğiyle Mavi kaptan seçildi"},{"d":"2026-08-18","g":"Ana kadro seçimi — Tur 1","dish":"Ratatuy","r":"kazandi","b":1,"n":"2. yedek; yedekten ana kadroya girdi"},{"d":"2026-07-17","g":"Ali Nazik","dish":"Ali Nazik","r":"3.","rk":"3","n":"Kıyma fazla kavrulmuş, sosu az"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Biber bayıldı","r":"ust_tur"}],"Fatma":[{"d":"2026-07-17","g":"Ali Nazik","dish":"Ali Nazik","r":"elendi","n":"Ali Nazik bile değil; domates soslu patlıcanlı yemek"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Biberli köfte dürüm","r":"ust_tur","n":"Soyadı bilinmiyor"}],"Hami Efe Hanedan":[{"d":"2026-07-18","g":"Ana kadro seçimi — Tur 2 (tavuk yaratıcılık)","dish":"Tavukla yaratıcı tabak","r":"katildi"},{"d":"2026-07-17","g":"Ali Nazik","dish":"Ali Nazik","r":"elendi","n":"Kıyma yanık"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Biber sarma","r":"ust_tur","n":"Soyadı teyit edilecek (2025 kaydında Hanedan geçiyor)"}],"Hasan Alp Karabacak":[{"d":"2026-11-01","g":"Kalamar Dolması ve Sucuklu Tereyağında Deniz Tarağı","dish":"Kalamar Dolması ve Sucuklu Tereyağında Deniz Tarağı","r":"elendi"},{"d":"2026-10-31","g":"Sıfır atık konsepti yaratıcı yemek","dish":"Sıfır atık konsepti yaratıcı yemek","r":"katildi","n":"Tolgahan'ın bu haftaki 3. bireysel dokunulmazlığı"},{"d":"2026-10-29","g":"Yeşil mercimekle yaratıcı tabak","dish":"Yeşil mercimekle yaratıcı tabak","r":"katildi"},{"d":"2026-10-28","g":"Tavuk bagetle yaratıcı yemek","dish":"Tavuk bagetle yaratıcı yemek","r":"katildi"},{"d":"2026-10-27","g":"Lavaş kebabı","dish":"Lavaş kebabı","r":"katildi"},{"d":"2026-10-25","g":"Crespelle","dish":"Crespelle","r":"gecti"},{"d":"2026-10-25","g":"Siyah sarımsaklı özgün tabak","dish":"Siyah sarımsaklı özgün tabak","r":"finalist"},{"d":"2026-10-13","g":"Fesenjan","dish":"Fesenjan","r":"katildi","n":"Ayşe/Şadi takım yerleşimi kaynaklarda çelişiyor — teyit edilecek"},{"d":"2026-10-11","g":"Mandalina ile yaratıcı tabak","dish":"Mandalina ile yaratıcı tabak","r":"gecti"},{"d":"2026-09-22","g":"Köfteli İslim kebabı","dish":"Köfteli İslim kebabı","r":"katildi"},{"d":"2026-09-11","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"katildi"},{"d":"2026-08-20","g":"Armutla yaratıcı tabak","dish":"Armutla yaratıcı tabak","r":"dokunulmazlik_kazandi","b":1,"n":"Takım listeleri kaynaklar arasında çelişiyor (lezzet.com.tr vs yenicaggazetesi) — teyit edilecek"},{"d":"2026-07-18","g":"Ana kadro seçimi — Tur 2 (tavuk yaratıcılık)","dish":"Tavukla yaratıcı tabak","r":"katildi"},{"d":"2026-07-17","g":"Ali Nazik","dish":"Ali Nazik","r":"2.","rk":"2","n":"Et güzel ama tabaklama karışık, maydanoz fazla"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Salamura uskumru + iç pilav","r":"ust_tur"}],"Hatice":[{"d":"2026-07-17","g":"Ali Nazik","dish":"Ali Nazik","r":"elendi","n":"Et kuru, jülyen kesim"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Dip soslu köz biber tabağı","r":"ust_tur","n":"Soyadı bilinmiyor"}],"Mine":[{"d":"2026-07-18","g":"Ana kadro seçimi — Tur 2 (tavuk yaratıcılık)","dish":"Tavukla yaratıcı tabak","r":"katildi"},{"d":"2026-07-17","g":"Ali Nazik","dish":"Ali Nazik","r":"elendi","n":"Eti düdüklü tencerede pişirdi, et oranı az, Ali Nazik kuralına uymadı"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Tuzlu pataşu (biberli)","r":"ust_tur","b":1,"n":"Soyadı bilinmiyor; Tur 1 birincisi"}],"Beyhan":[{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Meze tabağı (biberli)","r":"elendi","n":"Sarımsak fazla, özensiz tabaklama; soyadı bilinmiyor"}],"Cansu Şöhret":[{"d":"2026-09-13","g":"filetto di manzo con purè di patate","dish":"filetto di manzo con purè di patate","r":"elendi","n":"Tur 1 mürdüm eriği yaratıcılık; pota sayısı kaynaklarda çelişkili (6 vs 8) — Tur 1 satırı açılmadı"},{"d":"2026-09-08","g":"Helva-i hakani","dish":"Helva-i hakani","r":"katildi"},{"d":"2026-07-18","g":"Ana kadro seçimi — Tur 2 (tavuk yaratıcılık)","dish":"Tavukla yaratıcı tabak","r":"katildi"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Biberli ravioli","r":"elendi","n":"Hamur pişmemiş / yumuşak"}],"Enes Vardar":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kaybetti","n":"Kılçık kırıldı; torpido duruşu bozuldu"},{"d":"2026-11-05","g":"Zeytinyağlı kuru incir dolması","dish":"Zeytinyağlı kuru incir dolması","r":"katildi","n":"Soğanı fazla, baharatı az"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Sütlü patates çorbası","r":"kazandi"},{"d":"2026-11-02","g":"Pide","dish":"Bursa cantığı","r":"ilk_6","rk":"2","n":"2.'lik çıkarım: son ikiye Enes ve Armağan kaldı, Armağan kazandı — teyit edilecek. Şefler: 'son dönemin en iyi iki pidesi'"},{"d":"2026-10-31","g":"Sıfır atık konsepti yaratıcı yemek","dish":"Sıfır atık konsepti yaratıcı yemek","r":"katildi","n":"Tolgahan'ın bu haftaki 3. bireysel dokunulmazlığı"},{"d":"2026-10-29","g":"Yeşil mercimekle yaratıcı tabak","dish":"Yeşil mercimekle yaratıcı tabak","r":"katildi"},{"d":"2026-10-28","g":"Tavuk bagetle yaratıcı yemek","dish":"Tavuk bagetle yaratıcı yemek","r":"katildi"},{"d":"2026-10-27","g":"Lavaş kebabı","dish":"Lavaş kebabı","r":"katildi"},{"d":"2026-10-25","g":"Siyah sarımsaklı özgün tabak","dish":"Siyah sarımsaklı özgün tabak","r":"gecti"},{"d":"2026-10-13","g":"Fesenjan","dish":"Fesenjan","r":"katildi","n":"Ayşe/Şadi takım yerleşimi kaynaklarda çelişiyor — teyit edilecek"},{"d":"2026-10-11","g":"Mandalina ile yaratıcı tabak","dish":"Mandalina ile yaratıcı tabak","r":"gecti"},{"d":"2026-09-22","g":"Köfteli İslim kebabı","dish":"Köfteli İslim kebabı","r":"katildi"},{"d":"2026-09-11","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"katildi"},{"d":"2026-08-23","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-08-20","g":"Armutla yaratıcı tabak","dish":"Armutla yaratıcı tabak","r":"katildi","n":"Takım listeleri kaynaklar arasında çelişiyor (lezzet.com.tr vs yenicaggazetesi) — teyit edilecek"},{"d":"2026-08-16","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"finalist"},{"d":"2026-08-16","g":"Ricciola","dish":"Ricciola","r":"gecti"},{"d":"2026-07-21","g":"Ana kadro seçimi — Tur 1","dish":"Kimyonla yaratıcı tabak","r":"ust_tur"},{"d":"2026-07-21","g":"Ana kadro seçimi — Tur 2","dish":"Kazandibi","r":"kazandi","b":1,"n":"Ana kadroya giren 5. yarışmacı"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Biberli tatlı","r":"elendi","n":"Tatlıda hiç acı gelmiyor; riskli seçim"}],"Fazlı":[{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Biberli pizza / flatbread","r":"elendi","n":"Soyadı bilinmiyor"}],"Nevzat":[{"d":"2026-07-18","g":"Ana kadro seçimi — Tur 2 (tavuk yaratıcılık)","dish":"Tavukla yaratıcı tabak","r":"katildi"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Acı pirzola","r":"elendi","n":"Et çok pişmiş, griye dönmüş; soyadı bilinmiyor"}],"Şiringül Kaya":[{"d":"2026-10-18","g":"Uskumru Tarator","dish":"Uskumru Tarator","r":"elendi","n":"Eleme Tur 1 yemeği webde bulunamadı"},{"d":"2026-10-13","g":"Fesenjan","dish":"Fesenjan","r":"katildi","n":"Ayşe/Şadi takım yerleşimi kaynaklarda çelişiyor — teyit edilecek"},{"d":"2026-09-22","g":"Köfteli İslim kebabı","dish":"Köfteli İslim kebabı","r":"katildi"},{"d":"2026-09-20","g":"Tahinle yaratıcı tabak","dish":"Tahinle yaratıcı tabak","r":"gecti","n":"Final grubu kaynakta 'Faruk vs Tolgahan / Kübra / Ayşe grubu' diye geçiyor — belirsiz"},{"d":"2026-09-08","g":"Helva-i hakani","dish":"Helva-i hakani","r":"katildi"},{"d":"2026-07-20","g":"Ana kadro seçimi — Tur 1","dish":"Falafel","r":"ust_tur"},{"d":"2026-07-20","g":"Ana kadro seçimi — Tur 2","dish":"Kuzu kulağını merkeze alan yaratıcı tabak","r":"kazandi","b":1,"n":"Ana kadroya giren 4. yarışmacı"},{"d":"2026-07-17","g":"Biber yaratıcılık","dish":"Ciğer","r":"elendi","n":"Çıkarım: isim anonsu eksik; geriye kalan tek isim ve tek olay ocakta unutulan ciğer — teyit edilecek"}],"Eyüp Can Güneş":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kaybetti","n":"Kaplaması altın sarısı olmadı, tava balığı gibi"},{"d":"2026-11-05","g":"Zeytinyağlı kuru incir dolması","dish":"Zeytinyağlı kuru incir dolması","r":"katildi","n":"Limonu az, içi az. Konsey oylaması: Eyüp Can 5 oy aldı (4. aday)"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Bavyera usulü patates salatası","r":"kaybetti"},{"d":"2026-11-02","g":"Pide","dish":"Urfa pidesi","r":"katildi","n":"Hamur kalın, biraz daha pişebilirdi, fazla beyaz"},{"d":"2026-10-25","g":"Crespelle","dish":"Crespelle","r":"gecti"},{"d":"2026-10-25","g":"Siyah sarımsaklı özgün tabak","dish":"Siyah sarımsaklı özgün tabak","r":"finalist"},{"d":"2026-10-13","g":"Fesenjan","dish":"Fesenjan","r":"katildi","n":"Ayşe/Şadi takım yerleşimi kaynaklarda çelişiyor — teyit edilecek"},{"d":"2026-09-11","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"katildi"},{"d":"2026-07-23","g":"Ana kadro seçimi — Tur 1","dish":"Ayşe Kadın fasulyesi + çalı fasulyesi yaratıcı tabak","r":"ust_tur"},{"d":"2026-07-23","g":"Ana kadro seçimi — Tur 2","dish":"Altı Ezmeli Kebap","r":"kazandi","b":1,"n":"Ana kadroya giren 6. yarışmacı; tarih sıralamadan doğrulandı"}],"Nurten Ocak Tamer":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kazandi","n":"Tam bir dolma olmuş; blok halinde çıkarmış"},{"d":"2026-11-05","g":"Zeytinyağlı kuru incir dolması","dish":"Zeytinyağlı kuru incir dolması","r":"dokunulmazlik_kazandi","rk":"1","b":1,"n":"En başarılı incir dolması; ekşisi, iç dolgusu, pişmesi tam. 3. eleme adayı olarak Bahar'ı potaya gönderdi"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Patatesli hıngal","r":"kaybetti"},{"d":"2026-11-02","g":"Pide","dish":"Develi cıvıklısı","r":"ilk_6","rk":"6","n":"Kıyma cıvıklı için çok fazla (az, küçük kuşbaşı ve sulu olmalı); tabanı ince ve çıtır — övüldü. Şefler Nurten ve Armağan'ın pidelerini tekrar tattı"},{"d":"2026-11-01","g":"Kalamar Dolması ve Sucuklu Tereyağında Deniz Tarağı","dish":"Kalamar Dolması ve Sucuklu Tereyağında Deniz Tarağı","r":"gecti","n":"Eleme Tur 1 ürünü webde bulunamadı; Enes ve Muhammed Tur 1'de kurtuldu"},{"d":"2026-10-31","g":"Sıfır atık konsepti yaratıcı yemek","dish":"Sıfır atık konsepti yaratıcı yemek","r":"katildi","n":"Tolgahan'ın bu haftaki 3. bireysel dokunulmazlığı"},{"d":"2026-10-29","g":"Yeşil mercimekle yaratıcı tabak","dish":"Yeşil mercimekle yaratıcı tabak","r":"katildi"},{"d":"2026-10-28","g":"Tavuk bagetle yaratıcı yemek","dish":"Tavuk bagetle yaratıcı yemek","r":"katildi"},{"d":"2026-10-27","g":"Lavaş kebabı","dish":"Lavaş kebabı","r":"finalist"},{"d":"2026-10-18","g":"Uskumru Tarator","dish":"Uskumru Tarator","r":"gecti"},{"d":"2026-10-16","g":"Banduma","dish":"Banduma","r":"katildi"},{"d":"2026-10-11","g":"Flying Noodles / Uçan Erişte","dish":"Flying Noodles / Uçan Erişte","r":"gecti","rk":"1","b":1},{"d":"2026-10-11","g":"Mandalina ile yaratıcı tabak","dish":"Mandalina ile yaratıcı tabak","r":"finalist"},{"d":"2026-09-22","g":"Köfteli İslim kebabı","dish":"Köfteli İslim kebabı","r":"katildi"},{"d":"2026-09-20","g":"Tahinle yaratıcı tabak","dish":"Tahinle yaratıcı tabak","r":"gecti","n":"Final grubu kaynakta 'Faruk vs Tolgahan / Kübra / Ayşe grubu' diye geçiyor — belirsiz"},{"d":"2026-09-08","g":"Helva-i hakani","dish":"Helva-i hakani","r":"katildi"},{"d":"2026-07-25","g":"Ana kadro seçimi — Tur 1","dish":"Yenidünya yaratıcı tabak","r":"ust_tur"},{"d":"2026-07-25","g":"Ana kadro seçimi — Tur 2","dish":"Su böreği","r":"kazandi","b":1,"n":"Ana kadroya giren 8. yarışmacı"}],"Burçin Oğuz":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kaybetti","n":"Kuyruğu kızartırken koptu"},{"d":"2026-11-05","g":"Zeytinyağlı kuru incir dolması","dish":"Zeytinyağlı kuru incir dolması","r":"katildi","n":"Limonu az, tatlıyı bastıramadı"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Tavuklu sandal patates","r":"kazandi"},{"d":"2026-11-02","g":"Pide","dish":"Sade kuşbaşılı pide","r":"katildi"},{"d":"2026-10-25","g":"Siyah sarımsaklı özgün tabak","dish":"Siyah sarımsaklı özgün tabak","r":"gecti"},{"d":"2026-10-16","g":"Banduma","dish":"Banduma","r":"katildi"},{"d":"2026-09-22","g":"Köfteli İslim kebabı","dish":"Köfteli İslim kebabı","r":"dokunulmazlik_kazandi","b":1},{"d":"2026-09-08","g":"Helva-i hakani","dish":"Helva-i hakani","r":"katildi"},{"d":"2026-08-16","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-08-10","g":"Kaptanlık oyunu","dish":"Menemen","r":"kazandi","b":1,"n":"Kaptanlık yemeğiyle Mavi kaptan seçildi"},{"d":"2026-07-27","g":"Ana kadro seçimi — Tur 1","dish":"Yenibahar yaratıcı tabak","r":"ust_tur"},{"d":"2026-07-27","g":"Ana kadro seçimi — Tur 2","dish":"Tiramisu","r":"kazandi","b":1,"n":"Ana kadroya giren 10. yarışmacı"}],"Tolga Çakuş":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kazandi","n":"Kusursuza yakın; kuyruğu oynamıyor, dış kaplaması altın sarısı. Kazanan ismi ASR'da bozuk çıkmış; 'Tolga ve bütün Mavi takımı … oyunu kazanıyor' cümlesinden çıkarım — teyit edilece"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Bavyera usulü patates salatası","r":"kazandi"},{"d":"2026-11-03","g":"Tahin ve pekmezle yaratıcı tabak","dish":"Katmer + pekmezli çikolatalı fondü + yalancı kaymak","r":"katildi"},{"d":"2026-11-02","g":"Pide","dish":"Karışık 3 bölümlü pide","r":"ilk_6","rk":"4","n":"Sucuklu-yumurtalı orta bölüm şefleri şaşırttı, üst malzeme fazla, biraz ıslak; hamuru çok iyi"},{"d":"2026-10-16","g":"Banduma","dish":"Banduma","r":"finalist"},{"d":"2026-09-20","g":"Tahinle yaratıcı tabak","dish":"Tahinle yaratıcı tabak","r":"gecti","n":"Final grubu kaynakta 'Faruk vs Tolgahan / Kübra / Ayşe grubu' diye geçiyor — belirsiz"},{"d":"2026-09-08","g":"Helva-i hakani","dish":"Helva-i hakani","r":"katildi"},{"d":"2026-09-07","g":"Kaptanlık oyunu","dish":"Yağlama","r":"kazandi","b":1,"n":"Kaptanlık yemeğiyle Mavi kaptan seçildi"},{"d":"2026-08-16","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-07-29","g":"Ana kadro seçimi — Tur 1","dish":"Bezelye yaratıcı tabak","r":"ust_tur"},{"d":"2026-07-29","g":"Ana kadro seçimi — Tur 2","dish":"Hatay usulü tepsi kebabı","r":"kazandi","b":1,"n":"Ana kadroya giren 11. yarışmacı"}],"Ayşe Nur İnal":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kaybetti","n":"Balıkta çatlak; iç harçta burukluk"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Zwetschgenknödel","r":"kaybetti","n":"Karar cümlesi ASR'da müzikle bozuk; şeflerin gerekçesi (Ayşe'nin hamuru çiğ, yenmez) kazananı açıkça gösteriyor"},{"d":"2026-11-03","g":"Tahin ve pekmezle yaratıcı tabak","dish":"Tahin ve pekmez tadım menüsü (çorba + tahinli ravioli + karides)","r":"3.","rk":"3","n":"Şef notu: karides doğru pişmiş, ravioli güzel ama pekmez az geliyor, tahin hiçbir yerden gelmiyor. Konsey oylaması: Ayşe 5 oy aldı (2. aday)"},{"d":"2026-11-02","g":"Pide","dish":"Kıymalı soğanlı pide","r":"katildi","n":"Pidesinde kusur yok, sadece ilk ikiden iyi değil"},{"d":"2026-10-30","g":"Burgu peyniriyle yaratıcı tabak","dish":"Burgu peyniriyle yaratıcı tabak","r":"kazandi","b":1,"n":"Katılımcı kümesi webde yok; yalnızca finalistler biliniyor"},{"d":"2026-10-25","g":"Crespelle","dish":"Crespelle","r":"gecti"},{"d":"2026-10-25","g":"Siyah sarımsaklı özgün tabak","dish":"Siyah sarımsaklı özgün tabak","r":"finalist"},{"d":"2026-10-16","g":"Banduma","dish":"Banduma","r":"dokunulmazlik_kazandi","b":1},{"d":"2026-10-11","g":"Mandalina ile yaratıcı tabak","dish":"Mandalina ile yaratıcı tabak","r":"gecti"},{"d":"2026-09-20","g":"Tahinle yaratıcı tabak","dish":"Tahinle yaratıcı tabak","r":"finalist","n":"Final grubu kaynakta 'Faruk vs Tolgahan / Kübra / Ayşe grubu' diye geçiyor — belirsiz"},{"d":"2026-09-08","g":"Helva-i hakani","dish":"Helva-i hakani","r":"katildi"},{"d":"2026-08-23","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-08-20","g":"Armutla yaratıcı tabak","dish":"Armutla yaratıcı tabak","r":"katildi","n":"Takım listeleri kaynaklar arasında çelişiyor (lezzet.com.tr vs yenicaggazetesi) — teyit edilecek"},{"d":"2026-07-31","g":"Ana kadro seçimi — Tur 1","dish":"Empanada","r":"kazandi","b":1,"n":"Tek kaynak Instagram özet hesabı; haber kaynağıyla doğrulanmadı — teyit edilecek. Ana kadroya giren 13. yarışmacı"}],"Kübra Satılmış":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kazandi","n":"İç lezzeti en başarılı; sırt tarafında birkaç dalgalanma"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Erzurum patatesli lahana sarması","r":"kaybetti","n":"Yanıklığı beğenildi ama boyutlar eşit değil"},{"d":"2026-11-03","g":"Tahin ve pekmezle yaratıcı tabak","dish":"Karidesli dumpling (tahin sos)","r":"dokunulmazlik_kazandi","rk":"1","b":1,"n":"En başarılı tabak; 1. eleme adayı olarak Tolgahan'ı potaya gönderdi"},{"d":"2026-11-02","g":"Pide","dish":"Kıymalı kaşarlı pide","r":"katildi"},{"d":"2026-10-26","g":"Kaptanlık oyunu","dish":"Testi kebabı","r":"kazandi","b":1,"n":"Kaptanlık yemeğiyle Mavi kaptan seçildi"},{"d":"2026-10-16","g":"Banduma","dish":"Banduma","r":"katildi"},{"d":"2026-10-11","g":"Flying Noodles / Uçan Erişte","dish":"Flying Noodles / Uçan Erişte","r":"gecti"},{"d":"2026-10-11","g":"Mandalina ile yaratıcı tabak","dish":"Mandalina ile yaratıcı tabak","r":"finalist"},{"d":"2026-09-22","g":"Köfteli İslim kebabı","dish":"Köfteli İslim kebabı","r":"katildi"},{"d":"2026-09-20","g":"Tahinle yaratıcı tabak","dish":"Tahinle yaratıcı tabak","r":"finalist","n":"Final grubu kaynakta 'Faruk vs Tolgahan / Kübra / Ayşe grubu' diye geçiyor — belirsiz"},{"d":"2026-09-08","g":"Helva-i hakani","dish":"Helva-i hakani","r":"katildi"},{"d":"2026-08-16","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-08-01","g":"Ana kadro seçimi — Tur 1","dish":"Sebze güveci","r":"ust_tur","n":"Tur 2 yemeği webde bulunamadı"}],"Gülbahar Meşe":[{"d":"2026-08-23","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"finalist"},{"d":"2026-08-23","g":"Ricciola","dish":"Ricciola","r":"elendi"},{"d":"2026-08-20","g":"Armutla yaratıcı tabak","dish":"Armutla yaratıcı tabak","r":"katildi","n":"Takım listeleri kaynaklar arasında çelişiyor (lezzet.com.tr vs yenicaggazetesi) — teyit edilecek"},{"d":"2026-08-02","g":"Ana kadro seçimi — Tur 1","dish":"Sumakla tabak","r":"ust_tur"},{"d":"2026-08-02","g":"Ana kadro seçimi — Tur 2","dish":"Ekler","r":"kazandi","b":1,"n":"Ana kadroya giren 15. yarışmacı"}],"Simge Çıtak":[{"d":"2026-08-23","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-08-20","g":"Armutla yaratıcı tabak","dish":"Armutla yaratıcı tabak","r":"katildi","n":"Takım listeleri kaynaklar arasında çelişiyor (lezzet.com.tr vs yenicaggazetesi) — teyit edilecek"},{"d":"2026-08-16","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-08-04","g":"Ana kadro seçimi — Tur 1","dish":"Havuçla yaratıcı tabak","r":"ust_tur"},{"d":"2026-08-04","g":"Ana kadro seçimi — Tur 2","dish":"Pideli köfte","r":"kazandi","b":1,"n":"Ana kadroya giren 16. yarışmacı"}],"Bahar Kaya":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kaybetti","n":"Kaplaması ıslak kaldı; su deriye bulaştı"},{"d":"2026-11-05","g":"Zeytinyağlı kuru incir dolması","dish":"Zeytinyağlı kuru incir dolması","r":"2.","rk":"2","n":"Limon ayrı ayrı geliyor; içi biraz daha oyulsa daha iyi olurdu; hafif yanık olması tekstür vermiş. 13 haftada ilk kez potaya girdi (Nurten'in seçimi)"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Gatto di Patate","r":"kaybetti"},{"d":"2026-11-02","g":"Pide","dish":"Kıymalı kaşarlı pide","r":"katildi","n":"Harcı güzel, hamur ince değil. 13 haftadır potaya hiç girmedi — MasterChef rekoru (önceki rekor Onur, 11 hafta)"},{"d":"2026-10-16","g":"Banduma","dish":"Banduma","r":"katildi"},{"d":"2026-09-20","g":"Tahinle yaratıcı tabak","dish":"Tahinle yaratıcı tabak","r":"gecti","n":"Final grubu kaynakta 'Faruk vs Tolgahan / Kübra / Ayşe grubu' diye geçiyor — belirsiz"},{"d":"2026-09-08","g":"Helva-i hakani","dish":"Helva-i hakani","r":"dokunulmazlik_kazandi","b":1},{"d":"2026-08-05","g":"Ana kadro seçimi — Tur 1","dish":"Bal kabağı çorbası","r":"ust_tur"},{"d":"2026-08-05","g":"Ana kadro seçimi — Tur 2","dish":"Levreyi merkeze alan yaratıcı tabak","r":"kazandi","b":1,"n":"Ana kadroya giren 17. yarışmacı"}],"Şükran Boyraz":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kaybetti","n":"Balığın sırtı açılmış"},{"d":"2026-11-05","g":"Zeytinyağlı kuru incir dolması","dish":"Zeytinyağlı kuru incir dolması","r":"katildi","n":"İçini az doldurmuş; pilav girecek yer kalmamış"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Zwetschgenknödel","r":"kazandi","n":"Kırmızı kaptan yaptı; Bahar, Enes ve Eyüp Can yardım etti (hamur yoğurma, haşlama, panko); Şükran ana sorumlu. Karar cümlesi ASR'da müzikle bozuk; şeflerin gerekçesi kazananı açıkç"},{"d":"2026-11-02","g":"Pide","dish":"Sütlü peynirli ev pidesi","r":"ilk_6","rk":"5","n":"Hiç protein yok — ilk 6'nın en ilginç pidesi; hamur biraz kalın/az pişmiş. Armağan tarafından Kırmızı kaptan seçildi"},{"d":"2026-11-01","g":"Kalamar Dolması ve Sucuklu Tereyağında Deniz Tarağı","dish":"Kalamar Dolması ve Sucuklu Tereyağında Deniz Tarağı","r":"gecti"},{"d":"2026-10-31","g":"Sıfır atık konsepti yaratıcı yemek","dish":"Sıfır atık konsepti yaratıcı yemek","r":"katildi","n":"Tolgahan'ın bu haftaki 3. bireysel dokunulmazlığı"},{"d":"2026-10-29","g":"Yeşil mercimekle yaratıcı tabak","dish":"Yeşil mercimekle yaratıcı tabak","r":"katildi"},{"d":"2026-10-28","g":"Tavuk bagetle yaratıcı yemek","dish":"Tavuk bagetle yaratıcı yemek","r":"katildi"},{"d":"2026-10-27","g":"Lavaş kebabı","dish":"Lavaş kebabı","r":"katildi"},{"d":"2026-10-13","g":"Fesenjan","dish":"Fesenjan","r":"katildi","n":"Ayşe/Şadi takım yerleşimi kaynaklarda çelişiyor — teyit edilecek"},{"d":"2026-09-21","g":"Kaptanlık oyunu","dish":"Lahmacun","r":"kazandi","b":1,"n":"Kaptanlık yemeğiyle Mavi kaptan seçildi"},{"d":"2026-09-08","g":"Helva-i hakani","dish":"Helva-i hakani","r":"katildi"},{"d":"2026-08-23","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-08-20","g":"Armutla yaratıcı tabak","dish":"Armutla yaratıcı tabak","r":"katildi","n":"Takım listeleri kaynaklar arasında çelişiyor (lezzet.com.tr vs yenicaggazetesi) — teyit edilecek"},{"d":"2026-08-06","g":"Ana kadro seçimi — Tur 1","dish":"Erikle yaratıcı tabak","r":"ust_tur"},{"d":"2026-08-06","g":"Ana kadro seçimi — Tur 2","dish":"Sebzeli gyoza","r":"kazandi","b":1,"n":"Ana kadroya giren 18. yarışmacı"}],"Armağan Kırant":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kazandi","n":"Kaptanlar düellosu; Armağan diskromatopsi (renk körlüğü) olduğunu söyledi; altın sarısı kaplama"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Sütlü patates çorbası","r":"kaybetti"},{"d":"2026-11-03","g":"Tahin ve pekmezle yaratıcı tabak","dish":"Tahin-pekmez sablé + pandispanya + mascarpone kreması + Saganaki çıtır + pekmez dondurması","r":"katildi"},{"d":"2026-11-02","g":"Pide","dish":"Kıymalı kaşarlı pide","r":"kazandi","rk":"1","b":1,"n":"En iyi pide; Şükran'ı Kırmızı kaptan seçti"},{"d":"2026-11-01","g":"Kalamar Dolması ve Sucuklu Tereyağında Deniz Tarağı","dish":"Kalamar Dolması ve Sucuklu Tereyağında Deniz Tarağı","r":"gecti"},{"d":"2026-10-31","g":"Sıfır atık konsepti yaratıcı yemek","dish":"Sıfır atık konsepti yaratıcı yemek","r":"finalist","n":"Tolgahan'ın bu haftaki 3. bireysel dokunulmazlığı"},{"d":"2026-10-29","g":"Yeşil mercimekle yaratıcı tabak","dish":"Yeşil mercimekle yaratıcı tabak","r":"katildi"},{"d":"2026-10-28","g":"Tavuk bagetle yaratıcı yemek","dish":"Tavuk bagetle yaratıcı yemek","r":"finalist"},{"d":"2026-10-27","g":"Lavaş kebabı","dish":"Lavaş kebabı","r":"katildi"},{"d":"2026-10-13","g":"Fesenjan","dish":"Fesenjan","r":"katildi","n":"Ayşe/Şadi takım yerleşimi kaynaklarda çelişiyor — teyit edilecek"},{"d":"2026-09-22","g":"Köfteli İslim kebabı","dish":"Köfteli İslim kebabı","r":"katildi"},{"d":"2026-09-14","g":"Kaptanlık oyunu","dish":"Profiterol","r":"kazandi","b":1,"n":"Kaptanlık yemeğiyle Mavi kaptan seçildi"},{"d":"2026-09-11","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"katildi"},{"d":"2026-09-02","g":"İncirle yaratıcı tabak","dish":"İncirle yaratıcı tabak","r":"dokunulmazlik_kazandi","b":1,"n":"Katılımcı kümesi webde yok; yalnızca kazanan biliniyor. Armağan Şükran'ı potaya gönderdi; oylamayla 2. aday Recep oldu"},{"d":"2026-08-23","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-08-20","g":"Armutla yaratıcı tabak","dish":"Armutla yaratıcı tabak","r":"katildi","n":"Takım listeleri kaynaklar arasında çelişiyor (lezzet.com.tr vs yenicaggazetesi) — teyit edilecek"},{"d":"2026-08-07","g":"Ana kadro seçimi — Tur 1","dish":"Kuru fasulye ve pilav","r":"ust_tur"},{"d":"2026-08-07","g":"Ana kadro seçimi — Tur 2","dish":"Asma yaprağını merkeze alan yaratıcı tabaklar","r":"kazandi","b":1,"n":"Ana kadroya giren 19. yarışmacı"}],"Koray Saygı":[{"d":"2026-08-23","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"finalist"},{"d":"2026-08-23","g":"Ricciola","dish":"Ricciola","r":"gecti"},{"d":"2026-08-20","g":"Armutla yaratıcı tabak","dish":"Armutla yaratıcı tabak","r":"katildi","n":"Takım listeleri kaynaklar arasında çelişiyor (lezzet.com.tr vs yenicaggazetesi) — teyit edilecek"},{"d":"2026-08-08","g":"Ana kadro seçimi — Tur 1","dish":"Şanlıurfa isotu yaratıcı tabak","r":"ust_tur"},{"d":"2026-08-08","g":"Ana kadro seçimi — Tur 2","dish":"Crème brûlée","r":"kazandi","b":1,"n":"Ana kadroya giren 20. yarışmacı"}],"Recep Batur":[{"d":"2026-09-27","g":"Dana Şaşırma","dish":"Dana Şaşırma","r":"elendi","n":"Finaldeki rakip webde belirtilmemiş; yalnızca elenen satırı açıldı"},{"d":"2026-09-22","g":"Köfteli İslim kebabı","dish":"Köfteli İslim kebabı","r":"katildi"},{"d":"2026-09-11","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"katildi"},{"d":"2026-08-23","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"gecti"},{"d":"2026-08-20","g":"Armutla yaratıcı tabak","dish":"Armutla yaratıcı tabak","r":"katildi","n":"Takım listeleri kaynaklar arasında çelişiyor (lezzet.com.tr vs yenicaggazetesi) — teyit edilecek"},{"d":"2026-08-15","g":"Ana kadro seçimi — Tur 1","dish":"Testi kebabı","r":"kazandi","b":1,"n":"1. yedek; yedekten ana kadroya girdi"}],"Demirhan Ali Tekin":[{"d":"2026-08-16","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"finalist"},{"d":"2026-08-16","g":"Ricciola","dish":"Ricciola","r":"elendi","n":"Sezonun ilk eleneni"}],"Muhammed Yahya Haliloğlu":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kaybetti","n":"Kuyruk tarafında kaplama altında açıklık/kırık; iç harcı çiğden, yer yer ham kokusu; salatası daha iyi"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Patatesli hıngal","r":"kazandi"},{"d":"2026-11-03","g":"Tahin ve pekmezle yaratıcı tabak","dish":"Kakao-kahve-pekmez mantolamalı kuzu + pekmezli mantar dolma","r":"2.","rk":"2","n":"2.'lik çıkarım: ilk 3 Muhammed, Ayşe, Kübra; kazanan Kübra, 3. Ayşe — teyit edilecek"},{"d":"2026-11-02","g":"Pide","dish":"Soslu pide","r":"ilk_6","rk":"3","n":"Biraz kuru; işçilik ve kenarlar övüldü, üç pide de lezzetli"},{"d":"2026-10-31","g":"Sıfır atık konsepti yaratıcı yemek","dish":"Sıfır atık konsepti yaratıcı yemek","r":"katildi","n":"Tolgahan'ın bu haftaki 3. bireysel dokunulmazlığı"},{"d":"2026-10-29","g":"Yeşil mercimekle yaratıcı tabak","dish":"Yeşil mercimekle yaratıcı tabak","r":"katildi"},{"d":"2026-10-28","g":"Tavuk bagetle yaratıcı yemek","dish":"Tavuk bagetle yaratıcı yemek","r":"katildi"},{"d":"2026-10-27","g":"Lavaş kebabı","dish":"Lavaş kebabı","r":"dokunulmazlik_kazandi","b":1},{"d":"2026-10-13","g":"Fesenjan","dish":"Fesenjan","r":"katildi","n":"Ayşe/Şadi takım yerleşimi kaynaklarda çelişiyor — teyit edilecek"},{"d":"2026-10-12","g":"Kaptanlık oyunu","dish":"Cağ kebabı","r":"kazandi","b":1,"n":"Kaptanlık yemeğiyle Mavi kaptan seçildi"},{"d":"2026-09-11","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"katildi"},{"d":"2026-08-20","g":"Armutla yaratıcı tabak","dish":"Armutla yaratıcı tabak","r":"katildi","n":"Takım listeleri kaynaklar arasında çelişiyor (lezzet.com.tr vs yenicaggazetesi) — teyit edilecek"},{"d":"2026-08-17","g":"Kaptanlık oyunu","dish":"Tepsi pizza","r":"kazandi","b":1,"n":"Kaptanlık yemeğiyle Mavi kaptan seçildi"}],"Tolgahan Özden":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kazandi","n":"Kaplama güzel, iç dolgu lezzetli, salata ince kıyım lezzetli; kenarlarda biraz fazla et bırakmış. ASR 'Tolga' yazıyor; eşleşme Eyüp Can–Tolgahan"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Tavuklu sandal patates","r":"kaybetti"},{"d":"2026-11-03","g":"Tahin ve pekmezle yaratıcı tabak","dish":"Levrek + tahin vinegretli yedi kule marul + tahinli patates püresi + pastırma tozu","r":"katildi","n":"Kübra'nın eleme adayı seçimi: Tolgahan (1. aday)"},{"d":"2026-11-02","g":"Pide","dish":"Kuşbaşılı pide + karamelize soğan","r":"katildi"},{"d":"2026-10-31","g":"Sıfır atık konsepti yaratıcı yemek","dish":"Sıfır atık konsepti yaratıcı yemek","r":"dokunulmazlik_kazandi","b":1,"n":"Tolgahan'ın bu haftaki 3. bireysel dokunulmazlığı"},{"d":"2026-10-29","g":"Yeşil mercimekle yaratıcı tabak","dish":"Yeşil mercimekle yaratıcı tabak","r":"dokunulmazlik_kazandi","b":1},{"d":"2026-10-28","g":"Tavuk bagetle yaratıcı yemek","dish":"Tavuk bagetle yaratıcı yemek","r":"dokunulmazlik_kazandi","b":1},{"d":"2026-10-27","g":"Lavaş kebabı","dish":"Lavaş kebabı","r":"katildi"},{"d":"2026-10-25","g":"Siyah sarımsaklı özgün tabak","dish":"Siyah sarımsaklı özgün tabak","r":"gecti"},{"d":"2026-10-16","g":"Banduma","dish":"Banduma","r":"katildi"},{"d":"2026-09-30","g":"Meyveli tart","dish":"Meyveli tart","r":"finalist","n":"Katılımcı kümesi webde yok; yalnızca finalistler biliniyor"},{"d":"2026-09-20","g":"Tahinle yaratıcı tabak","dish":"Tahinle yaratıcı tabak","r":"finalist","n":"Final grubu kaynakta 'Faruk vs Tolgahan / Kübra / Ayşe grubu' diye geçiyor — belirsiz"},{"d":"2026-09-11","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"katildi"},{"d":"2026-09-05","g":"Ana kadro seçimi — Tur 1","dish":"Mantarlı ravioli","r":"kazandi","b":1,"n":"4. yedek; yedekten ana kadroya girdi"}],"Şadi Altınay":[{"d":"2026-11-05","g":"Uskumru dolması — Somer Şef imza tabağı, düello formatı","dish":"Uskumru dolması","r":"kazandi","n":"Kaplama güzel, iç sululuğu güzel, dolgusu güzel; salatası tuzlu"},{"d":"2026-11-03","g":"Patatesli yemekler — düello formatı; her düello bir patates yemeği","dish":"Gatto di Patate","r":"kazandi","n":"Beraberliği sağlayan puan"},{"d":"2026-11-03","g":"Tahin ve pekmezle yaratıcı tabak","dish":"Tahin bazlı krep (ceviz-hurma-pekmez)","r":"katildi"},{"d":"2026-11-02","g":"Pide","dish":"Kavurmalı kaşarlı pide","r":"katildi","n":"Lezzetli ama biraz kuru"},{"d":"2026-10-30","g":"Burgu peyniriyle yaratıcı tabak","dish":"Burgu peyniriyle yaratıcı tabak","r":"finalist","n":"Katılımcı kümesi webde yok; yalnızca finalistler biliniyor"},{"d":"2026-10-19","g":"Kaptanlık oyunu","dish":"Tiramisu","r":"kazandi","b":1,"n":"Kaptanlık yemeğiyle Mavi kaptan seçildi"},{"d":"2026-10-13","g":"Fesenjan","dish":"Fesenjan","r":"dokunulmazlik_kazandi","b":1,"n":"Ayşe/Şadi takım yerleşimi kaynaklarda çelişiyor — teyit edilecek"},{"d":"2026-10-11","g":"Flying Noodles / Uçan Erişte","dish":"Flying Noodles / Uçan Erişte","r":"gecti","rk":"2"},{"d":"2026-10-11","g":"Mandalina ile yaratıcı tabak","dish":"Mandalina ile yaratıcı tabak","r":"finalist"},{"d":"2026-09-20","g":"Tahinle yaratıcı tabak","dish":"Tahinle yaratıcı tabak","r":"gecti","n":"Final grubu kaynakta 'Faruk vs Tolgahan / Kübra / Ayşe grubu' diye geçiyor — belirsiz"},{"d":"2026-09-11","g":"Patlıcanla yaratıcı tabak","dish":"Patlıcanla yaratıcı tabak","r":"katildi"}],"Faruk Garip":[{"d":"2026-09-20","g":"Tahinle yaratıcı tabak","dish":"Tahinle yaratıcı tabak","r":"finalist","n":"Final grubu kaynakta 'Faruk vs Tolgahan / Kübra / Ayşe grubu' diye geçiyor — belirsiz"},{"d":"2026-09-20","g":"Ördek bastilla","dish":"Ördek bastilla","r":"elendi","n":"Finaldeki diğer yarışmacıların sonucu webde net değil; yalnızca Faruk satırı açıldı"}],"Buse Baştan":[{"d":"2026-10-11","g":"Flying Noodles / Uçan Erişte","dish":"Flying Noodles / Uçan Erişte","r":"elendi"},{"d":"2026-10-11","g":"Mandalina ile yaratıcı tabak","dish":"Mandalina ile yaratıcı tabak","r":"finalist"},{"d":"2026-10-04","g":"Vitello Tonnato","dish":"Vitello Tonnato","r":"gecti"}]};

  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  /* ---- Türkçe tarih yardımcıları ---- */
  var MONTHS = {oca:1, "şub":2, mar:3, nis:4, may:5, haz:6, tem:7, "ağu":8, eyl:9, eki:10, kas:11, ara:12,
    ocak:1, "şubat":2, mart:3, nisan:4, "mayıs":5, haziran:6, temmuz:7, "ağustos":8, "eylül":9, ekim:10, "kasım":11, "aralık":12};
  function parseTrDate(str) {
    if (!str) return null;
    var m = String(str).match(/(\d{1,2})\s+([A-Za-zçğıöşüÇĞİÖŞÜ]+)(?:\s+(\d{4}))?/);
    if (!m) return null;
    var mon = MONTHS[m[2].toLowerCase()];
    if (!mon) return null;
    var y = m[3] ? parseInt(m[3], 10) : 2026;
    var d = parseInt(m[1], 10);
    return y + "-" + (mon < 10 ? "0" : "") + mon + "-" + (d < 10 ? "0" : "") + d;
  }
  function trDate(iso) {
    if (!iso) return "";
    var p = iso.split("-");
    var names = ["", "Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
    return parseInt(p[2], 10) + " " + names[parseInt(p[1], 10)] + " " + p[0];
  }
  function shortToFull(short) {
    for (var i = 0; i < CONTESTANTS.length; i++) {
      if (CONTESTANTS[i].short === short) return CONTESTANTS[i].name;
    }
    return null;
  }

  /* ---- Kayıtlardan hesaplanan yarışmacı istatistikleri ---- */
  function computeStats() {
    var stats = {};
    CONTESTANTS.forEach(function (c) {
      stats[c.name] = {
        dishes: (DISHES[c.name] || []).slice(),
        immunity: [],       // {date, label}
        captainBlue: [],    // {date, label} — Mavi kaptan (oyunu kazandı)
        captainRed: [],     // {date, label} — Kırmızı kaptan (seçildi)
        teamWins: 0,
        pota: []            // {date, week}
      };
    });
    // Galibiyet yazılarından bireysel dokunulmazlıklar
    CONTESTANTS.forEach(function (c) {
      (c.wins || []).forEach(function (w) {
        if (w.indexOf("bireysel dokunulmazlık") !== -1) {
          stats[c.name].immunity.push({ date: parseTrDate(w), label: w });
        }
      });
    });
    // Bölümlerden: kaptanlıklar, takım galibiyetleri, potalar.
    // NOT: kaptanlar ve takımlar haftanın kaptanlık bölümünde bir kez yazılır ama
    // aynı haftanın diğer bölümlerinde de tekrarlanır; bu yüzden hafta bazında
    // tekilleştirilir (yoksa 13. hafta Armağan'a 3 kaptanlık yazılırdı).
    var weekTeams = {};
    EPISODES.forEach(function (ep) {
      if (ep.teams && !weekTeams[ep.week]) weekTeams[ep.week] = ep.teams;
    });
    var seenCaptain = {}, seenPota = {};
    // En eski bölümden başlanır ki kaptanlık/pota tarihi haftanın ilk günü olsun.
    EPISODES.slice().reverse().forEach(function (ep) {
      if (ep.captains) {
        var kb = ep.week + "|M|" + ep.captains.blue;
        if (ep.captains.blue && stats[ep.captains.blue] && !seenCaptain[kb]) {
          seenCaptain[kb] = true;
          stats[ep.captains.blue].captainBlue.push({ date: ep.id, label: ep.date + " — Mavi kaptan" });
        }
        var kr = ep.week + "|K|" + ep.captains.red;
        if (ep.captains.red && stats[ep.captains.red] && !seenCaptain[kr]) {
          seenCaptain[kr] = true;
          stats[ep.captains.red].captainRed.push({ date: ep.id, label: ep.date + " — Kırmızı kaptan (seçildi)" });
        }
      }
      if (ep.games) {
        var teams = weekTeams[ep.week];
        if (teams) {
          ep.games.forEach(function (g) {
            var w = g.winner || "";
            var team = null;
            if (w.indexOf("Mavi Takım") === 0) team = "blue";
            else if (w.indexOf("Kırmızı Takım") === 0) team = "red";
            if (!team) return;
            (teams[team] || []).forEach(function (short) {
              var full = shortToFull(short);
              if (full && stats[full]) stats[full].teamWins++;
            });
          });
        }
      }
      if (ep.pot) {
        ep.pot.forEach(function (name) {
          if (stats[name]) {
            var kp = ep.week + "|" + name;
            if (!seenPota[kp]) {
              seenPota[kp] = true;
              stats[name].pota.push({ date: ep.id, week: ep.week });
            }
          }
        });
      }
    });
    return stats;
  }
  var STATS = null;
  function teamThisWeek(c) {
    for (var i = 0; i < EPISODES.length; i++) {
      var ep = EPISODES[i];
      if (!ep.teams) continue;
      if ((ep.teams.blue || []).indexOf(c.short) !== -1) return "blue";
      if ((ep.teams.red || []).indexOf(c.short) !== -1) return "red";
    }
    return null;
  }
  var RESULT_LABEL = {kazandi:"Kazandı", kaybetti:"Kaybetti", katildi:"Katıldı", gecti:"Geçti", ust_tur:"Üst tur", finalist:"Finalist", elendi:"Elendi", dokunulmazlik_kazandi:"Dokunulmazlık kazandı", ilk_6:"İlk 6"};
  function resultLabel(r, rk) {
    if (rk && (rk === "2." || rk === "3.")) return rk + " oldu";
    return RESULT_LABEL[r] || r || "—";
  }
  /* Transkriptten doğrulanan özel notlar (yalnızca kaynaklı olanlar) */
  var NOTES = {
    "Bahar Kaya": "13 hafta potaya hiç gitmedi — MasterChef rekoru (önceki rekor Onur, 11 hafta). Kaynak: 2 Kasım 2026 bölümü.",
    "Armağan Kırant": "2 kez Mavi kaptan oldu (profiterol, 6. hafta; pide, 2 Kasım). Renk körlüğü (diskromatopsi) olduğunu 5 Kasım kaptanlık düellosunda söyledi.",
    "Kübra Satılmış": "Şeflerin sözü (3 Kasım): 'Son 4 haftada en fazla çıkış yapan yarışmacı.'",
    "Şadi Altınay": "Göz ameliyatı oldu; katarakt ameliyatı yaklaşık 2 ay sonra (2 Kasım bölümünde söylendi). 3 Kasım'da Ayşe ile yaşadığı tartışma sonrası Mehmet Şef ikisini de stüdyodan çıkardı.",
    "Enes Vardar": "22 Ekim'de haftanın 1. adayı olmasına rağmen bireysel dokunulmazlık kazandı — ama potada kaldı.",
    "Muhammed Yahya Haliloğlu": "Hasan Alp'e cekete ulaşıp şampiyon olacağına dair söz verdi (2 Kasım bölümü).",
    "Ayşe Nur İnal": "3 Kasım'da potaya girdiğini o bölümde öğrenemedi — stüdyodan çıkarıldığı için.",
    "Nurten Ocak Tamer": "5 Kasım'da kariyerinin ilk bireysel dokunulmazlığını kazandı (zeytinyağlı kuru incir dolması).",
    "Tolgahan Özden": "28–31 Ekim haftasında 3 bireysel dokunulmazlık kazandı (tavuk baget, yeşil mercimek, sıfır atık).",
    "Eyüp Can Güneş": "Gelecek hafta gönüllü kırmızı kaptan olmaya hazır olduğunu söyledi (2 Kasım): '5 kişi olsun, bir kişi de ben onlara hediye edeyim.'"
  };

  /* ---- Bölüm kartları (v1 ile aynı içerik, yeni gruplama) ---- */
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
  function renderEpisodes() {
    var groups = [];
    EPISODES.forEach(function (ep) {
      var last = groups[groups.length - 1];
      if (last && last.week === ep.week) last.eps.push(ep);
      else groups.push({ week: ep.week, eps: [ep] });
    });
    el("episodes").innerHTML = groups.map(function (g, i) {
      return '<details class="week-group" data-week="' + esc(g.week) + '"' + (i === 0 ? " open" : "") + '>' +
        "<summary>" + esc(g.week) + " — " + g.eps.length + " bölüm</summary>" +
        g.eps.map(renderEpisode).join("") + "</details>";
    }).join("");
    el("ep-count").textContent = EPISODES.length + " bölüm / gün kaydı";
  }

  /* ---- Yarışmacılar ---- */
  var statusFilter = "all";
  var selectedName = null;
  function statusBadge(c) {
    if (c.status === "yarışıyor") return '<span class="badge badge-t">Yarışıyor</span>';
    if (c.status === "elendi") return '<span class="badge badge-out">Elendi' + (c.elimDate ? " — " + esc(c.elimDate) : "") + "</span>";
    return '<span class="badge badge-w">' + esc(c.status) + "</span>";
  }
  function renderContestants() {
    var q = (el("search").value || "").trim().toLowerCase();
    var list = CONTESTANTS.filter(function (c) {
      if (statusFilter === "active" && c.status !== "yarışıyor") return false;
      if (statusFilter === "out" && c.status === "yarışıyor") return false;
      return true;
    });
    if (q) {
      list = list.filter(function (c) {
        return (c.name + " " + (c.wins || []).join(" ")).toLowerCase().indexOf(q) !== -1;
      });
    }
    el("contestants-grid").innerHTML = list.map(function (c) {
      var st = STATS[c.name];
      var tw = teamThisWeek(c);
      var team = "";
      if (c.status === "yarışıyor" && tw) {
        team = ' <span class="team-chip ' + tw + '">' + (tw === "blue" ? "🔵 Mavi" : "🔴 Kırmızı") + " · bu hafta</span>";
      }
      var best = st.dishes.filter(function (d) { return d.b; }).length;
      return '<button type="button" class="contestant' + (selectedName === c.name ? " selected" : "") + '" data-name="' + esc(c.name) + '">' +
        "<h4>" + esc(c.name) + "</h4>" + statusBadge(c) + team +
        "<p class='c-meta'>" + (c.apron ? "Önlük " + c.apron + " · " : "") + esc(c.group) + "</p>" +
        '<div class="c-stats">' +
        '<span class="c-stat"><b>' + st.dishes.length + '</b> yemek</span>' +
        '<span class="c-stat"><b>' + st.immunity.length + '</b> dokunulmazlık</span>' +
        '<span class="c-stat"><b>' + (st.captainBlue.length + st.captainRed.length) + '</b> kaptanlık</span>' +
        '<span class="c-stat"><b>' + st.pota.length + '</b> pota</span>' +
        (best ? '<span class="c-stat">⭐ <b>' + best + '</b> en iyi tabak</span>' : "") +
        "</div>" +
        "<p class='hint'>Detay için tıklayın →</p></button>";
    }).join("") || "<p class='note'>Eşleşen yarışmacı yok.</p>";
    document.querySelectorAll("#contestants-grid .contestant").forEach(function (btn) {
      btn.addEventListener("click", function () { openDetail(btn.getAttribute("data-name")); });
    });
  }
  function buildTimeline(c) {
    var st = STATS[c.name];
    var evs = [];
    (c.wins || []).forEach(function (w) {
      evs.push({ date: parseTrDate(w) || "2026-01-01", label: w, kind: "win" });
    });
    st.captainBlue.forEach(function (x) { evs.push({ date: x.date, label: x.label + " — kaptanlık oyununu kazandı", kind: "captain" }); });
    st.captainRed.forEach(function (x) { evs.push({ date: x.date, label: x.label, kind: "captain" }); });
    st.pota.forEach(function (p) { evs.push({ date: p.date, label: "Potaya girdi (" + p.week + ")", kind: "pota" }); });
    if (c.elimDate) evs.push({ date: parseTrDate(c.elimDate) || "2026-01-01", label: "Elendi — " + c.elimDate, kind: "elim" });
    evs.sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
    var seen = {};
    return evs.filter(function (e) {
      var k = e.date + "|" + e.label;
      if (seen[k]) return false;
      seen[k] = true;
      return true;
    });
  }
  function openDetail(name) {
    var c = null;
    CONTESTANTS.forEach(function (x) { if (x.name === name) c = x; });
    if (!c) return;
    selectedName = name;
    var st = STATS[name];
    var panel = el("contestant-detail");
    var best = st.dishes.filter(function (d) { return d.b; });
    var tl = buildTimeline(c);
    var h = '<div class="detail-head"><div><h3>' + esc(c.name) + "</h3>" +
      "<p class='c-meta'>" + (c.apron ? "Önlük " + c.apron + " · " : "") + esc(c.group) +
      (c.status === "elendi" && c.elimDate ? " · Elendi: " + esc(c.elimDate) : "") + "</p>" + statusBadge(c) + "</div>" +
      '<button type="button" class="detail-close" id="detail-close">✕ Kapat</button></div>';
    h += '<div class="detail-tiles">' +
      tile(st.dishes.length, "yemek kaydı") +
      tile(st.immunity.length, "bireysel dokunulmazlık") +
      tile(st.captainBlue.length + st.captainRed.length, "kaptanlık") +
      tile(st.teamWins, "takım oyunu galibiyeti") +
      tile(st.pota.length, "pota (hafta)") +
      tile(best.length, "en iyi tabak") + "</div>";
    if (NOTES[name]) h += '<p class="record">📌 <strong>Not:</strong> ' + esc(NOTES[name]) + "</p>";
    if (st.captainBlue.length || st.captainRed.length) {
      h += "<h4>Kaptanlıklar</h4><ul class='wins-list'>" +
        st.captainBlue.map(function (x) { return "<li>🔵 " + esc(x.label) + "</li>"; }).join("") +
        st.captainRed.map(function (x) { return "<li>🔴 " + esc(x.label) + "</li>"; }).join("") + "</ul>";
    }
    if (st.immunity.length) {
      h += "<h4>Bireysel Dokunulmazlıklar</h4><ul class='wins-list'>" +
        st.immunity.map(function (x) { return "<li>🛡️ " + esc(x.label) + "</li>"; }).join("") + "</ul>";
    }
    var vp = voteProfile(name);
    if (vp.received.length || vp.given.length) {
      h += "<h4>Konsey Oyları</h4>";
      if (vp.received.length) {
        h += "<p><strong>Aldığı oylar:</strong></p><ul class='wins-list'>" +
          vp.received.map(function (v) { return "<li>🗳️ " + esc(v.label) + "</li>"; }).join("") + "</ul>";
      }
      if (vp.given.length) {
        h += "<p><strong>Aday gösterdiği:</strong></p><ul class='wins-list'>" +
          vp.given.map(function (v) { return "<li>🎯 " + esc(v.label) + "</li>"; }).join("") + "</ul>";
      }
      h += "<p class='note'>Bireysel konsey oyları yalnızca kamerada söylenenlerdir; söylenmeyen oylar bilinmiyor olarak kalır, toplamdan tahmin edilmez.</p>";
    }
    if (best.length) {
      h += "<h4>En İyi Tabakları</h4><ul class='wins-list'>" +
        best.map(function (d) { return "<li>⭐ <strong>" + esc(d.dish) + "</strong> <span class='dish-date'>(" + esc(trDate(d.d)) + " — " + esc(d.g) + ")</span></li>"; }).join("") + "</ul>";
    }
    if ((c.wins || []).length) {
      h += "<h4>Bilinen Galibiyetler</h4><ul class='wins-list'>" +
        c.wins.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul>";
    }
    h += "<h4>Yemekleri (" + st.dishes.length + " kayıt)</h4>";
    if (st.dishes.length) {
      h += "<ul class='dish-profile-list'>" + st.dishes.map(function (d) {
        return "<li><span class='dish-date'>" + esc(trDate(d.d)) + "</span> — <strong>" + esc(d.dish) + "</strong>" +
          " <span class='note'>(" + esc(d.g) + ")</span> — <strong>" + esc(resultLabel(d.r, d.rk)) + "</strong>" +
          (d.b ? " ⭐" : "") + (d.n ? "<br><span class='note'>" + esc(d.n) + "</span>" : "") + "</li>";
      }).join("") + "</ul>";
      h += "<p class='note'>Web haftalarında yalnızca kazananın adı bilindiği için bu liste eksik olabilir; transkripti olmayan bölümlerin yemekleri kayıtlarda yok.</p>";
    } else {
      h += "<p class='note'>Kayıtlarda yemeği yok — yalnızca adı geçen bölümlerde yer aldı.</p>";
    }
    if (tl.length) {
      h += "<h4>Zaman Çizelgesi</h4><ul class='timeline'>" +
        tl.map(function (e) {
          return "<li><span class='t-date'>" + esc(e.date && e.date !== "2026-01-01" ? trDate(e.date) : "") + "</span> " + esc(e.label) + "</li>";
        }).join("") + "</ul>";
    }
    panel.innerHTML = h;
    panel.hidden = false;
    renderContestants();
    var closeBtn = el("detail-close");
    if (closeBtn) closeBtn.addEventListener("click", closeDetail);
    try {
      if (typeof panel.scrollIntoView === "function") panel.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (e) { /* eski tarayıcı */ }
  }
  function tile(num, label) {
    return '<div class="tile"><b>' + num + "</b><span>" + esc(label) + "</span></div>";
  }
  function closeDetail() {
    selectedName = null;
    var panel = el("contestant-detail");
    if (panel) { panel.hidden = true; panel.innerHTML = ""; }
    renderContestants();
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
  function renderSummary() {
    var s = SITE;
    var totalDishes = 0;
    Object.keys(DISHES).forEach(function (k) { totalDishes += DISHES[k].length; });
    el("summary-strip").innerHTML =
      '<div class="stat"><span class="stat-num">' + s.remaining.length + '</span><span class="stat-label">yarışmacı kaldı</span><span class="stat-names">' + esc(s.remaining.join(", ")) + "</span></div>" +
      '<div class="stat"><span class="stat-num">' + s.eliminated.length + '</span><span class="stat-label">elendi</span><span class="stat-names">' +
      s.eliminated.map(function (e) { return esc(e.name) + " (" + esc(e.date) + ")"; }).join(", ") + "</span></div>" +
      '<div class="stat"><span class="stat-num">' + s.transcriptComplete.length + '</span><span class="stat-label">bölüm transkriptten tam</span><span class="stat-names">' + esc(s.transcriptComplete.join(", ")) + "</span></div>" +
      '<div class="stat"><span class="stat-num">' + totalDishes + '</span><span class="stat-label">yemek kaydı</span><span class="stat-names">data/dishes.csv — bir yarışmacı-yemek satırı = bir kayıt</span></div>';
    el("updated").textContent = "Son güncelleme: " + s.updated;
    el("site-note").textContent = s.note;
  }
  function renderDiscussions() {
    if (typeof DISCUSSIONS === "undefined") { el("discussions").innerHTML = "<p>Veri yüklenemedi.</p>"; return; }
    el("discussions").innerHTML = DISCUSSIONS.map(function (d) {
      return '<article class="discussion ' + (d.kind === "gündem" ? "gundem" : "") + '" data-search="' + esc((d.title + " " + d.participants.join(" ") + " " + d.summary).toLowerCase()) + '">' +
        "<h3>" + esc(d.title) + '<span class="kind-tag ' + (d.kind === "gündem" ? "gundem" : "tartisma") + '">' + (d.kind === "gündem" ? "Gündem" : "Tartışma") + "</span></h3>" +
        '<p class="disc-date">' + esc(d.date) + "</p>" +
        '<div class="chips">' + d.participants.map(function (p) { return '<span class="chip">' + esc(p) + "</span>"; }).join("") + "</div>" +
        "<p>" + esc(d.summary) + "</p>" +
        '<p class="disc-source">Kaynak: ' + esc(d.source) + "</p></article>";
    }).join("");
  }
  /* ---- Konsey Oyları ---- */
  function shortOf(full) {
    for (var i = 0; i < CONTESTANTS.length; i++) {
      if (CONTESTANTS[i].name === full) return CONTESTANTS[i].short;
    }
    return full;
  }
  /* Türkçe ek uyumu (kısa isimler için): -e hali ('e/'a) ve -i hali ('yi/'yı/'yu/'yü) */
  function lastVowel(s) {
    var vs = "aıoueiöü";
    s = String(s);
    for (var i = s.length - 1; i >= 0; i--) {
      if (vs.indexOf(s[i].toLowerCase()) !== -1) return s[i].toLowerCase();
    }
    return "e";
  }
  function datSuffix(s) {
    var v = lastVowel(s);
    return (v === "a" || v === "ı" || v === "o" || v === "u") ? "'a" : "'e";
  }
  function accSuffix(s) {
    var v = lastVowel(s);
    if (v === "a" || v === "ı") return "'yı";
    if (v === "e" || v === "i") return "'yi";
    if (v === "o" || v === "u") return "'yu";
    return "'yü";
  }
  function confLabel(conf) {
    var c = String(conf || "").toLowerCase();
    if (c.indexOf("yuksek") === 0) return "yüksek güven";
    if (c.indexOf("orta") === 0) return "orta güven";
    if (c.indexOf("dusuk") === 0) return "düşük güven";
    return "";
  }
  /* votes_cast kaydında confidence "birinci/ikinci oy" sırasıyla yazılır (ör. "yuksek/dusuk") */
  function ballotConf(rec, idx) {
    var parts = String(rec.confidence || "").split("/");
    if (parts.length > idx) return parts[idx].trim();
    return (parts[0] || "").trim();
  }
  function isPostResult(rec) {
    return (rec.note || "").indexOf("SONUÇ AÇIKLANDIKTAN SONRA") !== -1;
  }
  function ballotChip(voter, target, conf) {
    var who = voter === "belirsiz" ? "belirsiz" : shortOf(voter);
    return '<span class="ballot-chip">' + esc(who) + " → " + esc(shortOf(target)) +
      (conf ? ' <span class="conf">(' + esc(confLabel(conf)) + ")</span>" : "") + "</span>";
  }
  function renderVotes() {
    if (typeof VOTES === "undefined" || !VOTES.episodes) { el("votes").innerHTML = "<p>Veri yüklenemedi (votes.js bulunamadı).</p>"; return; }
    var h = "";
    /* "Boş oy" bulgusu */
    h += '<div class="vote-post"><h4>📌 "Boş oy" nedir?</h4><p style="margin:0">Yarışmacıların "boş oy" dediği oy, ciddiye alınmayan bir isme yazılan <strong>göstermelik</strong> oydur ve toplamda <strong>sayılır</strong> — gerçek boş pusula değildir. Kanıt: 5 Kasım\'da Bahar\'ın Nilay\'a "boş oy" dediği oy, Nilay\'ın toplamındaki <strong>1 oy</strong> olarak sayıldı.</p></div>';
    VOTES.episodes.forEach(function (ep) {
      var dateTr = trDate(ep.date);
      var names = Object.keys(ep.totals).sort(function (a, b) { return ep.totals[b] - ep.totals[a]; });
      var max = names.length ? ep.totals[names[0]] : 0;
      var chips = [], postChips = [], unknownCounted = 0, unknownPost = 0;
      (ep.votes_cast || []).forEach(function (rec) {
        var post = isPostResult(rec);
        rec.votes.forEach(function (t, i) {
          if (t === "bilinmiyor") { if (post) unknownPost++; else unknownCounted++; return; }
          if (post) postChips.push(ballotChip(rec.voter, t, ballotConf(rec, i)));
          else chips.push(ballotChip(rec.voter, t, ballotConf(rec, i)));
        });
      });
      h += '<article class="vote-ep" data-search="' + esc(JSON.stringify(ep).toLowerCase()) + '">';
      h += '<header class="ep-head"><div><div class="ep-date">' + esc(dateTr) + " · Konsey · " + esc(ep.team) + ' takım</div>' +
        "<h3>" + esc(dateTr) + " Konsey Oylaması</h3></div>" +
        '<span class="badge badge-t">✅ transkript</span></header>';
      h += '<h4>Toplamlar <span class="dur">(' + ep.totals_sum + " sayılan oy)</span></h4>";
      h += '<div class="vote-bars">' + names.map(function (n, i) {
        var pct = max ? Math.round(ep.totals[n] / max * 100) : 0;
        return '<div class="vote-bar-row' + (i === 0 ? " top" : "") + '"><span class="vote-bar-name">' + esc(shortOf(n)) + '</span>' +
          '<span class="vote-bar-track"><span class="vote-bar-fill" style="width:' + pct + '%"></span></span>' +
          '<span class="vote-bar-count"><b>' + ep.totals[n] + "</b> oy</span></div>";
      }).join("") + "</div>";
      h += '<p class="winner-line">🎯 ' + esc(ep.outcome) + "</p>";
      h += "<h4>Söylenen bireysel oylar</h4>";
      h += chips.length ? '<div class="ballot-chips">' + chips.join("") + "</div>" : "<p class='note'>Kamerada söylenen bireysel oy yok.</p>";
      if (unknownCounted) h += '<p><span class="ballot-chip unknown">bilinmiyor (' + unknownCounted + " oy)</span> <span class='note'>— kamerada söylenmedi, toplamdan tahmin edilmedi.</span></p>";
      if (postChips.length || unknownPost) {
        h += '<div class="vote-post"><h4>⏰ Sonuç açıklandıktan sonra kullanılan oylar <span class="dur">(toplamlara dahil değil)</span></h4>' +
          (postChips.length ? '<div class="ballot-chips">' + postChips.join("") + "</div>" : "") +
          (unknownPost ? '<p><span class="ballot-chip unknown">bilinmiyor (' + unknownPost + " oy)</span></p>" : "") + "</div>";
      }
      if (ep.coverage_note) h += '<p class="vote-coverage">' + esc(ep.coverage_note) + "</p>";
      if (ep.source) h += '<p class="vote-source">Kaynak: ' + esc(ep.source) + "</p>";
      h += "</article>";
    });
    /* Dokunulmazlık kazananının aday seçimleri */
    if (VOTES.dokunulmazlik_secimleri && VOTES.dokunulmazlik_secimleri.length) {
      var picks = VOTES.dokunulmazlik_secimleri;
      h += '<div class="vote-sub" data-search="' + esc(JSON.stringify(picks).toLowerCase()) + '"><h3>Dokunulmazlık Kazananının Aday Seçimleri</h3>' +
        '<p class="note">Bireysel dokunulmazlığı kazanan yarışmacı, potaya gidecek bir aday seçer. ' + picks.length + " kayıt.</p>" +
        '<div class="table-wrap"><table class="dish-table"><thead><tr><th>Tarih</th><th>Kazanan</th><th>Aday gösterdiği</th><th>Kaynak</th></tr></thead><tbody>' +
        picks.map(function (p) {
          return "<tr><td>" + esc(trDate(p.date)) + "</td><td><strong>" + esc(p.winner) + "</strong></td><td><strong>" + esc(p.picked) + "</strong>" +
            (p.confidence === "dusuk" ? ' <span class="rank">❓ teyit edilecek</span>' : "") +
            (p.note ? "<br><span class='note'>" + esc(p.note) + "</span>" : "") + "</td><td>" +
            (p.source && p.source.indexOf("transkript") === 0 ? "✅ transkript" : "🌐 web") + "</td></tr>";
        }).join("") + "</tbody></table></div></div>";
    }
    /* Kaptan beraberlik kararları */
    if (VOTES.kaptan_beraberlik_kararlari && VOTES.kaptan_beraberlik_kararlari.length) {
      var ties = VOTES.kaptan_beraberlik_kararlari;
      h += '<div class="vote-sub" data-search="' + esc(JSON.stringify(ties).toLowerCase()) + '"><h3>Kaptan Beraberlik Kararları</h3>' +
        '<p class="note">Konsey oylamasında eşitlik çıkarsa kaptan karar verir. ' + ties.length + " kayıt.</p>" +
        '<div class="table-wrap"><table class="dish-table"><thead><tr><th>Tarih</th><th>Kaptan</th><th>Eşitlik</th><th>Seçtiği</th></tr></thead><tbody>' +
        ties.map(function (t) {
          return "<tr><td>" + esc(trDate(t.date)) + "</td><td><strong>" + esc(t.captain) + "</strong></td><td>" + esc(t.tie) + "</td><td><strong>" + esc(t.picked) + "</strong></td></tr>";
        }).join("") + "</tbody></table></div></div>";
    }
    if (VOTES.web_konsey_notu) h += '<p class="note">' + esc(VOTES.web_konsey_notu) + "</p>";
    el("votes").innerHTML = h;
  }
  /* Bir yarışmacının konsey kaydı — VOTES'tan çalışma anında hesaplanır, elle yazılmaz */
  function voteProfile(name) {
    var received = [], given = [];
    if (typeof VOTES === "undefined") return { received: received, given: given };
    (VOTES.episodes || []).forEach(function (ep) {
      if (ep.totals && ep.totals[name]) {
        received.push({ date: ep.date, label: trDate(ep.date) + " konseyi — " + ep.totals[name] + " oy aldı" });
      }
      (ep.votes_cast || []).forEach(function (rec) {
        if (rec.voter !== name) return;
        var post = isPostResult(rec);
        rec.votes.forEach(function (t, i) {
          var suffix = post ? " (sonuç açıklandıktan sonra — toplamlara dahil değil)" : "";
          if (t === "bilinmiyor") {
            given.push({ date: ep.date, label: trDate(ep.date) + " konseyi — 1 oyu bilinmiyor" + suffix });
          } else {
            given.push({ date: ep.date, label: trDate(ep.date) + " konseyi — " + shortOf(t) + datSuffix(shortOf(t)) + " oy verdi" + suffix + " (" + confLabel(ballotConf(rec, i)) + ")" });
          }
        });
      });
    });
    (VOTES.dokunulmazlik_secimleri || []).forEach(function (p) {
      if (p.picked === name) received.push({ date: p.date, label: trDate(p.date) + " — " + p.winner + "'ın dokunulmazlık seçimiyle potaya girdi" + (p.confidence === "dusuk" ? " (teyit edilecek)" : "") });
      if (p.winner === name) given.push({ date: p.date, label: trDate(p.date) + " — dokunulmazlığı kazanıp " + shortOf(p.picked) + accSuffix(shortOf(p.picked)) + " potaya gönderdi" + (p.confidence === "dusuk" ? " (teyit edilecek)" : "") });
    });
    (VOTES.kaptan_beraberlik_kararlari || []).forEach(function (t) {
      if (t.picked === name) received.push({ date: t.date, label: trDate(t.date) + " — oylama eşitliğinde kaptan " + shortOf(t.captain) + " onu seçti" });
      if (t.captain === name) given.push({ date: t.date, label: trDate(t.date) + " — kaptan olarak oylama eşitliğinde " + shortOf(t.picked) + accSuffix(shortOf(t.picked)) + " seçti" });
    });
    received.sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
    given.sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
    return { received: received, given: given };
  }
  function renderStats() {
    function top(list, key, label, n) {
      var arr = list.filter(function (x) { return x[key] > 0; }).sort(function (a, b) { return b[key] - a[key]; }).slice(0, n || 5);
      if (!arr.length) return '<div class="stat-board"><h3>' + esc(label) + '</h3><p class="note">Kayıtlarda yok.</p></div>';
      return '<div class="stat-board"><h3>' + esc(label) + "</h3><ol>" +
        arr.map(function (x) { return "<li><strong>" + esc(x.name) + "</strong> — <b>" + x[key] + "</b></li>"; }).join("") + "</ol></div>";
    }
    var dishRows = CONTESTANTS.map(function (c) { return { name: c.name, n: (DISHES[c.name] || []).length }; });
    var immRows = CONTESTANTS.map(function (c) { return { name: c.name, n: STATS[c.name].immunity.length }; });
    var capRows = CONTESTANTS.map(function (c) { return { name: c.name, n: STATS[c.name].captainBlue.length }; });
    var potaRows = CONTESTANTS.map(function (c) { return { name: c.name, n: STATS[c.name].pota.length }; });
    var twRows = CONTESTANTS.map(function (c) { return { name: c.name, n: STATS[c.name].teamWins }; });
    el("stats").innerHTML =
      top(dishRows, "n", "En çok yemek kaydı") +
      top(immRows, "n", "En çok bireysel dokunulmazlık") +
      top(capRows, "n", "En çok Mavi kaptanlık (oyunu kazanan)") +
      top(potaRows, "n", "En çok pota (hafta)") +
      top(twRows, "n", "En çok takım oyunu galibiyeti (kayıtlı)") +
      '<div class="record-card"><h3>🏆 Rekor: Bahar Kaya — 13 hafta potasız</h3>' +
      "<p>Bahar Kaya, 13 haftadır eleme potasına hiç girmedi — MasterChef Türkiye tarihinde bir ilk. Önceki rekor Onur'a aitti (11 hafta). Kaynak: 2 Kasım 2026 bölümü transkripti.</p>" +
      "<p>Not: 5 Kasım'da Nurten'in seçimiyle Bahar ilk kez potaya girdi (13. haftanın 3. adayı).</p></div>";
  }
  function applySearch() {
    var q = (el("search").value || "").trim().toLowerCase();
    var epShown = 0, discShown = 0, voteShown = 0;
    document.querySelectorAll("#episodes .ep").forEach(function (card) {
      var hit = !q || card.getAttribute("data-search").indexOf(q) !== -1;
      card.style.display = hit ? "" : "none";
      if (hit) epShown++;
    });
    document.querySelectorAll("#episodes .week-group").forEach(function (g) {
      var anyVisible = g.querySelectorAll(".ep:not([style*='none'])").length > 0;
      if (q) g.open = anyVisible;
      else g.open = g.getAttribute("data-week") === EPISODES[0].week;
    });
    document.querySelectorAll("#discussions .discussion").forEach(function (card) {
      var hit = !q || card.getAttribute("data-search").indexOf(q) !== -1;
      card.style.display = hit ? "" : "none";
      if (hit) discShown++;
    });
    document.querySelectorAll("#votes .vote-ep, #votes .vote-sub").forEach(function (card) {
      var hit = !q || card.getAttribute("data-search").indexOf(q) !== -1;
      card.style.display = hit ? "" : "none";
      if (hit) voteShown++;
    });
    renderContestants();
    var anyContestant = document.querySelectorAll("#contestants-grid .contestant").length;
    el("search-info").textContent = q ? epShown + " bölüm · " + anyContestant + " yarışmacı · " + discShown + " tartışma · " + voteShown + " konsey kaydı eşleşti — '" + el("search").value.trim() + "'" : "";
    el("contestants-info").textContent = q ? anyContestant + " yarışmacı eşleşti" : "";
  }
  function init() {
    if (typeof SITE === "undefined" || typeof EPISODES === "undefined" || typeof CONTESTANTS === "undefined") {
      el("episodes").innerHTML = "<p>Veri yüklenemedi (data.js bulunamadı).</p>";
      return;
    }
    STATS = computeStats();
    renderSummary();
    renderContestants();
    renderApron();
    renderEpisodes();
    renderDiscussions();
    renderVotes();
    renderStats();
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
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && selectedName) closeDetail();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
