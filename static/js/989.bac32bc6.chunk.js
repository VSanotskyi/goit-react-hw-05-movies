"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[989],{687:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(689),s=n(87),a=n.p+"static/media/IMG_1068.7a6632459553961b8e3a.JPEG",c=n(184);function o(e){var t=e.movie,n=t.title,o=t.poster_path,i=t.release_date,u="https://image.tmdb.org/t/p/w200/".concat(o),l=(0,r.TH)();return(0,c.jsx)("li",{className:"card",children:(0,c.jsxs)(s.rU,{to:"".concat(t.id),state:l,children:[(0,c.jsx)("h2",{children:n}),(0,c.jsx)("p",{children:i}),(0,c.jsx)("img",{src:o?u:a,alt:n})]})})}function i(e){var t=e.movies,n=e.handleLoadMode,r=e.isShowBtn;return(0,c.jsxs)("div",{children:[(0,c.jsx)("ul",{className:"cardList",children:t.map((function(e){return(0,c.jsx)(o,{movie:e},e.id)}))}),r&&(0,c.jsx)("button",{onClick:n,children:"Load More"})]})}},680:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(433),s=n(861),a=n(439),c=n(757),o=n.n(c),i=n(791),u=n(687),l=n(616),d=n(184);function h(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),n=t[0],c=t[1],h=(0,i.useState)(1),f=(0,a.Z)(h,2),m=f[0],p=f[1],x=(0,i.useState)(!1),v=(0,a.Z)(x,2),j=v[0],k=v[1],w=(0,i.useState)(""),g=(0,a.Z)(w,2),Z=g[0],_=g[1],b=(0,i.useCallback)((0,s.Z)(o().mark((function e(){var t,n,s,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.wr)(m);case 3:t=e.sent,n=t.results,s=t.total_pages,a=t.total_results,c((function(e){return e?[].concat((0,r.Z)(e),(0,r.Z)(n)):n})),s>m&&k(!0),a===n.length&&k(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),_(e.t0.response.status),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),[m]);(0,i.useEffect)((function(){b()}),[b]);return(0,d.jsx)(d.Fragment,{children:n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{children:"Trending movies"}),(0,d.jsx)(u.Z,{movies:n,handleLoadMode:function(){p((function(e){return e+1}))},isShowBtn:j})]}):(0,d.jsx)("h1",{children:Z})})}}}]);
//# sourceMappingURL=989.bac32bc6.chunk.js.map