define([ 'src/Song' ], function(Song) {

    describe('Song', function() {

        it('gives us a player instance', function() {

            var s = new Song();
            var p = s.getPlayerForThisSong();

            expect(p.isPlaying).toBeTruthy();
            expect(p.currentlyPlayingSong).toBe(s);

        });

    });

});