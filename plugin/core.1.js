//TODOs: 
// 1) make sure plugins wont execute before core is finished
// 2) make sure plugins get executed when registered ansynchronously
// 3) avoid triggering all plugins to re-render every time
// 4) think about proper order of plugins execution
// 5) register plugin into coreObject synchronously

//simulating network hang

    

    var coreObject = {
        'plugins': [],
        set: function(val) {
            this.plugins.push(val);
            core.pluginCalls();
        }  
    };

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
            console.log('Registered plugins: ' + coreObject.plugins.length);
        }
    }

    core.init(); 

    //in case plugins loaded before core, this merge in the temporary pluginRegistry into coreObject
    if ( typeof pluginRegistry !== 'undefined' ) {
        pluginRegistry.plugins.forEach(function(element) {
            coreObject.set(pluginName);
        }, this);
    }





