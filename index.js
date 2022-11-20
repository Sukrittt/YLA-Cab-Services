// When clicked on the toggle icon
document.getElementById("toggler-icon").addEventListener("click", function (e) {
  if (
    document.getElementById("collapse-items").style.display == "" ||
    document.getElementById("collapse-items").style.display == "none"
  ) {
    document.getElementById("collapse-items").style.display = "flex";
  } else {
    document.getElementById("collapse-items").style.display = "none";
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
