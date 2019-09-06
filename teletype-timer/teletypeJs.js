let text
text = 'Hello Everyone! get ready for brand new js class. '
let string_length=text.length
let index=0
let timer
function teletype(){
let char = text.charAt(index)
index=index+1;

if (string_length<index) {
   clearTimeout(timer)
}
else{
    window.document.getElementById('showLetterplace').innerHTML+=char
    console.log("hello")
    
    timer= setTimeout(teletype,150)
}


}

function stopTimer(){
  clearTimeout(timer)
}



let clkForStart=window.document.getElementById('clkForStart')
clkForStart.addEventListener('click',teletype)

let clkForStop=window.document.getElementById('clkForStop')
clkForStop.addEventListener('click',stopTimer)

