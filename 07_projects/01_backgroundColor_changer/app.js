const buttons = document.querySelectorAll('.button')
const bg = document.querySelector('body')

buttons.forEach(function(btn){
    btn.addEventListener("click",function(e){
      
        const ck = e.target.id
        if(ck == 'red'){
         bg.style.backgroundColor = ck   
        }

        if(ck == 'yellow'){
            bg.style.backgroundColor = ck   
           }

        if(ck == 'blue'){
            bg.style.backgroundColor = ck   
        }
        if(ck == 'orangered'){
            bg.style.backgroundColor = ck   
           }
        if(ck == 'pink'){
            bg.style.backgroundColor = ck 
        }

        if(ck == 'none'){
        bg.style.backgroundColor = ""
        }
    })
})