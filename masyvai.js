console.log('______________________________1_Masyvas____________________________');
// 1.Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, 
// o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
const piniginesSkaiciai = [];

let lenghtNr = Math.trunc(Math.random() * (30 - 10 + 1) + 10);
for (let i = 0; i < lenghtNr; i++) {
    piniginesSkaiciai.push(Math.trunc(Math.random() * 11))
}
console.log('Pinigines masyvo skaiciai: ', piniginesSkaiciai);
console.log('Pinigines ilgis (lenght): ', piniginesSkaiciai.length);
console.log('______________________________2_Masyvas____________________________');
// 2. Naudojant ciklą apskaičiuoti masyvo iš 1 
// uždavinio reikšmių (pinigų esančių piniginėje) sumą;
let sumaNr = 0;

piniginesSkaiciai.forEach((number) => {
    sumaNr += number;
});
console.log('Pinigines visu skaiciu suma yra: ', sumaNr);
console.log('______________________________3_Masyvas____________________________');
// 3. Naudojant ciklą apskaičiuoti masyvo iš 1 
// uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;







// console.log('______________________________4_Masyvas____________________________');
// 4. Išleisti visus metalinius pinigus (reikšmes, kurios 
// yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

// console.log('______________________________5_Masyvas____________________________');
// 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti 
// kiek tokių didžiausių reikšmių masyve yra;

// console.log('______________________________6_Masyvas____________________________');
// 6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į 
// tų elementų indeksų (vietų, numerių) reikšmes;

// console.log('______________________________7_Masyvas____________________________');
// 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių 
// (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

// console.log('______________________________8_Masyvas____________________________');
// 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. 
// Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), 
// o į kitą didesnes nei 2 (popierinius pinigus);

// console.log('______________________________9_Masyvas____________________________');
// 9.Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, 
// kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras 
// elementas masyvas iš 8 uždavinio su popieriniais pinigais;

// console.log('______________________________10_Masyvas____________________________');
// 10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti 
// trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

// console.log('______________________________11_Masyvas____________________________');
// 11.Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

// console.log('______________________________12_Masyvas____________________________');
// 12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' 
// (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) 
// iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

// console.log('______________________________13_Masyvas____________________________');
// 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;

// console.log('______________________________14_Masyvas____________________________');
// 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, 
// kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;

// console.log('______________________________15_Masyvas____________________________');
// 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;

// console.log('______________________________16_Masyvas____________________________');
// 16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom 
// ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

// console.log('______________________________17_Masyvas____________________________');
// 17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 
// ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.

// console.log('______________________________18_Masyvas____________________________');
// 18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] 
// ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
