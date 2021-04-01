$("input").keyup(function () {
    test = $("input").val().length
    if (test > 5) {
        $('input ').removeClass("is-invalid");
        $('input ').addClass("is-valid");

    } else {
        $('input ').removeClass("is-valid");
        $('input ').addClass("is-invalid");
    }
});

