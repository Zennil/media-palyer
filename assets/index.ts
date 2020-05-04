import MediaPlayerr from './MediaPlayerr';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');

const btnPlay: HTMLElement = document.getElementById('btnPlay');
const btnMuted: HTMLElement = document.getElementById('btnMuted');

const player = new MediaPlayerr({
    elem: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
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

if ('serviceWorker' in navigator) {
    // window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
        // Si es exitoso
        console.log('SW registrado correctamente');
    }, function (err) {
        // Si falla
        console.log('SW fallo', err);
    });
    // });
}