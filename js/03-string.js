console.clear();

/*
STRING - tekstiniu simboliu grandinele, aka tekstas

Iniciavimo budai:
- viengubos kabutes ('')
- dvygubos kabutes ("")
*/

const vardas = 'Jonas';
const vardas2 = "Maryte";

console.log(vardas);
console.log(vardas2);


const firstName = 'Ona';
const lastName = 'Onaityte';

// Ona Onaityte
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Sveiki, as esu Ona!
// Sveiki, as esu Jonas!
// Sveiki, as esu Maryte!
const rekiam = 'Sveiki, as esu ' + firstName + '!';

console.log(rekiam);

console.log('---------------------------');

// Vienguba kabute (').
const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

// Dviguba kabute (").
const kabute2 = 'Dviguba kabute (").';
console.log(kabute2);

// Vienguba (') ir dviguba (") kabutes.
// Vienguba (') ir dvi
// guba (") kabutes.
const kabute12 = "Vienguba (') ir dvi" + 'guba (") kabutes.';
console.log(kabute12);

// Vienguba (') ir dviguba (") kabutes.
const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabute12_3 = "Vienguba (\') ir dviguba (\") kabutes.";
const kabute12_4 = 'Vienguba (\') ir dviguba (\") kabutes.';
console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);
console.log(kabute12_4);

// Komentaras (//).
const comment1 = 'Komentaras (//).';
const comment2 = "Komentaras (//).";
console.log(comment1);
console.log(comment2);

// Backslash (\).
const back1 = 'Backslash (\\).';
const back2 = "Backslash (\\\\).";
console.log(back1);
console.log(back2);

/*
Labas
rytas,
Lietuva!
*/

// \n - new line (slenkasi eilute zemyn, bet lieka X-asy ten pat)
// \r - return (grizta i tos pacios eilutes prieki)
// \t - tab

const labas = 'Labas\n\
rytas,\n\
Lietuva!';
console.log(labas);

const HTML = '\<header>\r\n\
\t<img src="#" alt="Logo" class="logo">\r\n\
\t<nav>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t</nav>\r\n\
</header>';
console.log(HTML);


console.clear();

// Vienguba (') ir dviguba (") kabutes.
const kabute3 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(kabute3);

// Vienguba ('), dviguba (") ir backtick (`) kabutes.

const kabute4 = `Vienguba ('), dviguba (") ir backtick (\`) kabutes.`;
console.log(kabute4);

const backtickHTML = `<header>
    <img src="#" alt="Logo" class="logo">
    <nav>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    </nav>
</header>`;
console.log(backtickHTML);

const name = 'Martynas';
const age = 99;
const iLike1 = 'masinos';
const iLike2 = 'gamta';
const iLike3 = 'oro balionai';

console.clear();

// Sveiki, mano vardas [VARDAS], man yra [METAI] metai ir man labai patinka [KAS PATINKA], [KAS PATINKA] ir [KAS PATINKA]!

const martynas = "Sveiki, mano vardas " + name + ", man yra " + age + " metai ir man labai patinka " + iLike1 + ", " + iLike2 + " ir " + iLike3 + "!";
console.log(martynas);
console.log();

const martis = `Sveiki, mano vardas ${name}, man yra ${age} metai ir man labai patinka ${iLike1}, ${iLike2} ir ${iLike3}!`;
console.log(martis);

// 5 * 1 = 2
// 5 * 2 = 4
// 5 * 3 = 6
// ...
// 5 * 10 = 20

console.clear();


const skaicius = 7 ;
let atsakymas = skaicius
console.log(skaicius);
console.log(atsakymas);

const lentele = `${skaicius} * 1 = ${atsakymas}
${skaicius} * 2 = ${atsakymas * 2}
${skaicius} * 3 = ${atsakymas * 3}
${skaicius} * 4 = ${atsakymas * 4}
${skaicius} * 5 = ${atsakymas * 5}
${skaicius} * 6 = ${atsakymas * 6}
${skaicius} * 7 = ${atsakymas * 7}
${skaicius} * 8 = ${atsakymas * 8}
${skaicius} * 9 = ${atsakymas * 9}`;

console.log(lentele);

const septini = 7;
let ats = septini;

const daugyba = septini + " * 1 = " + ats + " \r\n\ " 
+ septini + " * 2 = " + ats * 2 + ' \r\n\ ' 
+ septini + " * 3 = " + ats * 3 + ' \r\n\ '
+ septini + " * 4 = " + ats * 4 + ' \r\n\ '
+ septini + " * 5 = " + ats * 5 + ' \r\n\ '
+ septini + " * 6 = " + ats * 6 + ' \r\n\ '
+ septini + " * 7 = " + ats * 7 + ' \r\n\ '
+ septini + " * 8 = " + ats * 8 + ' \r\n\ '
+ septini + " * 9 = " + ats * 9 ; 


console.log(daugyba);




