function clkOne(){
let one=document.getElementById('one');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',one.value)
}

let one=document.getElementById('one');
one.addEventListener('click',clkOne);



function clktwo(){
 let two=document.getElementById('two');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',two.value)

}
let two=document.getElementById('two');
two.addEventListener('click',clktwo);



function clkthree(){
    let three=document.getElementById('three');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',three.value)
}

let three=document.getElementById('three');
three.addEventListener('click',clkthree);

function clkfour(){
    let four=document.getElementById('four');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',four.value)

}

let four=document.getElementById('four');
four.addEventListener('click',clkfour);



function clkfive(){
    let five=document.getElementById('five');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',five.value)

}

let five=document.getElementById('five');
five.addEventListener('click',clkfive);


function clksix(){
    let six=document.getElementById('six');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',six.value)

}

let six=document.getElementById('six');
six.addEventListener('click',clksix);


function clkseven(){
    let seven =document.getElementById('seven');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',seven.value)

}

let seven=document.getElementById('seven');
seven.addEventListener('click',clkseven);


function clkeight(){
    let eight=document.getElementById('eight');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',eight.value)

}

let eight=document.getElementById('eight');
eight.addEventListener('click',clkeight);


function clknine(){
    let nine=document.getElementById('nine');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',nine.value)

}

let nine=document.getElementById('nine');
nine.addEventListener('click',clknine);


function clkpoint(){
    let point=document.getElementById('point');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',point.value)

}

let point=document.getElementById('point');
point.addEventListener('click',clkpoint);


function clkzero(){
    let zero=document.getElementById('zero');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',zero.value)

}

let zero=document.getElementById('zero');
zero.addEventListener('click',clkzero);


function clkdivision(){
    let division=document.getElementById('division');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',division.value)

}

let division=document.getElementById('division');
division.addEventListener('click',clkdivision);


function clkmultiplication(){
    let multiplication =document.getElementById('multiplication');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',multiplication.value)

}

let multiplication=document.getElementById('multiplication');
multiplication.addEventListener('click',clkmultiplication);



function clkequal(){
    let equal=document.getElementById('equal');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',equal.value)

}

let equal=document.getElementById('equal');
equal.addEventListener('click',clkequal);


function clkaddition(){
    let addition =document.getElementById('addition');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',addition.value)

}

let addition=document.getElementById('addition');
addition.addEventListener('click',clkaddition);


function clksubtraction(){
    let subtraction =document.getElementById('subtraction');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',subtraction.value)

}

let subtraction=document.getElementById('subtraction');
subtraction.addEventListener('click',clksubtraction);


function clkmodulus(){
    let modulus=document.getElementById('modulus');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";
calculator_textarea.setAttribute('value',modulus.value)

}

let =document.getElementById('modulus');
modulus.addEventListener('click',clkmodulus);





function clkall_clear(){
    let all_clear=document.getElementById('all_clear');
let calculator_textarea=document.getElementById('calculator_textarea')
//calculator_textarea.Value="1";


}

let all_clear=document.getElementById('all_clear');
all_clear.addEventListener('click',clkall_clear);



//************* Manual input calculator:

const

 calculator = {
     add: function (number1,number2){
     return number1 + number2;
   },
   subtraction: function (number1,number2){
    return number1 - number2;
  },
  division: function (number1,number2){
    return number1 / number2;
  },
  multiplication: function (number1,number2){
    return number1 * number2;
  },
   
}

//console.log(calculator.add(4, 3))
//let result=calculator.add(5, 9)
//alert(result)
//alert(calculator.subtraction(4, 3))
//alert(calculator.division(4, 3))

//alert(calculator.multiplication(4, 3))
function addsum(){
    let number1=document.getElementById('number1').value;
    let number2=document.getElementById('number2').value;
    let intNumberValue1=parseInt(number1)
    let intNumberValue2=parseInt(number2)
    let floatNumberValue1=parseFloat(number1)
    let floatNumberValue2=parseFloat(number2)

    let sum;
    let sumValue=parseInt(sum)
    sumValue=intNumberValue1+intNumberValue2;
    sumValue=floatNumberValue1+floatNumberValue2;
   
    let result1=document.getElementById("result1")
    result1.value=sumValue;
   
    
}
let addition1=document.getElementById("addition1")
addition1.addEventListener('click',addsum)

function multiplicationFunc(){
  
    let number1=document.getElementById('number1').value;
    let number2=document.getElementById('number2').value;
    let intNumberValue1=parseInt(number1)
    let intNumberValue2=parseInt(number2)
    let floatNumberValue1=parseFloat(number1)
    let floatNumberValue2=parseFloat(number2)

    let multiplication;
    let multiplicationValue=parseInt(multiplication)
    multiplicationValue=intNumberValue1*intNumberValue2;
    multiplicationValue=floatNumberValue1*floatNumberValue2;
   
    let result1=document.getElementById("result1")
    result1.value=multiplicationValue;
   
    
}
let multiplication1=document.getElementById("multiplication1")
   multiplication1.addEventListener('click',multiplicationFunc)




function subtractionFunc(){
    let number1=document.getElementById('number1').value;
    let number2=document.getElementById('number2').value;
    let intNumberValue1=parseInt(number1)
    let intNumberValue2=parseInt(number2)
    let floatNumberValue1=parseFloat(number1)
    let floatNumberValue2=parseFloat(number2)

    let subtraction;
    let subtractionValue=parseInt(subtraction)
    subtractionValue=intNumberValue1-intNumberValue2;
    subtractionValue=floatNumberValue1-floatNumberValue2;
   
    let result1=document.getElementById("result1")
    result1.value=subtractionValue;
   
    
}
let subtraction1=document.getElementById("subtraction1")
subtraction1.addEventListener('click',subtractionFunc)

function divisionFunc(){
  
    let number1=document.getElementById('number1').value;
    let number2=document.getElementById('number2').value;
    let intNumberValue1=parseInt(number1)
    let intNumberValue2=parseInt(number2)
    let floatNumberValue1=parseFloat(number1)
    let floatNumberValue2=parseFloat(number2)
    
    let division;
    let divisionValue=parseInt(division)
    divisionValue=intNumberValue1/intNumberValue2;
    divisionValue=floatNumberValue1/floatNumberValue2;
   
    let result1=document.getElementById("result1")
    result1.value=divisionValue;
   
    
}
let division1=document.getElementById("division1")
   division1.addEventListener('click',divisionFunc)

   function modulusFunc(){
  
    let number1=document.getElementById('number1').value;
    let number2=document.getElementById('number2').value;
    let intNumberValue1=parseInt(number1)
    let intNumberValue2=parseInt(number2)
    let floatNumberValue1=parseFloat(number1)
    let floatNumberValue2=parseFloat(number2)
    
    let modulus;
    let modulusValue=parseInt(modulus)
    modulusValue=intNumberValue1 / 100;
    modulusValue=intNumberValue2 / 100;

    modulusValue=floatNumberValue1 /100;
    modulusValue=floatNumberValue2/100;

   
    let result1=document.getElementById("result1")
    result1.value=modulusValue;
   
    
}
let modulus1=document.getElementById("modulus1")
    modulus1.addEventListener('click',modulusFunc)


   function clearfunc(){
    let number1=document.getElementById('number1').value='';
    let number2=document.getElementById('number2').value='';
    let result1=document.getElementById("result1").value='';
   }
   let clear=document.getElementById("clear");
   clear.addEventListener('click',clearfunc)