# Refleksioner  *(EKSEMPEL)*



## Niveau 1 - Opgave 01

Jeg tænkte først det ikke var et problem ikke at lave if statement på farven, fordi jeg lavede en variabel der togglede mellem true og false hver gang der blev klikket. Men så fandt jeg ud af jeg slet ikke måtte lave if-statements overhovedet. Vagn pegede i retning af metoden array.reverse(). Det hjalp til at lave en løsning, hvor farven altid sættes til første index i et array, og arrayet så vendes om.

## Niveau 1 - Opgave 02 

Jeg synes den her opgave var nem.

## Niveau 1 - Opgave 03

Jeg synes ikke umiddelbart den her opgave var så svær heller. Jeg oprettede en funktion, hvor jeg lavede en variabel med den class selector, som bliver medsendt som argument. Derefter validerede jeg på om den fandtes og satte display til 'none' hvis den gjorde, og gav en fejlmeddelelse hvis den ikke gjorde.

## Niveau 2 - Opgave 01

Det var en udfordring at finde ud af hvordan mit tryk på een knap skulle påvirke udseendet på andre knapper. Jeg kom frem til at lave en highlight class, med en separat style, der skulle tilføjes ved hvert tryk på en knap, men inden da skulle fjernes fra et element, hvis et andet havde den class (altså som var blevet trykket på før). Det fungerede for så vidt fint, men fordi de oprindelige buttons er stylet på et nested #id tag (dårlig semantik) kunne min class style ikke overskrive. Jeg var derfor nødt til - sammen med classen, som jeg bruger til at selecte på - at sætte og fjerne baggrundsfarve på hhv. highlight class og event.target. 

## Niveau 2 - Opgave 02

Det der går fint er at opsætte og style dokumentet og give classes og id til alle de nødvendige ting. Jeg kunne også fint lave en function, der gjorde det den skulle for det enkelte produkt. Udfordringen var at funktionen skulle være click event på to knapper, men påvirke to andre elementer. Så det er svært at lave en funktion, der er universel til alle tre pga alle de parametre der skal med. 
Det er desuden en udfordring at generere alle elementerne dynamisk via js (array af objekter) pga mængden af information og classes der skal holdes styr på. 

(Opdatering) kom i mål med at refactor al koden så al markuppen genereres i js via forEach loop osv baseret på et array med produkter. Det hjalp også ift at tilføje funktioner med specifikke parametre på hver button i hvert card item. Men det var ikke let at nå i mål.