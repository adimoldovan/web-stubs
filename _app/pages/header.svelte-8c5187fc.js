import{S as H,i as N,s as I,L as D,j as g,k as S,m as v,n as j,o as w,f as $,x,u as k,v as C,d as f,A as M,e as p,t as E,c as m,a as _,g as A,b as h,H as d,M as P,N as V}from"../chunks/vendor-801df107.js";import{g as q}from"../chunks/utils-8b76e306.js";const B="2021-12-01 18:28:47 UTC";var L={buildDate:B};function R(c){let t,n,s,r,e,o,l=L.buildDate+"",i;return{c(){t=p("span"),n=E("web-stubs"),s=p("br"),r=S(),e=p("span"),o=E("built: "),i=E(l),this.h()},l(a){t=m(a,"SPAN",{class:!0});var u=_(t);n=A(u,"web-stubs"),u.forEach(f),s=m(a,"BR",{}),r=j(a),e=m(a,"SPAN",{class:!0});var b=_(e);o=A(b,"built: "),i=A(b,l),b.forEach(f),this.h()},h(){h(t,"class","brand"),h(e,"class","build-version")},m(a,u){$(a,t,u),d(t,n),$(a,s,u),$(a,r,u),$(a,e,u),d(e,o),d(e,i)},p:P,d(a){a&&f(t),a&&f(s),a&&f(r),a&&f(e)}}}function T(c){let t,n,s,r,e,o;return r=new V({props:{name:c[0]?"box-arrow-right":"box-arrow-in-right",class:"text-dark"}}),{c(){t=p("div"),n=p("a"),s=p("h2"),g(r.$$.fragment),this.h()},l(l){t=m(l,"DIV",{class:!0});var i=_(t);n=m(i,"A",{href:!0});var a=_(n);s=m(a,"H2",{});var u=_(s);v(r.$$.fragment,u),u.forEach(f),a.forEach(f),i.forEach(f),this.h()},h(){h(n,"href",e=c[0]?"/signout":"/signin"),h(t,"class","header-right")},m(l,i){$(l,t,i),d(t,n),d(n,s),w(r,s,null),o=!0},p(l,i){const a={};i&1&&(a.name=l[0]?"box-arrow-right":"box-arrow-in-right"),r.$set(a),(!o||i&1&&e!==(e=l[0]?"/signout":"/signin"))&&h(n,"href",e)},i(l){o||(x(r.$$.fragment,l),o=!0)},o(l){k(r.$$.fragment,l),o=!1},d(l){l&&f(t),C(r)}}}function U(c){let t,n,s,r;return t=new D({props:{$$slots:{default:[R]},$$scope:{ctx:c}}}),s=new D({props:{$$slots:{default:[T]},$$scope:{ctx:c}}}),{c(){g(t.$$.fragment),n=S(),g(s.$$.fragment)},l(e){v(t.$$.fragment,e),n=j(e),v(s.$$.fragment,e)},m(e,o){w(t,e,o),$(e,n,o),w(s,e,o),r=!0},p(e,[o]){const l={};o&2&&(l.$$scope={dirty:o,ctx:e}),t.$set(l);const i={};o&3&&(i.$$scope={dirty:o,ctx:e}),s.$set(i)},i(e){r||(x(t.$$.fragment,e),x(s.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),k(s.$$.fragment,e),r=!1},d(e){C(t,e),e&&f(n),C(s,e)}}}function z(c,t,n){let s;return M(()=>{n(0,s=q("auth"))}),[s]}class J extends H{constructor(t){super();N(this,t,z,U,I,{})}}export{J as default};
