function playSong(songPath) {
    const audioPlayer = document.getElementById('audio-controls');
    const audioSource = document.getElementById('song');
    
    audioSource.src = songPath;
    audioPlayer.load();
    audioPlayer.play();
}

function updateSongDescription(newText) {
  const songDescription = document.getElementById("song-description");
  if (songDescription) {
    songDescription.textContent = newText;
  }
}

function loopSong() {
  const audioPlayer = document.getElementById("audio-controls");
  const loopButton = document.getElementById("loop-button");

  if (!audioPlayer || !loopButton) return;

  audioPlayer.loop = !audioPlayer.loop;

  loopButton.textContent = audioPlayer.loop ? "Loop: On" : "Loop: Off";
}

const autoplayStates = ["off", "autoplay", "shuffle"];
let currentAutoplayState = 0; 

const playlistButtons = Array.from(document.querySelectorAll(".playlist button"));
const audioPlayer = document.getElementById("audio-controls");
const autoplayButton = document.getElementById("autoplay-button");

function updateAutoplayButton() {
  const state = autoplayStates[currentAutoplayState];
  autoplayButton.textContent = `Autoplay: ${state.charAt(0).toUpperCase() + state.slice(1)}`;
}

function toggleAutoplay() {
  currentAutoplayState = (currentAutoplayState + 1) % autoplayStates.length;
  updateAutoplayButton();
}

audioPlayer.addEventListener("ended", () => {
  const state = autoplayStates[currentAutoplayState];

  if (state === "off") return;

  if (state === "autoplay") {
let nextIndex = (currentSongIndex + 1) % playlistButtons.length;
    playSongByIndex(nextIndex);
  }

  if (state === "shuffle") {
    let randomButton;
    if (playlistButtons.length > 1) {
      do {
        randomButton = playlistButtons[Math.floor(Math.random() * playlistButtons.length)];
      } while (randomButton.dataset.src === audioPlayer.src); 
    } else {
      randomButton = playlistButtons[0];
    }
    if (randomButton) randomButton.click();
  }
});

let currentSongIndex = 0;

function playSongByIndex(index) {
  if (index < 0 || index >= playlistButtons.length) return;
  const btn = playlistButtons[index];
  currentSongIndex = index;
  btn.click();
}

updateAutoplayButton();