
const navList=document.querySelector(".nav-list");
const navToggle=document.querySelector(".nav-toggle");
const prNav=document.querySelector(".navbar");
const toggIcon=document.querySelectorAll(".icon");

navToggle.addEventListener("click", () =>{
  prNav.classList.toggle("open");
  toggIcon.forEach(icon =>{
    icon.classList.toggle("close");
    navList.classList.toggle("data-overlay");
  });

});

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  arrows:false,
  responsive: {
  768: {
    
    slidesToShow: 3,
    dots: false
  }
}
});