const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер с Вами свяжется!";
  const formElements = form.querySelectorAll("input");

  const regUserName = /^[а-яА-ЯёЁ]{2,}$/;
  const regUserPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  const regUserEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  formElements.forEach((input) => {
    input.addEventListener("invalid", (e) => {
      e.preventDefault();
      input.classList.add("error");
    });
  });

  formElements.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.preventDefault();

      if (input.name === "user_name") {
        if (regUserName.test(input.value)) {
          input.classList.remove("error");
        }
      }
      if (input.name === "user_email") {
        if (regUserEmail.test(input.value)) {
          input.classList.remove("error");
        }
      }
      if (input.name === "user_phone") {
        if (regUserPhone.test(input.value)) {
          input.classList.remove("error");
        }
      }
    });
  });

  const validate = (list) => {
    let success = true;

    formElements.forEach((input) => {
      if (input.name === "user_name") {
        if (!regUserName.test(input.value)) {
          input.classList.add("error");
        }
      }
      if (input.name === "user_email") {
        if (!regUserEmail.test(input.value)) {
          input.classList.add("error");
        }
      }
      if (input.name === "user_phone") {
        if (!regUserPhone.test(input.value)) {
          input.classList.add("error");
        }
      }
      if (input.classList.contains("error")) {
        success = false;
      }
    });

    return success;
  };
  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };
  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    statusBlock.classList.add("white");
    statusBlock.textContent = loadText;
    form.append(statusBlock);

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block" && 0 < +element.textContent) {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input" && 0 < +element.value) {
        formBody[elem.id] = element.value;
      }
    });
    if (
      formBody.hasOwnProperty("user_message") &&
      formBody.user_message === ""
    ) {
      delete formBody.user_message;
    }

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";

            setTimeout(() => {
              statusBlock.textContent = "";
            }, 3000);
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 3000);
        });
    } else {
      formElements.forEach((input) => {});
    }
  };
  try {
    if (!form) {
      throw new Error("Верните форму на место");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
