//1 - Escreva uma função JavaScript para verificar se uma `entrada` é um array ou não.

function isArr(arr) 
{
    if (Array.isArray(arr)) 
    {
        console.log(arr, 'é um array')
    }
    else 
    {
        console.log(arr, 'não é um array')
    }
}

fruits = ['Maçã', 'Banana', 'Laranja']
//fruits = Bananas

isArr(fruits)