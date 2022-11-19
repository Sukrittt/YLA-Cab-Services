var flag = false;

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
