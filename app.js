// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    const inputNombre = document.getElementById("amigo");
    const btnAgregar = document.querySelector(".button-add");
    const listaNombres = document.getElementById("listaAmigos");
    const btnSortear = document.querySelector(".button-draw");
    const resultado = document.getElementById("resultado");
    
    let nombres = [];

    btnAgregar.addEventListener("click", function () {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Ingresa un nombre válido.");
            return;
        }
        
        nombres.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    });

    function actualizarLista() {
        listaNombres.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaNombres.appendChild(li);
        });
    }

    btnSortear.addEventListener("click", function () {
        if (nombres.length === 0) {
            alert("Agrega un nombre para realizar el sorteo.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        resultado.innerHTML = `<li> El amigo secreto es: <strong>${nombres[indiceAleatorio]}</strong> 🎉</li>`;
    });
});
