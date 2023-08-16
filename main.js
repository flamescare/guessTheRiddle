const riddle = {
    estion: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(str) {

        if (this.tries < 1) {
            alert("Игра окончена");
            console.log("tries are left");
            return 0;
        }

        if (str.toLowerCase().includes(this.correctAnswer)) {
            alert("Вы угадали, ура");
            console.log("Вы угадали, ура");
            this.tries = 0;
        } else {
            alert("Вы не угадали");
            console.log("Вы не угадали");
            this.tries--;
        }   

            const hint = this.hints[this.tries === 2 ? 0 : 1];    

            if (this.tries) {
                alert("Подсказка: " + hint)
            }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    const input = document.getElementsByTagName('input')[0];

    const guessedAnswer = input.value;

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer);
    }
}