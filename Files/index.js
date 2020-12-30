const electron = require("electron");
const ipc = electron.ipcRenderer;
const shell = electron.shell;
const req = require("request");

const Clock = document.getElementById("Clock");
const Weather = document.getElementById("Weather");
const News = document.getElementById("News");
const Youtube = document.getElementById("Youtube");

Clock.addEventListener("click", function(){
    ipc.send("open-clock");
});

Weather.addEventListener("click", function(){
    ipc.send("open-weather");
});

News.addEventListener("click", function(){
    ipc.send("open-news");
});

Youtube.addEventListener("click", function(){
    ipc.send("open-youtube");
});

setTimeout(function(){
    req("https://newsapi.org/v2/top-headlines?country=in&apiKey=55e5ec9ecd46429783d0980e4fd75fd0", function(err,res,body){
        if(err){
            
            document.getElementById("news1").innerHTML = "An error occured";

          
            document.getElementById("news2").innerHTML = "An error occured";

            
            document.getElementById("news3").innerHTML = "An error occured";


            document.getElementById("news4").innerHTML = "An error occured";
        }
        else{
            let bodyJson  = JSON.parse(body);
            let articles = bodyJson["articles"];
            document.getElementById("imageNews1").style.backgroundImage = `url(${articles[0]["urlToImage"]})`;
            document.getElementById("news1").innerHTML = articles[0]["title"];
            document.getElementById("imageNews1").addEventListener("click", function(){
                shell.openExternal(articles[0]["url"]);
            })
            

            document.getElementById("imageNews2").style.backgroundImage = `url(${articles[1]["urlToImage"]})`;
            document.getElementById("news2").innerHTML = articles[1]["title"];
            document.getElementById("imageNews2").addEventListener("click", function(){
                shell.openExternal(articles[1]["url"]);
            })
            
            document.getElementById("imageNews3").style.backgroundImage = `url(${articles[2]["urlToImage"]})`;
            document.getElementById("news3").innerHTML = articles[2]["title"];
            document.getElementById("imageNews3").addEventListener("click", function(){
                shell.openExternal(articles[2]["url"]);
            })
            

            document.getElementById("imageNews4").style.backgroundImage = `url(${articles[3]["urlToImage"]})`;
            document.getElementById("news4").innerHTML = articles[3]["title"];
            document.getElementById("imageNews4").addEventListener("click", function(){
                shell.openExternal(articles[3]["url"]);
            })
            
        }
        
    })
},1)