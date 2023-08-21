const playlistContainer = document.getElementById('playlist-container');
const playerContainer = document.getElementById('player-container');

const songs = [
    { title: 'Hello', artist: 'Shaws', src: 'hello!.mp3' },
    { title: 'Hide Your Heart', artist: 'Volt Vision', src: 'VOLT VISION, BRIGHTDVWN - Hide Your Heart [NCS Release].mp3' },
    { title: 'Heaven Knows', artist: 'Vizzen & Protolizard', src: 'Vizzen & Protolizard - Heaven Knows [NCS Release].mp3' },
    { title: 'Coming Home', artist: 'SirensCool', src: 'SirensCeol - Coming Home [NCS Release].mp3' },
    { title: 'Meant To be ', artist: 'Rave New World', src: 'Rave New World - Meant To Be [NCS Release].mp3' },
    { title: ' Thought It Was U', artist: 'JJL', src: 'JJL - Thought It Was U [NCS Release].mp3' },
    { title: 'Raw', artist: 'Shaws', src: 'r&b a min.mp3' },
    { title: 'Coming Soon', artist: '', src: 'song2.mp3' },
    
];

// Function to create playlist
function createPlaylist() {
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${song.title} - ${song.artist}`;
        listItem.addEventListener('click', () => playSong(index));
        playlistContainer.appendChild(listItem);
    });
}

// Function to play a song
function playSong(index) {
    const song = songs[index];
    const audioPlayer = document.createElement('audio');
    audioPlayer.src = song.src;
    audioPlayer.controls = true;
    
    playerContainer.innerHTML = '';
    playerContainer.appendChild(audioPlayer);
}

// Initialize the app
createPlaylist();


