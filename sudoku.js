class Sudoku {
    constructor(data) {
        this.initData(data);
    }

    initData(data) {
        this.rows = [];
        this.cols = [];
        this.grid = [];

        for (let i = 0; i < data.length / 9; i++) {
            this.rows.push(data.slice(i * 9, i * 9 + 9));
        }

        for (let i = 0; i < 9; i++) {
            this.cols.push([]);
            this.grid.push([]);
        }

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                this.cols[col][row] = data[row][col];
                let gridRow = Math.floor(row / 3);
                let gridCol = Math.floor(col / 3);
                let gridIndex = gridRow * 3 + gridCol;
                this.grid[gridIndex].push(data[row][col]);
            }
        }
    };

    validate(data) {
        for (let row = 0; row < 9; row++) {
            data[row].sort();

            for (let col = 0; col < 9; col++) {
                let value = data[row][col],
                    next = data[row][col + 1];

                if (!(value && value > 0 && value < 10)) {
                    return false;
                }

                if (col !== 8 && value === next) {
                    return false;
                }
            }
        }
        return true;
    };

    isCorrect() {
        return (this.validate(this.rows) && this.validate(this.cols) && this.validate(this.grid));
    };
}

module.exports = Sudoku;
