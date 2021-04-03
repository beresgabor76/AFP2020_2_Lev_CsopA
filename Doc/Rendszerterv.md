# Rendszerterv

## 1. A rendszer célja
  
## 2. Projektterv

### 2.1 Projektszerepkörök, felelősségek
Scrum master: Béres Gábor

Feladata állandó kommunikáció a csapat tagjaival, a különböző tevékenységek összehangolása,a sprint időszakán belül a napi
megbeszélések, ami személyes vagy online módon történhet,megszervezése és lebonyolítása. Az előbbiek mellett a már befejezett
és leendő feladatok átbeszélése, akadályok (impediment) feltárása, lehetőség szerinti elhárítása. 

Product owner: Jakab Zsolt
A prioritással és üzleti értékkel ellátott felhasználói sztorikat tartalmazó Product Backlog létrehozása és felügyelete.

Üzleti szereplők (Stakeholders):
- Megrendelő: Összefogás az Emberiség  Szórakoztatásáért Nonprofit Közhasznú Kft.

### 2.2 Projektmunkások és felelősségeik

Frontend:
- Béres Gábor
- Jakab Zsolt
- Németh Richárd
- Szűcs János
A felhasználók által elérhető  felhasználói felület kialakítása, amin keresztül a háttér által biztosított szolgáltatások 
elérhetővé válnak, továbbá ily módon a rendszer funkciói felhasználhatók a kliensek számára.


Backend:
- Béres Gábor
- Jakab Zsolt
- Németh Richárd
- Szűcs János
Feladatuk az adatbázis szerkezetek kialakítása, funkciók létrehozása, a frontend kiszolgálása adatokkal.

Tesztelés:
- Béres Gábor
- Jakab Zsolt
- Németh Richárd
- Szűcs János
A szoftverekben meglévő hibák felderítése még az üzembe helyezés előtt. 
  
### 2.3 Ütemterv

||Funkció / Story | Feladat / Task | Prioritás | Becslés | Aktuális becslés | Elteltidő | Hátralévő idő ||
|-|---------------|----------------|-----------|---------|------------------|-----------|---------------|-|
||Követelmény specifikáció|        |         0 |      7  |               7  |        7  |             0 ||             
||Funkcionális specifikáció|       |         0 |      7  |               7  |        7  |             0 ||
||Rendszerterv|                    |           |      14 |               14 |         12|             8 ||
||Adattárolás|Adatmodell megtervezése|       0 |       4 |                4 |         4 |             4 ||
||Adattárolás|Adatbázis megvalósítása a szerveren|1 |  1 |                1 |         0 |             1 ||
||Website|Képernyőtervek elkészítése|        2 |       8 |                8 |         0 |             8 ||
||Website|Prototípus elkészítése|            2 |       8 |                8 |         0 |             8 ||
||Website|Adatbázis létrehozása|             2 |       8 |                8 |         0 |             8 ||
||Website|Menüstruktúra elkészítése|         2 |       8 |                8 |         0 |             8 ||
||Honlap|Kezdőlap funkciók elkészítése|      2 |       8 |                8 |         0 |             8 ||
||Honlap|Login funkció megvalósítás|         2 |       8 |                8 |         0 |             8 ||
||Website|Keresés funkció|                   2 |       8 |                8 |         0 |             8 ||
||Website|Feltöltőkhöz tartozó funkciók|     2 |       8 |                8 |         0 |             8 ||
||Website|Adminisztrátori funkciók kezelése| 2 |       8 |                8 |         0 |             8 ||
||Website|Tesztelés|                         2 |      16 |               16 |         0 |            16 ||


### 2.4 Mérföldkövek

- A prototipus bemutatása
- Az elkészült szoftver átadása 
  
## 3. Üzleti folyamatok modellje

### 3.1 Üzleti szereplők
A rendszert regisztrált és nem regisztrált felhasználók is használhatják. Bejelentkezés nélkül a felhasználó a kezdőlapon 
keresztül a keresés oldalra navigál, itt lehetséges előadó, dalcím és dalszövegrészlet alapján történő böngészés. Regisztrált
üzleti szereplők az adminisztrátor és a feltöltő. A bejelentkezés után válik elérhetővé a dalszöveg feltöltése a gyűjteménybe,
illetve a dalszövegek ellenőrzése funkció. 

