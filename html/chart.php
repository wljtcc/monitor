<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'TesteX', 'TesteY'],
          ['2012',  100,      200],
          ['2013',  500,      600],
          ['2014',  300,      400],
          ['2015',  700,      800],
          ['2016',  550,      1000]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' },
          animation: {duration: 1000,
                      easing: 'out'
                     }
        };

        var chart = new google.visualization.LineChart(document.getElementById('dash01'));

        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="dash01" style="width: 900px; height: 500px"></div>
  </body>
</html>