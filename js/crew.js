const crewArr = [
    {
        position: 'commander',
        name: 'Douglas Hurley',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        sourceSet: 'image-douglas-hurley.webp',
        imageSrc: 'image-douglas-hurley.png',
        alt: 'Commander Douglas Hurley'
    },
    {
        position: 'mission specialist',
        name: 'Mark Shuttleworth',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        sourceSet: 'image-mark-shuttleworth.webp',
        imageSrc: 'image-mark-shuttleworth.png',
        alt: 'Mission Specialist Mark Shuttleworth'
    },
    {
        position: 'pilot',
        name: 'Victor Glover',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        sourceSet: 'image-victor-glover.webp',
        imageSrc: 'image-victor-glover.png',
        alt: 'Pilot Victor Glover'
    },
    {
        position: 'flight engineer',
        name: 'Anousheh Ansari',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        sourceSet: 'image-anousheh-ansari.webp',
        imageSrc: 'image-anousheh-ansari.png',
        alt: 'Flight Engineer Anousheh Ansari'
    },
];

const dotButtons = document.querySelector('.dot-indicators').children;

const obj1 = crewArr[0];

let selectedDot = dotButtons[0];

[...dotButtons].forEach(button => {
    button.addEventListener('click', () => {
        if (button === selectedDot) {
            return;
        } else {
            //Style selected dot
            selectedDot.setAttribute('aria-selected', 'false');

            selectedDot = button;

            button.setAttribute('aria-selected', 'true');

            //Get object
            const crewObj = crewArr[button.value - 1];

            //Get and set image
            const sourceSet = document.querySelector('.crew-page-section source');
            
            const image = document.querySelector("[data-element='image']");

            sourceSet.setAttribute('srcset', `../images/crew/${crewObj.sourceSet}`);

            image.setAttribute('src', `../images/crew/${crewObj.imageSrc}`);
            image.setAttribute('alt', `${crewObj.alt}`);

            //Get and set name
            const position = document.querySelector("[data-element='position']");

            const name = document.querySelector("[data-element='name']");

            position.textContent = crewObj.position;

            name.textContent = crewObj.name;

            //Get and set description
            const description = document.querySelector("[data-element='description']");

            description.textContent = crewObj.description;
        }
    })
})
