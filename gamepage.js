player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1score=0;
player2score=0;

document.getElementById("player1_name").innerHTML=player1name+" : ";
document.getElementById("player2_name").innerHTML=player2name+" : ";

document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML="question turn-"+player1name;
document.getElementById("player_answer").innerHTML="answer turn-"+player2name;

function send(){
   
    number1 = document.getElementById("number-1").value;
	number2 = document.getElementById("number-2").value;
	
	


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number-1").value = "";
	document.getElementById("number-2").value = "";
}

questionturn="player1";
answerturn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
   actual_answer=number1*number2;;
    if(get_answer==actual_answer){
        if(answerturn=="player1"){
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;
        }
        else{
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }
   
    

    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("player_question").innerHTML="question turn-"+player2name;
            }
            else{questionturn="player1";
            document.getElementById("player_question").innerHTML="question turn-"+player1name;

            }

            if(answerturn=="player1"){
                answerturn="player2";
                document.getElementById("player_answer").innerHTML="answer turn-"+player2name;
                    }
                    else{questionturn="player1";
                    document.getElementById("player_answer").innerHTML="answer turn-"+player1name;
        
                    }

                    document.getElementById("output").innerHTML="";
                }
            }
        