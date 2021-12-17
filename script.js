let myLeads = [];
let oldLeads = [];
// myLeads = JSON.parse(myLeads)
// myLeads.push("newString");
// myLeads = JSON.stringify(myLeads);
// console.log(typeof (myLeads));


const inputEl = document.getElementById("input-el"); 
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// localStorage.setItem("myLeads", "Demetr Step");
// let reference = localStorage.getItem("myLeads");
// console.log(reference);

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
                </a>
            </li>                
        `;
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}

// function getFirst(arr) {
//     return arr[0];
// }
// let firstItem = getFirst([10, 23, 11]);
// console.log(firstItem);

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// logItems(myCourses);
// function generateSentence(desc, array) {
//     let baseString = `The ${array.length} ${desc} are `;
//     const lastIndex = array.length - 1;
//     for (let i = 0; i < array.length; i++) {
//         if (i === lastIndex) {
//            baseString += array[i] + "."; 
//         }
//         else {
//             baseString += array[i] + ", "
//         }
//     }

//     return baseString;
// }

// const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"]);
// console.log(sentence);


