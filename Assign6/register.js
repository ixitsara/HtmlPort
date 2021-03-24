window.onload = pageLoad;
function pageLoad(){
	var myForm = document.getElementById("myForm");
    myForm.onsubmit = validateForm;

}

function validateForm() {
    var pw = document.forms['myForm']['password'].value;
    var rpw = document.forms['myForm']['Repassword'].value;
    if(pw == rpw)
    {

    }
    else{
        alert("Password not match")
        return false;
    }
}