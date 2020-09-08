(this["webpackJsonpeta-prototype"]=this["webpackJsonpeta-prototype"]||[]).push([[0],{43:function(e,t,a){e.exports=a(71)},53:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),l=a(15),n=a.n(l),i=a(17),s=a(10),m=a(2),o=a(32),d=a(33),u=a(42),p=a(40),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("a",{href:"/"},r.a.createElement("div",{className:"eta-title-wrapper"},r.a.createElement("h1",{display:"inline",className:"eta-title"},r.a.createElement("img",{className:"eta-icon",src:this.props.icon,alt:"\uc5d0\ud0c0 \uc544\uc774\ucf58",width:"35"})," ",this.props.title)),r.a.createElement("div",null,r.a.createElement("h6",{className:"eta-title-description"},"\ub300\ucda9 Every Time Archiver \ub77c\ub294 \ub73b"))))}}]),a}(c.Component);v.defaultProps={title:"ETA",icon:"https://everytime.kr/images/about/logo.png"};var E=v,h=a(34),f=a.n(h);var N=function(e){var t=e.article,a=t.author,c=t.content,l=t.likes,n=t.scraps,i=e.article.comments.length,m=f()("https://everytime.kr/382283","v",e.article.id.toString());return r.a.createElement("div",{className:"card article-card"},r.a.createElement("p",{className:"article-card-author"},"\uc791\uc131\uc790: ",a),r.a.createElement("p",{className:"article-card-content"},c),r.a.createElement("li",{className:"article-card-status"},r.a.createElement("ul",{className:"article-card-likes"},l),r.a.createElement("ul",{className:"article-card-scraps"},n),r.a.createElement("ul",{className:"article-card-comments-length"},i)),r.a.createElement("button",{className:"go-to-eta",onClick:function(){window.open(m,"_blank")}},"\uc5d0\ud0c0 \uac8c\uc2dc\uae00\ub85c \uac00\uae30"),r.a.createElement(s.b,{to:"/article/".concat(e.article.id),className:"go-to-detail"},"\uc0c1\uc138\ubcf4\uae30"))},b=a(9);var g=Object(b.b)()((function(e){var t=e.articles;return t.length>0?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"article-container"},t.map((function(e){return r.a.createElement(N,{key:e.id,article:e})}))),r.a.createElement("div",{className:"prev-next"},r.a.createElement("div",{className:"prev-next-btns"},r.a.createElement("button",{onClick:e.onClickPrev},"<"),r.a.createElement("button",{onClick:e.onClickNext},">")))):r.a.createElement("div",{className:"container article-container"})})),k=(a(53),a(36)),y=a.n(k),j="FETCH_ARTICLES",O=a(37);var w=Object(b.b)((function(e){return{articles:e.articles}}))((function(e){console.log(e);var t=Object(c.useState)(null),a=Object(i.a)(t,2),l=a[0],n=a[1];Object(c.useEffect)((function(){var t,a=Object(O.a)(e.articles);try{for(a.s();!(t=a.n()).done;){var c=t.value;if(c.id.toString()===e.match.params.id)return void n(c)}}catch(r){a.e(r)}finally{a.f()}}),[e.articles]);var m=function(e){var t=document.createElement("div");return t.innerHTML=e,console.log(Array.from(t.childNodes)),0===t.childNodes.length?"":Array.from(t.childNodes).map((function(e){return e.nodeValue?e.data:e.outerHTML})).reduce((function(e,t){return e+t}))};if(l){var o=l.author,d=l.content,u=l.comments,p=l.likes,v=l.scraps,E=l.comments.length;return r.a.createElement("div",{className:"container article-detail-container"},r.a.createElement("div",{className:"article-detail-upper"},r.a.createElement("div",{className:"article-detail-upper-left"},r.a.createElement("div",{className:"article-detail-author",dangerouslySetInnerHTML:{__html:m(o)}}),r.a.createElement("div",{className:"article-detail-content",dangerouslySetInnerHTML:{__html:m(d)}})),r.a.createElement("div",{className:"article-detail-upper-right"},r.a.createElement(s.b,{to:"/",className:"article-detail-back"},"<"))),r.a.createElement("div",{className:"article-detail-status-wrapper"},r.a.createElement("ul",{className:"article-detail-status"},r.a.createElement("li",{className:"article-detail-likes"},p),r.a.createElement("li",{className:"article-detail-scraps"},v),r.a.createElement("li",{className:"article-detail-comments-length"},E))),u.map((function(e){var t=m(e.author)+"  "+m(e.content);return e.isChild?r.a.createElement("div",{className:"article-detail-comment-wrapper comment-child"},r.a.createElement("div",{className:"article-detail-comment",dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("div",{className:"article-detail-comment-like"},r.a.createElement("span",null,e.likes))):r.a.createElement("div",{className:"article-detail-comment-wrapper comment-parent"},r.a.createElement("div",{className:"article-detail-comment  ",dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("div",{className:"article-detail-comment-like"},r.a.createElement("span",null,e.likes)))})))}return r.a.createElement("div",{className:"container article-detail-container"})}));var C=Object(b.b)((function(e){return{articles:e.articles}}),{fetchArticles:function(e){return function(e,t){y.a.get("https://every-time-archiver-api.herokuapp.com/api/v1/articles/382283").then((function(t){var a=t.data.data;e({type:j,payload:a})}))}}})((function(e){var t=Object(c.useState)(0),a=Object(i.a)(t,2),l=a[0],n=a[1];return Object(c.useEffect)((function(){e.fetchArticles(l)}),[]),r.a.createElement(s.a,null,r.a.createElement("div",{className:"spacing"},r.a.createElement(s.b,{to:"/"},r.a.createElement(E,null))),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(g,{articles:e.articles.slice(l,l+9),onClickPrev:function(){l-9<0||n(l-9)},onClickNext:function(){e.articles.length<l+9||n(l+9)}})),r.a.createElement(m.a,{path:"/article/:id",render:function(e){return r.a.createElement(w,e)}})))})),T=a(8),S=a(38),_=a(39),A=a(41),H=[],L=Object(T.combineReducers)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(A.a)(Object.values(t.payload));default:return e}}}),M=Object(T.createStore)(L,Object(S.composeWithDevTools)(Object(T.applyMiddleware)(_.a)));n.a.render(r.a.createElement(b.a,{store:M},r.a.createElement(C,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ca3be1cd.chunk.js.map