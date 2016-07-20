var  scroll_top_duration = 700;
//smooth scroll to top
$('#back-to-top').on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0 ,
  }, scroll_top_duration
  );
});
