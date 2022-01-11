(this["webpackJsonpdashboard-limit-buy-dca"]=this["webpackJsonpdashboard-limit-buy-dca"]||[]).push([[0],{192:function(t,e,n){},193:function(t,e,n){},335:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(77),i=n.n(r),s=(n(192),n(12)),o=(n(193),n(14)),l=n(79),j=n(3),d=n(1),u=function(){var t=Object(c.useState)(),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){n||fetch(J.getConfiguration[N]).then((function(t){return t.json()})).then((function(t){a(t)}),(function(t){console.error(t)}))}),[n,a]),n?Object(d.jsxs)(j.a,{textAlign:"left",pl:"2",children:[Object(d.jsx)(j.c,{as:"h2",mb:"2",children:"Configuration"}),Object(d.jsxs)(j.a,{mb:"2",children:[Object(d.jsx)(j.c,{as:"h3",children:"Limits"}),Object(d.jsxs)(j.c,{children:["Maximum daily spend: $",n.maximum_daily_spend]}),Object(d.jsxs)(j.c,{children:["Maximum weekly spend: $",n.maximum_weekly_spend]}),Object(d.jsxs)(j.c,{children:["Maximum monthly spend: $",n.maximum_monthly_spend]})]}),Object(d.jsxs)(j.a,{mb:"2",children:[Object(d.jsx)(j.c,{as:"h3",children:"Orders"}),Object(d.jsxs)(j.c,{children:["Number of orders: ",n.num_orders]}),Object(d.jsxs)(j.c,{children:["Percentage interval down: ",100*n.interval_size,"%"]}),Object(d.jsxs)(j.c,{children:["Comparison dollar-cost-average amount: $",n.daily_dca_amount]})]})]}):Object(d.jsx)(j.c,{as:"h1",children:"Loading..."})},b=n(25),h=n.n(b),m=n(50),p=n(31),O=n.n(p),x=n(337),f=n(338),g=n(342),v=n(69),w=n(70),y=n(86),k=n(83),S=n(178),C=n(343),A=n(180),P=n(182),_=function(){return fetch("".concat(J.getTradingPairs[N])).then((function(t){return t.json()})).then((function(t){return t}),(function(t){console.error(t)}))},D=n(35),I=n(33),L=function(t,e,n){return t.map((function(t){return t.map((function(t){return Object(I.a)({name:O()(t.datetime).format("MM/DD/YY"),ticker:t.ticker},Object.entries(e).map((function(e){var n=Object(s.a)(e,2),c=n[0],a=n[1];return Object(D.a)({},c,t[a])})).reduce((function(t,e){return Object(I.a)(Object(I.a)({},t),e)})))})).reduce((function(t,e){return Object(I.a)(Object(I.a)({},t),{},{name:e.name},Object.entries(n).map((function(t){var n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(D.a)({},c,e[a])})).reduce((function(t,e){return Object(I.a)(Object(I.a)({},t),e)})))}),{})})).sort((function(t,e){return O()(t.name)-O()(e.name)}))},M={btc:"orange",btcusd:"orange",eth:"#407aff",ethusd:"#407aff",comparison:"grey",ltcusd:"lime",ltc:"lime"},T=function(t){var e=t.statItems;if(e)return Object(d.jsx)(j.b,{children:e.map((function(t){return Object(d.jsxs)(j.b,{flexDirection:"column",mr:"4",children:[Object(d.jsx)(j.c,{children:t.title}),Object(d.jsx)(j.c,{children:t.statItem},t.title)]})}))})},K=function(){var t,e,n,a,r,i,u,b,p=Object(o.e)().pathname.split("/")[3],I="*"===p?"btcusd":p,K=Object(c.useState)(),$=Object(s.a)(K,2),z=$[0],q=$[1],F=Object(c.useState)(),W=Object(s.a)(F,2),E=W[0],V=W[1];if(Object(c.useEffect)((function(){function t(){return(t=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:e=t.sent,V(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}E||function(){t.apply(this,arguments)}(),z||fetch(J.getStats[N]).then((function(t){return t.json()})).then((function(t){q(t)}),(function(t){console.error(t)}))}),[z,q,E,V]),!z)return Object(d.jsx)(j.c,{as:"h1",children:"Loading..."});if(0===z.length)return Object(d.jsx)(j.c,{as:"h1",children:"No data yet."});var B=Object(P.a)(z,(function(t){return O()(t.datetime).startOf("day").format()}));if(!E)return Object(d.jsx)(j.c,{as:"h1",children:"Loading..."});var U=E.map((function(t){t.name;var e=t.ticker;return function(t){var e,n=t.groupedStats,c=t.ticker;if(!c||!n)return null;var a=Object.values(n).map((function(t){return t.filter((function(t){return t.ticker===c}))})).filter((function(t){return t.length>0})),r=L(a,{actualCoinAmount:"actual_coin_amount",comparisonCoinAmount:"comparison_coin_amount"},(e={},Object(D.a)(e,"".concat(c,"Actual"),"actualCoinAmount"),Object(D.a)(e,"".concat(c,"Comparison"),"comparisonCoinAmount"),e)),i=L(a,{totalSpend:"total_spend"},Object(D.a)({},"".concat(c,"TotalSpend"),"totalSpend")),s=L(a,{comparisonTotalSpend:"comparison_total_spend"},Object(D.a)({},"".concat(c,"ComparisonTotalSpend"),"comparisonTotalSpend")),o=L(a,{currentPrice:"current_price"},Object(D.a)({},"".concat(c,"CurrentPrice"),"currentPrice")),l=L(a,{actualCoinAmount:"actual_coin_amount"},Object(D.a)({},"".concat(c,"CoinAmount"),"actualCoinAmount")),j=L(a,{averageDcaPrice:"average_dca_price"},Object(D.a)({},"".concat(c,"AverageDcaPrice"),"averageDcaPrice")),d=L(a,{savings:"savings_percent"},Object(D.a)({},c,"savings")),u=Math.round(i[i.length-1]["".concat(c,"TotalSpend")]),b=Math.round(s[s.length-1]["".concat(c,"ComparisonTotalSpend")]),h=l[l.length-1]["".concat(c,"CoinAmount")],m=Math.round(u/h),p=Math.round(j[j.length-1]["".concat(c,"AverageDcaPrice")]),x=parseFloat(o[o.length-1]["".concat(c,"CurrentPrice")]),f=Math.round(r[r.length-1]["".concat(c,"Comparison")]*x),g=Math.round(r[r.length-1]["".concat(c,"Actual")]*x),v=O()(a[a.length-1].datetime),w=O()(v).add(24,"hours"),y=O.a.duration(w.diff(O()())).asHours();return{coinAmounts:r,dollarsSpent:i,marketPrice:o,coinsPurchased:l,dcaComparisonAveragePrice:j,totalSpend:u,comparisonTotalSpend:b,totalCoinsPurchased:h,limitStrategyPrice:m,dcaComparisonPrice:p,latestPrice:x,dcaComparisonCoinValue:f,actualCoinValue:g,ticker:c,savingsPercentages:d,hoursUntilUpdate:y}}({groupedStats:B,ticker:e})}));if(!U)return Object(d.jsx)(j.c,{as:"h1",children:"Loading..."});var Y=function(t){return U.find((function(e){return[e.ticker].includes(t)}))},G=Y(I).actualCoinValue-Y(I).totalSpend,Q=Y(I).dcaComparisonCoinValue-Y(I).comparisonTotalSpend;return U.length!==E.length?Object(d.jsx)(j.c,{as:"h1",children:"Loading stats"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.b,{children:E.map((function(t){var e=t.name,n=t.ticker;return Object(d.jsx)(l.b,{to:"".concat(H,"/stats/").concat(n),style:{textDecoration:"none"},children:Object(d.jsx)(j.a,{p:2,m:1,sx:{color:I===n?"white":M[n],border:"1px solid ".concat(M[n]),background:I===n&&M[n],fontWeight:"bold"},children:e})},n)}))}),Object(d.jsx)(j.c,{mt:"2",children:"Stats update every 24 hours"}),Object(d.jsxs)(j.b,{flexDirection:["column","row"],mb:"4",mt:"2",w:1,justifyContent:"space-between",children:[Object(d.jsxs)(j.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(j.c,{as:"h3",children:"Dollars spent"}),Object(d.jsx)(T,{statItems:[{title:"DCA",statItem:"$\n                  ".concat(Y(I).comparisonTotalSpend.toLocaleString())},{title:"Limit",statItem:"$\n                  ".concat(Y(I).totalSpend.toLocaleString())}]})]}),Object(d.jsxs)(j.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(j.c,{as:"h3",children:"Current value (USD)"}),Object(d.jsx)(T,{statItems:[{title:"DCA",statItem:"$\n                  ".concat(Y(I).dcaComparisonCoinValue.toLocaleString())},{title:"Limit",statItem:"$\n                  ".concat(Y(I).actualCoinValue.toLocaleString())}]})]}),Object(d.jsxs)(j.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(j.c,{as:"h3",children:"Profit (USD)"}),Object(d.jsx)(T,{statItems:[{title:"DCA",statItem:"$\n                  ".concat(Q.toLocaleString())},{title:"Limit",statItem:"$\n                  ".concat(G.toLocaleString())}]})]}),Object(d.jsxs)(j.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(j.c,{as:"h3",children:"Coins purchased"}),Y(I)&&Object(d.jsx)(j.c,{children:Y(I).totalCoinsPurchased},I)]}),Object(d.jsxs)(j.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(j.c,{as:"h3",children:"Price per coin"}),Object(d.jsx)(T,{statItems:[{title:"DCA",statItem:"$\n                  ".concat(Y(I).dcaComparisonPrice.toLocaleString())},{title:"Limit",statItem:"$\n                  ".concat(Y(I).limitStrategyPrice.toLocaleString())}]})]}),Object(d.jsxs)(j.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(d.jsx)(j.c,{as:"h3",children:"Advantage compared to DCA"}),Object(d.jsxs)(j.c,{children:[null===(t=Y(I))||void 0===t?void 0:t.savingsPercentages[(null===(e=Y(I))||void 0===e?void 0:e.savingsPercentages.length)-1][I],"%"]})]})]}),Object(d.jsxs)(j.b,{flexDirection:["column","row"],flexWrap:"wrap",children:[Object(d.jsxs)(j.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(d.jsx)(j.c,{as:"h3",children:"price per coin comparison"}),Object(d.jsx)(x.a,{width:"100%",height:400,children:Object(d.jsxs)(f.a,{data:[{dca:null===(n=Y(I))||void 0===n?void 0:n.dcaComparisonPrice,limit:null===(a=Y(I))||void 0===a?void 0:a.limitStrategyPrice}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(g.a,{stroke:"#333"}),Object(d.jsx)(v.a,{dataKey:"name",stroke:"#ebebeb"}),Object(d.jsx)(w.a,{stroke:"#ebebeb"}),Object(d.jsx)(y.a,{}),Object(d.jsx)(k.a,{}),Object(d.jsx)(S.a,{dataKey:"dca",name:"dca strategy",fill:M.comparison}),Object(d.jsx)(S.a,{dataKey:"limit",name:"limit strategy",fill:M[I]})]})})]}),Object(d.jsxs)(j.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(d.jsx)(j.c,{as:"h3",children:"coin amounts compared to DCA"}),Object(d.jsx)(x.a,{width:"100%",height:400,children:Object(d.jsxs)(f.a,{data:null===(r=Y(I))||void 0===r?void 0:r.coinAmounts,margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(g.a,{stroke:"#333"}),Object(d.jsx)(v.a,{dataKey:"name",stroke:"#ebebeb"}),Object(d.jsx)(w.a,{stroke:"#ebebeb"}),Object(d.jsx)(y.a,{}),Object(d.jsx)(k.a,{}),Object(d.jsx)(S.a,{dataKey:"".concat(I,"Comparison"),name:"comparison",fill:M.comparison}),Object(d.jsx)(S.a,{dataKey:"".concat(I,"Actual"),name:"actual",fill:M[I]})]})})]}),Object(d.jsxs)(j.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(d.jsx)(j.c,{as:"h3",children:"coin value, in dollars"}),Object(d.jsx)(x.a,{width:"100%",height:400,children:Object(d.jsxs)(f.a,{data:[{dca:null===(i=Y(I))||void 0===i?void 0:i.dcaComparisonCoinValue,limit:null===(u=Y(I))||void 0===u?void 0:u.actualCoinValue}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(g.a,{stroke:"#333"}),Object(d.jsx)(v.a,{dataKey:"name",stroke:"#ebebeb"}),Object(d.jsx)(w.a,{stroke:"#ebebeb"}),Object(d.jsx)(y.a,{}),Object(d.jsx)(k.a,{}),Object(d.jsx)(S.a,{dataKey:"dca",name:"dca strategy",fill:M.comparison}),Object(d.jsx)(S.a,{dataKey:"limit",name:"limit strategy",fill:M[I]})]})})]}),Object(d.jsxs)(j.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(d.jsx)(j.c,{as:"h3",children:"Limit strategy advantage over time"}),Object(d.jsx)(j.c,{children:"(percentage dollars saved per coin)"}),Object(d.jsx)(x.a,{width:"100%",height:400,children:Object(d.jsxs)(C.a,{data:null===(b=Y(I))||void 0===b?void 0:b.savingsPercentages,margin:{top:5,right:5,left:10,bottom:5},children:[Object(d.jsx)(v.a,{dataKey:"name",stroke:"#ebebeb"}),Object(d.jsx)(y.a,{}),Object(d.jsx)(k.a,{}),Object(d.jsx)(g.a,{stroke:"#333"}),Object(d.jsx)(A.a,{type:"monotone",dataKey:p,stroke:M[p]},p)]})})]})]})]})},$=n(344),z=n(171),q=n(181),F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["btcusd","ethusd"];return Promise.all(t.map((function(t){return fetch("".concat(J.getPrice[N],"?ticker=").concat(t)).then((function(t){return t.json()})).then((function(e){return{ticker:t,result:e}}),(function(t){console.error(t)}))}))).then((function(t){var e=Object.values(t),n={};return null===e||void 0===e||e.map((function(t){e[t.ticker]||(e[t.ticker]=0),n[t.ticker]=t.result})),n}))},W=function(t){var e=t.headers,n=t.rows;return Object(d.jsxs)("table",{ml:"4",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:e.map((function(t){return Object(d.jsx)("th",{children:t})}))})}),Object(d.jsx)("tbody",{children:n.map((function(t,e){return Object(d.jsx)("tr",{children:t.map((function(t){return Object(d.jsx)("td",{style:{padding:".25rem"},children:t})}))},e)}))})]})},E=function(){var t=Object(c.useState)(),e=Object(s.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(c.useState)(),b=Object(s.a)(u,2),p=b[0],f=b[1];return Object(c.useEffect)((function(){function t(){return(t=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F();case 2:e=t.sent,l(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function e(){return(e=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:e=t.sent,f(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(o||function(){t.apply(this,arguments)}(),p||function(){e.apply(this,arguments)}(),!n&&p)return Promise.all(p.map((function(t){t.name;var e=t.ticker;return fetch("".concat(J.getTradesList[N],"?ticker=").concat(e)).then((function(t){return t.json()})).then((function(t){var n=t.map((function(t){return Object(I.a)(Object(I.a)({},t),{},{datetime:O()(t.timestampms).format("MM/DD h:mm a")})}));return{ticker:e,result:n}}),(function(t){console.error(t)}))}))).then((function(t){var e=Object.values(t),n={};e.map((function(t){n[t.ticker]=t.result.reverse()})),a(n)}))}),[n,a,o,l,p,f]),n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.c,{as:"h2",mt:"4",ml:"2",textAlign:"left",children:"Buy History"}),Object(d.jsx)(j.b,{width:1,flexDirection:["column","row"],children:p.map((function(t){var e=t.name,c=t.ticker;return Object(d.jsxs)(j.b,{width:[1,.5],flexDirection:["column","row"],children:[Object(d.jsx)(j.a,{width:[1,.5],children:n[c]&&Object(d.jsxs)(j.a,{mt:"2",mb:"2",children:[Object(d.jsx)(j.c,{as:"h3",color:M[c],children:e}),Object(d.jsx)(x.a,{width:"100%",height:400,children:Object(d.jsxs)($.a,{data:n[c],margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(g.a,{stroke:"#333"}),Object(d.jsx)(v.a,{dataKey:"datetime",stroke:"#ebebeb"}),Object(d.jsx)(w.a,{stroke:"#ebebeb"}),Object(d.jsx)(y.a,{}),Object(d.jsx)(k.a,{}),o&&o[c]&&Object(d.jsx)(z.a,{y:o[c],stroke:M[c],alwaysShow:!0,label:{value:"current price - $".concat(o[c]),fill:"white"},color:"white"}),Object(d.jsx)(q.a,{dataKey:"price",fill:"white"})]})})]})}),Object(d.jsx)(j.a,{ml:"2",width:[1,.5],children:n[c]&&Object(d.jsx)(W,{headers:["Date","Price","Amount"],rows:Object.values(n[c]).reverse().map((function(t){return[t.datetime,"$".concat(t.price),t.amount]}))})},c)]},c)}))})]}):Object(d.jsx)(j.c,{as:"h1",children:"Loading..."})},V=function(){var t=Object(c.useState)(),e=Object(s.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(c.useState)(),b=Object(s.a)(u,2),p=b[0],f=b[1];return Object(c.useEffect)((function(){function t(){return(t=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F();case 2:e=t.sent,l(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function e(){return(e=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:e=t.sent,f(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(o||function(){t.apply(this,arguments)}(),p||function(){e.apply(this,arguments)}(),!n&&p)return Promise.all(p.map((function(t){return fetch("".concat(J.getOpenOrders[N],"?ticker=").concat(t.ticker)).then((function(t){return t.json()})).then((function(e){var n=e.map((function(t){return Object(I.a)(Object(I.a)({},t),{},{datetime:O()(t.timestampms).format("MM/DD h:mm a")})}));return{ticker:t.ticker,result:n}}),(function(t){console.error(t)}))}))).then((function(t){var e=Object.values(t),n={};null===e||void 0===e||e.map((function(t){n[null===t||void 0===t?void 0:t.ticker]=null===t||void 0===t?void 0:t.result})),a(n)}))}),[o,l,n,a,p,f]),n?p?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.c,{as:"h1",mt:"4",ml:"2",mb:"2",textAlign:"left",children:"Open Orders"}),Object(d.jsxs)(j.c,{textAlign:"left",ml:"2",mb:"4",children:["If the asset's"," ",Object(d.jsx)("span",{style:{color:"green",fontWeight:"bold"},children:"price (green line)"})," ","drops down to any of the"," ",Object(d.jsx)("strong",{children:"white dots (open limit-buy orders)"}),", the buy order gets automatically triggered. Then, I create new orders based on the new price."]}),Object(d.jsx)(j.b,{width:1,flexDirection:["column","row"],children:p.map((function(t){return Object(d.jsxs)(j.b,{width:[1,.5],flexDirection:["column","row"],children:[Object(d.jsx)(j.a,{width:[1,.5],children:n[t.ticker]&&Object(d.jsxs)(j.a,{mt:"2",mb:"2",width:1,children:[Object(d.jsx)(j.c,{as:"h3",mb:"2",color:M[t.ticker],children:t.name}),Object(d.jsx)(x.a,{width:"100%",height:400,children:Object(d.jsxs)($.a,{data:n[t.ticker],margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(g.a,{stroke:"#333"}),Object(d.jsx)(v.a,{dataKey:"datetime",stroke:"#ebebeb"}),Object(d.jsx)(w.a,{stroke:"#ebebeb"}),Object(d.jsx)(y.a,{}),Object(d.jsx)(k.a,{}),o&&o[t.ticker]&&Object(d.jsx)(z.a,{y:o[t.ticker],stroke:M[t.ticker],alwaysShow:!0,label:{value:"current price - $".concat(o[t.ticker]),fill:"white"},color:"white"}),Object(d.jsx)(q.a,{dataKey:"price",fill:"white"})]})})]})}),Object(d.jsx)(j.a,{ml:"2",width:[1,.5],children:n[t.ticker]&&Object(d.jsx)(W,{headers:["Placed on","Price","Amount"],rows:Object.values(n[t.ticker]).map((function(t){return[t.datetime,"".concat(t.price),t.remaining_amount]}))})},t.ticker)]},t.ticker)}))})]}):Object(d.jsx)(j.c,{as:"h1",children:"Loading trading pairs..."}):Object(d.jsx)(j.c,{as:"h1",children:"Loading orders..."})},B=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.c,{textAlign:"left",ml:"2",mb:"2",children:"Hi, I'm the dashboard for an asset-buying robot."}),Object(d.jsx)(j.c,{textAlign:"left",ml:"2",children:Object(d.jsx)("a",{target:"_blank",href:"https://github.com/samjhill/dashboard-limit-bot",children:"Github"})})]})},H="/dashboard-limit-bot",U=[{path:"".concat(H,"/"),exact:!0,display:"About",element:Object(d.jsx)(B,{})},{path:"".concat(H,"/orders"),display:"Open Orders",element:Object(d.jsx)(V,{})},{path:"".concat(H,"/stats/*"),display:"Stats",element:Object(d.jsx)(K,{})},{path:"".concat(H,"/trades"),display:"Buy History",element:Object(d.jsx)(E,{})},{path:"".concat(H,"/configuration"),display:"Configuration",element:Object(d.jsx)(u,{})}],N=localStorage.getItem("env")||"dev",J={getPrice:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_price",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_price"},getOpenOrders:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_open_orders",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_open_orders"},getTradesList:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_trades_list",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_trades_list"},getConfiguration:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/configuration",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/configuration"},getStats:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/stats",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/stats"},getTradingPairs:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/trading_pairs",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/trading_pairs"}};var Y=function(){var t=Object(c.useState)("true"===localStorage.getItem("dashboardModeIsEnabled")),e=Object(s.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(15e3),i=Object(s.a)(r,2),u=i[0];i[1],Object(c.useEffect)((function(){var t;n?t=setInterval((function(){var t=U.findIndex((function(t){return window.location.pathname.includes(t.path)})),e=U[(t+1)%U.length];window.location.href=e.path}),u):clearInterval(t)}),[n,a,u]);var b=function(t){var e=t.isActive,n=void 0!==e&&e,c=t.children;return Object(d.jsx)(j.a,{mb:"4",mr:"2",w:"100%",sx:{a:{width:"100%",background:n?"white":"none",color:n?"#333":"white",border:"1px solid white",padding:".5rem",textDecoration:"none"}},children:c})},h=function(){var t=Object(c.useState)(localStorage.getItem("env")||"dev"),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(d.jsxs)("select",{value:n,onChange:function(t){a(t.target.value),localStorage.setItem("env",t.target.value),window.location.reload()},style:{marginBottom:"1rem",marginTop:".5rem",padding:".5rem"},children:[Object(d.jsx)("option",{value:"dev",children:"dev"}),Object(d.jsx)("option",{value:"prod",children:"prod"})]})},m=function(){var t=Object(o.e)();return Object(d.jsx)(j.b,{flexWrap:"wrap",mt:"3",ml:"2",flexDirection:["row"],children:U.map((function(e){return Object(d.jsx)(b,{isActive:t.pathname===e.path,children:Object(d.jsx)(l.b,{to:e.path,children:e.display})},e.path)}))})};return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)(j.b,{p:"2",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(j.a,{ml:"3",children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{checked:n,type:"checkbox",onChange:function(){localStorage.setItem("dashboardModeIsEnabled",!n),a(!n)}}),"Dashboard Mode"]}),Object(d.jsxs)(j.c,{children:["Flips through the pages every ",u/1e3," seconds"]})]})]}),Object(d.jsx)(m,{}),Object(d.jsx)(o.c,{children:U.map((function(t){return Object(d.jsx)(o.a,{path:t.path,exact:t.exact,element:t.element},t.path)}))})]})})})},G=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,346)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(Y,{})}),document.getElementById("root")),G()}},[[335,1,2]]]);
//# sourceMappingURL=main.f3ea98fb.chunk.js.map