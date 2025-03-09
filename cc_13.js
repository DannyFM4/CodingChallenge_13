// Task 2: Adding Employee Cards Dynamically

function createEmployeeCard(name, position) { // creates a function
    let employeeCard = document.createElement("div"); // creates a div using create element method
    const employeeContainer = document.getElementById("employeeContainer"); // grab and element by heir ID

    employeeCard.setAttribute("class", "employeeCard"); // creates an attribute
    employeeCard.innerHTML = `<h3 class="employeeName">${name}</h3><p class="employeePosition">${position}</p>`; // puts text inside the div

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

    function editEmployees() { // creates function
        // assigns variable to classes
        const empName = employeeCard.querySelector(".empName");
        const empPosition = employeeCard.querySelector(".empPosition");

        // formats the cards
        employeeCard.innerHTML = `<input type="text" class="nameEdit" value="${empName}"><input type="text" class="positionEdit" value="${empPosition}">`;

        // creates the save button
        const saveButton = document.createElement("button"); // creates button
        saveButton.textContent = "Save"; // text content on the save button

        // adds an event listener for click
        saveButton.addEventListener("click", () => { 
            // grabs info by class
            const newName = document.querySelector(".nameEdit"); 
            const newPosition = document.querySelector("positionEdit")

            // edits the info
            employeeCard.innerHTML = `<h3>${newName}</h3><p>${newPosition}</p>`;

            // keeps the buttons around
            employeeCard.appendChild(removeButton);
            employeeCard.appendChild(editButton);
        });
        // inputs the save buttons
        employeeCard.appendChild(saveButton);
    };

    // runs function on click
    editButton.addEventListener("click", editEmployees);

    // inputs buttons
    employeeCard.appendChild(removeButton);
    employeeCard.appendChild(editButton);

    employeeContainer.appendChild(employeeCard);
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