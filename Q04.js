/*4 - Escreva uma função JavaScript para obter o último elemento de um
array. Passar um parâmetro 'n' retornará os últimos 'n' elementos do
array.*/

function last_elements(arr, n) 
{

    console.log('O ultimo elemeto é é: ', fruits[arr.length - 1])

    if ((n >= 0) & (n <= arr.length)) 
    {
        console.log('Elementos a partir de', n , ':', arr.slice(arr.length - n, arr.length))
    }
    else
    {
        console.log(n, 'está fora do tamanho do Array')
    }
}

fruits = ['Maçã', 'Banana', 'Laranja', 'Manga', 'Morango', 'Maracujá']

last_elements(fruits, 3)
//last_elements(fruits, 13)