### 3.2 Üzleti folyamatok
Bejelentkezés a dalszövegek feltöltéséhez vagy adminisztrációjához menüpont mindenki számára megegyező lefolyású. A 'bejelentkezés' 
menüpont után elérhetővé válik a belépési felület, amelyen felhasználói név és jelszó megadása után tud az alkalmazó tovább lépni. 
Sikertelen belépési kísérletet hibaüzenet jelez.

#### Üzleti folyamatok feltöltők számára:

- Regisztráció a rendszerben: 
  A regisztráció funkció a 'Regisztráció' menüponton keresztül éhető el. Itt szükség van a  bejelentkezési név,e-mail, és jelszó 
  megadására,illetve jelszó esetén ezek  megerősítésére is. Az előbbiek mellett meg kell adni a beszélt nyelvek listáját. Ezt követően
  a rendszer üzenetet küld a sikerről, illetve a sikertelen regisztrációs kísérletről pl. ha már az e-mail használva volt akkor nem 
  lehetséges ugyanazzal a címmel történő regisztráció. 

||Bejelentkezési név||
||E-mail cím||
||Jelszó||
||Jelszó megerősítés||
||Beszélt nyelvek||

- Bejelentkezés a rendszerbe funkcióhoz a 'Bejelentkezés' menüponton keresztül lehet hozzáférni, itt a bejelentkezési név
  és jelszó megadása után a sikeres, illetve a sikertelen belépési kísérletről üzenetet küld a rendszer.
- Feltöltés a rendszerbe funkció a 'Feltöltés' menüponton keresztül érhető el, itt az előadó, a dal címe, az album címe, a 
  dalszöveg eredeti nyelve, illetve az eredeti és a lefordított dalszöveg megadására van szükség a feltöltéshez.
  
||Előadó||
||Cím||
||Album||
||Dalszöveg eredeti nyelve||
||Eredeti dalszöveg||
||Dalszöveg magyar nyelven||

Sikeres feltöltésről a '... előadó, ... zemeszám dalszövege sikeresen feltöltésre került!' üzenetet kapja a felhasználó, 
sikeretelenség esetén pedig a 'Kérem töltsön ki minden mezőt az űrlapon!' hibaüzenetet.

-A keresés funkció a letötővel megegyező.

-Javítás funkció lehetőséet nyújt a javításra visszaküldöt dalszövegek módosítására.


#### Üzleti folyamatok adminisztrátorok számára:
 
- Regisztráció a rendszerben: 
  A regisztráció funkció az 'AdminRegisztráció' menüponton keresztül éhető el. Itt szükség van a  bejelentkezési név,e-mail, és jelszó 
  megadására,illetve jelszó esetén ezek  megerősítéshez is. Mindezek mellett szükséges megadni a beszélt nyelvek listáját.
  Ezt követően  a rendszer üzenetet küld a sikerről, illetve a sikertelen regisztrációs kísérletről pl. ha már az e-mail 
  használva volt akkor nem lehetséges ugyanazzal a címmel történő regisztráció. 

||Bejelentkezési név||
||E-mail cím||
||Jelszó||
||Jelszó megerősítés||
||Beszélt nyelvek||

-Dalszöveg ellenőrzése lehetőséget nyújt a dalok jóvhagyására, illetve amennyiben javítani szükséges e célból történő visszautasítására.
 
#### Üzleti folyamatok letöltők számára:

 - Keresés: 
A letöltő belépés nélkül is eléri az összes funkciót. A kezdőoldalról a keresés nyomógomb segítségével a jut el a keresőoldalra,
ahol  az előadó, a dal címe, illetve a részlet a dalszövegből alapján tud a számára érdekes dokumentumok után kutakodni, ennek
megvalósításához a 'Keresés' gombot kell használnia, amennyiben meggondolta magát visszaléphet az előző oldalra.
Abban az esetben, ha a felhasználó nem adott meg  keresési feltételt, akkor a rendszer a 'Kérem adjon meg keresési szempontot'
figyelmeztetést küldi számára, ha nem találja a keresési feltételnek megfelelő szöveget akkor a 'Nincs a keresési szempontnak 
megfelelő dalszöveg' üzenetet olvashatja a felhasználó. Egyéb hiba esetén az 'Elnézést kérünk. Hiba történt a kiszolgáló oldalon.'
figyelmeztetés látható. Feléve, hogy a user megtalálálta a keresett szöveget, akkor lehetősége nyílik ennek megtekintésére.

