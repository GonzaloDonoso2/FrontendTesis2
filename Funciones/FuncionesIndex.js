let URL = window.location.toString();
let frontendUrl;
let backendUrl;

if (URL === "https://frontendtesis1.herokuapp.com/") {

    frontendUrl = "https://frontendtesis1.herokuapp.com";
    backendUrl = "https://backendtesis1.herokuapp.com";
    sessionStorage.setItem("frontendURL", frontendUrl);
    sessionStorage.setItem("backendURL", backendUrl);

} else {

    frontendUrl = "http://localhost/Prototipo.01";
    backendUrl = "http://localhost/PrototipoServidor.01";
    sessionStorage.setItem("frontendURL", frontendUrl);
    sessionStorage.setItem("backendURL", backendUrl);
}
