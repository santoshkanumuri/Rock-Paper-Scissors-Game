const game =()=> {
    let pscore=0;
    let cscore=0;
//start the Game
    const startGame =() =>{
        const playBtn =document.querySelector(".intro button");
        const introScreen =document.querySelector(".intro");
        const match =document.querySelector(".match");
        playBtn.addEventListener("click", () =>{
            introScreen.classList.add("fadeout");
            match.classList.add("fadein");
        });
    };
//playmatch
const playMatch = () => {
    const options=document.querySelectorAll(".options button");
    const playerHand=document.querySelector(".player-hand");
    const computerHand=document.querySelector(".computer-hand");
    const hands=document.querySelectorAll('.hands img');
    hands.forEach(hand => {
    hand.addEventListener('animationend',function(){
        this.style.animation='';
    });
    });
    //generate computer options
    const computerOptions=["rock","paper","scissors"];
    options.forEach(option => {
        option.addEventListener("click", function(){
        //computer choice
        const computerNumber=Math.floor(Math.random()*3);
        const computerChoice=computerOptions[computerNumber];
        setTimeout(() =>{
        //call computer hands here
        compareHands(this.textContent,computerChoice);
        //update images
        playerHand.src=`${this.textContent}.png`;
        computerHand.src=`${computerChoice}.png`;
        },1000);
        //animation
        playerHand.style.animation="shakePlayer 1s ease-in";
        computerHand.style.animation="shakeComputer 1s ease-in";
    });
});
};
const updateScore = () =>{
    const playerScore=document.querySelector('.player-score p');
    const computerScore=document.querySelector('.Computer-score p');
    playerScore.textContent=pscore;
    computerScore.textContent=cscore;
}
const compareHands=(playerchoice,computerChoice) => {
    //update inner text
    const winner=document.querySelector('.winner');
    if(playerchoice===computerChoice){
        winner.textContent='TIE';
        updateScore();
        return;
    }
    //choice cases
    //player-rock and comp-scissors,paper
    if(playerchoice==='rock'){
        if(computerChoice==='scissors'){
            winner.textContent='You Won';
            pscore++;
            updateScore();
            return;
        }
        else{
            winner.textContent='Computer Won';
            cscore++;
            updateScore();
            return;
        }
    }
    //player-paper and comp-scissors,rock
    if(playerchoice==='paper'){
        if(computerChoice==='scissors'){
            winner.textContent='Computer Won';
            cscore++;
            updateScore();
            return;
        }
        else{
            winner.textContent='You Won';
            pscore++;
            updateScore();
            return;
        }
    }
    //player-scissors and comp-rock,paper
    if(playerchoice==='scissors'){
        if(computerChoice==='rock'){
            winner.textContent='Computer Won';
            cscore++;
            updateScore();
            return;
        }
        else{
            winner.textContent='You Won';
            pscore++;
            updateScore();
            return;
        }
    }
}

    //call inner functions
    startGame();
    playMatch();
};
game();