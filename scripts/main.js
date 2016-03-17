// Uses jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 64
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

function openModal(index) {
    return;
    $("#modal-" + index).modal();
}

function sendEmail() {
    $("#contact .contact-form").hide();
    var progress = $("#contact .progress");
    progress.show();

    var inputs = $("#contact input");
    var textarea = $("#contact textarea");

    if (textarea.length !== 1 || inputs.length !== 3) {
        console.error("Invalid number of contact elements.");
        return;
    }

    var progressBar = progress.find(".progress-bar");

    // Fake a progress indicator using a timer
    var currentProgress = 0;
    var timer = setInterval(function() {
        if (currentProgress < 100) {
            currentProgress += 1;
        }
        progressBar.css('width', currentProgress + "%");
    }, 5);

    var data = {
        name: inputs[0].value,
        email: inputs[1].value,
        phone: inputs[2].value,
        message: textarea[0].value
    };

    $.ajax({
        dataType: "jsonp",
        url: "https://getsimpleform.com/messages/ajax?form_api_token=825d2a1a1bea517847a766189b9ece7c",
        data: data
    }).done(function(results) {
        progress.hide();
        $("#contact .message-sent").show();
    });
}
