class MediaPlayerr {
    constructor(config) {
        this.media = config.elem;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };
        this.plugins.forEach(plugIn => {
            plugIn.run(player);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    isPaused() {
        return this.media.paused;
    }
    muted() {
        this.media.muted = true;
    }
    unmuted() {
        this.media.muted = false;
    }
    isMuted() {
        return this.media.muted;
    }
}

export default MediaPlayerr; 