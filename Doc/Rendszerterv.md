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
- Németh Richárd
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
  
### 3.2 Üzleti folyamatok
  
### 3.3 Üzleti entitások 
  
## 4. Követelmények
  
### 4.1 Funkcionális követelmények  
  
### 4.2 Nemfunkcionális követelmények  
  
### 4.3 Törvényi előírások, szabványok  
   
## 5. Funkcionális terv
  
### 5.1 Rendszerszereplők
   
### 5.2 Rendszerhasználati esetek és lefutásaik 
   
### 5.3 Határ osztályok 
  
#### Az olvasó felhasználói tevékenységeihez kapcsolódó határosztályok
   
#### A könyvtáros felhasználói tevékenységeihez kapcsolódó határosztályok  
   
#### A könyvtáros felhasználó könyvkölcsönzési tevékenységeihez kapcsolódó határosztályok
   
#### A könyvtáros adminisztrátor kiegészítő felhasználói tevékenységeihez kapcsolódó határosztályok
    
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
    
### 8.1 Architekturális tervezési minta
    
### 8.2 Az alkalmazás rétegei, fő komponensei, ezek kapcsolatai
    
### 8.3 Változások kezelése
     
## 9. Adatbázisterv  
       
### 9.1 Logikai adatmodell 
    
### 9.2 Tárolt eljárások 
    
### 9.3 Fizikai adatmodellt legeneráló SQL szkript   
    
## 10. Implementációs terv
   
### 10.1 Perzisztencia osztályok 
   
### 10.2 Üzleti logika osztályai
    
### 10.3 Kliens oldal osztályai 
   
## 11. Tesztterv   
      
## 12. Telepítési terv
   


