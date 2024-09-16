function playSong(songPath) {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    
    // Change the source and reload the player
    audioSource.src = songPath;
    audioPlayer.load();
    audioPlayer.play();
}