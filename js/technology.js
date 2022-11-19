const technologyArr = [
    {
        tech: "launch vehicle",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imageSrc: {
            landscape: 'image-launch-vehicle-landscape.jpg',
            portrait: 'image-launch-vehicle-portrait.jpg'
        },
    },
    {
        tech: "spaceport",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        imageSrc: {
            landscape: 'image-spaceport-landscape.jpg',
            portrait: 'image-spaceport-portrait.jpg'
        },
    },
    {
        tech: "space capsule",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imageSrc: {
            landscape: 'image-space-capsule-landscape.jpg',
            portrait: 'image-space-capsule-portrait.jpg'
        },
    },
]

const tabs = document.querySelector('.numbered-indicators').children;

let selectedTab = tabs[0];

const imageMql = window.matchMedia('(min-width: 45em)');

const image = document.querySelector('.technology-page-section img');

//Load portrait if desktop
if (imageMql.matches) {
    image.setAttribute('src', '../images/technology/image-launch-vehicle-portrait.jpg');
}

function setImageOrientation() {
    const activeTab = document.querySelector('[aria-selected="true"]');

    const obj = technologyArr[activeTab.value - 1];

    if (imageMql.matches) {
        image.setAttribute('src',`../images/technology/${obj.imageSrc.portrait}`)
    } else {
        image.setAttribute('src',`../images/technology/${obj.imageSrc.landscape}`)
    }
}

imageMql.addEventListener('change', setImageOrientation);


[...tabs].forEach(tab => {
    tab.addEventListener('click', () => {
        if (selectedTab === tab) {
            return;
        } else {
            //Get Tech Object
            const techObj = technologyArr[tab.value - 1];

            //Update styling
            selectedTab.setAttribute('aria-selected', 'false');

            selectedTab = tab;

            selectedTab.setAttribute('aria-selected', 'true');

            //Update Image
            setImageOrientation();

            //Update Title
            const title = document.querySelector('[data-element="tech"');

            title.textContent = techObj.tech;

            //Update Description
            const description = document.querySelector('[data-element="description"');

            description.textContent = techObj.description;
        }
    })
})