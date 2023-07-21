const quiz = [
    {
        question: "images/arsenal.jpg",
        options: ["Arsenal","Liverpool","Manchester United","Barcelona"],
        rightAnswer: "Arsenal"
    },
    {
        question: "images/barcelona.jpg",
        options: ["Barcelona","Real Madrid","Manchester United","Liverpool"],
        rightAnswer: "Barcelona"
    },
    {
        question: "images/chelsea.png",
        options: ["Brighton","Leicter City","Manchester City","Chelsea"],
        rightAnswer: "Chelsea"
    },
    {
        question: "images/dortmund.png",
        options: ["Norwich City","Borussia Dortmund","Manchester United","Sevilla"],
        rightAnswer: "Borussia Dortmund"
    },
    {
        question: "images/inter-milan.png",
        options: ["Juventus","Atletico Madrid","Inter Milan","Atalanta"],
        rightAnswer: "Inter Milan"
    },
    {
        question: "images/leipzig.png",
        options: ["Real Madrid","Atletic Bilbao","Leeds United","Leipzig"],
        rightAnswer: "Leipzig"
    },
    {
        question: "images/liverpool.png",
        options: ["Manchester United","Liverpool","Southampton","Bayern Munich"],
        rightAnswer: "Liverpool"
    },
    {
        question: "images/man-city.png",
        options: ["Manchester City","Brighton","Chelsea","Inter Milan"],
        rightAnswer: "Manchester City"
    },
    {
        question: "images/man-united.png",
        options: ["Bayern Munich","Liverpool","Manchester United","Leeds United"],
        rightAnswer: "Manchester United"
    },
    {
        question: "images/real-madrid.png",
        options: ["Atletico Madrid","Real Madrid","Barcelona","Juventus"],
        rightAnswer: "Real Madrid"
    },
];

let currentQuestion = 0;
let right = 0;
let wrong = 0;

function checkAnswer(index){
    let userAnswer = document.getElementById(index).innerText;
    if(userAnswer == quiz[currentQuestion].rightAnswer){
        right++;
    }else{
        wrong++;
    }
    currentQuestion++;
    document.getElementById("score").innerHTML = right;
    document.getElementById("questionNo").innerHTML = currentQuestion + 1;

    if(currentQuestion < quiz.length){
        clearContent();
    }else{
        gameSummary();
    }
    
}

function clearContent(){
    document.getElementById("question").src = "";
    document.getElementById("0").innerText = "";
    document.getElementById("1").innerText = "";
    document.getElementById("2").innerText = "";
    document.getElementById("3").innerText = "";
    
    loadQuestion();
}

function loadQuestion(){
    
    document.getElementById("question").src = quiz[currentQuestion].question;
    document.getElementById("0").innerHTML = quiz[currentQuestion].options[0];
    document.getElementById("1").innerHTML = quiz[currentQuestion].options[1];
    document.getElementById("2").innerHTML = quiz[currentQuestion].options[2];
    document.getElementById("3").innerHTML = quiz[currentQuestion].options[3];
       
}

function loadGame(){
    right = 0;
    document.getElementById("startSection").style.display = "none";
    document.getElementById("gameSection").style.display = "block";
    document.getElementById("score").innerHTML = right;
    document.getElementById("questionNo").innerHTML = currentQuestion + 1;

    loadQuestion();
}

function gameSummary(){
    currentQuestion = 0;
    document.getElementById("gameSection").style.display = "none";

    if(right > 5){
        document.getElementById("winner").style.display = "block";
        document.getElementById("correct").style.display = "block";
        document.getElementById("play").style.display = "block";

        document.getElementById("loser").style.display = "none";
        document.getElementById("wrong").style.display = "none";
        document.getElementById("try").style.display = "none";
    }else{
        document.getElementById("loser").style.display = "block";
        document.getElementById("wrong").style.display = "block";
        document.getElementById("try").style.display = "block";

        document.getElementById("winner").style.display = "none";
        document.getElementById("correct").style.display = "none";
        document.getElementById("play").style.display = "none";
    }

    document.getElementById("final-score").innerHTML = right;
    document.getElementById("right-questions").innerHTML = right + " / " + quiz.length;
    
    document.getElementById("summarySection").style.display = "block";
}