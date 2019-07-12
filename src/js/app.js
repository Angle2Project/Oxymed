$(document).ready(function(){

  if($(".slider").length){
    $(".slider").slick();
  }

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
});
