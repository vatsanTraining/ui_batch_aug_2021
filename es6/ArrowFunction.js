// using let

var app={}

 app.usingLet =function(){

    for(var i =0;i<=5;i++){
        console.log(i);
    }

    console.log('Value of I'+ i);

    for(let j =0;j<=5;j++){
        console.log(j);
    }

    //  console.log('Value of j:='+ j);
 }


// use default values for argument

app.show =function(a ,b=2){

    return a+b;

}


app.usingRest = function(...values){

    values.forEach(function(eachNumber,idx){
        console.log("each Number:="+ eachNumber);
    })
}
app.usingSpread =function( a,b,c,d){

    var total = a+b+c+d;

    console.log("Total :="+total);
}

app.usingArrow =function(...values){

    values.forEach( (n,i) =>console.log(n));
}


// app.usingLet();
// console.log("Result" +app.show(10));
// app.usingRest(12,19,20,30);

 var args =[20,30,40,50]
 app.usingSpread(...args);
//app.usingArrow(80,90,100,120);