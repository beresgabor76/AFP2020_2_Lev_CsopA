# Követelményspecifikáció

## 1. Vezetői összefoglaló

A jelen projekt célja, hogy idegen nyelvű dalszövegeket és azok magyar fordításait gyűjtse egy központi adatbázisban, lehetővé téve bármely 
zenerajongó számára, hogy zenehallgatás közben a dalok eredeti szövege mellett azok magyar fordítását is olvashassák valamely online platformon, 
pl. laptopon böngészőben vagy mobilalkalmazásban, ezzel segítve őt abban, hogy jobban megértse a dalok mondanivalóját.  

## 2. Jelenlegi helyzet leírása

Nagyon sok zenét szerető hallgató számára nem csak a zene fontos egy dalban, hanem annak szövege is. Azonban egy dal szövege csak kevés esetben érhető el. A zenei kiadók ezt az igényt úgy próbálják meg kielégíteni, hogy egy zenei kiadvány (pl: CD) nyomtatott borítójának belsejében adják meg a kiadott dalok szövegét. Ha a kiadott dal idegen nyelvű, akkor viszont a borítóban leírt szöveg is csak idegen nyelven található. Az a hallgató, aki az idegen nyelvű dalszöveg magyar fordítását szeretné elérni, kénytelen saját maga lefordítani vagy lefordíttatni a szöveget.
Napjainkban már nagyon sok zene elérhető online is, vannak már dalszöveg gyűjtemények az interneten. A zenekedvelő hallgatótól viszont sok energiát kíván meg, ha az idegen nyelvű dalszöveget és annak magyar fordítását egy helyen szeretné megtalálni, ráadásul legtöbb esetben a magyar fordítást saját magának kell elvégeznie, ha a nyelvtudása ezt lehetővé teszi.

## 3. Vágyálomrendszer leírása

A cél, hogy a feltöltők, a letöltők és az adminisztrátorok számára egységes informatikai rendszer álljon rendelkezésre, amely
hatékonyan képes támogatni a dalszövegek tárolását, keresését, rendszerezését, megjelenítését, ellenőrzését,  javítását, így 
támogatva az adminisztrátorok könnyebb munkavégzését és a felhasználók könnyed szórakozását. A létrehozandó rendszerben 
nyilván kell tartani a dalszövegek magyar és idegen nyelű forrásait, továbbá feltöltők regisztrációval és rendszerhasználattal
kapcsolatos adatait, emellett az adminisztrátorok munkavégzéséhez szükséges  tudnivalókat. A feltöltést végző felhasználóknak 
legyen lehetőségük név, jelszó, e-mail megadása után regisztrálniuk magukat a rendszerben. Sikeres regisztrációt követően a dalszöveg
előadóját, címét, album címét, kiadás évét megadva az eredeti és magyar nyelvű szöveget felvihesse a rendszerbe a jóváhagyásra 
váró dalszövegek közé. Miután az elbírálásra várók közé került a dalszöveg, legyen lehetőség  nyomonkövetni a státuszt, amennyiben
a fordítás visszautasításra került legyen lehetőség javításra és újbóli jóváhagyás igénylésére. Az adminisztrátorok a rendszerbe
való belépést követően a jóváhagyandó fordításra váró dalszövegek közül az általa beszélt nyelveknek megfelelőeket ellenőrzi, majd 
jóváhagyja vagy visszautasítja a feltöltést. Jóváhagyás után megtörténik a véglegesítés, visszautasítás esetén pedig a feltöltő feladata
javítani a fordítást. Ennek elvégzésére egy hónapja van, az adminisztrátor az egy hónapnál régebben visszautasított fordításokat
törli. A letöltő számára nincs szükség regisztrációra, alapvetően kétféle keresési funkció áll a rendelkezésére. Az egyik lehetőség, 
hogy a dalszöveg előadója, címe vagy az album címe alapján tud keresni, majd a találatok közül egymás mellett meg tudja jeleníteni
a dalszöveg eredeti és  magyar nyelvű fordítását. Másik lehetőség, hogy a legújabb jóváhagyott feltöltések közül keressen, majd
amennyiben számára érdekeset talált, akkor a megjelenítést az előbbivel analóg módon kivitelezheti. Fontos követelmény, hogy
a rendszer minden érintett számára interneten keresztül elérhető legyen, a felhasználói felület könnyen értelmezhető, használata 
az érintettek számra gyorsan tanulható legyen, ne kívánjon speciális képzést. További kritérium az elterjedt szabványok alkalmazása,
és az operációsrendszertől való függetlenség. 

## 4. A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása

**Európai uniós rendeletek, irányelvek, ajánlások**
*AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2019/790 IRÁNYELVE (2019. április 17.)* a digitális egységes piacon a szerzői és szomszédos jogokról, valamint a 96/9/EK és a 2001/29/EK irányelv módosításáról

*AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2017/1563 RENDELETE (2017. szeptember 13.)* a szerzői és szomszédos jogi védelemben részesülő egyes művek és más teljesítmények hozzáférhető formátumú példányainak a vakok, látáskárosultak és nyomtatott szöveget egyéb okból használni képtelen személyek érdekét szolgáló, határokon átnyúló, az Unió és harmadik országok közötti cseréjéről

*2017/1564/EU európai parlamenti és tanácsi irányelv (2017. szeptember 13.)* a szerzői és szomszédos jogi védelemben részesülő egyes műveknek és más teljesítményeknek a vakok, látáskárosultak és nyomtatott szöveget egyéb okból használni képtelen személyek érdekét szolgáló egyes megengedett felhasználási módjairól, valamint az információs társadalomban a szerzői és szomszédos jogok egyes vonatkozásainak összehangolásáról szóló 2001/29/EK irányelv módosításáról szóló,

