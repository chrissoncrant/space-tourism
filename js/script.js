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

    const isBurgerButtonVisible = burgerBtnMql.matches;
    
    if (isBurgerButtonVisible) {
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

// ####################################
// DESTINATIONS BUTTONS FUNCTION
// ####################################

const destinationsArr = [
    {
        name: 'moon',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,000 km',
        travelTime: '3 days'
    },
    {
        name: 'mars',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travelTime: '9 months'
    },
    {
        name: 'europa',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        travelTime: '3 years'
    },
    {
        name: 'titan',
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        travelTime: '7 years'
    },
]

const destinationTabs = [...document.querySelector('.destination-tabs.tab-list').children];

let initialDestination = destinationTabs[0];

console.log(initialDestination)

destinationTabs.forEach(dest => {
    dest.addEventListener('click', () => {
        if (dest === initialDestination) {
            return;
        } else {
            initialDestination.setAttribute('aria-selected', 'false');

            initialDestination = dest;

            initialDestination.setAttribute('aria-selected', 'true');
        }
        
        const destinationName = dest.textContent.toLowerCase();

        const destinationObject = destinationsArr.filter(dest => dest.name === destinationName)[0];

        console.log(destinationObject)
    })
})