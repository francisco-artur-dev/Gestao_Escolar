const passe = document.getElementById("pass");
const user = document.getElementById("user");

function login() {
    const userValue = user.value.trim().toLowerCase(); // tira espaços e normaliza
    const passeValue = passe.value;

    // Lista de usuários válidos
    const validUsers = ["admin", "teacher", "student", "parent"];

    // Verifica se o usuário é válido e a senha está correta
    if (validUsers.includes(userValue) && passeValue === "1234") {
        window.location.href = "indexes/resposta.html";
        return false;
    } else {
        alert("Usuário ou senha incorretos.");
        return false;
    }

}










