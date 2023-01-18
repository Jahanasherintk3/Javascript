let doTask=(success,failure)=>{
    let flag=false;   //if it is true then else value will print
    if (flag==true){
        success("data is there")
    }
    else{
        failure("no data")
    }

}
doTask((get)=>{
    console.log(get)
},(notget)=>{
    console.log(notget)
})