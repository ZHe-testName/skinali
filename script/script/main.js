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
    $(".menu-button").on("click", function(){
        $(".menu").toggleClass("menu_active");
    }),

    /*Настройка меню*/

    $(".select").on("click", function(){
        $(".select-dropdown").toggleClass("select-dropdown-active");
    })
});