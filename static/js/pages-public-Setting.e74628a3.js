(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-Setting"],{"038f":function(t,a,e){"use strict";e.r(a);var i=e("7e46"),n=e("97f3");for(var u in n)"default"!==u&&function(t){e.d(a,t,(function(){return n[t]}))}(u);e("ce01");var r,s=e("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"0967910a",null,!1,i["a"],r);a["default"]=o.exports},"0df4":function(t,a,e){"use strict";e.r(a);var i=e("365a"),n=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(a,t,(function(){return i[t]}))}(u);a["default"]=n.a},1468:function(t,a,e){"use strict";e.r(a);var i=e("ee22"),n=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(a,t,(function(){return i[t]}))}(u);a["default"]=n.a},2138:function(t,a,e){var i=e("ef76");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("3f024161",i,!0,{sourceMap:!1,shadowMode:!1})},"31ef":function(t,a,e){var i=e("3332");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("4d44be44",i,!0,{sourceMap:!1,shadowMode:!1})},3332:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"uni-page-body[data-v-0c45c33e]{background:#333}body.?%PAGE?%[data-v-0c45c33e]{background:#333}",""]),t.exports=a},"365a":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"u-col",props:{span:{type:[Number,String],default:12},offset:{type:[Number,String],default:0},justify:{type:String,default:"start"},align:{type:String,default:"center"},textAlign:{type:String,default:"left"},stop:{type:Boolean,default:!0}},data:function(){return{gutter:20}},created:function(){this.parent=!1},mounted:function(){this.parent=this.$u.$parent.call(this,"u-row"),this.parent&&(this.gutter=this.parent.gutter)},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};a.default=i},"37a9":function(t,a,e){var i=e("a8eb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("24fef49e",i,!0,{sourceMap:!1,shadowMode:!1})},4004:function(t,a,e){"use strict";e.r(a);var i=e("e630"),n=e("0df4");for(var u in n)"default"!==u&&function(t){e.d(a,t,(function(){return n[t]}))}(u);e("befd");var r,s=e("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"0a5981a4",null,!1,i["a"],r);a["default"]=o.exports},"45d3":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"u-gap",style:[t.gapStyle]})},u=[]},4659:function(t,a,e){"use strict";e.r(a);var i=e("d5d4"),n=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(a,t,(function(){return i[t]}))}(u);a["default"]=n.a},"56ec":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"uni-page-body[data-v-345affc4]{background:#333}.u-row[data-v-345affc4]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-flex-wrap:wrap;flex-wrap:wrap}body.?%PAGE?%[data-v-345affc4]{background:#333}",""]),t.exports=a},"58df":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{}},onLoad:function(t){uni.setNavigationBarTitle({title:"设置"})},methods:{}};a.default=i},"7e46":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"u-slider",class:[t.disabled?"u-slider--disabled":""],style:{backgroundColor:t.inactiveColor},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-slider__gap",style:[t.barStyle,{height:t.height+"rpx",backgroundColor:t.activeColor}]},[e("v-uni-view",{staticClass:"u-slider__button-wrap",on:{touchstart:function(a){arguments[0]=a=t.$handleEvent(a),t.onTouchStart.apply(void 0,arguments)},touchmove:function(a){arguments[0]=a=t.$handleEvent(a),t.onTouchMove.apply(void 0,arguments)},touchend:function(a){arguments[0]=a=t.$handleEvent(a),t.onTouchEnd.apply(void 0,arguments)},touchcancel:function(a){arguments[0]=a=t.$handleEvent(a),t.onTouchEnd.apply(void 0,arguments)}}},[t.$slots.default||t.$slots.$default?t._t("default"):e("v-uni-view",{staticClass:"u-slider__button",style:[t.blockStyle,{height:t.blockWidth+"rpx",width:t.blockWidth+"rpx",backgroundColor:t.blockColor}]})],2)],1)],1)},u=[]},"89b6":function(t,a,e){var i=e("eb3a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6c075160",i,!0,{sourceMap:!1,shadowMode:!1})},"97f3":function(t,a,e){"use strict";e.r(a);var i=e("a49f"),n=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(a,t,(function(){return i[t]}))}(u);a["default"]=n.a},a49f:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"u-slider",props:{value:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},blockWidth:{type:[Number,String],default:30},min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},step:{type:[Number,String],default:1},height:{type:[Number,String],default:6},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#c0c4cc"},blockColor:{type:String,default:"#ffffff"},blockStyle:{type:Object,default:function(){return{}}}},data:function(){return{startX:0,status:"end",newValue:0,distanceX:0,startValue:0,barStyle:{},sliderRect:{left:0,width:0}}},watch:{value:function(t){"end"==this.status&&this.updateValue(this.value,!1)}},created:function(){this.updateValue(this.value,!1)},mounted:function(){var t=this;this.$uGetRect(".u-slider").then((function(a){t.sliderRect=a}))},methods:{onTouchStart:function(t){if(!this.disabled){this.startX=0;var a=t.touches[0];this.startX=a.clientX,this.startValue=this.format(this.value),this.status="start"}},onTouchMove:function(t){if(!this.disabled){"start"==this.status&&this.$emit("start");var a=t.touches[0];this.distanceX=a.clientX-this.sliderRect.left,this.newValue=this.distanceX/this.sliderRect.width*100,this.status="moving",this.$emit("moving"),this.updateValue(this.newValue,!0)}},onTouchEnd:function(){this.disabled||("moving"===this.status&&(this.updateValue(this.newValue,!1),this.$emit("end")),this.status="end")},updateValue:function(t,a){var e=this.format(t);if(!(e>this.max||e>100)){var i={width:e+"%"};1==a?i.transition="none":delete i.transition,this.$emit("input",e),this.barStyle=i}},format:function(t){return Math.round(Math.max(this.min,Math.min(t,this.max))/this.step)*this.step},onClick:function(t){if(!this.disabled){var a=(t.detail.x-this.sliderRect.left)/this.sliderRect.width*100;this.updateValue(a,!1)}}}};a.default=i},a8eb:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"uni-page-body[data-v-0a5981a4]{background:#333}.u-col-0[data-v-0a5981a4]{width:0}.u-col-1[data-v-0a5981a4]{width:calc(100%/12)}.u-col-2[data-v-0a5981a4]{width:calc(100%/12 * 2)}.u-col-3[data-v-0a5981a4]{width:calc(100%/12 * 3)}.u-col-4[data-v-0a5981a4]{width:calc(100%/12 * 4)}.u-col-5[data-v-0a5981a4]{width:calc(100%/12 * 5)}.u-col-6[data-v-0a5981a4]{width:calc(100%/12 * 6)}.u-col-7[data-v-0a5981a4]{width:calc(100%/12 * 7)}.u-col-8[data-v-0a5981a4]{width:calc(100%/12 * 8)}.u-col-9[data-v-0a5981a4]{width:calc(100%/12 * 9)}.u-col-10[data-v-0a5981a4]{width:calc(100%/12 * 10)}.u-col-11[data-v-0a5981a4]{width:calc(100%/12 * 11)}.u-col-12[data-v-0a5981a4]{width:calc(100%/12 * 12)}body.?%PAGE?%[data-v-0a5981a4]{background:#333}",""]),t.exports=a},be0e:function(t,a,e){"use strict";var i=e("31ef"),n=e.n(i);n.a},befd:function(t,a,e){"use strict";var i=e("37a9"),n=e.n(i);n.a},c6f8:function(t,a,e){"use strict";var i=e("ccc0"),n=e.n(i);n.a},c751:function(t,a,e){"use strict";e.r(a);var i=e("ef8f"),n=e("1468");for(var u in n)"default"!==u&&function(t){e.d(a,t,(function(){return n[t]}))}(u);e("c6f8");var r,s=e("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"345affc4",null,!1,i["a"],r);a["default"]=o.exports},ccc0:function(t,a,e){var i=e("56ec");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("2e648542",i,!0,{sourceMap:!1,shadowMode:!1})},ce01:function(t,a,e){"use strict";var i=e("89b6"),n=e.n(i);n.a},d50f:function(t,a,e){"use strict";e.r(a);var i=e("58df"),n=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(a,t,(function(){return i[t]}))}(u);a["default"]=n.a},d5d4:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};a.default=i},e23f:function(t,a,e){"use strict";e.r(a);var i=e("45d3"),n=e("4659");for(var u in n)"default"!==u&&function(t){e.d(a,t,(function(){return n[t]}))}(u);e("be0e");var r,s=e("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"0c45c33e",null,!1,i["a"],r);a["default"]=o.exports},e286:function(t,a,e){"use strict";var i=e("2138"),n=e.n(i);n.a},e586:function(t,a,e){"use strict";e.r(a);var i=e("fea0"),n=e("d50f");for(var u in n)"default"!==u&&function(t){e.d(a,t,(function(){return n[t]}))}(u);e("e286");var r,s=e("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"ef373ef8",null,!1,i["a"],r);a["default"]=o.exports},e630:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"u-col",class:["u-col-"+t.span],style:{padding:"0 "+Number(t.gutter)/2+"rpx",marginLeft:100/12*t.offset+"%",flex:"0 0 "+100/12*t.span+"%",alignItems:t.uAlignItem,justifyContent:t.uJustify,textAlign:t.textAlign},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},u=[]},eb3a:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'uni-page-body[data-v-0967910a]{background:#333}.u-slider[data-v-0967910a]{position:relative;-webkit-border-radius:999px;border-radius:999px;border-radius:999px;background-color:#ebedf0}.u-slider[data-v-0967910a]:before{position:absolute;right:0;left:0;content:"";top:-8px;bottom:-8px;z-index:-1}.u-slider__gap[data-v-0967910a]{position:relative;-webkit-border-radius:inherit;border-radius:inherit;-webkit-transition:width .2s;transition:width .2s;transition:width .2s;background-color:#1989fa}.u-slider__button[data-v-0967910a]{width:24px;height:24px;-webkit-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.5);box-shadow:0 1px 2px rgba(0,0,0,.5);background-color:#fff;cursor:pointer}.u-slider__button-wrap[data-v-0967910a]{position:absolute;top:50%;right:0;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0)}.u-slider--disabled[data-v-0967910a]{opacity:.5}body.?%PAGE?%[data-v-0967910a]{background:#333}',""]),t.exports=a},ee22:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"u-row",props:{gutter:{type:[String,Number],default:20},justify:{type:String,default:"start"},align:{type:String,default:"center"},stop:{type:Boolean,default:!0}},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};a.default=i},ef76:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"uni-page-body[data-v-ef373ef8]{background:#333}.txt[data-v-ef373ef8]{color:#b2b2b2}body.?%PAGE?%[data-v-ef373ef8]{background:#333}",""]),t.exports=a},ef8f:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"u-row",style:{alignItems:t.uAlignItem,justifyContent:t.uJustify},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},u=[]},fea0:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return i}));var i={uGap:e("e23f").default,uRow:e("c751").default,uCol:e("4004").default,uSlider:e("038f").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticStyle:{background:"#000000"}},[e("u-gap",{attrs:{height:"20"}}),e("v-uni-view",{staticClass:"titleH5"},[e("v-uni-text",{staticClass:"titleH5_text"},[t._v("第三方解析")])],1),e("u-row",{attrs:{gutter:"16"}},[e("u-col",{staticClass:"txt",attrs:{span:"3"}},[t._v("解析服务器")]),e("u-col",{attrs:{span:"8"}},[e("v-uni-view",{staticClass:"txt"},[t._v("线路1（默认）")]),e("v-uni-view",{staticClass:"txt"},[t._v("线路2")]),e("v-uni-view",{staticClass:"txt"},[t._v("线路3")]),e("v-uni-view",{staticClass:"txt"},[t._v("线路4")]),e("v-uni-view",{staticClass:"txt"},[t._v("自定义")])],1)],1),e("u-gap",{attrs:{height:"20","bg-color":""}}),e("v-uni-view",{staticClass:"titleH5"},[e("v-uni-text",{staticClass:"titleH5_text"},[t._v("播放器设置")])],1),e("u-row",{attrs:{gutter:"16"}},[e("u-col",{staticClass:"txt",attrs:{span:"6"}},[t._v("优先使用内置播放器")]),e("u-col",{staticClass:"txt",attrs:{span:"6"}},[t._v("一律使用外置播放器")])],1),e("u-row",{attrs:{gutter:"16"}},[e("u-col",{staticClass:"txt",attrs:{span:"3"}},[t._v("自动跳过片头")]),e("u-col",{attrs:{span:"8"}},[e("u-slider")],1)],1),e("u-row",{attrs:{gutter:"16"}},[e("u-col",{staticClass:"txt",attrs:{span:"3"}},[t._v("自动跳过片尾")]),e("u-col",{attrs:{span:"8"}},[e("u-slider")],1)],1),e("u-gap",{attrs:{height:"20","bg-color":""}}),e("v-uni-text",{staticClass:"txt"},[t._v("轻量版不支持播放器配置，请下载使用完整版。")]),e("u-gap",{attrs:{height:"20","bg-color":""}}),e("v-uni-view",{staticClass:"titleH5"},[e("v-uni-text",{staticClass:"titleH5_text"},[t._v("全屏旋转方向")])],1),e("u-row",{attrs:{gutter:"16"}},[e("u-col",{staticClass:"txt",attrs:{span:"6"}},[t._v("左侧旋转全屏")]),e("u-col",{staticClass:"txt",attrs:{span:"6"}},[t._v("右侧旋转全屏")])],1),e("v-uni-text",{staticClass:"txt"},[t._v("轻量版本全屏旋转是跟随手机重力感应或自动全屏不需要配置。")]),e("u-gap",{attrs:{height:"20","bg-color":""}})],1)},u=[]}}]);