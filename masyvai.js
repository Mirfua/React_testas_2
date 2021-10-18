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
// 3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų 
// (skaičių didesnių už 2 ) reikšmių sumą;
let sumaNr1 = 0;

piniginesSkaiciai.forEach((number) => {
    if (2 < number) sumaNr1 += number;
});
console.log('Pinigines visu skaiciu (kurie yra daugiau negu 2) suma: ', sumaNr1);
console.log('______________________________4_Masyvas____________________________');
// 4. Išleisti visus metalinius pinigus (reikšmes, kurios 
// yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

for ( let i = 0; i < piniginesSkaiciai.length; i++) {
    if (piniginesSkaiciai[i] <= 2)
    piniginesSkaiciai[i] = 0;
}
console.log("'Pinigu likuciai' = O isleidus visus metalinius pinigus kuriu reiksmes yra <=2): ", piniginesSkaiciai);
console.log('______________________________5_Masyvas____________________________');
// 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti 
// kiek tokių didžiausių reikšmių masyve yra;
let maxPiniguNr = 0;
let kiekMaxPinigu = 0;

for (let i = 0; i < lenghtNr; i++) {
    if (piniginesSkaiciai[i] > maxPiniguNr) {
        maxPiniguNr = piniginesSkaiciai[i];
        kiekMaxPinigu = 0;
    }
    if (piniginesSkaiciai[i] === maxPiniguNr) {
        kiekMaxPinigu++;
    }
}
console.log('Didziausia pinigu reiksme yra: ', maxPiniguNr, 'o ju kiekis yra: ', kiekMaxPinigu);
console.log('______________________________6_Masyvas____________________________');
// 6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į 
// tų elementų indeksų (vietų, numerių) reikšmes;

for (let i = 0; i < lenghtNr; i++) {
    if (piniginesSkaiciai[i] === 0) {
        piniginesSkaiciai[i] = i;
    }
}
console.log("Visi pinigai(skaiciau) kurie buvo lygus 0 pakeisti i ju indexsu reiksmes: ", piniginesSkaiciai);
console.log('______________________________7_Masyvas____________________________');
// 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių 
// (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

for (let i = lenghtNr; i < 30; i++) {
    piniginesSkaiciai[i] = Math.trunc(Math.random() * (30 - 10) + 10);
}
console.log("Prideti nauji pinigai(atsitiktiniai skaiciai) tol kol surenkam bendrai 30 vnt.(kupiuros+monetos): ", piniginesSkaiciai);
console.log('______________________________8_Masyvas____________________________');
// 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. 
// Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), 
// o į kitą didesnes nei 2 (popierinius pinigus);
let smulkiosMonetos = [];
let popieriniaiPinigai = [];

for (let i = 0; i < piniginesSkaiciai.length; i++) { 
    if (piniginesSkaiciai[i] <= 2) {
        smulkiosMonetos.push(piniginesSkaiciai[i])
    } else {
        popieriniaiPinigai.push(piniginesSkaiciai[i])
    }
}
console.log('Visos monetos: ', smulkiosMonetos);
console.log('Visi popieriniai pinigai: ', popieriniaiPinigai);
console.log('______________________________9_Masyvas____________________________');
// 9.Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, 
// kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras 
// elementas masyvas iš 8 uždavinio su popieriniais pinigais;
let pinigineSu2Skyreliais = [];

pinigineSu2Skyreliais.push(smulkiosMonetos);
pinigineSu2Skyreliais.push(popieriniaiPinigai);

console.log("Nauja pinigine su dviem skyreliais: ", pinigineSu2Skyreliais);
console.log('______________________________10_Masyvas____________________________');
// 10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti 
// trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
let pinigineSu3Skyreliais = pinigineSu2Skyreliais;

pinigineSu3Skyreliais.push(korteles);

console.log("Nauja pinigine su trimis skyreliais pridejus korteles: ", pinigineSu3Skyreliais);
console.log('______________________________11_Masyvas____________________________');
// 11.Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

// korteles.sort();
pinigineSu3Skyreliais[2].sort();

console.log("Korteles surusiuotos pagal abeceles tvarka: ", pinigineSu3Skyreliais);
console.log('______________________________12_Masyvas____________________________');
// 12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' 
// (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) 
// iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

for (let i = pinigineSu3Skyreliais[2].length; i < 20; i++) {
    if (Math.trunc(Math.random() * 2) < 1) {
        pinigineSu3Skyreliais[2].push('MasterCard')
    } else {
        pinigineSu3Skyreliais[2].push('Visa');
    }
}
console.log('pridetas papildomai random "MasterCard" ir "Visa" korteliu kiekis ir jomis uzpildom masyva iki 20 vnt.: ', pinigineSu3Skyreliais);
console.log('______________________________13_Masyvas____________________________');
// 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
let totalVisa = 0;
let totalMaster = 0;

for (let i = 0; i < korteles.length; ++i) {
    if (korteles[i] === 'Visa') {
        totalVisa++;
    }
    if (korteles[i] === 'MasterCard') {
        totalMaster++;
    }
}
console.log("Visa korteliu: ", totalVisa, "MasterCard korteliu: ", totalMaster);
console.log('______________________________14_Masyvas____________________________');
// 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, 
// kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
let loterijosBilietai = [];

for (let i = 0; i < 10; i++) {
    let biletuRandomReiksmes = Math.trunc(Math.random() * (9999999999 - 1000000000) + 1000000000);
    loterijosBilietai.push(biletuRandomReiksmes);
}
pinigineSu3Skyreliais.push(loterijosBilietai);
console.log("'biletu' masyvo pridejimas kaip 4-ojo pinigines elementu idejimas: ", pinigineSu3Skyreliais);
console.log('______________________________15_Masyvas____________________________');
// 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
let pinigineSu4Skyreliais = pinigineSu3Skyreliais;

pinigineSu4Skyreliais[3].sort(function(a, b) {
    return b - a;
});
console.log("Biletai surusiuoti nuo didziausio iki maziausio: ", pinigineSu4Skyreliais);
console.log('______________________________16_Masyvas____________________________');
// 16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom 
// ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
let piniguSuma = 0;
let kupiura;
let visosNaujosKupiuros = [];

while (piniguSuma < 500) {
    kupiura = Math.trunc(Math.random() * (10 - 3) + 3);
    piniguSuma += kupiura;
    visosNaujosKupiuros.push(kupiura);
    if (piniguSuma > 500) {
        piniguSuma = 0;
        visosNaujosKupiuros = [];
    }
}
Array.prototype.push.apply(popieriniaiPinigai, visosNaujosKupiuros);

console.log("i popierine pinigine prideta papildomaij 500 suma kurios kupiuros yra nuo 3 iki 10: ", pinigineSu4Skyreliais);
console.log('______________________________17_Masyvas____________________________');
// 17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 
// ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
let laimingiBiletai = 0;

for (let i = 0; i < pinigineSu4Skyreliais[3].length; i++) {
    if (pinigineSu4Skyreliais[3][i] % 777 === 0) {
        laimingiBiletai++
    }
}
console.log('Laimingi bilietai: ', laimingiBiletai);
console.log('______________________________18_Masyvas____________________________');
// 18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] 
// ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;

pinigineSu4Skyreliais.push(['šuo', 'katė', 'automobilis', 'namas', 'kiemas']);
let pinigineSu5Skyreliais = pinigineSu4Skyreliais

pinigineSu4Skyreliais[4].sort(function(a, b) {
    return a.length - b.length;
});
console.log('Nauja pinigine su 5 skyrialais: ', pinigineSu5Skyreliais);