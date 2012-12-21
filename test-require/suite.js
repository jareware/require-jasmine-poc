define([ 'jasmine-runner' ], function(jasmineRunner) {

    require([
        'spec/PlayerSpec',
        'spec/SongSpec'
    ], jasmineRunner);

});