(this["webpackJsonpreact-coingecko-api"]=this["webpackJsonpreact-coingecko-api"]||[]).push([[0],{22:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(14),s=c.n(a),i=c(4),o=c.n(i),u=c(15),d=c(5),l=(c(22),c(16)),j=c.n(l),b=c(0);var h=function(e){var t=e.coin,c=e.index;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c}),Object(b.jsxs)("td",{children:[Object(b.jsx)("img",{src:t.image,alt:t.name,style:{width:"3%"},className:"me-4 img-fluid"}),Object(b.jsxs)("span",{children:[t.name,Object(b.jsx)("span",{className:"ms-3 text-muted text-uppercase",children:t.symbol})]})]}),Object(b.jsx)("td",{children:t.current_price}),Object(b.jsx)("td",{className:t.price_change_percentage_24h>0?"text-success":"text-danger",children:t.price_change_percentage_24h}),Object(b.jsx)("td",{children:t.total_volume})]})},p=["#","Coin","Price","Price Change","24h Volume"];var m=function(e){var t=e.coins,c=e.search,n=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())||e.symbol.toLowerCase().includes(c.toLowerCase())}));return Object(b.jsxs)("table",{className:"table table-dark mt-4 table-hover",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:p.map((function(e,t){return Object(b.jsx)("td",{children:e},t)}))})}),Object(b.jsx)("tbody",{children:n.map((function(e,t){return Object(b.jsx)(h,{coin:e,index:t},e.name)}))})]})};var x=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(d.a)(a,2),i=s[0],l=s[1],h=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"');case 2:t=e.sent,console.log(t.data),r(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("input",{type:"text",placeholder:"Search Coin",className:"form-control bg-dark text-light border-0 m4-4 text-center",onChange:function(e){return l(e.target.value)}}),Object(b.jsx)(m,{coins:c,search:i})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(42),c(43);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),O()}},[[44,1,2]]]);
//# sourceMappingURL=main.ccd32cfe.chunk.js.map