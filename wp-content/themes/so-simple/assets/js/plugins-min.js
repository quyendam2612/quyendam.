!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b:a.fluidvids=b()}(this,function(){"use strict";var a={selector:["iframe"],players:["www.youtube.com","player.vimeo.com"]},b=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),c=document.head||document.getElementsByTagName("head")[0],d=function(b){return new RegExp("^(https?:)?//(?:"+a.players.join("|")+").*$","i").test(b)},e=function(a,b){return parseInt(a,10)/parseInt(b,10)*100+"%"},f=function(a){if(d(a.src)&&!a.getAttribute("data-fluidvids")){var b=document.createElement("div");a.parentNode.insertBefore(b,a),a.className+=(a.className?" ":"")+"fluidvids-item",a.setAttribute("data-fluidvids","loaded"),b.className+="fluidvids",b.style.paddingTop=e(a.height,a.width),b.appendChild(a)}},g=function(){var a=document.createElement("div");a.innerHTML="<p>x</p><style>"+b+"</style>",c.appendChild(a.childNodes[1])};return a.render=function(){for(var b=document.querySelectorAll(a.selector.join()),c=b.length;c--;)f(b[c])},a.init=function(b){for(var c in b)a[c]=b[c];a.render(),g()},a});