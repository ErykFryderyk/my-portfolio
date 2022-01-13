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
    boxLanguage = document.querySelector('.language-box');
    contentElements = document.querySelectorAll('.text-skill');
    appearElements = document.querySelectorAll('.appear-animation');
    opacityElements = document.querySelectorAll('.opacity-animation');
    clickMobileLink = document.querySelectorAll('.mobile-nav-menu__link');
    sections = document.querySelectorAll('section');
    navLinks = document.querySelectorAll('[data-navlink]');
    navMenuLinks = document.querySelectorAll('nav-menu__link');
}


const prepareDOMEvents = () => {
    window.addEventListener('scroll', headerDarken);
    window.addEventListener('scroll', scrollAppear);
    window.addEventListener('scroll', scrollOpacity);
    window.addEventListener('scroll', HighlightNavOnScroll);
        
    hamburger.addEventListener('click', mobileMenu);
    bodyOverly.addEventListener('click', closeMenu);
    boxLanguage.addEventListener('click', e => contentLanguageShow(e));
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
        } 
    })

}

const scrollOpacity = () => {
    opacityElements.forEach(el => {
        const opacityElementTop = el.getBoundingClientRect().top;

        if (opacityElementTop < browserScreenPosition) {
            el.classList.add('opacity-animation--active');
        }
    })

}
const HighlightNavOnScroll = () => {
    let current = '';
    const browserScreenHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionID = section.getAttribute('id');
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < (browserScreenHeight / 2)){
            current = sectionID;
        }
    })

    navLinks.forEach(link => {
        link.classList.remove('navigator__item--active');
        
        if (link.classList.contains(current)){
            link.classList.add('navigator__item--active')
        } 
    })
}


// test function
const contentLanguageShow = (e) => {
    const attribute = e.target.getAttribute('href');

    if(attribute === "#html"){
        contentElements.forEach(element => {
            element.classList.add('content--hidden');
        });
        contentElements[0].classList.remove('content--hidden');

    } else if(attribute === "#css"){
        contentElements.forEach(element => {
            element.classList.add('content--hidden');
        });
        contentElements[1].classList.remove('content--hidden');

    } else if (attribute === "#javascript") {
        contentElements.forEach(element => {
            element.classList.add('content--hidden');
        });
        contentElements[2].classList.remove('content--hidden');

    } else if (attribute === "#php") {
        contentElements.forEach(element => {
            element.classList.add('content--hidden');
        });
        contentElements[3].classList.remove('content--hidden');

    } else if (attribute === "#mysql") {
        contentElements.forEach(element => {
            element.classList.add('content--hidden');
        });
        contentElements[4].classList.remove('content--hidden');

    } else if (attribute === "#jquery") {
        contentElements.forEach(element => {
            element.classList.add('content--hidden');
        });
        contentElements[5].classList.remove('content--hidden');
        
    }
}



window.addEventListener('DOMContentLoaded', main);
