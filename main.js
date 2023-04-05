
console.log('Hello World');
let counter = 0;
document.addEventListener("DOMContentLoaded", function() {
    
//get the const 'counter' and connect it to counter in html
const counterEl = document.querySelector('.counter');

//get the button 'minus' from html and connect it to the function 'decrement'. make it clickable
const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', decrement);

//get the button 'plus' from html and connect it to the function 'increment'. make it clickable
const plusBtn = document.getElementById('plus')
plusBtn.addEventListener('click', increment);

//get the button 'reset' from html and connect it to the function 'reset'. make it clickable
const resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', reset);

counterEl.innerHTML = counter;


function increment() {
    counter++;
    counterEl.innerHTML = counter;

}

function decrement () {
    if (counter >= 1) {
        counter--;
        counterEl.innerHTML = counter;
    } 
}

function reset () {
    counter = 0;
    counterEl.innerHTML = counter;
}

console.log(counter);

  });

