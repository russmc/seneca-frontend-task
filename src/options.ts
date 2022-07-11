export default class Options {
    private _correct: Array<string> | string;
    private _incorrect: Array<string> | string;
    
    constructor(correct: Array<string> | string, incorrect: Array<string> | string) {
        this._correct = correct;
        this._incorrect = incorrect
    }

    private arrayWrapper(variable: any) {
        // wraps in array if not an array
        if (Array.isArray(variable)) {
            return variable
        } else {
            return [variable]
        }
    }

    public get correct() {
        return this.arrayWrapper(this._correct)
    }

    public get incorrect() {
        return this.arrayWrapper(this._incorrect)
    }

    public get length() {
        return this.correct.length + this.incorrect.length
    }

    public shuffle() {
        // returns shuffled array of all options
        return [...this.correct, ...this.incorrect].sort((a, b) => 0.5 - Math.random())
    }
}