let bgmusic= new Audio("gamebg.mp3");
let turnmusic=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let checkgameover= false;


//function to change the turn
const changeTurn = ()=>{
    return turn==="X"? "O":"X";
}
//function to check winner
function winnerCheck(){
    let boxtext=document.getElementsByClassName('boxtxt');
    let wins=[
        [0, 1, 2, -0.5, 7, 0],[3, 4, 5, 1, 21, 0],[6, 7, 8, 1, 35, 0],
        [0, 3, 6, -13.5, 21, 90],[1, 4, 7, 0, 21, 90],[2, 5, 8, 14.5, 21, 90],
        [0, 4, 8, 1, 21, 45],[2, 4, 6, 0, 21, 135]
    ];
    wins.forEach(win=>{
        if (boxtext[win[0]].innerText===turn && boxtext[win[0]].innerText===boxtext[win[1]].innerText && boxtext[win[2]].innerText===boxtext[win[1]].innerText && boxtext[win[0]].innerText!==""){
            document.querySelector('.gameturn').innerText= turn +"  Is The Winner";
            checkgameover= true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            gameover.play();
            document.querySelector(".line").style.width = "40vw"; 
            document.querySelector(".line").style.transform = `translate(${win[3]}vw,${win[4]}vw) rotate(${win[5]}deg)`
        }
    })

}
//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(box=>{
    let boxtext=box.querySelector('.boxtxt');
    box.addEventListener('click',()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turnmusic.play();
            winnerCheck();
            if(!checkgameover){
                turn= changeTurn();
                document.getElementsByClassName("gameturn")[0].innerText="Turn For  "+turn;
            }
        }
    })
})
//reset
function reset(){
    let boxtexts=document.querySelectorAll('.boxtxt');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    checkgameover=false;
    turn="X";
    document.getElementsByClassName('gameturn')[0].innerText="Start New Game!";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"; 
    document.querySelector(".line").style.width = "0vw"; 
         
}