||Előadó||
||Cím||
||Album||
||Dalszöveg részlet||

 - Megtekintés:
A kiválasztott dal eredeti és magyar nyelvű szövegét a felhasználó egymás mellett tudja megjeleníteni, a fordítások fölött szintén
látható az előadó és a mű címe idegen és magyar nyelven. 

### 3.3 Üzleti entitások 
-	dalok

## 4. Követelmények

### 4.1 Funkcionális követelmények  

	* 	A letöltőkre vonatkozó követelmények
		Az aktuális, vagy leendő felhasználóknak lehetősége van belépés nélkül keresés céljából hozzáférni a rendszer 
		adatbázisához, azaz regisztráció nélkül lehet letölteni dalszövegeket. E dokumentumok magyar és idegen nyelven 
		egymás mellett jelennek meg, néhány a szövegekre vonatkozó adattal együtt. A letöltő alapvetően kétféle keresési funkció 
		közül választhat. Az egyik lehetőség, hogy a dalszöveg előadója, címe vagy az album címe alapján keres, majd a találatok 
		közül egymás mellett meg tudja jeleníteni a dalszöveg eredeti és  magyar nyelvű fordítását. Másik lehetőség, hogy a 
		legújabb jóváhagyott feltöltések közül keressen, majd amennyiben valamelyik felkeltette az érdeklődését, akkor a 
		megjelenítést az előbbivel megegyező módon kivitelezheti.
		
	*	A feltöltőkre vonatkozó követelmények 
		A feltöltési funkció eléréséhez mindenképpen szükség van a felhasználó előzetes regisztrációjára, amelyhez név email 
		cím és jelszó megadása szükséges. Amennyiben ez teljesült, a user eléri a feltöltési funkciót, amely azt jelenti, hogy 
		a dalszöveg előadóját, címét, az album címét, kiadás évét megadva az eredeti és magyar nyelvű szöveget rögzítheti a rendszerbe
		a jóváhagyásra váró dalszövegek közé. A letöltők e dalszövegeket még nem érhetik el, csak miután az ellenőrzési eljáráson
		átestek. Ha az adminisztrátor nem hagyja jóvá a feltöltést, egy hónapig van lehetőség javításra.
	
	*	Az adminisztrátorokra vonatkozó követelmények
		Az adminisztrátor funkciók eléréséhez a felhasználót regisztrálni szükséges. Az adminisztrátor feladata, a jóváhagyandó
		fordításra váró dalszövegek közül az általa beszélt nyelveknek megfelelőeket ellenőrizni, majd jóváhagyni vagy 
		visszautasítani a feltöltést. Amennyiben az adminisztrátor a fordítás jóváhagyása mellett dönt akkor megtörténik a 
		véglegesítés, visszautasítás esetén pedig a feltöltőnek egy hónapig van lehetősége javítani a fordítást.

### 4.2 Nemfunkcionális követelmények  

*	Termék követelmények
		*	Használhatósági követelmények 
			A fejelsztésre kerülő szoftver a minden felhasználó számára könnyen tanulható és használható, minimális 
			informatikai tudással alkalmazható. 
		*	Megbízhatósági követelmények
			A kiaalakítandó szisztéma webes felületen keresztül éri el az adatbázist. Az adatbázis konkurens elérése biztosított,
			továbbá inkonzisztens állapotba történő kerülése normál használat mellett nem lehetséges.
		*	Hatékonysági követelmények
			*	Teljesítmény követelmények  
				A rendszert egyidőben használók létszáma a bevezetést követő néhány hónapban előreláthatólag nem haladja meg az ezer 
				főt. A jól skálázhatóság következtében ennél jóval nagyobb létszám kiszolgálására is alkalmas a struktúra. 
			*	Méret követelmények 
				A szoftver mérete nem haladja meg az 1 Gigabyte-ot.
		*	Hordozhatósági követelmények 
			Amennyiben a rendszer fizikai környezete megváltozik, pl. hardverfejlesztés, bővítés zajlik, a rendszer az új környezetben
			is felhasználható lesz.
		
	*	Szervezeti követelmények
		*	Szállítási követelmények
			A szoftver a szerződésben meghatározozott időpontig kerül átadásra, ellenkező esetben a szerződésben található 
			kötbér illeti meg a megrendelőt.
		*	Implementációs követelmények
			A program a szerződésben meghatározott gépekre kerül telepítésre, az adminisztrátorok számára teljesen használatra
			készen, az adatbázisba minimális mennyiségű adat is feltöltésre kerül a dolgozók gyakorlati képzésének megkönnyítése
			céljából.
		*	Szabványügyi követelmények
			A vonatkozó szabványügyi kritériumok Törvényi előírások, a szabványok fejezetben találhatók.
			
	*	Külső követelmények
		*	Együttműködési követelmények
			A szoftverfejlesztő cég szakamberei és a megrendelő közötti kapcsoalttartást a szerződésben	meghatározott 
			személyek végzik. Szükség esetén mindkét oldalról bevonnak további szakembereket az együttműködés optimalizálása 
			céljából.
		*	Etikai követelmények
			A szoftverfeljesztő cég munkatársainak a jóváhagyott etikai kódex alapján kell viselkedniük.
		*	Jogi követelmények
			*	Titokvédelmi követelmények
				E téren a törvényi előírások az irányadók. A fejlesztő cég munkatársai vállalják, hogy a sem az adminisztrátorok,
				sem a felhasználók adatait harmadik fél számára nem adják át, továbbá a sikeres átadás átvételt követően a nem
				üzleti jellegű adatokat megsemmisítik.
			*	Biztonsági követelmények
				A szoftverfejlesztés során az adminisztrátorok és letöltők számára egylépcsős beléptetési rendszer lesz megvalósítva.


