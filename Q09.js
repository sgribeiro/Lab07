/*9 - Existem dois arrays com valores individuais, escreva um programa
JavaScript para calcular a soma de cada valor de índice individual dos
arrays fornecidos.*/

first_arr = [1,2,3,4,5,6]
second_arr = [7,8,9,10,11,12]
sum_arr = []

for(i = 0; i < first_arr.length; i++)
{
    sum_arr.push(first_arr[i] + second_arr[i])
}

console.log(sum_arr)