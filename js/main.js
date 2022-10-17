// start nav bar
const navBar = document.querySelector("nav");
const about = document.querySelector(".about-section");
const arrow = document.querySelector(".arrow-up");
const map = document.querySelector('section.map')
const mapHeading = document.querySelector('section.map h2')
const iframe = document.querySelector('.egypt-map')

window.addEventListener("scroll", () => {
  navBar.classList.toggle("navbarbg", window.scrollY > about.offsetTop - 48);
  arrow.classList.toggle("show", window.scrollY > 150);
});
//   pageYOffset
// scrolltop
arrow.addEventListener("click", () => {
  window.pageYOffset = about.offsetTop;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// map
map.addEventListener('click',(e)=>{
    if(iframe.className == 'egypt-map'){
      iframe.classList.add('show')
      iframe.style.display = 'block'
      mapHeading.innerHTML = 'close map'
    }else{
      iframe.classList.remove('show')
      iframe.style.display = 'none'
      mapHeading.innerHTML = 'open map'

    }
})




