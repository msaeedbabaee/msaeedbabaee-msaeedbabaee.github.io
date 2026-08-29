
const button =
document.getElementById("themeBtn");


if(localStorage.theme==="light"){

document.body.classList.add("light");

if(button)
button.innerHTML="☀";

}



if(button){

button.onclick=function(){


document.body.classList.toggle("light");


if(document.body.classList.contains("light")){


localStorage.theme="light";

button.innerHTML="☀";


}else{


localStorage.theme="dark";

button.innerHTML="☾";


}


}


}
