
    window.onload = function() {
        var text = document.getElementById("strin");
    var str="...WELCOME TO FRANCIS346...";
    var i = 0;

    function type() {
                        if (i < str.length) {
        text.innerHTML += str.charAt(i);
    i++;
    setTimeout(type, 150);
                        }
                    }
    setTimeout(type, 1000);
    }

