"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LastArray {
    constructor() {
        this.array = [1, 4, 6, 7, 6];
    }
    getLast() {
        let size;
        size = this.array.length;
        let last;
        last = this.array[size - 1];
        if (last > 0) {
            console.log(last);
        }
        else {
            console.log(-1);
        }
    }
}
exports.default = LastArray;
let array = new LastArray();
console.log(array.getLast());
