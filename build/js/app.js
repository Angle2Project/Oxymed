$(document).ready(function(){

  // Sliders
  if($(".slider").length){
    $(".slider").slick();
  }
  
  // Form 
  $('.form-control input, .form-control textarea').focus(function(e){
    $(this).closest('.form-control').addClass('focus');
  });
  $('.form-control input, .form-control textarea').blur(function(e){
    if(!$.trim($(this).val()).length){
      $(this).closest('.form-control').removeClass('focus');
    }    
  });
  $('.form-select select').change(function(e){
    $(this).closest('.form-select').addClass('selected');
  });
  $('#phone-mask').mask('000-000-0000');

  $('.faq__list li .title').click(function(e){
    if($(this).closest('li').hasClass('active')){
      $(this).closest('li').removeClass('active');
      $(this).closest('li').find('.answer').slideUp(150);
    }else{
      $(this).closest('.faq__list').find('.active').removeClass('active').find('.answer').slideUp(150);
      $(this).closest('li').addClass('active');
      $(this).closest('li').find('.answer').slideDown(150);
    }    
  });

  $('.careers__list_item [data-action="more"]').click(function(e){
    e.preventDefault();
    var h = $(this).closest('.careers__list_item').find('.about p span').height();
    var m = $(this).attr('data-mode');
    if(m == 'show'){
      $(this).attr('data-mode', 'hide').html('Hide');
      $(this).closest('.careers__list_item').find('.about p').css('max-height', h);
    }else{
      $(this).attr('data-mode', 'show').html('Show More');
      $(this).closest('.careers__list_item').find('.about p').removeAttr('style');
    }    
    console.log(h, m);
  });

  // $( ".has-popover" ).hover(
  //   function() {
  //     $( this ).find('.popover').fadeIn();
  //   }, function() {
  //     $( this ).find('.popover').fadeOut();
  //   }
  // );
});
