(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={title:"Section_title__7U1yB"}},function(e,t,a){e.exports={button:"FeedbackOptions_button__3V6Sj"}},function(e,t,a){e.exports={options:"Statistics_options__3tleW"}},function(e,t,a){e.exports={message:"Notification_message__344_d"}},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),l=a(3),i=a(4),u=a(5),s=a(11),d=a(10),m=a(6),b=a.n(m);var p=function(e){var t=e.title,a=e.children;return c.a.createElement("section",null,c.a.createElement("h2",{className:b.a.title},t),a)},v=a(7),f=a.n(v);var k=function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement("div",null,t.map((function(e){return c.a.createElement("button",{key:e,type:"button",onClick:function(){return a(e)},className:f.a.button},e)})))},E=a(8),g=a.n(E);var h=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement("div",{className:g.a.options},c.a.createElement("p",null,"Good: ",t),c.a.createElement("p",null,"Neutral: ",a),c.a.createElement("p",null,"Bad: ",n),c.a.createElement("p",null,"Total: ",r),c.a.createElement("p",null,"Positive feedback: ",o,"%"))},_=a(9),F=a.n(_);var j=function(e){var t=e.message;return c.a.createElement("div",null,c.a.createElement("p",{className:F.a.message},t))},y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){return e.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(e,t){return Math.trunc(100*e/t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage(t,r),l=Object.keys(this.state);return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{title:"Please leave feedback"},c.a.createElement(k,{options:l,onLeaveFeedback:this.leaveFeedback})),c.a.createElement(p,{title:"Statistics"},r>0?c.a.createElement(h,{good:t,neutral:a,bad:n,total:r,positivePercentage:o}):c.a.createElement(j,{message:"No feedback given"})))}}]),a}(n.Component);a(17);o.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.6f7d26e1.chunk.js.map