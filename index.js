
/*const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  arrows:false,
  responsive: {
    800: {
      dots:false,
    },
  }
});*/

const navToggle=document.querySelector(".nav-toggle");
const prNav=document.querySelector(".navbar");
const toggIcon=document.querySelectorAll(".icon");

navToggle.addEventListener("click", () =>{
  prNav.classList.toggle("open");
  toggIcon.forEach(icon =>{
    icon.classList.toggle("close");
  });

});
/*navToggle.addEventListener("click", () =>{
  const visibilty=prNav.getAttribute("data-visible");
  if(visibilty==="false"){
    prNav.setAttribute("data-visible", true);
}else if(visibilty==="true"){ 
  prNav.setAttribute("data-visible", false);
}
});*/
