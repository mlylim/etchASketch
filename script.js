// ADD DEFAULT RANDOM COLORS IF ENTER KEY PRESSED ON SUBMITTAL

form.addEventListener('keydown', function (event) {

    if (event.keyCode == 13) {
        document.getElementById("colorButton").click();
        event.preventDefault();
    }
})


const container = document.getElementById("container")
var width = window.innerWidth
var height = window.innerHeight
var dimension = width;
var squares = 0;

// CLEAR CELL COLORS
function reset() {
    document.querySelectorAll(".cell").forEach(cell => cell.remove())
}


function buildGrid(rows, cols, color) {
    reset()
    if (width > height) {
        dimension = height / cols;
    }
    else {
        dimension = width / (rows+5);
    }

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-size', dimension + "px");

    for (var i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div")
        cell.classList.add('cell')
        cell.style.backgroundColor =  " #f2f2f2";
        ;
        cell.setAttribute("align", "center")
        container.appendChild(cell)

        // COLOR CHOSEN
        if (color === 1) {
            cell.addEventListener("mouseover", function () { cell.style.backgroundColor = getRandomColor() });
        }

        else if (color === 2) {
            cell.addEventListener("mouseover", function () { cell.style.backgroundColor = "black" });
        }

        cell.addEventListener("click", function () { cell.style.backgroundColor = "lightgray" });

    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function squaresValue() {
    var x = (document.getElementById("form"));
    // ERROR CATCHING TO PREVENT TOO SMALL OR LARGE OF A GRID
    if (((x.elements[0].value) > 64) || ((x.elements[0].value < 1))) {
        alert("Please enter number between 1-64 for grid size!")
        Number(squares) = 0;
        reset()
    }
    else {
        for (var i = 0; i < x.length; i++) {
            squares = (x.elements[i].value)
        }
    } return Number(squares);
}