let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let score1=document.querySelector("#score1");
let score2=document.querySelector("#score2");


const draw=(userchoice)=>{

    msg.innerText="match was draw .try again!!";
    msg.style.backgroundColor="black";
}

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++
        score1.innerText=userScore;
        
        msg.innerText=`congarts you won!! your    ${userchoice}  beats  ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        
        compScore++
        score2.innerText=compScore;
        msg.innerText=`better luck next time !! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const gencompchoice=()=>{
    let options=["Rock","Paper","scissors"];
    let RandIdx=Math.floor(Math.random()*3);
    return options[RandIdx]; 
}
 const playgame=(userchoice)=>{
    
     let compchoice=gencompchoice();
    
    if(userchoice===compchoice){
        draw(userchoice);
    }
    else{
        let userwin =true;
        if (userchoice==="Rock"){
            userwin=compchoice==="Paper" ? false:true;
    
        }else if( userchoice==="Paper"){
            userwin=compchoice==="scissors"?false:true;


        }
        else{
            userwin=compchoice==="Rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     let userchoice=choice.getAttribute("id");
     
     playgame(userchoice);
    })
})