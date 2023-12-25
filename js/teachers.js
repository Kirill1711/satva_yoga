let line = document.querySelector('.teachers__line');
let window_line = document.querySelector('.teachers__slider');
let leftbtn = document.querySelector('.teacher_left_btn');
let rightbtn = document.querySelector('.teacher_right_btn');
let loadingLine = document.querySelector('#teacher__slider_done');


let i = 0;
let counter = 1;
let gap = 10;
setInterval(function() {
    i++;

    console.log(counter);
    /*автозагрузочная линия */
    if(i % 5 == 0){
        if(counter == 1) {
            loadingLine.style.width = '35%';
        }
        if(counter == 2) {
            loadingLine.style.width = '50%';
        }
        if(counter == 3) {
            loadingLine.style.width = '75%';
        }
        if(counter == 4) {
            loadingLine.style.width = '100%';
        }

        /*автослайдер */
        if(window_line.clientWidth == 1280) {
            if(counter == 5) {
                loadingLine.style.width = '20%';
                line.style.marginLeft = 0;
                counter = 0;
                i = 0;
            } else if(counter > 1) {
        line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
        counter++;
        } else {
        line.style.marginLeft = -(320 * counter) + 'px';
        counter++;
        }

        rightbtn.addEventListener('click', function (event) {
            switch(counter) {
                case 0: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 1: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 2:
                counter++; 
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 3: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
            }
        });

        leftbtn.addEventListener('click', function (event) {
            switch(counter) {
                case 0: 
                line.style.marginLeft = (320 * counter) + 'px';
                event.stopImmediatePropagation();
                break;
                case 1: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 2:
                counter--; 
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 3: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 4: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 5: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
            }
        });
        
        }
        
        if(window_line.clientWidth == 990) {
            /*загрузочная линия */
            if(counter == 1) {
                loadingLine.style.width = '35%';
            }
            if(counter == 2) {
                loadingLine.style.width = '45%';
            }
            if(counter == 3) {
                loadingLine.style.width = '65%';
            }
            if(counter == 4) {
                loadingLine.style.width = '85%';
            }
            if(counter == 5) {
                loadingLine.style.width = '100%';
            }


            /*автослайдер */
            if(counter == 6) {
                line.style.marginLeft = 0;
                counter = 0;
                i = 0;
                loadingLine.style.width = '15%';
            } else if(counter > 1) {
        line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
        counter++;
        } else {
        line.style.marginLeft = -(320 * counter) + 'px';
        counter++;
        }

        rightbtn.addEventListener('click', function (event) {
            switch(counter) {
                case 0: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 1: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 2:
                counter++; 
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 3: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 4: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
            }
        });


        leftbtn.addEventListener('click', function (event) {
            switch(counter) {
                case 0: 
                line.style.marginLeft = (320 * counter) + 'px';
                event.stopImmediatePropagation();
                break;
                case 1: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 2:
                counter--; 
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 3: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 4: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 5: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 6: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
            }
        });

        }

        if(window_line.clientWidth == 660) {
               /*загрузочная линия */
               if(counter == 1) {
                loadingLine.style.width = '30%';
            }
            if(counter == 2) {
                loadingLine.style.width = '45%';
            }
            if(counter == 3) {
                loadingLine.style.width = '60%';
            }
            if(counter == 4) {
                loadingLine.style.width = '80%';
            }
            if(counter == 5) {
                loadingLine.style.width = '90%';
            }
            if(counter == 6) {
                loadingLine.style.width = '100%';
            }


            /*автослайдер */
            if(counter == 7) {
                line.style.marginLeft = 0;
                counter = 0;
                i = 0;
                loadingLine.style.width = '10%';
            } else if(counter > 1) {
        line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
        counter++;
        } else {
        line.style.marginLeft = -(320 * counter) + 'px';
        counter++;
        }

        rightbtn.addEventListener('click', function (event) {
            switch(counter) {
                case 0: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 1: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 2:
                counter++; 
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 3: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 4: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 5: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
            }
        });


        leftbtn.addEventListener('click', function (event) {
            switch(counter) {
                case 0: 
                line.style.marginLeft = (320 * counter) + 'px';
                event.stopImmediatePropagation();
                break;
                case 1: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 2:
                counter--; 
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 3: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 4: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 5: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 6: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 7: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
            }
        });


        }

        if(window_line.clientWidth == 320) {

            if(counter == 8) {
                line.style.marginLeft = 0;
                counter = 0;
                i = 0;
            } else if(counter > 1) {
        line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
        counter++;
        } else {
        line.style.marginLeft = -(320 * counter) + 'px';
        counter++;
        }

        rightbtn.addEventListener('click', function (event) {
            switch(counter) {
                case 0: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 1: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 2:
                counter++; 
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 3: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 4: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 5: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 6: 
                counter++;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
            }
        });

        leftbtn.addEventListener('click', function (event) {
            switch(counter) {
                case 0: 
                line.style.marginLeft = (320 * counter) + 'px';
                event.stopImmediatePropagation();
                break;
                case 1: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 2:
                counter--; 
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 3: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 4: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 5: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 6: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 7: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
                case 8: 
                counter--;
                line.style.marginLeft = -(320 * counter + (gap * (counter - 1))) + 'px';
                event.stopImmediatePropagation();
                break;
            }
        });
        }
    }
},1000);


