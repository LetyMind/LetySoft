const header = document.getElementById("header"),
    abrirModal = document.getElementById("abrirModal"),
    barra = document.getElementById("barra"),
    magia = document.getElementById("magia")

let windows = window.innerWidth 

window.addEventListener("scroll", (e)=> 
{
    let position = Math.round(window.scrollY) 

        if (position > 10) 
        {
            header.querySelector("h4").classList.remove("text-dark")
            header.querySelector("h4").classList.add("text-white")
            header.classList.add("opacityON")
            header.classList.remove("opacityOFF")
            barra.classList.replace("my-4","my-3")
            magia.classList.remove("rectangulo")
        }
        else 
        {
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


abrir.addEventListener("click", ()=> 
{
    modal.classList.remove("d-none")
})

cerrar.addEventListener("click", ()=> 
{
    modal.classList.add("d-none")
})


if ( windows < 768 ) 
{
    abrirModal.addEventListener("click", () => 
    {
        modal.classList.remove("d-none")
    })   
}
 





