function MediaPlayerr(config) {
    this.media = config.elem;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayerr.prototype._initPlugins = function () {
    this.plugins.forEach(plugIn => {
        plugIn.run(this);
    });
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

MediaPlayerr.prototype.muted = function () {
    this.media.muted = true;
}

MediaPlayerr.prototype.unmuted = function () {
    this.media.muted = false;
}

MediaPlayerr.prototype.isMuted = function(){
    return this.media.muted;
}

export default MediaPlayerr; 