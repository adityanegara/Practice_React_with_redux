(this.webpackJsonptime_manage=this.webpackJsonptime_manage||[]).push([[0],{13:function(e,c,t){},15:function(e,c,t){},22:function(e,c,t){},23:function(e,c,t){},24:function(e,c,t){"use strict";t.r(c);var a=t(2),i=t.n(a),s=t(8),n=t(1),o=(t(13),t(0)),l=function(e){var c=e.img,t=e.name,a=e.timeSelected,i=e.onDaySelected,s=e.onWeekSelected,n=e.onMonthSelected,l=function(e){return e===a?"button-active":""};return Object(o.jsxs)("div",{className:"profile",children:[Object(o.jsxs)("div",{className:"profile-section",children:[Object(o.jsx)("div",{className:"profile-image",children:Object(o.jsx)("img",{src:c})}),Object(o.jsxs)("div",{className:"profile-name",children:[Object(o.jsx)("p",{children:"Report for"}),Object(o.jsx)("p",{children:t})]})]}),Object(o.jsxs)("div",{className:"profile-selector",children:[Object(o.jsx)("button",{className:l("DAY_SELECTED"),onClick:function(){i()},children:"Daily"}),Object(o.jsx)("button",{className:l("WEEK_SELECTED"),onClick:function(){s()},children:"Weekly"}),Object(o.jsx)("button",{className:l("MONTH_SELECTED"),onClick:function(){n()},children:"Monthly"})]})]})},r=(t(15),function(e){var c=e.activity,t=e.selectedTime;return"WEEK_SELECTED"===t?Object(o.jsxs)("div",{className:"activity",style:{backgroundColor:"".concat(c.backgroundColor)},children:[Object(o.jsx)("div",{style:{backgroundColor:"".concat(c.backgroundColor),backgroundImage:"url(".concat(c.backgroundImage,")")},className:"activity-background"}),Object(o.jsxs)("div",{className:"activity-info",children:[Object(o.jsxs)("div",{className:"activity-name",children:[Object(o.jsx)("p",{children:c.name}),Object(o.jsx)("div",{className:"activity-satay",children:Object(o.jsx)("img",{src:"./images/icon-ellipsis.svg"})})]}),Object(o.jsxs)("div",{className:"activity-time",children:[Object(o.jsxs)("p",{children:[c.time.week,"hrs"]}),Object(o.jsxs)("p",{children:["Last Week - ",c.time.lastWeek,"hrs"]})]})]})]}):"DAY_SELECTED"===t?Object(o.jsxs)("div",{className:"activity",style:{backgroundColor:"".concat(c.backgroundColor)},children:[Object(o.jsx)("div",{style:{backgroundColor:"".concat(c.backgroundColor),backgroundImage:"url(".concat(c.backgroundImage,")")},className:"activity-background"}),Object(o.jsxs)("div",{className:"activity-info",children:[Object(o.jsxs)("div",{className:"activity-name",children:[Object(o.jsx)("p",{children:c.name}),Object(o.jsx)("div",{className:"activity-satay",children:Object(o.jsx)("img",{src:"./images/icon-ellipsis.svg"})})]}),Object(o.jsxs)("div",{className:"activity-time",children:[Object(o.jsxs)("p",{children:[c.time.day,"hrs"]}),Object(o.jsxs)("p",{children:["Last Day - ",c.time.lastDay,"hrs"]})]})]})]}):Object(o.jsxs)("div",{className:"activity",style:{backgroundColor:"".concat(c.backgroundColor)},children:[Object(o.jsx)("div",{style:{backgroundColor:"".concat(c.backgroundColor),backgroundImage:"url(".concat(c.backgroundImage,")")},className:"activity-background"}),Object(o.jsxs)("div",{className:"activity-info",children:[Object(o.jsxs)("div",{className:"activity-name",children:[Object(o.jsx)("p",{children:c.name}),Object(o.jsx)("div",{className:"activity-satay",children:Object(o.jsx)("img",{src:"./images/icon-ellipsis.svg"})})]}),Object(o.jsxs)("div",{className:"activity-time",children:[Object(o.jsxs)("p",{children:[c.time.month,"hrs"]}),Object(o.jsxs)("p",{children:["Last Month - ",c.time.lastMonth,"hrs"]})]})]})]})}),d=t(3),m=(t(22),Object(d.b)((function(e){return{activity:e.activity}}),{})((function(e){Object(n.useEffect)((function(){console.log(e)}));var c,t;return Object(o.jsx)("div",{className:"activity-list",children:(c=e.activity,t=e.timeSelected,console.log(t),c.map((function(e){return Object(o.jsx)(r,{activity:e,selectedTime:t},e.id)})))})}))),j=function(){var e=Object(n.useState)("WEEK_SELECTED"),c=Object(s.a)(e,2),t=c[0],a=c[1];return Object(o.jsxs)("div",{className:"dashboard",children:[Object(o.jsx)(l,{name:"Aditya Negara",img:"./images/profile-adit.png",onDaySelected:function(){a("DAY_SELECTED")},onWeekSelected:function(){a("WEEK_SELECTED")},onMonthSelected:function(){a("MONTH_SELECTED")},timeSelected:t}),Object(o.jsx)(m,{timeSelected:t})]})},b=(t(23),t(4)),g=Object(b.a)({activity:function(){return[{name:"Work",backgroundImage:"./images/icon-work.svg",backgroundColor:"#FF8B64",id:1,time:{day:7,lastDay:8,week:32,lastWeek:30,month:128,lastMonth:110}},{name:"Play",backgroundImage:"./images/icon-play.svg",backgroundColor:"#56C2E6",id:2,time:{day:2,lastDay:1,week:10,lastWeek:11,month:40,lastMonth:38}},{name:"Study",backgroundImage:"./images/icon-study.svg",backgroundColor:"#FF5E7D",id:3,time:{day:1,lastDay:1,week:7,lastWeek:6,month:28,lastMonth:24}},{name:"Excercise",backgroundImage:"./images/icon-exercise.svg",backgroundColor:"#4BCF83",id:4,time:{day:2,lastDay:1,week:10,lastWeek:9,month:40,lastMonth:36}},{name:"Social",backgroundImage:"./images/icon-social.svg",backgroundColor:"#7235D1",id:5,time:{day:1,lastDay:1,week:5,lastWeek:7,month:20,lastMonth:28}},{name:"Self Care",backgroundImage:"./images/icon-self-care.svg",backgroundColor:"#F1C75B",id:6,time:{day:1,lastDay:1,week:6,lastWeek:7,month:24,lastMonth:23}}]},selectedTime:function(){return"MONTH_SELECTED"}});i.a.render(Object(o.jsx)(d.a,{store:Object(b.b)(g),children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.50d5aa8d.chunk.js.map