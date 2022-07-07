const validation = () => {
  const nameInput = document.querySelectorAll('input[name="user_name"]');
  const phoneInput = document.querySelectorAll('input[name="user_phone"]');
  const emailInput = document.querySelectorAll('input[name="user_email"]');
  const messageInput = document.querySelector('input[name="user_message"]');
  const calcInputs = document.querySelectorAll(
    '.calc-block > input[type="text"]'
  );

  const calcInputsValidation = () => {
    calcInputs.forEach((item) => {
      item.addEventListener("input", (elem) => {
        elem.target.value = elem.target.value.replace(/\D/g, "");
      });
    });
  };
  calcInputsValidation();

  const userNameValidation = () => {
    nameInput.forEach((item) => {
      item.addEventListener("input", (elem) => {
        elem.target.value = elem.target.value.replace(/[^а-яА-ЯёЁ\-\s+]/gi, "");
      });
    });
    nameInput.forEach((item) => {
      item.addEventListener("blur", (elem) => {
        elem.target.value = elem.target.value.replace(/^[\s\-]+|[\s\-]+$/g, "");
        elem.target.value = elem.target.value.replace(/\s{2,}/g, " ");
        elem.target.value = elem.target.value.replace(/\-{2,}/g, "-");
        elem.target.value = elem.target.value.replace(
          /( |^)[а-яё]/g,
          function (e) {
            return e.toUpperCase();
          }
        );
      });
    });
  };
  userNameValidation();

  const userEmailValidation = () => {
    emailInput.forEach((item) => {
      item.addEventListener("input", (elem) => {
        elem.target.value = elem.target.value.replace(
          /[^a-zA-Z\-\@\~\`\_\*\!\.]/gi,
          ""
        );
      });
    });
    emailInput.forEach((item) => {
      item.addEventListener("blur", (elem) => {
        elem.target.value = elem.target.value.replace(/\_{2,}/g, "_");
        elem.target.value = elem.target.value.replace(/\-{2,}/g, "-");
        elem.target.value = elem.target.value.replace(/^\s+|\s{2,}|\s+$/g, "");
        elem.target.value = elem.target.value.replace(/^\-|\-{2,}|\-$/g, "");
      });
    });
  };
  userEmailValidation();

  const userPhoneValidation = () => {
    phoneInput.forEach((item) => {
      item.addEventListener("input", (elem) => {
        elem.target.value = elem.target.value.replace(/[^0-9\()\+\-]/g, "");
      });
    });
    phoneInput.forEach((item) => {
      item.addEventListener("blur", (elem) => {
        elem.target.value = elem.target.value.replace(/--+/g, "-");
        elem.target.value = elem.target.value.replace(/^\-|\-{2,}|\-$/g, "");
      });
    });
  };
  userPhoneValidation();

  const userMessageValidation = () => {
    messageInput.addEventListener("input", (elem) => {
      elem.target.value = elem.target.value.replace(/[^а-яА-ЯёЁ\-\s+]/g, "");
    });

    messageInput.addEventListener("blur", (elem) => {
      elem.target.value = elem.target.value.replace(/\s+/g, " ");
      elem.target.value = elem.target.value.replace(/--+/g, "-");
      elem.target.value = elem.target.value.replace(/^\s+|\s{2,}|\s+$/g, "");
      elem.target.value = elem.target.value.replace(/^\-|\-{2,}|\-$/g, "");
      elem.target.value = elem.target.value.replace(
        /( |^)[а-яА-ЯёЁ]/g,
        function (e) {
          return e.toUpperCase();
        }
      );
    });
  };
  userMessageValidation();
};

export default validation;
