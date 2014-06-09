define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // create the main context
    var mainContext = Engine.createContext();

    createSurface();
    createModifiedSurface();

    // your app here

    // unmodified surface
    function createSurface() {
        var surface = new Surface({
            size: [200, 200],
            content: 'surface',
            properties: {
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#fa5c4f'
            }
        });

        mainContext.add(surface);
    }

    // modified surface
    function createModifiedSurface() {
        var modifiedSurface = new Surface({
            size: [200, 200],
            content: 'modified surface',
            properties: {
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#fa5c4f'
            }
        });

        var stateModifier = new StateModifier({
            transform: Transform.translate(350, 300, 0)
        });

        mainContext.add(stateModifier).add(modifiedSurface);
    }
});
