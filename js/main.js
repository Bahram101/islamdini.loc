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

window.addEventListener('scroll', function() {
   console.log(window.scrollY);
});