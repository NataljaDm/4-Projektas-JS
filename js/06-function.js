console.clear();
/*
FUNCTION - perpanaudojamas logikos blokas
*/

function empty() {
}

empty();

console.log(true);
console.log();
console.log(5555);
console.log(empty());
console.log('labas');

console.log('---------------');

function showMeNumber() {
    return 7;
}

console.log(showMeNumber());

function sayMyName() {
    return 'Maryte';
}

const myName = sayMyName();

console.log(myName);
console.log(sayMyName());

console.clear();

function suma(pirmas, antras) {
    return pirmas + antras;
}

const s1 = suma(7, 5);
const s2 = suma(-5, 5);
const s3 = suma(100, -7);
console.log(s1);
console.log(s2);
console.log(s3);

function pirmaRaide(vardas) {
    return vardas[0] + vardas[1];
}

const r1 = pirmaRaide('Jonas');
const r2 = pirmaRaide('Maryte');
const r3 = pirmaRaide('Petras');
const r4 = pirmaRaide('Ona');
const r5 = pirmaRaide('Martynas');

console.log('Pirmos raides:', r1, r2, r3, r4, r5);