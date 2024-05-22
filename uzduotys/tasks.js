// Uzduotis

const piniginesTurinys_t = "Pinigines turinys: ";
const piniginePapildyta_t = "Pinigine papildyta: ";

let turinys_s = 0;
console.log(piniginesTurinys_t + turinys_s);

let papildymas_s = 10;
turinys_s += papildymas_s;
console.log(piniginePapildyta_t + papildymas_s);
console.log(piniginesTurinys_t + turinys_s);

papildymas_s = 90;
turinys_s += papildymas_s;
console.log(piniginePapildyta_t + papildymas_s);
console.log(piniginesTurinys_t + turinys_s);

console.clear();


// ND - visos 128 kombinacijos

console.log(true && true && true && true);
console.log(true && true && true || true);
console.log(true && true || true && true);
console.log(true || true && true && true);
console.log(true && true || true || true);
console.log(true || true || true && true);
console.log(true || true && true || true);
console.log(true || true || true || true);
console.log(true && true && true && false);
console.log(true && true && true || false);
console.log(true && true || true && false);
console.log(true || true && true && false);
console.log(true && true || true || false);
console.log(true || true || true && false);
console.log(true || true && true || false);
console.log(true || true || true || false);
console.log(true && true && false && true);
console.log(true && true && false || true);
console.log(true && true || false && true);
console.log(true || true && false && true);
console.log(true && true || false || true);
console.log(true || true || false && true);
console.log(true || true && false || true);
console.log(true || true || false || true);
console.log(true && false && true && true);
console.log(true && false && true || true);
console.log(true && false || true && true);
console.log(true || false && true && true);
console.log(true && false || true || true);
console.log(true || false || true && true);
console.log(true || false && true || true);
console.log(true || false || true || true);
console.log(false && true && true && true);
console.log(false && true && true || true);
console.log(false && true || true && true);
console.log(false || true && true && true);
console.log(false && true || true || true);
console.log(false || true || true && true);
console.log(false || true && true || true);
console.log(false || true || true || true);
console.log(true && true && false && false);
console.log(true && true && false || false);
console.log(true && true || false && false);
console.log(true || true && false && false);
console.log(true && true || false || false);
console.log(true || true || false && false);
console.log(true || true && false || false);
console.log(true || true || false || false);
console.log(true && false && false && true);
console.log(true && false && false || true);
console.log(true && false || false && true);
console.log(true || false && false && true);
console.log(true && false || false || true);
console.log(true || false || false && true);
console.log(true || false && false || true);
console.log(true || false || false || true);
console.log(false && false && true && true);
console.log(false && false && true || true);
console.log(false && false || true && true);
console.log(false || false && true && true);
console.log(false && false || true || true);
console.log(false || false || true && true);
console.log(false || false && true || true);
console.log(false || false || true || true);
console.log(false && true && true && false);
console.log(false && true && true || false);
console.log(false && true || true && false);
console.log(false || true && true && false);
console.log(false && true || true || false);
console.log(false || true || true && false);
console.log(false || true && true || false);
console.log(false || true || true || false);
console.log(true && false && true && false);
console.log(true && false && true || false);
console.log(true && false || true && false);
console.log(true || false && true && false);
console.log(true && false || true || false);
console.log(true || false || true && false);
console.log(true || false && true || false);
console.log(true || false || true || false);
console.log(false && true && false && true);
console.log(false && true && false || true);
console.log(false && true || false && true);
console.log(false || true && false && true);
console.log(false && true || false || true);
console.log(false || true || false && true);
console.log(false || true && false || true);
console.log(false || true || false || true);
console.log(true && false && false && false);
console.log(true && false && false || false);
console.log(true && false || false && false);
console.log(true || false && false && false);
console.log(true && false || false || false);
console.log(true || false || false && false);
console.log(true || false && false || false);
console.log(true || false || false || false);
console.log(false && false && false && true);
console.log(false && false && false || true);
console.log(false && false || false && true);
console.log(false || false && false && true);
console.log(false && false || false || true);
console.log(false || false || false && true);
console.log(false || false && false || true);
console.log(false || false || false || true);
console.log(false && false && true && false);
console.log(false && false && true || false);
console.log(false && false || true && false);
console.log(false || false && true && false);
console.log(false && false || true || false);
console.log(false || false || true && false);
console.log(false || false && true || false);
console.log(false || false || true || false);
console.log(false && true && false && false);
console.log(false && true && false || false);
console.log(false && true || false && false);
console.log(false || true && false && false);
console.log(false && true || false || false);
console.log(false || true || false && false);
console.log(false || true && false || false);
console.log(false || true || false || false);
console.log(false && false && false && false);
console.log(false && false && false || false);
console.log(false && false || false && false);
console.log(false || false && false && false);
console.log(false && false || false || false);
console.log(false || false || false && false);
console.log(false || false && false || false);
console.log(false || false || false || false);

