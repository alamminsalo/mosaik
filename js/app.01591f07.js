(function(t){function e(e){for(var i,a,s=e[0],l=e[1],u=e[2],p=0,f=[];p<s.length;p++)a=s[p],r[a]&&f.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/mosaik/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("canvas-wrapper")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas-wrapper"},[n("div",{ref:"tools",staticClass:"tools"},[n("code",[t._v("Mosaik")]),n("img-chooser",{staticClass:"tool",on:{input:t.setImg}}),n("span",{staticClass:"tool"},[null!=t.img?n("select",{directives:[{name:"model",rawName:"v-model",value:t.iterations,expression:"iterations"}],attrs:{id:"iter"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.iterations=e.target.multiple?n:n[0]},t.makemosaik]}},[n("option",[t._v("0")]),n("option",[t._v("1")]),n("option",[t._v("2")]),n("option",[t._v("3")]),n("option",[t._v("4")]),n("option",[t._v("5")])]):t._e()]),n("span",{staticClass:"tool"},[null!=t.img?n("select",{directives:[{name:"model",rawName:"v-model",value:t.axis,expression:"axis"}],attrs:{id:"axises"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.axis=e.target.multiple?n:n[0]},t.makemosaik]}},[n("option",{attrs:{value:"0"}},[t._v("Vertical & Horizontal")]),n("option",{attrs:{value:"1"}},[t._v("Vertical only")]),n("option",{attrs:{value:"2"}},[t._v("Horizontal only")])]):t._e()])],1),n("canvas",{ref:"canv",class:{shown:null!=t.img,sx:t.w>=t.h,sy:t.h>=t.w}})])},s=[],l=(n("c5f6"),n("6aa2"),n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"imgchooser-wrapper"},[n("input",{attrs:{type:"file"},on:{change:t.handlefile}})])}),u=[],c={methods:{handlefile:function(t){var e=this;if(null!=t.target.files[0]){var n=new FileReader;n.onload=function(t){var n=new Image;n.onload=function(t){e.$emit("input",n)},n.src=t.target.result},n.readAsDataURL(t.target.files[0])}}}},p=c,f=n("2877"),h=Object(f["a"])(p,l,u,!1,null,null,null);h.options.__file="ImgChooser.vue";var v=h.exports,m=n("2ef0"),d=n.n(m),g={components:{ImgChooser:v},methods:{setImg:function(t){this.img=t,this.clear(),this.makemosaik()},reset:function(){this.provider.context.drawImage(this.img,0,0)},clear:function(){this.$refs["tools"];var t=this.$refs["canv"];this.w=this.img.width,this.h=this.img.height,t.width=this.w,t.height=this.h,this.iterations=0,this.axis=0,this.reset()},scale:function(){var t=this.provider.context,e=this.w/this.h;if(e>1){console.log("scaling horizontally..");var n=Math.min(1,screen.width/this.w);t.scale(n,n)}},partition:function(t,e){return d()(t).chunk(4*e).map(function(t,e){return[t,e]}).partition(function(t){return t[1]%2===0}).flatten().map(function(t){return t[0]}).flatten().value()},partitionHorizontal:function(t,e,n){var i=this;return d()(t).chunk(4*n).map(function(t){return i.partition(t,e)}).flatten().value()},makemosaik:function(){console.log("making mosaic..."),this.reset();for(var t=this.provider.context,e=t.getImageData(0,0,this.w,this.h).data,n=0;n<this.iterations;n++)console.log("pass: ",n),[0,1].includes(d.a.toNumber(this.axis))&&(e=this.partition(e,Math.floor(this.h/(this.iterations+1))*this.w)),[0,2].includes(d.a.toNumber(this.axis))&&(e=this.partitionHorizontal(e,Math.floor(this.w/(this.iterations+1)),this.w));var i=new ImageData(new Uint8ClampedArray(e),this.w,this.h);t.putImageData(i,0,0),console.log("Done!")}},data:function(){return{provider:{context:null},w:Number,h:Number,axis:Number,iterations:Number,img:null}},provide:function(){return{provider:this.provider}},mounted:function(){this.provider.context=this.$refs["canv"].getContext("2d")}},w=g,_=(n("61cc"),Object(f["a"])(w,a,s,!1,null,null,null));_.options.__file="CanvasWrapper.vue";var b=_.exports,x={name:"app",components:{CanvasWrapper:b}},y=x,k=Object(f["a"])(y,r,o,!1,null,null,null);k.options.__file="App.vue";var C=k.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(C)}}).$mount("#app")},"61cc":function(t,e,n){"use strict";var i=n("6661"),r=n.n(i);r.a},6661:function(t,e,n){}});
//# sourceMappingURL=app.01591f07.js.map