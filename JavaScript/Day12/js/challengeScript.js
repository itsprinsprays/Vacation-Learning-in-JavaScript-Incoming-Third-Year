let numbers = [5,10,15,20,25,30];
let total = 0;

console.log(numbers.length)

function summation(sum) {

    for(let i = 0; i < numbers.length; i++) {
         total += sum[i];
    }

    return total;
}

total = summation(numbers);
console.log(`Total Sum : ${total}`)