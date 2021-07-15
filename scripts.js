// etch-a-sketch project
const mainDiv = document.querySelector("div#main");
const mainDivStyles = mainDiv.style;
const resetBtn = document.querySelector('button#reset');
const createBtn = document.querySelector('button#create');
const colorBtn = document.querySelector('button#color');
let randomColorPicked;

resetBtn.addEventListener('click',resetColors);
createBtn.addEventListener('click',ask4Instructions);
colorBtn.addEventListener('click',() => {
    randomColorPicked = createAColor();
    paint_Trail();
    colorBtn.style.backgroundColor = randomColorPicked;
});


function createDivs(rows,columns) {
    for (let counter = 0; counter < rows * columns; counter++){
        let newDiv = document.createElement("div");
        newDiv.classList.add('square');
        mainDiv.appendChild(newDiv);
    }
};

function createGrid(rows,columns) {
    mainDiv.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    mainDiv.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
};

function paint_Trail() {
    const divList = document.querySelectorAll("div.square");

    if (randomColorPicked !== undefined) {
        divList.forEach(element => element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = randomColorPicked;
        }))
    } else {
        divList.forEach(element => element.addEventListener('mouseenter',function (){
            this.style.backgroundColor = "";
            this.classList.add('hover')
        }))
    }


    
};

function resetColors() {
    const divList = document.querySelectorAll("div.square");
    divList.forEach(element => element.classList.remove('hover'));
    divList.forEach(element => element.style.backgroundColor = "rgb(230, 230, 230)")
    randomColorPicked = undefined;
    colorBtn.style.backgroundColor = 'white';
    return console.log('Colors have been reset');
};

function removeOldDivs() {
    const divList = document.querySelectorAll("div.square");
    divList.forEach(element => mainDiv.removeChild(element));
    return console.log('Old Divs have been removed')
}

function ask4Instructions() {
    removeOldDivs();

    let rowNumber = prompt('How many rows do you wish to create?','Max: 100');
    let columnNumber = prompt('How many columns do you wish to create?','Max: 100');

    createDivs(rowNumber,columnNumber);
    createGrid(rowNumber,columnNumber);
    paint_Trail();

}

function randomRGB() {
    let aNumber = Math.floor(Math.random() * 255) + 1;
    return aNumber;
}

function createAColor() {
    let blue = randomRGB();
    let green = randomRGB();
    let red = randomRGB();
    let aColor = `rgb(${red},${green},${blue})`;
    return aColor;
}

createDivs(16,16);
createGrid('16','16');
paint_Trail();