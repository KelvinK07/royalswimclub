const faqList = document.querySelectorAll(".FAQSectionCard");
faqList.forEach((FAQ) => {
    FAQ.addEventListener("click",()=>{
        FAQ.classList.toggle("active")
    });
});