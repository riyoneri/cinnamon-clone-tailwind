const useWindow = () => {
  let navigation = document.getElementById("navigation");
  var scroll = window.scrollY;
  console.log(scroll);
  if (scroll >= 100) {
    navigation.setAttribute("class", "py-5 fixed");
  } else {
    navigation.setAttribute("class", "flex justify-between py-5");
  }
};

window.onload = () => {
//   useWindow();
};

window.onscroll = () => {
//   useWindow();
  // console.log(navigationBar)
  // console.log(window.scrollY)
};
