// MOBILE MENU SWITCH
// var mMenuStatus = false;

$(document).ready(() => {
  $('.mob-menu-btn').on('click', function(event) {
    event.preventDefault();
    $('.nav-container').slideToggle();

  });
  
  $('.nav-container .nav-link').on('click', (event) => {
    event.preventDefault();
   $(event.currentTarget).next().toggle();
  }).on('mouseenter', (event) =>  {
    $('.dropdown-content').hide();
    $(event.currentTarget).next('.dropdown-content').show();
  }).on('mouseleave', () => {
    $('.dropdown-content').hide();
  });

  $('.dropdown-content').on('mouseenter', (event) =>  {
    $(event.currentTarget).show();
  }).on('mouseleave', () => {
    $('.dropdown-content').hide();
  })
  
  $(window).resize(() => {
    let width = $(window).width();
    $('.status').html(`Width: ${width}`);
    if(width < 945) {
      $('.nav-container').hide();
      $('.mob-menu-btn').show();
    }else{
      $('.nav-container').show();
      $('.mob-menu-btn').hide();
    }
  })
});