var CVApp= angular.module('CVApp',['ngAnimate']);

CVApp.controller('CVCtrl',function($scope){
   $scope.display=function (element) {
     switch(element){
      case "first": $scope.first =!$scope.first;
                    break;
      case "GIE": $scope.GIE =!$scope.GIE;
                    break;
      case "diploma": $scope.diploma =!$scope.diploma;
                    break;
      case "GOA": $scope.GOA =!$scope.GOA;
                    break;
      case "ITCE": $scope.ITCE =!$scope.ITCE;
                    break;
      case "SIEN": $scope.SIEN =!$scope.SIEN;
                    break;
       case "end": $scope.end =!$scope.end;
                    break;
        default:break;
    };
   };
    });