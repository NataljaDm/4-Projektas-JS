console.clear();

const x = 3
console.log(x);
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

function inicialai(vardas, pavarde) {
    return `${vardas[0]}.${pavarde[0]}.`;
}

const ini1 = inicialai('Chuck', 'Norris');
const ini2 = inicialai('Pamela', 'Anderson');

console.log('Inicialas 1:', ini1);
console.log('Inicialas 2:', ini2);



// Sveiki, mano vardas Jonas ir man 99 metai!
// Sveiki, mano vardas Maryte ir man 88 metai!
// Sveiki, mano vardas Petras ir man 50 metai!
// Sveiki, mano vardas Ona ir man 25 metai!

function sakinis(vardas, metai) {
    return `Sveiki, mano vardas ${vardas} ir man ${metai} metai!`
}
const a1 = sakinis (`Jonas`, `99`);
const a2 = sakinis (`Maryte`, `88`);
const a3 = sakinis (`Petras`, `50`);
const a4 = sakinis (`Ona`, `25`);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);