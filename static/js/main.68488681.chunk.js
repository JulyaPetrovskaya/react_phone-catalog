(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(29).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(19),n=c.n(a),r=c(6),s=c(4),i=(c(29),c(9)),o=c.n(i),l=(c(30),c(3));c(31);function u(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];null===n?c.delete(a):Array.isArray(n)?(c.delete(a),n.forEach((function(e){c.append(a,e)}))):c.set(a,n)})),c.toString()}var j,d=c.p+"static/media/search.eb670dd9.svg",b=c.p+"static/media/cross.3ea864f5.svg",p=c(0),h=function(){var e=Object(r.d)(),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.n)().pathname.split("/")[1],i=c.get("query")||"";return Object(p.jsxs)("div",{className:"search",children:[Object(p.jsx)("label",{htmlFor:"searchInput",className:"search__label",children:Object(p.jsx)("input",{type:"text",className:"search__input",value:i,placeholder:"Search in ".concat(n,"..."),onChange:function(e){a(u(c,{query:e.target.value||null}))}})}),Object(p.jsx)("button",{type:"button",className:"search__img",onClick:function(){a("")},children:i?Object(p.jsx)("img",{src:b,alt:b}):Object(p.jsx)("img",{src:d,alt:d})})]})},m=function(){var e=function(e){var t=e.isActive;return o()("nav__link",{nav__active:t})},t="/"===Object(s.n)().pathname;return Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("div",{className:"header__container",children:[Object(p.jsxs)("div",{className:"header__container--flex-start",children:[Object(p.jsx)(r.b,{to:"/",className:"header__logo"}),Object(p.jsx)("nav",{className:"nav",children:Object(p.jsxs)("ul",{className:"nav__list",children:[Object(p.jsx)("li",{className:"nav__item",children:Object(p.jsx)(r.c,{to:"/",className:e,children:"Home"})}),Object(p.jsx)("li",{className:"nav__item",children:Object(p.jsx)(r.c,{to:"/phones",className:e,children:"Phones"})}),Object(p.jsx)("li",{className:"nav__item",children:Object(p.jsx)(r.c,{to:"/tablets",className:e,children:"Tablets"})}),Object(p.jsx)("li",{className:"nav__item",children:Object(p.jsx)(r.c,{to:"/accessories",className:e,children:"Accessories"})})]})})]}),Object(p.jsxs)("div",{className:"header__container--flex-end",children:[!t&&Object(p.jsx)(h,{}),Object(p.jsx)(r.c,{to:"favorites",className:function(e){var t=e.isActive;return o()("header__favorites","nav__link","nav__link--last",{nav__active:t})}}),Object(p.jsx)(r.c,{className:function(e){var t=e.isActive;return o()("header__shopping-cart","nav__link","nav__link--last",{nav__active:t})},to:"cart"})]})]})})},O=(c(34),function(e){var t=e.children,c=Object(s.n)().pathname;return Object(p.jsx)("div",{className:o()("container",{"container--extend":"/"===c||c.includes("cart")}),children:t})}),_=function(){return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(m,{}),Object(p.jsx)(O,{children:Object(p.jsx)(s.a,{})})]})},x=c(10),f=c(1);function g(e,t){var c=Object(f.useState)((function(){var c=localStorage.getItem(e);if(null===c)return t;try{return JSON.parse(c)}catch(a){return localStorage.removeItem(e),t}})),a=Object(l.a)(c,2),n=a[0],r=a[1];return Object(f.useEffect)((function(){localStorage.setItem(e,JSON.stringify(n))}),[e,n]),[n,r]}!function(e){e.Success="#27ae60",e.Warning="#F3D060",e.Error="#BA0C2E",e.None="transparent"}(j||(j={}));var v=Object(f.createContext)({notification:{message:"",color:j.None},setNotification:function(){}}),N=function(e){var t=e.children,c=Object(f.useState)({message:"",color:j.None}),a=Object(l.a)(c,2),n=a[0],r=a[1];return Object(p.jsx)(v.Provider,{value:{notification:n,setNotification:r},children:t})},y=Object(f.createContext)({favorites:[],setFavorites:function(){},handleFavorites:function(){},isInFavorites:function(){return!1}}),A=function(e){var t=e.children,c=g("favorites",[]),a=Object(l.a)(c,2),n=a[0],r=a[1],s=Object(f.useContext)(v).setNotification,i=function(e){return n.some((function(t){return t.id===e.id}))};return Object(p.jsx)(y.Provider,{value:{favorites:n,setFavorites:r,handleFavorites:function(e){i(e)?(r((function(t){return t.filter((function(t){return t.id!==e.id}))})),s({message:"Deleted from favorites",color:j.Error})):(r((function(t){return[].concat(Object(x.a)(t),[e])})),s({message:"Added to favorites",color:j.Success}))},isInFavorites:i},children:t})},w=c(7),k=c(5),C=c.n(k),S=(c(35),"https://mate-academy.github.io/react_phone-catalog/_new/products.json"),E=function(e){return fetch(e).then((function(e){if(!e.ok)throw new Error("Failed to fetch: ".concat(e.status," ").concat(e.statusText));return e.json()}))};function F(e){return E("".concat("https://mate-academy.github.io/react_phone-catalog/_new/products/","/").concat(e,".json"))}var I,P=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(S);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(S);case 2:return t=e.sent,e.abrupt("return",t.sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=(c(36),c.p+"static/media/banner-phones.b4eeda8b.png"),M=c.p+"static/media/banner-tablets.a962057c.png",T=c.p+"static/media/banner-accessories.bdd2e0fc.png",R=function(){var e=Object(f.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1],n=[L,M,T],r=1040,s=r*(n.length-1),i=function(){a(c===-s?0:c-r)};return Object(f.useEffect)((function(){var e=setInterval((function(){i()}),5e3);return function(){clearInterval(e)}}),[c]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"banner banner--margin",children:[Object(p.jsx)("button",{className:"banner__button banner__button--left",type:"button",onClick:function(){a(0===c?-s:c+r)}}),Object(p.jsx)("div",{className:"banner__caroucel",children:Object(p.jsx)("ul",{className:"banner__list",style:{transform:"translateX(".concat(c,"px)"),transition:"transform 1s",width:r*n.length},children:n.map((function(e,t){return Object(p.jsx)("li",{children:Object(p.jsx)("img",{className:"banner__img",width:r,src:e,alt:"banner ".concat(t+1)})},e)}))})}),Object(p.jsx)("button",{className:"banner__button banner__button--right",type:"button",onClick:i})]}),Object(p.jsx)("div",{className:"banner__indicators",children:n.map((function(e,t){return Object(p.jsx)("button",{type:"button",className:o()("banner__indicator",{"banner__indicator--active":c===-1040*t}),onClick:function(){return function(e){a(-1040*e)}(t)}},e)}))})]})},W=(c(37),Object(f.createContext)({cart:[],setCart:function(){},handleCart:function(){},isInCart:function(){return!1}})),U=(c(38),c.p+"static/media/FavouritesFilled.d554a185.svg"),Y=c.p+"static/media/FavouritesHeartLike.dbd19c03.svg",J=function(e){var t=e.product,c=Object(f.useContext)(W),a=c.isInCart,n=c.handleCart,s=Object(f.useContext)(y),i=s.isInFavorites,l=s.handleFavorites,u=t.screen,j=t.capacity,d=t.ram,b=t.price,h=t.fullPrice,m=t.name,O=t.category,_=t.phoneId,x=t.image;return Object(p.jsxs)("div",{className:"product-card","data-cy":"cardsContainer",children:[Object(p.jsxs)(r.b,{className:"product-card__link",to:"/".concat(O,"/").concat(_),children:[Object(p.jsx)("img",{className:"product-card__img",src:"./new/".concat(x),alt:m}),Object(p.jsx)("p",{className:"product-card__title",children:m}),Object(p.jsxs)("div",{className:"product-card__price",children:[Object(p.jsx)("h2",{className:"product-card__price-regular",children:"$".concat(b)}),Object(p.jsx)("div",{className:"product-card__price-discount",children:"$".concat(h)})]})]}),Object(p.jsxs)("div",{className:"product-card__properties",children:[Object(p.jsxs)("div",{className:"product-card__property",children:[Object(p.jsx)("p",{className:"product-card__property-title",children:"Screen"}),Object(p.jsx)("p",{className:"product-card__property-value",children:u})]}),Object(p.jsxs)("div",{className:"product-card__property",children:[Object(p.jsx)("p",{className:"product-card__property-title",children:"Capacity"}),Object(p.jsx)("p",{className:"product-card__property-value",children:j})]}),Object(p.jsxs)("div",{className:"product-card__property",children:[Object(p.jsx)("p",{className:"product-card__property-title",children:"RAM"}),Object(p.jsx)("p",{className:"product-card__property-value",children:d})]})]}),Object(p.jsxs)("div",{className:"product-card__buttons",children:[Object(p.jsx)("button",{type:"button",className:o()("product-card__button-add-cart",{"product-card__button-add-cart--added":a(t)}),onClick:function(){return n(t)},children:a(t)?"Added to cart":"Add to cart"}),Object(p.jsx)("button",{type:"button",className:o()("product-card__button-favorites",{"product-card__button-favorites--added":i(t)}),"data-cy":"addToFavorite",onClick:function(){return l(t)},children:i(t)?Object(p.jsx)("img",{src:U,alt:"FavouritesFilled"}):Object(p.jsx)("img",{src:Y,alt:"FavouritesHeartLike"})})]})]})},D=272,V=function(e){var t=e.title,c=e.products,a=Object(f.useState)(0),n=Object(l.a)(a,2),r=n[0],s=n[1],i=c.slice(0,21),u=-288*(i.length-4);return Object(p.jsxs)("div",{className:"slider",children:[Object(p.jsxs)("div",{className:"slider__header",children:[Object(p.jsx)("h1",{className:"slider__title",children:t}),Object(p.jsxs)("div",{className:"slider__buttons",children:[Object(p.jsx)("button",{type:"button",className:o()("slider__button",0===r?"slider__btn-left--disabled":"slider__btn-left"),onClick:function(){var e=r+288;s(Math.min(e,0))},disabled:0===r,children:"<"}),Object(p.jsx)("button",{disabled:r===u,className:o()("slider__button",r===u?"slider__btn-right--disabled":"slider__btn-right"),type:"button",onClick:function(){var e=r-288;s(Math.max(e,u))},children:">"})]})]}),Object(p.jsx)("ul",{className:"slider__list",style:{transform:"translateX(".concat(r,"px)"),transition:"transform 0.5s",width:D*i.length},children:i.map((function(e){return Object(p.jsx)("li",{className:"slider__item",children:Object(p.jsx)(J,{product:e})},e.id)}))})]})},X=(c(39),function(){return Object(p.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(p.jsx)("div",{className:"Loader__content"})})});!function(e){e.Phone="phones",e.Tablet="tablets",e.Accessories="accessories"}(I||(I={}));c(40);var H,Q=c.p+"static/media/phoneBaner.b743e9c4.png",q=c.p+"static/media/tabletBaner.12abf993.png",K=c.p+"static/media/accessoryBanner.a973a6e7.png",z=function(e,t){return e.filter((function(e){return e.category===t})).length},G=function(e){var t=e.products;return Object(p.jsxs)("div",{className:"category",children:[Object(p.jsx)("h1",{className:"category__title",children:"Shop by category"}),Object(p.jsxs)("div",{className:"category__container",children:[Object(p.jsxs)(r.b,{to:"/phones",className:"category__phone",children:[Object(p.jsx)("div",{className:"category__bg category__bg--phone",children:Object(p.jsx)("img",{className:"category__img",src:Q,alt:"phone"})}),Object(p.jsx)("h3",{className:"category__name",children:"Mobile phones"}),Object(p.jsxs)("div",{className:"category__count",children:[z(t,I.Phone)," ","models"]})]}),Object(p.jsxs)(r.b,{to:"/tablets",className:"category__tablets",children:[Object(p.jsx)("div",{className:"category__bg category__bg--tablets",children:Object(p.jsx)("img",{className:"category__img",src:q,alt:"tablets"})}),Object(p.jsx)("h3",{className:"category__name",children:"Tablets"}),Object(p.jsxs)("div",{className:"category__count",children:[z(t,I.Tablet)," ","models"]})]}),Object(p.jsxs)(r.b,{to:"/accessories",className:"category__accessories",children:[Object(p.jsx)("div",{className:"category__bg category__bg--accessories",children:Object(p.jsx)("img",{className:"category__img",src:K,alt:"accessories"})}),Object(p.jsx)("h3",{className:"category__name",children:"Accessories"}),Object(p.jsxs)("div",{className:"category__count",children:[z(t,I.Accessories)," ","models"]})]})]})]})},Z=function(){var e=Object(f.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(f.useState)([]),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(f.useState)(""),u=Object(l.a)(o,2),j=u[0],d=u[1],b=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:t=e.sent,i(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d("Unable to load hot products");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d("Unable to load products");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){b(),h()}),[]),Object(p.jsxs)("div",{className:"home-page",children:[Object(p.jsx)("section",{className:"home-page__section",children:Object(p.jsx)(R,{})}),Object(p.jsx)("section",{className:"home-page__section",children:!j&&s?Object(p.jsx)(V,{title:"Hot prices",products:s}):Object(p.jsx)(X,{})}),Object(p.jsx)("section",{className:"home-page__section",children:Object(p.jsx)(G,{products:c})})]})},$=(c(41),c.p+"static/media/ArrowRight.e028d388.svg"),ee=(c(42),function(e){return e.slice(0,1).toUpperCase()+e.slice(1)}),te=function(e){var t=e.productName,c=Object(s.n)().pathname.split("/")[1];return Object(p.jsxs)("div",{"data-cy":"breadCrumbs",className:"breadcrumbs",children:[Object(p.jsx)(r.b,{to:"/",className:"breadcrumbs__icon breadcrumbs__icon--hover",children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFCSURBVHgBzVMxUsMwELxT0jAUqYEmP0BxIEmHeQIviPkB/IIutFSEH4QX2K4IYYjvCWmYlEBJgY47m3EyxvaYLjsjy3PavVtJJ4AaWDvq6qjjmKqFfn80RuMSNJzY/mBcxWuVBT1vOGGAGwa8A8AYAW4PD45gvX6Li1yEgmVs8T04tozmmpbz6W88EDcTYFwx4wXRfPUngT0Z+ehELKWFdL5NypMjh6pg5yTJC+VnYL3TQMQhM8fMe72iWKEx5q+ectCYxHrDK42301VGXwo/UrIIoAZE9CFTIOKOzMebBNlm3nO74sigOdsWO+CIXhcPWUH+BMx2X36N6siB78SWDv3XWBm1DRVghIiWz5epo95gWriwHJWN1BQ7lAAZuo1FiJ1cpx/pMl8eTQj/ADsj3fg027Ry+my//Wby/RlRpE0FPwp0hJyDJrNjAAAAAElFTkSuQmCC",alt:"Home"})}),Object(p.jsx)("div",{className:"breadcrumbs__icon",children:Object(p.jsx)("img",{src:$,alt:"ArrowRight"})}),t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(r.b,{to:"/".concat(c),className:"breadcrumbs__link",children:ee(c)}),Object(p.jsx)("div",{className:"breadcrumbs__icon",children:Object(p.jsx)("img",{src:$,alt:"ArrowRight"})}),Object(p.jsx)("p",{className:"breadcrumbs__current",children:t})]}):Object(p.jsx)("p",{className:"breadcrumbs__current",children:ee(c)})]})},ce=function(e){var t=e.category,c=t[0].toUpperCase()+t.slice(1);return Object(p.jsx)("h1",{className:"title",children:"".concat(c," not found")})};c(43);!function(e){e.Newest="Newest",e.Alphabetically="Alphabetically",e.Cheapest="Cheapest"}(H||(H={}));var ae=[{label:"All",value:"All"},{label:"Four",value:"4"},{label:"Eight",value:"8"},{label:"Sixteen",value:"16"}],ne=[{label:"Newest",value:"Newest"},{label:"Alphabetically",value:"Alphabetically"},{label:"Cheapest",value:"Cheapest"}],re=function(){return Object(p.jsx)("h1",{className:"no-results",children:"There are no goods by your criteria"})};c(44);var se=function(e){var t=e.totalItems,c=e.perPage,a=e.currentPage,n=Object(r.d)(),s=Object(l.a)(n,1)[0],i=Math.ceil(t/c),j=1===a,d=a===i,b=Math.max(1,a-2),h=Math.min(b+4,i);h-b<4&&(b=Math.max(1,h-4));var m=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(b,h);return Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)(r.b,{className:o()("pagination__button","pagination__button-left",{"pagination__button-left--disabled":j}),"data-cy":"paginationLeft",to:{search:u(s,{page:(a-1).toString()})},"aria-disabled":j}),Object(p.jsxs)("ul",{className:"pagination__list",children:[b>1&&Object(p.jsx)("li",{className:"pagination__item",children:Object(p.jsx)(r.b,{className:"pagination__link",to:{search:u(s,{page:"1"})},children:"1"})}),b>2&&Object(p.jsx)("li",{className:"pagination__item",children:Object(p.jsx)("span",{className:"pagination__break",children:"..."})}),m.map((function(e){return Object(p.jsx)("li",{className:o()("pagination__item",{"pagination__item--active":a===e}),children:Object(p.jsx)(r.b,{className:"pagination__link",to:{search:u(s,{page:e.toString()})},children:e})},e)})),h<i-1&&Object(p.jsx)("li",{className:"pagination__item",children:Object(p.jsx)("span",{className:"pagination__break",children:"..."})}),h<i&&Object(p.jsx)("li",{className:"pagination__item",children:Object(p.jsx)(r.b,{className:"pagination__link",to:{search:u(s,{page:i.toString()})},children:i})})]}),Object(p.jsx)(r.b,{className:o()("pagination__button","pagination__button-right",{"pagination__button-right--disabled":d}),"data-cy":"paginationRight",to:{search:u(s,{page:(a+1).toString()})},"aria-disabled":d})]})},ie=c(8),oe=(c(45),c.p+"static/media/ArrowDown.98c9dd6d.svg"),le=c.p+"static/media/ArrowUp.9d96d8b3.svg",ue=function(e){var t=e.options,c=e.label,a=e.initialValue,n=e.searchName,s=Object(r.d)(),i=Object(l.a)(s,1)[0],j=Object(f.useState)(a),d=Object(l.a)(j,2),b=d[0],h=d[1],m=Object(f.useState)(!1),O=Object(l.a)(m,2),_=O[0],x=O[1],g=Object(f.useRef)(null),v=function(e){g.current&&!g.current.contains(e.target)&&x(!1)};return Object(f.useEffect)((function(){var e=i.get(n);return e&&t.find((function(t){return t.value===e}))?h(e):h(a),document.body.addEventListener("mousedown",v),function(){document.body.removeEventListener("mousedown",v)}}),[n,a,t,i]),Object(p.jsxs)("div",{className:"drop-down",ref:g,children:[Object(p.jsx)("label",{className:"drop-down__title",children:c}),Object(p.jsxs)("button",{className:"drop-down__header",type:"button",onClick:function(){x(!_),i.set("page","1")},children:[Object(p.jsx)("span",{className:"drop-down__current",children:b}),Object(p.jsx)("div",{className:"drop-down__icon",children:_?Object(p.jsx)("img",{src:le,alt:"arrow up"}):Object(p.jsx)("img",{src:oe,alt:"arrow down"})})]}),Object(p.jsx)("ul",{className:o()("drop-down__list",{"drop-down__is--deactivate":!_}),children:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(r.b,{className:"drop-down__item",to:{search:u(i,Object(ie.a)({},n,e.value))},onClick:function(){return function(e){h(e),x(!1)}(e.value)},children:e.value})},e.label)}))})]})},je=function(e){var t=e.products,c=Object(r.d)(),a=Object(l.a)(c,1)[0],n=Number(a.get("page"))||1,s=Number(a.get("perPage"))||t.length,i=n*s-s,o=Math.min(n*s,t.length),u=a.get("sortBy"),j=a.get("query")||"",d=Object(f.useMemo)((function(){return function(e,t){var c=t.toLowerCase().trim().split(" ");return e.filter((function(e){var t=e.name.toLowerCase();return c.some((function(e){return t.includes(e)}))}))}(t,j)}),[t,j]),b=Object(f.useMemo)((function(){return function(e,t){var c=Object(x.a)(e);return t&&c.sort((function(e,c){switch(t){case H.Alphabetically:return e.name.localeCompare(c.name);case H.Cheapest:return e.price-c.price;case H.Newest:return c.year-e.year;default:throw new Error("Sort type error")}})),c}(d,u)}),[d,u]),h=b.slice(i,o);return Object(p.jsxs)("div",{className:"product-list",children:[Object(p.jsx)("p",{className:"products-page__quantity-info",children:"".concat(b.length," models")}),b.length?Object(p.jsxs)("div",{className:"product-list__drop-downs",children:[Object(p.jsx)("div",{className:"product-list__drop-down",children:Object(p.jsx)(ue,{options:ne,label:"Sort by",initialValue:"Choose option",searchName:"sortBy"})}),Object(p.jsx)("div",{className:"phones-page__dropDown",children:Object(p.jsx)(ue,{options:ae,label:"Items on page",initialValue:"All",searchName:"perPage"})})]}):Object(p.jsx)(re,{}),Object(p.jsx)("ul",{"data-cy":"productList",className:"product-list__items",children:h.map((function(e){return Object(p.jsx)("li",{className:"product-list__item",children:Object(p.jsx)(J,{product:e})},e.id)}))}),s<b.length&&d.length>0&&Object(p.jsx)("div",{className:"product-list__pagination",children:Object(p.jsx)(se,{totalItems:b.length,perPage:s,currentPage:n})})]})},de=function(e){var t=e.isLoading,c=e.isError,a=e.products,n=e.title,r=e.category;return Object(p.jsxs)("section",{className:"products-page",children:[Object(p.jsx)("div",{className:"products-page__nav",children:Object(p.jsx)(te,{})}),Object(p.jsxs)("div",{className:"products-page__content",children:[t&&!c?Object(p.jsx)(X,{}):Object(p.jsx)(p.Fragment,{children:a.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"products-page__title",children:n}),!t&&!c&&Object(p.jsx)(je,{products:a})]}):Object(p.jsx)(ce,{category:r})}),c&&!t&&Object(p.jsx)("p",{children:"Cannot find a ".concat(r," for you, try it later...")})]})]})},be=function(){var e=Object(f.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(f.useState)(!1),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(f.useState)(!1),u=Object(l.a)(o,2),j=u[0],d=u[1],b=function(){var e=Object(w.a)(C.a.mark((function e(){var t,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,P();case 4:t=e.sent,c=t.filter((function(e){return e.category===I.Phone})),a(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i(!0);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){b()}),[]),Object(p.jsx)("section",{className:"phones",children:Object(p.jsx)(de,{products:c,title:"Mobile phones",isError:s,isLoading:j,category:I.Phone})})},pe=function(){var e=Object(f.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(f.useState)(!1),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(f.useState)(!1),u=Object(l.a)(o,2),j=u[0],d=u[1],b=function(){var e=Object(w.a)(C.a.mark((function e(){var t,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,P();case 4:t=e.sent,c=t.filter((function(e){return e.category===I.Tablet})),a(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i(!0);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){b()}),[]),Object(p.jsx)("section",{className:"phones",children:Object(p.jsx)(de,{products:c,title:"Tablets",isError:s,isLoading:j,category:I.Tablet})})},he=function(){var e=Object(f.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(f.useState)(!1),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(f.useState)(!1),u=Object(l.a)(o,2),j=u[0],d=u[1],b=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,P();case 4:t=e.sent.filter((function(e){return e.category===I.Accessories})),a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d(!0);case 11:return e.prev=11,i(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){b()}),[]),Object(p.jsx)("section",{className:"phones",children:Object(p.jsx)(de,{products:c,isError:j,isLoading:s,category:I.Accessories,title:"Accessoryies"})})},me=(c(46),c.p+"static/media/ArrowLeft.7460d679.svg"),Oe=function(){var e=Object(s.p)();return Object(p.jsxs)("button",{type:"button",className:"back-button",onClick:function(){e(-1)},"aria-hidden":!0,"data-cy":"backButton",children:[Object(p.jsx)("div",{className:"back-button__icon",children:Object(p.jsx)("img",{src:me,alt:"ArrowLeft"})}),Object(p.jsx)("span",{className:"back-button__text",children:"Back"})]})},_e=function(){var e=Object(s.n)().pathname.split("/").filter((function(e){return""!==e})),t=e[e.length-1],c=Object(f.useState)(null),a=Object(l.a)(c,2),n=a[0],r=a[1],i=Object(f.useState)(null),o=Object(l.a)(i,2),u=o[0],j=o[1],d=Object(f.useState)(""),b=Object(l.a)(d,2),h=b[0],m=b[1],O=Object(f.useState)(!0),_=Object(l.a)(O,2),x=_[0],g=_[1],v=Object(f.useState)(""),N=Object(l.a)(v,2),y=N[0],A=N[1];return Object(f.useEffect)((function(){function e(){return(e=Object(w.a)(C.a.mark((function e(){var c,a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(t||"");case 3:if(c=e.sent){e.next=7;break}return m("Product details were not found..."),e.abrupt("return");case 7:return j(c),A(c.images[0]),e.next=11,P();case 11:if(a=e.sent,n=a.find((function(e){return e.phoneId===c.id}))){e.next=16;break}return m("Could not find exact product..."),e.abrupt("return");case 16:r(n);case 17:return e.prev=17,g(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,,17,20]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),x?Object(p.jsx)(X,{}):Object(p.jsxs)("section",{className:"product-details",children:[Object(p.jsx)("div",{className:"product-details__navigation","data-cy":"breadCrumbs",children:Object(p.jsx)(te,{productName:(null===u||void 0===u?void 0:u.name)||"???"})}),Object(p.jsx)("section",{className:"details-page__back-button",children:Object(p.jsx)(Oe,{})}),u&&n&&!h?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("section",{className:"details-page__section details-page__section--small",children:Object(p.jsx)("h1",{className:"details-page__title",children:u.name})})}):Object(p.jsxs)("div",{className:"details-page__error",children:[Object(p.jsx)("h1",{className:"details-page__error-title",children:h}),Object(p.jsx)("p",{className:"details-page__error-description",children:"Something went wrong..."})]}),Object(p.jsx)("img",{src:y,alt:"Product"})]})},xe=(c(47),function(){return Object(p.jsxs)("div",{className:"no-page",children:[Object(p.jsx)("h1",{className:"no-page__title",children:"Page not found"}),Object(p.jsx)("h2",{className:"no-page__code",children:"404"}),Object(p.jsx)("p",{className:"no-page__description",children:"Seems like page you are looking for does't exist"}),Object(p.jsx)(r.b,{to:"/",className:"no-page__button",children:"Go to homepage"})]})}),fe=function(){return Object(p.jsx)(N,{children:Object(p.jsx)(A,{children:Object(p.jsx)(r.a,{children:Object(p.jsxs)(s.d,{children:[Object(p.jsxs)(s.b,{path:"/",element:Object(p.jsx)(_,{}),children:[Object(p.jsx)(s.b,{index:!0,element:Object(p.jsx)(Z,{})}),Object(p.jsxs)(s.b,{path:"phones",children:[Object(p.jsx)(s.b,{index:!0,element:Object(p.jsx)(be,{})}),Object(p.jsx)(s.b,{path:":productId",element:Object(p.jsx)(_e,{})})]}),Object(p.jsx)(s.b,{path:"tablets",children:Object(p.jsx)(s.b,{index:!0,element:Object(p.jsx)(pe,{})})}),Object(p.jsx)(s.b,{path:"accessories",children:Object(p.jsx)(s.b,{index:!0,element:Object(p.jsx)(he,{})})})]}),Object(p.jsx)(s.b,{path:"*",element:Object(p.jsx)(xe,{})})]})})})})};n.a.render(Object(p.jsx)(fe,{}),document.getElementById("root"))}]),[[48,1,2]]]);
//# sourceMappingURL=main.68488681.chunk.js.map