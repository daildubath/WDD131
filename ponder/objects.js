// Javascript objects

const aCourse = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 2,
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 353',
            enrolled: 9,
            days: 'MWF',
            instructor: 'Brother Warner'    
        }
    ],
    enrolled : function(sectionNumber) {
        console.log(this.name)
    }
}

console.log(aCourse.name);

aCourse.enrolled(1);


// even listener for button
document.querySelector("#enrollStudent").addEventListener("click", (e) => {
    // find section number they entered
    let sectionNumber = document.querySelector("#sectionNumber").value;
    // aCourse.sections.forEach((section) => {
    //     if (section.sectionNum == sectionNumber) {
    //         // increment enrollment
    //         section.enrolled += 1;
    //     }
    // });
    aCourse.sections.find(section => section.sectionNum == sectionNumber).enrolled++;
    // re-render table with update
    renderSections(aCourse.sections);
});

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);



