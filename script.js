"use strict";

// Variables for the progress bar to change color when clicking "continue"
const continueBtn1 = document.querySelector("[data-field=continueBtn1]");
const continueBtn2 = document.querySelector("[data-field=continueBtn2]");
const continueBtn3 = document.querySelector("[data-field=continueBtn3]");

const progressInfo = document.querySelector("[data-field=progress]");
const progressPay = document.querySelector("[data-field=progress1]");

// variables for changing the form to the next fieldset
const fieldset1 = document.querySelector("#mainForm #fieldset1");
const fieldset2 = document.querySelector("#mainForm #fieldset2");
const fieldset3 = document.querySelector("#mainForm #fieldset3");
const fieldset4 = document.querySelector("#mainForm #fieldset4");

// variables for showing the second product on the product page, after choosing the delivery form
const deliveryChoice1 = document.querySelector("[data-field=deliveryChoice1]");
const deliveryChoice2 = document.querySelector("[data-field=deliveryChoice2]");
const secondProduct = document.querySelector("[data-field=secondProduct]");
const secondProduct2 = document.querySelector("[data-field=secondProduct2]");

// Functions for the progress bar to change color when clicking "continue"
continueBtn1.addEventListener("click", switchFieldset);
continueBtn2.addEventListener("click", switchFieldset);
continueBtn3.addEventListener("click", switchFieldset);

// Using switch statement to change the fieldsets and showing the progress on the info bar
function switchFieldset(event) {
  switch (event.target) {
    case continueBtn1:
      progressInfo.classList.add("active");
      fieldset1.classList.add("hidden");
      fieldset2.classList.remove("hidden");
      break;
    case continueBtn2:
      progressPay.classList.add("active");
      fieldset2.classList.add("hidden");
      fieldset3.classList.remove("hidden");
      break;
    case continueBtn3:
      fieldset3.classList.add("hidden");
      fieldset4.classList.remove("hidden");
      break;
    default:
      console.log("error");
  }
}

// Function for showing the second product when choosing the delivery
deliveryChoice1.addEventListener("click", showProduct);
deliveryChoice2.addEventListener("click", showProduct);

function showProduct(event) {
  if (event.target === deliveryChoice1) {
    secondProduct.classList.toggle("hidden");
  } else if (event.target === deliveryChoice2) {
    secondProduct2.classList.toggle("hidden");
  }
}

// Show the next fieldset
// function nextFieldset(event){

//   if (event.target === continueBtn1) {
//   fieldset1.classList.add("hidden");
// }
// document.continueBtn1.addEventListener("click", function() {
//   continueBtn1.classList.add("hidden");
// });

// Alert first that this is a school project
/*
window.onload = function init(){
    alert("Hi there, please note that this is a school project! It is NOT from the company Volt itself.")
}

// get data and store it in Database
function post (myData){
  fetch("https://allpets-7f82.restdb.io/rest/volt", {
      method: "post",
      body: JSON.stringify(myData),
      headers:     {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c7cef07cac6621685acbaec",
      "cache-control": "no-cache"
}
  })
  .then(res => res.json())
  .then(data =>{
//        console.log(data);
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", e =>{
  e.preventDefault();
  console.log("submitted");
  const addedTask = {
      task: form.elements.task.value,
   //   when: form.elements.time.value
  };
  console.log(addedTask);

  post(addedTask);
}); 

function deleteTask(id){
fetch("https://allpets-7f82.restdb.io/rest/volt" + id, {
method: "delete",
headers: {
  "Content-Type": "application/json; charset=utf-8",
  "x-apikey": "5c7cef07cac6621685acbaec",
  "cache-control": "no-cache"
}
})
.then(res => res.json())
.then(data => {
  console.log(data)
});
} */
