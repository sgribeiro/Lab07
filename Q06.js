/*6 - Escreva um programa JavaScript que aceite um número como entrada
e insira traços (-) entre cada dois números pares. Por exemplo, se você
aceitar 025468, a saída deve ser 0-254-6-8*/

number = '32165487426508';
//number = '025468';

arr_number = number.split("");

for (i = 0; i <= arr_number.length; i++)
{
    if ((arr_number[i] % 2 == 0) & (arr_number[i + 1] % 2 == 0)) 
    {
        arr_number.splice(i + 1, 0, '-')
    }
}

console.log(arr_number.join(""))