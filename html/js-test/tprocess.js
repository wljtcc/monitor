var p = "limpo";

function readTextFile(file){

     var runfile = "dash/process.sh";

     $.ajax({
       type: 'HEAD',
       url: file,
       complete: function (xhr){
         if (xhr.status == 404){
           alert("(ERROR) File: " + file + " not exists. Run " + runfile + "!!!"); // Not found
         }
       }
     });

    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", file, true);
    txtFile.onreadystatechange = function()
    {
      if (txtFile.readyState === 4) {  // document is ready to parse.
        if (txtFile.status === 200) {  // file is found
          document.getElementById("process").innerHTML = (txtFile.responseText.split("\n")[0]);
          process = txtFile.responseText.split("\n")[0];
          //alert("Process: " + process);
          p = process;

          // Call Function
          InteractiveChart();

        }
      }
    }
    txtFile.send(null);

}


function InteractiveChart() {
    /*
     * Flot Interactive Chart
     * -----------------------
     */
    // We use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 100;

    function getRandomData() {

      if (data.length > 0)
        data = data.slice(5);

      // Do a random walk
      while (data.length < totalPoints) {

        var prev = data.length > 0 ? data[data.length - 1] : 50,
            //y = prev + Math.random() * 10 - 5;
            y = p;

        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }

        data.push(y);
      }

      // Zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
      }
      return res;
    }

    var interactive_plot = $.plot("#interactive", [getRandomData()], {
      grid: {
        borderColor: "#f3f3f3",
        borderWidth: 1,
        tickColor: "#f3f3f3"
      },
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color: "#3c8dbc"
      },
      lines: {
        fill: true, //Converts the line chart to area chart
        color: "#3c8dbc"
      },
      yaxis: {
        min: 0,
        max: 100,
        show: true
      },
      xaxis: {
        min: 0,
        max: 100,
        show: true
      }
    });

    var updateInterval = 1000; //Fetch data ever x milliseconds
    var realtime = "on"; //If == to on then fetch data every x seconds. else stop fetching
    function update() {

      interactive_plot.setData([getRandomData()]);

      // Since the axes don't change, we don't need to call plot.setupGrid()
      interactive_plot.draw();
      if (realtime === "on")
        setTimeout(update, updateInterval);
    }

    //INITIALIZE REALTIME DATA FETCHING
    if (realtime === "on") {
      update();
    }

    /*
     * END INTERACTIVE CHART
     */

 };

//setInterval(function(){
    readTextFile("../dash/process.txt");
//}, 1000);
