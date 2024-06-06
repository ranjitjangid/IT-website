document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.ul');

    hamburger.addEventListener('click', function () {
        document.body.classList.toggle('menu-open');
    });
});
const scrollButton = document.getElementsByClassName("scroll")[0]; // Accessing the first element with class "scroll"

window.addEventListener("scroll", function (){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    scrollButton.style.display = "block";
    scrollButton.style.opacity = "1";
  }
  else{
    scrollButton.style.display = "none";
    scrollButton.style.opacity = "0";
  }
});

scrollButton.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
