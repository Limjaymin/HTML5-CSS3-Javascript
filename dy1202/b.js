let 구름 ={
    이름: '구름',
    나이:6,
    종족: '강아지'
}
let 별 = {...구름}
별.이름 = '별'
별.나이 = 1,
별.예방접종= true

console.log(JSON.stringify(구름))
console.log();
console.log(JSON.stringify(별))