
var app={};
// destrcutre simple values

app.destruSimpleValues =function(){

    let arr = ["Ramesh","Suresh"];
    let [firstName,lastName] = arr;

    console.log(firstName)
    console.log(lastName);

    // let firstName = arr[0];
    // let secondName =arr[1];
}

//destructure object

app.destruObject =function(){

    let student = {id:101,name:"naveen",mark:89}

    let {name,mark} = student;

    console.log(name);
    console.log(mark);

}
app.destruObjectRest =function(){

    let student = {id:101,name:"naveen",mark:89}

    let {id,...other} = student;

    console.log(id);
    console.log(other);

}
// destrucre with rest
//app.destruSimpleValues();
//app.destruObject();
app.destruObjectRest();
