function fullNameValidate(){
    let fullName=window.document.getElementById("fullName").value
    let letters = /^[A-Za-z]+$/;
    let patternMessage =window.document.getElementById('patternMessage')
   if(fullName.match(letters)){
    alert(fullName);

   
   }
   else{
    patternMessage.innerHTML='* please input only alphabet characters'
    patternMessage.className='textColor'
    fullName.focus()
   
   }
   }
  
    
let btnForValidation=window.document.getElementById("btnForValidation");
btnForValidation.addEventListener("click",fullNameValidate)

