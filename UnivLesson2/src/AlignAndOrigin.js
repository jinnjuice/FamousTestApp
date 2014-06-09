define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var View = require('famous/core/View');

    var align = [0.5, 0.5];
    var origin = [0.5, 0.5];

    // create the main context
    var mainContext = Engine.createContext();

    // your app here

    // align and origin
    var view = new View();

    view.add(new Surface({
        properties: {
            backgroundColor: '#fa5c4f'
        }
    }));

    var viewModifier = new StateModifier({
        size: [200, 200],
        origin: origin,
        align: align
    });

    var positions = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1]
    ];

    for (var i=0; i<positions.length; i++){
        var surface = new Surface({
            size: [true, true],
            content: 'origin:<br>' + positions[i]
        });

        var modifier = new StateModifier({
        origin: positions[i],
        align: positions[i]
    });

        view.add(modifier).add(surface);
    }

    mainContext.add(viewModifier).add(view);

    for (var i=0; i<positions.length; i++){
        var surface = new Surface({
            size: [true, true],
            content: 'align:<br>' + positions[i]
        });

        var modifier = new StateModifier({
            origin: positions[i],
            align: positions[i]
        });

        mainContext.add(modifier).add(surface);
    }

});
