let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    return Math.floor( Math.random() * 12 ) + 1;
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cartas: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Soma: " + sum
    if (sum <= 20) {
        message = "Quer puxar mais uma carta?"
    } else if (sum === 21) {
        message = "Vinte e um! Venceu o Jogo!"
        hasBlackJack = true
    } else {
        message = "Você está fora do jogo!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    renderGame()
}