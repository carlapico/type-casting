let x = 3
let y = 4

function greatNum (x,y) {
    if (x > y){
        return x
    } else
    if (y > x) {
        return y
    }
}
const result = greatNum (x,y) 

console.log(`The greater number of ${x} and ${y} is ${result}`)

