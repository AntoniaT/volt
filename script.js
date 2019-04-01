"use strict"



// Alert first that this is a school project

window.onload = function init(){
    alert("Hi there, please note that this is a school project! It is NOT from the company Volt itself.")
}
/*
// now I take "myTask" as an argument to make this function reusable, so that "myTask" can be
// filled in by any input
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