const section2 = document.querySelector(".two");
const modal = document.querySelector(".modal");
const modalQuit = document.querySelector(".modal-quit");

const offsetTop = section2.offsetTop;

let viewportY = ()=>document.documentElement.scrollTop;

function onScrollDisplayModal(){
    if (viewportY() >= offsetTop) {
        modal.classList.add("display-flex");
    }
}

window.addEventListener("scroll",onScrollDisplayModal);

modalQuit.addEventListener("click",function(){
    modal.classList.remove("display-flex");
    window.removeEventListener("scroll",onScrollDisplayModal);
});