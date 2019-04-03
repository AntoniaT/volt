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

// Variables for the progress bar to go to the page back when clicking "go back"
const goBackBtn1 = document.querySelector("[data-field=goBackBtn1]");
const goBackBtn2 = document.querySelector("[data-field=goBackBtn2]");

const gobackfieldset1 = document.querySelector("#mainForm #goBackBtn1");
const gobackfieldset2 = document.querySelector("#mainForm #goBackBtn2");

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

// Using switch statement to go back to the previous page - not working yet
// function previousFieldset(event) {
//   switch (event.target) {
//     case gobackfieldset1:
//       fieldset1.classList.add("hidden");
//       fieldset2.classList.remove("hidden");
//       break;
//     case continueBtn2:
//       progressPay.classList.add("active");
//       fieldset2.classList.add("hidden");
//       fieldset3.classList.remove("hidden");
//       break;
//     default:
//       console.log("error");
//   }
// }

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
*/
// calculate prices
/*
const chargerTotal = document.querySelector
let chargerPrice = 179;
let chargerValue = document.querySelector("[data-field=servicePcsInput]").value;

let chargerPcs = document.querySelector("[data-field=servicePcsInput]");
chargerPcs.onchange = function  calculatePrices(){
  let SumCharger = chargerPrice * chargerValue;

  console.log(SumCharger);
}
*/
// get data and store it in Database
const inputFieldCharger = document.querySelector("[data-field=inputCharger]");
const submitLast = document.querySelector("[data-field=continueBtn3]");


function get(){
  fetch("https://allpets-7f82.restdb.io/rest/volt", {
  method: "get",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "5c7cef07cac6621685acbaec",
    "cache-control": "no-cache"
  }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  //  data.forEach(showTasks);
  });
  }

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
  //      console.log(data);
  });
}
// take as submit button only the last "BUY" button to add it all in one collection
submitLast.addEventListener("click", postDataToBase);
function postDataToBase(e){
  console.log("submitted");
  const addedPersonData = {
      service: fieldset1.elements.servicePcs.value,
      charger: fieldset1.elements.chargerPcs.value,
      firstname: fieldset2.elements.fname.value,
      lastname: fieldset2.elements.lname.value,
      email: fieldset2.elements.email.value,
      country: fieldset2.elements.country.value,
      phone: fieldset2.elements.phone.value,
      password: fieldset2.elements.password.value,
      single: fieldset2.elements.purchaseMode.value,
      group: fieldset2.elements.purchaseMode.value,
      cardnumber: fieldset3.elements.cardnumber.value,
      cardholder: fieldset3.elements.cardholder.value,
      expiry_date: fieldset3.elements.expirydate.value,
      secure_code: fieldset3.elements.securecode.value
  };
  console.log(addedPersonData);

  post(addedPersonData);
}; 

