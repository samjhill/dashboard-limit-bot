(this["webpackJsonpdashboard-limit-buy-dca"]=this["webpackJsonpdashboard-limit-buy-dca"]||[]).push([[0],{181:function(e,t,c){},182:function(e,t,c){},324:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(66),i=c.n(r),s=(c(181),c(182),c(19)),o=c(10),j=c(2),u=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){c||fetch("https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/configuration").then((function(e){return e.json()})).then((function(e){a(e)}),(function(e){console.error(e)}))}),[c,a]),c?Object(j.jsxs)(o.a,{textAlign:"left",pl:"2",children:[Object(j.jsx)(o.c,{as:"h2",mb:"2",children:"Configuration"}),Object(j.jsxs)(o.a,{mb:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Limits"}),Object(j.jsxs)(o.c,{children:["Maximum daily spend: $",c.maximum_daily_spend]}),Object(j.jsxs)(o.c,{children:["Maximum weekly spend: $",c.maximum_weekly_spend]}),Object(j.jsxs)(o.c,{children:["Maximum monthly spend: $",c.maximum_monthly_spend]})]}),Object(j.jsxs)(o.a,{mb:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Orders"}),Object(j.jsxs)(o.c,{children:["Number of orders: ",c.num_orders]}),Object(j.jsxs)(o.c,{children:["Percentage interval down: ",100*c.interval_size,"%"]}),Object(j.jsxs)(o.c,{children:["Comparison dollar-cost-average amount: $",c.daily_dca_amount]})]})]}):null},d=c(40),m=c(32),l=c(22),b=c.n(l),h=c(327),O=c(328),x=c(92),f=c(75),p=c(72),g=c(332),v=c(168),A=c(333),y=c(93),C=c(172),D=c(170),k=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],a=t[1];if(Object(n.useEffect)((function(){c||fetch("https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/stats").then((function(e){return e.json()})).then((function(e){a(e),console.log(e)}),(function(e){console.error(e)}))}),[c,a]),!c)return null;var r=Object(D.a)(c,(function(e){return b()(e.datetime).startOf("day").format()})),i=Object.values(r).map((function(e){return e.map((function(e){return{name:b()(e.datetime).format("MM/DD/YY"),savings:e.savings_percent,ticker:e.ticker}})).reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({name:t.name},t.ticker,t.savings))}),{})})).sort((function(e,t){return b()(e.name)-b()(t.name)})),u=Object.values(r).map((function(e){return e.map((function(e){return{name:b()(e.datetime).format("MM/DD/YY"),actualCoinAmount:e.actual_coin_amount,comparisonCoinAmount:e.comparison_coin_amount,ticker:e.ticker}})).reduce((function(e,t){var c;return Object(m.a)(Object(m.a)({},e),{},(c={name:t.name},Object(d.a)(c,"".concat(t.ticker,"Actual"),t.actualCoinAmount),Object(d.a)(c,"".concat(t.ticker,"Comparison"),t.comparisonCoinAmount),c))}),{})})).sort((function(e,t){return b()(e.name)-b()(t.name)})),l=Object.values(r).map((function(e){return e.map((function(e){return{name:b()(e.datetime).format("MM/DD/YY"),totalSpend:e.total_spend,ticker:e.ticker}})).reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({name:t.name},"".concat(t.ticker,"TotalSpend"),t.totalSpend))}),{})})).sort((function(e,t){return b()(e.name)-b()(t.name)})),k=Object.values(r).map((function(e){return e.map((function(e){return{name:b()(e.datetime).format("MM/DD/YY"),actualCoinAmount:e.actual_coin_amount,ticker:e.ticker}})).reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({name:t.name},"".concat(t.ticker,"CoinAmount"),t.actualCoinAmount))}),{})})).sort((function(e,t){return b()(e.name)-b()(t.name)})),_=Object.values(r).map((function(e){return e.map((function(e){return{name:b()(e.datetime).format("MM/DD/YY"),averageDcaPrice:e.average_dca_price,ticker:e.ticker}})).reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({name:t.name},"".concat(t.ticker,"AverageDcaPrice"),t.averageDcaPrice))}),{})})).sort((function(e,t){return b()(e.name)-b()(t.name)})),w=l[l.length-1].btcusdTotalSpend,M=l[l.length-1].ethusdTotalSpend,Y=k[k.length-1].btcusdCoinAmount,$=k[k.length-1].ethusdCoinAmount,E=_[_.length-1].btcusdAverageDcaPrice,K=_[_.length-1].ethusdAverageDcaPrice;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(o.a,{textAlign:"left",p:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Dollars spent"}),Object(j.jsxs)(o.c,{children:["Bitcoin: $",w]}),Object(j.jsxs)(o.c,{children:["Ethereum: $",M]})]}),Object(j.jsxs)(o.a,{textAlign:"left",p:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Coins purchased"}),Object(j.jsxs)(o.c,{children:["Bitcoin: ",Y]}),Object(j.jsxs)(o.c,{children:["Ethereum: ",$]})]}),Object(j.jsxs)(o.a,{textAlign:"left",p:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Average price per coin"}),Object(j.jsxs)(o.c,{children:["Bitcoin: $",Math.round(w/Y)]}),Object(j.jsxs)(o.c,{children:["Ethereum: $",Math.round(M/$)]})]}),Object(j.jsxs)(o.a,{textAlign:"left",p:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Price per coin if we used a Dollar-Cost-Average strategy"}),Object(j.jsxs)(o.c,{children:["Bitcoin: $",E]}),Object(j.jsxs)(o.c,{children:["Ethereum: $",K]})]}),Object(j.jsxs)(o.a,{textAlign:"left",p:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Advantage compared to DCA"}),Object(j.jsxs)(o.c,{children:["Bitcoin: ",i[i.length-1].btcusd,"%"]}),Object(j.jsxs)(o.c,{children:["Ethereum: ",i[i.length-1].ethusd,"%"]})]}),Object(j.jsxs)(o.b,{flexDirection:["column","row"],children:[Object(j.jsxs)(o.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Advantage compared to DCA"}),Object(j.jsx)(o.c,{children:"(percentage dollars saved per coin)"}),Object(j.jsx)(h.a,{width:"100%",height:400,children:Object(j.jsxs)(O.a,{data:i,margin:{top:5,right:5,left:10,bottom:5},children:[Object(j.jsx)(x.a,{dataKey:"name"}),Object(j.jsx)(f.a,{}),Object(j.jsx)(p.a,{}),Object(j.jsx)(g.a,{}),Object(j.jsx)(v.a,{type:"monotone",dataKey:"btcusd",stroke:"orange",yAxisId:0}),Object(j.jsx)(v.a,{type:"monotone",dataKey:"ethusd",stroke:"#407aff",yAxisId:1})]})})]}),Object(j.jsxs)(o.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Bitcoin: coin amounts compared to DCA"}),Object(j.jsx)(h.a,{width:"100%",height:400,children:Object(j.jsxs)(A.a,{data:u,margin:{top:5,right:30,left:20,bottom:5},children:[Object(j.jsx)(g.a,{}),Object(j.jsx)(x.a,{dataKey:"name"}),Object(j.jsx)(y.a,{}),Object(j.jsx)(f.a,{}),Object(j.jsx)(p.a,{}),Object(j.jsx)(C.a,{dataKey:"btcusdActual",name:"actual",fill:"#8884d8"}),Object(j.jsx)(C.a,{dataKey:"btcusdComparison",name:"comparison",fill:"#82ca9d"})]})})]}),Object(j.jsxs)(o.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Ethereum: coin amounts compared to DCA"}),Object(j.jsx)(h.a,{width:"100%",height:400,children:Object(j.jsxs)(A.a,{width:400,height:400,data:u,margin:{top:5,right:30,left:20,bottom:5},children:[Object(j.jsx)(g.a,{}),Object(j.jsx)(x.a,{dataKey:"name"}),Object(j.jsx)(y.a,{}),Object(j.jsx)(f.a,{}),Object(j.jsx)(p.a,{}),Object(j.jsx)(C.a,{dataKey:"ethusdActual",name:"actual",fill:"#8884d8"}),Object(j.jsx)(C.a,{dataKey:"ethusdComparison",name:"comparison",fill:"#82ca9d"})]})})]})]})]})};var _=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(k,{}),Object(j.jsx)(u,{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,335)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),w()}},[[324,1,2]]]);
//# sourceMappingURL=main.c3418464.chunk.js.map