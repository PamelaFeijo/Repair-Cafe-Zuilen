function activeScroll(selector) {

    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);  
    });
}

activeScroll('a[href*=home]');
activeScroll('a[href*=over]');
activeScroll('a[href*=reparaties]');
activeScroll('a[href*=contact]');