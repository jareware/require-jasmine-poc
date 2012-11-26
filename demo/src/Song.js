define([ 'src/Player' ], function(Player) {

    function Song() {}

    Song.prototype.getPlayerForThisSong = function() {
        var p = new Player();
        p.play(this);
        return p;
    };

    return Song;

});