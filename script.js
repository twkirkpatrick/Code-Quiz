
//Start Button
var startButton = document.querySelector("#start-btn");
var timeDisplay = document.querySelector("#time");
var timeHide = document.querySelector(".hide");
var time = 75;
var userScore = 0;



//Container on opening page
var mainContent = document.querySelector(".main-content");

//Empty Question Container
var questionContainer = document.querySelector(".question-container");
//var choicesBtn = document.querySelector(".choicesBtn");
var currentQuestion = 0;
var choicesBtn = document.querySelector("#answers");
var input = document.querySelector(".card");
var submit = document.querySelector(".submit-btn");


var questions = [
    {
        question: "What is an example of a boolean?",
        choices: ["Selector", "true", "HTML", "48"],
        answer: "true"
    },
    {
        question: "Which reserved keyword is used to define a variable?",
        choices: ["var", "let", "const", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "Which attribute do you use to reference a JavaScript file?",
        choices: ["src", "href", "name", "class"],
        answer: "src"
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["function:myFunction", "function myFunction()", "function = myFunction()", "myFunction"],
        answer: "function myFunction()"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["*", "-", "=", "x"],
        answer: "="
    }
]
   

startButton.addEventListener("click", startGame);

function startGame(){
    /* console.log("started"); */
    startButton.classList.add("hide");
    mainContent.classList.add("hide");
    questionContainer.classList.remove("hide");
    timeHide.classList.remove("hide");
    setNextQuestion();
    /* setInterval(countDown, 1000); */

}

function setNextQuestion(){
    
    if(currentQuestion === 5){
        
        endGame();
        return;
        //stop timer here as well
    }
    choicesBtn.textContent = "";
    var questionDisplay = questions[currentQuestion];
    var title = document.getElementById("question");
    title.textContent = questionDisplay.question;

    
    for (var t = 0; t < 4; t++) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("id", t);
        answerBtn.setAttribute("class", "choice");
        answerBtn.setAttribute("value", questionDisplay.choices[t]);
        answerBtn.textContent = questionDisplay.choices[t];
        choicesBtn.appendChild(answerBtn);
    }
    //This ended up being the fix. jQuery will iterate through everything but since we can only use JavaScript, we have to loop through a "querySelectorAll". Also, I think 'answerBtn' was in a unique situation where it does it's job in the scope of the loop, but then gets obliterated once outside of the loop.
    var clickedButt = document.querySelectorAll(".choice");
    for (var t = 0; t < clickedButt.length; t++) {
        clickedButt[t].addEventListener("click", selectAnswer);
    }    

    
    
    


}




function selectAnswer (){
    
    
    
    if (this.value === questions[currentQuestion].answer){
        
        console.log("You picked the correct answer!");
        userScore += 15;
        console.log(userScore);
        currentQuestion++;
        setNextQuestion();

        
          
    } 
    

    else {
        console.log("you picked the wrong answer!");
        
        time -= 10;
        console.log(userScore);
        currentQuestion++;
        setNextQuestion();
        
        
             
    }

    
   
    
    
}





//---TIMER------------------------------------

/* function countDown(){

    time --;
    timeDisplay.textContent = time;
    if(time === 0){
        endGame();
    }
} */

submit.addEventListener("click", function(){
    
    var submitVal = document.getElementById("fname").value;
    
    if(submitVal === ""){
        alert("You must enter something in the field!");
    }

    console.log(submitVal + userScore);
    

    
})









function endGame(){
    questionContainer.classList.add("hide");
    input.classList.remove("hide");
    
    var finalScore = "Your score: " + userScore + " pts";
    

    input.prepend(finalScore); 



    
    
    
            //call endGame function -- make form in html and hide it, then remove class of hide

}
























