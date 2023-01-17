let personalDetails={
    name:"Aram",place:"marathalli",numb:2
}
let loginDetails={
    name:"Ayan",native:"banglore",age:8
}
let userDetails={...personalDetails,...loginDetails};
console.log(userDetails);

//this is adding both objects...if there are two similar keys 
//then last would be the one// 