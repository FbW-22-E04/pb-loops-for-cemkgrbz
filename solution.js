//1 

let sum = 0;
for (let i = 0; i <= 20; i++) {
    sum = sum + i;
    console.log('The sum is', sum)
}

//2

for (let i = 1; i <= 5; i++) {
    if (i > 1) {
        console.log(`There are ${i} bottle of beer on the table.`)
    } else {
        console.log(`There is 1 bottle of beer on the table.`)  
    }
}

//3


for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i, "is even");
    } else {
        console.log(i, "is odd");   
    }
}