// menu

function menuAdaptive(hamburger, menu, menuClose, menuLink) {
    hamburger = document.querySelector(hamburger);
    menu = document.querySelector(menu);
    menuClose = document.querySelector(menuClose);
    menuLink = document.querySelectorAll(menuLink);

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden'; // преостанавливаем скролл при появлении модального окна
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });

    menuLink.forEach((item) => {
        item.querySelector('a').addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('keydown', (e) => {
        // событие keydown срабатывает при нажатии кнопок
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

menuAdaptive('.hamburger', '.menu', '.menu__list-close', '.menu__list-items-li');

// tabs

let tab = function() {
    let tabNav = document.querySelectorAll('.menu__list-items-li'),
        tabContent = document.querySelectorAll('.tab-content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }

};

tab();

// slider 

new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 6000,
        stopOnLastSlide: true,
        disableOnInteraction: false
    },
    speed: 800,
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: true,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
});