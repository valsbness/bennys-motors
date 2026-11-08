/* Benny’s Motors · emblema 3D. Generado con npm run build:logo. Three.js r186 (MIT). Fuente: logo3d/ */
var cu=Object.create;var $l=Object.defineProperty;var hu=Object.getOwnPropertyDescriptor;var uu=Object.getOwnPropertyNames;var fu=Object.getPrototypeOf,du=Object.prototype.hasOwnProperty;var pu=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var mu=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of uu(t))!du.call(i,s)&&s!==e&&$l(i,s,{get:()=>t[s],enumerable:!(n=hu(t,s))||n.enumerable});return i};var gu=(i,t,e)=>(e=i!=null?cu(fu(i)):{},mu(t||!i||!i.__esModule?$l(e,"default",{value:i,enumerable:!0}):e,i));var eu=pu((Hl,Wl)=>{(function(i,t){typeof Hl=="object"&&typeof Wl<"u"?Wl.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(Hl,(function(){"use strict";function i(F,d){var m={label:0,sent:function(){if(C[0]&1)throw C[1];return C[1]},trys:[],ops:[]},E,R,C,q;return q={next:X(0),throw:X(1),return:X(2)},typeof Symbol=="function"&&(q[Symbol.iterator]=function(){return this}),q;function X(at){return function(wt){return ht([at,wt])}}function ht(at){if(E)throw new TypeError("Generator is already executing.");for(;m;)try{if(E=1,R&&(C=at[0]&2?R.return:at[0]?R.throw||((C=R.return)&&C.call(R),0):R.next)&&!(C=C.call(R,at[1])).done)return C;switch(R=0,C&&(at=[at[0]&2,C.value]),at[0]){case 0:case 1:C=at;break;case 4:return m.label++,{value:at[1],done:!1};case 5:m.label++,R=at[1],at=[0];continue;case 7:at=m.ops.pop(),m.trys.pop();continue;default:if(C=m.trys,!(C=C.length>0&&C[C.length-1])&&(at[0]===6||at[0]===2)){m=0;continue}if(at[0]===3&&(!C||at[1]>C[0]&&at[1]<C[3])){m.label=at[1];break}if(at[0]===6&&m.label<C[1]){m.label=C[1],C=at;break}if(C&&m.label<C[2]){m.label=C[2],m.ops.push(at);break}C[2]&&m.ops.pop(),m.trys.pop();continue}at=d.call(F,m)}catch(wt){at=[6,wt],R=0}finally{E=C=0}if(at[0]&5)throw at[1];return{value:at[0]?at[1]:void 0,done:!0}}}var t=(function(){function F(d,m){this.next=null,this.key=d,this.data=m,this.left=null,this.right=null}return F})();function e(F,d){return F>d?1:F<d?-1:0}function n(F,d,m){for(var E=new t(null,null),R=E,C=E;;){var q=m(F,d.key);if(q<0){if(d.left===null)break;if(m(F,d.left.key)<0){var X=d.left;if(d.left=X.right,X.right=d,d=X,d.left===null)break}C.left=d,C=d,d=d.left}else if(q>0){if(d.right===null)break;if(m(F,d.right.key)>0){var X=d.right;if(d.right=X.left,X.left=d,d=X,d.right===null)break}R.right=d,R=d,d=d.right}else break}return R.right=d.left,C.left=d.right,d.left=E.right,d.right=E.left,d}function s(F,d,m,E){var R=new t(F,d);if(m===null)return R.left=R.right=null,R;m=n(F,m,E);var C=E(F,m.key);return C<0?(R.left=m.left,R.right=m,m.left=null):C>=0&&(R.right=m.right,R.left=m,m.right=null),R}function r(F,d,m){var E=null,R=null;if(d){d=n(F,d,m);var C=m(d.key,F);C===0?(E=d.left,R=d.right):C<0?(R=d.right,d.right=null,E=d):(E=d.left,d.left=null,R=d)}return{left:E,right:R}}function o(F,d,m){return d===null?F:(F===null||(d=n(F.key,d,m),d.left=F),d)}function a(F,d,m,E,R){if(F){E(""+d+(m?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+R(F)+`
`);var C=d+(m?"    ":"\u2502   ");F.left&&a(F.left,C,!1,E,R),F.right&&a(F.right,C,!0,E,R)}}var c=(function(){function F(d){d===void 0&&(d=e),this._root=null,this._size=0,this._comparator=d}return F.prototype.insert=function(d,m){return this._size++,this._root=s(d,m,this._root,this._comparator)},F.prototype.add=function(d,m){var E=new t(d,m);this._root===null&&(E.left=E.right=null,this._size++,this._root=E);var R=this._comparator,C=n(d,this._root,R),q=R(d,C.key);return q===0?this._root=C:(q<0?(E.left=C.left,E.right=C,C.left=null):q>0&&(E.right=C.right,E.left=C,C.right=null),this._size++,this._root=E),this._root},F.prototype.remove=function(d){this._root=this._remove(d,this._root,this._comparator)},F.prototype._remove=function(d,m,E){var R;if(m===null)return null;m=n(d,m,E);var C=E(d,m.key);return C===0?(m.left===null?R=m.right:(R=n(d,m.left,E),R.right=m.right),this._size--,R):m},F.prototype.pop=function(){var d=this._root;if(d){for(;d.left;)d=d.left;return this._root=n(d.key,this._root,this._comparator),this._root=this._remove(d.key,this._root,this._comparator),{key:d.key,data:d.data}}return null},F.prototype.findStatic=function(d){for(var m=this._root,E=this._comparator;m;){var R=E(d,m.key);if(R===0)return m;R<0?m=m.left:m=m.right}return null},F.prototype.find=function(d){return this._root&&(this._root=n(d,this._root,this._comparator),this._comparator(d,this._root.key)!==0)?null:this._root},F.prototype.contains=function(d){for(var m=this._root,E=this._comparator;m;){var R=E(d,m.key);if(R===0)return!0;R<0?m=m.left:m=m.right}return!1},F.prototype.forEach=function(d,m){for(var E=this._root,R=[],C=!1;!C;)E!==null?(R.push(E),E=E.left):R.length!==0?(E=R.pop(),d.call(m,E),E=E.right):C=!0;return this},F.prototype.range=function(d,m,E,R){for(var C=[],q=this._comparator,X=this._root,ht;C.length!==0||X;)if(X)C.push(X),X=X.left;else{if(X=C.pop(),ht=q(X.key,m),ht>0)break;if(q(X.key,d)>=0&&E.call(R,X))return this;X=X.right}return this},F.prototype.keys=function(){var d=[];return this.forEach(function(m){var E=m.key;return d.push(E)}),d},F.prototype.values=function(){var d=[];return this.forEach(function(m){var E=m.data;return d.push(E)}),d},F.prototype.min=function(){return this._root?this.minNode(this._root).key:null},F.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},F.prototype.minNode=function(d){if(d===void 0&&(d=this._root),d)for(;d.left;)d=d.left;return d},F.prototype.maxNode=function(d){if(d===void 0&&(d=this._root),d)for(;d.right;)d=d.right;return d},F.prototype.at=function(d){for(var m=this._root,E=!1,R=0,C=[];!E;)if(m)C.push(m),m=m.left;else if(C.length>0){if(m=C.pop(),R===d)return m;R++,m=m.right}else E=!0;return null},F.prototype.next=function(d){var m=this._root,E=null;if(d.right){for(E=d.right;E.left;)E=E.left;return E}for(var R=this._comparator;m;){var C=R(d.key,m.key);if(C===0)break;C<0?(E=m,m=m.left):m=m.right}return E},F.prototype.prev=function(d){var m=this._root,E=null;if(d.left!==null){for(E=d.left;E.right;)E=E.right;return E}for(var R=this._comparator;m;){var C=R(d.key,m.key);if(C===0)break;C<0?m=m.left:(E=m,m=m.right)}return E},F.prototype.clear=function(){return this._root=null,this._size=0,this},F.prototype.toList=function(){return f(this._root)},F.prototype.load=function(d,m,E){m===void 0&&(m=[]),E===void 0&&(E=!1);var R=d.length,C=this._comparator;if(E&&_(d,m,0,R-1,C),this._root===null)this._root=l(d,m,0,R),this._size=R;else{var q=g(this.toList(),u(d,m),C);R=this._size+R,this._root=h({head:q},0,R)}return this},F.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(F.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(F.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),F.prototype.toString=function(d){d===void 0&&(d=function(E){return String(E.key)});var m=[];return a(this._root,"",!0,function(E){return m.push(E)},d),m.join("")},F.prototype.update=function(d,m,E){var R=this._comparator,C=r(d,this._root,R),q=C.left,X=C.right;R(d,m)<0?X=s(m,E,X,R):q=s(m,E,q,R),this._root=o(q,X,R)},F.prototype.split=function(d){return r(d,this._root,this._comparator)},F.prototype[Symbol.iterator]=function(){var d,m,E;return i(this,function(R){switch(R.label){case 0:d=this._root,m=[],E=!1,R.label=1;case 1:return E?[3,6]:d===null?[3,2]:(m.push(d),d=d.left,[3,5]);case 2:return m.length===0?[3,4]:(d=m.pop(),[4,d]);case 3:return R.sent(),d=d.right,[3,5];case 4:E=!0,R.label=5;case 5:return[3,1];case 6:return[2]}})},F})();function l(F,d,m,E){var R=E-m;if(R>0){var C=m+Math.floor(R/2),q=F[C],X=d[C],ht=new t(q,X);return ht.left=l(F,d,m,C),ht.right=l(F,d,C+1,E),ht}return null}function u(F,d){for(var m=new t(null,null),E=m,R=0;R<F.length;R++)E=E.next=new t(F[R],d[R]);return E.next=null,m.next}function f(F){for(var d=F,m=[],E=!1,R=new t(null,null),C=R;!E;)d?(m.push(d),d=d.left):m.length>0?(d=C=C.next=m.pop(),d=d.right):E=!0;return C.next=null,R.next}function h(F,d,m){var E=m-d;if(E>0){var R=d+Math.floor(E/2),C=h(F,d,R),q=F.head;return q.left=C,F.head=F.head.next,q.right=h(F,R+1,m),q}return null}function g(F,d,m){for(var E=new t(null,null),R=E,C=F,q=d;C!==null&&q!==null;)m(C.key,q.key)<0?(R.next=C,C=C.next):(R.next=q,q=q.next),R=R.next;return C!==null?R.next=C:q!==null&&(R.next=q),E.next}function _(F,d,m,E,R){if(!(m>=E)){for(var C=F[m+E>>1],q=m-1,X=E+1;;){do q++;while(R(F[q],C)<0);do X--;while(R(F[X],C)>0);if(q>=X)break;var ht=F[q];F[q]=F[X],F[X]=ht,ht=d[q],d[q]=d[X],d[X]=ht}_(F,d,m,X,R),_(F,d,X+1,E,R)}}let M=(F,d)=>F.ll.x<=d.x&&d.x<=F.ur.x&&F.ll.y<=d.y&&d.y<=F.ur.y,x=(F,d)=>{if(d.ur.x<F.ll.x||F.ur.x<d.ll.x||d.ur.y<F.ll.y||F.ur.y<d.ll.y)return null;let m=F.ll.x<d.ll.x?d.ll.x:F.ll.x,E=F.ur.x<d.ur.x?F.ur.x:d.ur.x,R=F.ll.y<d.ll.y?d.ll.y:F.ll.y,C=F.ur.y<d.ur.y?F.ur.y:d.ur.y;return{ll:{x:m,y:R},ur:{x:E,y:C}}},p=Number.EPSILON;p===void 0&&(p=Math.pow(2,-52));let U=p*p,O=(F,d)=>{if(-p<F&&F<p&&-p<d&&d<p)return 0;let m=F-d;return m*m<U*F*d?0:F<d?-1:1};class y{constructor(){this.reset()}reset(){this.xRounder=new A,this.yRounder=new A}round(d,m){return{x:this.xRounder.round(d),y:this.yRounder.round(m)}}}class A{constructor(){this.tree=new c,this.round(0)}round(d){let m=this.tree.add(d),E=this.tree.prev(m);if(E!==null&&O(m.key,E.key)===0)return this.tree.remove(d),E.key;let R=this.tree.next(m);return R!==null&&O(m.key,R.key)===0?(this.tree.remove(d),R.key):d}}let I=new y,B=11102230246251565e-32,S=134217729,L=(3+8*B)*B;function W(F,d,m,E,R){let C,q,X,ht,at=d[0],wt=E[0],T=0,ot=0;wt>at==wt>-at?(C=at,at=d[++T]):(C=wt,wt=E[++ot]);let $=0;if(T<F&&ot<m)for(wt>at==wt>-at?(q=at+C,X=C-(q-at),at=d[++T]):(q=wt+C,X=C-(q-wt),wt=E[++ot]),C=q,X!==0&&(R[$++]=X);T<F&&ot<m;)wt>at==wt>-at?(q=C+at,ht=q-C,X=C-(q-ht)+(at-ht),at=d[++T]):(q=C+wt,ht=q-C,X=C-(q-ht)+(wt-ht),wt=E[++ot]),C=q,X!==0&&(R[$++]=X);for(;T<F;)q=C+at,ht=q-C,X=C-(q-ht)+(at-ht),at=d[++T],C=q,X!==0&&(R[$++]=X);for(;ot<m;)q=C+wt,ht=q-C,X=C-(q-ht)+(wt-ht),wt=E[++ot],C=q,X!==0&&(R[$++]=X);return(C!==0||$===0)&&(R[$++]=C),$}function J(F,d){let m=d[0];for(let E=1;E<F;E++)m+=d[E];return m}function Z(F){return new Float64Array(F)}let lt=(3+16*B)*B,V=(2+12*B)*B,tt=(9+64*B)*B*B,ct=Z(4),st=Z(8),et=Z(12),mt=Z(16),ut=Z(4);function Mt(F,d,m,E,R,C,q){let X,ht,at,wt,T,ot,$,bt,Et,vt,It,Pt,Kt,Zt,ae,ce,Ge,be,He=F-R,Fe=m-R,Ye=d-C,We=E-C;Zt=He*We,ot=S*He,$=ot-(ot-He),bt=He-$,ot=S*We,Et=ot-(ot-We),vt=We-Et,ae=bt*vt-(Zt-$*Et-bt*Et-$*vt),ce=Ye*Fe,ot=S*Ye,$=ot-(ot-Ye),bt=Ye-$,ot=S*Fe,Et=ot-(ot-Fe),vt=Fe-Et,Ge=bt*vt-(ce-$*Et-bt*Et-$*vt),It=ae-Ge,T=ae-It,ct[0]=ae-(It+T)+(T-Ge),Pt=Zt+It,T=Pt-Zt,Kt=Zt-(Pt-T)+(It-T),It=Kt-ce,T=Kt-It,ct[1]=Kt-(It+T)+(T-ce),be=Pt+It,T=be-Pt,ct[2]=Pt-(be-T)+(It-T),ct[3]=be;let en=J(4,ct),Ze=V*q;if(en>=Ze||-en>=Ze||(T=F-He,X=F-(He+T)+(T-R),T=m-Fe,at=m-(Fe+T)+(T-R),T=d-Ye,ht=d-(Ye+T)+(T-C),T=E-We,wt=E-(We+T)+(T-C),X===0&&ht===0&&at===0&&wt===0)||(Ze=tt*q+L*Math.abs(en),en+=He*wt+We*X-(Ye*at+Fe*ht),en>=Ze||-en>=Ze))return en;Zt=X*We,ot=S*X,$=ot-(ot-X),bt=X-$,ot=S*We,Et=ot-(ot-We),vt=We-Et,ae=bt*vt-(Zt-$*Et-bt*Et-$*vt),ce=ht*Fe,ot=S*ht,$=ot-(ot-ht),bt=ht-$,ot=S*Fe,Et=ot-(ot-Fe),vt=Fe-Et,Ge=bt*vt-(ce-$*Et-bt*Et-$*vt),It=ae-Ge,T=ae-It,ut[0]=ae-(It+T)+(T-Ge),Pt=Zt+It,T=Pt-Zt,Kt=Zt-(Pt-T)+(It-T),It=Kt-ce,T=Kt-It,ut[1]=Kt-(It+T)+(T-ce),be=Pt+It,T=be-Pt,ut[2]=Pt-(be-T)+(It-T),ut[3]=be;let ps=W(4,ct,4,ut,st);Zt=He*wt,ot=S*He,$=ot-(ot-He),bt=He-$,ot=S*wt,Et=ot-(ot-wt),vt=wt-Et,ae=bt*vt-(Zt-$*Et-bt*Et-$*vt),ce=Ye*at,ot=S*Ye,$=ot-(ot-Ye),bt=Ye-$,ot=S*at,Et=ot-(ot-at),vt=at-Et,Ge=bt*vt-(ce-$*Et-bt*Et-$*vt),It=ae-Ge,T=ae-It,ut[0]=ae-(It+T)+(T-Ge),Pt=Zt+It,T=Pt-Zt,Kt=Zt-(Pt-T)+(It-T),It=Kt-ce,T=Kt-It,ut[1]=Kt-(It+T)+(T-ce),be=Pt+It,T=be-Pt,ut[2]=Pt-(be-T)+(It-T),ut[3]=be;let sr=W(ps,st,4,ut,et);Zt=X*wt,ot=S*X,$=ot-(ot-X),bt=X-$,ot=S*wt,Et=ot-(ot-wt),vt=wt-Et,ae=bt*vt-(Zt-$*Et-bt*Et-$*vt),ce=ht*at,ot=S*ht,$=ot-(ot-ht),bt=ht-$,ot=S*at,Et=ot-(ot-at),vt=at-Et,Ge=bt*vt-(ce-$*Et-bt*Et-$*vt),It=ae-Ge,T=ae-It,ut[0]=ae-(It+T)+(T-Ge),Pt=Zt+It,T=Pt-Zt,Kt=Zt-(Pt-T)+(It-T),It=Kt-ce,T=Kt-It,ut[1]=Kt-(It+T)+(T-ce),be=Pt+It,T=be-Pt,ut[2]=Pt-(be-T)+(It-T),ut[3]=be;let rr=W(sr,et,4,ut,mt);return mt[rr-1]}function Bt(F,d,m,E,R,C){let q=(d-C)*(m-R),X=(F-R)*(E-C),ht=q-X,at=Math.abs(q+X);return Math.abs(ht)>=lt*at?ht:-Mt(F,d,m,E,R,C,at)}let Lt=(F,d)=>F.x*d.y-F.y*d.x,qt=(F,d)=>F.x*d.x+F.y*d.y,Yt=(F,d,m)=>{let E=Bt(F.x,F.y,d.x,d.y,m.x,m.y);return E>0?-1:E<0?1:0},$t=F=>Math.sqrt(qt(F,F)),H=(F,d,m)=>{let E={x:d.x-F.x,y:d.y-F.y},R={x:m.x-F.x,y:m.y-F.y};return Lt(R,E)/$t(R)/$t(E)},k=(F,d,m)=>{let E={x:d.x-F.x,y:d.y-F.y},R={x:m.x-F.x,y:m.y-F.y};return qt(R,E)/$t(R)/$t(E)},z=(F,d,m)=>d.y===0?null:{x:F.x+d.x/d.y*(m-F.y),y:m},D=(F,d,m)=>d.x===0?null:{x:m,y:F.y+d.y/d.x*(m-F.x)},Q=(F,d,m,E)=>{if(d.x===0)return D(m,E,F.x);if(E.x===0)return D(F,d,m.x);if(d.y===0)return z(m,E,F.y);if(E.y===0)return z(F,d,m.y);let R=Lt(d,E);if(R==0)return null;let C={x:m.x-F.x,y:m.y-F.y},q=Lt(C,d)/R,X=Lt(C,E)/R,ht=F.x+X*d.x,at=m.x+q*E.x,wt=F.y+X*d.y,T=m.y+q*E.y,ot=(ht+at)/2,$=(wt+T)/2;return{x:ot,y:$}};class dt{static compare(d,m){let E=dt.comparePoints(d.point,m.point);return E!==0?E:(d.point!==m.point&&d.link(m),d.isLeft!==m.isLeft?d.isLeft?1:-1:P.compare(d.segment,m.segment))}static comparePoints(d,m){return d.x<m.x?-1:d.x>m.x?1:d.y<m.y?-1:d.y>m.y?1:0}constructor(d,m){d.events===void 0?d.events=[this]:d.events.push(this),this.point=d,this.isLeft=m}link(d){if(d.point===this.point)throw new Error("Tried to link already linked events");let m=d.point.events;for(let E=0,R=m.length;E<R;E++){let C=m[E];this.point.events.push(C),C.point=this.point}this.checkForConsuming()}checkForConsuming(){let d=this.point.events.length;for(let m=0;m<d;m++){let E=this.point.events[m];if(E.segment.consumedBy===void 0)for(let R=m+1;R<d;R++){let C=this.point.events[R];C.consumedBy===void 0&&E.otherSE.point.events===C.otherSE.point.events&&E.segment.consume(C.segment)}}}getAvailableLinkedEvents(){let d=[];for(let m=0,E=this.point.events.length;m<E;m++){let R=this.point.events[m];R!==this&&!R.segment.ringOut&&R.segment.isInResult()&&d.push(R)}return d}getLeftmostComparator(d){let m=new Map,E=R=>{let C=R.otherSE;m.set(R,{sine:H(this.point,d.point,C.point),cosine:k(this.point,d.point,C.point)})};return(R,C)=>{m.has(R)||E(R),m.has(C)||E(C);let{sine:q,cosine:X}=m.get(R),{sine:ht,cosine:at}=m.get(C);return q>=0&&ht>=0?X<at?1:X>at?-1:0:q<0&&ht<0?X<at?-1:X>at?1:0:ht<q?-1:ht>q?1:0}}}let Ct=0;class P{static compare(d,m){let E=d.leftSE.point.x,R=m.leftSE.point.x,C=d.rightSE.point.x,q=m.rightSE.point.x;if(q<E)return 1;if(C<R)return-1;let X=d.leftSE.point.y,ht=m.leftSE.point.y,at=d.rightSE.point.y,wt=m.rightSE.point.y;if(E<R){if(ht<X&&ht<at)return 1;if(ht>X&&ht>at)return-1;let T=d.comparePoint(m.leftSE.point);if(T<0)return 1;if(T>0)return-1;let ot=m.comparePoint(d.rightSE.point);return ot!==0?ot:-1}if(E>R){if(X<ht&&X<wt)return-1;if(X>ht&&X>wt)return 1;let T=m.comparePoint(d.leftSE.point);if(T!==0)return T;let ot=d.comparePoint(m.rightSE.point);return ot<0?1:ot>0?-1:1}if(X<ht)return-1;if(X>ht)return 1;if(C<q){let T=m.comparePoint(d.rightSE.point);if(T!==0)return T}if(C>q){let T=d.comparePoint(m.rightSE.point);if(T<0)return 1;if(T>0)return-1}if(C!==q){let T=at-X,ot=C-E,$=wt-ht,bt=q-R;if(T>ot&&$<bt)return 1;if(T<ot&&$>bt)return-1}return C>q?1:C<q||at<wt?-1:at>wt?1:d.id<m.id?-1:d.id>m.id?1:0}constructor(d,m,E,R){this.id=++Ct,this.leftSE=d,d.segment=this,d.otherSE=m,this.rightSE=m,m.segment=this,m.otherSE=d,this.rings=E,this.windings=R}static fromRing(d,m,E){let R,C,q,X=dt.comparePoints(d,m);if(X<0)R=d,C=m,q=1;else if(X>0)R=m,C=d,q=-1;else throw new Error(`Tried to create degenerate segment at [${d.x}, ${d.y}]`);let ht=new dt(R,!0),at=new dt(C,!1);return new P(ht,at,[E],[q])}replaceRightSE(d){this.rightSE=d,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let d=this.leftSE.point.y,m=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:d<m?d:m},ur:{x:this.rightSE.point.x,y:d>m?d:m}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(d){return d.x===this.leftSE.point.x&&d.y===this.leftSE.point.y||d.x===this.rightSE.point.x&&d.y===this.rightSE.point.y}comparePoint(d){if(this.isAnEndpoint(d))return 0;let m=this.leftSE.point,E=this.rightSE.point,R=this.vector();if(m.x===E.x)return d.x===m.x?0:d.x<m.x?1:-1;let C=(d.y-m.y)/R.y,q=m.x+C*R.x;if(d.x===q)return 0;let X=(d.x-m.x)/R.x,ht=m.y+X*R.y;return d.y===ht?0:d.y<ht?-1:1}getIntersection(d){let m=this.bbox(),E=d.bbox(),R=x(m,E);if(R===null)return null;let C=this.leftSE.point,q=this.rightSE.point,X=d.leftSE.point,ht=d.rightSE.point,at=M(m,X)&&this.comparePoint(X)===0,wt=M(E,C)&&d.comparePoint(C)===0,T=M(m,ht)&&this.comparePoint(ht)===0,ot=M(E,q)&&d.comparePoint(q)===0;if(wt&&at)return ot&&!T?q:!ot&&T?ht:null;if(wt)return T&&C.x===ht.x&&C.y===ht.y?null:C;if(at)return ot&&q.x===X.x&&q.y===X.y?null:X;if(ot&&T)return null;if(ot)return q;if(T)return ht;let $=Q(C,this.vector(),X,d.vector());return $===null||!M(R,$)?null:I.round($.x,$.y)}split(d){let m=[],E=d.events!==void 0,R=new dt(d,!0),C=new dt(d,!1),q=this.rightSE;this.replaceRightSE(C),m.push(C),m.push(R);let X=new P(R,q,this.rings.slice(),this.windings.slice());return dt.comparePoints(X.leftSE.point,X.rightSE.point)>0&&X.swapEvents(),dt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),E&&(R.checkForConsuming(),C.checkForConsuming()),m}swapEvents(){let d=this.rightSE;this.rightSE=this.leftSE,this.leftSE=d,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let m=0,E=this.windings.length;m<E;m++)this.windings[m]*=-1}consume(d){let m=this,E=d;for(;m.consumedBy;)m=m.consumedBy;for(;E.consumedBy;)E=E.consumedBy;let R=P.compare(m,E);if(R!==0){if(R>0){let C=m;m=E,E=C}if(m.prev===E){let C=m;m=E,E=C}for(let C=0,q=E.rings.length;C<q;C++){let X=E.rings[C],ht=E.windings[C],at=m.rings.indexOf(X);at===-1?(m.rings.push(X),m.windings.push(ht)):m.windings[at]+=ht}E.rings=null,E.windings=null,E.consumedBy=m,E.leftSE.consumedBy=m.leftSE,E.rightSE.consumedBy=m.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let d=this.prev.consumedBy||this.prev;this._beforeState=d.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let d=this.beforeState();this._afterState={rings:d.rings.slice(0),windings:d.windings.slice(0),multiPolys:[]};let m=this._afterState.rings,E=this._afterState.windings,R=this._afterState.multiPolys;for(let X=0,ht=this.rings.length;X<ht;X++){let at=this.rings[X],wt=this.windings[X],T=m.indexOf(at);T===-1?(m.push(at),E.push(wt)):E[T]+=wt}let C=[],q=[];for(let X=0,ht=m.length;X<ht;X++){if(E[X]===0)continue;let at=m[X],wt=at.poly;if(q.indexOf(wt)===-1)if(at.isExterior)C.push(wt);else{q.indexOf(wt)===-1&&q.push(wt);let T=C.indexOf(at.poly);T!==-1&&C.splice(T,1)}}for(let X=0,ht=C.length;X<ht;X++){let at=C[X].multiPoly;R.indexOf(at)===-1&&R.push(at)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let d=this.beforeState().multiPolys,m=this.afterState().multiPolys;switch(Ut.type){case"union":{let E=d.length===0,R=m.length===0;this._isInResult=E!==R;break}case"intersection":{let E,R;d.length<m.length?(E=d.length,R=m.length):(E=m.length,R=d.length),this._isInResult=R===Ut.numMultiPolys&&E<R;break}case"xor":{let E=Math.abs(d.length-m.length);this._isInResult=E%2===1;break}case"difference":{let E=R=>R.length===1&&R[0].isSubject;this._isInResult=E(d)!==E(m);break}default:throw new Error(`Unrecognized operation type found ${Ut.type}`)}return this._isInResult}}class Y{constructor(d,m,E){if(!Array.isArray(d)||d.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=m,this.isExterior=E,this.segments=[],typeof d[0][0]!="number"||typeof d[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let R=I.round(d[0][0],d[0][1]);this.bbox={ll:{x:R.x,y:R.y},ur:{x:R.x,y:R.y}};let C=R;for(let q=1,X=d.length;q<X;q++){if(typeof d[q][0]!="number"||typeof d[q][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let ht=I.round(d[q][0],d[q][1]);ht.x===C.x&&ht.y===C.y||(this.segments.push(P.fromRing(C,ht,this)),ht.x<this.bbox.ll.x&&(this.bbox.ll.x=ht.x),ht.y<this.bbox.ll.y&&(this.bbox.ll.y=ht.y),ht.x>this.bbox.ur.x&&(this.bbox.ur.x=ht.x),ht.y>this.bbox.ur.y&&(this.bbox.ur.y=ht.y),C=ht)}(R.x!==C.x||R.y!==C.y)&&this.segments.push(P.fromRing(C,R,this))}getSweepEvents(){let d=[];for(let m=0,E=this.segments.length;m<E;m++){let R=this.segments[m];d.push(R.leftSE),d.push(R.rightSE)}return d}}class G{constructor(d,m){if(!Array.isArray(d))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Y(d[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let E=1,R=d.length;E<R;E++){let C=new Y(d[E],this,!1);C.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=C.bbox.ll.x),C.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=C.bbox.ll.y),C.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=C.bbox.ur.x),C.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=C.bbox.ur.y),this.interiorRings.push(C)}this.multiPoly=m}getSweepEvents(){let d=this.exteriorRing.getSweepEvents();for(let m=0,E=this.interiorRings.length;m<E;m++){let R=this.interiorRings[m].getSweepEvents();for(let C=0,q=R.length;C<q;C++)d.push(R[C])}return d}}class rt{constructor(d,m){if(!Array.isArray(d))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof d[0][0][0]=="number"&&(d=[d])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let E=0,R=d.length;E<R;E++){let C=new G(d[E],this);C.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=C.bbox.ll.x),C.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=C.bbox.ll.y),C.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=C.bbox.ur.x),C.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=C.bbox.ur.y),this.polys.push(C)}this.isSubject=m}getSweepEvents(){let d=[];for(let m=0,E=this.polys.length;m<E;m++){let R=this.polys[m].getSweepEvents();for(let C=0,q=R.length;C<q;C++)d.push(R[C])}return d}}class ft{static factory(d){let m=[];for(let E=0,R=d.length;E<R;E++){let C=d[E];if(!C.isInResult()||C.ringOut)continue;let q=null,X=C.leftSE,ht=C.rightSE,at=[X],wt=X.point,T=[];for(;q=X,X=ht,at.push(X),X.point!==wt;)for(;;){let ot=X.getAvailableLinkedEvents();if(ot.length===0){let Et=at[0].point,vt=at[at.length-1].point;throw new Error(`Unable to complete output ring starting at [${Et.x}, ${Et.y}]. Last matching segment found ends at [${vt.x}, ${vt.y}].`)}if(ot.length===1){ht=ot[0].otherSE;break}let $=null;for(let Et=0,vt=T.length;Et<vt;Et++)if(T[Et].point===X.point){$=Et;break}if($!==null){let Et=T.splice($)[0],vt=at.splice(Et.index);vt.unshift(vt[0].otherSE),m.push(new ft(vt.reverse()));continue}T.push({index:at.length,point:X.point});let bt=X.getLeftmostComparator(q);ht=ot.sort(bt)[0].otherSE;break}m.push(new ft(at))}return m}constructor(d){this.events=d;for(let m=0,E=d.length;m<E;m++)d[m].segment.ringOut=this;this.poly=null}getGeom(){let d=this.events[0].point,m=[d];for(let at=1,wt=this.events.length-1;at<wt;at++){let T=this.events[at].point,ot=this.events[at+1].point;Yt(T,d,ot)!==0&&(m.push(T),d=T)}if(m.length===1)return null;let E=m[0],R=m[1];Yt(E,d,R)===0&&m.shift(),m.push(m[0]);let C=this.isExteriorRing()?1:-1,q=this.isExteriorRing()?0:m.length-1,X=this.isExteriorRing()?m.length:-1,ht=[];for(let at=q;at!=X;at+=C)ht.push([m[at].x,m[at].y]);return ht}isExteriorRing(){if(this._isExteriorRing===void 0){let d=this.enclosingRing();this._isExteriorRing=d?!d.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let d=this.events[0];for(let R=1,C=this.events.length;R<C;R++){let q=this.events[R];dt.compare(d,q)>0&&(d=q)}let m=d.segment.prevInResult(),E=m?m.prevInResult():null;for(;;){if(!m)return null;if(!E)return m.ringOut;if(E.ringOut!==m.ringOut)return E.ringOut.enclosingRing()!==m.ringOut?m.ringOut:m.ringOut.enclosingRing();m=E.prevInResult(),E=m?m.prevInResult():null}}}class St{constructor(d){this.exteriorRing=d,d.poly=this,this.interiorRings=[]}addInterior(d){this.interiorRings.push(d),d.poly=this}getGeom(){let d=[this.exteriorRing.getGeom()];if(d[0]===null)return null;for(let m=0,E=this.interiorRings.length;m<E;m++){let R=this.interiorRings[m].getGeom();R!==null&&d.push(R)}return d}}class Rt{constructor(d){this.rings=d,this.polys=this._composePolys(d)}getGeom(){let d=[];for(let m=0,E=this.polys.length;m<E;m++){let R=this.polys[m].getGeom();R!==null&&d.push(R)}return d}_composePolys(d){let m=[];for(let E=0,R=d.length;E<R;E++){let C=d[E];if(!C.poly)if(C.isExteriorRing())m.push(new St(C));else{let q=C.enclosingRing();q.poly||m.push(new St(q)),q.poly.addInterior(C)}}return m}}class Tt{constructor(d){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P.compare;this.queue=d,this.tree=new c(m),this.segments=[]}process(d){let m=d.segment,E=[];if(d.consumedBy)return d.isLeft?this.queue.remove(d.otherSE):this.tree.remove(m),E;let R=d.isLeft?this.tree.add(m):this.tree.find(m);if(!R)throw new Error(`Unable to find segment #${m.id} [${m.leftSE.point.x}, ${m.leftSE.point.y}] -> [${m.rightSE.point.x}, ${m.rightSE.point.y}] in SweepLine tree.`);let C=R,q=R,X,ht;for(;X===void 0;)C=this.tree.prev(C),C===null?X=null:C.key.consumedBy===void 0&&(X=C.key);for(;ht===void 0;)q=this.tree.next(q),q===null?ht=null:q.key.consumedBy===void 0&&(ht=q.key);if(d.isLeft){let at=null;if(X){let T=X.getIntersection(m);if(T!==null&&(m.isAnEndpoint(T)||(at=T),!X.isAnEndpoint(T))){let ot=this._splitSafely(X,T);for(let $=0,bt=ot.length;$<bt;$++)E.push(ot[$])}}let wt=null;if(ht){let T=ht.getIntersection(m);if(T!==null&&(m.isAnEndpoint(T)||(wt=T),!ht.isAnEndpoint(T))){let ot=this._splitSafely(ht,T);for(let $=0,bt=ot.length;$<bt;$++)E.push(ot[$])}}if(at!==null||wt!==null){let T=null;at===null?T=wt:wt===null?T=at:T=dt.comparePoints(at,wt)<=0?at:wt,this.queue.remove(m.rightSE),E.push(m.rightSE);let ot=m.split(T);for(let $=0,bt=ot.length;$<bt;$++)E.push(ot[$])}E.length>0?(this.tree.remove(m),E.push(d)):(this.segments.push(m),m.prev=X)}else{if(X&&ht){let at=X.getIntersection(ht);if(at!==null){if(!X.isAnEndpoint(at)){let wt=this._splitSafely(X,at);for(let T=0,ot=wt.length;T<ot;T++)E.push(wt[T])}if(!ht.isAnEndpoint(at)){let wt=this._splitSafely(ht,at);for(let T=0,ot=wt.length;T<ot;T++)E.push(wt[T])}}}this.tree.remove(m)}return E}_splitSafely(d,m){this.tree.remove(d);let E=d.rightSE;this.queue.remove(E);let R=d.split(m);return R.push(E),d.consumedBy===void 0&&this.tree.add(d),R}}let nt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,b=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class Nt{run(d,m,E){Ut.type=d,I.reset();let R=[new rt(m,!0)];for(let T=0,ot=E.length;T<ot;T++)R.push(new rt(E[T],!1));if(Ut.numMultiPolys=R.length,Ut.type==="difference"){let T=R[0],ot=1;for(;ot<R.length;)x(R[ot].bbox,T.bbox)!==null?ot++:R.splice(ot,1)}if(Ut.type==="intersection")for(let T=0,ot=R.length;T<ot;T++){let $=R[T];for(let bt=T+1,Et=R.length;bt<Et;bt++)if(x($.bbox,R[bt].bbox)===null)return[]}let C=new c(dt.compare);for(let T=0,ot=R.length;T<ot;T++){let $=R[T].getSweepEvents();for(let bt=0,Et=$.length;bt<Et;bt++)if(C.insert($[bt]),C.size>nt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let q=new Tt(C),X=C.size,ht=C.pop();for(;ht;){let T=ht.key;if(C.size===X){let $=T.segment;throw new Error(`Unable to pop() ${T.isLeft?"left":"right"} SweepEvent [${T.point.x}, ${T.point.y}] from segment #${$.id} [${$.leftSE.point.x}, ${$.leftSE.point.y}] -> [${$.rightSE.point.x}, ${$.rightSE.point.y}] from queue.`)}if(C.size>nt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(q.segments.length>b)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let ot=q.process(T);for(let $=0,bt=ot.length;$<bt;$++){let Et=ot[$];Et.consumedBy===void 0&&C.insert(Et)}X=C.size,ht=C.pop()}I.reset();let at=ft.factory(q.segments);return new Rt(at).getGeom()}}let Ut=new Nt;var yt={union:function(F){for(var d=arguments.length,m=new Array(d>1?d-1:0),E=1;E<d;E++)m[E-1]=arguments[E];return Ut.run("union",F,m)},intersection:function(F){for(var d=arguments.length,m=new Array(d>1?d-1:0),E=1;E<d;E++)m[E-1]=arguments[E];return Ut.run("intersection",F,m)},xor:function(F){for(var d=arguments.length,m=new Array(d>1?d-1:0),E=1;E<d;E++)m[E-1]=arguments[E];return Ut.run("xor",F,m)},difference:function(F){for(var d=arguments.length,m=new Array(d>1?d-1:0),E=1;E<d;E++)m[E-1]=arguments[E];return Ut.run("difference",F,m)}};return yt}))});var Kl=`<?xml version="1.0" encoding="UTF-8"?>
<!-- Emblema Benny\u2019s \xB7 fuente editable del logo 3D.
     Cada <path> es una pieza extruida en Three.js. data-capa: esmalte (esmalte vino con degradado), acento (esmalte brillante carmes\xED).
     Los contornos de \u201CBenny\u2019s\u201D proceden de Yellowtail (Astigmatic, Apache 2.0); \u201CMOTORS\u201D, de Barlow Condensed (OFL 1.1).
     Orden de apilado y relleno no importan: la geometr\xEDa se genera desde la forma. Edita, guarda y ejecuta: npm run build:logo -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="5.12 -337.77 1188.65 599.38" width="1189" height="599">
  <g id="lettering">
    <path id="letra-B" data-capa="esmalte" d="M115.66-210L121.61-211.44Q122.84-211.44 122.84-209.08Q122.84-206.72 115.77-201.39Q108.69-196.05 98.75-196.05Q88.80-196.05 83.16-201.80Q77.52-207.54 77.52-216.77Q77.52-236.25 102.95-255.42Q128.38-274.60 165.50-286.19Q202.62-297.77 236.66-297.77Q286.49-297.77 310.80-281.57Q335.10-265.37 335.10-238.10Q335.10-203.23 286.70-170.62Q261.27-153.40 231.74-143.14Q264.14-139.66 283.42-122.23Q297.98-109.10 297.98-88.80Q297.98-68.50 278.60-47.48Q259.22-26.46 227.02-12.61Q194.82 1.23 161.19 1.23Q122.43 1.23 104.18-15.79Q95.98-23.58 95.98-29.63Q95.98-35.68 99.05-42.45Q84.08-15.38 77.11-1.64Q74.03 4.51 64.70 4.51Q55.37 4.51 50.24-0.41Q45.12-5.33 45.12-11.48Q45.12-17.64 46.96-22.35Q56.19-46.55 112.08-135.66Q167.96-224.77 180.47-238.92Q187.03-246.91 210.21-246.91Q219.43-246.91 219.43-242.81Q219.43-239.74 192.16-196.67Q164.88-153.60 163.65-151.55Q192.16-159.76 222-174.01Q251.84-188.26 274.09-206.31Q296.34-224.36 296.34-238.92Q296.34-262.91 244.25-262.91Q189.70-262.91 139.25-233.99Q126.74-226.82 120.18-220.87Q113.61-214.92 113.61-212.46Q113.61-210 115.66-210M152.58-111.97Q148.89-111.97 144.38-120.59Q124.89-89.41 103.56-51.27Q113.20-64.60 131.66-64.60Q143.96-64.60 143.96-61.52Q143.96-60.29 141.30-59.27Q133.10-56.19 133.10-50.04Q133.10-35.27 164.47-35.27Q206.92-35.27 241.38-64.80Q259.83-80.39 259.83-92.08Q259.83-99.26 244.86-107.87Q227.43-117.51 191.75-117.51Q166.93-117.51 159.96-114.74Q152.99-111.97 152.58-111.97"/>
    <path id="letra-e" data-capa="esmalte" d="M440.92-153.40Q440.92-139.86 429.95-129.61Q418.97-119.36 405.03-119.36Q400.52-119.36 399.08-121.51Q397.65-123.66 397.65-127.15Q397.65-130.63 398.47-133.92Q391.08-131.46 382.06-126.33Q373.04-121.20 359.91-111.15Q346.79-101.10 346.79-96.18Q346.79-94.54 351.61-94.54Q356.43-94.54 366.47-97.92Q376.52-101.31 380.52-101.31Q384.52-101.31 385.75-100.90Q388.42-99.46 391.49-94.64Q394.57-89.82 394.57-87.06Q394.57-84.29 389.24-79.78Q383.91-75.26 377.14-72.91Q370.37-70.55 368.12-69.32Q324.84-45.12 324.84-36.09Q324.84-20.10 352.12-20.10Q369.55-20.10 387.19-31.17Q402.16-40.61 414.16-50.35Q426.15-60.09 429.33-62.34Q432.51-64.60 434.15-64.60Q439.48-64.60 439.48-52.71Q439.48-40.81 438.05-37.02Q436.61-33.22 429.84-27.69Q385.96 8 346.79 8Q325.87 8 313.36 2.26Q290.39-8.20 290.39-29.74Q290.39-58.04 329.56-72.60Q321.77-76.08 319.51-81.52Q317.26-86.95 317.26-98.95Q317.26-110.95 328.43-124.38Q339.61-137.81 355.81-146.43Q391.90-165.91 420.21-165.91Q426.97-165.91 433.95-162.63Q440.92-159.35 440.92-153.40"/>
    <path id="letra-n-1" data-capa="esmalte" d="M540.18-31.58Q540.18-22.56 552.48-22.56Q559.04-22.56 568.99-29.12Q578.94-35.68 586.93-43.48Q608.26-64.60 611.13-64.60Q616.46-64.60 616.46-49.22Q616.46-33.84 606.83-28.10Q577.50-1.64 561.50 4.10Q552.48 7.18 541.61 6.97Q530.74 6.77 520.08-2.46Q509.41-11.69 509.41-24.92Q509.41-38.14 516.39-54.96Q523.36-71.78 530.64-83.77Q537.92-95.77 548.58-111.67Q559.25-127.56 559.86-131.46L559.45-131.87Q552.69-131.25 525.92-105.21Q499.16-79.16 481.73-59.88Q464.30-40.61 440.10-8.41Q433.33 0.41 429.02 0.41Q424.72 0.41 417.44-2.36Q410.16-5.13 408.52-6.36Q406.88-7.59 406.88-10.05Q406.88-12.51 408.31-16.10Q409.75-19.69 411.08-22.05Q412.41-24.40 415.49-29.33Q418.56-34.25 427.69-50.14Q436.82-66.04 455.68-97.62Q474.55-129.20 478.24-135.76Q486.04-149.30 490.96-155.45Q500.19-167.14 522.13-167.14Q527.05-167.14 527.05-160.99Q527.05-151.35 509.21-124.69L500.60-111.77Q536.07-151.14 560.48-161.60Q572.37-166.73 581.91-166.73Q591.45-166.73 597.08-161.60Q602.72-156.47 602.72-150.22Q602.72-143.96 598.42-135.25Q594.11-126.53 589.70-119.66Q585.29-112.79 578.12-102.33Q570.94-91.87 570.32-90.95Q569.71-90.03 567.14-86.03Q564.58-82.03 563.35-80.19Q562.12-78.34 559.25-73.73Q556.38-69.11 554.63-66.04Q552.89-62.96 550.33-58.45Q547.76-53.94 546.23-50.65Q544.69-47.37 543.05-43.48Q540.18-36.30 540.18-31.58"/>
    <path id="letra-n-2" data-capa="esmalte" d="M704.24-31.58Q704.24-22.56 716.54-22.56Q723.11-22.56 733.05-29.12Q743-35.68 751-43.48Q772.32-64.60 775.20-64.60Q780.53-64.60 780.53-49.22Q780.53-33.84 770.89-28.10Q741.56-1.64 725.57 4.10Q716.54 7.18 705.67 6.97Q694.80 6.77 684.14-2.46Q673.48-11.69 673.48-24.92Q673.48-38.14 680.45-54.96Q687.42-71.78 694.70-83.77Q701.98-95.77 712.65-111.67Q723.31-127.56 723.93-131.46L723.52-131.87Q716.75-131.25 689.99-105.21Q663.22-79.16 645.79-59.88Q628.36-40.61 604.16-8.41Q597.39 0.41 593.09 0.41Q588.78 0.41 581.50-2.36Q574.22-5.13 572.58-6.36Q570.94-7.59 570.94-10.05Q570.94-12.51 572.37-16.10Q573.81-19.69 575.14-22.05Q576.47-24.40 579.55-29.33Q582.63-34.25 591.75-50.14Q600.88-66.04 619.75-97.62Q638.61-129.20 642.30-135.76Q650.10-149.30 655.02-155.45Q664.25-167.14 686.19-167.14Q691.11-167.14 691.11-160.99Q691.11-151.35 673.27-124.69L664.66-111.77Q700.14-151.14 724.54-161.60Q736.44-166.73 745.97-166.73Q755.51-166.73 761.15-161.60Q766.79-156.47 766.79-150.22Q766.79-143.96 762.48-135.25Q758.17-126.53 753.76-119.66Q749.36-112.79 742.18-102.33Q735-91.87 734.38-90.95Q733.77-90.03 731.21-86.03Q728.64-82.03 727.41-80.19Q726.18-78.34 723.31-73.73Q720.44-69.11 718.70-66.04Q716.95-62.96 714.39-58.45Q711.83-53.94 710.29-50.65Q708.75-47.37 707.11-43.48Q704.24-36.30 704.24-31.58"/>
    <path id="letra-y" data-capa="esmalte" d="M823.39 68.09Q822.36 69.11 817.13 78.44Q811.90 87.77 805.96 97.31Q800.01 106.85 791.29 115.46Q782.58 124.07 776.73 124.79Q770.89 125.51 769.25 125.51Q750.38 125.51 750.38 106.44Q750.38 84.08 773.55 54.14Q782.37 42.86 795.70 29.84Q809.03 16.82 810.26 15.07Q811.49 13.33 841.03-42.45Q821.34-20.92 804.52-7.49Q787.71 5.95 772.12 7.59L770.68 7.59Q762.69 7.59 754.89 2.36Q747.10-2.87 747.10-16Q747.10-35.48 757.56-53.73Q761.25-60.09 770.38-75.26Q779.50-90.44 787.29-104.59Q794.68-115.87 802.47-130.84Q810.26-145.81 814.37-152.27Q818.47-158.73 822.16-158.73Q825.85-158.73 831.69-154.12Q837.54-149.50 837.54-143.14Q837.54-136.79 810.67-87.98Q783.81-39.17 783.81-32.40Q783.81-30.76 785.45-30.76Q790.99-30.76 809.96-46.45Q828.93-62.14 851.89-86.75Q877.53-114.02 892.09-136.58Q893.94-139.45 895.06-140.99Q896.19-142.53 897.93-145.09Q899.68-147.66 900.81-149.09Q901.93-150.53 903.47-152.48Q905.01-154.42 906.24-155.45Q907.47-156.47 908.91-157.50Q911.16-159.55 913.93-159.55Q916.70-159.55 922.34-158.32Q927.98-157.09 929.11-155.65Q930.23-154.22 931.46-152.99Q933.52-150.73 933.52-148.78Q933.52-146.84 931.88-143.66Q930.23-140.48 912.80-111.15Q861.53-24.61 842.26 15.18Q873.43-11.07 930.03-62.55Q932.29-64.39 934.54-64.39Q940.90-64.39 940.90-44.91Q940.90-39.17 938.85-37.32Q877.53 9.84 823.39 68.09"/>
    <path id="apostrofe" data-capa="esmalte" d="M1042-274.39Q1052.87-274.39 1057.90-268.45Q1062.92-262.50 1062.92-252.86Q1062.92-243.22 1056.05-233.99Q1049.18-224.77 1035.54-214.61Q1021.90-204.46 1015.34-204.46Q1008.78-204.46 1006.22-206.92Q1003.65-209.38 1002.22-209.79Q1000.78-210.21 1000.78-213.38Q1000.78-216.56 1002.42-217.79Q1004.06-219.02 1010.73-228.56Q1017.39-238.10 1018.62-241.17Q1015.34-244.25 1015.34-251.12Q1015.34-257.99 1023.24-266.19Q1031.13-274.39 1042-274.39"/>
    <path id="letra-s" data-capa="esmalte" d="M1010.21-41.02L1010.01-37.73Q1010.01-32.61 1013.91-28.92Q1017.80-25.22 1021.08-25.22Q1045.69-25.22 1064.66-32.61Q1083.63-39.99 1083.63-47.37Q1083.63-50.86 1076.76-53.42Q1069.89-55.99 1053.59-59.78Q1037.29-63.57 1029.90-65.73Q1022.52-67.88 1018.21-69.73Q1013.91-71.57 1009.39-74.85Q999.76-81.62 999.76-95.05Q999.76-108.49 1009.70-121.71Q1019.65-134.94 1034.62-144.37Q1049.59-153.81 1066.82-160.99Q1100.86-175.14 1124.03-175.14Q1146.80-175.14 1152.13-165.29Q1153.77-161.81 1153.77-157.50L1153.77-156.06Q1153.77-145.20 1149.16-139.04Q1144.54-132.89 1134.59-127.97Q1124.65-123.05 1118.80-123.05Q1112.96-123.05 1111.42-123.87Q1109.88-124.69 1108.86-126.02Q1107.83-127.35 1106.29-127.97Q1104.76-128.58 1104.76-131.04Q1104.76-133.51 1106.81-136.07Q1108.86-138.63 1109.68-141.50Q1096.14-140.89 1081.38-135.25Q1066.61-129.61 1056.05-122.64Q1045.49-115.66 1038.52-109.31Q1031.54-102.95 1031.54-99.98Q1031.54-97 1040.98-95.16Q1083.43-86.75 1096.76-80.60Q1110.09-74.44 1115.21-66.65Q1120.34-58.86 1120.34-52.50Q1120.34-39.37 1109.88-27.69Q1099.42-16 1084.04-8.61Q1051.03 7.59 1026.52 7.59Q1002.01 7.59 992.68 0.10Q983.35-7.38 983.35-17.64Q983.35-27.89 988.58-36.61Q993.81-45.32 1002.01-45.32Q1010.21-45.32 1010.21-41.02"/>
    <path id="remate" data-capa="esmalte" d="M89.46 125.16 C399.89 171.16 776.83 165.16 1137.14 99.16 C821.17 131.16 422.06 135.16 89.46 125.16Z"/>
  </g>
  <g id="etiqueta">
    <path id="motors-1-M" data-capa="esmalte" transform="translate(429.66 221.61)" d="M22.57-42.90Q22.82-43.40 23.50-43.40L30.69-43.40Q31-43.40 31.22-43.18Q31.43-42.97 31.43-42.66L31.43-0.74Q31.43-0.43 31.22-0.22Q31 0 30.69 0L23.44 0Q23.13 0 22.91-0.22Q22.69-0.43 22.69-0.74L22.69-28.58Q22.69-28.83 22.57-28.83Q22.44-28.83 22.32-28.64L17.48-20.09Q17.17-19.59 16.99-19.59Q16.80-19.59 16.49-20.09L11.66-28.64Q11.53-28.83 11.41-28.83Q11.28-28.83 11.28-28.58L11.28-0.74Q11.28-0.43 11.07-0.22Q10.85 0 10.54 0L3.29 0Q2.98 0 2.76-0.22Q2.54-0.43 2.54-0.74L2.54-42.66Q2.54-42.97 2.76-43.18Q2.98-43.40 3.29-43.40L10.42-43.40Q11.04-43.40 11.35-42.90L16.86-33.05Q17.05-32.80 17.24-33.05"/>
    <path id="motors-2-O" data-capa="esmalte" transform="translate(429.66 221.61)" d="M80.85 0.50Q75.14 0.50 71.73-2.85Q68.32-6.20 68.32-11.78L68.32-31.62Q68.32-37.20 71.73-40.55Q75.14-43.90 80.85-43.90Q86.55-43.90 89.99-40.55Q93.43-37.20 93.43-31.62L93.43-11.78Q93.43-6.20 89.99-2.85Q86.55 0.50 80.85 0.50M80.85-7.01Q82.58-7.01 83.64-8.21Q84.69-9.42 84.69-11.41L84.69-31.99Q84.69-33.98 83.64-35.19Q82.58-36.39 80.85-36.39Q79.11-36.39 78.09-35.19Q77.07-33.98 77.07-31.99L77.07-11.41Q77.07-9.42 78.09-8.21Q79.11-7.01 80.85-7.01"/>
    <path id="motors-3-T" data-capa="esmalte" transform="translate(429.66 221.61)" d="M154.57-43.40Q154.88-43.40 155.09-43.18Q155.31-42.97 155.31-42.66L155.31-36.64Q155.31-36.33 155.09-36.12Q154.88-35.90 154.57-35.90L146.82-35.90Q146.51-35.90 146.51-35.59L146.51-0.74Q146.51-0.43 146.29-0.22Q146.07 0 145.76 0L138.51 0Q138.20 0 137.98-0.22Q137.76-0.43 137.76-0.74L137.76-35.59Q137.76-35.90 137.45-35.90L130.01-35.90Q129.70-35.90 129.49-36.12Q129.27-36.33 129.27-36.64L129.27-42.66Q129.27-42.97 129.49-43.18Q129.70-43.40 130.01-43.40"/>
    <path id="motors-4-O" data-capa="esmalte" transform="translate(429.66 221.61)" d="M203.67 0.50Q197.97 0.50 194.56-2.85Q191.15-6.20 191.15-11.78L191.15-31.62Q191.15-37.20 194.56-40.55Q197.97-43.90 203.67-43.90Q209.37-43.90 212.81-40.55Q216.26-37.20 216.26-31.62L216.26-11.78Q216.26-6.20 212.81-2.85Q209.37 0.50 203.67 0.50M203.67-7.01Q205.41-7.01 206.46-8.21Q207.51-9.42 207.51-11.41L207.51-31.99Q207.51-33.98 206.46-35.19Q205.41-36.39 203.67-36.39Q201.93-36.39 200.91-35.19Q199.89-33.98 199.89-31.99L199.89-11.41Q199.89-9.42 200.91-8.21Q201.93-7.01 203.67-7.01"/>
    <path id="motors-5-R" data-capa="esmalte" transform="translate(429.66 221.61)" d="M270.44 0Q269.76 0 269.58-0.62L264.80-17.73Q264.68-17.98 264.49-17.98L262.38-17.98Q262.07-17.98 262.07-17.67L262.07-0.74Q262.07-0.43 261.86-0.22Q261.64 0 261.33 0L254.08 0Q253.77 0 253.55-0.22Q253.33-0.43 253.33-0.74L253.33-42.66Q253.33-42.97 253.55-43.18Q253.77-43.40 254.08-43.40L266.60-43.40Q270.01-43.40 272.68-41.76Q275.34-40.11 276.80-37.14Q278.26-34.16 278.26-30.32Q278.26-26.66 276.86-23.87Q275.47-21.08 272.99-19.53Q272.86-19.47 272.80-19.37Q272.74-19.28 272.80-19.16L278.50-0.87L278.57-0.62Q278.57 0 277.88 0L270.44 0M262.38-35.90Q262.07-35.90 262.07-35.59L262.07-24.99Q262.07-24.68 262.38-24.68L265.17-24.68Q267.10-24.68 268.31-26.20Q269.51-27.71 269.51-30.26Q269.51-32.86 268.31-34.38Q267.10-35.90 265.17-35.90"/>
    <path id="motors-6-S" data-capa="esmalte" transform="translate(429.66 221.61)" d="M325.93 0.50Q322.34 0.50 319.61-0.93Q316.88-2.36 315.39-4.93Q313.91-7.50 313.91-10.85L313.91-12.65Q313.91-12.96 314.12-13.18Q314.34-13.39 314.65-13.39L321.78-13.39Q322.09-13.39 322.31-13.18Q322.52-12.96 322.52-12.65L322.52-11.28Q322.52-9.36 323.52-8.18Q324.51-7.01 326-7.01Q327.48-7.01 328.48-8.12Q329.47-9.24 329.47-11.04Q329.47-12.90 328.23-14.23Q326.99-15.56 323.39-18.17Q320.29-20.40 318.37-22.13Q316.45-23.87 315.08-26.41Q313.72-28.95 313.72-32.30Q313.72-37.57 317.01-40.73Q320.29-43.90 325.69-43.90Q331.14-43.90 334.46-40.61Q337.78-37.32 337.78-31.99L337.78-30.50Q337.78-30.19 337.56-29.98Q337.34-29.76 337.03-29.76L329.90-29.76Q329.59-29.76 329.38-29.98Q329.16-30.19 329.16-30.50L329.16-32.18Q329.16-34.10 328.20-35.25Q327.24-36.39 325.69-36.39Q324.20-36.39 323.27-35.31Q322.34-34.22 322.34-32.30Q322.34-30.44 323.52-29.02Q324.69-27.59 328.17-25.05Q332.01-22.20 333.96-20.43Q335.92-18.66 337-16.52Q338.09-14.38 338.09-11.41Q338.09-5.95 334.74-2.73Q331.39 0.50 325.93 0.50"/>
    <rect id="filete-izq" data-capa="acento" x="245.66" y="199.29" width="150" height="5" rx="2.5"/>
    <rect id="filete-der" data-capa="acento" x="803.23" y="199.29" width="150" height="5" rx="2.5"/>
  </g>
</svg>
`;var jl=`<?xml version="1.0" encoding="UTF-8"?>
<!-- Monograma Benny\u2019s: misma geometr\xEDa que la B del emblema (copiada de wordmark.svg > #letra-B). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="11.76 -324.98 356.7 356.7" width="357" height="357">
  <g id="monograma">
    <path id="letra-B" data-capa="esmalte" d="M115.66-210L121.61-211.44Q122.84-211.44 122.84-209.08Q122.84-206.72 115.77-201.39Q108.69-196.05 98.75-196.05Q88.80-196.05 83.16-201.80Q77.52-207.54 77.52-216.77Q77.52-236.25 102.95-255.42Q128.38-274.60 165.50-286.19Q202.62-297.77 236.66-297.77Q286.49-297.77 310.80-281.57Q335.10-265.37 335.10-238.10Q335.10-203.23 286.70-170.62Q261.27-153.40 231.74-143.14Q264.14-139.66 283.42-122.23Q297.98-109.10 297.98-88.80Q297.98-68.50 278.60-47.48Q259.22-26.46 227.02-12.61Q194.82 1.23 161.19 1.23Q122.43 1.23 104.18-15.79Q95.98-23.58 95.98-29.63Q95.98-35.68 99.05-42.45Q84.08-15.38 77.11-1.64Q74.03 4.51 64.70 4.51Q55.37 4.51 50.24-0.41Q45.12-5.33 45.12-11.48Q45.12-17.64 46.96-22.35Q56.19-46.55 112.08-135.66Q167.96-224.77 180.47-238.92Q187.03-246.91 210.21-246.91Q219.43-246.91 219.43-242.81Q219.43-239.74 192.16-196.67Q164.88-153.60 163.65-151.55Q192.16-159.76 222-174.01Q251.84-188.26 274.09-206.31Q296.34-224.36 296.34-238.92Q296.34-262.91 244.25-262.91Q189.70-262.91 139.25-233.99Q126.74-226.82 120.18-220.87Q113.61-214.92 113.61-212.46Q113.61-210 115.66-210M152.58-111.97Q148.89-111.97 144.38-120.59Q124.89-89.41 103.56-51.27Q113.20-64.60 131.66-64.60Q143.96-64.60 143.96-61.52Q143.96-60.29 141.30-59.27Q133.10-56.19 133.10-50.04Q133.10-35.27 164.47-35.27Q206.92-35.27 241.38-64.80Q259.83-80.39 259.83-92.08Q259.83-99.26 244.86-107.87Q227.43-117.51 191.75-117.51Q166.93-117.51 159.96-114.74Q152.99-111.97 152.58-111.97"/>
  </g>
</svg>
`;var Ic=0,Ya=1,Pc=2;var Ws=1,Lc=2,ss=3,ii=0,Ie=1,Ve=2,Rn=0,rs=1,Za=2,Ja=3,$a=4,Nc=5;var Si=100,Dc=101,Uc=102,Fc=103,Oc=104,Bc=200,zc=201,kc=202,Vc=203,Ka=204,ja=205,Gc=206,Hc=207,Wc=208,Xc=209,Qc=210,qc=211,Yc=212,Zc=213,Jc=214,Pr=0,Lr=1,Nr=2,Hi=3,Dr=4,Ur=5,Fr=6,Or=7,tl=0,$c=1,Kc=2,mn=0,el=1,nl=2,il=3,sl=4,rl=5,ol=6,os=7;var al=300,si=301,Mi=302,go=303,xo=304,Xs=306,Wi=1e3,rn=1001,Xi=1002,Te=1003,jc=1004;var Qs=1005;var Re=1006,_o=1007;var ri=1008;var qe=1009,ll=1010,cl=1011,as=1012,yo=1013,gn=1014,xn=1015,_n=1016,vo=1017,So=1018,ls=1020,hl=35902,ul=35899,fl=1021,dl=1022,an=1023,En=1026,oi=1027,pl=1028,Mo=1029,ai=1030,bo=1031;var Eo=1033,qs=33776,Ys=33777,Zs=33778,Js=33779,wo=35840,To=35841,Ao=35842,Ro=35843,Co=36196,Io=37492,Po=37496,Lo=37488,No=37489,$s=37490,Do=37491,Uo=37808,Fo=37809,Oo=37810,Bo=37811,zo=37812,ko=37813,Vo=37814,Go=37815,Ho=37816,Wo=37817,Xo=37818,Qo=37819,qo=37820,Yo=37821,Zo=36492,Jo=36494,$o=36495,Ko=36283,jo=36284,Ks=36285,ta=36286;var Es=2300,Br=2301,Cr=2302,Ua=2303,Fa=2400,Oa=2401,Ba=2402;var th=3200;var ea=0,eh=1,zn="",we="srgb",pi="srgb-linear",ws="linear",oe="srgb";var Ir=7680;var nh=519,ih=512,sh=513,rh=514,na=515,oh=516,ah=517,ia=518,lh=519,ch=35044;var ml="300 es",fn=2e3,Qi=2001;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hh(){let i=Ts("canvas");return i.style.display="block",i}var tc={},qi=null;function gl(...i){let t="THREE."+i.shift();qi?qi("log",t,...i):console.log(t,...i)}function uh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=uh(i);let t="THREE."+i.shift();if(qi)qi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=uh(i);let t="THREE."+i.shift();if(qi)qi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function di(...i){let t=i.join(" ");t in tc||(tc[t]=!0,Qt(...i))}function fh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dh={[Pr]:Lr,[Nr]:Fr,[Dr]:Or,[Hi]:Ur,[Lr]:Pr,[Fr]:Nr,[Or]:Dr,[Ur]:Hi},wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ec=1234567,vs=Math.PI/180,Yi=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function xl(i,t){return(i%t+t)%t}function Su(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Mu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ss(i,t,e){return(1-e)*i+e*t}function bu(i,t,e,n){return Ss(i,t,1-Math.exp(-e*n))}function Eu(i,t=1){return t-Math.abs(xl(i,t*2)-t)}function wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Au(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ru(i,t){return i+Math.random()*(t-i)}function Cu(i){return i*(.5-Math.random())}function Iu(i){i!==void 0&&(ec=i);let t=ec+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pu(i){return i*vs}function Lu(i){return i*Yi}function Nu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),g=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*g,a*l);break;case"YXY":i.set(c*g,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*g,a*u,a*l);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var li={DEG2RAD:vs,RAD2DEG:Yi,generateUUID:bi,clamp:ee,euclideanModulo:xl,mapLinear:Su,inverseLerp:Mu,lerp:Ss,damp:bu,pingpong:Eu,smoothstep:wu,smootherstep:Tu,randInt:Au,randFloat:Ru,randFloatSpread:Cu,seededRandom:Iu,degToRad:Pu,radToDeg:Lu,isPowerOfTwo:Nu,ceilPowerOfTwo:Du,floorPowerOfTwo:Uu,setQuaternionFromProperEuler:Fu,normalize:Be,denormalize:Vi},bl=class bl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bl.prototype.isVector2=!0;var At=bl,Tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],g=r[o+1],_=r[o+2],M=r[o+3];if(f!==M||c!==h||l!==g||u!==_){let x=c*h+l*g+u*_+f*M;x<0&&(h=-h,g=-g,_=-_,M=-M,x=-x);let p=1-a;if(x<.9995){let U=Math.acos(x),O=Math.sin(U);p=Math.sin(p*U)/O,a=Math.sin(a*U)/O,c=c*p+h*a,l=l*p+g*a,u=u*p+_*a,f=f*p+M*a}else{c=c*p+h*a,l=l*p+g*a,u=u*p+_*a,f=f*p+M*a;let U=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=U,l*=U,u*=U,f*=U}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+u*f+c*g-l*h,t[e+1]=c*_+u*h+l*f-a*g,t[e+2]=l*_+u*g+a*h-c*f,t[e+3]=u*_-a*f-c*h-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),g=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*g*_,this._y=l*g*f-h*u*_,this._z=l*u*_+h*g*f,this._w=l*u*f-h*g*_;break;case"YXZ":this._x=h*u*f+l*g*_,this._y=l*g*f-h*u*_,this._z=l*u*_-h*g*f,this._w=l*u*f+h*g*_;break;case"ZXY":this._x=h*u*f-l*g*_,this._y=l*g*f+h*u*_,this._z=l*u*_+h*g*f,this._w=l*u*f-h*g*_;break;case"ZYX":this._x=h*u*f-l*g*_,this._y=l*g*f+h*u*_,this._z=l*u*_-h*g*f,this._w=l*u*f+h*g*_;break;case"YZX":this._x=h*u*f+l*g*_,this._y=l*g*f+h*u*_,this._z=l*u*_-h*g*f,this._w=l*u*f-h*g*_;break;case"XZY":this._x=h*u*f-l*g*_,this._y=l*g*f-h*u*_,this._z=l*u*_+h*g*f,this._w=l*u*f+h*g*_;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-l)*g,this._z=(o-s)*g}else if(n>a&&n>f){let g=2*Math.sqrt(1+n-a-f);this._w=(u-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+l)/g}else if(a>f){let g=2*Math.sqrt(1+a-n-f);this._w=(r-l)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+u)/g}else{let g=2*Math.sqrt(1+f-n-a);this._w=(o-s)/g,this._x=(r+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},El=class El{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};El.prototype.isVector3=!0;var K=El,ua=new K,nc=new Tn,wl=class wl{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],g=n[5],_=n[8],M=s[0],x=s[3],p=s[6],U=s[1],O=s[4],y=s[7],A=s[2],I=s[5],B=s[8];return r[0]=o*M+a*U+c*A,r[3]=o*x+a*O+c*I,r[6]=o*p+a*y+c*B,r[1]=l*M+u*U+f*A,r[4]=l*x+u*O+f*I,r[7]=l*p+u*y+f*B,r[2]=h*M+g*U+_*A,r[5]=h*x+g*O+_*I,r[8]=h*p+g*y+_*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,g=l*r-o*c,_=e*f+n*h+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=f*M,t[1]=(s*l-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=h*M,t[4]=(u*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=g*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fa.makeScale(t,e)),this}rotate(t){return di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wl.prototype.isMatrix3=!0;var Wt=wl,fa=new Wt,ic=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ou(){let i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pi]:{primaries:t,whitePoint:n,transfer:ws,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}var ie=Ou();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ri,zr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=Ts("canvas")),Ri.width=t.width,Ri.height=t.height;let s=Ri.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ts("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bu=0,Zi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var zu=0,pa=new K,ze=class i extends wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=rn,s=rn,r=Re,o=ri,a=an,c=qe,l=i.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=bi(),this.name="",this.source=new Zi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case Xi:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case Xi:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=al;ze.DEFAULT_ANISOTROPY=1;var Tl=class Tl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],g=c[5],_=c[9],M=c[2],x=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(_-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(_+x)<.1&&Math.abs(l+g+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let O=(l+1)/2,y=(g+1)/2,A=(p+1)/2,I=(u+h)/4,B=(f+M)/4,S=(_+x)/4;return O>y&&O>A?O<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(O),s=I/n,r=B/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=I/s,r=S/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=B/r,s=S/r),this.set(n,s,r,e),this}let U=Math.sqrt((x-_)*(x-_)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(U)<.001&&(U=1),this.x=(x-_)/U,this.y=(f-M)/U,this.z=(h-u)/U,this.w=Math.acos((l+g+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tl.prototype.isVector4=!0;var me=Tl,kr=class extends wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Re,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ze(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Re,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends kr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},As=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vr=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var mo=class mo{constructor(t,e,n,s,r,o,a,c,l,u,f,h,g,_,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,g,_,M,x)}set(t,e,n,s,r,o,a,c,l,u,f,h,g,_,M,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=g,p[7]=_,p[11]=M,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,g=o*f,_=a*u,M=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=g+_*l,e[5]=h-M*l,e[9]=-a*c,e[2]=M-h*l,e[6]=_+g*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,g=c*f,_=l*u,M=l*f;e[0]=h+M*a,e[4]=_*a-g,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=g*a-_,e[6]=M+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,g=c*f,_=l*u,M=l*f;e[0]=h-M*a,e[4]=-o*f,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*u,e[9]=M-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,g=o*f,_=a*u,M=a*f;e[0]=c*u,e[4]=_*l-g,e[8]=h*l+M,e[1]=c*f,e[5]=M*l+h,e[9]=g*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,g=o*l,_=a*c,M=a*l;e[0]=c*u,e[4]=M-h*f,e[8]=_*f+g,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=g*f+_,e[10]=h-M*f}else if(t.order==="XZY"){let h=o*c,g=o*l,_=a*c,M=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+M,e[5]=o*u,e[9]=g*f-_,e[2]=_*f-g,e[6]=a*u,e[10]=M*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ku,t,Vu)}lookAt(t,e,n){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Wn.crossVectors(n,Je),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Wn.crossVectors(n,Je)),Wn.normalize(),lr.crossVectors(Je,Wn),s[0]=Wn.x,s[4]=lr.x,s[8]=Je.x,s[1]=Wn.y,s[5]=lr.y,s[9]=Je.y,s[2]=Wn.z,s[6]=lr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],g=n[13],_=n[2],M=n[6],x=n[10],p=n[14],U=n[3],O=n[7],y=n[11],A=n[15],I=s[0],B=s[4],S=s[8],L=s[12],W=s[1],J=s[5],Z=s[9],lt=s[13],V=s[2],tt=s[6],ct=s[10],st=s[14],et=s[3],mt=s[7],ut=s[11],Mt=s[15];return r[0]=o*I+a*W+c*V+l*et,r[4]=o*B+a*J+c*tt+l*mt,r[8]=o*S+a*Z+c*ct+l*ut,r[12]=o*L+a*lt+c*st+l*Mt,r[1]=u*I+f*W+h*V+g*et,r[5]=u*B+f*J+h*tt+g*mt,r[9]=u*S+f*Z+h*ct+g*ut,r[13]=u*L+f*lt+h*st+g*Mt,r[2]=_*I+M*W+x*V+p*et,r[6]=_*B+M*J+x*tt+p*mt,r[10]=_*S+M*Z+x*ct+p*ut,r[14]=_*L+M*lt+x*st+p*Mt,r[3]=U*I+O*W+y*V+A*et,r[7]=U*B+O*J+y*tt+A*mt,r[11]=U*S+O*Z+y*ct+A*ut,r[15]=U*L+O*lt+y*st+A*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],g=t[14],_=t[3],M=t[7],x=t[11],p=t[15],U=c*g-l*h,O=a*g-l*f,y=a*h-c*f,A=o*g-l*u,I=o*h-c*u,B=o*f-a*u;return e*(M*U-x*O+p*y)-n*(_*U-x*A+p*I)+s*(_*O-M*A+p*B)-r*(_*y-M*I+x*B)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],g=t[11],_=t[12],M=t[13],x=t[14],p=t[15],U=e*a-n*o,O=e*c-s*o,y=e*l-r*o,A=n*c-s*a,I=n*l-r*a,B=s*l-r*c,S=u*M-f*_,L=u*x-h*_,W=u*p-g*_,J=f*x-h*M,Z=f*p-g*M,lt=h*p-g*x,V=U*lt-O*Z+y*J+A*W-I*L+B*S;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let tt=1/V;return t[0]=(a*lt-c*Z+l*J)*tt,t[1]=(s*Z-n*lt-r*J)*tt,t[2]=(M*B-x*I+p*A)*tt,t[3]=(h*I-f*B-g*A)*tt,t[4]=(c*W-o*lt-l*L)*tt,t[5]=(e*lt-s*W+r*L)*tt,t[6]=(x*y-_*B-p*O)*tt,t[7]=(u*B-h*y+g*O)*tt,t[8]=(o*Z-a*W+l*S)*tt,t[9]=(n*W-e*Z-r*S)*tt,t[10]=(_*I-M*y+p*U)*tt,t[11]=(f*y-u*I-g*U)*tt,t[12]=(a*L-o*J-c*S)*tt,t[13]=(e*J-n*L+s*S)*tt,t[14]=(M*O-_*A-x*U)*tt,t[15]=(u*A-f*O+h*U)*tt,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,g=r*u,_=r*f,M=o*u,x=o*f,p=a*f,U=c*l,O=c*u,y=c*f,A=n.x,I=n.y,B=n.z;return s[0]=(1-(M+p))*A,s[1]=(g+y)*A,s[2]=(_-O)*A,s[3]=0,s[4]=(g-y)*I,s[5]=(1-(h+p))*I,s[6]=(x+U)*I,s[7]=0,s[8]=(_+O)*B,s[9]=(x-U)*B,s[10]=(1-(h+M))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ci.set(s[0],s[1],s[2]).length(),a=Ci.set(s[4],s[5],s[6]).length(),c=Ci.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ln.copy(this);let l=1/o,u=1/a,f=1/c;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,e.setFromRotationMatrix(ln),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=fn,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),g=(n+s)/(n-s),_,M;if(c)_=r/(o-r),M=o*r/(o-r);else if(a===fn)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Qi)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=fn,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),g=-(n+s)/(n-s),_,M;if(c)_=1/(o-r),M=o/(o-r);else if(a===fn)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===Qi)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};mo.prototype.isMatrix4=!0;var pe=mo,Ci=new K,ln=new pe,ku=new K(0,0,0),Vu=new K(1,1,1),Wn=new K,lr=new K,Je=new K,rc=new pe,oc=new Tn,Bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var Rs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gu=0,ac=new K,Ii=new Tn,Pn=new pe,cr=new K,ms=new K,Hu=new K,Wu=new Tn,lc=new K(1,0,0),cc=new K(0,1,0),hc=new K(0,0,1),uc={type:"added"},Xu={type:"removed"},Pi={type:"childadded",child:null},ma={type:"childremoved",child:null},ke=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new K,e=new Bn,n=new Tn,s=new K(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Wt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(lc,t)}rotateY(t){return this.rotateOnAxis(cc,t)}rotateZ(t){return this.rotateOnAxis(hc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lc,t)}translateY(t){return this.translateOnAxis(cc,t)}translateZ(t){return this.translateOnAxis(hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ms,cr,this.up):Pn.lookAt(cr,ms,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xu),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Wu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ke.DEFAULT_UP=new K(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qu={type:"move"},Ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,n),p=this._getHandJoint(l,M);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),g=.02,_=.005;l.inputState.pinching&&h>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=xl(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ga(o,r,t+1/3),this.g=ga(o,r,t),this.b=ga(o,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return ie.workingToColorSpace(Ne.copy(this),t),Math.round(ee(Ne.r*255,0,255))*65536+Math.round(ee(Ne.g*255,0,255))*256+Math.round(ee(Ne.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=we){ie.workingToColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(hr);let n=Ss(Xn.h,hr.h,e),s=Ss(Xn.s,hr.s,e),r=Ss(Xn.l,hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Xt;Xt.NAMES=ph;var $i=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},cn=new K,Ln=new K,xa=new K,Nn=new K,Li=new K,Ni=new K,fc=new K,_a=new K,ya=new K,va=new K,Sa=new me,Ma=new me,ba=new me,Zn=class i{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Ln.subVectors(n,e),xa.subVectors(t,e);let o=cn.dot(cn),a=cn.dot(Ln),c=cn.dot(xa),l=Ln.dot(Ln),u=Ln.dot(xa),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,g=(l*c-a*u)*h,_=(o*u-a*c)*h;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Sa.setScalar(0),Ma.setScalar(0),ba.setScalar(0),Sa.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,n),ba.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(Ma,r.y),o.addScaledVector(ba,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Ln.subVectors(t,e),cn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),cn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Li.subVectors(s,n),Ni.subVectors(r,n),_a.subVectors(t,n);let c=Li.dot(_a),l=Ni.dot(_a);if(c<=0&&l<=0)return e.copy(n);ya.subVectors(t,s);let u=Li.dot(ya),f=Ni.dot(ya);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Li,o);va.subVectors(t,r);let g=Li.dot(va),_=Ni.dot(va);if(_>=0&&g<=_)return e.copy(r);let M=g*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Ni,a);let x=u*_-g*f;if(x<=0&&f-u>=0&&g-_>=0)return fc.subVectors(r,s),a=(f-u)/(f-u+(g-_)),e.copy(s).addScaledVector(fc,a);let p=1/(x+M+h);return o=M*p,a=h*p,e.copy(n).addScaledVector(Li,o).addScaledVector(Ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},An=class{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),fr.subVectors(this.max,gs),Di.subVectors(t.a,gs),Ui.subVectors(t.b,gs),Fi.subVectors(t.c,gs),Qn.subVectors(Ui,Di),qn.subVectors(Fi,Ui),ci.subVectors(Di,Fi);let e=[0,-Qn.z,Qn.y,0,-qn.z,qn.y,0,-ci.z,ci.y,Qn.z,0,-Qn.x,qn.z,0,-qn.x,ci.z,0,-ci.x,-Qn.y,Qn.x,0,-qn.y,qn.x,0,-ci.y,ci.x,0];return!Ea(e,Di,Ui,Fi,fr)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,Di,Ui,Fi,fr))?!1:(dr.crossVectors(Qn,qn),e=[dr.x,dr.y,dr.z],Ea(e,Di,Ui,Fi,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Dn=[new K,new K,new K,new K,new K,new K,new K,new K],hn=new K,ur=new An,Di=new K,Ui=new K,Fi=new K,Qn=new K,qn=new K,ci=new K,gs=new K,fr=new K,dr=new K,hi=new K;function Ea(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hi.fromArray(i,r);let a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),u=n.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var ye=new K,pr=new At,qu=0,De=class extends wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Cs=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Is=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ve=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yu=new An,xs=new K,wa=new K,Ki=class{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(wa)),this.expandByPoint(xs.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zu=0,sn=new pe,Ta=new ke,Oi=new K,$e=new An,_s=new An,Ee=new K,Qe=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?Is:Cs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors($e.min,_s.min),$e.expandByPoint(Ee),Ee.addVectors($e.max,_s.max),$e.expandByPoint(Ee)):($e.expandByPoint(_s.min),$e.expandByPoint(_s.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ee.fromBufferAttribute(a,l),c&&(Oi.fromBufferAttribute(t,l),Ee.add(Oi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new De(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new K,c[S]=new K;let l=new K,u=new K,f=new K,h=new At,g=new At,_=new At,M=new K,x=new K;function p(S,L,W){l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,L),f.fromBufferAttribute(n,W),h.fromBufferAttribute(r,S),g.fromBufferAttribute(r,L),_.fromBufferAttribute(r,W),u.sub(l),f.sub(l),g.sub(h),_.sub(h);let J=1/(g.x*_.y-_.x*g.y);isFinite(J)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(J),x.copy(f).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(J),a[S].add(M),a[L].add(M),a[W].add(M),c[S].add(x),c[L].add(x),c[W].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let S=0,L=U.length;S<L;++S){let W=U[S],J=W.start,Z=W.count;for(let lt=J,V=J+Z;lt<V;lt+=3)p(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}let O=new K,y=new K,A=new K,I=new K;function B(S){A.fromBufferAttribute(s,S),I.copy(A);let L=a[S];O.copy(L),O.sub(A.multiplyScalar(A.dot(L))).normalize(),y.crossVectors(I,L);let J=y.dot(c[S])<0?-1:1;o.setXYZW(S,O.x,O.y,O.z,J)}for(let S=0,L=U.length;S<L;++S){let W=U[S],J=W.start,Z=W.count;for(let lt=J,V=J+Z;lt<V;lt+=3)B(t.getX(lt+0)),B(t.getX(lt+1)),B(t.getX(lt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);let s=new K,r=new K,o=new K,a=new K,c=new K,l=new K,u=new K,f=new K;if(t)for(let h=0,g=t.count;h<g;h+=3){let _=t.getX(h+0),M=t.getX(h+1),x=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,x),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,x),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let h=0,g=e.count;h<g;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),g=0,_=0;for(let M=0,x=c.length;M<x;M++){a.isInterleavedBufferAttribute?g=c[M]*a.data.stride+a.offset:g=c[M]*u;for(let p=0;p<u;p++)h[_++]=l[g++]}return new De(h,u,f)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],g=t(h,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let g=l[f];u.push(g.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,g=f.length;h<g;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Aa=new K,Ju=new K,$u=new Wt,un=class{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Aa.subVectors(n,e).cross(Ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Aa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$u.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ku=0,Jn=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=rs,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=ja,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new un().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Un=new K,Ra=new K,mr=new K,gr=new K,Gr=class{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ra.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),gr.copy(this.origin).sub(Ra);let r=t.distanceTo(e)*.5,o=-this.direction.dot(mr),a=gr.dot(this.direction),c=-gr.dot(mr),l=gr.lengthSq(),u=Math.abs(1-o*o),f,h,g,_;if(u>0)if(f=o*c-a,h=o*a-c,_=r*u,f>=0)if(h>=-_)if(h<=_){let M=1/u;f*=M,h*=M,g=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),g=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),g=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),g=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ra).addScaledVector(mr,h),g}intersectSphere(t,e){if(t.radius<0)return null;Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,g=t.z-o.z,_=e.x-o.x,M=e.y-o.y,x=e.z-o.z,p=n.x-o.x,U=n.y-o.y,O=n.z-o.z,y=Math.abs(c),A=Math.abs(l),I=Math.abs(u),B,S,L,W,J,Z,lt,V,tt,ct,st,et;if(y>=A&&y>=I?(L=c,Z=f,tt=_,et=p,c>=0?(B=l,S=u,W=h,J=g,lt=M,V=x,ct=U,st=O):(B=u,S=l,W=g,J=h,lt=x,V=M,ct=O,st=U)):A>=I?(L=l,Z=h,tt=M,et=U,l>=0?(B=u,S=c,W=g,J=f,lt=x,V=_,ct=O,st=p):(B=c,S=u,W=f,J=g,lt=_,V=x,ct=p,st=O)):(L=u,Z=g,tt=x,et=O,u>=0?(B=c,S=l,W=f,J=h,lt=_,V=M,ct=p,st=U):(B=l,S=c,W=h,J=f,lt=M,V=_,ct=U,st=p)),L===0)return null;let mt=B/L,ut=S/L,Mt=1/L,Bt=W-mt*Z,Lt=J-ut*Z,qt=lt-mt*tt,Yt=V-ut*tt,$t=ct-mt*et,H=st-ut*et,k=$t*Yt-H*qt,z=Bt*H-Lt*$t,D=qt*Lt-Yt*Bt;if(s){if(k<0||z<0||D<0)return null}else if((k<0||z<0||D<0)&&(k>0||z>0||D>0))return null;let Q=k+z+D;if(Q===0)return null;let dt=Mt*(k*Z+z*tt+D*et);return(Q>0?dt<0:dt>0)?null:this.at(dt/Q,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dc=new pe,ui=new Gr,xr=new Ki,pc=new K,_r=new K,yr=new K,vr=new K,Ca=new K,Sr=new K,mc=new K,Mr=new K,Ce=class extends ke{constructor(t=new Qe,e=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Ca.fromBufferAttribute(f,t),o?Sr.addScaledVector(Ca,u):Sr.addScaledVector(Ca.sub(e),u))}e.add(Sr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(xr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(xr,pc)===null||ui.origin.distanceToSquared(pc)>(t.far-t.near)**2))&&(dc.copy(r).invert(),ui.copy(t.ray).applyMatrix4(dc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){let x=h[_],p=o[x.materialIndex],U=Math.max(x.start,g.start),O=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let y=U,A=O;y<A;y+=3){let I=a.getX(y),B=a.getX(y+1),S=a.getX(y+2);s=br(this,p,t,n,l,u,f,I,B,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),M=Math.min(a.count,g.start+g.count);for(let x=_,p=M;x<p;x+=3){let U=a.getX(x),O=a.getX(x+1),y=a.getX(x+2);s=br(this,o,t,n,l,u,f,U,O,y),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){let x=h[_],p=o[x.materialIndex],U=Math.max(x.start,g.start),O=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let y=U,A=O;y<A;y+=3){let I=y,B=y+1,S=y+2;s=br(this,p,t,n,l,u,f,I,B,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let x=_,p=M;x<p;x+=3){let U=x,O=x+1,y=x+2;s=br(this,o,t,n,l,u,f,U,O,y),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function ju(i,t,e,n,s,r,o,a){let c;if(t.side===Ie?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ii,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Mr);return l<e.near||l>e.far?null:{distance:l,point:Mr.clone(),object:i}}function br(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,_r),i.getVertexPosition(c,yr),i.getVertexPosition(l,vr);let u=ju(i,t,e,n,_r,yr,vr,mc);if(u){let f=new K;Zn.getBarycoord(mc,_r,yr,vr,f),s&&(u.uv=Zn.getInterpolatedAttribute(s,a,c,l,f,new At)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,a,c,l,f,new At)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,c,l,f,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new K,materialIndex:0};Zn.getNormal(_r,yr,vr,h.normal),u.face=h,u.barycoord=f}return u}var Hr=class extends ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Te,u=Te,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fi=new Ki,tf=new At(.5,.5),Er=new K,ji=class{constructor(t=new un,e=new un,n=new un,s=new un,r=new un,o=new un){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],g=r[7],_=r[8],M=r[9],x=r[10],p=r[11],U=r[12],O=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-o,g-u,p-_,A-U).normalize(),s[1].setComponents(l+o,g+u,p+_,A+U).normalize(),s[2].setComponents(l+a,g+f,p+M,A+O).normalize(),s[3].setComponents(l-a,g-f,p-M,A-O).normalize(),n)s[4].setComponents(c,h,x,y).normalize(),s[5].setComponents(l-c,g-h,p-x,A-y).normalize();else if(s[4].setComponents(l-c,g-h,p-x,A-y).normalize(),e===fn)s[5].setComponents(l+c,g+h,p+x,A+y).normalize();else if(e===Qi)s[5].setComponents(c,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);let e=tf.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ps=class extends ze{constructor(t=[],e=si,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ls=class extends ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $n=class extends ze{constructor(t,e,n=gn,s,r,o,a=Te,c=Te,l,u=En,f=1){if(u!==En&&u!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wr=class extends $n{constructor(t,e=gn,n=si,s,r,o=Te,a=Te,c,l=En){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ns=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Kn=class i extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(f,2));function _(M,x,p,U,O,y,A,I,B,S,L){let W=y/B,J=A/S,Z=y/2,lt=A/2,V=I/2,tt=B+1,ct=S+1,st=0,et=0,mt=new K;for(let ut=0;ut<ct;ut++){let Mt=ut*J-lt;for(let Bt=0;Bt<tt;Bt++){let Lt=Bt*W-Z;mt[M]=Lt*U,mt[x]=Mt*O,mt[p]=V,l.push(mt.x,mt.y,mt.z),mt[M]=0,mt[x]=0,mt[p]=I>0?1:-1,u.push(mt.x,mt.y,mt.z),f.push(Bt/B),f.push(1-ut/S),st+=1}}for(let ut=0;ut<S;ut++)for(let Mt=0;Mt<B;Mt++){let Bt=h+Mt+tt*ut,Lt=h+Mt+tt*(ut+1),qt=h+(Mt+1)+tt*(ut+1),Yt=h+(Mt+1)+tt*ut;c.push(Bt,Lt,Yt),c.push(Lt,qt,Yt),et+=6}a.addGroup(g,et,L),g+=et,h+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,g=(o-u)/h;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new At:new K);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new K,s=[],r=[],o=[],a=new K,c=new pe;for(let g=0;g<=t;g++){let _=g/t;s[g]=this.getTangentAt(_,new K)}r[0]=new K,o[0]=new K;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(ee(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(a,_))}o[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(ee(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],g*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ts=class extends Ke{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new At){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,g=l-this.aY;c=h*u-g*f+this.aX,l=h*f+g*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xr=class extends ts{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _l(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,g=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,g*=u,s(o,a,h,g)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var gc=new K,xc=new K,Ia=new _l,Pa=new _l,La=new _l,Qr=class extends Ke{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new K){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(xc.subVectors(s[0],s[1]).add(s[0]),l=xc);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(gc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=gc),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(f),g),M=Math.pow(f.distanceToSquared(h),g),x=Math.pow(h.distanceToSquared(u),g);M<1e-4&&(M=1),_<1e-4&&(_=M),x<1e-4&&(x=M),Ia.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,_,M,x),Pa.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,_,M,x),La.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,_,M,x)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Pa.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),La.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Ia.calc(c),Pa.calc(c),La.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new K().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _c(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function ef(i,t){let e=1-i;return e*e*t}function nf(i,t){return 2*(1-i)*i*t}function sf(i,t){return i*i*t}function Ms(i,t,e,n){return ef(i,t)+nf(i,e)+sf(i,n)}function rf(i,t){let e=1-i;return e*e*e*t}function of(i,t){let e=1-i;return 3*e*e*i*t}function af(i,t){return 3*(1-i)*i*i*t}function lf(i,t){return i*i*i*t}function bs(i,t,e,n,s){return rf(i,t)+of(i,e)+af(i,n)+lf(i,s)}var Ds=class extends Ke{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,s.x,r.x,o.x,a.x),bs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qr=class extends Ke{constructor(t=new K,e=new K,n=new K,s=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new K){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,s.x,r.x,o.x,a.x),bs(t,s.y,r.y,o.y,a.y),bs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Us=class extends Ke{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends Ke{constructor(t=new K,e=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new K){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fs=class extends Ke{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,s.x,r.x,o.x),Ms(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends Ke{constructor(t=new K,e=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new K){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,s.x,r.x,o.x),Ms(t,s.y,r.y,o.y),Ms(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Os=class extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(_c(a,c.x,l.x,u.x,f.x),_c(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},za=Object.freeze({__proto__:null,ArcCurve:Xr,CatmullRomCurve3:Qr,CubicBezierCurve:Ds,CubicBezierCurve3:qr,EllipseCurve:ts,LineCurve:Us,LineCurve3:Yr,QuadraticBezierCurve:Fs,QuadraticBezierCurve3:Zr,SplineCurve:Os}),Jr=class extends Ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new za[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new za[s.type]().fromJSON(s))}return this}},on=class extends Jr{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Us(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Fs(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ds(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Os(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new ts(t,e,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mi=class extends on{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new on().fromJSON(s))}return this}};function cf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=mh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=pf(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,f=c;for(let h=e;h<s;h+=e){let g=i[h],_=i[h+1];g<a&&(a=g),_<c&&(c=_),g>u&&(u=g),_>f&&(f=_)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Bs(r,o,e,a,c,l,0),o}function mh(i,t,e,n,s){let r;if(s===wf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=yc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=yc(o/n|0,i[o],i[o+1],r);return r&&es(r,r.next)&&(ks(r),r=r.next),r}function gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(es(e,e.next)||ge(e.prev,e,e.next)===0)){if(ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&yf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?uf(i,n,s,r):hf(i)){t.push(c.i,i.i,l.i),ks(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ff(gi(i),t),Bs(i,t,e,n,s,r,2)):o===2&&df(i,t,e,n,s,r):Bs(gi(i),t,e,n,s,r,1);break}}}function hf(i){let t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),g=Math.max(a,c,l),_=n.next;for(;_!==t;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=g&&ys(s,a,r,c,o,l,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function uf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ge(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,g=Math.min(a,c,l),_=Math.min(u,f,h),M=Math.max(a,c,l),x=Math.max(u,f,h),p=ka(g,_,t,e,n),U=ka(M,x,t,e,n),O=i.prevZ,y=i.nextZ;for(;O&&O.z>=p&&y&&y.z<=U;){if(O.x>=g&&O.x<=M&&O.y>=_&&O.y<=x&&O!==s&&O!==o&&ys(a,u,c,f,l,h,O.x,O.y)&&ge(O.prev,O,O.next)>=0||(O=O.prevZ,y.x>=g&&y.x<=M&&y.y>=_&&y.y<=x&&y!==s&&y!==o&&ys(a,u,c,f,l,h,y.x,y.y)&&ge(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;O&&O.z>=p;){if(O.x>=g&&O.x<=M&&O.y>=_&&O.y<=x&&O!==s&&O!==o&&ys(a,u,c,f,l,h,O.x,O.y)&&ge(O.prev,O,O.next)>=0)return!1;O=O.prevZ}for(;y&&y.z<=U;){if(y.x>=g&&y.x<=M&&y.y>=_&&y.y<=x&&y!==s&&y!==o&&ys(a,u,c,f,l,h,y.x,y.y)&&ge(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ff(i,t){let e=i;do{let n=e.prev,s=e.next.next;!es(n,s)&&xh(n,e,e.next,s)&&zs(n,s)&&zs(s,n)&&(t.push(n.i,e.i,s.i),ks(e),ks(e.next),e=i=s),e=e.next}while(e!==i);return gi(e)}function df(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mf(o,a)){let c=_h(o,a);o=gi(o,o.next),c=gi(c,c.next),Bs(o,t,e,n,s,r,0),Bs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function pf(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=mh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Sf(l))}s.sort(mf);for(let r=0;r<s.length;r++)e=gf(s[r],e);return e}function mf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function gf(i,t){let e=xf(i,t);if(!e)return t;let n=_h(e,i);return gi(n,n.next),gi(e,e.next)}function xf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(es(i,e))return e;do{if(es(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&gh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);zs(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&_f(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function _f(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function yf(i,t,e,n){let s=i;do s.z===0&&(s.z=ka(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vf(s)}function vf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ka(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ys(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&gh(i,t,e,n,s,r,o,a)}function Mf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bf(i,t)&&(zs(i,t)&&zs(t,i)&&Ef(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||es(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function es(i,t){return i.x===t.x&&i.y===t.y}function xh(i,t,e,n){let s=Tr(ge(i,t,e)),r=Tr(ge(i,t,n)),o=Tr(ge(e,n,i)),a=Tr(ge(e,n,t));return!!(s!==r&&o!==a||s===0&&wr(i,e,t)||r===0&&wr(i,n,t)||o===0&&wr(e,i,n)||a===0&&wr(e,t,n))}function wr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Tr(i){return i>0?1:i<0?-1:0}function bf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zs(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Ef(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _h(i,t){let e=Va(i.i,i.x,i.y),n=Va(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yc(i,t,e,n){let s=Va(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Va(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ga=class{static triangulate(t,e,n=2){return cf(t,e,n)}},bn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];vc(t),Sc(n,t);let o=t.length;e.forEach(vc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Sc(n,e[c]);let a=Ga.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function vc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var xi=class i extends Qe{constructor(t=new mi([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ve(s,3)),this.setAttribute("uv",new ve(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,U=e.UVGenerator!==void 0?e.UVGenerator:Tf,O,y=!1,A,I,B,S;if(p){O=p.getSpacedPoints(u),y=!0,h=!1;let P=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,P),I=new K,B=new K,S=new K}h||(x=0,g=0,_=0,M=0);let L=a.extractPoints(l),W=L.shape,J=L.holes;if(!bn.isClockWise(W)){W=W.reverse();for(let P=0,Y=J.length;P<Y;P++){let G=J[P];bn.isClockWise(G)&&(J[P]=G.reverse())}}function lt(P){let G=10000000000000001e-36,rt=P[0];for(let ft=1;ft<=P.length;ft++){let St=ft%P.length,Rt=P[St],Tt=Rt.x-rt.x,nt=Rt.y-rt.y,b=Tt*Tt+nt*nt,Nt=Math.max(Math.abs(Rt.x),Math.abs(Rt.y),Math.abs(rt.x),Math.abs(rt.y)),Ut=G*Nt*Nt;if(b<=Ut){P.splice(St,1),ft--;continue}rt=Rt}}lt(W),J.forEach(lt);let V=J.length,tt=W;for(let P=0;P<V;P++){let Y=J[P];W=W.concat(Y)}function ct(P,Y,G){return Y||Jt("ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(Y,G)}let st=W.length;function et(P,Y,G){let rt,ft,St,Rt=P.x-Y.x,Tt=P.y-Y.y,nt=G.x-P.x,b=G.y-P.y,Nt=Rt*Rt+Tt*Tt,Ut=Rt*b-Tt*nt;if(Math.abs(Ut)>Number.EPSILON){let N=Math.sqrt(Nt),v=Math.sqrt(nt*nt+b*b),it=Y.x-Tt/N,pt=Y.y+Rt/N,yt=G.x-b/v,F=G.y+nt/v,d=((yt-it)*b-(F-pt)*nt)/(Rt*b-Tt*nt);rt=it+Rt*d-P.x,ft=pt+Tt*d-P.y;let m=rt*rt+ft*ft;if(m<=2)return new At(rt,ft);St=Math.sqrt(m/2)}else{let N=!1;Rt>Number.EPSILON?nt>Number.EPSILON&&(N=!0):Rt<-Number.EPSILON?nt<-Number.EPSILON&&(N=!0):Math.sign(Tt)===Math.sign(b)&&(N=!0),N?(rt=-Tt,ft=Rt,St=Math.sqrt(Nt)):(rt=Rt,ft=Tt,St=Math.sqrt(Nt/2))}return new At(rt/St,ft/St)}let mt=[];for(let P=0,Y=tt.length,G=Y-1,rt=P+1;P<Y;P++,G++,rt++)G===Y&&(G=0),rt===Y&&(rt=0),mt[P]=et(tt[P],tt[G],tt[rt]);let ut=[],Mt,Bt=mt.concat();for(let P=0,Y=V;P<Y;P++){let G=J[P];Mt=[];for(let rt=0,ft=G.length,St=ft-1,Rt=rt+1;rt<ft;rt++,St++,Rt++)St===ft&&(St=0),Rt===ft&&(Rt=0),Mt[rt]=et(G[rt],G[St],G[Rt]);ut.push(Mt),Bt=Bt.concat(Mt)}let Lt;if(x===0)Lt=bn.triangulateShape(tt,J);else{let P=[],Y=[];for(let G=0;G<x;G++){let rt=G/x,ft=g*Math.cos(rt*Math.PI/2),St=_*Math.sin(rt*Math.PI/2)+M;for(let Rt=0,Tt=tt.length;Rt<Tt;Rt++){let nt=ct(tt[Rt],mt[Rt],St);z(nt.x,nt.y,-ft),rt===0&&P.push(nt)}for(let Rt=0,Tt=V;Rt<Tt;Rt++){let nt=J[Rt];Mt=ut[Rt];let b=[];for(let Nt=0,Ut=nt.length;Nt<Ut;Nt++){let N=ct(nt[Nt],Mt[Nt],St);z(N.x,N.y,-ft),rt===0&&b.push(N)}rt===0&&Y.push(b)}}Lt=bn.triangulateShape(P,Y)}let qt=Lt.length,Yt=_+M;for(let P=0;P<st;P++){let Y=h?ct(W[P],Bt[P],Yt):W[P];y?(B.copy(A.normals[0]).multiplyScalar(Y.x),I.copy(A.binormals[0]).multiplyScalar(Y.y),S.copy(O[0]).add(B).add(I),z(S.x,S.y,S.z)):z(Y.x,Y.y,0)}for(let P=1;P<=u;P++)for(let Y=0;Y<st;Y++){let G=h?ct(W[Y],Bt[Y],Yt):W[Y];y?(B.copy(A.normals[P]).multiplyScalar(G.x),I.copy(A.binormals[P]).multiplyScalar(G.y),S.copy(O[P]).add(B).add(I),z(S.x,S.y,S.z)):z(G.x,G.y,f/u*P)}for(let P=x-1;P>=0;P--){let Y=P/x,G=g*Math.cos(Y*Math.PI/2),rt=_*Math.sin(Y*Math.PI/2)+M;for(let ft=0,St=tt.length;ft<St;ft++){let Rt=ct(tt[ft],mt[ft],rt);z(Rt.x,Rt.y,f+G)}for(let ft=0,St=J.length;ft<St;ft++){let Rt=J[ft];Mt=ut[ft];for(let Tt=0,nt=Rt.length;Tt<nt;Tt++){let b=ct(Rt[Tt],Mt[Tt],rt);y?z(b.x,b.y+O[u-1].y,O[u-1].x+G):z(b.x,b.y,f+G)}}}$t(),H();function $t(){let P=s.length/3;if(h){let Y=0,G=st*Y;for(let rt=0;rt<qt;rt++){let ft=Lt[rt];D(ft[2]+G,ft[1]+G,ft[0]+G)}Y=u+x*2,G=st*Y;for(let rt=0;rt<qt;rt++){let ft=Lt[rt];D(ft[0]+G,ft[1]+G,ft[2]+G)}}else{for(let Y=0;Y<qt;Y++){let G=Lt[Y];D(G[2],G[1],G[0])}for(let Y=0;Y<qt;Y++){let G=Lt[Y];D(G[0]+st*u,G[1]+st*u,G[2]+st*u)}}n.addGroup(P,s.length/3-P,0)}function H(){let P=s.length/3,Y=0;k(tt,Y),Y+=tt.length;for(let G=0,rt=J.length;G<rt;G++){let ft=J[G];k(ft,Y),Y+=ft.length}n.addGroup(P,s.length/3-P,1)}function k(P,Y){let G=P.length;for(;--G>=0;){let rt=G,ft=G-1;ft<0&&(ft=P.length-1);for(let St=0,Rt=u+x*2;St<Rt;St++){let Tt=st*St,nt=st*(St+1),b=Y+rt+Tt,Nt=Y+ft+Tt,Ut=Y+ft+nt,N=Y+rt+nt;Q(b,Nt,Ut,N)}}}function z(P,Y,G){c.push(P),c.push(Y),c.push(G)}function D(P,Y,G){dt(P),dt(Y),dt(G);let rt=s.length/3,ft=U.generateTopUV(n,s,rt-3,rt-2,rt-1);Ct(ft[0]),Ct(ft[1]),Ct(ft[2])}function Q(P,Y,G,rt){dt(P),dt(Y),dt(rt),dt(Y),dt(G),dt(rt);let ft=s.length/3,St=U.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);Ct(St[0]),Ct(St[1]),Ct(St[3]),Ct(St[1]),Ct(St[2]),Ct(St[3])}function dt(P){s.push(c[P*3+0]),s.push(c[P*3+1]),s.push(c[P*3+2])}function Ct(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Af(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new za[s.type]().fromJSON(s)),new i(n,t.options)}},Tf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new At(r,o),new At(a,c),new At(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],g=t[s*3+1],_=t[s*3+2],M=t[r*3],x=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new At(o,1-c),new At(l,1-f),new At(h,1-_),new At(M,1-p)]:[new At(a,1-c),new At(u,1-f),new At(g,1-_),new At(x,1-p)]}};function Af(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _i=class i extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,g=[],_=[],M=[],x=[];for(let p=0;p<u;p++){let U=p*h-o;for(let O=0;O<l;O++){let y=O*f-r;_.push(y,-U,0),M.push(0,0,1),x.push(O/a),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let U=0;U<a;U++){let O=U+l*p,y=U+l*(p+1),A=U+1+l*(p+1),I=U+1+l*p;g.push(O,y,I),g.push(y,A,I)}this.setIndex(g),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(M,3)),this.setAttribute("uv",new ve(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ei(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Mc(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Mc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=Ei(i[e]);for(let s in n)t[s]=n[s]}return t}function Mc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var yh={clone:Ei,merge:Ue},Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=Rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new At().fromArray(s.value);break;case"v3":this.uniforms[n].value=new K().fromArray(s.value);break;case"v4":this.uniforms[n].value=new me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$r=class extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kr=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},jn=class extends Kr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var jr=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},to=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Na(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},eo=class extends ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fa,endingEnd:Fa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oa:r=t,a=2*e-n;break;case Ba:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oa:o=t,c=2*n-e;break;case Ba:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),M=_*_,x=M*_,p=-h*x+2*h*M-h*_,U=(1+h)*x+(-1.5-2*h)*M+(-.5+h)*_+1,O=(-1-g)*x+(1.5+g)*M+.5*_,y=g*x-g*M;for(let A=0;A!==a;++A)r[A]=p*o[u+A]+U*o[l+A]+O*o[c+A]+y*o[f+A];return r}},no=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},io=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},so=class extends ti{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(n-e)/(s-e),M=1-_;for(let x=0;x!==a;++x)r[x]=o[l+x]*M+o[c+x]*_;return r}let h=a*2,g=t-1;for(let _=0;_!==a;++_){let M=o[l+_],x=o[c+_],p=g*h+_*2,U=f[p],O=f[p+1],y=t*h+_*2,A=u[y],I=u[y+1],B=Lf(n,e,U,A,s);r[_]=vh(B,M,O,I,x)}return r}};function vh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Pf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Lf(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=vh(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Pf(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bi(e,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bi(t.times,Array),values:Bi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Na(t.settings)&&(n.settings={inTangents:Bi(t.settings.inTangents,Array),outTangents:Bi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new so(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case Br:e=this.InterpolantFactoryMethodLinear;break;case Cr:e=this.InterpolantFactoryMethodSmooth;break;case Ua:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return Cr;case this.InterpolantFactoryMethodBezier:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Na(this.settings)&&(bc(this.settings.inTangents,t),bc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Jt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Jt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&vu(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Jt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,h=f-n,g=f+n;for(let _=0;_!==n;++_){let M=e[f+_];if(M!==e[h+_]||M!==e[g+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let g=0;g!==n;++g)e[h+g]=e[f+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Na(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Br;var ei=class extends tn{constructor(t,e,n){super(t,e,n)}};ei.prototype.ValueTypeName="bool";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Es;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};ro.prototype.ValueTypeName="color";var oo=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="number";var ao=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)Tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Vs=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ao(this.times,this.values,this.getValueSize(),t)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends tn{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Es;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};lo.prototype.ValueTypeName="vector";var Ha={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Ec(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Ec(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ec(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var co=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let g=l[f],_=l[f+1];if(g.global&&(g.lastIndex=0),g.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sh=new co,yi=class{constructor(t){this.manager=t!==void 0?t:Sh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fn={},Wa=class extends Error{constructor(t,e){super(t),this.response=e}},Gs=class extends yi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Ha.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Fn[t]!==void 0){Fn[t].push({onLoad:e,onProgress:n,onError:s});return}Fn[t]=[],Fn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Qt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Fn[t],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),g=h?parseInt(h):0,_=g!==0,M=0,x=new ReadableStream({start(p){U();function U(){f.read().then(({done:O,value:y})=>{if(O)p.close();else{M+=y.byteLength;let A=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:g});for(let I=0,B=u.length;I<B;I++){let S=u[I];S.onProgress&&S.onProgress(A)}p.enqueue(y),U()}},O=>{p.error(O)})}}});return new Response(x)}else throw new Wa(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(h);return l.arrayBuffer().then(_=>g.decode(_))}}}).then(l=>{Ha.add(`file:${t}`,l);let u=Fn[t];delete Fn[t];for(let f=0,h=u.length;f<h;f++){let g=u[f];g.onLoad&&g.onLoad(l)}}).catch(l=>{let u=Fn[t];if(u===void 0)throw this.manager.itemError(t),l;delete Fn[t];for(let f=0,h=u.length;f<h;f++){let g=u[f];g.onError&&g.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ho=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Da=new pe,wc=new K,Tc=new K,uo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(wc),Tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Da,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Qi||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ar=new K,Rr=new Tn,Sn=new K,Hs=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ar,Rr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Rr,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ar,Rr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Rr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yn=new K,Ac=new At,Rc=new At,Ae=class extends Hs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,Rc),e.subVectors(Rc,Ac)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ns=class extends Hs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xa=class extends uo{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Xa}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zi=-90,ki=1,fo=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ae(zi,ki,t,e);s.layers=this.layers,this.add(s);let r=new Ae(zi,ki,t,e);r.layers=this.layers,this.add(r);let o=new Ae(zi,ki,t,e);o.layers=this.layers,this.add(o);let a=new Ae(zi,ki,t,e);a.layers=this.layers,this.add(a);let c=new Ae(zi,ki,t,e);c.layers=this.layers,this.add(c);let l=new Ae(zi,ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},po=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var vl="\\[\\]\\.:\\/",Nf=new RegExp("["+vl+"]","g"),Sl="[^"+vl+"]",Df="[^"+vl.replace("\\.","")+"]",Uf=/((?:WC+[\/:])*)/.source.replace("WC",Sl),Ff=/(WCOD+)?/.source.replace("WCOD",Df),Of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),Bf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),zf=new RegExp("^"+Uf+Ff+Of+Bf+"$"),kf=["material","materials","bones","map"],Qa=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nf,"")}static parseTrackName(t){let e=zf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Qa;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K0=new Float32Array(1);var Al=class Al{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Al.prototype.isMatrix2=!0;var qa=Al,Cc=new At,is=class{constructor(t=new At(1/0,1/0),e=new At(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var pn=class{constructor(){this.type="ShapePath",this.color=new Xt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new on,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(c,l){let u=!1,f=l.length;for(let h=0,g=f-1;h<f;g=h++){let _=l[h],M=l[g];_.y>c.y!=M.y>c.y&&c.x<(M.x-_.x)*(c.y-_.y)/(M.y-_.y)+_.x&&(u=!u)}return u}function e(c,l){let u=l.getCenter(new At);if(t(u,c))return u;let f=u.y,h=[],g=c.length;for(let _=0;_<g;_++){let M=c[_],x=c[(_+1)%g];if(M.y>f!=x.y>f){let p=M.x+(f-M.y)*(x.x-M.x)/(x.y-M.y);h.push(p)}}return h.length>1&&(h.sort((_,M)=>_-M),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Qt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(c=>c!==0):(c=>(c&1)!==0),r=[];for(let c of this.subPaths){let l=c.getPoints();if(l.length<3)continue;let u=bn.area(l);if(u===0)continue;let f=new is;for(let h=0;h<l.length;h++)f.expandByPoint(l[h]);r.push({subPath:c,points:l,boundingBox:f,interiorPoint:e(l,f),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}r.sort((c,l)=>l.absArea-c.absArea);for(let c=0;c<r.length;c++){let l=r[c],u=0;for(let f=c-1;f>=0;f--){let h=r[f];if(h.boundingBox.containsBox(l.boundingBox)&&t(l.interiorPoint,h.points)){l.container=h.exclude?h.container:h,u=h.winding,l.winding+=u;break}}s(l.winding)===s(u)&&(l.exclude=!0)}for(let c of r)c.exclude||(c.role=c.container===null||c.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let c of r){if(c.exclude||c.role!=="outer")continue;let l=new mi;l.curves=c.subPath.curves,o.push(l),a.set(c,l)}for(let c of r){if(c.exclude||c.role!=="hole")continue;let l=a.get(c.container);if(!l)continue;let u=new on;u.curves=c.subPath.curves,l.holes.push(u)}return o}};function Ml(i,t,e,n){let s=Vf(n);switch(e){case fl:return i*t;case pl:return i*t/s.components*s.byteLength;case Mo:return i*t/s.components*s.byteLength;case ai:return i*t*2/s.components*s.byteLength;case bo:return i*t*2/s.components*s.byteLength;case dl:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:case Ro:return Math.max(i,16)*Math.max(t,8)/4;case wo:case Ao:return Math.max(i,8)*Math.max(t,8)/2;case Co:case Io:case Lo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Po:case $s:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zo:case Jo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ko:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ks:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vf(i){switch(i){case qe:case ll:return{byteLength:1,components:1};case as:case cl:case _n:return{byteLength:2,components:1};case vo:case So:return{byteLength:2,components:4};case gn:case yo:case xn:return{byteLength:4,components:1};case hl:case ul:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hh(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zf(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((g,_)=>g.start-_.start);let h=0;for(let g=1;g<f.length;g++){let _=f[h],M=f[g];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,f[h]=M)}f.length=h+1;for(let g=0,_=f.length;g<_;g++){let M=f[g];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_m=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Jf,alphahash_pars_fragment:$f,alphamap_fragment:Kf,alphamap_pars_fragment:jf,alphatest_fragment:td,alphatest_pars_fragment:ed,aomap_fragment:nd,aomap_pars_fragment:id,batching_pars_vertex:sd,batching_vertex:rd,begin_vertex:od,beginnormal_vertex:ad,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:hd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:dd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:xd,color_vertex:_d,common:yd,cube_uv_reflection_fragment:vd,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Md,displacementmap_vertex:bd,emissivemap_fragment:Ed,emissivemap_pars_fragment:wd,colorspace_fragment:Td,colorspace_pars_fragment:Ad,envmap_fragment:Rd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Id,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Gd,envmap_vertex:Ld,fog_vertex:Nd,fog_pars_vertex:Dd,fog_fragment:Ud,fog_pars_fragment:Fd,gradientmap_pars_fragment:Od,lightmap_pars_fragment:Bd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:kd,lights_pars_begin:Vd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:Qd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Zd,lights_fragment_maps:Jd,lights_fragment_end:$d,lightprobes_pars_fragment:Kd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:op,metalnessmap_fragment:ap,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:fp,morphtarget_vertex:dp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:xp,normal_vertex:_p,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:bp,opaque_fragment:Ep,packing:wp,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:Rp,dithering_pars_fragment:Cp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Np,shadowmap_vertex:Dp,shadowmask_pars_fragment:Up,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:kp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Hp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:Qp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:Zp,background_vert:Jp,background_frag:$p,backgroundCube_vert:Kp,backgroundCube_frag:jp,cube_vert:tm,cube_frag:em,depth_vert:nm,depth_frag:im,distance_vert:sm,distance_frag:rm,equirect_vert:om,equirect_frag:am,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:hm,meshbasic_frag:um,meshlambert_vert:fm,meshlambert_frag:dm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:xm,meshphong_vert:_m,meshphong_frag:ym,meshphysical_vert:vm,meshphysical_frag:Sm,meshtoon_vert:Mm,meshtoon_frag:bm,points_vert:Em,points_frag:wm,shadow_vert:Tm,shadow_frag:Am,sprite_vert:Rm,sprite_frag:Cm},Dt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},In={basic:{uniforms:Ue([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ue([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ue([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ue([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ue([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ue([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ue([Dt.points,Dt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ue([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ue([Dt.common,Dt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ue([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ue([Dt.sprite,Dt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Ue([Dt.common,Dt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Ue([Dt.lights,Dt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};In.physical={uniforms:Ue([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var sa={r:0,b:0,g:0},Im=new pe,Wh=new Wt;Wh.set(-1,0,0,0,1,0,0,0,1);function Pm(i,t,e,n,s,r){let o=new Xt(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function g(U){let O=U.isScene===!0?U.background:null;if(O&&O.isTexture){let y=U.backgroundBlurriness>0;O=t.get(O,y)}return O}function _(U){let O=!1,y=g(U);y===null?x(o,a):y&&y.isColor&&(x(y,1),O=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||O)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(U,O){let y=g(O);y&&(y.isCubeTexture||y.mapping===Xs)?(l===void 0&&(l=new Ce(new Kn(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Ei(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(O.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Wh),l.material.toneMapped=ie.getTransfer(y.colorSpace)!==oe,(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),U.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ce(new _i(2,2),new je({name:"BackgroundMaterial",uniforms:Ei(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),U.unshift(c,c.geometry,c.material,0,0,null))}function x(U,O){U.getRGB(sa,yl(i)),e.buffers.color.setClear(sa.r,sa.g,sa.b,O,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(U,O=1){o.set(U),a=O,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(U){a=U,x(o,a)},render:_,addToRenderList:M,dispose:p}}function Lm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(J,Z,lt,V,tt){let ct=!1,st=f(J,V,lt,Z);r!==st&&(r=st,l(r.object)),ct=g(J,V,lt,tt),ct&&_(J,V,lt,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(ct||o)&&(o=!1,y(J,Z,lt,V),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function c(){return i.createVertexArray()}function l(J){return i.bindVertexArray(J)}function u(J){return i.deleteVertexArray(J)}function f(J,Z,lt,V){let tt=V.wireframe===!0,ct=n[Z.id];ct===void 0&&(ct={},n[Z.id]=ct);let st=J.isInstancedMesh===!0?J.id:0,et=ct[st];et===void 0&&(et={},ct[st]=et);let mt=et[lt.id];mt===void 0&&(mt={},et[lt.id]=mt);let ut=mt[tt];return ut===void 0&&(ut=h(c()),mt[tt]=ut),ut}function h(J){let Z=[],lt=[],V=[];for(let tt=0;tt<e;tt++)Z[tt]=0,lt[tt]=0,V[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:lt,attributeDivisors:V,object:J,attributes:{},index:null}}function g(J,Z,lt,V){let tt=r.attributes,ct=Z.attributes,st=0,et=lt.getAttributes();for(let mt in et)if(et[mt].location>=0){let Mt=tt[mt],Bt=ct[mt];if(Bt===void 0&&(mt==="instanceMatrix"&&J.instanceMatrix&&(Bt=J.instanceMatrix),mt==="instanceColor"&&J.instanceColor&&(Bt=J.instanceColor)),Mt===void 0||Mt.attribute!==Bt||Bt&&Mt.data!==Bt.data)return!0;st++}return r.attributesNum!==st||r.index!==V}function _(J,Z,lt,V){let tt={},ct=Z.attributes,st=0,et=lt.getAttributes();for(let mt in et)if(et[mt].location>=0){let Mt=ct[mt];Mt===void 0&&(mt==="instanceMatrix"&&J.instanceMatrix&&(Mt=J.instanceMatrix),mt==="instanceColor"&&J.instanceColor&&(Mt=J.instanceColor));let Bt={};Bt.attribute=Mt,Mt&&Mt.data&&(Bt.data=Mt.data),tt[mt]=Bt,st++}r.attributes=tt,r.attributesNum=st,r.index=V}function M(){let J=r.newAttributes;for(let Z=0,lt=J.length;Z<lt;Z++)J[Z]=0}function x(J){p(J,0)}function p(J,Z){let lt=r.newAttributes,V=r.enabledAttributes,tt=r.attributeDivisors;lt[J]=1,V[J]===0&&(i.enableVertexAttribArray(J),V[J]=1),tt[J]!==Z&&(i.vertexAttribDivisor(J,Z),tt[J]=Z)}function U(){let J=r.newAttributes,Z=r.enabledAttributes;for(let lt=0,V=Z.length;lt<V;lt++)Z[lt]!==J[lt]&&(i.disableVertexAttribArray(lt),Z[lt]=0)}function O(J,Z,lt,V,tt,ct,st){st===!0?i.vertexAttribIPointer(J,Z,lt,tt,ct):i.vertexAttribPointer(J,Z,lt,V,tt,ct)}function y(J,Z,lt,V){M();let tt=V.attributes,ct=lt.getAttributes(),st=Z.defaultAttributeValues;for(let et in ct){let mt=ct[et];if(mt.location>=0){let ut=tt[et];if(ut===void 0&&(et==="instanceMatrix"&&J.instanceMatrix&&(ut=J.instanceMatrix),et==="instanceColor"&&J.instanceColor&&(ut=J.instanceColor)),ut!==void 0){let Mt=ut.normalized,Bt=ut.itemSize,Lt=t.get(ut);if(Lt===void 0)continue;let qt=Lt.buffer,Yt=Lt.type,$t=Lt.bytesPerElement,H=Yt===i.INT||Yt===i.UNSIGNED_INT||ut.gpuType===yo;if(ut.isInterleavedBufferAttribute){let k=ut.data,z=k.stride,D=ut.offset;if(k.isInstancedInterleavedBuffer){for(let Q=0;Q<mt.locationSize;Q++)p(mt.location+Q,k.meshPerAttribute);J.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Q=0;Q<mt.locationSize;Q++)x(mt.location+Q);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Q=0;Q<mt.locationSize;Q++)O(mt.location+Q,Bt/mt.locationSize,Yt,Mt,z*$t,(D+Bt/mt.locationSize*Q)*$t,H)}else{if(ut.isInstancedBufferAttribute){for(let k=0;k<mt.locationSize;k++)p(mt.location+k,ut.meshPerAttribute);J.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let k=0;k<mt.locationSize;k++)x(mt.location+k);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let k=0;k<mt.locationSize;k++)O(mt.location+k,Bt/mt.locationSize,Yt,Mt,Bt*$t,Bt/mt.locationSize*k*$t,H)}}else if(st!==void 0){let Mt=st[et];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(mt.location,Mt);break;case 3:i.vertexAttrib3fv(mt.location,Mt);break;case 4:i.vertexAttrib4fv(mt.location,Mt);break;default:i.vertexAttrib1fv(mt.location,Mt)}}}}U()}function A(){L();for(let J in n){let Z=n[J];for(let lt in Z){let V=Z[lt];for(let tt in V){let ct=V[tt];for(let st in ct)u(ct[st].object),delete ct[st];delete V[tt]}}delete n[J]}}function I(J){if(n[J.id]===void 0)return;let Z=n[J.id];for(let lt in Z){let V=Z[lt];for(let tt in V){let ct=V[tt];for(let st in ct)u(ct[st].object),delete ct[st];delete V[tt]}}delete n[J.id]}function B(J){for(let Z in n){let lt=n[Z];for(let V in lt){let tt=lt[V];if(tt[J.id]===void 0)continue;let ct=tt[J.id];for(let st in ct)u(ct[st].object),delete ct[st];delete tt[J.id]}}}function S(J){for(let Z in n){let lt=n[Z],V=J.isInstancedMesh===!0?J.id:0,tt=lt[V];if(tt!==void 0){for(let ct in tt){let st=tt[ct];for(let et in st)u(st[et].object),delete st[et];delete tt[ct]}delete lt[V],Object.keys(lt).length===0&&delete n[Z]}}}function L(){W(),o=!0,r!==s&&(r=s,l(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:W,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfObject:S,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:x,disableUnusedAttributes:U}}function Nm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let g=0;g<u;g++)h+=l[g];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Dm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let B=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(B){return!(B!==an&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(B){let S=B===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==qe&&B!==xn&&!S&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Qt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),O=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:U,maxVaryings:O,maxFragmentUniforms:y,maxSamples:A,samples:I}}function Um(i){let t=this,e=null,n=0,s=!1,r=!1,o=new un,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let g=f.length!==0||h||n!==0||s;return s=h,n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,g){let _=f.clippingPlanes,M=f.clipIntersection,x=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||r&&!x)r?u(null):l();else{let U=r?0:n,O=U*4,y=p.clippingState||null;c.value=y,y=u(_,h,O,g);for(let A=0;A!==O;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=U}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,g,_){let M=f!==null?f.length:0,x=null;if(M!==0){if(x=c.value,_!==!0||x===null){let p=g+M*4,U=h.matrixWorldInverse;a.getNormalMatrix(U),(x===null||x.length<p)&&(x=new Float32Array(p));for(let O=0,y=g;O!==M;++O,y+=4)o.copy(f[O]).applyMatrix4(U,a),o.normal.toArray(x,y),x[y+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}var hs=4,Fm=6,Om=20,Bm=256,js=new ns,Mh=new Xt,Rl=null,Cl=0,Il=0,Pl=!1,zm=new K,wi=new K,fs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=zm}=r;Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl,Cl,Il),this._renderer.xr.enabled=Pl,t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===si||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:_n,format:an,colorSpace:pi,depthBuffer:!1},s=bh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=km(r)),this._blurMaterial=Gm(r,t,e),this._ggxMaterial=Vm(r,t,e)}return s}_compileMaterial(t){let e=new Ce(new Qe,t);this._renderer.compile(e,js)}_sceneToCubeUV(t,e,n,s,r){let c=new Ae(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,g=f.toneMapping;f.getClearColor(Mh),f.toneMapping=mn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new Kn,new dn({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,x=M.material,p=!1,U=t.background;U?U.isColor&&(x.color.copy(U),t.background=null,p=!0):(x.color.copy(Mh),p=!0);for(let O=0;O<6;O++){let y=O%3;y===0?(c.up.set(0,l[O],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[O],r.y,r.z)):y===1?(c.up.set(0,0,l[O]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[O],r.z)):(c.up.set(0,l[O],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[O]));let A=this._cubeSize;cs(s,y*A,O>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(M,c),f.render(t,c)}f.toneMapping=g,f.autoClear=h,t.background=U}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===si||t.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;cs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,js)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,g=f*h,{_lodMax:_}=this,M=this._sizeLods[n],x=3*M*(n>_-hs?n-_+hs:0),p=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=g,c.mipInt.value=_-e,cs(r,x,p,3*M,2*M),s.setRenderTarget(r),s.render(a,js),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,cs(t,x,p,3*M,2*M),s.setRenderTarget(t),s.render(a,js)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-hs?s-this._lodMax+hs:0),h=4*(this._cubeSize-u);cs(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,js)}};function km(i){let t=[],e=[],n=i,s=i-hs+1+Fm;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,g=3,_=new Float32Array(g*h*f),M=new Float32Array(g*h*f);for(let p=0;p<f;p++){let U=p%3*2/3-1,O=p>2?0:-1,y=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];_.set(y,g*h*p);for(let A=0;A<h;A++){let I=u[A*2]*2-1,B=u[A*2+1]*2-1;p===0?wi.set(1,B,I):p===1?wi.set(-I,1,-B):p===2?wi.set(-I,B,1):p===3?wi.set(-1,B,-I):p===4?wi.set(-I,-1,B):wi.set(I,B,-1),wi.toArray(M,(p*h+A)*g)}}let x=new Qe;x.setAttribute("position",new De(_,g)),x.setAttribute("outputDirection",new De(M,g)),e.push(new Ce(x,null)),n>hs&&n--}return{lodMeshes:e,sizeLods:t}}function bh(i,t,e){let n=new Xe(i,t,e);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vm(i,t,e){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:aa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Gm(i,t,e){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:aa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Eh(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function wh(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function aa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var oa=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ps(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Kn(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Rn});r.uniforms.tEquirect.value=e;let o=new Ce(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=Re),new fo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Hm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,g=!1){return h==null?null:g?o(h):r(h)}function r(h){if(h&&h.isTexture){let g=h.mapping;if(g===go||g===xo)if(t.has(h)){let _=t.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let M=new oa(_.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",l),a(M.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let g=h.mapping,_=g===go||g===xo,M=g===si||g===Mi;if(_||M){let x=e.get(h),p=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new fs(i)),x=_?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{let U=h.image;return _&&U&&U.height>0||M&&U&&c(U)?(n===null&&(n=new fs(i)),x=_?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function a(h,g){return g===go?h.mapping=si:g===xo&&(h.mapping=Mi),h}function c(h){let g=0,_=6;for(let M=0;M<_;M++)h[M]!==void 0&&g++;return g===_}function l(h){let g=h.target;g.removeEventListener("dispose",l);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function u(h){let g=h.target;g.removeEventListener("dispose",u);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Wm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&di("WebGLRenderer: "+n+" extension not supported."),s}}}function Xm(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];let g=r.get(h);g&&(t.remove(g),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let g in h)t.update(h[g],i.ARRAY_BUFFER)}function l(f){let h=[],g=f.index,_=f.attributes.position,M=0;if(_===void 0)return;if(g!==null){let U=g.array;M=g.version;for(let O=0,y=U.length;O<y;O+=3){let A=U[O+0],I=U[O+1],B=U[O+2];h.push(A,I,I,B,B,A)}}else{let U=_.array;M=_.version;for(let O=0,y=U.length/3-1;O<y;O+=3){let A=O+0,I=O+1,B=O+2;h.push(A,I,I,B,B,A)}}let x=new(_.count>=65535?Is:Cs)(h,1);x.version=M;let p=r.get(f);p&&t.remove(p),r.set(f,x)}function u(f){let h=r.get(f);if(h){let g=f.index;g!==null&&h.version<g.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Qm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,f*o,g),e.update(h,n,g))}function u(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,g);let M=0;for(let x=0;x<g;x++)M+=h[x];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function qm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ym(i,t,e){let n=new WeakMap,s=new me;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let L=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],U=a.morphAttributes.color||[],O=0;g===!0&&(O=1),_===!0&&(O=2),M===!0&&(O=3);let y=a.attributes.position.count*O,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let I=new Float32Array(y*A*4*f),B=new As(I,y,A,f);B.type=xn,B.needsUpdate=!0;let S=O*4;for(let W=0;W<f;W++){let J=x[W],Z=p[W],lt=U[W],V=y*A*4*W;for(let tt=0;tt<J.count;tt++){let ct=tt*S;g===!0&&(s.fromBufferAttribute(J,tt),I[V+ct+0]=s.x,I[V+ct+1]=s.y,I[V+ct+2]=s.z,I[V+ct+3]=0),_===!0&&(s.fromBufferAttribute(Z,tt),I[V+ct+4]=s.x,I[V+ct+5]=s.y,I[V+ct+6]=s.z,I[V+ct+7]=0),M===!0&&(s.fromBufferAttribute(lt,tt),I[V+ct+8]=s.x,I[V+ct+9]=s.y,I[V+ct+10]=s.z,I[V+ct+11]=lt.itemSize===4?s.w:1)}}h={count:f,texture:B,size:new At(y,A)},n.set(a,h),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let M=0;M<l.length;M++)g+=l[M];let _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Zm(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let g=l.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Jm={[el]:"LINEAR_TONE_MAPPING",[nl]:"REINHARD_TONE_MAPPING",[il]:"CINEON_TONE_MAPPING",[sl]:"ACES_FILMIC_TONE_MAPPING",[ol]:"AGX_TONE_MAPPING",[os]:"NEUTRAL_TONE_MAPPING",[rl]:"CUSTOM_TONE_MAPPING"};function $m(i,t,e,n,s,r){let o=new Xe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Qe;l.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ve([0,2,0,0,2,0],2));let u=new $r({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ce(l,u),h=new ns(-1,1,1,-1,0,1),g=null,_=null,M=!1,x,p=null,U=[],O=!1;this.setSize=function(y,A){o.setSize(y,A),a!==null&&a.setSize(y,A),c!==null&&c.setSize(y,A);for(let I=0;I<U.length;I++){let B=U[I];B.setSize&&B.setSize(y,A)}},this.setEffects=function(y){U=y,O=U.length>0&&U[0].isRenderPass===!0;let A=o.width,I=o.height;U.length>0&&a===null&&(a=new Xe(A,I,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new Xe(A,I,{type:_n,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<U.length;B++){let S=U[B];S.setSize&&S.setSize(A,I)}},this.begin=function(y,A){if(M||y.toneMapping===mn&&U.length===0)return!1;if(p=A,A!==null){let I=A.width,B=A.height;(o.width!==I||o.height!==B)&&this.setSize(I,B)}return O===!1&&y.setRenderTarget(o),x=y.toneMapping,y.toneMapping=mn,!0},this.hasRenderPass=function(){return O},this.end=function(y,A){y.toneMapping=x,M=!0;let I=o,B=a;for(let S=0;S<U.length;S++){let L=U[S];L.enabled!==!1&&(L.render(y,B,I,A),L.needsSwap!==!1&&(I=B,B=B===a?c:a))}if(g!==y.outputColorSpace||_!==y.toneMapping){g=y.outputColorSpace,_=y.toneMapping,u.defines={},ie.getTransfer(g)===oe&&(u.defines.SRGB_TRANSFER="");let S=Jm[_];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=I.texture,y.setRenderTarget(p),y.render(f,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Xh=new ze,Dl=new $n(1,1),Qh=new As,qh=new Vr,Yh=new Ps,Th=[],Ah=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ih=new Float32Array(4);function ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Th[s];if(r===void 0&&(r=new Float32Array(s),Th[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function la(i,t){let e=Ah[t];e===void 0&&(e=new Int32Array(t),Ah[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Km(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;Ih.set(n),i.uniformMatrix2fv(this.addr,!1,Ih),Me(e,n)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;Ch.set(n),i.uniformMatrix3fv(this.addr,!1,Ch),Me(e,n)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;Rh.set(n),i.uniformMatrix4fv(this.addr,!1,Rh),Me(e,n)}}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dl.compareFunction=e.isReversedDepthBuffer()?ia:na,r=Dl):r=Xh,e.setTexture2D(t||r,s)}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qh,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yh,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qh,s)}function xg(i){switch(i){case 5126:return Km;case 35664:return jm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function _g(i,t){i.uniform1fv(this.addr,t)}function yg(i,t){let e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function vg(i,t){let e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function Sg(i,t){let e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function Mg(i,t){let e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){let e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Eg(i,t){let e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wg(i,t){i.uniform1iv(this.addr,t)}function Tg(i,t){i.uniform2iv(this.addr,t)}function Ag(i,t){i.uniform3iv(this.addr,t)}function Rg(i,t){i.uniform4iv(this.addr,t)}function Cg(i,t){i.uniform1uiv(this.addr,t)}function Ig(i,t){i.uniform2uiv(this.addr,t)}function Pg(i,t){i.uniform3uiv(this.addr,t)}function Lg(i,t){i.uniform4uiv(this.addr,t)}function Ng(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Dl:o=Xh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Dg(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qh,r[o])}function Ug(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yh,r[o])}function Fg(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qh,r[o])}function Og(i){switch(i){case 5126:return _g;case 35664:return yg;case 35665:return vg;case 35666:return Sg;case 35674:return Mg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Ig;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}var Ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}},Fl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}},Ol=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Ph(i,t){i.seq.push(t),i.map[t.id]=t}function Bg(i,t,e){let n=i.name,s=n.length;for(Ll.lastIndex=0;;){let r=Ll.exec(n),o=Ll.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ph(e,l===void 0?new Ul(a,i,t):new Fl(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Ol(a),Ph(e,f)),e=f}}}var us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Bg(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Lh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zg=37297,kg=0;function Vg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Nh=new Wt;function Gg(i){ie._getMatrix(Nh,ie.workingColorSpace,i);let t=`mat3( ${Nh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case ws:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Vg(i.getShaderSource(t),a)}else return r}function Hg(i,t){let e=Gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Wg={[el]:"Linear",[nl]:"Reinhard",[il]:"Cineon",[sl]:"ACESFilmic",[ol]:"AgX",[os]:"Neutral",[rl]:"Custom"};function Xg(i,t){let e=Wg[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ra=new K;function Qg(){ie.getLuminanceCoefficients(ra);let i=ra.x.toFixed(4),t=ra.y.toFixed(4),e=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function Yg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function er(i){return i!==""}function Uh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(i){return i.replace(Jg,Kg)}var $g=new Map;function Kg(i,t){let e=te[t];if(e===void 0){let n=$g.get(t);if(n!==void 0)e=te[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bl(e)}var jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(i){return i.replace(jg,t0)}function t0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var e0={[Ws]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function n0(i){return e0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var i0={[si]:"ENVMAP_TYPE_CUBE",[Mi]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE_UV"};function s0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":i0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var r0={[Mi]:"ENVMAP_MODE_REFRACTION"};function o0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":r0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a0={[tl]:"ENVMAP_BLENDING_MULTIPLY",[$c]:"ENVMAP_BLENDING_MIX",[Kc]:"ENVMAP_BLENDING_ADD"};function l0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a0[i.combine]||"ENVMAP_BLENDING_NONE"}function c0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function h0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=n0(e),l=s0(e),u=o0(e),f=l0(e),h=c0(e),g=qg(e),_=Yg(r),M=s.createProgram(),x,p,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(er).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(er).join(`
`),p.length>0&&(p+=`
`)):(x=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?te.tonemapping_pars_fragment:"",e.toneMapping!==mn?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),Qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),o=Bl(o),o=Uh(o,e),o=Fh(o,e),a=Bl(a),a=Uh(a,e),a=Fh(a,e),o=Oh(o),a=Oh(a),e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let O=U+x+o,y=U+p+a,A=Lh(s,s.VERTEX_SHADER,O),I=Lh(s,s.FRAGMENT_SHADER,y);s.attachShader(M,A),s.attachShader(M,I),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function B(J){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(M)||"",lt=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(I)||"",tt=Z.trim(),ct=lt.trim(),st=V.trim(),et=!0,mt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,A,I);else{let ut=Dh(s,A,"vertex"),Mt=Dh(s,I,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+tt+`
`+ut+`
`+Mt)}else tt!==""?Qt("WebGLProgram: Program Info Log:",tt):(ct===""||st==="")&&(mt=!1);mt&&(J.diagnostics={runnable:et,programLog:tt,vertexShader:{log:ct,prefix:x},fragmentShader:{log:st,prefix:p}})}s.deleteShader(A),s.deleteShader(I),S=new us(s,M),L=Zg(s,M)}let S;this.getUniforms=function(){return S===void 0&&B(this),S};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let W=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=s.getProgramParameter(M,zg)),W},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=I,this}var u0=0,zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kl(t),e.set(t,n)),n}},kl=class{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}};function f0(i){return i===ai||i===$s||i===Ks}function d0(i,t,e,n,s,r){let o=new Rs,a=new zl,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function M(S,L,W,J,Z,lt){let V=J.fog,tt=Z.geometry,ct=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?J.environment:null,st=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,et=t.get(S.envMap||ct,st),mt=et&&et.mapping===Xs?et.image.height:null,ut=g[S.type];S.precision!==null&&(h=n.getMaxPrecision(S.precision),h!==S.precision&&Qt("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let Mt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Bt=Mt!==void 0?Mt.length:0,Lt=0;tt.morphAttributes.position!==void 0&&(Lt=1),tt.morphAttributes.normal!==void 0&&(Lt=2),tt.morphAttributes.color!==void 0&&(Lt=3);let qt,Yt,$t,H;if(ut){let Kt=In[ut];qt=Kt.vertexShader,Yt=Kt.fragmentShader}else{qt=S.vertexShader,Yt=S.fragmentShader;let Kt=a.getVertexShaderStage(S),Zt=a.getFragmentShaderStage(S);a.update(S,Kt,Zt),$t=Kt.id,H=Zt.id}let k=i.getRenderTarget(),z=i.state.buffers.depth.getReversed(),D=Z.isInstancedMesh===!0,Q=Z.isBatchedMesh===!0,dt=!!S.map,Ct=!!S.matcap,P=!!et,Y=!!S.aoMap,G=!!S.lightMap,rt=!!S.bumpMap&&S.wireframe===!1,ft=!!S.normalMap,St=!!S.displacementMap,Rt=!!S.emissiveMap,Tt=!!S.metalnessMap,nt=!!S.roughnessMap,b=S.anisotropy>0,Nt=S.clearcoat>0,Ut=S.dispersion>0,N=S.retroreflectivity>0,v=S.iridescence>0,it=S.sheen>0,pt=S.transmission>0,yt=b&&!!S.anisotropyMap,F=Nt&&!!S.clearcoatMap,d=Nt&&!!S.clearcoatNormalMap,m=Nt&&!!S.clearcoatRoughnessMap,E=v&&!!S.iridescenceMap,R=v&&!!S.iridescenceThicknessMap,C=it&&!!S.sheenColorMap,q=it&&!!S.sheenRoughnessMap,X=!!S.specularMap,ht=!!S.specularColorMap,at=!!S.specularIntensityMap,wt=pt&&!!S.transmissionMap,T=pt&&!!S.thicknessMap,ot=!!S.gradientMap,$=!!S.alphaMap,bt=S.alphaTest>0,Et=!!S.alphaHash,vt=!!S.extensions,It=mn;S.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(It=i.toneMapping);let Pt={shaderID:ut,shaderType:S.type,shaderName:S.name,vertexShader:qt,fragmentShader:Yt,defines:S.defines,customVertexShaderID:$t,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Q,batchingColor:Q&&Z._colorsTexture!==null,instancing:D,instancingColor:D&&Z.instanceColor!==null,instancingMorph:D&&Z.morphTexture!==null,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:dt,matcap:Ct,envMap:P,envMapMode:P&&et.mapping,envMapCubeUVHeight:mt,aoMap:Y,lightMap:G,bumpMap:rt,normalMap:ft,displacementMap:St,emissiveMap:Rt,normalMapObjectSpace:ft&&S.normalMapType===eh,normalMapTangentSpace:ft&&S.normalMapType===ea,packedNormalMap:ft&&S.normalMapType===ea&&f0(S.normalMap.format),metalnessMap:Tt,roughnessMap:nt,anisotropy:b,anisotropyMap:yt,clearcoat:Nt,clearcoatMap:F,clearcoatNormalMap:d,clearcoatRoughnessMap:m,dispersion:Ut,retroreflection:N,iridescence:v,iridescenceMap:E,iridescenceThicknessMap:R,sheen:it,sheenColorMap:C,sheenRoughnessMap:q,specularMap:X,specularColorMap:ht,specularIntensityMap:at,transmission:pt,transmissionMap:wt,thicknessMap:T,gradientMap:ot,opaque:S.transparent===!1&&S.blending===rs&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:bt,alphaHash:Et,combine:S.combine,mapUv:dt&&_(S.map.channel),aoMapUv:Y&&_(S.aoMap.channel),lightMapUv:G&&_(S.lightMap.channel),bumpMapUv:rt&&_(S.bumpMap.channel),normalMapUv:ft&&_(S.normalMap.channel),displacementMapUv:St&&_(S.displacementMap.channel),emissiveMapUv:Rt&&_(S.emissiveMap.channel),metalnessMapUv:Tt&&_(S.metalnessMap.channel),roughnessMapUv:nt&&_(S.roughnessMap.channel),anisotropyMapUv:yt&&_(S.anisotropyMap.channel),clearcoatMapUv:F&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:d&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:m&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:E&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:R&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:C&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:q&&_(S.sheenRoughnessMap.channel),specularMapUv:X&&_(S.specularMap.channel),specularColorMapUv:ht&&_(S.specularColorMap.channel),specularIntensityMapUv:at&&_(S.specularIntensityMap.channel),transmissionMapUv:wt&&_(S.transmissionMap.channel),thicknessMapUv:T&&_(S.thicknessMap.channel),alphaMapUv:$&&_(S.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ft||b),vertexNormals:!!tt.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!tt.attributes.uv&&(dt||$),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||tt.attributes.normal===void 0&&ft===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:z,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Lt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===oe,decodeVideoTextureEmissive:Rt&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ve,flipSided:S.side===Ie,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:vt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&S.extensions.multiDraw===!0||Q)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function x(S){let L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(let W in S.defines)L.push(W),L.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(p(L,S),U(L,S),L.push(i.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function p(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.anisotropyMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numSunLights),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numSunLightShadows),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.numLightProbes),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function U(S,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function O(S){let L=g[S.type],W;if(L){let J=In[L];W=yh.clone(J.uniforms)}else W=S.uniforms;return W}function y(S,L){let W=u.get(L);return W!==void 0?++W.usedTimes:(W=new h0(i,L,S,s),l.push(W),u.set(L,W)),W}function A(S){if(--S.usedTimes===0){let L=l.indexOf(S);l[L]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function I(S){a.remove(S)}function B(){a.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:O,acquireProgram:y,releaseProgram:A,releaseShaderCache:I,programs:l,dispose:B}}function p0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function m0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function zh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function a(h,g,_,M,x,p){let U=i[t];return U===void 0?(U={id:h.id,object:h,geometry:g,material:_,materialVariant:o(h),groupOrder:M,renderOrder:h.renderOrder,z:x,group:p},i[t]=U):(U.id=h.id,U.object=h,U.geometry=g,U.material=_,U.materialVariant=o(h),U.groupOrder=M,U.renderOrder=h.renderOrder,U.z=x,U.group=p),t++,U}function c(h,g,_,M,x,p,U){U.reversedDepth===!0&&(x=-x);let O=a(h,g,_,M,x,p);_.transmission>0?n.push(O):_.transparent===!0?s.push(O):e.push(O)}function l(h,g,_,M,x,p){let U=a(h,g,_,M,x,p);_.transmission>0?n.unshift(U):_.transparent===!0?s.unshift(U):e.unshift(U)}function u(h,g){e.length>1&&e.sort(h||m0),n.length>1&&n.sort(g||zh),s.length>1&&s.sort(g||zh)}function f(){for(let h=t,g=i.length;h<g;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function g0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new kh,i.set(n,[o])):s>=r.length?(o=new kh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function x0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new K,color:new Xt};break;case"SpotLight":e={position:new K,direction:new K,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new K,halfWidth:new K,halfHeight:new K};break}return i[t.id]=e,e}}}function _0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var y0=0;function v0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function S0(i){let t=new x0,e=_0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new K);let s=new K,r=new pe,o=new pe;function a(l){let u=0,f=0,h=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let g=0,_=0,M=0,x=0,p=0,U=0,O=0,y=0,A=0,I=0,B=0,S=0,L=0,W=0;l.sort(v0);for(let Z=0,lt=l.length;Z<lt;Z++){let V=l[Z],tt=V.color,ct=V.intensity,st=V.distance,et=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ai?et=V.shadow.map.texture:et=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=tt.r*ct,f+=tt.g*ct,h+=tt.b*ct;else if(V.isLightProbe){for(let mt=0;mt<9;mt++)n.probe[mt].addScaledVector(V.sh.coefficients[mt],ct);W++}else if(V.isSunLight){let mt=t.get(V);if(mt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ut=V.shadow,Mt=e.get(V);Mt.shadowIntensity=ut.intensity,Mt.shadowBias=ut.bias,Mt.shadowNormalBias=ut.normalBias,Mt.shadowRadius=ut.radius,Mt.shadowMapSize.copy(ut.mapSize).multiply(ut.getFrameExtents()),n.sunShadow[_]=Mt,n.sunShadowMap[_]=et;let Bt=ut.getViewportCount();for(let Lt=0;Lt<Bt;Lt++)n.sunShadowMatrix[M+Lt]=ut.getMatrix(Lt),n.sunShadowCascade[M+Lt]=ut._cascadeData[Lt];M+=Bt,_++}n.sun[g]=mt,g++}else if(V.isDirectionalLight){let mt=t.get(V);if(mt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ut=V.shadow,Mt=e.get(V);Mt.shadowIntensity=ut.intensity,Mt.shadowBias=ut.bias,Mt.shadowNormalBias=ut.normalBias,Mt.shadowRadius=ut.radius,Mt.shadowMapSize=ut.mapSize,n.directionalShadow[x]=Mt,n.directionalShadowMap[x]=et,n.directionalShadowMatrix[x]=V.shadow.matrix,A++}n.directional[x]=mt,x++}else if(V.isSpotLight){let mt=t.get(V);mt.position.setFromMatrixPosition(V.matrixWorld),mt.color.copy(tt).multiplyScalar(ct),mt.distance=st,mt.coneCos=Math.cos(V.angle),mt.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),mt.decay=V.decay,n.spot[U]=mt;let ut=V.shadow;if(V.map&&(n.spotLightMap[S]=V.map,S++,ut.updateMatrices(V),V.castShadow&&L++),n.spotLightMatrix[U]=ut.matrix,V.castShadow){let Mt=e.get(V);Mt.shadowIntensity=ut.intensity,Mt.shadowBias=ut.bias,Mt.shadowNormalBias=ut.normalBias,Mt.shadowRadius=ut.radius,Mt.shadowMapSize=ut.mapSize,n.spotShadow[U]=Mt,n.spotShadowMap[U]=et,B++}U++}else if(V.isRectAreaLight){let mt=t.get(V);mt.color.copy(tt).multiplyScalar(ct),mt.halfWidth.set(V.width*.5,0,0),mt.halfHeight.set(0,V.height*.5,0),n.rectArea[O]=mt,O++}else if(V.isPointLight){let mt=t.get(V);if(mt.color.copy(V.color).multiplyScalar(V.intensity),mt.distance=V.distance,mt.decay=V.decay,V.castShadow){let ut=V.shadow,Mt=e.get(V);Mt.shadowIntensity=ut.intensity,Mt.shadowBias=ut.bias,Mt.shadowNormalBias=ut.normalBias,Mt.shadowRadius=ut.radius,Mt.shadowMapSize=ut.mapSize,Mt.shadowCameraNear=ut.camera.near,Mt.shadowCameraFar=ut.camera.far,n.pointShadow[p]=Mt,n.pointShadowMap[p]=et,n.pointShadowMatrix[p]=V.shadow.matrix,I++}n.point[p]=mt,p++}else if(V.isHemisphereLight){let mt=t.get(V);mt.skyColor.copy(V.color).multiplyScalar(ct),mt.groundColor.copy(V.groundColor).multiplyScalar(ct),n.hemi[y]=mt,y++}}O>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let J=n.hash;(J.sunLength!==g||J.directionalLength!==x||J.pointLength!==p||J.spotLength!==U||J.rectAreaLength!==O||J.hemiLength!==y||J.numSunShadows!==_||J.numDirectionalShadows!==A||J.numPointShadows!==I||J.numSpotShadows!==B||J.numSpotMaps!==S||J.numLightProbes!==W)&&(n.sun.length=g,n.directional.length=x,n.spot.length=U,n.rectArea.length=O,n.point.length=p,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=B,n.spotShadowMap.length=B,n.spotLightMatrix.length=B+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=W,J.sunLength=g,J.directionalLength=x,J.pointLength=p,J.spotLength=U,J.rectAreaLength=O,J.hemiLength=y,J.numSunShadows=_,J.numDirectionalShadows=A,J.numPointShadows=I,J.numSpotShadows=B,J.numSpotMaps=S,J.numLightProbes=W,n.version=y0++)}function c(l,u){let f=0,h=0,g=0,_=0,M=0,x=0,p=u.matrixWorldInverse;for(let U=0,O=l.length;U<O;U++){let y=l[U];if(y.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let A=n.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),h++}else if(y.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(y.isRectAreaLight){let A=n.rectArea[M];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),M++}else if(y.isPointLight){let A=n.point[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),g++}else if(y.isHemisphereLight){let A=n.hemi[x];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function Vh(i){let t=new S0(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function M0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vh(i),t.set(s,[a])):r>=o.length?(a=new Vh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,w0=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],T0=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Gh=new pe,tr=new K,Nl=new K;function A0(i,t,e){let n=new ji,s=new At,r=new At,o=new me,a=new jr,c=new to,l={},u=e.maxTextureSize,f={[ii]:Ie,[Ie]:ii,[Ve]:Ve},h=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:b0,fragmentShader:E0}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let _=new Qe;_.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ce(_,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let p=this.type;this.render=function(I,B,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;this.type===Lc&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ws);let L=i.getRenderTarget(),W=i.getActiveCubeFace(),J=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Rn),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let lt=p!==this.type;lt&&B.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(tt=>tt.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,tt=I.length;V<tt;V++){let ct=I[V],st=ct.shadow;if(st===void 0){Qt("WebGLShadowMap:",ct,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let et=st.getFrameExtents();s.multiply(et),r.copy(st.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,st.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,st.mapSize.y=r.y));let mt=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=mt,st.map===null||lt===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===ss){if(ct.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new Xe(s.x,s.y,{format:ai,type:_n,minFilter:Re,magFilter:Re,generateMipmaps:!1}),st.map.texture.name=ct.name+".shadowMap",st.map.depthTexture=new $n(s.x,s.y,xn),st.map.depthTexture.name=ct.name+".shadowMapDepth",st.map.depthTexture.format=En,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=Te,st.map.depthTexture.magFilter=Te}else ct.isPointLight?(st.map=new oa(s.x),st.map.depthTexture=new Wr(s.x,gn)):(st.map=new Xe(s.x,s.y),st.map.depthTexture=new $n(s.x,s.y,gn)),st.map.depthTexture.name=ct.name+".shadowMap",st.map.depthTexture.format=En,this.type===Ws?(st.map.depthTexture.compareFunction=mt?ia:na,st.map.depthTexture.minFilter=Re,st.map.depthTexture.magFilter=Re):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=Te,st.map.depthTexture.magFilter=Te);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let ut=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();ct.isPointLight!==!0&&st.updateMatrices(ct,S);for(let Mt=0;Mt<ut;Mt++){let Bt=st.getCamera(Mt);if(ct.isPointLight){let Lt=st.camera,qt=st.matrix,Yt=ct.distance||Lt.far;Yt!==Lt.far&&(Lt.far=Yt,Lt.updateProjectionMatrix()),tr.setFromMatrixPosition(ct.matrixWorld),Lt.position.copy(tr),Nl.copy(Lt.position),Nl.add(w0[Mt]),Lt.up.copy(T0[Mt]),Lt.lookAt(Nl),Lt.updateMatrixWorld(),qt.makeTranslation(-tr.x,-tr.y,-tr.z),Gh.multiplyMatrices(Lt.projectionMatrix,Lt.matrixWorldInverse),st._frustum.setFromProjectionMatrix(Gh,Lt.coordinateSystem,Lt.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(st.map),i.clear());let Lt=st.getViewport(Mt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),Z.viewport(o)}n=st.getFrustum(Mt),y(B,S,Bt,ct,this.type)}st.isPointLightShadow!==!0&&this.type===ss&&U(st,S),st.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(L,W,J)};function U(I,B){let S=t.update(M);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null?I.mapPass=new Xe(s.x,s.y,{format:ai,type:_n}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),h.uniforms.shadow_pass.value=I.map.depthTexture,h.uniforms.resolution.value.set(I.map.width,I.map.height),h.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(B,null,S,h,M,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value.set(I.map.width,I.map.height),g.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(B,null,S,g,M,null)}function O(I,B,S,L){let W=null,J=S.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(J!==void 0)W=J;else if(W=S.isPointLight===!0?c:a,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){let Z=W.uuid,lt=B.uuid,V=l[Z];V===void 0&&(V={},l[Z]=V);let tt=V[lt];tt===void 0&&(tt=W.clone(),V[lt]=tt,B.addEventListener("dispose",A)),W=tt}if(W.visible=B.visible,W.wireframe=B.wireframe,L===ss?W.side=B.shadowSide!==null?B.shadowSide:B.side:W.side=B.shadowSide!==null?B.shadowSide:f[B.side],W.alphaMap=B.alphaMap,W.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,W.map=B.map,W.clipShadows=B.clipShadows,W.clippingPlanes=B.clippingPlanes,W.clipIntersection=B.clipIntersection,W.displacementMap=B.displacementMap,W.displacementScale=B.displacementScale,W.displacementBias=B.displacementBias,W.wireframeLinewidth=B.wireframeLinewidth,W.linewidth=B.linewidth,S.isPointLight===!0&&W.isMeshDistanceMaterial===!0){let Z=i.properties.get(W);Z.light=S}return W}function y(I,B,S,L,W){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&W===ss)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,I.matrixWorld);let lt=t.update(I),V=I.material;if(Array.isArray(V)){let tt=lt.groups;for(let ct=0,st=tt.length;ct<st;ct++){let et=tt[ct],mt=V[et.materialIndex];if(mt&&mt.visible){let ut=O(I,mt,L,W);I.onBeforeShadow(i,I,B,S,lt,ut,et),i.renderBufferDirect(S,null,lt,ut,I,et),I.onAfterShadow(i,I,B,S,lt,ut,et)}}}else if(V.visible){let tt=O(I,V,L,W);I.onBeforeShadow(i,I,B,S,lt,tt,null),i.renderBufferDirect(S,null,lt,tt,I,null),I.onAfterShadow(i,I,B,S,lt,tt,null)}}let Z=I.children;for(let lt=0,V=Z.length;lt<V;lt++)y(Z[lt],B,S,L,W)}function A(I){I.target.removeEventListener("dispose",A);for(let S in l){let L=l[S],W=I.target.uuid;W in L&&(L[W].dispose(),delete L[W])}}}function R0(i,t){function e(){let T=!1,ot=new me,$=null,bt=new me(0,0,0,0);return{setMask:function(Et){$!==Et&&!T&&(i.colorMask(Et,Et,Et,Et),$=Et)},setLocked:function(Et){T=Et},setClear:function(Et,vt,It,Pt,Kt){Kt===!0&&(Et*=Pt,vt*=Pt,It*=Pt),ot.set(Et,vt,It,Pt),bt.equals(ot)===!1&&(i.clearColor(Et,vt,It,Pt),bt.copy(ot))},reset:function(){T=!1,$=null,bt.set(-1,0,0,0)}}}function n(){let T=!1,ot=!1,$=null,bt=null,Et=null;return{setReversed:function(vt){if(ot!==vt){let It=t.get("EXT_clip_control");vt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ot=vt;let Pt=Et;Et=null,this.setClear(Pt)}},getReversed:function(){return ot},setTest:function(vt){vt?k(i.DEPTH_TEST):z(i.DEPTH_TEST)},setMask:function(vt){$!==vt&&!T&&(i.depthMask(vt),$=vt)},setFunc:function(vt){if(ot&&(vt=dh[vt]),bt!==vt){switch(vt){case Pr:i.depthFunc(i.NEVER);break;case Lr:i.depthFunc(i.ALWAYS);break;case Nr:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case Dr:i.depthFunc(i.EQUAL);break;case Ur:i.depthFunc(i.GEQUAL);break;case Fr:i.depthFunc(i.GREATER);break;case Or:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=vt}},setLocked:function(vt){T=vt},setClear:function(vt){Et!==vt&&(Et=vt,ot&&(vt=1-vt),i.clearDepth(vt))},reset:function(){T=!1,$=null,bt=null,Et=null,ot=!1}}}function s(){let T=!1,ot=null,$=null,bt=null,Et=null,vt=null,It=null,Pt=null,Kt=null;return{setTest:function(Zt){T||(Zt?k(i.STENCIL_TEST):z(i.STENCIL_TEST))},setMask:function(Zt){ot!==Zt&&!T&&(i.stencilMask(Zt),ot=Zt)},setFunc:function(Zt,ae,ce){($!==Zt||bt!==ae||Et!==ce)&&(i.stencilFunc(Zt,ae,ce),$=Zt,bt=ae,Et=ce)},setOp:function(Zt,ae,ce){(vt!==Zt||It!==ae||Pt!==ce)&&(i.stencilOp(Zt,ae,ce),vt=Zt,It=ae,Pt=ce)},setLocked:function(Zt){T=Zt},setClear:function(Zt){Kt!==Zt&&(i.clearStencil(Zt),Kt=Zt)},reset:function(){T=!1,ot=null,$=null,bt=null,Et=null,vt=null,It=null,Pt=null,Kt=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},g=new WeakMap,_=[],M=null,x=!1,p=null,U=null,O=null,y=null,A=null,I=null,B=null,S=new Xt(0,0,0),L=0,W=!1,J=null,Z=null,lt=null,V=null,tt=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,et=0,mt=i.getParameter(i.VERSION);mt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(mt)[1]),st=et>=1):mt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),st=et>=2);let ut=null,Mt={},Bt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),qt=new me().fromArray(Bt),Yt=new me().fromArray(Lt);function $t(T,ot,$,bt){let Et=new Uint8Array(4),vt=i.createTexture();i.bindTexture(T,vt),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<$;It++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(ot+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return vt}let H={};H[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(Hi),rt(!1),ft(Ya),k(i.CULL_FACE),Y(Rn);function k(T){u[T]!==!0&&(i.enable(T),u[T]=!0)}function z(T){u[T]!==!1&&(i.disable(T),u[T]=!1)}function D(T,ot){return h[T]!==ot?(i.bindFramebuffer(T,ot),h[T]=ot,T===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),T===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Q(T,ot){let $=_,bt=!1;if(T){$=g.get(ot),$===void 0&&($=[],g.set(ot,$));let Et=T.textures;if($.length!==Et.length||$[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,It=Et.length;vt<It;vt++)$[vt]=i.COLOR_ATTACHMENT0+vt;$.length=Et.length,bt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,bt=!0);bt&&i.drawBuffers($)}function dt(T){return M!==T?(i.useProgram(T),M=T,!0):!1}let Ct={[Si]:i.FUNC_ADD,[Dc]:i.FUNC_SUBTRACT,[Uc]:i.FUNC_REVERSE_SUBTRACT};Ct[Fc]=i.MIN,Ct[Oc]=i.MAX;let P={[Bc]:i.ZERO,[zc]:i.ONE,[kc]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[Wc]:i.DST_COLOR,[Gc]:i.DST_ALPHA,[Vc]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[Xc]:i.ONE_MINUS_DST_COLOR,[Hc]:i.ONE_MINUS_DST_ALPHA,[qc]:i.CONSTANT_COLOR,[Yc]:i.ONE_MINUS_CONSTANT_COLOR,[Zc]:i.CONSTANT_ALPHA,[Jc]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(T,ot,$,bt,Et,vt,It,Pt,Kt,Zt){if(T===Rn){x===!0&&(z(i.BLEND),x=!1);return}if(x===!1&&(k(i.BLEND),x=!0),T!==Nc){if(T!==p||Zt!==W){if((U!==Si||A!==Si)&&(i.blendEquation(i.FUNC_ADD),U=Si,A=Si),Zt)switch(T){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.ONE,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",T);break}else switch(T){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ja:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $a:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",T);break}O=null,y=null,I=null,B=null,S.set(0,0,0),L=0,p=T,W=Zt}return}Et=Et||ot,vt=vt||$,It=It||bt,(ot!==U||Et!==A)&&(i.blendEquationSeparate(Ct[ot],Ct[Et]),U=ot,A=Et),($!==O||bt!==y||vt!==I||It!==B)&&(i.blendFuncSeparate(P[$],P[bt],P[vt],P[It]),O=$,y=bt,I=vt,B=It),(Pt.equals(S)===!1||Kt!==L)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Kt),S.copy(Pt),L=Kt),p=T,W=!1}function G(T,ot){T.side===Ve?z(i.CULL_FACE):k(i.CULL_FACE);let $=T.side===Ie;ot&&($=!$),rt($),T.blending===rs&&T.transparent===!1?Y(Rn):Y(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),r.setMask(T.colorWrite);let bt=T.stencilWrite;a.setTest(bt),bt&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Rt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):z(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(T){J!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),J=T)}function ft(T){T!==Ic?(k(i.CULL_FACE),T!==Z&&(T===Ya?i.cullFace(i.BACK):T===Pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):z(i.CULL_FACE),Z=T}function St(T){T!==lt&&(st&&i.lineWidth(T),lt=T)}function Rt(T,ot,$){T?(k(i.POLYGON_OFFSET_FILL),(V!==ot||tt!==$)&&(V=ot,tt=$,o.getReversed()&&(ot=-ot),i.polygonOffset(ot,$))):z(i.POLYGON_OFFSET_FILL)}function Tt(T){T?k(i.SCISSOR_TEST):z(i.SCISSOR_TEST)}function nt(T){T===void 0&&(T=i.TEXTURE0+ct-1),ut!==T&&(i.activeTexture(T),ut=T)}function b(T,ot,$){$===void 0&&(ut===null?$=i.TEXTURE0+ct-1:$=ut);let bt=Mt[$];bt===void 0&&(bt={type:void 0,texture:void 0},Mt[$]=bt),(bt.type!==T||bt.texture!==ot)&&(ut!==$&&(i.activeTexture($),ut=$),i.bindTexture(T,ot||H[T]),bt.type=T,bt.texture=ot)}function Nt(){let T=Mt[ut];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Ut(){try{i.compressedTexImage2D(...arguments)}catch(T){Jt("WebGLState:",T)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(T){Jt("WebGLState:",T)}}function v(){try{i.texSubImage2D(...arguments)}catch(T){Jt("WebGLState:",T)}}function it(){try{i.texSubImage3D(...arguments)}catch(T){Jt("WebGLState:",T)}}function pt(){try{i.compressedTexSubImage2D(...arguments)}catch(T){Jt("WebGLState:",T)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(T){Jt("WebGLState:",T)}}function F(){try{i.texStorage2D(...arguments)}catch(T){Jt("WebGLState:",T)}}function d(){try{i.texStorage3D(...arguments)}catch(T){Jt("WebGLState:",T)}}function m(){try{i.texImage2D(...arguments)}catch(T){Jt("WebGLState:",T)}}function E(){try{i.texImage3D(...arguments)}catch(T){Jt("WebGLState:",T)}}function R(T){return f[T]!==void 0?f[T]:i.getParameter(T)}function C(T,ot){f[T]!==ot&&(i.pixelStorei(T,ot),f[T]=ot)}function q(T){qt.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),qt.copy(T))}function X(T){Yt.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Yt.copy(T))}function ht(T,ot){let $=l.get(ot);$===void 0&&($=new WeakMap,l.set(ot,$));let bt=$.get(T);bt===void 0&&(bt=i.getUniformBlockIndex(ot,T.name),$.set(T,bt))}function at(T,ot){let bt=l.get(ot).get(T);c.get(ot)!==bt&&(i.uniformBlockBinding(ot,bt,T.__bindingPointIndex),c.set(ot,bt))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ut=null,Mt={},h={},g=new WeakMap,_=[],M=null,x=!1,p=null,U=null,O=null,y=null,A=null,I=null,B=null,S=new Xt(0,0,0),L=0,W=!1,J=null,Z=null,lt=null,V=null,tt=null,qt.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:z,bindFramebuffer:D,drawBuffers:Q,useProgram:dt,setBlending:Y,setMaterial:G,setFlipSided:rt,setCullFace:ft,setLineWidth:St,setPolygonOffset:Rt,setScissorTest:Tt,activeTexture:nt,bindTexture:b,unbindTexture:Nt,compressedTexImage2D:Ut,compressedTexImage3D:N,texImage2D:m,texImage3D:E,pixelStorei:C,getParameter:R,updateUBOMapping:ht,uniformBlockBinding:at,texStorage2D:F,texStorage3D:d,texSubImage2D:v,texSubImage3D:it,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:q,viewport:X,reset:wt}}function C0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,u=new WeakMap,f=new Set,h,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,v){return _?new OffscreenCanvas(N,v):Ts("canvas")}function x(N,v,it){let pt=1,yt=Ut(N);if((yt.width>it||yt.height>it)&&(pt=it/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let F=Math.floor(pt*yt.width),d=Math.floor(pt*yt.height);h===void 0&&(h=M(F,d));let m=v?M(F,d):h;return m.width=F,m.height=d,m.getContext("2d").drawImage(N,0,0,F,d),Qt("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+F+"x"+d+")."),m}else return"data"in N&&Qt("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),N;return N}function p(N){return N.generateMipmaps}function U(N){i.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(N,v,it,pt,yt,F=!1){if(N!==null){if(i[N]!==void 0)return i[N];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let d;pt&&(d=t.get("EXT_texture_norm16"),d||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let m=v;if(v===i.RED&&(it===i.FLOAT&&(m=i.R32F),it===i.HALF_FLOAT&&(m=i.R16F),it===i.UNSIGNED_BYTE&&(m=i.R8),it===i.UNSIGNED_SHORT&&d&&(m=d.R16_EXT),it===i.SHORT&&d&&(m=d.R16_SNORM_EXT)),v===i.RED_INTEGER&&(it===i.UNSIGNED_BYTE&&(m=i.R8UI),it===i.UNSIGNED_SHORT&&(m=i.R16UI),it===i.UNSIGNED_INT&&(m=i.R32UI),it===i.BYTE&&(m=i.R8I),it===i.SHORT&&(m=i.R16I),it===i.INT&&(m=i.R32I)),v===i.RG&&(it===i.FLOAT&&(m=i.RG32F),it===i.HALF_FLOAT&&(m=i.RG16F),it===i.UNSIGNED_BYTE&&(m=i.RG8),it===i.UNSIGNED_SHORT&&d&&(m=d.RG16_EXT),it===i.SHORT&&d&&(m=d.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(it===i.UNSIGNED_BYTE&&(m=i.RG8UI),it===i.UNSIGNED_SHORT&&(m=i.RG16UI),it===i.UNSIGNED_INT&&(m=i.RG32UI),it===i.BYTE&&(m=i.RG8I),it===i.SHORT&&(m=i.RG16I),it===i.INT&&(m=i.RG32I)),v===i.RGB_INTEGER&&(it===i.UNSIGNED_BYTE&&(m=i.RGB8UI),it===i.UNSIGNED_SHORT&&(m=i.RGB16UI),it===i.UNSIGNED_INT&&(m=i.RGB32UI),it===i.BYTE&&(m=i.RGB8I),it===i.SHORT&&(m=i.RGB16I),it===i.INT&&(m=i.RGB32I)),v===i.RGBA_INTEGER&&(it===i.UNSIGNED_BYTE&&(m=i.RGBA8UI),it===i.UNSIGNED_SHORT&&(m=i.RGBA16UI),it===i.UNSIGNED_INT&&(m=i.RGBA32UI),it===i.BYTE&&(m=i.RGBA8I),it===i.SHORT&&(m=i.RGBA16I),it===i.INT&&(m=i.RGBA32I)),v===i.RGB&&(it===i.UNSIGNED_SHORT&&d&&(m=d.RGB16_EXT),it===i.SHORT&&d&&(m=d.RGB16_SNORM_EXT),it===i.UNSIGNED_INT_5_9_9_9_REV&&(m=i.RGB9_E5),it===i.UNSIGNED_INT_10F_11F_11F_REV&&(m=i.R11F_G11F_B10F)),v===i.RGBA){let E=F?ws:ie.getTransfer(yt);it===i.FLOAT&&(m=i.RGBA32F),it===i.HALF_FLOAT&&(m=i.RGBA16F),it===i.UNSIGNED_BYTE&&(m=E===oe?i.SRGB8_ALPHA8:i.RGBA8),it===i.UNSIGNED_SHORT&&d&&(m=d.RGBA16_EXT),it===i.SHORT&&d&&(m=d.RGBA16_SNORM_EXT),it===i.UNSIGNED_SHORT_4_4_4_4&&(m=i.RGBA4),it===i.UNSIGNED_SHORT_5_5_5_1&&(m=i.RGB5_A1)}return(m===i.R16F||m===i.R32F||m===i.RG16F||m===i.RG32F||m===i.RGBA16F||m===i.RGBA32F)&&t.get("EXT_color_buffer_float"),m}function A(N,v){let it;return N?v===null||v===gn||v===ls?it=i.DEPTH24_STENCIL8:v===xn?it=i.DEPTH32F_STENCIL8:v===as&&(it=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gn||v===ls?it=i.DEPTH_COMPONENT24:v===xn?it=i.DEPTH_COMPONENT32F:v===as&&(it=i.DEPTH_COMPONENT16),it}function I(N,v){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==Te&&N.minFilter!==Re?Math.log2(Math.max(v.width,v.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?v.mipmaps.length:1}function B(N){let v=N.target;v.removeEventListener("dispose",B),L(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function S(N){let v=N.target;v.removeEventListener("dispose",S),J(v)}function L(N){let v=n.get(N);if(v.__webglInit===void 0)return;let it=N.source,pt=g.get(it);if(pt){let yt=pt[v.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&W(N),Object.keys(pt).length===0&&g.delete(it)}n.remove(N)}function W(N){let v=n.get(N);i.deleteTexture(v.__webglTexture);let it=N.source,pt=g.get(it);delete pt[v.__cacheKey],o.memory.textures--}function J(N){let v=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(v.__webglFramebuffer[pt]))for(let yt=0;yt<v.__webglFramebuffer[pt].length;yt++)i.deleteFramebuffer(v.__webglFramebuffer[pt][yt]);else i.deleteFramebuffer(v.__webglFramebuffer[pt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[pt])}else{if(Array.isArray(v.__webglFramebuffer))for(let pt=0;pt<v.__webglFramebuffer.length;pt++)i.deleteFramebuffer(v.__webglFramebuffer[pt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let pt=0;pt<v.__webglColorRenderbuffer.length;pt++)v.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[pt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let it=N.textures;for(let pt=0,yt=it.length;pt<yt;pt++){let F=n.get(it[pt]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),n.remove(it[pt])}n.remove(N)}let Z=0;function lt(){Z=0}function V(){return Z}function tt(N){Z=N}function ct(){let N=Z;return N>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,N}function st(N){let v=[];return v.push(N.wrapS),v.push(N.wrapT),v.push(N.wrapR||0),v.push(N.magFilter),v.push(N.minFilter),v.push(N.anisotropy),v.push(N.internalFormat),v.push(N.format),v.push(N.type),v.push(N.generateMipmaps),v.push(N.premultiplyAlpha),v.push(N.flipY),v.push(N.unpackAlignment),v.push(N.colorSpace),v.join()}function et(N,v){let it=n.get(N);if(N.isVideoTexture&&b(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&it.__version!==N.version){let pt=N.image;if(pt===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{z(it,N,v);return}}else N.isExternalTexture&&(it.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,it.__webglTexture,i.TEXTURE0+v)}function mt(N,v){let it=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&it.__version!==N.version){z(it,N,v);return}else N.isExternalTexture&&(it.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,it.__webglTexture,i.TEXTURE0+v)}function ut(N,v){let it=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&it.__version!==N.version){z(it,N,v);return}e.bindTexture(i.TEXTURE_3D,it.__webglTexture,i.TEXTURE0+v)}function Mt(N,v){let it=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&it.__version!==N.version){D(it,N,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture,i.TEXTURE0+v)}let Bt={[Wi]:i.REPEAT,[rn]:i.CLAMP_TO_EDGE,[Xi]:i.MIRRORED_REPEAT},Lt={[Te]:i.NEAREST,[jc]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Re]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},qt={[ih]:i.NEVER,[lh]:i.ALWAYS,[sh]:i.LESS,[na]:i.LEQUAL,[rh]:i.EQUAL,[ia]:i.GEQUAL,[oh]:i.GREATER,[ah]:i.NOTEQUAL};function Yt(N,v){if(v.type===xn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Re||v.magFilter===_o||v.magFilter===Qs||v.magFilter===ri||v.minFilter===Re||v.minFilter===_o||v.minFilter===Qs||v.minFilter===ri)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Bt[v.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Bt[v.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Bt[v.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Lt[v.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Lt[v.minFilter]),v.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,qt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Te||v.minFilter!==Qs&&v.minFilter!==ri||v.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $t(N,v){let it=!1;N.__webglInit===void 0&&(N.__webglInit=!0,v.addEventListener("dispose",B));let pt=v.source,yt=g.get(pt);yt===void 0&&(yt={},g.set(pt,yt));let F=st(v);if(F!==N.__cacheKey){yt[F]===void 0&&(yt[F]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,it=!0),yt[F].usedTimes++;let d=yt[N.__cacheKey];d!==void 0&&(yt[N.__cacheKey].usedTimes--,d.usedTimes===0&&W(v)),N.__cacheKey=F,N.__webglTexture=yt[F].texture}return it}function H(N,v,it){return Math.floor(Math.floor(N/it)/v)}function k(N,v,it,pt){let F=N.updateRanges;if(F.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,it,pt,v.data);else{F.sort((C,q)=>C.start-q.start);let d=0;for(let C=1;C<F.length;C++){let q=F[d],X=F[C],ht=q.start+q.count,at=H(X.start,v.width,4),wt=H(q.start,v.width,4);X.start<=ht+1&&at===wt&&H(X.start+X.count-1,v.width,4)===at?q.count=Math.max(q.count,X.start+X.count-q.start):(++d,F[d]=X)}F.length=d+1;let m=e.getParameter(i.UNPACK_ROW_LENGTH),E=e.getParameter(i.UNPACK_SKIP_PIXELS),R=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let C=0,q=F.length;C<q;C++){let X=F[C],ht=Math.floor(X.start/4),at=Math.ceil(X.count/4),wt=ht%v.width,T=Math.floor(ht/v.width),ot=at,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,T),e.texSubImage2D(i.TEXTURE_2D,0,wt,T,ot,$,it,pt,v.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,m),e.pixelStorei(i.UNPACK_SKIP_PIXELS,E),e.pixelStorei(i.UNPACK_SKIP_ROWS,R)}}function z(N,v,it){let pt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(pt=i.TEXTURE_3D);let yt=$t(N,v),F=v.source;e.bindTexture(pt,N.__webglTexture,i.TEXTURE0+it);let d=n.get(F);if(F.version!==d.__version||yt===!0){if(e.activeTexture(i.TEXTURE0+it),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let $=ie.getPrimaries(ie.workingColorSpace),bt=v.colorSpace===zn?null:ie.getPrimaries(v.colorSpace),Et=v.colorSpace===zn||$===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let E=x(v.image,!1,s.maxTextureSize);E=Nt(v,E);let R=r.convert(v.format,v.colorSpace),C=r.convert(v.type),q=y(v.internalFormat,R,C,v.normalized,v.colorSpace,v.isVideoTexture);Yt(pt,v);let X,ht=v.mipmaps,at=v.isVideoTexture!==!0,wt=d.__version===void 0||yt===!0,T=F.dataReady,ot=I(v,E);if(v.isDepthTexture)q=A(v.format===oi,v.type),wt&&(at?e.texStorage2D(i.TEXTURE_2D,1,q,E.width,E.height):e.texImage2D(i.TEXTURE_2D,0,q,E.width,E.height,0,R,C,null));else if(v.isDataTexture)if(ht.length>0){at&&wt&&e.texStorage2D(i.TEXTURE_2D,ot,q,ht[0].width,ht[0].height);for(let $=0,bt=ht.length;$<bt;$++)X=ht[$],at?T&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,X.width,X.height,R,C,X.data):e.texImage2D(i.TEXTURE_2D,$,q,X.width,X.height,0,R,C,X.data);v.generateMipmaps=!1}else at?(wt&&e.texStorage2D(i.TEXTURE_2D,ot,q,E.width,E.height),T&&k(v,E,R,C)):e.texImage2D(i.TEXTURE_2D,0,q,E.width,E.height,0,R,C,E.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){at&&wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,q,ht[0].width,ht[0].height,E.depth);for(let $=0,bt=ht.length;$<bt;$++)if(X=ht[$],v.format!==an)if(R!==null)if(at){if(T)if(v.layerUpdates.size>0){let Et=Ml(X.width,X.height,v.format,v.type);for(let vt of v.layerUpdates){let It=X.data.subarray(vt*Et/X.data.BYTES_PER_ELEMENT,(vt+1)*Et/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,vt,X.width,X.height,1,R,It)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,X.width,X.height,E.depth,R,X.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,q,X.width,X.height,E.depth,0,X.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,X.width,X.height,E.depth,R,C,X.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,q,X.width,X.height,E.depth,0,R,C,X.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{at&&wt&&e.texStorage2D(i.TEXTURE_2D,ot,q,ht[0].width,ht[0].height);for(let $=0,bt=ht.length;$<bt;$++)X=ht[$],v.format!==an?R!==null?at?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,X.width,X.height,R,X.data):e.compressedTexImage2D(i.TEXTURE_2D,$,q,X.width,X.height,0,X.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?T&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,X.width,X.height,R,C,X.data):e.texImage2D(i.TEXTURE_2D,$,q,X.width,X.height,0,R,C,X.data)}else if(v.isDataArrayTexture)if(at){if(wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,q,E.width,E.height,E.depth),T)if(v.layerUpdates.size>0){let $=Ml(E.width,E.height,v.format,v.type);for(let bt of v.layerUpdates){let Et=E.data.subarray(bt*$/E.data.BYTES_PER_ELEMENT,(bt+1)*$/E.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,E.width,E.height,1,R,C,Et)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,E.width,E.height,E.depth,R,C,E.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,q,E.width,E.height,E.depth,0,R,C,E.data);else if(v.isData3DTexture)at?(wt&&e.texStorage3D(i.TEXTURE_3D,ot,q,E.width,E.height,E.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,E.width,E.height,E.depth,R,C,E.data)):e.texImage3D(i.TEXTURE_3D,0,q,E.width,E.height,E.depth,0,R,C,E.data);else if(v.isFramebufferTexture){if(wt)if(at)e.texStorage2D(i.TEXTURE_2D,ot,q,E.width,E.height);else{let $=E.width,bt=E.height;for(let Et=0;Et<ot;Et++)e.texImage2D(i.TEXTURE_2D,Et,q,$,bt,0,R,C,null),$>>=1,bt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),E.parentNode!==$){$.appendChild(E),f.add(v),$.onpaint=bt=>{let Et=bt.changedElements;for(let vt of f)Et.includes(vt.image)&&(vt.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,E);else{let Et=i.RGBA,vt=i.RGBA,It=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,vt,It,E)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ht.length>0){if(at&&wt){let $=Ut(ht[0]);e.texStorage2D(i.TEXTURE_2D,ot,q,$.width,$.height)}for(let $=0,bt=ht.length;$<bt;$++)X=ht[$],at?T&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,R,C,X):e.texImage2D(i.TEXTURE_2D,$,q,R,C,X);v.generateMipmaps=!1}else if(at){if(wt){let $=Ut(E);e.texStorage2D(i.TEXTURE_2D,ot,q,$.width,$.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,R,C,E)}else e.texImage2D(i.TEXTURE_2D,0,q,R,C,E);p(v)&&U(pt),d.__version=F.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function D(N,v,it){if(v.image.length!==6)return;let pt=$t(N,v),yt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+it);let F=n.get(yt);if(yt.version!==F.__version||pt===!0){e.activeTexture(i.TEXTURE0+it);let d=ie.getPrimaries(ie.workingColorSpace),m=v.colorSpace===zn?null:ie.getPrimaries(v.colorSpace),E=v.colorSpace===zn||d===m?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,E);let R=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,q=[];for(let vt=0;vt<6;vt++)!R&&!C?q[vt]=x(v.image[vt],!0,s.maxCubemapSize):q[vt]=C?v.image[vt].image:v.image[vt],q[vt]=Nt(v,q[vt]);let X=q[0],ht=r.convert(v.format,v.colorSpace),at=r.convert(v.type),wt=y(v.internalFormat,ht,at,v.normalized,v.colorSpace),T=v.isVideoTexture!==!0,ot=F.__version===void 0||pt===!0,$=yt.dataReady,bt=I(v,X);Yt(i.TEXTURE_CUBE_MAP,v);let Et;if(R){T&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,wt,X.width,X.height);for(let vt=0;vt<6;vt++){Et=q[vt].mipmaps;for(let It=0;It<Et.length;It++){let Pt=Et[It];v.format!==an?ht!==null?T?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,Pt.width,Pt.height,ht,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,wt,Pt.width,Pt.height,0,Pt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,Pt.width,Pt.height,ht,at,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,wt,Pt.width,Pt.height,0,ht,at,Pt.data)}}}else{if(Et=v.mipmaps,T&&ot){Et.length>0&&bt++;let vt=Ut(q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,wt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(C){T?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,q[vt].width,q[vt].height,ht,at,q[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,wt,q[vt].width,q[vt].height,0,ht,at,q[vt].data);for(let It=0;It<Et.length;It++){let Kt=Et[It].image[vt].image;T?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,Kt.width,Kt.height,ht,at,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,wt,Kt.width,Kt.height,0,ht,at,Kt.data)}}else{T?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ht,at,q[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,wt,ht,at,q[vt]);for(let It=0;It<Et.length;It++){let Pt=Et[It];T?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,ht,at,Pt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,wt,ht,at,Pt.image[vt])}}}p(v)&&U(i.TEXTURE_CUBE_MAP),F.__version=yt.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function Q(N,v,it,pt,yt,F){let d=r.convert(it.format,it.colorSpace),m=r.convert(it.type),E=y(it.internalFormat,d,m,it.normalized,it.colorSpace),R=n.get(v),C=n.get(it);if(C.__renderTarget=v,!R.__hasExternalTextures){let q=Math.max(1,v.width>>F),X=Math.max(1,v.height>>F);yt===i.TEXTURE_3D||yt===i.TEXTURE_2D_ARRAY?e.texImage3D(yt,F,E,q,X,v.depth,0,d,m,null):e.texImage2D(yt,F,E,q,X,0,d,m,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),nt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,yt,C.__webglTexture,0,Tt(v)):(yt===i.TEXTURE_2D||yt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,yt,C.__webglTexture,F),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(N,v,it){if(i.bindRenderbuffer(i.RENDERBUFFER,N),v.depthBuffer){let pt=v.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,F=A(v.stencilBuffer,yt),d=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;nt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(v),F,v.width,v.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(v),F,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,F,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,d,i.RENDERBUFFER,N)}else{let pt=v.textures;for(let yt=0;yt<pt.length;yt++){let F=pt[yt],d=r.convert(F.format,F.colorSpace),m=r.convert(F.type),E=y(F.internalFormat,d,m,F.normalized,F.colorSpace);nt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(v),E,v.width,v.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(v),E,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,E,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(N,v,it){let pt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let yt=n.get(v.depthTexture);if(yt.__renderTarget=v,(!yt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),pt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,v.depthTexture.addEventListener("dispose",B)),yt.__webglTexture===void 0){yt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,yt.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,v.depthTexture);let R=r.convert(v.depthTexture.format),C=r.convert(v.depthTexture.type),q;v.depthTexture.format===En?q=i.DEPTH_COMPONENT24:v.depthTexture.format===oi&&(q=i.DEPTH24_STENCIL8);for(let X=0;X<6;X++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,q,v.width,v.height,0,R,C,null)}}else et(v.depthTexture,0);let F=yt.__webglTexture,d=Tt(v),m=pt?i.TEXTURE_CUBE_MAP_POSITIVE_X+it:i.TEXTURE_2D,E=v.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===En)nt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,E,m,F,0,d):i.framebufferTexture2D(i.FRAMEBUFFER,E,m,F,0);else if(v.depthTexture.format===oi)nt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,E,m,F,0,d):i.framebufferTexture2D(i.FRAMEBUFFER,E,m,F,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function P(N){let v=n.get(N),it=N.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==N.depthTexture){let pt=N.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),pt){let yt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),v.__depthDisposeCallback=yt}v.__boundDepthTexture=pt}if(N.depthTexture&&!v.__autoAllocateDepthBuffer)if(it)for(let pt=0;pt<6;pt++)Ct(v.__webglFramebuffer[pt],N,pt);else{let pt=N.texture.mipmaps;pt&&pt.length>0?Ct(v.__webglFramebuffer[0],N,0):Ct(v.__webglFramebuffer,N,0)}else if(it){v.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[pt]),v.__webglDepthbuffer[pt]===void 0)v.__webglDepthbuffer[pt]=i.createRenderbuffer(),dt(v.__webglDepthbuffer[pt],N,!1);else{let yt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=v.__webglDepthbuffer[pt];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,F)}}else{let pt=N.texture.mipmaps;if(pt&&pt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),dt(v.__webglDepthbuffer,N,!1);else{let yt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,F)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(N,v,it){let pt=n.get(N);v!==void 0&&Q(pt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),it!==void 0&&P(N)}function G(N){let v=N.texture,it=n.get(N),pt=n.get(v);N.addEventListener("dispose",S);let yt=N.textures,F=N.isWebGLCubeRenderTarget===!0,d=yt.length>1;if(d||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=v.version,o.memory.textures++),F){it.__webglFramebuffer=[];for(let m=0;m<6;m++)if(v.mipmaps&&v.mipmaps.length>0){it.__webglFramebuffer[m]=[];for(let E=0;E<v.mipmaps.length;E++)it.__webglFramebuffer[m][E]=i.createFramebuffer()}else it.__webglFramebuffer[m]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){it.__webglFramebuffer=[];for(let m=0;m<v.mipmaps.length;m++)it.__webglFramebuffer[m]=i.createFramebuffer()}else it.__webglFramebuffer=i.createFramebuffer();if(d)for(let m=0,E=yt.length;m<E;m++){let R=n.get(yt[m]);R.__webglTexture===void 0&&(R.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&nt(N)===!1){it.__webglMultisampledFramebuffer=i.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let m=0;m<yt.length;m++){let E=yt[m];it.__webglColorRenderbuffer[m]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,it.__webglColorRenderbuffer[m]);let R=r.convert(E.format,E.colorSpace),C=r.convert(E.type),q=y(E.internalFormat,R,C,E.normalized,E.colorSpace,N.isXRRenderTarget===!0),X=Tt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,q,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+m,i.RENDERBUFFER,it.__webglColorRenderbuffer[m])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(it.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(it.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,v);for(let m=0;m<6;m++)if(v.mipmaps&&v.mipmaps.length>0)for(let E=0;E<v.mipmaps.length;E++)Q(it.__webglFramebuffer[m][E],N,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+m,E);else Q(it.__webglFramebuffer[m],N,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);p(v)&&U(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(d){for(let m=0,E=yt.length;m<E;m++){let R=yt[m],C=n.get(R),q=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(q=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,C.__webglTexture),Yt(q,R),Q(it.__webglFramebuffer,N,R,i.COLOR_ATTACHMENT0+m,q,0),p(R)&&U(q)}e.unbindTexture()}else{let m=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(m=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(m,pt.__webglTexture),Yt(m,v),v.mipmaps&&v.mipmaps.length>0)for(let E=0;E<v.mipmaps.length;E++)Q(it.__webglFramebuffer[E],N,v,i.COLOR_ATTACHMENT0,m,E);else Q(it.__webglFramebuffer,N,v,i.COLOR_ATTACHMENT0,m,0);p(v)&&U(m),e.unbindTexture()}N.depthBuffer&&P(N)}function rt(N){let v=N.textures;for(let it=0,pt=v.length;it<pt;it++){let yt=v[it];if(p(yt)){let F=O(N),d=n.get(yt).__webglTexture;e.bindTexture(F,d),U(F),e.unbindTexture()}}}let ft=[],St=[];function Rt(N){if(N.samples>0){if(nt(N)===!1){let v=N.textures,it=N.width,pt=N.height,yt=i.COLOR_BUFFER_BIT,F=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,d=n.get(N),m=v.length>1;if(m)for(let R=0;R<v.length;R++)e.bindFramebuffer(i.FRAMEBUFFER,d.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+R,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+R,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,d.__webglMultisampledFramebuffer);let E=N.texture.mipmaps;E&&E.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,d.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let R=0;R<v.length;R++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(yt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(yt|=i.STENCIL_BUFFER_BIT)),m){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,d.__webglColorRenderbuffer[R]);let C=n.get(v[R]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,it,pt,0,0,it,pt,yt,i.NEAREST),c===!0&&(ft.length=0,St.length=0,ft.push(i.COLOR_ATTACHMENT0+R),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(ft.push(F),St.push(F),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),m)for(let R=0;R<v.length;R++){e.bindFramebuffer(i.FRAMEBUFFER,d.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+R,i.RENDERBUFFER,d.__webglColorRenderbuffer[R]);let C=n.get(v[R]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+R,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,d.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let v=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Tt(N){return Math.min(s.maxSamples,N.samples)}function nt(N){let v=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function b(N){let v=o.render.frame;u.get(N)!==v&&(u.set(N,v),N.update())}function Nt(N,v){let it=N.colorSpace,pt=N.format,yt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||it!==pi&&it!==zn&&(ie.getTransfer(it)===oe?(pt!==an||yt!==qe)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",it)),v}function Ut(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=ct,this.resetTextureUnits=lt,this.getTextureUnits=V,this.setTextureUnits=tt,this.setTexture2D=et,this.setTexture2DArray=mt,this.setTexture3D=ut,this.setTextureCube=Mt,this.rebindTextures=Y,this.setupRenderTarget=G,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function I0(i,t){function e(n,s=zn){let r,o=ie.getTransfer(s);if(n===qe)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ll)return i.BYTE;if(n===cl)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===fl)return i.ALPHA;if(n===dl)return i.RGB;if(n===an)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===ai)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===qs||n===Ys||n===Zs||n===Js)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===To||n===Ao||n===Ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Co||n===Io||n===Po||n===Lo||n===No||n===$s||n===Do)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Co||n===Io)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Po)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lo)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$s)return r.COMPRESSED_RG11_EAC;if(n===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Vo||n===Go||n===Ho||n===Wo||n===Xo||n===Qo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===Jo||n===$o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zo)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ko||n===jo||n===Ks||n===ta)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var P0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ns(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:P0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gl=class extends wn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,g=null,_=null,M=typeof XRWebGLBinding<"u",x=new Vl,p={},U=e.getContextAttributes(),O=null,y=null,A=[],I=[],B=new At,S=null,L=null,W=new Ae;W.viewport=new me;let J=new Ae;J.viewport=new me;let Z=[W,J],lt=new po,V=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let k=A[H];return k===void 0&&(k=new Ji,A[H]=k),k.getTargetRaySpace()},this.getControllerGrip=function(H){let k=A[H];return k===void 0&&(k=new Ji,A[H]=k),k.getGripSpace()},this.getHand=function(H){let k=A[H];return k===void 0&&(k=new Ji,A[H]=k),k.getHandSpace()};function ct(H){let k=I.indexOf(H.inputSource);if(k===-1)return;let z=A[k];z!==void 0&&(z.update(H.inputSource,H.frame,l||o),z.dispatchEvent({type:H.type,data:H.inputSource}))}function st(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",et);for(let H=0;H<A.length;H++){let k=I[H];k!==null&&(I[H]=null,A[H].disconnect(k))}V=null,tt=null,x.reset();for(let H in p)delete p[H];if(t.setRenderTarget(O),g=null,h=null,f=null,s=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(B.width,B.height,!1),L!==null){let H=L.camera;H.fov=L.fov,H.zoom=L.zoom,H.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(O=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",st),s.addEventListener("inputsourceschange",et),U.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(B),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let z=null,D=null,Q=null;U.depth&&(Q=U.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=U.stencil?oi:En,D=U.stencil?ls:gn);let dt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(dt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Xe(h.textureWidth,h.textureHeight,{format:an,type:qe,depthTexture:new $n(h.textureWidth,h.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let z={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,z),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new Xe(g.framebufferWidth,g.framebufferHeight,{format:an,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function et(H){for(let k=0;k<H.removed.length;k++){let z=H.removed[k],D=I.indexOf(z);D>=0&&(I[D]=null,A[D].disconnect(z))}for(let k=0;k<H.added.length;k++){let z=H.added[k],D=I.indexOf(z);if(D===-1){for(let dt=0;dt<A.length;dt++)if(dt>=I.length){I.push(z),D=dt;break}else if(I[dt]===null){I[dt]=z,D=dt;break}if(D===-1)break}let Q=A[D];Q&&Q.connect(z)}}let mt=new K,ut=new K;function Mt(H,k,z){mt.setFromMatrixPosition(k.matrixWorld),ut.setFromMatrixPosition(z.matrixWorld);let D=mt.distanceTo(ut),Q=k.projectionMatrix.elements,dt=z.projectionMatrix.elements,Ct=Q[14]/(Q[10]-1),P=Q[14]/(Q[10]+1),Y=(Q[9]+1)/Q[5],G=(Q[9]-1)/Q[5],rt=(Q[8]-1)/Q[0],ft=(dt[8]+1)/dt[0],St=Ct*rt,Rt=Ct*ft,Tt=D/(-rt+ft),nt=Tt*-rt;if(k.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(nt),H.translateZ(Tt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Q[10]===-1)H.projectionMatrix.copy(k.projectionMatrix),H.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let b=Ct+Tt,Nt=P+Tt,Ut=St-nt,N=Rt+(D-nt),v=Y*P/Nt*b,it=G*P/Nt*b;H.projectionMatrix.makePerspective(Ut,N,v,it,b,Nt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Bt(H,k){k===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(k.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let k=H.near,z=H.far;x.texture!==null&&(x.depthNear>0&&(k=x.depthNear),x.depthFar>0&&(z=x.depthFar)),lt.near=J.near=W.near=k,lt.far=J.far=W.far=z,(V!==lt.near||tt!==lt.far)&&(s.updateRenderState({depthNear:lt.near,depthFar:lt.far}),V=lt.near,tt=lt.far),lt.layers.mask=H.layers.mask|6,W.layers.mask=lt.layers.mask&-5,J.layers.mask=lt.layers.mask&-3;let D=H.parent,Q=lt.cameras;Bt(lt,D);for(let dt=0;dt<Q.length;dt++)Bt(Q[dt],D);Q.length===2?Mt(lt,W,J):lt.projectionMatrix.copy(W.projectionMatrix),L===null&&H.isPerspectiveCamera&&(L={camera:H,fov:H.fov,zoom:H.zoom}),Lt(H,lt,D)};function Lt(H,k,z){z===null?H.matrix.copy(k.matrixWorld):(H.matrix.copy(z.matrixWorld),H.matrix.invert(),H.matrix.multiply(k.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(k.projectionMatrix),H.projectionMatrixInverse.copy(k.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Yi*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return lt},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(H){c=H,h!==null&&(h.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(lt)},this.getCameraTexture=function(H){return p[H]};let qt=null;function Yt(H,k){if(u=k.getViewerPose(l||o),_=k,u!==null){let z=u.views;g!==null&&(t.setRenderTargetFramebuffer(y,g.framebuffer),t.setRenderTarget(y));let D=!1;z.length!==lt.cameras.length&&(lt.cameras.length=0,D=!0);for(let P=0;P<z.length;P++){let Y=z[P],G=null;if(g!==null)G=g.getViewport(Y);else{let ft=f.getViewSubImage(h,Y);G=ft.viewport,P===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let rt=Z[P];rt===void 0&&(rt=new Ae,rt.layers.enable(P),rt.viewport=new me,Z[P]=rt),rt.matrix.fromArray(Y.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Y.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(G.x,G.y,G.width,G.height),P===0&&(lt.matrix.copy(rt.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale)),D===!0&&lt.cameras.push(rt)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let P=f.getDepthInformation(z[0]);P&&P.isValid&&P.texture&&x.init(P,s.renderState)}if(Q&&Q.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let P=0;P<z.length;P++){let Y=z[P].camera;if(Y){let G=p[Y];G||(G=new Ns,p[Y]=G);let rt=f.getCameraImage(Y);G.sourceTexture=rt}}}}for(let z=0;z<A.length;z++){let D=I[z],Q=A[z];D!==null&&Q!==void 0&&Q.update(D,k,l||o)}qt&&qt(H,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}let $t=new Hh;$t.setAnimationLoop(Yt),this.setAnimationLoop=function(H){qt=H},this.dispose=function(){}}},N0=new pe,Zh=new Wt;Zh.set(-1,0,0,0,1,0,0,0,1);function D0(i,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,yl(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,U,O,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),f(x,p)):p.isMeshPhongMaterial?(r(x,p),u(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),h(x,p),p.isMeshPhysicalMaterial&&g(x,p,y)):p.isMeshMatcapMaterial?(r(x,p),_(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),M(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?c(x,p,U,O):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===Ie&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===Ie&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let U=t.get(p),O=U.envMap,y=U.envMapRotation;O&&(x.envMap.value=O,x.envMapRotation.value.setFromMatrix4(N0.makeRotationFromEuler(y)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Zh),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,U,O){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*U,x.scale.value=O*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function h(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function g(x,p,U){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ie&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,p){p.matcap&&(x.matcap.value=p.matcap)}function M(x,p){let U=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,A){let I=A.program;n.uniformBlockBinding(y,I)}function l(y,A){let I=s[y.id];I===void 0&&(x(y),I=u(y),s[y.id]=I,y.addEventListener("dispose",U));let B=A.program;n.updateUBOMapping(y,B);let S=t.render.frame;r[y.id]!==S&&(h(y),r[y.id]=S)}function u(y){let A=f();y.__bindingPointIndex=A;let I=i.createBuffer(),B=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,B,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,I),I}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let A=s[y.id],I=y.uniforms,B=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let S=0,L=I.length;S<L;S++){let W=I[S];if(Array.isArray(W))for(let J=0,Z=W.length;J<Z;J++)g(W[J],S,J,B);else g(W,S,0,B)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,A,I,B){if(M(y,A,I,B)===!0){let S=y.__offset,L=y.value;if(Array.isArray(L)){let W=0;for(let J=0;J<L.length;J++){let Z=L[J],lt=p(Z);_(Z,y.__data,W),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(W+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(L,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,y.__data)}}function _(y,A,I){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,I)}function M(y,A,I,B){let S=y.value,L=A+"_"+I;if(B[L]===void 0)return typeof S=="number"||typeof S=="boolean"?B[L]=S:ArrayBuffer.isView(S)?B[L]=S.slice():B[L]=S.clone(),!0;{let W=B[L];if(typeof S=="number"||typeof S=="boolean"){if(W!==S)return B[L]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(W.equals(S)===!1)return W.copy(S),!0}}return!1}function x(y){let A=y.uniforms,I=0,B=16;for(let L=0,W=A.length;L<W;L++){let J=Array.isArray(A[L])?A[L]:[A[L]];for(let Z=0,lt=J.length;Z<lt;Z++){let V=J[Z],tt=Array.isArray(V.value)?V.value:[V.value];for(let ct=0,st=tt.length;ct<st;ct++){let et=tt[ct],mt=p(et),ut=I%B,Mt=ut%mt.boundary,Bt=ut+Mt;I+=Mt,Bt!==0&&B-Bt<mt.storage&&(I+=B-Bt),V.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=I,I+=mt.storage}}}let S=I%B;return S>0&&(I+=B-S),y.__size=I,y.__cache={},this}function p(y){let A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",y),A}function U(y){let A=y.target;A.removeEventListener("dispose",U);let I=o.indexOf(A.__bindingPointIndex);o.splice(I,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function O(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:O}}var F0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;function O0(){return Cn===null&&(Cn=new Hr(F0,16,16,ai,_n),Cn.name="DFG_LUT",Cn.minFilter=Re,Cn.magFilter=Re,Cn.wrapS=rn,Cn.wrapT=rn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}var nr=class{constructor(t={}){let{canvas:e=hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:g=qe}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let M=g,x=new Set([Eo,bo,Mo]),p=new Set([qe,gn,as,ls,vo,So]),U=new Uint32Array(4),O=new Int32Array(4),y=new K,A=null,I=null,B=[],S=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let W=this,J=!1,Z=null,lt=null,V=null,tt=null;this._outputColorSpace=we;let ct=0,st=0,et=null,mt=-1,ut=null,Mt=new me,Bt=new me,Lt=null,qt=new Xt(0),Yt=0,$t=e.width,H=e.height,k=1,z=null,D=null,Q=new me(0,0,$t,H),dt=new me(0,0,$t,H),Ct=!1,P=new ji,Y=!1,G=!1,rt=new pe,ft=new K,St=new me,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function nt(){return et===null?k:1}let b=n;function Nt(w,j){return e.getContext(w,j)}let Ut,N,v,it,pt,yt,F,d,m,E,R,C,q,X,ht,at,wt,T,ot,$,bt,Et,vt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Kt,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",ae,!1),b===null){let j="webgl2";if(b=Nt(j,w),b===null)throw Nt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(w){throw e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),Jt("WebGLRenderer: "+w.message),w}function It(){Ut=new Wm(b),Ut.init(),bt=new I0(b,Ut),N=new Dm(b,Ut,t,bt),v=new R0(b,Ut),N.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),lt=b.createFramebuffer(),V=b.createFramebuffer(),tt=b.createFramebuffer(),it=new qm(b),pt=new p0,yt=new C0(b,Ut,v,pt,N,bt,it),F=new Hm(W),d=new Zf(b),Et=new Lm(b,d),m=new Xm(b,d,it,Et),E=new Zm(b,m,d,Et,it),T=new Ym(b,N,yt),ht=new Um(pt),R=new d0(W,F,Ut,N,Et,ht),C=new D0(W,pt),q=new g0,X=new M0(Ut),wt=new Pm(W,F,v,E,_,c),at=new A0(W,E,N),vt=new U0(b,it,N,v),ot=new Nm(b,Ut,it),$=new Qm(b,Ut,it),it.programs=R.programs,W.capabilities=N,W.extensions=Ut,W.properties=pt,W.renderLists=q,W.shadowMap=at,W.state=v,W.info=it}M!==qe&&(L=new $m(M,e.width,e.height,a,s,r));let Pt=new Gl(W,b);this.xr=Pt,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let w=Ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize($t,H,!1))},this.getSize=function(w){return w.set($t,H)},this.setSize=function(w,j,_t=!0){if(Pt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=w,H=j,e.width=Math.floor(w*k),e.height=Math.floor(j*k),_t===!0&&(e.style.width=w+"px",e.style.height=j+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set($t*k,H*k).floor()},this.setDrawingBufferSize=function(w,j,_t){$t=w,H=j,k=_t,e.width=Math.floor(w*_t),e.height=Math.floor(j*_t),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(M===qe){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Mt)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,j,_t,gt){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,j,_t,gt),v.viewport(Mt.copy(Q).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(dt)},this.setScissor=function(w,j,_t,gt){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,j,_t,gt),v.scissor(Bt.copy(dt).multiplyScalar(k).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(w){v.setScissorTest(Ct=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){D=w},this.getClearColor=function(w){return w.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,_t=!0){let gt=0;if(w){let xt=!1;if(et!==null){let Ot=et.texture.format;xt=x.has(Ot)}if(xt){let Ot=et.texture.type,kt=p.has(Ot),Ft=wt.getClearColor(),Vt=wt.getClearAlpha(),Ht=Ft.r,jt=Ft.g,ne=Ft.b;kt?(U[0]=Ht,U[1]=jt,U[2]=ne,U[3]=Vt,b.clearBufferuiv(b.COLOR,0,U)):(O[0]=Ht,O[1]=jt,O[2]=ne,O[3]=Vt,b.clearBufferiv(b.COLOR,0,O))}else gt|=b.COLOR_BUFFER_BIT}j&&(gt|=b.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_t&&(gt|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),gt!==0&&b.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Z=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),wt.dispose(),q.dispose(),X.dispose(),pt.dispose(),F.dispose(),E.dispose(),Et.dispose(),vt.dispose(),R.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",We),Pt.removeEventListener("sessionend",en),Ze.stop()};function Kt(w){w.preventDefault(),gl("WebGLRenderer: Context Lost."),J=!0}function Zt(){gl("WebGLRenderer: Context Restored."),J=!1;let w=it.autoReset,j=at.enabled,_t=at.autoUpdate,gt=at.needsUpdate,xt=at.type;It(),it.autoReset=w,at.enabled=j,at.autoUpdate=_t,at.needsUpdate=gt,at.type=xt}function ae(w){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){let j=w.target;j.removeEventListener("dispose",ce),Ge(j)}function Ge(w){be(w),pt.remove(w)}function be(w){let j=pt.get(w).programs;j!==void 0&&(j.forEach(function(_t){R.releaseProgram(_t)}),w.isShaderMaterial&&R.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,_t,gt,xt,Ot){j===null&&(j=Rt);let kt=xt.isMesh&&xt.matrixWorld.determinantAffine()<0,Ft=ou(w,j,_t,gt,xt);v.setMaterial(gt,kt);let Vt=_t.index,Ht=1;if(gt.wireframe===!0){if(Vt=m.getWireframeAttribute(_t),Vt===void 0)return;Ht=2}let jt=_t.drawRange,ne=_t.attributes.position,Gt=jt.start*Ht,re=(jt.start+jt.count)*Ht;Ot!==null&&(Gt=Math.max(Gt,Ot.start*Ht),re=Math.min(re,(Ot.start+Ot.count)*Ht)),Vt!==null?(Gt=Math.max(Gt,0),re=Math.min(re,Vt.count)):ne!=null&&(Gt=Math.max(Gt,0),re=Math.min(re,ne.count));let _e=re-Gt;if(_e<0||_e===1/0)return;Et.setup(xt,gt,Ft,_t,Vt);let fe,he=ot;if(Vt!==null&&(fe=d.get(Vt),he=$,he.setIndex(fe)),xt.isMesh)gt.wireframe===!0?(v.setLineWidth(gt.wireframeLinewidth*nt()),he.setMode(b.LINES)):he.setMode(b.TRIANGLES);else if(xt.isLine){let Pe=gt.linewidth;Pe===void 0&&(Pe=1),v.setLineWidth(Pe*nt()),xt.isLineSegments?he.setMode(b.LINES):xt.isLineLoop?he.setMode(b.LINE_LOOP):he.setMode(b.LINE_STRIP)}else xt.isPoints?he.setMode(b.POINTS):xt.isSprite&&he.setMode(b.TRIANGLES);if(xt.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))he.renderMultiDraw(xt._multiDrawStarts,xt._multiDrawCounts,xt._multiDrawCount);else{let Pe=xt._multiDrawStarts,zt=xt._multiDrawCounts,Oe=xt._multiDrawCount,se=Vt?d.get(Vt).bytesPerElement:1,nn=pt.get(gt).currentProgram.getUniforms();for(let vn=0;vn<Oe;vn++)nn.setValue(b,"_gl_DrawID",vn),he.render(Pe[vn]/se,zt[vn])}else if(xt.isInstancedMesh)he.renderInstances(Gt,_e,xt.count);else if(_t.isInstancedBufferGeometry){let Pe=_t._maxInstanceCount!==void 0?_t._maxInstanceCount:1/0,zt=Math.min(_t.instanceCount,Pe);he.renderInstances(Gt,_e,zt)}else he.render(Gt,_e)};function He(w,j,_t,gt){Z!==null&&w.isNodeMaterial&&Z.setObject(gt,w),Y===!0&&ht.setState(w,_t,!1),w.transparent===!0&&w.side===Ve&&w.forceSinglePass===!1?(w.side=Ie,w.needsUpdate=!0,ar(w,j,gt),w.side=ii,w.needsUpdate=!0,ar(w,j,gt),w.side=Ve):ar(w,j,gt)}this.compile=function(w,j,_t=null){_t===null&&(_t=w),Z!==null&&Z.renderStart(w,j,_t),I=X.get(_t),I.init(j),S.push(I),_t.traverseVisible(function(xt){xt.isLight&&xt.layers.test(j.layers)&&(I.pushLight(xt),xt.castShadow&&I.pushShadow(xt))}),w!==_t&&w.traverseVisible(function(xt){xt.isLight&&xt.layers.test(j.layers)&&(I.pushLight(xt),xt.castShadow&&I.pushShadow(xt))}),I.setupLights(),Z!==null&&Z.updateLights(I.state.lightsArray),G=this.localClippingEnabled,Y=ht.init(this.clippingPlanes,G),Y===!0&&ht.setGlobalState(this.clippingPlanes,j),Z!==null&&at.render(I.state.shadowsArray,_t,j);let gt=new Set;return w.traverse(function(xt){if(!(xt.isMesh||xt.isPoints||xt.isLine||xt.isSprite))return;let Ot=xt.material;if(Ot)if(Array.isArray(Ot))for(let kt=0;kt<Ot.length;kt++){let Ft=Ot[kt];He(Ft,_t,j,xt),gt.add(Ft)}else He(Ot,_t,j,xt),gt.add(Ot)}),I=S.pop(),Z!==null&&Z.renderEnd(),gt},this.compileAsync=function(w,j,_t=null){let gt=this.compile(w,j,_t);return new Promise(xt=>{function Ot(){if(gt.forEach(function(kt){let Vt=pt.get(kt).currentProgram;(Vt===void 0||Vt.isReady())&&gt.delete(kt)}),gt.size===0){xt(w);return}setTimeout(Ot,10)}Ut.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Fe=null;function Ye(w){Fe&&Fe(w)}function We(){Ze.stop()}function en(){Ze.start()}let Ze=new Hh;Ze.setAnimationLoop(Ye),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(w){Fe=w,Pt.setAnimationLoop(w),w===null?Ze.stop():Ze.start()},Pt.addEventListener("sessionstart",We),Pt.addEventListener("sessionend",en),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;Z!==null&&Z.renderStart(w,j);let _t=Pt.enabled===!0&&Pt.isPresenting===!0,gt=L!==null&&(et===null||_t)&&L.begin(W,et);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(j),j=Pt.getCamera()),w.isScene===!0&&w.onBeforeRender(W,w,j,et),I=X.get(w,S.length),I.init(j),I.state.textureUnits=yt.getTextureUnits(),S.push(I),rt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),P.setFromProjectionMatrix(rt,fn,j.reversedDepth),G=this.localClippingEnabled,Y=ht.init(this.clippingPlanes,G),A=q.get(w,B.length),A.init(),B.push(A),Pt.enabled===!0&&Pt.isPresenting===!0){let kt=W.xr.getDepthSensingMesh();kt!==null&&ps(kt,j,-1/0,W.sortObjects)}ps(w,j,0,W.sortObjects),A.finish(),Z!==null&&Z.updateLights(I.state.lightsArray),W.sortObjects===!0&&A.sort(z,D),Tt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Tt&&wt.addToRenderList(A,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Y===!0&&ht.beginShadows();let xt=I.state.shadowsArray;if(at.render(xt,w,j),Y===!0&&ht.endShadows(),(gt&&L.hasRenderPass())===!1){let kt=A.opaque,Ft=A.transmissive;if(I.setupLights(),j.isArrayCamera){let Vt=j.cameras;if(Ft.length>0)for(let Ht=0,jt=Vt.length;Ht<jt;Ht++){let ne=Vt[Ht];rr(kt,Ft,w,ne)}Tt&&wt.render(w);for(let Ht=0,jt=Vt.length;Ht<jt;Ht++){let ne=Vt[Ht];sr(A,w,ne,ne.viewport)}}else Ft.length>0&&rr(kt,Ft,w,j),Tt&&wt.render(w),sr(A,w,j)}et!==null&&st===0&&(yt.updateMultisampleRenderTarget(et),yt.updateRenderTargetMipmap(et)),gt&&L.end(W),w.isScene===!0&&w.onAfterRender(W,w,j),Et.resetDefaultState(),mt=-1,ut=null,S.pop(),S.length>0?(I=S[S.length-1],yt.setTextureUnits(I.state.textureUnits),Y===!0&&ht.setGlobalState(W.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?A=B[B.length-1]:A=null,Z!==null&&Z.renderEnd()};function ps(w,j,_t,gt){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)_t=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLightProbeGrid)I.pushLightProbeGrid(w);else if(w.isLight)I.pushLight(w),w.castShadow&&I.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(P)){gt&&St.setFromMatrixPosition(w.matrixWorld).applyMatrix4(rt);let kt=E.update(w),Ft=w.material;Ft.visible&&A.push(w,kt,Ft,_t,St.z,null,j)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(P))){let kt=E.update(w),Ft=w.material;if(gt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),St.copy(w.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),St.copy(kt.boundingSphere.center)),St.applyMatrix4(w.matrixWorld).applyMatrix4(rt)),Array.isArray(Ft)){let Vt=kt.groups;for(let Ht=0,jt=Vt.length;Ht<jt;Ht++){let ne=Vt[Ht],Gt=Ft[ne.materialIndex];Gt&&Gt.visible&&A.push(w,kt,Gt,_t,St.z,ne,j)}}else Ft.visible&&A.push(w,kt,Ft,_t,St.z,null,j)}}let Ot=w.children;for(let kt=0,Ft=Ot.length;kt<Ft;kt++)ps(Ot[kt],j,_t,gt)}function sr(w,j,_t,gt){let{opaque:xt,transmissive:Ot,transparent:kt}=w;I.setupLightsView(_t),Y===!0&&ht.setGlobalState(W.clippingPlanes,_t),gt&&v.viewport(Mt.copy(gt)),xt.length>0&&or(xt,j,_t),Ot.length>0&&or(Ot,j,_t),kt.length>0&&or(kt,j,_t),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function rr(w,j,_t,gt){if((_t.isScene===!0?_t.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[gt.id]===void 0){let Gt=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[gt.id]=new Xe(1,1,{generateMipmaps:!0,type:Gt?_n:qe,minFilter:ri,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let Ot=I.state.transmissionRenderTarget[gt.id],kt=gt.viewport||Mt;Ot.setSize(kt.z*W.transmissionResolutionScale,kt.w*W.transmissionResolutionScale);let Ft=W.getRenderTarget(),Vt=W.getActiveCubeFace(),Ht=W.getActiveMipmapLevel();W.setRenderTarget(Ot),W.getClearColor(qt),Yt=W.getClearAlpha(),Yt<1&&W.setClearColor(16777215,.5),W.clear(),Tt&&wt.render(_t);let jt=W.toneMapping;W.toneMapping=mn;let ne=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),I.setupLightsView(gt),Y===!0&&ht.setGlobalState(W.clippingPlanes,gt),or(w,_t,gt),yt.updateMultisampleRenderTarget(Ot),yt.updateRenderTargetMipmap(Ot),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let re=0,_e=j.length;re<_e;re++){let fe=j[re],{object:he,geometry:Pe,material:zt,group:Oe}=fe;if(zt.side===Ve&&he.layers.test(gt.layers)){let se=zt.side;zt.side=Ie,zt.needsUpdate=!0,Ql(he,_t,gt,Pe,zt,Oe),zt.side=se,zt.needsUpdate=!0,Gt=!0}}Gt===!0&&(yt.updateMultisampleRenderTarget(Ot),yt.updateRenderTargetMipmap(Ot))}W.setRenderTarget(Ft,Vt,Ht),W.setClearColor(qt,Yt),ne!==void 0&&(gt.viewport=ne),W.toneMapping=jt}function or(w,j,_t){let gt=j.isScene===!0?j.overrideMaterial:null;for(let xt=0,Ot=w.length;xt<Ot;xt++){let kt=w[xt],{object:Ft,geometry:Vt,group:Ht}=kt,jt=kt.material;jt.allowOverride===!0&&gt!==null&&(jt=gt),Ft.layers.test(_t.layers)&&Ql(Ft,j,_t,Vt,jt,Ht)}}function Ql(w,j,_t,gt,xt,Ot){Z!==null&&xt.isNodeMaterial&&Z.setObject(w,xt),w.onBeforeRender(W,j,_t,gt,xt,Ot),w.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),xt.onBeforeRender(W,j,_t,gt,w,Ot),xt.transparent===!0&&xt.side===Ve&&xt.forceSinglePass===!1?(xt.side=Ie,xt.needsUpdate=!0,W.renderBufferDirect(_t,j,gt,xt,w,Ot),xt.side=ii,xt.needsUpdate=!0,W.renderBufferDirect(_t,j,gt,xt,w,Ot),xt.side=Ve):W.renderBufferDirect(_t,j,gt,xt,w,Ot),w.onAfterRender(W,j,_t,gt,xt,Ot)}function ar(w,j,_t){j.isScene!==!0&&(j=Rt);let gt=pt.get(w),xt=I.state.lights,Ot=I.state.shadowsArray,kt=xt.state.version,Ft=R.getParameters(w,xt.state,Ot,j,_t,I.state.lightProbeGridArray),Vt=R.getProgramCacheKey(Ft),Ht=gt.programs;gt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?j.environment:null,gt.fog=j.fog;let jt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;gt.envMap=F.get(w.envMap||gt.environment,jt),gt.envMapRotation=gt.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",ce),Ht=new Map,gt.programs=Ht);let ne=Ht.get(Vt);if(ne!==void 0){if(gt.currentProgram===ne&&gt.lightsStateVersion===kt)return Yl(w,Ft),ne}else Ft.uniforms=R.getUniforms(w),Z!==null&&w.isNodeMaterial&&Z.build(w,_t,Ft),w.onBeforeCompile(Ft,W),ne=R.acquireProgram(Ft,Vt),Ht.set(Vt,ne),gt.uniforms=Ft.uniforms;let Gt=gt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=ht.uniform),Yl(w,Ft),gt.needsLights=lu(w),gt.lightsStateVersion=kt,gt.needsLights&&(Gt.ambientLightColor.value=xt.state.ambient,Gt.lightProbe.value=xt.state.probe,Gt.sunLights.value=xt.state.sun,Gt.sunLightShadows.value=xt.state.sunShadow,Gt.directionalLights.value=xt.state.directional,Gt.directionalLightShadows.value=xt.state.directionalShadow,Gt.spotLights.value=xt.state.spot,Gt.spotLightShadows.value=xt.state.spotShadow,Gt.rectAreaLights.value=xt.state.rectArea,Gt.ltc_1.value=xt.state.rectAreaLTC1,Gt.ltc_2.value=xt.state.rectAreaLTC2,Gt.pointLights.value=xt.state.point,Gt.pointLightShadows.value=xt.state.pointShadow,Gt.hemisphereLights.value=xt.state.hemi,Gt.sunShadowMatrix.value=xt.state.sunShadowMatrix,Gt.sunShadowCascade.value=xt.state.sunShadowCascade,Gt.directionalShadowMatrix.value=xt.state.directionalShadowMatrix,Gt.spotLightMatrix.value=xt.state.spotLightMatrix,Gt.spotLightMap.value=xt.state.spotLightMap,Gt.pointShadowMatrix.value=xt.state.pointShadowMatrix),gt.lightProbeGrid=I.state.lightProbeGridArray.length>0,gt.currentProgram=ne,gt.uniformsList=null,ne}function ql(w){if(w.uniformsList===null){let j=w.currentProgram.getUniforms();w.uniformsList=us.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Yl(w,j){let _t=pt.get(w);_t.outputColorSpace=j.outputColorSpace,_t.batching=j.batching,_t.batchingColor=j.batchingColor,_t.instancing=j.instancing,_t.instancingColor=j.instancingColor,_t.instancingMorph=j.instancingMorph,_t.skinning=j.skinning,_t.morphTargets=j.morphTargets,_t.morphNormals=j.morphNormals,_t.morphColors=j.morphColors,_t.morphTargetsCount=j.morphTargetsCount,_t.numClippingPlanes=j.numClippingPlanes,_t.numIntersection=j.numClipIntersection,_t.vertexAlphas=j.vertexAlphas,_t.vertexTangents=j.vertexTangents,_t.toneMapping=j.toneMapping}function ru(w,j){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(j.matrixWorld);for(let _t=0,gt=w.length;_t<gt;_t++){let xt=w[_t];if(xt.texture!==null&&xt.boundingBox.containsPoint(y))return xt}return null}function ou(w,j,_t,gt,xt){j.isScene!==!0&&(j=Rt),yt.resetTextureUnits();let Ot=j.fog,kt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial?j.environment:null,Ft=et===null?W.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ie.workingColorSpace,Vt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial&&!gt.envMap||gt.isMeshPhongMaterial&&!gt.envMap,Ht=F.get(gt.envMap||kt,Vt),jt=gt.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,ne=!!_t.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),Gt=!!_t.morphAttributes.position,re=!!_t.morphAttributes.normal,_e=!!_t.morphAttributes.color,fe=mn;gt.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(fe=W.toneMapping);let he=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,Pe=he!==void 0?he.length:0,zt=pt.get(gt),Oe=I.state.lights;if(Y===!0&&(G===!0||w!==ut)){let ue=w===ut&&gt.id===mt;ht.setState(gt,w,ue)}let se=!1;gt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Oe.state.version||zt.outputColorSpace!==Ft||xt.isBatchedMesh&&zt.batching===!1||!xt.isBatchedMesh&&zt.batching===!0||xt.isBatchedMesh&&zt.batchingColor===!0&&xt._colorsTexture===null||xt.isBatchedMesh&&zt.batchingColor===!1&&xt._colorsTexture!==null||xt.isInstancedMesh&&zt.instancing===!1||!xt.isInstancedMesh&&zt.instancing===!0||xt.isSkinnedMesh&&zt.skinning===!1||!xt.isSkinnedMesh&&zt.skinning===!0||xt.isInstancedMesh&&zt.instancingColor===!0&&xt.instanceColor===null||xt.isInstancedMesh&&zt.instancingColor===!1&&xt.instanceColor!==null||xt.isInstancedMesh&&zt.instancingMorph===!0&&xt.morphTexture===null||xt.isInstancedMesh&&zt.instancingMorph===!1&&xt.morphTexture!==null||zt.envMap!==Ht||gt.fog===!0&&zt.fog!==Ot||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ht.numPlanes||zt.numIntersection!==ht.numIntersection)||zt.vertexAlphas!==jt||zt.vertexTangents!==ne||zt.morphTargets!==Gt||zt.morphNormals!==re||zt.morphColors!==_e||zt.toneMapping!==fe||zt.morphTargetsCount!==Pe||!!zt.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,zt.__version=gt.version);let nn=zt.currentProgram;se===!0&&(nn=ar(gt,j,xt),Z&&gt.isNodeMaterial&&Z.onUpdateProgram(gt,nn,zt));let vn=!1,Vn=!1,Ti=!1,le=nn.getUniforms(),xe=zt.uniforms;if(v.useProgram(nn.program)&&(vn=!0,Vn=!0,Ti=!0),gt.id!==mt&&(mt=gt.id,Vn=!0),zt.needsLights){let ue=ru(I.state.lightProbeGridArray,xt);zt.lightProbeGrid!==ue&&(zt.lightProbeGrid=ue,Vn=!0)}if(vn||ut!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),le.setValue(b,"projectionMatrix",w.projectionMatrix),le.setValue(b,"viewMatrix",w.matrixWorldInverse);let Hn=le.map.cameraPosition;Hn!==void 0&&Hn.setValue(b,ft.setFromMatrixPosition(w.matrixWorld)),N.logarithmicDepthBuffer&&le.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&le.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),ut!==w&&(ut=w,Vn=!0,Ti=!0)}if(zt.needsLights&&(Oe.state.sunShadowMap.length>0&&le.setValue(b,"sunShadowMap",Oe.state.sunShadowMap,yt),Oe.state.directionalShadowMap.length>0&&le.setValue(b,"directionalShadowMap",Oe.state.directionalShadowMap,yt),Oe.state.spotShadowMap.length>0&&le.setValue(b,"spotShadowMap",Oe.state.spotShadowMap,yt),Oe.state.pointShadowMap.length>0&&le.setValue(b,"pointShadowMap",Oe.state.pointShadowMap,yt)),xt.isSkinnedMesh){le.setOptional(b,xt,"bindMatrix"),le.setOptional(b,xt,"bindMatrixInverse");let ue=xt.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),le.setValue(b,"boneTexture",ue.boneTexture,yt))}xt.isBatchedMesh&&(le.setOptional(b,xt,"batchingTexture"),le.setValue(b,"batchingTexture",xt._matricesTexture,yt),le.setOptional(b,xt,"batchingIdTexture"),le.setValue(b,"batchingIdTexture",xt._indirectTexture,yt),le.setOptional(b,xt,"batchingColorTexture"),xt._colorsTexture!==null&&le.setValue(b,"batchingColorTexture",xt._colorsTexture,yt));let Gn=_t.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&T.update(xt,_t,nn),(Vn||zt.receiveShadow!==xt.receiveShadow)&&(zt.receiveShadow=xt.receiveShadow,le.setValue(b,"receiveShadow",xt.receiveShadow)),(gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial)&&gt.envMap===null&&j.environment!==null&&(xe.envMapIntensity.value=j.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=O0()),Vn){if(le.setValue(b,"toneMappingExposure",W.toneMappingExposure),zt.needsLights&&au(xe,Ti),Ot&&gt.fog===!0&&C.refreshFogUniforms(xe,Ot),C.refreshMaterialUniforms(xe,gt,k,H,I.state.transmissionRenderTarget[w.id]),zt.needsLights&&zt.lightProbeGrid){let ue=zt.lightProbeGrid;xe.probesSH.value=ue.texture,xe.probesMin.value.copy(ue.boundingBox.min),xe.probesMax.value.copy(ue.boundingBox.max),xe.probesResolution.value.copy(ue.resolution)}us.upload(b,ql(zt),xe,yt)}if(gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(us.upload(b,ql(zt),xe,yt),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&le.setValue(b,"center",xt.center),le.setValue(b,"modelViewMatrix",xt.modelViewMatrix),le.setValue(b,"normalMatrix",xt.normalMatrix),le.setValue(b,"modelMatrix",xt.matrixWorld),gt.uniformsGroups!==void 0){let ue=gt.uniformsGroups;for(let Hn=0,Ai=ue.length;Hn<Ai;Hn++){let Jl=ue[Hn];vt.update(Jl,nn),vt.bind(Jl,nn)}}return nn}function au(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.sunLights.needsUpdate=j,w.sunLightShadows.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function lu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(w,j,_t){let gt=pt.get(w);gt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,gt.__autoAllocateDepthBuffer===!1&&(gt.__useRenderToTexture=!1),pt.get(w.texture).__webglTexture=j,pt.get(w.depthTexture).__webglTexture=gt.__autoAllocateDepthBuffer?void 0:_t,gt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){let _t=pt.get(w);_t.__webglFramebuffer=j,_t.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(w,j=0,_t=0){et=w,ct=j,st=_t;let gt=null,xt=!1,Ot=!1;if(w){let Ft=pt.get(w);if(Ft.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(b.FRAMEBUFFER,Ft.__webglFramebuffer),Mt.copy(w.viewport),Bt.copy(w.scissor),Lt=w.scissorTest,v.viewport(Mt),v.scissor(Bt),v.setScissorTest(Lt),mt=-1;return}else if(Ft.__webglFramebuffer===void 0)yt.setupRenderTarget(w);else if(Ft.__hasExternalTextures)yt.rebindTextures(w,pt.get(w.texture).__webglTexture,pt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let jt=w.depthTexture;if(Ft.__boundDepthTexture!==jt){if(jt!==null&&pt.has(jt)&&(w.width!==jt.image.width||w.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(w)}}let Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ot=!0);let Ht=pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[j])?gt=Ht[j][_t]:gt=Ht[j],xt=!0):w.samples>0&&yt.useMultisampledRTT(w)===!1?gt=pt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?gt=Ht[_t]:gt=Ht,Mt.copy(w.viewport),Bt.copy(w.scissor),Lt=w.scissorTest}else Mt.copy(Q).multiplyScalar(k).floor(),Bt.copy(dt).multiplyScalar(k).floor(),Lt=Ct;if(_t!==0&&(gt=lt),v.bindFramebuffer(b.FRAMEBUFFER,gt)&&v.drawBuffers(w,gt),v.viewport(Mt),v.scissor(Bt),v.setScissorTest(Lt),xt){let Ft=pt.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ft.__webglTexture,_t)}else if(Ot){let Ft=j;for(let Vt=0;Vt<w.textures.length;Vt++){let Ht=pt.get(w.textures[Vt]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Vt,Ht.__webglTexture,_t,Ft)}}else if(w!==null&&_t!==0){let Ft=pt.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ft.__webglTexture,_t)}mt=-1};function Zl(w){let j=pt.get(w);return(j.__readFormat!==w.format||j.__readType!==w.type)&&(j.__readFormat=w.format,j.__readType=w.type,j.__formatReadable=N.textureFormatReadable(w.format),j.__typeReadable=N.textureTypeReadable(w.type)),j}this.readRenderTargetPixels=function(w,j,_t,gt,xt,Ot,kt,Ft=0){if(!(w&&w.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&(Vt=Vt[kt]),Vt){v.bindFramebuffer(b.FRAMEBUFFER,Vt);try{let Ht=w.textures[Ft],jt=Ht.format,ne=Ht.type;w.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ft);let Gt=Zl(Ht);if(Gt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-gt&&_t>=0&&_t<=w.height-xt&&b.readPixels(j,_t,gt,xt,bt.convert(jt),bt.convert(ne),Ot)}finally{let Ht=et!==null?pt.get(et).__webglFramebuffer:null;v.bindFramebuffer(b.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,j,_t,gt,xt,Ot,kt,Ft=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&(Vt=Vt[kt]),Vt)if(j>=0&&j<=w.width-gt&&_t>=0&&_t<=w.height-xt){v.bindFramebuffer(b.FRAMEBUFFER,Vt);let Ht=w.textures[Ft],jt=Ht.format,ne=Ht.type;w.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ft);let Gt=Zl(Ht);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,re),b.bufferData(b.PIXEL_PACK_BUFFER,Ot.byteLength,b.STREAM_READ),b.readPixels(j,_t,gt,xt,bt.convert(jt),bt.convert(ne),0),b.bindBuffer(b.PIXEL_PACK_BUFFER,null);let _e=et!==null?pt.get(et).__webglFramebuffer:null;v.bindFramebuffer(b.FRAMEBUFFER,_e);let fe=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await fh(b,fe,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,re),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Ot),b.bindBuffer(b.PIXEL_PACK_BUFFER,null),b.deleteBuffer(re),b.deleteSync(fe),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,_t=0){let gt=Math.pow(2,-_t),xt=Math.floor(w.image.width*gt),Ot=Math.floor(w.image.height*gt),kt=j!==null?j.x:0,Ft=j!==null?j.y:0;yt.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,_t,0,0,kt,Ft,xt,Ot),v.unbindTexture()},this.copyTextureToTexture=function(w,j,_t=null,gt=null,xt=0,Ot=0){let kt,Ft,Vt,Ht,jt,ne,Gt,re,_e,fe=w.isCompressedTexture?w.mipmaps[Ot]:w.image;if(_t!==null)kt=_t.max.x-_t.min.x,Ft=_t.max.y-_t.min.y,Vt=_t.isBox3?_t.max.z-_t.min.z:1,Ht=_t.min.x,jt=_t.min.y,ne=_t.isBox3?_t.min.z:0;else{let xe=Math.pow(2,-xt);kt=Math.floor(fe.width*xe),Ft=Math.floor(fe.height*xe),w.isDataArrayTexture?Vt=fe.depth:w.isData3DTexture?Vt=Math.floor(fe.depth*xe):Vt=1,Ht=0,jt=0,ne=0}gt!==null?(Gt=gt.x,re=gt.y,_e=gt.z):(Gt=0,re=0,_e=0);let he=bt.convert(j.format),Pe=bt.convert(j.type),zt;j.isData3DTexture?(yt.setTexture3D(j,0),zt=b.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(yt.setTexture2DArray(j,0),zt=b.TEXTURE_2D_ARRAY):(yt.setTexture2D(j,0),zt=b.TEXTURE_2D),v.activeTexture(b.TEXTURE0),v.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,j.flipY),v.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),v.pixelStorei(b.UNPACK_ALIGNMENT,j.unpackAlignment);let Oe=v.getParameter(b.UNPACK_ROW_LENGTH),se=v.getParameter(b.UNPACK_IMAGE_HEIGHT),nn=v.getParameter(b.UNPACK_SKIP_PIXELS),vn=v.getParameter(b.UNPACK_SKIP_ROWS),Vn=v.getParameter(b.UNPACK_SKIP_IMAGES);v.pixelStorei(b.UNPACK_ROW_LENGTH,fe.width),v.pixelStorei(b.UNPACK_IMAGE_HEIGHT,fe.height),v.pixelStorei(b.UNPACK_SKIP_PIXELS,Ht),v.pixelStorei(b.UNPACK_SKIP_ROWS,jt),v.pixelStorei(b.UNPACK_SKIP_IMAGES,ne);let Ti=w.isDataArrayTexture||w.isData3DTexture,le=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){let xe=pt.get(w),Gn=pt.get(j),ue=pt.get(xe.__renderTarget),Hn=pt.get(Gn.__renderTarget);v.bindFramebuffer(b.READ_FRAMEBUFFER,ue.__webglFramebuffer),v.bindFramebuffer(b.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Ai=0;Ai<Vt;Ai++)Ti&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,pt.get(w).__webglTexture,xt,ne+Ai),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,pt.get(j).__webglTexture,Ot,_e+Ai)),b.blitFramebuffer(Ht,jt,kt,Ft,Gt,re,kt,Ft,b.DEPTH_BUFFER_BIT,b.NEAREST);v.bindFramebuffer(b.READ_FRAMEBUFFER,null),v.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(xt!==0||w.isRenderTargetTexture||pt.has(w)){let xe=pt.get(w),Gn=pt.get(j);v.bindFramebuffer(b.READ_FRAMEBUFFER,V),v.bindFramebuffer(b.DRAW_FRAMEBUFFER,tt);for(let ue=0;ue<Vt;ue++)Ti?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xe.__webglTexture,xt,ne+ue):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,xe.__webglTexture,xt),le?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Gn.__webglTexture,Ot,_e+ue):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Gn.__webglTexture,Ot),xt!==0?b.blitFramebuffer(Ht,jt,kt,Ft,Gt,re,kt,Ft,b.COLOR_BUFFER_BIT,b.NEAREST):le?b.copyTexSubImage3D(zt,Ot,Gt,re,_e+ue,Ht,jt,kt,Ft):b.copyTexSubImage2D(zt,Ot,Gt,re,Ht,jt,kt,Ft);v.bindFramebuffer(b.READ_FRAMEBUFFER,null),v.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?b.texSubImage3D(zt,Ot,Gt,re,_e,kt,Ft,Vt,he,Pe,fe.data):j.isCompressedArrayTexture?b.compressedTexSubImage3D(zt,Ot,Gt,re,_e,kt,Ft,Vt,he,fe.data):b.texSubImage3D(zt,Ot,Gt,re,_e,kt,Ft,Vt,he,Pe,fe):w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Ot,Gt,re,kt,Ft,he,Pe,fe.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Ot,Gt,re,fe.width,fe.height,he,fe.data):b.texSubImage2D(b.TEXTURE_2D,Ot,Gt,re,kt,Ft,he,Pe,fe);v.pixelStorei(b.UNPACK_ROW_LENGTH,Oe),v.pixelStorei(b.UNPACK_IMAGE_HEIGHT,se),v.pixelStorei(b.UNPACK_SKIP_PIXELS,nn),v.pixelStorei(b.UNPACK_SKIP_ROWS,vn),v.pixelStorei(b.UNPACK_SKIP_IMAGES,Vn),Ot===0&&j.generateMipmaps&&b.generateMipmap(zt),v.unbindTexture()},this.initRenderTarget=function(w){pt.get(w).__webglFramebuffer===void 0&&yt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?yt.setTextureCube(w,0):w.isData3DTexture?yt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?yt.setTexture2DArray(w,0):yt.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){ct=0,st=0,et=null,v.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var kn=Object.freeze({letters:Object.freeze({depth:62,bevelThickness:10,bevelSize:7.5,bevelSegments:4,curveSegments:12}),small:Object.freeze({depth:30,bevelThickness:4,bevelSize:3,bevelSegments:3,curveSegments:10}),lowTier:Object.freeze({bevelSegments:3,curveSegments:8}),creaseAngleDegrees:34,colors:Object.freeze({enamelTop:"#a21d3b",enamelMid:"#5c0f2b",enamelBottom:"#26050f",satin:"#f6e6ea",pearl:"#f3ecee",accent:"#e0405f",accentEmissive:"#7a0f2a",redLight:"#ff2f5c",keyLight:"#ffe9ee",rimLight:"#ff5d86"}),motion:Object.freeze({swayDegrees:5.5,tiltDegrees:1.8,swaySeconds:11,floatAmount:.03,lightSweepSeconds:9,parallaxDegrees:4,introSeconds:.9,calmFactor:.25}),stillPose:Object.freeze({y:-7,x:2}),maxFps:45});var ir=we,ca=class i extends yi{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,o=new Gs(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(k,z){if(k.nodeType!==1)return;k.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let D=A(k),Q=!1,dt=null;switch(k.nodeName){case"svg":z=M(k,z);break;case"style":r(k);break;case"g":z=M(k,z);break;case"path":z=M(k,z),k.hasAttribute("d")&&(dt=s(k));break;case"rect":z=M(k,z),dt=c(k);break;case"polygon":z=M(k,z),dt=l(k);break;case"polyline":z=M(k,z),dt=u(k);break;case"circle":z=M(k,z),dt=f(k);break;case"ellipse":z=M(k,z),dt=h(k);break;case"line":z=M(k,z),dt=g(k);break;case"defs":Q=!0;break;case"use":z=M(k,z);let Y=(k.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),G=k.viewportElement.getElementById(Y);G?n(G,z):console.warn("SVGLoader: 'use node' references non-existent node id: "+Y);break;default:}if(dt){z.fill!==void 0&&z.fill!=="none"&&!z.fill.startsWith("url")&&dt.color.setStyle(z.fill,ir),S(dt,Yt),tt.push(dt);let P=Object.assign({},z);P.strokeWidth=z.strokeWidth*lt(Yt),dt.userData={node:k,style:P,transform:Yt.clone(),gradients:st}}let Ct=k.childNodes;for(let P=0;P<Ct.length;P++){let Y=Ct[P];Q&&Y.nodeName!=="style"&&Y.nodeName!=="defs"||n(Y,z)}D&&(et.pop(),et.length>0?Yt.copy(et[et.length-1]):Yt.identity())}function s(k){let z=new pn,D=new At,Q=new At,dt=new At,Ct=!0,P=!1,Y=k.getAttribute("d");if(Y===""||Y==="none")return null;let G=Y.match(/[a-df-z][^a-df-z]*/ig);for(let rt=0,ft=G.length;rt<ft;rt++){let St=G[rt],Rt=St.charAt(0),Tt=St.slice(1).trim();Ct===!0&&(P=!0,Ct=!1);let nt;switch(Rt){case"M":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=2)D.x=nt[b+0],D.y=nt[b+1],Q.x=D.x,Q.y=D.y,b===0?z.moveTo(D.x,D.y):z.lineTo(D.x,D.y),b===0&&dt.copy(D);break;case"H":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b++)D.x=nt[b],Q.x=D.x,Q.y=D.y,z.lineTo(D.x,D.y),b===0&&P===!0&&dt.copy(D);break;case"V":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b++)D.y=nt[b],Q.x=D.x,Q.y=D.y,z.lineTo(D.x,D.y),b===0&&P===!0&&dt.copy(D);break;case"L":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=2)D.x=nt[b+0],D.y=nt[b+1],Q.x=D.x,Q.y=D.y,z.lineTo(D.x,D.y),b===0&&P===!0&&dt.copy(D);break;case"C":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=6)z.bezierCurveTo(nt[b+0],nt[b+1],nt[b+2],nt[b+3],nt[b+4],nt[b+5]),Q.x=nt[b+2],Q.y=nt[b+3],D.x=nt[b+4],D.y=nt[b+5],b===0&&P===!0&&dt.copy(D);break;case"S":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=4)z.bezierCurveTo(x(D.x,Q.x),x(D.y,Q.y),nt[b+0],nt[b+1],nt[b+2],nt[b+3]),Q.x=nt[b+0],Q.y=nt[b+1],D.x=nt[b+2],D.y=nt[b+3],b===0&&P===!0&&dt.copy(D);break;case"Q":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=4)z.quadraticCurveTo(nt[b+0],nt[b+1],nt[b+2],nt[b+3]),Q.x=nt[b+0],Q.y=nt[b+1],D.x=nt[b+2],D.y=nt[b+3],b===0&&P===!0&&dt.copy(D);break;case"T":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=2){let Ut=x(D.x,Q.x),N=x(D.y,Q.y);z.quadraticCurveTo(Ut,N,nt[b+0],nt[b+1]),Q.x=Ut,Q.y=N,D.x=nt[b+0],D.y=nt[b+1],b===0&&P===!0&&dt.copy(D)}break;case"A":nt=p(Tt,[3,4],7);for(let b=0,Nt=nt.length;b<Nt;b+=7){if(nt[b+5]==D.x&&nt[b+6]==D.y)continue;let Ut=D.clone();D.x=nt[b+5],D.y=nt[b+6],Q.x=D.x,Q.y=D.y,o(z,nt[b],nt[b+1],nt[b+2],nt[b+3],nt[b+4],Ut,D),b===0&&P===!0&&dt.copy(D)}break;case"m":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=2)D.x+=nt[b+0],D.y+=nt[b+1],Q.x=D.x,Q.y=D.y,b===0?z.moveTo(D.x,D.y):z.lineTo(D.x,D.y),b===0&&dt.copy(D);break;case"h":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b++)D.x+=nt[b],Q.x=D.x,Q.y=D.y,z.lineTo(D.x,D.y),b===0&&P===!0&&dt.copy(D);break;case"v":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b++)D.y+=nt[b],Q.x=D.x,Q.y=D.y,z.lineTo(D.x,D.y),b===0&&P===!0&&dt.copy(D);break;case"l":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=2)D.x+=nt[b+0],D.y+=nt[b+1],Q.x=D.x,Q.y=D.y,z.lineTo(D.x,D.y),b===0&&P===!0&&dt.copy(D);break;case"c":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=6)z.bezierCurveTo(D.x+nt[b+0],D.y+nt[b+1],D.x+nt[b+2],D.y+nt[b+3],D.x+nt[b+4],D.y+nt[b+5]),Q.x=D.x+nt[b+2],Q.y=D.y+nt[b+3],D.x+=nt[b+4],D.y+=nt[b+5],b===0&&P===!0&&dt.copy(D);break;case"s":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=4)z.bezierCurveTo(x(D.x,Q.x),x(D.y,Q.y),D.x+nt[b+0],D.y+nt[b+1],D.x+nt[b+2],D.y+nt[b+3]),Q.x=D.x+nt[b+0],Q.y=D.y+nt[b+1],D.x+=nt[b+2],D.y+=nt[b+3],b===0&&P===!0&&dt.copy(D);break;case"q":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=4)z.quadraticCurveTo(D.x+nt[b+0],D.y+nt[b+1],D.x+nt[b+2],D.y+nt[b+3]),Q.x=D.x+nt[b+0],Q.y=D.y+nt[b+1],D.x+=nt[b+2],D.y+=nt[b+3],b===0&&P===!0&&dt.copy(D);break;case"t":nt=p(Tt);for(let b=0,Nt=nt.length;b<Nt;b+=2){let Ut=x(D.x,Q.x),N=x(D.y,Q.y);z.quadraticCurveTo(Ut,N,D.x+nt[b+0],D.y+nt[b+1]),Q.x=Ut,Q.y=N,D.x=D.x+nt[b+0],D.y=D.y+nt[b+1],b===0&&P===!0&&dt.copy(D)}break;case"a":nt=p(Tt,[3,4],7);for(let b=0,Nt=nt.length;b<Nt;b+=7){if(nt[b+5]==0&&nt[b+6]==0)continue;let Ut=D.clone();D.x+=nt[b+5],D.y+=nt[b+6],Q.x=D.x,Q.y=D.y,o(z,nt[b],nt[b+1],nt[b+2],nt[b+3],nt[b+4],Ut,D),b===0&&P===!0&&dt.copy(D)}break;case"Z":case"z":z.currentPath.autoClose=!0,z.currentPath.curves.length>0&&(D.copy(dt),z.currentPath.currentPoint.copy(D),Ct=!0);break;default:console.warn(St)}P=!1}return z}function r(k){if(!(!k.sheet||!k.sheet.cssRules||!k.sheet.cssRules.length))for(let z=0;z<k.sheet.cssRules.length;z++){let D=k.sheet.cssRules[z];if(D.type!==1)continue;let Q=D.selectorText.split(/,/gm).filter(Boolean).map(dt=>dt.trim());for(let dt=0;dt<Q.length;dt++){let Ct=Object.fromEntries(Object.entries(D.style).filter(([,P])=>P!==""));ct[Q[dt]]=Object.assign(ct[Q[dt]]||{},Ct)}}}function o(k,z,D,Q,dt,Ct,P,Y){if(z==0||D==0){k.lineTo(Y.x,Y.y);return}Q=Q*Math.PI/180,z=Math.abs(z),D=Math.abs(D);let G=(P.x-Y.x)/2,rt=(P.y-Y.y)/2,ft=Math.cos(Q)*G+Math.sin(Q)*rt,St=-Math.sin(Q)*G+Math.cos(Q)*rt,Rt=z*z,Tt=D*D,nt=ft*ft,b=St*St,Nt=nt/Rt+b/Tt;if(Nt>1){let E=Math.sqrt(Nt);z=E*z,D=E*D,Rt=z*z,Tt=D*D}let Ut=Rt*b+Tt*nt,N=(Rt*Tt-Ut)/Ut,v=Math.sqrt(Math.max(0,N));dt===Ct&&(v=-v);let it=v*z*St/D,pt=-v*D*ft/z,yt=Math.cos(Q)*it-Math.sin(Q)*pt+(P.x+Y.x)/2,F=Math.sin(Q)*it+Math.cos(Q)*pt+(P.y+Y.y)/2,d=a(1,0,(ft-it)/z,(St-pt)/D),m=a((ft-it)/z,(St-pt)/D,(-ft-it)/z,(-St-pt)/D)%(Math.PI*2);k.currentPath.absellipse(yt,F,z,D,d,d+m,Ct===0,Q)}function a(k,z,D,Q){let dt=k*D+z*Q,Ct=Math.sqrt(k*k+z*z)*Math.sqrt(D*D+Q*Q),P=Math.acos(Math.max(-1,Math.min(1,dt/Ct)));return k*Q-z*D<0&&(P=-P),P}function c(k){let z=y(k.getAttribute("x")||0),D=y(k.getAttribute("y")||0),Q=y(k.getAttribute("rx")||k.getAttribute("ry")||0),dt=y(k.getAttribute("ry")||k.getAttribute("rx")||0),Ct=y(k.getAttribute("width")),P=y(k.getAttribute("height")),Y=1-.551915024494,G=new pn;return G.moveTo(z+Q,D),G.lineTo(z+Ct-Q,D),(Q!==0||dt!==0)&&G.bezierCurveTo(z+Ct-Q*Y,D,z+Ct,D+dt*Y,z+Ct,D+dt),G.lineTo(z+Ct,D+P-dt),(Q!==0||dt!==0)&&G.bezierCurveTo(z+Ct,D+P-dt*Y,z+Ct-Q*Y,D+P,z+Ct-Q,D+P),G.lineTo(z+Q,D+P),(Q!==0||dt!==0)&&G.bezierCurveTo(z+Q*Y,D+P,z,D+P-dt*Y,z,D+P-dt),G.lineTo(z,D+dt),(Q!==0||dt!==0)&&G.bezierCurveTo(z,D+dt*Y,z+Q*Y,D,z+Q,D),G}function l(k){function z(Ct,P,Y){let G=y(P),rt=y(Y);dt===0?Q.moveTo(G,rt):Q.lineTo(G,rt),dt++}let D=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,Q=new pn,dt=0;return k.getAttribute("points").replace(D,z),Q.currentPath.autoClose=!0,Q}function u(k){function z(Ct,P,Y){let G=y(P),rt=y(Y);dt===0?Q.moveTo(G,rt):Q.lineTo(G,rt),dt++}let D=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,Q=new pn,dt=0;return k.getAttribute("points").replace(D,z),Q.currentPath.autoClose=!1,Q}function f(k){let z=y(k.getAttribute("cx")||0),D=y(k.getAttribute("cy")||0),Q=y(k.getAttribute("r")||0),dt=new on;dt.absarc(z,D,Q,0,Math.PI*2);let Ct=new pn;return Ct.subPaths.push(dt),Ct}function h(k){let z=y(k.getAttribute("cx")||0),D=y(k.getAttribute("cy")||0),Q=y(k.getAttribute("rx")||0),dt=y(k.getAttribute("ry")||0),Ct=new on;Ct.absellipse(z,D,Q,dt,0,Math.PI*2);let P=new pn;return P.subPaths.push(Ct),P}function g(k){let z=y(k.getAttribute("x1")||0),D=y(k.getAttribute("y1")||0),Q=y(k.getAttribute("x2")||0),dt=y(k.getAttribute("y2")||0),Ct=new pn;return Ct.moveTo(z,D),Ct.lineTo(Q,dt),Ct.currentPath.autoClose=!1,Ct}function _(k){let z="http://www.w3.org/1999/xlink",D=k.querySelectorAll("linearGradient, radialGradient"),Q=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],dt={};for(let P of D){let Y=P.getAttribute("id");if(!Y)continue;let G={type:P.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},rt=P.getAttributeNS(z,"href")||P.getAttribute("href")||"";rt.startsWith("#")&&(G.href=rt.substring(1));for(let St of Q)P.hasAttribute(St)&&(G.attrs[St]=P.getAttribute(St));let ft=P.querySelectorAll("stop");if(ft.length>0){G.stops=[];for(let St of ft){let Rt=St.getAttribute("stop-color");!Rt&&St.style&&(Rt=St.style["stop-color"]),Rt||(Rt="#000");let Tt=St.getAttribute("stop-opacity");(Tt===null||Tt==="")&&St.style&&(Tt=St.style["stop-opacity"]),Tt=Tt===null||Tt===""||Tt===void 0?1:Math.max(0,Math.min(1,parseFloat(Tt)));let nt=Math.max(0,Math.min(1,parseFloat(St.getAttribute("offset")||"0")));G.stops.push({offset:nt,color:Rt,opacity:Tt})}}dt[Y]=G}function Ct(P,Y){let G=dt[P];if(!G||Y.has(P))return G;if(Y.add(P),G.href&&dt[G.href]){let rt=Ct(G.href,Y);if(rt){G.stops||(G.stops=rt.stops);for(let ft in rt.attrs)ft in G.attrs||(G.attrs[ft]=rt.attrs[ft])}}return G}for(let P in dt)Ct(P,new Set);for(let P in dt){let St=function(Rt){return typeof Rt!="string"?0:Rt.endsWith("%")?parseFloat(Rt)/100:y(Rt)},Y=dt[P],G=Y.attrs,rt=G.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",ft={type:Y.type,gradientUnits:rt,spreadMethod:G.spreadMethod==="reflect"||G.spreadMethod==="repeat"?G.spreadMethod:"pad",gradientTransform:null,stops:(Y.stops||[]).slice().sort((Rt,Tt)=>Rt.offset-Tt.offset)};if(G.gradientTransform&&(ft.gradientTransform=new Wt,B(G.gradientTransform,ft.gradientTransform)),Y.type==="linearGradient")ft.x1=G.x1!==void 0?St(G.x1):0,ft.y1=G.y1!==void 0?St(G.y1):0,ft.x2=G.x2!==void 0?St(G.x2):rt==="objectBoundingBox"?1:0,ft.y2=G.y2!==void 0?St(G.y2):0;else{let Rt=rt==="objectBoundingBox"?.5:0,Tt=rt==="objectBoundingBox"?.5:0;ft.cx=G.cx!==void 0?St(G.cx):Rt,ft.cy=G.cy!==void 0?St(G.cy):Rt,ft.r=G.r!==void 0?St(G.r):Tt,ft.fx=G.fx!==void 0?St(G.fx):ft.cx,ft.fy=G.fy!==void 0?St(G.fy):ft.cy}st[P]=ft}}function M(k,z){z=Object.assign({},z);let D={};if(k.hasAttribute("class")){let P=k.getAttribute("class").split(/\s/).filter(Boolean).map(Y=>Y.trim());for(let Y=0;Y<P.length;Y++)D=Object.assign(D,ct["."+P[Y]])}k.hasAttribute("id")&&(D=Object.assign(D,ct["#"+k.getAttribute("id")]));function Q(P,Y,G){G===void 0&&(G=function(ft){return ft}),k.hasAttribute(P)&&(z[Y]=G(k.getAttribute(P))),D[Y]&&(z[Y]=G(D[Y])),k.style&&k.style[P]!==""&&(z[Y]=G(k.style[P]))}function dt(P){return Math.max(0,Math.min(1,y(P)))}function Ct(P){return Math.max(0,y(P))}return Q("fill","fill"),Q("fill-opacity","fillOpacity",dt),Q("fill-rule","fillRule"),Q("opacity","opacity",dt),Q("stroke","stroke"),Q("stroke-opacity","strokeOpacity",dt),Q("stroke-width","strokeWidth",Ct),Q("stroke-linejoin","strokeLineJoin"),Q("stroke-linecap","strokeLineCap"),Q("stroke-miterlimit","strokeMiterLimit",Ct),Q("visibility","visibility"),z}function x(k,z){return k-(z-k)}function p(k,z,D){if(typeof k!="string")throw new TypeError("Invalid input: "+typeof k);let Q={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},dt=0,Ct=1,P=2,Y=3,G=dt,rt=!0,ft="",St="",Rt=[];function Tt(Ut,N,v){let it=new SyntaxError('Unexpected character "'+Ut+'" at index '+N+".");throw it.partial=v,it}function nt(){ft!==""&&(St===""?Rt.push(Number(ft)):Rt.push(Number(ft)*Math.pow(10,Number(St)))),ft="",St=""}let b,Nt=k.length;for(let Ut=0;Ut<Nt;Ut++){if(b=k[Ut],Array.isArray(z)&&z.includes(Rt.length%D)&&Q.FLAGS.test(b)){G=Ct,ft=b,nt();continue}if(G===dt){if(Q.WHITESPACE.test(b))continue;if(Q.DIGIT.test(b)||Q.SIGN.test(b)){G=Ct,ft=b;continue}if(Q.POINT.test(b)){G=P,ft=b;continue}Q.COMMA.test(b)&&(rt&&Tt(b,Ut,Rt),rt=!0)}if(G===Ct){if(Q.DIGIT.test(b)){ft+=b;continue}if(Q.POINT.test(b)){ft+=b,G=P;continue}if(Q.EXP.test(b)){G=Y;continue}Q.SIGN.test(b)&&ft.length===1&&Q.SIGN.test(ft[0])&&Tt(b,Ut,Rt)}if(G===P){if(Q.DIGIT.test(b)){ft+=b;continue}if(Q.EXP.test(b)){G=Y;continue}Q.POINT.test(b)&&ft[ft.length-1]==="."&&Tt(b,Ut,Rt)}if(G===Y){if(Q.DIGIT.test(b)){St+=b;continue}if(Q.SIGN.test(b)){if(St===""){St+=b;continue}St.length===1&&Q.SIGN.test(St)&&Tt(b,Ut,Rt)}}Q.WHITESPACE.test(b)?(nt(),G=dt,rt=!1):Q.COMMA.test(b)?(nt(),G=dt,rt=!0):Q.SIGN.test(b)?(nt(),G=Ct,ft=b):Q.POINT.test(b)?(nt(),G=P,ft=b):Tt(b,Ut,Rt)}return nt(),Rt}let U=["mm","cm","in","pt","pc","px"],O={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(k){let z="px";if(typeof k=="string"||k instanceof String)for(let Q=0,dt=U.length;Q<dt;Q++){let Ct=U[Q];if(k.endsWith(Ct)){z=Ct,k=k.substring(0,k.length-Ct.length);break}}let D;return z==="px"&&e.defaultUnit!=="px"?D=O.in[e.defaultUnit]/e.defaultDPI:(D=O[z][e.defaultUnit],D<0&&(D=O[z].in*e.defaultDPI)),D*parseFloat(k)}function A(k){if(!(k.hasAttribute("transform")||k.nodeName==="use"&&(k.hasAttribute("x")||k.hasAttribute("y"))))return null;let z=I(k);return et.length>0&&z.premultiply(et[et.length-1]),Yt.copy(z),et.push(z),z}function I(k){let z=new Wt;if(k.nodeName==="use"&&(k.hasAttribute("x")||k.hasAttribute("y"))){let D=y(k.getAttribute("x")||0),Q=y(k.getAttribute("y")||0);z.makeTranslation(D,Q)}return k.hasAttribute("transform")&&B(k.getAttribute("transform"),z),z}function B(k,z){let D=mt,Q=k.split(")");for(let dt=Q.length-1;dt>=0;dt--){let Ct=Q[dt].trim();if(Ct==="")continue;let P=Ct.indexOf("("),Y=Ct.length;if(P>0&&P<Y){let G=Ct.slice(0,P),rt=p(Ct.slice(P+1));switch(D.identity(),G){case"translate":if(rt.length>=1){let ft=rt[0],St=0;rt.length>=2&&(St=rt[1]),D.makeTranslation(ft,St)}break;case"rotate":if(rt.length>=1){let ft=0,St=0,Rt=0;ft=rt[0]*Math.PI/180,rt.length>=3&&(St=rt[1],Rt=rt[2]),ut.makeTranslation(-St,-Rt),Mt.makeRotation(ft),Bt.multiplyMatrices(Mt,ut),ut.makeTranslation(St,Rt),D.multiplyMatrices(ut,Bt)}break;case"scale":if(rt.length>=1){let ft=rt[0],St=ft;rt.length>=2&&(St=rt[1]),D.makeScale(ft,St)}break;case"skewX":rt.length===1&&D.set(1,Math.tan(rt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":rt.length===1&&D.set(1,0,0,Math.tan(rt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":rt.length===6&&D.set(rt[0],rt[2],rt[4],rt[1],rt[3],rt[5],0,0,1);break}z.premultiply(D)}}return z}function S(k,z){function D(P){qt.set(P.x,P.y,1).applyMatrix3(z),P.set(qt.x,qt.y)}function Q(P){let Y=P.xRadius,G=P.yRadius,rt=Math.cos(P.aRotation),ft=Math.sin(P.aRotation),St=new K(Y*rt,Y*ft,0),Rt=new K(-G*ft,G*rt,0),Tt=St.applyMatrix3(z),nt=Rt.applyMatrix3(z),b=mt.set(Tt.x,nt.x,0,Tt.y,nt.y,0,0,0,1),Nt=ut.copy(b).invert(),v=Mt.copy(Nt).transpose().multiply(Nt).elements,it=V(v[0],v[1],v[4]),pt=Math.sqrt(it.rt1),yt=Math.sqrt(it.rt2);if(P.xRadius=1/pt,P.yRadius=1/yt,P.aRotation=Math.atan2(it.sn,it.cs),!((P.aEndAngle-P.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let d=ut.set(pt,0,0,0,yt,0,0,0,1),m=Mt.set(it.cs,it.sn,0,-it.sn,it.cs,0,0,0,1),E=d.multiply(m).multiply(b),R=C=>{let{x:q,y:X}=new K(Math.cos(C),Math.sin(C),0).applyMatrix3(E);return Math.atan2(X,q)};P.aStartAngle=R(P.aStartAngle),P.aEndAngle=R(P.aEndAngle),L(z)&&(P.aClockwise=!P.aClockwise)}}function dt(P){let Y=J(z),G=Z(z);P.xRadius*=Y,P.yRadius*=G;let rt=Y>Number.EPSILON?Math.atan2(z.elements[1],z.elements[0]):Math.atan2(-z.elements[3],z.elements[4]);P.aRotation+=rt,L(z)&&(P.aStartAngle*=-1,P.aEndAngle*=-1,P.aClockwise=!P.aClockwise)}let Ct=k.subPaths;for(let P=0,Y=Ct.length;P<Y;P++){let rt=Ct[P].curves;for(let ft=0;ft<rt.length;ft++){let St=rt[ft];St.isLineCurve?(D(St.v1),D(St.v2)):St.isCubicBezierCurve?(D(St.v0),D(St.v1),D(St.v2),D(St.v3)):St.isQuadraticBezierCurve?(D(St.v0),D(St.v1),D(St.v2)):St.isEllipseCurve&&(Lt.set(St.aX,St.aY),D(Lt),St.aX=Lt.x,St.aY=Lt.y,W(z)?Q(St):dt(St))}}}function L(k){let z=k.elements;return z[0]*z[4]-z[1]*z[3]<0}function W(k){let z=k.elements,D=z[0]*z[3]+z[1]*z[4];if(D===0)return!1;let Q=J(k),dt=Z(k);return Math.abs(D/(Q*dt))>Number.EPSILON}function J(k){let z=k.elements;return Math.sqrt(z[0]*z[0]+z[1]*z[1])}function Z(k){let z=k.elements;return Math.sqrt(z[3]*z[3]+z[4]*z[4])}function lt(k){let z=k.elements,D=z[0]*z[4]-z[1]*z[3];return Math.sqrt(Math.abs(D))}function V(k,z,D){let Q,dt,Ct,P,Y,G=k+D,rt=k-D,ft=Math.sqrt(rt*rt+4*z*z);return G>0?(Q=.5*(G+ft),Y=1/Q,dt=k*Y*D-z*Y*z):G<0?dt=.5*(G-ft):(Q=.5*ft,dt=-.5*ft),rt>0?Ct=rt+ft:Ct=rt-ft,Math.abs(Ct)>2*Math.abs(z)?(Y=-2*z/Ct,P=1/Math.sqrt(1+Y*Y),Ct=Y*P):Math.abs(z)===0?(Ct=1,P=0):(Y=-.5*Ct/z,Ct=1/Math.sqrt(1+Y*Y),P=Y*Ct),rt>0&&(Y=Ct,Ct=-P,P=Y),{rt1:Q,rt2:dt,cs:Ct,sn:P}}let tt=[],ct={},st={},et=[],mt=new Wt,ut=new Wt,Mt=new Wt,Bt=new Wt,Lt=new At,qt=new K,Yt=new Wt,$t=new DOMParser().parseFromString(t,"image/svg+xml");return _($t),n($t.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:tt,gradients:st,xml:$t.documentElement}}static createFillMaterial(t){let e=t.userData.style;if(e.fill===void 0||e.fill==="none")return null;let n=t.color,s=null,r=$h.exec(e.fill);if(r){let a=t.userData.gradients&&t.userData.gradients[r[1]];s=B0(a,t)}let o=new dn({opacity:e.fillOpacity*(e.opacity||1),transparent:!0,side:Ve,depthWrite:!1});return s!==null?o.map=s:o.color=n,o}static createStrokeMaterial(t){let e=t.userData.style;return e.stroke===void 0||e.stroke==="none"?null:($h.test(e.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new dn({color:new Xt().setStyle(e.stroke,ir),opacity:e.strokeOpacity*(e.opacity||1),transparent:!0,side:Ve,depthWrite:!1}))}static createShapes(t){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),t.toShapes()}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,o,a)===0)return null;let c=new Qe;return c.setAttribute("position",new ve(r,3)),c.setAttribute("normal",new ve(o,3)),c.setAttribute("uv",new ve(a,2)),c}static pointsToStrokeWithBuffers(t,e,n,s,r,o,a,c){let l=new At,u=new At,f=new At,h=new At,g=new At,_=new At,M=new At,x=new At,p=new At,U=new At,O=new At,y=new At,A=new At,I=new At,B=new At,S=new At,L=new At;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=Ct(t);let W=t.length;if(W<2)return 0;let J=t[0].equals(t[W-1]),Z,lt=t[0],V,tt=e.strokeWidth/2,ct=1/(W-1),st=0,et,mt,ut,Mt,Bt=!1,Lt=0,qt=c*3,Yt=c*2;$t(t[0],t[1],l).multiplyScalar(tt),x.copy(t[0]).sub(l),p.copy(t[0]).add(l),U.copy(x),O.copy(p);for(let P=1;P<W;P++){Z=t[P],P===W-1?J?V=t[1]:V=void 0:V=t[P+1];let Y=l;if($t(lt,Z,Y),f.copy(Y).multiplyScalar(tt),y.copy(Z).sub(f),A.copy(Z).add(f),et=st+ct,mt=!1,V!==void 0){$t(Z,V,u),f.copy(u).multiplyScalar(tt),I.copy(Z).sub(f),B.copy(Z).add(f),ut=!0,f.subVectors(V,lt),Y.dot(f)<0&&(ut=!1),P===1&&(Bt=ut),f.subVectors(V,Z),f.normalize();let G=Math.abs(Y.dot(f));if(G>Number.EPSILON){let rt=tt/G;f.multiplyScalar(-rt),h.subVectors(Z,lt),g.copy(h).setLength(rt).add(f),S.copy(g).negate();let ft=g.length(),St=h.length();h.divideScalar(St),_.subVectors(V,Z);let Rt=_.length();if(_.divideScalar(Rt),h.dot(S)<St&&_.dot(S)<Rt&&(mt=!0),L.copy(g).add(Z),S.add(Z),mt){let Tt=ut?p:x,nt=(L.x-Tt.x)*(S.y-Tt.y)-(L.y-Tt.y)*(S.x-Tt.x);(ut&&nt<0||!ut&&nt>0)&&S.copy(Tt)}switch(Mt=!1,mt?ut?(B.copy(S),A.copy(S)):(I.copy(S),y.copy(S)):z(),e.strokeLineJoin){case"bevel":D(ut,mt,et);break;case"round":Q(ut,mt),ut?k(Z,y,I,et,0):k(Z,B,A,et,1);break;default:let Tt=tt*e.strokeMiterLimit/ft;if(Tt<1)if(e.strokeLineJoin!=="miter-clip"){D(ut,mt,et);break}else Q(ut,mt),ut?(_.subVectors(L,y).multiplyScalar(Tt).add(y),M.subVectors(L,I).multiplyScalar(Tt).add(I),H(y,et,0),H(_,et,0),H(Z,et,.5),H(Z,et,.5),H(_,et,0),H(M,et,0),H(Z,et,.5),H(M,et,0),H(I,et,0)):(_.subVectors(L,A).multiplyScalar(Tt).add(A),M.subVectors(L,B).multiplyScalar(Tt).add(B),H(A,et,1),H(_,et,1),H(Z,et,.5),H(Z,et,.5),H(_,et,1),H(M,et,1),H(Z,et,.5),H(M,et,1),H(B,et,1));else mt?(ut?(H(p,st,1),H(x,st,0),H(L,et,0),H(p,st,1),H(L,et,0),H(S,et,1)):(H(p,st,1),H(x,st,0),H(L,et,1),H(x,st,0),H(S,et,0),H(L,et,1)),ut?I.copy(L):B.copy(L)):ut?(H(y,et,0),H(L,et,0),H(Z,et,.5),H(Z,et,.5),H(L,et,0),H(I,et,0)):(H(A,et,1),H(L,et,1),H(Z,et,.5),H(Z,et,.5),H(L,et,1),H(B,et,1)),Mt=!0;break}}else z()}else z();!J&&P===W-1&&dt(t[0],U,O,ut,!0,st),st=et,lt=Z,x.copy(I),p.copy(B)}if(!J)dt(Z,y,A,ut,!1,et);else if(mt&&r){let P=L,Y=S;Bt!==ut&&(P=S,Y=L),ut?(Mt||Bt)&&(Y.toArray(r,0),Y.toArray(r,9),Mt&&P.toArray(r,3)):(Mt||!Bt)&&(Y.toArray(r,3),Y.toArray(r,9),Mt&&P.toArray(r,0))}if(r){let P=[new At,new At,new At],Y=c*3;for(let G=Y;G<qt;G+=9)P[0].set(r[G],r[G+1]),P[1].set(r[G+3],r[G+4]),P[2].set(r[G+6],r[G+7]),bn.area(P)<0&&(r[G+3]=P[0].x,r[G+4]=P[0].y)}return Lt;function $t(P,Y,G){return G.subVectors(Y,P),G.set(-G.y,G.x).normalize()}function H(P,Y,G){r&&(r[qt]=P.x,r[qt+1]=P.y,r[qt+2]=0,o&&(o[qt]=0,o[qt+1]=0,o[qt+2]=1),qt+=3,a&&(a[Yt]=Y,a[Yt+1]=G,Yt+=2)),Lt+=3}function k(P,Y,G,rt,ft){l.copy(Y).sub(P).normalize(),u.copy(G).sub(P).normalize();let St=Math.PI,Rt=l.dot(u);Math.abs(Rt)<1&&(St=Math.abs(Math.acos(Rt))),St/=n,f.copy(Y);for(let Tt=0,nt=n-1;Tt<nt;Tt++)h.copy(f).rotateAround(P,St),H(f,rt,ft),H(h,rt,ft),H(P,rt,.5),f.copy(h);H(f,rt,ft),H(G,rt,ft),H(P,rt,.5)}function z(){H(p,st,1),H(x,st,0),H(y,et,0),H(p,st,1),H(y,et,0),H(A,et,1)}function D(P,Y,G){Y?P?(H(p,st,1),H(x,st,0),H(y,et,0),H(p,st,1),H(y,et,0),H(S,et,1),H(y,G,0),H(I,G,0),H(S,G,.5)):(H(p,st,1),H(x,st,0),H(A,et,1),H(x,st,0),H(S,et,0),H(A,et,1),H(A,G,1),H(S,G,0),H(B,G,1)):P?(H(y,G,0),H(I,G,0),H(Z,G,.5)):(H(A,G,1),H(B,G,0),H(Z,G,.5))}function Q(P,Y){Y&&(P?(H(p,st,1),H(x,st,0),H(y,et,0),H(p,st,1),H(y,et,0),H(S,et,1),H(y,st,0),H(Z,et,.5),H(S,et,1),H(Z,et,.5),H(I,st,0),H(S,et,1)):(H(p,st,1),H(x,st,0),H(A,et,1),H(x,st,0),H(S,et,0),H(A,et,1),H(A,st,1),H(S,et,0),H(Z,et,.5),H(Z,et,.5),H(S,et,0),H(B,st,1)))}function dt(P,Y,G,rt,ft,St){switch(e.strokeLineCap){case"round":ft?k(P,G,Y,St,.5):k(P,Y,G,St,.5);break;case"square":if(ft)l.subVectors(Y,P),u.set(l.y,-l.x),f.addVectors(l,u).add(P),h.subVectors(u,l).add(P),rt?(f.toArray(r,3),h.toArray(r,0),h.toArray(r,9)):(f.toArray(r,3),a[7]===1?h.toArray(r,9):f.toArray(r,9),h.toArray(r,0));else{l.subVectors(G,P),u.set(l.y,-l.x),f.addVectors(l,u).add(P),h.subVectors(u,l).add(P);let Rt=r.length;rt?(f.toArray(r,Rt-3),h.toArray(r,Rt-6),h.toArray(r,Rt-12)):(h.toArray(r,Rt-6),f.toArray(r,Rt-3),h.toArray(r,Rt-12))}break;default:break}}function Ct(P){let Y=!1;for(let rt=1,ft=P.length-1;rt<ft;rt++)if(P[rt].distanceTo(P[rt+1])<s){Y=!0;break}if(!Y)return P;let G=[];G.push(P[0]);for(let rt=1,ft=P.length-1;rt<ft;rt++)P[rt].distanceTo(P[rt+1])>=s&&G.push(P[rt]);return G.push(P[P.length-1]),G}}},$h=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function B0(i,t,e=256){if(!i||!Array.isArray(i.stops)||i.stops.length===0)return null;let n=t.userData.transform,s=i.gradientUnits==="objectBoundingBox",r=null;if(s&&(r=z0(t,n),r===null))return null;function o(f,h,g){g.set(f,h,1),i.gradientTransform&&g.applyMatrix3(i.gradientTransform),s&&g.set(r.minX+g.x*r.width,r.minY+g.y*r.height,1),n&&g.applyMatrix3(n)}let a=document.createElement("canvas"),c;if(i.type==="linearGradient"){a.width=e,a.height=1;let f=a.getContext("2d"),h=f.createLinearGradient(0,0,e,0);Kh(h,i.stops),f.fillStyle=h,f.fillRect(0,0,e,1);let g=new K,_=new K;o(i.x1,i.y1,g),o(i.x2,i.y2,_);let M=_.x-g.x,x=_.y-g.y,p=M*M+x*x||1e-20,U=M/p,O=x/p,y=-(U*g.x+O*g.y);c=new Wt().set(U,O,y,0,0,.5,0,0,1)}else{let f=i.cx,h=i.cy,g=i.fx,_=i.fy,M=i.r;if(i.gradientTransform){let S=new K;S.set(f,h,1).applyMatrix3(i.gradientTransform),f=S.x,h=S.y,S.set(g,_,1).applyMatrix3(i.gradientTransform),g=S.x,_=S.y}if(s&&(f=r.minX+f*r.width,h=r.minY+h*r.height,g=r.minX+g*r.width,_=r.minY+_*r.height,M=M*Math.sqrt((r.width*r.width+r.height*r.height)/2)),M<=0)return null;a.width=e,a.height=e;let x=a.getContext("2d"),p=f-M,U=h-M,O=2*M,y=e/O;x.setTransform(y,0,0,y,-p*y,-U*y);let A=x.createRadialGradient(g,_,0,f,h,M);Kh(A,i.stops),x.fillStyle=A,x.fillRect(p,U,O,O);let I=n?n.clone().invert():new Wt;c=new Wt().set(1/O,0,-p/O,0,1/O,-U/O,0,0,1).multiply(I)}let l=new Ls(a);l.colorSpace=ir,l.flipY=!1,l.matrixAutoUpdate=!1,l.matrix=c;let u=i.spreadMethod==="reflect"?Xi:i.spreadMethod==="repeat"?Wi:rn;return l.wrapS=u,l.wrapT=u,l}function z0(i,t){let e=t?t.clone().invert():null,n=new At,s=new is;for(let r of i.subPaths)for(let o of r.getPoints())n.copy(o),e&&n.applyMatrix3(e),s.expandByPoint(n);return s.isEmpty()?null:{minX:s.min.x,minY:s.min.y,width:s.max.x-s.min.x,height:s.max.y-s.min.y}}function Kh(i,t){let e=new Xt;for(let n of t){let s=n.color;if(n.opacity<1){e.setStyle(n.color,ir);let r=/rgb\(([^)]+)\)/.exec(e.getStyle(ir));r&&(s=`rgba(${r[1]},${n.opacity})`)}i.addColorStop(Math.max(0,Math.min(1,n.offset)),s)}}function jh(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},u=[],f=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let U=0,O=a.length;U<O;U++){let y=a[U],A=i.attributes[y];c[y]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);let I=i.morphAttributes[y];I&&(l[y]||(l[y]=[]),I.forEach((B,S)=>{let L=new B.array.constructor(B.count*B.itemSize);l[y][S]=new B.constructor(L,B.itemSize,B.normalized)}))}let g=t*.5,_=Math.log10(1/t),M=Math.pow(10,_),x=g*M;for(let U=0;U<r;U++){let O=n?n.getX(U):U,y="";for(let A=0,I=a.length;A<I;A++){let B=a[A],S=i.getAttribute(B),L=S.itemSize;for(let W=0;W<L;W++)y+=`${Math.trunc(S[f[W]](O)*M+x)},`}if(y in e)u.push(e[y]);else{for(let A=0,I=a.length;A<I;A++){let B=a[A],S=i.getAttribute(B),L=i.morphAttributes[B],W=S.itemSize,J=c[B],Z=l[B];for(let lt=0;lt<W;lt++){let V=f[lt],tt=h[lt];if(J[tt](o,S[V](O)),L)for(let ct=0,st=L.length;ct<st;ct++)Z[ct][tt](o,L[ct][V](O))}}e[y]=o,u.push(o),o++}}let p=i.clone();for(let U in i.attributes){let O=c[U];if(p.setAttribute(U,new O.constructor(O.array.slice(0,o*O.itemSize),O.itemSize,O.normalized)),U in l)for(let y=0;y<l[U].length;y++){let A=l[U][y];p.morphAttributes[U][y]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(u),p}function tu(i,t=Math.PI/3){let e=i.index?i.toNonIndexed():i,n=e.attributes.position,s=n.count,r;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)r=n.array;else{r=new Float64Array(s*3);for(let y=0;y<s;y++)r[3*y+0]=n.getX(y),r[3*y+1]=n.getY(y),r[3*y+2]=n.getZ(y)}let o=Math.cos(t),a=(1+1e-10)*100,c=s/3,l=new Float64Array(c*3);for(let y=0;y<c;y++){let A=9*y,I=r[A+0],B=r[A+1],S=r[A+2],L=r[A+3],W=r[A+4],J=r[A+5],Z=r[A+6],lt=r[A+7],V=r[A+8],tt=Z-L,ct=lt-W,st=V-J,et=I-L,mt=B-W,ut=S-J,Mt=ct*ut-st*mt,Bt=st*et-tt*ut,Lt=tt*mt-ct*et,qt=1/(Math.sqrt(Mt*Mt+Bt*Bt+Lt*Lt)||1);l[3*y+0]=Mt*qt,l[3*y+1]=Bt*qt,l[3*y+2]=Lt*qt}let u=new Int32Array(s),f=new Float64Array(s*3),h=1;for(;h<s*2;)h<<=1;let g=h-1,_=new Int32Array(h),M=0;for(let y=0;y<s;y++){let A=3*y,I=Math.trunc(r[A+0]*a),B=Math.trunc(r[A+1]*a),S=Math.trunc(r[A+2]*a),L=(Math.imul(I,73856093)^Math.imul(B,19349663)^Math.imul(S,83492791))&g;for(;;){let W=_[L];if(W===0){let Z=3*M;f[Z+0]=I,f[Z+1]=B,f[Z+2]=S,_[L]=M+1,u[y]=M++;break}let J=3*(W-1);if(f[J+0]===I&&f[J+1]===B&&f[J+2]===S){u[y]=W-1;break}L=L+1&g}}let x=new Int32Array(M+1);for(let y=0;y<s;y++)x[u[y]+1]++;for(let y=0;y<M;y++)x[y+1]+=x[y];let p=new Int32Array(s),U=x.slice(0,M);for(let y=0;y<c;y++){let A=3*y;p[U[u[A+0]]++]=y,p[U[u[A+1]]++]=y,p[U[u[A+2]]++]=y}let O=new Float32Array(s*3);for(let y=0;y<c;y++){let A=3*y,I=l[A+0],B=l[A+1],S=l[A+2];for(let L=0;L<3;L++){let W=A+L,J=u[W],Z=0,lt=0,V=0;for(let ct=x[J],st=x[J+1];ct<st;ct++){let et=3*p[ct],mt=l[et+0],ut=l[et+1],Mt=l[et+2];I*mt+B*ut+S*Mt>o&&(Z+=mt,lt+=ut,V+=Mt)}let tt=1/(Math.sqrt(Z*Z+lt*lt+V*V)||1);O[3*W+0]=Z*tt,O[3*W+1]=lt*tt,O[3*W+2]=V*tt}}return e.setAttribute("normal",new De(O,3,!1)),e}var nu=gu(eu(),1);var k0=Math.PI/180;function V0(i=kn){let t=i.colors,e=new jn({name:"esmalte-vino",color:16777215,vertexColors:!0,metalness:0,roughness:.42,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:.85}),n=new jn({name:"borde-satinado",color:new Xt(t.satin),metalness:1,roughness:.34,clearcoat:.25,clearcoatRoughness:.4,envMapIntensity:1.35}),s=new jn({name:"acento-carmesi",color:new Xt(t.accent),emissive:new Xt(t.accentEmissive),emissiveIntensity:.9,metalness:.1,roughness:.35,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:1}),r=new jn({name:"perla-satinada",color:new Xt(t.pearl),metalness:.1,roughness:.42,clearcoat:.5,clearcoatRoughness:.2,envMapIntensity:.9});return{enamel:e,satin:n,accent:s,pearl:r}}function G0(i,t,e){let s={...i==="acento"||i==="pequena"?e.small:e.letters,bevelEnabled:!0};return t==="low"&&(s.bevelSegments=Math.min(s.bevelSegments,e.lowTier.bevelSegments),s.curveSegments=Math.min(s.curveSegments,e.lowTier.curveSegments)),s}function H0(i,t){let e=o=>{let a=o.map(u=>[u.x,u.y]),c=a[0],l=a[a.length-1];return(c[0]!==l[0]||c[1]!==l[1])&&a.push([c[0],c[1]]),a},n=i.map(o=>{let{shape:a,holes:c}=o.extractPoints(t);return[e(a),...c.map(e)]}),s=nu.default.union(n[0],...n.slice(1)),r=o=>o.slice(0,-1).map(([a,c])=>new At(a,c));return s.map(([o,...a])=>{let c=new mi(r(o));return c.holes=a.map(l=>new on(r(l))),c})}function ha(i,{tier:t="high",config:e=kn,materials:n=V0(e)}={}){let s=new ca().parse(i),r=[],o=[];for(let y of s.paths){let A=y.userData?.node,I=A?.getAttribute?.("id")||"pieza";if(y.userData?.style?.fill==="none")continue;let S=A?.getAttribute?.("data-capa")||"esmalte";S==="esmalte"&&I.startsWith("motors-")&&(S="pequena");let L=y.toShapes();L.length&&o.push({id:I,layer:S,shapes:L})}let a=y=>G0(y,t,e),c=o.filter(y=>y.layer==="esmalte");for(let y of o)y.layer!=="esmalte"&&r.push({id:y.id,layer:y.layer,geometry:new xi(y.shapes,a(y.layer))});if(c.length){let y;try{y=H0(c.flatMap(A=>A.shapes),a("esmalte").curveSegments)}catch{y=null}if(y?.length)r.push({id:"lettering",layer:"esmalte",geometry:new xi(y,a("esmalte"))});else for(let A of c)r.push({id:A.id,layer:"esmalte",geometry:new xi(A.shapes,a("esmalte"))})}if(!r.length)throw new Error("El SVG del emblema no contiene formas con relleno.");let l=new An;for(let y of r)y.geometry.computeBoundingBox(),l.union(y.geometry.boundingBox);let u=l.getSize(new K),f=new Xt(e.colors.enamelTop),h=new Xt(e.colors.enamelMid),g=new Xt(e.colors.enamelBottom),_=new Xt,M=new Mn;M.name="emblema-bennys";for(let y of r){let{geometry:A,layer:I}=y,B=tu(A,e.creaseAngleDegrees*k0),S=B.attributes.position,L=S.count,W=new Float32Array(L*3),J=B.attributes.normal,Z=(B.boundingBox.min.z+B.boundingBox.max.z)/2;for(let ct of B.groups)if(ct.materialIndex===0)for(let st=ct.start;st<ct.start+ct.count;st++)J.setXYZ(st,0,0,S.getZ(st)>Z?1:-1);for(let ct=0;ct<L;ct++){let st=li.clamp((S.getY(ct)-l.min.y)/u.y,0,1),et=li.clamp((S.getX(ct)-l.min.x)/u.x,0,1),mt=li.clamp(st*.8+et*.2,0,1);mt<.5?_.copy(f).lerp(h,mt/.5):_.copy(h).lerp(g,(mt-.5)/.5),W[ct*3]=_.r,W[ct*3+1]=_.g,W[ct*3+2]=_.b}B.setAttribute("color",new De(W,3));let lt=jh(B,.001),V=I==="acento"?n.accent:I==="pequena"?n.pearl:n.enamel,tt=new Ce(lt,[V,n.satin]);tt.name=y.id,M.add(tt)}let x=new Mn;x.name="emblema-bennys-centro";let p=l.getCenter(new K);M.position.set(-p.x,-p.y,-p.z),x.add(M);let U=6/u.x;x.scale.set(U,-U,U);let O=new K(u.x*U,u.y*U,u.z*U);return{root:x,size:O,aspect:u.x/u.y,materials:n,dispose(){for(let y of r)y.geometry.dispose();for(let y of Object.values(n))y.dispose()}}}var yn=i=>i*Math.PI/180,Xl=(i,t,e)=>Math.min(e,Math.max(t,i)),W0=i=>1-Math.pow(1-Xl(i,0,1),3);function X0(){try{let i=matchMedia("(pointer: coarse)").matches,t=navigator.deviceMemory||8,e=navigator.hardwareConcurrency||8;return i||t<=4||e<=4?"low":"high"}catch{return"high"}}function Q0(i,t){let e=new fs(i),n=new $i,s=(f,h,g)=>new Xt().setRGB(f,h,g,pi),r=(f,h)=>new Xt(f).multiplyScalar(h),o=new Ce(new Kn(24,14,24),new dn({color:s(.018,.004,.01),side:Ie}));n.add(o);let a=(f,h,g,_,M=new K)=>{let x=new Ce(new _i(f,h),new dn({color:g,side:Ve}));return x.position.copy(_),x.lookAt(M),n.add(x),x};a(10,2.4,r(t.colors.keyLight,6.5),new K(-3,6.2,7)),a(1.6,8,r(t.colors.keyLight,5),new K(-8,1,5)),a(9,1.2,r(t.colors.keyLight,4),new K(2,-4.2,6)),a(2.2,9,r(t.colors.redLight,6),new K(8.5,.5,3)),a(2.2,7,r(t.colors.rimLight,2.6),new K(-9,-1,2)),a(14,1.4,r("#b01846",2.4),new K(0,-5.6,5));let c=a(1.8,13,r("#ff6a8d",2.3),new K(-.6,.4,9.5));c.rotation.z=yn(-24);let l=a(4.2,13,r("#d62d54",.9),new K(-.2,.4,9.2));l.rotation.z=yn(-24);let u=e.fromScene(n,.035).texture;return e.dispose(),n.traverse(f=>{f.geometry&&f.geometry.dispose(),f.material&&f.material.dispose()}),u}function iu(i,t,e){let n=new $i;n.environment=Q0(i,e),n.add(t.root);let s=new vi(e.colors.keyLight,.5);s.position.set(-3,4,6),n.add(s);let r=new vi(e.colors.rimLight,.7);r.position.set(5,-1.5,-3),n.add(r);let o=new vi(e.colors.redLight,1.2);return o.position.set(-4,.8,6),n.add(o),{scene:n,sweep:o,key:s,rim:r}}async function su(i,{svg:t,shouldAnimate:e=()=>!0,allowSoftware:n=!1,config:s=kn,onFallback:r}={}){let o=X0(),a;try{a=new nr({antialias:!0,alpha:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!n})}catch{return null}if(!a.getContext())return a.dispose(),null;a.setClearColor(0,0),a.outputColorSpace=we,a.toneMapping=os,a.toneMappingExposure=.9;let c=o==="low"?1.5:2,l=ha(t,{tier:o,config:s}),{scene:u,sweep:f}=iu(a,l,s),h=new Ae(24,1,.1,60),g=a.domElement;g.className="logo3d-canvas",g.setAttribute("aria-hidden","true"),i.appendChild(g);let _=s.motion,M={running:!1,frame:0,last:0,start:performance.now(),amp:1,calm:!1,disposed:!1,inView:!0,px:0,py:0,tx:0,ty:0,visible:!0,frames:0,slow:0,lastRender:0},x=(()=>{try{return matchMedia("(pointer: fine)").matches&&matchMedia("(hover: hover)").matches}catch{return!1}})();function p(){let V=i.clientWidth,tt=i.clientHeight||V/l.aspect;if(!V||!tt)return!1;let ct=Math.min(window.devicePixelRatio||1,c);a.setPixelRatio(ct),a.setSize(V,tt,!1),h.aspect=V/tt;let st=yn(h.fov/2),et=1.08,mt=l.size.y/2*et/Math.tan(st),ut=l.size.x/2*et/(Math.tan(st)*h.aspect);return h.position.set(0,0,Math.max(mt,ut)+l.size.z/2),h.lookAt(0,0,0),h.updateProjectionMatrix(),!0}function U(V){let tt=W0(V/_.introSeconds),ct=Math.PI*2/_.swaySeconds,st=Math.sin(V*ct)*yn(_.swayDegrees)*M.amp,et=Math.sin(V*ct*.77+1.2)*yn(_.tiltDegrees)*M.amp;l.root.rotation.y=st+M.px*yn(_.parallaxDegrees)+(1-tt)*yn(-16),l.root.rotation.x=et-M.py*yn(_.parallaxDegrees)*.6,l.root.position.y=Math.sin(V*ct*.8)*_.floatAmount*l.size.y*M.amp;let mt=l.root.userData.base,ut=mt*(.96+.04*tt);l.root.scale.set(ut,-ut,ut);let Mt=(Math.sin(V*Math.PI*2/_.lightSweepSeconds)+1)/2;f.position.x=li.lerp(-5,5,Mt),f.intensity=.9*(.4+.6*Math.sin(Mt*Math.PI))}l.root.userData.base=Math.abs(l.root.scale.x);function O(V=performance.now()){let tt=(V-M.start)/1e3;M.amp+=((M.calm?_.calmFactor:1)-M.amp)*.06,M.px+=(M.tx-M.px)*.08,M.py+=(M.ty-M.py)*.08,U(tt),a.render(u,h)}function y(V){if(M.frame=0,!M.running||(M.frame=requestAnimationFrame(y),V-M.lastRender<1e3/s.maxFps-1))return;let tt=V-M.lastRender;M.lastRender=V,O(V),M.frames++,!n&&M.frames>20&&tt>1e3/20?M.slow++:M.frames>20&&M.slow>0&&tt<1e3/40&&M.slow--,M.slow>=30&&(c>1?(c=1,M.slow=0,p()):(lt.stop(),r?.("lento")))}function A(){return!M.disposed&&M.inView&&!document.hidden&&e()}function I(){let V=A();V&&!M.running?(M.running=!0,M.lastRender=0,M.frame||(M.frame=requestAnimationFrame(y))):!V&&M.running&&(M.running=!1,M.frame&&(cancelAnimationFrame(M.frame),M.frame=0)),!V&&!M.disposed&&M.inView&&!document.hidden&&O()}let B=()=>I(),S=()=>I(),L=V=>{!x||!M.running||(M.tx=Xl(V.clientX/innerWidth*2-1,-1,1),M.ty=Xl(V.clientY/innerHeight*2-1,-1,1))},W=new ResizeObserver(()=>{M.disposed||p()&&!M.running&&O()}),J=new IntersectionObserver(V=>{M.inView=V.some(tt=>tt.isIntersecting),I()},{threshold:.01}),Z=V=>{V.preventDefault(),lt.stop(),r?.("contexto")};document.addEventListener("visibilitychange",B),document.addEventListener("bennys:ambient",S),window.addEventListener("pointermove",L,{passive:!0}),g.addEventListener("webglcontextlost",Z),W.observe(i),J.observe(i);let lt={tier:o,get running(){return M.running},get canvas(){return g},aspect:l.aspect,setCalm(V){M.calm=!!V,M.running||I()},refresh:I,stop(){M.running=!1,M.frame&&(cancelAnimationFrame(M.frame),M.frame=0)},dispose(){M.disposed||(M.disposed=!0,lt.stop(),document.removeEventListener("visibilitychange",B),document.removeEventListener("bennys:ambient",S),window.removeEventListener("pointermove",L),g.removeEventListener("webglcontextlost",Z),W.disconnect(),J.disconnect(),l.dispose(),u.environment&&u.environment.dispose(),a.dispose(),a.forceContextLoss?.(),g.remove())}};return p()||requestAnimationFrame(()=>{p()}),O(),I(),lt}function q0(i,{width:t=1200,height:e,pose:n={y:kn.stillPose.y,x:kn.stillPose.x},sweepPhase:s=.34,config:r=kn,tier:o="high",margin:a=1.08,canvas:c}={}){let l=ha(i,{tier:o,config:r}),u=e||Math.round(t/l.aspect),f=c||document.createElement("canvas"),h=new nr({canvas:f,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,failIfMajorPerformanceCaveat:!1});h.setPixelRatio(1),h.setSize(t,u,!1),h.setClearColor(0,0),h.outputColorSpace=we,h.toneMapping=os,h.toneMappingExposure=1.05;let{scene:g,sweep:_}=iu(h,l,r),M=new Ae(24,t/u,.1,60),x=yn(M.fov/2);return M.position.set(0,0,Math.max(l.size.y/2*a/Math.tan(x),l.size.x/2*a/(Math.tan(x)*M.aspect))+l.size.z/2),M.lookAt(0,0,0),l.root.rotation.y=yn(n.y),l.root.rotation.x=yn(n.x),_.position.x=li.lerp(-5,5,s),_.intensity=.9*(.4+.6*Math.sin(s*Math.PI)),h.render(g,M),{canvas:f,model:l,scene:g,renderer:h,camera:M,dispose(){l.dispose(),h.dispose()}}}var Y0=Object.freeze({wordmark:Kl,monogram:jl});function Tv(i,t={}){return su(i,{...t,svg:Y0[t.variant||"wordmark"]})}export{kn as LOGO_CONFIG,Y0 as SOURCES,ha as buildLogoModel,Tv as mountLogo,q0 as renderStill};
