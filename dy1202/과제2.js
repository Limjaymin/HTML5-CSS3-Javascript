let array1 = [1,4,9,16];


console.log('--- map() 메소드 ---');
let outputA = array1.map((item, index)=> {
    return item * 2;
});
console.log(outputA);
console.log();


console.log('---forEach() 메소드 ---');
array1.forEach((item, index)=> {
    console.log(item)
});

console.log();
