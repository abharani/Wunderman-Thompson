const scrollarrow = document.getElementById("scrollarrow");

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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

document.addEventListener("DOMContentLoaded", function () {
  const pivot1 = document.querySelector(".pivot1");
  const pivot2 = document.querySelector(".pivot2");
  const pivot3 = document.querySelector(".pivot3");

  const content1 = document.getElementById("content1");
  const content2 = document.getElementById("content2");
  const content3 = document.getElementById("content3");

  function hideAllContent() {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
  }

  function setActivePivot(pivot) {
    document
      .querySelectorAll(".pivot-list > div")
      .forEach((el) => el.classList.remove("active"));
    pivot.classList.add("active");
  }

  pivot1.addEventListener("click", function () {
    hideAllContent();
    content1.style.display = "block";
    setActivePivot(pivot1);
  });

  pivot2.addEventListener("click", function () {
    hideAllContent();
    content2.style.display = "block";
    setActivePivot(pivot2);
  });

  pivot3.addEventListener("click", function () {
    hideAllContent();
    content3.style.display = "block";
    setActivePivot(pivot3);
  });
});
