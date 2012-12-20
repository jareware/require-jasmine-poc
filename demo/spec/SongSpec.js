define([ 'src/Song' ], function(Song) {

    describe('Song', function() {

        it('allows setting a title', function() {

            var s = new Song('The Sound of Silence');

            expect(s.title).toEqual('The Sound of Silence');

        });

    });

});