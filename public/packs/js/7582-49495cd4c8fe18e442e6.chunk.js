(self.webpackChunkprsdigg=self.webpackChunkprsdigg||[]).push([[7582],{93764:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var n=a(96156),r=a(22122),c=a(67294),l=a(94184),o=a.n(l),i=a(10366),s=a(65632),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},m=function(e){var t=e.prefixCls,a=e.className,l=e.hoverable,i=void 0===l||l,m=u(e,["prefixCls","className","hoverable"]);return c.createElement(s.C,null,(function(e){var l=(0,e.getPrefixCls)("card",t),s=o()("".concat(l,"-grid"),a,(0,n.Z)({},"".concat(l,"-grid-hoverable"),i));return c.createElement("div",(0,r.Z)({},m,{className:s}))}))},d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},f=function(e){return c.createElement(s.C,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,l=e.className,i=e.avatar,s=e.title,u=e.description,m=d(e,["prefixCls","className","avatar","title","description"]),f=a("card",n),p=o()("".concat(f,"-meta"),l),b=i?c.createElement("div",{className:"".concat(f,"-meta-avatar")},i):null,v=s?c.createElement("div",{className:"".concat(f,"-meta-title")},s):null,y=u?c.createElement("div",{className:"".concat(f,"-meta-description")},u):null,E=v||y?c.createElement("div",{className:"".concat(f,"-meta-detail")},v,y):null;return c.createElement("div",(0,r.Z)({},m,{className:p}),b,E)}))},p=a(7495),b=a(71230),v=a(15746),y=a(97647),E=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var g=function(e){var t,a,l,u=c.useContext(s.E_),d=u.getPrefixCls,f=u.direction,g=c.useContext(y.Z),h=e.prefixCls,Z=e.className,O=e.extra,x=e.headStyle,N=void 0===x?{}:x,P=e.bodyStyle,C=void 0===P?{}:P,w=e.title,j=e.loading,S=e.bordered,k=void 0===S||S,T=e.size,A=e.type,I=e.cover,_=e.actions,M=e.tabList,K=e.children,z=e.activeTabKey,$=e.defaultActiveTabKey,D=e.tabBarExtraContent,L=e.hoverable,B=e.tabProps,R=void 0===B?{}:B,U=E(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),H=d("card",h),q=0===C.padding||"0px"===C.padding?{padding:24}:void 0,F=c.createElement("div",{className:"".concat(H,"-loading-block")}),G=c.createElement("div",{className:"".concat(H,"-loading-content"),style:q},c.createElement(b.Z,{gutter:8},c.createElement(v.Z,{span:22},F)),c.createElement(b.Z,{gutter:8},c.createElement(v.Z,{span:8},F),c.createElement(v.Z,{span:15},F)),c.createElement(b.Z,{gutter:8},c.createElement(v.Z,{span:6},F),c.createElement(v.Z,{span:18},F)),c.createElement(b.Z,{gutter:8},c.createElement(v.Z,{span:13},F),c.createElement(v.Z,{span:9},F)),c.createElement(b.Z,{gutter:8},c.createElement(v.Z,{span:4},F),c.createElement(v.Z,{span:3},F),c.createElement(v.Z,{span:16},F))),J=void 0!==z,V=(0,r.Z)((0,r.Z)({},R),(t={},(0,n.Z)(t,J?"activeKey":"defaultActiveKey",J?z:$),(0,n.Z)(t,"tabBarExtraContent",D),t)),W=M&&M.length?c.createElement(p.Z,(0,r.Z)({size:"large"},V,{className:"".concat(H,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),M.map((function(e){return c.createElement(p.Z.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(w||O||W)&&(l=c.createElement("div",{className:"".concat(H,"-head"),style:N},c.createElement("div",{className:"".concat(H,"-head-wrapper")},w&&c.createElement("div",{className:"".concat(H,"-head-title")},w),O&&c.createElement("div",{className:"".concat(H,"-extra")},O)),W));var Q,X=I?c.createElement("div",{className:"".concat(H,"-cover")},I):null,Y=c.createElement("div",{className:"".concat(H,"-body"),style:C},j?G:K),ee=_&&_.length?c.createElement("ul",{className:"".concat(H,"-actions")},function(e){return e.map((function(t,a){return c.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},c.createElement("span",null,t))}))}(_)):null,te=(0,i.Z)(U,["onTabChange"]),ae=T||g,ne=o()(H,(a={},(0,n.Z)(a,"".concat(H,"-loading"),j),(0,n.Z)(a,"".concat(H,"-bordered"),k),(0,n.Z)(a,"".concat(H,"-hoverable"),L),(0,n.Z)(a,"".concat(H,"-contain-grid"),(c.Children.forEach(e.children,(function(e){e&&e.type&&e.type===m&&(Q=!0)})),Q)),(0,n.Z)(a,"".concat(H,"-contain-tabs"),M&&M.length),(0,n.Z)(a,"".concat(H,"-").concat(ae),ae),(0,n.Z)(a,"".concat(H,"-type-").concat(A),!!A),(0,n.Z)(a,"".concat(H,"-rtl"),"rtl"===f),a),Z);return c.createElement("div",(0,r.Z)({},te,{className:ne}),l,X,Y,ee)};g.Grid=m,g.Meta=f;var h=g},34313:function(e,t,a){"use strict";a(39992),a(19793),a(13062),a(89032)},31990:function(e,t,a){"use strict";var n=a(22122),r=a(96156),c=a(67294),l=a(94184),o=a.n(l),i=a(65632),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.Z=function(e){var t=e.actions,a=e.author,l=e.avatar,u=e.children,m=e.className,d=e.content,f=e.prefixCls,p=e.datetime,b=s(e,["actions","author","avatar","children","className","content","prefixCls","datetime"]),v=c.useContext(i.E_),y=v.getPrefixCls,E=v.direction,g=y("comment",f),h=l?c.createElement("div",{className:"".concat(g,"-avatar")},"string"===typeof l?c.createElement("img",{src:l,alt:"comment-avatar"}):l):null,Z=t&&t.length?c.createElement("ul",{className:"".concat(g,"-actions")},t.map((function(e,t){return c.createElement("li",{key:"action-".concat(t)},e)}))):null,O=(a||p)&&c.createElement("div",{className:"".concat(g,"-content-author")},a&&c.createElement("span",{className:"".concat(g,"-content-author-name")},a),p&&c.createElement("span",{className:"".concat(g,"-content-author-time")},p)),x=c.createElement("div",{className:"".concat(g,"-content")},O,c.createElement("div",{className:"".concat(g,"-content-detail")},d),Z),N=o()(g,(0,r.Z)({},"".concat(g,"-rtl"),"rtl"===E),m);return c.createElement("div",(0,n.Z)({},b,{className:N}),c.createElement("div",{className:"".concat(g,"-inner")},h,x),u?function(e,t){return c.createElement("div",{className:o()("".concat(e,"-nested"))},t)}(g,u):null)}},41289:function(e,t,a){"use strict";a(39992)},67582:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return I}});a(19793);var n=a(7495),r=a(6799),c=a(67294),l=a(8134),o=a(5977),i=(a(51350),a(38272)),s=a(23684),u=a(96019),m=a(67776),d=a(39387);function f(e){var t=e.filter,a=(0,d.i5n)({notifyOnNetworkStatusChange:!0,variables:{filter:t}}),n=a.data,r=a.loading,l=a.fetchMore;if(!n&&r)return c.createElement(u.Z,null);var o=n.articleConnection,f=o.nodes,p=o.pageInfo,b=p.hasNextPage,v=p.endCursor;return c.createElement(i.ZP,{size:"large",itemLayout:"vertical",dataSource:f,loadMore:c.createElement(m.Z,{hasNextPage:b,loading:r,fetchMore:function(){l({variables:{after:v,filter:t}})}}),renderItem:function(e){return c.createElement(s.Z,{article:e})}})}a(41289);var p=a(31990),b=(a(75257),a(51890)),v=a(30381),y=a.n(v),E=a(73727);function g(){var e=(0,l.$)(),t=e.t,a=e.i18n,n=(0,r.FS)().isMobile;y().locale(a.language);var o=(0,d.$n$)(),s=o.data,f=o.loading,v=o.fetchMore;if(f)return c.createElement(u.Z,null);var g=s.commentConnection,h=g.nodes,Z=g.pageInfo,O=Z.hasNextPage,x=Z.endCursor;return c.createElement(i.ZP,{dataSource:h,loadMore:c.createElement(m.Z,{hasNextPage:O,loading:f,fetchMore:function(){v({variables:{after:x}})}}),renderItem:function(e){return c.createElement("li",{id:"comment-"+e.id,className:n.phone?"blockquote-collapsed":""},!e.deletedAt&&c.createElement(p.Z,{className:"comment-list",author:e.author.name,avatar:c.createElement(b.C,{src:e.author.avatar},e.author.name[0]),content:c.createElement(r.nV,{source:e.content}),datetime:c.createElement("span",null,y()(e.createdAt).fromNow()),actions:[c.createElement("span",null,t("from"),": "," ",c.createElement(E.rU,{style:{color:"inherit"},to:"/articles/"+e.commentable.uuid},e.commentable.title))]}))}})}a(67167);var h=a(71577),Z=(a(13062),a(71230)),O=(a(89032),a(15746)),x=(a(34313),a(93764)),N=(a(78322),a(3887)),P=(a(74407),a(31097)),C=(a(3829),a(60331));function w(){var e=(0,d.zC5)(),t=e.loading,a=e.data,n=e.fetchMore,r=(0,l.$)().t,i=(0,o.k6)();if(t)return c.createElement(u.Z,null);var s=a.tagConnection,m=s.nodes,f=s.pageInfo,p=f.hasNextPage,b=f.endCursor;return c.createElement("div",null,c.createElement(Z.Z,{wrap:!0,gutter:[8,8]},m.map((function(e){return c.createElement(O.Z,{key:e.id,xs:24,sm:12,md:12,lg:8},c.createElement(x.Z,{size:"small",hoverable:!0,onClick:function(){return i.push("/tags/"+e.id)},style:{borderTop:"3px solid "+e.color,borderTopLeftRadius:10,borderTopRightRadius:10,margin:"0 0.5rem 1rem"}},c.createElement("div",null,c.createElement(P.Z,{title:e.name},c.createElement(C.Z,{style:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},color:e.color},"#",e.name))),c.createElement("div",null,c.createElement(N.Z.Text,{type:"secondary"},r("tag.articles_count")," ",e.articlesCount))))}))),p&&c.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},c.createElement(h.Z,{loading:t,onClick:function(){n({variables:{after:b}})}},r("load_more"))))}function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){k(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==a)return;var n,r,c=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(c.push(n.value),!t||c.length!==t);l=!0);}catch(i){o=!0,r=i}finally{try{l||null==a.return||a.return()}finally{if(o)throw r}}return c}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function I(){var e,t=(0,l.$)().t,a=(0,r.xJ)().currentUser,i=(0,o.k6)(),s=(0,o.TH)(),u=T((0,c.useState)((null==(e=s.state)?void 0:e.activeTabKey)||"default"),2),m=u[0],d=u[1];return c.createElement(n.Z,{defaultActiveKey:m,onChange:function(e){d(e),i.replace(S(S({},i.location),{},{state:{activeTabKey:e}}))}},c.createElement(n.Z.TabPane,{tab:t("order_by_popularity"),key:"popularity"},c.createElement(f,{filter:"default"})),a&&c.createElement(n.Z.TabPane,{tab:t("subscribed"),key:"subscribed"},c.createElement(f,{filter:"subscribed"})),c.createElement(n.Z.TabPane,{tab:t("order_by_lately"),key:"lately"},c.createElement(f,{filter:"lately"})),c.createElement(n.Z.TabPane,{tab:t("order_by_revenue"),key:"revenue"},c.createElement(f,{filter:"revenue"})),c.createElement(n.Z.TabPane,{tab:t("tags"),key:"tags"},c.createElement(w,null)),c.createElement(n.Z.TabPane,{tab:t("comments_zone"),key:"comments"},c.createElement(g,null)))}}}]);
//# sourceMappingURL=7582-49495cd4c8fe18e442e6.chunk.js.map