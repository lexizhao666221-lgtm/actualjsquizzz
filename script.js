function clickAction(){
    egname.textContent =namee.value;
}


buttonforname.onclick = clickAction;


function checkScore(){
    var q1score=document.getElementById('q1').value;
    if (q1score == 'fem'){
        q1score=value=1
    } else{
        q1score=value=0
    }


    var q2score=document.getElementById('q2').value;
    if (q2score == '206'){
        q2score=value=1
    } else{
        q2score=value=0
    }


    var q3score =parseInt(document.querySelector('input[name="q3"]:checked').value);


    var q4score=document.getElementById('q4').value;
    if (q4score == 'transportanddeliver'){
        q4score=value=1
    } else{
        q4score=value=0
    }


    var q5score =parseInt(document.querySelector('input[name="q5"]:checked').value);


    var q6score=document.getElementById('q6').value;
    if (q6score == 'q6o1'){
        q6score=value=1
    } else{
        q6score=value=0
    }  


    var q7score=document.getElementById('q7').value;
    if (q7score == '23'){
        q7score=value=1
    } else{
        q7score=value=0
    }


    var q8score =parseInt(document.querySelector('input[name="q8"]:checked').value);


    var q9score=document.getElementById('q9').value;
    if (q9score == 'q9o2'){
        q9score=value=1
    } else{
        q9score=value=0
    }  


    var totalscore =q1score+q2score+q3score+q4score+q5score+q6score+q7score+q8score+q9score;
    alert("Your final score is: " + totalscore + " out of 9")


    if (totalscore>5){
        alert("Good job! I'm so proud of you, you will be fine in the test.")
    } else{
        alert("Hey, better luck next time! Lets work together for those good grades!")
    }
}
