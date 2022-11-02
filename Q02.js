//2 - Escreva uma função JavaScript para clonar um array.

function copy(arr)
{
    return arr.slice()
}

fruits = ['Maçã', 'Banana', 'Laranja']
shopping_list = copy(fruits)

console.log(shopping_list)