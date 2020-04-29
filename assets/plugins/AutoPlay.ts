import { MediaPlayerr } from '../MediaPlayerr';
class AutoPlay {

    constructor() { }

    run(player: MediaPlayerr) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }

}

export default AutoPlay;