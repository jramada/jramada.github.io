(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{J4bc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("Zttt"),s=a("Wbzz"),i=a("d+ly"),l=a.n(i),u=a("gGy4"),c=function(){var e=Object(u.c)().author;return o.a.createElement("div",{className:l.a.author},o.a.createElement("p",{className:l.a["author-text"]},o.a.createElement(s.Link,{to:"/pages/about"},o.a.createElement("em",null,o.a.createElement("b",null,e.name)))),o.a.createElement("p",{className:l.a.author__bio},e.bio.split("\n").join("  |  ")))},m=a("RPjP"),d=a.n(m),p=function(e){var t=e.postTitle,a=e.postSlug,n=Object(u.c)(),r=n.url,s=n.disqusShortname;return s?o.a.createElement(d.a,{shortname:s,identifier:t,title:t,url:r+a}):null},f=a("Mvws"),_=a.n(f),g=function(e){var t=e.body,a=e.title;return o.a.createElement("div",{className:_.a.content},o.a.createElement("h1",{className:_.a.content__title},a),o.a.createElement("div",{className:_.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},h=a("myfg"),b=a.n(h),y=function(e){var t=e.date;return o.a.createElement("div",{className:b.a.meta},o.a.createElement("p",{className:b.a.meta__date},"Published ",new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})))},v=a("WXWR"),E=a.n(v),w=function(e){var t=e.tags,a=e.tagSlugs;return o.a.createElement("div",{className:E.a.tags},o.a.createElement("ul",{className:E.a.tags__list},a&&a.map((function(e,a){return o.a.createElement("li",{className:E.a["tags__list-item"],key:t[a]},o.a.createElement(s.Link,{to:e,className:E.a["tags__list-item-link"]},t[a]))}))))},N=a("gt/k"),k=a.n(N),O=a("SNpf"),j=a("Ylc3"),S=function(e){var t=e.post,a=t.html,n=t.fields,r=n.tagSlugs,i=n.slug,l=t.frontmatter,m=l.tags,d=l.title,f=l.date,_=l.category,h=Object(u.c)(),b=h.copyright,v=h.terms,E=["finance","investment"].includes(_.toLowerCase());return o.a.createElement("div",{className:k.a.post},o.a.createElement("div",{className:k.a["post__home-block"]},o.a.createElement(s.Link,{className:k.a["post__home-button"],to:"/"},"All Articles"),E&&o.a.createElement(s.Link,{className:k.a["post__home-button"],to:"/the-reasonable-investor"},"The Reasonable Investor")),o.a.createElement("div",{className:k.a.post__content},o.a.createElement(g,{body:a,title:d})),o.a.createElement("div",{className:k.a.post__footer},o.a.createElement(y,{date:f}),o.a.createElement(c,null),m&&r&&o.a.createElement(w,{tags:m,tagSlugs:r}),o.a.createElement("div",{className:k.a.post__footer__copyrights_terms},o.a.createElement(O.a,{copyright:b}),o.a.createElement(j.a,{terms:v.text,url:v.url}))),o.a.createElement("div",{className:k.a.post__comments},o.a.createElement(p,{postSlug:i,postTitle:t.frontmatter.title})))};t.default=function(e){var t=e.data,a=Object(u.c)(),n=a.title,s=a.subtitle,i=t.markdownRemark.frontmatter,l=i.title,c=i.description,m=void 0===c?"":c,d=i.socialImage,p=m||s,f=null==d?void 0:d.publicURL;return o.a.createElement(r.a,{title:l+" - "+n,description:p,socialImage:f},o.a.createElement(S,{post:t.markdownRemark}))}},Mvws:function(e,t,a){e.exports={content:"Content-module--content--3p512",content__title:"Content-module--content__title--2BDW9",content__body:"Content-module--content__body--2TrQ-"}},RPjP:function(e,t,a){"use strict";e.exports=a("SLms")},SLms:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=i(a("q1tI")),s=i(a("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function d(e,t){var a=t.onNewComment,n=t.language,o=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var r in o)e.page[r]=o[r];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var p=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,a){return c.some((function(e){return e===a}))?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))}),{});return r.default.createElement("div",t,r.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),m=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};c.forEach((function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,t)},this.addDisqusScript())}}]),t}(r.default.Component);p.displayName="DisqusThread",p.propTypes={id:s.default.string,shortname:s.default.string.isRequired,identifier:s.default.string,title:s.default.string,url:s.default.string,category_id:s.default.string,onNewComment:s.default.func,language:s.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},WXWR:function(e,t,a){e.exports={tags:"Tags-module--tags--1L_ct",tags__list:"Tags-module--tags__list--91FqN","tags__list-item":"Tags-module--tags__list-item--1M30P","tags__list-item-link":"Tags-module--tags__list-item-link--3SL_8"}},"d+ly":function(e,t,a){e.exports={author:"Author-module--author--2Yefr","author-text":"Author-module--author-text--2Bw74",author__bio:"Author-module--author__bio--1Rnp-","author__bio-twitter":"Author-module--author__bio-twitter--n-O9n"}},"gt/k":function(e,t,a){e.exports={post__footer:"Post-module--post__footer--3WzWU",post__footer__copyrights_terms:"Post-module--post__footer__copyrights_terms--3WNqg",post__comments:"Post-module--post__comments--25y6I","post__home-block":"Post-module--post__home-block--2SgNt","post__home-button":"Post-module--post__home-button--16Kl0"}},myfg:function(e,t,a){e.exports={meta__date:"Meta-module--meta__date--29eD7"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-0c665d486f8f8d3ffe64.js.map