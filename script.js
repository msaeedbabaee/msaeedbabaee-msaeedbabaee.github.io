const btn = document.getElementById("themeBtn");

const body = document.body;


btn.addEventListener("click",()=>{

body.classList.toggle("light");


if(body.classList.contains("light")){

btn.textContent="☀";

localStorage.setItem("theme","light");

}
else{

btn.textContent="☾";

localStorage.setItem("theme","dark");

}

});



if(localStorage.getItem("theme")==="light"){

body.classList.add("light");

btn.textContent="☀";

}
