const burgerButton = document.querySelector('.mobile-nav-toggle');

const primaryNav = document.querySelector('.primary-nav');

burgerButton.addEventListener('click', event => {
    event.preventDefault();

    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {                       
        primaryNav.setAttribute('data-visible', 'true');

        burgerButton.setAttribute('aria-expanded', 'true');

        manageFocus();
    }
    else {
        primaryNav.setAttribute('data-visible', 'false');

        burgerButton.setAttribute('aria-expanded', 'false');
        
        manageFocus();
    }
})

const burgerBtnMql = window.matchMedia('(max-width: 35em)');

function manageFocus() {
     if (burgerBtnMql.matches) {
        if (burgerButton.getAttribute('aria-expanded') === 'false') {
            primaryNav.querySelectorAll('a').forEach(link => {
                link.setAttribute('tabindex', '-1')
            })
        } else {
            primaryNav.querySelectorAll('a').forEach(link => {
                link.removeAttribute('tabindex');
            })
        };
     } else {
        primaryNav.querySelectorAll('a').forEach(link => {
            link.removeAttribute('tabindex');
        })
     };
}

document.addEventListener('focusin', event => {
    if (burgerBtnMql.matches && burgerButton.getAttribute('aria-expanded') === 'true') {
        
        if (!primaryNav.contains(document.activeElement) && event.target !== burgerButton) {
            primaryNav.setAttribute('data-visible', 'false');

            burgerButton.setAttribute('aria-expanded', 'false');
        
            manageFocus();
        };
    };
});

burgerBtnMql.addEventListener('change', manageFocus);

manageFocus();

