const button2 = () => {
    document.getElementById("Comment").innerHTML = "Well Okay Then. \n Goodluck! 😉";
    
  let ground = document.getElementById("stage").innerHTML = "👇";
}
const button3 = () => {
    document.getElementById("Comment").innerHTML = "Duh! 🙄\n You are playing anyways!"
    
    let ground = document.getElementById("stage").innerHTML = "😜";
}

function sections() {
  var section = document.querySelectorAll(".section");
  for (var i = 0; i < section.length; i++) {
    var windowHeight = window.innerHeight;
    
    var elementTop = section[i].getBoundingClientRect().top;
    var elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      section[i].classList.add("active");
    } else {
      section[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", sections);
sections();

function getRandom(arr)
{
    const randomIndex = Math.floor(Math.random() * arr.length);
    
    return arr[randomIndex];
}

const array = ["rock", "paper", "scissors"];

const alert1 = [
    "No offense, but you really suck at this 😅", "You got beaten by an AI 😝", "Seriously, I wasn't even trying hard at all 🤪"
]

const alert2 = [
    "Nice 😏. Beginner's luck I guess. I am gonna beat you next time ", "You might be good at this afterall 😌.", "I underestimated you 🤨. Get ready cause I won't hold back anymore"
]

let reply = document.querySelector(".reply");

let playerScore = 0;

let computerScore = 0;

function resetScores(){

    playerScore = 0;
    
    computerScore = 0;
    document.getElementById("player").innerHTML= 0;
    document.getElementById("computer").innerHTML = 0;
}


let popup = document.querySelector(".popup");

let alert = document.querySelector(".alert");

let retry = document.querySelector(".retry");

document.getElementById("rock");

document.getElementById("paper");

document.getElementById("scissors");

document.getElementById("player").innerHTML = playerScore;
 document.getElementById("computer").innerHTML = computerScore;

let play = document.getElementById("player");

let comp = document.getElementById("computer");

function rock()
{
     document.querySelector(".load").classList.add("active");
    
    let computerChoice = getRandom(array);
    
    if (computerChoice == "rock"){
        reply.innerHTML = "AI chose rock.\nIt's a tie 😌";
    }
    
    else if(computerChoice == "paper")
    {
        computerScore = computerScore + 1;
        reply.innerHTML = "You got wrapped 😂. AI chose paper";
        comp.innerHTML = computerScore;
    }
    
    else
    {
        playerScore = playerScore + 1;
        
        reply.innerHTML = "Not bad. You crushed scissors 😀. AI chose scissors.";
        play.innerHTML = playerScore;
    }
    if (computerScore == 5 || playerScore == 5)
{
    popup.classList.add("active");
    if (playerScore > computerScore)
    {
        popup.classList.add("active");
        alert.innerHTML = getRandom(alert2);
        resetScores();
    }
    else if (computerScore > playerScore)
    {
        popup.classList.add("active");
        alert.innerHTML = getRandom(alert1);
        resetScores();
    }
}
}
function paper()
{
    document.querySelector(".load").classList.add("active");
    
    let computerChoice = getRandom(array);
    
    if (computerChoice == "paper"){
        reply.innerHTML = "AI chose paper.\nIt's a tie 😌";
    }
    
    else if(computerChoice == "rock")
    {
        playerScore = playerScore + 1;
        reply.innerHTML = "AI chose rock. And you wrapped it up. Impressive 👍";
        play.innerHTML = playerScore;
    }
    
    else
    {
        computerScore = computerScore + 1;
        
        reply.innerHTML = "AI chose Scissors. It cut you into pieces 🤪!";
        comp.innerHTML = computerScore;
    }
    if (computerScore == 5 || playerScore == 5)
{
    popup.classList.add("active");
    if (playerScore > computerScore)
    {
         popup.classList.add("active");
         alert.innerHTML = getRandom(alert2);
         resetScores();
         
    }
    else if (computerScore > playerScore)
    {
        popup.classList.add("active");
        alert.innerHTML = getRandom(alert1);
        resetScores();
    }
}
}
function scissors()
{
    document.querySelector(".load").classList.add("active");
    
    let computerChoice = getRandom(array);
    
    if (computerChoice == "scissors"){
        reply.innerHTML = "AI chose scissors.\nIt's a tie 😌";
    }
    
    else if(computerChoice == "paper")
    {
        playerScore = playerScore + 1;
        reply.innerHTML = "AI chose paper. And you cut it up. Not bad 😏";
        play.innerHTML = playerScore;
        
    }
    
    else
    {
        computerScore = computerScore + 1;
        
        reply.innerHTML = "AI chose rock. It crushed you into pieces 😝!";
        comp.innerHTML = computerScore;
    }
    if (computerScore == 5 || playerScore == 5)
{
    popup.classList.add("active");
    if (playerScore > computerScore)
    {
        popup.classList.add("active");
        alert.innerHTML = getRandom(alert2);
        resetScores();
    }
    else if (computerScore > playerScore)
    {
        popup.classList.add("active");
        alert.innerHTML = getRandom(alert1);
        resetScores();
    }
}
}
function again() {
    resetScores();
    popup.classList.add("back");
    location.reload();
}
