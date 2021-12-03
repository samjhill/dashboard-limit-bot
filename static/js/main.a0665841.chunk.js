(this["webpackJsonpdashboard-limit-buy-dca"]=this["webpackJsonpdashboard-limit-buy-dca"]||[]).push([[0],{192:function(e,t,c){},193:function(e,t,c){},335:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(76),i=c.n(r),s=(c(192),c(15)),o=(c(193),c(13)),j=c(126),d=c(3),l=c(1),b=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){c||fetch(H.getConfiguration[W]).then((function(e){return e.json()})).then((function(e){a(e)}),(function(e){console.error(e)}))}),[c,a]),c?Object(l.jsxs)(d.a,{textAlign:"left",pl:"2",children:[Object(l.jsx)(d.c,{as:"h2",mb:"2",children:"Configuration"}),Object(l.jsxs)(d.a,{mb:"2",children:[Object(l.jsx)(d.c,{as:"h3",children:"Limits"}),Object(l.jsxs)(d.c,{children:["Maximum daily spend: $",c.maximum_daily_spend]}),Object(l.jsxs)(d.c,{children:["Maximum weekly spend: $",c.maximum_weekly_spend]}),Object(l.jsxs)(d.c,{children:["Maximum monthly spend: $",c.maximum_monthly_spend]})]}),Object(l.jsxs)(d.a,{mb:"2",children:[Object(l.jsx)(d.c,{as:"h3",children:"Orders"}),Object(l.jsxs)(d.c,{children:["Number of orders: ",c.num_orders]}),Object(l.jsxs)(d.c,{children:["Percentage interval down: ",100*c.interval_size,"%"]}),Object(l.jsxs)(d.c,{children:["Comparison dollar-cost-average amount: $",c.daily_dca_amount]})]})]}):Object(l.jsx)(d.c,{as:"h1",children:"Loading..."})},u=c(40),h=c(24),m=c(20),O=c.n(m),x=c(337),p=c(338),f=c(342),g=c(68),v=c(69),y=c(84),w=c(81),k=c(178),A=c(343),D=c(180),C=c(182),_={btc:"orange",btcusd:"orange",eth:"#407aff",ethusd:"#407aff",comparison:"grey"},K=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],a=t[1];if(Object(n.useEffect)((function(){c||fetch(H.getStats[W]).then((function(e){return e.json()})).then((function(e){a(e)}),(function(e){console.error(e)}))}),[c,a]),!c)return Object(l.jsx)(d.c,{as:"h1",children:"Loading..."});if(0===c.length)return Object(l.jsx)(d.c,{as:"h1",children:"No data yet."});var r=c.sort((function(e,t){return O()(e.datetime)-O()(t.datetime)})),i=O()(r[r.length-1].datetime).add(24,"hours"),o=O.a.duration(i.diff(O()())).asHours(),j=Object(C.a)(c,(function(e){return O()(e.datetime).startOf("day").format()})),b=Object.values(j).map((function(e){return e.map((function(e){return{name:O()(e.datetime).format("MM/DD/YY"),savings:e.savings_percent,ticker:e.ticker}})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(u.a)({name:t.name},t.ticker,t.savings))}),{})})).sort((function(e,t){return O()(e.name)-O()(t.name)})),m=Object.values(j).map((function(e){return e.map((function(e){return{name:O()(e.datetime).format("MM/DD/YY"),actualCoinAmount:e.actual_coin_amount,comparisonCoinAmount:e.comparison_coin_amount,ticker:e.ticker}})).reduce((function(e,t){var c;return Object(h.a)(Object(h.a)({},e),{},(c={name:t.name},Object(u.a)(c,"".concat(t.ticker,"Actual"),t.actualCoinAmount),Object(u.a)(c,"".concat(t.ticker,"Comparison"),t.comparisonCoinAmount),c))}),{})})).sort((function(e,t){return O()(e.name)-O()(t.name)})),K=Object.values(j).map((function(e){return e.map((function(e){return{name:O()(e.datetime).format("MM/DD/YY"),totalSpend:e.total_spend,ticker:e.ticker}})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(u.a)({name:t.name},"".concat(t.ticker,"TotalSpend"),t.totalSpend))}),{})})).sort((function(e,t){return O()(e.name)-O()(t.name)})),S=Object.values(j).map((function(e){return e.map((function(e){return{name:O()(e.datetime).format("MM/DD/YY"),currentPrice:e.current_price,ticker:e.ticker}})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(u.a)({name:t.name},"".concat(t.ticker,"CurrentPrice"),t.currentPrice))}),{})})).sort((function(e,t){return O()(e.name)-O()(t.name)})),M=Object.values(j).map((function(e){return e.map((function(e){return{name:O()(e.datetime).format("MM/DD/YY"),actualCoinAmount:e.actual_coin_amount,ticker:e.ticker}})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(u.a)({name:t.name},"".concat(t.ticker,"CoinAmount"),t.actualCoinAmount))}),{})})).sort((function(e,t){return O()(e.name)-O()(t.name)})),P=Object.values(j).map((function(e){return e.map((function(e){return{name:O()(e.datetime).format("MM/DD/YY"),averageDcaPrice:e.average_dca_price,ticker:e.ticker}})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(u.a)({name:t.name},"".concat(t.ticker,"AverageDcaPrice"),t.averageDcaPrice))}),{})})).sort((function(e,t){return O()(e.name)-O()(t.name)})),$=K[K.length-1].btcusdTotalSpend,B=K[K.length-1].ethusdTotalSpend,E=M[M.length-1].btcusdCoinAmount,Y=M[M.length-1].ethusdCoinAmount,z=Math.round($/E),L=P[P.length-1].btcusdAverageDcaPrice,q=Math.round(B/Y),I=P[P.length-1].ethusdAverageDcaPrice,F=parseFloat(S[S.length-1].btcusdCurrentPrice),T=parseFloat(S[S.length-1].ethusdCurrentPrice),N=m[m.length-1].btcusdComparison*F,J=m[m.length-1].btcusdActual*F,G=m[m.length-1].ethusdComparison*T,Q=m[m.length-1].ethusdActual*T;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(d.c,{mt:"2",children:["Stats update in ",Math.round(o)," hours"]}),Object(l.jsxs)(d.b,{flexDirection:["column","row"],mb:"4",mt:"2",w:1,justifyContent:"space-between",children:[Object(l.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(l.jsx)(d.c,{as:"h3",children:"Dollars spent"}),Object(l.jsxs)(d.c,{children:["Bitcoin: $",$]}),Object(l.jsxs)(d.c,{children:["Ethereum: $",B]})]}),Object(l.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(l.jsx)(d.c,{as:"h3",children:"Coins purchased"}),Object(l.jsxs)(d.c,{children:["Bitcoin: ",E]}),Object(l.jsxs)(d.c,{children:["Ethereum: ",Y]})]}),Object(l.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(l.jsx)(d.c,{as:"h3",children:"Price per coin: Dollar-Cost-Average strategy"}),Object(l.jsxs)(d.c,{children:["Bitcoin: $",L]}),Object(l.jsxs)(d.c,{children:["Ethereum: $",I]})]}),Object(l.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(l.jsx)(d.c,{as:"h3",children:"Price per coin: Limit Strategy"}),Object(l.jsxs)(d.c,{children:["Bitcoin: $",z]}),Object(l.jsxs)(d.c,{children:["Ethereum: $",q]})]}),Object(l.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(l.jsx)(d.c,{as:"h3",children:"Advantage compared to DCA"}),Object(l.jsxs)(d.c,{children:["Bitcoin: ",b[b.length-1].btcusd,"%"]}),Object(l.jsxs)(d.c,{children:["Ethereum: ",b[b.length-1].ethusd,"%"]})]})]}),Object(l.jsxs)(d.b,{flexDirection:["column","row"],flexWrap:"wrap",children:[Object(l.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(l.jsx)(d.c,{as:"h3",children:"Bitcoin: price per coin comparison"}),Object(l.jsx)(x.a,{width:"100%",height:400,children:Object(l.jsxs)(p.a,{data:[{dca:L,limit:z}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(f.a,{stroke:"#333"}),Object(l.jsx)(g.a,{dataKey:"name",stroke:"#ebebeb"}),Object(l.jsx)(v.a,{stroke:"#ebebeb"}),Object(l.jsx)(y.a,{}),Object(l.jsx)(w.a,{}),Object(l.jsx)(k.a,{dataKey:"dca",name:"dca strategy",fill:_.comparison}),Object(l.jsx)(k.a,{dataKey:"limit",name:"limit strategy",fill:_.btc})]})})]}),Object(l.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(l.jsx)(d.c,{as:"h3",children:"Ethereum: price per coin comparison"}),Object(l.jsx)(x.a,{width:"100%",height:400,children:Object(l.jsxs)(p.a,{data:[{dca:I,limit:q}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(f.a,{stroke:"#333"}),Object(l.jsx)(g.a,{dataKey:"name",stroke:"#ebebeb"}),Object(l.jsx)(v.a,{stroke:"#ebebeb"}),Object(l.jsx)(y.a,{}),Object(l.jsx)(w.a,{}),Object(l.jsx)(k.a,{dataKey:"dca",name:"dca strategy",fill:_.comparison}),Object(l.jsx)(k.a,{dataKey:"limit",name:"limit strategy",fill:_.eth})]})})]}),Object(l.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(l.jsx)(d.c,{as:"h3",children:"Bitcoin: coin amounts compared to DCA"}),Object(l.jsx)(x.a,{width:"100%",height:400,children:Object(l.jsxs)(p.a,{data:m,margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(f.a,{stroke:"#333"}),Object(l.jsx)(g.a,{dataKey:"name",stroke:"#ebebeb"}),Object(l.jsx)(v.a,{stroke:"#ebebeb"}),Object(l.jsx)(y.a,{}),Object(l.jsx)(w.a,{}),Object(l.jsx)(k.a,{dataKey:"btcusdComparison",name:"comparison",fill:_.comparison}),Object(l.jsx)(k.a,{dataKey:"btcusdActual",name:"actual",fill:_.btc})]})})]}),Object(l.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(l.jsx)(d.c,{as:"h3",children:"Ethereum: coin amounts compared to DCA"}),Object(l.jsx)(x.a,{width:"100%",height:400,children:Object(l.jsxs)(p.a,{width:400,height:400,data:m,margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(f.a,{stroke:"#333"}),Object(l.jsx)(g.a,{dataKey:"name",stroke:"#ebebeb"}),Object(l.jsx)(v.a,{stroke:"#ebebeb"}),Object(l.jsx)(y.a,{}),Object(l.jsx)(w.a,{}),Object(l.jsx)(k.a,{dataKey:"ethusdComparison",name:"comparison",fill:_.comparison}),Object(l.jsx)(k.a,{dataKey:"ethusdActual",name:"actual",fill:_.eth})]})})]}),Object(l.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(l.jsx)(d.c,{as:"h3",children:"Bitcoin: coin value, in dollars"}),Object(l.jsx)(x.a,{width:"100%",height:400,children:Object(l.jsxs)(p.a,{data:[{dca:N,limit:J}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(f.a,{stroke:"#333"}),Object(l.jsx)(g.a,{dataKey:"name",stroke:"#ebebeb"}),Object(l.jsx)(v.a,{stroke:"#ebebeb"}),Object(l.jsx)(y.a,{}),Object(l.jsx)(w.a,{}),Object(l.jsx)(k.a,{dataKey:"dca",name:"dca strategy",fill:_.comparison}),Object(l.jsx)(k.a,{dataKey:"limit",name:"limit strategy",fill:_.btc})]})})]}),Object(l.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(l.jsx)(d.c,{as:"h3",children:"Ethereum: coin value, in dollars"}),Object(l.jsx)(x.a,{width:"100%",height:400,children:Object(l.jsxs)(p.a,{data:[{dca:G,limit:Q}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(f.a,{stroke:"#333"}),Object(l.jsx)(g.a,{dataKey:"name",stroke:"#ebebeb"}),Object(l.jsx)(v.a,{stroke:"#ebebeb"}),Object(l.jsx)(y.a,{}),Object(l.jsx)(w.a,{}),Object(l.jsx)(k.a,{dataKey:"dca",name:"dca strategy",fill:_.comparison}),Object(l.jsx)(k.a,{dataKey:"limit",name:"limit strategy",fill:_.eth})]})})]}),Object(l.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(l.jsx)(d.c,{as:"h3",children:"Limit strategy advantage over time"}),Object(l.jsx)(d.c,{children:"(percentage dollars saved per coin)"}),Object(l.jsx)(x.a,{width:"100%",height:400,children:Object(l.jsxs)(A.a,{data:b,margin:{top:5,right:5,left:10,bottom:5},children:[Object(l.jsx)(g.a,{dataKey:"name",stroke:"#ebebeb"}),Object(l.jsx)(y.a,{}),Object(l.jsx)(w.a,{}),Object(l.jsx)(f.a,{stroke:"#333"}),Object(l.jsx)(D.a,{type:"monotone",dataKey:"btcusd",stroke:_.btc,yAxisId:0}),Object(l.jsx)(D.a,{type:"monotone",dataKey:"ethusd",stroke:_.eth,yAxisId:1})]})})]})]})]})},S=c(44),M=c.n(S),P=c(99),$=c(344),B=c(171),E=c(181),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["btcusd","ethusd"];return Promise.all(e.map((function(e){return fetch("".concat(H.getPrice[W],"?ticker=").concat(e)).then((function(e){return e.json()})).then((function(t){return{ticker:e,result:t}}),(function(e){console.error(e)}))}))).then((function(e){var t=Object.values(e),c={};return null===t||void 0===t||t.map((function(e){t[e.ticker]||(t[e.ticker]=0),c[e.ticker]=e.result})),c}))},z=["btcusd","ethusd"],L=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),i=Object(s.a)(r,2),o=i[0],j=i[1];return Object(n.useEffect)((function(){function e(){return(e=Object(P.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(o||function(){e.apply(this,arguments)}(),!c)return Promise.all(z.map((function(e){return fetch("".concat(H.getTradesList[W],"?ticker=").concat(e)).then((function(e){return e.json()})).then((function(t){var c=t.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{datetime:O()(e.timestampms).format("MM/DD h:mm a")})}));return{ticker:e,result:c}}),(function(e){console.error(e)}))}))).then((function(e){var t=Object.values(e),c={};t.map((function(e){c[e.ticker]=e.result.reverse()})),a(c)}))}),[c,a,o,j]),c?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d.c,{as:"h2",mt:"4",ml:"2",textAlign:"left",children:"Buy History"}),Object(l.jsx)(d.b,{width:1,flexDirection:["column","row"],children:z.map((function(e){return Object(l.jsxs)(d.b,{width:[1,.5],flexDirection:["column","row"],children:[Object(l.jsx)(d.a,{width:[1,.5],children:c[e]&&Object(l.jsxs)(d.a,{mt:"2",mb:"2",children:[Object(l.jsx)(d.c,{as:"h3",color:_[e],children:e}),Object(l.jsx)(x.a,{width:"100%",height:400,children:Object(l.jsxs)($.a,{data:c[e],margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(f.a,{stroke:"#333"}),Object(l.jsx)(g.a,{dataKey:"datetime",stroke:"#ebebeb"}),Object(l.jsx)(v.a,{stroke:"#ebebeb"}),Object(l.jsx)(y.a,{}),Object(l.jsx)(w.a,{}),o&&o[e]&&Object(l.jsx)(B.a,{y:o[e],stroke:_[e],alwaysShow:!0,label:{value:"current price - $".concat(o[e]),fill:"white"},color:"white"}),Object(l.jsx)(E.a,{dataKey:"price",fill:"white"})]})})]})}),Object(l.jsx)(d.a,{ml:"2",width:[1,.5],children:Object(l.jsxs)("table",{ml:"4",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Date"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"Amount"})]})}),Object(l.jsx)("tbody",{children:c[e]&&Object.values(c[e]).reverse().map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.datetime}),Object(l.jsxs)("td",{children:["$",e.price]}),Object(l.jsx)("td",{children:e.amount})]},e.tid)}))})]})},e)]},e)}))})]}):Object(l.jsx)(d.c,{as:"h1",children:"Loading..."})},q=["btcusd","ethusd"],I=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),i=Object(s.a)(r,2),o=i[0],j=i[1];return Object(n.useEffect)((function(){function e(){return(e=Object(P.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(o||function(){e.apply(this,arguments)}(),!c)return Promise.all(q.map((function(e){return fetch("".concat(H.getOpenOrders[W],"?ticker=").concat(e)).then((function(e){return e.json()})).then((function(t){var c=t.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{datetime:O()(e.timestampms).format("MM/DD h:mm a")})}));return{ticker:e,result:c}}),(function(e){console.error(e)}))}))).then((function(e){var t=Object.values(e),c={};null===t||void 0===t||t.map((function(e){c[null===e||void 0===e?void 0:e.ticker]=null===e||void 0===e?void 0:e.result})),a(c)}))}),[o,j,c,a]),c?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d.c,{as:"h1",mt:"4",ml:"2",mb:"2",textAlign:"left",children:"Open Orders"}),Object(l.jsx)(d.c,{textAlign:"left",ml:"2",mb:"2",children:"Hi, I'm an asset-buying robot."}),Object(l.jsxs)(d.c,{textAlign:"left",ml:"2",mb:"4",children:["If the asset's"," ",Object(l.jsx)("span",{style:{color:"green",fontWeight:"bold"},children:"price (green line)"})," ","drops down to any of the"," ",Object(l.jsx)("strong",{children:"white dots (open limit-buy orders)"}),", the buy order gets automatically triggered. Then, I create new orders based on the new price."]}),Object(l.jsx)(d.b,{width:1,flexDirection:["column","row"],children:q.map((function(e){return Object(l.jsxs)(d.b,{width:[1,.5],flexDirection:["column","row"],children:[Object(l.jsx)(d.a,{width:[1,.5],children:c[e]&&Object(l.jsxs)(d.a,{mt:"2",mb:"2",width:1,children:[Object(l.jsx)(d.c,{as:"h3",mb:"2",color:_[e],children:e}),Object(l.jsx)(x.a,{width:"100%",height:400,children:Object(l.jsxs)($.a,{data:c[e],margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(f.a,{stroke:"#333"}),Object(l.jsx)(g.a,{dataKey:"datetime",stroke:"#ebebeb"}),Object(l.jsx)(v.a,{stroke:"#ebebeb"}),Object(l.jsx)(y.a,{}),Object(l.jsx)(w.a,{}),o&&o[e]&&Object(l.jsx)(B.a,{y:o[e],stroke:_[e],alwaysShow:!0,label:{value:"current price - $".concat(o[e]),fill:"white"},color:"white"}),Object(l.jsx)(E.a,{dataKey:"price",fill:"white"})]})})]})}),Object(l.jsx)(d.a,{ml:"2",width:[1,.5],children:Object(l.jsxs)("table",{ml:"4",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Placed on"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"Amount"})]})}),Object(l.jsx)("tbody",{children:c[e]&&Object.values(c[e]).map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.datetime}),Object(l.jsxs)("td",{children:["$",e.price]}),Object(l.jsx)("td",{children:e.remaining_amount})]},e.tid)}))})]})},e)]},e)}))})]}):Object(l.jsx)(d.c,{as:"h1",children:"Loading..."})},F="/dashboard-limit-bot",T=[{path:"".concat(F,"/orders"),display:"Open Orders",element:Object(l.jsx)(I,{})},{path:"".concat(F,"/stats"),display:"Stats",element:Object(l.jsx)(K,{})},{path:"".concat(F,"/trades"),display:"Buy History",element:Object(l.jsx)(L,{})},{path:"".concat(F,"/configuration"),display:"Configuration",element:Object(l.jsx)(b,{})}],W=localStorage.getItem("env")||"dev",H={getPrice:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_price",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_price"},getOpenOrders:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_open_orders",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_open_orders"},getTradesList:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_trades_list",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_trades_list"},getConfiguration:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/configuration",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/configuration"},getStats:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/stats",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/stats"}};var N=function(){var e=function(e){var t=e.isActive,c=void 0!==t&&t,n=e.children;return Object(l.jsx)(d.a,{mb:"4",mr:"2",w:"100%",sx:{a:{width:"100%",background:c?"white":"none",color:c?"#333":"white",border:"1px solid white",padding:".5rem",textDecoration:"none"}},children:n})},t=function(){var e=Object(n.useState)(localStorage.getItem("env")||"dev"),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("select",{value:c,onChange:function(e){a(e.target.value),localStorage.setItem("env",e.target.value),window.location.reload()},style:{marginBottom:"1rem",marginTop:".5rem",padding:".5rem"},children:[Object(l.jsx)("option",{value:"dev",children:"dev"}),Object(l.jsx)("option",{value:"prod",children:"prod"})]})},c=function(){var t=Object(o.e)();return Object(l.jsx)(d.b,{flexWrap:"wrap",mt:"3",ml:"2",flexDirection:["row"],children:T.map((function(c){return Object(l.jsx)(e,{isActive:t.pathname.includes(c.path),children:Object(l.jsx)(j.b,{to:c.path,children:c.display})})}))})};return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(t,{}),Object(l.jsx)(c,{}),Object(l.jsx)(o.c,{children:T.map((function(e){return Object(l.jsx)(o.a,{path:e.path,exact:e.exact,element:e.element})}))})]})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,346)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),J()}},[[335,1,2]]]);
//# sourceMappingURL=main.a0665841.chunk.js.map