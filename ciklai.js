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

while (randomNr !== 5) {
    randomNr = Math.trunc(Math.random() * 11);
    console.log("Naujas random skaicius yra: ", randomNr);
}
console.log("Paskutinis skaicius turi buti: 5... Dabartinis last skaicius yra: ", randomNr);
console.log('____________________________9_ciklas____________________________');
// 9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
let totalSuma = 0;

while (totalSuma <= 100) {
    randomNr = Math.trunc(Math.random() * 11);
    console.log("Naujas random skaicius yra: ", randomNr);
    totalSuma += randomNr;
}
console.log("Jei max random skaicius <=100 stabdyti cikla... Dabartine skaiciu suma yra:", totalSuma);
console.log('____________________________10_ciklas____________________________');
// 10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
let IsVisoCiklu = 0;

while ((randomNr !== 5 ) && (randomNr !== 7)) {
    randomNr = Math.trunc(Math.random() * 11);
    console.log("Naujas random skaicius yra: ", randomNr);
    IsVisoCiklu++;
}
console.log("Paskutinis skaicius turi buti: 5 arba 7...  Paskutinis skaicius yra: ", randomNr);
console.log("Is viso ciklu buvo sukurta: ", IsVisoCiklu);
console.log('____________________________11_ciklas____________________________');
// 11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10
// (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
let maxSuma20 = 0;
let neAnksciau11Ciklu = 0;

while (maxSuma20 < 20 || neAnksciau11Ciklu <= 11) {
    randomNr += Math.trunc(Math.random() * 11);
    console.log("Naujas random skaicius yra: ", randomNr);
    maxSuma20 += randomNr;
    neAnksciau11Ciklu++;
}
console.log('Total suma turi buti daigiau negu 20... Dabartine sugeneruota suma yra : ', randomNr);
console.log("Ciklas turi pasibaigti ne anksciau 11 ciklu... Is viso ciklu: ", neAnksciau11Ciklu);
console.log('____________________________12_ciklas____________________________');
// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
let = trisNelyginiaiSk = 0;

while (trisNelyginiaiSk < 3) {
    randomNr = Math.trunc(Math.random() * 11);
    console.log("Naujas random skaicius yra: ", randomNr);
    if (randomNr % 2 !== 0) {
        trisNelyginiaiSk++;
    }
}
console.log('Reikia sugeneruoti x3 nelyginius skaicius... Sugeneruota nelyginiu skaiciu suma: ', trisNelyginiaiSk);
console.log('____________________________13_ciklas____________________________');
// 13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
// (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
let randomNr1 = 1;
let randomNr2 = 2;

while (randomNr1 !== randomNr2) {
    randomNr1 = Math.trunc(Math.random() * 11);
    randomNr2 = Math.trunc(Math.random() * 11);
    console.log('pirmas skaicius: ', randomNr1, 'antas skaicius: ', randomNr2);
} 
console.log('pirmas skaicius yra: ', randomNr1, 'o antras yra: ', randomNr1, 'kadangi iskrito abu vienodi, tai stabdyti cikla');
console.log('____________________________14_ciklas____________________________');
// 14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
// (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. 
// Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100
let randomNr3 = 0;
let randomNr4 = 1;

while (randomNr3 <= 100 || randomNr4 <= 100) {
    randomNr3 = Math.trunc(Math.random() * 10);
    randomNr3 += randomNr4;
    randomNr4 = Math.trunc(Math.random() * 10);
    randomNr4 += randomNr3;
    console.log('pirmas skaicius yra: ', randomNr3, 'antras skaicius yra: ', randomNr4);
} 
console.log('pirmas random skaicius yra: ', randomNr3, 'o antras random skaius yra: ', randomNr4, 'stabdyti cikla kdangi abieju skaiciu sumos yra daugiau negu 100');

console.log('____________________________15_ciklas____________________________');
// 15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
// (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.




// let randomNr5 = 0;
// let randomNr6 = 0;

// while (randomNr5 < 3 && randomNr6 < 3) {
//     randomNr5 = Math.trunc(Math.random() * 11);
//     randomNr6 = Math.trunc(Math.random() * 11);
//     console.log('pirmas skaicius yra: ', randomNr5, 'antras skaicius yra: ', randomNr6);
//     if (randomNr5 % 2 !== 1 || randomNr6 % 2 !== 1) {
//         randomNr5++;
//         randomNr6++;
//         console.log('pirmas skaicius yra: ', randomNr5, 'antras skaicius yra: ', randomNr6);
//     }
// }    
// console.log('Kadangi pirmas random skaicius turi: ', randomNr5, 'nelyginius, o antras random skaius turi: ', randomNr6, 'stabdyti cikla (abu skaiciai turi po 3 ar daugiau nelyginiu skaiciu)');




console.log('________________________________END_______________________________');