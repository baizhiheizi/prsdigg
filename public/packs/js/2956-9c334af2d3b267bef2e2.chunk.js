(self.webpackChunkprsdigg=self.webpackChunkprsdigg||[]).push([[2956],{14283:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M193 796c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563v233zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75V563zm-48.1-252.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 00-11.3 0l-39.6 39.6a8.03 8.03 0 000 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0zm669.6-79.2l-39.6-39.6a8.03 8.03 0 00-11.3 0l-67.9 67.9a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3zM832 892H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32zM484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8z"}}]},name:"alert",theme:"outlined"},s=n(59418),c=function(e,t){return r.createElement(s.Z,Object.assign({},e,{ref:t,icon:a}))};c.displayName="AlertOutlined";var l=r.forwardRef(c)},34952:function(e,t,n){"use strict";var r=n(22122),a=n(67294),s=n(92389),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},l={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},i=a.forwardRef((function(e,t){var n=e.style,i=e.noStyle,o=e.disabled,u=c(e,["style","noStyle","disabled"]),m={};return i||(m=(0,r.Z)({},l)),o&&(m.pointerEvents="none"),m=(0,r.Z)((0,r.Z)({},m),n),a.createElement("div",(0,r.Z)({role:"button",tabIndex:0,ref:t},u,{onKeyDown:function(e){e.keyCode===s.Z.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===s.Z.ENTER&&r&&r()},style:m}))}));t.Z=i},31990:function(e,t,n){"use strict";var r=n(22122),a=n(96156),s=n(67294),c=n(94184),l=n.n(c),i=n(65632),o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.Z=function(e){var t=e.actions,n=e.author,c=e.avatar,u=e.children,m=e.className,d=e.content,j=e.prefixCls,f=e.datetime,b=o(e,["actions","author","avatar","children","className","content","prefixCls","datetime"]),h=s.useContext(i.E_),v=h.getPrefixCls,y=h.direction,g=v("comment",j),p=c?s.createElement("div",{className:"".concat(g,"-avatar")},"string"===typeof c?s.createElement("img",{src:c,alt:"comment-avatar"}):c):null,E=t&&t.length?s.createElement("ul",{className:"".concat(g,"-actions")},t.map((function(e,t){return s.createElement("li",{key:"action-".concat(t)},e)}))):null,k=(n||f)&&s.createElement("div",{className:"".concat(g,"-content-author")},n&&s.createElement("span",{className:"".concat(g,"-content-author-name")},n),f&&s.createElement("span",{className:"".concat(g,"-content-author-time")},f)),Z=s.createElement("div",{className:"".concat(g,"-content")},k,s.createElement("div",{className:"".concat(g,"-content-detail")},d),E),x=l()(g,(0,a.Z)({},"".concat(g,"-rtl"),"rtl"===y),m);return s.createElement("div",(0,r.Z)({},b,{className:x}),s.createElement("div",{className:"".concat(g,"-inner")},p,Z),u?function(e,t){return s.createElement("div",{className:l()("".concat(e,"-nested"))},t)}(g,u):null)}},41289:function(e,t,n){"use strict";n(39992)},67776:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});n(78322);var r=n(3887),a=(n(67167),n(71577)),s=n(67294),c=n(8134);function l(e){var t=(0,c.$)().t,n=e.hasNextPage,l=e.loading,i=e.fetchMore;return s.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},n?s.createElement(a.Z,{loading:l,onClick:i},t("load_more")):s.createElement(r.Z.Text,{type:"secondary"}," - END -"))}},97617:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});n(19793);var r=n(7495),a=(n(53315),n(89588)),s=(n(13062),n(71230)),c=(n(89032),n(15746)),l=(n(75257),n(51890)),i=n(96019),o=n(39387),u=n(67294),m=n(8134),d=n(5977),j=(n(51872),n(19650)),f=(n(51350),n(38272)),b=(n(67167),n(71577)),h=(n(58481),n(48086)),v=n(14283),y=n(67776),g=n(6799),p=n(30381),E=n.n(p),k=n(73727);function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,s=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);c=!0);}catch(i){l=!0,a=i}finally{try{c||null==n.return||n.return()}finally{if(l)throw a}}return s}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z(e){var t=e.type,n=e.mixinId,r=e.authoringSubscribed,a=e.readingSubscribed,c=e.refetchUser,d=(0,m.$)(),p=d.t,x=d.i18n;E().locale(x.language);var z=(0,g.xJ)().currentUser,I=(0,o.FH)({variables:{type:t,mixinId:n}}),N=I.data,O=I.loading,w=I.fetchMore,S=Z((0,o.yTH)({update:function(e,t){var n=t.data.toggleAuthoringSubscribeUserAction.error;n?h.ZP.error(n):(h.ZP.success(p(r?"success_unsubscribed":"success_subscribed")),c())}}),1)[0],P=Z((0,o.oI6)({update:function(e,t){var n=t.data.toggleReadingSubscribeUserAction.error;n?h.ZP.error(n):(h.ZP.success(p(a?"success_unsubscribed":"success_subscribed")),c())}}),1)[0];if(O)return u.createElement(i.Z,null);var C=N.userArticleConnection,A=C.nodes,M=C.pageInfo,U=M.hasNextPage,T=M.endCursor;return u.createElement("div",null,u.createElement("div",{style:{textAlign:"right",color:"#aaa"}},z&&z.mixinId!==n&&"author"===t&&u.createElement(b.Z,{type:"primary",danger:r,shape:"round",icon:u.createElement(v.Z,null),onClick:function(){return S({variables:{input:{mixinId:n}}})}},p(r?"unsubscribe":"subscribe")),z&&z.mixinId!==n&&"reader"===t&&u.createElement(b.Z,{type:"primary",danger:a,shape:"round",icon:u.createElement(v.Z,null),onClick:function(){return P({variables:{input:{mixinId:n}}})}},p(a?"unsubscribe":"subscribe"))),u.createElement(f.ZP,{size:"small",itemLayout:"vertical",dataSource:A,loadMore:u.createElement(y.Z,{hasNextPage:U,loading:O,fetchMore:function(){w({variables:{after:T,type:t}})}}),renderItem:function(e){return u.createElement(f.ZP.Item,{key:e.uuid},u.createElement(f.ZP.Item.Meta,{style:{marginBottom:0},avatar:u.createElement(l.C,{src:e.author.avatar},e.author.name[0]),title:u.createElement(s.Z,null,u.createElement("div",null,u.createElement("div",null,e.author.name),u.createElement("div",{style:{fontSize:"0.8rem",color:"#aaa"}},E()(e.createdAt).fromNow())))}),u.createElement("h3",null,u.createElement(j.Z,null,u.createElement(k.rU,{style:{color:"inherit"},to:"/articles/"+e.uuid},e.title))))}}))}n(41289);var I=n(31990);function N(e){var t=e.authorMixinId,n=(0,m.$)(),r=n.t,a=n.i18n,s=(0,g.FS)().isMobile;E().locale(a.language);var c=(0,o.$n$)({variables:{authorMixinId:t}}),d=c.data,j=c.loading,b=c.fetchMore;if(j)return u.createElement(i.Z,null);var h=d.commentConnection,v=h.nodes,p=h.pageInfo,Z=p.hasNextPage,x=p.endCursor;return u.createElement(f.ZP,{dataSource:v,loadMore:u.createElement(y.Z,{hasNextPage:Z,loading:j,fetchMore:function(){b({variables:{after:x}})}}),renderItem:function(e){return u.createElement("li",{id:"comment-"+e.id,className:s.phone?"blockquote-collapsed":""},!e.deletedAt&&u.createElement(I.Z,{className:"comment-list",author:e.author.name,avatar:u.createElement(l.C,{src:e.author.avatar},e.author.name[0]),content:u.createElement(g.nV,{source:e.content}),datetime:u.createElement("span",null,E()(e.createdAt).fromNow()),actions:[u.createElement("span",null,r("from"),": "," ",u.createElement(k.rU,{style:{color:"inherit"},to:"/articles/"+e.commentable.uuid},e.commentable.title))]}))}})}function O(){var e=(0,d.UO)().mixinId,t=(0,m.$)().t,n=(0,o.bTj)({variables:{mixinId:e}}),j=n.loading,f=n.data,b=n.refetch;if(j)return u.createElement(i.Z,null);var h=f.user;return u.createElement("div",null,u.createElement(s.Z,{justify:"center",style:{marginBottom:"1rem"}},u.createElement(c.Z,null,u.createElement(l.C,{size:"large",src:h.avatar}))),u.createElement(s.Z,{justify:"center"},u.createElement(c.Z,null,h.name)),u.createElement(s.Z,{gutter:16,style:{textAlign:"center"}},u.createElement(c.Z,{xs:12,sm:6},u.createElement(a.Z,{title:t("user.author_revenue_total"),value:h.statistics.authorRevenueTotalUsd.toFixed(2)})),u.createElement(c.Z,{xs:12,sm:6},u.createElement(a.Z,{title:t("user.reader_revenue_total"),value:h.statistics.readerRevenueTotalUsd.toFixed(2)}))),u.createElement(r.Z,{defaultActiveKey:"author"},u.createElement(r.Z.TabPane,{tab:t("published"),key:"author"},u.createElement(z,{mixinId:h.mixinId,authoringSubscribed:h.authoringSubscribed,refetchUser:b,type:"author"})),u.createElement(r.Z.TabPane,{tab:t("bought"),key:"reader"},u.createElement(z,{mixinId:h.mixinId,readingSubscribed:h.readingSubscribed,refetchUser:b,type:"reader"})),u.createElement(r.Z.TabPane,{tab:t("commented"),key:"comments"},u.createElement(N,{authorMixinId:h.mixinId}))))}},46700:function(e,t,n){var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":15596,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":15596,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=46700}}]);
//# sourceMappingURL=2956-9c334af2d3b267bef2e2.chunk.js.map