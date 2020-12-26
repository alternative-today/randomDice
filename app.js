var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = 'dice' + randomNumber + '.png';

document.querySelectorAll('img')[0].setAttribute('src', randomDiceImage);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = 'dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', randomDiceImage2);


if (randomNumber > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins!'
} else if (randomNumber2 > randomNumber) {
    document.querySelector('h1').innerHTML = 'Player 2 wins!'
} else {
    document.querySelector('h1').innerHTML = 'Draw!'
}

// button - roll the dies!
document.querySelector('.myButton').addEventListener('click', function refreshPage () {
    window.location.reload();
})

