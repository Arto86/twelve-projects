const cookiesAccept = document.querySelector(".btn-accept");
const cookiesBanner = document.querySelector(".cookies")

const acceptedCookies = localStorage.getItem("isCookiesAccepted");

if (acceptedCookies) {
    cookiesBanner.classList.add("display-none");
};

cookiesAccept.addEventListener("click", function(){
    localStorage.setItem("isCookiesAccepted", true);
    cookiesBanner.classList.add("display-none");
});
