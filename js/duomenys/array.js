/*
ARRAY - masyvas, sarasas, listas, matrica, kolekcija
*/

const empty = [];
console.log(empty);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

const averageMark1 = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;
console.log(averageMark1);

console.clear();
// 0, 1, 2, 3, 4.....
const marks_2 = [10, 2, 8, 4, 6];
console.log(marks_2);

const sum2 = marks_2[0] + marks_2[1] + marks_2[2] + marks_2[3] + marks_2[4];
const count2 = marks.length;
const averageMark2 = sum2 / count2;

console.log('Kiekis:', count2);
console.log('Vidurkis:', averageMark2);

console.log('>>>', marks_2[0]);
console.log('>>>', marks_2[1]);
console.log('>>>', marks_2[2]);
console.log('>>>', marks_2[3]);
console.log('>>>', marks_2[4]);

console.clear();

// 10, 2, 8, 4, 6

let sum3 = 0;
let index = 0;

sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
console.log(sum3);

console.clear();

function marksAverage(mark) {
    if (mark.length === 0) {
    return 'Vidurkis: nera pazymiu.';
    }
    
    let suma = 0;

    return 'Vidurkis: ' + (suma / mark.length);
}

const jonasMarks = [];
console.log(jonasMarks);
console.log(marksAverage(jonasMarks));

jonasMarks.push(10);
console.log(jonasMarks);
console.log(marksAverage(jonasMarks));

jonasMarks.push(2);
console.log(jonasMarks);
console.log(marksAverage(jonasMarks));

jonasMarks.push(8);
console.log(jonasMarks);
console.log(marksAverage(jonasMarks));