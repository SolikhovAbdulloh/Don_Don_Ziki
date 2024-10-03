
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".nav-links");

menuBtn.addEventListener("click" ,function(){
 if (!navbar.classList.contains("active")) {
   navbar.classList.add("active");
 } else{

     navbar.classList.remove("active");
 } 
})