### 4.3 Törvényi előírások, szabványok  

Szerzői jogi törvény (1999. évi LXXVI. törvény; röviden: Szjt.), illetve a 
	2016. évi XCIII. törvény A szerzői jogok és a szerzőijoghoz kapcsolódó jogok közös kezeléséről  

	2018. évi LIV. törvény az üzleti titok védelméről

	2015. évi CCXXII. törvény az elektronikus ügyintézés és a bizalmi szolgáltatások általános szabályairól

	1995. évi LXVI. törvény a köziratokról, a közlevéltárakról és a magánlevéltári anyag védelméről

	73/2018. (IV. 20.) Korm. rendelet a helyi közszolgáltatás információs rendszerről

	187/2015. (VII. 13.) Korm. rendelet az elektronikus információs rendszerek biztonsági felügyeletét ellátó hatóságok,
	valamint az információbiztonsági felügyelő feladat- és hatásköréről, továbbá a zárt célú elektronikus információs rendszerek
	meghatározásáról

	Az ISO / IEC 12207 a nemzetközi szabvány, amely tartalmazza a szoftver életciklusának kiválasztási, bevezetési és ellenőrzési
	módszerét.

	Az ISO 9000 leírja a termékek előállításának hivatalosan szervezett folyamatát, valamint az előrehaladás irányításának és 
	nyomon követésének módszereit.

	Az ISO / IEC 24744 szoftverfejlesztés - Metamodel for Development Methodologies, egy Powertype-alapú metamodell
	szoftverfejlesztési módszertanhoz.

	ISO / IEC 15504 Információs technológia — folyamatértékelés, más néven a szoftverfolyamat-fejlesztési képesség meghatározása
	(SPICE), "a szoftverfolyamatok értékelésének kerete".
	
   
## 5. Funkcionális terv
  
### 5.1 Rendszerszereplők
A rendszerünkben három rendszerszereplő csoportot különböztetünk meg. Az egyik dalszövegeket feltöltők csoportja. A másik az adminisztrátori feladatokat végzők csoportja. A regisztrációval rendelkező feltöltőknek jogosultságuk dalokat hozzáadni az adatbázishoz. Az adminisztrátorok rendelkeznek jogosultsággal, hogy elfogadják vagy visszautasítsák a feltöltött dalszövegeket.
### 5.2 Rendszerhasználati esetek és lefutásaik 
   
### 5.3 Határ osztályok 
  
### 5.4 Menühierarchiák 
   
### 5.5 Képernyőtervek  
   
## 6. Fizikai környezet

### 6.1 Vásárolt softwarekomponensek és külső rendszerek

Szoftverkomponensek vásárlása nem szükséges. 

### 6.2 Hardver és hálózati topológia

- Az alkalmazás web platformra készül.
- Tetszőleges internet böngészőn keresztül elérhető a felhasználó felület.
- Szerverhez kapcsolódnak:
-- kliens gépek a helyi hálózaton 
-- interneten bárki számára elérhető honlap  
 
