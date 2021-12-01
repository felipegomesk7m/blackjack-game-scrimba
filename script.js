let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 12 ) + 1;
    // Define os valores das cartas A para 11, e Valete, Queen e King para 10
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    cards.push(card);
    renderGame()
}