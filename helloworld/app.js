requirejs.config({
	//By default load any module IDs from WP4 folder
	baseUrl: '../',
	//except, if the module ID starts with "app",
    //load it from the js/ directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'mcorp': 'http://mcorp.no/lib/mcorp-2.0'
    },
    shim: {
        'mcorp': { exports: 'MCorp'}
    }
});


define (['mcorp'], function (MCorp) {
    var APPID = "8456579076771837888";
    return function (onReady) {
        var app = MCorp.app(APPID, {anon:true});
        app.run = function () {
            if (document.readyState === "complete") onReady(app.motions.shared);
        };
        window.onload = function () {
            if (app.readyState === app.STATE["OPEN"]) onReady(app.motions.shared);
        };
        app.init();
    }; 
});







   







