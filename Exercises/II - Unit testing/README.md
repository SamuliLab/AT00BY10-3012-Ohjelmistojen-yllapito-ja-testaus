# Aritmetiikkakirjasto (mylib) + Mocha/Chai‑testit

Yksinkertainen JavaScript‑kirjasto, joka tarjoaa perusaritmetiikan toiminnot sekä niihin liittyvät yksikkötestit Mocha + Chai ‑ympäristössä.

## Asennus
npm install

## Pääohjelman suoritus
node main.js

## Testien suoritus
npm test

## Rakenne
mylib.js – aritmetiikkafunktiot  
main.js – esimerkkiohjelma  
test/mylib.test.js – Mocha/Chai‑testit  

## Toiminnot
- add(a, b) – summa  
- subtract(a, b) – erotus  
- multiply(a, b) – tulo  
- divide(a, b) – osamäärä, heittää virheen jos jakaja on 0  

## Huomioita
- Testit sisältävät before/after‑hookit  
- ZeroDivision‑virhe testataan erikseen  
- .gitignore estää node_modules‑hakemiston versionoinnin
