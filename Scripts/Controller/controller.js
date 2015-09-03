var CVApp= angular.module('CVApp',['ngAnimate','promise-tracker']);

CVApp.controller('CVCtrl',function($scope, $http,promiseTracker, $log, $timeout){
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
 CVApp.controller('FormController',function($scope, $http) {
  // creating a blank object to hold our form information.
  //$scope will allow this to pass between controller and view
  $scope.formData = {};
  // submission message doesn't show when page loads
  $scope.submission = false;
  // Updated code thanks to Yotam
  var param = function(data) {
        var returnString = '';
        for (d in data){
            if (data.hasOwnProperty(d))
               returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
  };
  $scope.submitForm = function() {
    $http({
    method : 'POST',
    url : 'process.php',
    data : param($scope.formData), // pass in data as strings
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
  })
    .success(function(data) {
      if (!data.success) {
       // if not successful, bind errors to error variables
       $scope.errorName = data.errors.name;
       $scope.errorEmail = data.errors.email;
       $scope.errorTextarea = data.errors.message;
       $scope.submissionMessage = data.messageError;
       $scope.submission = true; //shows the error message
      } else {
      // if successful, bind success message to message
       $scope.submissionMessage = data.messageSuccess;
       $scope.formData = {}; // form fields are emptied with this line
       $scope.submission = true; //shows the success message
      }
     });
   };
 });
