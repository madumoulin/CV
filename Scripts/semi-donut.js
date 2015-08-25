function resize(){
    google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
}
$(document).ready(resize());
function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Competences', 'Competences per cent'],
          ['MVC',     45],
          ['ASP', 40],
          ['TFS', 30]
        ]);

        var options = {
          title: '.Net',
          pieHole: 0.4,
          backgroundColor:'none',
          legend:'none',
          width:'50%',
          height:'80%',
          maxZoomOut:1,
        keepInBounds: true
    
        };
         var chart = new google.visualization.PieChart(document.getElementById('dotNet'));
        chart.draw(data, options);
        
}
window.onresize= resize;
var handler = window.onresize;

handler.apply(window, [' On']);


       
      
      
