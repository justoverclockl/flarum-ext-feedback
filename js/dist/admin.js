module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}({1:function(e,t){e.exports=flarum.core.compat["admin/app"]},6:function(e,t,r){"use strict";r.r(t);var o,a=r(1),n=r.n(a);n.a.initializers.add("justoverclock/flarum-ext-feedback",(function(){n.a.extensionData.for("justoverclock-feedback").registerSetting({setting:"justoverclock-feedback.ContactMail",name:"ContactMail",type:"email",label:n.a.translator.trans("justoverclock-feedback.admin.contactmail"),help:n.a.translator.trans("justoverclock-feedback.admin.contactdesc")}).registerSetting({setting:"justoverclock-feedback.collect-email",name:"CollectEmail",type:"boolean",label:n.a.translator.trans("justoverclock-feedback.admin.collect-email"),help:n.a.translator.trans("justoverclock-feedback.admin.collect-email-help")}).registerSetting({setting:"justoverclock-feedback.position",options:o||(o=["right","left"].reduce((function(e,t){return e[t]=app.translator.trans("justoverclock-feedback.admin."+t+"_label"),e}),{})),name:"Position",type:"select",label:n.a.translator.trans("justoverclock-feedback.admin.position"),help:n.a.translator.trans("justoverclock-feedback.admin.position-help")}).registerSetting({setting:"justoverclock-feedback.backgroundColor",name:"BackgroundColor",type:"string",label:n.a.translator.trans("justoverclock-feedback.admin.background-color"),help:n.a.translator.trans("justoverclock-feedback.admin.background-color-help")}).registerSetting({setting:"justoverclock-feedback.fontColor",name:"FontColor",type:"string",label:n.a.translator.trans("justoverclock-feedback.admin.font-color"),help:n.a.translator.trans("justoverclock-feedback.admin.font-color-help")})}))}});
//# sourceMappingURL=admin.js.map