
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  
  var VIDEO_ID = 'hZwrOelxA2s';

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
  $("#player").css("margin-left", -window.screen.width*.5);
}

$(function() {
    $('#typeform-full').attr("src", "https://axsauze.typeform.com/to/GFChYr");

    $('#typeform-full').on('load', function() {
        setTimeout(function() { $('#typeform-full').show() }, 5000);
    });


    // var clock;
    // var now       = new Date();
    // var deadline  = new Date(2015, 01, 01, 12);

    // var dif = deadline.getTime() - now.getTime()

    // var seconds_left = dif / 1000;
    // console.log(now, deadline)
    // console.log(seconds_left);
    
    // $(document).ready(function() {
    //     var clock;

    //     clock = $('.clock').FlipClock({
    //         clockFace: 'DailyCounter',
    //         autoStart: true
    //     });
                
    //     clock.setTime(seconds_left);
    //     clock.setCountdown(true);
    //     clock.start();

    // });
});