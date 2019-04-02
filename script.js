"use strict"

// Variables for the progress bar to change color when clicking "continue"
const continueBtn1 = document.querySelector("[data-field=continueBtn1]");
const continueBtn2 = document.querySelector("[data-field=continueBtn2]");
const continueBtn3 = document.querySelector("[data-field=continueBtn3]");

const progressInfo = document.querySelector("[data-field=progress]");
const progressPay = document.querySelector("[data-field=progress1]");

// variables for changing the form to the next fieldset
const fieldset1 = document.querySelector("[data-field=fieldset2]");
const fieldset2 = document.querySelector("[data-field=fieldset2]");
const fieldset3 = document.querySelector("[data-field=fieldset3]");
const fieldset4 = document.querySelector("[data-field=fieldset4]");

// variables for showing the second product on the product page, after choosing the delivery form
const deliveryChoice1 = document.querySelector("[data-field=deliveryChoice1]");
const deliveryChoice2 = document.querySelector("[data-field=deliveryChoice2]");
const secondProduct = document.querySelector("[data-field=secondProduct]");
const secondProduct2 = document.querySelector("[data-field=secondProduct2]");

// Functions for the progress bar to change color when clicking "continue"
continueBtn1.addEventListener("click", animateProgressBar);
continueBtn2.addEventListener("click", animateProgressBar);
continueBtn3.addEventListener("click", animateProgressBar);

function animateProgressBar(event){
  if(event.target === continueBtn1){
  progressInfo.classList.add("active");
  //fieldset1.classList.add("hidden");  not working yet
  console.log("working!");
}else if(event.target === continueBtn2){
  progressPay.classList.add("active");
  
}};

// Function for showing the second product when choosing the delivery 
deliveryChoice1.addEventListener("click", showProduct);
deliveryChoice2.addEventListener("click", showProduct);

function showProduct(event){
  if(event.target === deliveryChoice1){
  secondProduct.classList.remove("hidden");
}else if(event.target === deliveryChoice2){
  secondProduct2.classList.remove("hidden");
}};

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