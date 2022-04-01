let random=document.getElementById("random");
    random.style.display="none";
let begin = document.querySelector(".begin"); 
let begin_continue = document.querySelector(".begin_continue");
    begin_continue.style.display = "none";
let button_continue = document.querySelector(".button_continue");
    button_continue.style.display  ="none";
let buttonYes=document.getElementById("buttonYes");
let buttonNo=document.getElementById("buttonNo");
let mas=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


function Rand(){
let x=Math.floor(Math.random(mas)*mas.length);
    return mas[x];
}
let y;
let count=0;


function game()
{
    y=document.getElementById("random").innerHTML = Rand();
    return y;
}


function InputEnter(e) 
{
    if (e.key == "Enter") 
    {
      begin.style.display = "none";
      random.style.display="block";
    }


    else if(e.key==y)
    {
      alert('Win!');
    }
    else 
      alert ("Loser!");
      game();

//----------------------------------button for continue
buttonYes.onclick=function () {
    
      begin_continue.style.display="none";
      button_continue.style.display  ="none";
      random.style.display="block";
      game();
};
buttonNo.onclick=function () {
     document.location.reload();
     
};


//---------------------------------------try again

    if(count==5)
    {
      begin_continue.style.display="block";
      button_continue.style.display="block";
      random.style.display="none";
      count=0;
      game();
    }
   if(e.key>='a' && e.key<='z')
    {
      count++;
    }
}


document.addEventListener('keydown', InputEnter);
