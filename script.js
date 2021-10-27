
//creating a container div for a grid layout of divs and appends it onto the body
const body = document.querySelector('body');
const div = document.createElement('div');
div.classList.add('container');
div.setAttribute('style', 'display: flex;')
body.appendChild(div);

//this creates 16 columns of divs.
for(let i = 0; i < 16; i++) {
    let columnParts = document.createElement('div');
        columnParts.classList.add(`grid`);
        columnParts.textContent = i;
        div.appendChild(columnParts);
//this creates 16 rows of divs for each column
    for(let j = 0; j < 15; j++){
        let rowParts = document.createElement('div');
        rowParts.classList.add(`grid`);
        rowParts.textContent = j;
        columnParts.appendChild(rowParts);
}
const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
    grid.addEventListener('mouseover', () =>{
        if (grid.style['background-color'] === 'white'){
            grid.setAttribute('style', 'background-color: black;')
        }
        else grid.setAttribute('style', 'background-color: white;')
    }
    )
})
}