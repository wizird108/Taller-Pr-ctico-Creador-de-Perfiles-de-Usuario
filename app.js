const nombre = prompt("Ingresa tu nombre completo:");
let edad = prompt("Ingresa tu edad:");
const ocupacion = prompt("Ingresa tu ocupación:");

// const: para valores que no vamos a cambiar (el nombre y la ocupación).
// let: para valores que si pueden cambiar (la edad se vuelve a pedir).

edad = prompt("Ingresa de nuevo tu edad para confirmarla:");

// como la edad está declarada con let, podemos guardar un nuevo valor en ella


edad = parseInt(edad);

if (isNaN(edad)) {
    alert("La edad ingresada no es un número válido.");
    throw new Error("Edad no válida");
} else if (edad >= 18) {
    console.log("¡Bienvenido!");
} else {
    alert("Debes ser mayor de 18 años para crear un perfil.");
    throw new Error("Usuario menor de edad");
}


function crearPerfil(nombre, edad, ocupacion) {
     if (nombre === "" || nombre === null) {
        return "Error: el nombre no puede estar vacío.";
    }

    const mensaje = `Hola, ${nombre}. Tienes ${edad} años y eres un/a ${ocupacion}.`;
    return mensaje;
}

const mensajeBienvenida = crearPerfil(nombre, edad, ocupacion);
    console.log(mensajeBienvenida);


const hobbies = [];
for (let i = 0; i < 3; i++) {
    const hobby = prompt("Ingresa el hobby número " + (i + 1) + ":");
    hobbies.push(hobby);
}

hobbies.forEach((hobby) => console.log("Hobby: " + hobby));


const perfilUsuario = {
    nombre: nombre,
    edad: edad,
    ocupacion: ocupacion,
    hobbies: hobbies
};

const contenedor = document.getElementById("perfil-container");

let listaHobbies = "";
perfilUsuario.hobbies.forEach((hobby) => {
    listaHobbies = listaHobbies + `<li>${hobby}</li>`;
});


contenedor.innerHTML = `
    <h2>${perfilUsuario.nombre}</h2>
    <p><strong>Edad:</strong> ${perfilUsuario.edad} años</p>
    <p><strong>Ocupación:</strong> ${perfilUsuario.ocupacion}</p>
    <p><strong>Hobbies:</strong></p>
    <ul>
        ${listaHobbies}
    </ul>
`;

