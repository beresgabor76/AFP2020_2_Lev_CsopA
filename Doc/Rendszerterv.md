# Rendszerterv

## 1. A rendszer célja
  
A rendszer célja, hogy idegen nyelvű dalszövegeket és magyar fordításukat elérhetővé tegye minél több felhasználó számára webes felületen.
 Lehetővé teszi hogy bármely regisztrált és bejelentkezett felhasználó feltöltsön dalszövegeket az adatbázisba, melyek egy ellenőrzésen esnek át,
 és ezt követően jóváhagyás esetén válnak kereshetővé, majd letölthetővé anonim vagy bejelentkezett felhasználók számára. Az adatbázis 
 kereshető előadó, cím, album és dalszöveg részlet alapján. Az adminisztrátorok felelőssége ellenőrizni, majd jóváhagyni vagy
 visszautasítani a feltöltött dalszövegeket. Szintén az ő hatáskörükbe tartozik új adminisztrátorok regisztrációja. A feltöltőknek
 lehetőséget kell biztosítani a visszautasított dalszöveg módosítására az ellenőr észrevételei alapján.  
   
## 2. Projektterv

### 2.1 Projektszerepkörök, felelősségek
Scrum master: Béres Gábor

Feladata állandó kommunikáció a csapat tagjaival, a különböző tevékenységek összehangolása,a sprint időszakán belül a napi
megbeszélések, ami személyes vagy online módon történhet,megszervezése és lebonyolítása. Az előbbiek mellett a már befejezett
és leendő feladatok átbeszélése, akadályok (impediment) feltárása, lehetőség szerinti elhárítása. 

Product owner: Jakab Zsolt
A prioritással és üzleti értékkel ellátott felhasználói sztorikat tartalmazó Product Backlog létrehozása és felügyelete.

Üzleti szereplők (Stakeholders):
- Megrendelő: Összefogás az Emberiség Minőségi Szórakoztatásáért Nonprofit Közhasznú Kft.

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
  
 || Adatbeviteli mezők ||
 |-|-------------------|-|
 || Felhasználó név    ||  
 || E-mail cím         ||  
 || Jelszó             ||  
 || Jelszó megerősítés ||  
 || Beszélt nyelvek    ||  
  
- Bejelentkezés a rendszerbe funkcióhoz a 'Bejelentkezés' menüponton keresztül lehet hozzáférni, itt a felhasználó név
  és jelszó megadása után a sikeres, illetve a sikertelen belépési kísérletről üzenetet küld a rendszer.
- Feltöltés a rendszerbe funkció a 'Feltöltés' menüponton keresztül érhető el, itt az előadó, a dal címe, az album címe, a 
  dalszöveg eredeti nyelve, illetve az eredeti és a lefordított dalszöveg megadására van szükség a feltöltéshez.
   
 || Adatbeviteli mezők       ||
 |-|-------------------------|-|
 || Előadó                   ||  
 || Cím                      ||  
 || Album                    ||  
 || Dalszöveg eredeti nyelve ||  
 || Eredeti dalszöveg        ||  
 || Dalszöveg magyar nyelven ||  
  
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
  
 || Adatbeviteli mezők ||
 |-|-------------------|-|
 || Felhasználó név    ||  
 || E-mail cím         ||  
 || Jelszó             ||  
 || Jelszó megerősítés ||  
 || Beszélt nyelvek    ||   

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

 || Adatbeviteli mezők ||
 |-|-------------------|-|
 || Előadó             ||  
 || Cím                ||  
 || Album              ||  
 || Dalszöveg részlet  ||  
  
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
A rendszerünkben két rendszerszereplő csoportot különböztetünk meg. Az egyik dalszövegeket feltöltők csoportja. A másik az adminisztrátori feladatokat végzők csoportja. A regisztrációval rendelkező feltöltőknek van jogosultságuk dalokat hozzáadni az adatbázishoz. Az adminisztrátorok rendelkeznek olyan jogosultsággal, hogy elfogadják vagy visszautasítsák a feltöltött dalszövegeket.
### 5.2 Rendszerhasználati esetek és lefutásaik 

![ujfelhasznreg_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/ujfelhasznreg.png)

![felhaszbejel_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/felhaszbejel.png)

![ujdalfelv_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/ujdalfelv.png)

![dalszjav_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/dalszjav.png)

![adminreg_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/adminreg.png)

![adminell_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/adminell.png)

![lejhattorl_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/lejhattorl.png)

![kereses_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/kereses.png)

![megtekintes_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/megtekintes.png)

