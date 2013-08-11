wfi = function(){

    var fCache = [],
        waitingFor = 'jQuery';
    
    if (typeof arguments[0] == 'string'){
        waitingFor = arguments[0];
        for (var j = 1; j < arguments.length; j++){
            fCache.push(arguments[j]);
        }
    }
    else {
        fCache = Array.prototype.slice.call(arguments);
    }
           
    function execAll(){
        while(fCache.length > 0){
            fCache[0]();
            fCache.shift();
        }
    }
    
    function keepChecking(){
        if(typeof window[waitingFor] == "undefined"){
            setTimeout(function(){
                keepChecking();
            }, 4)
        }
        else{
            execAll();
        }
    }
    
    keepChecking();

}