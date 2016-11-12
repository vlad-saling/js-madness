var pluginName2 = {
    'name': 'pluginName2',
    init: function() {
        this.render(); 
    },
    render: function() {
        console.log(coreObject.core + ' call from plugin')
    }    
}


if ( typeof coreObject !== 'undefined' ) {
    coreObject.set(pluginName2);
}
else if ( typeof pluginRegistry == 'undefined' ) {
    var coreObject = { 'plugins': ['pluginName2']}
}

