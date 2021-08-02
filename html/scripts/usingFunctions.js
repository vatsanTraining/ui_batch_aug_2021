var app ={};

// Function with Argument

app.showMessage = function(message){

    if(message ==null){
        console.log("hi");
    } else{
     console.log(message);
    }
}

// Function taking another Function as Argument
app.passFunctionAsArgs = function(funcRef){

    console.log(funcRef); // without this ()

    // some more actions after that 
    console.log(funcRef());
}

// Function returning another Function

app.funcReturningFunction = function funRetFun(){

    return function(){

        return "Function Returned !!"
    }
}

// Self Executing Annonymous function 


