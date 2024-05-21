/*
FUNCTION - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input => Function() => Output
*/

function funkcijosPavadinimas() {
}

const a = funkcijosPavadinimas();

console.log(a);

function nnn() {
    return undefined;
}

console.log(nnn());

function giveMeFive() {
    return 5;
}

console.log(giveMeFive());

console.clear();

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
Laba diena, as esu Maryte Marytaite!
Laba diena, as esu Petras Petraitis!
Laba diena, as esu Ona Onaityte!
*/

function intro(name, surname) {
    return 'Laba diena, as esu ' + name + ' ' + surname + '!';
}

console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Maryte', 'Marytaite'));
console.log(intro('Petras', 'Petraitis'));
console.log(intro('Ona', 'Onaityte'));

console.clear();

/*
Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output:
35
*/

function multiply(a, b) {
    return 'Atsakymas = ' + a * b;
}

console.log(multiply(5, 7));
console.log(multiply(-5, 40));

// Mano vardas yra VARDAS, man METAI metai ir as megstu PATIEKALAS.

function iLike(name, age, item) {
    return 'Mano vardas yra ' + name + ', man ' + age + ' metai ir as megstu ' + item + '.'
}

console.log(iLike('Jonas', 69, 'cepelinus'));
console.log(iLike('Ona', 35, 'balionus'));

console.clear();

function price(value) {
    const PVMprocentas = 21;
    const PVM = value * (PVMprocentas / 100);
    const galutineKaina = value + PVM;

    return galutineKaina;
}

console.log('Galutine kaina: ' + price(100));

console.clear();

/*
function calculateArea(length, width) {
    const fullArea = length * width;

    return fullArea;
}

console.log(calculateArea(5, 10));

console.clear();

function greet(name) {
    const text = 'Hello, ';
    const text2 = '!';

    return text + name + text2;
}

console.log(greet('John'));
*/
