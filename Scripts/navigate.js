
$(document).ready(function (){

        function myScroll(banner){
            $('html, body').animate({
                        scrollTop: banner
                    }, 1500);
        }
        var firstBanner= parseInt($("#firstBanner").offset().top);
        var secondBanner= parseInt($("#secondBanner").offset().top);
        var thirdBanner= parseInt($("#thirdBanner").offset().top);
        var fourthBanner= parseInt($("#fourthBanner").offset().top);
            $("#bot").click(function (){
                var currentY =parseInt(window.pageYOffset);
                
                switch(true){
                    case (currentY>=firstBanner && currentY <secondBanner):
                        myScroll(secondBanner);
                        break;
                    case (currentY>=secondBanner && currentY<thirdBanner):
                        myScroll(thirdBanner);
                        break;
                    case (currentY>=thirdBanner && currentY<fourthBanner):
                        myScroll(fourthBanner);
                        break;
                    default :
                        myScroll(firstBanner);
                        break;
                }
                //$(this).animate(function(){
                    
                //});
            });
        });