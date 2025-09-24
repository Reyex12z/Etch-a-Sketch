const div = document.querySelector('#container')

// creating 8 x 8 initiall grid
for (let i = 0; i < 64; i++) {
    
    let child = document.createElement('div')
    child.classList.add('container-child')
    div.appendChild(child)
}

// user selected grid size trough event listener
const size = document.querySelector('#size');
size.addEventListener('click', function() {

    let num = Number(prompt("Enter grid size: "))

    // checks if input is valid
    while (!(Number.isInteger(num) && (num <= 100 && num > 0))) {
        num = Number(prompt("please enter a valid number between 1 and 100! :"))
    }

    // deletes the existing grid
    let parent = document.querySelector('#container')
    parent.innerHTML=""

    // creates the new grid
    for (let i = 0; i < num * num; i++) {

        let child = document.createElement('div')
        child.classList.add('container-child')
        
        let portion = 100/num;

        child.style.width=`calc(${portion}% - 4px)`;
        child.style.height=`calc(${portion}% - 4px)`;
        div.appendChild(child)
    }

} )

// color button
let color = document.querySelector('#color')
color.addEventListener('click', function() {

    let choice = prompt("Type your favorite color: ");
    let col = document.querySelectorAll('.container-child');
    col.forEach(cell => {
            cell.style.backgroundColor = choice;
        });
})

// clear button
let clear = document.querySelector('#clear')
clear.addEventListener('click', function() {
    let cle = document.querySelectorAll('.container-child')
    cle.forEach(cell => {
            cell.style.backgroundColor = 'white';
        });
})

//custom color
let cuCo='black';
let custom = document.querySelector('#custom')
custom.addEventListener('click', function() {

    cuCo = prompt("Type your favorite color: ");
    custom.textContent=`custom color: ${cuCo}`
})



div.addEventListener('click', function(event) {
    // Check if the clicked element is a grid child
    if (event.target.classList.contains('container-child')) {
        event.target.style.backgroundColor = cuCo;
    }
});


// random button

// A global variable to track the "on" state
let on = false;

// Get the random button
const random = document.querySelector('#random');

// Add a click listener to toggle the "on" state
random.addEventListener('click', function() {
    on = !on; // Toggles 'on' between true and false
    if (on) {
        random.textContent = 'Randomize: on';
    } else {
        random.textContent = 'Randomize: off';
    }
});

// Get the main grid container
const container = document.querySelector('#container'); // Assuming a parent container with id 'container'

// Add a mouseover event listener to the parent container
// This uses event delegation for better performance
container.addEventListener('mouseover', function(e) {
    // Only execute the function if randomization is "on"
    if (on) {
        // Check if the hovered element has the class 'container-child'
        if (e.target.classList.contains('container-child')) {
            e.target.style.backgroundColor = getRandomHexColor();
        }
    }
});

function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor.padStart(6, '0');
}





