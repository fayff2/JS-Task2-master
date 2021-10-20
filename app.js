//Variables
let time =0;
let timeid=0;
let timerout = true;
//Elements in a variable
const timer = document.querySelector("#time-display");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

//use this function to start the timer
const initClock =  () => {
    timerout=false;
    timeid = setInterval ( () => {
        time++;
        timercount();
    }, 1000);
}
//this function update the timer values
const timercount = (() => {
    const min = Math.floor(time/60);
    const sec= time%60; 
    if(sec < 10 ){
        timer.innerHTML=` ${min} :0 ${sec}`;

    }
    else{
        timer.innerHTML=` ${min} : ${sec}`;
    }
    
})

// stop and clear the timer
const stopClock = () => {
    clearInterval(timeid);
    

}

start.addEventListener("click" , function(){
    if(timerout){
    initClock();}
})
reset.addEventListener("click" , function(){
    stopClock();
    timerout=true;
    time=0;
    timercount();
})










