const timeline = document.querySelector(".timeline__line");
const listItem = document.querySelectorAll(".timeline__box");

const timelineHeight = timeline.dataset.height;

window.addEventListener("scroll", scrollHandler);
scrollHandler();

function scrollHandler() {
  if (window.scrollY >= timelineHeight) {
    timeline.style.height = timelineHeight + "px";
  } else {
    timeline.style.height = window.scrollY + "px";
  }

  const trigger = (window.innerHeight / 5) * 4;

  listItem.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < trigger) {
      item.classList.add("timeline__show");
    } else {
      item.classList.remove("timeline__show");
    }
  });
}
