$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали', // Set a custom before label
        after_label: 'Со скинали' // Set a custom after label
    });
    $(".before-slider").slick({
        draggable: false,
        dots: true,
        dotsClass: "before-slider-dots",
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right")
    });

    /*НастроЙКА меню*/

    $(".menu-button").on("click", function(){
        $(".menu").toggleClass("menu_active");
    });

     /*Настройка select*/

    $(".select").on("click", function(){
        $(".select-dropdown").toggleClass("select-dropdown-active");
    });
    $(".select-option").on("click", function(){
        let val = $(this).attr("data-value");
        $("#select-type").val(val);
        $(".select-checked").text(val);
    });
    $("a[href^='#']").click(function(){
        let _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top - 50 + "px"});
        return false;
    });

    /*Jquery mask*/

    $("[type='tel']").mask("+7 (999) 999-999-99");


});