function readTextFile(file){

     var runfile = "dash/ps.sh";

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
            document.getElementById("ps01").innerHTML = txtFile.responseText.split("\n")[0];
            document.getElementById("ps02").innerHTML = txtFile.responseText.split("\n")[1];
            document.getElementById("ps03").innerHTML = txtFile.responseText.split("\n")[2];
            document.getElementById("ps04").innerHTML = txtFile.responseText.split("\n")[3];
            document.getElementById("ps05").innerHTML = txtFile.responseText.split("\n")[4];
            document.getElementById("ps06").innerHTML = txtFile.responseText.split("\n")[5];
            document.getElementById("ps07").innerHTML = txtFile.responseText.split("\n")[6];
            document.getElementById("ps08").innerHTML = txtFile.responseText.split("\n")[7];
            document.getElementById("ps09").innerHTML = txtFile.responseText.split("\n")[8];
            document.getElementById("ps10").innerHTML = txtFile.responseText.split("\n")[9];
            document.getElementById("ps11").innerHTML = txtFile.responseText.split("\n")[10];
            document.getElementById("ps12").innerHTML = txtFile.responseText.split("\n")[11];
            document.getElementById("ps13").innerHTML = txtFile.responseText.split("\n")[12];
            document.getElementById("ps14").innerHTML = txtFile.responseText.split("\n")[13];
            document.getElementById("ps15").innerHTML = txtFile.responseText.split("\n")[14];
            document.getElementById("ps16").innerHTML = txtFile.responseText.split("\n")[15];
        }
      }
    }
    txtFile.send(null);
}

readTextFile("../dash/ps.txt");