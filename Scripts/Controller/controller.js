var CVApp= angular.module('CVApp',['ngAnimate']);

CVApp.controller('CVCtrl',function($scope){
   $scope.hoverIn= function(element){
    switch(element){
        case "next": this.hoverEditNext=true;
                    break;
        case "previous": this.hoverEditPrevious=true;
                    break;
        default:break;
    };
   }
   $scope.hoverOut=function (element) {
     switch(element){
        case "next": this.hoverEditNext=false;
                    break;
        case "previous": this.hoverEditPrevious=false;
                    break;
        default:break;
    };
   };
    });
/*.directive('hoverClass',function(){
    return{
    
        link:function(scope,element){
            element.on('mouseenter',function(){
            element.addClass('show');
            })
            element.on('mouseleave',function(){
                element.removeClass('show');
            })
        }
    }
})*/