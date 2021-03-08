const container = document.createElement('div');
container.id = 'container';

document.body.appendChild(container);

let size = 0;
const start = document.getElementById('start');

start.addEventListener('click', function(){
    size = prompt('Please enter the side of the grid (max64)');
    if(size <= 64) {
        container.innerHTML = '';
        makeGrid(size,size);
    } else if(size > 64) {
        alert('You exceeded the limits. Please try again.');
    }
});

const reset = document.getElementById('reset');
reset.addEventListener('click',function() {
    container.innerHTML = '';
    makeGrid(size,size);
});

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.style.border = '3px solid #0000FF'
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-cell";
      cell.addEventListener("mouseover", paint);
    };
  };

const color = document.getElementById('selectColor');

function paint(e) {
    let chooseColor = color.value;
    e.target.style.backgroundColor = chooseColor;
};

