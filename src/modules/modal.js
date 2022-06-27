const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  let count = 0;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (document.documentElement.offsetWidth > 768) {
        modal.style.display = "block";
        popupAnimation();
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

  const popupAnimation = () => {
    const start = requestAnimationFrame(popupAnimation);
    count += 5;
    modal.style.opacity = count + "%";
    if (count === 100) {
      cancelAnimationFrame(start);
      count = 0;
    }
  };
};
export default modal;
