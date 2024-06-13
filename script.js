let userScore =0;
let compScore =0;

const choices =document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score ");

const genCompChoice =()=>{
    const options = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText ="Game was draw!";
    msg.style.backgroundColor ="#020122";
};

const showWinner =(userWin ,userChoice ,compChoice )=>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win! Yours ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lose! Your ${compChoice} Beats Yours ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}
     

const playGame = (userChoice) =>{
    //console.log("user Choice =",userChoice);
    const compChoice = genCompChoice();
    //console.log("comp choice =",compChoice);

    if (userChoice === compChoice) {
    drawGame();
    } else{
        let userWin = true;
        if(userChoice ==="Rock") {
            userWin = compChoice ==="Paper" ? false : true;
        } else if( userChoice ==="Paper") {
            userWin = compChoice ==="Scisoors" ? false : true;
        }else{
            userWin= compChoice ==="Rock" ?false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        //console.log("choice was clicked");
        const userChoice= choice.getAttribute("id");
        // console.log("id was cliced ",userChoice)
        playGame(userChoice);
    });
});