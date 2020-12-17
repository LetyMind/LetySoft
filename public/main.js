const header = document.getElementById("header"),
    abrirModal = document.getElementById("abrirModal"),
    barra = document.getElementById("barra"),
    magia = document.getElementById("magia")

let windows = window.innerWidth

window.addEventListener("scroll", (e) => {
    let position = Math.round(window.scrollY)

    if (position > 10) {
        header.querySelector("h4").classList.remove("text-dark")
        header.querySelector("h4").classList.add("text-white")
        header.classList.add("opacityON")
        header.classList.remove("opacityOFF")
        barra.classList.replace("my-4", "my-3")
        magia.classList.remove("rectangulo")
    } else {
        header.querySelector("h4").classList.add("text-dark")
        header.querySelector("h4").classList.remove("text-white")
        header.classList.add("opacityOFF")
        header.classList.remove("opacityON")
        barra.classList.replace("my-3", "my-4")
        magia.classList.add("rectangulo")
    }

})


let abrir = document.getElementById("abrir"),
    modal = document.getElementById("modal"),
    cerrar = document.getElementById("cerrar")


abrir.addEventListener("click", () => {
    modal.classList.remove("d-none")
})

cerrar.addEventListener("click", () => {
    modal.classList.add("d-none")
})


if (windows < 768) {
    abrirModal.addEventListener("click", () => {
        modal.classList.remove("d-none")
    })
}


// Section send Metrics

function obtenerValorParametro(sParametroNombre) {
    var sPaginaURL = window.location.search.substring(1);
    var sURLVariables = sPaginaURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParametro = sURLVariables[i].split('=');
        if (sParametro[0] == sParametroNombre) {
            return sParametro[1];
        }
    }
    return null;
}
let url = new URL('https://metricasletymind.herokuapp.com/soft/metrics?')
let variables = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
let aux = {}
for (let i = 0; i < variables.length; i++) {
    if (obtenerValorParametro(variables[i])) {
        aux[variables[i]] = obtenerValorParametro(variables[i])
    }
}
console.log('aaa', aux)
url.search = new URLSearchParams(aux).toString();
console.log('aaa', url)

fetch(url, {
        method: 'POST',
        mode: 'cors'
    }).then(res => {
        console.info(res)
    })
    .catch(error => {
        console.error(error)
    })