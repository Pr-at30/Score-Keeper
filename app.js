const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const resetbutton = document.querySelector("#reset");
const p1disp = document.querySelector("#p1disp");
const p2disp = document.querySelector("#p2disp"); 


let p1score = 0 ;   let p2score = 0 ;   let total = 5;
let isOver = false;


p1button.addEventListener("click",function(){
    if(!isOver)
    {
        p1score+=1;
        p1disp.textContent=p1score;
        if(p1score===total)
        {
            isOver=true;
            alert("Player 1 Won");
            reset();
        }
    } 
})

p2button.addEventListener("click",function(){
    if(!isOver)
    {
        p2score+=1;
        p2disp.textContent=p2score;
        if(p2score===total)
        {
            isOver=true;
            alert("Player 2 Won");
            reset();
        }
    }
})

resetbutton.addEventListener("click",reset)

function reset()
{
    p1score=0;  p2score=0;
    p1disp.textContent=p1score;
    p2disp.textContent=p2score;
    isOver=false;
}

