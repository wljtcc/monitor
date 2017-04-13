function loadJSON(file) {

    var json;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = JSON.parse(this.responseText);
            for (var i = 0; i < 15; i++){
                //alert( i + ": " + json[i].pid );
            }

        }
    };
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
 }


loadJSON("../dash/ps.json");