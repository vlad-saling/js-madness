var pluginName = {
    'name': 'pluginName',
    init: function() {
        this.render(); 
    },
    render: function() {
        console.log(coreObject.core + ' call from plugin')
    }    
}


if ( typeof coreObject !== 'undefined' ) {
    coreObject.set(pluginName);
}
else if ( typeof pluginRegistry == 'undefined' ) {
    var coreObject = { 'plugins': ['pluginName']}
}