*2012/28/EU irányelv* az árva művek egyes megengedett felhasználási módjairól

*A Bizottság 2011/711/EU ajánlása (2011. október 27.)* a kulturális anyagok digitalizálásáról és online hozzáférhetőségéről, valamint a digitális megőrzésről

*98/34/EK európai parlamenti és tanácsi irányelv* a műszaki szabványok és szabályok, valamint az információs társadalom szolgáltatásaira vonatkozó szabályok terén információszolgáltatási eljárás megállapításáról (a 98/48//EK európai parlamenti és tanácsi irányelvvel módosította)

*96/9/EK irányelv* (1996. március 11.) az adatbázisok jogi védelméről


**Hazai törvények**
*A 2001. évi CVIII.törvény*  az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről

*2007. évi LXXIV. törvény* a műsorterjesztés és a digitális átállás szabályairól

*2001. évi Magyarország digitális gyeremekvédelmi stratégiája*

*T/19081. számú törvényjavaslat* a digitális műsorterjesztés szabályairól 

*270/2018. (XII. 20.) Korm. rendelet* az információs társadalommal összefüggő szolgáltatások elektronikus információbiztonságának felügyeletéről és a biztonsági eseményekkel kapcsolatos eljárásrendről

*1999. évi LXXVI. törvény* a szerzői jogról

*2014. évi XXII. törvény* a reklámadóról

## 5. Jelenlegi üzleti folyamatok modellje

**Üzleti szereplő:**  
- vevő (zenehallgató)  
- streamelő (zenehallgató)
  
**Üzleti munkatárs:**  
- zenei kiadó  
- zenei stream szolgáltató, pl. Spotify
- idegen nyelvű online dalszöveg gyűjtemény, pl. azlyrics.com
  
**Üzleti entitások:**    
- CD betétkönyvében lévő dalszöveg eredeti nyelven  
- online dalszöveg gyűjteményben lévő dalszöveg eredeti nyelven  

**Üzleti folyamatok:**  

**Zenei kiadó számára:**   
1. zenei kiadó a CD tokjában mellékletként elhelyez egy betétkönyvet, melyben a dalszövegek az eredeti nyelvükön szerepelnek nyomtatott formában  
  
**Vevő számára:**   
1. vevő a megvásárolt CD betétkönyvében szereplő eredeti nyelvű dalszöveget elolvassa, nyelvtudás esetén szótár használatával megpróbálja értelmezni  

**Streamelő számára:**   
1. a stream szolgáltatást igénybe vevő zenehallgató az idegen nyelvű dalszöveg gyűjteményben megkeresi és próbálja lefordtani, értelmezni 
a dalszöveget saját maga számára   


## 6. Igényelt üzleti folyamatok modellje
  
**Üzleti szereplők:** 	
- feltöltő (fordító)  
- letöltő (zenehallgató)  
  
**Üzleti munkatárs:** 	
- adminisztrátor (ellenőr)  
  
**Üzleti entitások:**  
- dalszöveg eredeti nyelven  
- dalszöveg magyar nyelven    

**Üzleti folyamatok:** 

**Online folyamatok feltöltő számára:**  
1. feltöltő regisztrációt kezdeményez => megadja email címét, jelszavát, nevét => regisztrációt véglegesíti  
2. feltöltő belép a rendszerbe => dalszöveg előadóját, címét, album címét, kiadás évét megadja => 
 eredeti nyelvű dalszöveget feltölti => magyar nyelvű dalszöveget feltölti => a feltöltött dalszövegek a jóváhagyásra váró sorba kerülnek  
3. feltöltő belép a rendszerbe => megnézi az általa feltöltött dalszöveg státuszát => visszautasítás esetén, vagy módosítja, vagy törli a feltöltést
 => ha módosítja, a dalszöveg újra visszakerül a jóváhagyásra váró dalszövegek sorába

**Online folyamatok adminisztrátor számára:**  
1. adminisztrátor belép a rendszerbe => a jóváhagyásra váró dalszövegek sorából az általa beszélt nyelvűek közül az elsőt ellenőrzi => 
 ha az eredeti dalszöveg és a magyar fordítás helyes, jóváhagyja a feltöltést => feltöltés véglegesítésre kerül  
2. adminisztrátor a jóváhagyásra váró dalszövegek sorából az általa beszélt nyelvűek közül a sorban következő dalszöveget ellenőrzi => 
 ha az eredeti nyelvű szöveg eltér az albumban szereplő dalszövegtől vagy a magyar fordítás nem helyes, a feltöltést visszautasítja  
3. adminisztrátor a visszautasított dalszövegek sorát ellenőrzi => az egy hónapnál régebbi feltöltéseket törli  

**Online folyamatok letöltő számára:**  
1. letöltő a dalszöveg előadója, címe vagy album címe alapján keresést végez => a találatok közül megjeleníti a kívánt dalszöveg eredeti és 
 magyar nyelvű fordítását egymás mellett  
2. letöltő a legújabban feltöltött dalszövegek között böngészhet => a találatok közül megjeleníti a kívánt dalszöveg eredeti és 
 magyar nyelvű fordítását egymás mellett  
   

## 7. Követelménylista


## 8. Irányított és szabad szöveges riportok szövege


## 9. Fogalomszótár


