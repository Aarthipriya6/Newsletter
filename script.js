"use strict";
//
const form = document.querySelector(".form");
const emailAd = document.querySelector(".email_ad");
const email = document.querySelector(".email");
const err = document.querySelector(".email-error");
const btn = document.querySelector(".sub_btn");
const sbtn = document.querySelector(".success-btn");
//
const section = document.querySelector(".section");
const success = document.querySelector(".success");

function validEmail() {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    email.style.border = "red";
    email.style.backgroundColor = "#ffbbbb";
    err.classList.remove("hide");
    return false;
  }

  err.classList.add("hide");
  email.style.backgroundColor = "#fff";
  email.style.border = " #d3d3d3";
  return true;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  section.classList.add("hide");
  success.classList.remove("hide");
});
sbtn.addEventListener("click", function (e) {
  e.preventDefault();
  section.classList.remove("hide");
  success.classList.add("hide");
});
