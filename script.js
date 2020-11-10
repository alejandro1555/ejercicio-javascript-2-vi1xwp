// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  //Accedemos al elemento span que contiene la clase
  var spanSelected = document.querySelector(".selected");
  //Accedemos al elemento padre li
  var padre = spanSelected.parentNode;
  //Accedemos a los elementos hermanos de li
  var elemento2 = padre.previousSibling.previousSibling;
  var elemento1 = elemento2.previousSibling.previousSibling;
  var elemento4 = padre.nextSibling.nextSibling;
  var elemento5 = elemento4.nextSibling.nextSibling;
  //Accedemos a los elementos span
  var span1 = elemento1.firstChild;
  var span2 = elemento2.firstChild;
  var span4 = elemento4.firstChild;
  var span5 = elemento5.firstChild;
  //Añadimos las clases a los elementos
  span1.classList.add("element-1");
  span2.classList.add("element-2");
  span4.classList.add("element-4");
  span5.classList.add("element-5");
  spanSelected.classList.add("element-3");

  //Accedemis a todos los li y eliminados los elementos li pares.
  var eliminar = document.querySelectorAll("li");
  for (var i = 0; i < eliminar.length; i++) {
    if (i == 2 || i % 2 == 0) console.log();
    else {
      nuevoPadre = eliminar[i].parentNode;
      nuevoPadre.removeChild(eliminar[i]);
    }
  }

  console.log(eliminar.length);

  var elementoLista2 = document.getElementById("list2");

  //Creamoms los elementos list
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");

  //Creamos los botones
  var button1 = document.createElement("button");
  var button2 = document.createElement("button");
  var button3 = document.createElement("button");

  //Añadimos los elementos al html
  li1.appendChild(button1);
  li2.appendChild(button2);
  li3.appendChild(button3);
  elementoLista2.appendChild(li1);
  elementoLista2.appendChild(li2);
  elementoLista2.appendChild(li3);

  //Escribimos texto en los botones
  button1.innerHTML = "texto ejemplo 1";
  button2.innerHTML = "texto ejemplo 2";
  button3.innerHTML = "texto ejemplo 3";

  //Añadimos las clases
  button1.classList.add("element-1");
  button2.classList.add("element-3");
  button3.classList.add("element-5");

  //Añadimos en el boton 3 el atributo disabled
  button3.setAttribute("disabled", "true");

  
}
