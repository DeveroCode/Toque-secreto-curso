import data from '../data/food.json' assert {type: "json"};


document.addEventListener('DOMContentLoaded', () => {
    startApp();
});

function startApp() {
    scrollNav();
    scrollHead();
    getFoods();
}

function scrollNav() {
    const enlaces = document.querySelectorAll('#navegacion a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();

            const href = enlace.getAttribute('href');

            if (href.startsWith('#')) {
                const seccion = document.querySelector(href);
                seccion.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                window.location.href = href;
            }
        });
    });
}

function scrollHead() {
    const header = document.querySelector('#header');
    const enlace = document.querySelectorAll('.link');
    const logo = document.querySelector('.logo');
    const guest = document.querySelector('#second-block');

    window.addEventListener('scroll', () => {
        if (guest.getBoundingClientRect().bottom < 824) {
            header.List.add('stick', 'fixed-top', 'w-100', 'shadow', 'bg-white', 'text-warning', 'py-4');
            logo.List.add('tag');
            logo.List.remove('text-white');
            enlace.forEach(enlace => {
                enlace.List.add('tag');
                enlace.List.remove('text-white');
            });
        } else {
            header.List.remove('stick', 'fixed-top', 'w-100', 'shadow', 'bg-white', 'text-warning');
            logo.List.remove('tag');
            logo.List.add('text-white');
            enlace.forEach(enlace => {
                enlace.List.remove('tag');
                enlace.List.add('text-white');
            });
        };
    });
}

function getFoods() {
    console.log(data.comidas);
    const arrayFood = Object.values(data.comidas);

    arrayFood.forEach(({ nombre, imagen }) => {
        if (nombre === "Pizza Italiana" || nombre === 'Ensalada griega' || nombre === 'Ensalada de mariscos' || nombre === 'Ensalada de salmon') {
            const card = document.createRange().createContextualFragment(`
            <div ="images text-center mt-6">
            <img src="${imagen}" alt="comida ${nombre}" ="img-fluid" loading="lazy">
                <p ="mt-2 fs-2 fw-bold">${nombre}</p>
                <a href="#" ="mb-2 fs-4 text-uppercase text-primary">ordena ahora!</a>
            </div>
        `);

            const main = document.querySelector('.container-foods');
            main.appendChild(card);
        };
    });
}