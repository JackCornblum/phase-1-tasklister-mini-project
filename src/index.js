document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", (e) =>{
    e.preventDefault();
  
    let eventObj = {
      description: e.target["new-task-description"].value,
      date: e.target["due-date"].value,
      priority: e.target["priority"].value
    }
    appendList(eventObj);


  })

  


});

let test = {description: "value here"};

function appendList(object) {
  let li = document.createElement("li");
  let ul = document.querySelector("#tasks");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x"
  // deleteBtn.className = "delete-button"
  // deleteBtn.id = `${object.description}Btn`
  deleteBtn.addEventListener("click", (e) =>{
    console.log(e)
    e.target.parentElement.remove()
  })
  li.style.color = 'white'
  if (object.priority === "red"){
    li.style.background = 'red'
  } else if (object.priority === "yellow"){
    li.style.background = 'yellow'
    li.style.color = 'black'
  } else {
    li.style.background = 'green'
  }

  li.className = "task-list";
  li.id = `${object.description}Id`

  li.textContent = object.description + ": " + object.date;
  li.append(deleteBtn);

  ul.append(li);
  console.log(ul);
}




