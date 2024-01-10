const buttonRef = document.querySelector(".pulse__button");
const contactsRef = document.querySelector(".pulse__download");
const imgRef = document.querySelector(".pulse__button-img");

function closeBlock() {
  imgRef.src = "./images/close.png";
}

function openBlock() {
  imgRef.src = "./images/download.png";
}

buttonRef.addEventListener("click", () => {
  contactsRef.classList.toggle("open");
  const isOpen = contactsRef.classList.contains("open");
  if (isOpen) {
    closeBlock();
  } else {
    openBlock();
  }
});
