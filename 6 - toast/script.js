const btn = document.querySelector("button");
const ctnToasts = document.querySelector(".container-toasts");

btn.addEventListener("click", ()=>{
    const newToast = document.createElement("div");
    newToast.classList.add("toast");
    const newToastMsg = document.createElement("p");
    newToastMsg.innerText = "Votre fichier est enregistré !";
    ctnToasts.appendChild(newToast);
    newToast.appendChild(newToastMsg);
    setTimeout(()=>{newToast.remove()}, 3000)
})