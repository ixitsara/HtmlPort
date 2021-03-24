window.onload = loginLoad;
function loginLoad(){
	var myForms = document.getElementById('myLogin');
	myForms.onsubmit = checkLogin;
}

function checkLogin(){
	const urlParams = new URLSearchParams(window.location.search);
	const Userid = urlParams.get('username');
	const Userpw =  urlParams.get('password');
	var Userlogin =  document.forms['myLogin']['username'].value;
	var Userpwlogin =  document.forms['myLogin']['password'].value;
	if((Userlogin == Userid)&&(Userpwlogin == Userpw ))
	{

	}
	else{
		alert("username or password invalid")
		return false;
	}

	

	

	
}

			