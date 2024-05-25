let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{ 
            if (e.target.innerHTML == '=')
            {
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML == 'C')
            {
                string = "";
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML == 'sqrt')
            {
                string = Math.sqrt(string);
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML == 'x^2')
            {
                var x = string;
                string = Math.pow(x,2);
                document.querySelector('input').value = string;
            }
            else
            {
                console.log(e.target)
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
    })
})