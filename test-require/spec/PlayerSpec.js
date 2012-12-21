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

            var localRequire = testUtils.createRequireContext({
                'src/Song': function(title) {
                    this.title = 'Mocked: ' + title;
                }
            });

            var LocalPlayer;

            localRequire([ 'src/Player' ], function(PlayerWithFakeDependencies) {
                LocalPlayer = PlayerWithFakeDependencies;
            });

            waitsFor(function() {
                return !!LocalPlayer;
            });

            runs(function() {

                var p = new LocalPlayer();

                p.playDefaultSong();

                expect(p.currentlyPlayingSong.title).toEqual('Mocked: The Sound of Default');

            });

        });

    });

});