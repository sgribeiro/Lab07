//7 - Escreva um programa JavaScript para localizar o item mais frequente de um array.

arr = [1,2,1,2,4,1,2,2,3,3]
individuals_arr = Array.from(new Set(arr))
count_arr = []

for (i = 0; i < individuals_arr.length; i++)
{
    count_arr.push(
        {
            'elemento':individuals_arr[i],
            'total':arr.filter(x => x === individuals_arr[i]).length
        })
}

frequente = count_arr.reduce(function(prev, current)
{ 
	return prev.total > current.total ? prev : current; 
})

console.log(frequente)