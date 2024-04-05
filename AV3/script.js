

function validateRegisterForm() {
    const form = document.getElementById("register-form");
    const fullname = form.elements["fullname"].value;
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;

    if (fullname && email && password.length >= 8) {
        alert("Cadastro realizado");
        form.reset();
        return true;
    } else {
        alert("Preencha todos os campos corretamente.");
        return false;
    }
}

function validateLoginForm() {
    const form = document.getElementById("login-form");
    const email = form.elements["loginEmail"].value;
    const password = form.elements["loginPassword"].value;

    if (email === "admin@email.com.br" && password === "#dw1UTFPR#") {
        alert("Usuário autenticado");
        form.reset();
        return false;
    } else {
        alert("Falha na autenticação. Verifique seus dados.");
        return false;
    }
}