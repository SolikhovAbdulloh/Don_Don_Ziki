
document.addEventListener("DOMContentLoaded",  () => {
  const menuToggle = document.querySelector("#bars");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", ()=> {
    menu.classList.toggle("active");
  });
});

const buttons = document.querySelectorAll('.Accordion')
 
buttons.forEach((btn) =>{
    btn.addEventListener('click',()=>{
const panel = btn.nextElementSibling;

if (panel.style.display === "none") {
  panel.style.display = "block";
} else {
  panel.style.display = "none";
}
    })
})

const rasmlar = document.querySelectorAll('.img')

rasmlar.forEach((rasm)=>{
    let aylanish = 0;
    rasm.addEventListener("click",()=>{
        aylanish+=180

        rasm.style.transform = `rotate(${aylanish}deg)`;
    })
})
 

    
    


