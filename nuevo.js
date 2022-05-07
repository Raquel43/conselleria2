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
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

