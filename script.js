const box = document.querySelector('.box');

const selectBtn = document.querySelector("#select-btn")
selectBtn.addEventListener("click" , function (){
    let size = prompt("Select any number between 1 - 100")
    size = boardSize(size)
})

function boardSize(size){
    box.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    box.style.gridTemplateRows = `repeat(${size} , 1fr)`

    for (let i = 0; i < size * size; i++) {
        const boxItem = document.createElement('div');
        boxItem.classList.add('box-items');
        box.appendChild(boxItem);
    }
    
boxItem.addEventListener('mouseover', function mouseOver(){

    boxItem.style.backgroundColor = "yellow"

})

}





