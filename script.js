
//creating button that clears the grid board

const button = document.createElement('button');
button.addEventListener('click', () => //;
body.appendChild(button);

//creating a container div for a grid layout of divs and appends it onto the body
const body = document.querySelector('body');
const div = document.createElement('div');
div.classList.add('container');
div.setAttribute('style', 'display: flex;')
body.appendChild(div);


//this creates 16 columns of divs.
for(let i = 0; i < parseInt(size); i++) {
    let columnParts = document.createElement('div');
        //columnParts.classList.add(`grid`);
        columnParts.textContent = i;
        div.appendChild(columnParts);
}
//this creates 16 rows of divs for each column
    for(let j = 0; j < parseInt(size) - 1; j++){
        let rowParts = document.createElement('div');
        rowParts.classList.add(`grid`);
        rowParts.textContent = j;
        columnParts.appendChild(rowParts);
}
const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
    grid.addEventListener('mouseenter', () =>{
            grid.setAttribute('style', 'background-color: black;')
    }
    )
}) 
