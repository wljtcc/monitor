function readTextFile(file){

     var runfile = "dash/memory.sh";

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
          document.getElementById("total").innerHTML = (txtFile.responseText.split("\n")[0]/1024).toFixed(2) + " GB";
          document.getElementById("used").innerHTML = (txtFile.responseText.split("\n")[1]/1024).toFixed(2) + " GB";
          document.getElementById("free").innerHTML = (txtFile.responseText.split("\n")[2]/1024).toFixed(2) + " GB";
          document.getElementById("cache").innerHTML = (txtFile.responseText.split("\n")[3]/1024).toFixed(2) + " GB";
        }
      }
    }
    txtFile.send(null);

}

readTextFile("../dash/memory.txt");

setInterval(function(){
    readTextFile("../dash/memory.txt");
}, 2000);