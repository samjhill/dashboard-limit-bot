(this["webpackJsonpdashboard-limit-buy-dca"]=this["webpackJsonpdashboard-limit-buy-dca"]||[]).push([[0],{193:function(t,e,n){},194:function(t,e,n){},339:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(78),i=n.n(r),o=(n(193),n(11)),s=(n(194),n(14)),l=n(62),d=n(3),j=n(1),u=function(){var t=Object(a.useState)(),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){n||fetch(at.getConfiguration[nt]).then((function(t){return t.json()})).then((function(t){c(t)}),(function(t){console.error(t)}))}),[n,c]),n?Object(j.jsxs)(d.a,{textAlign:"left",pl:"2",children:[Object(j.jsx)(d.d,{as:"h2",mb:"2",children:"Configuration"}),Object(j.jsxs)(d.a,{mb:"2",children:[Object(j.jsx)(d.d,{as:"h3",children:"Limits"}),Object(j.jsxs)(d.d,{children:["Maximum daily spend: $",n.maximum_daily_spend]}),Object(j.jsxs)(d.d,{children:["Maximum weekly spend: $",n.maximum_weekly_spend]}),Object(j.jsxs)(d.d,{children:["Maximum monthly spend: $",n.maximum_monthly_spend]})]}),Object(j.jsxs)(d.a,{mb:"2",children:[Object(j.jsx)(d.d,{as:"h3",children:"Orders"}),Object(j.jsxs)(d.d,{children:["Number of orders: ",n.num_orders]}),Object(j.jsxs)(d.d,{children:["Percentage interval down: ",100*n.interval_size,"%"]}),Object(j.jsxs)(d.d,{children:["Comparison dollar-cost-average amount: $",n.daily_dca_amount]})]})]}):Object(j.jsx)(d.d,{as:"h1",children:"Loading..."})},b=n(23),h=n.n(b),m=n(40),p=n(32),x=n.n(p),O=n(342),f=n(343),g=n(347),v=n(70),w=n(71),y=n(86),k=n(83),S=n(178),C=n(348),A=n(180),_=n(183),P=function(){return fetch("".concat(at.getTradingPairs[nt])).then((function(t){return t.json()})).then((function(t){return t}),(function(t){console.error(t)}))},I=n(35),D=n(24),L=function(t,e,n){return t.map((function(t){return t.map((function(t){return Object(D.a)({name:x()(t.datetime).format("MM/DD/YY"),ticker:t.ticker},Object.entries(e).map((function(e){var n=Object(o.a)(e,2),a=n[0],c=n[1];return Object(I.a)({},a,t[c])})).reduce((function(t,e){return Object(D.a)(Object(D.a)({},t),e)})))})).reduce((function(t,e){return Object(D.a)(Object(D.a)({},t),{},{name:e.name},Object.entries(n).map((function(t){var n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(I.a)({},a,e[c])})).reduce((function(t,e){return Object(D.a)(Object(D.a)({},t),e)})))}),{})})).sort((function(t,e){return x()(t.name)-x()(e.name)}))},T={btc:"orange",btcusd:"orange",eth:"#407aff",ethusd:"#407aff",comparison:"grey",ltcusd:"lime",ltc:"lime"},M=function(t){var e=t.path,n=Object(s.e)().pathname.split("/")[3],c="*"===n?"btcusd":n,r=Object(a.useState)(),i=Object(o.a)(r,2),u=i[0],b=i[1];return Object(a.useEffect)((function(){function t(){return(t=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent,b(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u||function(){t.apply(this,arguments)}()}),[u,b]),Object(j.jsx)(j.Fragment,{children:null===u||void 0===u?void 0:u.map((function(t){var n=t.name,a=t.ticker;return Object(j.jsx)(l.b,{to:"".concat(tt,"/").concat(e,"/").concat(a),style:{textDecoration:"none"},children:Object(j.jsx)(d.a,{p:2,m:1,sx:{color:c===a?"white":T[a],border:"1px solid ".concat(T[a]),background:c===a&&T[a],fontWeight:"bold"},children:n})},a)}))})},$=function(t){var e=t.statItems;if(e)return Object(j.jsx)(d.c,{children:e.map((function(t){return Object(j.jsxs)(d.c,{flexDirection:"column",mr:"4",children:[Object(j.jsx)(d.d,{color:t.color||"text",children:t.title}),Object(j.jsx)(d.d,{children:t.statItem},t.title)]})}))})},K=function(){var t,e,n,c,r,i,l,u,b=Object(s.e)().pathname.split("/")[3],p="*"===b?"btcusd":b,D=Object(a.useState)(),K=Object(o.a)(D,2),W=K[0],z=K[1],F=Object(a.useState)(),q=Object(o.a)(F,2),B=q[0],E=q[1];if(Object(a.useEffect)((function(){function t(){return(t=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent,E(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}B||function(){t.apply(this,arguments)}(),W||fetch(at.getStats[nt]).then((function(t){return t.json()})).then((function(t){z(t)}),(function(t){console.error(t)}))}),[W,z,B,E]),!W)return Object(j.jsx)(d.d,{as:"h1",children:"Loading..."});if(0===W.length)return Object(j.jsx)(d.d,{as:"h1",children:"No data yet."});var V=Object(_.a)(W,(function(t){return x()(t.datetime).startOf("day").format()}));if(!B)return Object(j.jsx)(d.d,{as:"h1",children:"Loading..."});var H=B.map((function(t){t.name;var e=t.ticker;return function(t){var e,n=t.groupedStats,a=t.ticker;if(!a||!n)return null;var c=Object.values(n).map((function(t){return t.filter((function(t){return t.ticker===a}))})).filter((function(t){return t.length>0})),r=L(c,{actualCoinAmount:"actual_coin_amount",comparisonCoinAmount:"comparison_coin_amount"},(e={},Object(I.a)(e,"".concat(a,"Actual"),"actualCoinAmount"),Object(I.a)(e,"".concat(a,"Comparison"),"comparisonCoinAmount"),e)),i=L(c,{totalSpend:"total_spend"},Object(I.a)({},"".concat(a,"TotalSpend"),"totalSpend")),o=L(c,{comparisonTotalSpend:"comparison_total_spend"},Object(I.a)({},"".concat(a,"ComparisonTotalSpend"),"comparisonTotalSpend")),s=L(c,{currentPrice:"current_price"},Object(I.a)({},"".concat(a,"CurrentPrice"),"currentPrice")),l=L(c,{actualCoinAmount:"actual_coin_amount"},Object(I.a)({},"".concat(a,"CoinAmount"),"actualCoinAmount")),d=L(c,{averageDcaPrice:"average_dca_price"},Object(I.a)({},"".concat(a,"AverageDcaPrice"),"averageDcaPrice")),j=L(c,{savings:"savings_percent"},Object(I.a)({},a,"savings")),u=Math.round(i[i.length-1]["".concat(a,"TotalSpend")]),b=Math.round(o[o.length-1]["".concat(a,"ComparisonTotalSpend")]),h=l[l.length-1]["".concat(a,"CoinAmount")],m=Math.round(u/h),p=Math.round(d[d.length-1]["".concat(a,"AverageDcaPrice")]),O=parseFloat(s[s.length-1]["".concat(a,"CurrentPrice")]),f=Math.round(r[r.length-1]["".concat(a,"Comparison")]*O),g=Math.round(r[r.length-1]["".concat(a,"Actual")]*O),v=x()(c[c.length-1].datetime),w=x()(v).add(24,"hours"),y=x.a.duration(w.diff(x()())).asHours();return{coinAmounts:r,dollarsSpent:i,marketPrice:s,coinsPurchased:l,dcaComparisonAveragePrice:d,totalSpend:u,comparisonTotalSpend:b,totalCoinsPurchased:h,limitStrategyPrice:m,dcaComparisonPrice:p,latestPrice:O,dcaComparisonCoinValue:f,actualCoinValue:g,ticker:a,savingsPercentages:j,hoursUntilUpdate:y}}({groupedStats:V,ticker:e})}));if(!H)return Object(j.jsx)(d.d,{as:"h1",children:"Loading..."});var U=function(t){return H.find((function(e){return[e.ticker].includes(t)}))},J=U(p).actualCoinValue-U(p).totalSpend,N=U(p).dcaComparisonCoinValue-U(p).comparisonTotalSpend;return H.length!==B.length?Object(j.jsx)(d.d,{as:"h1",children:"Loading stats"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.c,{children:Object(j.jsx)(M,{path:"stats"})}),Object(j.jsx)(d.d,{mt:"2",children:"Stats update every 24 hours"}),Object(j.jsxs)(d.c,{flexDirection:["column","row"],mb:"4",mt:"2",w:1,justifyContent:"space-between",children:[Object(j.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(j.jsx)(d.d,{as:"h3",children:"Dollars spent"}),Object(j.jsx)($,{statItems:[{title:"comparison",statItem:"$\n                  ".concat(U(p).comparisonTotalSpend.toLocaleString())},{title:"actual",color:T[p],statItem:"$\n                  ".concat(U(p).totalSpend.toLocaleString())}]})]}),Object(j.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(j.jsx)(d.d,{as:"h3",children:"Current value (USD)"}),Object(j.jsx)($,{statItems:[{title:"comparison",statItem:"$\n                  ".concat(U(p).dcaComparisonCoinValue.toLocaleString())},{title:"actual",color:T[p],statItem:"$\n                  ".concat(U(p).actualCoinValue.toLocaleString())}]})]}),Object(j.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(j.jsx)(d.d,{as:"h3",children:"Profit (USD)"}),Object(j.jsx)($,{statItems:[{title:"comparison",statItem:"$\n                  ".concat(N.toLocaleString())},{title:"actual",color:T[p],statItem:"$\n                  ".concat(J.toLocaleString())}]})]}),Object(j.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(j.jsx)(d.d,{as:"h3",children:"Coins purchased"}),U(p)&&Object(j.jsx)(d.d,{children:U(p).totalCoinsPurchased},p)]}),Object(j.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(j.jsx)(d.d,{as:"h3",children:"Price per coin"}),Object(j.jsx)($,{statItems:[{title:"comparison",statItem:"$\n                  ".concat(U(p).dcaComparisonPrice.toLocaleString())},{title:"actual",color:T[p],statItem:"$\n                  ".concat(U(p).limitStrategyPrice.toLocaleString())}]})]}),Object(j.jsxs)(d.a,{textAlign:"left",p:"2",minWidth:"200px",children:[Object(j.jsx)(d.d,{as:"h3",children:"Advantage compared to DCA"}),Object(j.jsx)(d.d,{children:"percentage dollars saved per coin"}),Object(j.jsxs)(d.d,{children:[null===(t=U(p))||void 0===t?void 0:t.savingsPercentages[(null===(e=U(p))||void 0===e?void 0:e.savingsPercentages.length)-1][p],"%"]})]})]}),Object(j.jsxs)(d.c,{flexDirection:["column","row"],flexWrap:"wrap",children:[Object(j.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(j.jsx)(d.d,{as:"h3",children:"price per coin comparison"}),Object(j.jsx)(O.a,{width:"100%",height:400,children:Object(j.jsxs)(f.a,{data:[{dca:null===(n=U(p))||void 0===n?void 0:n.dcaComparisonPrice,limit:null===(c=U(p))||void 0===c?void 0:c.limitStrategyPrice}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(j.jsx)(g.a,{stroke:"#333"}),Object(j.jsx)(v.a,{dataKey:"name",stroke:"#ebebeb"}),Object(j.jsx)(w.a,{stroke:"#ebebeb"}),Object(j.jsx)(y.a,{}),Object(j.jsx)(k.a,{}),Object(j.jsx)(S.a,{dataKey:"dca",name:"dca strategy",fill:T.comparison}),Object(j.jsx)(S.a,{dataKey:"limit",name:"limit strategy",fill:T[p]})]})})]}),Object(j.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(j.jsx)(d.d,{as:"h3",children:"coin amounts compared to DCA"}),Object(j.jsx)(O.a,{width:"100%",height:400,children:Object(j.jsxs)(f.a,{data:null===(r=U(p))||void 0===r?void 0:r.coinAmounts,margin:{top:5,right:30,left:20,bottom:5},children:[Object(j.jsx)(g.a,{stroke:"#333"}),Object(j.jsx)(v.a,{dataKey:"name",stroke:"#ebebeb"}),Object(j.jsx)(w.a,{stroke:"#ebebeb"}),Object(j.jsx)(y.a,{}),Object(j.jsx)(k.a,{}),Object(j.jsx)(S.a,{dataKey:"".concat(p,"Comparison"),name:"comparison",fill:T.comparison}),Object(j.jsx)(S.a,{dataKey:"".concat(p,"Actual"),name:"actual",fill:T[p]})]})})]}),Object(j.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(j.jsx)(d.d,{as:"h3",children:"coin value, in dollars"}),Object(j.jsx)(O.a,{width:"100%",height:400,children:Object(j.jsxs)(f.a,{data:[{dca:null===(i=U(p))||void 0===i?void 0:i.dcaComparisonCoinValue,limit:null===(l=U(p))||void 0===l?void 0:l.actualCoinValue}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(j.jsx)(g.a,{stroke:"#333"}),Object(j.jsx)(v.a,{dataKey:"name",stroke:"#ebebeb"}),Object(j.jsx)(w.a,{stroke:"#ebebeb"}),Object(j.jsx)(y.a,{}),Object(j.jsx)(k.a,{}),Object(j.jsx)(S.a,{dataKey:"dca",name:"dca strategy",fill:T.comparison}),Object(j.jsx)(S.a,{dataKey:"limit",name:"limit strategy",fill:T[p]})]})})]}),Object(j.jsxs)(d.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(j.jsx)(d.d,{as:"h3",children:"Limit strategy advantage over time"}),Object(j.jsx)(d.d,{children:"(percentage dollars saved per coin)"}),Object(j.jsx)(O.a,{width:"100%",height:400,children:Object(j.jsxs)(C.a,{data:null===(u=U(p))||void 0===u?void 0:u.savingsPercentages,margin:{top:5,right:5,left:10,bottom:5},children:[Object(j.jsx)(v.a,{dataKey:"name",stroke:"#ebebeb"}),Object(j.jsx)(y.a,{}),Object(j.jsx)(k.a,{}),Object(j.jsx)(g.a,{stroke:"#333"}),Object(j.jsx)(A.a,{type:"monotone",dataKey:b,stroke:T[b]},b)]})})]})]})]})},W=n(349),z=n(171),F=n(181),q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["btcusd","ethusd"];return Promise.all(t.map((function(t){return fetch("".concat(at.getPrice[nt],"?ticker=").concat(t)).then((function(t){return t.json()})).then((function(e){return{ticker:t,result:e}}),(function(t){console.error(t)}))}))).then((function(t){var e=Object.values(t),n={};return null===e||void 0===e||e.map((function(t){e[t.ticker]||(e[t.ticker]=0),n[t.ticker]=t.result})),n}))},B=function(t){var e=t.headers,n=t.rows;return Object(j.jsxs)("table",{ml:"4",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:e.map((function(t){return Object(j.jsx)("th",{children:t},t)}))})}),Object(j.jsx)("tbody",{children:n.map((function(t,e){return Object(j.jsx)("tr",{children:t.map((function(t){return Object(j.jsx)("td",{style:{padding:".25rem"},children:t},t)}))},e)}))})]})},E=function(){var t=Object(a.useState)(),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(),i=Object(o.a)(r,2),s=i[0],l=i[1],u=Object(a.useState)(),b=Object(o.a)(u,2),p=b[0],f=b[1];return Object(a.useEffect)((function(){function t(){return(t=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:e=t.sent,l(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function e(){return(e=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent,f(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(s||function(){t.apply(this,arguments)}(),p||function(){e.apply(this,arguments)}(),!n&&p)return Promise.all(p.map((function(t){t.name;var e=t.ticker;return fetch("".concat(at.getTradesList[nt],"?ticker=").concat(e)).then((function(t){return t.json()})).then((function(t){var n=t.map((function(t){return Object(D.a)(Object(D.a)({},t),{},{datetime:x()(t.timestampms).format("MM/DD h:mm a")})}));return{ticker:e,result:n}}),(function(t){console.error(t)}))}))).then((function(t){var e=Object.values(t),n={};e.map((function(t){n[t.ticker]=t.result.reverse()})),c(n)}))}),[n,c,s,l,p,f]),n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.d,{as:"h2",mt:"4",ml:"2",textAlign:"left",children:"Buy History"}),Object(j.jsx)(d.c,{width:1,flexDirection:["column","row"],children:p.map((function(t){var e=t.name,a=t.ticker;return Object(j.jsxs)(d.c,{width:[1,.5],flexDirection:["column","row"],children:[Object(j.jsx)(d.a,{width:[1,.5],children:n[a]&&Object(j.jsxs)(d.a,{mt:"2",mb:"2",children:[Object(j.jsx)(d.d,{as:"h3",color:T[a],children:e}),Object(j.jsx)(O.a,{width:"100%",height:400,children:Object(j.jsxs)(W.a,{data:n[a],margin:{top:5,right:30,left:20,bottom:5},children:[Object(j.jsx)(g.a,{stroke:"#333"}),Object(j.jsx)(v.a,{dataKey:"datetime",stroke:"#ebebeb"}),Object(j.jsx)(w.a,{stroke:"#ebebeb"}),Object(j.jsx)(y.a,{}),Object(j.jsx)(k.a,{}),s&&s[a]&&Object(j.jsx)(z.a,{y:s[a],stroke:T[a],alwaysShow:!0,label:{value:"current price - $".concat(s[a].toLocaleString()),fill:"white"},color:"white"}),Object(j.jsx)(F.a,{dataKey:"price",fill:"white"})]})})]})}),Object(j.jsx)(d.a,{ml:"2",width:[1,.5],children:n[a]&&Object(j.jsx)(B,{headers:["Date","Price","Amount"],rows:Object.values(n[a]).reverse().map((function(t){return[t.datetime,"$".concat(parseFloat(t.price).toLocaleString()),t.amount]}))})},a)]},a)}))})]}):Object(j.jsx)(d.d,{as:"h1",children:"Loading..."})},V=function(t){var e=t.ticker,n=t.name,a=t.data,c=t.orders,r=t.currentPrice;return Object(j.jsxs)(d.c,{width:[1,.5],flexDirection:["column","row"],children:[Object(j.jsx)(d.a,{width:[1,.5],children:a&&Object(j.jsxs)(d.a,{mt:"2",mb:"2",width:1,children:[Object(j.jsx)(d.d,{as:"h3",mb:"2",color:T[e],children:n}),Object(j.jsx)(O.a,{width:"100%",height:400,children:Object(j.jsxs)(W.a,{data:a,margin:{top:5,right:30,left:20,bottom:5},children:[Object(j.jsx)(g.a,{stroke:"#333"}),Object(j.jsx)(v.a,{dataKey:"datetime",stroke:"#ebebeb"}),Object(j.jsx)(w.a,{stroke:"#ebebeb"}),Object(j.jsx)(y.a,{}),Object(j.jsx)(k.a,{}),r&&Object(j.jsx)(z.a,{y:r,stroke:T[e],alwaysShow:!0,label:{value:"current price - $".concat(r.toLocaleString()),fill:"white"},color:"white"}),Object(j.jsx)(F.a,{dataKey:"price",fill:"white"})]})})]})}),Object(j.jsx)(d.a,{ml:"2",width:[1,.5],children:c&&Object(j.jsx)(B,{headers:["Placed on","Price","Amount"],rows:c.map((function(t){return[t.datetime,"$".concat(parseFloat(t.price).toLocaleString()),t.remaining_amount]}))})},e)]},e)},H=function(){var t=Object(a.useState)(),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(),i=Object(o.a)(r,2),s=i[0],l=i[1],u=Object(a.useState)(),b=Object(o.a)(u,2),p=b[0],O=b[1];return Object(a.useEffect)((function(){function t(){return(t=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:e=t.sent,l(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function e(){return(e=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent,O(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(s||function(){t.apply(this,arguments)}(),p||function(){e.apply(this,arguments)}(),!n&&p)return Promise.all(p.map((function(t){return fetch("".concat(at.getOpenOrders[nt],"?ticker=").concat(t.ticker)).then((function(t){return t.json()})).then((function(e){var n=e.map((function(t){return Object(D.a)(Object(D.a)({},t),{},{datetime:x()(t.timestampms).format("MM/DD h:mm a")})}));return{ticker:t.ticker,result:n}}),(function(t){console.error(t)}))}))).then((function(t){var e=Object.values(t),n={};null===e||void 0===e||e.map((function(t){n[null===t||void 0===t?void 0:t.ticker]=null===t||void 0===t?void 0:t.result})),c(n)}))}),[s,l,n,c,p,O]),n?p?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.d,{as:"h1",mt:"4",ml:"2",mb:"2",textAlign:"left",children:"Open Orders"}),Object(j.jsxs)(d.d,{textAlign:"left",ml:"2",mb:"4",children:["If the asset's"," ",Object(j.jsx)("span",{style:{color:"green",fontWeight:"bold"},children:"price"})," ","drops down to any of the"," ",Object(j.jsx)("strong",{children:"white dots (open limit-buy orders)"}),", the buy order gets automatically triggered. Then, I create new orders based on the new price."]}),Object(j.jsx)(d.c,{width:1,flexDirection:["column","row"],children:p.map((function(t){return Object(j.jsx)(V,{ticker:t.ticker,name:t.name,data:n[t.ticker],orders:n[t.ticker],currentPrice:s[t.ticker]},t.ticker)}))})]}):Object(j.jsx)(d.d,{as:"h1",children:"Loading trading pairs..."}):Object(j.jsx)(d.d,{as:"h1",children:"Loading orders..."})},U=function(t){var e=t.title,n=t.text,a=t.date;return Object(j.jsxs)(d.a,{mt:"2",mb:"4",p:"3",backgroundColor:"#0000001f",maxWidth:"800px",children:[Object(j.jsx)(d.d,{as:"h1",children:e}),Object(j.jsx)(d.d,{as:"h4",children:a}),Object(j.jsx)(d.a,{mt:"3",children:Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})})]})},J=function(){return Object(j.jsxs)(d.a,{textAlign:"left",ml:"2",mt:"4",children:[Object(j.jsx)(d.d,{as:"h2",mb:"2",children:"Build Log"}),[{title:"Added backtesting",text:"I integrated with <a target='_blank' href='https://github.com/samjhill/backtesting.py'>a backtesting library!</a> So far, it's helped me nail down how long to let orders stay open before refreshing them.",date:"Sun Feb 6, 2022"},{title:"It's alive!",text:"This robot has been running for about a month. It's my first try at automating `buy the dip` consistently over time, and automated trading in general. It's doing pretty well right now - it has a 5% USD price advantage compared to the baseline. It's mostly just a learning project for me, but if the advantage maintains or even grows, that would be just swell.",date:"Fri Jan 21, 2022"}].map((function(t){return Object(j.jsx)(U,Object(D.a)({},t))}))]})},N=n(182),Y=n.n(N),G=function(){return Object(j.jsxs)(d.a,{pb:"2",children:[Object(j.jsx)(d.d,{mt:"2",children:"Feel free to sign up for more information."}),Object(j.jsx)(d.d,{mb:"2",children:"I promise I won't spam you!"}),Object(j.jsx)(Y.a,{action:"https://flamingochurch.us5.list-manage.com/subscribe/post?u=6ebe0b4af973c20b095e1eb03&id=f896297f9e",fields:[{name:"EMAIL",placeholder:"Email",type:"email",required:!0}]})]})},Q=function(t){var e=t.title;t.text;return Object(j.jsx)(d.a,{mt:"2",mb:"2",p:"3",backgroundColor:"#0000001f",maxWidth:"800px",children:Object(j.jsx)(d.d,{children:e})})},R=function(){return Object(j.jsxs)(d.a,{textAlign:"left",ml:"2",mt:"4",children:[Object(j.jsx)(d.d,{as:"h2",mb:"2",children:"Todos"}),[{title:"Add integration with traditional stock broker"},{title:"Add per-item settings for finer-grain control and customization of limit orders"},{title:"Update gemini client to https://github.com/mtusman/gemini-python"}].map((function(t){return Object(j.jsx)(Q,Object(D.a)({},t))}))]})},X=function(){return Object(j.jsxs)(d.a,{ml:"2",children:[Object(j.jsxs)(d.a,{backgroundColor:"#0000001f",maxWidth:"800px",p:"2",children:[Object(j.jsxs)(d.d,{as:"h1",textAlign:"left",ml:"2",mb:"4",mt:"4",children:[Object(j.jsxs)(d.d,{color:T.btc,as:"span",children:["Buy the Dip"," "]})," ","Bot"]}),Object(j.jsx)(d.d,{textAlign:"left",ml:"2",mb:"2",children:"Hi, I'm the dashboard for an asset-buying robot."}),Object(j.jsxs)(d.d,{as:"h4",textAlign:"left",ml:"2",mb:"2",children:["The goal is to get the best price for a given asset by using a limit strategy:",Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["place"," ",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://en.wikipedia.org/wiki/Order_(exchange)#Limit_order",children:"limit orders"})," ","at several intervals below the current price"]}),Object(j.jsx)("li",{children:"if an order gets executed or cancelled, start again"})]})]}),Object(j.jsxs)(d.c,{children:[Object(j.jsxs)(d.d,{textAlign:"left",ml:"2",mb:"5",mt:"2",children:["Created by"," ",Object(j.jsx)("a",{href:"https://github.com/samjhill",target:"_blank",children:"Sam Hill"})]}),Object(j.jsx)(d.b,{sx:{cursor:"pointer"},ml:"4",backgroundColor:"orange",fontWeight:"bold",height:"2.5rem",onClick:window.open("mailto:samuhill+limitBot@gmail.com?subject=Buy%20the%20Dip%20Bot"),children:"Contact me"})]})]}),Object(j.jsx)(d.a,{backgroundColor:"#0000001f",maxWidth:"800px",p:"2",mt:"2",children:Object(j.jsx)(G,{})}),Object(j.jsx)(R,{}),Object(j.jsx)(J,{})]})},Z=function(){return Object(j.jsx)("iframe",{src:"/dashboard-limit-bot/bt.html",title:"backtest",width:"100%",height:"1000px"})},tt="/dashboard-limit-bot",et=[{path:"".concat(tt,"/"),exact:!0,display:"About",element:Object(j.jsx)(X,{})},{path:"".concat(tt,"/orders"),display:"Open Orders",element:Object(j.jsx)(H,{})},{path:"".concat(tt,"/stats/*"),display:"Stats",element:Object(j.jsx)(K,{})},{path:"".concat(tt,"/trades"),display:"Buy History",element:Object(j.jsx)(E,{})},{path:"".concat(tt,"/backtest"),display:"Backtest",element:Object(j.jsx)(Z,{})},{path:"".concat(tt,"/configuration"),display:"Configuration",element:Object(j.jsx)(u,{})}],nt=localStorage.getItem("env")||"dev",at={getPrice:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_price",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_price"},getOpenOrders:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_open_orders",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_open_orders"},getTradesList:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/get_trades_list",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/get_trades_list"},getConfiguration:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/configuration",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/configuration"},getStats:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/stats",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/stats"},getTradingPairs:{dev:"https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/trading_pairs",prod:"https://jt5ivn6f34.execute-api.us-east-1.amazonaws.com/prod/trading_pairs"}};var ct=function(){var t=Object(a.useState)("true"===localStorage.getItem("dashboardModeIsEnabled")),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(15e3),i=Object(o.a)(r,2),u=i[0];i[1],Object(a.useEffect)((function(){var t;n?t=setInterval((function(){var t=et.findIndex((function(t){return window.location.pathname.includes(t.path)})),e=et[(t+1)%et.length];window.location.href=e.path}),u):clearInterval(t)}),[n,c,u]);var b=function(t){var e=t.isActive,n=void 0!==e&&e,a=t.children;return Object(j.jsx)(d.a,{mb:"4",mr:"2",w:"100%",sx:{a:{width:"100%",background:n?"white":"none",color:n?"#333":"white",border:"1px solid white",padding:".5rem",textDecoration:"none","&:hover":{background:T.btc,transition:"all .2s",color:"black",border:"1px solid ".concat(T.btc)}}},children:a})},h=function(){var t=Object(s.e)();return Object(j.jsx)(d.c,{flexWrap:"wrap",mt:"3",ml:"2",flexDirection:["row"],children:et.map((function(e){return Object(j.jsx)(b,{isActive:t.pathname===e.path,children:Object(j.jsx)(l.b,{to:e.path,children:e.display})},e.path)}))})};return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(d.c,{p:"2"}),Object(j.jsx)(h,{}),Object(j.jsx)(s.c,{children:et.map((function(t){return Object(j.jsx)(s.a,{path:t.path,exact:t.exact,element:t.element},t.path)}))})]})})})},rt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,351)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(ct,{})}),document.getElementById("root")),rt()}},[[339,1,2]]]);
//# sourceMappingURL=main.30cf38c9.chunk.js.map