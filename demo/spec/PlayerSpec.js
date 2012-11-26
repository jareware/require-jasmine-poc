define([ 'src/Player' ], function(Player) {

    describe('Player', function() {

        it('allows playing songs', function() {

            var p = new Player();

            p.play('my fave song');

            expect(p.currentlyPlayingSong).toBe('my fave song');

        });

    });

});