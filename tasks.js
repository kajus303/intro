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

// Pabaigti