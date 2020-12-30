const { shell } = require("electron");
const req = require("request");


function fetch(category){
    req(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=55e5ec9ecd46429783d0980e4fd75fd0`, function(err, res, body){
        if(err){
            document.getElementById("newsCatg1").innerHTML= "An error occured";
            document.getElementById("newsCatg2").innerHTML= "An error occured";
            document.getElementById("newsCatg3").innerHTML= "An error occured";
            document.getElementById("newsCatg4").innerHTML= "An error occured";
            document.getElementById("newsCatg5").innerHTML= "An error occured";
            document.getElementById("newsCatg6").innerHTML= "An error occured";
        }

        else{
            let bodyJson = JSON.parse(body);
            let articles = bodyJson["articles"];
            
            document.getElementById("imageNewsCatg1").style.backgroundImage = `url(${articles[0]["urlToImage"]})`;
            document.getElementById("newsCatg1").innerHTML = articles[0]["title"];
            document.getElementById("imageNewsCatg1").addEventListener("click", function(){
                shell.openExternal(articles[0]["url"]);
            })

            document.getElementById("imageNewsCatg2").style.backgroundImage = `url(${articles[1]["urlToImage"]})`;
            document.getElementById("newsCatg2").innerHTML = articles[1]["title"];
            document.getElementById("imageNewsCatg2").addEventListener("click", function(){
                shell.openExternal(articles[1]["url"]);
            })

            document.getElementById("imageNewsCatg3").style.backgroundImage = `url(${articles[2]["urlToImage"]})`;
            document.getElementById("newsCatg3").innerHTML = articles[2]["title"];
            document.getElementById("imageNewsCatg3").addEventListener("click", function(){
                shell.openExternal(articles[2]["url"]);
            })

            document.getElementById("imageNewsCatg4").style.backgroundImage = `url(${articles[3]["urlToImage"]})`;
            document.getElementById("newsCatg4").innerHTML = articles[3]["title"];
            document.getElementById("imageNewsCatg4").addEventListener("click", function(){
                shell.openExternal(articles[3]["url"]);
            })

            document.getElementById("imageNewsCatg5").style.backgroundImage = `url(${articles[4]["urlToImage"]})`;
            document.getElementById("newsCatg5").innerHTML = articles[4]["title"];
            document.getElementById("imageNewsCatg5").addEventListener("click", function(){
                shell.openExternal(articles[4]["url"]);
            })

            document.getElementById("imageNewsCatg6").style.backgroundImage = `url(${articles[5]["urlToImage"]})`;
            document.getElementById("newsCatg6").innerHTML = articles[5]["title"];
            document.getElementById("imageNewsCatg6").addEventListener("click", function(){
                shell.openExternal(articles[5]["url"]);
            })
            
        }
    })
}


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
            console.log(articles);
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
        
    });
    document.getElementById("Category").innerHTML = "Sports";
    fetch("sports");
    
},1);

