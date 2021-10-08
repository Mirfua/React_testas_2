console.log('_________________________1_ciklas_______________________________');
// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
for (let i = 0; i < 5; i++)
console.log('Labas');
console.log('_________________________2_ciklas_______________________________');
// 2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 
// (vienas skaičius vienoje eilutėje);
for (let i = 0; i <= 4; i++)
console.log(i);
console.log('_________________________3_ciklas______________________________');
// 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 
// (vienas skaičius vienoje eilutėje);
for (let i = 0; i < 5; i++)
console.log(i * 10);
console.log('__________________________4_ciklas______________________________');
// 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 
// (vienas skaičius vienoje eilutėje);
for (let i = 49; i <= 53; i++)
console.log(i);
console.log('__________________________5_ciklas_____________________________');
// 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 
// (vienas skaičius vienoje eilutėje);
for (let i = 4; i >= 0; i--)
console.log(i);
console.log('__________________________6_ciklas_____________________________');
// 6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 
// (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
for (let i = 0; i <= 8; i+=2)
console.log(i);
console.log('___________________________7_ciklas_____________________________');
// 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus 
// atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
for (let i = 0; i < 5; i++) 
console.log(Math.trunc(Math.random() * 11));
console.log('___________________________8_ciklas_____________________________');
// 8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
let randomNr;

while (randomNr != 5) {
    randomNr = Math.trunc(Math.random() * 11);
    console.log(randomNr);
}
console.log('____________________________9_ciklas____________________________');
// 9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
let totalSuma = 0;

while (totalSuma <= 100) {
    randomNr = Math.trunc(Math.random() * 11);
    totalSuma += randomNr;
    console.log("new random number", randomNr);
    console.log("max random number <= 100", totalSuma);
}
console.log('____________________________10_ciklas____________________________');
// 10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;









console.log('____________________________11_ciklas____________________________');
// 11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10
// (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
console.log('____________________________12_ciklas____________________________');
// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
console.log('____________________________13_ciklas____________________________');
// 13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
// (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
console.log('____________________________14_ciklas____________________________');
// 14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
// Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100
console.log('____________________________15_ciklas____________________________');
// 15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
// Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.
console.log('________________________________END_______________________________');