let login = prompt("Who's there? ", "")

if (login == "Admin"){
    let password = prompt("Enter password: ", "");
    if (password == "TheMaster"){
        alert("Welcome");
    } else if (password = '' || password == null){
        alert("Canceled");
    } else {
        alert("Wrong Password");
    }
} else if (login == '' || login == null){
    alert("Canceled");
} else{
    alert("I don't know you!!");
};