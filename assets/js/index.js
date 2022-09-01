/*Menu humburger*/

const el = document.querySelector('.menu-hamburger-icon');

el.addEventListener('click',()=>{

    var menuItems = document.querySelector('.menuHamburger-items');
    if (menuItems.classList.contains('show')) {
        menuItems.classList.add('hidde')
        menuItems.classList.remove('show')
    }else {
        menuItems.classList.add('show')
        menuItems.classList.remove('hidde')
    }
});

/*Transição dos elementos quando eles aparecem na tela*/

const observer = new IntersectionObserver( entries => {
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('init-hidden-off')
        }
    })
}, {
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})