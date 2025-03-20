const menu = document.querySelector('.menuMobile ul')
const btnOpen = document.getElementById('openMenu')
const btnClose = document.getElementById('closeMenu')
const background = document.querySelector('.background')


const ToggleButton = () => {
    btnOpen.style.display = btnOpen.style.display === 'block' ? 'none' : 'block'
    btnClose.style.display = btnClose.style.display === 'none' ? 'block' : 'none'

    menu.style.display = menu.style.display === 'none' ? menu.style.display = 'flex' : 'none'
   menu.style.display === 'flex' ? background.style.display = 'flex' : background.style.display = 'none'
   menu.style.display === 'flex' ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
}