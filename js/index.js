function getPin(){
const pin = Math.round(Math.random()*10000);
const pinString = pin + '';
if(pinString.length == 4){
    return pin;
}
else{
    // console.log('get 3 disits and calling again', pin)
    return getPin();
}
}
function generatePin(){
    const pin = getPin();
    document.getElementById('pin-display').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
})
function varyfyPin(){
    const displayPin = document.getElementById('pin-display').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const successNotify = document.getElementById('success-notify');
    const failNotify = document.getElementById('fail-notify');
    if(displayPin == typedNumber ){
        successNotify.style.display = 'block';
        failNotify.style.display = 'none';
    }
    else{
        failNotify.style.display = 'block';
        successNotify.style.display = 'none';
    }
}