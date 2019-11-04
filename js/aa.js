$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$('#example1').arctext({radius: 80});

$cc_height = $(window).height();
$('.map').css("height", $cc_height-150);


