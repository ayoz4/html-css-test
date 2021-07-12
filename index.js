$(document).ready(function () {
  $('.sidebar__burger').click(function (event) {
    $('.sidebar__burger,.sidebar,.sidebar__btn,.sidebar__logo,.sidebar__list').toggleClass(
      'active',
    );
  });

  $(window).scroll(function () {
    let width = $(window).width();

    if (width < 769) {
      if ($('html,body').scrollTop() > 27 && width > 321) {
        $('.header__fixed').css({
          'padding-left': '77px',
          top: '0',
          position: 'fixed',
          width: 'calc(100% - 77px)',
        });
        $('.header__input').css({
          width: 'calc(100% - 77px)',
        });
      } else if (width < 321 && $('html,body').scrollTop() > 27) {
        $('.header__fixed').css({ 'padding-left': '68px', transition: 'all 0.3s' });
        $('.header__input').css({ background: 'none', 'padding-left': '16px' });
      } else {
        $('.header__fixed').css({ 'padding-left': '26px', position: 'relative', width: '100%' });
        $('.header__input').css({
          background: 'url(header/search.svg) no-repeat scroll 16px 16px',
          width: '100%',
        });
      }
    }

    if (width >= 1440) {
      $('.header').css('padding-left', '60px');
    }
  });
});
