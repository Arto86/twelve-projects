const burger = document.querySelector(".burger");
const modal = document.querySelector(".modal");

burger.addEventListener("click", ()=>{
    modal.classList.toggle("show-modal");
    burger.classList.toggle("show-modal");
    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-3x");
    burger.classList.toggle("fa-xmark");
})