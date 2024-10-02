// const btn = document.getElementById("btn");

// const aaa = document.getElementsByClassName("sss");

// const bbb = document.getElementsByTagName("body");

// const fff = document.getElementsByName("fff");

// const list = document.querySelector(".list");
// // console.log(list);

// const buva = document.querySelector(".bobo");

// console.log(buva.previousSibling);//bu oldingi bosh joyni olib beradi

// console.log(buva.previousElementSibling);//bu oldingi elementni olib beradi

// console.log(buva.children.children);//bolasni oberadi

// console.log(buva.parentNode);//bu uning urab turgan otasini oberadi

// console.log(buva.firstElementChild);

// buva.classList.add("fifa"); // class qoshish
// buva.classList.toggle("salom")
// buva.classList.toggle("salom"); toggle esa class yaratadi 2ta bosa ochiradi

// buva.classList.remove("fifa") remove orqali class ochirish

// buva.classList.replace("bobo", "kotta-bobo"); class nomini ozgartirish

// console.log(buva.classList.contains("kotta-bobo")); shu nomdagi class bolsa true yokida false

// console.log(aaa);

// console.log(btn)

const menu = document.querySelector(".menu")

const navbar_links = document.querySelector(".links")
console.log(menu)

menu.addEventListener("click", () =>{
    console.log("salom")
    if(!navbar_links.classList.contains("active")){
        navbar_links.classList.add("active");
    }else{
        navbar_links.classList.remove("active");
    }
});