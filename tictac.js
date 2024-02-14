const gameBoard = {
    board: ['', '', '', '', '', '', '', '', '']
}

const Player = (name, letter, turn, wins, ties) => {
    return {name, letter, turn, wins, ties}
}

const playerOne = Player('p1', 'X', true, 0, 0)
const playerTwo = Player('p2', 'O', false, 0, 0)

const turnFunc = () => {
    // console.log('before the turns player One ' + playerOne.turn + ' player Two ' + playerTwo.turn)
    // gameBoard.board.splice()
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

const changeBoard = () => {
    const congrat = document.querySelector('.congrats')
    if(congrat) { congrat.remove()}
    gameBoard.board[0] = ''
    gameBoard.board[0] = '' 
    gameBoard.board[1] = ''
    gameBoard.board[2] = ''
    gameBoard.board[3] = ''
    gameBoard.board[4] = ''
    gameBoard.board[5] = ''
    gameBoard.board[6] = ''
    gameBoard.board[7] = ''
    gameBoard.board[8] = ''
    renderToDom()
    addToBoard()
}

const renderToDom = () => {
    const dom = document.querySelectorAll('.square')
    dom.forEach(ele => {
        console.log(ele)
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
    x === 'X' ? playerOne.wins++ : x === 'O' ? playerTwo.wins++ : playerOne.ties++ && playerTwo.ties++;
    const selector = document.querySelector('.play')
    const congratulations = document.createElement('p')
    congratulations.setAttribute('class', 'congrats')
    const textNode = (x === 'X' ? 'Congratulations to Player 1' : x === 'O' ? 'Congratulations to player 2' : 'We have a tie')
     
    congratulations.innerHTML = textNode

    selector.after(congratulations)
    console.log(textNode)

    
}

const scoreBoard = (x) => {
    const clean = document.querySelector('.score')
    if(clean) {
        clean.remove()
    }
    const elem = document.createElement('div')
    elem.setAttribute('class', 'score')
    const scoreB = document.createElement('div')
    scoreB.setAttribute('class', 'scoreboard')
    scoreB.innerText = `Scoreboard: \n Player 1: ${playerOne.wins} \n Player 2: ${playerTwo.wins} \n Ties: ${playerOne.ties}`
    elem.appendChild(scoreB)
    const doc = document.querySelector('.board')
    doc.after (elem)
}

const rematch = () => {
    const btn = document.querySelector('button')
    btn.innerText = 'Rematch'
    btn.setAttribute('class', 'rematch')
    btn.addEventListener('click', changeBoard)
}
const playAgain = () => {
    gameBoard.board.forEach(ele => ele = '')
    renderToDom()
    addToBoard()
}


const winningArrays = [[0, 1, 2], [1, 4, 7], [2, 5, 8], [0, 3, 6], [0, 4, 8], [2, 5, 7], [3, 4, 5], [6, 7, 8]]


const determineWinner = () => {
    if(winningArrays.some(elem => elem.every(ele => gameBoard.board[ele] === 'X')) === true) {
     console.log('Winner Winner') 
     congrats('X')
     scoreBoard('X')
     removeListeners()
     rematch()
}
if(winningArrays.some(elem => elem.every(ele => gameBoard.board[ele] === 'O')) === true) {
    console.log('Winner Winner') 
    congrats('O')
    scoreBoard('O')
    removeListeners('O')
    rematch()
}
if(gameBoard.board.every(ele => ele !== '')) {
  console.log('We have a tie')
  congrats('tie')
  scoreBoard('tie')
  rematch()
}}