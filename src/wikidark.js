$(document).ready(function() {

    media = window.matchMedia('(prefers-color-scheme: dark)');

    media.addListener(function() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            $(".mw-parser-output")
                .find("*")
                .each(function(i, elem) { 
                    if(elem.style.borderWidth) { 
                        elem.style.borderColor = "red"
                    }
                    
                    if (elem.style.backgroundColor) {
                        elem.style.backgroundColor = "black";
                    }
                });
        } else {
            window.location.reload();
        }
    });
});
