let movie=(success,failure)=>{
    let amount=600;
    if (amount>500){
        success("get it")
    }
    else{
        failure("not get")
    }
}
movie((ticket)=>{
    console.log("tickets")
},(error)=>{
    console.log("no ticket")
})


//.then==success
//.catch==failure