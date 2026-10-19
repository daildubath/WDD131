let courses = ["WDD131", "ITM220", "WDD231", "CSE212"];

//arrays start with index 0
console.log(courses[0]);
console.log(courses[4]);
console.log(courses[-1]);

//let coursesAndGPA = ["WDD131", 3.7, "ITM220", 4];
// javascript object
let courseAndGPA = {
    course: "WDD131",
    courseGPA: 3.7,
    professor: "Brother Warner"
}

console.log(courseAndGPA);
console.log(courseAndGPA.course);

let coursesAndGPA = [  
    {
        courseName: "WDD131",
        courseGPA: 3.7,
        professor: "Brother Warner",
        assignment: [
            {
                assignmentName: "W01 Prove",
                assignmentGrade: 89
            }
        ]
    },
    {
        courseName: "ITM220",
        courseGPA: 4.0,
        professor: "Brother Warner"
    }
];

// retrieve the course name for the second item in the array of objects and print to screen

console.log(coursesAndGPA[1].courseName);

console.log(coursesAndGPA[0].assignment[0].assignmentGrade);


for(let i=0; i < coursesAndGPA.length; i++) {
    console.log(coursesAndGPA[i].courseName);
    console.log(coursesAndGPA[i].courseGPA);
}

coursesAndGPA.forEach(item => console.log(item.courseName));



let body = document.querySelector('body');

//build out HTML dynamically based on array contents


coursesAndGPA.forEach(course => {
        let dynamicHTML = `
            <div>
                <h1>${course.courseName}</h1>
                <h2>${course.courseGPA}</h2>
            </div>
        `;
        body.innerHTML += dynamicHTML;
    }
)