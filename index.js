const scrollarrow = document.getElementById("scrollarrow");


window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollarrow.style.display = "block";
  } else {
    scrollarrow.style.display = "none";
  }
};

scrollarrow.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
