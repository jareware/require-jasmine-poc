define([ 'lib/jasmine-runner' ], function(runner) {

    require([
        'spec/PlayerSpec',
        'spec/SongSpec'
    ], runner);

});