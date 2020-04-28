import MediaPlayerr from './MediaPlayerr.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const btnPlay = document.getElementById('btnPlay');
const btnMuted = document.getElementById('btnMuted');

const player = new MediaPlayerr({
    elem: video, plugins: [
        new AutoPlay()
    ]
});

btnPlay.onclick = () => {
    if (player.isPaused()) {
        player.play();
    } else {
        player.pause();
    }
};

btnMuted.onclick = () => {
    if (player.isMuted()) {
        player.unmuted();
    } else {
        player.muted();
    }
}
