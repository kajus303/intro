/*
NUMBERS
- sveikieji / desimtainiai
- teigiami / neigiami
- normalus / "nenormalus"

"nenormalus":
- Infinity
- -Infinity
- NaN (not-a-number)

Matematiniai operatoriai:
- aritmetiniai: +, -, *, /, **, %, ++, --
- priskyrimo: +=, -=, *=, /=, **=, %=
*/

const pirmas = 5;
const antras = 88;
const trecias = -2.332;
const nulis = 0;
const bbz = 9090;

console.log(14.88);
console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(nulis);
console.log(bbz);
console.log(bbz);
console.log(bbz);

const suma = pirmas + bbz;
console.log(suma);

const sandauga = pirmas * bbz;
console.log(sandauga);

const dalmuo = bbz / pirmas;
console.log(dalmuo);

const belekas = sandauga + dalmuo * trecias;
console.log(belekas);

const suma2 = pirmas + antras;
console.log(suma2);

const skirtumas = pirmas - antras;
console.log(skirtumas);

const laipsnis1 = pirmas ** antras;
console.log(laipsnis1);

const laipsnis2 = antras ** pirmas;
console.log(laipsnis2);

console.log(2 ** 2, 2 * 2);
console.log(2 ** 3, 2 * 2 * 2);
console.log(2 ** 4, 2 * 2 * 2 * 2);

const liekana1 = pirmas % antras;
console.log(liekana1);

const liekana2 = antras % pirmas;
console.log(liekana2);

console.log(pirmas, '%', antras, '=', liekana1);
console.log(antras, '%', pirmas, '=', liekana2);

console.clear();

let pinigine = 0;
console.log(pinigine);

pinigine = 10;
console.log(pinigine);

pinigine = 50;
console.log(pinigine);

console.clear();
 
let money = 0;
console.log(money);

money = 5;
console.log(money);

money = money + 5;
console.log(money);

console.clear();

let greitukas = 88;
console.log(greitukas);

greitukas = 3 * greitukas / 2;
console.log(greitukas);

greitukas = greitukas % 25;
console.log(greitukas);

greitukas = greitukas ** 12;
console.log(greitukas);

console.clear();

let x = 1;
x = x + 1;
x = x + 1;
x += 1;    // Tas pats, kas ir "x = x + 1"
x += 3;
console.log(x);

console.clear();

let y = 2;
console.log(y);

y *= 3;
console.log('ats', y);

y /= 2;
console.log('ats', y);

y %= 2;
console.log('ats', y);

y **= 99999;
console.log('ats', y);

console.clear();

let z = 10;
console.log(z);

z += 10 + 10 + 10;
console.log('ats', z);

z += (10 * 10);
console.log('ats', z);

z *= 2 + 2;            // Tas pats, kaip ir su skliausteliais
console.log('ats', z);

let zz = 10;

zz *= 10 + 10 + 10;
console.log(zz);

console.clear();

let makaronai = 2;
console.log(makaronai);

makaronai = makaronai + 2;
console.log(makaronai);

makaronai += 2;
console.log(makaronai);

makaronai += 1;
console.log(makaronai);

makaronai++;
makaronai++;
makaronai++;
makaronai++;
makaronai++;
makaronai++;
console.log(makaronai);

console.clear();

let g = 6;

console.log(g);

// pirmiau spausdina, paskui padidina
console.log(g++);

// pirmiau padidina paskui spausdina
console.log(++g);

console.log(g);