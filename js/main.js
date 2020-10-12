$(document).ready(function () {

    var menuLeft = $('.menuLeft');
    var back = $('#back');

    $('.menuLeft-btn').on('click', function (e) {
        e.preventDefault();
        menuLeft.toggleClass('menu-active');
        // back.addClass('back');
    });

    $(document).mouseup(function (e) {
        if (menuLeft.has(e.target).length == 0) {
            menuLeft.removeClass('menu-active');
            // back.removeClass('back');
        }
    });

    $('#menu-item').on('click',function(e){
        e.preventDefault();
        menuLeft.toggleClass('menu-active');
    })

});