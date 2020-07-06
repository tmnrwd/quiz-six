scoreA = 0;
scoreB = 0;
scoreC = 0;
scoreD = 0;
scoreE = 0;
scoreF = 0;

function showPage1() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("question-1").style.display = "block";
}

function showPage2() {
    document.getElementById("question-1").style.display = "none";
    document.getElementById("question-2").style.display = "block";
}

function showPage3() {
    document.getElementById("question-2").style.display = "none";
    document.getElementById("question-3").style.display = "block";
}

function showPage4() {
    document.getElementById("question-3").style.display = "none";
    document.getElementById("question-4").style.display = "block";
}

function showPage5() {
    document.getElementById("question-4").style.display = "none";
    document.getElementById("question-5").style.display = "block";
}

function showPage6() {
    document.getElementById("question-5").style.display = "none";
    document.getElementById("question-6").style.display = "block";
}

function showAnswer() {
    document.getElementById("question-6").style.display = "none";
    determineAnswer();
}


function answerA() {
    console.log("Score A is currently:", scoreA);
    scoreA += 1;
    console.log("After increasing, Score A is currently:", scoreA);
}

function answerB() {
    console.log("Score B is currently:", scoreB);
    scoreB += 1;
    console.log("After increasing, Score B is currently:", scoreB);
}

function answerC() {
    console.log("Score C is currently:", scoreC);
    scoreC += 1;
    console.log("After increasing, Score C is currently:", scoreC);
}

function answerD() {
    console.log("Score D is currently:", scoreD);
    scoreD += 1;
    console.log("After increasing, Score D is currently:", scoreD);
}

function answerE() {
    console.log("Score E is currently:", scoreE);
    scoreE += 1;
    console.log("After increasing, Score E is currently:", scoreE);
}

function answerF() {
    console.log("Score F is currently:", scoreF);
    scoreF += 1;
    console.log("After increasing, Score F is currently:", scoreF);
}

function determineAnswer() {
    if (scoreA > scoreB && scoreA > scoreC && scoreA > scoreD && scoreA > scoreE && scoreA > scoreF) {
        console.log("Answer A")
        document.getElementById("answer-1").style.display = "block";
    }
    else if (scoreB > scoreA && scoreB > scoreC && scoreB > scoreD && scoreB > scoreE && scoreB > scoreF) {
        document.getElementById("answer-2").style.display = "block";
    }
    else if (scoreC > scoreA && scoreC > scoreB && scoreC > scoreD && scoreC > scoreE && scoreC > scoreF) {
        document.getElementById("answer-3").style.display = "block";
    }
    else if (scoreD > scoreA && scoreD > scoreB && scoreD > scoreC && scoreD > scoreE && scoreD > scoreF) {
        document.getElementById("answer-4").style.display = "block";
    }
    else if (scoreE > scoreA && scoreE > scoreB && scoreE > scoreC && scoreE > scoreD && scoreE > scoreF) {
        document.getElementById("answer-5").style.display = "block";
    }
    else if (scoreF > scoreA && scoreF > scoreB && scoreF > scoreC && scoreF > scoreD && scoreF > scoreE) {
        document.getElementById("answer-6").style.display = "block";
    }
    else if (scoreA == scoreB && scoreA == scoreC && scoreA == scoreD && scoreA == scoreE && scoreA == scoreF) {
        document.getElementById("answer-7").style.display = "block";
    }

    else {
        let answer = Math.floor(Math.random() * 7)
        switch (answer) {
            case 0:
                document.getElementById("answer-7").style.display = "block";
                break;
            case 1:
                document.getElementById("answer-1").style.display = "block";
                break;					
            case 2:
                document.getElementById("answer-2").style.display = "block";
                break;
            case 3:
                document.getElementById("answer-3").style.display = "block";
                break;
            case 4:
                document.getElementById("answer-4").style.display = "block";
                break;
            case 5:
                document.getElementById("answer-5").style.display = "block";
                break;
            case 6:
                document.getElementById("answer-6").style.display = "block";
                break;
        }
        /*    
        if (answer == 1){
            document.getElementById("answer-1").style.display = "block";
        }
        if (answer == 2){
            document.getElementById("answer-2").style.display = "block";
        }
        if (answer == 3){
            document.getElementById("answer-3").style.display = "block";
        }
        if (answer == 4){
            document.getElementById("answer-4").style.display = "block";
        }
        if (answer == 5){
            document.getElementById("answer-5").style.display = "block";
        }
        if (answer == 6){
            document.getElementById("answer-6").style.display = "block";
        }
        else{
            document.getElementById("answer-7").style.display = "block";
        }
        */
        
    } 

}