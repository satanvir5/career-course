function fullNameValidate(){
    let fullName=window.document.getElementById("fullName").value
    let pattern = /^[A-Za-z]+$/;
    let message =window.document.getElementById('message')
    if(fullName.match(pattern)){
    alert("Your Name is " + fullName);
    //fullName.focus()

   
   }
   else{
    message.innerHTML='* please input only alphabet characters'
    // patternMessage.className='textColor'
    message.setAttribute('class','textColor')
    fullName.focus()
   
   }
   }
  
    
let btnForValidation=window.document.getElementById("btnForValidation");
btnForValidation.addEventListener("click",fullNameValidate)

