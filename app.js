const main = document.querySelector('.main')
const board = document.querySelector('.hidden-board')
const square = document.querySelectorAll('.square');
const startButton = document.querySelector('.start-button')
const gameResult = document.querySelector('.game-result')
const resetButton = document.querySelector('.reset-button')

const gameInfo = document.querySelector('.game-info')
const currentPlayer = document.querySelector('.current-player')
const PlayerXWins = document.querySelector('.player-x-wins')
const PlayerOWins = document.querySelector('.player-o-wins')
const xWinCount = document.querySelector('.x-win-count')
const oWinCount = document.querySelector('.o-win-count')

let xMoves = []
let oMoves = []
// let winner = false
let totalMoves = 0

let xWins = 0
let oWins = 0

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
    board.classList.toggle('show')
    startButton.classList.toggle('hide')
    console.log('working')
    for (i = 0; i < square.length; i++) {
        square[i].addEventListener('click', oneTurn, {once:true})
    }
    currentPlayer.innerText = 'X'
    xWinCount.innerText = xWins
    oWinCount.innerText = oWins
    toggleGameInfo()
}

const restartGame = () => {
    for (i = 0; i < square.length; i++) {
        square[i].addEventListener('click', oneTurn, {once:true})
    }
    toggleResetBtn()
}

const resetGame = () => {
    xMoves = [],
    oMoves = [],
    totalMoves = 0,
    square.forEach((element)=> element.innerText = '')
    restartGame()
    gameResult.innerText = ''
}

const toggleResetBtn = () => {
    resetButton.classList.toggle('show')
}

const toggleGameInfo = () => {
    // PlayerXWins.classList.toggle('show')
    // PlayerOWins.classList.toggle('show')
    gameInfo.classList.toggle('show-game-info')
}

// if (winner) {
//     return 
// } else {
    const oneTurn = (ev) => {
        if (xMoves.length === oMoves.length) {
            ev.currentTarget.innerText = "X"
            xMoves.push(Number(ev.currentTarget.id))
            totalMoves += 1
            console.log(xMoves)
            currentPlayer.innerText = "O"
        }
        else if (xMoves.length > oMoves.length) {
            ev.currentTarget.innerText = "O"
            oMoves.push(Number(ev.currentTarget.id))
            totalMoves += 1
            console.log(oMoves)
            currentPlayer.innerText = "X"
        }
        console.log(totalMoves)
        determineWinner()
    }
// }

const determineWinner = () => {
    for (let i = 0; i < winningConditions.length; i++) {
        if (winningConditions[i].every(space => xMoves.includes(space))) {
            // alert('Player 1 wins')
            // winner = true
            for (i = 0; i < square.length; i++) {
                square[i].removeEventListener('click', oneTurn, {once:true})
            }
            toggleResetBtn()
            gameResult.innerText = 'Player X Wins'
            xWins++
            xWinCount.innerText = xWins
            break
        }
        else if (winningConditions[i].every(space => oMoves.includes(space))) {
            // alert('Player 2 wins')
            // winner = true
            for (i = 0; i < square.length; i++) {
                square[i].removeEventListener('click', oneTurn, {once:true})
            }
            toggleResetBtn()
            gameResult.innerText = 'Player O Wins'
            oWins++
            oWinCount.innerText = oWins
            break
        }
        else if (totalMoves === 9) {
            // alert('Its a tie')
            for (i = 0; i < square.length; i++) {
                square[i].removeEventListener('click', oneTurn, {once:true})
            }
            toggleResetBtn()
            gameResult.innerText = `It's a tie!`
            break
        }
    }
}