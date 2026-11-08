# MasterChef Türkiye 2026 — Dish-Level Dataset: Schema & Guide

**Files:** `dishes.csv` (2,712 rows) · `dishes.json` (same rows + header block) · `contestants.csv` (33 main-cast + reserves) · `build_dishes.py` (generator for the ORIGINAL 338 rows — the merged dataset is built by `transcripts/work/merge_dishes.py` + `normalize_names.py`, do not re-run build_dishes.py over it)
**Built:** 2026-11-08 (full-season merge) · **Encoding:** UTF-8 · **Language:** Turkish (dish names in original language)
**Rule:** No dish, ingredient, or winner was invented. Every row is traceable to one of the sources below. Where a dish or a participant set is unknown, **no row was created** — the gap is listed in COVERAGE instead.

## Sources

| source value | Meaning |
|---|---|
| `transkript_DD.MM.YYYY` | Full-season compact transcript file (`tum_kompakt.txt`, 132 episodes, 13.06–07.11.2026); 27.10.2026 rows come from the separate 590-page batch (episode missing from the compact file) |
| `web` | LISTE_WEB.md — TV8, yemek.com, news sites. YouTube was NOT used. Only 24 web rows survive (reserve entries 15.08/18.08/05.09 + immunity participants whose dishes the transcripts never named) |

**source_confidence:** `yuksek` = transcript · `orta` = web news / inference from transcript context · `dusuk` = single weak source (e.g. Instagram summary) or unclear final group.

## Columns (dishes.csv / dishes.json)

