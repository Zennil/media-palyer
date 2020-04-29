export class MediaPlayerr {

    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.elem;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }

    private initPlugins() {
        this.plugins.forEach(plugIn => {
            plugIn.run(this);
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