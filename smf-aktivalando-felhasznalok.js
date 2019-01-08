// ==UserScript==
// @name         SMF Regisztralasra varo felhasznalok
// @namespace    https://blckdg.ml
// @version      0.1
// @description  try to take over the smf!
// @author       Blackdog
// @match        https://forum.av-rp.com/index.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var span = document.createElement('span'), a = document.createElement('a'), li = document.createElement('li');
    span.className = 'firstlevel';
    span.innerText = 'Regisztrációk';
    a.appendChild(span);
    a.className = 'firstlevel';
    a.href = 'https://forum.av-rp.com/index.php?action=admin;area=viewmembers;sa=browse;showdupes=1;type=approve';
    li.appendChild(a);
    document.getElementById('button_home').parentNode.prepend(li);
})();
