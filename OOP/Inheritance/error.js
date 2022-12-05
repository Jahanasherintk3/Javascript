class Parent {
    asset = 4500000;
}
class Child extends Parent { }
let c1 = new Child();
console.log(c1); //this would be error because we didnt applied the super //

//for errorless we need to give 'super' //