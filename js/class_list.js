let panel_week = document.querySelector('#panel__week-act_choise');
let panel_week_list = document.querySelector('.panel__week');

panel_week.addEventListener('click', function() {
    if(panel_week_list.classList.contains('active')) {
        panel_week_list.classList.remove('active');
        panel_week_list.style.display = 'none';
    } else {
        panel_week_list.classList.add('active');
        panel_week_list.style.display = 'flex';
    }
});

let btn__table_show = document.querySelector('.btn__table_show');
let class__list_unshow = document.querySelectorAll('.class__list_unshow');

btn__table_show.addEventListener('click', function () {
    for(let i = 0; i < class__list_unshow.length; i++) {
        if(class__list_unshow[i].classList.contains('active')) {
            class__list_unshow[i].classList.remove('active');
            class__list_unshow[i].style.display = 'none';
            class__list_unshow[i].style.visibility = 'hidden';
            btn__table_show.querySelector('p').innerHTML = 'Показать всю неделю';
            btn__table_show.style.flexDirection = 'column';
            btn__table_show.querySelector('i').classList.remove('up');
            btn__table_show.querySelector('i').classList.add('down');
        } else {
            class__list_unshow[i].classList.add('active');
            class__list_unshow[i].style.display = 'block';
            class__list_unshow[i].style.visibility = 'visible';
            btn__table_show.querySelector('p').innerHTML = 'Показать только сегодня';
            btn__table_show.style.flexDirection = 'column-reverse';
            btn__table_show.querySelector('i').classList.add('up');
            btn__table_show.querySelector('i').classList.remove('down');
        }
        
    }
    
});
