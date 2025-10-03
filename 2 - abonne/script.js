const smiley = document.querySelector("#emoji")
const btnSub = document.querySelector(".btn-sub")
let isSubscribed = false;

smiley.addEventListener("click", function(){
    smiley.classList.toggle("fa-face-meh");
    smiley.classList.toggle("fa-face-smile");
    smiley.classList.toggle("yellow-color")
});

btnSub.addEventListener("click", function(){
    if (!isSubscribed) {
        btnSub.classList.add("background-grey", "white-font");
        btnSub.innerText = "Abonné";
        isSubscribed = true;
    }else if (isSubscribed) {
        btnSub.classList.remove("background-grey", "white-font");
        btnSub.innerText = "Abonnez-vous";
        isSubscribed = false;
    }
})