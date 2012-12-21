// Adapted from: http://stackoverflow.com/questions/11439540/how-can-i-mock-dependencies-for-unit-testing-in-requirejs
function createRequireContext(stubs) {

    var map = {};

    Object.keys(stubs).forEach(function(key) {
        map[key] = 'stub-' + key;
    });

    var context = require.config({
        context: Math.floor(Math.random() * 1000000),
        map: { '*': map }
    });

    Object.keys(stubs).forEach(function(key) {

        var stubname = 'stub-' + key;

        define(stubname, function () {
            return stubs[key];
        });

    });

    return context;

}

define([ 'src/Player' ], function(Player) {

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

            var localRequire = createRequireContext({
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