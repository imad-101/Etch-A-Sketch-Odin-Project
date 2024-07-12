const box = document.querySelector('.box');

const balckBtn = document.querySelector('#black-btn')

const selectBtn = document.querySelector("#select-btn")

const resetBtn = document.querySelector("#reset-btn")

const randomBtn = document.querySelector("#random-btn")

const yellowBtn = document.querySelector("#yellow-btn")

selectBtn.addEventListener('click' , function (){
        size = prompt('Enter Size ( Number between 2 - 70 )')
        size = boardSize(size)
})


function boardSize(size){
    box.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    box.style.gridTemplateRows = `repeat(${size} , 1fr)`


    for (let i = 0; i < size * size; i++) {

        const boxItem = document.createElement('div');
        boxItem.classList.add('box-items');
        box.appendChild(boxItem);  

        resetBtn.addEventListener('click', function (){
            boxItem.style.backgroundColor = "white"
        })

        balckBtn.addEventListener('click', function (){
            chooseColor('black')
        })
        yellowBtn.addEventListener('click', function (){
            chooseColor('yellow')
        })

        randomBtn.addEventListener('click' , function () {

            const letters = '0123456789ABCDEF';
            let colors = '#';
            for (let i = 0; i < 6; i++) {
            colors += letters[Math.floor(Math.random() * 16)];

            chooseColor(colors)
            }
            } )

        function chooseColor(color){
            boxItem.addEventListener("mouseover" , function(){
                boxItem.style.backgroundColor = color
            }) 
        }
}
}