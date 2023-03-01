// $(function() {
//     $('.js-accordion-title').click(function() {
//         var $answer = $(this).find('.answer');
        
//         if($answer.hasClass('open')){
//             $answer.removeClass('open');
//             $answer.slideUp();

//         } else {
//             $answer.addClass('open');
//             $answer.slideDown();
//         }
//     });
// });

$(function () {
    // タイトルをクリックすると
    $(".js-accordion-title").on("click", function () {
      // クリックした次の要素を開閉
    $(this).next().slideToggle(300);
      // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("open", 300);
    });
});

$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

    $('.element').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-fadein");
            }
        });
    });
});
