$(function(){
    particlesJS.load('particles', 'js/particles/particlesjs-config.json');

    let info = $('#info').offset().top - 50,
        events = $('#events').offset().top - 50,
        contact = $('#contact').offset().top - 50;

    let autoscroll = false;

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if(!autoscroll) {
            if(scroll > 0 && scroll < info) {
                $('#btn-home').parent().addClass('active');
                removeActives($('#btn-home'));
            } else if(scroll >= info && scroll < events) {
                $('#btn-info').parent().addClass('active');
                removeActives($('#btn-info'));
            } else if(scroll >= events && (scroll < contact && (scroll + $(window).height()) != $(document).height())) {
                $('#btn-events').parent().addClass('active');
                removeActives($('#btn-events'));
            } else if(scroll >= contact || scroll + $(window).height() == $(document).height()) {
                $('#btn-contact').parent().addClass('active');
                removeActives($('#btn-contact'));
            }
        }
    });

    $('#hamenu').on('click', function(e) {
        //$('#navmenu').toggleClass('shown');
        if($('#navmenu').css('visibility') == 'hidden') {
            $('#navmenu').css('visibility', 'visible');
        } else {
            $('#navmenu').css('visibility', 'hidden');
            //$('.menuitem.active').removeClass('active');
        }
    });

    $('#btn-home').on('click', function(e) {
        autoscroll = true;
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 500, function() {
            autoscroll = false;
        });
        $(this).parent().addClass('active');
        removeActives($(this));
    });

    $('#btn-info').on('click', function(e) {
        autoscroll = true;
        e.preventDefault();
        $('html, body').animate({
            scrollTop: info
        }, 500, function() {
            autoscroll = false;
        });
        $(this).parent().addClass('active');
        removeActives($(this));
    });

    $('#btn-events').on('click', function(e) {
        autoscroll = true;
        e.preventDefault();
        $('html, body').animate({
            scrollTop: events
        }, 500, function() {
            autoscroll = false;
        });
        $(this).parent().addClass('active');
        removeActives($(this));
    });

    $('#btn-contact').on('click', function(e) {
        autoscroll = true;
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact
        }, 500, function() {
            autoscroll = false;
        });
        $(this).parent().addClass('active');
        removeActives($(this));
    });

    $('#btn-readmore').on('click', function(e) {
        autoscroll = true;
        e.preventDefault();
        $('html, body').animate({
            scrollTop: info
        }, 500, function() {
            autoscroll = false;
        });
        $('#btn-info').parent().addClass('active');
        removeActives($('#btn-info'));
    });

    function removeActives(el) {
        let h = $('#btn-home'),
            i = $('#btn-info'),
            e = $('#btn-events'),
            c = $('#btn-contact');

        if(el[0].id == h[0].id) {
            i.parent().removeClass('active');
            e.parent().removeClass('active');
            c.parent().removeClass('active');
        } else if(el[0].id == i[0].id) {
            h.parent().removeClass('active');
            e.parent().removeClass('active');
            c.parent().removeClass('active');
        } else if(el[0].id == e[0].id) {
            h.parent().removeClass('active');
            i.parent().removeClass('active');
            c.parent().removeClass('active');
        } else if(el[0].id == c[0].id) {
            h.parent().removeClass('active');
            i.parent().removeClass('active');
            e.parent().removeClass('active');
        }
    }
});
