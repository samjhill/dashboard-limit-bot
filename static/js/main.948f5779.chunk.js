(this["webpackJsonpdashboard-limit-buy-dca"]=this["webpackJsonpdashboard-limit-buy-dca"]||[]).push([[0],{192:function(e,t,n){},193:function(e,t,n){},335:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(77),i=n.n(r),s=(n(192),n(13)),o=(n(193),n(14)),j=n(79),u=n(3),d=n(1),l=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){n||fetch(V.getConfiguration[H]).then((function(e){return e.json()})).then((function(e){a(e)}),(function(e){console.error(e)}))}),[n,a]),n?Object(d.jsxs)(u.a,{textAlign:"left",pl:"2",children:[Object(d.jsx)(u.c,{as:"h2",mb:"2",children:"Configuration"}),Object(d.jsxs)(u.a,{mb:"2",children:[Object(d.jsx)(u.c,{as:"h3",children:"Limits"}),Object(d.jsxs)(u.c,{children:["Maximum daily spend: $",n.maximum_daily_spend]}),Object(d.jsxs)(u.c,{children:["Maximum weekly spend: $",n.maximum_weekly_spend]}),Object(d.jsxs)(u.c,{children:["Maximum monthly spend: $",n.maximum_monthly_spend]})]}),Object(d.jsxs)(u.a,{mb:"2",children:[Object(d.jsx)(u.c,{as:"h3",children:"Orders"}),Object(d.jsxs)(u.c,{children:["Number of orders: ",n.num_orders]}),Object(d.jsxs)(u.c,{children:["Percentage interval down: ",100*n.interval_size,"%"]}),Object(d.jsxs)(u.c,{children:["Comparison dollar-cost-average amount: $",n.daily_dca_amount]})]})]}):Object(d.jsx)(u.c,{as:"h1",children:"Loading..."})},b=n(38),h=n(22),m=n(27),p=n.n(m),O=n(50),x=n(18),f=n.n(x),g=n(337),v=n(338),k=n(342),w=n(69),y=n(70),C=n(86),A=n(83),S=n(178),D=n(343),P=n(180),_=n(182),M=function(){return fetch("".concat(V.getTradingPairs[H])).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.error(e)}))},I={btc:"orange",btcusd:"orange",eth:"#407aff",ethusd:"#407aff",comparison:"grey"},K=function(){var e,t,n,a,r,i=Object(o.e)().pathname.split("/")[3],l="*"===i?"btcusd":i,m=Object(c.useState)(),x=Object(s.a)(m,2),K=x[0],L=x[1],z=Object(c.useState)(),q=Object(s.a)(z,2),Y=q[0],F=q[1];if(Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,F(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Y||function(){e.apply(this,arguments)}(),K||fetch(V.getStats[H]).then((function(e){return e.json()})).then((function(e){L(e)}),(function(e){console.error(e)}))}),[K,L,Y,F]),!K)return Object(d.jsx)(u.c,{as:"h1",children:"Loading..."});if(0===K.length)return Object(d.jsx)(u.c,{as:"h1",children:"No data yet."});var T=K.sort((function(e,t){return f()(e.datetime)-f()(t.datetime)})),$=f()(T[T.length-1].datetime),W=f()($).add(24,"hours"),B=f.a.duration(W.diff(f()())).asHours(),N=Object(_.a)(K,(function(e){return f()(e.datetime).startOf("day").format()})),J=Object.values(N).map((function(e){return e.map((function(e){return{name:f()(e.datetime).format("MM/DD/YY"),savings:e.savings_percent,ticker:e.ticker}})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({name:t.name},t.ticker,t.savings))}),{})})).sort((function(e,t){return f()(e.name)-f()(t.name)}));if(!Y)return Object(d.jsx)(u.c,{as:"h1",children:"Loading..."});var G=Y.map((function(e){e.name;var t=e.ticker;return function(e){var t=e.groupedStats,n=e.ticker;if(!n||!t)return null;var c=Object.values(t).map((function(e){return e.map((function(e){return{name:f()(e.datetime).format("MM/DD/YY"),actualCoinAmount:e.actual_coin_amount,comparisonCoinAmount:e.comparison_coin_amount,ticker:e.ticker}})).reduce((function(e,t){var n;return Object(h.a)(Object(h.a)({},e),{},(n={name:t.name},Object(b.a)(n,"".concat(t.ticker,"Actual"),t.actualCoinAmount),Object(b.a)(n,"".concat(t.ticker,"Comparison"),t.comparisonCoinAmount),n))}),{})})).sort((function(e,t){return f()(e.name)-f()(t.name)})),a=Object.values(t).map((function(e){return e.map((function(e){return{name:f()(e.datetime).format("MM/DD/YY"),totalSpend:e.total_spend,ticker:e.ticker}})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({name:t.name},"".concat(t.ticker,"TotalSpend"),t.totalSpend))}),{})})).sort((function(e,t){return f()(e.name)-f()(t.name)})),r=Object.values(t).map((function(e){return e.map((function(e){return{name:f()(e.datetime).format("MM/DD/YY"),currentPrice:e.current_price,ticker:e.ticker}})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({name:t.name},"".concat(t.ticker,"CurrentPrice"),t.currentPrice))}),{})})).sort((function(e,t){return f()(e.name)-f()(t.name)})),i=Object.values(t).map((function(e){return e.map((function(e){return{name:f()(e.datetime).format("MM/DD/YY"),actualCoinAmount:e.actual_coin_amount,ticker:e.ticker}})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({name:t.name},"".concat(t.ticker,"CoinAmount"),t.actualCoinAmount))}),{})})).sort((function(e,t){return f()(e.name)-f()(t.name)})),s=Object.values(t).map((function(e){return e.map((function(e){return{name:f()(e.datetime).format("MM/DD/YY"),averageDcaPrice:e.average_dca_price,ticker:e.ticker}})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({name:t.name},"".concat(t.ticker,"AverageDcaPrice"),t.averageDcaPrice))}),{})})).sort((function(e,t){return f()(e.name)-f()(t.name)})),o=a[a.length-1]["".concat(n,"TotalSpend")],j=i[i.length-1]["".concat(n,"CoinAmount")],u=Math.round(o/j),d=s[s.length-1]["".concat(n,"AverageDcaPrice")],l=parseFloat(r[r.length-1]["".concat(n,"CurrentPrice")]);return{coinAmounts:c,dollarsSpent:a,marketPrice:r,coinsPurchased:i,dcaComparisonAveragePrice:s,totalSpend:o,totalCoinsPurchased:j,limitStrategyPrice:u,dcaComparisonPrice:d,latestPrice:l,dcaComparisonCoinValue:c[c.length-1]["".concat(n,"Comparison")]*l,actualCoinValue:c[c.length-1]["".concat(n,"Actual")]*l,ticker:n}}({groupedStats:N,ticker:t})}));if(!G)return Object(d.jsx)(u.c,{as:"h1",children:"Loading..."});var Q=function(e){return G.find((function(t){return[t.ticker].includes(e)}))};return G.length!==Y.length?Object(d.jsx)(u.c,{as:"h1",children:"Loading stats"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.b,{children:Y.map((function(e){var t=e.name,n=e.ticker;return Object(d.jsx)(j.b,{to:"".concat(E,"/stats/").concat(n),style:{textDecoration:"none"},children:Object(d.jsx)(u.a,{p:2,m:1,sx:{color:l===n?"white":I[n],border:"1px solid ".concat(I[n]),background:l===n&&I[n],fontWeight:"bold"},children:t})},n)}))}),Object(d.jsxs)(u.c,{mt:"2",children:["Stats update in ",Math.round(B)," hours"]}),Object(d.jsxs)(u.b,{flexDirection:["column","row"],mb:"4",mt:"2",w:1,justifyContent:"space-between",children:[Object(d.jsxs)(u.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(u.c,{as:"h3",children:"Dollars spent"}),Object(d.jsx)(u.a,{children:Q(l)&&Object(d.jsxs)(u.c,{children:["$",Q(l).totalSpend]},l)})]}),Object(d.jsxs)(u.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(u.c,{as:"h3",children:"Coins purchased"}),Q(l)&&Object(d.jsx)(u.c,{children:Q(l).totalCoinsPurchased},l)]}),Object(d.jsxs)(u.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(u.c,{as:"h3",children:"Price per coin: Dollar-Cost-Average strategy"}),Q(l)&&Object(d.jsxs)(u.c,{children:["$",Q(l).dcaComparisonPrice]},l)]}),Object(d.jsxs)(u.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(u.c,{as:"h3",children:"Price per coin: Limit Strategy"}),Q(l)&&Object(d.jsxs)(u.c,{children:["$",Q(l).limitStrategyPrice]},l)]}),Object(d.jsxs)(u.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(u.c,{as:"h3",children:"Advantage compared to DCA"}),Object(d.jsxs)(u.c,{children:[J[J.length-1][l],"%"]})]})]}),Object(d.jsxs)(u.b,{flexDirection:["column","row"],flexWrap:"wrap",children:[Object(d.jsxs)(u.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(d.jsx)(u.c,{as:"h3",children:"price per coin comparison"}),Object(d.jsx)(g.a,{width:"100%",height:400,children:Object(d.jsxs)(v.a,{data:[{dca:null===(e=Q(l))||void 0===e?void 0:e.dcaComparisonPrice,limit:null===(t=Q(l))||void 0===t?void 0:t.limitStrategyPrice}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(k.a,{stroke:"#333"}),Object(d.jsx)(w.a,{dataKey:"name",stroke:"#ebebeb"}),Object(d.jsx)(y.a,{stroke:"#ebebeb"}),Object(d.jsx)(C.a,{}),Object(d.jsx)(A.a,{}),Object(d.jsx)(S.a,{dataKey:"dca",name:"dca strategy",fill:I.comparison}),Object(d.jsx)(S.a,{dataKey:"limit",name:"limit strategy",fill:I[l]})]})})]}),Object(d.jsxs)(u.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(d.jsx)(u.c,{as:"h3",children:"coin amounts compared to DCA"}),Object(d.jsx)(g.a,{width:"100%",height:400,children:Object(d.jsxs)(v.a,{data:null===(n=Q(l))||void 0===n?void 0:n.coinAmounts,margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(k.a,{stroke:"#333"}),Object(d.jsx)(w.a,{dataKey:"name",stroke:"#ebebeb"}),Object(d.jsx)(y.a,{stroke:"#ebebeb"}),Object(d.jsx)(C.a,{}),Object(d.jsx)(A.a,{}),Object(d.jsx)(S.a,{dataKey:"".concat(l,"Comparison"),name:"comparison",fill:I.comparison}),Object(d.jsx)(S.a,{dataKey:"".concat(l,"Actual"),name:"actual",fill:I[l]})]})})]}),Object(d.jsxs)(u.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(d.jsx)(u.c,{as:"h3",children:"coin value, in dollars"}),Object(d.jsx)(g.a,{width:"100%",height:400,children:Object(d.jsxs)(v.a,{data:[{dca:null===(a=Q(l))||void 0===a?void 0:a.dcaComparisonCoinValue,limit:null===(r=Q(l))||void 0===r?void 0:r.actualCoinValue}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(k.a,{stroke:"#333"}),Object(d.jsx)(w.a,{dataKey:"name",stroke:"#ebebeb"}),Object(d.jsx)(y.a,{stroke:"#ebebeb"}),Object(d.jsx)(C.a,{}),Object(d.jsx)(A.a,{}),Object(d.jsx)(S.a,{dataKey:"dca",name:"dca strategy",fill:I.comparison}),Object(d.jsx)(S.a,{dataKey:"limit",name:"limit strategy",fill:I[l]})]})})]}),Object(d.jsxs)(u.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(d.jsx)(u.c,{as:"h3",children:"Limit strategy advantage over time"}),Object(d.jsx)(u.c,{children:"(percentage dollars saved per coin)"}),Object(d.jsx)(g.a,{width:"100%",height:400,children:Object(d.jsxs)(D.a,{data:J,margin:{top:5,right:5,left:10,bottom:5},children:[Object(d.jsx)(w.a,{dataKey:"name",stroke:"#ebebeb"}),Object(d.jsx)(C.a,{}),Object(d.jsx)(A.a,{}),Object(d.jsx)(k.a,{stroke:"#333"}),Y.map((function(e,t){var n=e.ticker;return Object(d.jsx)(P.a,{type:"monotone",dataKey:n,stroke:I[n],yAxisId:t},n)}))]})})]})]})]})},L=n(344),z=n(171),q=n(181),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["btcusd","ethusd"];return Promise.all(e.map((function(e){return fetch("".concat(V.getPrice[H],"?ticker=").concat(e)).then((function(e){return e.json()})).then((function(t){return{ticker:e,result:t}}),(function(e){console.error(e)}))}))).then((function(e){var t=Object.values(e),n={};return null===t||void 0===t||t.map((function(e){t[e.ticker]||(t[e.ticker]=0),n[e.ticker]=e.result})),n}))},F=function(e){var t=e.headers,n=e.rows;return Object(d.jsxs)("table",{ml:"4",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:t.map((function(e){return Object(d.jsx)("th",{children:e})}))})}),Object(d.jsx)("tbody",{children:n.map((function(e,t){return Object(d.jsx)("tr",{children:e.map((function(e){return Object(d.jsx)("td",{style:{padding:".25rem"},children:e})}))},t)}))})]})},T=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),i=Object(s.a)(r,2),o=i[0],j=i[1],l=Object(c.useState)(),b=Object(s.a)(l,2),m=b[0],x=b[1];return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(o||function(){e.apply(this,arguments)}(),m||function(){t.apply(this,arguments)}(),!n&&m)return Promise.all(m.map((function(e){e.name;var t=e.ticker;return fetch("".concat(V.getTradesList[H],"?ticker=").concat(t)).then((function(e){return e.json()})).then((function(e){var n=e.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{datetime:f()(e.timestampms).format("MM/DD h:mm a")})}));return{ticker:t,result:n}}),(function(e){console.error(e)}))}))).then((function(e){var t=Object.values(e),n={};t.map((function(e){n[e.ticker]=e.result.reverse()})),a(n)}))}),[n,a,o,j,m,x]),n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.c,{as:"h2",mt:"4",ml:"2",textAlign:"left",children:"Buy History"}),Object(d.jsx)(u.b,{width:1,flexDirection:["column","row"],children:m.map((function(e){var t=e.name,c=e.ticker;return Object(d.jsxs)(u.b,{width:[1,.5],flexDirection:["column","row"],children:[Object(d.jsx)(u.a,{width:[1,.5],children:n[c]&&Object(d.jsxs)(u.a,{mt:"2",mb:"2",children:[Object(d.jsx)(u.c,{as:"h3",color:I[c],children:t}),Object(d.jsx)(g.a,{width:"100%",height:400,children:Object(d.jsxs)(L.a,{data:n[c],margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(k.a,{stroke:"#333"}),Object(d.jsx)(w.a,{dataKey:"datetime",stroke:"#ebebeb"}),Object(d.jsx)(y.a,{stroke:"#ebebeb"}),Object(d.jsx)(C.a,{}),Object(d.jsx)(A.a,{}),o&&o[c]&&Object(d.jsx)(z.a,{y:o[c],stroke:I[c],alwaysShow:!0,label:{value:"current price - $".concat(o[c]),fill:"white"},color:"white"}),Object(d.jsx)(q.a,{dataKey:"price",fill:"white"})]})})]})}),Object(d.jsx)(u.a,{ml:"2",width:[1,.5],children:n[c]&&Object(d.jsx)(F,{headers:["Date","Price","Amount"],rows:Object.values(n[c]).reverse().map((function(e){return[e.datetime,"$".concat(e.price),e.amount]}))})},c)]},c)}))})]}):Object(d.jsx)(u.c,{as:"h1",children:"Loading..."})},$=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),i=Object(s.a)(r,2),o=i[0],j=i[1],l=Object(c.useState)(),b=Object(s.a)(l,2),m=b[0],x=b[1];return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(o||function(){e.apply(this,arguments)}(),m||function(){t.apply(this,arguments)}(),!n&&m)return Promise.all(m.map((function(e){return fetch("".concat(V.getOpenOrders[H],"?ticker=").concat(e.ticker)).then((function(e){return e.json()})).then((function(t){var n=t.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{datetime:f()(e.timestampms).format("MM/DD h:mm a")})}));return{ticker:e.ticker,result:n}}),(function(e){console.error(e)}))}))).then((function(e){var t=Object.values(e),n={};null===t||void 0===t||t.map((function(e){n[null===e||void 0===e?void 0:e.ticker]=null===e||void 0===e?void 0:e.result})),a(n)}))}),[o,j,n,a,m,x]),n?m?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.c,{as:"h1",mt:"4",ml:"2",mb:"2",textAlign:"left",children:"Open Orders"}),Object(d.jsxs)(u.c,{textAlign:"left",ml:"2",mb:"4",children:["If the asset's"," ",Object(d.jsx)("span",{style:{color:"green",fontWeight:"bold"},children:"price (green line)"})," ","drops down to any of the"," ",Object(d.jsx)("strong",{children:"white dots (open limit-buy orders)"}),", the buy order gets automatically triggered. Then, I create new orders based on the new price."]}),Object(d.jsx)(u.b,{width:1,flexDirection:["column","row"],children:m.map((function(e){return Object(d.jsxs)(u.b,{width:[1,.5],flexDirection:["column","row"],children:[Object(d.jsx)(u.a,{width:[1,.5],children:n[e.ticker]&&Object(d.jsxs)(u.a,{mt:"2",mb:"2",width:1,children:[Object(d.jsx)(u.c,{as:"h3",mb:"2",color:I[e.ticker],children:e.name}),Object(d.jsx)(g.a,{width:"100%",height:400,children:Object(d.jsxs)(L.a,{data:n[e.ticker],margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(k.a,{stroke:"#333"}),Object(d.jsx)(w.a,{dataKey:"datetime",stroke:"#ebebeb"}),Object(d.jsx)(y.a,{stroke:"#ebebeb"}),Object(d.jsx)(C.a,{}),Object(d.jsx)(A.a,{}),o&&o[e.ticker]&&Object(d.jsx)(z.a,{y:o[e.ticker],stroke:I[e.ticker],alwaysShow:!0,label:{value:"current price - $".concat(o[e.ticker]),fill:"white"},color:"white"}),Object(d.jsx)(q.a,{dataKey:"price",fill:"white"})]})})]})}),Object(d.jsx)(u.a,{ml:"2",width:[1,.5],children:n[e.ticker]&&Object(d.jsx)(F,{headers:["Placed on","Price","Amount"],rows:Object.values(n[e.ticker]).map((function(e){return[e.datetime,"".concat(e.price),e.remaining_amount]}))})},e.ticker)]},e.ticker)}))})]}):Object(d.jsx)(u.c,{as:"h1",children:"Loading trading pairs..."}):Object(d.jsx)(u.c,{as:"h1",children:"Loading orders..."})},W=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.c,{textAlign:"left",ml:"2",mb:"2",children:"Hi, I'm the dashboard for an asset-buying robot."}),Object(d.jsx)(u.c,{textAlign:"left",ml:"2",children:Object(d.jsx)("a",{target:"_blank",href:"https://github.com/samjhill/dashboard-limit-bot",children:"Github"})})]})},E="/dashboard-limit-bot",B=[{path:"".concat(E,"/"),exact:!0,display:"About",element:Object(d.jsx)(W,{})},{path:"".concat(E,"/orders"),display:"Open Orders",element:Object(d.jsx)($,{})},{path:"".concat(E,"/stats/*"),display:"Stats",element:Object(d.jsx)(K,{})},{path:"".concat(E,"/trades"),display:"Buy History",element:Object(d.jsx)(T,{})},{path:"".concat(E,"/configuration"),display:"Configuration",element:Object(d.jsx)(l,{})}],H=localStorage.getItem("env")||"dev",V={getPrice:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_price",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_price"},getOpenOrders:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_open_orders",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_open_orders"},getTradesList:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_trades_list",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_trades_list"},getConfiguration:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/configuration",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/configuration"},getStats:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/stats",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/stats"},getTradingPairs:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/trading_pairs",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/trading_pairs"}};var N=function(){var e=Object(c.useState)("true"===localStorage.getItem("dashboardModeIsEnabled")),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(15e3),i=Object(s.a)(r,2),l=i[0];i[1],Object(c.useEffect)((function(){var e;n?e=setInterval((function(){var e=B.findIndex((function(e){return window.location.pathname.includes(e.path)})),t=B[(e+1)%B.length];window.location.href=t.path}),l):clearInterval(e)}),[n,a,l]);var b=function(e){var t=e.isActive,n=void 0!==t&&t,c=e.children;return Object(d.jsx)(u.a,{mb:"4",mr:"2",w:"100%",sx:{a:{width:"100%",background:n?"white":"none",color:n?"#333":"white",border:"1px solid white",padding:".5rem",textDecoration:"none"}},children:c})},h=function(){var e=Object(c.useState)(localStorage.getItem("env")||"dev"),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("select",{value:n,onChange:function(e){a(e.target.value),localStorage.setItem("env",e.target.value),window.location.reload()},style:{marginBottom:"1rem",marginTop:".5rem",padding:".5rem"},children:[Object(d.jsx)("option",{value:"dev",children:"dev"}),Object(d.jsx)("option",{value:"prod",children:"prod"})]})},m=function(){var e=Object(o.e)();return Object(d.jsx)(u.b,{flexWrap:"wrap",mt:"3",ml:"2",flexDirection:["row"],children:B.map((function(t){return Object(d.jsx)(b,{isActive:e.pathname===t.path,children:Object(d.jsx)(j.b,{to:t.path,children:t.display})},t.path)}))})};return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)(u.b,{p:"2",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(u.a,{ml:"3",children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{checked:n,type:"checkbox",onChange:function(){localStorage.setItem("dashboardModeIsEnabled",!n),a(!n)}}),"Dashboard Mode"]}),Object(d.jsxs)(u.c,{children:["Flips through the pages every ",l/1e3," seconds"]})]})]}),Object(d.jsx)(m,{}),Object(d.jsx)(o.c,{children:B.map((function(e){return Object(d.jsx)(o.a,{path:e.path,exact:e.exact,element:e.element},e.path)}))})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,346)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),J()}},[[335,1,2]]]);
//# sourceMappingURL=main.948f5779.chunk.js.map