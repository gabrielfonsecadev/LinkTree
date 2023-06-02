function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("header>img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "assets/profile-light.png");
        img.setAttribute("alt", "Foto de perfil Gabriel Fonseca com fundo claro e roupa branca");
    }
    else {
        img.setAttribute("src", "assets/IMG_6180.png");
        img.setAttribute("alt", "Foto de perfil Gabriel Fonseca com fundo escuro e roupa preta");
    }
}