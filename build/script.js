const changeNav = () => {
  const navbar = document.querySelector("#navigation");
  const playButton = document.querySelector("#play-btn");
  const logoSVG = document.querySelector("#logo-svg");
  const burgetBtn = document.querySelector("#burger")

  const scrollPosition = window.pageYOffset;
  
  if(scrollPosition > 50) {
    navbar.classList.add("fixed", "bg-white","px-5", "md:px-20", "left-2/4", "transform", "text-zinc-900", "-translate-x-2/4", "top-0", "w-full", "z-10")
    logoSVG.querySelectorAll("path").forEach(path => path.setAttribute("fill", "rgb(24,24,27)"))
    burgetBtn.querySelectorAll("path").forEach(path => path.setAttribute("stroke", "rgb(24,24,27)"))
  } else {
    navbar.classList.remove("fixed", "bg-white","px-5", "md:px-20", "left-2/4", "transform", "text-zinc-900", "-translate-x-2/4", "top-0", "w-full")
    logoSVG.querySelectorAll("path").forEach(path => path.setAttribute("fill", "white"))
    burgetBtn.querySelectorAll("path").forEach(path => path.setAttribute("stroke", "white"))
  }

  
}

window.addEventListener("scroll", changeNav)
window.addEventListener("DOMContentLoaded", changeNav)
