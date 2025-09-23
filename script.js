const div = document.querySelector('#container')


// creating 16 x 16 grid
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let child = document.createElement('div')
        child.classList.add('container-child')
        div.appendChild(child)
    }
}

function deleteGrid() {
    let parent = document.querySelector('#container')
    parent.innerHTML=""
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
    deleteGrid();

    // creates the new grid
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let child = document.createElement('div')
            child.classList.add('container-child')
            
            let portion = 100/num;

            console.log(portion, num)

            child.style.width=`calc(${portion}% - 4px)`;
            child.style.height=`calc(${portion}% - 4px)`;
            div.appendChild(child)
        }
    }

} )
