const main = document.querySelector('.main')
const startButton = document.querySelector('.hidden-board')

let xMoves = []
let oMoves = []
// let winner = false
let totalMoves = 0

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

const startGame = () => {
    startButton.classList.toggle()
    console.log('working')
}

const resetGame = () => {
    xMoves = [],
    oMoves = [],
    totalMoves = 0,
    square.forEach((element)=> element.innerText.remove())
}

const square = document.querySelectorAll('.square');
// console.log(square)

// if (winner) {
//     return 
// } else {
    const oneTurn = (ev) => {
        if (xMoves.length === oMoves.length) {
            ev.currentTarget.innerText = "X"
            xMoves.push(Number(ev.currentTarget.id))
            totalMoves += 1
            console.log(xMoves)
        }
        else if (xMoves.length > oMoves.length) {
            ev.currentTarget.innerText = "O"
            oMoves.push(Number(ev.currentTarget.id))
            totalMoves += 1
            console.log(oMoves)
        }
        console.log(totalMoves)
        determineWinner()
    }
// }

const determineWinner = () => {
    for (let i = 0; i < winningConditions.length; i++) {
        if (winningConditions[i].every(space => xMoves.includes(space))) {
            alert('Player 1 wins')
            // winner = true
            break
        } else if (winningConditions[i].every(space => oMoves.includes(space))) {
            alert('Player 2 wins')
            // winner = true
            break
        } else if (totalMoves === 9) {
            alert('Its a tie')
            break
        }
    }
}

for (i = 0; i < square.length; i++) {
    square[i].addEventListener('click', oneTurn, {once:true})
}

