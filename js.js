/*global $ */

var coreConf = {};


(function () {
    
   coreConf.set = function (setting) {
        $.extend(coreConf, setting);
        console.log(coreConf.setting.foo);
   };
   


})();



//    var foo = core.namespace(core, 'common.foo'),
//      isActive = false;


//    var myApp = (function() {
//
//        var id= 0;
//
//        return {
//            next: function() {
//                return id++;
//            },
//
//            reset: function() {
//                id = 0;
//            }
//        };
//    })();

//    var foo = (function() {
//        var isActive = false;
//        return {
//            init: function () {
//                if (foo.isActive) {
//                    alert('boo is active');
//                }
//            },
//            booInactive: function () {
//                if (!foo.isActive) {
//                    alert('boo is inactive');
//                }
//            }
//        }
//    })();
//
//    foo.isActive = true;
//    foo.init();


// // confusing variable passing
//    var y = "booish"
//
//    var foo = (function (x){
//
//        console.log(x);
//
//    })(y);