### 5.3 Határ osztályok

Applikációban nem hoztunk létere osztályokat, ezért ebben a pontban az egyes kapcsolódó nézeteket mutatjuk be.

A belépés nélküli felhasználói tevékenységeihez kapcsolódó nézetek
![withoutlogin_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/withoutlogin.png)

A belépett felhasználói tevékenységeihez kapcsolódó nézetek
![withlogin_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/withlogin.png)

A belépett adminisztátori tevékenységeihez kapcsolódó nézetek
![withadminlogin_picture](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/withadminlogin.png)

### 5.4 Menühierarchiák 
   
A kliens oldali alkalmazásban minden funkció elérhető a navigációs sávokból. Attól függően, hogy egy felhasználó be van-e
 jelentkezve, vagy nincs, különböző menü jelenik meg. A menüpontok nem tartalmaznak lenyíló menüket, mindegyikkel egy 
 adott tevékenységet lehet kezdeményezni.  
  
 - **Anonim felhasználóként** a következő menüpontok érhetők el: *Kezdőlap, Keresés, Bejelentkezés, Regisztráció.* A Keresés menüponttal
 lehet a dalszöveg adatbázisban keresni előadó, dal címe, album címe és dalszöveg részlet alapján. A Regisztráció menüponton 
 keresztül feltöltőként regisztrálhat bárki, név, email cím, jelszó és beszélt nyelvek megadása kötelező.  
 - Ha **feltöltőként** bejelentkezik egy felhasználó, a következő menüpontok érhetők el: *Kezdőlap, Keresés, Feltöltés, Javítás, Kijelentkezés.*
 A Keresés menüpont a fentivel megegyező. A Feltöltés menüponton keresztül lehet új dalszöveget feltölteni az adatbázisba. A Javítás
 menüpontban jelenik meg az ellenőrök által visszautasított, javításra szoruló dalszövegeink listája.  
 - Ha **admisztrátorként** bejelentkezik egy felhasználó, a következő menüpontok érhetők el: *Kezdőlap, Keresés, Új feltöltések, Admin regisztráció, Kijelentkezés.*
 A Keresés a fentiekkel megegyező. Az Új feltöltések menüpont kilistázza a bejelentkezett ellenőr által beszélt nyelvű, még jóvá nem hagyott
 dalszövegek listáját, ahol további műveleteket lehet végezni a kiválasztott dalszöveggel. Az Admin regisztrációban új adminisztrátort, azaz
 ellenőrt lehet regisztrálni.  
   
### 5.5 Képernyőtervek  
   
### Kezdőképernyő  
  
![kezdo](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/prototipus_kezdo_oldal.png)  
  
### Regisztrációs képernyő  
  
![regisztracio](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/prototipus_regisztracios_oldal.png)  
  
### Bejelentkezési képernyő  
  
![bejelentkezes](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/prototipus_bejelentkezes_oldal.png)  
  
### Feltöltési képernyő  
  
![feltoltes](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/prototipus_feltoltes_oldal.png)  
  
### Keresési képernyő  
   
![kereses](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/prototipus_kereses_oldal.png)
  
### Találatok képernyő  
   
![talalatok](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/prototipus_talalatok_oldal.png)
   
### Ellenőrzési képernyő   
   
![ellenorzes](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/prototipus_ellenorzes_oldal.png)
  

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

A tesztelés célja, annak ellenőrzése, hogy a program az üzleti folyamatokban specifikáltaknak megfelelően működik-e.
Ezen felül kipróbálásra kerül az is, hogy a program különböző hardver és szoftver környezetben hogyan használható.

A teszteléshez használt szerver és kliens konfigurációk megfelenek a hardver és szoftver követelményekben megadottaknak.
A kliensek tesztelése a legelterjedtebb böngészőkön történik: Mozilla Firefox, Google Chrome, Microsoft Edge).

A tesztelés folyamán a külöböző üzleti folyamatokhoz tartozó forgatókönyvek végrehajtásának eredményét vizsgáljuk és 
amennyiben az megfelel az elvártaknak, akkor a teszteset sikeresnek tekinthető, ellenkező esetben a hibát rögzítjük a 
tesztjegyzőkönyvben.

### 11.1 Tesztelt üzleti folyamatok adminisztrátorok számára:

