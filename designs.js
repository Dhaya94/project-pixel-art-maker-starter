// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table = document.getElementById('pixelCanvas');


function makeGrid() { 
    table.innerHTML = '';
    let tableRow = document.getElementById('inputHeight').valueAsNumber;
    let tableColumn = document.getElementById('inputWidth').valueAsNumber;   
    for (let i = 0; i < tableRow; i++){
        let row = table.insertRow();
        for (let j = 0; j < tableColumn; j++){
            let tableCell = row.insertCell();
            }        
        }           
    }

let submitButton = document.getElementsByTagName('input')[2];

submitButton.addEventListener('click', function (e) {    
    debugger;
    e.preventDefault();  
    makeGrid();
});



