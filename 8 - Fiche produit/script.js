const vignettes = document.querySelectorAll(".small");
const fullImg = document.getElementById("full");

const btnAdd = document.querySelector(".btn-add");
const panierMsg = document.querySelector(".panier-msg");

let panier = 0;

btnAdd.addEventListener("click", ()=>{
    panier++;
    panierMsg.innerText = "Vous avez "+panier+" articles dans votre panier";
});

vignettes.forEach(vignette => {
    vignette.addEventListener("click", ()=>{
        const smallSrc = vignette.getAttribute("src");
        const fullSrc = fullImg.getAttribute("src");
        vignette.setAttribute("src", fullSrc);
        fullImg.setAttribute("src", smallSrc);
    })
});