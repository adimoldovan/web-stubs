import{S as ne,i as le,s as fe,t as L,g as I,f as c,N as q,d as m,M as Q,R as $e,e as P,k as M,j as v,c as R,a as j,n as N,m as w,b as V,F,o as k,x as d,u as S,Q as ue,v as C,A as ae,V as oe,W,X as ie,h as T,Y as U,T as pe,Z as X,_ as Y,l as G,$ as B,a0 as Z,a1 as z,a2 as J,a3 as K,O as y}from"../chunks/vendor-09fe208e.js";import{u as D}from"../chunks/users-6aef1d13.js";import{g as me,s as _e}from"../chunks/utils-8b76e306.js";import{b as H}from"../chunks/paths-28a87002.js";function x($,t,r){const s=$.slice();return s[12]=t[r],s}function ee($){let t,r=$[12].username+"",s,n,l=$[12].password+"",i,u;return{c(){t=L("["),s=L(r),n=L("/"),i=L(l),u=L("]")},l(e){t=I(e,"["),s=I(e,r),n=I(e,"/"),i=I(e,l),u=I(e,"]")},m(e,a){c(e,t,a),c(e,s,a),c(e,n,a),c(e,i,a),c(e,u,a)},p:q,d(e){e&&m(t),e&&m(s),e&&m(n),e&&m(i),e&&m(u)}}}function ce($){let t,r,s;return{c(){t=L("No account yet? Register one "),r=P("a"),s=L("here"),this.h()},l(n){t=I(n,"No account yet? Register one "),r=R(n,"A",{href:!0});var l=j(r);s=I(l,"here"),l.forEach(m),this.h()},h(){V(r,"href",""+(H+"/signup"))},m(n,l){c(n,t,l),c(n,r,l),F(r,s)},p:q,d(n){n&&m(t),n&&m(r)}}}function te($){let t,r;return{c(){t=P("small"),r=L($[0]),this.h()},l(s){t=R(s,"SMALL",{class:!0});var n=j(t);r=I(n,$[0]),n.forEach(m),this.h()},h(){V(t,"class","form-error")},m(s,n){c(s,t,n),F(t,r)},p(s,n){n&1&&T(r,s[0])},d(s){s&&m(t)}}}function ge($){let t;return{c(){t=L("Username")},l(r){t=I(r,"Username")},m(r,s){c(r,t,s)},d(r){r&&m(t)}}}function be($){let t,r;return t=new y({props:{name:"person"}}),{c(){v(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,n){k(t,s,n),r=!0},p:q,i(s){r||(d(t.$$.fragment,s),r=!0)},o(s){S(t.$$.fragment,s),r=!1},d(s){C(t,s)}}}function he($){let t,r,s,n,l;t=new Z({props:{$$slots:{default:[be]},$$scope:{ctx:$}}});function i(e){$[7](e)}let u={id:"user"};return $[1].user!==void 0&&(u.value=$[1].user),s=new B({props:u}),z.push(()=>J(s,"value",i)),s.$on("change",$[5]),s.$on("blur",$[5]),{c(){v(t.$$.fragment),r=M(),v(s.$$.fragment)},l(e){w(t.$$.fragment,e),r=N(e),w(s.$$.fragment,e)},m(e,a){k(t,e,a),c(e,r,a),k(s,e,a),l=!0},p(e,a){const _={};a&32768&&(_.$$scope={dirty:a,ctx:e}),t.$set(_);const f={};!n&&a&2&&(n=!0,f.value=e[1].user,K(()=>n=!1)),s.$set(f)},i(e){l||(d(t.$$.fragment,e),d(s.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),S(s.$$.fragment,e),l=!1},d(e){C(t,e),e&&m(r),C(s,e)}}}function se($){let t,r=$[2].user+"",s;return{c(){t=P("small"),s=L(r),this.h()},l(n){t=R(n,"SMALL",{class:!0});var l=j(t);s=I(l,r),l.forEach(m),this.h()},h(){V(t,"class","form-error")},m(n,l){c(n,t,l),F(t,s)},p(n,l){l&4&&r!==(r=n[2].user+"")&&T(s,r)},d(n){n&&m(t)}}}function ve($){let t,r,s,n,l,i;t=new X({props:{for:"user",$$slots:{default:[ge]},$$scope:{ctx:$}}}),s=new Y({props:{$$slots:{default:[he]},$$scope:{ctx:$}}});let u=$[2].user&&se($);return{c(){v(t.$$.fragment),r=M(),v(s.$$.fragment),n=M(),u&&u.c(),l=G()},l(e){w(t.$$.fragment,e),r=N(e),w(s.$$.fragment,e),n=N(e),u&&u.l(e),l=G()},m(e,a){k(t,e,a),c(e,r,a),k(s,e,a),c(e,n,a),u&&u.m(e,a),c(e,l,a),i=!0},p(e,a){const _={};a&32768&&(_.$$scope={dirty:a,ctx:e}),t.$set(_);const f={};a&32770&&(f.$$scope={dirty:a,ctx:e}),s.$set(f),e[2].user?u?u.p(e,a):(u=se(e),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null)},i(e){i||(d(t.$$.fragment,e),d(s.$$.fragment,e),i=!0)},o(e){S(t.$$.fragment,e),S(s.$$.fragment,e),i=!1},d(e){C(t,e),e&&m(r),C(s,e),e&&m(n),u&&u.d(e),e&&m(l)}}}function we($){let t;return{c(){t=L("Password")},l(r){t=I(r,"Password")},m(r,s){c(r,t,s)},d(r){r&&m(t)}}}function ke($){let t,r;return t=new y({props:{name:"key"}}),{c(){v(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,n){k(t,s,n),r=!0},p:q,i(s){r||(d(t.$$.fragment,s),r=!0)},o(s){S(t.$$.fragment,s),r=!1},d(s){C(t,s)}}}function de($){let t,r,s,n,l;t=new Z({props:{$$slots:{default:[ke]},$$scope:{ctx:$}}});function i(e){$[8](e)}let u={id:"pass",type:"password"};return $[1].pass!==void 0&&(u.value=$[1].pass),s=new B({props:u}),z.push(()=>J(s,"value",i)),s.$on("change",$[5]),s.$on("blur",$[5]),{c(){v(t.$$.fragment),r=M(),v(s.$$.fragment)},l(e){w(t.$$.fragment,e),r=N(e),w(s.$$.fragment,e)},m(e,a){k(t,e,a),c(e,r,a),k(s,e,a),l=!0},p(e,a){const _={};a&32768&&(_.$$scope={dirty:a,ctx:e}),t.$set(_);const f={};!n&&a&2&&(n=!0,f.value=e[1].pass,K(()=>n=!1)),s.$set(f)},i(e){l||(d(t.$$.fragment,e),d(s.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),S(s.$$.fragment,e),l=!1},d(e){C(t,e),e&&m(r),C(s,e)}}}function re($){let t,r=$[2].pass+"",s;return{c(){t=P("small"),s=L(r),this.h()},l(n){t=R(n,"SMALL",{class:!0});var l=j(t);s=I(l,r),l.forEach(m),this.h()},h(){V(t,"class","form-error")},m(n,l){c(n,t,l),F(t,s)},p(n,l){l&4&&r!==(r=n[2].pass+"")&&T(s,r)},d(n){n&&m(t)}}}function Se($){let t,r,s,n,l,i;t=new X({props:{for:"pass",$$slots:{default:[we]},$$scope:{ctx:$}}}),s=new Y({props:{$$slots:{default:[de]},$$scope:{ctx:$}}});let u=$[2].pass&&re($);return{c(){v(t.$$.fragment),r=M(),v(s.$$.fragment),n=M(),u&&u.c(),l=G()},l(e){w(t.$$.fragment,e),r=N(e),w(s.$$.fragment,e),n=N(e),u&&u.l(e),l=G()},m(e,a){k(t,e,a),c(e,r,a),k(s,e,a),c(e,n,a),u&&u.m(e,a),c(e,l,a),i=!0},p(e,a){const _={};a&32768&&(_.$$scope={dirty:a,ctx:e}),t.$set(_);const f={};a&32770&&(f.$$scope={dirty:a,ctx:e}),s.$set(f),e[2].pass?u?u.p(e,a):(u=re(e),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null)},i(e){i||(d(t.$$.fragment,e),d(s.$$.fragment,e),i=!0)},o(e){S(t.$$.fragment,e),S(s.$$.fragment,e),i=!1},d(e){C(t,e),e&&m(r),C(s,e),e&&m(n),u&&u.d(e),e&&m(l)}}}function Ce($){let t,r;return t=new B({props:{id:"remember",type:"checkbox",label:"Remember me"}}),{c(){v(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,n){k(t,s,n),r=!0},p:q,i(s){r||(d(t.$$.fragment,s),r=!0)},o(s){S(t.$$.fragment,s),r=!1},d(s){C(t,s)}}}function Ee($){let t;return{c(){t=L("Sign in")},l(r){t=I(r,"Sign in")},m(r,s){c(r,t,s)},d(r){r&&m(t)}}}function Le($){let t,r,s,n,l,i,u,e,a,_=$[0]&&te($);return r=new U({props:{$$slots:{default:[ve]},$$scope:{ctx:$}}}),n=new U({props:{$$slots:{default:[Se]},$$scope:{ctx:$}}}),i=new U({props:{$$slots:{default:[Ce]},$$scope:{ctx:$}}}),e=new pe({props:{color:"primary",$$slots:{default:[Ee]},$$scope:{ctx:$}}}),{c(){_&&_.c(),t=M(),v(r.$$.fragment),s=M(),v(n.$$.fragment),l=M(),v(i.$$.fragment),u=M(),v(e.$$.fragment)},l(f){_&&_.l(f),t=N(f),w(r.$$.fragment,f),s=N(f),w(n.$$.fragment,f),l=N(f),w(i.$$.fragment,f),u=N(f),w(e.$$.fragment,f)},m(f,g){_&&_.m(f,g),c(f,t,g),k(r,f,g),c(f,s,g),k(n,f,g),c(f,l,g),k(i,f,g),c(f,u,g),k(e,f,g),a=!0},p(f,g){f[0]?_?_.p(f,g):(_=te(f),_.c(),_.m(t.parentNode,t)):_&&(_.d(1),_=null);const b={};g&32774&&(b.$$scope={dirty:g,ctx:f}),r.$set(b);const o={};g&32774&&(o.$$scope={dirty:g,ctx:f}),n.$set(o);const p={};g&32768&&(p.$$scope={dirty:g,ctx:f}),i.$set(p);const h={};g&32768&&(h.$$scope={dirty:g,ctx:f}),e.$set(h)},i(f){a||(d(r.$$.fragment,f),d(n.$$.fragment,f),d(i.$$.fragment,f),d(e.$$.fragment,f),a=!0)},o(f){S(r.$$.fragment,f),S(n.$$.fragment,f),S(i.$$.fragment,f),S(e.$$.fragment,f),a=!1},d(f){_&&_.d(f),f&&m(t),C(r,f),f&&m(s),C(n,f),f&&m(l),C(i,f),f&&m(u),C(e,f)}}}function Ie($){let t,r,s;return r=new ie({props:{$$slots:{default:[Le]},$$scope:{ctx:$}}}),r.$on("submit",$[6]),{c(){t=P("div"),v(r.$$.fragment),this.h()},l(n){t=R(n,"DIV",{class:!0});var l=j(t);w(r.$$.fragment,l),l.forEach(m),this.h()},h(){V(t,"class","form-container svelte-a9gn9e")},m(n,l){c(n,t,l),k(r,t,null),s=!0},p(n,l){const i={};l&32775&&(i.$$scope={dirty:l,ctx:n}),r.$set(i)},i(n){s||(d(r.$$.fragment,n),s=!0)},o(n){S(r.$$.fragment,n),s=!1},d(n){n&&m(t),C(r)}}}function Me($){let t,r;return t=new Q({props:{lg:"4",$$slots:{default:[Ie]},$$scope:{ctx:$}}}),{c(){v(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,n){k(t,s,n),r=!0},p(s,n){const l={};n&32775&&(l.$$scope={dirty:n,ctx:s}),t.$set(l)},i(s){r||(d(t.$$.fragment,s),r=!0)},o(s){S(t.$$.fragment,s),r=!1},d(s){C(t,s)}}}function Ne($){let t,r,s,n,l,i,u,e,a,_,f,g=D,b=[];for(let o=0;o<g.length;o+=1)b[o]=ee(x($,g,o));return e=new Q({props:{$$slots:{default:[ce]},$$scope:{ctx:$}}}),_=new $e({props:{$$slots:{default:[Me]},$$scope:{ctx:$}}}),{c(){t=P("h1"),r=L("Sign in"),s=M(),n=P("p"),l=L(`Valid credentials:
	`);for(let o=0;o<b.length;o+=1)b[o].c();i=M(),u=P("p"),v(e.$$.fragment),a=M(),v(_.$$.fragment),this.h()},l(o){t=R(o,"H1",{});var p=j(t);r=I(p,"Sign in"),p.forEach(m),s=N(o),n=R(o,"P",{class:!0});var h=j(n);l=I(h,`Valid credentials:
	`);for(let E=0;E<b.length;E+=1)b[E].l(h);h.forEach(m),i=N(o),u=R(o,"P",{});var A=j(u);w(e.$$.fragment,A),A.forEach(m),a=N(o),w(_.$$.fragment,o),this.h()},h(){V(n,"class","page-description")},m(o,p){c(o,t,p),F(t,r),c(o,s,p),c(o,n,p),F(n,l);for(let h=0;h<b.length;h+=1)b[h].m(n,null);c(o,i,p),c(o,u,p),k(e,u,null),c(o,a,p),k(_,o,p),f=!0},p(o,[p]){if(p&0){g=D;let E;for(E=0;E<g.length;E+=1){const O=x(o,g,E);b[E]?b[E].p(O,p):(b[E]=ee(O),b[E].c(),b[E].m(n,null))}for(;E<b.length;E+=1)b[E].d(1);b.length=g.length}const h={};p&32768&&(h.$$scope={dirty:p,ctx:o}),e.$set(h);const A={};p&32775&&(A.$$scope={dirty:p,ctx:o}),_.$set(A)},i(o){f||(d(e.$$.fragment,o),d(_.$$.fragment,o),f=!0)},o(o){S(e.$$.fragment,o),S(_.$$.fragment,o),f=!1},d(o){o&&m(t),o&&m(s),o&&m(n),ue(b,o),o&&m(i),o&&m(u),C(e),o&&m(a),C(_,o)}}}function Pe($,t,r){let s,n;ae(()=>{me("auth")&&(location.pathname=`${H}/`)});let l;const{form:i,errors:u,state:e,handleChange:a,handleSubmit:_,handleReset:f}=oe({initialValues:{user:"",pass:""},validate:p=>{let h={};return r(0,l=""),p.user===""&&(h.user="Please enter your username"),p.pass===""&&(h.pass="Please enter your password"),h},onSubmit:p=>{g(p)?(_e("auth",p.user,2),location.pathname=`${H}/`):(f(),r(0,l="Invalid username or password!"))}});W($,i,p=>r(1,s=p)),W($,u,p=>r(2,n=p));function g(p){const h=D.filter(A=>A.username===p.user)[0];return h&&h.password===p.pass}function b(p){$.$$.not_equal(s.user,p)&&(s.user=p,i.set(s))}function o(p){$.$$.not_equal(s.pass,p)&&(s.pass=p,i.set(s))}return[l,s,n,i,u,a,_,b,o]}class Fe extends ne{constructor(t){super();le(this,t,Pe,Ne,fe,{})}}export{Fe as default};