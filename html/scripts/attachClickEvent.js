
function show(){
    console.log('hello world');
}

var app={};

app.attachEvents= function(){


    var button = 
          document.getElementById("btn1");

      button.addEventListener('click',function(){

           console.log("button clicked");
      });    
}

app.attachEvents();
show();