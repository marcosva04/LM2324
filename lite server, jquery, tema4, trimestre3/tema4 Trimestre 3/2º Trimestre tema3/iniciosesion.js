function resultado() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    document.getElementById("resultado").innerHTML = "Bienvenido " + username + " con la contraseña " + password;
  }