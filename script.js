

var startButton = document.querySelector("#start-btn");
var timeDisplay = document.querySelector("#time");
var timeHide = document.querySelector(".go-away");
var timerText = document.querySelector("#time-style");
var mainContent = document.querySelector(".main-content");
var questionContainer = document.querySelector(".question-container");
var choicesBtn = document.querySelector("#answers");
var input = document.querySelector(".card");
var submit = document.querySelector(".submit-btn");
var confirmation = document.querySelector("#confirmation");

var time = 51;
var userScore = 0;
var currentQuestion = 0;


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
    countDown();
    var startSound = document.createElement("audio");
    startSound.setAttribute("src", "assets/start.mp3");
    startSound.play();
    startButton.classList.add("hide");
    mainContent.classList.add("hide");
    questionContainer.classList.remove("hide");
    
    setNextQuestion();
    
}

function setNextQuestion(){

    
    
    
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
        var positive = document.createElement("audio");
        positive.setAttribute("src", "assets/positive.mp3");
        positive.play();
        questionContainer.style.backgroundColor = "green";

        setTimeout(function(){
        questionContainer.style.backgroundColor = "gainsboro";
        },100)


        
        

        currentQuestion++;
        setNextQuestion();

        
          
    } 
    

    else {
        console.log("you picked the wrong answer!");
        
        questionContainer.style.backgroundColor = "red";
        setTimeout(function(){
        questionContainer.style.backgroundColor = "gainsboro";
        },100)
        
        time -= 10;
        var negative = document.createElement("audio");
        negative.setAttribute("src", "assets/negative.mp3");
        negative.play();
        console.log(userScore);
        currentQuestion++;
        setNextQuestion();
        
        
             
    }

    
   
    
    
}





//---TIMER------------------------------------

function countDown(){

    

    var timeCurrent = setInterval(function(){
        time --;
        if(time == 0 || currentQuestion === 5){
            clearInterval(timeCurrent);
            endGame();
        } 
        
        else if(time <= 10){
            timeDisplay.style.color = "red";
            timeDisplay.style.fontSize = "30px";
            timerText.style.color = "red";
            timerText.style.fontSize = "30px";
        }

        timeHide.classList.remove("hide");
        timeDisplay.textContent = time;
        console.log(time);
    }, 1000);
    
}

submit.addEventListener("click", function(){
    
    var submitVal = document.getElementById("fname").value;
    
    if(submitVal === ""){
        alert("You must enter something in the field!");
    }

    console.log(submitVal + userScore);
    

    
})









function endGame(){
    questionContainer.classList.add("hide");
    timeHide.classList.add("hide");
    input.classList.remove("hide");
    
    
    var finalScore = "Score: " + userScore + " pts";
    

    input.prepend(finalScore); 



    
    
    
            //call endGame function -- make form in html and hide it, then remove class of hide

}


























