
document.addEventListener("DOMContentLoaded", ()=>{


    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event)=>{
        event.preventDefault()

        const {email, password}= getDatosFormulario();

        const esValido = validarPassword(password) && validarEmail(email);

        esValido ? manejarExito() : manejarError();
    });


});



const getDatosFormulario = ()=>{

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();;

    return {email, password};
};



const validarPassword = (password)=>{

    //const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // return regex.test(password);
    
    //const regexProfe = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&])(?=.[a-zA-Z]).{8}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if(passwordRegex.test(password)){
        console.log("true en password");
    }else{
        console.log("false en password");
    }

   
    return passwordRegex.test(password);
    //return true;

};

const validarEmail = (email)=>{

    // Expresión regular para validar direcciones de correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el correo electrónico coincide con la expresión regular
    return regex.test(email);

};

/*
const validarPassword = (password)=>
/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&])(?=.[a-zA-Z]).{8,8}$/.test(password);
*/


const manejarExito = ()=>{

    alert("Inicio de sesión exitoso");
    limpiarCamposTexto();

};


const manejarError = ()=>{

    alert("Error al iniciar sesión");

};



const limpiarCamposTexto = () => {

    const camposTexto = document.querySelectorAll('#formulario input[type="text"], #formulario input[type="email"], #formulario input[type="password"]');
    
    camposTexto.forEach(campo => {
        campo.value = '';
    });
};



/* Registro usuario */


document.addEventListener("DOMContentLoaded", ()=>{


    const formularioRegistro = document.getElementById("formularioRegistro");

    

    formularioRegistro.addEventListener("submit", (event)=>{
        event.preventDefault()

        console.log("hola registro");

        const {nombre, apellidos, fechaNacimiento, genero, email, password}= getDatosFormularioRegitro();

        console.log(nombre, apellidos, fechaNacimiento, genero, email, password);

        const esValido = validarNombre(nombre) && validarApellidos(apellidos) && validarFechaNacimiento(fechaNacimiento) && validarGenero(genero)  && validarPassword(password) && validarEmail(email);

        esValido ? manejarExito() : manejarError();
    });

});


const getDatosFormularioRegitro = ()=>{

    const nombre = document.getElementById("nombre").value.trim();

    const apellidos = document.getElementById("apellidos").value.trim();


    const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();

    const genero = document.getElementById("genero").value.trim();

    const email = document.getElementById("emailRegistro").value.trim();

    const password = document.getElementById("passwordRegistro").value.trim();

    return {nombre, apellidos, fechaNacimiento, genero, email, password};
};


const validarNombre = (nombre)=>{
    const regex = /^[a-zA-Z]+$/;
    if(regex.test(nombre)){
        console.log("true en nombre");
    }else{
        console.log("false en nombre");
    }
    return regex.test(nombre);
  
};


const validarApellidos = (apellidos)=>{
   
    const regex = /^[a-zA-Z]+$/;

    if(regex.test(apellidos)){
        console.log("true en apellidos");
    }else{
        console.log("false");
    }

    return regex.test(apellidos);

};


const validarFechaNacimiento = (fechaNacimiento)=>{

    
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    
    if(regex.test(fechaNacimiento)){
        console.log("true en fecha");
    }else{
        console.log("false en fecha");
    }

    return regex.test(fechaNacimiento);
 

};


    
const validarGenero = (genero) => {
        const regex = /^(Masculino|Femenino)$/i;
        if(regex.test(genero)){
            console.log("true en genero");
        }else{
            console.log("False en genero");
        }
        return regex.test(genero);
};