/*
Kitas budas:

0000
0001
0010
0011
0100
0101
0110
0111
1000
1001
1010
1011
1100
1101
1110
1111
*/

console.clear();


// ___ND___

// 1 uzduotis

// 1.1
const a = 10;
console.log(a);

const b = 23;
console.log(b);

const c = 15;
console.log(c);

const sum = a + b + c;
console.log(sum);

console.clear();

// 1.2
const word1 = 'Labas';
console.log(word1);

const word2 = 'Sveikas';
console.log(word2);

const word3 = 'Viso';
console.log(word3);

const sentence = word1 + ' ' + word2 + ' ' + word3;
console.log(sentence);

console.clear();

// 1.3
const combo1 = [4, 3, 8, 5, 10];
console.log(combo1);

const combo2 = [40, 30, 80, 50, 100];
console.log(combo2);

const combo3 = [400, 300, 800, 500, 1000];
console.log(combo3);

const combo1_ans = combo1[0] - combo1[1] + combo1[2] - combo1[3] + combo1[4];
const combo2_ans = combo2[0] - combo2[1] + combo2[2] - combo2[3] + combo2[4];
const combo3_ans = combo3[0] - combo3[1] + combo3[2] - combo3[3] + combo3[4];

console.log(combo1_ans, combo2_ans, combo3_ans);

console.clear();

// 1.4
const words1 = ['Labas', 'Sveikas', 'Viso', 'Dangus', 'Zeme'];
console.log(words1);

const words2 = ['Masina', 'Namas', 'Tvora', 'Dviratis', 'Stalas'];
console.log(words2);

const words3 = ['Medis', 'Langas', 'Ranka', 'Kiemas', 'Laukas'];
console.log(words3);

const words1_combo = words1[4] + ', ' + words1[3] + ', ' + words1[2] + ', ' + words1[1] + ', ' + words1[0];
console.log(words1_combo);

const words2_combo = words2[4] + ', ' + words2[3] + ', ' + words2[2] + ', ' + words2[1] + ', ' + words2[0];
console.log(words2_combo);

const words3_combo = words3[4] + ', ' + words3[3] + ', ' + words3[2] + ', ' + words3[1] + ', ' + words3[0];
console.log(words3_combo);

console.clear();

// 2.1

const a_1 = 5;
const b_1 = 10;

if (a_1 > b_1) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (a_1 < b_1) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (a_1 === b_1) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (a_1 !== b_1) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (a_1 >= b_1) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (a_1 <= b_1) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

console.clear();

// 2.2

const text_1 = 'Sveiki atvyke!';
const text_2 = 'Iki pasimatymo, drauge.';

if (text_1.length > text_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (text_1.length < text_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (text_1.length === text_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (text_1.length !== text_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (text_1.length >= text_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (text_1.length <= text_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

console.clear();

// 2.3

const arr_1 = [2, 5, 3, 6, 7, 2, 10];
const arr_2 = [20, 50, 30, 60, 70, 20, 100, 200];

if (arr_1.length > arr_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (arr_1.length < arr_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (arr_1.length === arr_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (arr_1.length !== arr_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (arr_1.length >= arr_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

if (arr_1.length <= arr_2.length) {
    console.log('Pomidoras');
} else console.log('Bandykite dar karta.');

console.clear();

// 3.1

const numbers3_a = [0, 0];
let sum3_a = 0;

for (let i = numbers3_a[0]; i <= numbers3_a[1]; i++) {
    sum3_a += i;
}

console.log(sum3_a);

const numbers3_b = [0, 4];
let sum3_b = 0;

for (let i = numbers3_b[0]; i <= numbers3_b[1]; i++) {
    sum3_b += i;
}

console.log(sum3_b);

const numbers3_c = [0, 100];
let sum3_c = 0;

for (let i = numbers3_c[0]; i <= numbers3_c[1]; i++) {
    sum3_c += i;
}

console.log(sum3_c);

const numbers3_d = [574, 815];
let sum3_d = 0;

for (let i = numbers3_d[0]; i <= numbers3_d[1]; i++) {
    sum3_d += i;
}

console.log(sum3_d);

const numbers3_e = [-50, 50];
let sum3_e = 0;

for (let i = numbers3_e[0]; i <= numbers3_e[1]; i++) {
    sum3_e += i;
}

console.log(sum3_e);

const numbers3_f = [-70, 30];
let sum3_f = 0;

for (let i = numbers3_f[0]; i <= numbers3_f[1]; i++) {
    sum3_f += i;
}

console.log(sum3_f);

console.clear();

// 3.2

const abcdef = 'abcdef';
let reversed_abcdef = '';

for (i = abcdef.length - 1; i >= 0; i--) {
    reversed_abcdef += abcdef[i];
}

console.log(reversed_abcdef);