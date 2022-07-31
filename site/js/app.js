$(window).scroll(() => {
    let percent = $(document).scrollTop() / ($(document).height() - $(window).height());
    $('.text').css('opacity', .9 - percent)
})