!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports={initOptions:{center:{lat:52.020837,lng:19.152629},zoom:6},mapElement:"facilities-map",listElement:"facilities-list",searchElement:"facilities-autocomplete"}},function(t,e,n){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function l(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(v(i.parts[a],e))}else{for(var s=[];a<i.parts.length;a++)s.push(v(i.parts[a],e));r[i.id]={id:i.id,refs:1,parts:s}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var i=n.nc;i&&(t.attributes.nonce=i)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e,n){var i=n.css,r=n.media,o=n.sourceMap;if(r&&t.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var h=null,m=0;function v(t,e){var n,i,r;if(e.singleton){var o=m++;n=h||(h=c(e)),i=d.bind(null,n,o,!1),r=d.bind(null,n,o,!0)}else n=c(e),i=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t,e);return l(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var a=n[o],c=r[a.id];c&&(c.refs--,i.push(c))}t&&l(s(t,e),e);for(var u=0;u<i.length;u++){var f=i[u];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete r[f.id]}}}}},function(t,e,n){t.exports=n(7)},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};n(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};n(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),o=function(){function t(){}return t.includeHTML=function(t,e){var n=document.getElementById(t),i=e instanceof Array?e.join(""):e;null!==n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",i))},t.addEvent=function(t,e,n){[].forEach.call(t,(function(t){t.addEventListener(e,n)}))},t}(),a=function(){function t(){}return t.findFacilityByValue=function(t,e,n){return t.find((function(t){return void 0!==t[e]&&t[e]===n}))},t}(),s=(n(3),function(){function t(t,e,n){var i=this;this.filterFacilities=function(){var t=i.map.getBounds()||null;null!==t&&(i.filteredList=i.list.filter((function(e){return t.contains({lat:e.lat,lng:e.lng})})))},this.updateList=function(){o.includeHTML(i.containerId,i.renderElements());var t=document.querySelectorAll(".facility");o.addEvent(t,"click",i.previewFacility)},this.previewFacility=function(t){if(t.target instanceof HTMLElement){var e=t.target.dataset.id||"",n=a.findFacilityByValue(i.list,"id",parseInt(e,10));if(void 0!==n){i.selectedFacility=n,i.previewMode=!0,i.map.setCenter({lat:n.lat,lng:n.lng}),i.map.setZoom(17),o.includeHTML(i.containerId,i.renderPreview());var r=document.getElementById("back-from-preview");null!=r&&r.addEventListener("click",(function(){return i.backToList()}))}}},this.backToList=function(){i.previewMode=!1,i.filterFacilities(),i.updateList()},this.containerId=n,this.map=e,this.list=t,this.filteredList=[],this.selectedFacility=null,this.previewMode=!1}return t.prototype.init=function(){var t=this;google.maps.event.addListener(this.map,"bounds_changed",(function(){t.previewMode||(t.filterFacilities(),t.updateList())}))},t.prototype.renderElements=function(){return this.filteredList.map((function(t){return'\n            <div class="facility" data-id="'+t.id+'">'+t.name+"</div>\n        "}))},t.prototype.renderPreview=function(){return'<div>\n            <a href="javascript:void(0)" id="back-from-preview">go back</a>\n            <h2>'+(this.selectedFacility?this.selectedFacility.name:"")+"</h2>\n            <p>"+(this.selectedFacility?this.selectedFacility.address:"")+"</p>\n        </div>"},t}()),l=(n(5),function(){function t(t,e,n,i){this.containerId=i,this.initMapOptions=t,this.facilities=e,this.infoWindow=n,this.map=new google.maps.Map(document.getElementById(this.containerId),this.initMapOptions),this.markers=null,this.markerCluster=null,this.facilitiesList=null}return t.prototype.init=function(){var t=this;this.initMarkers(),navigator.geolocation&&navigator.geolocation.getCurrentPosition&&navigator.geolocation.getCurrentPosition((function(e){var n={lat:e.coords.latitude,lng:e.coords.longitude};t.map.setCenter(n),t.map.setZoom(8)}),(function(){}))},t.prototype.setFacilitiesList=function(t){this.facilitiesList=t},t.prototype.getMap=function(){return this.map},t.prototype.initMarkers=function(){var t=this;this.markers=this.facilities.map((function(e){var n=new google.maps.Marker({position:{lat:e.lat,lng:e.lng}});return n.addListener("click",(function(){t.infoWindow.setContent(e.name),t.infoWindow.open(t.map,n)})),n})),this.markerCluster=new MarkerClusterer(this.map,this.markers,{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"})},t}()),c=function(){function t(t,e){this.elementId=e,this.map=t,this.autocomplete=null}return t.prototype.init=function(){var t=this,e=document.getElementById(this.elementId);null!==e&&e instanceof HTMLInputElement&&(this.autocomplete=new google.maps.places.Autocomplete(e),null!==this.autocomplete&&this.autocomplete.addListener("place_changed",(function(){if(null!==t.autocomplete){var e=t.autocomplete.getPlace();e.geometry&&(e.geometry.viewport?t.map.fitBounds(e.geometry.viewport):(t.map.setCenter(e.geometry.location),t.map.setZoom(17)))}})))},t}(),u=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function s(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))},f=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},d=function(){function t(){}return t.getFacilities=function(){return u(this,void 0,void 0,(function(){return f(this,(function(t){switch(t.label){case 0:return[4,fetch("/data/facilities.json")];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}}))}))},t}(),p=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function s(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))},h=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};document.addEventListener("DOMContentLoaded",(function(){return p(void 0,void 0,void 0,(function(){var t,e,n,i;return h(this,(function(o){switch(o.label){case 0:return[4,d.getFacilities()];case 1:return t=o.sent(),e=new google.maps.InfoWindow,(n=new l(r.a.initOptions,t,e,r.a.mapElement)).init(),(i=new s(t,n.getMap(),r.a.listElement)).init(),n.setFacilitiesList(i),new c(n.getMap(),r.a.searchElement).init(),[2]}}))}))}))}]);