const main = document.querySelector('.main')

const xCount = []
const oCount = []

const square = document.querySelectorAll('.square');
console.log(square)

// const test = () => {
//     console.log("you clicked me!")
// }

const oneTurn = (ev) => {
    console.log(ev)
    if (ev.currentTarget.innerText === "" && xCount.length === oCount.length) {
        ev.currentTarget.innerText = "X"
    }
    else if (xCount.length === oCount.length) {
        ev.currentTarget.innerText = "X"
        xCount.push(ev)
        console.log(xCount)
    }
}

for (i = 0; i < square.length; i++) {
    square[i].addEventListener('click', oneTurn)
}