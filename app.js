const sudoku = require('./sudoku');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let repeatQuestion = function() {
    readline.question("Please input your sudoku data (must be per row, horizontally, separated by comma without space): ", (data) => {
        let cond = false;
        data = data.split(',');
        data = data.filter(function (el) {
            return el != null && el != '';
        });

        if (data.length == 81) {
            cond = true
            const su = new sudoku(data)

            if (su.isCorrect())
                console.log('Correct!')
            else
                console.log('Incorrect!')
        } else {
            console.error("Please input 9x9 sudoku data! (81 numbers)")
        }

        if (cond)
            return readline.close();

        repeatQuestion();
    });
};

repeatQuestion();
