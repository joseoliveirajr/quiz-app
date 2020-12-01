(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{34:function(e,n,t){},36:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var s=t(2),r=t(0),i=t.n(r),c=t(15),a=t.n(c),o=(t(34),t(9)),u=t(10),l=t(12),h=t(11),j=(t(35),t(36),t(24)),d=t(8),b=t(14),p=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.handleBegin;return Object(s.jsxs)(d.a,{className:"content",children:[Object(s.jsx)("h1",{children:"Welcome to the Trivia Challenge!"}),Object(s.jsx)("p",{children:"You will be present with 10 True of False questions."}),Object(s.jsx)("p",{children:"Can you score 100%"}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(){return e()},children:"Begin"})]})}}]),t}(i.a.Component),O=t(16),f=t.n(O),m=t(17),v=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.question,n=this.props.handleAnswer,t=this.props.questionNumber;return Object(s.jsx)(d.a,{className:"content",children:Object(s.jsxs)(d.a,{md:12,children:[Object(s.jsx)("h3",{children:e.category}),Object(s.jsxs)(m.a,{children:[Object(s.jsxs)(m.a.Body,{children:[Object(s.jsx)(m.a.Text,{children:f.a.decode(e.question)}),Object(s.jsx)(b.a,{className:"answer-option",variant:"success",onClick:function(){return n("True")},children:"True"}),Object(s.jsx)(b.a,{className:"answer-option",variant:"danger",onClick:function(){return n("False")},children:"False"})]}),Object(s.jsxs)(m.a.Footer,{className:"text-muted",children:[t," of 10"]})]})]})})}}]),t}(i.a.Component),x=t(25),y=t(27),q=t(28),g=t(21),N=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.score,n=this.props.questions,t=this.props.handlePlayAgain;return Object(s.jsxs)(d.a,{className:"content",children:[Object(s.jsx)(y.a,{children:Object(s.jsx)(q.a,{md:12,children:Object(s.jsxs)("h2",{children:["You scored",Object(s.jsx)("br",{}),e," / 10"]})})}),Object(s.jsx)(g.a,{as:"ul",variant:"flush",className:"questions-list",children:n.map((function(e,n){return e.correct_answer===e.playerAnswer?Object(s.jsxs)(g.a.Item,{as:"li",eventKey:n,className:"item-list",children:[Object(s.jsx)("div",{className:"icon-list",children:Object(s.jsx)(x.a,{className:"icon-list",size:30,style:{color:"green"}})}),Object(s.jsx)("div",{children:f.a.decode(e.question)})]},n):Object(s.jsxs)(g.a.Item,{className:"item-list",children:[Object(s.jsx)("div",{className:"icon-list",children:Object(s.jsx)(x.b,{className:"icon-list",size:30,style:{color:"red"}})}),Object(s.jsx)("div",{children:f.a.decode(e.question)})]})}))}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(){return t()},children:"Play Again?"})]})}}]),t}(i.a.Component),k="https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",w=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var s;return Object(o.a)(this,t),(s=n.call(this,e)).state={screen:"loading",questionNumber:-1},s.score=0,s}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(k).then((function(e){return e.json()})).then((function(n){e.setState((function(e,n){return{screen:"home"}})),e.questions=n.results}))}},{key:"handleBegin",value:function(){this.setState((function(e,n){return{questionNumber:e.questionNumber+1,screen:"question"}}))}},{key:"handleAnswer",value:function(e){var n=this.state.questionNumber;this.questions[n].playerAnswer=e,this.questions[n].correct_answer===e&&this.score++,n+1===10?this.setState((function(e,n){return{screen:"score"}})):this.setState((function(e,t){return{questionNumber:n+1}}))}},{key:"handlePlayAgain",value:function(){var e=this;this.setState((function(e,n){return{screen:"loading"}})),fetch(k).then((function(e){return e.json()})).then((function(n){e.setState((function(e,n){return{screen:"home",questionNumber:-1}})),e.score=0,e.questions=n.results}))}},{key:"renderLoading",value:function(){return Object(s.jsx)(d.a,{className:"content",children:Object(s.jsx)("p",{children:"Loading..."})})}},{key:"renderHome",value:function(){var e=this;return Object(s.jsx)(p,{handleBegin:function(){return e.handleBegin()}})}},{key:"renderQuestion",value:function(){var e=this,n=this.state.questionNumber,t=this.questions[n];return Object(s.jsx)(v,{question:t,handleAnswer:function(n){return e.handleAnswer(n)},questionNumber:n+1})}},{key:"renderScore",value:function(){var e=this,n=this.questions,t=this.score;return Object(s.jsx)(N,{questions:n,score:t,handlePlayAgain:function(){return e.handlePlayAgain()}})}},{key:"render",value:function(){var e=this,n=this.state.screen;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(s.jsx)(j.a.Brand,{href:"\\",children:"QuizApp"})}),"loading"===n?e.renderLoading():"home"===n?e.renderHome():"question"===n?e.renderQuestion():"score"===n?e.renderScore():void 0]})}}]),t}(i.a.Component),A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,s=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),s(e),r(e),i(e),c(e)}))};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),A()}},[[42,1,2]]]);
//# sourceMappingURL=main.6cb8ccd6.chunk.js.map