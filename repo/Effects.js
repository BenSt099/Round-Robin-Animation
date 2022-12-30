function hideAllSquares(){
    document.getElementById('sq2').style.visibility = "hidden";
    document.getElementById('sq3').style.visibility = "hidden";
    document.getElementById('sq4').style.visibility = "hidden";
}

function spreadOut() {

    document.getElementById('sq2').style.transform = "translateX(-40px)";
    document.getElementById('sq2').style.transform = "translateY(-120px)";
    document.getElementById('sq2').style.transform = "translateX(80px)";
    document.getElementById('sq2').style.transition = "4s";
    document.getElementById('sq2').style.visibility = "visible";
    document.getElementById('sq2').style.transform = "translateX(-119px)";

    document.getElementById('sq3').style.transition = "4s";
    document.getElementById('sq3').style.visibility = "visible";
    document.getElementById('sq3').style.transform = "translate(-120px, -120px)";

    document.getElementById('sq4').style.transition = "4s";
    document.getElementById('sq4').style.visibility = "visible";
    document.getElementById('sq4').style.transform = "translateY(-120px)";
}