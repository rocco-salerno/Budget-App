//creating an anon function and IIFE, imediatly invoked function expression
var budgetController = (function() {
    
    var x = 23;  //this value can not be accessed outside of the IIFE
    
    var add = function(a) {
        return x + a;
    }
    
    return {
        publicTest: function(b) {  //this function has access to var x
            console.log(add(b));
        } //this will return  x + b because publicTest has access to IIFE even after return
    }
    
})();
//BudgetController


//creating another anon function and IIFE
var UIController = (function() {
    
    
})();

var controller = (function(budgetCtrl, UICtrl) {
    
    
})(budgetController, UIController);