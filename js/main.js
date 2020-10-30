$(document).ready(function () {
    /*menu-left*/
    var menuLeft = $('.menuLeft');
    // if(window.matchMedia('(min-width: 992px)').matches){
        $('#burger-left').on('click',function(e){
            e.preventDefault();
            menuLeft.toggleClass('menu-active-big');
        });
        $(document).mouseup(function (e) {
            if (menuLeft.has(e.target).length == 0) {
                menuLeft.removeClass('menu-active-big');
            }
        });
    // }
   /* if(window.matchMedia('(max-width: 991px)').matches){
        $('#burger-left').on('click', function(e){
            e.preventDefault();
            $('.wrapper').toggleClass('wrapper-active');
            // menuLeft.toggleClass('menu-active-small');
        });
    }
*/

    /*menu-center*/
    var menuTop = $('.menuTop');
    $('.burger-center').on('click', function(e){
        e.preventDefault();
        menuTop.addClass('menu-top-active');
    });
    $('.menuTop-btn').on('click',function(e){
        e.preventDefault();
        menuTop.removeClass('menu-top-active');
    });

    /*search block*/
    var control = false;
    var searchBox = $('.search-box');
    var searchInput = $('.search-input');
    var searchButton = $('.search-button');
    var searchIcon = $('.fa-search');

    $('.search-button').on('click', function(e){
        if(control == false){
            e.preventDefault();
            searchInput.css({"width":"99%", "padding":"0 10px", "background":"white"});
            if(window.matchMedia('(max-width: 575px)').matches){
                searchInput.css({"width":"93%", "padding":"0 10px", "background":"white"});
            }
            searchButton.css({"background":"white"});
            searchIcon.css({"color":"#016241"});
        }
        searchInput.on('change', function(e){
            control = true;
        });
    });

    $(document).mouseup(function (e) {
        if (searchBox.has(e.target).length == 0) {
            searchInput.css({"width":"0", 'padding':'0',"background":"white"});
            searchButton.css({"background":"transparent"});
            searchIcon.css({"color":"white"});
        }
    });


});

//HEADER BOTTOM
var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function(e) {
    /*const documentHeight = document.documentElement.scrollHeight; //contentLenght
    const windowHeight = window.innerHeight; //screenYlength
    const scrollable = documentHeight - windowHeight;
    const scrollY = pageYOffset;
    const pageY = window.pageYOffset;*/

    var scrollY = pageYOffset;
    var headerBottom = document.querySelector(".header-bottom");
    var main = document.querySelector("#main");
    var currentScrollPos = window.pageYOffset;

    if(window.matchMedia('(min-width: 1200px)').matches){
        menu(340, 270);
    }
    if(window.matchMedia('(min-width: 992px) and (max-width: 1199px)').matches){
        menu(340, 295);
    }
    if(window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches){
        menu(360, 310);
    }
    if(window.matchMedia('(min-width: 576px) and (max-width: 767px)').matches){
        menu(400, 340);
    }
    if(window.matchMedia('(max-width: 575px)').matches){
        menu(405, 360);
    }
    function menu(a, b){
        if(currentScrollPos >= a){
            if (prevScrollpos < currentScrollPos) {
                headerBottom.classList.add('fixed-menu-close');
                main.classList.add('main-top');
                headerBottom.classList.remove('fixed-menu-open');
            } else {
                headerBottom.classList.add('fixed-menu-open');
                headerBottom.classList.remove('fixed-menu-close');
            }
            prevScrollpos = currentScrollPos;
        }else if(currentScrollPos <= b){
            headerBottom.classList.remove('fixed-menu-close');
            headerBottom.classList.remove('fixed-menu-open');
            main.classList.remove('main-top');
            prevScrollpos = currentScrollPos;
        }
    }
});





