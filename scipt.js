let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray=Array.from(buttons);
let string='';
buttonsArray.forEach(btn => {
    btn. addEventListener('click',(e)=> {
        string=e.target.innerHTML;
        display.value=string;
        console.log(e.target.innerHTML);
    });
});