| Column | Definition |
|---|---|
| `episode_date` | YYYY-MM-DD (episode air date) |
| `week_no` | 0 = ana kadro seçimleri (Jul–Aug, before weekly format); 1–13 = weekly format (Hafta 1 = 10–16 Aug … Hafta 13 = 2–8 Nov) |
| `episode_type` | `ana_kadro_secim` / `kaptanlik` / `takim_oyunu` / `bireysel_dokunulmazlik` / `odul_oyunu` / `eleme` / `secim` (audition/early selection rounds, Jun–Jul — 3rd-round duels and earlier) — plus `kurtarma oyunu` games are typed `bireysel_dokunulmazlik` (rescue game: the winner saves himself from the pot; the show counts it as an immunity, e.g. 29 + 31 Oct) |
| `game_name` | Game label (e.g. `Uskumru dolması — Somer Şef imza tabağı, düello formatı`, `Tahin ve pekmezle yaratıcı tabak`, `Ali Nazik`) |
| `round_no` | Round within the game (duel number, Tur 1/2, eleme Tur 1/2) |
| `contestant` | Canonical full name. `Elif Nilay Özgen` is always written in full (alias: Nilay). Selection-round workers used first names only; these were normalized to canonical full names where identity is established (see `transcripts/work/normalize_names.py`). NOT normalized (ambiguous, left as-is): `Batuhan` (Group 3, 29.07–02.08 — a different Batuhan, not Nazikoğlu), `Tolga` (16.07 Bursa Cantık), `Gülbahar` (07.07 — name itself ❓), `Hatice` (Group 1 — three Hatices exist), `Tolga Göker` / `Tolga Döker`, `Esra` (surname unknown). Surnames still unknown for Mine, Fazlı (→ Fazlı Bulut where identified), Beyhan (→ Beyhan Aysal), Nevzat (→ Nevzat Güzel), Fatma (→ Fatma Yılmaz), Hatice. `Hami Efe Hanedan` surname unconfirmed. |
| `contestant_team` | `Mavi` / `Kırmızı` / `yok` (no team yet — selection phase, captaincy/prize games, elimination pot). Spelling normalized 2026-11-08 (`Kirmizi`/`kirmizi`/`mavi` → `Kırmızı`/`Mavi`). EXCEPTION: the 29 Oct Cumhuriyet gala assigned teams PER DISH (e.g. Şadi, a week-12 Blue player, cooked the küşleme on the Mavi side per the transcript; Tolgahan cooked the levrek for Kırmızı in the same game) — gala rows follow the transcript's per-dish assignment, not the weekly roster. |
| `opponent` | Duel opponent, or empty. Only filled for head-to-head duels. |
| `dish_name` | **Original name as spoken/written.** Turkish dish in Turkish (`Uskumru dolması`, `Hıngal`); foreign dish in its original name (`Fesenjan`, `Vitello Tonnato`, `Crespelle`, `filetto di manzo con purè di patate`, `Gatto di Patate`, `Zwetschgenknödel`, `Crème brûlée`, `Tiramisu`, `Ratatuy` — spelled as in the source). Yaratıcı dishes: descriptive name + key details in `dish_details`. |
| `dish_category` | One of: `geleneksel` (traditional Turkish) · `yaratici` (creative, theme-based) · `sef_imza` (a judge's signature dish) · `yabanci_mutfak` (foreign cuisine) · `tatli` (dessert) · `corba` (soup) · `hamur_isi` (pastry/börek) · `makarna_hamur` (pasta/dumpling) · `zeytinyagli` (olive-oil dish) |
| `main_ingredient` | Primary ingredient (e.g. `uskumru`, `patates`, `tahin`, `kuzu`, `levrek`, `kuru incir`). `çeşitli` where the game is a concept (sıfır atık). |
| `dish_details` | Ingredients, technique, judges' notes — concise, in Turkish. |
| `time_limit_min` | Minutes, when stated in the source; empty otherwise. |
| `result` | `kazandi` (won the duel/game) · `kaybetti` (lost the duel) · `gecti` (survived / safe in elimination, or advanced past the round) · `elendi` (eliminated) · `ust_tur` (advanced to next round) · `finalist` (reached the final of that game) · `2.` / `3.` / `4.` / `5.` / `6.` / `7.` / `8.` (ranked in an individual game) · `ilk_6` (ranked in the top 6 of a ranked game, winner excluded — used for the 2 Nov captain game where ranks 1–6 were announced) · `dokunulmazlik_kazandi` (won individual immunity — includes rescue-game winners, 29 + 31 Oct) · `katildi` (took part; no win/loss recorded for that contestant in that game) · `bilinmiyor` (the row's outcome could not be heard in the transcript, e.g. 13 Oct Jalebi duel) · `berabere` (a duel ended tied) |
| `rank_in_game` | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 when the judges ranked the contestants; empty otherwise. |
| `is_best_dish` | `evet` only when (a) judges explicitly called it the best/most successful dish of the game, or (b) the contestant won that game outright with that dish (individual immunity, captain game, ana kadro final). Duel winners are `hayir` — a duel win is head-to-head, not "best dish of the game". Elimination survival is `hayir` unless explicitly "en iyi" (e.g. Nurten, Flying Noodles 11 Oct). |
| `score_note` | Team score progression (e.g. `Mavi 2-1`), prize (`Ödül: 100.000 TL`), or outcome note. |
| `source` / `source_confidence` | See Sources above. |
| `notes` | Caveats: inferences, contradictions, ASR garbles, missing participant sets. |

## Row-construction rules (so the data stays honest)

1. **One row per contestant-dish.** In games where everyone cooks the *same* dish (individual immunity, elimination rounds, captain game), one row is created per *known* participant.
2. **Participant set must be known.** Team-game menus whose cooks are unattributed get **no rows** — they are listed under COVERAGE as "known menu, cooks unattributed".
3. **Winner/finalist-only web records:** where the web names only the winner (e.g. 02 Sep Armağan/incir, 30 Sep Emre/meyveli tart — the latter corrected by transcript: Tolgahan won), only the named contestants get rows.
4. **Inferences are flagged** in `notes` with `source_confidence` `orta`/`dusuk` (e.g. 5 Nov Tolga–Enes duel winner, 3 Nov Muhammed 2nd place, Batuhan = somon bayıldı, Şiringül = ciğer).
5. **Rescue games (`Kurtarma oyunu`) are typed `bireysel_dokunulmazlik`.** The winner saves himself from the pot; the show counts it as an immunity ("haftanın 3. bireysel dokunulmazlığı", 29 + 31 Oct). The 29 Oct game is NOT an immunity in format (only 4 played: Tolgahan, Muhammed, Armağan + volunteer Enes) — the losers went to the pot automatically, no council.
6. **Team validation:** every `takim_oyunu` / `bireysel_dokunulmazlik` row's `contestant_team` was checked against the team rosters (`transcripts/work/teams_weeks1-12.csv`, with the week-1 and week-8 table errors corrected per transcript — see `transcripts/work/MERGE_DECISIONS.md`). 0 mismatches remain. EXCEPTION: the 29 Oct Cumhuriyet gala, where the transcript assigns teams per dish.
7. **Name normalization:** selection-round first names were mapped to canonical full names only where identity is established (`transcripts/work/normalize_names.py`); ambiguous names were left as-is and listed in the `contestant` row above.

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

Suggested CPT estimation: count rows per (parent state → result) with Laplace smoothing; the dataset now has 2,712 rows over 242 contestants (main cast 26 with 15–123 rows each), so pool by category/ingredient first and add contestant-level priors only where a contestant has ≥ 5 rows. **Do not treat `web` rows and `transcript` rows as equal evidence** — weight by `source_confidence` (yuksek = 1.0, orta = 0.6, dusuk = 0.3) or model confidence as a separate node.

## Knowledge-graph suggestion

Node types and edges:

- **Contestant** —(COOKED)→ **Dish** —(IN_GAME)→ **Game** —(IN_EPISODE)→ **Episode** (date, week_no)
- **Contestant** —(MEMBER_OF)→ **Team** (Mavi/Kırmızı, per week — team membership changes weekly; model as dated edges)
- **Contestant** —(DUELLED)→ **Contestant** (via `opponent`; edge property: winner)
- **Dish** —(HAS_MAIN_INGREDIENT)→ **Ingredient**; **Dish** —(HAS_CATEGORY)→ **Category**
- **Contestant** —(WON_IMMUNITY)→ **Episode**; **Contestant** —(ELIMINATED_IN)→ **Episode**
- **Dish** —(JUDGE_NOTE)→ **Note** (free text in `dish_details`/`notes`)
- Candidate edge types for later: **Dish** —(VARIANT_OF)→ **Dish** (e.g. uskumru dolması vs Uskumru Tarator); **Contestant** —(SENT_TO_POT)→ **Contestant** (immunity picks; recorded in `notes` for now, not as rows).

## COVERAGE (2026-11-08 full-season merge)

**2,712 rows · 242 distinct contestants · 136 dates with rows (13.06–07.11.2026).**
Transcript rows: 2,688 · web rows: 24 (only where no transcript row exists).
Confidence: yuksek 2,438 · orta 250 · dusuk 24.
By episode_type: takim_oyunu 1,022 · secim 420 · ana_kadro_secim 391 · bireysel_dokunulmazlik 370 · kaptanlik 187 · odul_oyunu 181 · eleme 141.
By result: kazandi 655 · kaybetti 556 · katildi 516 · gecti 351 · elendi 322 · ust_tur 104 · dokunulmazlik_kazandi 52 · 2. 37 · 3. 34 · finalist 28 · 4. 15 · bilinmiyor 12 · 5. 8 · ilk_6 7 · 6. 7 · berabere 4 · 7. 3 · 8. 1.

### Dish-complete episodes
All 132 episodes in the compact transcript file were extracted (13.06–07.11.2026) + 27.10.2026 from the separate 590-page batch (that episode is missing from the compact file). Where the transcript named a dish and its cook, there is a row; where it did not, there is none (see "Known menus, cooks unattributed" below).

### Not in the file (coverage gaps)
- **15–19 June 2026:** no episodes in the compact file (132 = 14.06, 131 = 20.06).
- **27 October 2026:** episode 011 missing from the compact file — kept from the 590-page batch (patlıcan team game, Mavi 6–3, immunity Muhammed, candidates Nurten + Enes).
- **8 November 2026 elimination:** not in the file (had not aired when the file was made). Pot for 8 Nov = 8: Şadi, Kübra, Tolgahan, Ayşe, Bahar, Eyüp Can, Muhammed, Tolga.
- **23 October 2026:** no episode aired. **15 / 18 August, 26 August, 5 September:** no episodes (reserve entries 15.08 Recep, 18.08 Emre, 05.09 Tolgahan are web-only rows).

### Known menus, cooks unattributed (NO rows — the transcript never named the cooks)
28 Oct düğün menüsü (çorba, kabak borani, içli köfte), 30 Oct balıklı tajin, 6 Nov zeytinyağlı portakallı kereviz, 25 Sep kerevizde Mavi aşçı, 23 Sep mısır unlu helva yapan, 26 Sep sıfır atıkta 4. sıra + 2 tabak, 2 Eki sıfır atıkta 2 tabak, 3 Eki Nurten'in vişne kebabı, 1 Eki beyinde 4 tabak, 30 Sep takım oyunu + meyveli tart süreleri. Also: 21 Sep lahmacun 3.'sü, 29 Sep çiğ köfte 5./6. sıraları, Buse'nin lahmacunu (21 Sep) — bilinmiyor.

### Eliminations (main cast, transcript-verified)
Demirhan 16.08 · Gülbahar 23.08 · Simge 30.08 · Koray 06.09 · Cansu 13.09 · Faruk 20.09 · Recep 27.09 · Batuhan 04.10 · Buse 11.10 · Şiringül 18.10 · Emre 25.10 · Hasan Alp 01.11. Remaining 14 as of 2 Nov: Armağan, Muhammed, Tolga, Kübra, Şadi, Tolgahan, Ayşe, Şükran, Bahar, Burçin, Nurten, Eyüp Can, Nilay, Enes.

## Per-contestant row counts (dishes.csv, 2026-11-08 merge)

| Contestant | Rows | Contestant | Rows | Contestant | Rows |
|---|---|---|---|---|---|
| Armağan Kırant | 123 | Şükran Boyraz | 119 | Enes Vardar | 118 |
| Muhammed Yahya Haliloğlu | 115 | Hasan Alp Karabacak | 112 | Ayşe Nur İnal | 112 |
| Kübra Satılmış | 113 | Tolga Çakuş | 113 | Şadi Altınay | 106 |
| Nurten Ocak Tamer | 104 | Eyüp Can Güneş | 104 | Burçin Oğuz | 100 |
| Elif Nilay Özgen | 99 | Tolgahan Özden | 94 | Emre İrkilmez | 96 |
| Şiringül Kaya | 79 | Batuhan Nazikoğlu | 79 | Recep Batur | 63 |
| Gülbahar Meşe | 24 | Simge Çıtak | 25 | Koray Saygı | 36 |
| Cansu Şöhret | 23 | Buse Baştan | 36 | Faruk Garip | 23 |
| Demirhan Ali Tekin | 15 | Bahar Kaya | 96 |  |  |

Selection-round participants (non-qualifiers) with ≥5 rows: Mine (11), Sultan Yılmaz (11), Sercan Okyay (11), Betül Altay (11), Nesibe Yalçın (11), Fatma Yılmaz (10), Hami Efe Hanedan (10), Beyhan Aysal (10), Nevzat Güzel (10), Yalçın Ballı (10), Asuman Esmeray (10), Fatmanur Yazıcı (10), Fazlı Bulut (9), Mertcan Şirin (9), Olabi Laval (9), Nurettin (9), Ferdi Yaka (9), Hatice (8), Üveys Kürşat Eroğlu (8), Batuhan (8), Beyrin Demirkol (8), Şerif (8), Hüseyin Kekeçim (8), Esra (8), Yaren (7), İrem (7), Temanur Korkmaz (7), Türkan (6), Furkan (6).

Total distinct contestants: 242 (33 main-cast + reserves + selection hopefuls).

## Konsey oyları — votes.csv / votes.json / votes.js

Kim kime oy verdi. Üç dosya aynı veriyi tutar: `votes.csv` (144 satır), `votes.json` (başlıklı yapı),
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

### Bilinenler (transkript) — 15–24 Ekim 2026
24 Ekim–1 Kasım 2026 transkriptleriyle eklendi (7 Kasım 2026). 15–22 Ekim oyları **27 Ekim bölümü açılış özetinden** — Armağan, Muhammed'in notlarından okudu; **ikinci el, orta güven**, yarışmacılar bazı ifadeleri canlı tartışıyor. 24 Ekim oyları doğrudan 24 Ekim transkriptinden.
- **15 Ekim 2026 (10. hafta 2. konsey, takım bilinmiyor):** söylenen 12 oy (6 seçmen × 2). Kübra 5, Nurten 4, Ayşe 2, Bahar 1. Toplam açıklanmadı. Seçmen kümesi tam bilinmiyor (10. hafta takım listesi transkriptte yok).
- **16 Ekim 2026 (10. hafta 3. konsey, takım bilinmiyor):** söylenen 2 oy — Tolga→Emre, Tolga→Kübra. Sonuç bu transkriptte geçmiyor.
- **20 Ekim 2026 (11. hafta 1. konsey, Kırmızı):** söylenen 1 oy — Burçin→Nilay ("boş oy" olarak). Nilay'ın gün toplamı 3 oy olarak açıklandı. 15 oy bilinmiyor.
- **21 Ekim 2026 (11. hafta 2. konsey, Mavi):** söylenen 10 oy; 6 bilinmiyor. Eyüp Can 4 (en çok), Şükran 2, Kübra 2 ("boş oy"), Tolga 1, Muhammed 1. Toplam açıklanmadı; webdeki eşitlik iddiası transkriptle doğrulanmadı.
- **22 Ekim 2026 (11. hafta 3. konsey, Kırmızı):** söylenen 9 oy; 7 bilinmiyor. Burçin 4 (en çok), Tolgahan 2, Hasan Alp 2, Nurten 1. "Tolga" = Tolgahan Özden (24 Eki 7:37'de doğrulandı).
- **24 Ekim 2026 (11. hafta 4. konsey, Kırmızı):** toplam açıklandı — Hasan Alp 5, Armağan 5, Nurten 2 (=12). 16 beklenen oyun 4'ü transkriptte yok. Eşitliği kaptan Enes bozdu ("Hasan diyorum", 2:18:43); Hasan Alp 8. aday oldu. 2 belirsiz oy (konuşmacı ASR'dan tespit edilemedi).

### Düzeltme (6 Kasım 2026) — 3 Kasım konuşmacısı
İlk sürümde 3 Kasım 1:57:29'daki "O kişi sensin Şadi abi" konuşması yanlışlıkla Nilay'a yazılmıştı.
Doğrusu **Ayşe→Şadi**: sıra anonsu "Sıra şimdi Ayşe'da" diyor ve Nilay o hafta Kırmızı takımdaydı,
Mavi konseyinde oy kullanamaz. Konuşmacı tespiti sıra anonsuna dayandığı için güven **orta** (ASR'da
konuşmacı etiketi yok). Ayrıca 5 Kasım özetinde geçen "Muhammed ve Şadi'ye oy vererek" cümlesindeki
oy verenin kim olduğu ASR'dan tespit edilemedi — satır olarak eklenmedi.

### Web haftaları
Konsey TOPLAMLARI hiçbir web kaynağında yazmıyor — yalnızca sonuç (potaya giden aday) biliniyor. Bu
yüzden web haftaları için konsey satırı yok; yalnızca dokunulmazlık kazananının seçimi (23 satır) ve
kaptan beraberlik kararları (5 satır: 15 Eki Kübra→Nurten, 17 Eki Muhammed→Enes, 21 Eki Şadi→Eyüp Can,
24 Eki Enes→Hasan Alp, 27 Eki Hasan Alp→Enes) listelendi.

### votes.csv sütunları
`episode_date, vote_type, voter, voted_for, source, source_confidence, notes` —
vote_type: `konsey` (gizli pusula oyu) · `dokunulmazlik_secimi` (dokunulmazlık kazananının aday seçimi) ·
`kaptan_beraberlik` (oylama eşitliğinde kaptan kararı). `voted_for` = `bilinmiyor` ise oy atıldığı
söylendi ama hedef tespit edilemedi; `belirsiz` (voter) ise hedef söylendi ama konuşmacı ASR'dan
tespit edilemedi. Her satırın `notes` alanında dayandığı transkript zaman damgası var.
