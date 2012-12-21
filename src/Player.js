define([ 'src/Song' ], function(Song) {

    function Player() {}

    Player.prototype.play = function(song) {
        this.currentlyPlayingSong = song;
    };

    Player.prototype.stop = function() {
        this.currentlyPlayingSong = undefined;
    };

    Player.prototype.playDefaultSong = function() {
        this.play(new Song('The Sound of Default'));
    };

    return Player;

});