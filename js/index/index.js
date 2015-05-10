
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  
  var VIDEO_ID = 'JGR03TzZONA';

  player = new YT.Player('player', {
      height: window.screen.height*1.3,
      width: window.screen.width*2,
      playerVars: { 
          'autoplay': 1, 
          'controls': 0, 
          'loop': 1,
          'autohide':1,
          'wmode':'opaque', 
          'showinfo' : 0,
          'showsearch' : 0,
          'enablejsapi' : 1,
          'start': 0,
          'end': 60,
          'vq': 'hd1080',
          'playlist': VIDEO_ID,
      },
      videoId: VIDEO_ID,
      events: {
          'onReady': onPlayerReady
      }
  });
}

function onPlayerReady(event) {
  $("#player").show();
  event.target.mute();
  $("#player").css("margin-left", -window.screen.width*.6);
}

$(function() {
  // jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
      console.log("lol")
  });

  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

  $('#typeform-full').attr("src", "https://hackpartners.typeform.com/to/Tu7SFf");

    $('#typeform-full').on('load', function() {
        setTimeout(function() { $('#typeform-full').show() }, 5000);
    });

});



