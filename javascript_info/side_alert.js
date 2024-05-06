let a = ""
let number = prompt("Enter a number: ", "")
for(i=0; i<=number;i++){
    
    for(j=0; j<i; j++){
       a += "@"
    }
    a += "\n"
}
alert(a)