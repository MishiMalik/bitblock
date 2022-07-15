$(window).scroll(function() {
    if($(window).scrollTop() <= 60) {
        document.getElementById("animatedheader").style.height = "0px";
        document.getElementById("animatedheader").style.display = 'none';
    }
 });