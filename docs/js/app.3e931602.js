(function(t){function e(e){for(var n,s,o=e[0],l=e[1],u=e[2],m=0,d=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"21e2":function(t,e,i){"use strict";i("6cda")},"40eb":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n,a=i("2b0e"),r=i("5c96"),s=i.n(r),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},l=[],u=(i("780d"),i("2877")),c={},m=Object(u["a"])(c,o,l,!1,null,null,null),d=m.exports,h=i("8c4f"),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-container"},[e("router-view")],1)},f=[],b={name:"home"},w=b,y=(i("5c76"),Object(u["a"])(w,p,f,!1,null,"072ce76e",null)),g=y.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ctn"},[e("div",{staticClass:"day-z"},[t._v("第 "+t._s(t.dayNow+1)+" 天")]),e("div",{staticClass:"mans-zone",style:{width:"600px",height:"720px"}},[e("TransitionGroup",{staticClass:"container",attrs:{tag:"ul",name:t.ifAnimation?"fade":"noanime"}},t._l(t.mans,(function(i){return e("el-tooltip",{key:i.id,staticClass:"item",attrs:{effect:"light",content:i.id,placement:"top"}},[e("div",{ref:"ref"+i.id,refInFor:!0,staticClass:"out-z"},[e("div",{directives:[{name:"show",rawName:"v-show",value:i.showblur,expression:"man.showblur"}],staticClass:"blur-z"}),e("div",{staticClass:"ctn-z"},[e("div",{staticClass:"score-d",style:{backgroundColor:t.colorMap[i.mansType]}},[t._v("\n              "+t._s(i.score)+"\n            ")]),e("div",{class:[i.mansType+"-manbox"]})])])])})),1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showParams,expression:"showParams"}],staticClass:"param-z"},[e("div",{staticClass:"param-d-left"},[e("el-form",{staticStyle:{"margin-top":"20px"},attrs:{"label-width":"100px"}},[e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"合作者数量"}},[e("el-input-number",{attrs:{disabled:t.running,size:"mini"},model:{value:t.typeManNum.blue,callback:function(e){t.$set(t.typeManNum,"blue",e)},expression:"typeManNum.blue"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"背叛者数量"}},[e("el-input-number",{attrs:{disabled:t.running,size:"mini"},model:{value:t.typeManNum.red,callback:function(e){t.$set(t.typeManNum,"red",e)},expression:"typeManNum.red"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"孤立者数量"}},[e("el-input-number",{attrs:{disabled:t.running,size:"mini"},model:{value:t.typeManNum.black,callback:function(e){t.$set(t.typeManNum,"black",e)},expression:"typeManNum.black"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"模拟天数"}},[e("el-input-number",{attrs:{disabled:t.running,size:"mini"},model:{value:t.simulationTime,callback:function(e){t.simulationTime=e},expression:"simulationTime"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"淘汰间隔"}},[e("el-input-number",{attrs:{disabled:t.running,size:"mini"},model:{value:t.checkStepDay,callback:function(e){t.checkStepDay=e},expression:"checkStepDay"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"淘汰人数"}},[e("el-checkbox",{attrs:{disabled:t.running,size:"mini"},model:{value:t.ifDieOutHalf,callback:function(e){t.ifDieOutHalf=e},expression:"ifDieOutHalf"}},[t._v("淘汰一半")])],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:""}},[e("el-input-number",{attrs:{disabled:t.ifDieOutHalf||t.running,size:"mini"},model:{value:t.dieOutManNum,callback:function(e){t.dieOutManNum=e},expression:"dieOutManNum"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"操作面板"}},[e("el-button",{attrs:{disabled:t.running,type:"primary",size:"mini"},on:{click:function(e){return t.beginSimu()}}},[t._v("开始模拟")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.stopSimu()}}},[t._v("重置模拟")])],1)],1)],1),e("div",{staticClass:"param-d-right"},[e("el-form",{staticStyle:{"margin-top":"20px"},attrs:{"label-width":"100px"}},[e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"加分规则："}}),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"合作被合作"}},[e("el-input-number",{attrs:{disabled:t.running,size:"mini"},model:{value:t.scoreMap.blue.blue,callback:function(e){t.$set(t.scoreMap.blue,"blue",e)},expression:"scoreMap.blue.blue"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"合作被背叛"}},[e("el-input-number",{attrs:{disabled:t.running,size:"mini"},model:{value:t.scoreMap.blue.red,callback:function(e){t.$set(t.scoreMap.blue,"red",e)},expression:"scoreMap.blue.red"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"背叛被合作"}},[e("el-input-number",{attrs:{disabled:t.running,size:"mini"},model:{value:t.scoreMap.red.blue,callback:function(e){t.$set(t.scoreMap.red,"blue",e)},expression:"scoreMap.red.blue"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"背叛被背叛"}},[e("el-input-number",{attrs:{disabled:t.running,size:"mini"},model:{value:t.scoreMap.red.red,callback:function(e){t.$set(t.scoreMap.red,"red",e)},expression:"scoreMap.red.red"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"开启动画"}},[e("el-switch",{attrs:{disabled:t.running,size:"mini"},model:{value:t.ifAnimation,callback:function(e){t.ifAnimation=e},expression:"ifAnimation"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"交互间隔ms"}},[e("el-input-number",{attrs:{disabled:!t.ifAnimation||t.running,size:"mini"},model:{value:t.blurStepTime,callback:function(e){t.blurStepTime=e},expression:"blurStepTime"}})],1),e("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"移除间隔ms"}},[e("el-input-number",{attrs:{disabled:!t.ifAnimation||t.running,size:"mini"},model:{value:t.dieOuStep,callback:function(e){t.dieOuStep=e},expression:"dieOuStep"}})],1)],1)],1),e("div",{staticClass:"cancel-b",on:{click:function(e){return t.closeParams()}}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showChart,expression:"showChart"}],staticClass:"chart-z"},[e("div",{staticClass:"chart-d",attrs:{id:"chart-d"}}),e("div",{staticClass:"cancel-b",on:{click:function(e){return t.closeChart()}}})]),e("div",{staticClass:"btn-zz"},[e("el-row",[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.closeParams()}}},[t._v("调节参数")]),e("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.closeChart()}}},[t._v(t._s(t.showChart?"关闭":"显示")+"图表")])],1)],1),e("TlTiltLine",{directives:[{name:"show",rawName:"v-show",value:t.showtiltline,expression:"showtiltline"}],attrs:{linesCoor:t.linesCoor}})],1)},x=[],S=(i("96cf"),i("1da1")),M=i("313e"),k={getIndexByPage:function(t,e){return[(t-1)*e+1,t*e]},formatDate:function(t){var e=t.getFullYear(),i=o(t.getMonth()+1),n=o(t.getDate()),a=o(t.getHours()),r=o(t.getMinutes()),s=o(t.getSeconds());return e+"-"+i+"-"+n+" "+a+":"+r+":"+s;function o(t){return t<10?"0"+t:t}},dateSomeDaysAgo:function(t,e){return new Date(new Date((new Date).toDateString()).getTime()-1440*t*60*1e3-e)},getDOMTrueSize:function(t,e){var i=null;return i=document.defaultView?document.defaultView.getComputedStyle(t)[e]:t.currentStyle[e],parseInt(i)},simpleDeepCopy:function(t){return JSON.parse(JSON.stringify(t))},sleep:function(t){return new Promise((function(e){setTimeout((function(){e(!0)}),t)}))},asyncNextTick:function(t){return new Promise((function(e){t.$nextTick((function(){e(!0)}))}))}},T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"TlTiltLine-ctn"},t._l(t.lines,(function(t,i){return e("div",{key:i,staticClass:"tilt-line",style:{width:"".concat(t.width,"px"),transform:"rotate(".concat(t.transform,"deg)"),left:"".concat(t.left,"px"),top:"".concat(t.top,"px")}})})),0)},O=[],C={name:"TlTiltLine",props:{linesCoor:{type:Array,default:function(){return[]}}},data:function(){return{lines:[]}},watch:{linesCoor:{handler:function(t){var e=[];for(var i in t){var n=t[i],a=Math.abs(n.start.x-n.end.x),r=Math.abs(n.start.y-n.end.y),s=Math.sqrt(Math.pow(a,2)+Math.pow(r,2)),o=[Math.min(n.start.x,n.end.x),Math.min(n.start.y,n.end.y)],l=o[0],u=o[1],c=1;(n.start.x-n.end.x)*(n.start.y-n.end.y)<0&&(c=-1),e[i]={width:s,transform:c*Math.atan(r/a)*180/Math.PI,left:-s/2+a/2+l,top:u+r/2}}this.lines=e},immediate:!0}}},D=C,N=(i("21e2"),Object(u["a"])(D,T,O,!1,null,"56d2cd48",null)),z=N.exports,_={name:"Single",components:{TlTiltLine:z},data:function(){return{typeManNum:{blue:30,red:30,black:30,white:0},simulationTime:50,checkStepDay:5,dieOutManNum:45,ifDieOutHalf:!0,ifAnimation:!1,blurStepTime:0,animateStep:0,dieOuStep:0,dayNow:0,mansType:{blue:"blue",red:"red",black:"black",white:"white"},colorMap:{blue:"#4A96CF",red:"#c1380f",black:"#2c2c2c",white:"#f5f5f5"},scoreMap:{blue:{blue:4,red:0},red:{blue:8,red:0},black:2},statesMap:{inting:"交互中...",dieing:"淘汰中...",copying:"复制中..."},nowState:"inting",mans:[],windowData:{width:1920,height:1080,limit:1080,center:[960,540]},showtiltline:!0,linesCoor:[],idstart:0,showParams:!0,showChart:!1,totalScore:0,totalScoreWithDayMark:[{dayNow:0,value:[0,0]}],running:!1}},watch:{typeManNum:{handler:function(t){t.blue+t.red+t.black>90||(this.ifDieOutHalf&&(this.dieOutManNum=Math.floor((t.blue+t.red+t.black)/2)),this.resetSimu())},deep:!0,immediate:!0},ifAnimation:{handler:function(t){t?(this.blurStepTime=50,this.animateStep=500,this.dieOuStep=100):(this.blurStepTime=0,this.animateStep=0,this.dieOuStep=0)},deep:!0,immediate:!0}},created:function(){this.refreshWindowData(),this.resetSimu()},mounted:function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=M["a"](document.getElementById("chart-d"));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),methods:{refreshWindowData:function(){this.windowData.width=window.innerWidth,this.windowData.height=window.innerHeight,this.windowData.limit=.5*Math.min(window.innerWidth,window.innerHeight),this.windowData.center=[window.innerWidth/2,window.innerHeight/2]},refreshMansArr:function(){this.mans=this.createMansArr(this.typeManNum)},createMansArr:function(t){for(var e=[],i=0;i<t.blue;i++)e.push(this.createMan(this.getManUid(),!0,this.mansType.blue,[this.limitRandom(this.windowData.limit),this.limitRandom(this.windowData.limit)]));for(var n=0;n<t.red;n++)e.push(this.createMan(this.getManUid(),!0,this.mansType.red,[this.limitRandom(this.windowData.limit),this.limitRandom(this.windowData.limit)]));for(var a=0;a<t.black;a++)e.push(this.createMan(this.getManUid(),!1,this.mansType.black,[this.limitRandom(this.windowData.limit),this.limitRandom(this.windowData.limit)]));return e},createMan:function(t,e,i,n,a){return{id:t,interoperable:e,mansType:i,position:n||[0,0],score:a||0,showblur:!1}},limitRandom:function(t){return Math.floor(Math.random()*t+1)},moveOneDay:function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(){var e,i,n,a,r,s,o,l,u,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this.blurStepTime,i=this.scoreMap,n=this.mans,a=0;case 4:if(!(a<n.length)){t.next=38;break}if(r=n[a],!r.interoperable){t.next=29;break}s=!0;case 8:if(!s){t.next=27;break}if(o=n[this.limitRandom(n.length)-1],!o.interoperable){t.next=25;break}return l=this.$refs["ref"+r.id][0].getBoundingClientRect(),u=this.$refs["ref"+o.id][0].getBoundingClientRect(),c={start:{x:l.left+l.width/2,y:l.top+l.height/2},end:{x:u.left+u.width/2,y:u.top+u.height/2}},this.linesCoor=[c],r.showblur=!0,r.score+=i[r.mansType][o.mansType],o.score+=i[o.mansType][r.mansType],this.totalScore+=i[r.mansType][o.mansType],this.totalScore+=i[o.mansType][r.mansType],t.next=22,k.sleep(e);case 22:return r.showblur=!1,this.linesCoor=[],t.abrupt("break",27);case 25:t.next=8;break;case 27:t.next=35;break;case 29:return r.showblur=!0,r.score+=i[r.mansType],this.totalScore+=i[r.mansType],t.next=34,k.sleep(e);case 34:r.showblur=!1;case 35:a++,t.next=4;break;case 38:return n.sort((function(t,e){return e.score-t.score})),this.dayNow++,this.totalScoreWithDayMark.push({dayNow:this.dayNow,value:[this.dayNow,this.totalScore]}),this.darwChart(),t.next=44,k.sleep(this.animateStep);case 44:return t.next=46,this.checkDieOut();case 46:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkDieOut:function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(){var e,i,n,a,r,s,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.dayNow%this.checkStepDay==0,!e){t.next=26;break}i=this.mans,n=this.dieOutManNum,a=0;case 5:if(!(a<n)){t.next=12;break}return i.pop(),t.next=9,k.sleep(this.dieOuStep);case 9:a++,t.next=5;break;case 12:r=0;case 13:if(!(r<n)){t.next=26;break}return s=i[r],o=Math.round(s.score/2),s.score-=o,l=this.createMan(this.getManUid(),s.interoperable,s.mansType,[this.limitRandom(this.windowData.limit),this.limitRandom(this.windowData.limit)],o),l.showblur=!0,i.push(l),t.next=22,k.sleep(this.dieOuStep);case 22:l.showblur=!1;case 23:r++,t.next=13;break;case 26:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getManUid:function(){return"man"+this.idstart++},closeParams:function(){this.showParams=!this.showParams},closeChart:function(){this.showChart=!this.showChart,n&&n.resize()},darwChart:function(){n&&n.resize(),n.setOption({title:{text:"团体总得分"},tooltip:{trigger:"axis",formatter:function(t){return t=t[0],"第".concat(t.data.dayNow+1,"天总分: ").concat(t.value[1],"分")},axisPointer:{animation:!1}},xAxis:{type:"value",minInterval:1,axisLabel:{fontSize:18,formatter:function(t,e){return"第".concat(t+1,"天")}},splitLine:{show:!1}},yAxis:{type:"value",axisLabel:{fontSize:18},splitLine:{show:!1}},series:[{name:"总分曲线",type:"line",smooth:!0,showSymbol:!1,data:this.totalScoreWithDayMark}]})},stopSimu:function(){this.running=!1,this.resetSimu()},resetSimu:function(){this.dayNow=0,this.linesCoor=[],this.idstart=0,this.totalScore=0,this.totalScoreWithDayMark=[{dayNow:0,value:[0,0]}],this.mans=[],this.refreshMansArr()},beginSimu:function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.running=!0,e=0;case 2:if(!(e<this.simulationTime)){t.next=12;break}if(this.running){t.next=6;break}return this.resetSimu(),t.abrupt("break",12);case 6:return t.next=9,this.moveOneDay();case 9:e++,t.next=2;break;case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},P=_,R=(i("601a"),Object(u["a"])(P,v,x,!1,null,"1c193102",null)),j=R.exports;a["default"].use(h["a"]);var A=new h["a"]({routes:[{path:"/",name:"home",component:g,redirect:{name:"single"},children:[{path:"single",name:"single",component:j}]}]}),H=i("2f62");a["default"].use(H["a"]);var W=new H["a"].Store({state:{},mutations:{},actions:{}}),L=(i("0fae"),i("84b8"),function(t){t.directive("centered",{inserted:function(t){var e=window.innerHeight,i=window.innerWidth,n=k.getDOMTrueSize(t,"height"),a=k.getDOMTrueSize(t,"width");t.style.top=(e-n)/2+"px",t.style.left=(i-a)/2+"px"}}),t.directive("drag",{inserted:function(t){t.style.cursor="move",t.onmousedown=function(e){var i=t.parentElement,n=e.clientX-i.offsetLeft,a=e.clientY-i.offsetTop;document.onmousemove=function(t){var e=t.clientX-n,r=t.clientY-a;i.style.left=e+"px",i.style.top=r+"px"},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}}}),t.directive("imgload",{inserted:function(t){t.onload=function(t){var e=t.target.parentElement,i=t.target;i.style.display="block";var n=$(e).width(),a=$(e).height(),r=$(i).width(),s=$(i).height();r/s>n/a?(i.style.width="100%",i.style.height="auto",i.style.marginTop=(a-$(i).height())/2+"px"):(i.style.width="auto",i.style.height="100%",i.style.marginTop=0,i.style.margin="0 auto")}}})});a["default"].use(L),a["default"].use(s.a),a["default"].config.productionTip=!1,new a["default"]({router:A,store:W,render:function(t){return t(d)}}).$mount("#app")},"5c76":function(t,e,i){"use strict";i("e72a")},"601a":function(t,e,i){"use strict";i("40eb")},"6cda":function(t,e,i){},"780d":function(t,e,i){"use strict";i("b0fd")},"84b8":function(t,e,i){},b0fd:function(t,e,i){},e72a:function(t,e,i){}});