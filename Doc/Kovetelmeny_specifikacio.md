# Követelményspecifikáció

## 1. Vezetői összefoglaló

A jelen projekt célja, hogy idegen nyelvű dalszövegeket és azok magyar fordításait gyűjtse egy központi adatbázisban, lehetővé téve bármely 
zenerajongó számára, hogy zenehallgatás közben a dalok eredeti szövege mellett azok magyar fordítását is olvashassák valamely online platformon, 
pl. laptopon böngészőben vagy mobilalkalmazásban, ezzel segítve őt abban, hogy jobban megértse a dalok mondanivalóját.  

## 2. Jelenlegi helyzet leírása


## 3. Vágyálomrendszer leírása


## 4. A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása


## 5. Jelenlegi üzleti folyamatok modellje

**Üzleti szereplő:**  
- vevő (zenehallgató)  
  
**Üzleti munkatárs:**  
- zenei kiadó  
  
**Üzleti entitások:**    
- CD betétkönyvében lévő dalszöveg eredeti nyelven  

**Üzleti folyamatok:**  

**Zenei kiadó számára:**  
1. zenei kiadó a CD tokjában mellékletként elhelyez egy betétkönyvet, melyben a dalszövegek az eredeti nyelvükön szerepelnek nyomtatott formában  
  
**Vevő számára:**  
1. vevő a megvásárolt CD betétkönyvében szereplő eredeti nyelvű dalszöveget elolvassa, nyelvtudás esetén szótár használatával megpróbálja értelmezni  
   

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


