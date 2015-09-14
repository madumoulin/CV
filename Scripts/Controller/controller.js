var CVApp= angular.module('CVApp',['ngAnimate'])
.controller('CVCtrl',function($scope, $http, $log, $timeout){
   $scope.nextBanner=
   function (banner){
            $('html, body').animate({
                        scrollTop: banner
                    }, 1500);
        }
   $scope.myScroll=
   function (){
        var firstBanner= parseInt($("#firstBanner").offset().top);
        var secondBanner= parseInt($("#secondBanner").offset().top);
        var thirdBanner= parseInt($("#thirdBanner").offset().top);
        var fourthBanner= parseInt($("#fourthBanner").offset().top);
        var fifthBanner= parseInt($("#fifthBanner").offset().top);

                var currentY =(parseInt(window.pageYOffset)+10);
                
                switch(true){
                    case (currentY>=firstBanner && (currentY <secondBanner)):
                        $scope.nextBanner(secondBanner);
                        break;
                    case (currentY>=secondBanner && (currentY<thirdBanner)):
                        $scope.nextBanner(thirdBanner);
                        break;
                    case (currentY>=thirdBanner && (currentY<fourthBanner)):
                        $scope.nextBanner(fourthBanner);
                        break;
                     case (currentY>=fourthBanner && (currentY<fifthBanner)):
                        $scope.nextBanner(fifthBanner);
                        break;
                    default :
                        $scope.nextBanner(firstBanner);
                        break;
                }
            }

    });

