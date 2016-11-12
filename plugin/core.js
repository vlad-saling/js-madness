//TODOs: 

// 3) avoid triggering all plugins to re-render every time


//in case plugins loaded before core, they'll create coreObject which will be either extended with set
if ( typeof coreObject !== 'undefined' ) {
    coreObject.set = function(val) {
        this.plugins.push(val);
        core.pluginCalls();
    }  
}

//if core is the first, we'll make a niew coreObject
else {
    var coreObject = {
        'plugins': [],
        set: function(val) {
            this.plugins.push(val);
            core.pluginCalls();
        }  
    };
}



var core = {
    init: function() {
        //core triggered here
        this.render();        
    },
    render: function() {
        console.log(coreObject);
        //plugins called after core 
        this.pluginCalls();
    },
    pluginCalls: function() {
        //console.log(coreObject.plugins);
        coreObject.plugins.forEach(function(element) {
            element.init();
        }, this);
    }
}

core.init(); 

    




