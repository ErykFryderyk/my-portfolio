const browserScreenPosition = window.innerHeight;

const main = ()=>{
    prepareDOMElements();
    prepareDOMEvents();
}   

const prepareDOMElements = () => {
    hamburger = document.querySelector('.hamburger');
    mobileNav = document.querySelector('.mobile-nav-menu');
    bodyOverly = document.querySelector('.mobile-body-overly');
    body = document.getElementById('home');
    header = document.querySelector('.header-section');
    appearElements = document.querySelectorAll('.appear-animation');
    opacityElements = document.querySelectorAll('.opacity-animation');
    clickMobileLink = document.querySelectorAll('.mobile-nav-menu__link');
}


const prepareDOMEvents = () => {
    hamburger.addEventListener('click', mobileMenu);
    bodyOverly.addEventListener('click', closeMenu);
    window.addEventListener('scroll', headerDarken);
    window.addEventListener('scroll', scrollAppear);
    window.addEventListener('scroll', scrollOpacity);
}



const mobileMenu = () => {
    if(!hamburger.classList.contains('hamburger--active')){
        openMenu();
    }else{
        closeMenu();
    }
}

const openMenu = () => {
    hamburger.classList.add('hamburger--active');
    mobileNav.classList.add('mobile-nav-menu--active');
    bodyOverly.style.display = 'block';
    body.classList.add('mobile-nav-active');
}

const closeMenu = () => {
    hamburger.classList.remove('hamburger--active');
    mobileNav.classList.remove('mobile-nav-menu--active');
    bodyOverly.style.display = 'none';
    body.classList.remove('mobile-nav-active');
}

const headerDarken = () => {
    if(body.getBoundingClientRect().top <= -100){
        header.classList.add('header-scroll--active');
    }else{
        header.classList.remove('header-scroll--active');
    }
}

const scrollAppear = () => {
    appearElements.forEach(el => {
        const appearElementTop = el.getBoundingClientRect().top;
        
        if (appearElementTop < browserScreenPosition) {
            el.classList.add('appear-animation--active');
        } else if (appearElementTop > browserScreenPosition) {
            el.classList.remove('appear-animation--active');
        }
    })

}

const scrollOpacity = () => {
    opacityElements.forEach(el => {
        const opacityElementTop = el.getBoundingClientRect().top;

        if (opacityElementTop < browserScreenPosition) {
            el.classList.add('opacity-animation--active');
        } else if (opacityElementTop > browserScreenPosition) {
            el.classList.remove('opacity-animation--active');
        }
    })

}


window.addEventListener('DOMContentLoaded', main);
