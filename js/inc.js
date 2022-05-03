$(document).ready(function ($) {
    /* search btn */
    $(".search-btn").click(function(){
        $(".search label").slideToggle("fast");
    });
    $('#check').change(function(){
        if(document.getElementById("main-menu").style.width == "250px" )
        {
            document.getElementById("main-menu").style.width = "0px";
            document.getElementById("main-menu").style.opacity = "0";
            $('.menu-button').removeClass('active');
        }
        else{
            document.getElementById("main-menu").style.width = "250px";
            document.getElementById("main-menu").style.opacity = "1";
            document.getElementById("main-menu").style.display = "block";
            document.getElementById("main-menu").style.visibility = "visible";
            $('.menu-button').addClass('active');
        }
    });

    $('#main-menu .has-child a').click(function(){
        if (window.matchMedia('(max-width: 767px)').matches) {
            $(this).parent().parent().find('.has-child').not($(this).parent()).removeClass('active');
            $(this).parent().toggleClass('active');
        }
    });
});

// text-slide ------------------------
$('#text-slide').slick({
    arrows:false,
     autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    infinite: true,
    slidesToShow:1,
    rtl:true,
    slidesToScroll: 1,
    dots:true,
    centerMode:false,
    centerPadding: '0',
    asNavFor: '#img-slide',

});


$('#img-slide').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    arrows:false,
    rtl:true,
    cssEase: 'linear',
    asNavFor: '#text-slide',
    arrows:true,
    nextArrow: '<button type="button" class="arrow-prev"><span class="icon icon-left-arrow" </span> </button>',
    prevArrow: '<button type="button" class="arrow-next"><span class="icon icon-right-arrow" </span> </button>',
});
// learn-slide ------------------------
$('#learn-slide').slick({
    arrows:true,
    nextArrow: '<button type="button" class="arrow-prev"><span class="icon icon-left-arrow" </span> </button>',
    prevArrow: '<button type="button" class="arrow-next"><span class="icon icon-right-arrow" </span> </button>',
    autoplay: true,
    autoplaySpeed: 500,
    speed: 2000,
    infinite: true,
    slidesToShow:1,
    rtl:true,
    slidesToScroll: 1,
    dots:true,
    centerMode:false,
    centerPadding: '0',
    fade:true,
});
// learn-slide ------------------------
$('#advertise').slick({
    arrows:true,
    nextArrow: '<button type="button" class="arrow-prev"><span class="icon icon-left-arrow" </span> </button>',
    prevArrow: '<button type="button" class="arrow-next"><span class="icon icon-right-arrow" </span> </button>',
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    infinite: true,
    slidesToShow:1,
    rtl:true,
    slidesToScroll: 1,
    dots:false,
    centerMode:false,
    centerPadding: '0',
    arrows:true,
    nextArrow: '<button type="button" class="arrow-prev"><span class="icon icon-left-arrow" </span> </button>',
    prevArrow: '<button type="button" class="arrow-next"><span class="icon icon-right-arrow" </span> </button>',

});

$('.slider-blog').slick({
    infinite: false,
    slidesToShow: 4,
    speed: 2000,
    slidesToScroll: 2,
    rtl:true,
    dots:false,
    arrows:false,
    asNavFor: '.slider-blog-for',
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 1000,
});

$('.slider-blog-for').slick({
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 1000,
    fade: true,
    arrows:false,
    rtl:true,
    cssEase: 'linear',
    asNavFor: '.slider-blog',
    nextArrow: '<button type="button" class="arrow-prev"><span class="icon icon-left-arrow" </span> </button>',
    prevArrow: '<button type="button" class="arrow-next"><span class="icon icon-right-arrow" </span> </button>',
    arrows:true,
});