const req = require("request");

setTimeout(function(){
    req("https://api.openweathermap.org/data/2.5/weather?id=1271476&units=metric&lang=en&mode=json&APPID=6a14788e68dd771eecc4125dc6ca6cf0", function(err, res, body){
        if(err){

            let bodyJson = JSON.parse(body);
            let descr = "An error occured";
            let feels = "An error occured";
            let city = "An error occured";
            let humidity = "An error occured";
            let wind = "An error occured";
            document.getElementById("Description").innerHTML = descr;
            document.getElementById("Feels_Like").innerHTML = feels + " C";
            document.getElementById("city").innerText = city;
            document.getElementById("Humidity").innerHTML = humidity;
            document.getElementById("Wind").innerHTML = wind
        }
        else{

            let bodyJson = JSON.parse(body);
            let descr = bodyJson["weather"][0]["description"];
            let feels = bodyJson["main"]["feels_like"];
            let city = bodyJson["name"];
            let humidity = bodyJson["main"]["humidity"];
            let wind = bodyJson["wind"]["speed"];
            document.getElementById("Description").innerHTML = descr;
            document.getElementById("Feels_Like").innerHTML = feels + " C";
            document.getElementById("city").innerText = city;
            document.getElementById("Humidity").innerHTML = humidity + " %";
            document.getElementById("Wind").innerHTML = wind + " m/s"
        }
    })
},1)

var Guwahati = document.getElementById("Guwahati");
var Dibrugarh = document.getElementById("Dibrugarh");
var Jorhat = document.getElementById("Jorhat");

Guwahati.addEventListener("click", function(){
    req("https://api.openweathermap.org/data/2.5/weather?id=1271476&units=metric&lang=en&mode=json&APPID=6a14788e68dd771eecc4125dc6ca6cf0", function(err, res, body){
        if(err){

            let bodyJson = JSON.parse(body);
            let descr = "An error occured";
            let feels = "An error occured";
            let city = "An error occured";
            let humidity = "An error occured";
            let wind = "An error occured";
            document.getElementById("Description").innerHTML = descr;
            document.getElementById("Feels_Like").innerHTML = feels + " C";
            document.getElementById("city").innerText = city;
            document.getElementById("Humidity").innerHTML = humidity;
            document.getElementById("Wind").innerHTML = wind
            document.getElementById("Image").src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/34/00/63/guwahati.jpg?w=1100&h=600&s=1"
        }
        else{

            let bodyJson = JSON.parse(body);
            let descr = bodyJson["weather"][0]["description"];
            let feels = bodyJson["main"]["feels_like"];
            let city = bodyJson["name"];
            let humidity = bodyJson["main"]["humidity"];
            let wind = bodyJson["wind"]["speed"];
            document.getElementById("Description").innerHTML = descr;
            document.getElementById("Feels_Like").innerHTML = feels + " C";
            document.getElementById("city").innerText = city;
            document.getElementById("Humidity").innerHTML = humidity + " %";
            document.getElementById("Wind").innerHTML = wind + " m/s"
            document.getElementById("Image").src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/34/00/63/guwahati.jpg?w=1100&h=600&s=1"
        }
    })
})


Dibrugarh.addEventListener("click", function(){
    req("https://api.openweathermap.org/data/2.5/weather?id=1272648&units=metric&lang=en&mode=json&APPID=b4d24f0a32abb802d7b50077b5edd53a", function(err, res, body){
        if(err){

            let bodyJson = JSON.parse(body);
            let descr = "An error occured";
            let feels = "An error occured";
            let city = "An error occured";
            let humidity = "An error occured";
            let wind = "An error occured";
            document.getElementById("Description").innerHTML = descr;
            document.getElementById("Feels_Like").innerHTML = feels + " C";
            document.getElementById("city").innerText = city;
            document.getElementById("Humidity").innerHTML = humidity;
            document.getElementById("Wind").innerHTML = wind
            document.getElementById("Image").src = "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2019/01/Dibrugarh-Assam.jpg"
        }
        else{

            let bodyJson = JSON.parse(body);
            let descr = bodyJson["weather"][0]["description"];
            let feels = bodyJson["main"]["feels_like"];
            let city = bodyJson["name"];
            let humidity = bodyJson["main"]["humidity"];
            let wind = bodyJson["wind"]["speed"];
            document.getElementById("Description").innerHTML = descr;
            document.getElementById("Feels_Like").innerHTML = feels + " C";
            document.getElementById("city").innerText = city;
            document.getElementById("Humidity").innerHTML = humidity + " %";
            document.getElementById("Wind").innerHTML = wind + " m/s"
            document.getElementById("Image").src = "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2019/01/Dibrugarh-Assam.jpg"
        }
    })
})

Jorhat.addEventListener("click", function(){
    req("https://api.openweathermap.org/data/2.5/weather?id=1268820&units=metric&lang=en&mode=json&APPID=5580cca28620a33c336841f3f6f29321", function(err, res, body){
        if(err){

            let bodyJson = JSON.parse(body);
            let descr = "An error occured";
            let feels = "An error occured";
            let city = "An error occured";
            let humidity = "An error occured";
            let wind = "An error occured";
            document.getElementById("Description").innerHTML = descr;
            document.getElementById("Feels_Like").innerHTML = feels + " C";
            document.getElementById("city").innerText = city;
            document.getElementById("Humidity").innerHTML = humidity;
            document.getElementById("Wind").innerHTML = wind
            document.getElementById("Image").src = "https://nenow.in/wp-content/uploads/2018/08/kb-road-jorhat.jpg"
        }
        else{

            let bodyJson = JSON.parse(body);
            let descr = bodyJson["weather"][0]["description"];
            let feels = bodyJson["main"]["feels_like"];
            let city = bodyJson["name"];
            let humidity = bodyJson["main"]["humidity"];
            let wind = bodyJson["wind"]["speed"];
            document.getElementById("Description").innerHTML = descr;
            document.getElementById("Feels_Like").innerHTML = feels + " C";
            document.getElementById("city").innerText = city;
            document.getElementById("Humidity").innerHTML = humidity + " %";
            document.getElementById("Wind").innerHTML = wind + " m/s"
            document.getElementById("Image").src = "https://nenow.in/wp-content/uploads/2018/08/kb-road-jorhat.jpg"
        }
    })
})