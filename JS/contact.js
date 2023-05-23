// let clicked= document.getElementsByName("submit");
 
function Submitted() {
    let email = document.getElementById("email");
    let question = document.getElementById("question");


    if(email.innerText.length < 1){
     alert("fill in email");
    }
    else{
        
        getElementById("message").innerHTML = "SENT";
    }
    
}