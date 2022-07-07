"use strict";
import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validation from "./modules/validation";
import tabs from "./modules/tabs";
import dots from "./modules/dots";
import slider from "./modules/slider";
import calculator from "./modules/calculator";
import sendForm from "./modules/sendForm";

timer("11 july 2022");
menu();
modal();
validation();
tabs();
dots();
slider();
calculator();
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({ formId: "form2" });
sendForm({ formId: "form3" });
