const PI = 3.14;
let radius = 3;

const one = 1;
const two = '2';

let combo = one + two; // equals 12. Gross

let area = PI * radius * radius; // Works great, it apears. Constant I am assuming does not change.

combo = two + one;

// two = 2; CONFIRMED --- Don't do this.

console.log(combo);
console.log(area);
                    
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block