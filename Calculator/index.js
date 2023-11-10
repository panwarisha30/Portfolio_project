var result=document.getElementById("result");
function display(num)
{
    result.value +=num;/* '+' here means that the data previously stored should also be there and new data should also be there.*/
}
function calculate_values()
{
   try 
   {
    var final_result=eval(result.value);/* Here we have used eval function of js to evaluate reult*/ 
    if (isNaN(final_result) || !isFinite(final_result)) /*isNaN is a built-in JavaScript function that checks whether a value is "Not-a-Number." It returns true if the provided value is NaN, and false if it's a valid number. isFinite is a built-in JavaScript function that checks whether a value is a finite number. It returns true if the provided value is a finite number and false if it's either Infinity or -Infinity.*/
    {
        result.value = 'Error';
    } else 
    {
        result.value = final_result;
    }
  } catch (error) 
    {
        result.value = 'Error';
    }
}
function allclear()
{
    result.value=""; /*It clears the entire value entered by user*/
}
function del()
{
    result.value=result.value.slice(0,-1); /*The value which we will pass is deleted one by one with the help of slice function provided by js*/ 
}
document.addEventListener("keydown",function(event)
{
    const key=event.key; /* It captures the pressed key*/
    if (/[\d+\-*/.=]/.test(key))
    {
        display(key);
    }
    else if ((key === "+" && event.shiftKey) || (key === "*"))
    {
        display('+');
    } 
    else if (key === "-" && event.shiftKey) {
        display('-');
    } 
    else if (key === "/" && event.shiftKey) {
        display('/');
    } 
    else if (key === "%" && event.shiftKey) {
        display('%');
    }
    else if ((key === "Enter")|| (event.keyCode === 13)) 
    {
        event.preventDefault(); // Prevent the default behavior (e.g., form submission)
        calculate_values();
    }
    else if (key === "Escape") 
    {
        allclear();
    } 
    else if (key === "Backspace") 
    {
        del();
    }
}
);/* we have added a event listener to listen to keyboard input*/

function squareroot() {
    const inputValue = parseFloat(result.value);
    if (!isNaN(inputValue) && inputValue >= 0) {
        result.value = Math.sqrt(inputValue);
    } else {
        result.value = 'Error'; /*input value is negative or invalid*/
    }
}
function memoryadd() {
    const currentValue = parseFloat(result.value);
    if (!isNaN(currentValue)) {
        memory += currentValue; /* if value is valid add value to memory*/
    }
    result.value = ''; /* add empty space to memory*/
}
function memorySub() {
    const currentValue = parseFloat(result.value);
    if (!isNaN(currentValue)) {
        memory -= currentValue; /* if value is valid subtract value from memory*/
    }
    result.value = ''; 
}
function memoryRecall() {
    result.value = memory; /*It displays the value stored in memory in the input field.*/
}
function memoryclr() {
    memory = 0; /*It clears the value stored in memory.*/
}