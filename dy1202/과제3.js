const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let outputB = words.filter((item, index)=>{
    return item.length >= 7;
});
console.log(outputB);