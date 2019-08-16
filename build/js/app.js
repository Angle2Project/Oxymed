$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});
$(document).ready(function(){      

  // Mobile menu 
  $('[data-action="menu"]').click(function(e){    
    $('body').toggleClass('menu');
  });


  // Sliders
  if($(".slider").length){
    $(".slider").slick();
  }

  // Partners
  if($("#partners-slider").length){    
      $("#partners-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,        
        arrows: false,
        dots: true,
        responsive: [{
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }    
        }]
      });    
  }

  // Resize 
  // $(window).resize(function(e){
  //   if(window.innerWidth <= 900){

  //   }else{
  //     $('#partners-slider').slick('unslick');
  //   }
  // });
  

  
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
  });

  $('[data-action="graphic-touch"]').click(function(){
    if(window.innerWidth <= 900){
      $(this).find('.graphic--point span').toggleClass('show');
    }
  });

  $('.actions__btn.has-popover').click(function(e){
    console.log(e.target);
    if($(e.target).closest('i.close').length)$(this).toggleClass('show');
    if($(e.target).closest('.popover__inner').length)return;    
    $(this).toggleClass('show');
  });

  // $( ".has-popover" ).hover(
  //   function() {
  //     $( this ).find('.popover').fadeIn();
  //   }, function() {
  //     $( this ).find('.popover').fadeOut();
  //   }
  // );

  if($('main.technology').length){
    var technologyHover = false;

    $('main.technology [data-hover]').mouseenter(function(e){
      if(technologyHover){
        if($(document).width() > 900){
          var t = $(this).data().hover;
          var o = document.querySelectorAll('.elem:not(.'+t+')');        
          var tt = document.querySelector('.'+t+' .tooltype');        
          TweenLite.to(o, 0.5, {opacity: 0.3});
          TweenLite.to(tt, 0.5, {opacity: 1});
        }else{
          var t = $(this).data().hover;
          var o = document.querySelectorAll('.elem:not(.'+t+')');        
          var tt = document.querySelector('.'+t+' .tooltype');
          var text = tt.querySelector('span').innerText;
          TweenLite.to(o, 0.5, {opacity: 0.3});
          TweenLite.to(tt, 0.5, {opacity: 1});
          $('.tooltype--mobile').fadeIn().find('span').html(text);
        }
      }      
    });
    $('main.technology [data-hover]').mouseleave(function(e){
      var t = $(this).data().hover;
      var o = document.querySelectorAll('.elem:not(.'+t+')');
      var tt = document.querySelector('.'+t+' .tooltype');        
      TweenLite.to('.elem', 0.5, {opacity: 1});
      TweenLite.to(tt, 0.5, {opacity: 0});
      $('.tooltype--mobile').fadeOut().find('span').html('');
    });
    $('.tooltype--mobile [data-action="close"]').click(function(e){
      $(this).closest('.tooltype--mobile').fadeOut();
    });

    $(document).scroll(function(e){
      if($(window).width() > 900){
        var t = $('.technology__hero').height() - ($('.technology__hero').height()/4);
        var m = t + $(window).height();
        var s = $(document).scrollTop();      
        var tp;
        var clear = document.querySelectorAll('main.technology .device__box .box-2, main.technology .device__parts, main.technology .device__parts .part-2, main.technology .device__parts .part-3, main.technology .device__parts .part-4, main.technology .device__parts .part-5, main.technology .device__parts .part-6, main.technology .device__parts .part-7, main.technology .device__parts .part-8, main.technology .device__parts .part-9');
        
        if(s == 0){
          tp = 0;
          TweenLite.to('main.technology .device__body', .5, {x:(5 - ((5/100)*tp))+'%', y: -($(window).width() > 1200?53:75 - (($(window).width() > 1200?53:75/100)*tp))+'%', scale: (0.5 + ((0.5/100)*tp))});
          TweenLite.to('main.technology .device__box', .5, {y: -(20 - ((12/100)*tp))+'%'});
          TweenLite.to('main.technology .device__body .body-2', .5, {y: -(193 - ((38/100)*tp))+'%'});        
          TweenLite.to('main.technology .device__box .box-2', .5, {y: -(141 - ((141/100)*tp))+'%'});
          TweenLite.to('main.technology .device__parts', .5, {y: -(25 - ((25/100)*tp))+'%'});
          TweenLite.to('main.technology .device__parts .part-2', .5, {y: -(50 - ((50/100)*tp))+'%'});
          TweenLite.to('main.technology .device__parts .part-3', .5, {y: -(88 - ((88/100)*tp))+'%'});
          TweenLite.to('main.technology .device__parts .part-4', .5, {y: -(100 - ((100/100)*tp))+'%'});
          TweenLite.to('main.technology .device__parts .part-5', .5, {y: -(255 - ((255/100)*tp))+'%'});
          TweenLite.to('main.technology .device__parts .part-6', .5, {y: -(127 - ((127/100)*tp))+'%'});
          TweenLite.to('main.technology .device__parts .part-7', .5, {y: -(167 - ((167/100)*tp))+'%'});
          TweenLite.to('main.technology .device__parts .part-8', .5, {y: -(230 - ((230/100)*tp))+'%'});
          TweenLite.to('main.technology .device__parts .part-9', .5, {y: -(215 - ((215/100)*tp))+'%'});
          //TweenLite.set(clear, {clearProps: "all"});        
        }else if(s < t){
          tp = 100/(t/s);
          var n = $(window).width() > 1200 ? 53:75;
          console.log(n);
          TweenLite.to('main.technology .device__body', .5, {x:(5 - ((5/100)*tp))+'%', y: -(n - (n/100)*tp)+'%', scale: (0.5 + ((0.5/100)*tp))});
          TweenLite.to('main.technology .device__box', .5, {y: -(20 - ((12/100)*tp))+'%'});
          TweenLite.to('main.technology .device__body .body-2', .5, {y: -(193 - ((38/100)*tp))+'%'});
          
          
          TweenLite.to('main.technology .device__box .box-2', .5, {y: -141+'%'});
          TweenLite.to('main.technology .device__parts', .5, {y: -25+'%'});
          TweenLite.to('main.technology .device__parts .part-2', .5, {y: -50+'%'});
          TweenLite.to('main.technology .device__parts .part-3', .5, {y: -88+'%'});
          TweenLite.to('main.technology .device__parts .part-4', .5, {y: -100+'%'});
          TweenLite.to('main.technology .device__parts .part-5', .5, {y: -255+'%'});
          TweenLite.to('main.technology .device__parts .part-6', .5, {y: -127+'%'});
          TweenLite.to('main.technology .device__parts .part-7', .5, {y: -167+'%'});
          TweenLite.to('main.technology .device__parts .part-8', .5, {y: -230+'%'});
          TweenLite.to('main.technology .device__parts .part-9', .5, {y: -215+'%'});

          
                
          // $('main.technology .device__box .box-2').removeAttr('style');        
          // $('main.technology .device__parts').removeAttr('style');
          // $('main.technology .device__parts .part-2').removeAttr('style');
          // $('main.technology .device__parts .part-3').removeAttr('style');
          // $('main.technology .device__parts .part-4').removeAttr('style');
          // $('main.technology .device__parts .part-5').removeAttr('style');
          // $('main.technology .device__parts .part-6').removeAttr('style');
          // $('main.technology .device__parts .part-7').removeAttr('style');
          // $('main.technology .device__parts .part-8').removeAttr('style');
          // $('main.technology .device__parts .part-9').removeAttr('style');

        }else{
          tp = 100/(($(window).height()/3)/(s-t));
          console.log(m, tp);
          if(tp < 100){
            if(tp < 65){
              technologyHover = false;
            }else{
              technologyHover = true;
            }
            
            TweenLite.to('main.technology .device__box', .5, {y: -(8 - ((8/100)*tp))+'%'});
            TweenLite.to('main.technology .device__body .body-2', .5, {y: -(155 - ((155/100)*tp))+'%'});
            TweenLite.to('main.technology .device__box .box-2', .5, {y: -(141 - ((141/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts', .5, {y: -(25 - ((25/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-2', .5, {y: -(50 - ((50/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-3', .5, {y: -(88 - ((88/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-4', .5, {y: -(100 - ((100/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-5', .5, {y: -(255 - ((255/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-6', .5, {y: -(127 - ((127/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-7', .5, {y: -(167 - ((167/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-8', .5, {y: -(230 - ((230/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-9', .5, {y: -(215 - ((215/100)*tp))+'%'});
          }else{
            technologyHover = true;
            TweenLite.to('main.technology .device__box', .5, {y: -(8 - ((8/100)*100))+'%'});
            TweenLite.to('main.technology .device__body .body-2', .5, {y: -(155 - ((155/100)*100))+'%'});
            TweenLite.to('main.technology .device__box .box-2', .5, {y: -(141 - ((141/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts', .5, {y: -(25 - ((25/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-2', .5, {y: -(50 - ((50/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-3', .5, {y: -(88 - ((88/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-4', .5, {y: -(100 - ((100/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-5', .5, {y: -(255 - ((255/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-6', .5, {y: -(127 - ((127/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-7', .5, {y: -(167 - ((167/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-8', .5, {y: -(230 - ((230/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-9', .5, {y: -(215 - ((215/100)*100))+'%'});
          }
        }
      }else{
        var t = $('.technology__hero').height() / 3;
        var m = t + $(window).height();
        var s = $(document).scrollTop();
        var tp;  
        if(s > t){
          //tp = 100/(m/(s-t));
          tp = 100/(($(window).height()/2)/(s-t));
          if(tp<100){
            technologyHover = false;
            TweenLite.to('main.technology .device__box', .5, {y: -(8 - ((8/100)*tp))+'%'});
            TweenLite.to('main.technology .device__body .body-2', .5, {y: -(155 - ((155/100)*tp))+'%'});
            TweenLite.to('main.technology .device__box .box-2', .5, {y: -(141 - ((141/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts', .5, {y: -(25 - ((25/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-2', .5, {y: -(50 - ((50/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-3', .5, {y: -(88 - ((88/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-4', .5, {y: -(100 - ((100/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-5', .5, {y: -(255 - ((255/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-6', .5, {y: -(127 - ((127/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-7', .5, {y: -(167 - ((167/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-8', .5, {y: -(230 - ((230/100)*tp))+'%'});
            TweenLite.to('main.technology .device__parts .part-9', .5, {y: -(215 - ((215/100)*tp))+'%'});
          }else{
            technologyHover = true;
            TweenLite.to('main.technology .device__box', .5, {y: -(8 - ((8/100)*100))+'%'});
            TweenLite.to('main.technology .device__body .body-2', .5, {y: -(155 - ((155/100)*100))+'%'});
            TweenLite.to('main.technology .device__box .box-2', .5, {y: -(141 - ((141/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts', .5, {y: -(25 - ((25/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-2', .5, {y: -(50 - ((50/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-3', .5, {y: -(88 - ((88/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-4', .5, {y: -(100 - ((100/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-5', .5, {y: -(255 - ((255/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-6', .5, {y: -(127 - ((127/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-7', .5, {y: -(167 - ((167/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-8', .5, {y: -(230 - ((230/100)*100))+'%'});
            TweenLite.to('main.technology .device__parts .part-9', .5, {y: -(215 - ((215/100)*100))+'%'});
          }
          
          console.log(t, m, tp, s);
        }else{
          TweenLite.to('main.technology .device__box', .5, {y: -20+'%'});
          TweenLite.to('main.technology .device__body .body-2', .5, {y: -217+'%'});
          TweenLite.to('main.technology .device__box .box-2', .5, {y: -157+'%'});
          TweenLite.to('main.technology .device__parts', .5, {y: -25+'%'});
          TweenLite.to('main.technology .device__parts .part-2', .5, {y: -50+'%'});
          TweenLite.to('main.technology .device__parts .part-3', .5, {y: -88+'%'});
          TweenLite.to('main.technology .device__parts .part-4', .5, {y: -100+'%'});
          TweenLite.to('main.technology .device__parts .part-5', .5, {y: -255+'%'});
          TweenLite.to('main.technology .device__parts .part-6', .5, {y: -127+'%'});
          TweenLite.to('main.technology .device__parts .part-7', .5, {y: -167+'%'});
          TweenLite.to('main.technology .device__parts .part-8', .5, {y: -230+'%'});
          TweenLite.to('main.technology .device__parts .part-9', .5, {y: -215+'%'});
        }
      }      
    });
  }

  // Show more checkbox
  $('.contact [data-action="more"]').click(function(e){
    e.preventDefault();
    $(this).closest('label').find('.pre').hide();
    $(this).closest('label').find('.all').show();
  });

  if($('#map').length){
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 10,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    });    
  }
  $('.modal').click(function(e){
    if(!$(e.target).closest('.modal__body').length || $(e.target).hasClass('close')){
      $(this).fadeOut(250);
    }    
  });
});
