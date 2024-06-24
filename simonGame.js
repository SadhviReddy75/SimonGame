let gameSeq=[];
let userSeq=[];


let started=false;
let level=0;
let highestScore=0

let colors=["yellow","red","purple","green"];
let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started == false){
        started=true;
        console.log("game started");
        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}


function checkAns(index){
    if(userSeq[index]=== gameSeq[index]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(level > highestScore){
            highestScore = level;
           }
        h2.innerHTML=`Game Over! Your Score Was ${level}<br>
        HighestScore= ${highestScore} <br> Pres any key to start the game..`;
       document.querySelector('body').style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector('body').style.backgroundColor="white";
       },150);
        reset();
    }
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randInd = Math.floor(Math.random()*3);
    let randColor = colors[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
}

function  btnPress(){
   btn = this;//pressed button
   userFlash(btn);

   userColor= btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}