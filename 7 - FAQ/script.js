const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    question.addEventListener("click",function(){
        const reponse = question.nextElementSibling;
        const questionIcon = question.lastElementChild;

        reponse.classList.toggle("show-reponse");
        questionIcon.classList.toggle("fa-chevron-down");
        questionIcon.classList.toggle("fa-chevron-up");
    });
});