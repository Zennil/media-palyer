import MediaPlayerr from './MediaPlayerr';

const video = document.querySelector('video');
const btn = document.querySelector('button');


const player = new MediaPlayerr({ elem: video });

btn.onclick = () => {
    if (player.isPaused()) {
        player.play();
    } else {
        player.pause();
    }
};