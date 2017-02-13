$( function () {
    $('.text').hover( function () {
        // console.log(this);
        $(this).next().addClass('active-form');
    }, function () {
        $(this).next().removeClass('active-form');

    });

    $('.button').on('click', function (e) {
        e.preventDefault();
        $('.hint').addClass('active-form');
    })
});