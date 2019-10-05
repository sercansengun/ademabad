// Saf ismin 2 parça olma şansı (%90), yoksa üç parça üretilir
var twosyllables = 0.90;

// Başta bir sıfat olma şansı (50%)
var adjectives = 0.50;

// Başta bir mekan belirteci olma şansı (15%)
var beginningid = 0.15;

// Sonda bir mekan belirteci olma şansı (80%)
var endingid = beginningid + 0.80;

// Geriye kalan %5: hiç mekan belirteci olmaması şansı

// Sıfatlar
var one=["Kumsaldaki", "Bulutların Üzerindeki", "Yalçın", "Yeni", "Merkezi", "Güney", "Kuzey", "Doğu", "Batı", "Baş", "Eski", "Büyük", "Eğik", "İlk", "Orta", "Kadim", "Aziz", "Derin", "Yukarı", "Aşağı", "Küçük", "İkiz", "Görkemli", "Güneydoğu", "Güneybatı", "Kuzeydoğu", "Kuzeybatı", "Yalnız", "Issız", "Tekinsiz", "Göçebe",   "Kristal", "Lanetli", "Ulu", "Demir", "Uykulu", "Vahşi", "Çorak", "Kutlu", "Terkedilmiş", "Yeraltındaki", "Donmuş", "Yakılmış", "Yanmış", "Kayıp", "İç", "Dış",  "Gölgeli", "Granit", "Dolambaçlı", "Rüzgarlı", "Obsidyen", "Dumanlı", "Puslu", "Saklı", "Unutulmuş"];

// Baştaki mekan belirteçleri
var two=["Orman", "Park", "Vadi", "Eyalet", "Bağ", "Tapınak", "Mezarlar", "Ülke", "Yurt", "Loca", "Koy", "Abide", "Kale", "Okyanus", "Kapı", "Geçit", "Kemer", "Kanal", "Kavşak", "Mozole", "Harabe"];

// Saf isim için ilk parçalar
var three=["Gün", "Kaf", "Esen", "Hara", "Alp", "Can", "Koca", "Dibek", "Ak", "Taş", "Kara", "Zarap", "Ar", "Sarı", "Eşme", "As", "Lal", "Benli", "Boz", "Telli", "Tunç", "Şav", "Yağ", "Kol", "Tez", "Çakır", "Sulu", "Ten", "Dokuz", "Bir", "Beş", "Çukur", "Eleş", "Çelebi", "Sey", "Er", "Çit", "Adak", "Dil", "Ana", "Ala", "Nal", "Uzun", "Belen", "Yedi", "Bal", "Şen", "Salkım", "Bağ", "Dar", "Üç", "Ger", "Yassı", "Çat", "Tulum", "Yar", "Mazı", "Hir", "Mah", "Bora", "Ser", "Kızıl", "Mirze", "Neft", "Min", "Mir", "Miş", "Koşa", "Semer", "Hoş", "Çoban", "Çov", "Ağıs", "Köç", "Koç", "Türyan", "Goy", "Şam", "Şıh", "Sum", "Pir", "Gürge", "Keşa", "Heş", "Pereh", "Otak", "Günbed"];

// Saf isim için ikinci parçalar
var four=["dağ", "asri", "yayla", "kani", "kaya", "çay", "bilek", "boncuk", "muşlu", "sofu", "boğa", "oğlu", "oluk", "şat", "eren", "oba", "çam", "dürek", "alan", "yele", "bağı", "yüz", "ören", "oyuk", "dibi", "daş", "yay", "ses", "bakır", "koz", "kök", "kan", "civan", "musta", "var", "kuca", "çuvar", "çöl", "ağaç", "çala", "kent", "bulak", "karlı", "kend", "önü", "baçı", "tovuz", "gazah", "samuz", "evlah", "yıllı", "kulu", "ahı", "bur", "bustan", "zahırlı", "gayıt", "gayır", "geh", "bostan", "masal", "ruh", "öyük", "aşı"];

// Saf isim için üçüncü parçalar
var five=["paşa", "bey", "hane", "köy", "han", "su", "şehr", "burç", "şah", "bar", "gâh", "mend"]

// Sondaki mekan belirteçleri
var six=["Park", "Parkı", "Caddesi", "Sokak", "Vadisi", "Tersanesi", "Eyaleti", "Bahçeleri", "Çocuk Parkı", "Kulübü", "Kütüphanesi", "Köprüsü", "Bağları", "Teras", "Apartmanları", "Tapınağı", "Keçi Yolu", "Evi", "Havuzu", "Çayırları", "Mezarlığı", "Gölü", "Ülkesi", "İstasyonu", "Okulu", "Zirvesi", "Konağı", "Yurdu", "Pervazı", "Deposu", "Oyukları", "Höyükleri", "Patikası", "Kampı", "Bataklığı", "Çiftliği", "Locası", "Koruma Alanı", "Koyu", "Körfezi", "Tüfekhanesi", "Anıtı", "Abidesi", "Meydanı", "Avlusu", "Sedirleri", "Yuvası", "Köşkü", "Kâşanesi", "Kampı", "Demirhanesi", "Kalesi", "Sırtı", "Manastırı", "Noktası", "Paralı Yolu", "Kavakları", "Bahçeleri", "Marketi", "Adası", "Adacığı", "Doğal Parkı", "Çayırlığı", "Höyüğü", "Tepeciği", "Tepesi", "Uçurumu", "Okyanusu", "Denizi", "Kulübeleri", "Kapısı", "Geçidi", "Villaları", "Ören Yeri", "Üniversitesi", "Savanası", "Kemeri", "Sığınağı", "Barınağı", "Limanı", "Rezervleri", "Kanalı", "İskelesi", "Sahanlığı", "Deresi", "Çayı", "Kolu", "Şelalesi", "Çağlayanları", "Çağlayanı", "Çiftliği", "Sahili", "Barınağı", "Atış Alanı", "Bariyeri", "Düzlükleri", "Galerisi", "Gözlemevi", "Manzarası", "Tümseği", "Köşesi", "Kavşağı", "Irmağı", "Pınarı", "Kırlığı", "Korusu", "Ormanı", "İrtifaları", "Havzası", "Yalakları", "Tepeleri", "Membası", "Heykeli", "Kayası", "Çamları", "Çamlığı", "Akademisi", "Kuyuları", "Boğazı", "Yarımadası", "Vahaları", "Vahası", "Kayalığı", "Binası", "Bölgesi", "Malikânesi", "Tımarhanesi", "Akıl Hastanesi", "Seferi", "Tuz Düzlükleri", "Düzlüğü", "Kabristanı", "Mozolesi", "Anıt Mezarı", "Türbesi", "Konseyi", "Krallığı", "Yolu", "Gediği",   "Zırhı", "Ağaçlığı", "Oteli", "Rasathanesi", "Hamamı", "Hamamları", "Kaplıcaları", "Ilıcaları", "Barajı", "Tiyatrosu", "Taş Ocağı", "Krematoryumu", "Plaza", "Volkanı", "Kanalı", "Yerleşim Bölgesi", "Ovası", "Çeşmesi", "Çarşısı", "Kahvecisi", "Mağaraları", "Mağarası", "Bucağı", "Harabeleri"];
