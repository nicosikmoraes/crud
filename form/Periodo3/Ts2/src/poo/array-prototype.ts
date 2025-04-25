export default class LastArray {
    array: number[] = [1, 4, 6, 7, 6];


    public getLast(){
        let size: number;
        size = this.array.length;

        let last: number;
        last = this.array[size - 1]

        if(last > 0){
            console.log(last);
        }else{
            console.log(-1)
        }
    }

}

let array = new LastArray();
console.log(array.getLast());