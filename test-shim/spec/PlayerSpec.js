describe('Player', function() {

    it('allows playing songs', function() {

        var Player = testUtils.defines['src/Player']();
        var p = new Player();

        p.play('my fave song');

        expect(p.currentlyPlayingSong).toBe('my fave song');

    });

    it('allows stopping songs', function() {

        var Player = testUtils.defines['src/Player']();
        var p = new Player();

        p.play('my fave song');
        p.stop();

        expect(p.currentlyPlayingSong).toBe(undefined);

    });

    it('allows mocking dependencies', function() {

        function MockedSong(title) {

            this.title = 'Mocked: ' + title;

        }

        var Player = testUtils.defines['src/Player'](MockedSong);
        var p = new Player();

        p.playDefaultSong();

        expect(p.currentlyPlayingSong.title).toEqual('Mocked: The Sound of Default');

    });

});