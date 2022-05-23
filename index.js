const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

function esconde() {
    menu.classList.toggle('menu-lateral--ativo')
}

botaoMenu.addEventListener('mouseover', () => {
    botaoMenu.style.cursor = 'pointer'
})

const inicio = document.querySelector('a.menu-lateral__link--inicio')
const videos = document.querySelector('a.menu-lateral__link--videos')
const picos = document.querySelector('a.menu-lateral__link--picos')
const integrantes = document.querySelector('a.menu-lateral__link--integrantes')
const camisas = document.querySelector('a.menu-lateral__link--camisas')
const pinturas = document.querySelector('a.menu-lateral__link--pinturas')

function ini() {
    videos.classList.remove('menu-lateral__link--ativo')
    picos.classList.remove('menu-lateral__link--ativo')
    integrantes.classList.remove('menu-lateral__link--ativo')
    camisas.classList.remove('menu-lateral__link--ativo')
    pinturas.classList.remove('menu-lateral__link--ativo')

    inicio.classList.add('menu-lateral__link--ativo')
}

function vid() {
    inicio.classList.remove('menu-lateral__link--ativo')
    picos.classList.remove('menu-lateral__link--ativo')
    integrantes.classList.remove('menu-lateral__link--ativo')
    camisas.classList.remove('menu-lateral__link--ativo')
    pinturas.classList.remove('menu-lateral__link--ativo')

    videos.classList.add('menu-lateral__link--ativo')
}

function pic() {
    videos.classList.remove('menu-lateral__link--ativo')
    inicio.classList.remove('menu-lateral__link--ativo')
    integrantes.classList.remove('menu-lateral__link--ativo')
    camisas.classList.remove('menu-lateral__link--ativo')
    pinturas.classList.remove('menu-lateral__link--ativo')

    picos.classList.add('menu-lateral__link--ativo')
}

function int() {
    videos.classList.remove('menu-lateral__link--ativo')
    picos.classList.remove('menu-lateral__link--ativo')
    inicio.classList.remove('menu-lateral__link--ativo')
    camisas.classList.remove('menu-lateral__link--ativo')
    pinturas.classList.remove('menu-lateral__link--ativo')

    integrantes.classList.add('menu-lateral__link--ativo')
}

function cam() {
    videos.classList.remove('menu-lateral__link--ativo')
    picos.classList.remove('menu-lateral__link--ativo')
    integrantes.classList.remove('menu-lateral__link--ativo')
    inicio.classList.remove('menu-lateral__link--ativo')
    pinturas.classList.remove('menu-lateral__link--ativo')

    camisas.classList.add('menu-lateral__link--ativo')
}

function pin() {
    videos.classList.remove('menu-lateral__link--ativo')
    picos.classList.remove('menu-lateral__link--ativo')
    integrantes.classList.remove('menu-lateral__link--ativo')
    camisas.classList.remove('menu-lateral__link--ativo')
    inicio.classList.remove('menu-lateral__link--ativo')

    pinturas.classList.add('menu-lateral__link--ativo')
}