var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "skarppakavalli@gmail.com" && password == "1234"){
//alert ("Login successfully");
window.location = "F:\Placeseries'o Code\LearnEd_E-learning_Website-master\index.html"; // Redirecting to other page.
//document.location.replace("C:/Users/VALLI MALAR/Desktop/PROJECT/STUDOGRAM/abc.html/") ;
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
