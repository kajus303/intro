/*
BOOLEAN - logines reiksmes

- true
- false

Boolean logikos operatoriai:
- && (and)
- || (or)
- ! (not)
*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:', true + true);  // Taip nenaudoti
console.log('KAIP NENAUDOTI:', true * false);

console.log('---------------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// MERGINA
// kada eisiu i pasimatyma:
//- turi buti grazus
//- turi buti jaunas
//- turi buti turtingas

const isHandsome = true;
const isYoung = true;
const isRich = false;

const willIGoTo = isHandsome && isYoung && isRich;
console.log('>>>>', willIGoTo);


// VAIKINAS
// kada eisiu i pasimatyma:
//- turi buti grazus
//- turi buti jaunas
//- turi buti turtingas

const isPretty = true;
const isYoung_2 = true;
const isRich_2 = false;

const willIGoTo_v = isPretty || isYoung_2 || isRich_2;
console.log('>>>>', willIGoTo_v);

console.clear();

// ! pavyzdys

console.log(!true);
console.log(!!false);