/* abre e fecha menu lateral mobile*/

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
menuMobile.classList.contains ("bi-list")
? menuMobile.classList.replace ("bi-list", "bi-x")
:menuMobile.classList.replace ("bi-x", "bi-list");
body.classList.toggle("menu-nav-active");
})


/* fecha o menu quando clicar em algum item e muda o icone para list */


const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
  item.addEventListener ("click", () =>{
    if (body.classList.contains ("menu-nav-active")) {
    body.classList.remove("menu-nav-active") 
    menuMobile.classList.replace("bi-x", "bi-list")
    }
  })
})

// Animar todos os itens que tiverem atribuido o data-anime


const item = document.querySelectorAll("[data-anime]")

const animeScroll = () => {
const windowTop = window.pageYOffset + window.innerHeight * 0.75;
console.log()

item.forEach(element => {
  if (windowTop > element.offsetTop){
  element.classList.add('animate');

} else {
  element.classList.remove('animate')
}
})
}

animeScroll()

window.addEventListener("scroll", ()=>{
  animeScroll();
})


//ativar carregamento no botao de enviar formulario para

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", ()=>{
btnEnviarLoader.style.display = "block";
btnEnviar.style.display = "none";
})