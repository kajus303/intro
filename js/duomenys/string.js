/*
STRING - tekstas, tekstiniu simboliu grandinele

Inicijavimas: vienguba ('), dviguba (")
*/

const name = 'Jonas';
console.log(name);

const sakinys = 'Labas rytas, Lietuva!';
console.log(sakinys);

// Vienguba (') kabute
const kabute1 = "Vienguba (') kabute";
console.log(kabute1);

// Dviguba (") kabute
const kabute2 = 'Dviguba (") kabute';
console.log(kabute2);


// Vienguba (') kabute ir dviguba (") kabute

// Variantas nr 1
const pirmaDalis = "Vienguba (') kabute";
const antraDalis = 'ir dviguba (") kabute';
const pilnasTekstas = pirmaDalis + " " + antraDalis;
console.log(pilnasTekstas);

// Variantas nr 2
const pilnasTekstas2 = "Vienguba (') kabute " + 'ir dviguba (") kabute';
console.log(pilnasTekstas2);

// Variantas nr 3
const pilnasTekstas3_1 = 'Vienguba (\') kabute ir dviguba (\") kabute';
const pilnasTekstas3_2 = "Vienguba (\') kabute ir dviguba (\") kabute";
console.log(pilnasTekstas3_1);
console.log(pilnasTekstas3_2);

console.clear();

/*
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;
*/

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
