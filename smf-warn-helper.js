// ==UserScript==
// @name         SMF warn helper
// @namespace    http://blckdg.ml/
// @version      0.1
// @description  try to take over the forum!
// @author       Blackdog
// @match        */index.php?action=profile;area=issuewarning;*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        document.querySelector('#warn_notify').click();
        document.querySelector('#warndiv1').onclick =
        document.querySelector('#warn_reason').onkeyup =
        document.querySelector('#warning_level').onchange = generateBody;
        generateBody();
        function generateBody() {
            var warnlevel = document.querySelector('#warning_text').innerHTML;
            var warnurl = document.referrer;
            var warnreason = document.querySelector('#warn_reason').value;
            var warnbody = "[b]Figyelmeztetést kaptál![/b]\n[b]Indok:[/b] "+warnreason+"\n[b]új százalék:[/b] "+warnlevel+"\n[b]Figyelmeztetett:[/b] saját neved\n[b]Hozzászólás:[/b] [url="+document.referrer+"]kattints ide[/url]\n\nÜdvözlettel,\nAVRP ~ Fórum csapata.";
            document.querySelector('#warn_body').value = warnbody;
        }
})();
