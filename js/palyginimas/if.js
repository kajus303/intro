/*
IF - palyginimas

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ...else if () {} ...else if {}
if () {} ...else if () {} ...else {}
*/

const age = 99;
const ageLimit = 18;

// 1 variantas

if (age > ageLimit) {
    console.log('Atsiprasome, esate per jaunas...');
}

// 2 variantas

if (age < ageLimit) {
    console.log('Atsiprasome, esate per jaunas...');
} else {
    console.log('Prasome uzeiti...');
}

console.clear();

if (4 <= 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}

console.clear();


// red - Raudona
// blue - Melyna
// green - Zalia
// other - Nezinau tokios spalvos

const color = 'white';

if (color === 'red') {
    console.log('Raudona');
} else if (color === 'blue') {
    console.log('Melyna');
} else if (color === 'green') {
    console.log('Zalia');
} else {
    console.log('Nezinau tokios spalvos');
}

console.clear();

const color2 = 'red';
let translation = '';

if (color2 === 'red') {
    translation = 'Raudona';
} else if (color2 === 'blue') {
    translation = 'Melyna';
} else if (color2 === 'green') {
    translation = 'Zalia';
} else {
    translation = 'Nezinau tokios spalvos';
}

console.log('>>>', translation);

console.clear();

function colorTranslation(spalva) {
    let translation = '';

    if (spalva === 'red') {
        translation = 'Raudona';
    } else if (spalva === 'blue') {
        translation = 'Melyna';
    } else if (spalva === 'green') {
        translation = 'Zalia';
    } else {
        translation = 'Nezinau tokios spalvos';
    }
    return spalva + ' - ' + translation;
}

console.log(colorTranslation('white'));
console.log(colorTranslation('black'));
console.log(colorTranslation('red'));
console.log(colorTranslation('orange'));
console.log(colorTranslation('white'));
console.log(colorTranslation('white'));
console.log(colorTranslation('green'));