let contactoAmapola = document.getElementById("contactos");
contactoAmapola.addEventListener("submit", validarContactos);

function validarContactos(e){
 e.preventDefault();
 let contactos = e.target
    
    console.log(contactos.children[0].value);
    console.log(contactos.children[1].value);
}