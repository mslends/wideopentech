// $('#slideout-open-menu-button').on("click", function() {
//   if($('.slideout-menu:hidden')) {
//     $('.slideout-menu').show();
//   }
// })
//
// $('#slideout-closed-menu-button').on("click", function() {
//   if($('.slideout-menu:visible')) {
//     $('.slideout-menu').hide();
//   }
// })

$('#slideout-open-menu-button').on("click", function() {
  if($('.slideout-menu:hidden')) {
    $('.slideout-menu').animate({right:'0'}, 350, function() {});
  }
})

$('#slideout-closed-menu-button').on("click", function() {
  if($('.slideout-menu:visible')) {
    $('.slideout-menu').animate({right:'-350px'}, 350, function() {});
  }
})
