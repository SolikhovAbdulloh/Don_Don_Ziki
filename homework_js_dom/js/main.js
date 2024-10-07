
document.addEventListener("DOMContentLoaded",  () => {
  const menuToggle = document.querySelector("#bars");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", ()=> {
    menu.classList.toggle("active");
  });
});


