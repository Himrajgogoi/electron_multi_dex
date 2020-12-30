var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
// var hours = document.getElementById("hours");
var stopped = document.getElementById("stop");
var start = document.getElementById("start");
var reset = document.getElementById("reset");
var set = document.getElementById("set");

// var hourInput = document.getElementById("hourInput");
var minuteInput = document.getElementById("minuteInput");
var secondInput  =document.getElementById("secondInput");

var timeout;

var h,m,s;

set.addEventListener("click", function(){
    // if(hourInput.value == ""){
        // hourInput.value = "00";
    // }
    if(minuteInput.value == ""){
        minuteInput.value = "00";
    }

    if(secondInput.value == ""){
        secondInput.value = "00";
    }
    

    if(Number(secondInput.value) > 60){
        minutes.innerText  = String(Number(minuteInput.value) + Math.floor(Number(secondInput.value)/60));
        seconds.innerText = Number(secondInput.value) - Math.round(Number(minutes.innerText) * 60);
        m = Number(minutes.innerText);
        s = Number(seconds.innerText);

    }
    else{
        // hours.innerText = String(hourInput.value);
        minutes.innerText = String(minuteInput.value);
        seconds.innerText = String(secondInput.value);

        // h = Number(hourInput.value);
        m = Number(minuteInput.value);
        s = Number(secondInput.value);
    }
    
})


function resetTime(){
    clearTimeout(timeout);
    //hourInput.value = "";
    minuteInput.value = "";
    secondInput.value = "";
    seconds.innerText = "00";
    //hours.innerText = "00";
    minutes.innerText = "00";
}

function Decrement(){

   if(0< Number(seconds.innerText) < 59){
       minutes.innerText = String(m);
       seconds.innerText = String(s);
   }
   else{
       minutes.innerText = String(getMinutes());
       seconds.innerText = String(getSeconds());
   }

   if(Number(seconds.innerText) ==0 && Number(minutes.innerText) >0){
       m = m-1;
       s = 59;
       minutes.innerText = String(m);
       seconds.innerText = String(s);
   }

   if(m < 0 || (m == 0 && s == 0)){
       resetTime();
       minutes.innerText = "00";
       seconds.innerText = "00";
   }
   else{
       s--;
       timeout = setTimeout(function(){
           Decrement();
       }, 1000)
   }
}

function getMinutes(){
    m = Math.floor(s/60);
    return m;
}

function getSeconds(){
    return s - Math.round(m * 60);
}


reset.addEventListener("click", function(){
    resetTime();
})

start.addEventListener("click", function(){
  
    setTimeout(function(){
        Decrement();
    }, 60);

    
})


