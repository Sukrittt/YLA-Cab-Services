// When clicked on the toggle icon
document.getElementById("toggler-icon").addEventListener("click", function (e) {
  if (
    document.getElementById("collapse-items").style.display == "" ||
    document.getElementById("collapse-items").style.display == "none"
  ) {
    document.getElementById("collapse-items").style.display = "flex";
    document.getElementById("nav-item").style.transition = "1s";
  } else {
    document.getElementById("collapse-items").style.display = "none";
    document.getElementById("collapse-items").style.transition = "1s";
  }
});

// When Clicked outside of nav links
document.getElementById("main").addEventListener("click", function (e) {
  if (document.getElementById("collapse-items").style.display == "flex") {
    document.getElementById("collapse-items").style.display = "none";
  }
});
