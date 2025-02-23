function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }

    //ou podemos somente usar a html.classList.toggle('light') uq fará a mesma ação que o código acima.

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', 'imagens/avatar-sun.png')
    } else {
        img.setAttribute('src','imagens/avatar-lua.png')
    }

}


