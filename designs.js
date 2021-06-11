const table = document.getElementById('pixelCanvas');

// Function used to create the grid based on the user input
function makeGrid(){
    table.innerHTML = '';
    const tableRow = document.getElementById('inputHeight').valueAsNumber;
    const tableColumn = document.getElementById('inputWidth').valueAsNumber;
    for (let i = 0; i < tableRow; i++){
        let row = table.insertRow();
        for (let j = 0; j < tableColumn; j++){
            row.insertCell();                
            }        
        }           
    }

// Function used to set the background color of the cell selected
function colorSetter(cell){
    const color = document.getElementById('colorPicker').value;
    cell.style.background = color;
}

const submitButton = document.getElementsByTagName('input')[2];

// Calling the makeGrid() function after the submit button is clicked
submitButton.addEventListener('click', function (e) {       
    e.preventDefault();
    makeGrid();
});

// Calling the color setter function after a cell in the table is selected
table.addEventListener('click', function(evt){
    const cellClicked = evt.target;
    if(cellClicked.nodeName === 'TD'){
        colorSetter(cellClicked);
    }
});









