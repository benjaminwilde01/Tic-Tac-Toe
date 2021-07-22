const main = document.querySelector('.main')

let xCount = []
let oCount = []

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const square = document.querySelectorAll('.square');
// console.log(square)



const oneTurn = (ev) => {
    

    if (xCount.length === oCount.length) {
        ev.currentTarget.innerText = "X"
        xCount.push(Number(ev.currentTarget.id))
    }
    else if (xCount.length > oCount.length) {
        ev.currentTarget.innerText = "O"
        oCount.push(Number(ev.currentTarget.id))
        console.log(oCount)
    }
    determineWinner()
}

const determineWinner = () => {
    for (let i = 0; i < winningConditions.length; i++) {
        if (winningConditions[i].every(space => xCount.includes(space))) {
            alert('Player 1 wins')
        }
    }
}

for (i = 0; i < square.length; i++) {
    square[i].addEventListener('click', oneTurn, {once:true})
}

