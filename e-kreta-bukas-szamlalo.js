// ==UserScript==
// @name         E-Kreta fail counter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the school!
// @author       Blackdog
// @match        https://*.e-kreta.hu/TanuloErtekeles/Osztalyzatok*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        var elem = document.getElementsByClassName('k-master-row'), childs, honap, osztalyzatok, jegyek, jegy, atlagdom, targydom, a, b, c;
        for(var i = 0;i<elem.length;i++){
            childs = elem[i].childNodes;
            targydom = null;
            jegyek = [];
            for(var x = 0;x<childs.length;x++){
                honap = childs[x];
                if(honap.className == 'honap') {
                    osztalyzatok = honap.childNodes;
                    for(var y = 0;y<osztalyzatok.length;y++) {
                        jegy = osztalyzatok[y];
                        if(jegy.className == 'kendoTooltip') {
                            jegy = parseInt(jegy.innerHTML);
                            for(var X=0;X<osztalyzatok[y].dataset.suly.match(/([\d])/)[0];X++) jegyek.push(jegy);
                        }
                    }
                }
                else if(honap.className == 'atlag kozepre') atlagdom = honap;
                else if(honap.getAttribute('role') == 'gridcell' && targydom == null && honap.className.indexOf('kretaRowNumber')==-1) targydom = honap;
            }
            a = jegyek.reduce((a, b) => a + b,0);
            b = c = jegyek.length;
            while(a/b > 2) { a++; b++; }
            if(b!=c) atlagdom.innerHTML += '<br /><font color="#0a0">+'+(b-c)+'</font>';
            if(c>0) targydom.innerHTML += ' <b>('+c+' jegy)</b>';
        }
    },1000);
})();
