const player = document.querySelector('#player')
const computer = document.querySelector('#computer')
const restart = document.querySelector('#restart')
const icons = document.querySelectorAll('.icons i')
const countComp = document.querySelector('#count1')
const countPlyer = document.querySelector('#count2')

restart.addEventListener('click',()=>{
    countComp.textContent = 0
    countPlyer.textContent = 0
})

function camputerRandom(){
    let rand = Math.ceil((Math.random() * 3))
    if(rand === 1){
        return "fa-solid fa-hand-back-fist"; //tosh
    }else if(rand === 2){
        return "fa-solid fa-hand-scissors"; //qaychi 
    }else{
        return "fa-solid fa-hand"; // qogoz
    }
    
}
icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const player = e.target.classList[1]; 
    const computer = camputerRandom();
    solishtir(player, computer); 
   
    
  });
});


function solishtir(player,computer){
    if(player == computer){
        alert('durrang')
    }else if (
      (player == "fa-solid fa-hand" && computer == "fa-solid fa-hand-back-fist") ||
      (player == "fa-solid fa-hand-scissors " && computer == "fa-solid fa-hand") ||
      (player == "fa-solid fa-hand-back-fist" && computer == "fa-solid fa-hand-scissors ")
    ) {
        countPlyer.textContent = parseInt(countPlyer.textContent) +1
    }else{

        countComp.textContent = parseInt(countComp.textContent) + 1
    }
}
