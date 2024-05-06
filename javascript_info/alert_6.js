let n = prompt("Enter a number: ", "")

primeNumber:
for (i = 2; i<=n; i++){
    for (j = 2; j < i; j++){
        if (i%j == 0){
            continue primeNumber
        }
    }
    alert(i)
}