var pluginName2 = {
    init: function() {
        ((this.rendered) ? null : this.render() )
    },
    render: function() {
        console.log('call from pluginName2')
        this.rendered = true;
    },
    rendered : false,  
}


if ( typeof coreObject !== 'undefined' ) {
    coreObject.set(pluginName2);
}
else {
    var coreObject = { 'plugins': [pluginName2]}
}

