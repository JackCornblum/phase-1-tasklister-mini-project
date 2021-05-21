document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", (e) =>{
    e.preventDefault();
  
    let eventObj = {description: e.target["new-task-description"].value}
    appendList(eventObj);

  })

  


});

let test = {description: "value here"};

function appendList(object) {
  let li = document.createElement("li");
  let ul = document.querySelector("#tasks");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x"
  deleteBtn.className = "delete-button"
  

  li.className = "task-list";

  li.textContent = object.description;
  li.append(deleteBtn);

  ul.append(li);
  console.log(ul);
}

document.querySelector(".delete-button").addEventListener("click", (e) => {
  document.querySelector(".task-list").remove();
})


