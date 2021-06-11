const table = document.getElementById('pixelCanvas');

//Function used to create the grid based on the user input
function makeGrid(){ 
    table.innerHTML = '';
    let tableRow = document.getElementById('inputHeight').valueAsNumber;    // Select size input
    let tableColumn = document.getElementById('inputWidth').valueAsNumber;   
    for (let i = 0; i < tableRow; i++){
        let row = table.insertRow();
        for (let j = 0; j < tableColumn; j++){
            row.insertCell();                   
            }        
        }           
    }

// Function used to set the background color of the cell selected
function colorSetter(cell){
    let color = document.getElementById('colorPicker').value;    // Select color input
    cell.style.background = color; 
}

const submitButton = document.getElementsByTagName('input')[2];

// When the user hits the submit button, calling the makeGrid() function
submitButton.addEventListener('click', function (e) {       
    e.preventDefault();  
    makeGrid();
});

table.addEventListener('click', function(evt){ 
    let cellClicked = evt.target;
    if(cellClicked.nodeName === 'TD'){
        colorSetter(cellClicked);  
    }       
});









