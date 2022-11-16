const crewArr = [
    {
        position: 'commander',
        name: 'Douglas Hurley',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        imageSrc: 'image-douglas-hurley.webp'
    },
    {
        position: 'mission specialist',
        name: 'Mark Shuttleworth',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        imageSrc: 'image-mark-shuttleworth.webp'
    },
    {
        position: 'pilot',
        name: 'Victor Glover',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        imageSrc: 'image-victor-glover.webp'
    },
    {
        position: 'flight engineer',
        name: 'Anousheh Ansari',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        imageSrc: 'image-anousheh-ansari.webp'
    },
];

const dotButtons = document.querySelector('.dot-indicators').children;

const obj1 = crewArr[0];

const span = document.createElement('span')
const position = document.createTextNode('Commander');
const h2 = document.createElement('h2');
const name = document.createTextNode("Gary Jones");
span.appendChild(position);
h2.appendChild(span);
h2.appendChild(name);

console.log(h2)

let initialDot = dotButtons[0];

[...dotButtons].forEach(button => {
    button.addEventListener('click', () => {
        if (button === initialDot) {
            return;
        } else {
            initialDot.setAttribute('aria-selected', 'false');

            initialDot = button;

            button.setAttribute('aria-selected', 'true');

            const obj = crewArr[button.value - 1];

            console.log(obj)
        }
    })
})
