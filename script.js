document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('video');
  var fileInput = document.getElementById('file-input');
  var message = document.getElementById('message');
  var playButton = document.getElementById('play-button');
  var pauseButton = document.getElementById('pause-button');
  var volumeUpButton = document.getElementById('volume-up-button');
  var volumeDownButton = document.getElementById('volume-down-button');

  fileInput.addEventListener('change', function(e) {
    var file = e.target.files[0];
    var fileURL = URL.createObjectURL(file);
    video.src = fileURL;
    message.style.display = 'block';
  });

  video.addEventListener('loadeddata', function() {
    message.style.display = 'none';
  });

  playButton.addEventListener('click', function() {
    video.play();
  });

  pauseButton.addEventListener('click', function() {
    video.pause();
  });

  volumeUpButton.addEventListener('click', function() {
    if (video.volume < 1) {
      video.volume += 0.1;
    }
  });

  volumeDownButton.addEventListener('click', function() {
    if (video.volume > 0) {
      video.volume -= 0.1;
    }
  });
});
