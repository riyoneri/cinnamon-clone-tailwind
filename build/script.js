const changeNav = () => {
  const navbar = document.querySelector("#navigation")
  const scrollPosition = window.pageYOffset;

  if(scrollPosition > 80) {
    navbar.classList.add("fixed", "bg-white","px-20", "left-2/4", "transform", "text-zinc-900", "-translate-x-2/4", "top-0", "w-full")
  } else {
    navbar.classList.remove("fixed", "bg-white","px-20", "left-2/4", "transform", "text-zinc-900", "-translate-x-2/4", "top-0", "w-full")
  }
}

window.addEventListener("scroll", changeNav)
window.addEventListener("load", changeNav)
