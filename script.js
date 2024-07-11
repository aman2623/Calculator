let input=document.getElementById('inputBox');
let buttons= document.querySelectorAll('button');

let strign="";
let arr= Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            strign = eval(strign);
            input.value= strign;
        }
        else if(e.target.innerHTML == 'AC'){
            strign="";
            input.value=strign;
        }
        else if(e.target.innerHTML== 'DEL'){
            strign=strign.substring(0,strign.length-1);
            input.value= strign;
        }
        else{
            strign +=e.target.innerHTML;
            input.value=strign;  
        }



       
    })
})