function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    // pegar a tag img
    const image = document.querySelector("#profile img");

    // substituir a imagem

    if (html.classList.contains('light')) {
        // se tiver light mode, adicionar imagem light
        image.setAttribute("src", './assets/avatar-light.png');
    } else {
        // se tiver sem light mode, manter a imagem padrão
        image.setAttribute("src", './assets/avatar-dark.png');
        
    }

    
}


