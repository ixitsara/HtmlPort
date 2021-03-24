var check1 = 0;
var num1 = 0;
var num2 = 0;
function myFunction() {
    var input = document.getElementById("text1").value;
    var topic = document.getElementById("topic");
    var Comment1 = document.getElementById("Comment1");
    var Comment2 = document.getElementById("Comment2");
    if (check1 == 0 && input != "") {
        topic.innerHTML = "Topic : " + input;
        check1+=1;
    }
    else if (check1 == 1 && input != "") {
        Comment1.innerHTML = "Coment 1 : " + input;
        check1+=1;
    }
    else if (check1 == 2 && input != "") {
        Comment2.innerHTML = "Coment 2 : " + input;
    }
    document.getElementById("text1").value = "";
}
function Clear() {
    document.getElementById("text1").value = "";
    document.getElementById("topic").innerHTML = "";
    document.getElementById("Comment1").innerHTML = "";
    document.getElementById("Comment2").innerHTML = "";
    check1-=2; 
}
function calculator() {
document.getElementById("ans1").innerHTML = num1+num2;

}
