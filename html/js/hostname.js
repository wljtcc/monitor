function readTextFile(file){

    var runfile = "dash/hostname.sh";

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
          document.getElementById("hostname").innerHTML = txtFile.responseText.split("\n")[0];
        }
      }
    }
    txtFile.send(null);
}

readTextFile("../dash/hostname.txt");