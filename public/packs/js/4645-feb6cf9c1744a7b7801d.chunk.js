(self.webpackChunkprsdigg=self.webpackChunkprsdigg||[]).push([[4645],{31990:function(e,t,n){"use strict";var a=n(22122),r=n(96156),c=n(67294),l=n(94184),o=n.n(l),s=n(65632),i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.Z=function(e){var t=e.actions,n=e.author,l=e.avatar,m=e.children,u=e.className,d=e.content,p=e.prefixCls,f=e.datetime,v=i(e,["actions","author","avatar","children","className","content","prefixCls","datetime"]),y=c.useContext(s.E_),b=y.getPrefixCls,j=y.direction,E=b("comment",p),h=l?c.createElement("div",{className:"".concat(E,"-avatar")},"string"===typeof l?c.createElement("img",{src:l,alt:"comment-avatar"}):l):null,g=t&&t.length?c.createElement("ul",{className:"".concat(E,"-actions")},t.map((function(e,t){return c.createElement("li",{key:"action-".concat(t)},e)}))):null,Z=(n||f)&&c.createElement("div",{className:"".concat(E,"-content-author")},n&&c.createElement("span",{className:"".concat(E,"-content-author-name")},n),f&&c.createElement("span",{className:"".concat(E,"-content-author-time")},f)),x=c.createElement("div",{className:"".concat(E,"-content")},Z,c.createElement("div",{className:"".concat(E,"-content-detail")},d),g),C=o()(E,(0,r.Z)({},"".concat(E,"-rtl"),"rtl"===j),u);return c.createElement("div",(0,a.Z)({},v,{className:C}),c.createElement("div",{className:"".concat(E,"-inner")},h,x),m?function(e,t){return c.createElement("div",{className:o()("".concat(e,"-nested"))},t)}(E,m):null)}},41289:function(e,t,n){"use strict";n(39992)},4914:function(e,t,n){"use strict";n.d(t,{K:function(){return h},Z:function(){return C}});var a=n(96156),r=n(28481),c=n(90484),l=n(67294),o=n(94184),s=n.n(o),i=n(37419),m=n(24308),u=n(21687),d=n(65632),p=n(22122);function f(e){return void 0!==e&&null!==e}var v=function(e){var t,n=e.itemPrefixCls,r=e.component,c=e.span,o=e.className,i=e.style,m=e.labelStyle,u=e.contentStyle,d=e.bordered,p=e.label,v=e.content,y=e.colon,b=r;return d?l.createElement(b,{className:s()((t={},(0,a.Z)(t,"".concat(n,"-item-label"),f(p)),(0,a.Z)(t,"".concat(n,"-item-content"),f(v)),t),o),style:i,colSpan:c},f(p)&&l.createElement("span",{style:m},p),f(v)&&l.createElement("span",{style:u},v)):l.createElement(b,{className:s()("".concat(n,"-item"),o),style:i,colSpan:c},l.createElement("div",{className:"".concat(n,"-item-container")},p&&l.createElement("span",{className:s()("".concat(n,"-item-label"),(0,a.Z)({},"".concat(n,"-item-no-colon"),!y)),style:m},p),v&&l.createElement("span",{className:s()("".concat(n,"-item-content")),style:u},v)))};function y(e,t,n){var a=t.colon,r=t.prefixCls,c=t.bordered,o=n.component,s=n.type,i=n.showLabel,m=n.showContent,u=n.labelStyle,d=n.contentStyle;return e.map((function(e,t){var n=e.props,f=n.label,y=n.children,b=n.prefixCls,j=void 0===b?r:b,E=n.className,h=n.style,g=n.labelStyle,Z=n.contentStyle,x=n.span,C=void 0===x?1:x,k=e.key;return"string"===typeof o?l.createElement(v,{key:"".concat(s,"-").concat(k||t),className:E,style:h,labelStyle:(0,p.Z)((0,p.Z)({},u),g),contentStyle:(0,p.Z)((0,p.Z)({},d),Z),span:C,colon:a,component:o,itemPrefixCls:j,bordered:c,label:i?f:null,content:m?y:null}):[l.createElement(v,{key:"label-".concat(k||t),className:E,style:(0,p.Z)((0,p.Z)((0,p.Z)({},u),h),g),span:1,colon:a,component:o[0],itemPrefixCls:j,bordered:c,label:f}),l.createElement(v,{key:"content-".concat(k||t),className:E,style:(0,p.Z)((0,p.Z)((0,p.Z)({},d),h),Z),span:2*C-1,component:o[1],itemPrefixCls:j,bordered:c,content:y})]}))}var b=function(e){var t=l.useContext(h),n=e.prefixCls,a=e.vertical,r=e.row,c=e.index,o=e.bordered;return a?l.createElement(l.Fragment,null,l.createElement("tr",{key:"label-".concat(c),className:"".concat(n,"-row")},y(r,e,(0,p.Z)({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:"content-".concat(c),className:"".concat(n,"-row")},y(r,e,(0,p.Z)({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:c,className:"".concat(n,"-row")},y(r,e,(0,p.Z)({component:o?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},j=function(e){return e.children},E=n(96159),h=l.createContext({}),g={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Z(e,t,n){var a=e;return(void 0===t||t>n)&&(a=(0,E.Tm)(e,{span:n}),(0,u.Z)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),a}function x(e){var t,n=e.prefixCls,o=e.title,u=e.extra,p=e.column,f=void 0===p?g:p,v=e.colon,y=void 0===v||v,j=e.bordered,E=e.layout,x=e.children,C=e.className,k=e.style,N=e.size,w=e.labelStyle,O=e.contentStyle,S=l.useContext(d.E_),z=S.getPrefixCls,_=S.direction,P=z("descriptions",n),I=l.useState({}),M=(0,r.Z)(I,2),T=M[0],R=M[1],Y=function(e,t){if("number"===typeof e)return e;if("object"===(0,c.Z)(e))for(var n=0;n<m.c4.length;n++){var a=m.c4[n];if(t[a]&&void 0!==e[a])return e[a]||g[a]}return 3}(f,T);l.useEffect((function(){var e=m.ZP.subscribe((function(e){"object"===(0,c.Z)(f)&&R(e)}));return function(){m.ZP.unsubscribe(e)}}),[]);var D=function(e,t){var n=(0,i.Z)(e).filter((function(e){return e})),a=[],r=[],c=t;return n.forEach((function(e,l){var o,s=null===(o=e.props)||void 0===o?void 0:o.span,i=s||1;if(l===n.length-1)return r.push(Z(e,s,c)),void a.push(r);i<c?(c-=i,r.push(e)):(r.push(Z(e,i,c)),a.push(r),c=t,r=[])})),a}(x,Y);return l.createElement(h.Provider,{value:{labelStyle:w,contentStyle:O}},l.createElement("div",{className:s()(P,(t={},(0,a.Z)(t,"".concat(P,"-").concat(N),N&&"default"!==N),(0,a.Z)(t,"".concat(P,"-bordered"),!!j),(0,a.Z)(t,"".concat(P,"-rtl"),"rtl"===_),t),C),style:k},(o||u)&&l.createElement("div",{className:"".concat(P,"-header")},o&&l.createElement("div",{className:"".concat(P,"-title")},o),u&&l.createElement("div",{className:"".concat(P,"-extra")},u)),l.createElement("div",{className:"".concat(P,"-view")},l.createElement("table",null,l.createElement("tbody",null,D.map((function(e,t){return l.createElement(b,{key:t,index:t,colon:y,prefixCls:P,vertical:"vertical"===E,bordered:j,row:e})})))))))}x.Item=j;var C=x},39412:function(e,t,n){"use strict";n(39992)},38272:function(e,t,n){"use strict";n.d(t,{ZM:function(){return x},ZP:function(){return k}});var a=n(85061),r=n(22122),c=n(96156),l=n(28481),o=n(90484),s=n(67294),i=n(94184),m=n.n(i),u=n(11382),d=n(25378),p=n(24308),f=n(65632),v=n(80746),y=n(92820),b=n(21584),j=n(96159),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},h=function(e){var t,n=e.prefixCls,a=e.children,l=e.actions,o=e.extra,i=e.className,u=e.colStyle,d=E(e,["prefixCls","children","actions","extra","className","colStyle"]),p=s.useContext(x),v=p.grid,y=p.itemLayout,h=s.useContext(f.E_).getPrefixCls,g=h("list",n),Z=l&&l.length>0&&s.createElement("ul",{className:"".concat(g,"-item-action"),key:"actions"},l.map((function(e,t){return s.createElement("li",{key:"".concat(g,"-item-action-").concat(t)},e,t!==l.length-1&&s.createElement("em",{className:"".concat(g,"-item-action-split")}))}))),C=v?"div":"li",k=s.createElement(C,(0,r.Z)({},d,{className:m()("".concat(g,"-item"),(0,c.Z)({},"".concat(g,"-item-no-flex"),!("vertical"===y?o:(s.Children.forEach(a,(function(e){"string"===typeof e&&(t=!0)})),!(t&&s.Children.count(a)>1)))),i)}),"vertical"===y&&o?[s.createElement("div",{className:"".concat(g,"-item-main"),key:"content"},a,Z),s.createElement("div",{className:"".concat(g,"-item-extra"),key:"extra"},o)]:[a,Z,(0,j.Tm)(o,{key:"extra"})]);return v?s.createElement(b.Z,{flex:1,style:u},k):k};h.Meta=function(e){var t=e.prefixCls,n=e.className,a=e.avatar,c=e.title,l=e.description,o=E(e,["prefixCls","className","avatar","title","description"]),i=(0,s.useContext(f.E_).getPrefixCls)("list",t),u=m()("".concat(i,"-item-meta"),n),d=s.createElement("div",{className:"".concat(i,"-item-meta-content")},c&&s.createElement("h4",{className:"".concat(i,"-item-meta-title")},c),l&&s.createElement("div",{className:"".concat(i,"-item-meta-description")},l));return s.createElement("div",(0,r.Z)({},o,{className:u}),a&&s.createElement("div",{className:"".concat(i,"-item-meta-avatar")},a),(c||l)&&d)};var g=h,Z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},x=s.createContext({});x.Consumer;function C(e){var t,n=e.pagination,i=void 0!==n&&n,b=e.prefixCls,j=e.bordered,E=void 0!==j&&j,h=e.split,g=void 0===h||h,C=e.className,k=e.children,N=e.itemLayout,w=e.loadMore,O=e.grid,S=e.dataSource,z=void 0===S?[]:S,_=e.size,P=e.header,I=e.footer,M=e.loading,T=void 0!==M&&M,R=e.rowKey,Y=e.renderItem,D=e.locale,A=Z(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),F=i&&"object"===(0,o.Z)(i)?i:{},H=s.useState(F.defaultCurrent||1),L=(0,l.Z)(H,2),$=L[0],U=L[1],G=s.useState(F.defaultPageSize||10),q=(0,l.Z)(G,2),B=q[0],K=q[1],V=s.useContext(f.E_),W=V.getPrefixCls,J=V.renderEmpty,Q=V.direction,X={},ee=function(e){return function(t,n){U(t),K(n),i&&i[e]&&i[e](t,n)}},te=ee("onChange"),ne=ee("onShowSizeChange"),ae=W("list",b),re=T;"boolean"===typeof re&&(re={spinning:re});var ce=re&&re.spinning,le="";switch(_){case"large":le="lg";break;case"small":le="sm"}var oe=m()(ae,(t={},(0,c.Z)(t,"".concat(ae,"-vertical"),"vertical"===N),(0,c.Z)(t,"".concat(ae,"-").concat(le),le),(0,c.Z)(t,"".concat(ae,"-split"),g),(0,c.Z)(t,"".concat(ae,"-bordered"),E),(0,c.Z)(t,"".concat(ae,"-loading"),ce),(0,c.Z)(t,"".concat(ae,"-grid"),!!O),(0,c.Z)(t,"".concat(ae,"-something-after-last-item"),!!(w||i||I)),(0,c.Z)(t,"".concat(ae,"-rtl"),"rtl"===Q),t),C),se=(0,r.Z)((0,r.Z)((0,r.Z)({},{current:1,total:0}),{total:z.length,current:$,pageSize:B}),i||{}),ie=Math.ceil(se.total/se.pageSize);se.current>ie&&(se.current=ie);var me=i?s.createElement("div",{className:"".concat(ae,"-pagination")},s.createElement(v.Z,(0,r.Z)({},se,{onChange:te,onShowSizeChange:ne}))):null,ue=(0,a.Z)(z);i&&z.length>(se.current-1)*se.pageSize&&(ue=(0,a.Z)(z).splice((se.current-1)*se.pageSize,se.pageSize));var de=(0,d.Z)(),pe=s.useMemo((function(){for(var e=0;e<p.c4.length;e+=1){var t=p.c4[e];if(de[t])return t}}),[de]),fe=s.useMemo((function(){if(O){var e=pe&&O[pe]?O[pe]:O.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null===O||void 0===O?void 0:O.column,pe]),ve=ce&&s.createElement("div",{style:{minHeight:53}});if(ue.length>0){var ye=ue.map((function(e,t){return function(e,t){return Y?((n="function"===typeof R?R(e):"string"===typeof R?e[R]:e.key)||(n="list-item-".concat(t)),X[t]=n,Y(e,t)):null;var n}(e,t)})),be=s.Children.map(ye,(function(e,t){return s.createElement("div",{key:X[t],style:fe},e)}));ve=O?s.createElement(y.Z,{gutter:O.gutter},be):s.createElement("ul",{className:"".concat(ae,"-items")},ye)}else k||ce||(ve=function(e,t){return s.createElement("div",{className:"".concat(e,"-empty-text")},D&&D.emptyText||t("List"))}(ae,J));var je=se.position||"bottom";return s.createElement(x.Provider,{value:{grid:O,itemLayout:N}},s.createElement("div",(0,r.Z)({className:oe},A),("top"===je||"both"===je)&&me,P&&s.createElement("div",{className:"".concat(ae,"-header")},P),s.createElement(u.Z,re,ve,k),I&&s.createElement("div",{className:"".concat(ae,"-footer")},I),w||("bottom"===je||"both"===je)&&me))}C.Item=g;var k=C},51350:function(e,t,n){"use strict";n(39992),n(34892),n(96498),n(66192),n(38528)},19650:function(e,t,n){"use strict";n.d(t,{u:function(){return f},Z:function(){return y}});var a=n(22122),r=n(96156),c=n(28481),l=n(67294),o=n(94184),s=n.n(o),i=n(37419),m=n(65632);function u(e){var t=e.className,n=e.direction,c=e.index,o=e.marginDirection,s=e.children,i=e.split,m=e.wrap,u=l.useContext(f),d=u.horizontalSize,p=u.verticalSize,v=u.latestIndex,y={};return u.supportFlexGap||("vertical"===n?c<v&&(y={marginBottom:d/(i?2:1)}):y=(0,a.Z)((0,a.Z)({},c<v&&(0,r.Z)({},o,d/(i?2:1))),m&&{paddingBottom:p})),null===s||void 0===s?null:l.createElement(l.Fragment,null,l.createElement("div",{className:t,style:y},s),c<v&&i&&l.createElement("span",{className:"".concat(t,"-split"),style:y},i))}var d=n(98082),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},f=l.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),v={small:8,middle:16,large:24};var y=function(e){var t,n=l.useContext(m.E_),o=n.getPrefixCls,y=n.space,b=n.direction,j=e.size,E=void 0===j?(null===y||void 0===y?void 0:y.size)||"small":j,h=e.align,g=e.className,Z=e.children,x=e.direction,C=void 0===x?"horizontal":x,k=e.prefixCls,N=e.split,w=e.style,O=e.wrap,S=void 0!==O&&O,z=p(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),_=(0,d.Z)(),P=l.useMemo((function(){return(Array.isArray(E)?E:[E,E]).map((function(e){return function(e){return"string"===typeof e?v[e]:e||0}(e)}))}),[E]),I=(0,c.Z)(P,2),M=I[0],T=I[1],R=(0,i.Z)(Z,{keepEmpty:!0}),Y=void 0===h&&"horizontal"===C?"center":h,D=o("space",k),A=s()(D,"".concat(D,"-").concat(C),(t={},(0,r.Z)(t,"".concat(D,"-rtl"),"rtl"===b),(0,r.Z)(t,"".concat(D,"-align-").concat(Y),Y),t),g),F="".concat(D,"-item"),H="rtl"===b?"marginLeft":"marginRight",L=0,$=R.map((function(e,t){return null!==e&&void 0!==e&&(L=t),l.createElement(u,{className:F,key:"".concat(F,"-").concat(t),direction:C,index:t,marginDirection:H,split:N,wrap:S},e)})),U=l.useMemo((function(){return{horizontalSize:M,verticalSize:T,latestIndex:L,supportFlexGap:_}}),[M,T,L,_]);if(0===R.length)return null;var G={};return S&&(G.flexWrap="wrap",_||(G.marginBottom=-T)),_&&(G.columnGap=M,G.rowGap=T),l.createElement("div",(0,a.Z)({className:A,style:(0,a.Z)((0,a.Z)({},G),w)},z),l.createElement(f.Provider,{value:U},$))}},51872:function(e,t,n){"use strict";n(39992)},60331:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(96156),r=n(22122),c=n(28481),l=n(67294),o=n(94184),s=n.n(o),i=n(10366),m=n(54549),u=n(65632),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},p=function(e){var t,n=e.prefixCls,c=e.className,o=e.checked,i=e.onChange,m=e.onClick,p=d(e,["prefixCls","className","checked","onChange","onClick"]),f=(0,l.useContext(u.E_).getPrefixCls)("tag",n),v=s()(f,(t={},(0,a.Z)(t,"".concat(f,"-checkable"),!0),(0,a.Z)(t,"".concat(f,"-checkable-checked"),o),t),c);return l.createElement("span",(0,r.Z)({},p,{className:v,onClick:function(e){null===i||void 0===i||i(!o),null===m||void 0===m||m(e)}}))},f=n(98787),v=n(69304),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},b=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),j=new RegExp("^(".concat(f.E.join("|"),")$")),E=function(e,t){var n,o=e.prefixCls,d=e.className,p=e.style,f=e.children,E=e.icon,h=e.color,g=e.onClose,Z=e.closeIcon,x=e.closable,C=void 0!==x&&x,k=y(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),N=l.useContext(u.E_),w=N.getPrefixCls,O=N.direction,S=l.useState(!0),z=(0,c.Z)(S,2),_=z[0],P=z[1];l.useEffect((function(){"visible"in k&&P(k.visible)}),[k.visible]);var I=function(){return!!h&&(b.test(h)||j.test(h))},M=(0,r.Z)({backgroundColor:h&&!I()?h:void 0},p),T=I(),R=w("tag",o),Y=s()(R,(n={},(0,a.Z)(n,"".concat(R,"-").concat(h),T),(0,a.Z)(n,"".concat(R,"-has-color"),h&&!T),(0,a.Z)(n,"".concat(R,"-hidden"),!_),(0,a.Z)(n,"".concat(R,"-rtl"),"rtl"===O),n),d),D=function(e){e.stopPropagation(),null===g||void 0===g||g(e),e.defaultPrevented||"visible"in k||P(!1)},A="onClick"in k||f&&"a"===f.type,F=(0,i.Z)(k,["visible"]),H=E||null,L=H?l.createElement(l.Fragment,null,H,l.createElement("span",null,f)):f,$=l.createElement("span",(0,r.Z)({},F,{ref:t,className:Y,style:M}),L,C?Z?l.createElement("span",{className:"".concat(R,"-close-icon"),onClick:D},Z):l.createElement(m.Z,{className:"".concat(R,"-close-icon"),onClick:D}):null);return A?l.createElement(v.Z,null,$):$},h=l.forwardRef(E);h.displayName="Tag",h.CheckableTag=p;var g=h},3829:function(e,t,n){"use strict";n(39992)},40052:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});n(19793);var a=n(7495),r=(n(75257),n(51890)),c=(n(39412),n(4914)),l=(n(3829),n(60331)),o=(n(13816),n(37744)),s=(n(67167),n(71577)),i=n(67823),m=n(39387),u=n(30381),d=n.n(u),p=n(67294),f=n(8134),v=n(73727),y=n(5977),b=(n(51350),n(38272)),j=(n(41289),n(31990)),E=n(6799);function h(e){var t=e.articleId,n=(0,f.$)(),a=n.t,c=n.i18n,l=(0,E.FS)().isMobile;d().locale(c.language);var o=(0,m.$n$)({variables:{commentableType:"Article",commentableId:t}}),u=o.loading,v=o.data,y=o.fetchMore;if(u)return p.createElement(i.Z,null);var h=v.commentConnection,g=h.nodes,Z=h.pageInfo,x=Z.hasNextPage,C=Z.endCursor;return p.createElement("div",null,p.createElement(b.ZP,{size:"small",dataSource:g,loadMore:x&&p.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},p.createElement(s.Z,{loading:u,onClick:function(){y({variables:{after:C,type:"author"}})}},a("load_more"))),renderItem:function(e){return p.createElement(b.ZP.Item,{key:e.id},p.createElement("div",{id:"comment-"+e.id,className:l.phone?"blockquote-collapsed":""},e.deletedAt?p.createElement("div",{style:{padding:"1rem 0",color:"#aaa",textDecoration:"line-through"}},a("comment_deleted")):p.createElement(j.Z,{author:e.author.name,avatar:p.createElement(r.C,{src:e.author.avatar},e.author.name[0]),content:p.createElement(E.nV,{source:e.content}),datetime:p.createElement("span",null,d()(e.createdAt).format("YYYY-MM-DD HH:mm:ss"))})))}}))}n(51872);var g=n(19650);function Z(e){var t=e.uuid,n=e.orderType,a=(0,f.$)().t,c=(0,m.Dy5)({variables:{uuid:t,orderType:n}}),l=c.loading,o=c.data,u=c.fetchMore;if(l)return p.createElement(i.Z,null);var v=o.myArticleOrderConnection,y=v.nodes,j=v.pageInfo,E=j.hasNextPage,h=j.endCursor;return p.createElement("div",null,p.createElement(b.ZP,{size:"small",dataSource:y,loadMore:E&&p.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},p.createElement(s.Z,{loading:l,onClick:function(){u({variables:{after:h,type:"author"}})}},a("load_more"))),renderItem:function(e){return p.createElement(b.ZP.Item,{key:e.traceId},p.createElement(g.Z,null,"cite_article"===e.orderType&&e.citer?p.createElement("a",{href:"/articles/"+e.citer.uuid,target:"_blank"},e.citer.title):p.createElement(p.Fragment,null,p.createElement(r.C,{src:e.buyer.avatar},e.buyer.name[0]),p.createElement("span",null,e.buyer.name)),p.createElement("span",null,a("paid")+" "+e.total+" "+e.currency.symbol),p.createElement("span",null,{buy_article:a("bought_article"),rewarded_article:a("rewarded_article"),cite_article:a("cited_article")}[e.orderType])),p.createElement("div",{style:{marginLeft:"auto",color:"#aaa"}},d()(e.createdAt).format("YYYY-MM-DD HH:mm:ss")))}}))}function x(){var e=(0,f.$)(),t=e.t,n=e.i18n;d().locale(n.language);var u=(0,y.UO)().uuid,b=(0,m.YVq)({variables:{uuid:u},fetchPolicy:"network-only"}),j=b.loading,E=b.data;if(j)return p.createElement(i.Z,null);var g=E.myArticle;return p.createElement("div",null,p.createElement(o.Z,{title:t("article_detail"),extra:[p.createElement(s.Z,{key:"edit",type:"primary"},p.createElement(v.rU,{to:"/articles/"+u+"/edit"},t("edit"))),p.createElement(s.Z,{key:"view"},p.createElement("a",{href:"/articles/"+u,target:"_blank"},t("view")))],breadcrumb:{routes:[{path:"/articles",breadcrumbName:t("articles_manage")},{path:"",breadcrumbName:g.title}],itemRender:function(e,t,n,a){return n.indexOf(e)===n.length-1?p.createElement("span",null,e.breadcrumbName):p.createElement(v.rU,{to:e.path},e.breadcrumbName)}}}),p.createElement("div",{style:{marginBottom:"1rem"}},p.createElement(c.Z,{bordered:!0,size:"small",column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:1}},p.createElement(c.Z.Item,{label:t("article.state_text")},p.createElement(l.Z,{color:"published"===g.state?"success":"blocked"===g.state?"error":"warning"},t("article.state."+g.state))),p.createElement(c.Z.Item,{label:t("article.created_at")},d()(g.createdAt).format("YYYY-MM-DD HH:mm:ss")),p.createElement(c.Z.Item,{label:t("article.updated_at")},d()(g.updatedAt).format("YYYY-MM-DD HH:mm:ss")),p.createElement(c.Z.Item,{label:t("article.price")},g.price," ",g.currency.symbol),p.createElement(c.Z.Item,{label:t("readers_revenue")},100*g.readersRevenueRatio,"%"),p.createElement(c.Z.Item,{label:t("platform_revenue")},100*g.platformRevenueRatio,"%"),p.createElement(c.Z.Item,{label:t("author_revenue")},100*g.authorRevenueRatio,"%"),p.createElement(c.Z.Item,{label:t("references_revenue")},100*g.referencesRevenueRatio,"%"),p.createElement(c.Z.Item,{label:t("article.buy_orders_count")},g.buyOrders.totalCount),p.createElement(c.Z.Item,{label:t("article.reward_orders_count")},g.rewardOrders.totalCount),p.createElement(c.Z.Item,{label:t("article.revenue")},"$",g.revenueUsd.toFixed(4)),p.createElement(c.Z.Item,{label:t("article.author_revenue_total")},"$",g.authorRevenueUsd.toFixed(4)),p.createElement(c.Z.Item,{label:t("article.reader_revenue_total")},"$",g.readerRevenueUsd.toFixed(4)),p.createElement(c.Z.Item,{label:t("article.comments_count")},g.comments.totalCount),p.createElement(c.Z.Item,{label:t("article.upvotes_count")},g.upvotesCount),p.createElement(c.Z.Item,{label:t("article.downvotes_count")},g.downvotesCount),p.createElement(c.Z.Item,{label:t("article.tags")},g.tagNames.length>0?g.tagNames.map((function(e){return p.createElement(l.Z,{key:e},"#",e)})):"-"),p.createElement(c.Z.Item,{label:t("article_references")},g.articleReferences.length>0?g.articleReferences.map((function(e){return p.createElement("div",{key:e.reference.uuid,className:"flex flex-wrap items-center py-1"},p.createElement(r.C,{className:"mr-2",size:"small",src:e.reference.author.avatar}),p.createElement("span",{className:"mr-2"},e.reference.author.name,":"),p.createElement("a",{href:"/articles/"+e.reference.uuid,target:"_blank"},e.reference.title),p.createElement("div",{className:"ml-auto text-blue-500"},100*e.revenueRatio,"%"))})):"-"))),p.createElement("div",null,p.createElement(a.Z,null,p.createElement(a.Z.TabPane,{tab:t("buy_records"),key:"buyers"},p.createElement(Z,{uuid:u,orderType:"buy_article"})),p.createElement(a.Z.TabPane,{tab:t("reward_records"),key:"rewarders"},p.createElement(Z,{uuid:u,orderType:"reward_article"})),p.createElement(a.Z.TabPane,{tab:t("cite_records"),key:"citers"},p.createElement(Z,{uuid:u,orderType:"cite_article"})),p.createElement(a.Z.TabPane,{tab:t("comment_records"),key:"comments"},p.createElement(h,{articleId:g.id})))))}},46700:function(e,t,n){var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":15596,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":15596,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=46700}}]);
//# sourceMappingURL=4645-feb6cf9c1744a7b7801d.chunk.js.map