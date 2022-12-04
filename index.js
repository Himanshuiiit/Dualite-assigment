const video = document.getElementsByClassName("player")[0];

var i = setInterval(function () {
  if (video.readyState > 0) {
    if (video.currentTime >= video.duration / 2) {
      // operation here
      const toGoogle = document.getElementsByClassName("hidden");
      toGoogle[0].classList.remove("hidden");
      toGoogle[0].classList.remove("hidden");
      toGoogle[0].classList.remove("hidden");
      clearInterval(i);
    }
  }
}, 200);

function playVideo1() {
  video.pause();
  video.src =
    "videos/Earth Rotation Visualized in a Timelapse of the Milky Way Galaxy - 4K.mp4";
  video.load();
  video.currentTime = 0;
  video.play();

  document.getElementsByClassName("to-video")[0].classList.add("hidden");
  document.getElementsByClassName("to-video")[1].classList.add("hidden");
}

function playVideo2() {
  video.pause();
  video.src = "videos/Viewing the Earth Rotation from Space.mp4";
  video.load();
  video.currentTime = 0;
  video.play();

  document.getElementsByClassName("to-video")[0].classList.add("hidden");
  document.getElementsByClassName("to-video")[1].classList.add("hidden");
}
