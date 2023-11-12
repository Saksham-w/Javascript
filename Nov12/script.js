var bulb=document.querySelector('.box1')
var btn=document.querySelector('.box2')

var on = false;
btn.addEventListener('click',function(){
    if(on==false){
        bulb.style.backgroundColor='yellow'
        on=true
    }
    else{
            bulb.style.backgroundColor='black'
            on=false
        }
})
