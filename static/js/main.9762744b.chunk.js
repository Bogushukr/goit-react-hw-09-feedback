(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,i){t.exports={Statistic:"Statistics_Statistic__3rbwe",Statistic__title:"Statistics_Statistic__title__b2sWF",Statistic__data:"Statistics_Statistic__data__2NbBq",Statistic__item:"Statistics_Statistic__item__2bTfS"}},,,function(t,e,i){t.exports={Section:"Section_Section__1kTEi",Section__title:"Section_Section__title__3PSV-"}},function(t,e,i){t.exports={FeedbackOptions:"FeedbackOptions_FeedbackOptions__31Voi",FeedbackOptions__button:"FeedbackOptions_FeedbackOptions__button__I_OnH"}},function(t,e,i){t.exports={Notification:"Notification_Notification__baOZO",Notification__title:"Notification_Notification__title__DR-Jg"}},,function(t,e,i){t.exports={App__title:"App_App__title__yysBe"}},,,,,,function(t,e,i){},,function(t,e,i){"use strict";i.r(e);var a=i(1),c=i.n(a),n=i(8),s=i.n(n),o=(i(14),i(15),i(3)),r=i(5),_=i.n(r),l=i(0);function b(t){var e=t.title,i=t.children;return Object(l.jsxs)("section",{className:_.a.Section,children:[Object(l.jsx)("h1",{className:_.a.Section__title,children:e}),i]})}b.defaultProps={title:"(empty)"};var d=i(2),u=i.n(d);function j(t){var e=t.good,i=t.neutral,a=t.bad,c=t.total,n=t.positivePercentage;return Object(l.jsx)("div",{className:u.a.Statistic,children:Object(l.jsxs)("ul",{className:u.a.Statistic__data,children:[Object(l.jsxs)("li",{className:u.a.Statistic__item,children:["Good: ",e]}),Object(l.jsxs)("li",{className:u.a.Statistic__item,children:["Neutral: ",i]}),Object(l.jsxs)("li",{className:u.a.Statistic__item,children:["Bad: ",a]}),Object(l.jsxs)("li",{className:u.a.Statistic__item,children:["Total: ",c]}),Object(l.jsxs)("li",{className:u.a.Statistic__item,children:["Positive feedback: ",n,"%"]})]})})}j.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var p=i(6),O=i.n(p);function f(t){var e=t.options,i=t.onLeaveFeedback;return Object(l.jsx)("div",{className:O.a.FeedbackOptions,children:e.map((function(t){return Object(l.jsx)("button",{className:O.a.FeedbackOptions__button,onClick:i,name:t,children:t},t)}))})}var S=i(7),m=i.n(S);function h(t){var e=t.message;return Object(l.jsx)("div",{className:m.a.Notification,children:Object(l.jsx)("p",{className:m.a.Notification__title,children:e})})}h.defaultProps={message:"(empty)"};var x=i(9),N=i.n(x);function k(){var t=Object(a.useState)(0),e=Object(o.a)(t,2),i=e[0],c=e[1],n=Object(a.useState)(0),s=Object(o.a)(n,2),r=s[0],_=s[1],d=Object(a.useState)(0),u=Object(o.a)(d,2),p=u[0],O=u[1],S=Object(a.useCallback)((function(t){switch(t.currentTarget.name){case"good":c((function(t){return t+1}));break;case"neutral":_((function(t){return t+1}));break;case"bad":O((function(t){return t+1}))}}),[]),m=function(){return[i,r,p].reduce((function(t,e){return t+e}),0)},x=m(),k=function(){var t=m(),e=i;return Math.round(e/t*100)}();return Object(l.jsxs)(b,{title:"Please leave feedback",children:[Object(l.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:S}),Object(l.jsx)("h2",{className:N.a.App__title,children:"Statistics"}),x>0?Object(l.jsx)(j,{good:i,neutral:r,bad:p,total:x,positivePercentage:k}):Object(l.jsx)(h,{message:"No feedback given"})]})}s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.9762744b.chunk.js.map