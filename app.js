const main = document.querySelector('.main')


const square = document.getElementsByClassName('square');
console.log(square)




const test = () => {
    console.log("you clicked me!")
}

for (i = 0; i < square.length; i++) {
    square[i].addEventListener('click', test)
}