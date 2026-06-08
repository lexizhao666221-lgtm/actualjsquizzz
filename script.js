function clickAction(){
    egname.textContent =namee.value;
}

buttonforname.onclick = clickAction;

function checkScore(){
    var q3score =parseInt(document.querySelector('input[name="q3"]:checked').value);
    var q5score =parseInt(document.querySelector('input[name="q5"]:checked').value);
    var q8score =parseInt(document.querySelector('input[name="q8"]:checked').value);
    var totalscore=q3score+q5score+q8score;
    alert("Your final score is: " + totalscore + " out of 10")
}
