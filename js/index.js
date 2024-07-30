/// <reference types="../@types/jquery"/>

$('.navigation').on('click', function () {
    $('aside').animate({
        'width': '25%',
        'padding': '1rem'
    }, 1000)
    $('.content').animate({ 'margin': '25%' }, 1000)
    $('aside').children().removeClass('d-none')
})

$('.fa-xmark').on('click', function () {
    $('aside').animate({
        'width': '0',
        'padding': '0'
    }, 1000, () => {
        $('aside').children().addClass('d-none')
    })
    $('.content').animate({ 'margin': '0' }, 1000)

})

/* *** d-none in class *** */
// $('.navigation').on('click',function () {
//     $('aside').removeClass('d-none');
//     $('.content').css('margin','25%')
// })

// $('.fa-xmark').on('click',function () {
//     $('aside').addClass('d-none');
//     $('.content').css('margin','0')
// })


/**********************************************/

$('.signer h2').on('click', function (e) {
    $(e.target).next().slideToggle(500)
    $('.signer .details').not($(e.target).next()).slideUp(500)
})

/* *** d-none in class *** */
// $('.signer h2').on('click',function (e) {
//     $(e.target).next().toggleClass('d-none')
//     $('.signer .details').not($(e.target).next()).addClass('d-none')
// })

/**********************************************/

$(function () {

    // Set the date we're counting down to
    var countDownDate = new Date("Aug 23, 2024 23:59:59").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="countdown"
        $(".days").text(days);
        $(".hours").text(hours);
        $(".minutes").text(minutes);
        $(".seconds").text(seconds);

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countdownfunction);
            $("#counter .row").text("EXPIRED");
        }
    }, 1000);
});

/**********************************************/

const Maxcharacter = 100
let currentCharacters = Maxcharacter
$('textarea').on('input', function () {
    currentCharacters--;
    if (currentCharacters > 0) {
        $('form p span').text(currentCharacters + " ")
    } else {
        $(this).val($(this).val().substring(0, Maxcharacter));
    }
})







