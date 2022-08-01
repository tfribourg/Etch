const container = document.querySelector('.container')
const sizeOf = 16

// create div function
const createGrid = (amtGrids) =>{
    for (let i = 0; i < amtGrids; i++ ){
        const row = document.createElement('div')
        row.classList.add('grid-row')

     for (let j=0; j < amtGrids; j++){ 
        const WandH = 960 / sizeOf
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        gridBox.style.width
        row.appendChild(gridBox)
    }
    container.appendChild(row)
}
}
createGrid(sizeOf)

