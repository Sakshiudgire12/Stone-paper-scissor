let userScore=0;
let computreScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const genrateComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random () *3);
    return options[randomIdx];
}
const drawGame = ()=>
{

msg.innerText ="Game Was Draw. Play again.";
msg.style.backgroundColor="#081b31";
}
 const showWinner =(userWin, userChoice,computerChoice)=>
 {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("YOU WIN!!!");
        msg.innerText =`You Win!!! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor=" green";
    }
    else{
        computreScore++;
        computerScorePara.innerText = computreScore;
        // console.log("You LOSE....");
        msg.innerText =`You Lose.. ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor=" red";
    }
 }

const playGame=(userChoice)=>
{

const computerChoice=genrateComputerChoice();

if(userChoice === computerChoice)
{
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "rock")
    {
        //scissor,paper
        userWin = computerChoice === "paper"? false :true;
    }
    else if(userChoice === "paper"){
        //rock,scissor
        userWin = computerChoice === "scissors" ? false :true;

    }
    else{
        userWin = computerChoice ==="rock" ? false :true;
    }
    showWinner(userWin ,userChoice, computerChoice);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});