**Regisztráció a rendszerben:** 
Az adminisztrátorok számára elérhető AdminRegisztráció menüpont használatával lehetséges új adminisztrátor rögzítése a rendszerben.
A bejelentkezési név, e-mail, jelszó és a beszélt nyelvek listájának megadása szükséges.
A név hossza 5-50 karakter között lehet, az email cím mérete 5-255 karakter, valamint meg kell felelnie az e-mail címekre 
vonatkozó általános szabályoknak, a jelszó (5-20 karakter) nem tartalmazhat whitespace karaktert, a felsorolt nyelvek pedig 
kisbetűs 3-25 karakter hosszúságú szavak lehetnek. A megadott jelszó megerősítésére is szükség van, a regisztráció csak akkor 
érvényes, ha mindkét erre szolgáló beviteli mezőben ugyanaz a jelszó van megadva. A regisztráció során nem lehet olyan 
bejelentkezési nevet megadni, amit korábban már regisztráltak a rendszerben.

**Tesztesetek:**
1. A bevitt adatok helyesek, megfelelnek az előírt követelményeknek.
Elvárt eredmény: A regisztrált adminisztrátor adatai bekerüljenek az adatbázisba, valamint a megadott adatokkal be lehessen jelentkezni 
a rendszerbe.
2. A követelményeknek nem megfelelő adat(ok) megadása esetén:
Elvárt eredmény: A program jelezze, hogy melyik megadott adat nem volt megfelelő és ezután lehetőség legyen javítani azt.


**Belépés a rendszerbe:**
A Regisztráció menüpont használatával tudnak a korábban már regisztrált adminisztrátorok belépni a rendszerbe.

**Tesztesetek:**
1. A megadott felhasználónév-jelszó kombináció nem tartozik egyik regisztrált felhasználóhoz sem. 
Elvárt eredmény: hibaüzenet jelzi a felhasználó számára, hogy nem megfelelő belépési adatokat adott meg.
2. A felhasználónév-jelszó kombinációhoz tartozik regisztrált felhasználó a rendszerben.
Elvárt eredmény: a rendszer belépteti a felhasználót, a navigációs sávon megjelennek az adminisztrátorok által elérhető funkciók.


**Keresés:**
A feltöltött dalszövegek között lehet keresni, előadó, cím, album vagy dalszöveg részlet megadásával.

**Tesztesetek:**

1. A megadott adatok alapján nem található a keresési feltételeknek megfelelő dalszöveg az adatbázisban. 
Elvárt eredmény: tájékoztató üzenet jelzi a felhasználó számára, hogy a megadott keresési feltételeknek megfelelő dalszöveg nem található az adatbázisban. 
2. A megadott adatok alapján található legalább egy, a keresésnek megfelelő dalszöveg az adatbázisban. 
Elvárt eredmény: a találtok listája jelenik mega a képernyőn.


**Dalszövegek ellenőrzése:**
A még nem ellenörzőtt dalszövegek listáját az "Új feltöltések" menüpont használatával lehet lekérni.
A listában csak azok a feltöltött dalszövegek fognak megjelenni, amiknek a nyelve szerepel az adminisztrátor által megadott ismert nyelvek között.  
Itt egy tetszőleges dalszöveg kiválasztása után az alábbi lehetőségek közül választhatunk: 
- Ellenörzés: a dalszöveg átnézése jóváhagyás, vagy elutsítás elött.
- Jóváhagyás: ha a dalszöveg ellenőrzése során megfelelőnek találtuk a fordítást, akkor itt tudjuk jóváhagyni azt.
- Visszautasítás: ha a dalszöveg ellenörzése során hibát találunk, akkor a közzétételt visszautasítva  javításra kérhetjük annak feltőltőjét

**Tesztesetek:**
1. A menüpont elindításakor vannak korábban még nem ellenörzött dalszövegek az adatbázisban. 
Elvárt eredmény: az eddig még nem ellenörzött, azaz korábban sem jóváhagyásra, sem elutasításra nem került dalszövegek listájának meg kell jelennie a képernyőn. 
2. A menüpont elindításakor nincsenek korábban még nem ellenörzött dalszövegek az adatbázisban. 
Elvárt eredmény: a képernyőn nem jelenhet meg egyetlen dalszöveg sem a találati listában.
3. Az "Ellenörzés" gombra kattintás. 
Elvárt eredmény: a megfelelő dalszövegnek kell megjelennie.
4. A "Jóváhagyás" gomb használata.
Elvárt eredmény: a dalszöveg publikálásra kerül, meg kell jelennie a letöltők számára elérhető dalszövegek között.
5. A "Visszautasítás" gomb megnyomása.
Elvárt eredmény: a feltöltő kap lehetőséget a dalszöveg javítására.


**Kijelentkezés:**
A belépett adminisztrátorok tudnak a rendszerből kijelentkezni. 

