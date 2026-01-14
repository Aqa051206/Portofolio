const navbar = document.getElementById('nav-links')

const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('active')
})