let input = document.getElementById('inputBox');
let varButtons = document.querySelectorAll('button');
let s='';
let arr = Array.from(varButtons);
arr.forEach(buttonVar=>{
    buttonVar.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            s = eval(s);
            input.value = s;
        }
        else if(e.target.innerHTML=='AC'){
            s = "";
            input.value = s;
        }
        else if(e.target.innerHTML=='DEL'){
            s = s.substring(0,s.length-1);
            input.value = s;
        }
        else{
            s+=e.target.innerHTML;
            input.value = s;
        }
    });
});