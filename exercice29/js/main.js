$("button").click(function () {
    test = $("input").val().length
/*     console.log(test)
    count = 0
    for (let i = 0; i < test.length; i++) {
        count = count + i
        console.log(i)
    }
 */
    if (test > 5) {
        $('input ').addClass("is-valid");
        console.log(test)

    } else {
        $('input ').addClass("is-invalid");
        console.log(test)
    }
});

