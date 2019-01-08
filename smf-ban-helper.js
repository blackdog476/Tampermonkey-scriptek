// ==UserScript==
// @name         SMF Ban helper
// @namespace    http://blckdg.ml/
// @version      0.1
// @description  try to take over the forum!
// @author       Blackdog
// @match        */index.php?action=admin;area=ban;sa=add;u=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var checkboxes = document.getElementsByClassName("input_check");
    for(var i=0;i<checkboxes.length;i++) {
        if(checkboxes[i].checked == false) checkboxes[i].click();
    }
})();
