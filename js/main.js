var myApp=(function () {
   
    var _privateFunction=function(){
        return "Приватная функция"
    }
    return {
        publicFunction:function () {
             var that=this;
            console.log(this);
            console.log("Публичный метод");
            that.gg=9;
            return 1;
        }
        , getPrivateFunction:_privateFunction()
    }
})();


// console.log(myApp.getPrivateFunction);
// console.log(myApp.publicFunction());
// console.log(myApp.gg);

var newFunc=function(){
    return this.getPrivateFunction;
}

console.log(newFunc.apply(myApp));