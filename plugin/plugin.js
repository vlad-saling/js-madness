var pluginName = {
    init: function() {
        this.render(); 
    },
    render: function() {
        console.log(coreObject.core + ' call from plugin')
    }
}

coreObject.set(pluginName);