**Tesztesetek:**
1. A "Kijelentkezés" menüpont használata.
Elvárt működés: az adaminisztrátor funkciók az újabb sikeres bejelentkezésig nem lehetnek elérhetők, valamint a navigációs sávnak vissza kell állnia az alapállapotba,
azaz a "Kijelentkezés" menüpont már nem lehet elérhető, ugyanakkor a "Bejelentkezés" funkciónak újra elérhetővé kell válnia.


### 11.2 Tesztelt üzleti folyamatok feltöltők számára:

**Regisztráció a rendszerben:** 
A Regisztráció menüpont használatával tudnak a dalszöveget feltölteni kívánók regisztrálni a rendszerben.
A bejelentkezési név, e-mail, jelszó és a beszélt nyelvek listájának megadása szükséges.
A név hossza 5-50 karakter között lehet, az email cím mérete 5-255 karakter, valamint meg kell felelnie az e-mail címekre 
vonatkozó általános szabályoknak, a jelszó (5-20 karakter) nem tartalmazhat whitespace karaktert, a felsorolt nyelvek pedig 
kisbetűs 3-25 karakter hosszúságú szavak lehetnek. A megadott jelszó megerősítésére is szükség van, a regisztráció csak akkor 
érvényes, ha mindkét erre szolgáló beviteli mezőben ugyanaz a jelszó van megadva. A regisztráció során nem lehet olyan 
bejelentkezési nevet megadni, amit korábban már regisztráltak a rendszerben.

**Tesztesetek:**
1. A bevitt adatok helyesek, megfelelnek az előírt követelményeknek.
Elvárt eredmény: A regisztrált felhasználó adatai bekerüljenek az adatbázisba, valamint a megadott adatokkal be lehessen jelentkezni 
a rendszerbe.
2. A követelményeknek nem megfelelő adat(ok) megadása esetén:
Elvárt eredmény: A program jelezze, hogy melyik megadott adat nem volt megfelelő és ezután lehetőség legyen javítani azt.


**Belépés a rendszerbe:**
A Regisztráció menüpont használatával tudnak a korábban már regisztrált felhasználók belépni a rendszerbe.

**Tesztesetek:**
1. A megadott felhasználónév-jelszó kombináció nem tartozik egyik regisztrált felhasználóhoz sem. 
Elvárt eredmény: hibaüzenet jelzi a felhasználó számára, hogy nem megfelelő belépési adatokat adott meg.
2. A felhasználónév-jelszó kombinációhoz tartozik regisztrált felhasználó a rendszerben.
Elvárt eredmény: a rendszer belépteti a felhasználót, a navigációs sávon megjelennek a feltöltők által elérhető funkciók.


**Dalszövegek keresése:**
A feltöltött dalszövegek között lehet keresni, előadó, cím, album vagy dalszöveg részlet megadásával.

**Tesztesetek:**

1. A megadott adatok alapján nem található a keresési feltételeknek megfelelő dalszöveg az adatbázisban. 
Elvárt eredmény: tájékoztató üzenet jelzi a felhasználó számára, hogy a megadott keresési feltételeknek megfelelő dalszöveg nem található az adatbázisban. 
2. A megadott adatok alapján található legalább egy a keresésnek megfelelő dalszöveg az adatbázisban. 
Elvárt eredmény: a találtok listája jelenik mega a képernyőn.


**Dalszövegek javítása:**
Az adminisztrátorok által javításra jelölt dalszövegek listázása és módosítása.

**Tesztesetek:**
1. Nincsenek javításra jelölt daszövegek a felhasználó által feltöltöttek között. 
Elvárt eredmény: a "Javítás" menüpont használata után nem jelenhet meg egyetlen dalszöveg sem a javításra jelölt dalszövegek listájában.
2. Vannak javításra jelölt daszövegek a felhasználó által feltöltöttek között. 
Elvárt eredmény: a "Javítás" menüpont használata után a javításra jelölt dalszövegek listájának kell megjelennie.


**Dalszövegek feltöltése:**
A bejelentkezett felhasználók a "Feltöltés" menüpont használatával tudnak dalszövegeket feltölteni a rendszerbe.
A feltöltéshez az alábbi adatokat kell megadni:
- Előadó: 2-50 karakter, kötelező
- Cím: 3-100 karakter, kötelező
- Album: max.100 karakter 
- Dalszöveg eredeti nyelve: 3-50 karakter 
- Eredeti dalszöveg: 50-5000 karakter, kötelező
- Dalszöveg magyar nyeleven: 50-5000 karakter, kötelező

