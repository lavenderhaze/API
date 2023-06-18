document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("file-input");
    const videoPlayer = document.getElementById("video-player");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const volumeUpButton = document.getElementById("volume-up-button");
    const volumeDownButton = document.getElementById("volume-down-button");
  
    fileInput.addEventListener("change", function(event) {
      const file = event.target.files[0];
  
      if (file.type.includes("video")) {
        const reader = new FileReader();
  
        reader.onloadstart = function() {
          alert(`Cargando el archivo: ${file.name} (${formatBytes(file.size)})`);
        };
  
        reader.onload = function(event) {
          videoPlayer.src = URL.createObjectURL(file);
        };
  
        reader.readAsArrayBuffer(file);
      } else {
        alert("¡Error! Solo se permiten archivos de vídeo.");
      }
    });
  
    playButton.addEventListener("click", function() {
      videoPlayer.play();
    });
  
    pauseButton.addEventListener("click", function() {
      videoPlayer.pause();
    });
  
    volumeUpButton.addEventListener("click", function() {
      videoPlayer.volume += 0.1;
    });
  
    volumeDownButton.addEventListener("click", function() {
      videoPlayer.volume -= 0.1;
    });
  
    function formatBytes(bytes) {
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (bytes === 0) return "0 Bytes";
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
    }
  });
  