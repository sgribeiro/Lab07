/*3 - Escreva uma função JavaScript para obter o primeiro elemento de um
array. Passar um parâmetro 'n' retornará os primeiros 'n' elementos do
array.*/

function first_elements(arr, n) 
{
    console.log('O primeiro elemento é: ', fruits[0])

    if ((n >= 0) & (n <= arr.length)) 
    {
        console.log('Elementos até', n, ':', arr.slice(0,n))
    }
    else
    {
        console.log(n, 'está fora do tamanho do Array')
    }
}

fruits = ['Maçã', 'Banana', 'Laranja', 'Manga', 'Morango']

first_elements(fruits, 3)
//first_elements(fruits, 13)