const gameBoard = {
    board: ['', '', '', '', '', '', '', '', '']
}

const Player = (name, letter, turn, wins, losses) => {
    return {name, letter, turn, wins, losses}
}

const playerOne = Player('p1', 'X', true, 0, 0)
const playerTwo = Player('p2', 'O', false, 0, 0)

const turnFunc = () => {
    // console.log('before the turns player One ' + playerOne.turn + ' player Two ' + playerTwo.turn)
    gameBoard.board.splice()
    playerOne.turn = !playerOne.turn
    playerTwo.turn = !playerTwo.turn
    // console.log('after the turns player One ' + playerOne.turn + ' player Two ' + playerTwo.turn)
}

const addToBoard = () => {
const dom = document.querySelectorAll('.square')
dom.forEach(ele => {
    ele.addEventListener('click', addToArray)
})
}

const renderToDom = () => {
    const dom = document.querySelectorAll('.square')
    dom.forEach(ele => {
        // console.log(ele)
        ele.innerText = gameBoard.board[ele.dataset.pos]         
    })
    // console.log(dom)
    
}

const removeListeners = () => {
    const dom = document.querySelectorAll('.square')
    dom.forEach(ele => {
        ele.removeEventListener('click', addToArray)
    })
}

const addToArray = e => {
    if(gameBoard.board[e.target.dataset.pos] === '') {
    gameBoard.board.splice(e.target.dataset.pos, 1, playerOne.turn === true ? playerOne.letter : playerTwo.letter)
    turnFunc()
    }
    else {alert('This space has already been taken')}
renderToDom()
determineWinner()
}
addToBoard()

const congrats = (x) => {
    const selector = document.querySelector('.play')
    const textNode = (x === 'X' ? 'Congratulations to Player 1' : 'Congratulations to player 2')
    selector.after(textNode)
    console.log(textNode)

    
}


const winningArrays = [[0, 1, 2], [1, 4, 7], [2, 5, 8], [0, 3, 6], [0, 4, 8], [2, 5, 7], [3, 4, 5], [6, 7, 8]]


var regArray = [2, 4, 5, 'Capsize', 'Dirty mcGirt', 9]

const determineWinner = () => {
    if(winningArrays.some(elem => elem.every(ele => gameBoard.board[ele] === 'X')) === true) {
     console.log('Winner Winner') 
     congrats('X')
     removeListeners()
}
if(winningArrays.some(elem => elem.every(ele => gameBoard.board[ele] === 'O')) === true) {
    console.log('Winner Winner') 
    congrats()
    removeListeners('O')
}
if(gameBoard.board.every(ele => ele !== '')) {
    
}}