### 6.3 Fizikai alrendszerek

- Webszerver: 3000-es porton elérhető HTTP szolgáltatás 
- MongoDB adatbázis szerver
- Kliens gépek: a követelményeknek megfelelő internet böngésző futtatására alkalmas PC-k.

### 6.4 Fejlesztő eszközök

- Visual Studio 
- Visual Studio Code
- MongoDB Compass
- Notepad++
   
## 8. Architekturális terv
  
REST (Representational State Transfer) típusú architektúra, mely kliensekből és egy szerverből áll. A kliensek kéréseket indítanak a szerver felé,
 a szerver kéréseket dolgoz fel és a megfelelő választ visszaküldi. Azaz a kérések és a válaszok erőforrás-reprezentációk szállítása köré 
 épülnek. Más szavakkal: a REST egy egyszerű módszer arra, hogy kapcsolatot építsünk ki két független rendszer között. 100%-ban HTTP protokollra 
 épül, annak minden tulajdonságát kihasználja.  
    
### 8.1 Architekturális tervezési minta
       
A kliensek el vannak különítve a szervertől egy egységes interfész által, azaz a kliensek nem foglalkoznak adattárolással, ami a szerver feladata,
 és így a kliens kód hordozhatósága megnő. A szerver nem foglalkozik a felhasználói felülettel vagy a kliens állapotával, ezért a szerver
 egyszerűbb és még skálázhatóbb lehet. A szerver és a kliensek áthelyezhetőek és fejleszthetőek külön-külön is, egészen addig amíg 
 az interfész nem változik meg.  
  
A kliens-szerver kommunikáció további korlátja: a szerveren nem tárolják a kliens állapotát a kérések között. Minden egyes kérés bármelyik klienstől
 tartalmazza az összes szükséges információt a kérés kiszolgálásához, és minden állapotot a kliens tárol.  
    
### 8.2 Az alkalmazás rétegei, fő komponensei, ezek kapcsolatai
   
### MERN stack

![MERN](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/mern-stack.png)

A MERN betűszó a MongoDB, Express, React, Node szavak kezdőbetűiből áll, a négy kulcs technológia után, melyek a stack-et alkotják:
- MongoDB: dokumentum alapú adatbázis
- Express(.js): Node.js web keretrendszer
- React(.js): a kliens oldali JavaScript keretrendszer
- Node(.js): JavaScript webszerver
  
The MERN architektúra lehetővé teszi, hogy könnyen létrehozzunk egy 3-rétegű architektúrát: frontend<-->backend<-->adatbázis vagy másként
 felhasználói felület<-->üzleti logika<-->adatbázis, amely kizárólag a JavaScript-re és JSON-ra épül.  
  
### React JS  
  
A MERN stack legfelső rétege a React.js, egy deklaratív JavaScript nyelvű keretrendszer, mely dinamikus kliens oldali alkalmazások létrehozására
 szolgál HTML-ben. Komplex felhasználói felületek hozhatók létre benne a React modulok felhasználásával és egyszerű komponensek segítségével,
 melyeket a backend szerver adataihoz lehet kapcsolni. A deklaratív nézetek a kódot jobban áttekinthetővé teszik és könnyebb a hibakeresés bennük. 
 
### Express.js és Node.js szerver réteg

A szerver esetünkben egy ún. REST API, mely szintén Javascript nyelven íródik a Node.js szoftverrendszer felhasználásával, melyet skálázható
 internetes alkalmazások, mégpedig webszerverek készítésére hoztak létre eseményalapú, aszinkron I/O-val a túlterhelés minimalizálására és
 a skálázhatóság maximalizálására.  
  
Ebben a rétegben helyezkedik el az Express.js szerver oldali keretrendszer, amely a Node.js szerveren belül fut. Az Express.js hatékony
 modellekkel rendelkezik az URL-útválasztáshoz - a bejövő URL megfeleltetéséhez egy szerver funkcióval -, valamint a HTTP kérések és válaszok
 kezeléséhez.
  
### MongoDB adatbázis réteg   
  
