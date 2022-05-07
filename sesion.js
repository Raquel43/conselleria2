var cabecera = new Headers();
cabecera.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("client_id", "rest-client");
urlencoded.append("username", "hexa");
urlencoded.append("password", "hexa");
urlencoded.append("grant_type", "password");

var opciones = {
  method: 'POST',
  headers: cabecera,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://localhost:8180/auth/realms/GOIB/protocol/openid-connect/token", opciones)
  .then(response => response.text())
  .then((response) => response.json())
  .then((data)=>{
  alert(data.access_token);
  })
  .catch(error => console.log('error', error));



/* var myHeaders = new Headers();
myHeaders.append("Authorization:", "Bearer ")

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


fetch("http://localhost:8180/auth/admin/realms/GOIB/clients/e656b738-a47d-4e2a-80e7-4c03ac884ae3/session-count", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

 */


