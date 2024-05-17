let  boxes=document.querySelectorAll(".box");
let rst=document.querySelector("#rest");
let msgcontainer=document.querySelector(".win-con");
let msg=document.querySelector("#win");
let  res=document.querySelector("#rest1");

let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [2,4,6],
    [1,4,7]

];
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
           box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
});
const disableboxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
showwinner=(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}


const checkwinner = () => {
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;  
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2 !="" && pos3!="" ){
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("winner",pos1);
                showwinner(pos1);
            };
        };
         
       
    
    };
};
const resetgame =()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
res.addEventListener("click",resetgame);
rst.addEventListener("click",resetgame);
