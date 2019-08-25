function fullName(){
let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let firstNameValue=firstName.nodeValue;
let lastNameValue=lastName.nodeValue;

if(firstNameValue == null){
alert("Please enter your first Name")
}
 if(lastNameValue==null){
    alert("Please enter your last Name")
}
if(firstNameValue==!null){
    alert(firstNameValue)
}
if(lastNameValue==!null){
    alert(lastNameValue)
}
 if(lastNameValue==!null && firstNameValue==!null){
    alert(firstNameValue+lastNameValue)
}
else{
    alert("Please enter your full Name")
}

}
let btnClick=document.getElementById("btnClick");
btnClick.addEventListener("click",fullName)