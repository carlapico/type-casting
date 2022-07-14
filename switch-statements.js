let fruit = 'grapes'
fruit = 'pear'
fruit = 'pineapple'

switch(fruit){
    case 'pear':
        console.log('nice love those pears')
        break; 
    case 'pineapple':
        fruit = 'strawberry'
        console.log('good for piña colada', 'with', fruit)
        break;

        default: 
            console.log('out of', fruit)
}

let cost = 8.45 
cost = 6

switch (true){
    case cost < 7 && cost > 5:
        console.log('just right price')
        break 

    default:
        console.log('too expensive')
}