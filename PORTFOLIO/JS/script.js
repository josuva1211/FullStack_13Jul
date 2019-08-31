$(document).ready(function() {
    $("#slides").superslides({
        animation: 'fade',
        play: 3000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer", "Web Developer", "UI Developer", "Front End Developer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    var skillsTopOffSet = $(".skillsSection").offset().top;
    console.log(skillsTopOffSet);

    var statsTopOffSet = $(".statsSection").offset().top;

    var countUpFinished = false;

    $(window).scroll(function() {
        if (window.pageYOffset > skillsTopOffSet - $(window).height() + 200)
        {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if (!countUpFinished && window.pageYOffset > statsTopOffSet - $(window).height() + 200)
        {
            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());
        
                element.countup(endVal);
            });

            countUpFinished = true;
        }
    });

    
});