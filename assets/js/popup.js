function openModal() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("contactModal").style.display = "block";

  setTimeout(() => {
    document.getElementById("overlay").style.opacity = 1;
    document.getElementById("contactModal").style.opacity = 1;
  }, 10);
}

function closeModal() {
  document.getElementById("overlay").style.opacity = 0;
  document.getElementById("contactModal").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("contactModal").style.display = "none";
  }, 300);
}