Az adatbázis szerver MongoDB nyílt forráskódú dokumentumorientált adatbázis szoftver, mely a REST API szerverrel áll kapcsolatban. 
 A MongoDB-t arra tervezték, hogy a JSON adatokat natív módon tárolja - technikailag a JSON BSON nevű bináris változatát használja -,
 és a parancssori felületétől a lekérdezési nyelvig (MQL vagy MongoDB Query Language) minden a JSON-ra és a JavaScript-re épül.
 A MongoDB rendkívül jól működik a Node.js-szel, és egyszerűvé teszi JSON-adatok tárolását, kezelését és ábrázolását az alkalmazás
 minden szintjén. Az adatok tárolását, lekérdezését, módosítását és törlését a REST API egy ún. 'mongoose' Node.js modul segítségével
 végzi, mely egyszerű felületet biztosít a programozók számára.  
    
### 8.3 Változások kezelése
  
Az interfész változása esetén mind a szerver mind a kliens oldalon szükséges módosítani a szoftvereket annak érdekében, hogy továbbra is együtt
 tudjon működni a rendszer. Ha a változás nem érinti a szerver-kliens interfészt, például csak a felhasználói felületet kívánjuk módosítani,
 elegendő a React kliens kódját változtatni.  
        
## 9. Adatbázisterv  
    
Az adatbáziskezelő rendszer ún. NoSQL, más néven "not only SQL" adatbáziskezelő. A MongoDB nyílt forráskódú dokumentumorientált adatbázis szoftver,
  amelyet a fentiekben, a 8.2 pontban már ismertettünk nagy vonalakban. Mint a legtöbb NoSQL szoftver, a MongoDB sem képes
  ACID viselkedést biztosítani, azonban esetünkben az adatbázis egyszerűsége miatt ez nem jelent problémát. Ellenben a dokumentumok
  gyors kereshetősége előnyt biztosít egy hagyományos SQL adatbázissal szemben.  
  
### 9.1 Logikai adatmodell 

Az adatok tárolását, lekérdezését, módosítását és törlését a szerver egy ún. 'mongoose' Node.js modul segítségével végzi a MongoDB adatbázisban.
 Az egyes dokumentumokhoz létre lehet hozni egy ún. sémát, mely az adatok tárolását ellenőrzött módon teszi lehetővé, validálást is biztosítva.
 Az adatbáziskezelő az azonos sémához tartozó dokumentumokat ún. kollekciókban (collection) tárolja, melyek az adatbázis részei. Két kollekció
 szükséges az alkalmazásunk adatainak tárolására: egy a felhasználók belépéséhez és adminisztrációjához szükséges adatokat tároló dokumentumokat
 tartalmazó 'users' és egy a dalszövegek adatainak tárolására szolgáló dokumentumokat tartalmazó 'lyrics' kollekció.  

Az egyes sémák, melyek a REST API kódjában vannak tárolva:  
  
