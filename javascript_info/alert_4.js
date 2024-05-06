let position = prompt("Enter your position", "")

let result = (position == 'Employee') ? alert("Hello") :
    (position == 'Director') ? alert("Greetings") :
    (position == ' ') ? alert("No position") :
    alert("Hi");