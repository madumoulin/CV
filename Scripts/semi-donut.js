$(function() {
    Highcharts.setOptions({
        chart: {
            backgroundColor: null,
            borderWidth: 0,
            plotBackgroundColor: null,
            plotShadow: false,
            plotBorderWidth: 0
        },
        colors:['#34495e','#c0392b','#bdc3c7'],
        style:{
               fontSize: '1vw',
               border:'0',
               width:'20vw',
               height:'20vh'
            },
    });
});
$(document).ready(function (){
    var dotNet= new Highcharts.Chart({
        chart: {
         renderTo: 'dotNet'
        },
        title: {
            text: '.Net<br/> technologies',
            align: 'center',
            style:{
               fontSize: '3vw',
               padding:'0'
            },
            verticalAlign: 'middle',

        },
        tooltip: {
            pointFormat: '{series.name}',
             style: {
                        fontSize: '1vw',
                        width:'20vh',
                        height:'20vh'
                    }
        },
        plotOptions: {
            pie: {
                size:'80%',
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontSize: '1vw',
                        color: 'transparent'
                    }
                },
                startAngle: -90,
                endAngle: 70,
            }
        },
        series: [{
            type: 'pie',
            name: '.Net',
             style:{
               fontSize: '1vw',
               border:'1vw'
            },
            innerSize: '50%',
            data: [
                ['MVC',       45.00],
                ['ASP',           35.00],
            ],
        }],
        credits: {
      enabled: false
  }
    });
    
    var web= new Highcharts.Chart({
        chart: {
         renderTo: 'web'
        },
        title: {
            text: 'Web<br/> technologies',
            align: 'center',
            style:{
               fontSize: '3vw',
               padding:'0'
            },
            verticalAlign: 'middle',

        },
        tooltip: {
            pointFormat: '{series.name}',
             style: {
                        fontSize: '1vw',
                        width:'20vh',
                        height:'20vh'
                    }
        },
        plotOptions: {
            pie: {
                size:'80%',
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontSize: '1vw',
                        color: 'transparent'
                    }
                },
                startAngle: -90,
                endAngle: 88.33,
            }
        },
        series: [{
            type: 'pie',
            name: '.Net',
             style:{
               fontSize: '1vw',
               border:'1vw'
            },
            innerSize: '50%',
            data: [
                ['Html5',       33.33],
                ['CSS/LESS',           30.00],
                ['JavaScript',           25.00]
            ],
        }],
        credits: {
      enabled: false
  }
    });
});


