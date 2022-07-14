let english = "Hello World" 
let spanish = "Hola" 
let french = "Bonjour" 

function helloWorld (language){
    if (language == english) {
        return english
    } else 
    if (language == spanish) {
        return spanish
    }
    if (language == french) {
        return french
    } else;
    if (language) {
        return english
    }     
}

const result = helloWorld("Bonjour") 
console.log(result)
