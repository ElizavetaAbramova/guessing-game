class GuessingGame {

    constructor(number, average) {
        number; //загадочное число
        average = Math.floor((this.max + this.min) / 2);
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        //определить переменные мин и макс значений
    }

    guess() {
        this.guessNum = Math.round((this.max + this.min) / 2);
        return this.guessNum;
        //сравнить загаданное число с серединой
    }

    lower() {
        this.max = this.guessNum;
        //функция, которая идет в левую половину, двигаем максимум на значение середины
    }

    greater() {
        this.min = this.guessNum;
        //функция, которая идет в правую половину, двигаем минимум на значение середины
    }
}

module.exports = GuessingGame;
