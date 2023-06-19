console.clear();

/*
STRING - tekstiniu simboliu grandinele, aka tekstas

Iniciavimo budai:
- viengubos kabutes ('')
- dvygubos kabutes ("")

Ilgis:
'stringas'.length
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
let atsakymas = skaicius;
const x = 1;
const a = 2;
const b = 3;
const c = 4;
const d = 5;
const i = 6;
const f = 7;
const g = 8;
const k = 9;

const lentele = `${skaicius} * ${x} = ${atsakymas}
${skaicius} * ${a} = ${atsakymas * a}
${skaicius} * ${b} = ${atsakymas * b}
${skaicius} * ${c} = ${atsakymas * c}
${skaicius} * ${d} = ${atsakymas * d}
${skaicius} * ${i} = ${atsakymas * i}
${skaicius} * ${f} = ${atsakymas * f}
${skaicius} * ${g} = ${atsakymas * g}
${skaicius} * ${k} = ${atsakymas * k}`;

console.log(lentele);

const daugyba = skaicius + " * 1 = " + atsakymas + '\n'
+ skaicius + " * 2 = " + atsakymas * 2 + '\n' 
+ skaicius + " * 3 = " + atsakymas * 3 + '\n'
+ skaicius + " * 4 = " + atsakymas * 4 + '\n'
+ skaicius + " * 5 = " + atsakymas * 5 + '\n'
+ skaicius + " * 6 = " + atsakymas * 6 + '\n'
+ skaicius + " * 7 = " + atsakymas * 7 + '\n'
+ skaicius + " * 8 = " + atsakymas * 8 + '\n'
+ skaicius + " * 9 = " + atsakymas * 9 ; 


console.log(daugyba);



const empty = '     gg      ';
console.log(empty.length);
//                     11111
//           012345678901234
const str = 'Pavyzdys';
console.log(str, 8, '>>>', str.length);
console.log(str, 8, '>>>', str.lenght);

const raide1 = str[0];
console.log(raide1, 'P');
console.log('---------------');

let strIndex = 0;

console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);

console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);

console.log(str[-1]);
console.log(str[-2]);
console.log(str[-24562]);

console.clear();

// const userFirstName = 'Chuck';
// const userLastName = 'Norris';
const userFirstName = 'Pamela';
const userLastName = 'Anderson';

const userAbbr = `${userFirstName[0]}.${userLastName[0]}.`;
console.log(userAbbr);





