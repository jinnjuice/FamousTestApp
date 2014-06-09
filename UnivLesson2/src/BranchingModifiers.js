define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here

    // branching modifiers
    var downMod = new StateModifier({
        transform: Transform.translate(0, 250, 0)
    });

    var rightMod = new StateModifier({
        transform: Transform.translate(200, 0, 0)
    });

    var leftSurface = new Surface({
        size: [120, 100],
        content: 'left surface',
        properties: {
            color: 'white',
            backgroundColor: '#fa5c4f'
        }
    });

    var rightSurface = new Surface({
        size: [120, 100],
        content: 'right surface',
        properties: {
            color: 'white',
            backgroundColor: '#404040'
        }
    });

    var node = mainContext.add(downMod);
    node.add(leftSurface);
    node.add(rightMod).add(rightSurface);

});
