webpackJsonp([1],{"8+5a":function(t,e){},"EJL+":function(t,e){},In4B:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(t){n("In4B")},null,null).exports,a=n("/ocq"),r={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{to_test:function(){this.$router.push({path:"/index"})},to_prop:function(){this.$router.push({path:"/parent"})},to_home:function(){this.$router.push({path:"/home"})}},watch:{$route:function(t,e){console.log(t,e)}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("button",{on:{click:t.to_test}},[t._v("去实验页面")]),t._v(" "),n("button",{on:{click:t.to_prop}},[t._v("去props页面")]),t._v(" "),n("button",{on:{click:t.to_home}},[t._v("去home页面")])])},staticRenderFns:[]};var l=n("VU/8")(r,c,!1,function(t){n("8+5a")},"data-v-2b2de12f",null).exports,u={name:"Index",data:function(){return{sups:[{name:"腾讯",people:"8000",field:"IT"},{name:"华为",people:"12000",field:"通信电子"},{name:"大疆",people:"4000",field:"无人机"},{name:"联想",people:"7000",field:"电脑"},{name:"索尼",people:"9000",field:"相机"},{name:"索尼",people:"9000",field:"相机"}],gcolor:"true"}},methods:{getid:function(t){console.log(t)},to_input:function(){this.$router.push({path:"/inword"})},c_color:function(){var t=this.$refs.box1;this.gcolor=!this.gcolor,console.log(this.gcolor),0==this.gcolor&&(t.style.backgroundColor="green"),1==this.gcolor&&(t.style.backgroundColor="red")}},mounted:function(){},beforeRouteEnter:function(t,e,n){n()}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[t._l(t.sups,function(e,s){return n("ul",{key:s},[n("li",{on:{click:function(e){t.getid(s)}}},[t._v("企业："+t._s(e.name))]),t._v(" "),n("li",[t._v("员工数："+t._s(e.people))]),t._v(" "),n("li",[t._v("行业："+t._s(e.field))])])}),t._v(" "),n("div",{ref:"box1",staticClass:"box1",attrs:{id:"box1"},on:{click:t.c_color}}),t._v(" "),n("div",[t._v("获取焦点："),n("input",{attrs:{type:"text"},on:{focus:t.to_input}})]),t._v(" "),n("div",{staticClass:"news"},[n("router-view")],1)],2)},staticRenderFns:[]};var p=n("VU/8")(u,m,!1,function(t){n("meTt")},null,null).exports,h=n("gwTc"),d={name:"News",data:function(){return{news:[],imgurl:"../../static/image/avatar/1.png"}},methods:{to_item:function(t){return this.$store.state.postId=t,this.$router.push({path:"/index/NewsItem"}),1}},mounted:function(){this.news=h.postList}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"as"},[t._v("\n   新闻信息\n   \n    "),t._l(t.news,function(e,s){return n("div",{key:s,on:{click:function(e){t.to_item(s)}}},[n("div",{staticClass:"post_container"},[n("div",{staticClass:"inf"},[n("img",{staticClass:"s_img",attrs:{src:e.avatar}}),t._v(" "),n("i",[t._v(t._s(e.title))])]),t._v(" "),n("img",{staticClass:"b_img",attrs:{src:e.imgulr}}),t._v(" "),n("p",[t._v(t._s(e.content))]),t._v(" "),n("p",{ref:"poid",refInFor:!0,staticClass:"n_show",attrs:{id:"poid"}},[t._v(t._s(e.postId))]),t._v(" "),t._m(0,!0)])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"f_inf"},[e("img",{staticClass:"s2_img",attrs:{src:"/static/images/icon/chat.png"}}),this._v(" "),e("i",[this._v("92")]),this._v(" "),e("img",{staticClass:"s2_img",attrs:{src:"/static/images/icon/chat1.png"}}),this._v(" "),e("i",[this._v("65")])])}]};var v=n("VU/8")(d,_,!1,function(t){n("EJL+")},null,null).exports,g=n("gwTc"),f={name:"NewsItem",data:function(){return{det:[]}},mounted:function(){var t=this.$store.state.postId;this.det=g.postList[t],console.log(this.det)}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"det_inf"},[n("img",{staticClass:"t_img",attrs:{src:t.det.imgulr}}),t._v(" "),n("div",{staticClass:"a_inf"},[n("img",{staticClass:"s_img",attrs:{src:t.det.avatar}}),t._v(" "),n("i",{staticClass:"author"},[t._v(t._s(t.det.author))]),t._v(" "),n("i",{staticClass:"author_t"},[t._v("发表于")]),t._v(" "),n("i",{staticClass:"author_t"},[t._v("24小时前")])]),t._v(" "),n("i",{staticClass:"t_tit"},[t._v(t._s(t.det.title))]),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"m_text"},[t._v(t._s(t.det.detail))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c_img"},[e("div",{staticClass:"us_b"},[e("img",{staticClass:"us_img",attrs:{src:"/static/images/icon/collection.png"}}),this._v(" "),e("img",{staticClass:"us_img",attrs:{src:"/static/images/icon/share.png"}})]),this._v(" "),e("div",{staticClass:"line"})])}]};var w=n("VU/8")(f,x,!1,function(t){n("zqol")},null,null).exports,C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"son"},[this._v("我是子组件                     "+this._s(this.sdas))])])},staticRenderFns:[]};var I={name:"Parent",data:function(){return{da:"这个数据来源于parent",fristname:"",lastname:"",count:0,sonmsg:""}},components:{son:n("VU/8")({name:"son",data:function(){return{msg:"这个数据来源于son"}},props:["sdas"],mounted:function(){this.$emit("asd",this.msg)}},C,!1,function(t){n("nzpB")},null,null).exports},computed:{fullname:function(){return this.fristname+"  "+this.lastname}},watch:{fristname:function(){this.count++},lastname:function(){this.count++},fullname:function(){this.count++}},methods:{dt:function(t){this.sonmsg=t}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"par"},[t._v("我是父组件")]),t._v(" "),n("son",{staticClass:"sono",attrs:{sdas:"有没有搞错"}}),t._v(" "),n("son",{on:{asd:t.dt}}),t._v(" "),n("p",[t._v(t._s(t.sonmsg))])],1)},staticRenderFns:[]};var $=n("VU/8")(I,q,!1,function(t){n("Vsq7")},null,null).exports,R={name:"inword",methods:{to_back:function(){window.history.go(-1)}},mounted:function(){}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{on:{click:this.to_back}},[this._v("<")]),this._v(" "),e("input",{attrs:{type:"text"}})])},staticRenderFns:[]};var b=n("VU/8")(R,V,!1,function(t){n("TZNq")},null,null).exports,y={name:"SieFooter",componentName:"SieFooter",props:{height:{type:String,default:"50px"}},mounted:function(){this.$el.parentNode.style.marginBottom="60px"}},T={render:function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"Sie-footer",style:{height:this.height}},[this._t("default")],2)},staticRenderFns:[]};var E={name:"siefooteritem",componentName:"siefooteritem",data:function(){return{value:"有了吗",gcolor:"true"}},methods:{c_color:function(){var t=this.$refs.footer_item;this.gcolor=!1,console.log(t.style.color),0==this.gcolor&&(t.style.color="red"),1==this.gcolor&&(t.style.color="rgb(65, 60, 60)")}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"footer_item",staticClass:"footer_item",on:{click:this.c_color}},[e("div",{staticClass:"icon"},[this._t("icon")],2),this._v(" "),e("div",{staticClass:"value"},[this._t("value")],2)])},staticRenderFns:[]};var k={name:"home",components:{SieFooter:n("VU/8")(y,T,!1,function(t){n("Y/Ow")},null,null).exports,siefooteritem:n("VU/8")(E,S,!1,function(t){n("wzvQ")},null,null).exports},data:function(){return{msg:"原生Swiper"}},methods:{t_one:function(){this.$router.push({path:"/home/one"})},t_two:function(){this.$router.push({path:"/home/two"})},t_three:function(){this.$router.push({path:"/home/three"})}},mounted:function(){}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MySwiper"},[n("router-view"),t._v(" "),n("SieFooter",[n("siefooteritem",{attrs:{link:"/home/one"}},[n("i",{staticClass:"iconfont icon-tuijianxiangmu",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),n("p",{attrs:{slot:"value"},slot:"value"},[t._v("推荐")])]),t._v(" "),n("siefooteritem",{attrs:{link:"/home/two"}},[n("i",{staticClass:"iconfont icon-tuijianxiangmu",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),n("p",{attrs:{slot:"value"},slot:"value"},[t._v("推荐")])]),t._v(" "),n("siefooteritem",{attrs:{link:"/home/three"}},[n("i",{staticClass:"iconfont icon-tuijianxiangmu",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),n("p",{attrs:{slot:"value"},slot:"value"},[t._v("推荐")])])],1)],1)},staticRenderFns:[]};var F=n("VU/8")(k,N,!1,function(t){n("ub8L")},null,null).exports,j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("我是第一个页面")])])}]},U=n("VU/8")({name:"one"},j,!1,null,null,null).exports,B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("我是第2个页面")])])}]},L=n("VU/8")({name:"two"},B,!1,null,null,null).exports,M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("我是第3个页面")])])}]},O=n("VU/8")({name:"three"},M,!1,null,null,null).exports;s.default.use(a.a);var D=new a.a({routes:[{path:"/",name:"HelloWorld",component:l},{path:"/index",name:"index",component:p,children:[{path:"/index",name:"News",component:v,children:[]},{path:"/index/NewsItem",name:"NewsItem",component:w}]},{path:"/parent",name:"parent",component:$},{path:"/inword",name:"inword",component:b},{path:"/home",name:"home",component:F,children:[{path:"/home/one",name:"one",component:U},{path:"/home/two",name:"two",component:L},{path:"/home/three",name:"three",component:O}]}]}),P=n("NYxO");s.default.use(P.a);var z=new P.a.Store({state:{postId:null}}),H=n("zL8q"),J=n.n(H);n("tvR6"),n("SJZ9");s.default.use(J.a),s.default.config.productionTip=!1,new s.default({router:D,store:z,render:function(t){return t(o)}}).$mount("#app")},SJZ9:function(t,e){},TZNq:function(t,e){},Vsq7:function(t,e){},"Y/Ow":function(t,e){},gwTc:function(t,e){t.exports={postList:[{date:"Sep 18 2016",title:"正是虾肥蟹壮时",imgulr:"/static/images/post/cat.png",avatar:"/static/images/avatar/1.png",content:"菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",reading:"112",collection:"96",headImgSrc:"/images/post/crab.png",author:"林白衣",dateTime:"24小时前",detail:"菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。”漫漫人生长路，美食与爱岂可辜负？于是作为一个吃货，突然也很想回味一下属于我的味蕾记忆。记忆中的秋蟹，是家人的味道，弥漫着浓浓的亲情。\n\n是谁来自山川湖海，却囿于昼夜，厨房与爱？ 是母亲，深思熟虑，聪明耐心。吃蟹前，总会拿出几件工具，煞有介事而乐此不疲。告诉我们螃蟹至寒，需要佐以姜茶以祛寒，在配备的米醋小碟里，亦添入姜丝与紫苏，前者驱寒后者增香。泡好菊花茶，岁月静好，我们静等。",postId:0,music:{url:"http://ws.stream.qqmusic.qq.com/C100003507bR0gDKBm.m4a?fromtag=38",title:"夜夜夜夜-齐秦",coverImg:"http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"}},{title:"比利·林恩的中场故事",content:"一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",imgulr:"/static/images/post/bl.png",reading:62,detail:"一 “李安是一位绝不会重复自己的导演，本片将极富原创性”李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。预告片首次曝光后，被视作是明年奥斯卡种子选手。该片根据同名畅销书改编。原著小说荣获美国国家图书奖。也被BBC评为21世纪最伟大的12本英文小说之一。影片讲述一位19岁德州男孩的比利·林恩入伍参加伊战，在一次交火中他大难不死，意外与战友成为大众的关注焦点，并被塑造成英雄。之后他们返回国内，在橄榄球赛中场休息时授勋。这名战争英雄却面临前所未有的心灵煎熬……李安为什么选中这部电影来拍？因为李安想要挑战前所未有的技术难题：以120帧每秒的速度、4K、3D技术全面结合，来掀起一场电影视觉革命。什么意思？所谓“电影是24格每秒的谎言”，其中的24格，就是帧数。",collection:92,dateTime:"24小时前",headImgSrc:"/images/post/bl.png",author:"迷的城",date:"Nov 20 2016",avatar:"/static/images/avatar/2.png",postId:1,music:{url:"http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",title:"鬼迷心窍-李宗盛",coverImg:"http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000"}},{title:"当我们在谈论经济学时，我们在谈论什么?",content:"引言在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：...",detail:"1 引言\n\n在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：有些人套用“经济理论“的知识去解释现实中发生的经济事件，结果发现很多事情讲不通，或者发现”理论告诉我们的“与现实发生的是相反的。也有学生经常跟我说：经济学有什么用？为了说明这个，我经常从两个方面来进行解释，尝试用我个人所擅长的解决问题的视角和他们能够听懂的方法来说明经济学是什么，它的作用边界在哪里：\r\n\n2 ”简笔素描“与”油画肖像“我们给人画肖像画，可以用简笔素描，也可以用油画肖像。油画肖像可以在最大程度上保存了人物的各方面的细节和特点，而简笔素描则忽略了很多细节。尽管简笔素描忽略了人物的许多细节，但我们仍旧能够很容易的认出画中的人物是谁。为什么？因为这种方法保留了人物最显著的特征，以至于我们可以忽略其次要特征而对人物做出判定。\n\n2.1 ”简笔素描“对于绝大多数的非经济学专业大众而言（经济学相关专业硕士学历以上），人们所接触到的经济学都是初级微观经济学。所谓的初级微观经济学，对于经济问题的”画法“就是一种”简笔素描“。比如初级微观经济学教材中广为使用的这种一元一次需求函数：y=bx+a，需求量的唯一变量是产品价格。但仅凭直觉我们就可以断言，现实中影响需求量的因素绝不止价格这一种，因此我们可以认为这个模型对经济问题的描述是失真的。然而但这种失真却是必要的和有意义的，其意义在与它利于揭示价格对于需求的影响，而不在于否定影响需求的其他因素——",imgulr:"/static/images/post/sls.png",headImgSrc:"/images/post/sls.jpg",reading:62,collection:92,author:"知乎",date:"Nov 12 2016",dateTime:"三天前",avatar:"/static/images/avatar/3.png",postId:2,music:{url:"http://ws.stream.qqmusic.qq.com/C100004HLusI2lLjZy.m4a?fromtag=38",title:"女儿情-万晓利",coverImg:"http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000"}},{title:"微信·小程序开发工具安装指南",content:"这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序",imgulr:"/static/images/post/xiaolong.jpg",reading:102,detail:"这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序:微信小程序不能开发游戏类、直播类功能，小程序每个人关注的上限是20个（还不确定，不过我相信这是真的，这次公布的API里并没有视频组件。微信太大，苹果要有所顾忌，但是微信也要做出相应的让步)微信目前有没有同苹果商谈好，还是个未知数，毕竟会对AppStore有一定的冲击。抛弃了大量的javascript组件后，这个生态体系变得相当的封闭，微信解释肯定是：为了更好的性能提升。那么我们拭目以待。小程序的入口是微信里的三级菜单，就是在“Tab栏发现里的游戏下面加入一个“小程序”。反正，这一栏里的购物和游戏我是从来没点进去过的。以腾讯的尿性，小程序同服务号一样，其关系链及重要功能的开放程度会因“人”而异。对，优质的接口只会开放给腾讯的儿子们（滴滴呀、京东呀）",collection:92,dateTime:"24小时前",headImgSrc:"/images/post/xiaolong.jpg",author:"猫是猫的猫",date:"Nov 20 2016",avatar:"/static/images/avatar/4.png",postId:3,music:{url:"http://ws.stream.qqmusic.qq.com/C100002mWVx72p8Ugp.m4a?fromtag=38",title:"恋恋风尘-老狼",coverImg:"http://y.gtimg.cn/music/photo_new/T002R150x150M000001VaXQX1Z1Imq.jpg?max_age=2592000"}},{title:"从视觉到触觉 这款VR手套能给你真实触感",content:"8月29日消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品",imgulr:"/static/images/post/vr.png",reading:102,detail:"消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品。该产品名为“Dexmo”，它是一款像手套那样戴在手上使用的未来主义外骨骼。它内置大量的元件，能够与VR体验进行交互，可帮助你感觉握在你的双手的虚拟物体。Dexmo据Dexta称，“Dexmo是一款针对你的双手的机械外骨骼。它能够捕捉你的手部运动，以及提供即时的力反馈。有了Dexmo，你可以感受到虚拟物体的大小、形状和坚硬度。你可以接触数字世界。”市面上已经有数款产品旨在处理虚拟现实中的手部交互，也有相关的产品即将要进入市场。例如，颇受欢迎的HTC Vive头盔配有一副控制器，其控制器能够使得追踪系统看到你的双手，让你可以用它们来在特定体验中与物体进行交互。今年晚些时候，Oculus将开始出货类似的手部控制产品Oculus Touch。10月，索尼也将开始出货配备两个PlayStation Move手部控制器的PS VR。Leap Motion甚至更进一步：利用传感器来追踪手指和手部的运动。",collection:26,dateTime:"24小时前",headImgSrc:"/images/post/vr.png",author:"深白色",date:"Nov 20 2016",avatar:"/static/images/avatar/5.png",postId:4,music:{url:"http://ws.stream.qqmusic.qq.com/C100000Zn0vS4fKKo8.m4a?fromtag=38",title:"沉默是金-张国荣",coverImg:"http://y.gtimg.cn/music/photo_new/T002R150x150M000003at0mJ2YrR2H.jpg?max_age=2592000"}},{title:"爱奇艺创维开展战略合作，合力布局开放娱乐生态",content:"爱奇艺和创维分别作为国内领先的在线视频品牌",imgulr:"/static/images/iqiyi.png",reading:96,detail:"爱奇艺和创维分别作为国内领先的在线视频品牌和家电品牌。双方一直锐意创新，为用户提供优质的服务体验和产品体验。据悉，爱奇艺与创维将展开从资本到VIP会员服务等各方面的深入合作。籍由此次合作，爱奇艺将战略投资创维旗下拥有高端互联网电视品牌的酷开公司。从下一财年开始，创维旗下互联网电视将通过银河互联网电视集成播控平台，预置VIP会员服务及相关内容。这种捆绑终端与VIP内容的全新销售模式，将大幅提升互联网电视终端用户的体验，给予用户更多优质内容的选择。",collection:26,dateTime:"21小时前",headImgSrc:"/images/iqiyi.png",author:"深白色",date:"Nov 20 2016",avatar:"/static/images/avatar/3.png",postId:5,music:{url:"http://ws.stream.qqmusic.qq.com/C100002I8eGJ28BI17.m4a?fromtag=38",title:"朋友-谭咏麟",coverImg:"http://y.gtimg.cn/music/photo_new/T002R150x150M000004eGsCN3SUheO.jpg?max_age=2592000"}}]}},meTt:function(t,e){},nzpB:function(t,e){},tvR6:function(t,e){},ub8L:function(t,e){},wzvQ:function(t,e){},zqol:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0062e6a1f9904f4e8420.js.map