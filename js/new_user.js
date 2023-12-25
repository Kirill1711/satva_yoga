let item__titles = document.querySelectorAll('.item__title');
let item__texts = document.querySelectorAll('.item__text');


for(let i = 0; i < item__titles.length; i++) {
    item__titles[i].addEventListener('click', function () {
        if(item__titles[i].classList.contains('--open')){
            item__titles[i].classList.remove('--open');
            item__texts[i].style.display = 'none';
        } else {
        item__titles[i].classList.add('--open');
        item__texts[i].style.display = 'block';
        }
    });
}