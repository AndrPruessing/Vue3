function add(arg1: number, arg2: number): number {
    return arg1 + arg2;
}

function concatenate(arg1: string, arg2: string): string {
    return arg1 + arg2;
}

function check(arg: number): boolean {
    return arg > 2 ? false : true;
}

const a1 = 2;
const a4 = 2;

const r1 = add(a1, a4);

const a2 = 'Bob';
const a3 = 'Smith';
const r2 = concatenate(a2, a3);
