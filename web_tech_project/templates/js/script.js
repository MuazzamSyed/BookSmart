function myFunction(x) {
    x.classList.toggle("change");
}


//>>>>>>>>>>>>>attempt to create fading bg with scroll

// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(document).scrollTop() > 100) {
//             $(".homeBG").animate({
//                 backgroundColor: "red"
//             }, 200);
//         } else {
//             $(".homeBG").animate({
//                 backgroundColor: "blue"
//             }, 200);
//         }
//     });
// });


// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(document).scrollTop() > 100) {
//             $(".rocket").addClass("scrolled");
//         } else {
//             $(".rocket").removeClass("scrolled");
//         }
//     });
// });

$(function(){
    $(window).scroll(function(){
        var $scrollPercent = ($(document).scrollTop());

        if($scrollPercent <= 100){
            if ($scrollPercent<=20)
                $('.rocket').css({opacity:'0%'});
            // else if($scrollPercent>80)
            //     $('.rocket').css({opacity:'0%'})
            else
                $('.rocket').css({opacity:'100%'})
        }
    });
});

console.log("js file working");