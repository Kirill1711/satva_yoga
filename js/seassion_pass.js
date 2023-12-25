let subscription = document.querySelector('.subscription');
let one_pass = document.querySelector('.one_pass');
let individual = document.querySelector('.individual');
let rent = document.querySelector('.rent');


function show_hide (item) {
item.addEventListener('click', function () {
    if(item.querySelector('table').classList.contains('show')) {
        item.querySelector('table').classList.remove('show');
        item.querySelector('table').classList.add('unshow');
        item.querySelector('.table_subscription').classList.remove('show');
        item.querySelector('.table_subscription').classList.add('unshow');
        item.querySelector('i').classList.remove('up');
        item.querySelector('i').classList.add('down');
        console.log(item.querySelector('i'));
    } else {
        item.querySelector('table').classList.add('show');
        item.querySelector('table').classList.remove('unshow');
        item.querySelector('.table_subscription').classList.add('show');
        item.querySelector('.table_subscription').classList.remove('unshow');
        item.querySelector('i').classList.remove('down');
        item.querySelector('i').classList.add('up');
    }
});
}

show_hide(subscription);
show_hide(one_pass);
show_hide(individual);
show_hide(rent);