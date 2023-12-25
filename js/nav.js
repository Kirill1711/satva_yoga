let nav_price = document.querySelector('.menu__price');
let nav_about = document.querySelector('.menu__about');
let nav_city = document.querySelector('.nav__city');





function drop_menu (elem) {
elem.addEventListener('click', function () {
    if(elem.classList.contains('active')) {
        elem.classList.remove('active');
        elem.lastChild.style.display = 'none';
        elem.firstChild.lastChild.classList.add('down');
        elem.firstChild.lastChild.classList.remove('up');
    } else {
    elem.classList.add('active');
    elem.lastChild.style.display = 'block';
    elem.firstChild.lastChild.classList.remove('down');
    elem.firstChild.lastChild.classList.add('up');
    }
});
}

/*смена названия города */
for(let elem of nav_city.lastChild.children) {
    elem.addEventListener('click', function (event){
        event.preventDefault();
        nav_city.firstChild.firstChild.data = elem.innerText;
    })
}

drop_menu(nav_price);
drop_menu(nav_about);
drop_menu(nav_city);


/* бургер меню */
let burger_menu_open = document.querySelector('.burger__btn_open');
let burger_menu_close = document.querySelector('.burger__btn_close');
let burger_menu_list = document.querySelector('.burger__menu_list');

burger_menu_open.addEventListener('click', function () {
    burger_menu_open.style.display = 'none';
    burger_menu_close.style.display = 'flex';
    burger_menu_list.style.display = 'flex';
});

burger_menu_close.addEventListener('click', function () {
    burger_menu_close.style.display = 'none';
    burger_menu_open.style.display = 'flex';
    burger_menu_list.style.display = 'none';
});

let burger__btn_prise = document.querySelector('.burger__btn_prise');
let burger__btn_about = document.querySelector('.burger__btn_about');
let burger__menu_about = document.querySelector('.burger__menu_about');
let burger__menu_prise = document.querySelector('.burger__menu_prise')


burger__btn_prise.addEventListener('click', function(event) {
    event.preventDefault();
    if(burger__btn_prise.classList.contains('active')){
        burger__btn_prise.classList.remove('active');
        burger__menu_prise.style.display = 'none';
        burger__btn_prise.lastChild.classList.add('down');
        burger__btn_prise.lastChild.classList.remove('up');
    } else {
        burger__btn_prise.classList.add('active');
        burger__menu_prise.style.display = 'flex';
        burger__btn_prise.lastChild.classList.add('up');
        burger__btn_prise.lastChild.classList.remove('down');   
    }
});

burger__btn_about.addEventListener('click', function(event) {
    event.preventDefault();
    if(burger__btn_about.classList.contains('active')){
        burger__btn_about.classList.remove('active');
        burger__menu_about.style.display = 'none';
        burger__btn_about.lastChild.classList.add('down');
        burger__btn_about.lastChild.classList.remove('up');
    } else {
        burger__btn_about.classList.add('active');
        burger__menu_about.style.display = 'flex';
        burger__btn_about.lastChild.classList.add('up');
        burger__btn_about.lastChild.classList.remove('down');
    }
});
