const contenedor = document.querySelector("#contenedor");
//Ejecutamos la función de obtener el Token al cargar la página:
window.onload = obtenerToken;
//Variable para guardar el token generado en la función obtenerToken:
let token="";
//Contenido de la cabecera de la petición Post 
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("client_id", "rest-client");
urlencoded.append("username", "hexa");
urlencoded.append("password", "hexa");
urlencoded.append("grant_type", "password");

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};
//Función que me obtiene un Token de la API a partir de un endpoint mediante una petición asincrona
function obtenerToken(){
fetch("http://127.0.0.1:8180/auth/realms/GOIB/protocol/openid-connect/token", requestOptions)
  .then(response => response.json())
  .then((data)=>{
  token= data.access_token;
 cargarDatos();

  })
  .catch(error => console.log('error', error));
}

//Función que me obtiene los datos de sesiones abiertas del cliente GOIB-DEFAULT
  function cargarDatos(){
      fetch("http://127.0.0.1:8180/auth/admin/realms/GOIB/clients/e656b738-a47d-4e2a-80e7-4c03ac884ae3/session-count", {
        method: 'GET',
        headers: new Headers({'Authorization':"bearer "+token,'Content-Type':'application/json'}) 
    })
    .then(response => response.json())
    .then((data)=>{
        pintarDatos(data.count);
        })
    .catch(error => console.log('error', error));
  }

  //Función que hace que se muestre por pantalla los datos obtenidos de la función anterior
  function pintarDatos(dato){
      contenedor.innerHTML = "";
      contenedor.innerHTML+=`
      <p>Han iniciado sesion en GOIB-DEFAULT ${dato} usuarios</p>
      `
    
  }

  $(document).ready(function(){
    // indicamos que se ejecuta la funcion cada 5 minutos (Que es cuando expira el token)
    setInterval(clickbutton,300000);
    function clickbutton(){
        // Ejecutamos la función para obtener el Token:
        obtenerToken();
        //$("#action-button").click();
        console.log("Token recargado");  //Debugger
    }
});

$(document).ready(function(){
    // indicamos que se ejecuta la funcion cada 5 segundos
    setInterval(recargar,5000);
    function recargar(){
        // Ejecutamos la función para obtener el Token:
       cargarDatos();
        //$("#action-button").click();
           console.log("Aqui llegan los datos");  //Debugger
    }
});