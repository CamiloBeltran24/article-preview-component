const botonShare = document.querySelector(".fa-share");

const share = document.querySelector(".share");

botonShare.addEventListener("click", function () {
  if (share.classList.contains("oculto")) {
    share.classList.add("active");
    share.classList.remove("oculto");
  } else {
    share.classList.remove("active");
    share.classList.add("oculto");
  }
});