**Tesztesetek:**
1. A bevitt adatok helyesek, megfelelnek az előírt követelményeknek.
Elvárt eredmény: A dalszöveg rögzítésre kerüljön az adatbázisban.
2. A követelményeknek nem megfelelő adat(ok) megadása esetén:
Elvárt eredmény: A program jelezze, hogy melyik megadott adat nem volt megfelelő és ezután lehetőség legyen javítani azt. 
  

**Kijelentkezés:**
A belépett feltöltők tudnak a rendszerből kijelentkezni. 

**Tesztesetek:**
1. A "Kijelentkezés" menüpont használata.
Elvárt működés: az feltöltők által használható funkciók az újabb sikeres bejelentkezésig nem lehetnek elérhetők, valamint a navigációs sávnak vissza kell állnia az alapállapotba,
azaz a "Kijelentkezés" menüpontnak el kell tünnie, ugyanakkor a "Bejelentkezés" funkciónak újra elérhetővé kell válnia.



### 11.3 Tesztelt üzleti folyamatok letöltők számára:
A letöltők regisztráció nélkül is elérik a rendszert, amiben dalszövegek keresésére, böngészésére valamint letöltésére van lehetőségük.

**Dalszövegek keresése:**
A feltöltött dalszövegek között lehet keresni, előadó, cím, album vagy dalszöveg részlet megadásával.

**Tesztesetek:**

1. A megadott adatok alapján nem található a keresési feltételeknek megfelelő dalszöveg az adatbázisban. 
Elvárt eredmény: tájékoztató üzenet jelzi a felhasználó számára, hogy a megadott keresési feltételeknek megfelelő dalszöveg nem található az adatbázisban. 
2. A megadott adatok alapján található legalább egy a keresésnek megfelelő dalszöveg az adatbázisban. 
Elvárt eredmény: a találtok listája jelenik mega a képernyőn.


**Dalszövegek letöltése:**
A megjelenített dalszövegek letöltésére a rendszerbe történő bejelentkezés nélkül van lehetőség.

**Tesztesetek:**

1. A kiválasztott dalszöveg megtalálható az adatbázisban. 
Elvárt eredmény: a dalszöveg letöltése megkezdödjön. 
2. A kiválasztott dalszöveg nem elérhető az adatbázisban. 
Elvárt eredmény: hibaüzenet jelenjen meg a dalszöveg elérhetetlenségéről.

       
## 12. Telepítési terv

* Fizikai telepítési terv:
  * Adatbázis- és webszerver 
    * Ubuntu Server 20.04.02 LTS operációs rendszer futtatására alkalmas. 
    * MongoDB adatbázis elérés biztosítása.
    * Node.js szoftvercsomag futtatásának biztosítása.  
    * Akár nagy számú (egyidőben több ezer) felhasználó kiszolgálására is elegendő teljesítménnyel rendelkezzen.
    * A teljesítménye legalább a következő konfigurációval ekvivalens: 4 magos 2.4+ GHz CPU, 32GB RAM, 2x500GB SSD RAID, jó minőségű tápegység.
    * A számítógépháznak és a hűtés kialakításának alkalmasnak kell lennie szerverteremben lévő rack szekrényben történő elhelyezésre.  

  * A szerver elhelyezése
    * A kiszolgáló olyan szerverteremben kerül elhelyezésre, ahol biztosított a 24 órás hozzáférés.
    * A szerver elhelyezése rack szekrényben történik.   
    * Az szerverteremben biztosított internetkapcsolatnak el kell érnie a 1Gbit/s letöltési és feltöltési sebességet belföldi és nemzetközi irányokban is.
    * Fontos a rendelkezésre állás, ezért a megbízható áramellátás áramkimaradás esetén akár aggregátorról is biztosított legyen.
    * Legalább 10TB adatforgalom álljon rendelkezésre a belföldi és nemzetközi irányokba történő adatátvitelhez.

* Szoftver telepítési terv:
  * Szerver:
    * Ubuntu Server 20.04.02 LTS operációs rendszer.
    * MongoDB Community Server 4.4.5 adatbáziskezelő.
    * Node.js 14.16.1 szoftvercsomag
  
  * Kliens:
    * A szoftver felhasználói felülete a népeszerű böngészők legfrissebb verzióinak használatával elérhető (pl. Mozilla Firefox, Google Chrome, Microsoft Edge, Apple Safari), egyéb szoftver telepítésére nincs szükség.
  
    
      
      
             
  
   
   


