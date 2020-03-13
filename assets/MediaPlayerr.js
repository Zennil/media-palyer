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

export default MediaPlayerr;