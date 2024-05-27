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
console.log((true && true && true) || true);
console.log((true && true) || (true && true));
console.log(true || (true && true && true));
console.log((true && true) || true || true);
console.log(true || true || (true && true));
console.log(true || (true && true) || true);
console.log(true || true || true || true);
console.log(true && true && true && false);
console.log((true && true && true) || false);
console.log((true && true) || (true && false));
console.log(true || (true && true && false));
console.log((true && true) || true || false);
console.log(true || true || (true && false));
console.log(true || (true && true) || false);
console.log(true || true || true || false);
console.log(true && true && false && true);
console.log((true && true && false) || true);
console.log((true && true) || (false && true));
console.log(true || (true && false && true));
console.log((true && true) || false || true);
console.log(true || true || (false && true));
console.log(true || (true && false) || true);
console.log(true || true || false || true);
console.log(true && false && true && true);
console.log((true && false && true) || true);
console.log((true && false) || (true && true));
console.log(true || (false && true && true));
console.log((true && false) || true || true);
console.log(true || false || (true && true));
console.log(true || (false && true) || true);
console.log(true || false || true || true);
console.log(false && true && true && true);
console.log((false && true && true) || true);
console.log((false && true) || (true && true));
console.log(false || (true && true && true));
console.log((false && true) || true || true);
console.log(false || true || (true && true));
console.log(false || (true && true) || true);
console.log(false || true || true || true);
console.log(true && true && false && false);
console.log((true && true && false) || false);
console.log((true && true) || (false && false));
console.log(true || (true && false && false));
console.log((true && true) || false || false);
console.log(true || true || (false && false));
console.log(true || (true && false) || false);
console.log(true || true || false || false);
console.log(true && false && false && true);
console.log((true && false && false) || true);
console.log((true && false) || (false && true));
console.log(true || (false && false && true));
console.log((true && false) || false || true);
console.log(true || false || (false && true));
console.log(true || (false && false) || true);
console.log(true || false || false || true);
console.log(false && false && true && true);
console.log((false && false && true) || true);
console.log((false && false) || (true && true));
console.log(false || (false && true && true));
console.log((false && false) || true || true);
console.log(false || false || (true && true));
console.log(false || (false && true) || true);
console.log(false || false || true || true);
console.log(false && true && true && false);
console.log((false && true && true) || false);
console.log((false && true) || (true && false));
console.log(false || (true && true && false));
console.log((false && true) || true || false);
console.log(false || true || (true && false));
console.log(false || (true && true) || false);
console.log(false || true || true || false);
console.log(true && false && true && false);
console.log((true && false && true) || false);
console.log((true && false) || (true && false));
console.log(true || (false && true && false));
console.log((true && false) || true || false);
console.log(true || false || (true && false));
console.log(true || (false && true) || false);
console.log(true || false || true || false);
console.log(false && true && false && true);
console.log((false && true && false) || true);
console.log((false && true) || (false && true));
console.log(false || (true && false && true));
console.log((false && true) || false || true);
console.log(false || true || (false && true));
console.log(false || (true && false) || true);
console.log(false || true || false || true);
console.log(true && false && false && false);
console.log((true && false && false) || false);
console.log((true && false) || (false && false));
console.log(true || (false && false && false));
console.log((true && false) || false || false);
console.log(true || false || (false && false));
console.log(true || (false && false) || false);
console.log(true || false || false || false);
console.log(false && false && false && true);
console.log((false && false && false) || true);
console.log((false && false) || (false && true));
console.log(false || (false && false && true));
console.log((false && false) || false || true);
console.log(false || false || (false && true));
console.log(false || (false && false) || true);
console.log(false || false || false || true);
console.log(false && false && true && false);
console.log((false && false && true) || false);
console.log((false && false) || (true && false));
console.log(false || (false && true && false));
console.log((false && false) || true || false);
console.log(false || false || (true && false));
console.log(false || (false && true) || false);
console.log(false || false || true || false);
console.log(false && true && false && false);
console.log((false && true && false) || false);
console.log((false && true) || (false && false));
console.log(false || (true && false && false));
console.log((false && true) || false || false);
console.log(false || true || (false && false));
console.log(false || (true && false) || false);
console.log(false || true || false || false);
console.log(false && false && false && false);
console.log((false && false && false) || false);
console.log((false && false) || (false && false));
console.log(false || (false && false && false));
console.log((false && false) || false || false);
console.log(false || false || (false && false));
console.log(false || (false && false) || false);
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
const word1 = "Labas";
console.log(word1);

const word2 = "Sveikas";
console.log(word2);

const word3 = "Viso";
console.log(word3);

const sentence = word1 + " " + word2 + " " + word3;
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
const words1 = ["Labas", "Sveikas", "Viso", "Dangus", "Zeme"];
console.log(words1);

const words2 = ["Masina", "Namas", "Tvora", "Dviratis", "Stalas"];
console.log(words2);

const words3 = ["Medis", "Langas", "Ranka", "Kiemas", "Laukas"];
console.log(words3);

