function visualizaAba(evt, aba1, aba2, aba3) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(aba1).style.display = "block";
    if (aba2 != 'null') {
        document.getElementById(aba2).style.display = "block";
    }
    if (aba3 != 'null') {
        document.getElementById(aba3).style.display = "block";
    }
    evt.currentTarget.className += " active";
}


function more1(name) {
    document.getElementById(name).stepUp(1);
}

function more2() {
    document.getElementById("num2").stepUp(1);
    document.getElementById("GENnum2").stepUp(1);
}

function more3() {
    document.getElementById("num3").stepUp(1);
    document.getElementById("ARTnum3").stepUp(1);
}

function more4() {
    document.getElementById("num4").stepUp(1);
    document.getElementById("GENnum4").stepUp(1);
}