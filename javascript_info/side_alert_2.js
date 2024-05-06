alert("Welcome to the game of Rock, Paper, Scissors")

let choices = ['rock', 'paper', 'scissors']

let player_choice = prompt("rock, paper, scissors").toLowerCase()

let computer = choices[Math.floor(Math.random() * choices.length)]

if (player_choice == 'rock'){
    if (computer == 'scissors'){
        alert("You Won!!🥳")
    }else if (computer == 'paper'){
        alert("You Lost!!😞")
    }else{
        alert("Its A Tie!!👔")
    }
}else if (player_choice == 'paper'){
    if (computer == 'rock'){
        alert("You Won!!🥳")
    }else if (computer == 'scissors'){
        alert("You Lost!!😞")
    }else{
        alert("Its A Tie!!👔")
    }
}else if (player_choice == 'scissors'){
    if (computer == 'paper'){
        alert("You Won!!🥳")
    }else if (computer == 'rock'){
        alert("You Lost!!😞")
    }else{
        alert("Its A Tie!!👔")
    }
}else {
    alert("Please enter the correct choice")
}