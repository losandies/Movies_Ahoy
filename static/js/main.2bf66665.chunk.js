(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{57:function(e,a,t){e.exports=t(80)},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},78:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),i=(t(62),t(4)),s=(t(63),t(95)),o=t(93),u=t(96),m=t(94),d=(t(64),function(e){var a=e.handleGenreSelect;return r.a.createElement("div",{className:"navbar"},r.a.createElement(s.a,{variant:"dark",bg:"transparent",expand:"lg",className:"navbar"},r.a.createElement(o.a,{fluid:!0},r.a.createElement(s.a.Brand,{href:"#home"},"MOVIES A'HOY"),r.a.createElement(s.a.Toggle,{"aria-controls":"navbar-dark-example"}),r.a.createElement(s.a.Collapse,{id:"navbar-dark-example"},r.a.createElement(u.a,null,r.a.createElement(m.a,{id:"nav-dropdown-dark-example",title:"Genres",menuVariant:"dark"},[{title:"Action/Adventure",id:28},{title:"Comedy",id:35},{title:"Drama",id:18},{title:"Thriller",id:53},{title:"Horror",id:27}].map((function(e){var t=e.title,n=e.id;return r.a.createElement(m.a.Item,{onClick:function(){return a(n,t)}},t)}))))))))}),h=(t(70),t(71),function(e){var a=e.title,t=e.poster_path,c=(e.vote_average,e.overview,e.id,Object(n.useState)(!1)),l=Object(i.a)(c,2);l[0],l[1];return t?r.a.createElement("div",null,r.a.createElement("div",{className:"movie-card"},r.a.createElement("img",{className:"thumbnail",src:"https://image.tmdb.org/t/p/w500/"+t,alt:a}),r.a.createElement("h5",{className:"result-title"},a))):r.a.createElement("div",{className:"no-photo-div"},r.a.createElement("div",{className:"movie-card"},r.a.createElement("img",{className:"no-image",src:"https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg",alt:a}),r.a.createElement("h3",{className:"result-title"},a)))}),v=t(5),f=(t(72),t(53)),p=t.n(f),E=function(e){var a=e.handleSearch,t=e.displaySearchResults;return r.a.createElement("form",{className:"search-container",onSubmit:function(e){e.preventDefault(),t()}},r.a.createElement("input",{type:"search",className:"search-bar",placeholder:"Search Movies",onChange:function(e){return a(e.target.value)}}),r.a.createElement(p.a,{className:"search-icon",color:"disabled",onClick:t}))},b=(t(78),["currentGenre"]),g=function(e){var a=e.currentGenre,t=Object(v.a)(e,b);return r.a.createElement("div",{className:"result-area"},r.a.createElement("div",{className:"result-header"},r.a.createElement("div",{className:"genre-name"},a),r.a.createElement("div",null,r.a.createElement(E,{className:"search-bar",displaySearchResults:t.displaySearchResults,handleSearch:t.handleSearch}))),r.a.createElement("div",{className:"results"},t.children))};var S=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)("spider"),s=Object(i.a)(l,2),o=s[0],u=s[1],m=Object(n.useState)(""),v=Object(i.a)(m,2),f=v[0],p=v[1],E=Object(n.useState)(""),b=Object(i.a)(E,2),S=b[0],N=b[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),k=(O[0],O[1],"https://api.themoviedb.org/3/search/movie?api_key=".concat("22701a046650518975b9defab51561ae","&query=").concat(o)),y="https://api.themoviedb.org/3/discover/movie?api_key=22701a046650518975b9defab51561ae&with_genres=".concat(f);Object(n.useEffect)((function(){w(f,S)}),[f,S]);var w=function(e,a){p(e),N(a),fetch(y).then((function(e){return e.json()})).then((function(e){console.log(e),c(e.results)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"app"},r.a.createElement(d,{handleGenreSelect:w}),r.a.createElement("div",{className:"content-area"},r.a.createElement(g,{currentGenre:S,displaySearchResults:function(){fetch(k).then((function(e){return e.json()})).then((function(e){console.log(e),c(e.results)})).catch((function(e){return console.log(e)}))},handleSearch:function(e){u(e)}},t.map((function(e){return r.a.createElement(h,Object.assign({key:e.id},e))})))))},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,97)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),c(e),l(e)}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),N()}},[[57,1,2]]]);
//# sourceMappingURL=main.2bf66665.chunk.js.map