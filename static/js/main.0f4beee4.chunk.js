(this["webpackJsonpdashboard-limit-buy-dca"]=this["webpackJsonpdashboard-limit-buy-dca"]||[]).push([[0],{181:function(t,e,n){},182:function(t,e,n){},324:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(66),r=n.n(s),i=(n(181),n(182),n(19)),o=n(15),j=n(2),u=function(){var t=Object(c.useState)(),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){n||fetch("https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/configuration").then((function(t){return t.json()})).then((function(t){a(t)}),(function(t){console.error(t)}))}),[n,a]),n?Object(j.jsxs)(o.a,{textAlign:"left",pl:"2",children:[Object(j.jsx)(o.c,{as:"h2",mb:"2",children:"Configuration"}),Object(j.jsxs)(o.a,{mb:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Limits"}),Object(j.jsxs)(o.c,{children:["Maximum daily spend: $",n.maximum_daily_spend]}),Object(j.jsxs)(o.c,{children:["Maximum weekly spend: $",n.maximum_weekly_spend]}),Object(j.jsxs)(o.c,{children:["Maximum monthly spend: $",n.maximum_monthly_spend]})]}),Object(j.jsxs)(o.a,{mb:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Orders"}),Object(j.jsxs)(o.c,{children:["Number of orders: ",n.num_orders]}),Object(j.jsxs)(o.c,{children:["Percentage interval down: ",100*n.interval_size,"%"]}),Object(j.jsxs)(o.c,{children:["Comparison dollar-cost-average amount: $",n.daily_dca_amount]})]})]}):null},d=n(46),m=n(39),l=n(27),b=n.n(l),h=n(327),O=n(328),x=n(92),f=n(75),p=n(72),g=n(332),y=n(168),k=n(333),v=n(93),A=n(172),C=n(170),_=function(){var t=Object(c.useState)(),e=Object(i.a)(t,2),n=e[0],a=e[1];if(Object(c.useEffect)((function(){n||fetch("https://a3u69qjuqd.execute-api.us-east-1.amazonaws.com/dev/stats").then((function(t){return t.json()})).then((function(t){a(t),console.log(t)}),(function(t){console.error(t)}))}),[n,a]),!n)return null;var s=Object(C.a)(n,(function(t){return b()(t.datetime).startOf("day").format()})),r=Object.values(s).map((function(t){return t.map((function(t){return{name:b()(t.datetime).format("MM/DD/YY"),savings:t.savings_percent,ticker:t.ticker}})).reduce((function(t,e){return Object(m.a)(Object(m.a)({},t),{},Object(d.a)({name:e.name},e.ticker,e.savings))}),{})})).sort((function(t,e){return b()(t.name)-b()(e.name)})),u=Object.values(s).map((function(t){return t.map((function(t){return{name:b()(t.datetime).format("MM/DD/YY"),actualCoinAmount:t.actual_coin_amount,comparisonCoinAmount:t.comparison_coin_amount,ticker:t.ticker}})).reduce((function(t,e){var n;return Object(m.a)(Object(m.a)({},t),{},(n={name:e.name},Object(d.a)(n,"".concat(e.ticker,"Actual"),e.actualCoinAmount),Object(d.a)(n,"".concat(e.ticker,"Comparison"),e.comparisonCoinAmount),n))}),{})})).sort((function(t,e){return b()(t.name)-b()(e.name)})),l=Object.values(s).map((function(t){return t.map((function(t){return{name:b()(t.datetime).format("MM/DD/YY"),totalSpend:t.total_spend,ticker:t.ticker}})).reduce((function(t,e){return Object(m.a)(Object(m.a)({},t),{},Object(d.a)({name:e.name},"".concat(e.ticker,"TotalSpend"),e.totalSpend))}),{})})).sort((function(t,e){return b()(t.name)-b()(e.name)})),_=Object.values(s).map((function(t){return t.map((function(t){return{name:b()(t.datetime).format("MM/DD/YY"),actualCoinAmount:t.actual_coin_amount,ticker:t.ticker}})).reduce((function(t,e){return Object(m.a)(Object(m.a)({},t),{},Object(d.a)({name:e.name},"".concat(e.ticker,"CoinAmount"),e.actualCoinAmount))}),{})})).sort((function(t,e){return b()(t.name)-b()(e.name)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(o.a,{textAlign:"left",p:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Dollars spent"}),Object(j.jsxs)(o.c,{children:["Bitcoin: $",l[l.length-1].btcusdTotalSpend]}),Object(j.jsxs)(o.c,{children:["Ethereum: $",l[l.length-1].ethusdTotalSpend]})]}),Object(j.jsxs)(o.a,{textAlign:"left",p:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Coins purchased"}),Object(j.jsxs)(o.c,{children:["Bitcoin: ",_[_.length-1].btcusdCoinAmount]}),Object(j.jsxs)(o.c,{children:["Ethereum: ",_[_.length-1].ethusdCoinAmount]})]}),Object(j.jsxs)(o.b,{flexDirection:["column","row"],children:[Object(j.jsxs)(o.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Advantage compared to DCA"}),Object(j.jsx)(o.c,{children:"(percentage dollars saved per coin)"}),Object(j.jsx)(h.a,{width:"100%",height:400,children:Object(j.jsxs)(O.a,{data:r,margin:{top:5,right:5,left:10,bottom:5},children:[Object(j.jsx)(x.a,{dataKey:"name"}),Object(j.jsx)(f.a,{}),Object(j.jsx)(p.a,{}),Object(j.jsx)(g.a,{stroke:"#f5f5f5"}),Object(j.jsx)(y.a,{type:"monotone",dataKey:"btcusd",stroke:"orange",yAxisId:0}),Object(j.jsx)(y.a,{type:"monotone",dataKey:"ethusd",stroke:"#407aff",yAxisId:1})]})})]}),Object(j.jsxs)(o.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Bitcoin: coin amounts compared to DCA"}),Object(j.jsx)(h.a,{width:"100%",height:400,children:Object(j.jsxs)(k.a,{data:u,margin:{top:5,right:30,left:20,bottom:5},children:[Object(j.jsx)(g.a,{strokeDasharray:"3 3"}),Object(j.jsx)(x.a,{dataKey:"name"}),Object(j.jsx)(v.a,{}),Object(j.jsx)(f.a,{}),Object(j.jsx)(p.a,{}),Object(j.jsx)(A.a,{dataKey:"btcusdActual",name:"actual",fill:"#8884d8"}),Object(j.jsx)(A.a,{dataKey:"btcusdComparison",name:"comparison",fill:"#82ca9d"})]})})]}),Object(j.jsxs)(o.a,{width:[1,1/3],mt:"2",mb:"2",children:[Object(j.jsx)(o.c,{as:"h3",children:"Ethereum: coin amounts compared to DCA"}),Object(j.jsx)(h.a,{width:"100%",height:400,children:Object(j.jsxs)(k.a,{width:400,height:400,data:u,margin:{top:5,right:30,left:20,bottom:5},children:[Object(j.jsx)(g.a,{strokeDasharray:"3 3"}),Object(j.jsx)(x.a,{dataKey:"name"}),Object(j.jsx)(v.a,{}),Object(j.jsx)(f.a,{}),Object(j.jsx)(p.a,{}),Object(j.jsx)(A.a,{dataKey:"ethusdActual",name:"actual",fill:"#8884d8"}),Object(j.jsx)(A.a,{dataKey:"ethusdComparison",name:"comparison",fill:"#82ca9d"})]})})]})]})]})};var D=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(_,{}),Object(j.jsx)(u,{})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,335)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),w()}},[[324,1,2]]]);
//# sourceMappingURL=main.0f4beee4.chunk.js.map