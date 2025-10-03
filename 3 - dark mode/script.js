const icons = document.querySelectorAll(".icon");
const darkMSwitch = document.querySelectorAll(".switch");
const body_arr= document.querySelectorAll("*");
darkMSwitch.forEach(darkSwitch => {
    darkSwitch.addEventListener("click", () => {
        body_arr.forEach(body => {
            body.classList.toggle("darkmode");
        icons.forEach(icon => {
            icon.classList.toggle("fa-sun")
            icon.classList.toggle("fa-moon")
        });
    })});
});
    