const **userSchema** = new mongoose.Schema({  
&nbsp;&nbsp;  name: {  
&nbsp;&nbsp;&nbsp;&nbsp;    type: String,  
&nbsp;&nbsp;&nbsp;&nbsp;    required: true,  
&nbsp;&nbsp;&nbsp;&nbsp;    minlength: 5,  
&nbsp;&nbsp;&nbsp;&nbsp;    maxlength: 50,  
&nbsp;&nbsp;&nbsp;&nbsp;    unique: true  
&nbsp;&nbsp;  },  
&nbsp;&nbsp;  email: {  
&nbsp;&nbsp;&nbsp;&nbsp;    type: String,  
&nbsp;&nbsp;&nbsp;&nbsp;    required: true,  
&nbsp;&nbsp;&nbsp;&nbsp;    minlength: 10,  
&nbsp;&nbsp;&nbsp;&nbsp;    maxlength: 100,  
&nbsp;&nbsp;&nbsp;&nbsp;    unique: true  
&nbsp;&nbsp;  },  
&nbsp;&nbsp;  password: {  
&nbsp;&nbsp;&nbsp;&nbsp;    type: String,  
&nbsp;&nbsp;&nbsp;&nbsp;    required: true,  
&nbsp;&nbsp;&nbsp;&nbsp;    minlength: 10,  
&nbsp;&nbsp;&nbsp;&nbsp;    maxlength: 1024  
&nbsp;&nbsp;  },  
&nbsp;&nbsp;  admin: {  
&nbsp;&nbsp;&nbsp;&nbsp;    type: Boolean,  
&nbsp;&nbsp;&nbsp;&nbsp;    default: false  
&nbsp;&nbsp;  },  
&nbsp;&nbsp;  languages: {  
&nbsp;&nbsp;&nbsp;&nbsp;    type: Array,  
&nbsp;&nbsp;&nbsp;&nbsp;    validate: {  
&nbsp;&nbsp;&nbsp;&nbsp;      validator: function(v) {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return v.length > 0 && v.every(function(e) { return typeof(e) == 'string'; });  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      message: 'Languages must be set.'  
&nbsp;&nbsp;&nbsp;&nbsp;    }  
&nbsp;&nbsp;  },  
&nbsp;&nbsp;  uploads: {  
&nbsp;&nbsp;&nbsp;&nbsp;    type: Number,  
&nbsp;&nbsp;&nbsp;&nbsp;    default: 0   
&nbsp;&nbsp;  }  
});  
    
const **lyricsSchema** = new mongoose.Schema({  
&nbsp;&nbsp;    artist: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: String,  
&nbsp;&nbsp;&nbsp;&nbsp;        required: true,  
&nbsp;&nbsp;&nbsp;&nbsp;        minlength: 2,  
&nbsp;&nbsp;&nbsp;&nbsp;        maxlength: 50         
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    title: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: String,  
&nbsp;&nbsp;&nbsp;&nbsp;        required: true,  
&nbsp;&nbsp;&nbsp;&nbsp;        minlength: 3,  
&nbsp;&nbsp;&nbsp;&nbsp;        maxlength: 100         
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    album: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: String,         
&nbsp;&nbsp;&nbsp;&nbsp;        maxlength: 100         
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    language: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: String,  
&nbsp;&nbsp;&nbsp;&nbsp;       required: true,  
&nbsp;&nbsp;&nbsp;&nbsp;        minlength: 3,  
&nbsp;&nbsp;&nbsp;&nbsp;        maxlength: 50         
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    lyricsOriginal: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: String,  
&nbsp;&nbsp;&nbsp;&nbsp;        required: true,  
&nbsp;&nbsp;&nbsp;&nbsp;        minlength: 50,  
&nbsp;&nbsp;&nbsp;&nbsp;        maxlength: 5000          
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    lyricsHungarian: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: String,  
&nbsp;&nbsp;&nbsp;&nbsp;        required: true,  
&nbsp;&nbsp;&nbsp;&nbsp;        minlength: 50,   
&nbsp;&nbsp;&nbsp;&nbsp;        maxlength: 5000         
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    uploader: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: String,  
&nbsp;&nbsp;&nbsp;&nbsp;        required: true,  
&nbsp;&nbsp;&nbsp;&nbsp;        minlength: 5,  
&nbsp;&nbsp;&nbsp;&nbsp;        maxlength: 50          
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    inspector: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: String,          
&nbsp;&nbsp;&nbsp;&nbsp;        minlength: 5,  
&nbsp;&nbsp;&nbsp;&nbsp;        maxlength: 50          
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    approved: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: Boolean,  
&nbsp;&nbsp;&nbsp;&nbsp;        default: false  
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    refused: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: Boolean,  
&nbsp;&nbsp;&nbsp;&nbsp;        default: false  
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    remark: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: String,                  
&nbsp;&nbsp;&nbsp;&nbsp;        maxlength: 500          
&nbsp;&nbsp;    },  
&nbsp;&nbsp;    dateOfUpload: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: Date                  
&nbsp;&nbsp;   },  
&nbsp;&nbsp;    timesOfDownload: {  
&nbsp;&nbsp;&nbsp;&nbsp;        type: Number,  
&nbsp;&nbsp;&nbsp;&nbsp;        default: 0  
&nbsp;&nbsp;    }  
});	  
	
### 9.2 Tárolt eljárások 
  
A MongoDB adatbáziskezelő rendszer nem teszi lehetővé tárolt eljárások alkalmazását, azonban ez nem is szükséges, a mongoose modul segítségével
 rugalmasan lehet kezelni az adatbázisban tárolt adatokat.  
    
### 9.3 Fizikai adatmodellt legeneráló SQL szkript   
  
A MongoDB adatbáziskezelő esetén nincs szükség előzetesen létrehozni az adatbázist és a kollekciókat, az első dokumentumok mentésekor megteszi
 ezt helyettünk.  
    
## 10. Implementációs terv
   
### 10.1 Perzisztencia osztályok 
   
### 10.2 Üzleti logika osztályai
    
### 10.3 Kliens oldal osztályai 
   
## 11. Tesztterv   
      
## 12. Telepítési terv
   


