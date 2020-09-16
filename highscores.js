
function getScores(){
    console.log(localStorage);
    var storage = localStorage;
    var keys = Object.keys(storage);
    //how to access value of one object in storage
    console.log(storage[keys[0]]);
    var highScoresUl = document.querySelector("#scores");
    for(var i = 0; i < keys.length; i++){
        if(keys[i]){
         var li = document.createElement("li");
         li.style.listStyle = "none";
         li.style.fontSize = "20px";
         li.innerText = keys[i] + "'s score = "+ storage[keys[i]]
         highScoresUl.appendChild(li);
        }
        
    }




}

getScores();
