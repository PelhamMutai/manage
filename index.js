
const navToggle=document.querySelector(".nav-toggle");
const prNav=document.querySelector(".navbar");
const toggIcon=document.querySelectorAll(".icon");

navToggle.addEventListener("click", () =>{
  prNav.classList.toggle("open");
  toggIcon.forEach(icon =>{
    icon.classList.toggle("close");
  });

});

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false, 
  dots: true,
  arrows:false,
  responsive: {
  800: {
    
    slidesToShow: 3,
    dots: false
  }
}
});