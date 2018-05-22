class Letter {
    constructor(character) {
        this.character = character;
        // this.appear = false;
        if (this.character === '')
            this.appear = true;
        console.log(character);
    }
    printInfo() {
        if (this.appear) {
            return this.character;
        }
        return ' _ ';
    }
}

module.exports = Letter;



