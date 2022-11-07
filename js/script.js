const burgerButton = document.querySelector('.mobile-nav-toggle');

const primaryNav = document.querySelector('.primary-nav');

burgerButton.addEventListener('click', event => {
    event.preventDefault();

    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');

        burgerButton.setAttribute('aria-expanded', 'true');
    }
    else {
        primaryNav.setAttribute('data-visible', 'false');

        burgerButton.setAttribute('aria-expanded', 'false');
    }
})