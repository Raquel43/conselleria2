const contenedor = document.querySelector("#contenedor");

let token="";
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

function obtenerToken(){
fetch("http://127.0.0.1:8180/auth/realms/GOIB/protocol/openid-connect/token", requestOptions)
  .then(response => response.json())
  .then((data)=>{
 console.log(data.access_token);
 token= data.access_token;

  })
  .catch(error => console.log('error', error));
}

let cabecera = new Headers();
console.log('otro token' + token)
cabecera.append(`Authorization`,`Bearer `+token);
cabecera.append("Content-Type", "application/json");

let peticion ={
    method: 'GET',
   headers: new Headers({'Authentication':`Bearer ${token}`,'Content-Type':'application/json'})
};
  
  function cargarDatos(){
    console.log("Este Token "+`Bearer ${token}`);  
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

  function pintarDatos(dato){
      contenedor.innerHTML+=`
      <p>Han iniciado sesion en GOIB-DEFAULT ${dato} usuarios</p>
      `
    
  }