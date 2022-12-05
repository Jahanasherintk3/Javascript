function changeblue()
{
    document.getElementById("btn1").style.background="blue"
}
function changegreen()
{
    document.getElementById("btn2").style.background="green"
}
function changeblack()
{
    document.getElementById("btn3").style.background="black"
}
function changered()
{
    document.getElementById("btn4").style.background="red"
}
function changepink()
{
    document.getElementById("btn5").style.background="pink"
}

function changewhite()
{
    let a=document.getElementById("btn6").value
    console.log(a)
    document.getElementById("btn6").value=a.toUpperCase()
}