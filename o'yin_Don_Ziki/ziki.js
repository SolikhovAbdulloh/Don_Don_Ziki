const restart = document.querySelector("#restart");
const icons = document.querySelectorAll("i");
const countComp = document.querySelector("#count1");
const countPlyer = document.querySelector("#count2");
const countDraw = document.querySelector('#count3')

restart.addEventListener("click", () => {
  countComp.textContent = 0;
  countPlyer.textContent = 0;
  countDraw.textContent = 0;
});

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const player = e.target.id;
    const computer = computerRandom();
    solishtir(player, computer);
  });
});

function solishtir(player, computer) {
  console.log(player, computer);
  if (player == computer) {
    alert(`Durrang chunki kampyuter ${computer} qildi`);
    countDraw.textContent = Number(countDraw.textContent)+1
  } else if (
    (player == "Qog'oz" && computer == "Tosh") ||
    (player == "Qaychi" && computer == "Qog'oz") ||
    (player == "Tosh" && computer == "Qaychi")
  ) {
    alert(`Urraa Yutdingiz Campyuter ${computer} qildi`);
    countComp.textContent = Number(countComp.textContent) + 1;
  } else {
    alert(`Yutqazdingiz kampyuter ${computer} qildi`);
    countPlyer.textContent = Number(countPlyer.textContent) + 1;
  }
}

function computerRandom() {
  let rand = Math.ceil(Math.random() * 3);

  if (rand === 1) {
    return "Tosh"; // Tosh
  } else if (rand === 2) {
    return "Qaychi"; // Qaychi
  } else {
    return "Qog'oz"; // Qog'oz
  }
}