const words1_combo =
  words1[4] +
  ", " +
  words1[3] +
  ", " +
  words1[2] +
  ", " +
  words1[1] +
  ", " +
  words1[0];
console.log(words1_combo);

const words2_combo =
  words2[4] +
  ", " +
  words2[3] +
  ", " +
  words2[2] +
  ", " +
  words2[1] +
  ", " +
  words2[0];
console.log(words2_combo);

const words3_combo =
  words3[4] +
  ", " +
  words3[3] +
  ", " +
  words3[2] +
  ", " +
  words3[1] +
  ", " +
  words3[0];
console.log(words3_combo);

console.clear();

// 2.1

const a_1 = 5;
const b_1 = 10;

if (a_1 > b_1) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (a_1 < b_1) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (a_1 === b_1) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (a_1 !== b_1) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (a_1 >= b_1) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (a_1 <= b_1) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

console.clear();

// 2.2

const text_1 = "Sveiki atvyke!";
const text_2 = "Iki pasimatymo, drauge.";

if (text_1.length > text_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (text_1.length < text_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (text_1.length === text_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (text_1.length !== text_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (text_1.length >= text_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (text_1.length <= text_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

console.clear();

// 2.3

const arr_1 = [2, 5, 3, 6, 7, 2, 10];
const arr_2 = [20, 50, 30, 60, 70, 20, 100, 200];

if (arr_1.length > arr_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (arr_1.length < arr_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (arr_1.length === arr_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (arr_1.length !== arr_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (arr_1.length >= arr_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

if (arr_1.length <= arr_2.length) {
  console.log("Pomidoras");
} else console.log("Bandykite dar karta.");

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

const abcdef = "abcdef";
let reversed_abcdef = "";

for (let i = abcdef.length - 1; i >= 0; i--) {
  reversed_abcdef += abcdef[i];
}

console.log(reversed_abcdef);

console.clear();

// 3.3

const text3a = [
  "Skaiciu intervale tarp ",
  " ir ",
  ", besidalijanciu be liekanos is ",
  " yra ",
  " vienetai.",
];

const a_numbers = [0, 11];
const nr_div1_a = 3;
const nr_div2_a = 5;
const nr_div3_a = 7;
let nr3_count_a = 0;
let nr5_count_a = 0;
let nr7_count_a = 0;

for (let i = a_numbers[0]; i <= a_numbers[1]; i++) {
  if (i % nr_div1_a === 0) {
    nr3_count_a++;
  }

  if (i % nr_div2_a === 0) {
    nr5_count_a++;
  }

  if (i % nr_div3_a === 0) {
    nr7_count_a++;
  }
}

const b_numbers = [8, 31];
const nr_div1_b = 3;
const nr_div2_b = 5;
const nr_div3_b = 7;
let nr3_count_b = 0;
let nr5_count_b = 0;
let nr7_count_b = 0;

for (let i = b_numbers[0]; i <= b_numbers[1]; i++) {
  if (i % nr_div1_b === 0) {
    nr3_count_b++;
  }

  if (i % nr_div2_b === 0) {
    nr5_count_b++;
  }

  if (i % nr_div3_b === 0) {
    nr7_count_b++;
  }
}

const c_numbers = [-18, 18];
const nr_div1_c = 3;
const nr_div2_c = 5;
const nr_div3_c = 7;
let nr3_count_c = 0;
let nr5_count_c = 0;
let nr7_count_c = 0;

for (let i = c_numbers[0]; i <= c_numbers[1]; i++) {
  if (i % nr_div1_c === 0) {
    nr3_count_c++;
  }

  if (i % nr_div2_c === 0) {
    nr5_count_c++;
  }

  if (i % nr_div3_c === 0) {
    nr7_count_c++;
  }
}

console.clear();

console.log(
  text3a[0],
  a_numbers[0],
  text3a[1],
  a_numbers[1],
  text3a[2],
  nr_div1_a,
  text3a[3],
  nr3_count_a,
  text3a[4]
);
console.log(
  text3a[0],
  a_numbers[0],
  text3a[1],
  a_numbers[1],
  text3a[2],
  nr_div2_a,
  text3a[3],
  nr5_count_a,
  text3a[4]
);
console.log(
  text3a[0],
  a_numbers[0],
  text3a[1],
  a_numbers[1],
  text3a[2],
  nr_div3_a,
  text3a[3],
  nr7_count_a,
  text3a[4]
);

console.log("---------------------------");

console.log(
  text3a[0],
  b_numbers[0],
  text3a[1],
  b_numbers[1],
  text3a[2],
  nr_div1_b,
  text3a[3],
  nr3_count_b,
  text3a[4]
);
console.log(
  text3a[0],
  b_numbers[0],
  text3a[1],
  b_numbers[1],
  text3a[2],
  nr_div2_b,
  text3a[3],
  nr5_count_b,
  text3a[4]
);
console.log(
  text3a[0],
  b_numbers[0],
  text3a[1],
  b_numbers[1],
  text3a[2],
  nr_div3_b,
  text3a[3],
  nr7_count_b,
  text3a[4]
);

console.log("---------------------------");

console.log(
  text3a[0],
  c_numbers[0],
  text3a[1],
  c_numbers[1],
  text3a[2],
  nr_div1_c,
  text3a[3],
  nr3_count_c,
  text3a[4]
);
console.log(
  text3a[0],
  c_numbers[0],
  text3a[1],
  c_numbers[1],
  text3a[2],
  nr_div2_c,
  text3a[3],
  nr5_count_c,
  text3a[4]
);
console.log(
  text3a[0],
  c_numbers[0],
  text3a[1],
  c_numbers[1],
  text3a[2],
  nr_div3_c,
  text3a[3],
  nr7_count_c,
  text3a[4]
);

console.clear();

// Uzduotis - FUNKCIJOS

// 4.1

/*
Funkcijos

Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

1.	Funkcija pavadinimu “tusciaFunkcija”:
a.	nepriima jokių kintamųjų
b.	neatlieka jokios vidinės logikos
c.	gražina boolean tipo reikšmę “false”
d.	TESTAS:
i.	console.log( tusciaFunkcija() );
ii.	rezultatas: false
*/

function tusciaFunkcija() {
  return 5 > 10; // arba tiesiog 'return false;'
}

console.log(tusciaFunkcija());

console.clear();

/*
2.	Funkcija pavadinimu “daugyba”:
a.	priima du skaičiaus tipo kintamuosius
b.	atskirame kintamajame įsimena sandaugos reikšmę
c.	gražina saudaugos rezultatą
d.	TESTAI:
i.	console.log( daugyba( skaicius1, skaicius2 ) );
ii.	console.log( daugyba( skaicius3, skaicius2 ) );
iii.	console.log( daugyba( skaicius1, skaicius3 ) );
iv.	rezultatas: teisingos reikšmės;
*/

const nr_aa = 4;
const nr_bb = 10;
const nr_cc = 9;

function daugyba(skaicius1, skaicius2) {
  if (
    typeof skaicius1 !== "number" ||
    typeof skaicius2 !== "number" ||
    !Number.isFinite(skaicius1) ||
    !Number.isFinite(skaicius2)
  ) {
    return "Būtina įvesti tik skaičius.";
  } else {
    const result = skaicius1 * skaicius2;
    return result;
  }
}

console.log(daugyba(nr_aa, nr_bb));
console.log(daugyba(nr_cc, nr_bb));
console.log(daugyba(nr_aa, nr_cc));

console.clear();

/*
3.	Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
a.	priima vieną kintamąjį
b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
c.	priešingu atveju, funkcija tęsia darbą
d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
e.	gražina skaitmenų kiekį
f.	TESTAI:
i.	console.log( skaitmenuKiekisSkaiciuje( 5 ) );
1.	rezultatas: 1
ii.	console.log( skaitmenuKiekisSkaiciuje( 781 ) );
1.	rezultatas: 3
iii.	console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
1.	rezultatas: 11
iv.	console.log( skaitmenuKiekisSkaiciuje( true ) );
1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
v.	console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
vi.	console.log( skaitmenuKiekisSkaiciuje( NaN ) );
1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/

function skaitmenuKiekisSkaiciuje(number1) {
  let atskirasKintamasis = 0;

  if (typeof number1 !== "number" || !Number.isFinite(number1)) {
    return "Pateikta netinkamo tipo reikšmė.";
  } else {
    atskirasKintamasis += number1.toString().length;
  }

  return "Skaitmenų kiekis skaičiuje: " + atskirasKintamasis;
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.clear();

/*
4.	Funkcija pavadinimu “didziausiasSkaiciusSarase”:
a.	priima vieną kintamąjį
b.	jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
c.	jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
d.	priešingu atveju, funkcija tęsia darbą
e.	pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
f.	gražina didžiausią surastą skaičių
g.	TESTAI:
i.	console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
1.	rezultatas: 1
ii.	console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
1.	rezultatas: 3
iii.	console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
1.	rezultatas: 78
iv.	console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
1.	rezultatas: 69
v.	console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
1.	rezultatas: -1
vi.	console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
vii.	console.log( didziausiasSkaiciusSarase( [] ) );
1.	rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/

function didziausiasSkaiciusSarase(variable1) {
  if (!Array.isArray(variable1)) {
    return "Pateikta netinkamo tipo reikšmė.";
  } else if (variable1.length === 0) {
    return "Pateiktas sąrašas negali būti tuščias.";
  }

  let maxNumber = variable1[0];
  for (let i = 0; i < variable1.length; i++) {
    if (typeof variable1[i] !== "number" || !Number.isFinite(variable1[i])) {
      return "Visi sąrašo elementai privalo būti skaičiai.";
    } else if (variable1[i] > maxNumber) {
      maxNumber = variable1[i];
    }
  }

  return maxNumber;
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase("pomidoras"));
console.log(didziausiasSkaiciusSarase([]));
