// Task 2: Adding Employee Cards Dynamically

function createEmployeeCard(name, position) { // creates a function
    let employeeCard = document.createElement("div"); // creates a div using create element method
    const employeeContainer = document.getElementById("employeeContainer"); // grab and element by heir ID

    employeeCard.setAttribute("class", "employeeCard"); // creates an attribute
    employeeCard.innerHTML = `<h3>${name}</h3><p>${position}</p>`; // puts text inside the div

    removeButton = document.createElement("button"); // cates a new button
    removeButton.textContent = "Remove"; // makes the button have text in it

    removeButton.addEventListener("click", (event) => { // adds an event listener to the button
        employeeContainer.removeChild(employeeCard); // removes the card if the button is clicked
        event.stopPropagation();
    });

    employeeCard.appendChild(removeButton); // adds the button to the page
    employeeContainer.appendChild(employeeCard); // adds the card to the page

};

// Task 2 - Test Cases
createEmployeeCard("Sean Payton", "Head Coach");
createEmployeeCard("Joe Schoen", "General Manager");
createEmployeeCard("Kirk Herbstreit", "Lead Analyst");


// Task 3: Converting NodeLists to Arrays for Bulk Updates

// creates node list using a query selector, then makes node list an array
const employeeNodeList = document.querySelectorAll(".employeeCard");
const employeeArray = Array.from(employeeNodeList);

employeeArray.forEach((card) => { // goes through each item in the array
    card.style.backgroundColor = "aquamarine"; // changes background color of each card
    card.style.border = "5px black solid"; // adds a solid, black border to each card
});