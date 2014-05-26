define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var logo = new ImageSurface({
        size: [200, 200],
        content: 'http://code.famo.us/assets/famous_logo.svg',
        classes: ['double-sided']
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        transform : function(){
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }
    });

    mainContext.add(centerSpinModifier).add(logo);


    var firstSurface = new Surface({
        <!--Auto Size depending on content-->
        <!--size: [true, true],-->
        size: [200, 400],
        content: 'hello world',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#fa5c4f'
        }
    });

    firstSurface.setContent('<h1>Sean Kim</h1>');

    mainContext.add(firstSurface);

});
