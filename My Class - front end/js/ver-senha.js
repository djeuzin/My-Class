function mostrarSenha() {
  var x = document.getElementById("senha");
  var y = document.getElementById("olho");
  if (x.type == "password") {
    x.type = "text";
    y.title = "Ocultar senha";
    y.className = "fas fa-eye-slash olho";
  } else {
    x.type = "password";
    y.title = "Mostrar senha";
    y.className = "fas fa-eye olho";
  }
}