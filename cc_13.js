// Task 2: Adding Employee Cards Dynamically

function createEmployeeCard(name, position) { // creates a function
    let employeeCard = document.createElement("div"); // creates a div using create element method
    const employeeContainer = document.getElementById("employeeContainer"); // grab and element by heir ID

    employeeCard.setAttribute("class", "employeeCard"); // creates an attribute
    employeeCard.innerHTML = `<h3>${name}</h3><p>${position}</p>`; // puts text inside the div

    removeButton = document.createElement("button"); // creates a new button
    removeButton.textContent = "Remove"; // makes the button have text in it

    // Task 4: Implementing Removal of Employee Cards with Event Bubbling
    removeButton.addEventListener("click", (event) => { // adds an event listener to the button
        employeeContainer.removeChild(employeeCard); // removes the card if the button is clicked
        event.stopPropagation(); // makes sure remove button only delete what it is supposed to
    });

    employeeCard.addEventListener("click", () => { // adds an event listener
        console.log(`${name} - Card Clicked`); // when an employee card is clicked, this message is logged in the console
    });

    employeeCard.appendChild(removeButton); // adds the button to the page
    employeeContainer.appendChild(employeeCard); // adds the card to the page


    // Task 5: Inline Editing of Employee Details
    
    editButton = document.createElement("button"); // creates a new button
    editButton.textContent = "Edit"; // makes the button have text in it
    editButton.setAttribute("id", "edtBtn"); // gives the edit button an id

    editButton.addEventListener("click", () => { // adds an event listener for the edit button
        employeeCard.innerHTML = `<input type="text" id="edit" value="" />`; // when edit button is pressed, input field opens
        saveButton = document.createElement("button"); // creates button
        saveButton.setAttribute("id", "saveBtn"); // gives save button id
        saveButton.textContent = "Save"; // text content on the save button
        employeeCard.appendChild(saveButton); // when edit button is hit save button appears next to input field

        saveButton.addEventListener("click", () => { 
            const newInfo = document.getElementById("edit"); // grabs info by id
            employeeCard.appendChild(newInfo); // changes the info that was inputted

        });
        
    });

    employeeCard.appendChild(editButton); // insets the edit button


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