let tareas = [];

function AgregarTarea() {
  let tarea = document.getElementById("tarea").value;
  //localStorage.setItem(Date.now(), tarea);

  tareas.push(tarea);

  console.log(tareas);

  let lista = document.getElementById("lista");
  const newDiv = document.createElement("li");
  newDiv.classList.add("tarea");
  newDiv.id=tarea
  //crear taag check
  const check = document.createElement("input");

  //agregar el atributo de tipo con valor checkbox

  check.setAttribute("type", "checkbox");
  newDiv.appendChild(check);

  const newContent = document.createTextNode(tarea);
  newDiv.appendChild(newContent);
  lista.appendChild(newDiv);
}
check.addEventListener('click', function() {
  if (check.checked) {
    //let IDtarea=checkbox.id
    //console.log(IDtarea)
    //let tarea=document.getElementById(IDtarea)
      newDiv.style.textDecoration = 'line-through';
  } else {
    newDiv.style.textDecoration = 'none';
  }
})
// checkbox (clickeado) .id
//get elemento x id = nombre tarea  -- este elemento es el checkbox
// if elemento.checked
// elemento.style = tachado
  
