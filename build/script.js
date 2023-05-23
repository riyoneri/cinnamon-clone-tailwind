const changeNav = () => {
  const navbar = document.querySelector("#navigation");
  const playButton = document.querySelector("#play-btn");
  const logoSVG = document.querySelector("#logo-svg");

  const scrollPosition = window.pageYOffset;
  
  if(scrollPosition > 80) {
    navbar.classList.add("fixed", "bg-white","px-20", "left-2/4", "transform", "text-zinc-900", "-translate-x-2/4", "top-0", "w-full", "z-10")
    playButton.classList.remove("border-white");
    playButton.classList.add("border-indigo-600");
    logoSVG.querySelectorAll("path").forEach(path => path.setAttribute("fill", "rgb(24,24,27)"))
  } else {
    navbar.classList.remove("fixed", "bg-white","px-20", "left-2/4", "transform", "text-zinc-900", "-translate-x-2/4", "top-0", "w-full")
    playButton.classList.remove("border-indigo-600");
    playButton.classList.add("border-white");
    logoSVG.querySelectorAll("path").forEach(path => path.setAttribute("fill", "white"))
  }

  
}

window.addEventListener("scroll", changeNav)
window.addEventListener("load", changeNav)
