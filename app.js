let inp = document.querySelector("#task");
let addBtn = document.querySelector("#add");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function () {
  if (inp.value.trim()) {
    let task = document.createElement("li");
    task.innerText = inp.value;

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.classList.add("check");
    task.prepend(check);

    let del = document.createElement("i");
    del.classList.add("fa-solid", "fa-trash");
    task.append(del);

    ul.appendChild(task);
    inp.value = "";
  }
});

ul.addEventListener("click", function (e) {
  if (e.target.nodeName === "I") {
    let listItem = e.target.parentElement;
    listItem.remove();
  } else if (e.target.nodeName == "INPUT") {
    let listItem = e.target.parentElement;
    if (e.target.checked) {
      listItem.classList.add("done");
    } else {
      listItem.classList.remove("done");
    }
  }
});
