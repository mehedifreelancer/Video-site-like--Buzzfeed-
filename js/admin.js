

$(".fa-times ").click(function () {
    $(".settings").animate({
        'width':'42px'
    })
    $(".settings-heading").animate({
        'width':'390px'
    })

    $(".settings-body").animate({
        'width':'0px'
    })
    $(".fa-cog").css({
        'display':'block'
    })
    $(".fa-times").css({
        'display':'none'
    })

    $("body").addClass("test");

});

$(".fa-cog ").click(function () {
    $(".settings-heading").animate({
        'width':'370px'
    })
    $(".settings").animate({
        'width':'370px'
    })


    $(".settings-body").animate({
        'width':'350px'
    })
    $(".fa-cog").css({
        'display':'none'
    })
    $(".fa-times").css({
        'display':'block'
    })



});
