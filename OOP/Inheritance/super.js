class Students
{
    constructor(name,qualification)
    {
        this.stu_Name=name
        this.stu_Qualification=qualification
    }
}
class Placed_Students extends Students   // now the child is formed...extends-connects the parent//
{
    constructor(id,name,qualification,email)
    {
        super(name,qualification)  // by using this only we can get back the parent object.st print only the//
        this.stu_Id=id; //so that first print parent//
        this.stu_Email=email;
    }
}
let a1=new Placed_Students(101,"Ashi",'Msc.','ashi@gmail.com')  //given the parameters//
let a2=new Placed_Students(102,"priya",'b.tech','priya@gmail.com')
console.log(a1)
console.log(a2)