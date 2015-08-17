$(document).ready(function() {
    hideInitialButtons();
    modifyInitialNavbar();

    $( ".left" ).hover(
      function(){
        $( this ).children("i").switchClass("fa-4x","fa-5x",300);
      },
      function(){
        $( this ).children("i").switchClass("fa-5x","fa-4x",300);
      });

    $( ".right" ).hover(
      function(){
        $( this ).children("i").switchClass("fa-4x","fa-5x",300);
      },
      function(){
        $( this ).children("i").switchClass("fa-5x","fa-4x",300);
      });

    $('ul.nav a').bind('click',function(event){
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollLeft: $($anchor.attr('href')).offset().left
      },{duration: 1000, step: function(currentLeft, animProperties){
        hideButtons($anchor.attr('href'));
        modifyNavbar($anchor.attr('href'));
      }});
      
      event.preventDefault();
    });

    $('#scroller .left').bind('click',function(event){
      leftright($(this));
      event.preventDefault();
    });

    $('#scroller .right').bind('click',function(event){
      leftright($(this));
      event.preventDefault();
    });

    $(".br").hover(
      function(){
        $(".crh").addClass("minimize");
        $(".sdt").addClass("minimize");
        $(".andr").addClass("minimize");
        $(".frame-1").fadeIn(500);
        $("#tit_sdt").hide();
        $("#tit_crh").hide();
        $("#tit_andr").hide();
        $("#tit_br").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
      
      },
      function(){
        $(".crh").removeClass("minimize");
        $(".sdt").removeClass("minimize");
        $(".andr").removeClass("minimize");
        $(".frame-1").hide();
        $("#tit_br").css({opacity: 1.0, visibility: "hidden"});
        $("#tit_crh").show();
        $("#tit_sdt").show();
        $("#tit_andr").show();
      });

    $(".crh").hover(
      function(){
        $(".br").addClass("minimize");
        $(".sdt").addClass("minimize");
        $(".andr").addClass("minimize");
        $(".frame-3").fadeIn(500);
        $("#tit_br").hide();
        $("#tit_sdt").hide();
        $("#tit_andr").hide();
        $("#tit_crh").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
       },
      function(){
        $(".br").removeClass("minimize");
        $(".sdt").removeClass("minimize");
        $(".andr").removeClass("minimize");
        $(".frame-3").hide();
        $("#tit_crh").css({opacity: 1.0, visibility: "hidden"});
        $("#tit_br").show();
        $("#tit_sdt").show();
        $("#tit_andr").show();
      });

    $(".sdt").hover(
      function(){
        $(".br").addClass("minimize");
        $(".crh").addClass("minimize");
        $(".andr").addClass("minimize");
        $(".frame-2").fadeIn(500);
        $("#tit_br").hide();
        $("#tit_crh").hide();
        $("#tit_andr").hide();
        $("#tit_sdt").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
      },
      function(){
        $(".br").removeClass("minimize");
        $(".crh").removeClass("minimize");
        $(".andr").removeClass("minimize");
        $(".frame-2").hide();
        $("#tit_sdt").css({opacity: 1.0, visibility: "hidden"});
        $("#tit_br").show();
        $("#tit_crh").show();
        $("#tit_andr").show();
      });

    $(".andr").hover(
      function(){
        $(".br").addClass("minimize");
        $(".sdt").addClass("minimize");
        $(".crh").addClass("minimize");
        $(".frame-4").fadeIn(500);
        $("#tit_br").hide();
        $("#tit_crh").hide();
        $("#tit_sdt").hide();
        $("#tit_andr").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
     
      },
      function(){
        $(".br").removeClass("minimize");
        $(".sdt").removeClass("minimize");
        $(".crh").removeClass("minimize");
        $(".frame-4").hide();
        $("#tit_andr").css({opacity: 1.0, visibility: "hidden"});
        $("#tit_br").show();
        $("#tit_crh").show();
        $("#tit_andr").show();
      });
  });
  function leftright($vars){
    var $home = $('#home');
    var $interests = $('#interests');
    var $projects = $('#projects');
    var $personal = $('#about');
    var $contact = $('#contact');
    var $all = [$home, $interests, $projects, $personal, $contact];
    var $i = 0;
    for($i = 0;$i < 5; $i++){
      if($all[$i].visible()){
        if($vars.hasClass("left")) var $dest = "#" + $all[$i-1].attr('id');
        else if($vars.hasClass("right")) var $dest = "#" + $all[$i+1].attr('id');
        $('html, body').stop().animate({
          scrollLeft: $($dest).offset().left
        }, {duration: 1000, step: function(currentLeft, animProperties){
          hideButtons($dest);
          modifyNavbar($dest);
        }});
      }
    }

  }

  function hideInitialButtons(){
    if($('#home').visible()){
        $('.left').hide("slow");
        $('.right').show("slow");
    }
    else if($('#contact').visible()){
        $('.right').hide("slow");
        $('.left').show("slow");
    }
    else{
      $('.left').show("slow");
      $('.right').show("slow");
    }  
  }

  function hideButtons($vars){
    if($vars == "#home"){
        $('.left').hide("slow");
        $('.right').show("slow");
    }
    else if($vars == "#contact"){
        $('.right').hide("slow");
        $('.left').show("slow");
    }
    else{
      $('.left').show("slow");
      $('.right').show("slow");
    }  
  }

  function modifyNavbar($vars){
    var $all = [$('#home_btn'), $('#interests_btn'), $('#projects_btn'), $('#about_btn'), $('#contact_btn')];
    var $i = 0;
    var $change = $vars + "_btn";
    $($change).addClass('active',{duration: 1000});
    for($i = 0;$i < 5; $i++){
      var $name = "#" + $all[$i].attr('id');
      if($change != $name) $all[$i].removeClass('active');
    }
  }

  function modifyInitialNavbar($vars){
    var $all = [$('#home'), $('#interests'), $('#projects'), $('#about'), $('#contact')];
    var $all_btn = [$('#home_btn'), $('#interests_btn'), $('#projects_btn'), $('#about_btn'), $('#contact_btn')];
    var $i = 0;
    for($i = 0;$i < 5; $i++){
      if($all[$i].visible()) $all_btn[$i].addClass('active');
      else $all_btn[$i].removeClass('active');
    }
  }
