// When clicked on the toggle icon
document.getElementById("toggler-icon").addEventListener("click", function (e) {
  const button = document.querySelector(".button-one");
  const buttonState = button.getAttribute("aria-expanded");
  if (
    document.getElementById("collapse-items").style.display == "" ||
    document.getElementById("collapse-items").style.display == "none"
  ) {
    document.getElementById("collapse-items").style.display = "flex";
    button.setAttribute("aria-expanded", "true");
  } else {
    document.getElementById("collapse-items").style.display = "none";
    button.setAttribute("aria-expanded", "false");
  }
});

// When Clicked outside of nav links
if (document.getElementById("collapse-items").style.display == "flex") {
  document.getElementById("main").addEventListener("click", function (e) {
    if (document.getElementById("collapse-items").style.display == "flex") {
      document.getElementById("collapse-items").style.display = "none";
    }
  });
}

// When scrolled
document.addEventListener("scroll", function (e) {
  if (document.getElementById("collapse-items").style.display == "flex") {
    document.getElementById("collapse-items").style.display = "none";
  }
});
