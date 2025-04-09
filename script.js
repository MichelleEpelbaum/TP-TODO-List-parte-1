let tareas = [];

function AgregarTarea() {
  let tarea = document.getElementById("tarea").value;
  localStorage.setItem(Date.now(), tarea);

  tareas.push(tarea);

  console.log(tareas);

  let lista = document.getElementById("lista");
  const newDiv = document.createElement("li");
  newDiv.classList.add("tarea");
  //crear taag check
  const check = document.createElement("input");

  //agregar el atributo de tipo con valor checkbox

  check.setAttribute("type", "checkbox");
  newDiv.appendChild(check);

  const newContent = document.createTextNode(tarea);
  newDiv.appendChild(newContent);
  lista.appendChild(newDiv);
}