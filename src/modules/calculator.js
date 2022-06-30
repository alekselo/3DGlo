const calculator = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");
  let step = 0;
  let result = 0;

  calcBlock.addEventListener("change", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;
    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }
    total.textContent = totalValue;

    const animateTotal = () => {
      let step = 1;
      let time = 5000;

      let change = time / (totalValue / step);
      if (result < totalValue) {
        let interval = setInterval(() => {
          if (result === totalValue) {
            clearInterval(interval);
          } else {
            result += step;
          }
          total.textContent = result;
        }, change);
      }
      if (result > totalValue) {
        let interval = setInterval(() => {
          if (result === totalValue) {
            clearInterval(interval);
          } else {
            result -= step;
          }
          total.textContent = result;
        }, change);
      }
    };

    animateTotal();
  };
};

export default calculator;
