let tareas=[];

function AgregarTarea()
{
    let tarea=document.getElementById("tarea").value


    /* local storage*/




    tareas.push(tarea)


    console.log(tareas)



    let lista = document.getElementById("lista")
    

    const newDiv = document.createElement("li");

    // and give it some content
    const newContent = document.createTextNode(tarea);
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    lista.appendChild(newDiv)



}