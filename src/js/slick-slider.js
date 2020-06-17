$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                arrows: false,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                arrows: false,
                autoplaySpeed: 2000,
            }
        }
    ]
});