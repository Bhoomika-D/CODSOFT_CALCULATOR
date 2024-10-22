

let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray=Array.from(buttons);
let string='';
function calculateExpression(expr) {
 
    return eval(expr);
  }
buttonsArray.forEach(btn => {
    btn. addEventListener('click',(e)=> {
        if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            display.value=string;
        }else if(e.target.innerHTML=='AC'){
            string='';
            display.value=string;
        }else if(e.target.innerHTML=='='){
            try{
                string = calculateExpression(string); 
      } catch (error) {
        string = 'Invalid '; 
      }

            
        }else {
        string +=e.target.innerHTML;
        }
        display.value=string;
        
         });
  });