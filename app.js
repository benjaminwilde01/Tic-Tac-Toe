const main = document.querySelector('.main')

let xCount = 0
let oCount = 0

const square = document.querySelectorAll('.square');
console.log(square)

// const test = () => {
//     console.log("you clicked me!")
// }

const oneTurn = (ev) => {
    console.log(ev)
    if (ev.currentTarget.innerText === "" && xCount === oCount) {
        ev.currentTarget.innerText = "X"
        xCount++
        console.log(xCount)
    }
    else if (xCount === oCount) {
        ev.currentTarget.innerText = "X"
        xCount++
        console.log(xCount)
    }
    else if (xCount > oCount) {
        ev.currentTarget.innerText = "O"
        oCount++
    }
    
}

for (i = 0; i < square.length; i++) {
    square[i].addEventListener('click', oneTurn, {once:true})
}