# Funkcionális specifikáció

## 1. A rendszer céljai és nem céljai

A fejlesztés célja olyan informatikai rendszer készítése zenerajongók számára, amely hatékonyan kezeli a dalszövegek 
megjelenítését, a magyar és idegen nyelvű szövegek tárolását és azok feldolgozását.
Annak érdekében, hogy a felhasználók számára minél könyebb legyen az új rendszer használata, hasonlóan működik a megjelenítés 
a szokványos papíralapú megoldásokhoz, azaz egymás mellett megjelenik a magyar és idegen nyelvű szöveg. Az adminisztrátorok 
munkájának megkönnyítése is a rendszer célkitűzései között szerepel. A rendszer különböző feladatkörrel rendelkező felhasználói
különböző jogosultságokkal rendelkeznek azzal kapcsolatban, hogy milyen műveleteket végezhetnek.
Meg kell valósítani a dalszövegek nyilvántartását, amely a letöltés céljából rendelkezésre álló dalszöveg példányokat 
tartalmazza, ennek a katalógusnak kereshetőnek, valamint bővíthetőnek is kell lennie.
Az adminisztrátorok lesznek a rendszer fő felhasználói, ők végezik a nyilvántartás karbantartását, a dalszövegek adminisztrációját,
valamint ellenőrzik a fordítások helyességét, ezért fontos, hogy az általuk használt funkciók ergonomiája minél jobb legyen,
továbbá a lehető legjobban támogassák a hatékony munkavégzést. 
Azért, hogy az elérhető dalszövegek listáját minél szélesebb körben megismerhessék, a fejlesztett rendszer része lesz egy, az
interneten keresztűl elérhető nyilvános honlap is, amin keresztül a dalszövegek katalógusa regisztráció nélkül is kereshető 
lesz minden látogató számára. A dalszövegek feltöltéséhez már regisztráció szükséges a felhasználók részéről.
A fejlesztés első ütemében a fő funkciók (feltöltők nyilvántartása és kezelése, dalszövegek nyilvántartása
és adminisztrációja,) megbízható működésének megvalósítása a célja, de nem cél a rendszer általánosabb felhasználásra történő
felkészítése, mint pl. a dalszövegek fordítása, ezt minden felhassználó önállóan végzi továbbá jelenleg nem cél a telepített 
rendszer más rendszerekkel való összekapcsolása sem. Figyelembe véve, hogy a backend szerver alkalmazás egy rest api, a jövőben 
fejleszteni lehet kliens alkalmazást mobil platformra is, a jelenleg tervezett böngészőben futón túl.

## 2. Használati esetek


## 3. Megfeleltetés, hogyan fedik le a használati esetek a követelményeket
 

## 4. Képernyőtervek
  
### Kezdőképernyő  
![kezdo](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/kezdo_oldal.jpg)  
  
### Regisztrációs képernyő  
![regisztracio](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/regisztracios_oldal.jpg)  
  
### Bejelentkezési képernyő  
![bejelentkezes](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/bejelentkezesi_oldal.jpg)  
  
### Feltöltési képernyő  
![feltoltes](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/feltoltes_oldal.jpg)  
  
### Keresési képernyő  
![kereses](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/kereses_oldal.jpg)  
  
