(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"1ca6":function(r,e,i){"use strict";var t=i("bfe0"),o=i.n(t);o.a},"2da7":function(r,e,i){"use strict";var t=i("c253"),o=i.n(t);o.a},3735:function(r,e,i){"use strict";i.r(e);var t=i("c07e"),o=i("48c7");for(var a in o)"default"!==a&&function(r){i.d(e,r,(function(){return o[r]}))}(a);i("2da7"),i("1ca6");var n,u=i("f0c5"),l=Object(u["a"])(o["default"],t["b"],t["c"],!1,null,"58ab1496",null,!1,t["a"],n);e["default"]=l.exports},"48c7":function(r,e,i){"use strict";i.r(e);var t=i("4e2d"),o=i.n(t);for(var a in t)"default"!==a&&function(r){i.d(e,r,(function(){return t[r]}))}(a);e["default"]=o.a},"4e2d":function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("96cf");var o=t(i("3b8d")),a={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,cehuashixingbieOptions:[],cehuashixingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:[],e=uni.getStorageSync("loginTable"),this.tableName=e,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"cehuashi"==this.tableName&&(this.cehuashixingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.cehuashixingbieOptions[0]),this.styleChange();case 6:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),methods:{yonghuxingbieChange:function(r){this.yonghuxingbieIndex=r.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},cehuashixingbieChange:function(r){this.cehuashixingbieIndex=r.target.value,this.ruleForm.xingbie=this.cehuashixingbieOptions[this.cehuashixingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.zhanghao||"yonghu"!=this.tableName){r.next=3;break}return this.$utils.msg("账号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if("yonghu"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=9;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 9:if(this.ruleForm.xingming||"yonghu"!=this.tableName){r.next=12;break}return this.$utils.msg("姓名不能为空"),r.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){r.next=15;break}return this.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 15:if("yonghu"!=this.tableName||!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){r.next=18;break}return this.$utils.msg("手机号码应输入手机格式"),r.abrupt("return");case 18:if(this.ruleForm.cehuazhanghao||"cehuashi"!=this.tableName){r.next=21;break}return this.$utils.msg("策划账号不能为空"),r.abrupt("return");case 21:if(this.ruleForm.mima||"cehuashi"!=this.tableName){r.next=24;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 24:if("cehuashi"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=27;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 27:if(this.ruleForm.cehuaxingming||"cehuashi"!=this.tableName){r.next=30;break}return this.$utils.msg("策划姓名不能为空"),r.abrupt("return");case 30:if("cehuashi"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){r.next=33;break}return this.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 33:if("cehuashi"!=this.tableName||!this.ruleForm.lianxishouji||this.$validate.isMobile(this.ruleForm.lianxishouji)){r.next=36;break}return this.$utils.msg("联系手机应输入手机格式"),r.abrupt("return");case 36:return r.next=38,this.$api.register("".concat(this.tableName),this.ruleForm,this.emailcode);case 38:this.$utils.msgBack("注册成功");case 40:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}()}};e.default=a},"82d8":function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,".btn-submit[data-v-58ab1496]{height:auto!important;line-height:%?88?%}",""]),r.exports=e},9832:function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-58ab1496]{height:calc(100vh - 44px);overflow:auto}.content[data-v-58ab1496]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220215/34c47727867041a19598ad58ce00997b.png);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-58ab1496]{text-align:center}.logo uni-image[data-v-58ab1496]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-58ab1496]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-58ab1496]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-58ab1496]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-58ab1496]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-58ab1496]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-58ab1496]{color:#b49950}.picker-select-input[data-v-58ab1496]{line-height:%?88?%}',""]),r.exports=e},bfe0:function(r,e,i){var t=i("9832");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var o=i("4f06").default;o("470496e4",t,!0,{sourceMap:!1,shadowMode:!1})},c07e:function(r,e,i){"use strict";var t,o=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"box",style:{padding:"48rpx",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0 4%",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"92%",borderStyle:"solid",height:"100%"}},[i("v-uni-view",{staticClass:"logo",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-image",{style:{padding:"0",boxShadow:"0 0 0px #59f43e",margin:"0",borderColor:"#ccc",borderRadius:"40rpx",borderWidth:"2rpx",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20201024/ed5e326ca66f403aa3197b5fbb4ec733.jpg",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20201024/ed5e326ca66f403aa3197b5fbb4ec733.jpg",mode:"aspectFill"}})],1),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.yonghuxingbieIndex,range:r.yonghuxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.yonghuxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 20rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:r.ruleForm.youxiang,callback:function(e){r.$set(r.ruleForm,"youxiang",e)},expression:"ruleForm.youxiang"}})],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机号码"},model:{value:r.ruleForm.shoujihaoma,callback:function(e){r.$set(r.ruleForm,"shoujihaoma",e)},expression:"ruleForm.shoujihaoma"}})],1):r._e(),"cehuashi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"策划账号"},model:{value:r.ruleForm.cehuazhanghao,callback:function(e){r.$set(r.ruleForm,"cehuazhanghao",e)},expression:"ruleForm.cehuazhanghao"}})],1):r._e(),"cehuashi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"cehuashi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"cehuashi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"策划姓名"},model:{value:r.ruleForm.cehuaxingming,callback:function(e){r.$set(r.ruleForm,"cehuaxingming",e)},expression:"ruleForm.cehuaxingming"}})],1):r._e(),"cehuashi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.cehuashixingbieIndex,range:r.cehuashixingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.cehuashixingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 20rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"cehuashi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:r.ruleForm.youxiang,callback:function(e){r.$set(r.ruleForm,"youxiang",e)},expression:"ruleForm.youxiang"}})],1):r._e(),"cehuashi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.16)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0 80rpx 80rpx 0",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"联系手机"},model:{value:r.ruleForm.lianxishouji,callback:function(e){r.$set(r.ruleForm,"lianxishouji",e)},expression:"ruleForm.lianxishouji"}})],1):r._e(),i("v-uni-button",{staticClass:"btn-submit",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 225, 109, 1)",borderRadius:"80rpx",color:"#333",borderWidth:"0",width:"100%",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.register.apply(void 0,arguments)}}},[r._v("注册")])],1)],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}))},c253:function(r,e,i){var t=i("82d8");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var o=i("4f06").default;o("0e3889e0",t,!0,{sourceMap:!1,shadowMode:!1})}}]);