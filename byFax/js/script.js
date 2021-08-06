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

function tab(tabNav, tabContent) {
    let tabNav1 = document.querySelectorAll(tabNav),
        tabContent1 = document.querySelectorAll(tabContent),
        tabName;

    tabNav1.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });



    function selectTabNav() {
        tabNav1.forEach(item => {
            item.classList.remove('active');
            this.classList.add('active');
            tabName = this.getAttribute('data-tab-name');
        });
        selectTabContent(tabName);
    }


    function selectTabContent(tabName) {
        tabContent1.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }
};

tab('.offer__tabs-img', '.offer__tabs-text');




function CheckPro() {
    let checkIt = true;
    let more = document.querySelector('.road__more');

    let btn = document.querySelector('.road__btn');
    let img = document.querySelector('.road__btn img');
    if (!more || more.textContent == '') {
        btn.style.display = 'none';
    }
    btn.addEventListener('click', () => {
        if (checkIt) {
            more.style.display = 'block';
            img.style.transform = 'rotate(180deg)';
            checkIt = false;
            more.style.maxHeight = more.scrollHeight + 'px';
        } else {
            img.style.transform = 'unset';
            more.style.display = 'none';
            checkIt = true;
            more.style.maxHeight = 0;
        }
    });
}
CheckPro();