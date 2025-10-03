const section2 = document.querySelector(".two");
const modal = document.querySelector(".modal");
const modalQuit = document.querySelector(".modal-quit");

setTimeout(()=>{modal.classList.add("display-flex")}, 3000);

modalQuit.addEventListener("click",function(){
    modal.classList.remove("display-flex");
});