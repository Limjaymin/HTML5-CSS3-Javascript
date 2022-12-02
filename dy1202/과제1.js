var student = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
]


student.sort((itemA, itemB)=> {
    if(itemA.name < itemB.name){
        return -1;
    }else if(itemA.name > itemB.name){
        return 1;
    }else{
        return 0;
    }
});
console.log(student);
console.log();

student.sort((itemA, itemB)=> {
    if(itemA.name > itemB.name){
        return -1;
    }else if(itemA.name < itemB.name){
        return 1;
    }else{
        return 0;
    }
});
console.log(student);
console.log();






student.sort((itemA, itemB) => {
    return itemA.age - itemB.age;
});
console.log(student);
console.log();


student.sort((itemA, itemB) => {
    return itemB.age - itemA.age;
});
console.log(student);
console.log();







