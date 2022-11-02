/*8 - Escreva um programa JavaScript para remover itens duplicados de um array 
(ignore a diferenciação entre maiúsculas e minúsculas).*/

fruits = ['Maçã', 'Banana', 'Laranja', 'Manga', 'banana', 'Morango', 'Maracujá', 'MANGA', 'manga']

upper = []
fruits.forEach(element => {upper.push(element.toUpperCase())})

individual_fruits = Array.from(new Set(upper))

console.log(individual_fruits);