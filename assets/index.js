const video = document.querySelector('video');
const btn = document.querySelector('button');

function MediaPlayerr(config) {
    this.media = config.elem;
}

MediaPlayerr.prototype.play = function () {
    this.media.play();
}
MediaPlayerr.prototype.pause = function () {
    this.media.pause();
}
MediaPlayerr.prototype.isPaused = function () {
    return this.media.paused;
}

const player = new MediaPlayerr({ elem: video });

btn.onclick = () => {
    if (player.isPaused()) {
        player.play();
    } else {
        player.pause();
    }
};