### Dalszöveg képernyő  
![dalszoveg](https://github.com/beresgabor76/AFP2020_2_Lev_CsopA/blob/main/Doc/image/dalszoveg_oldal.jpg)    
  
## 5. Forgatókönyvek

A *Dalszovegek.hu főoldala*  jelenik meg minden felhasználó számára legelőször, amely segítségével lehetőség van a rendszerbe 
történő bejelentkezésre, regisztrációra illetve keresésre. E funkciók közül nyomógombok segítségével választhat a felhasználó.
Bejelentkezést választva a Bejelentkezés, regisztrációt választva a Regisztráció, keresést választva a Dalszöveg keresése oldal
kerül betöltésre. A menü mellett az oldalon még megjelenik két statisztika is, melyek egyike a legújabban feltöltött 
dalszövegeket, míg másika a legnépszerűbbeket tartalmazza. Elegáns designként egy gitár és a honlap címe is látható az oldalon 
e kép és cím végigkíséri a navigiációt.

A *Bejelentkezés dalszövegek feltöltéséhez vagy adminisztrációjához* oldal a bejelentkezéshez szükséges e-mail cím és jelszó
mezőket tartalmazza, továbbá az említett képet és az oldal nevét. Természetesen látható a bejelentkezés, továbbá egy mégsem 
feliratú nyomógomb. A bejelentkezést választva a rendszer felismeri, hogy feltöltő, vagy adminisztrátor a bejelentkezett
felhasználó és ennek függvényében irányítja a következő oldalakra. Amennyiben a mégsem lehetőséget választja az alkalmazó, 
akkor automatikusan a főoldalra kerül a user. Sikertelen bejelentkezés esetén a felhasználót a rendszer értesíti. Ha
adminisztrátorként jelentkezik be valaki, megjelennek számára az általa beszélt nyelvű, még jóvá nem hagyott dalok  feltöltési
sorrendben, amiből választva megjelennek a dalszövegek egymás mellett a dalszövegek oldalhoz hasonlóan. Az oldal alján levő 
jóváhagyás vagy visszautasítás gombokkal tudja elfogadni vagy sem, egy hibák rovatban megjelölheti a kifogásolt részleteket 
(x. sor: hibás szó v. kifejezés formában).

*A dalszöveg keresése a gyűjteményben* oldal lehetőséget biztosít előadó, dalszövegrészlet, vagy dal címe alapján történő 
keresésre az adatbázisban. Természetesen ezek a funkciók kombinálhatóak is. Két nyomógomb közül az egyik a keresés indítására, 
míg a másik a főoldalra történő visszalépésre szolgál. Sikeres keresés esetén betöltődik a kívánt dalszövet és fordítást
tartalmazó oldal.  Amennyiben nem találaható a feltételeknek megfelelő tartalom  a felhasználó erről üzenetet kap.

Sikeres keresést követően *A dalszöveg megjelenítése* oldalon  látható a jól ismert kép mellett a dalszöveg eredeti nyelvű
szövege, illetve magyar nyelvű fordítása. Erről az oldalról nem lehet tovább navigálni.

*A dalszöveg feltöltése a gyűjteménybe* oldal a bejelentkezést követően kerül betöltésre. Itt szükséges megadni a dal címét,
előadóját, eredeti és magyar nyelvű szövegét, amit egy-egy fájl feltöltésével lehet megvalósítani. A fetöltött anyagok csak
jóváhagyást követően érhetők el. Erről az oldalról nincs lehetőség tovább navigálni.

*Regisztráció dalszövegek feltöltéséhez* oldalon regisztrációhoz minimálisan szükséges adatok megadására van szükség, amelyek az
e-mail cím, azonosító(megjelenített név), jelszó, megadására szorítkoznak. A regisztráció nyomógombot megnyomva a felhasználó
visszajelzést kap a sikerről, vagy a sikertelen kísérletről.


## 6. Funkció–követelmény megfeleltetés
ID|Verzió|Követelmény|Funkció
--|------|-----------|-------
K01|V1.0|Feltöltők nyilvántartása|Feltöltők regisztrációjának, beléptetésének, törlésének megvalósítása a programban a használati esetekben leírtak szerint.  
K02|V1.0|Adminisztrátorok nyilvántartása|Adminisztrátorok regisztrálása, beléptetése és törlése a használati esetekben leírtak szerint.
K03|V1.0|Dalszövegek nyilvántartása|A feltöltött dalszövegek tárolása, kategorizálása, módosítása, lekérdezése használati esetekben leírtak szerint. 
K04|V1.0|Feltöltők által végezhető műveletek megvalósítása|Dalszövegek feltöltése, kategorizálása, módosítása, törlése a használati esetekben leírtak szerint.
K05|V1.0|Letöltők által végezhető műveletek megvalósítása|Dalszövegek böngészése, keresése, megtekintése és letöltése a használati esetekben leírtak szerint.
K06|V1.0|Adminisztrátorok által végezhető műveletek megvalósítása|Feltöltött dalszövegek böngészése, ellenőrzése, jóváhagyása vagy visszautasítása, illetve nyomon követése a használati esetekben leírtak szerint.
K07|V1.0|A rendszer a felhasználók széles rétege számára legyen könnyen elérhető|Interneten keresztül, minden népszerű böngészőben elérhető felhasználói felület megvalósítása HTML, JavaScript és React technológiák használatával.
K08|V1.0|Platformfüggetlen, robusztus működés|Szabványos, az iparágban régóta bevált, operációs rendszertől független technológiák (HTML, JavaScript, Node.js, React) használata biztosítja.
K09|V1.0|Költséghatékony üzemeltetés|A szabványos, elterjedt és nyílt technológiák használata biztosítja a szerver oldalon: Node.js, MongoDB.
K10|V1.0|Bővíthetőség|Robosztus adatbáziskezelő rendszer használata, a tervezésnél figyelembe vesszük, hogy később milyen bővítési igények léphetnek fel. 


