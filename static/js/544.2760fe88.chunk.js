(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{9520:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r,a,i=t(2007),s=t.n(i),o=t(168),c=t(6444),u=c.ZP.div(r||(r=(0,o.Z)(["\n  padding: 40px;\n"]))),p=c.ZP.p(a||(a=(0,o.Z)(["\n  text-align: center;\n  color: #f17074;\n  font-size: 30px;\n  font-weight: 500;\n"]))),f=t(184);function l(e){var n=e.message;return(0,f.jsx)(u,{children:(0,f.jsx)(p,{children:n})})}Error.propTypes={message:s().string.isRequired}},8524:function(e,n,t){"use strict";t.d(n,{O:function(){return h}});var r,a,i,s,o=t(168),c=t(6444),u=c.ZP.ul(r||(r=(0,o.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  grid-gap: 16px;\n  margin: 20px auto;\n  padding: 0;\n  list-style: none;\n"]))),p=t(7689),f=t(1087),l=c.ZP.li(a||(a=(0,o.Z)(["\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),d=c.ZP.img(i||(i=(0,o.Z)(["\n  display: block;\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n"]))),x=c.ZP.h2(s||(s=(0,o.Z)(["\n  padding: 5px 10px;\n  font-size: 21px;\n  color: #42362b;\n"]))),v=t(184);function m(e){var n=e.id,t=e.title,r=e.poster,a=(0,p.TH)();return(0,v.jsx)(l,{children:(0,v.jsxs)(f.rU,{to:"/movies/".concat(n),state:{from:a},children:[(0,v.jsx)("div",{children:(0,v.jsx)(d,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg",alt:"{title}"})}),(0,v.jsx)(x,{children:t||"No tittle"})]})})}var h=function(e){var n=e.movies;return(0,v.jsx)(u,{children:n.map((function(e){var n=e.id,t=e.title,r=e.poster_path;return(0,v.jsx)(m,{id:n,title:t,poster:r},n)}))})}},9544:function(e,n,t){"use strict";t.r(n);var r=t(5861),a=t(9439),i=t(7757),s=t.n(i),o=t(2791),c=t(8524),u=t(5451),p=t(9520),f=t(9649),l=t(184),d="idle",x="pending",v="resolved",m="rejected";n.default=function(){var e=(0,o.useState)(d),n=(0,a.Z)(e,2),t=n[0],i=n[1],h=(0,o.useState)([]),g=(0,a.Z)(h,2),b=g[0],y=g[1],w=(0,o.useState)(null),Z=(0,a.Z)(w,2),k=Z[0],j=Z[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(x),e.prev=1,e.next=4,(0,u.Df)();case 4:n=e.sent,console.log("******************** data:",n),y(n),i(v),j(null),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),i(m),j(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log("movies +++++Home++++++>>>>>",b),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{children:"Trending today"}),t===m&&(0,l.jsx)(p.Z,{message:k}),t===x&&(0,l.jsx)(f.Z,{}),t===v&&(0,l.jsx)(c.O,{movies:b})]})}},5451:function(e,n,t){"use strict";t.d(n,{zv:function(){return f},TP:function(){return p},tx:function(){return l},Df:function(){return c},z1:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),s=t(4569),o=t.n(s);o().defaults.baseURL="https://api.themoviedb.org/3",o().defaults.params={api_key:"0d9ddfeb4636025259fcaee6725b8ad3",adult:!1,language:"en-US"};var c=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/trending/movie/day");case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,s=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,o().get("/search/movie?query=".concat(n,"&page=").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=544.2760fe88.chunk.js.map