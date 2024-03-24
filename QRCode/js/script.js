const card = document.querySelector('#qr');
const front = document.querySelector('#qrc');

card.addEventListener('mouseenter', () => {
    front.classList.add('revew')
    if(front.classList.contains('front') && front.classList.contains('revew')) {
        front.src = './icon/perfil.jpg';
    }
});

card.addEventListener('click', () => {

    if(front.classList.contains('front') && front.classList.contains('revew')) {
        front.classList.remove('revew')
        front.src = './icon/qrcode.png';
    }
});

const main = document.querySelector('main');
const title = document.querySelector('#desc h1');

const cores = [
    'red', 'orange', 'yellow', 'green', 'blue', 'purple',
    'cyan', 'magenta', 'lime', 'pink', 'teal', 'lavender',
    'brown', 'maroon', 'navy', 'olive', 'indigo', 'tan',
    'firebrick', 'darkorange', 'gold', 'forestgreen', 'royalblue',
    'darkviolet', 'slategray', 'crimson', 'sienna', 'steelblue',
    'darkslateblue', 'tomato', 'chocolate', 'seagreen', 'dodgerblue',
    'orchid', 'peru', 'rosybrown', 'darkkhaki', 'cornflowerblue',
    'darkred', 'salmon', 'greenyellow', 'turquoise', 'mediumslateblue',
    'darkgoldenrod', 'mediumorchid', 'midnightblue', 'darkorchid', 'saddlebrown',
    'darkseagreen', 'skyblue', 'cadetblue', 'darkcyan', 'darkolivegreen',
    'darkslategray', 'indianred', 'goldenrod', 'mediumseagreen', 'lightslategray'
];


const mudacor = () => {
    let corselect = Math.floor(Math.random(cores) * cores.length);
    main.style.border = `2px ${cores[corselect]} solid`;
    main.style.boxShadow = `0px 0px 10px 2px ${cores[corselect]}`;
    main.style.transition = '1s linear';
    title.style.color = cores[corselect];
    title.style.transition = '1s linear';
}

setInterval(() => {
    mudacor();
}, 2000);
