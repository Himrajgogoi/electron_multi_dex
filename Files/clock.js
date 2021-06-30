
setTimeout(function(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let today = date.getDate();
    let month = date.getMonth()+1;
    let day = date.getDay();
    let year = date.getFullYear();
    document.getElementById("date").innerHTML= today.toString() + " / " + month.toString() + " / " + year.toString();
    if(hour < 12){
        document.getElementById("clock").innerHTML= hour.toString() + " : " + minutes.toString() + " : " + seconds.toString() + " AM";
    }
    else{
        document.getElementById("clock").innerHTML= hour.toString() + " : " + minutes.toString() + " : " + seconds.toString() + " PM";

    }
    
},10)



setInterval(function(){

    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hour < 12){
        document.getElementById("clock").innerHTML= hour.toString() + " : " + minutes.toString() + " : " + seconds.toString() + " AM";
    }
    else{
        document.getElementById("clock").innerHTML= hour.toString() + " : " + minutes.toString() + " : " + seconds.toString() + " PM";

    }
    
}, 1000)

