define([ 'src/Player', 'test-utils' ], function(Player, testUtils) {

    describe('Player', function() {

        it('allows playing songs', function() {

            var p = new Player();

            p.play('my fave song');

            expect(p.currentlyPlayingSong).toBe('my fave song');

        });

        it('allows stopping songs', function() {

            var p = new Player();

            p.play('my fave song');
            p.stop();

            expect(p.currentlyPlayingSong).toBe(undefined);

        });

        it('allows mocking dependencies', function() {

            var Player;
            var localRequire = testUtils.createRequireContext({
                'src/Song': function(title) {
                    this.title = 'Mocked: ' + title;
                }
            });

            localRequire([ 'src/Player' ], function(PlayerWithFakeDependencies) {
                Player = PlayerWithFakeDependencies;
            });

            waitsFor(function() {
                return !!Player;
            });

            runs(function() {

                var p = new Player();

                p.playDefaultSong();

                expect(p.currentlyPlayingSong.title).toEqual('Mocked: The Sound of Default');

            });

        });

    });

});