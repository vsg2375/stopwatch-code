let hr = 0, 
 min = 0, sec = 0, ms = 0;
let intv;

let displaytime = document.getElementById('time');
let startbtn = document.querySelector('#start');
const resetbtn = document.getElementById('reset');
function time(){
    ms += 10;
    if (ms === 1000){
        ms = 0;
        sec++;
    }
    if(sec === 60){
        sec = 0;
        min++;
    }
    if (min === 60){
        min = 0;
        hr++;
    }
    displaytime.textContent = `${String(hr).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}.${String(ms / 10).padStart(2,'0')}`;
    displaytime.style.color = `rgb(${(Math.random()*256)},${(Math.random()*256)},${(Math.random()*256)})`;
}
startbtn.addEventListener('click',start);
function start(){
    resetbtn.disabled = false;

    if(startbtn.innerText === "Start"){
         intv = setInterval(time,10);
        startbtn.innerHTML="Stop";
        
    }
    else{
        clearInterval(intv);
        startbtn.innerHTML="Start";

    }
    resetbtn.style.backgroundColor="red";

}
resetbtn.addEventListener('click',reset);
function reset(){
    clearInterval(intv);
    displaytime.textContent = `00:00:00.00`;
    hr = 0, min = 0, sec = 0, ms = 0;
    startbtn.innerHTML="Start";
    resetbtn.disabled= true;
    displaytime.style.color="black";
    resetbtn.style.backgroundColor=" rgb(246, 171, 211)";

}


