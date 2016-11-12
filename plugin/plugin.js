var pluginName = {
    init: function() {
        ((this.rendered) ? null : this.render() )
    },
    render: function() {
        console.log('call from pluginName')
        this.rendered = true;
    },
    rendered : false,     
}


if ( typeof coreObject !== 'undefined' ) {
    coreObject.set(pluginName);
}
else {
    var coreObject = { 'plugins': [pluginName]}
}



