
/*
FOR - ciklas, kuris kartoja procesus N-kartu
for (1; 2; 3) {}
1) inicijuojame kintamaji pasikartojimu kiekiui skaiciuoti (aka, tai kelintas dabar kartas?)
2) ar kartoti? jei tenkina - kartojam, jei ne - baigiam darba
3) tai kaip keisti 1) dalies kintamaji?
*/

const tekstas = 'Su gimimo diena!';

for (let i = 0; i < 5; i = i + 1) {
    console.log(i, tekstas);
}

for (let i = 10; i < 17; i = i + 2) {
    console.log(`${i}) va ir tiek...`);
}

for (let x = 0; x <= 5; x++) {
    console.log(x + '...');
}

// Reikia isspausdinti visus teigiamus lyginius vienazenklius skaicius.
// 0, 2, 4, 6, 8

for (let n = 0; n <= 8; n += 2) {
    console.log(n);
}

console.log('#################');
// Reikia isspausdinti visus teigiamus lyginius vienazenklius skaicius atbuline tvarka.
// 8, 6, 4, 2, 0

for (let n = 8; n >= 0; n -= 2) {
    console.log(n);
}



// Kokia yra skaiciu suma nurodytame intervale (imtinai)?
const start = 0;
const end = 10;
const step = 1;

let sum = 0;

for (let i = start; i <= end; i += step) {
    sum += i;
    console.log('>>>', i, sum);
}

console.log(sum);



// Koks yra pazymiu vidurkis?
//                 0  1  2  3  4
const pazymiai = [10, 2, 8, 4, 6];
let pazymiuSuma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    pazymiuSuma += pazymys;
}

const pazymiuKiekis = pazymiai.length;
const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log(`Pazymiu vidurkis yra ${pazymiuVidurkis}.`);



// Kiek yra ne neigiamu skaiciu?
//                0   1  2   3   4   5  6   7
const numbers = [10, -7, 5, 77, 13, -9, 0, 14];
let kiek = 0;

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number >= 0) {
        kiek++;
    }
}

console.log('KIEK:', kiek);

const list = [];
for (let i = 0; i < list.length; i++) {
    const item = list[i];
}



const dictionary = ['Labas', 'rytas', 'sakau', 'tau', 'mano', 'mielas', 'mieste', 'Ka', 'tu', 'ka', 'vakare'];

// Kiek yra zodziu, kurie yra trumpesni nei "Labas"?
// Kiek yra zodziu, kurie yra ilgesni nei "Labas"?
// Kiek yra zodziu, kurie yra tokio pat ilgio kaip "Labas"?
// Pavyzdinis zodis gali buti kintamas.

let trumpi = 0;
let toksPat = 0;
let ilgu = 0;
const zodis = 'Labas';
const ilgis = zodis.length;

for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];

    if (word.length === ilgis) {
        toksPat++;
    } else if (word.length < ilgis) {
        trumpi++;
    } else {
        ilgu++;
    }
}

console.log('Trumpesniu zodziu:', trumpi);
console.log('Tokio pat ilgio zodziu:', toksPat);
console.log('Ilgesniu zodziu:', ilgu);

// Kiek duotas masyvas turi ieskomo skaiciaus atveju (kiekio)?
// m1:1 -> 3
// m1:2 -> 0
// m1:3 -> 0
// m2:1 -> 1
// m2:2 -> 2
// m2:3 -> 1
// m4:1 -> 5
// m4:2 -> 3
// m4:3 -> 2

const masyvas1 = [1, 1, 1];
const masyvas2 = [1, 2, 2, 3];
const masyvas3 = [5, 4, 3, 2, 1];
const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];


// [0..11] / 3 -> 4
// [0..11] / 5 -> 3
// [0..11] / 7 -> 2

function count(nuo, iki, daliklis) {
    let kiekis = 0;

    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            kiekis++;
        }
    }

    return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`;
}

console.log(count(0, 11, 3));
console.log(count(0, 11, 5));
console.log(count(0, 11, 7));

console.log(count(0, 10, 2));
console.log(count(0, 10, 5));
console.log(count(0, 10, 10));

console.clear();

function sumaIntervale(nuo, iki) {
    let suma = 0;

    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }

    return suma;
}

// console.log(sumaIntervale(0, 0));
// console.log(sumaIntervale(0, 1));
// console.log(sumaIntervale(0, 2));
// console.log(sumaIntervale(0, 3));
// console.log(sumaIntervale(0, 4));
// console.log(sumaIntervale(-50, 50));
// console.log(sumaIntervale(-70, 30));
// console.log('---------------------');
// console.log(sumaIntervale(0, 1245625145));

function intervale(nuo, iki) {
    return iki * (iki + 1) / 2;
}

console.log(intervale(0, 1));
console.log(intervale(0, 2));
console.log(intervale(0, 3));
console.log(intervale(0, 4));
console.log(intervale(0, 5));
console.log(intervale(0, 10));
console.log(intervale(0, 100));
console.log(intervale(0, 1000));
console.log(intervale(0, 1000_000));
console.log(intervale(0, 1000_000_000));
console.log(intervale(0, 1000_000_000_000));
console.log(intervale(0, 1000_000_000_000_000));
console.log(intervale(0, 1000_000_000_000_000_000));
