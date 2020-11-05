$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {

            $('.filter').show('1000');
        }
        else
        {

            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

    $('.nav-link').on('click',function () {
        var section=$(this).data('block');
        $('html, body').animate({
            scrollTop: $("#"+section).offset().top
        }, 1000);
        if(section=='home'){
            $('body').scrollTop();
        }
    })



});





window.addEventListener('scroll',function () {
    //document.getElementsByClassName('navbar')[0].style.background="linear-gradient(45deg, #ed1a33 0%, #442e82 99%);";
    if(pageYOffset>10){
        $('.navbar').css({
            background: "-webkit-gradient(linear, left top, right bottom, from(#ed1a33), to(#442e82))"
        });
    }else{
        $('.navbar').css({
            background: "transparent"
        });
    }



})