var myHeading = document.querySelector('h1');
let num = "123";
myHeading.textContent = "idiot";
function multiple(num1,num2){
    let ans = num1 * num2;
    return ans;
}
document.querySelector('em').onclick = function(){
    alert("stop click you this idiot.");
}
let myimage =document.querySelector('img');

document.querySelector('img').onclick=function(){
    let mysrc = document.querySelector("img").getAttribute('src');
    if(mysrc === "image/kirito.png"){
        mysrc = myimage.setAttribute('src','image/lin.jpg');
    }
    else{
        mysrc = document.querySelector('img').setAttribute('src','image/kirito.png');
    }
}
function setusername(){
    let myname = prompt("input your name.");
    if(!myname || myname=== null){
        setusername();
    }
    else{
        localStorage.setItem("name",myname);
        myHeading.innerHTML = myname + "的ig";
    }
}
document.querySelector('buttom').onclick=function(){
    setusername();
}