
let token = "";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("client_id", "rest-client");
urlencoded.append("username", "hexa");
urlencoded.append("password", "hexa");
urlencoded.append("grant_type", "password");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};


fetch("http://127.0.0.1:8180/auth/realms/GOIB/protocol/openid-connect/token", requestOptions)
  .then(response => response.json())
  .then((data)=>{
 console.log(data.access_token);
  token = data.access_token;
  })
  .catch(error => console.log('error', error));

  /* let peticion ={
    method: 'GET',
    headers: {
        "Authorization":`bearer ${token}`,
        },
    
      };
  
  function cargarDatos(){
  fetch("http://127.0.0.1:8180/auth/admin/realms/GOIB/clients/e656b738-a47d-4e2a-80e7-4c03ac884ae3/users", peticion)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  } */
    