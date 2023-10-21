(function(){
    "use strict";
    console.log('Darkmode 0.1.1 - darkmode.js')

    function toggle_darkmode(){
        if(document.querySelectorAll("style[id='DarkMode']").length == 0){

            //var style = document.createElement('style');
            //style.type = 'text/css';
            //style.innerHTML = '* { color: #aaa !important; background-color: #000 !important; }';
            //document.getElementsByTagName('head')[0].appendChild(style);

            var style = document.createElement("style");
            style.type = "text/css";
            style.id = "DarkMode";
            var head = document.head; head.appendChild(style);
            style.sheet.insertRule("* { color: #aaa !important; background-color: #000 !important; }");


        } else {
            document.querySelectorAll("style[id='DarkMode']")[0].remove();
        }
    }

    document.addEventListener('keydown', (event) => {
        //console.log(event.key)
        if (event.key == '°' || event.key == '˚') { // macBook: Shift + Alt + ` = ˚
            //console.log((document.activeElement + ""))
            if(!((document.activeElement + "").split("[object HTMLInputElement]").length == 2 || (document.activeElement + "").split("[object HTMLTextAreaElement]").length == 2)){
                toggle_darkmode();
            }
        }
    });

})();