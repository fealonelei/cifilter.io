(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,n,t){"use strict";t.r(n);t(145),t(146),t(81);var r=t(7),a=t.n(r),i=t(143),l=t.n(i),o=t(0),c=t.n(o),u=t(144),s=t(161),d=t(149),f=t(163),h=t.n(f),p=function(){return c.a.createElement(d.StaticQuery,{query:"4145719641",render:function(e){return c.a.createElement(h.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})},m=t(159);function g(){var e=l()(["\n    color: #F5BD5D;\n    cursor: pointer;\n\n    &:hover {\n        text-decoration: underline;\n    }\n"]);return g=function(){return e},e}function v(){var e=l()(["\n    flex: 10;\n\n    display: flex;\n    flex-direction: horizontal;\n    justify-content: flex-end;\n    align-items: center;\n"]);return v=function(){return e},e}function y(){var e=l()(["\n    flex: 2;\n\n    display: flex;\n    flex-direction: horizontal;\n    align-items: center;\n"]);return y=function(){return e},e}function b(){var e=l()(["\n    font-size: 20px;\n    font-weight: bold;\n    display: inline-block;\n"]);return b=function(){return e},e}function x(){var e=l()(["\n    width: 100%;\n    display: flex;\n    flex-direction: horizontal;\n"]);return x=function(){return e},e}function C(){var e=l()(["\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n"]);return C=function(){return e},e}var E=u.b.div(C()),A=u.b.nav(x()),w=u.b.div(b()),I=u.b.div(y()),S=u.b.div(v()),k=u.b.a(g()),F=function(e){return c.a.createElement(A,{className:"padding--md"},c.a.createElement(I,null,c.a.createElement(E,{className:"margin-right--sm"},c.a.createElement(p,null)),c.a.createElement(w,null,"CIFilter.io")),c.a.createElement(S,null,c.a.createElement(k,{className:"margin-right--md"},"ABOUT"),c.a.createElement(k,{className:"margin-right--md"},"SUPPORT"),c.a.createElement(k,{className:"margin-right--md"},c.a.createElement(m.d,{size:"24"})),c.a.createElement(k,null,c.a.createElement(m.a,{size:"24"}))))};t(49),t(172),t(173),t(91),t(176),t(179),t(180),t(183),t(90),t(55),t(89),t(184);function N(){var e=l()(["\n    color: #ccc;\n    cursor: pointer;\n    display: flex;\n"]);return N=function(){return e},e}function R(){var e=l()(["\n    margin: 0;\n    padding: 0;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none;\n\n    font-size: 14px;\n    line-height: 16px;\n    height: 16px;\n    color: #666666;\n    resize: none;\n\n    &:focus {\n        outline: none;\n    }\n    flex: 1\n"]);return R=function(){return e},e}function z(){var e=l()(["\n    border: 1px solid #cccccc;\n    border-radius: 3px;\n    background-color: white;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"]);return z=function(){return e},e}var O=u.b.div(z()),D=u.b.textarea(R()),q=u.b.div(N()),H=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={text:""},t.input=c.a.createRef(),t}a()(n,e);var t=n.prototype;return t.handleChange=function(e){var n=e.target.value;this.setState({text:n}),this.props.onChange(n)},t.handleClear=function(){this.input.current.value="",this.setState({text:""}),this.props.onChange(""),this.input.current.focus()},t.render=function(){return c.a.createElement(O,null,c.a.createElement(m.c,{size:"16",className:"margin-right--sm"}),c.a.createElement(D,{ref:this.input,onChange:this.handleChange.bind(this)}),this.state.text.length>0&&c.a.createElement(q,null,c.a.createElement(m.b,{size:"16",style:{color:"#ccc"},onClick:this.handleClear.bind(this),placeholder:"HEyyy"})))},n}(c.a.Component);function B(){var e=l()(["\n    margin: 0 24px;\n    width: 80%;\n"]);return B=function(){return e},e}function Q(){var e=l()(["\n    margin: 24px;\n    &:first-child {\n        margin-top: 0;\n    }\n"]);return Q=function(){return e},e}function j(){var e=l()(["\n    font-weight: bold;\n    font-size: 18px;\n"]);return j=function(){return e},e}function T(){var e=l()(["\n            color: #F5BD5D;\n            border-left: 2px solid #F5BD5D;\n        "]);return T=function(){return e},e}function U(){var e=l()(["\n        color: #F5BD5D;\n        border-left: 2px solid #F5BD5D;\n    "]);return U=function(){return e},e}function G(){var e=l()(["\n    font-size: 14px;\n    color: #a4a4a4;\n    padding: 5px 0 5px 8px;\n    border-left: 2px solid #dddddd;\n    cursor: pointer;\n\n    ",";\n\n    &:hover {\n        border-left: 2px solid #a4a4a4;\n        color: #666666;\n\n        ",";\n    }\n"]);return G=function(){return e},e}function W(){var e=l()(["\n    width: 350px;\n    height: 100%;\n    overflow-y: scroll;\n    padding-bottom: 48px;\n"]);return W=function(){return e},e}var P=["CICategoryBlur","CICategoryColorAdjustment","CICategoryColorEffect","CICategoryCompositeOperation","CICategoryDistortionEffect","CICategoryGenerator","CICategoryGeometryAdjustment","CICategoryGradient","CICategoryHalftoneEffect","CICategoryReduction","CICategorySharpen","CICategoryStylize","CICategoryTileEffect","CICategoryTransition"];function X(e,n){var t=new Set,r=n,a=Array.isArray(r),i=0;for(r=a?r:r[Symbol.iterator]();;){var l;if(a){if(i>=r.length)break;l=r[i++]}else{if((i=r.next()).done)break;l=i.value}var o=l;e.has(o)&&t.add(o)}return t}var J=function(e,n,t){var r=new Map,a=new Set(n.concat(["Other"])),i=a,l=Array.isArray(i),o=0;for(i=l?i:i[Symbol.iterator]();;){var c;if(l){if(o>=i.length)break;c=i[o++]}else{if((o=i.next()).done)break;c=o.value}var u=c;r.set(u,[])}var s=e,d=Array.isArray(s),f=0;for(s=d?s:s[Symbol.iterator]();;){var h;if(d){if(f>=s.length)break;h=s[f++]}else{if((f=s.next()).done)break;h=f.value}var p=h;if(t(p.name)){var m=X(a,new Set(p.categories));if(m.size>0){var g=m.values().next().value,v=r.get(g);v.push(p.name),r.set(g,v)}else{var y=r.get("Other");y.push(p.name),r.set("Other",y)}}}var b=a,x=Array.isArray(b),C=0;for(b=x?b:b[Symbol.iterator]();;){var E;if(x){if(C>=b.length)break;E=b[C++]}else{if((C=b.next()).done)break;E=C.value}var A=E;0==r.get(A).length&&r.delete(A)}return r},M=u.b.div(W()),Y=u.b.div(G(),function(e){return e.highlighted&&Object(u.a)(U())},function(e){return e.highlighted&&Object(u.a)(T())}),L=u.b.div(j()),V=u.b.div(Q()),K=u.b.div(B()),Z=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).state={groupedFilters:J(n.props.filters,P,function(e){return!0}),selectedFilterName:null},n}a()(n,e);var t=n.prototype;return t.handleSearchBarChange=function(e){this.setState({groupedFilters:J(this.props.filters,P,function(n){return n.toLowerCase().includes(e.toLowerCase())})})},t.handleFilterClick=function(e){this.props.onSelectFilter(e),this.setState({selectedFilterName:e})},t.renderFilterNames=function(e){var n=this;return c.a.createElement("ul",null,e.map(function(e){return c.a.createElement(Y,{key:e,onClick:n.handleFilterClick.bind(n,e),highlighted:n.state.selectedFilterName==e},e)}))},t.renderEntry=function(e,n){return c.a.createElement(V,{key:e},c.a.createElement(L,{className:"margin-bottom--sm"},e),this.renderFilterNames(n))},t.render=function(){var e,n,t,r=this;return c.a.createElement(M,null,c.a.createElement(K,null,c.a.createElement(H,{onChange:this.handleSearchBarChange.bind(this)})),(e=this.state.groupedFilters,n=function(e,n,t){return r.renderEntry(n,e)},t=[],e.forEach(function(e,r,a){t.push(n(e,r,a))}),t))},n}(c.a.Component);function $(){var e=l()(["\n    font-size: 38px;\n    font-weight: bold;\n"]);return $=function(){return e},e}function _(){var e=l()(["\n    width: 700px;\n    height: 100%;\n    overflow-y: scroll;\n    padding-bottom: 48px;\n"]);return _=function(){return e},e}var ee=u.b.div(_()),ne=u.b.div($()),te=function(e){return e.filter?c.a.createElement(ee,null,c.a.createElement(ne,null,e.filter.name),c.a.createElement("p",null,e.filter.description),c.a.createElement("p",null,"Available iOS: ",e.filter.availableIOS),c.a.createElement("p",null,"Available Mac: ",e.filter.availableMac),c.a.createElement("h3",{className:"margin-top--md"},"Categories"),c.a.createElement("ul",null,e.filter.categories.map(function(e){return c.a.createElement("li",{className:"margin-left--sm",key:e},e)})),c.a.createElement("h3",{className:"margin-top--md"},"Parameters"),c.a.createElement("ul",null,e.filter.parameters.map(function(e){return c.a.createElement("li",{className:"margin-left--sm",key:e.name},c.a.createElement("h4",{className:"margin-top--sm"},e.name),c.a.createElement("div",null,"Class: ",e.classType),c.a.createElement("div",null,"Description: ",e.description||"No description provided."))}))):c.a.createElement(ee,null,"Ain't nothin here")};function re(){var e=l()(["\n    margin: 48px auto 0 auto;\n    flex-grow: 1;\n\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n"]);return re=function(){return e},e}function ae(){var e=l()(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    height: 100vh;\n"]);return ae=function(){return e},e}var ie=u.b.div(ae()),le=u.b.div(re()),oe=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).state={selectedFilter:null},n}a()(n,e);var t=n.prototype;return t.handleFilterSelected=function(e){var n=this.props.pageContext.filters.filter(function(n){return n.name==e})[0];this.setState({selectedFilter:n})},t.render=function(){return c.a.createElement(ie,null,c.a.createElement(F,null),c.a.createElement(le,null,c.a.createElement(Z,{filters:this.props.pageContext.filters,onSelectFilter:this.handleFilterSelected.bind(this),className:"margin-right--md"}),c.a.createElement(te,{filter:this.state.selectedFilter})))},n}(c.a.Component);n.default=oe},149:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return f}),t.d(n,"StaticQuery",function(){return h});var r=t(0),a=t.n(r),i=t(4),l=t.n(i),o=t(142),c=t.n(o);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return o.withPrefix}),t.d(n,"navigate",function(){return o.navigate}),t.d(n,"push",function(){return o.push}),t.d(n,"replace",function(){return o.replace}),t.d(n,"navigateTo",function(){return o.navigateTo});var u=t(152),s=t.n(u);t.d(n,"PageRenderer",function(){return s.a});var d=t(46);t.d(n,"parsePath",function(){return d.a});var f=a.a.createContext({}),h=function(e){return a.a.createElement(f.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,n,t){var r;e.exports=(r=t(162))&&r.default||r},161:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACFUlEQVQ4y5VUXW/aMBRl9GVqVcRUvso2aW1/QJ/3W2qHtv+yJYFp43lie97DnugmtVBKbFJKoOc61yQOsIlIR9dJro99r89xobDhCduysOszud0wJ+pfFUI/+aECeQAcqUBUkmjHzjvFqurI0kZS/HzDkRK/AxNMekQcJxCM1Tv+iQjjn7ojyyuiWe/akAF7TPgRGM6/tpaIy2knheYYdT0znn+7pJx7HchmWn9b5Hd6DIyIUOcIp0yEncXImT9/8YhwgLyGQ4aPJaCOHr5DPOWSnzBxSOQpzHtIOydSJrwD4XF2R0TWB9kA+ItxD/gEfMAkIj9hYCzeI34GZkRqCVWOsA4sXlDismd6MkRZ1W0SCX1RAqZbCcNA1gCtfLGgHnFPmrzYHh8YIOyhNUAY/WuHNcBZ0fbESiknq7X8/xKqHQmdQ8H2a7kS/qi05GJasizantsWRd2cbLYQDsgtWw8lkBVgQblxIuwHR9jZEnjFB+Ach3BovLryriQvl9lJv5Qvx5AZafKHYz1LSE5AwiIRrVSujw2sd/sq8KrIrbDkzOWg+GIxssFHrROiGOXH1nI6Yzta6CXx90h3WvuOXX3p9ISaHM/QE9IhlU3R8TCRg5AvDAjfK2UObe3aIv/+RjkTSs74NhPNGP+ESq4r7y3PdcnGN6vLoYHkM+Ak9e6mMeXICqsD8y7WZTC+FTtf+U7PMs8rF/TpXHiJxWwAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/logo-1dc73dbee4f526e1455e71349fb6e9c2-b5bbd.png",srcSet:"/static/logo-1dc73dbee4f526e1455e71349fb6e9c2-f1868.png 75w,\n/static/logo-1dc73dbee4f526e1455e71349fb6e9c2-b5bbd.png 125w",sizes:"(max-width: 125px) 100vw, 125px"}}}}}},162:function(e,n,t){"use strict";t.r(n);t(39);var r=t(0),a=t.n(r),i=t(4),l=t.n(i),o=t(70),c=t(2),u=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(o.a,Object.assign({location:n,pageResources:t},t.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},n.default=u}}]);
//# sourceMappingURL=component---src-templates-main-jsx-09f8966c3144c77d8534.js.map