import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (document.documentElement.offsetWidth > 768) {
        modal.style.display = "block";
        animate({
          duration: 350,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = 100 * progress + "%";
          },
        });
      } else {
        modal.style.display = "block";
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};
export default modal;
