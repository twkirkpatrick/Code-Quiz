
//Start Button
var startButton = document.querySelector("#start-btn");


//Container on opening page
var mainContent = document.querySelector(".main-content");

//Empty Question Container
var questionContainer = document.querySelector(".question-container");


let currentQuestion = 0;

const questionText = document.querySelector("#question");
const answerOne = document.querySelector("#answer-btn1");
const answerTwo = document.querySelector("#answer-btn2");
const answerThree = document.querySelector("#answer-btn3");
const answerFour = document.querySelector("#answer-btn4");

const questions = [

    {
        question: "What is an example of a boolean?",
        choices: ["Selector", "true", "HTML", "4"],
        answer: "true"
    },
    {
        question: "What is an example of a boolean?",
        choices: ["Selector", "true", "HTML", "4"],
        answer: "true"
    },
    {
        question: "What is an example of a boolean?",
        choices: ["Selector", "true", "HTML", "4"],
        answer: "true"
    },
    {
        question: "What is an example of a boolean?",
        choices: ["Selector", "true", "HTML", "4"],
        answer: "true"
    },
    {
        question: "What is an example of a boolean?",
        choices: ["Selector", "true", "HTML", "4"],
        answer: "true"
    }

]
   





startButton.addEventListener("click", startGame);

function startGame(){
    console.log("started");
    startButton.classList.add("hide");
    mainContent.classList.add("hide");
    questionContainer.classList.remove("hide");
    setNextQuestion();
    
    
    

}

function setNextQuestion(){
    const current = questions[currentQuestion];

    questionText.innerText = current.question;

    answerOne.innerText = current.choices[0];
    
    
   
}


function selectAnswer(){


}


//---TIMER------------------------------------

/* var time = 59;

var elapsed = 0;

var interval;

function appendTime(){
    console.log({time, past});
}

function wrongPenalty(){
    elapsed += 5;
}

function startTimer(){
    if (elapsed < time){
    interval = setInterval(function(){
    elapsed++
    appendTime();
           }, 1000)
    } else{
        clearInterval(interval);
    }

    
}

startTimer(); */