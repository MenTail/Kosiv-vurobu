(function(){"use strict";var e={350:function(e,t,r){var a=r(5471),i=r(8505),n=r(5474),s=function(){var e=this,t=e._self._c;return t(i.A,{staticStyle:{"background-color":"whitesmoke"}},[t(n.A,{staticClass:"ma-auto",staticStyle:{"max-width":"1800px"}},[e.isTrue?e._e():t("Header"),t("Home")],1)],1)},o=[],c=r(6521),l=r(1689),d=r(8834),u=r(1526),p=r(4089),m=r(8230),g=r(9456),f=r(980),y=r(2987),h=r(1075),v=r(9e3),b=r(8412),I=r(5937),_=r(7402),C=function(){var e=this,t=e._self._c;return t(l.A,[t(b.A,{staticClass:"justify-center"},[t(u.A,{staticClass:"pt-0",attrs:{cols:"12"}},[t("div",{staticClass:"image-container"},[t(f.A,{staticClass:"image",attrs:{src:r(2256)}},[t("div",{staticClass:"overlay"},[t("div",{staticClass:"text-overlay"},[t(b.A,{staticClass:"justify-space-between align-center mx-5"},[t(u.A,{staticClass:"title-container",attrs:{cols:"auto"}},[t("h2",{staticClass:"title"},[e._v("Косівський розпис")])]),t("div",{staticClass:"d-flex",staticStyle:{gap:"5px"}},[t(u.A,{attrs:{cols:"auto"}},[t(c.A,{staticClass:"cart-button",attrs:{icon:"",large:"",outlined:"",color:"green"},on:{click:function(t){e.cartDialog=!0}}},[t(g.A,{attrs:{color:"green"}},[e._v("mdi-cart")]),e.cart.length>0?t("div",{staticClass:"cart-indicator"}):e._e()],1),t(p.A,{attrs:{"max-width":"700px"},model:{value:e.cartDialog,callback:function(t){e.cartDialog=t},expression:"cartDialog"}},[t(l.A,[t(d.ri,{staticStyle:{"border-bottom":"2px solid #9e9e9e"}},[e._v("Ваш кошик")]),e.cart.length<=0?t("div",{staticClass:"d-flex align-center justify-center mt-5",staticStyle:{"font-size":"22px"}},[e._v("Кошик пустий")]):e._e(),t(d.OQ,[t(y.A,e._l(e.cart,(function(r,a){return t(h.A,{key:a,staticClass:"pa-2 mb-2",staticStyle:{"border-bottom":"2px solid #9e9e9e"}},[t(f.A,{staticClass:"mr-4 elevation-2",staticStyle:{"max-width":"100px","max-height":"100px","border-radius":"10px"},attrs:{src:r.url}}),t("div",{staticClass:"d-flex align-center justify-space-between flex-wrap",staticStyle:{width:"100%"}},[t("div",{staticClass:"d-flex flex-column mr-4"},[t(v.UZ,{staticStyle:{"font-size":"19px"}},[e._v(e._s(r.name))]),t(v.w,{staticStyle:{"font-size":"16px"}},[e._v("Номер :"+e._s(r.numberId))])],1),t(u.A,{staticClass:"mr-4",attrs:{cols:"auto"}},[t(I.A,{staticClass:"custom-quantity-field",attrs:{type:"number",min:"1",max:"99",outlined:"",dense:"","hide-details":""},model:{value:r.quantity,callback:function(t){e.$set(r,"quantity",t)},expression:"item.quantity"}})],1),t("div",{staticClass:"d-flex align-center"},[t(h.A,{staticStyle:{"font-size":"19px"}},[e._v(e._s(r.price))]),t(c.A,{attrs:{icon:""},on:{click:function(t){return e.removeFromCart(a)}}},[t(g.A,{attrs:{color:"red"}},[e._v("mdi-close")])],1)],1)],1)],1)})),1)],1),e.cart.length>0?t(m.A,{ref:"form",model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[t(b.A,{staticClass:"mx-2 my-0 pa-0 align-center justify-center"},[t(u.A,{staticClass:"ma-0 py-0",attrs:{cols:e.$vuetify.breakpoint.width<=500?"12":"6"}},[t(I.A,{attrs:{outlined:"",label:"Ім'я",dense:"",maxlength:50,rules:[e=>!!e||"Введіть ім'я"]},model:{value:e.InputUserInfo.user_name,callback:function(t){e.$set(e.InputUserInfo,"user_name",t)},expression:"InputUserInfo.user_name"}})],1),t(u.A,{staticClass:"ma-0 py-0",attrs:{cols:e.$vuetify.breakpoint.width<=500?"12":"6"}},[t(I.A,{attrs:{outlined:"",label:"Прізвище",dense:"",maxlength:50,rules:[e=>!!e||"Введіть прізвище"]},model:{value:e.InputUserInfo.user_surname,callback:function(t){e.$set(e.InputUserInfo,"user_surname",t)},expression:"InputUserInfo.user_surname"}})],1),t(u.A,{staticClass:"ma-0 py-0",attrs:{cols:e.$vuetify.breakpoint.width<=500?"12":"6"}},[t(I.A,{attrs:{outlined:"",label:"Номер телефону",dense:"",maxlength:50,rules:[e=>!!e||"Введіть номер телефону"]},model:{value:e.InputUserInfo.user_phone,callback:function(t){e.$set(e.InputUserInfo,"user_phone",t)},expression:"InputUserInfo.user_phone"}})],1),t(u.A,{staticClass:"ma-0 py-0",attrs:{cols:e.$vuetify.breakpoint.width<=500?"12":"6"}},[t(I.A,{attrs:{outlined:"",label:"Адреса доставки",dense:"",maxlength:100,rules:[e=>!!e||"Введіть адресу доставки"]},model:{value:e.InputUserInfo.user_adress,callback:function(t){e.$set(e.InputUserInfo,"user_adress",t)},expression:"InputUserInfo.user_adress"}})],1),t(u.A,{staticClass:"ma-0 py-0",attrs:{cols:(e.$vuetify.breakpoint.width,"12")}},[t(_.A,{attrs:{outlined:"",rows:"4",label:"Опис",dense:"","hide-details":"auto","auto-grow":"",maxlength:1e3},model:{value:e.InputUserInfo.user_description,callback:function(t){e.$set(e.InputUserInfo,"user_description",t)},expression:"InputUserInfo.user_description"}})],1)],1)],1):e._e(),t(d.SL,{staticClass:"justify-end"},[t(c.A,{staticStyle:{"text-transform":"none"},attrs:{outlined:"",color:"red"},on:{click:function(t){e.cartDialog=!1}}},[e._v("Закрити")]),e.cart.length>0?t(c.A,{staticStyle:{color:"whitesmoke","text-transform":"none"},attrs:{disabled:!e.BtnOn,color:"green"},on:{click:e.checkout}},[e._v("Оформити замовлення")]):e._e()],1)],1)],1)],1)],1)],1)],1)]),t("div",{staticClass:"overlay-text"},[t("h1",[e._v("Косівська кераміка, на замовлення")]),t("br"),t("h1",[e._v("Джаман Андрій")]),t("h2",[e._v("+(380)98-476-4371")]),t("h2",[e._v("+(380)93-720-6307")])])])],1)])],1)],1)},j=[];r(4114);const A=new a.Ay;var x=r(2543),w=r.n(x),k={name:"headerPage",data:()=>({name:"First code",cart:[],cartDialog:!1,BtnOn:!1,InputUserInfo:{user_name:"",user_surname:"",user_phone:"",user_adress:"",user_description:""},formValid:!1,CopyInputUserInfo:{},selectedAddress:null,addresses:[],query:"",loading:!1,page:1,hasMore:!0}),props:{basket_num:{type:Number,require:!1}},mounted(){this.CopyInputUserInfo={...this.InputUserInfo}},created(){A.$on("add-to-cart",this.addToCart),A.$on("open_basket",this.openCartDialog)},beforeDestroy(){A.$off("add-to-cart",this.addToCart),A.$off("open_basket",this.openCartDialog)},methods:{openCartDialog(){this.cartDialog=!0},addToCart(e){const t=this.cart.find((t=>t.id===e.id));t?t.quantity++:this.cart.push({...e,quantity:1})},removeFromCart(e){this.cart.splice(e,1)},async checkout(){const e=this.$refs.form;if(!e.validate())return;const t="7885530935:AAH2fklekbgFGmsjNdjqPGrw94AY9Egmy8Y",r="1684588752";let a="Замовлення:\n";this.cart.forEach(((e,t)=>{a+=`${t+1}. Номер: ${e.numberId}, ${e.name}\nКількість: ${e.quantity}, Ціна: ${e.price}\n`})),a+="\nІнформація про користувача:\n",a+=`Ім'я: ${this.InputUserInfo.user_name}\n`,a+=`Прізвище: ${this.InputUserInfo.user_surname}\n`,a+=`Номер телефону: ${this.InputUserInfo.user_phone}\n`,a+=`Адреса доставки: ${this.InputUserInfo.user_adress}\n`,a+=`Опис: ${this.InputUserInfo.user_description}\n`;try{await fetch(`https://api.telegram.org/bot${t}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:r,text:a})}),alert("Замовлення успішно оформлено! Очікуйте на зворотній зв'язок!")}catch(i){console.error("Помилка відправлення:",i),alert("Не вдалося відправити замовлення спробуйте ще раз.")}this.cartDialog=!1}},watch:{InputUserInfo:{deep:!0,handler(){this.BtnOn=!w().isEqual(this.CopyInputUserInfo,this.InputUserInfo)}}}},S=k,$=r(1656),U=(0,$.A)(S,C,j,!1,null,"9fe1a6a8",null),D=U.exports,O=r(1770),V=r(6520),T=function(){var e=this,t=e._self._c;return t(l.A,{staticStyle:{"min-height":"100vh","background-color":"whitesmoke"}},[t(O.A,{staticClass:"mt-2"}),t(b.A,{staticClass:"ma-0 px-5 py-3 d-flex ifcenter",staticStyle:{gap:"20px"}},[t(u.A,{staticClass:"ma-0 pa-0",attrs:{cols:"auto"}},[t(I.A,{attrs:{outlined:"",dense:"",clearable:"","hide-details":"true",color:"orange",label:"Пошук"},model:{value:e.Search,callback:function(t){e.Search=t},expression:"Search"}})],1),t(u.A,{staticClass:"ma-0 pa-0 d-flex align-center",attrs:{cols:"auto"}},[t(V.A,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:r,attrs:a}){return[t(c.A,e._g(e._b({staticClass:"category-btn",attrs:{outlined:"",color:"orange",dense:""}},"v-btn",a,!1),r),[t(g.A,[e._v("mdi-menu")]),e.isSmallScreen?e._e():t("span",{staticClass:"ml-2"},[e._v("Підкатегорії")])],1)]}}])},[t(y.A,[t(h.A,{on:{click:function(t){return e.filterByCategory("")}}},[t(v.UZ,[e._v("Всі")])],1),e._l(e.categories,(function(r,a){return t(h.A,{key:a,on:{click:function(t){return e.filterByCategory(r)}}},[t(v.UZ,[e._v(e._s(r))])],1)}))],2)],1)],1)],1),t(O.A,{staticClass:"mb-2"}),e.showCartButton?t("div",{staticClass:"mr-10 mt-10",style:e.cartButtonStyle},[t(c.A,{staticClass:"cart-button",attrs:{icon:"",outlined:"","x-large":"",color:"green"},on:{click:function(t){return e.cartDialog()}}},[t(g.A,{attrs:{color:"green",size:"30"}},[e._v("mdi-cart")])],1)],1):e._e(),t(b.A,{staticClass:"justify-center ma-0 pa-0",staticStyle:{gap:"10px"}},e._l(e.filteredCards,(function(e){return t("div",{key:e.id},[t("CardInfo",{attrs:{card:e}})],1)})),0)],1)},q=[],L=function(){var e=this,t=e._self._c;return t(l.A,{attrs:{width:"365px"},on:{click:function(t){e.linksDialog=!0}}},[t(y.A,[t(v.UZ,{staticClass:"justify-center d-flex mb-2",staticStyle:{"font-size":"20px"}},[e._v(" "+e._s(e.card.name)+" ")]),t(h.A,[t(f.A,{staticStyle:{width:"332px",height:"180px"},attrs:{src:e.card.url}})],1),t("div",{staticClass:"d-flex justify-space-between"},[t(h.A,[e._v("Номер: "+e._s(e.card.numberId))]),t(h.A,{staticClass:"d-flex justify-end"},[e._v("Ціна: "+e._s(e.card.price))])],1),t(c.A,{staticClass:"ml-4",staticStyle:{color:"whitesmoke !important","text-transform":"none"},attrs:{color:"green"},on:{click:function(t){return t.stopPropagation(),e.addToCart.apply(null,arguments)}}},[e._v(" До кошика ")])],1),t("CardInfoDialog",{attrs:{visible:e.linksDialog,projectId:e.card},on:{close:function(t){e.linksDialog=!1}}})],1)},z=[],B=r(1906),P=r(4852),E=function(){var e=this,t=e._self._c;return t(p.A,{attrs:{"max-width":"800","content-class":"cross__dialog"},model:{value:e.localVisible,callback:function(t){e.localVisible=t},expression:"localVisible"}},[t(l.A,[t(B.mM,[e.loading?t(P.A,{attrs:{absolute:"",top:"",indeterminate:"",color:"orange"}}):e._e()],1),t(B.vt,[t("div",{staticClass:"cross__inner"},[t(c.A,{attrs:{fab:"",small:"",elevation:"0"},on:{click:e.onCancel}},[t(g.A,[e._v("mdi-close")])],1)],1)]),t(b.A,{staticClass:"ma-0 pa-0",staticStyle:{"min-height":"auto"}},[t(u.A,{attrs:{md:"8"}},[t(f.A,{staticClass:"rounded",staticStyle:{"max-height":"60vh"},attrs:{src:e.projectId.url}})],1),t(u.A,{staticClass:"d-flex flex-column align-start pt-7",attrs:{md:"4"}},[t("h2",[e._v(e._s(e.projectId.name))]),t("h4",{staticClass:"my-2"},[e._v("Ціна: "+e._s(e.projectId.price))]),t("h4",{staticClass:"mb-2"},[e._v(" Категорія: "+e._s(e.projectId.category)+" ")]),t("h4",{staticClass:"mt-2 mb-10"},[e._v(" Параметри: "+e._s(e.projectId.description)+" ")]),t(c.A,{staticClass:"mr-auto mt-auto",staticStyle:{color:"whitesmoke !important","text-transform":"none"},attrs:{color:"green"},on:{click:function(t){return t.stopPropagation(),e.addToCart.apply(null,arguments)}}},[e._v(" До кошика ")])],1)],1)],1)],1)},M=[],F={name:"CardInfoDialog",props:{visible:{type:Boolean,required:!0},projectId:{type:Object,required:!1}},data(){return{loading:!1,localVisible:this.visible}},watch:{visible(e){this.localVisible=e},localVisible(e){e||this.$emit("close")}},methods:{addToCart(){A.$emit("add-to-cart",this.projectId)},onCancel(){this.localVisible=!1}}},H=F,Z=(0,$.A)(H,E,M,!1,null,null,null),N=Z.exports,R={name:"CardInfo",data(){return{linksDialog:!1}},props:{card:{type:Object,required:!0}},methods:{addToCart(){A.$emit("add-to-cart",this.card)}},components:{CardInfoDialog:N}},Y=R,G=(0,$.A)(Y,L,z,!1,null,null,null),W=G.exports,J={name:"homePage",data:()=>({searchValue:"",cartDialogVisible:!1,showCartButton:!1,cardList:[{id:1,name:"Ваза",url:"../../images/tovar/a1.jpg",numberId:"#321",category:"Вази",description:"Висота: 12 см , Ємкість: 450мл",price:"₴900"},{id:2,name:"Підсвічник",url:"../../images/tovar/a2.jpg",numberId:"#322",category:"Підсвічники",description:"Висота: 15 см",price:"₴1100"},{id:4,name:"Цукорничка",url:"../../images/tovar/a4.jpg",numberId:"#324",category:"Цукорнички",description:"Висота: 16 см",price:"₴1500"},{id:5,name:"Великий баранець",url:"../../images/tovar/a5.jpg",numberId:"#325",category:"Анімалістика",description:"Висота: 27 см, Ширина: 25 см",price:"₴3000"},{id:6,name:"Підсвічник",url:"../../images/tovar/a6.jpg",numberId:"#326",category:"Підсвічники",description:"Висота: 17 см",price:"₴1300"},{id:7,name:"Ваза",url:"../../images/tovar/a7.jpg",numberId:"#327",category:"Вази",description:"Висота: 24 см, Ємкість: 1000 мл",price:"₴1000"},{id:8,name:"Ваза",url:"../../images/tovar/a8.jpg",numberId:"#328",category:"Вази",description:"Висота: 18 см, Ємкість: 700 мл",price:"₴1000"},{id:9,name:"Підсвічник",url:"../../images/tovar/a9.jpg",numberId:"#329",category:"Підсвічники",description:"Висота: 18 см",price:"₴650"},{id:10,name:"Глибока тарілка",url:"../../images/tovar/a10.jpg",numberId:"#330",category:"Тарілки",description:"Діаметр 21 см, Ємкість: 1000 мл",price:"₴1000"},{id:11,name:"Келих",url:"../../images/tovar/a11.jpg",numberId:"#331",category:"Кружки",description:"Висота: 14 см, Ємкість: 600 мл",price:"₴600"},{id:12,name:"Горня",url:"../../images/tovar/a12.jpg",numberId:"#332",category:"Кружки",description:"Висота: 12 см Ємкість: 650 мл",price:"₴600"},{id:14,name:"Підсвічник",url:"../../images/tovar/a14.jpg",numberId:"#334",category:"Підсвічники",description:"Висота: 12 см",price:"₴500"},{id:15,name:"Підсвічник",url:"../../images/tovar/a15.jpg",numberId:"#335",category:"Підсвічники",description:"Висота: 19 см",price:"₴1550"},{id:16,name:"Горня",url:"../../images/tovar/a16.jpg",numberId:"#336",category:"Горнята",description:"Висота: 11 см, Ємкість: 500 мл",price:"₴400"},{id:17,name:"Ваза",url:"../../images/tovar/a17.jpg",numberId:"#337",category:"Вази",description:"Висота: 15 см, Ємкість: 500 мл",price:"₴1200"},{id:18,name:"Підсвічник",url:"../../images/tovar/a18.jpg",numberId:"#338",category:"Підсвічники",description:"Висота: 15 см",price:"₴1200"},{id:19,name:"Глибока тарілка",url:"../../images/tovar/a20.jpg",numberId:"#339",category:"Тарілки",description:"Діаметр 18 см, Ємкість: 800 мл",price:"₴900"},{id:21,name:"Ваза",url:"../../images/tovar/a21.jpg",numberId:"#341",category:"Вази",description:"Висота: 14 см, Ємкість: 600 мл",price:"₴800"},{id:22,name:"Підсвічник",url:"../../images/tovar/a22.jpg",numberId:"#342",category:"Підсвічники",description:"Висота: 17 см",price:"₴1300"},{id:23,name:"Горня з блюдцем",url:"../../images/tovar/a23.jpg",numberId:"#343",category:"Горнята",description:"Висота: 10 см, Ємкість: 400 мл",price:"₴500"},{id:24,name:"Горня з блюдцем",url:"../../images/tovar/a24.jpg",numberId:"#344",category:"Горнята",description:"Висота: 10 см, Ємкість: 400 мл",price:"₴400"},{id:25,name:"Келішок",url:"../../images/tovar/a25.jpg",numberId:"#345",category:"Келішки",description:"Ємкість: 50 мл",price:"₴150"},{id:26,name:"Горня з блюдцем",url:"../../images/tovar/a26.jpg",numberId:"#346",category:"Горнята",description:"Висота: 11 см, Ємкість: 550 мл",price:"₴600"},{id:27,name:"Горня з блюдцем",url:"../../images/tovar/a27.jpg",numberId:"#347",category:"Горнята",description:"Висота: 10 см, Ємкість: 600 мл",price:"₴650"},{id:28,name:"Соусниця",url:"../../images/tovar/a28.jpg",numberId:"#348",category:"Вази",description:"Висота: 13 см, Ємкість: 500 мл",price:"₴700"},{id:29,name:"Підсвічник",url:"../../images/tovar/a29.jpg",numberId:"#349",category:"Підсвічники",description:"Висота: 19 см",price:"₴1500"},{id:30,name:"Цукорничка",url:"../../images/tovar/a30.jpg",numberId:"#350",category:"Цукорнички",description:"Висота: 10 см, Ємкість: 700 мл",price:"₴300"},{id:31,name:"Підсвічник",url:"../../images/tovar/a31.jpg",numberId:"#351",category:"Підсвічники",description:"Висота: 20 см",price:"₴1600"},{id:33,name:"Декоративне яйце",url:"../../images/tovar/a35.jpg",numberId:"#353",category:"Анімалістика",description:"Висота: 9 см",price:"₴400"},{id:34,name:"Сова",url:"../../images/tovar/a34.jpg",numberId:"#354",category:"Анімалістика",description:"Висота: 14 см",price:"₴700"},{id:36,name:"Дзвіночок",url:"../../images/tovar/a36.jpg",numberId:"#356",category:"Дзвіночки",description:"",price:"₴300"},{id:37,name:"Дзвіночок",url:"../../images/tovar/a37.jpg",numberId:"#357",category:"Дзвіночки",description:"",price:"₴300"},{id:38,name:"Дзвіночок",url:"../../images/tovar/a38.jpg",numberId:"#358",category:"Дзвіночки",description:"",price:"₴300"},{id:39,name:"Дзвіночок",url:"../../images/tovar/a39.jpg",numberId:"#359",category:"Дзвіночки",description:"",price:"₴300"},{id:40,name:"Дзвіночок",url:"../../images/tovar/a40.jpg",numberId:"#360",category:"Дзвіночки",description:"",price:"₴300"},{id:41,name:"Дзвіночок",url:"../../images/tovar/a41.jpg",numberId:"#361",category:"Дзвіночки",description:"",price:"₴300"},{id:43,name:"Келішок",url:"../../images/tovar/a43.jpg",numberId:"#363",category:"Келішки",description:"Ємкість: 50 мл",price:"₴150"},{id:44,name:"Келішок",url:"../../images/tovar/a44.jpg",numberId:"#364",category:"Келішки",description:"Ємкість: 50 мл",price:"₴150"},{id:42,name:"Кавове горня",url:"../../images/tovar/a42.jpg",numberId:"#362",category:"Горнята",description:"Ємкість: 200 мл",price:"₴275"},{id:45,name:"Кавове горня",url:"../../images/tovar/a45.jpg",numberId:"#365",category:"Горнята",description:"Ємкість: 200 мл",price:"₴275"},{id:46,name:"Кавове горня",url:"../../images/tovar/a46.jpg",numberId:"#366",category:"Горнята",description:"Ємкість: 200 мл",price:"₴275"},{id:47,name:"Ваза",url:"../../images/tovar/a47.jpg",numberId:"#367",category:"Вази",description:"Висота: 11 см, Ємкість: 300 мл",price:"₴450"},{id:48,name:"Підсвічник",url:"../../images/tovar/a48.jpg",numberId:"#368",category:"Підсвічники",description:"Висота: 16 см",price:"₴750"},{id:49,name:"Келішок",url:"../../images/tovar/a49.jpg",numberId:"#369",category:"Келішки",description:"Ємкість: 50 мл",price:"₴150"},{id:50,name:"Підсвічник",url:"../../images/tovar/a50.jpg",numberId:"#370",category:"Підсвічники",description:"Висота: 20 см",price:"₴1800"},{id:52,name:"Плиточка",url:"../../images/tovar/a52.jpg",numberId:"#372",category:"Плитки",description:"Розмір: 9 на 9 см",price:"₴225"},{id:53,name:"Плиточка",url:"../../images/tovar/a53.jpg",numberId:"#373",category:"Плитки",description:"Розмір: 13 на 13 см",price:"₴330"},{id:57,name:"Тарілка",url:"../../images/tovar/a57.jpg",numberId:"#377",category:"Тарілки",description:"Діаметр: 15 см",price:"₴550"},{id:58,name:"Велика супниця",url:"../../images/tovar/a58.jpg",numberId:"#378",category:"Супниці",description:"Висота: 25 см, Ємкість: 4000 мл",price:"₴4000"},{id:59,name:"Підсвічник",url:"../../images/tovar/a59.jpg",numberId:"#379",category:"Підсвічники",description:"Висота: 39 см",price:"₴3000"},{id:60,name:"Плиточка",url:"../../images/tovar/a60.jpg",numberId:"#380",category:"Плитки",description:"Висота: 19 см",price:"₴700"},{id:61,name:"Плиточка",url:"../../images/tovar/a61.jpg",numberId:"#381",category:"Плитки",description:"Висота: 19 см",price:"₴700"},{id:62,name:"Тарілка",url:"../../images/tovar/a62.jpg",numberId:"#382",category:"Тарілки",description:"Діаметр: 37 см",price:"₴6000"},{id:63,name:"Тарілка",url:"../../images/tovar/a63.jpg",numberId:"#383",category:"Тарілки",description:"Діаметр: 28 см",price:"₴800"},{id:64,name:"Тарілка",url:"../../images/tovar/a64.jpg",numberId:"#384",category:"Тарілки",description:"Діаметр: 26 см",price:"₴700"},{id:65,name:"Тарілка",url:"../../images/tovar/a65.jpg",numberId:"#385",category:"Тарілки",description:"Діаметр: 23 см",price:"₴600"},{id:66,name:"Тарілка",url:"../../images/tovar/a66.jpg",numberId:"#386",category:"Тарілки",description:"Діаметр: 21 см",price:"₴500"},{id:67,name:"Тарілка",url:"../../images/tovar/a67.jpg",numberId:"#387",category:"Тарілки",description:"Діаметр: 19 см",price:"₴80"},{id:68,name:"Тарілка",url:"../../images/tovar/a68.jpg",numberId:"#388",category:"Тарілки",description:"Діаметр: 15 см",price:"₴450"},{id:69,name:"Подвійна цукорничка",url:"../../images/tovar/a71.jpg",numberId:"#389",category:"Цукорнички",description:"Висота: 21 см, Ширина: 25 см",price:"₴2000"},{id:70,name:"Глечик",url:"../../images/tovar/a72.jpg",numberId:"#390",category:"Глечики",description:"Висота 24 см, Ємкість: 2700 мл",price:"₴2000"},{id:71,name:"Цукорничка",url:"../../images/tovar/a73.jpg",numberId:"#391",category:"Цукорнички",description:"Висота 24 см, Ємкість: 2700 мл",price:"₴2000"},{id:72,name:"Ваза",url:"../../images/tovar/a74.jpg",numberId:"#391",category:"Вази",description:"Висота 11 см, Ємкість: 300 мл",price:"₴450"}],filteredCards:[],categories:["Тарілки","Вази","Підсвічники","Глечики","Келішки","Плитки","Супниці","Цукорнички","Анімалістика","Дзвіночки","Горнята"],selectedCategory:"",isSmallScreen:!1}),components:{CardInfo:W},computed:{isComponentAActive(){return"CardInfoDialog"===this.$route.name},Search:{get(){return this.searchValue},set(e){this.searchValue=e??""}},cartButtonStyle(){return this.$vuetify.breakpoint.width<816?{position:"fixed",zIndex:9999,right:"-30px",bottom:"12px"}:{position:"fixed",zIndex:9999,right:"-30px",top:"20px"}}},mounted(){this.filteredCards=this.cardList,this.isSmallScreen=window.innerWidth<480,window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.showCartButton=window.scrollY>450},cartDialog(){this.cartDialogVisible=!0,A.$emit("open_basket",this.cartDialogVisible),this.cartDialogVisible=!1},filterByCategory(e){this.selectedCategory=e,this.filteredCards=this.cardList.filter((t=>(!e||t.category===e)&&(!this.Search||t.name.toLowerCase().includes(this.Search.toLowerCase()))))},handleResize(){this.isSmallScreen=window.innerWidth<480}},watch:{Search:{deep:!0,handler:w().debounce((function(){const e=this.Search.toLowerCase();this.filteredCards=this.cardList.filter((t=>(!this.selectedCategory||t.category===this.selectedCategory)&&(!e||t.name.toLowerCase().includes(e)||t.numberId.toLowerCase().includes(e))))}),400)}}},K=J,Q=(0,$.A)(K,T,q,!1,null,"15fafd75",null),X=Q.exports,ee={name:"App",components:{Header:D,Home:X},data:()=>({isTrue:!1})},te=ee,re=(0,$.A)(te,s,o,!1,null,null,null),ae=re.exports,ie=r(5453);a.Ay.use(ie.A);var ne=new ie.A({});a.Ay.config.productionTip=!1,new a.Ay({vuetify:ne,render:e=>e(ae)}).$mount("#app")},2256:function(e,t,r){e.exports=r.p+"img/titleimg.f35bb081.jpg"}},t={};function r(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=e,function(){var e=[];r.O=function(t,a,i,n){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],n=e[d][2];for(var o=!0,c=0;c<a.length;c++)(!1&n||s>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[c])}))?a.splice(c--,1):(o=!1,n<s&&(s=n));if(o){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,i,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/Kosiv-vurobu/"}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,n,s=a[0],o=a[1],c=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(c)var d=c(r)}for(t&&t(a);l<s.length;l++)n=s[l],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},a=self["webpackChunkmyapp"]=self["webpackChunkmyapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(350)}));a=r.O(a)})();
//# sourceMappingURL=app.9c7622d9.js.map