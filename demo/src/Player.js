define([], function() {

    function Player() {}

    Player.prototype.play = function(song) {
        this.currentlyPlayingSong = song;
        this.isPlaying = true;
    };

    Player.prototype.pause = function() {
        this.isPlaying = false;
    };

    return Player;

});