let list = [1, 2, 3];

function printArray(arr: number[]): void {
    console.log(arr);
}
printArray(list);

// printArray(27);

function printTuple(tpl: [number, number, number]) {
    console.log(tpl);
}
// let tpl:[number,number] = [21,22];
let tpl: [number, number, number] = [21, 22, 23];

printTuple(tpl);
