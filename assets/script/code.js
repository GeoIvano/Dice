function Dice(number) {
    if (typeof number === 'number') {
        this.number = number
    } else {
        throw new Error("Enter a valid number !")
    }

}
Dice.prototype.row = function() {
    var result = Math.floor(Math.random() * this.number + 1)
    return result;
}
var zar = new Dice(6)

var dice = document.getElementById('dice')
var diceButton = document.getElementById('diceButton')

diceButton.addEventListener('click', function() {
    var result = zar.row();
    printNumber(result)
})

function printNumber(number) {
    dice.textContent = number;
}