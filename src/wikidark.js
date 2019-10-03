$(document).ready(function() {

    var mediaMatch = '(prefers-color-scheme: dark)';

    function matchFunc() {
        $(".mw-parser-output")
            .find("*")
            .each(function(i, elem) { 
                if(elem.style.borderWidth) { 
                    elem.style.borderColor = "red"
                }
                
                if (elem.style.backgroundColor) {
                    elem.style.backgroundColor = "inherit";
                }
            });
    }

    media = window.matchMedia(mediaMatch);
    media.addListener(function() {
        if (window.matchMedia(mediaMatch).matches) {
            matchFunc();
        } else {
            window.location.reload();
        }
    });

    if (window.matchMedia(mediaMatch).matches) {
        matchFunc();
    }
});
