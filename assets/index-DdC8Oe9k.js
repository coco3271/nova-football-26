(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const nc="179",ef=0,qc=1,nf=2,Bu=1,sc=2,pn=3,Yi=0,si=1,_e=2,bn=0,ts=1,Mo=2,Kc=3,Yc=4,sf=5,jn=100,of=101,af=102,rf=103,lf=104,cf=200,hf=201,uf=202,df=203,ol=204,al=205,ff=206,pf=207,mf=208,gf=209,_f=210,yf=211,xf=212,vf=213,bf=214,rl=0,ll=1,cl=2,Os=3,hl=4,ul=5,dl=6,fl=7,oc=0,Mf=1,Sf=2,Un=0,zu=1,Hu=2,Gu=3,Ka=4,Vu=5,Wu=6,Xu=7,jc="attached",Tf="detached",$u=300,Bs=301,zs=302,pl=303,ml=304,Ya=306,Mn=1e3,Wi=1001,Oa=1002,ui=1003,qu=1004,mo=1005,yi=1006,wa=1007,xn=1008,ji=1009,Ku=1010,Yu=1011,So=1012,ac=1013,is=1014,Di=1015,Sn=1016,rc=1017,lc=1018,To=1020,ju=35902,Zu=1021,Ju=1022,Ei=1023,wo=1026,Eo=1027,cc=1028,hc=1029,Qu=1030,uc=1031,dc=1033,Ea=33776,Aa=33777,Ra=33778,Ca=33779,gl=35840,_l=35841,yl=35842,xl=35843,vl=36196,bl=37492,Ml=37496,Sl=37808,Tl=37809,wl=37810,El=37811,Al=37812,Rl=37813,Cl=37814,Pl=37815,Ll=37816,Il=37817,Dl=37818,kl=37819,Nl=37820,Ul=37821,Pa=36492,Fl=36494,Ol=36495,td=36283,Bl=36284,zl=36285,Hl=36286,wf=2200,Ef=2201,Af=2202,Ao=2300,Ro=2301,lr=2302,Rs=2400,Cs=2401,Ba=2402,fc=2500,Rf=2501,Cf=0,ed=1,Gl=2,Pf=3200,Lf=3201,pc=0,If=1,_n="",Ie="srgb",di="srgb-linear",za="linear",ve="srgb",rs=7680,Zc=519,Df=512,kf=513,Nf=514,id=515,Uf=516,Ff=517,Of=518,Bf=519,Vl=35044,zf=35048,Jc="300 es",Xi=2e3,Ha=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qc=1234567;const _o=Math.PI/180,Hs=180/Math.PI;function ki(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[o&255]+Je[o>>8&255]+Je[o>>16&255]+Je[o>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function Zt(o,t,e){return Math.max(t,Math.min(e,o))}function mc(o,t){return(o%t+t)%t}function Hf(o,t,e,i,n){return i+(o-t)*(n-i)/(e-t)}function Gf(o,t,e){return o!==t?(e-o)/(t-o):0}function yo(o,t,e){return(1-e)*o+e*t}function Vf(o,t,e,i){return yo(o,t,1-Math.exp(-e*i))}function Wf(o,t=1){return t-Math.abs(mc(o,t*2)-t)}function Xf(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function $f(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function qf(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Kf(o,t){return o+Math.random()*(t-o)}function Yf(o){return o*(.5-Math.random())}function jf(o){o!==void 0&&(Qc=o);let t=Qc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zf(o){return o*_o}function Jf(o){return o*Hs}function Qf(o){return(o&o-1)===0&&o!==0}function tp(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ep(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ip(o,t,e,i,n){const s=Math.cos,a=Math.sin,r=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),p=a((t-i)/2),f=s((i-t)/2),d=a((i-t)/2);switch(n){case"XYX":o.set(r*h,l*u,l*p,r*c);break;case"YZY":o.set(l*p,r*h,l*u,r*c);break;case"ZXZ":o.set(l*u,l*p,r*h,r*c);break;case"XZX":o.set(r*h,l*d,l*f,r*c);break;case"YXY":o.set(l*f,r*h,l*d,r*c);break;case"ZYZ":o.set(l*d,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Li(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function be(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ja={DEG2RAD:_o,RAD2DEG:Hs,generateUUID:ki,clamp:Zt,euclideanModulo:mc,mapLinear:Hf,inverseLerp:Gf,lerp:yo,damp:Vf,pingpong:Wf,smoothstep:Xf,smootherstep:$f,randInt:qf,randFloat:Kf,randFloatSpread:Yf,seededRandom:jf,degToRad:Zf,radToDeg:Jf,isPowerOfTwo:Qf,ceilPowerOfTwo:tp,floorPowerOfTwo:ep,setQuaternionFromProperEuler:ip,normalize:be,denormalize:Li};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,r){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const p=s[a+0],f=s[a+1],d=s[a+2],_=s[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=p,t[e+1]=f,t[e+2]=d,t[e+3]=_;return}if(u!==_||l!==p||c!==f||h!==d){let g=1-r;const m=l*p+c*f+h*d+u*_,v=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const w=Math.sqrt(b),C=Math.atan2(w,m*v);g=Math.sin(g*C)/w,r=Math.sin(r*C)/w}const x=r*v;if(l=l*g+p*x,c=c*g+f*x,h=h*g+d*x,u=u*g+_*x,g===1-r){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const r=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],p=s[a+1],f=s[a+2],d=s[a+3];return t[e]=r*d+h*u+l*f-c*p,t[e+1]=l*d+h*p+c*u-r*f,t[e+2]=c*d+h*f+r*p-l*u,t[e+3]=h*d-r*u-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(n/2),u=r(s/2),p=l(i/2),f=l(n/2),d=l(s/2);switch(a){case"XYZ":this._x=p*h*u+c*f*d,this._y=c*f*u-p*h*d,this._z=c*h*d+p*f*u,this._w=c*h*u-p*f*d;break;case"YXZ":this._x=p*h*u+c*f*d,this._y=c*f*u-p*h*d,this._z=c*h*d-p*f*u,this._w=c*h*u+p*f*d;break;case"ZXY":this._x=p*h*u-c*f*d,this._y=c*f*u+p*h*d,this._z=c*h*d+p*f*u,this._w=c*h*u-p*f*d;break;case"ZYX":this._x=p*h*u-c*f*d,this._y=c*f*u+p*h*d,this._z=c*h*d-p*f*u,this._w=c*h*u+p*f*d;break;case"YZX":this._x=p*h*u+c*f*d,this._y=c*f*u+p*h*d,this._z=c*h*d-p*f*u,this._w=c*h*u-p*f*d;break;case"XZY":this._x=p*h*u-c*f*d,this._y=c*f*u-p*h*d,this._z=c*h*d+p*f*u,this._w=c*h*u+p*f*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=i+r+u;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>r&&i>u){const f=2*Math.sqrt(1+i-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-r);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*r+n*c-s*l,this._y=n*h+a*l+s*r-i*c,this._z=s*h+a*c+i*l-n*r,this._w=a*h-i*r-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let r=a*t._w+i*t._x+n*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*u+this._w*p,this._x=i*u+this._x*p,this._y=n*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*n-r*i),h=2*(r*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-r*h,this.y=i+l*h+r*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,r=e.y,l=e.z;return this.x=n*l-s*r,this.y=s*a-i*l,this.z=i*r-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cr.copy(this).projectOnVector(t),this.sub(cr)}reflect(t){return this.sub(cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new L,th=new He;class Xt{constructor(t,e,i,n,s,a,r,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,r,l,c)}set(t,e,i,n,s,a,r,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=r,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],f=i[5],d=i[8],_=n[0],g=n[3],m=n[6],v=n[1],b=n[4],x=n[7],w=n[2],C=n[5],T=n[8];return s[0]=a*_+r*v+l*w,s[3]=a*g+r*b+l*C,s[6]=a*m+r*x+l*T,s[1]=c*_+h*v+u*w,s[4]=c*g+h*b+u*C,s[7]=c*m+h*x+u*T,s[2]=p*_+f*v+d*w,s[5]=p*g+f*b+d*C,s[8]=p*m+f*x+d*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-i*s*h+i*r*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,p=r*l-h*s,f=c*s-a*l,d=e*u+i*p+n*f;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/d;return t[0]=u*_,t[1]=(n*c-h*i)*_,t[2]=(r*i-n*a)*_,t[3]=p*_,t[4]=(h*e-n*l)*_,t[5]=(n*s-r*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,r){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*r)+a+t,-n*c,n*l,-n*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(hr.makeScale(t,e)),this}rotate(t){return this.premultiply(hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hr=new Xt;function nd(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Co(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function np(){const o=Co("canvas");return o.style.display="block",o}const eh={};function Ls(o){o in eh||(eh[o]=!0,console.warn(o))}function sp(o,t,e){return new Promise(function(i,n){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:n();break;case o.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const ih=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function op(){const o={enabled:!0,workingColorSpace:di,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ve&&(n.r=Tn(n.r),n.g=Tn(n.g),n.b=Tn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(n.r=Is(n.r),n.g=Is(n.g),n.b=Is(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===_n?za:this.spaces[n].transfer},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[di]:{primaries:t,whitePoint:i,transfer:za,toXYZ:ih,fromXYZ:nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:ih,fromXYZ:nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),o}const ae=op();function Tn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Is(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ls;class ap{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ls===void 0&&(ls=Co("canvas")),ls.width=t.width,ls.height=t.height;const n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=ls}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Co("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Tn(e[i]/255)*255):e[i]=Tn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rp=0;class gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,r=n.length;a<r;a++)n[a].isDataTexture?s.push(ur(n[a].image)):s.push(ur(n[a]))}else s=ur(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function ur(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ap.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;const dr=new L;class We extends os{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=Wi,n=Wi,s=yi,a=xn,r=Ei,l=ji,c=We.DEFAULT_ANISOTROPY,h=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ki(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dr).x}get height(){return this.source.getSize(dr).y}get depth(){return this.source.getSize(dr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mn:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mn:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=$u;We.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,n=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],f=l[5],d=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(d+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(f+1)/2,w=(m+1)/2,C=(h+p)/4,T=(u+_)/4,A=(d+g)/4;return b>x&&b>w?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=C/i,s=T/i):x>w?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=C/n,s=A/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=T/s,n=A/s),this.set(i,n,s,e),this}let v=Math.sqrt((g-d)*(g-d)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(g-d)/v,this.y=(u-_)/v,this.z=(p-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cp extends os{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const n={width:t,height:e,depth:i.depth},s=new We(n);this.textures=[];const a=i.count;for(let r=0;r<a;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new gc(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends cp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class sd extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ui,this.minFilter=ui,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hp extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ui,this.minFilter=ui,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Ri):Ri.fromBufferAttribute(s,a),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zo.copy(i.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(to),Ho.subVectors(this.max,to),cs.subVectors(t.a,to),hs.subVectors(t.b,to),us.subVectors(t.c,to),En.subVectors(hs,cs),An.subVectors(us,hs),zn.subVectors(cs,us);let e=[0,-En.z,En.y,0,-An.z,An.y,0,-zn.z,zn.y,En.z,0,-En.x,An.z,0,-An.x,zn.z,0,-zn.x,-En.y,En.x,0,-An.y,An.x,0,-zn.y,zn.x,0];return!fr(e,cs,hs,us,Ho)||(e=[1,0,0,0,1,0,0,0,1],!fr(e,cs,hs,us,Ho))?!1:(Go.crossVectors(En,An),e=[Go.x,Go.y,Go.z],fr(e,cs,hs,us,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const nn=[new L,new L,new L,new L,new L,new L,new L,new L],Ri=new L,zo=new Zi,cs=new L,hs=new L,us=new L,En=new L,An=new L,zn=new L,to=new L,Ho=new L,Go=new L,Hn=new L;function fr(o,t,e,i,n){for(let s=0,a=o.length-3;s<=a;s+=3){Hn.fromArray(o,s);const r=n.x*Math.abs(Hn.x)+n.y*Math.abs(Hn.y)+n.z*Math.abs(Hn.z),l=t.dot(Hn),c=e.dot(Hn),h=i.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const up=new Zi,eo=new L,pr=new L;class Ji{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):up.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);const e=eo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(eo,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(eo.copy(t.center).add(pr)),this.expandByPoint(eo.copy(t.center).sub(pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sn=new L,mr=new L,Vo=new L,Rn=new L,gr=new L,Wo=new L,_r=new L;class Za{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){mr.copy(t).add(e).multiplyScalar(.5),Vo.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(mr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Vo),r=Rn.dot(this.direction),l=-Rn.dot(Vo),c=Rn.lengthSq(),h=Math.abs(1-a*a);let u,p,f,d;if(h>0)if(u=a*l-r,p=a*r-l,d=s*h,u>=0)if(p>=-d)if(p<=d){const _=1/h;u*=_,p*=_,f=u*(u+a*p+2*r)+p*(a*u+p+2*l)+c}else p=s,u=Math.max(0,-(a*p+r)),f=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(a*p+r)),f=-u*u+p*(p+2*l)+c;else p<=-d?(u=Math.max(0,-(-a*s+r)),p=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+p*(p+2*l)+c):p<=d?(u=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(u=Math.max(0,-(a*s+r)),p=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+p*(p+2*l)+c);else p=a>0?-s:s,u=Math.max(0,-(a*p+r)),f=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(mr).addScaledVector(Vo,p),f}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const i=sn.dot(this.direction),n=sn.dot(sn)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),r=i-a,l=i+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,n=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,n=(t.min.x-p.x)*c),h>=0?(s=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(r=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(r=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),i>l||r>n)||((r>i||i!==i)&&(i=r),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,i,n,s){gr.subVectors(e,t),Wo.subVectors(i,t),_r.crossVectors(gr,Wo);let a=this.direction.dot(_r),r;if(a>0){if(n)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Rn.subVectors(this.origin,t);const l=r*this.direction.dot(Wo.crossVectors(Rn,Wo));if(l<0)return null;const c=r*this.direction.dot(gr.cross(Rn));if(c<0||l+c>a)return null;const h=-r*Rn.dot(_r);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,i,n,s,a,r,l,c,h,u,p,f,d,_,g){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,r,l,c,h,u,p,f,d,_,g)}set(t,e,i,n,s,a,r,l,c,h,u,p,f,d,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=r,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=p,m[3]=f,m[7]=d,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/ds.setFromMatrixColumn(t,0).length(),s=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const p=a*h,f=a*u,d=r*h,_=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+d*c,e[5]=p-_*c,e[9]=-r*l,e[2]=_-p*c,e[6]=d+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*h,f=l*u,d=c*h,_=c*u;e[0]=p+_*r,e[4]=d*r-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=f*r-d,e[6]=_+p*r,e[10]=a*l}else if(t.order==="ZXY"){const p=l*h,f=l*u,d=c*h,_=c*u;e[0]=p-_*r,e[4]=-a*u,e[8]=d+f*r,e[1]=f+d*r,e[5]=a*h,e[9]=_-p*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const p=a*h,f=a*u,d=r*h,_=r*u;e[0]=l*h,e[4]=d*c-f,e[8]=p*c+_,e[1]=l*u,e[5]=_*c+p,e[9]=f*c-d,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,d=r*l,_=r*c;e[0]=l*h,e[4]=_-p*u,e[8]=d*u+f,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=f*u+d,e[10]=p-_*u}else if(t.order==="XZY"){const p=a*l,f=a*c,d=r*l,_=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+_,e[5]=a*h,e[9]=f*u-d,e[2]=d*u-f,e[6]=r*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,fp)}lookAt(t,e,i){const n=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Cn.crossVectors(i,gi),Cn.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Cn.crossVectors(i,gi)),Cn.normalize(),Xo.crossVectors(gi,Cn),n[0]=Cn.x,n[4]=Xo.x,n[8]=gi.x,n[1]=Cn.y,n[5]=Xo.y,n[9]=gi.y,n[2]=Cn.z,n[6]=Xo.z,n[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],f=i[13],d=i[2],_=i[6],g=i[10],m=i[14],v=i[3],b=i[7],x=i[11],w=i[15],C=n[0],T=n[4],A=n[8],S=n[12],M=n[1],y=n[5],R=n[9],D=n[13],k=n[2],F=n[6],z=n[10],$=n[14],U=n[3],V=n[7],Q=n[11],xt=n[15];return s[0]=a*C+r*M+l*k+c*U,s[4]=a*T+r*y+l*F+c*V,s[8]=a*A+r*R+l*z+c*Q,s[12]=a*S+r*D+l*$+c*xt,s[1]=h*C+u*M+p*k+f*U,s[5]=h*T+u*y+p*F+f*V,s[9]=h*A+u*R+p*z+f*Q,s[13]=h*S+u*D+p*$+f*xt,s[2]=d*C+_*M+g*k+m*U,s[6]=d*T+_*y+g*F+m*V,s[10]=d*A+_*R+g*z+m*Q,s[14]=d*S+_*D+g*$+m*xt,s[3]=v*C+b*M+x*k+w*U,s[7]=v*T+b*y+x*F+w*V,s[11]=v*A+b*R+x*z+w*Q,s[15]=v*S+b*D+x*$+w*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],f=t[14],d=t[3],_=t[7],g=t[11],m=t[15];return d*(+s*l*u-n*c*u-s*r*p+i*c*p+n*r*f-i*l*f)+_*(+e*l*f-e*c*p+s*a*p-n*a*f+n*c*h-s*l*h)+g*(+e*c*u-e*r*f-s*a*u+i*a*f+s*r*h-i*c*h)+m*(-n*r*h-e*l*u+e*r*p+n*a*u-i*a*p+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],f=t[11],d=t[12],_=t[13],g=t[14],m=t[15],v=u*g*c-_*p*c+_*l*f-r*g*f-u*l*m+r*p*m,b=d*p*c-h*g*c-d*l*f+a*g*f+h*l*m-a*p*m,x=h*_*c-d*u*c+d*r*f-a*_*f-h*r*m+a*u*m,w=d*u*l-h*_*l-d*r*p+a*_*p+h*r*g-a*u*g,C=e*v+i*b+n*x+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return t[0]=v*T,t[1]=(_*p*s-u*g*s-_*n*f+i*g*f+u*n*m-i*p*m)*T,t[2]=(r*g*s-_*l*s+_*n*c-i*g*c-r*n*m+i*l*m)*T,t[3]=(u*l*s-r*p*s-u*n*c+i*p*c+r*n*f-i*l*f)*T,t[4]=b*T,t[5]=(h*g*s-d*p*s+d*n*f-e*g*f-h*n*m+e*p*m)*T,t[6]=(d*l*s-a*g*s-d*n*c+e*g*c+a*n*m-e*l*m)*T,t[7]=(a*p*s-h*l*s+h*n*c-e*p*c-a*n*f+e*l*f)*T,t[8]=x*T,t[9]=(d*u*s-h*_*s-d*i*f+e*_*f+h*i*m-e*u*m)*T,t[10]=(a*_*s-d*r*s+d*i*c-e*_*c-a*i*m+e*r*m)*T,t[11]=(h*r*s-a*u*s-h*i*c+e*u*c+a*i*f-e*r*f)*T,t[12]=w*T,t[13]=(h*_*n-d*u*n+d*i*p-e*_*p-h*i*g+e*u*g)*T,t[14]=(d*r*n-a*_*n-d*i*l+e*_*l+a*i*g-e*r*g)*T,t[15]=(a*u*n-h*r*n+h*i*l-e*u*l-a*i*p+e*r*p)*T,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,r=t.y,l=t.z,c=s*a,h=s*r;return this.set(c*a+i,c*r-n*l,c*l+n*r,0,c*r+n*l,h*r+i,h*l-n*a,0,c*l-n*r,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,r=e._z,l=e._w,c=s+s,h=a+a,u=r+r,p=s*c,f=s*h,d=s*u,_=a*h,g=a*u,m=r*u,v=l*c,b=l*h,x=l*u,w=i.x,C=i.y,T=i.z;return n[0]=(1-(_+m))*w,n[1]=(f+x)*w,n[2]=(d-b)*w,n[3]=0,n[4]=(f-x)*C,n[5]=(1-(p+m))*C,n[6]=(g+v)*C,n[7]=0,n[8]=(d+b)*T,n[9]=(g-v)*T,n[10]=(1-(p+_))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=ds.set(n[0],n[1],n[2]).length();const a=ds.set(n[4],n[5],n[6]).length(),r=ds.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ci.copy(this);const c=1/s,h=1/a,u=1/r;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,e.setFromRotationMatrix(Ci),i.x=s,i.y=a,i.z=r,this}makePerspective(t,e,i,n,s,a,r=Xi,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(i-n),p=(e+t)/(e-t),f=(i+n)/(i-n);let d,_;if(l)d=s/(a-s),_=a*s/(a-s);else if(r===Xi)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(r===Ha)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,r=Xi,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-n),p=-(e+t)/(e-t),f=-(i+n)/(i-n);let d,_;if(l)d=1/(a-s),_=a/(a-s);else if(r===Xi)d=-2/(a-s),_=-(a+s)/(a-s);else if(r===Ha)d=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ds=new L,Ci=new Kt,dp=new L(0,0,0),fp=new L(1,1,1),Cn=new L,Xo=new L,gi=new L,sh=new Kt,oh=new He;class Ai{constructor(t=0,e=0,i=0,n=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],r=n[8],l=n[1],c=n[5],h=n[9],u=n[2],p=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class od{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pp=0;const ah=new L,fs=new He,on=new Kt,$o=new L,io=new L,mp=new L,gp=new He,rh=new L(1,0,0),lh=new L(0,1,0),ch=new L(0,0,1),hh={type:"added"},_p={type:"removed"},ps={type:"childadded",child:null},yr={type:"childremoved",child:null};class Se extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new L,e=new Ai,i=new He,n=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Xt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(rh,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rh,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?$o.copy(t):$o.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(io,$o,this.up):on.lookAt($o,io,this.up),this.quaternion.setFromRotationMatrix(on),n&&(on.extractRotation(n.matrixWorld),fs.setFromRotationMatrix(on),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hh),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_p),yr.child=t,this.dispatchEvent(yr),yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hh),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(r=>({...r})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(t.materials,this.material[l]));n.material=r}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];n.animations.push(s(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),p=a(t.skeletons),f=a(t.animations),d=a(t.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),d.length>0&&(i.nodes=d)}return i.object=n,i;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Se.DEFAULT_UP=new L(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new L,an=new L,xr=new L,rn=new L,ms=new L,gs=new L,uh=new L,vr=new L,br=new L,Mr=new L,Sr=new fe,Tr=new fe,wr=new fe;class Ii{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Pi.subVectors(t,e),n.cross(Pi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Pi.subVectors(n,e),an.subVectors(i,e),xr.subVectors(t,e);const a=Pi.dot(Pi),r=Pi.dot(an),l=Pi.dot(xr),c=an.dot(an),h=an.dot(xr),u=a*c-r*r;if(u===0)return s.set(0,0,0),null;const p=1/u,f=(c*l-r*h)*p,d=(a*h-r*l)*p;return s.set(1-f-d,d,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,i,n,s,a,r,l){return this.getBarycoord(t,e,i,n,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rn.x),l.addScaledVector(a,rn.y),l.addScaledVector(r,rn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return Sr.setScalar(0),Tr.setScalar(0),wr.setScalar(0),Sr.fromBufferAttribute(t,e),Tr.fromBufferAttribute(t,i),wr.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Sr,s.x),a.addScaledVector(Tr,s.y),a.addScaledVector(wr,s.z),a}static isFrontFacing(t,e,i,n){return Pi.subVectors(i,e),an.subVectors(t,e),Pi.cross(an).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Pi.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ii.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Ii.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,r;ms.subVectors(n,i),gs.subVectors(s,i),vr.subVectors(t,i);const l=ms.dot(vr),c=gs.dot(vr);if(l<=0&&c<=0)return e.copy(i);br.subVectors(t,n);const h=ms.dot(br),u=gs.dot(br);if(h>=0&&u<=h)return e.copy(n);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ms,a);Mr.subVectors(t,s);const f=ms.dot(Mr),d=gs.dot(Mr);if(d>=0&&f<=d)return e.copy(s);const _=f*c-l*d;if(_<=0&&c>=0&&d<=0)return r=c/(c-d),e.copy(i).addScaledVector(gs,r);const g=h*d-f*u;if(g<=0&&u-h>=0&&f-d>=0)return uh.subVectors(s,n),r=(u-h)/(u-h+(f-d)),e.copy(n).addScaledVector(uh,r);const m=1/(g+_+p);return a=_*m,r=p*m,e.copy(i).addScaledVector(ms,a).addScaledVector(gs,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Er(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class pt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ae.workingColorSpace){if(t=mc(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Er(a,s,t+1/3),this.g=Er(a,s,t),this.b=Er(a,s,t-1/3)}return ae.colorSpaceToWorking(this,n),this}setStyle(t,e=Ie){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],r=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const i=ad[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ae.workingToColorSpace(Qe.copy(this),t),Math.round(Zt(Qe.r*255,0,255))*65536+Math.round(Zt(Qe.g*255,0,255))*256+Math.round(Zt(Qe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Qe.copy(this),e);const i=Qe.r,n=Qe.g,s=Qe.b,a=Math.max(i,n,s),r=Math.min(i,n,s);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Ie){ae.workingToColorSpace(Qe.copy(this),t);const e=Qe.r,i=Qe.g,n=Qe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(qo);const i=yo(Pn.h,qo.h,e),n=yo(Pn.s,qo.s,e),s=yo(Pn.l,qo.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new pt;pt.NAMES=ad;let yp=0;class Ui extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=ts,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ol&&(i.blendSrc=this.blendSrc),this.blendDst!==al&&(i.blendDst=this.blendDst),this.blendEquation!==jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ze extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new L,Ko=new Nt;let xp=0;class Fe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vl,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ko.fromBufferAttribute(this,e),Ko.applyMatrix3(t),this.setXY(e,Ko.x,Ko.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Li(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Li(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Li(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vl&&(t.usage=this.usage),t}}class rd extends Fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ld extends Fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends Fe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let vp=0;const Mi=new Kt,Ar=new Se,_s=new L,_i=new Zi,no=new Zi,Ke=new L;class Be extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nd(t)?ld:rd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,i){return Mi.makeTranslation(t,e,i),this.applyMatrix4(Mi),this}scale(t,e,i){return Mi.makeScale(t,e,i),this.applyMatrix4(Mi),this}lookAt(t){return Ar.lookAt(t),Ar.updateMatrix(),this.applyMatrix4(Ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const r=e[s];no.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(_i.min,no.min),_i.expandByPoint(Ke),Ke.addVectors(_i.max,no.max),_i.expandByPoint(Ke)):(_i.expandByPoint(no.min),_i.expandByPoint(no.max))}_i.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ke.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ke));if(e)for(let s=0,a=e.length;s<a;s++){const r=e[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Ke.fromBufferAttribute(r,c),l&&(_s.fromBufferAttribute(t,c),Ke.add(_s)),n=Math.max(n,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let A=0;A<i.count;A++)r[A]=new L,l[A]=new L;const c=new L,h=new L,u=new L,p=new Nt,f=new Nt,d=new Nt,_=new L,g=new L;function m(A,S,M){c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),p.fromBufferAttribute(s,A),f.fromBufferAttribute(s,S),d.fromBufferAttribute(s,M),h.sub(c),u.sub(c),f.sub(p),d.sub(p);const y=1/(f.x*d.y-d.x*f.y);isFinite(y)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(u,-f.y).multiplyScalar(y),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-d.x).multiplyScalar(y),r[A].add(_),r[S].add(_),r[M].add(_),l[A].add(g),l[S].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,S=v.length;A<S;++A){const M=v[A],y=M.start,R=M.count;for(let D=y,k=y+R;D<k;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const b=new L,x=new L,w=new L,C=new L;function T(A){w.fromBufferAttribute(n,A),C.copy(w);const S=r[A];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(C,S);const y=x.dot(l[A])<0?-1:1;a.setXYZW(A,b.x,b.y,b.z,y)}for(let A=0,S=v.length;A<S;++A){const M=v[A],y=M.start,R=M.count;for(let D=y,k=y+R;D<k;D+=3)T(t.getX(D+0)),T(t.getX(D+1)),T(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const n=new L,s=new L,a=new L,r=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let p=0,f=t.count;p<f;p+=3){const d=t.getX(p+0),_=t.getX(p+1),g=t.getX(p+2);n.fromBufferAttribute(e,d),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),r.fromBufferAttribute(i,d),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),r.add(h),l.add(h),c.add(h),i.setXYZ(d,r.x,r.y,r.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)n.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,p=new c.constructor(l.length*h);let f=0,d=0;for(let _=0,g=l.length;_<g;_++){r.isInterleavedBufferAttribute?f=l[_]*r.data.stride+r.offset:f=l[_]*h;for(let m=0;m<h;m++)p[d++]=c[f++]}return new Fe(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,i=this.index.array,n=this.attributes;for(const r in n){const l=n[r],c=t(l,i);e.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,u=c.length;h<u;h++){const p=c[h],f=t(p,i);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere=r.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dh=new Kt,Gn=new Za,Yo=new Ji,fh=new L,jo=new L,Zo=new L,Jo=new L,Rr=new L,Qo=new L,ph=new L,ta=new L;class Qt extends Se{constructor(t=new Be,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const r=this.morphTargetInfluences;if(s&&r){Qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],u=s[l];h!==0&&(Rr.fromBufferAttribute(u,t),a?Qo.addScaledVector(Rr,h):Qo.addScaledVector(Rr.sub(e),h))}e.add(Qo)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),Gn.copy(t.ray).recast(t.near),!(Yo.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Yo,fh)===null||Gn.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(dh.copy(s).invert(),Gn.copy(t.ray).applyMatrix4(dh),!(i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,f=s.drawRange;if(r!==null)if(Array.isArray(a))for(let d=0,_=p.length;d<_;d++){const g=p[d],m=a[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(r.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=b;x<w;x+=3){const C=r.getX(x),T=r.getX(x+1),A=r.getX(x+2);n=ea(this,m,t,i,c,h,u,C,T,A),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const d=Math.max(0,f.start),_=Math.min(r.count,f.start+f.count);for(let g=d,m=_;g<m;g+=3){const v=r.getX(g),b=r.getX(g+1),x=r.getX(g+2);n=ea(this,a,t,i,c,h,u,v,b,x),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let d=0,_=p.length;d<_;d++){const g=p[d],m=a[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=b;x<w;x+=3){const C=x,T=x+1,A=x+2;n=ea(this,m,t,i,c,h,u,C,T,A),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const d=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=d,m=_;g<m;g+=3){const v=g,b=g+1,x=g+2;n=ea(this,a,t,i,c,h,u,v,b,x),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}}function bp(o,t,e,i,n,s,a,r){let l;if(t.side===si?l=i.intersectTriangle(a,s,n,!0,r):l=i.intersectTriangle(n,s,a,t.side===Yi,r),l===null)return null;ta.copy(r),ta.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(ta);return c<e.near||c>e.far?null:{distance:c,point:ta.clone(),object:o}}function ea(o,t,e,i,n,s,a,r,l,c){o.getVertexPosition(r,jo),o.getVertexPosition(l,Zo),o.getVertexPosition(c,Jo);const h=bp(o,t,e,i,jo,Zo,Jo,ph);if(h){const u=new L;Ii.getBarycoord(ph,jo,Zo,Jo,u),n&&(h.uv=Ii.getInterpolatedAttribute(n,r,l,c,u,new Nt)),s&&(h.uv1=Ii.getInterpolatedAttribute(s,r,l,c,u,new Nt)),a&&(h.normal=Ii.getInterpolatedAttribute(a,r,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:r,b:l,c,normal:new L,materialIndex:0};Ii.getNormal(jo,Zo,Jo,p.normal),h.face=p,h.barycoord=u}return h}class qi extends Be{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const r=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let p=0,f=0;d("z","y","x",-1,-1,i,e,t,a,s,0),d("z","y","x",1,-1,i,e,-t,a,s,1),d("x","z","y",1,1,t,i,e,n,a,2),d("x","z","y",1,-1,t,i,-e,n,a,3),d("x","y","z",1,-1,t,e,i,n,s,4),d("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function d(_,g,m,v,b,x,w,C,T,A,S){const M=x/T,y=w/A,R=x/2,D=w/2,k=C/2,F=T+1,z=A+1;let $=0,U=0;const V=new L;for(let Q=0;Q<z;Q++){const xt=Q*y-D;for(let zt=0;zt<F;zt++){const te=zt*M-R;V[_]=te*v,V[g]=xt*b,V[m]=k,c.push(V.x,V.y,V.z),V[_]=0,V[g]=0,V[m]=C>0?1:-1,h.push(V.x,V.y,V.z),u.push(zt/T),u.push(1-Q/A),$+=1}}for(let Q=0;Q<A;Q++)for(let xt=0;xt<T;xt++){const zt=p+xt+F*Q,te=p+xt+F*(Q+1),re=p+(xt+1)+F*(Q+1),q=p+(xt+1)+F*Q;l.push(zt,te,q),l.push(te,re,q),U+=6}r.addGroup(f,U,S),f+=U,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const n=o[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ri(o){const t={};for(let e=0;e<o.length;e++){const i=Gs(o[e]);for(const n in i)t[n]=i[n]}return t}function Mp(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function cd(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Po={clone:Gs,merge:ri};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class hd extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new L,mh=new Nt,gh=new Nt;class hi extends hd{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,mh,gh),e.subVectors(gh,mh)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_o*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,xs=1;class wp extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new hi(ys,xs,t,e);n.layers=this.layers,this.add(n);const s=new hi(ys,xs,t,e);s.layers=this.layers,this.add(s);const a=new hi(ys,xs,t,e);a.layers=this.layers,this.add(a);const r=new hi(ys,xs,t,e);r.layers=this.layers,this.add(r);const l=new hi(ys,xs,t,e);l.layers=this.layers,this.add(l);const c=new hi(ys,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,r,l]=e;for(const c of e)this.remove(c);if(t===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,r),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,p,f),t.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class ud extends We{constructor(t=[],e=Bs,i,n,s,a,r,l,c,h){super(t,e,i,n,s,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ep extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ud(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new qi(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:bn});s.uniforms.tEquirect.value=e;const a=new Qt(n,s),r=e.minFilter;return e.minFilter===xn&&(e.minFilter=yi),new wp(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}class Me extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,d=.005;c.inputState.pinching&&p>f+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return r!==null&&(r.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class _c{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(t),this.density=e}clone(){return new _c(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dd extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vl,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ai=new L;class yc{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyMatrix4(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyNormalMatrix(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.transformDirection(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Li(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _h=new L,yh=new fe,xh=new fe,Cp=new L,vh=new Kt,ia=new L,Pr=new Ji,bh=new Kt,Lr=new Za;class Pp extends Qt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jc,this.bindMatrix=new Kt,this.bindMatrixInverse=new Kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,ia),this.boundingBox.expandByPoint(ia)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ji),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,ia),this.boundingSphere.expandByPoint(ia)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),t.ray.intersectsSphere(Pr)!==!1&&(bh.copy(n).invert(),Lr.copy(t.ray).applyMatrix4(bh),!(this.boundingBox!==null&&Lr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Lr)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new fe,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===jc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;yh.fromBufferAttribute(n.attributes.skinIndex,t),xh.fromBufferAttribute(n.attributes.skinWeight,t),_h.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=xh.getComponent(s);if(a!==0){const r=yh.getComponent(s);vh.multiplyMatrices(i.bones[r].matrixWorld,i.boneInverses[r]),e.addScaledVector(Cp.copy(_h).applyMatrix4(vh),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class fd extends Se{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pd extends We{constructor(t=null,e=1,i=1,n,s,a,r,l,c=ui,h=ui,u,p){super(null,a,r,l,c,h,n,s,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mh=new Kt,Lp=new Kt;class xc{constructor(t=[],e=[]){this.uuid=ki(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Kt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const r=t[s]?t[s].matrixWorld:Lp;Mh.multiplyMatrices(r,e[s]),Mh.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new pd(e,t,t,Ei,Di);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const s=t.bones[i];let a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new fd),this.bones.push(a),this.boneInverses.push(new Kt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){const a=e[n];t.bones.push(a.uuid);const r=i[n];t.boneInverses.push(r.toArray())}return t}}class Ga extends Fe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new Kt,Sh=new Kt,na=[],Th=new Zi,Ip=new Kt,so=new Qt,oo=new Ji;class Ds extends Qt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ga(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ip)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vs),Th.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(Th)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vs),oo.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let r=0;r<i.length;r++)i[r]=n[a+r]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),t.ray.intersectsSphere(oo)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,vs),Sh.multiplyMatrices(i,vs),so.matrixWorld=Sh,so.raycast(t,na);for(let a=0,r=na.length;a<r;a++){const l=na[a];l.instanceId=s,l.object=this,e.push(l)}na.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new pd(new Float32Array(n*this.count),n,this.count,cc,Di));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=n*t;s[l]=r,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ir=new L,Dp=new L,kp=new Xt;class Kn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ir.subVectors(i,e).cross(Dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ir),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||kp.getNormalMatrix(t),n=this.coplanarPoint(Ir).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Ji,Np=new Nt(.5,.5),sa=new L;class vc{constructor(t=new Kn,e=new Kn,i=new Kn,n=new Kn,s=new Kn,a=new Kn){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(s),r[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xi,i=!1){const n=this.planes,s=t.elements,a=s[0],r=s[1],l=s[2],c=s[3],h=s[4],u=s[5],p=s[6],f=s[7],d=s[8],_=s[9],g=s[10],m=s[11],v=s[12],b=s[13],x=s[14],w=s[15];if(n[0].setComponents(c-a,f-h,m-d,w-v).normalize(),n[1].setComponents(c+a,f+h,m+d,w+v).normalize(),n[2].setComponents(c+r,f+u,m+_,w+b).normalize(),n[3].setComponents(c-r,f-u,m-_,w-b).normalize(),i)n[4].setComponents(l,p,g,x).normalize(),n[5].setComponents(c-l,f-p,m-g,w-x).normalize();else if(n[4].setComponents(c-l,f-p,m-g,w-x).normalize(),e===Xi)n[5].setComponents(c+l,f+p,m+g,w+x).normalize();else if(e===Ha)n[5].setComponents(l,p,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){Vn.center.set(0,0,0);const e=Np.distanceTo(t.center);return Vn.radius=.7071067811865476+e,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(sa.x=n.normal.x>0?t.max.x:t.min.x,sa.y=n.normal.y>0?t.max.y:t.min.y,sa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bc extends Ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Va=new L,Wa=new L,wh=new Kt,ao=new Za,oa=new Ji,Dr=new L,Eh=new L;class Mc extends Se{constructor(t=new Be,e=new bc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Va.fromBufferAttribute(e,n-1),Wa.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Va.distanceTo(Wa);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(n),oa.radius+=s,t.ray.intersectsSphere(oa)===!1)return;wh.copy(n).invert(),ao.copy(t.ray).applyMatrix4(wh);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,g=d-1;_<g;_+=c){const m=h.getX(_),v=h.getX(_+1),b=aa(this,t,ao,l,m,v,_);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(d-1),g=h.getX(f),m=aa(this,t,ao,l,_,g,d-1);m&&e.push(m)}}else{const f=Math.max(0,a.start),d=Math.min(p.count,a.start+a.count);for(let _=f,g=d-1;_<g;_+=c){const m=aa(this,t,ao,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=aa(this,t,ao,l,d-1,f,d-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function aa(o,t,e,i,n,s,a){const r=o.geometry.attributes.position;if(Va.fromBufferAttribute(r,n),Wa.fromBufferAttribute(r,s),e.distanceSqToSegment(Va,Wa,Dr,Eh)>i)return;Dr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Dr);if(!(c<t.near||c>t.far))return{distance:c,point:Eh.clone().applyMatrix4(o.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:o}}const Ah=new L,Rh=new L;class md extends Mc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Ah.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Ah.distanceTo(Rh);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Up extends Mc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ja extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ch=new Kt,Wl=new Za,ra=new Ji,la=new L;class Sc extends Se{constructor(t=new Be,e=new Ja){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(n),ra.radius+=s,t.ray.intersectsSphere(ra)===!1)return;Ch.copy(n).invert(),Wl.copy(t.ray).applyMatrix4(Ch);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=i.index,u=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let d=p,_=f;d<_;d++){const g=c.getX(d);la.fromBufferAttribute(u,g),Ph(la,g,l,n,t,e,this)}}else{const p=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let d=p,_=f;d<_;d++)la.fromBufferAttribute(u,d),Ph(la,d,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Ph(o,t,e,i,n,s,a){const r=Wl.distanceSqToPoint(o);if(r<e){const l=new L;Wl.closestPointToPoint(o,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class No extends We{constructor(t,e,i,n,s,a,r,l,c){super(t,e,i,n,s,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gd extends We{constructor(t,e,i=is,n,s,a,r=ui,l=ui,c,h=wo,u=1){if(h!==wo&&h!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:u};super(p,n,s,a,r,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Lo extends Be{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],a=[],r=[],l=[],c=new L,h=new Nt;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $s extends Be{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],p=[],f=[];let d=0;const _=[],g=i/2;let m=0;v(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(p,3)),this.setAttribute("uv",new Ae(f,2));function v(){const x=new L,w=new L;let C=0;const T=(e-t)/i;for(let A=0;A<=s;A++){const S=[],M=A/s,y=M*(e-t)+t;for(let R=0;R<=n;R++){const D=R/n,k=D*l+r,F=Math.sin(k),z=Math.cos(k);w.x=y*F,w.y=-M*i+g,w.z=y*z,u.push(w.x,w.y,w.z),x.set(F,T,z).normalize(),p.push(x.x,x.y,x.z),f.push(D,1-M),S.push(d++)}_.push(S)}for(let A=0;A<n;A++)for(let S=0;S<s;S++){const M=_[S][A],y=_[S+1][A],R=_[S+1][A+1],D=_[S][A+1];(t>0||S!==0)&&(h.push(M,y,D),C+=3),(e>0||S!==s-1)&&(h.push(y,R,D),C+=3)}c.addGroup(m,C,0),m+=C}function b(x){const w=d,C=new Nt,T=new L;let A=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let R=1;R<=n;R++)u.push(0,g*M,0),p.push(0,M,0),f.push(.5,.5),d++;const y=d;for(let R=0;R<=n;R++){const k=R/n*l+r,F=Math.cos(k),z=Math.sin(k);T.x=S*z,T.y=g*M,T.z=S*F,u.push(T.x,T.y,T.z),p.push(0,M,0),C.x=F*.5+.5,C.y=z*.5*M+.5,f.push(C.x,C.y),d++}for(let R=0;R<n;R++){const D=w+R,k=y+R;x===!0?h.push(k,k+1,D):h.push(k+1,k,D),A+=3}c.addGroup(m,A,x===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tc extends $s{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,r=Math.PI*2){super(0,t,e,i,n,s,a,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:r}}static fromJSON(t){return new Tc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wi extends Be{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,r=Math.floor(i),l=Math.floor(n),c=r+1,h=l+1,u=t/r,p=e/l,f=[],d=[],_=[],g=[];for(let m=0;m<h;m++){const v=m*p-a;for(let b=0;b<c;b++){const x=b*u-s;d.push(x,-v,0),_.push(0,0,1),g.push(b/r),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<r;v++){const b=v+c*m,x=v+c*(m+1),w=v+1+c*(m+1),C=v+1+c*m;f.push(b,x,C),f.push(x,w,C)}this.setIndex(f),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qa extends Be{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const r=[],l=[],c=[],h=[];let u=t;const p=(e-t)/n,f=new L,d=new Nt;for(let _=0;_<=n;_++){for(let g=0;g<=i;g++){const m=s+g/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),d.x=(f.x/e+1)/2,d.y=(f.y/e+1)/2,h.push(d.x,d.y)}u+=p}for(let _=0;_<n;_++){const g=_*(i+1);for(let m=0;m<i;m++){const v=m+g,b=v,x=v+i+1,w=v+i+2,C=v+1;r.push(b,x,C),r.push(x,w,C)}}this.setIndex(r),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tr extends Be{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new L,p=new L,f=[],d=[],_=[],g=[];for(let m=0;m<=i;m++){const v=[],b=m/i;let x=0;m===0&&a===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){const C=w/e;u.x=-t*Math.cos(n+C*s)*Math.sin(a+b*r),u.y=t*Math.cos(a+b*r),u.z=t*Math.sin(n+C*s)*Math.sin(a+b*r),d.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),g.push(C+x,1-b),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){const b=h[m][v+1],x=h[m][v],w=h[m+1][v],C=h[m+1][v+1];(m!==0||a>0)&&f.push(b,x,C),(m!==i-1||l<Math.PI)&&f.push(x,w,C)}this.setIndex(f),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fp extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xi extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qi extends xi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xl extends Ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Op extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bp extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ca(o,t){return!o||o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function zp(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Hp(o){function t(n,s){return o[n]-o[s]}const e=o.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function Lh(o,t,e){const i=o.length,n=new o.constructor(i);for(let s=0,a=0;a!==i;++s){const r=e[s]*t;for(let l=0;l!==t;++l)n[a++]=o[r+l]}return n}function _d(o,t,e,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push(...a)),s=o[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=o[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=o[n++];while(s!==void 0)}class Uo{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let a;i:{n:if(!(t<n)){for(let r=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===r)break;if(s=n,n=e[++i],t<n)break e}a=e.length;break i}if(!(t>=s)){const r=e[1];t<r&&(i=2,s=r);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break e}a=i,i=0;break i}break t}for(;i<a;){const r=i+a>>>1;t<e[r]?a=r:i=r+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gp extends Uo{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rs,endingEnd:Rs}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,a=t+1,r=n[s],l=n[a];if(r===void 0)switch(this.getSettings_().endingStart){case Cs:s=t,r=2*e-i;break;case Ba:s=n.length-2,r=e+n[s]-n[s+1];break;default:s=t,r=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cs:a=t,l=2*i-e;break;case Ba:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}const c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-r),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,d=(i-e)/(n-e),_=d*d,g=_*d,m=-p*g+2*p*_-p*d,v=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*d+1,b=(-1-f)*g+(1.5+f)*_+.5*d,x=f*g-f*_;for(let w=0;w!==r;++w)s[w]=m*a[h+w]+v*a[c+w]+b*a[l+w]+x*a[u+w];return s}}class yd extends Uo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=(i-e)/(n-e),u=1-h;for(let p=0;p!==r;++p)s[p]=a[c+p]*u+a[l+p]*h;return s}}class Vp extends Uo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class Fi{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ca(e,this.TimeBufferType),this.values=ca(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ca(t.times,Array),values:ca(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Vp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ao:e=this.InterpolantFactoryMethodDiscrete;break;case Ro:e=this.InterpolantFactoryMethodLinear;break;case lr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return lr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const r=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*r,a*r)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let r=0;r!==s;r++){const l=i[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),t=!1;break}a=l}if(n!==void 0&&zp(n))for(let r=0,l=n.length;r!==l;++r){const c=n[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===lr,s=t.length-1;let a=1;for(let r=1;r<s;++r){let l=!1;const c=t[r],h=t[r+1];if(c!==h&&(r!==1||c!==t[0]))if(n)l=!0;else{const u=r*i,p=u-i,f=u+i;for(let d=0;d!==i;++d){const _=e[u+d];if(_!==e[p+d]||_!==e[f+d]){l=!0;break}}}if(l){if(r!==a){t[a]=t[r];const u=r*i,p=a*i;for(let f=0;f!==i;++f)e[p+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let r=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[r+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}Fi.prototype.ValueTypeName="";Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=Ro;class qs extends Fi{constructor(t,e,i){super(t,e,i)}}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Ao;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class xd extends Fi{constructor(t,e,i,n){super(t,e,i,n)}}xd.prototype.ValueTypeName="color";class Vs extends Fi{constructor(t,e,i,n){super(t,e,i,n)}}Vs.prototype.ValueTypeName="number";class Wp extends Uo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(i-e)/(n-e);let c=t*r;for(let h=c+r;c!==h;c+=4)He.slerpFlat(s,0,a,c-r,a,c,l);return s}}class ns extends Fi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Wp(this.times,this.values,this.getValueSize(),t)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Fi{constructor(t,e,i){super(t,e,i)}}Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Ao;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Fi{constructor(t,e,i,n){super(t,e,i,n)}}ss.prototype.ValueTypeName="vector";class Io{constructor(t="",e=-1,i=[],n=fc){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=ki(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,r=i.length;a!==r;++a)e.push($p(i[a]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(Fi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,a=[];for(let r=0;r<s;r++){let l=[],c=[];l.push((r+s-1)%s,r,(r+1)%s),c.push(0,1,0);const h=Hp(l);l=Lh(l,1,h),c=Lh(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Vs(".morphTargetInfluences["+e[r].name+"]",l,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let r=0,l=t.length;r<l;r++){const c=t[r],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let p=n[u];p||(n[u]=p=[]),p.push(c)}}const a=[];for(const r in n)a.push(this.CreateFromMorphTargetSequence(r,n[r],e,i));return a}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,p,f,d,_){if(f.length!==0){const g=[],m=[];_d(f,g,m,d),g.length!==0&&_.push(new u(p,g,m))}},n=[],s=t.name||"default",a=t.fps||30,r=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const p=c[u].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const f={};let d;for(d=0;d<p.length;d++)if(p[d].morphTargets)for(let _=0;_<p[d].morphTargets.length;_++)f[p[d].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let v=0;v!==p[d].morphTargets.length;++v){const b=p[d];g.push(b.time),m.push(b.morphTarget===_?1:0)}n.push(new Vs(".morphTargetInfluence["+_+"]",g,m))}l=f.length*a}else{const f=".bones["+e[u].name+"]";i(ss,f+".position",p,"pos",n),i(ns,f+".quaternion",p,"rot",n),i(ss,f+".scale",p,"scl",n)}}return n.length===0?null:new this(s,l,n,r)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Xp(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vs;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return xd;case"quaternion":return ns;case"bool":case"boolean":return qs;case"string":return Ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function $p(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Xp(o.type);if(o.times===void 0){const e=[],i=[];_d(o.keys,e,i,"value"),o.times=e,o.values=i}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const vn={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class qp{constructor(t,e,i){const n=this;let s=!1,a=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){r++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,r),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,r),a===r&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){const f=c[u],d=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return d}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Kp=new qp;class Ys{constructor(t){this.manager=t!==void 0?t:Kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const ln={};class Yp extends Error{constructor(t,e){super(t),this.response=e}}class vd extends Ys{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=vn.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ln[t]!==void 0){ln[t].push({onLoad:e,onProgress:i,onError:n});return}ln[t]=[],ln[t].push({onLoad:e,onProgress:i,onError:n});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),r=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ln[t],u=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=p?parseInt(p):0,d=f!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){u.read().then(({done:b,value:x})=>{if(b)m.close();else{_+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:d,loaded:_,total:f});for(let C=0,T=h.length;C<T;C++){const A=h[C];A.onProgress&&A.onProgress(w)}m.enqueue(x),v()}},b=>{m.error(b)})}}});return new Response(g)}else throw new Yp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,r));case"json":return c.json();default:if(r==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(r),p=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(p);return c.arrayBuffer().then(d=>f.decode(d))}}}).then(c=>{vn.add(`file:${t}`,c);const h=ln[t];delete ln[t];for(let u=0,p=h.length;u<p;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ln[t];if(h===void 0)throw this.manager.itemError(t),c;delete ln[t];for(let u=0,p=h.length;u<p;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const bs=new WeakMap;class jp extends Ys{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=vn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=bs.get(a);u===void 0&&(u=[],bs.set(a,u)),u.push({onLoad:e,onError:n})}return a}const r=Co("img");function l(){h(),e&&e(this);const u=bs.get(this)||[];for(let p=0;p<u.length;p++){const f=u[p];f.onLoad&&f.onLoad(this)}bs.delete(this),s.manager.itemEnd(t)}function c(u){h(),n&&n(u),vn.remove(`image:${t}`);const p=bs.get(this)||[];for(let f=0;f<p.length;f++){const d=p[f];d.onError&&d.onError(u)}bs.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),vn.add(`image:${t}`,r),s.manager.itemStart(t),r.src=t,r}}class bd extends Ys{constructor(t){super(t)}load(t,e,i,n){const s=new We,a=new jp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(r){s.image=r,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}class er extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Zp extends er{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const kr=new Kt,Ih=new L,Dh=new L;class wc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=ji,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ih),Dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dh),e.updateMatrixWorld(),kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jp extends wc{constructor(){super(new hi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Hs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Qp extends er{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Jp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const kh=new Kt,ro=new L,Nr=new L;class tm extends wc{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ro.setFromMatrixPosition(t.matrixWorld),i.position.copy(ro),Nr.copy(i.position),Nr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Nr),i.updateMatrixWorld(),n.makeTranslation(-ro.x,-ro.y,-ro.z),kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,i.coordinateSystem,i.reversedDepth)}}class Ec extends er{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new tm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ir extends hd{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,r=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class em extends wc{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Md extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new em}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xo{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Ur=new WeakMap;class im extends Ys{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=vn.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{if(Ur.has(a)===!0)n&&n(Ur.get(a)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(c),s.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader,r.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,r).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return vn.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){n&&n(c),Ur.set(l,c),vn.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});vn.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class nm extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Sd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class sm{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,a;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let a=this.cumulativeWeight;if(a===0){for(let r=0;r!==n;++r)i[s+r]=i[r];a=e}else{a+=e;const r=e/a;this._mixBufferRegion(i,s,0,r,n)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,r=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(i,n,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(i[l]!==i[l+e]){r.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,a=n;s!==a;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)t[e+a]=t[i+a]}_slerp(t,e,i,n){He.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const a=this._workIndex*s;He.multiplyQuaternionsFlat(t,a,t,e,t,i),He.slerpFlat(t,e,t,e,t,a,n)}_lerp(t,e,i,n,s){const a=1-n;for(let r=0;r!==s;++r){const l=e+r;t[l]=t[l]*a+t[i+r]*n}}_lerpAdditive(t,e,i,n,s){for(let a=0;a!==s;++a){const r=e+a;t[r]=t[r]+t[i+a]*n}}}const Ac="\\[\\]\\.:\\/",om=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",am="[^"+Ac.replace("\\.","")+"]",rm=/((?:WC+[\/:])*)/.source.replace("WC",Rc),lm=/(WCOD+)?/.source.replace("WCOD",am),cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),hm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),um=new RegExp("^"+rm+lm+cm+hm+"$"),dm=["material","materials","bones","map"];class fm{constructor(t,e,i){const n=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class xe{constructor(t,e,i){this.path=e,this.parsedPath=i||xe.parseTrackName(e),this.node=xe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new xe.Composite(t,e,i):new xe(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(om,"")}static parseTrackName(t){const e=um.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);dm.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const r=s[a];if(r.name===e||r.uuid===e)return r;const l=i(r.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=xe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[n];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?r=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xe.Composite=fm;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class pm{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,a=s.length,r=new Array(a),l={endingStart:Rs,endingEnd:Rs};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);r[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=r,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ef,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){const n=this._clip.duration,s=t._clip.duration,a=s/n,r=n/s;t.warp(1,a,e),this.warp(r,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,a=this.timeScale;let r=this._timeScaleInterpolant;r===null&&(r=n._lendControlInterpolant(),this._timeScaleInterpolant=r);const l=r.parameterPositions,c=r.sampleValues;return l[0]=s,l[1]=s+i,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*i;l<0||i===0?e=0:(this._startTime=null,e=i*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),r=this._updateWeight(t);if(r>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Rf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(r);break;case fc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,r)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const a=i===Af;if(t===0)return s===-1?n:a&&(s&1)===1?e-n:n;if(i===wf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=e||n<0){const r=Math.floor(n/e);n-=e*r,s+=Math.abs(r);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:r})}}else this.time=n;if(a&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=Cs,n.endingEnd=Cs):(t?n.endingStart=this.zeroSlopeAtStart?Cs:Rs:n.endingStart=Ba,e?n.endingEnd=this.zeroSlopeAtEnd?Cs:Rs:n.endingEnd=Ba)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const r=a.parameterPositions,l=a.sampleValues;return r[0]=s,l[0]=e,r[1]=s+t,l[1]=i,this}}const mm=new Float32Array(1);class gm extends os{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,a=t._propertyBindings,r=t._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const p=n[u],f=p.name;let d=h[f];if(d!==void 0)++d.referenceCount,a[u]=d;else{if(d=a[u],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,l,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;d=new sm(xe.create(i,f,_),p.ValueTypeName,p.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,l,f),a[u]=d}r[u].resultBuffer=d.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const r=a.knownActions;t._byClipCacheIndex=r.length,r.push(t)}t._cacheIndex=n.length,n.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,r=a[s],l=r.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=r.actionByRoot,p=(t._localRoot||this._root).uuid;delete u[p],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[e];a===void 0&&(a={},n[e]=a),a[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,r=a[n],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete r[s],Object.keys(r).length===0&&delete a[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new yd(new Float32Array(2),new Float32Array(2),1,mm),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let a=typeof t=="string"?Io.findByName(n,t):t;const r=a!==null?a.uuid:t,l=this._actionsByClip[r];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=fc),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new pm(this,a,e,i);return this._bindAction(h,c),this._addInactiveAction(h,r,s),h}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?Io.findByName(i,t):t,a=s?s.uuid:t,r=this._actionsByClip[a];return r!==void 0&&r.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==i;++c)e[c]._update(n,t,s,a);const r=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)r[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let r=0,l=a.length;r!==l;++r){const c=a[r];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const r=i[a].actionByRoot,l=r[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const a in s){const r=s[a];r.restoreOriginalState(),this._removeInactiveBinding(r)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}function Nh(o,t,e,i){const n=_m(i);switch(e){case Zu:return o*t;case cc:return o*t/n.components*n.byteLength;case hc:return o*t/n.components*n.byteLength;case Qu:return o*t*2/n.components*n.byteLength;case uc:return o*t*2/n.components*n.byteLength;case Ju:return o*t*3/n.components*n.byteLength;case Ei:return o*t*4/n.components*n.byteLength;case dc:return o*t*4/n.components*n.byteLength;case Ea:case Aa:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ra:case Ca:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _l:case xl:return Math.max(o,16)*Math.max(t,8)/4;case gl:case yl:return Math.max(o,8)*Math.max(t,8)/2;case vl:case bl:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Pa:case Fl:case Ol:return Math.ceil(o/4)*Math.ceil(t/4)*16;case td:case Bl:return Math.ceil(o/4)*Math.ceil(t/4)*8;case zl:case Hl:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _m(o){switch(o){case ji:case Ku:return{byteLength:1,components:1};case So:case Yu:case Sn:return{byteLength:2,components:1};case rc:case lc:return{byteLength:2,components:4};case is:case ac:case Di:return{byteLength:4,components:1};case ju:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);function Td(){let o=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=o.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(n),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function ym(o){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,u=c.byteLength,p=o.createBuffer();o.bindBuffer(l,p),o.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=o.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function i(r,l,c){const h=l.array,u=l.updateRanges;if(o.bindBuffer(c,r),u.length===0)o.bufferSubData(c,0,h);else{u.sort((f,d)=>f.start-d.start);let p=0;for(let f=1;f<u.length;f++){const d=u[p],_=u[f];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++p,u[p]=_)}u.length=p+1;for(let f=0,d=u.length;f<d;f++){const _=u[f];o.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(o.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:n,remove:s,update:a}}var xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
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
#endif`,bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Am=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Im=`#ifdef USE_IRIDESCENCE
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
#endif`,Dm=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,u0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,d0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,_0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,Eg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,kg=`#define LAMBERT
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
}`,Ng=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ug=`#define MATCAP
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
}`,Fg=`#define MATCAP
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
}`,Og=`#define NORMAL
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
}`,Bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zg=`#define PHONG
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
}`,Hg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Gg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$g=`uniform float size;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jg=`uniform float rotation;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:xm,alphahash_pars_fragment:vm,alphamap_fragment:bm,alphamap_pars_fragment:Mm,alphatest_fragment:Sm,alphatest_pars_fragment:Tm,aomap_fragment:wm,aomap_pars_fragment:Em,batching_pars_vertex:Am,batching_vertex:Rm,begin_vertex:Cm,beginnormal_vertex:Pm,bsdfs:Lm,iridescence_fragment:Im,bumpmap_pars_fragment:Dm,clipping_planes_fragment:km,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Fm,color_fragment:Om,color_pars_fragment:Bm,color_pars_vertex:zm,color_vertex:Hm,common:Gm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Wm,displacementmap_pars_vertex:Xm,displacementmap_vertex:$m,emissivemap_fragment:qm,emissivemap_pars_fragment:Km,colorspace_fragment:Ym,colorspace_pars_fragment:jm,envmap_fragment:Zm,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Qm,envmap_pars_vertex:t0,envmap_physical_pars_fragment:u0,envmap_vertex:e0,fog_vertex:i0,fog_pars_vertex:n0,fog_fragment:s0,fog_pars_fragment:o0,gradientmap_pars_fragment:a0,lightmap_pars_fragment:r0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:h0,lights_toon_fragment:d0,lights_toon_pars_fragment:f0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:_0,lights_fragment_begin:y0,lights_fragment_maps:x0,lights_fragment_end:v0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:T0,map_fragment:w0,map_pars_fragment:E0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphinstance_vertex:L0,morphcolor_vertex:I0,morphnormal_vertex:D0,morphtarget_pars_vertex:k0,morphtarget_vertex:N0,normal_fragment_begin:U0,normal_fragment_maps:F0,normal_pars_fragment:O0,normal_pars_vertex:B0,normal_vertex:z0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:$0,packing:q0,premultiplied_alpha_fragment:K0,project_vertex:Y0,dithering_fragment:j0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ig,shadowmask_pars_fragment:ng,skinbase_vertex:sg,skinning_pars_vertex:og,skinning_vertex:ag,skinnormal_vertex:rg,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:dg,transmission_pars_fragment:fg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:_g,background_vert:yg,background_frag:xg,backgroundCube_vert:vg,backgroundCube_frag:bg,cube_vert:Mg,cube_frag:Sg,depth_vert:Tg,depth_frag:wg,distanceRGBA_vert:Eg,distanceRGBA_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:Lg,meshbasic_vert:Ig,meshbasic_frag:Dg,meshlambert_vert:kg,meshlambert_frag:Ng,meshmatcap_vert:Ug,meshmatcap_frag:Fg,meshnormal_vert:Og,meshnormal_frag:Bg,meshphong_vert:zg,meshphong_frag:Hg,meshphysical_vert:Gg,meshphysical_frag:Vg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:$g,points_frag:qg,shadow_vert:Kg,shadow_frag:Yg,sprite_vert:jg,sprite_frag:Zg},ht={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Vi={basic:{uniforms:ri([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:ri([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new pt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:ri([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:ri([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:ri([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new pt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:ri([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:ri([ht.points,ht.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:ri([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:ri([ht.common,ht.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:ri([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:ri([ht.sprite,ht.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:ri([ht.common,ht.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:ri([ht.lights,ht.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Vi.physical={uniforms:ri([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const ha={r:0,b:0,g:0},Wn=new Ai,Jg=new Kt;function Qg(o,t,e,i,n,s,a){const r=new pt(0);let l=s===!0?0:1,c,h,u=null,p=0,f=null;function d(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function _(b){let x=!1;const w=d(b);w===null?m(r,l):w&&w.isColor&&(m(w,1),x=!0);const C=o.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(o.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(b,x){const w=d(x);w&&(w.isCubeTexture||w.mapping===Ya)?(h===void 0&&(h=new Qt(new qi(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Gs(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Wn.copy(x.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(Wn)),h.material.toneMapped=ae.getTransfer(w.colorSpace)!==ve,(u!==w||p!==w.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=w,p=w.version,f=o.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Qt(new wi(2,2),new ni({name:"BackgroundMaterial",uniforms:Gs(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ae.getTransfer(w.colorSpace)!==ve,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||p!==w.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=w,p=w.version,f=o.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,x){b.getRGB(ha,cd(o)),i.buffers.color.setClear(ha.r,ha.g,ha.b,x,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(b,x=1){r.set(b),l=x,m(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(r,l)},render:_,addToRenderList:g,dispose:v}}function t_(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},n=p(null);let s=n,a=!1;function r(M,y,R,D,k){let F=!1;const z=u(D,R,y);s!==z&&(s=z,c(s.object)),F=f(M,D,R,k),F&&d(M,D,R,k),k!==null&&t.update(k,o.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,x(M,y,R,D),k!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return o.createVertexArray()}function c(M){return o.bindVertexArray(M)}function h(M){return o.deleteVertexArray(M)}function u(M,y,R){const D=R.wireframe===!0;let k=i[M.id];k===void 0&&(k={},i[M.id]=k);let F=k[y.id];F===void 0&&(F={},k[y.id]=F);let z=F[D];return z===void 0&&(z=p(l()),F[D]=z),z}function p(M){const y=[],R=[],D=[];for(let k=0;k<e;k++)y[k]=0,R[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:R,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,y,R,D){const k=s.attributes,F=y.attributes;let z=0;const $=R.getAttributes();for(const U in $)if($[U].location>=0){const Q=k[U];let xt=F[U];if(xt===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),Q===void 0||Q.attribute!==xt||xt&&Q.data!==xt.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function d(M,y,R,D){const k={},F=y.attributes;let z=0;const $=R.getAttributes();for(const U in $)if($[U].location>=0){let Q=F[U];Q===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const xt={};xt.attribute=Q,Q&&Q.data&&(xt.data=Q.data),k[U]=xt,z++}s.attributes=k,s.attributesNum=z,s.index=D}function _(){const M=s.newAttributes;for(let y=0,R=M.length;y<R;y++)M[y]=0}function g(M){m(M,0)}function m(M,y){const R=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;R[M]=1,D[M]===0&&(o.enableVertexAttribArray(M),D[M]=1),k[M]!==y&&(o.vertexAttribDivisor(M,y),k[M]=y)}function v(){const M=s.newAttributes,y=s.enabledAttributes;for(let R=0,D=y.length;R<D;R++)y[R]!==M[R]&&(o.disableVertexAttribArray(R),y[R]=0)}function b(M,y,R,D,k,F,z){z===!0?o.vertexAttribIPointer(M,y,R,k,F):o.vertexAttribPointer(M,y,R,D,k,F)}function x(M,y,R,D){_();const k=D.attributes,F=R.getAttributes(),z=y.defaultAttributeValues;for(const $ in F){const U=F[$];if(U.location>=0){let V=k[$];if(V===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){const Q=V.normalized,xt=V.itemSize,zt=t.get(V);if(zt===void 0)continue;const te=zt.buffer,re=zt.type,q=zt.bytesPerElement,lt=re===o.INT||re===o.UNSIGNED_INT||V.gpuType===ac;if(V.isInterleavedBufferAttribute){const ot=V.data,It=ot.stride,Dt=V.offset;if(ot.isInstancedInterleavedBuffer){for(let Lt=0;Lt<U.locationSize;Lt++)m(U.location+Lt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Lt=0;Lt<U.locationSize;Lt++)g(U.location+Lt);o.bindBuffer(o.ARRAY_BUFFER,te);for(let Lt=0;Lt<U.locationSize;Lt++)b(U.location+Lt,xt/U.locationSize,re,Q,It*q,(Dt+xt/U.locationSize*Lt)*q,lt)}else{if(V.isInstancedBufferAttribute){for(let ot=0;ot<U.locationSize;ot++)m(U.location+ot,V.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ot=0;ot<U.locationSize;ot++)g(U.location+ot);o.bindBuffer(o.ARRAY_BUFFER,te);for(let ot=0;ot<U.locationSize;ot++)b(U.location+ot,xt/U.locationSize,re,Q,xt*q,xt/U.locationSize*ot*q,lt)}}else if(z!==void 0){const Q=z[$];if(Q!==void 0)switch(Q.length){case 2:o.vertexAttrib2fv(U.location,Q);break;case 3:o.vertexAttrib3fv(U.location,Q);break;case 4:o.vertexAttrib4fv(U.location,Q);break;default:o.vertexAttrib1fv(U.location,Q)}}}}v()}function w(){A();for(const M in i){const y=i[M];for(const R in y){const D=y[R];for(const k in D)h(D[k].object),delete D[k];delete y[R]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const y=i[M.id];for(const R in y){const D=y[R];for(const k in D)h(D[k].object),delete D[k];delete y[R]}delete i[M.id]}function T(M){for(const y in i){const R=i[y];if(R[M.id]===void 0)continue;const D=R[M.id];for(const k in D)h(D[k].object),delete D[k];delete R[M.id]}}function A(){S(),a=!0,s!==n&&(s=n,c(s.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:r,reset:A,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function e_(o,t,e){let i;function n(c){i=c}function s(c,h){o.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(o.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function r(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let d=0;d<u;d++)f+=h[d];e.update(f,i,1)}function l(c,h,u,p){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<c.length;d++)a(c[d],h[d],p[d]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_]*p[_];e.update(d,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function i_(o,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==Ei&&i.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(T){const A=T===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ji&&i.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Di&&!A)}function l(T){if(T==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),d=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),m=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),b=o.getParameter(o.MAX_VARYING_VECTORS),x=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),w=d>0,C=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:w,maxSamples:C}}function n_(o){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Kn,r=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const f=u.length!==0||p||i!==0||n;return n=p,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,f){const d=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=o.get(u);if(!n||d===null||d.length===0||s&&!g)s?h(null):c();else{const v=s?0:i,b=v*4;let x=m.clippingState||null;l.value=x,x=h(d,p,b,f);for(let w=0;w!==b;++w)x[w]=e[w];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,p,f,d){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,d!==!0||g===null){const m=f+_*4,v=p.matrixWorldInverse;r.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,x=f;b!==_;++b,x+=4)a.copy(u[b]).applyMatrix4(v,r),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function s_(o){let t=new WeakMap;function e(a,r){return r===pl?a.mapping=Bs:r===ml&&(a.mapping=zs),a}function i(a){if(a&&a.isTexture){const r=a.mapping;if(r===pl||r===ml)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ep(l.height);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const r=a.target;r.removeEventListener("dispose",n);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Ps=4,Uh=[.125,.215,.35,.446,.526,.582],Zn=20,Fr=new ir,Fh=new pt;let Or=null,Br=0,zr=0,Hr=!1;const Yn=(1+Math.sqrt(5))/2,Ms=1/Yn,Oh=[new L(-Yn,Ms,0),new L(Yn,Ms,0),new L(-Ms,0,Yn),new L(Ms,0,Yn),new L(0,Yn,-Ms),new L(0,Yn,Ms),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],o_=new L;class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:r=o_}=s;Or=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,r),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Or,Br,zr),this._renderer.xr.enabled=Hr,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bs||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Or=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Sn,format:Ei,colorSpace:di,depthBuffer:!1},n=Bh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a_(s)),this._blurMaterial=r_(s,t,e)}return n}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,i,n,s){const l=new hi(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(Fh),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null));const _=new Ze({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),g=new Qt(new qi,_);let m=!1;const v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,m=!0):(_.color.copy(Fh),m=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));const w=this._cubeSize;ua(n,x*w,b>2?w:0,w,w),u.setRenderTarget(n),m&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=p,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Bs||t.mapping===zs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const l=this._cubeSize;ua(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Fr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Oh[(n-s-1)%Oh.length];this._blur(t,s-1,s,a,r)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qt(this._lodPlanes[n],c),p=c.uniforms,f=this._sizeLods[i]-1,d=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zn-1),_=s/d,g=isFinite(s)?1+Math.floor(h*_):Zn;g>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zn}`);const m=[];let v=0;for(let T=0;T<Zn;++T){const A=T/_,S=Math.exp(-A*A/2);m.push(S),T===0?v+=S:T<g&&(v+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=a==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:b}=this;p.dTheta.value=d,p.mipInt.value=b-i;const x=this._sizeLods[n],w=3*x*(n>b-Ps?n-b+Ps:0),C=4*(this._cubeSize-x);ua(e,w,C,3*x,2*x),l.setRenderTarget(e),l.render(u,Fr)}}function a_(o){const t=[],e=[],i=[];let n=o;const s=o-Ps+1+Uh.length;for(let a=0;a<s;a++){const r=Math.pow(2,n);e.push(r);let l=1/r;a>o-Ps?l=Uh[a-o+Ps-1]:a===0&&(l=0),i.push(l);const c=1/(r-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,d=6,_=3,g=2,m=1,v=new Float32Array(_*d*f),b=new Float32Array(g*d*f),x=new Float32Array(m*d*f);for(let C=0;C<f;C++){const T=C%3*2/3-1,A=C>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(S,_*d*C),b.set(p,g*d*C);const M=[C,C,C,C,C,C];x.set(M,m*d*C)}const w=new Be;w.setAttribute("position",new Fe(v,_)),w.setAttribute("uv",new Fe(b,g)),w.setAttribute("faceIndex",new Fe(x,m)),t.push(w),n>Ps&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Bh(o,t,e){const i=new Ni(o,t,e);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(o,t,e,i,n){o.viewport.set(t,e,i,n),o.scissor.set(t,e,i,n)}function r_(o,t,e){const i=new Float32Array(Zn),n=new L(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function zh(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Hh(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function l_(o){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const l=r.mapping,c=l===pl||l===ml,h=l===Bs||l===zs;if(c||h){let u=t.get(r);const p=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==p)return e===null&&(e=new $l(o)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new $l(o)),u=c?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",s),u.texture):null}}}return r}function n(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function c_(o){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Ls("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function h_(o,t,e,i){const n={},s=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const d in p.attributes)t.remove(p.attributes[d]);p.removeEventListener("dispose",a),delete n[p.id];const f=s.get(p);f&&(t.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(u,p){return n[p.id]===!0||(p.addEventListener("dispose",a),n[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const f in p)t.update(p[f],o.ARRAY_BUFFER)}function c(u){const p=[],f=u.index,d=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let b=0,x=v.length;b<x;b+=3){const w=v[b+0],C=v[b+1],T=v[b+2];p.push(w,C,C,T,T,w)}}else if(d!==void 0){const v=d.array;_=d.version;for(let b=0,x=v.length/3-1;b<x;b+=3){const w=b+0,C=b+1,T=b+2;p.push(w,C,C,T,T,w)}}else return;const g=new(nd(p)?ld:rd)(p,1);g.version=_;const m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){const p=s.get(u);if(p){const f=u.index;f!==null&&p.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function u_(o,t,e){let i;function n(p){i=p}let s,a;function r(p){s=p.type,a=p.bytesPerElement}function l(p,f){o.drawElements(i,f,s,p*a),e.update(f,i,1)}function c(p,f,d){d!==0&&(o.drawElementsInstanced(i,f,s,p*a,d),e.update(f,i,d))}function h(p,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,d);let g=0;for(let m=0;m<d;m++)g+=f[m];e.update(g,i,1)}function u(p,f,d,_){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<p.length;m++)c(p[m]/a,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,_,0,d);let m=0;for(let v=0;v<d;v++)m+=f[v]*_[v];e.update(m,i,1)}}this.setMode=n,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function d_(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(e.calls++,a){case o.TRIANGLES:e.triangles+=r*(s/3);break;case o.LINES:e.lines+=r*(s/2);break;case o.LINE_STRIP:e.lines+=r*(s-1);break;case o.LINE_LOOP:e.lines+=r*s;break;case o.POINTS:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function f_(o,t,e){const i=new WeakMap,n=new fe;function s(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let p=i.get(r);if(p===void 0||p.count!==u){let M=function(){A.dispose(),i.delete(r),r.removeEventListener("dispose",M)};var f=M;p!==void 0&&p.texture.dispose();const d=r.morphAttributes.position!==void 0,_=r.morphAttributes.normal!==void 0,g=r.morphAttributes.color!==void 0,m=r.morphAttributes.position||[],v=r.morphAttributes.normal||[],b=r.morphAttributes.color||[];let x=0;d===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let w=r.attributes.position.count*x,C=1;w>t.maxTextureSize&&(C=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*C*4*u),A=new sd(T,w,C,u);A.type=Di,A.needsUpdate=!0;const S=x*4;for(let y=0;y<u;y++){const R=m[y],D=v[y],k=b[y],F=w*C*4*y;for(let z=0;z<R.count;z++){const $=z*S;d===!0&&(n.fromBufferAttribute(R,z),T[F+$+0]=n.x,T[F+$+1]=n.y,T[F+$+2]=n.z,T[F+$+3]=0),_===!0&&(n.fromBufferAttribute(D,z),T[F+$+4]=n.x,T[F+$+5]=n.y,T[F+$+6]=n.z,T[F+$+7]=0),g===!0&&(n.fromBufferAttribute(k,z),T[F+$+8]=n.x,T[F+$+9]=n.y,T[F+$+10]=n.z,T[F+$+11]=k.itemSize===4?n.w:1)}}p={count:u,texture:A,size:new Nt(w,C)},i.set(r,p),r.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",a.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=r.morphTargetsRelative?1:1-d;l.getUniforms().setValue(o,"morphTargetBaseInfluence",_),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}return{update:s}}function p_(o,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),n.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return u}function a(){n=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const wd=new We,Gh=new gd(1,1),Ed=new sd,Ad=new hp,Rd=new ud,Vh=[],Wh=[],Xh=new Float32Array(16),$h=new Float32Array(9),qh=new Float32Array(4);function js(o,t,e){const i=o[0];if(i<=0||i>0)return o;const n=t*e;let s=Vh[n];if(s===void 0&&(s=new Float32Array(n),Vh[n]=s),t!==0){i.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function $e(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function qe(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function nr(o,t){let e=Wh[t];e===void 0&&(e=new Int32Array(t),Wh[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function m_(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function g_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;o.uniform2fv(this.addr,t),qe(e,t)}}function __(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;o.uniform3fv(this.addr,t),qe(e,t)}}function y_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;o.uniform4fv(this.addr,t),qe(e,t)}}function x_(o,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if($e(e,i))return;qh.set(i),o.uniformMatrix2fv(this.addr,!1,qh),qe(e,i)}}function v_(o,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if($e(e,i))return;$h.set(i),o.uniformMatrix3fv(this.addr,!1,$h),qe(e,i)}}function b_(o,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if($e(e,i))return;Xh.set(i),o.uniformMatrix4fv(this.addr,!1,Xh),qe(e,i)}}function M_(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function S_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;o.uniform2iv(this.addr,t),qe(e,t)}}function T_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;o.uniform3iv(this.addr,t),qe(e,t)}}function w_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;o.uniform4iv(this.addr,t),qe(e,t)}}function E_(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function A_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;o.uniform2uiv(this.addr,t),qe(e,t)}}function R_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;o.uniform3uiv(this.addr,t),qe(e,t)}}function C_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;o.uniform4uiv(this.addr,t),qe(e,t)}}function P_(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n);let s;this.type===o.SAMPLER_2D_SHADOW?(Gh.compareFunction=id,s=Gh):s=wd,e.setTexture2D(t||s,n)}function L_(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ad,n)}function I_(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Rd,n)}function D_(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ed,n)}function k_(o){switch(o){case 5126:return m_;case 35664:return g_;case 35665:return __;case 35666:return y_;case 35674:return x_;case 35675:return v_;case 35676:return b_;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return T_;case 35669:case 35673:return w_;case 5125:return E_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return D_}}function N_(o,t){o.uniform1fv(this.addr,t)}function U_(o,t){const e=js(t,this.size,2);o.uniform2fv(this.addr,e)}function F_(o,t){const e=js(t,this.size,3);o.uniform3fv(this.addr,e)}function O_(o,t){const e=js(t,this.size,4);o.uniform4fv(this.addr,e)}function B_(o,t){const e=js(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function z_(o,t){const e=js(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function H_(o,t){const e=js(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function G_(o,t){o.uniform1iv(this.addr,t)}function V_(o,t){o.uniform2iv(this.addr,t)}function W_(o,t){o.uniform3iv(this.addr,t)}function X_(o,t){o.uniform4iv(this.addr,t)}function $_(o,t){o.uniform1uiv(this.addr,t)}function q_(o,t){o.uniform2uiv(this.addr,t)}function K_(o,t){o.uniform3uiv(this.addr,t)}function Y_(o,t){o.uniform4uiv(this.addr,t)}function j_(o,t,e){const i=this.cache,n=t.length,s=nr(e,n);$e(i,s)||(o.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||wd,s[a])}function Z_(o,t,e){const i=this.cache,n=t.length,s=nr(e,n);$e(i,s)||(o.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Ad,s[a])}function J_(o,t,e){const i=this.cache,n=t.length,s=nr(e,n);$e(i,s)||(o.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Rd,s[a])}function Q_(o,t,e){const i=this.cache,n=t.length,s=nr(e,n);$e(i,s)||(o.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Ed,s[a])}function ty(o){switch(o){case 5126:return N_;case 35664:return U_;case 35665:return F_;case 35666:return O_;case 35674:return B_;case 35675:return z_;case 35676:return H_;case 5124:case 35670:return G_;case 35667:case 35671:return V_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return $_;case 36294:return q_;case 36295:return K_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Q_}}class ey{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=k_(e.type)}}class iy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ty(e.type)}}class ny{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const r=n[s];r.setValue(t,e[r.id],i)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function Kh(o,t){o.seq.push(t),o.map[t.id]=t}function sy(o,t,e){const i=o.name,n=i.length;for(Gr.lastIndex=0;;){const s=Gr.exec(i),a=Gr.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===n){Kh(e,c===void 0?new ey(r,o,t):new iy(r,o,t));break}else{let u=e.map[r];u===void 0&&(u=new ny(r),Kh(e,u)),e=u}}}class La{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);sy(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const r=e[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Yh(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}const oy=37297;let ay=0;function ry(o,t){const e=o.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const r=a+1;i.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return i.join(`
`)}const jh=new Xt;function ly(o){ae._getMatrix(jh,ae.workingColorSpace,o);const t=`mat3( ${jh.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(o)){case za:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Zh(o,t,e){const i=o.getShaderParameter(t,o.COMPILE_STATUS),s=(o.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+ry(o.getShaderSource(t),r)}else return s}function cy(o,t){const e=ly(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hy(o,t){let e;switch(t){case zu:e="Linear";break;case Hu:e="Reinhard";break;case Gu:e="Cineon";break;case Ka:e="ACESFilmic";break;case Wu:e="AgX";break;case Xu:e="Neutral";break;case Vu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const da=new L;function uy(){ae.getLuminanceCoefficients(da);const o=da.x.toFixed(4),t=da.y.toFixed(4),e=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dy(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function fy(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function py(o,t){const e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=o.getActiveAttrib(t,n),a=s.name;let r=1;s.type===o.FLOAT_MAT2&&(r=2),s.type===o.FLOAT_MAT3&&(r=3),s.type===o.FLOAT_MAT4&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function go(o){return o!==""}function Jh(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const my=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(o){return o.replace(my,_y)}const gy=new Map;function _y(o,t){let e=qt[t];if(e===void 0){const i=gy.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ql(e)}const yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(o){return o.replace(yy,xy)}function xy(o,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function eu(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vy(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Bu?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function by(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Bs:case zs:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function My(o){let t="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===zs&&(t="ENVMAP_MODE_REFRACTION"),t}function Sy(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case oc:t="ENVMAP_BLENDING_MULTIPLY";break;case Mf:t="ENVMAP_BLENDING_MIX";break;case Sf:t="ENVMAP_BLENDING_ADD";break}return t}function Ty(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function wy(o,t,e,i){const n=o.getContext(),s=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=vy(e),c=by(e),h=My(e),u=Sy(e),p=Ty(e),f=dy(e),d=fy(s),_=n.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(go).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(go).join(`
`),m.length>0&&(m+=`
`)):(g=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),m=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?qt.tonemapping_pars_fragment:"",e.toneMapping!==Un?hy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,cy("linearToOutputTexel",e.outputColorSpace),uy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(go).join(`
`)),a=ql(a),a=Jh(a,e),a=Qh(a,e),r=ql(r),r=Jh(r,e),r=Qh(r,e),a=tu(a),r=tu(r),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=v+g+a,x=v+m+r,w=Yh(n,n.VERTEX_SHADER,b),C=Yh(n,n.FRAGMENT_SHADER,x);n.attachShader(_,w),n.attachShader(_,C),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function T(y){if(o.debug.checkShaderErrors){const R=n.getProgramInfoLog(_)||"",D=n.getShaderInfoLog(w)||"",k=n.getShaderInfoLog(C)||"",F=R.trim(),z=D.trim(),$=k.trim();let U=!0,V=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(U=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(n,_,w,C);else{const Q=Zh(n,w,"vertex"),xt=Zh(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+F+`
`+Q+`
`+xt)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||$==="")&&(V=!1);V&&(y.diagnostics={runnable:U,programLog:F,vertexShader:{log:z,prefix:g},fragmentShader:{log:$,prefix:m}})}n.deleteShader(w),n.deleteShader(C),A=new La(n,_),S=py(n,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(_,oy)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ay++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let Ey=0;class Ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ry(t),e.set(t,i)),i}}class Ry{constructor(t){this.id=Ey++,this.code=t,this.usedTimes=0}}function Cy(o,t,e,i,n,s,a){const r=new od,l=new Ay,c=new Set,h=[],u=n.logarithmicDepthBuffer,p=n.vertexTextures;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,y,R,D){const k=R.fog,F=D.geometry,z=S.isMeshStandardMaterial?R.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),U=$&&$.mapping===Ya?$.image.height:null,V=d[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,xt=Q!==void 0?Q.length:0;let zt=0;F.morphAttributes.position!==void 0&&(zt=1),F.morphAttributes.normal!==void 0&&(zt=2),F.morphAttributes.color!==void 0&&(zt=3);let te,re,q,lt;if(V){const me=Vi[V];te=me.vertexShader,re=me.fragmentShader}else te=S.vertexShader,re=S.fragmentShader,l.update(S),q=l.getVertexShaderID(S),lt=l.getFragmentShaderID(S);const ot=o.getRenderTarget(),It=o.state.buffers.depth.getReversed(),Dt=D.isInstancedMesh===!0,Lt=D.isBatchedMesh===!0,se=!!S.map,ee=!!S.matcap,N=!!$,pe=!!S.aoMap,Et=!!S.lightMap,ie=!!S.bumpMap,Tt=!!S.normalMap,ut=!!S.displacementMap,et=!!S.emissiveMap,yt=!!S.metalnessMap,Yt=!!S.roughnessMap,Gt=S.anisotropy>0,I=S.clearcoat>0,E=S.dispersion>0,G=S.iridescence>0,Y=S.sheen>0,Z=S.transmission>0,K=Gt&&!!S.anisotropyMap,Ct=I&&!!S.clearcoatMap,at=I&&!!S.clearcoatNormalMap,wt=I&&!!S.clearcoatRoughnessMap,At=G&&!!S.iridescenceMap,nt=G&&!!S.iridescenceThicknessMap,gt=Y&&!!S.sheenColorMap,Bt=Y&&!!S.sheenRoughnessMap,Rt=!!S.specularMap,ft=!!S.specularColorMap,Wt=!!S.specularIntensityMap,O=Z&&!!S.transmissionMap,st=Z&&!!S.thicknessMap,rt=!!S.gradientMap,bt=!!S.alphaMap,tt=S.alphaTest>0,j=!!S.alphaHash,St=!!S.extensions;let Vt=Un;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Vt=o.toneMapping);const Ce={shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:re,defines:S.defines,customVertexShaderID:q,customFragmentShaderID:lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&D._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&D.instanceColor!==null,instancingMorph:Dt&&D.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:di,alphaToCoverage:!!S.alphaToCoverage,map:se,matcap:ee,envMap:N,envMapMode:N&&$.mapping,envMapCubeUVHeight:U,aoMap:pe,lightMap:Et,bumpMap:ie,normalMap:Tt,displacementMap:p&&ut,emissiveMap:et,normalMapObjectSpace:Tt&&S.normalMapType===If,normalMapTangentSpace:Tt&&S.normalMapType===pc,metalnessMap:yt,roughnessMap:Yt,anisotropy:Gt,anisotropyMap:K,clearcoat:I,clearcoatMap:Ct,clearcoatNormalMap:at,clearcoatRoughnessMap:wt,dispersion:E,iridescence:G,iridescenceMap:At,iridescenceThicknessMap:nt,sheen:Y,sheenColorMap:gt,sheenRoughnessMap:Bt,specularMap:Rt,specularColorMap:ft,specularIntensityMap:Wt,transmission:Z,transmissionMap:O,thicknessMap:st,gradientMap:rt,opaque:S.transparent===!1&&S.blending===ts&&S.alphaToCoverage===!1,alphaMap:bt,alphaTest:tt,alphaHash:j,combine:S.combine,mapUv:se&&_(S.map.channel),aoMapUv:pe&&_(S.aoMap.channel),lightMapUv:Et&&_(S.lightMap.channel),bumpMapUv:ie&&_(S.bumpMap.channel),normalMapUv:Tt&&_(S.normalMap.channel),displacementMapUv:ut&&_(S.displacementMap.channel),emissiveMapUv:et&&_(S.emissiveMap.channel),metalnessMapUv:yt&&_(S.metalnessMap.channel),roughnessMapUv:Yt&&_(S.roughnessMap.channel),anisotropyMapUv:K&&_(S.anisotropyMap.channel),clearcoatMapUv:Ct&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&_(S.sheenRoughnessMap.channel),specularMapUv:Rt&&_(S.specularMap.channel),specularColorMapUv:ft&&_(S.specularColorMap.channel),specularIntensityMapUv:Wt&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:st&&_(S.thicknessMap.channel),alphaMapUv:bt&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Tt||Gt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(se||bt),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:It,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&y.length>0,shadowMapType:o.shadowMap.type,toneMapping:Vt,decodeVideoTexture:se&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===ve,decodeVideoTextureEmissive:et&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===ve,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_e,flipSided:S.side===si,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:St&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&S.extensions.multiDraw===!0||Lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const y in S.defines)M.push(y),M.push(S.defines[y]);return S.isRawShaderMaterial===!1&&(v(M,S),b(M,S),M.push(o.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){r.disableAll(),M.supportsVertexTextures&&r.enable(0),M.instancing&&r.enable(1),M.instancingColor&&r.enable(2),M.instancingMorph&&r.enable(3),M.matcap&&r.enable(4),M.envMap&&r.enable(5),M.normalMapObjectSpace&&r.enable(6),M.normalMapTangentSpace&&r.enable(7),M.clearcoat&&r.enable(8),M.iridescence&&r.enable(9),M.alphaTest&&r.enable(10),M.vertexColors&&r.enable(11),M.vertexAlphas&&r.enable(12),M.vertexUv1s&&r.enable(13),M.vertexUv2s&&r.enable(14),M.vertexUv3s&&r.enable(15),M.vertexTangents&&r.enable(16),M.anisotropy&&r.enable(17),M.alphaHash&&r.enable(18),M.batching&&r.enable(19),M.dispersion&&r.enable(20),M.batchingColor&&r.enable(21),M.gradientMap&&r.enable(22),S.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reversedDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),S.push(r.mask)}function x(S){const M=d[S.type];let y;if(M){const R=Vi[M];y=Po.clone(R.uniforms)}else y=S.uniforms;return y}function w(S,M){let y;for(let R=0,D=h.length;R<D;R++){const k=h[R];if(k.cacheKey===M){y=k,++y.usedTimes;break}}return y===void 0&&(y=new wy(o,M,S,s),h.push(y)),y}function C(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:A}}function Py(){let o=new WeakMap;function t(a){return o.has(a)}function e(a){let r=o.get(a);return r===void 0&&(r={},o.set(a,r)),r}function i(a){o.delete(a)}function n(a,r,l){o.get(a)[r]=l}function s(){o=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Ly(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function iu(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function nu(){const o=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,p,f,d,_,g){let m=o[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:f,groupOrder:d,renderOrder:u.renderOrder,z:_,group:g},o[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=f,m.groupOrder=d,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function r(u,p,f,d,_,g){const m=a(u,p,f,d,_,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,p,f,d,_,g){const m=a(u,p,f,d,_,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,p){e.length>1&&e.sort(u||Ly),i.length>1&&i.sort(p||iu),n.length>1&&n.sort(p||iu)}function h(){for(let u=t,p=o.length;u<p;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:r,unshift:l,finish:h,sort:c}}function Iy(){let o=new WeakMap;function t(i,n){const s=o.get(i);let a;return s===void 0?(a=new nu,o.set(i,[a])):n>=s.length?(a=new nu,s.push(a)):a=s[n],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function Dy(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new pt};break;case"SpotLight":e={position:new L,direction:new L,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new L,halfWidth:new L,halfHeight:new L};break}return o[t.id]=e,e}}}function ky(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Ny=0;function Uy(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Fy(o){const t=new Dy,e=ky(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const n=new L,s=new Kt,a=new Kt;function r(c){let h=0,u=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,d=0,_=0,g=0,m=0,v=0,b=0,x=0,w=0,C=0,T=0;c.sort(Uy);for(let S=0,M=c.length;S<M;S++){const y=c[S],R=y.color,D=y.intensity,k=y.distance,F=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=R.r*D,u+=R.g*D,p+=R.b*D;else if(y.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(y.sh.coefficients[z],D);T++}else if(y.isDirectionalLight){const z=t.get(y);if(z.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const $=y.shadow,U=e.get(y);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,i.directionalShadow[f]=U,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=y.shadow.matrix,v++}i.directional[f]=z,f++}else if(y.isSpotLight){const z=t.get(y);z.position.setFromMatrixPosition(y.matrixWorld),z.color.copy(R).multiplyScalar(D),z.distance=k,z.coneCos=Math.cos(y.angle),z.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),z.decay=y.decay,i.spot[_]=z;const $=y.shadow;if(y.map&&(i.spotLightMap[w]=y.map,w++,$.updateMatrices(y),y.castShadow&&C++),i.spotLightMatrix[_]=$.matrix,y.castShadow){const U=e.get(y);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=F,x++}_++}else if(y.isRectAreaLight){const z=t.get(y);z.color.copy(R).multiplyScalar(D),z.halfWidth.set(y.width*.5,0,0),z.halfHeight.set(0,y.height*.5,0),i.rectArea[g]=z,g++}else if(y.isPointLight){const z=t.get(y);if(z.color.copy(y.color).multiplyScalar(y.intensity),z.distance=y.distance,z.decay=y.decay,y.castShadow){const $=y.shadow,U=e.get(y);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,U.shadowCameraNear=$.camera.near,U.shadowCameraFar=$.camera.far,i.pointShadow[d]=U,i.pointShadowMap[d]=F,i.pointShadowMatrix[d]=y.shadow.matrix,b++}i.point[d]=z,d++}else if(y.isHemisphereLight){const z=t.get(y);z.skyColor.copy(y.color).multiplyScalar(D),z.groundColor.copy(y.groundColor).multiplyScalar(D),i.hemi[m]=z,m++}}g>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;const A=i.hash;(A.directionalLength!==f||A.pointLength!==d||A.spotLength!==_||A.rectAreaLength!==g||A.hemiLength!==m||A.numDirectionalShadows!==v||A.numPointShadows!==b||A.numSpotShadows!==x||A.numSpotMaps!==w||A.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,A.directionalLength=f,A.pointLength=d,A.spotLength=_,A.rectAreaLength=g,A.hemiLength=m,A.numDirectionalShadows=v,A.numPointShadows=b,A.numSpotShadows=x,A.numSpotMaps=w,A.numLightProbes=T,i.version=Ny++)}function l(c,h){let u=0,p=0,f=0,d=0,_=0;const g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const b=c[m];if(b.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(g),u++}else if(b.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const x=i.rectArea[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),d++}else if(b.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),p++}else if(b.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:r,setupView:l,state:i}}function su(o){const t=new Fy(o),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:a}}function Oy(o){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let r;return a===void 0?(r=new su(o),t.set(n,[r])):s>=a.length?(r=new su(o),a.push(r)):r=a[s],r}function i(){t=new WeakMap}return{get:e,dispose:i}}const By=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hy(o,t,e){let i=new vc;const n=new Nt,s=new Nt,a=new fe,r=new Op({depthPacking:Lf}),l=new Bp,c={},h=e.maxTextureSize,u={[Yi]:si,[si]:Yi,[_e]:_e},p=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:By,fragmentShader:zy}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const d=new Be;d.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(d,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let m=this.type;this.render=function(C,T,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const S=o.getRenderTarget(),M=o.getActiveCubeFace(),y=o.getActiveMipmapLevel(),R=o.state;R.setBlending(bn),R.buffers.depth.getReversed()?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=m!==pn&&this.type===pn,k=m===pn&&this.type!==pn;for(let F=0,z=C.length;F<z;F++){const $=C[F],U=$.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;n.copy(U.mapSize);const V=U.getFrameExtents();if(n.multiply(V),s.copy(U.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/V.x),n.x=s.x*V.x,U.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/V.y),n.y=s.y*V.y,U.mapSize.y=s.y)),U.map===null||D===!0||k===!0){const xt=this.type!==pn?{minFilter:ui,magFilter:ui}:{};U.map!==null&&U.map.dispose(),U.map=new Ni(n.x,n.y,xt),U.map.texture.name=$.name+".shadowMap",U.camera.updateProjectionMatrix()}o.setRenderTarget(U.map),o.clear();const Q=U.getViewportCount();for(let xt=0;xt<Q;xt++){const zt=U.getViewport(xt);a.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),R.viewport(a),U.updateMatrices($,xt),i=U.getFrustum(),x(T,A,U.camera,$,this.type)}U.isPointLightShadow!==!0&&this.type===pn&&v(U,A),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,o.setRenderTarget(S,M,y)};function v(C,T){const A=t.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ni(n.x,n.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,o.setRenderTarget(C.mapPass),o.clear(),o.renderBufferDirect(T,null,A,p,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,o.setRenderTarget(C.map),o.clear(),o.renderBufferDirect(T,null,A,f,_,null)}function b(C,T,A,S){let M=null;const y=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)M=y;else if(M=A.isPointLight===!0?l:r,o.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const R=M.uuid,D=T.uuid;let k=c[R];k===void 0&&(k={},c[R]=k);let F=k[D];F===void 0&&(F=M.clone(),k[D]=F,T.addEventListener("dispose",w)),M=F}if(M.visible=T.visible,M.wireframe=T.wireframe,S===pn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const R=o.properties.get(M);R.light=A}return M}function x(C,T,A,S,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===pn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const D=t.update(C),k=C.material;if(Array.isArray(k)){const F=D.groups;for(let z=0,$=F.length;z<$;z++){const U=F[z],V=k[U.materialIndex];if(V&&V.visible){const Q=b(C,V,S,M);C.onBeforeShadow(o,C,T,A,D,Q,U),o.renderBufferDirect(A,null,D,Q,C,U),C.onAfterShadow(o,C,T,A,D,Q,U)}}}else if(k.visible){const F=b(C,k,S,M);C.onBeforeShadow(o,C,T,A,D,F,null),o.renderBufferDirect(A,null,D,F,C,null),C.onAfterShadow(o,C,T,A,D,F,null)}}const R=C.children;for(let D=0,k=R.length;D<k;D++)x(R[D],T,A,S,M)}function w(C){C.target.removeEventListener("dispose",w);for(const A in c){const S=c[A],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Gy={[rl]:ll,[cl]:dl,[hl]:fl,[Os]:ul,[ll]:rl,[dl]:cl,[fl]:hl,[ul]:Os};function Vy(o,t){function e(){let O=!1;const st=new fe;let rt=null;const bt=new fe(0,0,0,0);return{setMask:function(tt){rt!==tt&&!O&&(o.colorMask(tt,tt,tt,tt),rt=tt)},setLocked:function(tt){O=tt},setClear:function(tt,j,St,Vt,Ce){Ce===!0&&(tt*=Vt,j*=Vt,St*=Vt),st.set(tt,j,St,Vt),bt.equals(st)===!1&&(o.clearColor(tt,j,St,Vt),bt.copy(st))},reset:function(){O=!1,rt=null,bt.set(-1,0,0,0)}}}function i(){let O=!1,st=!1,rt=null,bt=null,tt=null;return{setReversed:function(j){if(st!==j){const St=t.get("EXT_clip_control");j?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),st=j;const Vt=tt;tt=null,this.setClear(Vt)}},getReversed:function(){return st},setTest:function(j){j?ot(o.DEPTH_TEST):It(o.DEPTH_TEST)},setMask:function(j){rt!==j&&!O&&(o.depthMask(j),rt=j)},setFunc:function(j){if(st&&(j=Gy[j]),bt!==j){switch(j){case rl:o.depthFunc(o.NEVER);break;case ll:o.depthFunc(o.ALWAYS);break;case cl:o.depthFunc(o.LESS);break;case Os:o.depthFunc(o.LEQUAL);break;case hl:o.depthFunc(o.EQUAL);break;case ul:o.depthFunc(o.GEQUAL);break;case dl:o.depthFunc(o.GREATER);break;case fl:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}bt=j}},setLocked:function(j){O=j},setClear:function(j){tt!==j&&(st&&(j=1-j),o.clearDepth(j),tt=j)},reset:function(){O=!1,rt=null,bt=null,tt=null,st=!1}}}function n(){let O=!1,st=null,rt=null,bt=null,tt=null,j=null,St=null,Vt=null,Ce=null;return{setTest:function(me){O||(me?ot(o.STENCIL_TEST):It(o.STENCIL_TEST))},setMask:function(me){st!==me&&!O&&(o.stencilMask(me),st=me)},setFunc:function(me,en,Oi){(rt!==me||bt!==en||tt!==Oi)&&(o.stencilFunc(me,en,Oi),rt=me,bt=en,tt=Oi)},setOp:function(me,en,Oi){(j!==me||St!==en||Vt!==Oi)&&(o.stencilOp(me,en,Oi),j=me,St=en,Vt=Oi)},setLocked:function(me){O=me},setClear:function(me){Ce!==me&&(o.clearStencil(me),Ce=me)},reset:function(){O=!1,st=null,rt=null,bt=null,tt=null,j=null,St=null,Vt=null,Ce=null}}}const s=new e,a=new i,r=new n,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,f=[],d=null,_=!1,g=null,m=null,v=null,b=null,x=null,w=null,C=null,T=new pt(0,0,0),A=0,S=!1,M=null,y=null,R=null,D=null,k=null;const F=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const U=o.getParameter(o.VERSION);U.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(U)[1]),z=$>=1):U.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),z=$>=2);let V=null,Q={};const xt=o.getParameter(o.SCISSOR_BOX),zt=o.getParameter(o.VIEWPORT),te=new fe().fromArray(xt),re=new fe().fromArray(zt);function q(O,st,rt,bt){const tt=new Uint8Array(4),j=o.createTexture();o.bindTexture(O,j),o.texParameteri(O,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(O,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let St=0;St<rt;St++)O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY?o.texImage3D(st,0,o.RGBA,1,1,bt,0,o.RGBA,o.UNSIGNED_BYTE,tt):o.texImage2D(st+St,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,tt);return j}const lt={};lt[o.TEXTURE_2D]=q(o.TEXTURE_2D,o.TEXTURE_2D,1),lt[o.TEXTURE_CUBE_MAP]=q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[o.TEXTURE_2D_ARRAY]=q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),lt[o.TEXTURE_3D]=q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),ot(o.DEPTH_TEST),a.setFunc(Os),ie(!1),Tt(qc),ot(o.CULL_FACE),pe(bn);function ot(O){h[O]!==!0&&(o.enable(O),h[O]=!0)}function It(O){h[O]!==!1&&(o.disable(O),h[O]=!1)}function Dt(O,st){return u[O]!==st?(o.bindFramebuffer(O,st),u[O]=st,O===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=st),O===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=st),!0):!1}function Lt(O,st){let rt=f,bt=!1;if(O){rt=p.get(st),rt===void 0&&(rt=[],p.set(st,rt));const tt=O.textures;if(rt.length!==tt.length||rt[0]!==o.COLOR_ATTACHMENT0){for(let j=0,St=tt.length;j<St;j++)rt[j]=o.COLOR_ATTACHMENT0+j;rt.length=tt.length,bt=!0}}else rt[0]!==o.BACK&&(rt[0]=o.BACK,bt=!0);bt&&o.drawBuffers(rt)}function se(O){return d!==O?(o.useProgram(O),d=O,!0):!1}const ee={[jn]:o.FUNC_ADD,[of]:o.FUNC_SUBTRACT,[af]:o.FUNC_REVERSE_SUBTRACT};ee[rf]=o.MIN,ee[lf]=o.MAX;const N={[cf]:o.ZERO,[hf]:o.ONE,[uf]:o.SRC_COLOR,[ol]:o.SRC_ALPHA,[_f]:o.SRC_ALPHA_SATURATE,[mf]:o.DST_COLOR,[ff]:o.DST_ALPHA,[df]:o.ONE_MINUS_SRC_COLOR,[al]:o.ONE_MINUS_SRC_ALPHA,[gf]:o.ONE_MINUS_DST_COLOR,[pf]:o.ONE_MINUS_DST_ALPHA,[yf]:o.CONSTANT_COLOR,[xf]:o.ONE_MINUS_CONSTANT_COLOR,[vf]:o.CONSTANT_ALPHA,[bf]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(O,st,rt,bt,tt,j,St,Vt,Ce,me){if(O===bn){_===!0&&(It(o.BLEND),_=!1);return}if(_===!1&&(ot(o.BLEND),_=!0),O!==sf){if(O!==g||me!==S){if((m!==jn||x!==jn)&&(o.blendEquation(o.FUNC_ADD),m=jn,x=jn),me)switch(O){case ts:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mo:o.blendFunc(o.ONE,o.ONE);break;case Kc:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yc:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ts:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,b=null,w=null,C=null,T.set(0,0,0),A=0,g=O,S=me}return}tt=tt||st,j=j||rt,St=St||bt,(st!==m||tt!==x)&&(o.blendEquationSeparate(ee[st],ee[tt]),m=st,x=tt),(rt!==v||bt!==b||j!==w||St!==C)&&(o.blendFuncSeparate(N[rt],N[bt],N[j],N[St]),v=rt,b=bt,w=j,C=St),(Vt.equals(T)===!1||Ce!==A)&&(o.blendColor(Vt.r,Vt.g,Vt.b,Ce),T.copy(Vt),A=Ce),g=O,S=!1}function Et(O,st){O.side===_e?It(o.CULL_FACE):ot(o.CULL_FACE);let rt=O.side===si;st&&(rt=!rt),ie(rt),O.blending===ts&&O.transparent===!1?pe(bn):pe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const bt=O.stencilWrite;r.setTest(bt),bt&&(r.setMask(O.stencilWriteMask),r.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),r.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),et(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):It(o.SAMPLE_ALPHA_TO_COVERAGE)}function ie(O){M!==O&&(O?o.frontFace(o.CW):o.frontFace(o.CCW),M=O)}function Tt(O){O!==ef?(ot(o.CULL_FACE),O!==y&&(O===qc?o.cullFace(o.BACK):O===nf?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):It(o.CULL_FACE),y=O}function ut(O){O!==R&&(z&&o.lineWidth(O),R=O)}function et(O,st,rt){O?(ot(o.POLYGON_OFFSET_FILL),(D!==st||k!==rt)&&(o.polygonOffset(st,rt),D=st,k=rt)):It(o.POLYGON_OFFSET_FILL)}function yt(O){O?ot(o.SCISSOR_TEST):It(o.SCISSOR_TEST)}function Yt(O){O===void 0&&(O=o.TEXTURE0+F-1),V!==O&&(o.activeTexture(O),V=O)}function Gt(O,st,rt){rt===void 0&&(V===null?rt=o.TEXTURE0+F-1:rt=V);let bt=Q[rt];bt===void 0&&(bt={type:void 0,texture:void 0},Q[rt]=bt),(bt.type!==O||bt.texture!==st)&&(V!==rt&&(o.activeTexture(rt),V=rt),o.bindTexture(O,st||lt[O]),bt.type=O,bt.texture=st)}function I(){const O=Q[V];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{o.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{o.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{o.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{o.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{o.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{o.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{o.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{o.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{o.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(O){te.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),te.copy(O))}function Bt(O){re.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Rt(O,st){let rt=c.get(st);rt===void 0&&(rt=new WeakMap,c.set(st,rt));let bt=rt.get(O);bt===void 0&&(bt=o.getUniformBlockIndex(st,O.name),rt.set(O,bt))}function ft(O,st){const bt=c.get(st).get(O);l.get(st)!==bt&&(o.uniformBlockBinding(st,bt,O.__bindingPointIndex),l.set(st,bt))}function Wt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),a.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},V=null,Q={},u={},p=new WeakMap,f=[],d=null,_=!1,g=null,m=null,v=null,b=null,x=null,w=null,C=null,T=new pt(0,0,0),A=0,S=!1,M=null,y=null,R=null,D=null,k=null,te.set(0,0,o.canvas.width,o.canvas.height),re.set(0,0,o.canvas.width,o.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:ot,disable:It,bindFramebuffer:Dt,drawBuffers:Lt,useProgram:se,setBlending:pe,setMaterial:Et,setFlipSided:ie,setCullFace:Tt,setLineWidth:ut,setPolygonOffset:et,setScissorTest:yt,activeTexture:Yt,bindTexture:Gt,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:At,texImage3D:nt,updateUBOMapping:Rt,uniformBlockBinding:ft,texStorage2D:at,texStorage3D:wt,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:K,compressedTexSubImage3D:Ct,scissor:gt,viewport:Bt,reset:Wt}}function Wy(o,t,e,i,n,s,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap;let u;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(I,E){return f?new OffscreenCanvas(I,E):Co("canvas")}function _(I,E,G){let Y=1;const Z=Gt(I);if((Z.width>G||Z.height>G)&&(Y=G/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const K=Math.floor(Y*Z.width),Ct=Math.floor(Y*Z.height);u===void 0&&(u=d(K,Ct));const at=E?d(K,Ct):u;return at.width=K,at.height=Ct,at.getContext("2d").drawImage(I,0,0,K,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+Ct+")."),at}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){o.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function b(I,E,G,Y,Z=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=E;if(E===o.RED&&(G===o.FLOAT&&(K=o.R32F),G===o.HALF_FLOAT&&(K=o.R16F),G===o.UNSIGNED_BYTE&&(K=o.R8)),E===o.RED_INTEGER&&(G===o.UNSIGNED_BYTE&&(K=o.R8UI),G===o.UNSIGNED_SHORT&&(K=o.R16UI),G===o.UNSIGNED_INT&&(K=o.R32UI),G===o.BYTE&&(K=o.R8I),G===o.SHORT&&(K=o.R16I),G===o.INT&&(K=o.R32I)),E===o.RG&&(G===o.FLOAT&&(K=o.RG32F),G===o.HALF_FLOAT&&(K=o.RG16F),G===o.UNSIGNED_BYTE&&(K=o.RG8)),E===o.RG_INTEGER&&(G===o.UNSIGNED_BYTE&&(K=o.RG8UI),G===o.UNSIGNED_SHORT&&(K=o.RG16UI),G===o.UNSIGNED_INT&&(K=o.RG32UI),G===o.BYTE&&(K=o.RG8I),G===o.SHORT&&(K=o.RG16I),G===o.INT&&(K=o.RG32I)),E===o.RGB_INTEGER&&(G===o.UNSIGNED_BYTE&&(K=o.RGB8UI),G===o.UNSIGNED_SHORT&&(K=o.RGB16UI),G===o.UNSIGNED_INT&&(K=o.RGB32UI),G===o.BYTE&&(K=o.RGB8I),G===o.SHORT&&(K=o.RGB16I),G===o.INT&&(K=o.RGB32I)),E===o.RGBA_INTEGER&&(G===o.UNSIGNED_BYTE&&(K=o.RGBA8UI),G===o.UNSIGNED_SHORT&&(K=o.RGBA16UI),G===o.UNSIGNED_INT&&(K=o.RGBA32UI),G===o.BYTE&&(K=o.RGBA8I),G===o.SHORT&&(K=o.RGBA16I),G===o.INT&&(K=o.RGBA32I)),E===o.RGB&&G===o.UNSIGNED_INT_5_9_9_9_REV&&(K=o.RGB9_E5),E===o.RGBA){const Ct=Z?za:ae.getTransfer(Y);G===o.FLOAT&&(K=o.RGBA32F),G===o.HALF_FLOAT&&(K=o.RGBA16F),G===o.UNSIGNED_BYTE&&(K=Ct===ve?o.SRGB8_ALPHA8:o.RGBA8),G===o.UNSIGNED_SHORT_4_4_4_4&&(K=o.RGBA4),G===o.UNSIGNED_SHORT_5_5_5_1&&(K=o.RGB5_A1)}return(K===o.R16F||K===o.R32F||K===o.RG16F||K===o.RG32F||K===o.RGBA16F||K===o.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(I,E){let G;return I?E===null||E===is||E===To?G=o.DEPTH24_STENCIL8:E===Di?G=o.DEPTH32F_STENCIL8:E===So&&(G=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===is||E===To?G=o.DEPTH_COMPONENT24:E===Di?G=o.DEPTH_COMPONENT32F:E===So&&(G=o.DEPTH_COMPONENT16),G}function w(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==ui&&I.minFilter!==yi?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function C(I){const E=I.target;E.removeEventListener("dispose",C),A(E),E.isVideoTexture&&h.delete(E)}function T(I){const E=I.target;E.removeEventListener("dispose",T),M(E)}function A(I){const E=i.get(I);if(E.__webglInit===void 0)return;const G=I.source,Y=p.get(G);if(Y){const Z=Y[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(I),Object.keys(Y).length===0&&p.delete(G)}i.remove(I)}function S(I){const E=i.get(I);o.deleteTexture(E.__webglTexture);const G=I.source,Y=p.get(G);delete Y[E.__cacheKey],a.memory.textures--}function M(I){const E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let Z=0;Z<E.__webglFramebuffer[Y].length;Z++)o.deleteFramebuffer(E.__webglFramebuffer[Y][Z]);else o.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)o.deleteFramebuffer(E.__webglFramebuffer[Y]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=I.textures;for(let Y=0,Z=G.length;Y<Z;Y++){const K=i.get(G[Y]);K.__webglTexture&&(o.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(G[Y])}i.remove(I)}let y=0;function R(){y=0}function D(){const I=y;return I>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),y+=1,I}function k(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function F(I,E){const G=i.get(I);if(I.isVideoTexture&&yt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){const Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(G,I,E);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,G.__webglTexture,o.TEXTURE0+E)}function z(I,E){const G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){lt(G,I,E);return}e.bindTexture(o.TEXTURE_2D_ARRAY,G.__webglTexture,o.TEXTURE0+E)}function $(I,E){const G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){lt(G,I,E);return}e.bindTexture(o.TEXTURE_3D,G.__webglTexture,o.TEXTURE0+E)}function U(I,E){const G=i.get(I);if(I.version>0&&G.__version!==I.version){ot(G,I,E);return}e.bindTexture(o.TEXTURE_CUBE_MAP,G.__webglTexture,o.TEXTURE0+E)}const V={[Mn]:o.REPEAT,[Wi]:o.CLAMP_TO_EDGE,[Oa]:o.MIRRORED_REPEAT},Q={[ui]:o.NEAREST,[qu]:o.NEAREST_MIPMAP_NEAREST,[mo]:o.NEAREST_MIPMAP_LINEAR,[yi]:o.LINEAR,[wa]:o.LINEAR_MIPMAP_NEAREST,[xn]:o.LINEAR_MIPMAP_LINEAR},xt={[Df]:o.NEVER,[Bf]:o.ALWAYS,[kf]:o.LESS,[id]:o.LEQUAL,[Nf]:o.EQUAL,[Of]:o.GEQUAL,[Uf]:o.GREATER,[Ff]:o.NOTEQUAL};function zt(I,E){if(E.type===Di&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===yi||E.magFilter===wa||E.magFilter===mo||E.magFilter===xn||E.minFilter===yi||E.minFilter===wa||E.minFilter===mo||E.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,V[E.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,V[E.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,V[E.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,Q[E.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,xt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ui||E.minFilter!==mo&&E.minFilter!==xn||E.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function te(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",C));const Y=E.source;let Z=p.get(Y);Z===void 0&&(Z={},p.set(Y,Z));const K=k(E);if(K!==I.__cacheKey){Z[K]===void 0&&(Z[K]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Z[K].usedTimes++;const Ct=Z[I.__cacheKey];Ct!==void 0&&(Z[I.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(E)),I.__cacheKey=K,I.__webglTexture=Z[K].texture}return G}function re(I,E,G){return Math.floor(Math.floor(I/G)/E)}function q(I,E,G,Y){const K=I.updateRanges;if(K.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,G,Y,E.data);else{K.sort((nt,gt)=>nt.start-gt.start);let Ct=0;for(let nt=1;nt<K.length;nt++){const gt=K[Ct],Bt=K[nt],Rt=gt.start+gt.count,ft=re(Bt.start,E.width,4),Wt=re(gt.start,E.width,4);Bt.start<=Rt+1&&ft===Wt&&re(Bt.start+Bt.count-1,E.width,4)===ft?gt.count=Math.max(gt.count,Bt.start+Bt.count-gt.start):(++Ct,K[Ct]=Bt)}K.length=Ct+1;const at=o.getParameter(o.UNPACK_ROW_LENGTH),wt=o.getParameter(o.UNPACK_SKIP_PIXELS),At=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let nt=0,gt=K.length;nt<gt;nt++){const Bt=K[nt],Rt=Math.floor(Bt.start/4),ft=Math.ceil(Bt.count/4),Wt=Rt%E.width,O=Math.floor(Rt/E.width),st=ft,rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,O),e.texSubImage2D(o.TEXTURE_2D,0,Wt,O,st,rt,G,Y,E.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,at),o.pixelStorei(o.UNPACK_SKIP_PIXELS,wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,At)}}function lt(I,E,G){let Y=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=o.TEXTURE_3D);const Z=te(I,E),K=E.source;e.bindTexture(Y,I.__webglTexture,o.TEXTURE0+G);const Ct=i.get(K);if(K.version!==Ct.__version||Z===!0){e.activeTexture(o.TEXTURE0+G);const at=ae.getPrimaries(ae.workingColorSpace),wt=E.colorSpace===_n?null:ae.getPrimaries(E.colorSpace),At=E.colorSpace===_n||at===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let nt=_(E.image,!1,n.maxTextureSize);nt=Yt(E,nt);const gt=s.convert(E.format,E.colorSpace),Bt=s.convert(E.type);let Rt=b(E.internalFormat,gt,Bt,E.colorSpace,E.isVideoTexture);zt(Y,E);let ft;const Wt=E.mipmaps,O=E.isVideoTexture!==!0,st=Ct.__version===void 0||Z===!0,rt=K.dataReady,bt=w(E,nt);if(E.isDepthTexture)Rt=x(E.format===Eo,E.type),st&&(O?e.texStorage2D(o.TEXTURE_2D,1,Rt,nt.width,nt.height):e.texImage2D(o.TEXTURE_2D,0,Rt,nt.width,nt.height,0,gt,Bt,null));else if(E.isDataTexture)if(Wt.length>0){O&&st&&e.texStorage2D(o.TEXTURE_2D,bt,Rt,Wt[0].width,Wt[0].height);for(let tt=0,j=Wt.length;tt<j;tt++)ft=Wt[tt],O?rt&&e.texSubImage2D(o.TEXTURE_2D,tt,0,0,ft.width,ft.height,gt,Bt,ft.data):e.texImage2D(o.TEXTURE_2D,tt,Rt,ft.width,ft.height,0,gt,Bt,ft.data);E.generateMipmaps=!1}else O?(st&&e.texStorage2D(o.TEXTURE_2D,bt,Rt,nt.width,nt.height),rt&&q(E,nt,gt,Bt)):e.texImage2D(o.TEXTURE_2D,0,Rt,nt.width,nt.height,0,gt,Bt,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&st&&e.texStorage3D(o.TEXTURE_2D_ARRAY,bt,Rt,Wt[0].width,Wt[0].height,nt.depth);for(let tt=0,j=Wt.length;tt<j;tt++)if(ft=Wt[tt],E.format!==Ei)if(gt!==null)if(O){if(rt)if(E.layerUpdates.size>0){const St=Nh(ft.width,ft.height,E.format,E.type);for(const Vt of E.layerUpdates){const Ce=ft.data.subarray(Vt*St/ft.data.BYTES_PER_ELEMENT,(Vt+1)*St/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,Vt,ft.width,ft.height,1,gt,Ce)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,nt.depth,gt,ft.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,tt,Rt,ft.width,ft.height,nt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?rt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,nt.depth,gt,Bt,ft.data):e.texImage3D(o.TEXTURE_2D_ARRAY,tt,Rt,ft.width,ft.height,nt.depth,0,gt,Bt,ft.data)}else{O&&st&&e.texStorage2D(o.TEXTURE_2D,bt,Rt,Wt[0].width,Wt[0].height);for(let tt=0,j=Wt.length;tt<j;tt++)ft=Wt[tt],E.format!==Ei?gt!==null?O?rt&&e.compressedTexSubImage2D(o.TEXTURE_2D,tt,0,0,ft.width,ft.height,gt,ft.data):e.compressedTexImage2D(o.TEXTURE_2D,tt,Rt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?rt&&e.texSubImage2D(o.TEXTURE_2D,tt,0,0,ft.width,ft.height,gt,Bt,ft.data):e.texImage2D(o.TEXTURE_2D,tt,Rt,ft.width,ft.height,0,gt,Bt,ft.data)}else if(E.isDataArrayTexture)if(O){if(st&&e.texStorage3D(o.TEXTURE_2D_ARRAY,bt,Rt,nt.width,nt.height,nt.depth),rt)if(E.layerUpdates.size>0){const tt=Nh(nt.width,nt.height,E.format,E.type);for(const j of E.layerUpdates){const St=nt.data.subarray(j*tt/nt.data.BYTES_PER_ELEMENT,(j+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,gt,Bt,St)}E.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Bt,nt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Rt,nt.width,nt.height,nt.depth,0,gt,Bt,nt.data);else if(E.isData3DTexture)O?(st&&e.texStorage3D(o.TEXTURE_3D,bt,Rt,nt.width,nt.height,nt.depth),rt&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Bt,nt.data)):e.texImage3D(o.TEXTURE_3D,0,Rt,nt.width,nt.height,nt.depth,0,gt,Bt,nt.data);else if(E.isFramebufferTexture){if(st)if(O)e.texStorage2D(o.TEXTURE_2D,bt,Rt,nt.width,nt.height);else{let tt=nt.width,j=nt.height;for(let St=0;St<bt;St++)e.texImage2D(o.TEXTURE_2D,St,Rt,tt,j,0,gt,Bt,null),tt>>=1,j>>=1}}else if(Wt.length>0){if(O&&st){const tt=Gt(Wt[0]);e.texStorage2D(o.TEXTURE_2D,bt,Rt,tt.width,tt.height)}for(let tt=0,j=Wt.length;tt<j;tt++)ft=Wt[tt],O?rt&&e.texSubImage2D(o.TEXTURE_2D,tt,0,0,gt,Bt,ft):e.texImage2D(o.TEXTURE_2D,tt,Rt,gt,Bt,ft);E.generateMipmaps=!1}else if(O){if(st){const tt=Gt(nt);e.texStorage2D(o.TEXTURE_2D,bt,Rt,tt.width,tt.height)}rt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,gt,Bt,nt)}else e.texImage2D(o.TEXTURE_2D,0,Rt,gt,Bt,nt);g(E)&&m(Y),Ct.__version=K.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ot(I,E,G){if(E.image.length!==6)return;const Y=te(I,E),Z=E.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+G);const K=i.get(Z);if(Z.version!==K.__version||Y===!0){e.activeTexture(o.TEXTURE0+G);const Ct=ae.getPrimaries(ae.workingColorSpace),at=E.colorSpace===_n?null:ae.getPrimaries(E.colorSpace),wt=E.colorSpace===_n||Ct===at?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const At=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,gt=[];for(let j=0;j<6;j++)!At&&!nt?gt[j]=_(E.image[j],!0,n.maxCubemapSize):gt[j]=nt?E.image[j].image:E.image[j],gt[j]=Yt(E,gt[j]);const Bt=gt[0],Rt=s.convert(E.format,E.colorSpace),ft=s.convert(E.type),Wt=b(E.internalFormat,Rt,ft,E.colorSpace),O=E.isVideoTexture!==!0,st=K.__version===void 0||Y===!0,rt=Z.dataReady;let bt=w(E,Bt);zt(o.TEXTURE_CUBE_MAP,E);let tt;if(At){O&&st&&e.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Wt,Bt.width,Bt.height);for(let j=0;j<6;j++){tt=gt[j].mipmaps;for(let St=0;St<tt.length;St++){const Vt=tt[St];E.format!==Ei?Rt!==null?O?rt&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,Vt.width,Vt.height,Rt,Vt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,Wt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?rt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,Vt.width,Vt.height,Rt,ft,Vt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,Wt,Vt.width,Vt.height,0,Rt,ft,Vt.data)}}}else{if(tt=E.mipmaps,O&&st){tt.length>0&&bt++;const j=Gt(gt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Wt,j.width,j.height)}for(let j=0;j<6;j++)if(nt){O?rt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,gt[j].width,gt[j].height,Rt,ft,gt[j].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Wt,gt[j].width,gt[j].height,0,Rt,ft,gt[j].data);for(let St=0;St<tt.length;St++){const Ce=tt[St].image[j].image;O?rt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,Ce.width,Ce.height,Rt,ft,Ce.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,Wt,Ce.width,Ce.height,0,Rt,ft,Ce.data)}}else{O?rt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,ft,gt[j]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Wt,Rt,ft,gt[j]);for(let St=0;St<tt.length;St++){const Vt=tt[St];O?rt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,Rt,ft,Vt.image[j]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,Wt,Rt,ft,Vt.image[j])}}}g(E)&&m(o.TEXTURE_CUBE_MAP),K.__version=Z.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function It(I,E,G,Y,Z,K){const Ct=s.convert(G.format,G.colorSpace),at=s.convert(G.type),wt=b(G.internalFormat,Ct,at,G.colorSpace),At=i.get(E),nt=i.get(G);if(nt.__renderTarget=E,!At.__hasExternalTextures){const gt=Math.max(1,E.width>>K),Bt=Math.max(1,E.height>>K);Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?e.texImage3D(Z,K,wt,gt,Bt,E.depth,0,Ct,at,null):e.texImage2D(Z,K,wt,gt,Bt,0,Ct,at,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),et(E)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Y,Z,nt.__webglTexture,0,ut(E)):(Z===o.TEXTURE_2D||Z>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Y,Z,nt.__webglTexture,K),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(I,E,G){if(o.bindRenderbuffer(o.RENDERBUFFER,I),E.depthBuffer){const Y=E.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,K=x(E.stencilBuffer,Z),Ct=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,at=ut(E);et(E)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,at,K,E.width,E.height):G?o.renderbufferStorageMultisample(o.RENDERBUFFER,at,K,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,K,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ct,o.RENDERBUFFER,I)}else{const Y=E.textures;for(let Z=0;Z<Y.length;Z++){const K=Y[Z],Ct=s.convert(K.format,K.colorSpace),at=s.convert(K.type),wt=b(K.internalFormat,Ct,at,K.colorSpace),At=ut(E);G&&et(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,wt,E.width,E.height):et(E)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,wt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,wt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Lt(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const Z=Y.__webglTexture,K=ut(E);if(E.depthTexture.format===wo)et(E)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Z,0,K):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Z,0);else if(E.depthTexture.format===Eo)et(E)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Z,0,K):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function se(I){const E=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=Y}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=I.texture.mipmaps;Y&&Y.length>0?Lt(E.__webglFramebuffer[0],I):Lt(E.__webglFramebuffer,I)}else if(G){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=o.createRenderbuffer(),Dt(E.__webglDepthbuffer[Y],I,!1);else{const Z=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Y];o.bindRenderbuffer(o.RENDERBUFFER,K),o.framebufferRenderbuffer(o.FRAMEBUFFER,Z,o.RENDERBUFFER,K)}}else{const Y=I.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Dt(E.__webglDepthbuffer,I,!1);else{const Z=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,K),o.framebufferRenderbuffer(o.FRAMEBUFFER,Z,o.RENDERBUFFER,K)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(I,E,G){const Y=i.get(I);E!==void 0&&It(Y.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),G!==void 0&&se(I)}function N(I){const E=I.texture,G=i.get(I),Y=i.get(E);I.addEventListener("dispose",T);const Z=I.textures,K=I.isWebGLCubeRenderTarget===!0,Ct=Z.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=o.createTexture()),Y.__version=E.version,a.memory.textures++),K){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let wt=0;wt<E.mipmaps.length;wt++)G.__webglFramebuffer[at][wt]=o.createFramebuffer()}else G.__webglFramebuffer[at]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)G.__webglFramebuffer[at]=o.createFramebuffer()}else G.__webglFramebuffer=o.createFramebuffer();if(Ct)for(let at=0,wt=Z.length;at<wt;at++){const At=i.get(Z[at]);At.__webglTexture===void 0&&(At.__webglTexture=o.createTexture(),a.memory.textures++)}if(I.samples>0&&et(I)===!1){G.__webglMultisampledFramebuffer=o.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const wt=Z[at];G.__webglColorRenderbuffer[at]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,G.__webglColorRenderbuffer[at]);const At=s.convert(wt.format,wt.colorSpace),nt=s.convert(wt.type),gt=b(wt.internalFormat,At,nt,wt.colorSpace,I.isXRRenderTarget===!0),Bt=ut(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,gt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+at,o.RENDERBUFFER,G.__webglColorRenderbuffer[at])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(K){e.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(o.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let wt=0;wt<E.mipmaps.length;wt++)It(G.__webglFramebuffer[at][wt],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt);else It(G.__webglFramebuffer[at],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(E)&&m(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let at=0,wt=Z.length;at<wt;at++){const At=Z[at],nt=i.get(At);let gt=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(gt,nt.__webglTexture),zt(gt,At),It(G.__webglFramebuffer,I,At,o.COLOR_ATTACHMENT0+at,gt,0),g(At)&&m(gt)}e.unbindTexture()}else{let at=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),zt(at,E),E.mipmaps&&E.mipmaps.length>0)for(let wt=0;wt<E.mipmaps.length;wt++)It(G.__webglFramebuffer[wt],I,E,o.COLOR_ATTACHMENT0,at,wt);else It(G.__webglFramebuffer,I,E,o.COLOR_ATTACHMENT0,at,0);g(E)&&m(at),e.unbindTexture()}I.depthBuffer&&se(I)}function pe(I){const E=I.textures;for(let G=0,Y=E.length;G<Y;G++){const Z=E[G];if(g(Z)){const K=v(I),Ct=i.get(Z).__webglTexture;e.bindTexture(K,Ct),m(K),e.unbindTexture()}}}const Et=[],ie=[];function Tt(I){if(I.samples>0){if(et(I)===!1){const E=I.textures,G=I.width,Y=I.height;let Z=o.COLOR_BUFFER_BIT;const K=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=i.get(I),at=E.length>1;if(at)for(let At=0;At<E.length;At++)e.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const wt=I.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let At=0;At<E.length;At++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=o.STENCIL_BUFFER_BIT)),at){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const nt=i.get(E[At]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,nt,0)}o.blitFramebuffer(0,0,G,Y,0,0,G,Y,Z,o.NEAREST),l===!0&&(Et.length=0,ie.length=0,Et.push(o.COLOR_ATTACHMENT0+At),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Et.push(K),ie.push(K),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ie)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),at)for(let At=0;At<E.length;At++){e.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const nt=i.get(E[At]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,nt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const E=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ut(I){return Math.min(n.maxSamples,I.samples)}function et(I){const E=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(I){const E=a.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Yt(I,E){const G=I.colorSpace,Y=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==di&&G!==_n&&(ae.getTransfer(G)===ve?(Y!==Ei||Z!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Gt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=U,this.rebindTextures=ee,this.setupRenderTarget=N,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=It,this.useMultisampledRTT=et}function Xy(o,t){function e(i,n=_n){let s;const a=ae.getTransfer(n);if(i===ji)return o.UNSIGNED_BYTE;if(i===rc)return o.UNSIGNED_SHORT_4_4_4_4;if(i===lc)return o.UNSIGNED_SHORT_5_5_5_1;if(i===ju)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===Ku)return o.BYTE;if(i===Yu)return o.SHORT;if(i===So)return o.UNSIGNED_SHORT;if(i===ac)return o.INT;if(i===is)return o.UNSIGNED_INT;if(i===Di)return o.FLOAT;if(i===Sn)return o.HALF_FLOAT;if(i===Zu)return o.ALPHA;if(i===Ju)return o.RGB;if(i===Ei)return o.RGBA;if(i===wo)return o.DEPTH_COMPONENT;if(i===Eo)return o.DEPTH_STENCIL;if(i===cc)return o.RED;if(i===hc)return o.RED_INTEGER;if(i===Qu)return o.RG;if(i===uc)return o.RG_INTEGER;if(i===dc)return o.RGBA_INTEGER;if(i===Ea||i===Aa||i===Ra||i===Ca)if(a===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gl||i===_l||i===yl||i===xl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===bl||i===Ml)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vl||i===bl)return a===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ml)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sl||i===Tl||i===wl||i===El||i===Al||i===Rl||i===Cl||i===Pl||i===Ll||i===Il||i===Dl||i===kl||i===Nl||i===Ul)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sl)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tl)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wl)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ll)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kl)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nl)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ul)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===Fl||i===Ol)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Pa)return a===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===td||i===Bl||i===zl||i===Hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:e}}class Cd extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const $y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
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

}`;class Ky{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Cd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ni({vertexShader:$y,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yy extends os{constructor(t,e){super();const i=this;let n=null,s=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,p=null,f=null,d=null;const _=new Ky,g={},m=e.getContextAttributes();let v=null,b=null;const x=[],w=[],C=new Nt;let T=null;const A=new hi;A.viewport=new fe;const S=new hi;S.viewport=new fe;const M=[A,S],y=new nm;let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let lt=x[q];return lt===void 0&&(lt=new Cr,x[q]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(q){let lt=x[q];return lt===void 0&&(lt=new Cr,x[q]=lt),lt.getGripSpace()},this.getHand=function(q){let lt=x[q];return lt===void 0&&(lt=new Cr,x[q]=lt),lt.getHandSpace()};function k(q){const lt=w.indexOf(q.inputSource);if(lt===-1)return;const ot=x[lt];ot!==void 0&&(ot.update(q.inputSource,q.frame,c||a),ot.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",z);for(let q=0;q<x.length;q++){const lt=w[q];lt!==null&&(w[q]=null,x[q].disconnect(lt))}R=null,D=null,_.reset();for(const q in g)delete g[q];t.setRenderTarget(v),f=null,p=null,u=null,n=null,b=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(v=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",F),n.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(n,e)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,It=null,Dt=null;m.depth&&(Dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Eo:wo,It=m.stencil?To:is);const Lt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:s};p=u.createProjectionLayer(Lt),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Ni(p.textureWidth,p.textureHeight,{format:Ei,type:ji,depthTexture:new gd(p.textureWidth,p.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,ot),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ni(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:ji,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(r),re.setContext(n),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(q){for(let lt=0;lt<q.removed.length;lt++){const ot=q.removed[lt],It=w.indexOf(ot);It>=0&&(w[It]=null,x[It].disconnect(ot))}for(let lt=0;lt<q.added.length;lt++){const ot=q.added[lt];let It=w.indexOf(ot);if(It===-1){for(let Lt=0;Lt<x.length;Lt++)if(Lt>=w.length){w.push(ot),It=Lt;break}else if(w[Lt]===null){w[Lt]=ot,It=Lt;break}if(It===-1)break}const Dt=x[It];Dt&&Dt.connect(ot)}}const $=new L,U=new L;function V(q,lt,ot){$.setFromMatrixPosition(lt.matrixWorld),U.setFromMatrixPosition(ot.matrixWorld);const It=$.distanceTo(U),Dt=lt.projectionMatrix.elements,Lt=ot.projectionMatrix.elements,se=Dt[14]/(Dt[10]-1),ee=Dt[14]/(Dt[10]+1),N=(Dt[9]+1)/Dt[5],pe=(Dt[9]-1)/Dt[5],Et=(Dt[8]-1)/Dt[0],ie=(Lt[8]+1)/Lt[0],Tt=se*Et,ut=se*ie,et=It/(-Et+ie),yt=et*-Et;if(lt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(yt),q.translateZ(et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Dt[10]===-1)q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Yt=se+et,Gt=ee+et,I=Tt-yt,E=ut+(It-yt),G=N*ee/Gt*Yt,Y=pe*ee/Gt*Yt;q.projectionMatrix.makePerspective(I,E,G,Y,Yt,Gt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,lt){lt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(lt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let lt=q.near,ot=q.far;_.texture!==null&&(_.depthNear>0&&(lt=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),y.near=S.near=A.near=lt,y.far=S.far=A.far=ot,(R!==y.near||D!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,D=y.far),y.layers.mask=q.layers.mask|6,A.layers.mask=y.layers.mask&3,S.layers.mask=y.layers.mask&5;const It=q.parent,Dt=y.cameras;Q(y,It);for(let Lt=0;Lt<Dt.length;Lt++)Q(Dt[Lt],It);Dt.length===2?V(y,A,S):y.projectionMatrix.copy(A.projectionMatrix),xt(q,y,It)};function xt(q,lt,ot){ot===null?q.matrix.copy(lt.matrixWorld):(q.matrix.copy(ot.matrixWorld),q.matrix.invert(),q.matrix.multiply(lt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)},this.getCameraTexture=function(q){return g[q]};let zt=null;function te(q,lt){if(h=lt.getViewerPose(c||a),d=lt,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let It=!1;ot.length!==y.cameras.length&&(y.cameras.length=0,It=!0);for(let ee=0;ee<ot.length;ee++){const N=ot[ee];let pe=null;if(f!==null)pe=f.getViewport(N);else{const ie=u.getViewSubImage(p,N);pe=ie.viewport,ee===0&&(t.setRenderTargetTextures(b,ie.colorTexture,ie.depthStencilTexture),t.setRenderTarget(b))}let Et=M[ee];Et===void 0&&(Et=new hi,Et.layers.enable(ee),Et.viewport=new fe,M[ee]=Et),Et.matrix.fromArray(N.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(N.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(pe.x,pe.y,pe.width,pe.height),ee===0&&(y.matrix.copy(Et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),It===!0&&y.cameras.push(Et)}const Dt=n.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&u){const ee=u.getDepthInformation(ot[0]);ee&&ee.isValid&&ee.texture&&_.init(ee,n.renderState)}if(Dt&&Dt.includes("camera-access")&&(t.state.unbindTexture(),u))for(let ee=0;ee<ot.length;ee++){const N=ot[ee].camera;if(N){let pe=g[N];pe||(pe=new Cd,g[N]=pe);const Et=u.getCameraImage(N);pe.sourceTexture=Et}}}for(let ot=0;ot<x.length;ot++){const It=w[ot],Dt=x[ot];It!==null&&Dt!==void 0&&Dt.update(It,lt,c||a)}zt&&zt(q,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),d=null}const re=new Td;re.setAnimationLoop(te),this.setAnimationLoop=function(q){zt=q},this.dispose=function(){}}}const Xn=new Ai,jy=new Kt;function Zy(o,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,cd(o)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,v,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),p(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),d(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&r(g,m)):m.isPointsMaterial?l(g,m,v,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===si&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===si&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),b=v.envMap,x=v.envMapRotation;b&&(g.envMap.value=b,Xn.copy(x),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),g.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(Xn)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function r(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===si&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Jy(o,t,e,i){let n={},s={},a=[];const r=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const x=b.program;i.uniformBlockBinding(v,x)}function c(v,b){let x=n[v.id];x===void 0&&(d(v),x=h(v),n[v.id]=x,v.addEventListener("dispose",g));const w=b.program;i.updateUBOMapping(v,w);const C=t.render.frame;s[v.id]!==C&&(p(v),s[v.id]=C)}function h(v){const b=u();v.__bindingPointIndex=b;const x=o.createBuffer(),w=v.__size,C=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,x),o.bufferData(o.UNIFORM_BUFFER,w,C),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,b,x),x}function u(){for(let v=0;v<r;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const b=n[v.id],x=v.uniforms,w=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,b);for(let C=0,T=x.length;C<T;C++){const A=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,M=A.length;S<M;S++){const y=A[S];if(f(y,C,S,w)===!0){const R=y.__offset,D=Array.isArray(y.value)?y.value:[y.value];let k=0;for(let F=0;F<D.length;F++){const z=D[F],$=_(z);typeof z=="number"||typeof z=="boolean"?(y.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,R+k,y.__data)):z.isMatrix3?(y.__data[0]=z.elements[0],y.__data[1]=z.elements[1],y.__data[2]=z.elements[2],y.__data[3]=0,y.__data[4]=z.elements[3],y.__data[5]=z.elements[4],y.__data[6]=z.elements[5],y.__data[7]=0,y.__data[8]=z.elements[6],y.__data[9]=z.elements[7],y.__data[10]=z.elements[8],y.__data[11]=0):(z.toArray(y.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,R,y.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,b,x,w){const C=v.value,T=b+"_"+x;if(w[T]===void 0)return typeof C=="number"||typeof C=="boolean"?w[T]=C:w[T]=C.clone(),!0;{const A=w[T];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return w[T]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function d(v){const b=v.uniforms;let x=0;const w=16;for(let T=0,A=b.length;T<A;T++){const S=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,y=S.length;M<y;M++){const R=S[M],D=Array.isArray(R.value)?R.value:[R.value];for(let k=0,F=D.length;k<F;k++){const z=D[k],$=_(z),U=x%w,V=U%$.boundary,Q=U+V;x+=V,Q!==0&&w-Q<$.storage&&(x+=w-Q),R.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=x,x+=$.storage}}}const C=x%w;return C>0&&(x+=w-C),v.__size=x,v.__cache={},this}function _(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){const b=v.target;b.removeEventListener("dispose",g);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),o.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function m(){for(const v in n)o.deleteBuffer(n[v]);a=[],n={},s={}}return{bind:l,update:c,dispose:m}}class Qy{constructor(t={}){const{canvas:e=np(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const v=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let w=!1;this._outputColorSpace=Ie;let C=0,T=0,A=null,S=-1,M=null;const y=new fe,R=new fe;let D=null;const k=new pt(0);let F=0,z=e.width,$=e.height,U=1,V=null,Q=null;const xt=new fe(0,0,z,$),zt=new fe(0,0,z,$);let te=!1;const re=new vc;let q=!1,lt=!1;const ot=new Kt,It=new L,Dt=new fe,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function ee(){return A===null?U:1}let N=i;function pe(P,B){return e.getContext(P,B)}try{const P={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),N===null){const B="webgl2";if(N=pe(B,P),N===null)throw pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Et,ie,Tt,ut,et,yt,Yt,Gt,I,E,G,Y,Z,K,Ct,at,wt,At,nt,gt,Bt,Rt,ft,Wt;function O(){Et=new c_(N),Et.init(),Rt=new Xy(N,Et),ie=new i_(N,Et,t,Rt),Tt=new Vy(N,Et),ie.reversedDepthBuffer&&p&&Tt.buffers.depth.setReversed(!0),ut=new d_(N),et=new Py,yt=new Wy(N,Et,Tt,et,ie,Rt,ut),Yt=new s_(x),Gt=new l_(x),I=new ym(N),ft=new t_(N,I),E=new h_(N,I,ut,ft),G=new p_(N,E,I,ut),nt=new f_(N,ie,yt),at=new n_(et),Y=new Cy(x,Yt,Gt,Et,ie,ft,at),Z=new Zy(x,et),K=new Iy,Ct=new Oy(Et),At=new Qg(x,Yt,Gt,Tt,G,f,l),wt=new Hy(x,G,ie),Wt=new Jy(N,ut,ie,Tt),gt=new e_(N,Et,ut),Bt=new u_(N,Et,ut),ut.programs=Y.programs,x.capabilities=ie,x.extensions=Et,x.properties=et,x.renderLists=K,x.shadowMap=wt,x.state=Tt,x.info=ut}O();const st=new Yy(x,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const P=Et.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Et.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(P){P!==void 0&&(U=P,this.setSize(z,$,!1))},this.getSize=function(P){return P.set(z,$)},this.setSize=function(P,B,W=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,$=B,e.width=Math.floor(P*U),e.height=Math.floor(B*U),W===!0&&(e.style.width=P+"px",e.style.height=B+"px"),this.setViewport(0,0,P,B)},this.getDrawingBufferSize=function(P){return P.set(z*U,$*U).floor()},this.setDrawingBufferSize=function(P,B,W){z=P,$=B,U=W,e.width=Math.floor(P*W),e.height=Math.floor(B*W),this.setViewport(0,0,P,B)},this.getCurrentViewport=function(P){return P.copy(y)},this.getViewport=function(P){return P.copy(xt)},this.setViewport=function(P,B,W,X){P.isVector4?xt.set(P.x,P.y,P.z,P.w):xt.set(P,B,W,X),Tt.viewport(y.copy(xt).multiplyScalar(U).round())},this.getScissor=function(P){return P.copy(zt)},this.setScissor=function(P,B,W,X){P.isVector4?zt.set(P.x,P.y,P.z,P.w):zt.set(P,B,W,X),Tt.scissor(R.copy(zt).multiplyScalar(U).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(P){Tt.setScissorTest(te=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(P=!0,B=!0,W=!0){let X=0;if(P){let H=!1;if(A!==null){const it=A.texture.format;H=it===dc||it===uc||it===hc}if(H){const it=A.texture.type,mt=it===ji||it===is||it===So||it===To||it===rc||it===lc,Mt=At.getClearColor(),vt=At.getClearAlpha(),Ot=Mt.r,Ht=Mt.g,kt=Mt.b;mt?(d[0]=Ot,d[1]=Ht,d[2]=kt,d[3]=vt,N.clearBufferuiv(N.COLOR,0,d)):(_[0]=Ot,_[1]=Ht,_[2]=kt,_[3]=vt,N.clearBufferiv(N.COLOR,0,_))}else X|=N.COLOR_BUFFER_BIT}B&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),At.dispose(),K.dispose(),Ct.dispose(),et.dispose(),Yt.dispose(),Gt.dispose(),G.dispose(),ft.dispose(),Wt.dispose(),Y.dispose(),st.dispose(),st.removeEventListener("sessionstart",Oi),st.removeEventListener("sessionend",Hc),On.stop()};function rt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const P=ut.autoReset,B=wt.enabled,W=wt.autoUpdate,X=wt.needsUpdate,H=wt.type;O(),ut.autoReset=P,wt.enabled=B,wt.autoUpdate=W,wt.needsUpdate=X,wt.type=H}function tt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function j(P){const B=P.target;B.removeEventListener("dispose",j),St(B)}function St(P){Vt(P),et.remove(P)}function Vt(P){const B=et.get(P).programs;B!==void 0&&(B.forEach(function(W){Y.releaseProgram(W)}),P.isShaderMaterial&&Y.releaseShaderCache(P))}this.renderBufferDirect=function(P,B,W,X,H,it){B===null&&(B=Lt);const mt=H.isMesh&&H.matrixWorld.determinant()<0,Mt=Yd(P,B,W,X,H);Tt.setMaterial(X,mt);let vt=W.index,Ot=1;if(X.wireframe===!0){if(vt=E.getWireframeAttribute(W),vt===void 0)return;Ot=2}const Ht=W.drawRange,kt=W.attributes.position;let ne=Ht.start*Ot,Te=(Ht.start+Ht.count)*Ot;it!==null&&(ne=Math.max(ne,it.start*Ot),Te=Math.min(Te,(it.start+it.count)*Ot)),vt!==null?(ne=Math.max(ne,0),Te=Math.min(Te,vt.count)):kt!=null&&(ne=Math.max(ne,0),Te=Math.min(Te,kt.count));const Oe=Te-ne;if(Oe<0||Oe===1/0)return;ft.setup(H,X,Mt,W,vt);let Pe,Re=gt;if(vt!==null&&(Pe=I.get(vt),Re=Bt,Re.setIndex(Pe)),H.isMesh)X.wireframe===!0?(Tt.setLineWidth(X.wireframeLinewidth*ee()),Re.setMode(N.LINES)):Re.setMode(N.TRIANGLES);else if(H.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),Tt.setLineWidth(Ut*ee()),H.isLineSegments?Re.setMode(N.LINES):H.isLineLoop?Re.setMode(N.LINE_LOOP):Re.setMode(N.LINE_STRIP)}else H.isPoints?Re.setMode(N.POINTS):H.isSprite&&Re.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Re.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ut=H._multiDrawStarts,Ne=H._multiDrawCounts,ue=H._multiDrawCount,pi=vt?I.get(vt).bytesPerElement:1,as=et.get(X).currentProgram.getUniforms();for(let mi=0;mi<ue;mi++)as.setValue(N,"_gl_DrawID",mi),Re.render(Ut[mi]/pi,Ne[mi])}else if(H.isInstancedMesh)Re.renderInstances(ne,Oe,H.count);else if(W.isInstancedBufferGeometry){const Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ne=Math.min(W.instanceCount,Ut);Re.renderInstances(ne,Oe,Ne)}else Re.render(ne,Oe)};function Ce(P,B,W){P.transparent===!0&&P.side===_e&&P.forceSinglePass===!1?(P.side=si,P.needsUpdate=!0,Bo(P,B,W),P.side=Yi,P.needsUpdate=!0,Bo(P,B,W),P.side=_e):Bo(P,B,W)}this.compile=function(P,B,W=null){W===null&&(W=P),m=Ct.get(W),m.init(B),b.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),P!==W&&P.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const X=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const it=H.material;if(it)if(Array.isArray(it))for(let mt=0;mt<it.length;mt++){const Mt=it[mt];Ce(Mt,W,H),X.add(Mt)}else Ce(it,W,H),X.add(it)}),m=b.pop(),X},this.compileAsync=function(P,B,W=null){const X=this.compile(P,B,W);return new Promise(H=>{function it(){if(X.forEach(function(mt){et.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){H(P);return}setTimeout(it,10)}Et.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let me=null;function en(P){me&&me(P)}function Oi(){On.stop()}function Hc(){On.start()}const On=new Td;On.setAnimationLoop(en),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(P){me=P,st.setAnimationLoop(P),P===null?On.stop():On.start()},st.addEventListener("sessionstart",Oi),st.addEventListener("sessionend",Hc),this.render=function(P,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(B),B=st.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,B,A),m=Ct.get(P,b.length),m.init(B),b.push(m),ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),re.setFromProjectionMatrix(ot,Xi,B.reversedDepth),lt=this.localClippingEnabled,q=at.init(this.clippingPlanes,lt),g=K.get(P,v.length),g.init(),v.push(g),st.enabled===!0&&st.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&ar(it,B,-1/0,x.sortObjects)}ar(P,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,Q),se=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,se&&At.addToRenderList(g,P),this.info.render.frame++,q===!0&&at.beginShadows();const W=m.state.shadowsArray;wt.render(W,P,B),q===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,H=g.transmissive;if(m.setupLights(),B.isArrayCamera){const it=B.cameras;if(H.length>0)for(let mt=0,Mt=it.length;mt<Mt;mt++){const vt=it[mt];Vc(X,H,P,vt)}se&&At.render(P);for(let mt=0,Mt=it.length;mt<Mt;mt++){const vt=it[mt];Gc(g,P,vt,vt.viewport)}}else H.length>0&&Vc(X,H,P,B),se&&At.render(P),Gc(g,P,B);A!==null&&T===0&&(yt.updateMultisampleRenderTarget(A),yt.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(x,P,B),ft.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(m=b[b.length-1],q===!0&&at.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function ar(P,B,W,X){if(P.visible===!1)return;if(P.layers.test(B.layers)){if(P.isGroup)W=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(B);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||re.intersectsSprite(P)){X&&Dt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ot);const mt=G.update(P),Mt=P.material;Mt.visible&&g.push(P,mt,Mt,W,Dt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||re.intersectsObject(P))){const mt=G.update(P),Mt=P.material;if(X&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Dt.copy(P.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Dt.copy(mt.boundingSphere.center)),Dt.applyMatrix4(P.matrixWorld).applyMatrix4(ot)),Array.isArray(Mt)){const vt=mt.groups;for(let Ot=0,Ht=vt.length;Ot<Ht;Ot++){const kt=vt[Ot],ne=Mt[kt.materialIndex];ne&&ne.visible&&g.push(P,mt,ne,W,Dt.z,kt)}}else Mt.visible&&g.push(P,mt,Mt,W,Dt.z,null)}}const it=P.children;for(let mt=0,Mt=it.length;mt<Mt;mt++)ar(it[mt],B,W,X)}function Gc(P,B,W,X){const H=P.opaque,it=P.transmissive,mt=P.transparent;m.setupLightsView(W),q===!0&&at.setGlobalState(x.clippingPlanes,W),X&&Tt.viewport(y.copy(X)),H.length>0&&Oo(H,B,W),it.length>0&&Oo(it,B,W),mt.length>0&&Oo(mt,B,W),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Vc(P,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Ni(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Sn:ji,minFilter:xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const it=m.state.transmissionRenderTarget[X.id],mt=X.viewport||y;it.setSize(mt.z*x.transmissionResolutionScale,mt.w*x.transmissionResolutionScale);const Mt=x.getRenderTarget(),vt=x.getActiveCubeFace(),Ot=x.getActiveMipmapLevel();x.setRenderTarget(it),x.getClearColor(k),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),se&&At.render(W);const Ht=x.toneMapping;x.toneMapping=Un;const kt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),q===!0&&at.setGlobalState(x.clippingPlanes,X),Oo(P,W,X),yt.updateMultisampleRenderTarget(it),yt.updateRenderTargetMipmap(it),Et.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Te=0,Oe=B.length;Te<Oe;Te++){const Pe=B[Te],Re=Pe.object,Ut=Pe.geometry,Ne=Pe.material,ue=Pe.group;if(Ne.side===_e&&Re.layers.test(X.layers)){const pi=Ne.side;Ne.side=si,Ne.needsUpdate=!0,Wc(Re,W,X,Ut,Ne,ue),Ne.side=pi,Ne.needsUpdate=!0,ne=!0}}ne===!0&&(yt.updateMultisampleRenderTarget(it),yt.updateRenderTargetMipmap(it))}x.setRenderTarget(Mt,vt,Ot),x.setClearColor(k,F),kt!==void 0&&(X.viewport=kt),x.toneMapping=Ht}function Oo(P,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let H=0,it=P.length;H<it;H++){const mt=P[H],Mt=mt.object,vt=mt.geometry,Ot=mt.group;let Ht=mt.material;Ht.allowOverride===!0&&X!==null&&(Ht=X),Mt.layers.test(W.layers)&&Wc(Mt,B,W,vt,Ht,Ot)}}function Wc(P,B,W,X,H,it){P.onBeforeRender(x,B,W,X,H,it),P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(x,B,W,X,P,it),H.transparent===!0&&H.side===_e&&H.forceSinglePass===!1?(H.side=si,H.needsUpdate=!0,x.renderBufferDirect(W,B,X,H,P,it),H.side=Yi,H.needsUpdate=!0,x.renderBufferDirect(W,B,X,H,P,it),H.side=_e):x.renderBufferDirect(W,B,X,H,P,it),P.onAfterRender(x,B,W,X,H,it)}function Bo(P,B,W){B.isScene!==!0&&(B=Lt);const X=et.get(P),H=m.state.lights,it=m.state.shadowsArray,mt=H.state.version,Mt=Y.getParameters(P,H.state,it,B,W),vt=Y.getProgramCacheKey(Mt);let Ot=X.programs;X.environment=P.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(P.isMeshStandardMaterial?Gt:Yt).get(P.envMap||X.environment),X.envMapRotation=X.environment!==null&&P.envMap===null?B.environmentRotation:P.envMapRotation,Ot===void 0&&(P.addEventListener("dispose",j),Ot=new Map,X.programs=Ot);let Ht=Ot.get(vt);if(Ht!==void 0){if(X.currentProgram===Ht&&X.lightsStateVersion===mt)return $c(P,Mt),Ht}else Mt.uniforms=Y.getUniforms(P),P.onBeforeCompile(Mt,x),Ht=Y.acquireProgram(Mt,vt),Ot.set(vt,Ht),X.uniforms=Mt.uniforms;const kt=X.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(kt.clippingPlanes=at.uniform),$c(P,Mt),X.needsLights=Zd(P),X.lightsStateVersion=mt,X.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ht,X.uniformsList=null,Ht}function Xc(P){if(P.uniformsList===null){const B=P.currentProgram.getUniforms();P.uniformsList=La.seqWithValue(B.seq,P.uniforms)}return P.uniformsList}function $c(P,B){const W=et.get(P);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Yd(P,B,W,X,H){B.isScene!==!0&&(B=Lt),yt.resetTextureUnits();const it=B.fog,mt=X.isMeshStandardMaterial?B.environment:null,Mt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:di,vt=(X.isMeshStandardMaterial?Gt:Yt).get(X.envMap||mt),Ot=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),kt=!!W.morphAttributes.position,ne=!!W.morphAttributes.normal,Te=!!W.morphAttributes.color;let Oe=Un;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Oe=x.toneMapping);const Pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Re=Pe!==void 0?Pe.length:0,Ut=et.get(X),Ne=m.state.lights;if(q===!0&&(lt===!0||P!==M)){const oi=P===M&&X.id===S;at.setState(X,P,oi)}let ue=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Ne.state.version||Ut.outputColorSpace!==Mt||H.isBatchedMesh&&Ut.batching===!1||!H.isBatchedMesh&&Ut.batching===!0||H.isBatchedMesh&&Ut.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ut.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ut.instancing===!1||!H.isInstancedMesh&&Ut.instancing===!0||H.isSkinnedMesh&&Ut.skinning===!1||!H.isSkinnedMesh&&Ut.skinning===!0||H.isInstancedMesh&&Ut.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ut.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ut.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ut.instancingMorph===!1&&H.morphTexture!==null||Ut.envMap!==vt||X.fog===!0&&Ut.fog!==it||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==at.numPlanes||Ut.numIntersection!==at.numIntersection)||Ut.vertexAlphas!==Ot||Ut.vertexTangents!==Ht||Ut.morphTargets!==kt||Ut.morphNormals!==ne||Ut.morphColors!==Te||Ut.toneMapping!==Oe||Ut.morphTargetsCount!==Re)&&(ue=!0):(ue=!0,Ut.__version=X.version);let pi=Ut.currentProgram;ue===!0&&(pi=Bo(X,B,H));let as=!1,mi=!1,Qs=!1;const Ue=pi.getUniforms(),vi=Ut.uniforms;if(Tt.useProgram(pi.program)&&(as=!0,mi=!0,Qs=!0),X.id!==S&&(S=X.id,mi=!0),as||M!==P){Tt.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ue.setValue(N,"projectionMatrix",P.projectionMatrix),Ue.setValue(N,"viewMatrix",P.matrixWorldInverse);const fi=Ue.map.cameraPosition;fi!==void 0&&fi.setValue(N,It.setFromMatrixPosition(P.matrixWorld)),ie.logarithmicDepthBuffer&&Ue.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ue.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,mi=!0,Qs=!0)}if(H.isSkinnedMesh){Ue.setOptional(N,H,"bindMatrix"),Ue.setOptional(N,H,"bindMatrixInverse");const oi=H.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),Ue.setValue(N,"boneTexture",oi.boneTexture,yt))}H.isBatchedMesh&&(Ue.setOptional(N,H,"batchingTexture"),Ue.setValue(N,"batchingTexture",H._matricesTexture,yt),Ue.setOptional(N,H,"batchingIdTexture"),Ue.setValue(N,"batchingIdTexture",H._indirectTexture,yt),Ue.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Ue.setValue(N,"batchingColorTexture",H._colorsTexture,yt));const bi=W.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&nt.update(H,W,pi),(mi||Ut.receiveShadow!==H.receiveShadow)&&(Ut.receiveShadow=H.receiveShadow,Ue.setValue(N,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(vi.envMap.value=vt,vi.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(vi.envMapIntensity.value=B.environmentIntensity),mi&&(Ue.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&jd(vi,Qs),it&&X.fog===!0&&Z.refreshFogUniforms(vi,it),Z.refreshMaterialUniforms(vi,X,U,$,m.state.transmissionRenderTarget[P.id]),La.upload(N,Xc(Ut),vi,yt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(La.upload(N,Xc(Ut),vi,yt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ue.setValue(N,"center",H.center),Ue.setValue(N,"modelViewMatrix",H.modelViewMatrix),Ue.setValue(N,"normalMatrix",H.normalMatrix),Ue.setValue(N,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const oi=X.uniformsGroups;for(let fi=0,rr=oi.length;fi<rr;fi++){const Bn=oi[fi];Wt.update(Bn,pi),Wt.bind(Bn,pi)}}return pi}function jd(P,B){P.ambientLightColor.needsUpdate=B,P.lightProbe.needsUpdate=B,P.directionalLights.needsUpdate=B,P.directionalLightShadows.needsUpdate=B,P.pointLights.needsUpdate=B,P.pointLightShadows.needsUpdate=B,P.spotLights.needsUpdate=B,P.spotLightShadows.needsUpdate=B,P.rectAreaLights.needsUpdate=B,P.hemisphereLights.needsUpdate=B}function Zd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,B,W){const X=et.get(P);X.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),et.get(P.texture).__webglTexture=B,et.get(P.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,B){const W=et.get(P);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const Jd=N.createFramebuffer();this.setRenderTarget=function(P,B=0,W=0){A=P,C=B,T=W;let X=!0,H=null,it=!1,mt=!1;if(P){const vt=et.get(P);if(vt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(vt.__webglFramebuffer===void 0)yt.setupRenderTarget(P);else if(vt.__hasExternalTextures)yt.rebindTextures(P,et.get(P.texture).__webglTexture,et.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const kt=P.depthTexture;if(vt.__boundDepthTexture!==kt){if(kt!==null&&et.has(kt)&&(P.width!==kt.image.width||P.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(P)}}const Ot=P.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(mt=!0);const Ht=et.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?H=Ht[B][W]:H=Ht[B],it=!0):P.samples>0&&yt.useMultisampledRTT(P)===!1?H=et.get(P).__webglMultisampledFramebuffer:Array.isArray(Ht)?H=Ht[W]:H=Ht,y.copy(P.viewport),R.copy(P.scissor),D=P.scissorTest}else y.copy(xt).multiplyScalar(U).floor(),R.copy(zt).multiplyScalar(U).floor(),D=te;if(W!==0&&(H=Jd),Tt.bindFramebuffer(N.FRAMEBUFFER,H)&&X&&Tt.drawBuffers(P,H),Tt.viewport(y),Tt.scissor(R),Tt.setScissorTest(D),it){const vt=et.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,vt.__webglTexture,W)}else if(mt){const vt=B;for(let Ot=0;Ot<P.textures.length;Ot++){const Ht=et.get(P.textures[Ot]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ot,Ht.__webglTexture,W,vt)}}else if(P!==null&&W!==0){const vt=et.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vt.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(P,B,W,X,H,it,mt,Mt=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&mt!==void 0&&(vt=vt[mt]),vt){Tt.bindFramebuffer(N.FRAMEBUFFER,vt);try{const Ot=P.textures[Mt],Ht=Ot.format,kt=Ot.type;if(!ie.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=P.width-X&&W>=0&&W<=P.height-H&&(P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Mt),N.readPixels(B,W,X,H,Rt.convert(Ht),Rt.convert(kt),it))}finally{const Ot=A!==null?et.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(P,B,W,X,H,it,mt,Mt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&mt!==void 0&&(vt=vt[mt]),vt)if(B>=0&&B<=P.width-X&&W>=0&&W<=P.height-H){Tt.bindFramebuffer(N.FRAMEBUFFER,vt);const Ot=P.textures[Mt],Ht=Ot.format,kt=Ot.type;if(!ie.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ne),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Mt),N.readPixels(B,W,X,H,Rt.convert(Ht),Rt.convert(kt),0);const Te=A!==null?et.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,Te);const Oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await sp(N,Oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ne),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(ne),N.deleteSync(Oe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,B=null,W=0){const X=Math.pow(2,-W),H=Math.floor(P.image.width*X),it=Math.floor(P.image.height*X),mt=B!==null?B.x:0,Mt=B!==null?B.y:0;yt.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,mt,Mt,H,it),Tt.unbindTexture()};const Qd=N.createFramebuffer(),tf=N.createFramebuffer();this.copyTextureToTexture=function(P,B,W=null,X=null,H=0,it=null){it===null&&(H!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=H,H=0):it=0);let mt,Mt,vt,Ot,Ht,kt,ne,Te,Oe;const Pe=P.isCompressedTexture?P.mipmaps[it]:P.image;if(W!==null)mt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,vt=W.isBox3?W.max.z-W.min.z:1,Ot=W.min.x,Ht=W.min.y,kt=W.isBox3?W.min.z:0;else{const bi=Math.pow(2,-H);mt=Math.floor(Pe.width*bi),Mt=Math.floor(Pe.height*bi),P.isDataArrayTexture?vt=Pe.depth:P.isData3DTexture?vt=Math.floor(Pe.depth*bi):vt=1,Ot=0,Ht=0,kt=0}X!==null?(ne=X.x,Te=X.y,Oe=X.z):(ne=0,Te=0,Oe=0);const Re=Rt.convert(B.format),Ut=Rt.convert(B.type);let Ne;B.isData3DTexture?(yt.setTexture3D(B,0),Ne=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(yt.setTexture2DArray(B,0),Ne=N.TEXTURE_2D_ARRAY):(yt.setTexture2D(B,0),Ne=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const ue=N.getParameter(N.UNPACK_ROW_LENGTH),pi=N.getParameter(N.UNPACK_IMAGE_HEIGHT),as=N.getParameter(N.UNPACK_SKIP_PIXELS),mi=N.getParameter(N.UNPACK_SKIP_ROWS),Qs=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kt);const Ue=P.isDataArrayTexture||P.isData3DTexture,vi=B.isDataArrayTexture||B.isData3DTexture;if(P.isDepthTexture){const bi=et.get(P),oi=et.get(B),fi=et.get(bi.__renderTarget),rr=et.get(oi.__renderTarget);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,fi.__webglFramebuffer),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let Bn=0;Bn<vt;Bn++)Ue&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,et.get(P).__webglTexture,H,kt+Bn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,et.get(B).__webglTexture,it,Oe+Bn)),N.blitFramebuffer(Ot,Ht,mt,Mt,ne,Te,mt,Mt,N.DEPTH_BUFFER_BIT,N.NEAREST);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||et.has(P)){const bi=et.get(P),oi=et.get(B);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,Qd),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,tf);for(let fi=0;fi<vt;fi++)Ue?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bi.__webglTexture,H,kt+fi):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bi.__webglTexture,H),vi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oi.__webglTexture,it,Oe+fi):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,oi.__webglTexture,it),H!==0?N.blitFramebuffer(Ot,Ht,mt,Mt,ne,Te,mt,Mt,N.COLOR_BUFFER_BIT,N.NEAREST):vi?N.copyTexSubImage3D(Ne,it,ne,Te,Oe+fi,Ot,Ht,mt,Mt):N.copyTexSubImage2D(Ne,it,ne,Te,Ot,Ht,mt,Mt);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else vi?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(Ne,it,ne,Te,Oe,mt,Mt,vt,Re,Ut,Pe.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Ne,it,ne,Te,Oe,mt,Mt,vt,Re,Pe.data):N.texSubImage3D(Ne,it,ne,Te,Oe,mt,Mt,vt,Re,Ut,Pe):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,it,ne,Te,mt,Mt,Re,Ut,Pe.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,it,ne,Te,Pe.width,Pe.height,Re,Pe.data):N.texSubImage2D(N.TEXTURE_2D,it,ne,Te,mt,Mt,Re,Ut,Pe);N.pixelStorei(N.UNPACK_ROW_LENGTH,ue),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pi),N.pixelStorei(N.UNPACK_SKIP_PIXELS,as),N.pixelStorei(N.UNPACK_SKIP_ROWS,mi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qs),it===0&&B.generateMipmaps&&N.generateMipmap(Ne),Tt.unbindTexture()},this.copyTextureToTexture3D=function(P,B,W=null,X=null,H=0){return Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,B,W,X,H)},this.initRenderTarget=function(P){et.get(P).__webglFramebuffer===void 0&&yt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?yt.setTextureCube(P,0):P.isData3DTexture?yt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?yt.setTexture2DArray(P,0):yt.setTexture2D(P,0),Tt.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,Tt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const ks=Object.freeze({width:68,length:105,goalWidth:7.32,goalHeight:2.44,goalDepth:2.2}),Nn=Object.freeze({outward:4.15,halfOpening:3.6,depth:15}),Bi=Object.freeze({boards:3.05,boardHeight:1.06,rail:7.94}),$t=.11,Vr=300,fa=1/120,tx=Object.freeze([{role:"GK",line:"GK",x:0,z:-49},{role:"LB",line:"DEF",x:-22,z:-33},{role:"CB",line:"DEF",x:-7.5,z:-36},{role:"CB",line:"DEF",x:7.5,z:-36},{role:"RB",line:"DEF",x:22,z:-33},{role:"CM",line:"MID",x:-13,z:-18},{role:"DM",line:"MID",x:0,z:-24},{role:"CM",line:"MID",x:13,z:-18},{role:"LW",line:"FWD",x:-24,z:-5},{role:"ST",line:"FWD",x:0,z:-2},{role:"RW",line:"FWD",x:24,z:-5}]),ex=[[1,"D. Varga"],[3,"L. Okoro"],[4,"M. Brandt"],[5,"T. Aldana"],[2,"K. Soren"],[8,"R. Tavish"],[6,"J. Mbeki"],[10,"A. Lindqvist"],[11,"N. Castellan"],[9,"E. Drummond"],[7,"S. Arakawa"]],ix=[[1,"P. Hollis"],[3,"C. Yilmaz"],[4,"B. Novak"],[5,"G. Ferrand"],[2,"O. Adeyemi"],[8,"H. Rasku"],[6,"V. Moreau"],[10,"I. Santoro"],[11,"F. Keane"],[9,"Z. Dragan"],[7,"W. Halloran"]],wn=Object.freeze({home:{id:"aurora",name:"AURORA FC",short:"AUR",primary:1234619,secondary:471103,stripe:539210,socks:539210,keeper:15909424,pattern:1,numberColor:16777215,ui:"#19e6c7",squad:ex,voice:"home"},away:{id:"solaris",name:"SOLARIS UNITED",short:"SOL",primary:16052718,secondary:15216735,stripe:15216735,socks:16052718,keeper:8215797,pattern:3,numberColor:2756640,ui:"#ff3d71",squad:ix,voice:"away"}}),Wr=Object.freeze({easy:{think:1.5,error:1.7,tackle:.55,keeper:.28,pace:.94},normal:{think:1,error:1,tackle:1,keeper:.15,pace:1},hard:{think:.72,error:.7,tackle:1.35,keeper:.13,pace:1.03}}),nx={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",ShiftLeft:"sprint",ShiftRight:"sprint",ControlLeft:"jockey",ControlRight:"jockey",KeyT:"finesse",KeyG:"chip"},sx={Space:"shoot",KeyX:"pass",KeyQ:"through",KeyC:"tackle",KeyE:"switch",KeyV:"camera",Escape:"pause",KeyP:"pause",KeyR:"restart",Enter:"confirm",KeyF:"run",KeyZ:"cross",KeyB:"skill"},ox={attack:{a:"pass",b:"shoot",x:"cross",y:"through"},defend:{a:"switch",b:"tackle",x:"shoot",y:"jockey"}};class ax{constructor(t=document){this.root=t,this.held={up:!1,down:!1,left:!1,right:!1,sprint:!1,jockey:!1,finesse:!1,chip:!1},this.context="attack",this.padConnected=!1,this._padPrev=[],this.edges=new Set,this.touchButtons=new Map,this.joystick={active:!1,pointerId:-1,x:0,y:0},this.enabled=!0,this._listeners=[],this._bind(window,"keydown",e=>this._onKey(e,!0)),this._bind(window,"keyup",e=>this._onKey(e,!1)),this._bind(window,"blur",()=>this.clear()),this._bind(t,"pointerdown",e=>this._onPointerDown(e)),this._bind(t,"pointermove",e=>this._onPointerMove(e)),this._bind(t,"pointerup",e=>this._onPointerUp(e)),this._bind(t,"pointercancel",e=>this._onPointerUp(e)),this._bind(t,"lostpointercapture",e=>this._onPointerUp(e)),this._bind(t,"contextmenu",e=>{e.target.closest?.("[data-action], .joystick-zone")&&e.preventDefault()})}_bind(t,e,i,n){t.addEventListener(e,i,n),this._listeners.push(()=>t.removeEventListener(e,i,n))}_onKey(t,e){if(!this.enabled)return;const i=t.target?.closest?.('button, input, select, textarea, [contenteditable="true"]');if(i&&!i.closest?.("[hidden]")&&i.getClientRects?.().length>0&&t.code!=="Escape")return;const s=nx[t.code],a=sx[t.code];!s&&!a||(t.preventDefault(),s&&(this.held[s]=e),a&&(this.held[`${a}Held`]=e),a&&e&&!t.repeat&&this.edges.add(a))}_onPointerDown(t){if(!this.enabled)return;const e=t.target.closest?.(".touch-controls [data-action]");if(e){if(e.classList.contains("is-pressed"))return;const n=e.dataset.action==="pad"?ox[this.context][e.dataset.pad]:e.dataset.action;this.touchButtons.set(t.pointerId,{action:n,button:e}),e.classList.add("is-pressed"),e.setPointerCapture?.(t.pointerId),n!=="sprint"&&n!=="jockey"&&this.edges.add(n);return}const i=t.target.closest?.(".joystick-zone");!i||this.joystick.active||(this.joystick.active=!0,this.joystick.pointerId=t.pointerId,this.joystick.zone=i,i.setPointerCapture?.(t.pointerId),this._updateJoystick(t))}_onPointerMove(t){this.joystick.active&&t.pointerId===this.joystick.pointerId&&this._updateJoystick(t)}_onPointerUp(t){const e=this.touchButtons.get(t.pointerId);e&&(e.button.classList.remove("is-pressed"),this.touchButtons.delete(t.pointerId)),this.joystick.active&&t.pointerId===this.joystick.pointerId&&this._resetJoystick()}_updateJoystick(t){const e=this.joystick.zone.getBoundingClientRect(),i=t.clientX-(e.left+e.width/2),n=t.clientY-(e.top+e.height/2),s=Math.max(30,e.width*.32),a=Math.hypot(i,n)||1,r=Math.min(1,s/a);this.joystick.x=Math.max(-1,Math.min(1,i*r/s)),this.joystick.y=Math.max(-1,Math.min(1,n*r/s)),this.joystick.zone.style.setProperty("--stick-x",`${this.joystick.x*s}px`),this.joystick.zone.style.setProperty("--stick-y",`${this.joystick.y*s}px`)}_resetJoystick(){this.joystick.active=!1,this.joystick.pointerId=-1,this.joystick.x=0,this.joystick.y=0,this.joystick.zone?.style.setProperty("--stick-x","0px"),this.joystick.zone?.style.setProperty("--stick-y","0px")}consume(){let t=this.joystick.active?this.joystick.x:Number(this.held.right)-Number(this.held.left),e=this.joystick.active?this.joystick.y:Number(this.held.down)-Number(this.held.up);if(this.joystick.active){const n=Math.hypot(t,e);if(n<=.16)t=0,e=0;else{const s=Math.min(1,(n-.16)/.84);t=t/n*s,e=e/n*s}}const i={...this.held,up:this.held.up||e<-.2,down:this.held.down||e>.2,left:this.held.left||t<-.2,right:this.held.right||t>.2,moveX:t,moveY:e};for(const{action:n}of this.touchButtons.values())i[n==="sprint"||n==="jockey"?n:`${n}Held`]=!0;for(const n of this.edges)i[n]=!0;return this.edges.clear(),this._pollGamepad(i),i}_pollGamepad(t){const e=typeof navigator<"u"&&navigator.getGamepads?[...navigator.getGamepads()]:[],i=e.find(u=>u&&u.connected&&u.mapping==="standard")||e.find(u=>u&&u.connected);if(this.padConnected=!!i,!i){this._padPrev=[];return}const n=i.buttons.map(u=>u.pressed||u.value>.5),s=this._padPrev,a=u=>n[u]&&!s[u];let r=i.axes[0]||0,l=i.axes[1]||0;n[14]&&(r=-1),n[15]&&(r=1),n[12]&&(l=-1),n[13]&&(l=1);const c=Math.hypot(r,l);if(c>.2){const u=Math.min(1,(c-.2)/.75)/c;t.moveX=r*u,t.moveY=l*u,t.left=r<-.3,t.right=r>.3,t.up=l<-.3,t.down=l>.3}(this.context==="defend"?["pass","tackle","shoot","switch"]:["pass","shoot","cross","through"]).forEach((u,p)=>{a(p)&&(t[u]=!0),n[p]&&(t[`${u}Held`]=!0)}),n[7]&&(t.sprint=!0),n[6]&&(t.jockey=!0),n[5]&&(t.finesse=!0),n[4]&&(t.chip=!0),a(4)&&(t[this.context==="defend"?"switch":"run"]=!0),a(9)&&(t.pause=!0),a(8)&&(t.camera=!0),a(11)&&this.context!=="defend"&&(t.skill=!0),(a(0)||a(9))&&(t.confirm=!0),this._padPrev=n}clear(){Object.keys(this.held).forEach(t=>{this.held[t]=!1});for(const{button:t}of this.touchButtons.values())t.classList.remove("is-pressed");this.touchButtons.clear(),this.edges.clear(),this._resetJoystick()}dispose(){this._listeners.forEach(t=>t()),this._listeners.length=0,this.clear()}}const ti=ja.clamp;class rx{constructor(t,e){this.camera=t,this.pitch=e,this.mode="broadcast",this.position=new L(-56,23,0),this.look=new L(0,0,0),this.shake=0,this.goalTime=0,this.goalSide=1,t.position.copy(this.position),t.lookAt(this.look)}setMode(t){this.mode=t==="dynamic"?"dynamic":"broadcast",this.corner&&(this.cornerBroadcast=this.mode==="broadcast")}cycleMode(){return this.corner?(this.cornerBroadcast=!this.cornerBroadcast,this.cornerBroadcast?"broadcast":"corner"):(this.setMode(this.mode==="broadcast"?"dynamic":"broadcast"),this.mode)}mapInput(t){const e=Number.isFinite(t.moveX)?t.moveX:+!!t.right-+!!t.left,i=Number.isFinite(t.moveY)?-t.moveY:+!!t.up-+!!t.down;if(Math.abs(e)+Math.abs(i)<.01)return t;const n=ti(Math.hypot(e,i),0,1),s=new L(1,0,0).applyQuaternion(this.camera.quaternion),a=new L(0,1,0).applyQuaternion(this.camera.quaternion);if(s.y=0,a.y=0,s.lengthSq()<.001||a.lengthSq()<.001)return t;s.normalize(),a.normalize();const r=s.multiplyScalar(e).add(a.multiplyScalar(i));return r.lengthSq()>.001&&r.normalize().multiplyScalar(n),{...t,left:r.x<-.2,right:r.x>.2,up:r.z>.2,down:r.z<-.2,moveX:r.x,moveY:-r.z,worldX:r.x,worldZ:r.z}}impact(t=.35){this.shake=Math.max(this.shake,t)}celebrate(){this.impact(.6)}playShots(t){this.shots=t.filter(e=>e.type!=="actor"||e.actor),this.shotIndex=-1,this.shots.length?this._nextShot():this.shots=null}_nextShot(){this.shotIndex+=1,this.shotTime=0,this.shotSeed=Math.random(),this.onCut?.()}stopShots(t=!1){this.shots&&(this.shots=null,t&&this.onCut?.())}get busy(){return!!this.shots}update(t,e,i=null){if(this.povActor=null,this.debug){this.camera.position.fromArray(this.debug.pos),this.camera.lookAt(...this.debug.look),this.camera.fov=this.debug.fov??30,this.camera.updateProjectionMatrix();return}const n=e?.state?.phase,s=e?.setPiece?.kind==="corner"&&e.setPiece.taker.team==="home"&&!e.autoplay?e.setPiece:null;s!==this.corner&&(this.corner=s,this.cornerBroadcast=!1);const a=e?.ball?.position||new L,r=e?.controlledPlayer,l=r?.position||a,c=e?.getCameraFocus?.()||a,h=new L,u=new L(c.x,1,c.z);let p=30,f=this.mode;if(this.shots&&(this.shotTime+=t,this.shotTime>=this.shots[this.shotIndex].dur&&(this.shotIndex+1<this.shots.length?this._nextShot():(this.shots=null,this.onCut?.()))),this.shots){const g=this.shots[this.shotIndex];f=`seq${this.shotIndex}`;const m=this.pitch.width/2;if(g.type==="actor"){const v=g.actor.position,x=(g.actor.mesh?.rotation?.y??0)+.45*(this.shotSeed<.5?-1:1)+(g.orbit||0)*this.shotTime,w=g.actor.act==="fall"||g.actor.act==="slide";if(h.set(v.x+Math.sin(x)*g.dist,w?.9:g.height??1.5,v.z+Math.cos(x)*g.dist),g.inside){const C=-Math.sign(v.x||1);h.set(v.x+C*g.dist,g.height??2,v.z+(this.shotSeed-.5)*g.dist*.9)}h.x=ti(h.x,-m-6,m+6),u.set(v.x,w?.5:g.lookY??1.42,v.z),p=g.fov??26}else if(g.type==="move"){const v=ti(this.shotTime/g.dur,0,1);h.set(g.from[0]+(g.to[0]-g.from[0])*v,g.from[1]+(g.to[1]-g.from[1])*v,g.from[2]+(g.to[2]-g.from[2])*v),g.actor?u.set(g.actor.position.x,g.lookY??1.3,g.actor.position.z):u.set(h.x+g.aim[0],h.y+g.aim[1],h.z+g.aim[2]),p=g.fov??30}else if(g.type==="bench"){const v=g.side==="home"?-1:1,b=ti(this.shotTime/g.dur,0,1);h.set(-m+5.1,2.24,v*(15.2-1.6*b)),u.set(-m-3.25,1.12,v*14.15),p=60}else if(g.type==="crowd"){const v=ti(a.z*.5,-30,30)+(this.shotSeed-.5)*20;h.set(8,5,v+this.shotTime*2.5),u.set(m+17,6.5,v+8),p=34}else{const v=g.point;h.set(v.x-Math.sign(v.x||1)*10,2.4,v.z-Math.sign(v.z||1)*(7-this.shotTime*.6)),u.set(v.x,.7,v.z),p=g.fov??30}}else if(n==="goal"&&e.scorer){f="hero",this.heroTime=(this.heroTime||0)+t;const g=e.scorer.position,m=Math.sign(g.z)||1;h.set(g.x*.72+Math.sin(this.heroTime*.4)*1.5,1.5,g.z-m*7.5),u.set(g.x,1.25,g.z),p=26}else if(n==="replay"){const g=e.replay,m=g?.kind??"goal";f=`replay-${m}-${g?.pass??0}`;const v=g?.goalSide??(a.z>=0?1:-1),b=v*this.pitch.length/2,x=this.replaySide||1;if(m==="goal"&&g?.pass===2&&g.scorer){this.povActor=g.scorer,i?h.copy(i):h.copy(g.scorer.position).setY(1.68);const w=(a.z-h.z)*v>-.45;u.set(w?a.x:ti(a.x,-this.pitch.goalWidth/2,this.pitch.goalWidth/2),w?Math.max(a.y,.56):1.02,h.z+v*Math.max(2.35,(a.z-h.z)*v)),p=61}else if(m==="goal"&&g?.pass===1)h.set(x*this.pitch.goalWidth*.28,1.15,b+v*this.pitch.goalDepth*.8),u.set(ti(a.x*.32,-2.1,2.1),1.12,b-v*10),p=62;else if(m==="goal"||m==="miss"){const w=m==="goal"?ti((g?.time??0)*.9,0,7):0;h.set(x*(15-w*.42),3.4+w*.17,b-v*(27-w)),u.set(a.x,Math.max(.9,a.y*.8),a.z),p=ti(22+h.distanceTo(u)*.3,26,36)}else{const w=g?.focus?.position??a;this.replayAnchor||(this.replayAnchor=new L(w.x,0,w.z));const C=this.replayAnchor;m==="offside"?(h.set(-this.pitch.width/2-9,9,C.z),u.set((w.x+a.x)*.5,.8,(w.z*2+a.z)/3),p=30):(h.set(C.x-24,8,C.z+x*7),u.set((w.x+a.x)*.5,.8,(w.z+a.z)*.5),p=31)}}else if(s&&!this.cornerBroadcast){f="corner";const g=s.taker.position,m=Math.sign(g.x),v=Math.sign(g.z);h.set(m*(this.pitch.width/2+1.1),3.6,v*(this.pitch.length/2+1.7)),u.set(g.x-m*4.4,.85,g.z-v*2.4),p=52}else if(this.mode==="dynamic"&&!this.cornerBroadcast){const g=r?.attackDirection??1;h.set(l.x*.72,13.5,l.z-g*24),u.set(a.x*.8,1.2,a.z+g*6),p=52}else{s&&(f="broadcast"),this.heroTime=0,h.set(-56,23,ti(c.z*.9,-40,40)),u.set(ti(c.x*.78,-25,17)+3,.5,ti(c.z,-46,46)),p=27-ti(Math.abs(c.z)/52.5,0,1)*3+ti((c.x+34)/68,0,1)*2.5;const g=e?.setPiece;if(g&&(g.kind==="penalty"||g.kind==="free-kick"&&g.wall?.length)){f="setpiece";const m=g.taker.position,v=g.taker.attackDirection,b=v*this.pitch.length/2,x=-m.x,w=b-m.z,C=Math.hypot(x,w)||1;h.set(m.x-x/C*13,5.2,m.z-w/C*13),u.set(m.x*.35,1,b-v*2),p=36}else if(g?.kind==="throw-in"){const m=g.taker.position,v=-Math.sign(m.x||1);h.z=ti(m.z*.95,-44,44),u.set(m.x+v*(m.x<0?9:5),.6,ti(m.z,-47,47)),p=23}}const d=f.startsWith("replay")||f==="hero"||f==="setpiece"||f==="corner"||!!this.shots;f!==this._shot&&(this._shot=f,f.startsWith("replay")&&(f.endsWith("-0")?(this.replaySide=Math.random()<.5?-1:1,this.replayAnchor=null):this.replaySide=-(this.replaySide||1)),(d||this._wasCinematic)&&(this.position.copy(h),this.look.copy(u),this.camera.fov=p),this._wasCinematic=d),this.position.lerp(h,1-Math.exp(-t*(this.povActor?20:d?2.2:3.6))),this.look.lerp(u,1-Math.exp(-t*(this.povActor?14:d?7:5))),this.shake*=Math.exp(-t*9);const _=this.shake*this.shake*(d?.3:1);this.camera.position.copy(this.position),this.camera.position.x+=(Math.random()-.5)*_,this.camera.position.y+=(Math.random()-.5)*_*.65,this.camera.position.z+=(Math.random()-.5)*_,this.camera.lookAt(this.look),this.camera.fov+=(p-this.camera.fov)*(1-Math.exp(-t*3)),this.camera.updateProjectionMatrix()}}function lx(o,t=!1){const e=o[0].index!==null,i=new Set(Object.keys(o[0].attributes)),n=new Set(Object.keys(o[0].morphAttributes)),s={},a={},r=o[0].morphTargetsRelative,l=new Be;let c=0;for(let h=0;h<o.length;++h){const u=o[h];let p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let p=0;p<o.length;++p){const f=o[p].index;for(let d=0;d<f.count;++d)u.push(f.getX(d)+h);h+=o[p].attributes.position.count}l.setIndex(u)}for(const h in s){const u=ou(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][p]);const d=ou(f);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(d)}}return l}function ou(o){let t,e,i,n=-1,s=0;for(let c=0;c<o.length;++c){const h=o[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),r=new Fe(a,e,i);let l=0;for(let c=0;c<o.length;++c){const h=o[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let p=0,f=h.count;p<f;p++)for(let d=0;d<e;d++){const _=h.getComponent(p,d);r.setComponent(p+u,d,_)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(r.gpuType=n),r}function au(o,t){if(t===Cf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===Gl||t===ed){let e=o.getIndex();if(e===null){const a=[],r=o.getAttribute("position");if(r!==void 0){for(let l=0;l<r.count;l++)a.push(l);o.setIndex(a),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=e.count-2,n=[];if(t===Gl)for(let a=1;a<=i;a++)n.push(e.getX(0)),n.push(e.getX(a)),n.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(e.getX(a)),n.push(e.getX(a+1)),n.push(e.getX(a+2))):(n.push(e.getX(a+2)),n.push(e.getX(a+1)),n.push(e.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class Pc extends Ys{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new fx(e)}),this.register(function(e){return new px(e)}),this.register(function(e){return new Sx(e)}),this.register(function(e){return new Tx(e)}),this.register(function(e){return new wx(e)}),this.register(function(e){return new gx(e)}),this.register(function(e){return new _x(e)}),this.register(function(e){return new yx(e)}),this.register(function(e){return new xx(e)}),this.register(function(e){return new dx(e)}),this.register(function(e){return new vx(e)}),this.register(function(e){return new mx(e)}),this.register(function(e){return new Mx(e)}),this.register(function(e){return new bx(e)}),this.register(function(e){return new hx(e)}),this.register(function(e){return new Ex(e)}),this.register(function(e){return new Ax(e)})}load(t,e,i,n){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=xo.extractUrlBase(t);a=xo.resolveURL(c,this.path)}else a=xo.extractUrlBase(t);this.manager.itemStart(t);const r=function(c){n?n(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new vd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,a,function(h){e(h),s.manager.itemEnd(t)},r)}catch(h){r(h)}},i,r)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s;const a={},r={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Pd){try{a[Jt.KHR_BINARY_GLTF]=new Rx(t)}catch(u){n&&n(u);return}s=JSON.parse(a[Jt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Hx(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),r[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],p=s.extensionsRequired||[];switch(u){case Jt.KHR_MATERIALS_UNLIT:a[u]=new ux;break;case Jt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Cx(s,this.dracoLoader);break;case Jt.KHR_TEXTURE_TRANSFORM:a[u]=new Px;break;case Jt.KHR_MESH_QUANTIZATION:a[u]=new Lx;break;default:p.indexOf(u)>=0&&r[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(r),c.parse(i,n)}parseAsync(t,e){const i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}}function cx(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const Jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hx{constructor(t){this.parser=t,this.name=Jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){const s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let n=e.cache.get(i);if(n)return n;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const h=new pt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],di);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Md(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ec(h),c.distance=u;break;case"spot":c=new Qp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),mn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),n=Promise.resolve(c),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,s=i.json.nodes[t],r=(s.extensions&&s.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(l){return i._getNodeRef(e.cache,r,l)})}}class ux{constructor(){this.name=Jt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ze}extendParams(t,e,i){const n=[];t.color=new pt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],di),t.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,Ie))}return Promise.all(n)}}class dx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class fx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Qi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const r=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Nt(r,r)}return Promise.all(s)}}class px{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Qi}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class mx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Qi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class gx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Qi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new pt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const r=a.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],di)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Ie)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class _x{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Qi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class yx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Qi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const r=a.attenuationColor||[1,1,1];return e.attenuationColor=new pt().setRGB(r[0],r[1],r[2],di),Promise.all(s)}}class xx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Qi}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class vx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Qi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",a.specularTexture));const r=a.specularColorFactor||[1,1,1];return e.specularColor=new pt().setRGB(r[0],r[1],r[2],di),a.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",a.specularColorTexture,Ie)),Promise.all(s)}}class bx{constructor(t){this.parser=t,this.name=Jt.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Qi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Mx{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Qi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Sx{constructor(t){this.parser=t,this.name=Jt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}}class Tx{constructor(t){this.parser=t,this.name=Jt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],r=n.images[a.source];let l=i.textureLoader;if(r.uri){const c=i.options.manager.getHandler(r.uri);c!==null&&(l=c)}return i.loadTextureImage(t,a.source,l)}}class wx{constructor(t){this.parser=t,this.name=Jt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],r=n.images[a.source];let l=i.textureLoader;if(r.uri){const c=i.options.manager.getHandler(r.uri);c!==null&&(l=c)}return i.loadTextureImage(t,a.source,l)}}class Ex{constructor(t){this.name=Jt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(r){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,p=new Uint8Array(r,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,p,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,p,n.mode,n.filter),f})})}else return null}}class Ax{constructor(t){this.name=Jt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=e.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==Ti.TRIANGLES&&c.mode!==Ti.TRIANGLE_STRIP&&c.mode!==Ti.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,r=[],l={};for(const c in a)r.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return r.length<1?null:(r.push(this.parser.createNodeMesh(t)),Promise.all(r).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],p=c[0].count,f=[];for(const d of u){const _=new Kt,g=new L,m=new He,v=new L(1,1,1),b=new Ds(d.geometry,d.material,p);for(let x=0;x<p;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),b.setMatrixAt(x,_.compose(g,m,v));for(const x in l)if(x==="_COLOR_0"){const w=l[x];b.instanceColor=new Ga(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&d.geometry.setAttribute(x,l[x]);Se.prototype.copy.call(b,d),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Pd="glTF",lo=12,ru={JSON:1313821514,BIN:5130562};class Rx{constructor(t){this.name=Jt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,lo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Pd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-lo,s=new DataView(t,lo);let a=0;for(;a<n;){const r=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===ru.JSON){const c=new Uint8Array(t,lo+a,r);this.content=i.decode(c)}else if(l===ru.BIN){const c=lo+a;this.body=t.slice(c,c+r)}a+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Cx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Jt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,r={},l={},c={};for(const h in a){const u=Kl[h]||h.toLowerCase();r[u]=a[h]}for(const h in t.attributes){const u=Kl[h]||h.toLowerCase();if(a[h]!==void 0){const p=i.accessors[t.attributes[h]],f=Ns[p.componentType];c[u]=f.name,l[u]=p.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,p){n.decodeDracoFile(h,function(f){for(const d in f.attributes){const _=f.attributes[d],g=l[d];g!==void 0&&(_.normalized=g)}u(f)},r,c,di,p)})})}}class Px{constructor(){this.name=Jt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Lx{constructor(){this.name=Jt.KHR_MESH_QUANTIZATION}}class Ld extends Uo{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let a=0;a!==n;a++)e[a]=i[s+a];return e}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=r*2,c=r*3,h=n-e,u=(i-e)/h,p=u*u,f=p*u,d=t*c,_=d-c,g=-2*f+3*p,m=f-p,v=1-g,b=m-p+u;for(let x=0;x!==r;x++){const w=a[_+x+r],C=a[_+x+l]*h,T=a[d+x+r],A=a[d+x]*h;s[x]=v*w+b*C+g*T+m*A}return s}}const Ix=new He;class Dx extends Ld{interpolate_(t,e,i,n){const s=super.interpolate_(t,e,i,n);return Ix.fromArray(s).normalize().toArray(s),s}}const Ti={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lu={9728:ui,9729:yi,9984:qu,9985:wa,9986:mo,9987:xn},cu={33071:Wi,33648:Oa,10497:Mn},Xr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},In={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kx={CUBICSPLINE:void 0,LINEAR:Ro,STEP:Ao},$r={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nx(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new xi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yi})),o.DefaultMaterial}function $n(o,t,e){for(const i in e.extensions)o[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function mn(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Ux(o,t,e){let i=!1,n=!1,s=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(o);const a=[],r=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(i){const p=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):o.attributes.position;a.push(p)}if(n){const p=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):o.attributes.normal;r.push(p)}if(s){const p=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(p)}}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],p=c[2];return i&&(o.morphAttributes.position=h),n&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=p),o.morphTargetsRelative=!0,o})}function Fx(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)o.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ox(o){let t;const e=o.extensions&&o.extensions[Jt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+qr(e.attributes):t=o.indices+":"+qr(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,n=o.targets.length;i<n;i++)t+=":"+qr(o.targets[i]);return t}function qr(o){let t="";const e=Object.keys(o).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+o[e[i]]+";";return t}function Yl(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Bx(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const zx=new Kt;class Hx{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new cx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,a=-1;if(typeof navigator<"u"){const r=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(r)===!0;const l=r.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=r.indexOf("Firefox")>-1,a=s?r.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&a<98?this.textureLoader=new bd(this.options.manager):this.textureLoader=new im(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const r={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return $n(s,r,n),mn(r,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(r)})).then(function(){for(const l of r.scenes)l.updateMatrixWorld();t(r)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){const a=e[n].joints;for(let r=0,l=a.length;r<l;r++)t[a[r]].isBone=!0}for(let n=0,s=t.length;n<s;n++){const a=t[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const n=i.clone(),s=(a,r)=>{const l=this.associations.get(a);l!=null&&this.associations.set(r,l);for(const[c,h]of a.children.entries())s(h,r.children[c])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const n=t(e[i]);if(n)return n}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let n=0;n<e.length;n++){const s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){const i=t+":"+e;let n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,a){return i.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Jt.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,a){i.load(xo.resolveURL(e.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){const e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){const a=Xr[n.type],r=Ns[n.componentType],l=n.normalized===!0,c=new r(n.count*a);return Promise.resolve(new Fe(c,a,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){const r=a[0],l=Xr[n.type],c=Ns[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,p=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,d=n.normalized===!0;let _,g;if(f&&f!==u){const m=Math.floor(p/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count;let b=e.cache.get(v);b||(_=new c(r,m*f,n.count*f/h),b=new Rp(_,f/h),e.cache.add(v,b)),g=new yc(b,l,p%f/h,d)}else r===null?_=new c(n.count*l):_=new c(r,p,n.count*l),g=new Fe(_,l,d);if(n.sparse!==void 0){const m=Xr.SCALAR,v=Ns[n.sparse.indices.componentType],b=n.sparse.indices.byteOffset||0,x=n.sparse.values.byteOffset||0,w=new v(a[1],b,n.sparse.count*m),C=new c(a[2],x,n.sparse.count*l);r!==null&&(g=new Fe(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,A=w.length;T<A;T++){const S=w[T];if(g.setX(S,C[T*l]),l>=2&&g.setY(S,C[T*l+1]),l>=3&&g.setZ(S,C[T*l+2]),l>=4&&g.setW(S,C[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=d}return g})}loadTexture(t){const e=this.json,i=this.options,s=e.textures[t].source,a=e.images[s];let r=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(r=l)}return this.loadTextureImage(t,s,r)}loadTextureImage(t,e,i){const n=this,s=this.json,a=s.textures[t],r=s.images[e],l=(r.uri||r.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=a.name||r.name||"",h.name===""&&typeof r.uri=="string"&&r.uri.startsWith("data:image/")===!1&&(h.name=r.uri);const p=(s.samplers||{})[a.sampler]||{};return h.magFilter=lu[p.magFilter]||yi,h.minFilter=lu[p.minFilter]||xn,h.wrapS=cu[p.wrapS]||Mn,h.wrapT=cu[p.wrapT]||Mn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ui&&h.minFilter!==yi,n.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=n.images[t],r=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const p=new Blob([u],{type:a.mimeType});return l=r.createObjectURL(p),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(p,f){let d=p;e.isImageBitmapLoader===!0&&(d=function(_){const g=new We(_);g.needsUpdate=!0,p(g)}),e.load(xo.resolveURL(u,s.path),d,void 0,f)})}).then(function(u){return c===!0&&r.revokeObjectURL(l),mn(u,a),u.userData.mimeType=a.mimeType||Bx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,i,n){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Jt.KHR_TEXTURE_TRANSFORM]){const r=i.extensions!==void 0?i.extensions[Jt.KHR_TEXTURE_TRANSFORM]:void 0;if(r){const l=s.associations.get(a);a=s.extensions[Jt.KHR_TEXTURE_TRANSFORM].extendTexture(a,r),s.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const r="PointsMaterial:"+i.uuid;let l=this.cache.get(r);l||(l=new Ja,Ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(r,l)),i=l}else if(t.isLine){const r="LineBasicMaterial:"+i.uuid;let l=this.cache.get(r);l||(l=new bc,Ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(r,l)),i=l}if(n||s||a){let r="ClonedMaterial:"+i.uuid+":";n&&(r+="derivative-tangents:"),s&&(r+="vertex-colors:"),a&&(r+="flat-shading:");let l=this.cache.get(r);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(r,l),this.associations.set(l,this.associations.get(i))),i=l}t.material=i}getMaterialType(){return xi}loadMaterial(t){const e=this,i=this.json,n=this.extensions,s=i.materials[t];let a;const r={},l=s.extensions||{},c=[];if(l[Jt.KHR_MATERIALS_UNLIT]){const u=n[Jt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(r,s,e))}else{const u=s.pbrMetallicRoughness||{};if(r.color=new pt(1,1,1),r.opacity=1,Array.isArray(u.baseColorFactor)){const p=u.baseColorFactor;r.color.setRGB(p[0],p[1],p[2],di),r.opacity=p[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(r,"map",u.baseColorTexture,Ie)),r.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,r.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(r,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(r,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(t,r)})))}s.doubleSided===!0&&(r.side=_e);const h=s.alphaMode||$r.OPAQUE;if(h===$r.BLEND?(r.transparent=!0,r.depthWrite=!1):(r.transparent=!1,h===$r.MASK&&(r.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ze&&(c.push(e.assignTexture(r,"normalMap",s.normalTexture)),r.normalScale=new Nt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;r.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Ze&&(c.push(e.assignTexture(r,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(r.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ze){const u=s.emissiveFactor;r.emissive=new pt().setRGB(u[0],u[1],u[2],di)}return s.emissiveTexture!==void 0&&a!==Ze&&c.push(e.assignTexture(r,"emissiveMap",s.emissiveTexture,Ie)),Promise.all(c).then(function(){const u=new a(r);return s.name&&(u.name=s.name),mn(u,s),e.associations.set(u,{materials:t}),s.extensions&&$n(n,u,s),u})}createUniqueName(t){const e=xe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,n=this.primitiveCache;function s(r){return i[Jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r,e).then(function(l){return hu(l,r,e)})}const a=[];for(let r=0,l=t.length;r<l;r++){const c=t[r],h=Ox(c),u=n[h];if(u)a.push(u.promise);else{let p;c.extensions&&c.extensions[Jt.KHR_DRACO_MESH_COMPRESSION]?p=s(c):p=hu(new Be,c,e),n[h]={primitive:c,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(t){const e=this,i=this.json,n=this.extensions,s=i.meshes[t],a=s.primitives,r=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Nx(this.cache):this.getDependency("material",a[l].material);r.push(h)}return r.push(e.loadGeometries(a)),Promise.all(r).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,d=h.length;f<d;f++){const _=h[f],g=a[f];let m;const v=c[f];if(g.mode===Ti.TRIANGLES||g.mode===Ti.TRIANGLE_STRIP||g.mode===Ti.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new Pp(_,v):new Qt(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Ti.TRIANGLE_STRIP?m.geometry=au(m.geometry,ed):g.mode===Ti.TRIANGLE_FAN&&(m.geometry=au(m.geometry,Gl));else if(g.mode===Ti.LINES)m=new md(_,v);else if(g.mode===Ti.LINE_STRIP)m=new Mc(_,v);else if(g.mode===Ti.LINE_LOOP)m=new Up(_,v);else if(g.mode===Ti.POINTS)m=new Sc(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Fx(m,s),m.name=e.createUniqueName(s.name||"mesh_"+t),mn(m,s),g.extensions&&$n(n,m,g),e.assignFinalMaterial(m),u.push(m)}for(let f=0,d=u.length;f<d;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&$n(n,u[0],s),u[0];const p=new Me;s.extensions&&$n(n,p,s),e.associations.set(p,{meshes:t});for(let f=0,d=u.length;f<d;f++)p.add(u[f]);return p})}loadCamera(t){let e;const i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new hi(ja.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new ir(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),mn(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),a=n,r=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){r.push(u);const p=new Kt;s!==null&&p.fromArray(s.array,c*16),l.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new xc(r,l)})}loadAnimation(t){const e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,a=[],r=[],l=[],c=[],h=[];for(let u=0,p=n.channels.length;u<p;u++){const f=n.channels[u],d=n.samplers[f.sampler],_=f.target,g=_.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,v=n.parameters!==void 0?n.parameters[d.output]:d.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(d),h.push(_))}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const p=u[0],f=u[1],d=u[2],_=u[3],g=u[4],m=[];for(let v=0,b=p.length;v<b;v++){const x=p[v],w=f[v],C=d[v],T=_[v],A=g[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=i._createAnimationTracks(x,w,C,T,A);if(S)for(let M=0;M<S.length;M++)m.push(S[M])}return new Io(s,void 0,m)})}createNodeMesh(t){const e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(r){if(r.isMesh)for(let l=0,c=n.weights.length;l<c;l++)r.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(t){const e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),a=[],r=n.children||[];for(let c=0,h=r.length;c<h;c++)a.push(i.getDependency("node",r[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],p=c[2];p!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(p,zx)});for(let f=0,d=u.length;f<d;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],a=s.name?n.createUniqueName(s.name):"",r=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&r.push(l),s.camera!==void 0&&r.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){r.push(c)}),this.nodeCache[t]=Promise.all(r).then(function(c){let h;if(s.isBone===!0?h=new fd:c.length>1?h=new Me:c.length===1?h=c[0]:h=new Se,h!==c[0])for(let u=0,p=c.length;u<p;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),mn(h,s),s.extensions&&$n(i,h,s),s.matrix!==void 0){const u=new Kt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){const u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],n=this,s=new Me;i.name&&(s.name=n.createUniqueName(i.name)),mn(s,i),i.extensions&&$n(e,s,i);const a=i.nodes||[],r=[];for(let l=0,c=a.length;l<c;l++)r.push(n.getDependency("node",a[l]));return Promise.all(r).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[p,f]of n.associations)(p instanceof Ui||p instanceof We)&&u.set(p,f);return h.traverse(p=>{const f=n.associations.get(p);f!=null&&u.set(p,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(t,e,i,n,s){const a=[],r=t.name?t.name:t.uuid,l=[];In[s.path]===In.weights?t.traverse(function(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}):l.push(r);let c;switch(In[s.path]){case In.weights:c=Vs;break;case In.rotation:c=ns;break;case In.translation:case In.scale:c=ss;break;default:i.itemSize===1?c=Vs:c=ss;break}const h=n.interpolation!==void 0?kx[n.interpolation]:Ro,u=this._getArrayFromAccessor(i);for(let p=0,f=l.length;p<f;p++){const d=new c(l[p]+"."+In[s.path],e.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(d),a.push(d)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=Yl(e.constructor),n=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const n=this instanceof ns?Dx:Ld;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Gx(o,t,e){const i=t.attributes,n=new Zi;if(i.POSITION!==void 0){const r=e.json.accessors[i.POSITION],l=r.min,c=r.max;if(l!==void 0&&c!==void 0){if(n.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),r.normalized){const h=Yl(Ns[r.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const r=new L,l=new L;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const p=e.json.accessors[u.POSITION],f=p.min,d=p.max;if(f!==void 0&&d!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(d[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(d[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(d[2]))),p.normalized){const _=Yl(Ns[p.componentType]);l.multiplyScalar(_)}r.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(r)}o.boundingBox=n;const a=new Ji;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,o.boundingSphere=a}function hu(o,t,e){const i=t.attributes,n=[];function s(a,r){return e.getDependency("accessor",a).then(function(l){o.setAttribute(r,l)})}for(const a in i){const r=Kl[a]||a.toLowerCase();r in o.attributes||n.push(s(i[a],r))}if(t.indices!==void 0&&!o.index){const a=e.getDependency("accessor",t.indices).then(function(r){o.setIndex(r)});n.push(a)}return ae.workingColorSpace!==di&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ae.workingColorSpace}" not supported.`),mn(o,t),Gx(o,t,e),Promise.all(n).then(function(){return t.targets!==void 0?Ux(o,t.targets,e):o})}function Ws(o){return`./${o}`}const uu=Object.freeze({low:0,medium:1,high:2}),du=15857901,fu=[-34,34],pu=[-25,25];function co(o=334545){let t=o>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function pa(o,t,e){const i=document.createElement("canvas");i.width=o,i.height=t;const n=i.getContext("2d");e(n,o,t);const s=new No(i);return s.colorSpace=Ie,s.wrapS=Wi,s.wrapT=Wi,s.needsUpdate=!0,s}class Vx{constructor({scene:t,renderer:e,pitch:i}={}){if(!t?.add)throw new TypeError("Stadium requires a THREE.Scene-like `scene`.");this.scene=t,this.renderer=e??null,this.pitch=i??{};const n=i?.config??i?.dimensions??i??{};this.dimensions={width:Number(n.width??n.pitchWidth)||68,length:Number(n.length??n.pitchLength)||105,goalWidth:Number(n.goalWidth)||18,goalHeight:Number(n.goalHeight)||6.5,goalDepth:Number(n.goalDepth)||4},this.root=new Me,this.root.name="Procedural night stadium",this.field=new Me,this.field.name="Pitch and markings",this.root.add(this.field),this.scene.add(this.root),this._materials=new Set,this._geometries=new Set,this._textures=new Set,this._adMaterials=[],this._floodlights=[],this._time=0,this._scoreSignature="",this._celebration=0,this._disposed=!1,this.quality="high",this._previousScene={background:t.background,fog:t.fog},this._previousRenderer=this.renderer?{shadowEnabled:this.renderer.shadowMap.enabled,shadowType:this.renderer.shadowMap.type,toneMapping:this.renderer.toneMapping,toneMappingExposure:this.renderer.toneMappingExposure,outputColorSpace:this.renderer.outputColorSpace}:null,this._configureAtmosphere(),this._createSkyAndCity(),this._createPitch(),this._createGoals(),this._createCornerFlags(),this._createAdvertising(),this._createStands(),this._createPitchside(),this._createCrowd(),this._createRoofAndLights(),this._createTechnicalArea(),this.setQuality("high")}_geometry(t){return this._geometries.add(t),t}_material(t){return this._materials.add(t),t}_texture(t){return this._textures.add(t),t}_standard(t,e={}){return this._material(new xi({color:t,roughness:e.roughness??.68,metalness:e.metalness??.02,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??0,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Yi,depthWrite:e.depthWrite??!0,map:e.map??null,emissiveMap:e.emissiveMap??null}))}_mesh(t,e,i=this.root,n={}){const s=new Qt(t,e);return n.position&&s.position.set(...n.position),n.rotation&&s.rotation.set(...n.rotation),s.castShadow=n.castShadow??!1,s.receiveShadow=n.receiveShadow??!1,i.add(s),s}_box(t,e,i,n=this.root,s={}){return this._mesh(this._geometry(new qi(...t)),i,n,{...s,position:e})}_beamBetween(t,e,i,n,s=this.root,a=6){const r=new L(...t),l=new L(...e),c=l.clone().sub(r),h=this._mesh(this._geometry(new $s(i,i,c.length(),a)),n,s,{castShadow:!0});return h.position.copy(r).add(l).multiplyScalar(.5),h.quaternion.setFromUnitVectors(new L(0,1,0),c.normalize()),h}_configureAtmosphere(){this._stadiumBackground=new pt(198675),this._stadiumFog=new _c(661028,.0022),this.scene.background=this._stadiumBackground,this.scene.fog=this._stadiumFog,this.renderer&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=sc,this.renderer.toneMapping=Ka,this.renderer.toneMappingExposure=1.08,this.renderer.outputColorSpace=Ie)}_createSkyAndCity(){const t=this._material(new ni({side:si,depthWrite:!1,uniforms:{topColor:{value:new pt(132108)},horizonColor:{value:new pt(1916262)}},vertexShader:`varying float vHeight;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vHeight = normalize(world.xyz).y;
          gl_Position = projectionMatrix * viewMatrix * world;
        }`,fragmentShader:`uniform vec3 topColor;
        uniform vec3 horizonColor;
        varying float vHeight;
        void main() {
          float blend = smoothstep(-0.18, 0.68, vHeight);
          gl_FragColor = vec4(mix(horizonColor, topColor, blend), 1.0);
        }`}));this.sky=this._mesh(this._geometry(new tr(245,32,18)),t,this.root),this.sky.name="Gradient night sky";const e=co(10949070),i=520,n=new Float32Array(i*3),s=new Float32Array(i*3);for(let u=0;u<i;u+=1){const p=e()*Math.PI*2,f=.16+e()*.78,d=205+e()*18,_=Math.cos(f)*d;n[u*3]=Math.cos(p)*_,n[u*3+1]=Math.sin(f)*d,n[u*3+2]=Math.sin(p)*_,new pt().setHSL(.54+e()*.09,.22,.72+e()*.28).toArray(s,u*3)}const a=this._geometry(new Be);a.setAttribute("position",new Fe(n,3)),a.setAttribute("color",new Fe(s,3)),this.stars=new Sc(a,this._material(new Ja({size:.62,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.88,depthWrite:!1,fog:!1}))),this.stars.name="Stars",this.root.add(this.stars);const r=this._geometry(new qi(1,1,1)),l=this._standard(462876,{roughness:.92,emissive:1586004,emissiveIntensity:.12}),c=52;this.city=new Ds(r,l,c),this.city.name="Distant city skyline";const h=new Se;for(let u=0;u<c;u+=1){const p=u<c/2,f=8+e()*28,d=4+e()*8,_=4+e()*8;p?h.position.set((e()<.5?-1:1)*(91+e()*18),f/2-2,-108+e()*216):h.position.set(-105+e()*210,f/2-2,(e()<.5?-1:1)*(116+e()*18)),h.scale.set(d,f,_),h.rotation.y=e()*.12-.06,h.updateMatrix(),this.city.setMatrixAt(u,h.matrix)}this.city.instanceMatrix.needsUpdate=!0,this.root.add(this.city)}_createPitchTexture(){const t=co(9567270),e=pa(1024,1536,(i,n,s)=>{i.fillStyle="#2c7d33",i.fillRect(0,0,n,s);const a=15,r=s/a;for(let c=0;c<a;c+=1){const h=c%2===0?1:0;i.fillStyle=h?"rgba(132,196,92,.21)":"rgba(8,58,26,.17)",i.fillRect(0,c*r,n,r+1)}for(let c=0;c<1500;c+=1){const h=t()>.5?255:0;i.fillStyle=`rgba(${h},${h},${h},${.008+t()*.012})`,i.fillRect(t()*n,t()*s,1+t()*3,1+t()*6)}for(let c=0;c<10;c+=1)i.fillStyle=c%2?"rgba(255,255,255,.035)":"rgba(0,0,0,.04)",i.fillRect(c*n/10,0,n/10+1,s);const l=i.createRadialGradient(n/2,s/2,10,n/2,s/2,s*.7);l.addColorStop(0,"rgba(255,255,220,.07)"),l.addColorStop(1,"rgba(0,0,0,.18)"),i.fillStyle=l,i.fillRect(0,0,n,s)});return e.anisotropy=Math.min(8,this.renderer?.capabilities?.getMaxAnisotropy?.()??4),this._texture(e)}_createPitch(){const{width:t,length:e}=this.dimensions,i=this._standard(465688,{roughness:.96}),n=this._mesh(this._geometry(new wi(t+30,e+30)),i,this.field,{position:[0,-.055,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0});n.name="Pitch apron";const s=this._standard(16777215,{roughness:.92,map:this._createPitchTexture()}),a=pa(256,256,(m,v,b)=>{const x=co(6827);m.fillStyle="#808080",m.fillRect(0,0,v,b);for(let w=0;w<1e4;w++){const C=Math.floor(65+x()*125);m.fillStyle=`rgb(${C},${C},${C})`,m.fillRect(x()*v,x()*b,.6,1+x()*5)}});a.colorSpace=_n,a.wrapS=a.wrapT=Mn,a.repeat.set(34,52),a.anisotropy=Math.min(8,this.renderer?.capabilities?.getMaxAnisotropy?.()??4),s.bumpMap=this._texture(a),s.bumpScale=.045;const r={uGrassDetail:{value:s.bumpMap},uTurfAlbedo:{value:s.map},uHasTurf:{value:0}};new bd().load(Ws("assets/nova-turf.webp"),m=>{if(this._disposed){m.dispose();return}m.colorSpace=Ie,m.wrapS=m.wrapT=Mn,m.anisotropy=a.anisotropy,this.turfAlbedo=this._texture(m),r.uTurfAlbedo.value=m,r.uHasTurf.value=1}),s.onBeforeCompile=m=>{Object.assign(m.uniforms,r),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uGrassDetail;
uniform sampler2D uTurfAlbedo;
uniform float uHasTurf;`).replace("#include <map_fragment>",`#include <map_fragment>
          {
            float fine = texture2D(uGrassDetail, vMapUv * vec2(150.0, 230.0)).r;
            float mid = texture2D(uGrassDetail, vMapUv * vec2(23.0, 37.0) + 0.37).r;
            float wear = texture2D(uGrassDetail, vMapUv * vec2(2.3, 3.1) + 0.11).r;
            vec2 turfUv = vMapUv * vec2(21.0, 32.0);
            vec3 blades = texture2D(uTurfAlbedo, turfUv).rgb;
            vec3 patches = texture2D(uTurfAlbedo, turfUv.yx * 0.41 + vec2(0.27, 0.62)).rgb;
            float mowing = clamp(diffuseColor.g * 4.9, 0.73, 1.26);
            vec3 textured = mix(blades, patches, 0.24) * mowing;
            textured *= mix(0.88, 1.08, smoothstep(0.24, 0.72, wear));
            diffuseColor.rgb = mix(diffuseColor.rgb * mix(0.76, 1.25, fine), textured, uHasTurf);
            diffuseColor.rgb *= mix(0.94, 1.07, mid);
          }`)},s.customProgramCacheKey=()=>"nova-turf-v2";const l=this._mesh(this._geometry(new wi(t,e,1,1)),s,this.field,{position:[0,0,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0});l.name="Striped grass",this.grass=l;const c=this._material(new Ze({color:du,side:_e,toneMapped:!1})),h=(m,v)=>this._paintLines(m,c,v),u=.016,p=t/2,f=e/2;h([-p,u,-f,p,u,-f,p,u,-f,p,u,f,p,u,f,-p,u,f,-p,u,f,-p,u,-f,-p,u,0,p,u,0],"Touchlines, goal lines and halfway line");const d=(m,v,b,x,w)=>h([m,u,b,v,u,b,v,u,b,v,u,x,v,u,x,m,u,x,m,u,x,m,u,b],w),_=Math.min(t-3,40.32),g=Math.min(t-5,18.32);for(const m of[-1,1]){const v=m*f;d(-_/2,_/2,Math.min(v,v-m*16.5),Math.max(v,v-m*16.5),"Penalty area"),d(-g/2,g/2,Math.min(v,v-m*5.5),Math.max(v,v-m*5.5),"Goal area"),this._addSpot(0,m*(f-11),.19);const b=m*(f-11),x=m>0?Math.PI*1.205:Math.PI*.205,w=m>0?Math.PI*1.795:Math.PI*.795;this._addArc(0,b,9.15,x,w,!1,c,"Penalty arc")}this._addArc(0,0,9.15,0,Math.PI*2,!0,c,"Centre circle"),this._addSpot(0,0,.21);for(const m of[-1,1])for(const v of[-1,1]){const b=[];for(let x=0;x<=12;x+=1){const w=x/12*Math.PI/2;b.push(new L(m*p-m*Math.cos(w),u,v*f-v*Math.sin(w)))}this._paintLines(b.slice(1).flatMap((x,w)=>[...b[w].toArray(),...x.toArray()]),c,"Corner arc")}}_addArc(t,e,i,n,s,a,r,l){const c=[],h=a?72:30;for(let u=0;u<=h;u+=1){const p=n+(s-n)*u/h;c.push(new L(t+Math.cos(p)*i,.016,e+Math.sin(p)*i))}this._paintLines(c.slice(1).flatMap((u,p)=>[...c[p].toArray(),...u.toArray()]),r,l)}_paintLines(t,e,i){const n=[];for(let r=0;r<t.length;r+=6){const[l,c,h,u,,p]=t.slice(r,r+6),f=u-l,d=p-h,_=.055/Math.hypot(f,d),g=-d*_,m=f*_;n.push(l+g,c,h+m,l-g,c,h-m,u+g,c,p+m,l-g,c,h-m,u-g,c,p-m,u+g,c,p+m)}const s=this._geometry(new Be);s.setAttribute("position",new Ae(n,3));const a=new Qt(s,e);return a.name=i,this.field.add(a),a}_addSpot(t,e,i){const n=this._material(new Ze({color:du,toneMapped:!1})),s=this._mesh(this._geometry(new Lo(i,20)),n,this.field,{position:[t,.048,e],rotation:[-Math.PI/2,0,0]});s.name="Pitch spot"}_createGoals(){const{length:t,goalWidth:e,goalHeight:i,goalDepth:n}=this.dimensions,s=this._standard(16251903,{roughness:.25,metalness:.3,emissive:12181503,emissiveIntensity:.07});this.nets=[];const a=()=>{const r={uHit:{value:new fe(0,0,0,0)},uAge:{value:99},uTime:{value:0}},l=this._material(new bc({color:15398651,transparent:!0,opacity:.5,depthWrite:!1}));return l.onBeforeCompile=c=>{Object.assign(c.uniforms,r),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aNet; uniform vec4 uHit; uniform float uAge; uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
            {
              // aNet = outward normal (xyz) and how free the cord is to move (w, 0 at the frame).
              float d = distance(position, uHit.xyz);
              float bulge = exp(-d * d / 2.4) * exp(-uAge * 1.5);
              float ripple = exp(-uAge * 2.1) * cos(uAge * 11.0 - d * 3.2) * (0.35 + 0.65 * exp(-d * d / 14.0));
              float breeze = sin(uTime * 1.3 + position.x * 1.7 + position.y * 2.3) * 0.012;
              transformed += aNet.xyz * aNet.w * (uHit.w * (bulge * 0.85 + ripple * 0.3) + breeze);
              // The whole net sags a little under its own weight.
              transformed.y -= aNet.w * 0.035 * abs(aNet.y);
            }`)},l.customProgramCacheKey=()=>"nova-net-v1",{material:l,uniforms:r}};for(const r of[-1,1]){const l=new Me;l.name=r>0?"North goal":"South goal";const c=r*t/2,h=c+r*n,u=i*.72,p=Math.max(.08,Math.min(.16,e*.009));this._beamBetween([-e/2,0,c],[-e/2,i,c],p,s,l,10),this._beamBetween([e/2,0,c],[e/2,i,c],p,s,l,10),this._beamBetween([-e/2,i,c],[e/2,i,c],p,s,l,10),this._beamBetween([-e/2,i,c],[-e/2,u,h],p*.55,s,l,6),this._beamBetween([e/2,i,c],[e/2,u,h],p*.55,s,l,6),this._beamBetween([-e/2,.04,h],[e/2,.04,h],p*.48,s,l,6);const f=.12,d=[],_=[],g=new L,m=(A,S,M,y,R)=>{const D=Math.max(2,Math.round(new L(...S).distanceTo(new L(...A))/f)),k=Math.max(2,Math.round(new L(...M).distanceTo(new L(...A))/f)),F=(z,$)=>{for(let U=0;U<3;U+=1)g.setComponent(U,(A[U]*(1-z)+S[U]*z)*(1-$)+(M[U]*(1-z)+y[U]*z)*$);d.push(g.x,g.y,g.z),_.push(R[0],R[1],R[2],Math.min(1,Math.min(z,1-z,$,1-$)*5))};for(let z=0;z<=D;z+=1)for(let $=0;$<k;$+=1)F(z/D,$/k),F(z/D,($+1)/k);for(let z=0;z<=k;z+=1)for(let $=0;$<D;$+=1)F($/D,z/k),F(($+1)/D,z/k)},v=e/2,b=new L(0,n,r*(i-u)).normalize();m([-v,.02,h],[v,.02,h],[-v,u,h],[v,u,h],[0,0,r]),m([-v,i,c],[v,i,c],[-v,u,h],[v,u,h],[b.x,b.y,b.z]);for(const A of[-v,v])m([A,.02,c],[A,.02,h],[A,i,c],[A,u,h],[Math.sign(A),0,0]);const x=this._geometry(new Be);x.setAttribute("position",new Ae(d,3)),x.setAttribute("aNet",new Ae(_,4));const{material:w,uniforms:C}=a(),T=new md(x,w);T.name="Goal net",T.frustumCulled=!1,this.nets.push({side:r,uniforms:C}),l.add(T),this.root.add(l)}}_createCornerFlags(){const{width:t,length:e}=this.dimensions,i=this._standard(15922665,{roughness:.4}),n=[this._standard(1697479,{roughness:.65,side:_e}),this._standard(16727409,{roughness:.65,side:_e})];for(const s of[-1,1])for(const a of[-1,1]){const r=new Me;r.position.set(s*t/2,0,a*e/2),this._beamBetween([0,0,0],[0,2.15,0],.035,i,r,8);const l=-s,c=new Float32Array([0,2.08,0,l*.82,1.78,0,0,1.52,0]),h=this._geometry(new Be);h.setAttribute("position",new Fe(c,3)),h.computeVertexNormals(),this._mesh(h,n[s===a?0:1],r),r.name="Corner flag",this.root.add(r)}}_adTexture(t,e){return this._texture(pa(768,96,(i,n,s)=>{const a=i.createLinearGradient(0,0,n,0);a.addColorStop(0,"#07131f"),a.addColorStop(.48,e),a.addColorStop(.52,e),a.addColorStop(1,"#07131f"),i.fillStyle=a,i.fillRect(0,0,n,s),i.fillStyle="rgba(255,255,255,.13)";for(let r=0;r<n;r+=12)i.fillRect(r,0,3,s);i.font="900 42px Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.letterSpacing="4px",i.shadowColor="#000",i.shadowBlur=10,i.fillStyle="#f5fbff",i.fillText(t,n/2,s/2+2)}))}_createAdvertising(){const{width:t,length:e}=this.dimensions,n=[["NOVA FOOTBALL 26","#0ac9af"],["PLAY BEYOND","#ec2f68"],["THE WORLD'S GAME","#3868ed"],["AURORA ARENA","#8d5cff"],["PURE FOOTBALL","#e4a924"],["MAKE HISTORY","#0ac9af"]].map(([h,u])=>this._adTexture(h,u));this._adTextures=n;const s=this._standard(198413,{roughness:.48,metalness:.55});let a=0;const r=(h,u,p)=>{const f=new Me;f.position.set(...h),f.rotation.y=u,this._box([p,Bi.boardHeight,.18],[0,Bi.boardHeight/2,0],s,f,{castShadow:!0});const d=n[Math.floor(a/4)%n.length];a+=1;const _=this._material(new xi({color:16777215,map:d,emissive:16777215,emissiveMap:d,emissiveIntensity:.78,roughness:.35,metalness:.1,toneMapped:!1}));this._adMaterials.push(_),this._mesh(this._geometry(new wi(p-.11,Bi.boardHeight-.12)),_,f,{position:[0,Bi.boardHeight/2,.096]}),f.name="LED advertising board",this.root.add(f)},l=12.24;for(const h of[-1,1])for(let u=-e/2+6.2;u<e/2;u+=12.4){const p=h*(t/2+Bi.boards),f=h>0?-Math.PI/2:Math.PI/2,d=Nn.halfOpening+.25,_=u-l/2,g=u+l/2;if(h>0)r([p,0,u],f,l);else for(const[m,v]of[[-1/0,-19.5],[-8.8,-d],[d,8.8],[19.5,1/0]]){const b=Math.max(_,m),x=Math.min(g,v);x-b>.5&&r([p,0,(b+x)/2],f,x-b)}}const c=10.86;for(const h of[-1,1])for(let u=-t/2+5.5;u<t/2;u+=11)r([u,0,h*(e/2+Bi.boards)],h>0?Math.PI:0,c)}_crowdTexture(){const t=co(12648430),e=["#19e6c7","#19e6c7","#12b8a0","#0f8f86","#ff3d71","#ff3d71","#f4f6f8","#f4f6f8","#1b2a44","#26354a","#e9b949","#8d99a8","#c7d0da","#d8483a"],i=["#f0c4a0","#d9a07a","#a8714e","#7a4c33","#e8b48f"],n=pa(1024,512,(s,a,r)=>{s.fillStyle="#0d141d",s.fillRect(0,0,a,r);const l=12,c=30,h=r/l,u=a/c;for(let p=0;p<l;p+=1){const f=p*h,d=s.createLinearGradient(0,f,0,f+h);d.addColorStop(0,"#1b2735"),d.addColorStop(1,"#070b11"),s.fillStyle=d,s.fillRect(0,f,a,h);for(let _=-1;_<c;_+=1){const g=_*u+(p%2?u*.5:0);if(s.fillStyle="#15314a",s.fillRect(g+u*.12,f+h*.56,u*.76,h*.4),t()<.06)continue;const m=(t()-.5)*u*.16,v=t()<.25?h*.1:0;s.fillStyle=e[Math.floor(t()*e.length)],s.beginPath(),s.roundRect(g+u*.15+m,f+h*.42-v,u*.7,h*.62+v,u*.22),s.fill(),s.fillStyle=i[Math.floor(t()*i.length)],s.beginPath(),s.arc(g+u*.5+m,f+h*.3-v,u*.2,0,Math.PI*2),s.fill(),t()<.7&&(s.fillStyle=t()<.25?e[Math.floor(t()*e.length)]:"#1a1411",s.beginPath(),s.arc(g+u*.5+m,f+h*.27-v,u*.205,Math.PI,Math.PI*2),s.fill())}}});return n.wrapS=n.wrapT=Mn,n.anisotropy=Math.min(8,this.renderer?.capabilities?.getMaxAnisotropy?.()??4),this._texture(n)}_ring(t,e,i,n,s,a,r=12,l=0){const c=this.dimensions.width/2,h=this.dimensions.length/2,u=Math.hypot(e-t,n-i)/9.6,p=[],f=[],d=[],_=(v,b,x,w,C,T)=>{const A=p.length/3;p.push(...v,...b,...x,...w),f.push(C[0],0,C[1],0,T[1],u,T[0],u),d.push(A,A+1,A+2,A,A+2,A+3)};for(const v of[-1,1]){const b=v*(c+t),x=v*(c+e),w=h+t,C=h+e,T=v===-1&&l?[[-w,-l,-C,-l],[l,w,l,C]]:[[-w,w,-C,C]];for(const[R,D,k,F]of T)_([b,i,R],[b,i,D],[x,n,F],[x,n,k],[R/r,D/r],[k/r,F/r]);const A=v*(h+t),S=v*(h+e),M=c+t,y=c+e;_([-M,i,A],[M,i,A],[y,n,S],[-y,n,S],[-M/r,M/r],[-y/r,y/r])}const g=this._geometry(new Be);g.setAttribute("position",new Ae(p,3)),g.setAttribute("uv",new Ae(f,2)),g.setIndex(d),g.computeVertexNormals();const m=new Qt(g,s);return m.name=a,this.stands.add(m),m}_createStands(){const{width:t,length:e}=this.dimensions;this.stands=new Me,this.stands.name="Stadium bowl",this.root.add(this.stands);const i=this._crowdTexture();this.crowdMaterial=this._material(new xi({map:i,color:12107980,emissive:16777215,emissiveMap:i,emissiveIntensity:.2,roughness:.95,metalness:0,side:_e}));const n=this._standard(1317926,{roughness:.85,metalness:.1,side:_e});this._seatMaterial=this._standard(923426,{roughness:.92,metalness:.05,side:_e});const s=this._standard(529183,{roughness:.5,metalness:.35,side:_e});this._ribbonMaterial=this._standard(1697479,{emissive:1697479,emissiveIntensity:1.6,roughness:.4,side:_e});const a=this._standard(4608858,{roughness:.9,side:_e});this._ring(8,8.01,0,1.25,a,"Pitch-side wall",12,Nn.halfOpening),this._ring(8,24,1.25,9.2,this.crowdMaterial,"Lower tier crowd",12,Nn.halfOpening),this._ring(24,24.6,9.2,12.4,s,"Tier fascia"),this._ring(24.05,24.3,10.4,10.9,this._ribbonMaterial,"LED ribbon"),this._ring(24.6,41,12.4,25.4,this.crowdMaterial,"Upper tier crowd"),this._ring(41,41.01,0,31.5,n,"Outer wall");const r=this._standard(725272,{roughness:.8,metalness:.15});this._box([t+90,.8,e+90],[0,-.62,0],r,this.stands,{receiveShadow:!0})}_createCrowd(){new Pc().load(Ws("assets/nova-fan.glb"),t=>{if(this._disposed)return;let e=null;t.scene.traverse(a=>{a.isMesh&&(e=a)}),e.updateWorldMatrix(!0,!1);const i=e.geometry.clone().applyMatrix4(e.matrixWorld),n=i.getAttribute("color"),s=new Float32Array(n.count*3);for(let a=0;a<n.count;a+=1)s[a*3]=n.getX(a),s[a*3+1]=n.getY(a),s[a*3+2]=n.getZ(a);i.deleteAttribute("color"),i.setAttribute("aMask",new Fe(s,3)),this._buildCrowd(i),this.setQuality(this.quality)})}_createPitchside(){const t=this.dimensions.width/2,e=this.dimensions.length/2,i=this._standard(3495480,{roughness:.97,side:_e}),n=this._standard(3888212,{roughness:.92,side:_e}),s=this._ring(0,Bi.boards,-.02,-.02,i,"Turf runoff"),a=this._ring(Bi.boards,Bi.rail,-.02,-.02,n,"Pitchside service lane",12,Nn.halfOpening);s.receiveShadow=a.receiveShadow=!0;const r=new Me,l=this._standard(8885914,{metalness:.42,roughness:.54}),c=this._standard(1514785,{roughness:.89}),h=this._standard(6781059,{roughness:.48,metalness:.62}),u=this._standard(14266178,{roughness:.72}),p=this._standard(3235200,{roughness:.83}),f=this._standard(8950425,{roughness:1}),d=this._standard(6648184,{roughness:.92});this.supporterBanners={};const _=["home","away"].map(b=>{const x=this._texture(new No(document.createElement("canvas")));return x.colorSpace=Ie,this.supporterBanners[b]=x,this._material(new xi({map:x,roughness:.92,side:_e,emissive:2435886,emissiveMap:x,emissiveIntensity:.45}))}),g=(b,x,w,C)=>{const T=(U,V,Q)=>b?[U,Q,x*(C+V)]:[x*(C+V),Q,U],A=(U,V,Q)=>b?[U,V,Q]:[Q,V,U],S=(U,V,Q,xt,zt,te,re)=>this._box(A(xt,zt,te),T(U,V,Q),re,r),M=Bi.rail,y=!b&&x<0?Nn.halfOpening+.45:0,R=-w-M+.22,D=w+M-.22,k=b?pu:fu,F=k.map(U=>[U-.78,U+.78]);y&&F.splice(1,0,[-y,y]);const z=F.map(([U],V)=>[V?F[V-1][1]:R,U]);z.push([F.at(-1)[1],D]);for(const[U,V]of z){for(const Q of[1.27,1.94])S((U+V)/2,M,Q,V-U,.046,.058,l);for(let Q=U+.15;Q<V;Q+=2.75)S(Q,M,1.59,.048,.7,.055,l)}for(let U=-w+4,V=0;U<=w-3;U+=6.5,V++){if(y&&Math.abs(U)<=y+2.8||k.some(te=>Math.abs(te-U)<3.15))continue;const Q=M-.13,xt=this._mesh(this._geometry(new wi(V%4===0?5.3:4.3,.57,12,1)),_[U>0?1:0],r,{position:T(U,Q,1.56),rotation:[0,b?x>0?Math.PI:0:-x*Math.PI/2,0]}),zt=xt.geometry.attributes.position;for(let te=0;te<zt.count;te++)zt.setZ(te,.024*Math.sin(zt.getX(te)*4.2));xt.geometry.computeVertexNormals()}for(const U of k){for(let V=0;V<8;V++)S(U,6.17+V*.23,(V+1)*.078,1.38,(V+1)*.156,.24,d);for(let V=0;V<20;V++){const Q=1.25+(V+1)*7.949999999999999/20;S(U,8.4+V*.8,Q-.21,1.46,.43,.81,d)}}const $=b?[-24,-12,11,23]:[-40,-24,24,41];for(const[U,V]of $.entries()){const Q=5.9+U%2*.4;S(V,Q,.41,.78,.66,.56,c),S(V,Q,.75,.8,.05,.57,h),S(V,Q-.286,.49,.18,.11,.03,h);for(const xt of[-.29,.29])S(V+xt,Q-.17,.075,.1,.14,.12,c),S(V+xt,Q+.17,.075,.1,.14,.12,c);if(S(V-1.65,6.96,.025,3.3,.046,.15,c),S(V-1.03,6.96,.049,.65,.016,.1,u),!(!b&&U%2===0)){S(V+1.22,5.6,.48,.48,.07,.47,p),S(V+1.22,5.83,.78,.48,.41,.075,p);for(const xt of[-.18,.18])this._beamBetween(T(V+1.22+xt,5.34,.03),T(V+1.22+xt,5.83,.55),.018,h,r),this._beamBetween(T(V+1.22+xt,5.86,.03),T(V+1.22+xt,5.41,.51),.018,h,r);S(V+3.1,2.35,.024,.29,.038,.26,c),S(V+3.1,2.35,.19,.025,.34,.025,l),S(V+3.1,2.35,.41,.26,.13,.12,f)}}};for(const b of[-1,1])g(!1,b,e,t),g(!0,b,t,e);r.updateMatrixWorld(!0);const m=new Map;for(const b of r.children){const x=m.get(b.material)??[];x.push(b.geometry.applyMatrix4(b.matrixWorld)),m.set(b.material,x)}const v=new Me;v.name="Pitchside rail, flags and broadcast equipment";for(const[b,x]of m){const w=this._geometry(lx(x));v.add(new Qt(w,b));for(const C of x)this._geometries.delete(C),C.dispose()}this.root.add(v)}setSupporters(t){for(const e of["home","away"]){const i=this.supporterBanners[e],n=i.image,s=t[e];n.width=512,n.height=80;const a=n.getContext("2d");a.fillStyle=new pt(s.primary).getStyle(),a.fillRect(0,0,512,80),a.fillStyle="rgba(2,8,16,0.50)",a.fillRect(0,12,512,56),a.fillStyle=new pt(s.secondary).getStyle(),a.fillRect(0,0,512,7),a.fillRect(0,73,512,7),a.fillStyle="#f5f2e3",a.font="900 33px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(s.name.toUpperCase(),256,41,400),a.fillRect(24,35,16,10),a.fillRect(472,35,16,10),i.needsUpdate=!0}}_buildCrowd(t){const{width:e,length:i}=this.dimensions,n=e/2,s=i/2,a=co(64087);this._geometry(t);const r=[1697479,1697479,1226912,950144,16727409,16054008,16054008,15216735,1780292,2898770,15317321,9279912,13095130,14174266,4026329],l=[],c=20,h=(9.2-1.25)/16;for(let w=0;w<c;w+=1){const C=8.55+w*.8,T=1.3+(C-8)*h;for(const A of[-1,1]){for(let S=-(s+C)+.3;S<s+C;S+=.62)!(A<0&&T<4.5&&Math.abs(S)<Nn.halfOpening+.6)&&!fu.some(y=>Math.abs(y-S)<.8)&&l.push([A*(n+C),T,S,A>0?-Math.PI/2:Math.PI/2]);for(let S=-(n+C)+.3;S<n+C;S+=.62)pu.some(M=>Math.abs(M-S)<.8)||l.push([S,T,A*(s+C),A>0?Math.PI:0])}}const u=l.filter(()=>a()>.07);this._crowdTotal=u.length,this.crowdUniforms={uTime:{value:0},uExcite:{value:0},uWave:{value:-10}};const p=this._material(new Xl({color:16777215}));p.onBeforeCompile=w=>{Object.assign(w.uniforms,this.crowdUniforms),w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
          attribute vec3 aMask; attribute vec3 aFan; uniform float uTime; uniform float uExcite; uniform float uWave;
          varying vec3 vMask; varying vec3 vFanPos; varying float vSeed;
          vec2 fanRot(vec2 v, float a) { float c = cos(a), s = sin(a); return vec2(v.x * c - v.y * s, v.x * s + v.y * c); }`).replace("#include <begin_vertex>",`#include <begin_vertex>
          {
            // aFan = (random seed, angle around the pitch, liveliness)
            vMask = aMask; vFanPos = position; vSeed = aFan.x;
            float wave = 1.0 - smoothstep(0.0, 0.5, abs(mod(aFan.y - uWave + 3.14159, 6.28318) - 3.14159));
            float bounce = max(0.0, sin(uTime * (5.0 + aFan.x * 3.0) + aFan.x * 40.0));
            float idle = 0.5 + 0.5 * sin(uTime * (0.7 + aFan.x) + aFan.x * 17.0);
            float up = clamp(uExcite * (0.45 + aFan.z) * bounce + wave, 0.0, 1.0);
            float raise = clamp(up + step(0.82, aFan.z) * idle * 0.55, 0.0, 1.0);
            // Calm supporters clap in front of the chest; a few just sit with arms folded.
            float clapper = step(aFan.z, 0.55) * step(0.25, aFan.z);
            float clap = clapper * (1.0 - raise) * (0.55 + 0.45 * uExcite * 4.0) * (0.5 + 0.5 * sin(uTime * (7.0 + aFan.x * 4.0) + aFan.x * 50.0));
            float arm = aMask.r - aMask.g;
            if (abs(arm) > 0.02) {
              vec3 pivot = vec3(sign(arm) * 0.192, 1.44, -0.048);
              vec3 rel = transformed - pivot;
              // Throw the arms up and out...
              rel.xy = fanRot(rel.xy, sign(arm) * raise * (2.45 + aFan.x * 0.4) * abs(arm));
              // ...or bring the hands together in front.
              rel.yz = fanRot(rel.yz, -(1.15 * clapper * (1.0 - raise)) * abs(arm));
              rel.x -= sign(arm) * clap * 0.07 * step(0.9, abs(arm));
              transformed = pivot + rel;
            }
            // Sit when calm, stand and jump when the game catches fire.
            float stand = clamp(up * 1.6 + step(0.9, aFan.z), 0.0, 1.0);
            transformed.y += (stand - 1.0) * 0.1 + bounce * uExcite * 0.16 * aFan.z;
            // Sway with the songs.
            transformed.x += sin(uTime * 1.6 + aFan.y * 9.0) * 0.035 * (position.y / 1.8) * (0.4 + uExcite);
          }`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vMask; varying vec3 vFanPos; varying float vSeed;`).replace("#include <color_fragment>",`#include <color_fragment>
          {
            // The instance colour is the shirt; everything else is derived per supporter.
            float h = vFanPos.y / 1.82;
            float seed = vSeed;
            vec3 shirt = diffuseColor.rgb;
            vec3 skin = mix(vec3(0.84, 0.63, 0.5), vec3(0.3, 0.18, 0.12), smoothstep(0.15, 0.95, fract(seed * 7.31)));
            vec3 hair = mix(vec3(0.07, 0.05, 0.04), vec3(0.42, 0.27, 0.13), step(0.62, fract(seed * 13.7)));
            hair = mix(hair, vec3(0.62), step(0.9, fract(seed * 23.1)));
            hair = mix(hair, shirt * 0.8, step(0.82, fract(seed * 29.3)));
            vec3 legs = mix(vec3(0.08, 0.1, 0.2), vec3(0.2, 0.26, 0.42), fract(seed * 3.37));
            legs = mix(legs, vec3(0.1), step(0.7, fract(seed * 5.9)));
            float arm = clamp(vMask.r + vMask.g, 0.0, 1.0);
            vec3 c = shirt;
            // Scarf in the club colours for some.
            float scarf = step(0.7, fract(seed * 17.9)) * smoothstep(0.79, 0.8, h) * (1.0 - smoothstep(0.845, 0.855, h)) * (1.0 - arm);
            c = mix(c, mix(vec3(0.95), shirt, step(0.5, fract(vFanPos.x * 9.0))), scarf * 0.9);
            c = mix(c, legs, (1.0 - smoothstep(0.485, 0.5, h)) * (1.0 - arm));
            c = mix(c, vec3(0.05), (1.0 - smoothstep(0.03, 0.045, h)) * (1.0 - arm));
            c = mix(c, skin, smoothstep(0.4, 0.6, vMask.b));
            float head = smoothstep(0.86, 0.87, h) * (1.0 - arm);
            float cap = max(smoothstep(0.945, 0.952, h), step(vFanPos.z, -0.015) * smoothstep(0.885, 0.895, h));
            c = mix(c, hair, head * cap);
            // A hint of eyes and brow so faces are not blank.
            float face = head * (1.0 - cap) * step(0.02, vFanPos.z);
            c *= 1.0 - 0.45 * face * smoothstep(0.918, 0.924, h) * (1.0 - smoothstep(0.934, 0.94, h)) * step(0.012, abs(vFanPos.x));
            // Soft shading under the chin and between the legs so the figures read as people.
            c *= 0.82 + 0.18 * smoothstep(0.0, 0.5, h);
            diffuseColor.rgb = c;
          }`)},p.customProgramCacheKey=()=>"nova-crowd-v3";const f=new Ds(t,p,u.length),d=new Float32Array(u.length*3),_=new Se,g=new pt;u.forEach(([w,C,T,A],S)=>{const M=.86+a()*.14;_.position.set(w+(a()-.5)*.08,C,T+(a()-.5)*.08),_.rotation.set(0,A+(a()-.5)*.4,0),_.scale.set(M*(.94+a()*.2),M,M*(.94+a()*.2)),_.updateMatrix(),f.setMatrixAt(S,_.matrix);const y=T<-s*.4||a()<.35,D=T>s+6&&w>0?[16052718,15216735,16052718,16727409][Math.floor(a()*4)]:y&&a()<.6?[1697479,1226912,539210,1697479][Math.floor(a()*4)]:r[Math.floor(a()*r.length)];f.setColorAt(S,g.setHex(D).multiplyScalar(.75+a()*.3)),d[S*3]=a(),d[S*3+1]=Math.atan2(w,T),d[S*3+2]=a()}),t.setAttribute("aFan",new Ga(d,3)),f.instanceMatrix.needsUpdate=!0,f.instanceColor.needsUpdate=!0,f.frustumCulled=!1,f.name="3D supporters",this.crowd3d=f,this.stands.add(f);const m=this._geometry(new wi(1.5,1,8,4));m.translate(.75,0,0);const v=this._material(new Xl({color:16777215,side:_e}));v.onBeforeCompile=w=>{Object.assign(w.uniforms,this.crowdUniforms),w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uExcite;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          {
            float seed = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.21;
            float sway = sin(uTime * (2.2 + uExcite * 3.0) + seed) * (0.5 + uExcite * 0.5);
            transformed.z += sin(transformed.x * 3.2 - uTime * 6.0 + seed) * 0.16 * transformed.x;
            transformed.y += sway * transformed.x * 0.35;
          }`)},v.customProgramCacheKey=()=>"nova-flag-v1";const b=54,x=new Ds(m,v,b);for(let w=0;w<b;w+=1){const[C,T,A,S]=u[Math.floor(a()*u.length)];_.position.set(C,T+1.9+a()*.6,A),_.rotation.set(0,S+Math.PI/2,0),_.scale.setScalar(.9+a()*.9),_.updateMatrix(),x.setMatrixAt(w,_.matrix);const M=A<10||a()<.5;x.setColorAt(w,g.setHex(M?a()<.5?1697479:739930:a()<.5?15216735:16052718))}x.instanceMatrix.needsUpdate=!0,x.instanceColor.needsUpdate=!0,x.frustumCulled=!1,this.flags=x,this.stands.add(x),this._waveTimer=25,this._waveAngle=-10}netHit(t,e=.6){const i=this.nets?.find(n=>Math.sign(t.z)===n.side);i&&(i.uniforms.uHit.value.set(t.x,t.y,t.z,.25+e*.75),i.uniforms.uAge.value=0)}addBroadcastCameras(t=[]){const e=this._standard(1711653,{roughness:.45,metalness:.5}),i=this._standard(661030,{roughness:.1,metalness:.9,emissive:1723788,emissiveIntensity:.4});this.pitchsideCameras=[];for(const n of t){const s=new Me,a=n.mesh.rotation.y;if(n.perimeterRole==="photographer"){s.position.set(0,1.39,.36),this._box([.19,.16,.19],[0,0,0],e,s),this._beamBetween([0,0,.06],[0,0,.34],.065,e,s,10),this._beamBetween([0,0,.32],[0,0,.35],.058,i,s,10),n.mesh.add(s);continue}s.position.set(n.position.x+Math.sin(a)*.75,0,n.position.z+Math.cos(a)*.75),s.rotation.y=a;for(const[l,c]of[[-.3,-.25],[.3,-.25],[0,.32]])this._beamBetween([l,0,c],[0,1.35,0],.025,e,s,5);const r=new Me;r.position.y=1.47,this._box([.31,.29,.65],[0,.05,.08],e,r,{castShadow:!0}),this._beamBetween([0,.05,.35],[0,.05,.64],.104,e,r,10),this._beamBetween([0,.05,.62],[0,.05,.65],.087,i,r,10),this._box([.31,.055,.16],[0,.23,-.11],e,r),this._box([.48,.045,.052],[0,-.08,-.32],e,r),s.add(r),n.perimeterRole==="operator"&&this.pitchsideCameras.push({op:n,head:r,yaw:a}),this.root.add(s)}}_createRoofAndLights(){const{width:t,length:e}=this.dimensions,i=t/2,n=e/2;this.roof=this.stands;const s=this._standard(1055011,{roughness:.4,metalness:.7,side:_e});this._ring(17,43,27.2,31.8,s,"Roof canopy"),this._stripMaterial=this._standard(15267071,{emissive:14479359,emissiveIntensity:3.4,roughness:.3,side:_e}),this._ring(17,17.9,27.1,27.2,this._stripMaterial,"Roof light ring");const a=this._geometry(new qi(3.4,1,.25)),r=(h,u)=>{const p=new Qt(a,this._stripMaterial);p.position.set(h,26.2,u),p.lookAt(h*.3,0,u*.3),this.stands.add(p)};for(let h=-n;h<=n;h+=21)r(-(i+16.5),h),r(i+16.5,h);for(let h=-i+6;h<=i-6;h+=14)r(h,-(n+16.5)),r(h,n+16.5);const l=new Zp(13624063,2441774,1.05);this.root.add(l),this._hemisphere=l,this._lightTarget=new Se,this.root.add(this._lightTarget),[[-58,46,-74],[58,46,74],[58,46,-74],[-58,46,74]].forEach((h,u)=>{const p=new Md(u%2?15135231:16774886,u<2?1.15:.7);p.userData.offset=new L(...h),p.position.copy(p.userData.offset),p.target=this._lightTarget,p.castShadow=u<2,p.shadow.mapSize.set(2048,2048);const f=p.shadow.camera;f.left=-30,f.right=30,f.top=30,f.bottom=-30,f.near=20,f.far=220,p.shadow.bias=-4e-4,p.shadow.normalBias=.03,this.root.add(p),this._floodlights.push(p)})}_createTechnicalArea(){const{width:t}=this.dimensions,e=new Me;e.name="Tunnel and technical areas",this.root.add(e);const i=this._standard(463131,{roughness:.42,metalness:.58}),n=this._standard(66053,{roughness:1}),s=this._standard(1697479,{emissive:1697479,emissiveIntensity:.65,roughness:.4}),a=this._standard(9226719,{transparent:!0,opacity:.18,roughness:.13,metalness:.12,depthWrite:!1,side:_e}),{outward:r,halfOpening:l,depth:c}=Nn,h=-(t/2+r),u=new Me;u.position.set(h,0,0),this._box([.25,4,l*2],[-c,2,0],n,u),this._box([c+.6,.28,l*2+.45],[-c/2,-.14,0],n,u),this._box([c+.6,.35,l*2+.75],[-c/2,4,0],i,u,{castShadow:!0});for(const f of[-1,1])this._box([c+.6,4,.35],[-c/2,2,f*(l+.17)],i,u,{castShadow:!0}),this._box([c-.5,.08,.05],[-c/2,3.55,f*(l-.06)],s,u);e.add(u);const p=this._standard(1521480,{roughness:.62});for(const f of[-1,1]){const d=new Me;d.position.set(-(t/2+4.3),0,f*14),this._box([2.6,.18,10.5],[0,2.35,0],a,d),this._box([2.6,2.4,.16],[-.15,1.2,f*5.15],a,d),this._box([.18,2.4,10.5],[-1.25,1.2,0],i,d);for(let _=-4;_<=4;_+=1)this._box([.9,.24,.82],[.2,.4,_*1.08],p,d,{castShadow:!0}),this._box([.24,.76,.82],[-.18,.81,_*1.08],p,d);e.add(d)}}update(t=0,e={},i=null){if(this._disposed)return;const n=Math.min(Math.max(Number(t)||0,0),.1);this._time+=n;const s=Number(e?.score?.home??0)||0,a=Number(e?.score?.away??0)||0,r=`${s}:${a}`;this._scoreSignature&&r!==this._scoreSignature&&(this._celebration=1),this._scoreSignature=r,this._celebration=Math.max(0,this._celebration-n*.3);for(const{op:c,head:h,yaw:u}of this.pitchsideCameras??[])h.rotation.y=c.mesh.rotation.y-u;const l=Math.floor(this._time/11);if(this._adMaterials.forEach((c,h)=>{l!==this._adCampaign&&(c.emissiveMap=c.map=this._adTextures[(Math.floor(h/4)+l)%this._adTextures.length]),c.emissiveIntensity=.76+.08*Math.sin(this._time*2.1+h*.7)+this._celebration*1.2}),this._adCampaign=l,this.crowdMaterial){const c=Math.abs(Math.sin(this._time*(2.2+this._celebration*6)));this.crowdMaterial.emissiveIntensity=.16+this._celebration*.3*(.5+c*.5),this.crowdMaterial.map.offset.y=c*(.0015+this._celebration*.006)}if(this.nets)for(const c of this.nets)c.uniforms.uAge.value+=n,c.uniforms.uTime.value=this._time;if(this.crowdUniforms){this.crowdUniforms.uTime.value=this._time;const c=e?.phase==="playing"?.16:.08;this.crowdUniforms.uExcite.value+=(Math.max(c,this._celebration)-this.crowdUniforms.uExcite.value)*Math.min(1,n*3),this._waveTimer-=n,this._waveTimer<=0&&this._waveAngle<-5&&(this._waveAngle=-Math.PI,this._waveTimer=55+Math.random()*40),this._waveAngle>-5&&(this._waveAngle+=n*.75,this._waveAngle>Math.PI*3&&(this._waveAngle=-10)),this.crowdUniforms.uWave.value=this._waveAngle}if(this._ribbonMaterial&&(this._ribbonMaterial.emissiveIntensity=1.4+this._celebration*3*Math.abs(Math.sin(this._time*9))),i&&this._lightTarget){this._lightTarget.position.set(i.x,0,i.z);for(const c of this._floodlights)c.position.copy(this._lightTarget.position).add(c.userData.offset)}this.stars&&(this.stars.rotation.y+=n*.003)}setQuality(t="high"){const e=String(t).toLowerCase();this.quality=Object.hasOwn(uu,e)?e:"high";const i=uu[this.quality];this.city&&(this.city.visible=i>0),this.stars&&this.stars.geometry.setDrawRange(0,i===0?150:520),this.crowd3d&&(this.crowd3d.visible=i>0,this.crowd3d.count=i===2?this._crowdTotal:Math.floor(this._crowdTotal*.55)),this.flags&&(this.flags.visible=i>0);const n=this.stands?.getObjectByName("Lower tier crowd");n&&(n.material=this.crowd3d&&i>0?this._seatMaterial:this.crowdMaterial),this._floodlights.forEach((s,a)=>{const r=i===2?a<2:i===1?a===0:!1;s.castShadow!==r&&(s.castShadow=r);const l=i===2?2048:1024;s.shadow.mapSize.x!==l&&(s.shadow.mapSize.set(l,l),s.shadow.map?.dispose(),s.shadow.map=null)}),this.renderer&&(this.renderer.shadowMap.enabled=i>0)}dispose(){this._disposed||(this._disposed=!0,this.scene.remove(this.root),this._geometries.forEach(t=>t.dispose()),this._materials.forEach(t=>t.dispose()),this._textures.forEach(t=>t.dispose()),this._geometries.clear(),this._materials.clear(),this._textures.clear(),this.scene.background===this._stadiumBackground&&(this.scene.background=this._previousScene.background),this.scene.fog===this._stadiumFog&&(this.scene.fog=this._previousScene.fog),this.renderer&&this._previousRenderer&&(this.renderer.shadowMap.enabled=this._previousRenderer.shadowEnabled,this.renderer.shadowMap.type=this._previousRenderer.shadowType,this.renderer.toneMapping=this._previousRenderer.toneMapping,this.renderer.toneMappingExposure=this._previousRenderer.toneMappingExposure,this.renderer.outputColorSpace=this._previousRenderer.outputColorSpace))}}const Kr=Object.freeze({low:{confetti:72,kick:8,tackle:16,maxActive:12},medium:{confetti:145,kick:14,tackle:28,maxActive:20},high:{confetti:260,kick:22,tackle:48,maxActive:30}});function Wx(o){return o?.isVector3?o.clone():Array.isArray(o)?new L(Number(o[0])||0,Number(o[1])||0,Number(o[2])||0):new L(Number(o?.x)||0,Number(o?.y)||0,Number(o?.z)||0)}function Lc(o,t){try{return new pt(o??t)}catch{return new pt(t)}}class Ss{constructor(t,{position:e,count:i,mode:n,color:s}){this.owner=t,this.mode=n,this.count=i,this.age=0,this.life=n==="grass"?1.05:n==="save"?.72:.55,this.gravity=n==="grass"?7.6:4.2,this.drag=n==="grass"?1.5:3.3,this.positions=new Float32Array(i*3),this.velocities=new Float32Array(i*3);const a=new Float32Array(i*3),r=t._random,l=Lc(s,n==="grass"?6270537:n==="save"?6871039:16766314),c=[2783797,6465862,9075519,4885832,9068082];for(let h=0;h<i;h+=1){const u=h*3,p=r()*Math.PI*2,f=n==="grass"?.8+r()*2.8:1.7+r()*5.1;this.positions[u]=(r()-.5)*.22,this.positions[u+1]=.06+r()*.15,this.positions[u+2]=(r()-.5)*.22,this.velocities[u]=Math.cos(p)*f,this.velocities[u+1]=n==="grass"?1.3+r()*3.5:.5+r()*3.2,this.velocities[u+2]=Math.sin(p)*f;const d=n==="grass"?new pt(c[Math.floor(r()*c.length)]):l.clone().lerp(new pt(16777215),.12+r()*.72);d.multiplyScalar(.75+r()*.32),d.toArray(a,u)}this.geometry=new Be,this.geometry.setAttribute("position",new Fe(this.positions,3)),this.geometry.setAttribute("color",new Fe(a,3)),this.material=new Ja({color:16777215,size:n==="grass"?.16:n==="save"?.22:.13,map:t._particleTexture,alphaTest:n==="grass"?.2:.02,transparent:!0,opacity:n==="grass"?.94:1,vertexColors:!0,depthWrite:!1,blending:n==="grass"?ts:Mo,toneMapped:!1}),this.object=new Sc(this.geometry,this.material),this.object.name=`${n} particle burst`,this.object.position.copy(e),this.object.frustumCulled=!1,t.root.add(this.object)}update(t){this.age+=t;const e=Math.exp(-this.drag*t);for(let n=0;n<this.count;n+=1){const s=n*3;this.velocities[s]*=e,this.velocities[s+2]*=e,this.velocities[s+1]-=this.gravity*t,this.positions[s]+=this.velocities[s]*t,this.positions[s+1]+=this.velocities[s+1]*t,this.positions[s+2]+=this.velocities[s+2]*t}this.geometry.attributes.position.needsUpdate=!0;const i=ja.clamp(1-this.age/this.life,0,1);return this.material.opacity=this.mode==="grass"?Math.min(.94,i*2.5):i*i,this.material.size*=Math.pow(.72,t),this.age<this.life}dispose(){this.object.removeFromParent(),this.geometry.dispose(),this.material.dispose()}}class Xx{constructor(t,{position:e,count:i,color:n}){this.owner=t,this.count=i,this.age=0,this.maxLife=0,this.positions=new Float32Array(i*3),this.velocities=new Float32Array(i*3),this.rotations=new Float32Array(i*3),this.spins=new Float32Array(i*3),this.lives=new Float32Array(i),this.dead=new Uint8Array(i),this.dummy=new Se;const s=t._random,r=[Lc(n,1697479),new pt(16727409),new pt(16316138),new pt(16763989),new pt(7114751)],l=new wi(.13,.34),c=new Ze({color:16777215,vertexColors:!0,transparent:!0,opacity:.98,side:_e,depthWrite:!1,toneMapped:!1});this.object=new Ds(l,c,i),this.object.name="Goal confetti ribbons",this.object.position.copy(e),this.object.frustumCulled=!1,this.geometry=l,this.material=c;for(let h=0;h<i;h+=1){const u=h*3,p=s()*Math.PI*2,f=s()*1.2;this.positions[u]=Math.cos(p)*f,this.positions[u+1]=.25+s()*1.1,this.positions[u+2]=Math.sin(p)*f;const d=2.2+s()*7.2;this.velocities[u]=Math.cos(p)*d+(s()-.5)*1.5,this.velocities[u+1]=8.5+s()*10.5,this.velocities[u+2]=Math.sin(p)*d+(s()-.5)*1.5,this.rotations[u]=s()*Math.PI,this.rotations[u+1]=s()*Math.PI,this.rotations[u+2]=s()*Math.PI,this.spins[u]=(s()-.5)*12,this.spins[u+1]=(s()-.5)*16,this.spins[u+2]=(s()-.5)*12,this.lives[h]=2.4+s()*2.25,this.maxLife=Math.max(this.maxLife,this.lives[h]);const _=r[Math.floor(s()*r.length)].clone().offsetHSL((s()-.5)*.04,0,(s()-.5)*.08);this.object.setColorAt(h,_),this._setMatrix(h,1)}this.object.instanceMatrix.setUsage(zf),this.object.instanceMatrix.needsUpdate=!0,this.object.instanceColor&&(this.object.instanceColor.needsUpdate=!0),t.root.add(this.object)}_setMatrix(t,e){const i=t*3;this.dummy.position.fromArray(this.positions,i),this.dummy.rotation.set(this.rotations[i],this.rotations[i+1],this.rotations[i+2]),this.dummy.scale.set(e,e,e),this.dummy.updateMatrix(),this.object.setMatrixAt(t,this.dummy.matrix)}update(t){this.age+=t;const e=Math.exp(-.42*t);for(let i=0;i<this.count;i+=1){const n=1-this.age/this.lives[i];if(n<=0){this.dead[i]||(this.dead[i]=1,this._setMatrix(i,1e-4));continue}const s=i*3;this.velocities[s]*=e,this.velocities[s+2]*=e,this.velocities[s+1]-=8.7*t,this.positions[s]+=this.velocities[s]*t,this.positions[s+1]+=this.velocities[s+1]*t,this.positions[s+2]+=this.velocities[s+2]*t,this.rotations[s]+=this.spins[s]*t,this.rotations[s+1]+=this.spins[s+1]*t,this.rotations[s+2]+=this.spins[s+2]*t;const a=.58+Math.abs(Math.sin(this.age*10+i))*.55,r=n<.18?n/.18:1;this._setMatrix(i,a*r)}return this.object.instanceMatrix.needsUpdate=!0,this.age<this.maxLife}dispose(){this.object.removeFromParent(),this.geometry.dispose(),this.material.dispose()}}class mu{constructor(t,{position:e,color:i,strength:n=1}){this.owner=t,this.age=0,this.life=1.15,this.strength=n,this.group=new Me,this.group.name="Celebration light pulse",this.group.position.copy(e),this.color=Lc(i,1697479),this.geometry=new Qa(.78,1,56),this.material=new Ze({color:this.color,transparent:!0,opacity:.8,side:_e,depthWrite:!1,blending:Mo,toneMapped:!1}),this.ring=new Qt(this.geometry,this.material),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.04,this.group.add(this.ring),this.light=new Ec(this.color,72*n,28,1.6),this.light.position.y=2.8,this.group.add(this.light),t.root.add(this.group)}update(t){this.age+=t;const e=ja.clamp(this.age/this.life,0,1),i=1+e*18*this.strength;return this.ring.scale.setScalar(i),this.material.opacity=(1-e)*(1-e)*.78,this.light.intensity=(1-e)*(1-e)*72*this.strength,this.age<this.life}dispose(){this.group.removeFromParent(),this.geometry.dispose(),this.material.dispose(),this.light.dispose?.()}}class $x{constructor({scene:t}={}){if(!t?.add)throw new TypeError("Effects requires a THREE.Scene-like `scene`.");this.scene=t,this.root=new Me,this.root.name="Match effects",this.scene.add(this.root),this.active=[],this.quality="high",this.settings=Kr.high,this._disposed=!1,this._seed=251653237,this._random=()=>(this._seed=this._seed*1664525+1013904223>>>0,this._seed/4294967296),this._particleTexture=this._makeParticleTexture()}_makeParticleTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(32,32,1,32,32,31);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.26,"rgba(255,255,255,.96)"),i.addColorStop(.62,"rgba(255,255,255,.42)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64);const n=new No(t);return n.colorSpace=Ie,n.needsUpdate=!0,n}_add(t){for(this.active.push(t);this.active.length>this.settings.maxActive;)this.active.shift()?.dispose();return t}emit(t,e,i){if(this._disposed)return null;const n=String(t??"").toLowerCase(),s=Wx(e);if(s.y=Math.max(.03,s.y),n==="goal"||n==="confetti"||n==="celebration"){const r=i??1697479,l=this._add(new Xx(this,{position:s,count:this.settings.confetti,color:r}));return this._add(new Ss(this,{position:s,count:Math.max(20,Math.floor(this.settings.confetti*.28)),mode:"spark",color:r})),this._add(new mu(this,{position:s,color:r,strength:1.2})),l}if(n==="tackle"||n==="slide"||n==="grass"){const r=this._add(new Ss(this,{position:s,count:this.settings.tackle,mode:"grass",color:i??6465862}));return n!=="grass"&&this._add(new Ss(this,{position:s,count:Math.max(5,Math.floor(this.settings.kick*.55)),mode:"spark",color:i??16762977})),r}if(n==="save"||n==="keeper-save"||n==="keeper_save"){const r=this._add(new Ss(this,{position:s,count:Math.ceil(this.settings.kick*1.6),mode:"save",color:i??6871039}));return this._add(new mu(this,{position:s,color:i??6871039,strength:.42})),r}const a=this._add(new Ss(this,{position:s,count:this.settings.kick,mode:"spark",color:i??16766314}));return(n==="kick"||n==="shot")&&this._add(new Ss(this,{position:s,count:Math.max(4,Math.floor(this.settings.kick*.45)),mode:"grass",color:6465862})),a}update(t=0){if(this._disposed)return;const e=Math.min(Math.max(Number(t)||0,0),.1);for(let i=this.active.length-1;i>=0;i-=1){const n=this.active[i];n.update(e)||(n.dispose(),this.active.splice(i,1))}}setQuality(t="high"){const e=String(t).toLowerCase();for(this.quality=Kr[e]?e:"high",this.settings=Kr[this.quality];this.active.length>this.settings.maxActive;)this.active.shift()?.dispose()}dispose(){this._disposed||(this._disposed=!0,this.active.forEach(t=>t.dispose()),this.active.length=0,this.root.removeFromParent(),this._particleTexture.dispose())}}const gn={collapse:{lead:.37,duration:.79,push:.12,contact:.43,land:.63,reach:1.16,bodyGap:.99,travel:.78,forward:.24,recovery:.51},low:{lead:.45,duration:.96,push:.2,contact:.45,land:.68,reach:1.24,bodyGap:.86,travel:1.72,forward:.36,recovery:.6},rotation:{lead:.28,duration:.72,push:.06,contact:.38,land:.57,reach:1.18,bodyGap:.94,travel:.77,forward:.13,recovery:.48},extension:{lead:.54,duration:1.08,push:.19,contact:.45,land:.74,reach:1.12,bodyGap:.66,travel:2.31,forward:.24,recovery:.66}};function qx(o,t,e){const i=Math.abs(o);return i<.64||i<.78&&t>.7&&t<2.2?null:t<=.53&&e<.28&&i<1.82?"rotation":t<=.72&&i>=1.24?"low":t>1.62||i>1.9&&t>.72?"extension":"collapse"}const cn=11,Ts=.62,Kx=new L(0,1,0),Yr=.85,Yx=8,Jn=1e-5,jx=1/30,Dn=30,Zx=16,gu=8,_u=["","kick","pass","tackle","slide","dive","header","throw","fall","celebrate","catch","stumble","flag","card","applaud","firsttouch","catchsweep","getup","feint","stepover","hurdle","trap","stretch","chest","elastico","pullback","stopgo","chop"],qn={stepover:{duration:.57,exit:.9,pace:1.55,turn:.5,path:[[.43,0,.46],[.62,.24,.49],[1,.61,.61]]},feint:{duration:.48,exit:1,pace:1.3,turn:.58,path:[[.36,0,.42],[.57,.22,.47],[1,.62,.55]]},elastico:{duration:.48,exit:.9,pace:1.8,turn:.48,path:[[.26,-.31,.45],[.43,-.3,.47],[.64,.29,.51],[1,.63,.62]]},pullback:{duration:.63,exit:.95,pace:.6,turn:.74,path:[[.24,0,.58],[.48,-.08,.15],[.67,.17,.15],[1,.58,.43]]},stopgo:{duration:.54,exit:.18,pace:.15,turn:.13,path:[[.24,.04,.42],[.49,.04,.32],[.67,-.06,.65],[1,.14,1.01]]},chop:{duration:.5,exit:1,pace:2.05,turn:.72,path:[[.33,-.13,.52],[.51,.17,.2],[.68,.42,.3],[1,.69,.52]]}},Id=16,jl=Id+10,Dd=jl+7.5,Jx=Dd+4.5,jr=[0,1,2,3,0,2,1,3,1,0,2],yu=[16777215,15983834,15127236,16774380],ct=(o,t,e)=>Math.max(t,Math.min(e,o)),Ge=(o,t,e)=>o+(t-o)*e,xu=o=>{const t=ct(o,0,1);return t*t*(3-2*t)},de=(o,t)=>o+Math.random()*(t-o),ws=()=>(Math.random()+Math.random()+Math.random()-1.5)/1.5;function jt(o,t){const e=o.x-t.x,i=o.z-t.z;return e*e+i*i}function le(o,t){return Math.sqrt(jt(o,t))}function we(o,t,e){e.set(t.x-o.x,0,t.z-o.z);const i=e.lengthSq();return i>Jn&&e.multiplyScalar(1/Math.sqrt(i)),e}function Si(o,t,e,i){return o.lerp(t,1-Math.exp(-e*i)),o}function vu(o,t,e){const i=e.x-t.x,n=e.z-t.z,s=i*i+n*n;let a=s>Jn?((o.x-t.x)*i+(o.z-t.z)*n)/s:0;a=ct(a,0,1);const r=t.x+i*a-o.x,l=t.z+n*a-o.z;return r*r+l*l}class Qx{constructor({scene:t,teams:e,pitch:i,onEvent:n=()=>{}}){this.scene=t,this.teams=e,this.onEvent=n,this.dimensions={...i},this.halfW=i.width/2,this.halfL=i.length/2,this.goalHalf=i.goalWidth/2,this.difficulty=Wr.normal,this.passAssist=!0,this.root=new Me,this.root.name="Match actors",t.add(this.root),this._disposables=[],this._t1=new L,this._t2=new L,this._t3=new L,this._t4=new L,this._focus=new L,this._cameraFocus=new L(0,.8,0),this._prevEdges={},this._pendingEdges={},this._accumulator=0,this._tacticTimer=0,this._started=!1,this._disposed=!1,this.state={phase:"kickoff",paused:!0,running:!1,duration:this.matchLength??Vr,timeRemaining:this.matchLength??Vr,elapsed:0,score:{home:0,away:0},homeScore:0,awayScore:0,possession:null,message:"KICK OFF",stats:this._newStats(),clockText:"00:00",phaseLabel:"1ST HALF",shotPower:null,chargingShot:!1,pitch:this.dimensions},this.players=[],this._teamPlayers={home:[],away:[]},this._createPlayers(),this._createStaff(),this._createBall(),this._replayFrames=[],this._replayHead=0,this._replayCount=0,this._recordTimer=0,this._frameSize=this.players.length*gu+5;for(let s=0;s<Dn*Zx;s+=1)this._replayFrames.push(new Float32Array(this._frameSize));this.replay=null,this._staff=[...this.officials,...this.extras],this.controlledPlayer=this._teamPlayers.home[9],this.reset()}setDifficulty(t){this.difficulty=Wr[t]??Wr.normal}_recycle={home:0,away:0};_newStats(){const t=()=>({shots:0,shotsOnTarget:0,passes:0,completedPasses:0,tackles:0,saves:0,goals:0,possessionSeconds:0});return{home:t(),away:t()}}_track(t){return this._disposables.push(t),t}_createPlayers(){const t=this._track(new Qa(.52,.66,40)),e=this._track(new Tc(.16,.34,4)),i=this._track(new Lo(.46,20)),n=this._track(new Ze({color:0,transparent:!0,opacity:.2,depthWrite:!1}));for(const s of["home","away"]){const a=s==="home"?1:-1,r=this.teams[s].squad;tx.forEach((l,c)=>{const h=new Me;h.name=`${s}-${c}`;const u=new Me;h.add(u);const p=new Qt(i,n);p.rotation.x=-Math.PI/2,p.position.y=.02,p.renderOrder=1,h.add(p);const f=this._track(new Ze({color:s==="home"?16121706:16738922,transparent:!0,opacity:.9,depthWrite:!1,side:_e})),d=new Qt(t,f);d.rotation.x=-Math.PI/2,d.position.y=.03,d.visible=!1,d.renderOrder=2,h.add(d);const _=new Qt(e,f);_.position.y=2.3,_.rotation.z=Math.PI,_.visible=!1,h.add(_);const g=(c*37+(s==="away"?11:0))%17/17,m={id:`${s}-${c}`,name:r[c][1],number:r[c][0],voice:this.teams[s].voice?`${this.teams[s].voice}-${c}`:null,team:s,side:s,index:c,role:l.role,line:l.line,isGoalkeeper:l.line==="GK",attackDirection:a,mesh:h,visual:u,selection:d,arrow:_,position:h.position,velocity:new L,desired:new L,facing:new L(0,0,a),base:l,target:new L,hasBall:!1,stamina:1,cooldown:0,stun:0,decisionTimer:.3+g*.4,possessionTimer:0,gait:g*6,animSpeed:0,act:"",actT:0,actDur:0,actParam:0,pace:.95+g*.1+(l.line==="FWD"?.03:0),skill:.72+c*7%13/60,runTimer:0,chasing:!1,pressing:!1,sprinting:!1,active:!0,react:0,yellow:0,strength:.4+(c*5+(s==="away"?3:0))%7/10,look:jr[(c+(s==="away"?2:0))%jr.length],skinTint:yu[(c*3+(s==="away"?1:0))%yu.length],heightScale:.97+(c*7+(s==="away"?4:0))%8/100,kit:this._kitFor(s,l.line==="GK")};h.userData.player=m,this.players.push(m),this._teamPlayers[s].push(m),this.root.add(h)})}}_kitFor(t,e){const i=this.teams[t];return e?{jersey:i.keeper,jersey2:1447964,shorts:1447964,socks:i.keeper,pattern:0,numberColor:1053720}:{jersey:i.primary,jersey2:i.stripe??i.secondary,shorts:i.secondary,socks:i.socks,pattern:i.pattern??0,numberColor:i.numberColor??16777215}}setTeams(t){this.teams={home:t.home,away:t.away};for(const e of this.players){const i=this.teams[e.team],n=i.squad?.[e.index]??[e.index+1,`PLAYER ${e.index+1}`];e.number=n[0],e.name=n[1],e.voice=i.voice?`${i.voice}-${e.index}`:null,e.kit=this._kitFor(e.team,e.isGoalkeeper)}for(const e of this.extras??[])e.benchPlayer&&(e.kit=this._kitFor(e.team,!1))}_actor(t,e,i,n,s){const a=new Me;a.name=t;const r=new Me;return a.add(r),a.position.set(e,0,i),a.rotation.y=n,this.root.add(a),{id:t,mesh:a,visual:r,position:a.position,velocity:new L,facing:new L(Math.sin(n),0,Math.cos(n)),target:new L(e,0,i),animSpeed:0,gait:0,act:"",actT:0,actDur:0,actParam:0,look:0,heightScale:1,...s}}_createStaff(){const t={jersey:14152250,jersey2:1118481,shorts:1118481,socks:1118481,pattern:0};this.referee=this._actor("referee",6,-6,0,{kit:t,look:2,skinTint:15983834}),this.assistants=[this._actor("assistant-a",this.halfW+1.4,20,-Math.PI/2,{kit:t,look:0,prop:"flag",lineSide:1}),this._actor("assistant-b",-this.halfW-1.4,-20,Math.PI/2,{kit:t,look:3,prop:"flag",lineSide:-1})],this.officials=[this.referee,...this.assistants];const e=[],i=(c,h,u,p,f,d,_={})=>e.push(this._actor(c,h,u,p,{kit:f,look:d,static:!0,extra:!0,noShadow:!0,..._})),n=c=>({jersey:c,jersey2:c,shorts:1316380,socks:1316380,pattern:0,trousers:!0});this.managers={home:null,away:null},i("manager-home",-this.halfW-2.1,-11,Math.PI/2,n(1778739),1,{managerOf:"home",benchSide:"home",noShadow:!1}),i("manager-away",-this.halfW-2.1,11,Math.PI/2,n(2825506),3,{managerOf:"away",benchSide:"away",noShadow:!1}),this.managers.home=e[0],this.managers.away=e[1];const s={jersey:2106670,jersey2:3842303,shorts:2106670,socks:2106670,pattern:0,trousers:!0};this.cameraCrew=[];const a=c=>({...n(c),jersey2:15985354,pattern:2}),r={steward:a(16741670),security:a(14736195),operator:{...s,jersey:4610677},photographer:{...s,jersey:6970780},attendant:n(2590143),technician:n(4812907)},l=(c,h,u,p)=>{const f=e.length;i(`pitchside-${c}-${f}`,h,u,p,r[c],f%jr.length,{perimeterRole:c,filming:c==="operator"||c==="photographer",essential:c==="operator"||c==="steward",stationYaw:p}),(c==="operator"||c==="photographer")&&this.cameraCrew.push(e.at(-1))};for(const c of[-1,1]){const h=-c*Math.PI/2,u=c>0?[[-47,"steward"],[-39,"photographer"],[-30,"operator"],[-22,"attendant"],[-11,"steward"],[0,"security"],[11,"attendant"],[20,"photographer"],[29,"operator"],[39,"technician"],[48,"steward"]]:[[-48,"steward"],[-40,"photographer"],[-31,"operator"],[-23,"attendant"],[24,"steward"],[30,"photographer"],[38,"technician"],[47,"steward"]];for(const[f,d]of u){const _=d==="operator"||d==="photographer"?4.5:d==="attendant"?4.25:6.75,g=d==="steward"||d==="security"?h+Math.PI:h;l(d,c*(this.halfW+_),f,g)}const p=c>0?Math.PI:0;for(const[f,d,_]of[[-30,"steward",6.7],[-23,"photographer",4.75],[-16,"attendant",4.25],[-9,"operator",5.05],[-4.8,"steward",7],[8,"photographer",4.65],[18,"technician",6],[28,"security",6.8]]){const g=d==="steward"||d==="security"?p+Math.PI:p;l(d,f*c,c*(this.halfL+_),g)}}for(const c of["home","away"]){const h=c==="home"?-1:1;for(let u=0;u<4;u+=1){const p=12+u;i(`sub-${c}-${u}`,-this.halfW-4,(12.25+u*1.15)*h,Math.PI/2,this._kitFor(c,!1),u,{benchSide:c,benchPlayer:!0,team:c,number:p,name:`SUBSTITUTE ${p}`,benchIndex:u})}i(`bench-coordinator-${c}`,-this.halfW-3.5,h*17.65,Math.PI/2,n(3424343),0,{benchSide:c}),i(`bench-official-${c}`,-this.halfW-2.75,h*9.55,Math.PI/2,t,2,{benchSide:c,benchOfficial:!0}),i(`bench-camera-${c}`,-this.halfW-1.65,h*18.5,Math.PI/2,s,3,{benchSide:c,filming:!0}),this.cameraCrew.push(e.at(-1))}this.extras=e}_createBall(){const t=new Me;t.name="Match ball",t.velocity=new L,t.spinAxis=new L(1,0,0),Object.assign(t,{holder:null,lastTouch:null,intendedReceiver:null,passTeam:null,shotTeam:null,shotBy:null,shotOnTargetCredited:!1,lob:!1,inHands:!1,protectedTimer:0});const e=document.createElement("canvas");e.width=1024,e.height=512;const i=e.getContext("2d"),n=(1+Math.sqrt(5))/2,s=[];for(const d of[-1,1])for(const _ of[-1,1])s.push([0,d,_*n],[d,_*n,0],[_*n,0,d]);for(const d of s){const _=Math.hypot(...d);d[0]/=_,d[1]/=_,d[2]/=_}const a=(d,_)=>d[0]*_[0]+d[1]*_[1]+d[2]*_[2],r=(d,_)=>[d[1]*_[2]-d[2]*_[1],d[2]*_[0]-d[0]*_[2],d[0]*_[1]-d[1]*_[0]],l=[];for(let d=0;d<12;d+=1)for(let _=d+1;_<12;_+=1)for(let g=_+1;g<12;g+=1)if(a(s[d],s[_])>.4&&a(s[_],s[g])>.4&&a(s[d],s[g])>.4){const m=[0,1,2].map(b=>s[d][b]+s[_][b]+s[g][b]),v=Math.hypot(...m);l.push(m.map(b=>b/v))}const c=s.map(d=>{const _=s.find(b=>b!==d&&a(b,d)>.4),g=_.map((b,x)=>b-d[x]*a(_,d)),m=Math.hypot(...g),v=g.map(b=>b/m);return[v,r(d,v)]}),h=i.createImageData(1024,512),u=Math.PI*2/5;for(let d=0;d<512;d+=1){const _=(.5-(d+.5)/512)*Math.PI;for(let g=0;g<1024;g+=1){const m=(g+.5)/1024*Math.PI*2,v=[Math.cos(_)*Math.cos(m),Math.sin(_),Math.cos(_)*Math.sin(m)];let b=-2,x=0;for(let y=0;y<12;y+=1){const R=a(v,s[y]);R>b&&(b=R,x=y)}const w=Math.acos(Math.min(1,b)),T=(Math.atan2(a(v,c[x][1]),a(v,c[x][0]))%u+u)%u-u/2,A=.345*Math.cos(u/2)/Math.cos(T);let S=244;if(w<A-.012)S=22;else if(w<A+.012)S=96;else{let y=-2,R=-2;for(const D of l){const k=a(v,D);k>y?(R=y,y=k):k>R&&(R=k)}Math.acos(Math.min(1,R))-Math.acos(Math.min(1,y))<.022&&(S=168)}const M=(d*1024+g)*4;h.data[M]=S,h.data[M+1]=S,h.data[M+2]=S+(S>200?4:0),h.data[M+3]=255}}i.putImageData(h,0,0);const p=this._track(new No(e));p.colorSpace=Ie;const f=new Qt(this._track(new tr($t,28,20)),this._track(new xi({map:p,roughness:.38,metalness:.02})));f.castShadow=!0,t.add(f),t.sphere=f,this._ballShadow=new Qt(this._track(new Lo(.24,20)),this._track(new Ze({color:0,transparent:!0,opacity:.35,depthWrite:!1}))),this._ballShadow.rotation.x=-Math.PI/2,this._ballShadow.renderOrder=2,this.ball=t,this.root.add(t,this._ballShadow)}start(){this._disposed||(this.state.phase==="fulltime"&&this.reset(),this._started=!0,this.state.paused=!1)}reset(){const t=this.state;t.phase="kickoff",t.elapsed=0,t.duration=this.matchLength??Vr,t.timeRemaining=t.duration,t.score.home=0,t.score.away=0,t.stats=this._newStats(),t.message="KICK OFF",t.shotPower=null,this._phaseTimer=1.6,this._possessionTeam=null,this._lastPossession="home",this._charge=null,this._buffer=null,this.setPiece=null,this._pendingRestart=null,this.replay=null,this._replayCount=0,this._replayHead=0,this._accumulator=0;for(const e of this.players)e.stamina=1;this._resetPositions("home"),this._setControlled(this._teamPlayers.home[9]),this._sync()}startIntro(){this.reset(),this._started=!0,this.state.paused=!1,this.state.phase="intro",this.state.message="",this._intro={t:0,stage:""};const t=-9,e=(i,n,s,a,r=0)=>{const l=a==="home"?-1.1:a==="away"?1.1:r;i.position.set(-this.halfW-Nn.outward-.8-n*.95,0,l),i.intro={file:l,z:a==="home"?-2.4-s*1.25:a==="away"?2.4+s*1.25:s,x:t},i.velocity.set(0,0,0),i.act="",i.stun=0,i.animSpeed=0,i.facing.set(1,0,0),i.mesh.rotation.y=Math.PI/2};e(this.referee,0,0,null),e(this.assistants[0],1,-1.2,null,-.95),e(this.assistants[1],1,1.2,null,.95);for(const i of["home","away"])this._teamPlayers[i].forEach((n,s)=>{e(n,s+2,10-s,i),n.selection.visible=!1,n.arrow.visible=!1});this.ball.position.set(0,$t,0),this.ball.velocity.set(0,0,0),this._emit({type:"intro",stage:"walkout"})}skipIntro(){if(this.state.phase==="intro"){this._intro=null;for(const t of[...this.players,...this.officials])t.intro=null,t.act="",t.velocity.set(0,0,0),t.animSpeed=0;this._resetPositions("home"),this._setControlled(this._teamPlayers.home[9]),this.controlledPlayer.selection.visible=!0,this.controlledPlayer.arrow.visible=!0,this.state.phase="kickoff",this.state.message="KICK OFF",this._phaseTimer=1.6,this.referee.position.set(6,0,-6);for(const t of this.assistants)t.position.set(t.lineSide*(this.halfW+1.4),0,t.lineSide*20),t.facing.set(-t.lineSide,0,0),t.mesh.rotation.y=Math.atan2(t.facing.x,t.facing.z);this._emit({type:"intro",stage:"end"})}}_walk(t,e,i,n,s,a=null){const r=e-t.position.x,l=i-t.position.z,c=Math.hypot(r,l),h=Math.min(n,c*2.5);return c>.05?(t.velocity.set(r/c*h,0,l/c*h),t.position.x+=t.velocity.x*s,t.position.z+=t.velocity.z*s):t.velocity.set(0,0,0),t.animSpeed=c>.05?h:0,t.gait+=t.animSpeed*s*1.45,h>.5?Si(t.facing,this._t1.set(r/c,0,l/c),8,s).normalize():a!=null&&Si(t.facing,this._t1.set(a,0,0),5,s).normalize(),t.mesh.rotation.y=Math.atan2(t.facing.x,t.facing.z),c}_stepIntro(t){const e=this._intro;if(!e)return;e.t+=t;const i=[...this.officials,...this.players],n=[this._teamPlayers.home[6],this._teamPlayers.away[6]],s=e.t<Id?"walkout":e.t<jl?"lineup":e.t<Dd?"toss":e.t<Jx?"positions":"end";if(s!==e.stage){if(e.stage=s,s!=="walkout"&&s!=="end"&&this._emit({type:"intro",stage:s}),s==="positions"){for(const r of this.players)r.intro=null;const a=this.players.map(r=>[r.position.x,r.position.z]);this._resetPositions("home"),this.players.forEach((r,l)=>{r.introTarget=[r.position.x,r.position.z],r.position.x=a[l][0],r.position.z=a[l][1]})}if(s==="lineup")for(const a of i)a.position.set(a.intro.x,0,a.intro.z),a.velocity.set(0,0,0),a.animSpeed=0,a.facing.set(-1,0,0),a.mesh.rotation.y=-Math.PI/2;if(s==="end"){this.skipIntro();return}}if(s==="walkout")for(const a of i){const r=a.intro;r.entered?this._walk(a,r.x,r.z,3.65,t,-1):r.entered=this._walk(a,-this.halfW+2.3,r.file,3.4,t)<.35}else if(s==="toss"){const a=e.t-jl;this._walk(this.referee,0,0,2.6,t,-1),this._walk(n[0],-.4,-1.5,2.8,t),this._walk(n[1],-.4,1.5,2.8,t);for(const r of n)r.animSpeed<.5&&(we(r.position,this.referee.position,this._t1),Si(r.facing,this._t1,6,t).normalize(),r.mesh.rotation.y=Math.atan2(r.facing.x,r.facing.z));a>3.6&&!e.tossed&&(e.tossed=!0,this._setAct(this.referee,"toss",2.2,0));for(const r of i)r!==this.referee&&!n.includes(r)&&this._walk(r,r.intro.x,r.intro.z,2,t,-1)}else if(s==="positions"){for(const a of this.players)this._walk(a,a.introTarget[0],a.introTarget[1],5.2,t,null);this._updateOfficials(t)}}setPaused(t){this.state.phase!=="fulltime"&&(this._accumulator=0,this.state.paused=!!t)}update(t,e={}){if(this._disposed||!Number.isFinite(t))return;const i=ct(t,0,.05);for(const n of["pass","through","shoot","tackle","switch","run","cross","skill"])e[n]&&!this._prevEdges[n]&&(this._pendingEdges[n]=!0),this._prevEdges[n]=!!e[n];if(this.state.paused||!this._started){this._present(i),this._sync();return}if(this.state.phase==="replay"){const n=this._pendingEdges.pass||this._pendingEdges.shoot;this._pendingEdges={},this._stepReplay(i,n)}else{this._accumulator=Math.min(this._accumulator+i,fa*Yx);let n=!0;for(;this._accumulator>=fa;){const s=n?this._pendingEdges:{};n&&(this._pendingEdges={},n=!1),this._step(fa,e,s),this._accumulator-=fa}this._recordTimer+=i,this._recordTimer>=1/Dn&&(this.state.phase==="playing"||this.state.phase==="goal"||this.state.phase==="dead")&&(this._recordTimer=0,this._recordFrame())}this._present(i),this._updateCameraFocus(i),this._sync()}getCameraFocus(){return this._cameraFocus}dispose(){if(!this._disposed){this._disposed=!0,this.scene.remove(this.root);for(const t of this._disposables)t.dispose()}}_sync(){const t=this.state;t.homeScore=t.score.home,t.awayScore=t.score.away,t.possession=this._possessionTeam,t.running=this._started&&!t.paused&&t.phase!=="fulltime";const e=Math.min(90,t.elapsed/t.duration*90),i=Math.floor(e);t.clockText=`${String(i).padStart(2,"0")}:${String(Math.floor((e-i)*60)).padStart(2,"0")}`,t.phaseLabel=t.phase==="replay"?"REPLAY":t.phase==="fulltime"?"FULL TIME":e<45?"1ST HALF":"2ND HALF",t.shotPower=this._charge?ct(this._charge.t/Yr,0,1):null,t.chargingShot=!!this._charge,t.chargeType=this._charge?.type??null}_emit(t){try{this.onEvent({...t,phase:this.state.phase})}catch(e){console.error("Match event handler failed:",e)}}_step(t,e,i){const n=this.state;if(n.phase!=="fulltime"){if(this._tickTimers(t),n.phase==="intro"){this._stepIntro(t);return}if(n.phase==="kickoff"){this._phaseTimer-=t;for(const s of this.players)s.velocity.multiplyScalar(Math.exp(-8*t)),s.animSpeed=0;if(this._phaseTimer<=0){n.phase="playing";const s=this._teamPlayers[this._kickoffTeam][9];this._takePossession(s,"kickoff"),this.setPiece={kind:"kickoff",taker:s,timer:0,ready:!0},n.message=s.team==="home"&&!this.autoplay?"PASS TO KICK OFF":"KICK OFF",this._emit({type:"whistle"})}return}if(n.phase==="goal"){this._phaseTimer-=t,this._updateOfficials(t),this._movePlayers(t,{},!0),this._separate(),this._updateBall(t,!0),this._phaseTimer<=0&&this._beginReplay({kind:"goal",frame:this._goalFrame,before:5.5,after:1.2,focus:null});return}if(n.phase==="dead"){this._phaseTimer-=t,this._cardTimer>0&&(this._cardTimer-=t,this._cardTimer<=0&&this._setAct(this.referee,"card",3.4,0)),this._updateOfficials(t),this._runTactics(t),this._movePlayers(t,e,!1),this._separate(),this._updateBall(t,!0),this._phaseTimer<=0&&(this._replayReq?this._beginReplay(this._replayReq):(n.phase="playing",this._applyRestart()));return}if(this.setPiece?.kind==="kickoff"){this._humanActions(t,e,i),this._aiHolder(t);return}if(n.elapsed+=t,n.timeRemaining=Math.max(0,n.duration-n.elapsed),this._possessionTeam&&(n.stats[this._possessionTeam].possessionSeconds+=t),n.timeRemaining<=0&&!this.setPiece){this._finish();return}i.switch&&!this.setPiece&&this._switchPlayer(),this._updateOfficials(t),this._runTactics(t),this._humanActions(t,e,i),this._movePlayers(t,e,!1),this._separate(),this._aiHolder(t),this._updateBall(t,!1),n.phase==="playing"&&(this._updateGoalkeepers(t),this._looseBall(),this._aiTackles(t),this._autoSwitch(t))}}_tickTimers(t){const e=this.ball;e.protectedTimer=Math.max(0,e.protectedTimer-t),e.headerLock=Math.max(0,(e.headerLock||0)-t);for(const n of this.players)if(n.cooldown=Math.max(0,n.cooldown-t),n.stun=Math.max(0,n.stun-t),n.runTimer=Math.max(0,n.runTimer-t),n.react=Math.max(0,n.react-t),n.possessionTimer=n.hasBall?n.possessionTimer+t:0,n.jostleT=Math.max(0,(n.jostleT||0)-t),n.limpT=Math.max(0,(n.limpT||0)-t),n.act&&(n.actT+=t,n.actT>=n.actDur&&n.act!=="celebrate"))if(n.act==="dive"&&n.isGoalkeeper){const s=gn[n.dive.kind].recovery;this._setAct(n,"getup",s,n.actParam),n.stun=Math.max(n.stun,s)}else n.act==="fall"?(this._setAct(n,"standup",.95,0),n.stun=Math.max(n.stun,.85),n.limpT=n.limpNext||0,n.limpNext=0):n.act="";for(const n of this.players)if(n.kick){if(n.kick.t-=t,this.ball.holder!==n){n.kick=null;continue}if(n.kick.t<=0){const s=n.kick.fn;n.kick=null,s()}}for(const n of this._staff)n.act&&(n.actT+=t,n.actT>=n.actDur&&(n.act=""));this._buffer&&this.state.elapsed>this._buffer.until&&(this._buffer=null);const i=this._buffer;i?.player===e.holder&&i?.afterChest&&e.position.y<=$t+.08&&(this._buffer=null,this._execute(i.player,i.type,i.power,i.input))}_setAct(t,e,i,n=0){t.act=e,t.actT=0,t.actDur=i,t.actParam=n}_finish(){const t=this.state;t.phase="fulltime",t.message="FULL TIME",t.timeRemaining=0,this._charge=null;for(const e of this.players)e.velocity.multiplyScalar(.2),e.animSpeed=0;this._emit({type:"fulltime",score:{...t.score},stats:t.stats})}_opp(t){return t==="home"?"away":"home"}_resetPositions(t){this._kickoffTeam=t;for(const s of this.players){const a=s.attackDirection,r=s.base.x;let l=Math.min(s.base.z,-1.6);s.team!==t&&Math.hypot(r,l)<9.4&&(l=-Math.sqrt(9.4**2-r**2)),s.position.set(r*a,0,l*a),s.velocity.set(0,0,0),s.desired.set(0,0,0),s.facing.set(0,0,a),s.mesh.rotation.y=a>0?0:Math.PI,s.target.copy(s.position),Object.assign(s,{hasBall:!1,shielding:!1,cooldown:0,stun:0,act:"",actT:0,runTimer:0,chasing:!1,pressing:!1,animSpeed:0,react:0,kick:null}),s.isGoalkeeper&&(s.dive=null,s.diveContact=null)}const e=this._teamPlayers[t][9];e.position.set(.25*e.attackDirection,0,-.55*e.attackDirection);const i=this._teamPlayers[t][7];i.position.set(3.2*i.attackDirection,0,-1.2*i.attackDirection),we(e.position,i.position,e.facing),e.mesh.rotation.y=Math.atan2(e.facing.x,e.facing.z);const n=this.ball;n.position.set(0,$t,0),n.velocity.set(0,0,0),Object.assign(n,{holder:null,lastTouch:null,intendedReceiver:null,passTeam:null,shotTeam:null,shotBy:null,lob:!1,inHands:!1,protectedTimer:0,offside:null,kickoffTaker:null,indirectTaker:null}),this.setPiece=null,this._pendingRestart=null,this._charge=null,this._buffer=null,this._restartKick=null,this._possessionTeam=null,this._cameraFocus.set(0,.8,0)}_ballFuture(t,e){const i=this.ball;let n=i.position.x,s=i.position.z,a=i.velocity.x,r=i.velocity.z;const l=i.position.y,c=i.velocity.y;if(l>$t+.05||c>.5){const u=(c+Math.sqrt(Math.max(0,c*c+2*cn*(l-$t))))/cn;if(t<=u)return e.set(n+a*t,l+c*t-.5*cn*t*t,s+r*t);n+=a*u,s+=r*u,t-=u,a*=.7,r*=.7}const h=(1-Math.exp(-Ts*t))/Ts;return e.set(n+a*h,$t,s+r*h)}_interceptTime(t,e,i){for(let n=.1;n<=3;n+=.1)if(this._ballFuture(n,i),i.y<1.7&&le(t.position,i)<=e*n+.5)return n;return 3.2+le(t.position,i)/e}_runTactics(t){if(this._tacticTimer-=t,this._tacticTimer>0)return;this._tacticTimer=jx;const e=this.ball,i=e.holder,n=i?this._focus.copy(i.position):this._ballFuture(.3,this._focus),s=this._t1;for(const a of["home","away"]){const r=this._teamPlayers[a],l=this._teamPlayers[this._opp(a)],c=r[0].attackDirection,h=this._possessionTeam?this._possessionTeam===a:this._lastPossession===a,u=n.z*c,p=n.x*c;let f=-1/0,d=-1/0;for(const T of l){const A=T.position.z*c;A>f?(d=f,f=A):A>d&&(d=A)}const _=Math.max(d,u,0),g=ct(u*.72+(h?9:-7),-34,32),m=!h&&!this.setPiece&&u<-this.halfL+26&&Math.abs(p)<27,v=!h&&i?.team===this._opp(a)&&this._pressureOn(i)>.75;let b=null,x=null,w=null;if(i){if(i.team!==a&&!this.setPiece&&!e.inHands){const T=r.filter(A=>!A.isGoalkeeper&&A.stun<=0).sort((A,S)=>jt(A.position,n)-jt(S.position,n));x=T[0],T[1]&&le(T[1].position,n)<14&&(w=T[1]),a==="home"&&!this.autoplay&&(x===this.controlledPlayer||(w=x),x=null,w===this.controlledPlayer&&(w=T[1]===this.controlledPlayer?T[2]:T[1]))}}else{let T=1/0;for(const A of r){if(A.isGoalkeeper||A.stun>0)continue;const S=e.intendedReceiver===A?-1:this._interceptTime(A,8.2*A.pace,s);S<T&&(T=S,b=A)}b&&a==="home"&&!this.autoplay&&e.passTeam!==a&&b!==this.controlledPlayer&&this._interceptTime(this.controlledPlayer,8.2,s)<T+.7&&(b=null)}let C=null;if(b&&e.passTeam&&e.passTeam!==a){let T=1/0;for(const A of r){if(A===b||A.isGoalkeeper||A.stun>0||a==="home"&&!this.autoplay&&A===this.controlledPlayer)continue;const S=this._interceptTime(A,8.2*A.pace,s);S<T&&S<1.05&&(T=S,C=A)}}if(!i&&b&&e.passTeam===a){let T=1.25;for(const A of r){if(A===b||A===e.lastTouch||A.isGoalkeeper||A.stun>0)continue;const S=this._interceptTime(A,8.2*A.pace,s);S<T&&(T=S,C=A)}}for(const T of r){if(T.chasing=T===b||T===C,T.pressing=T===x,T.isGoalkeeper)continue;if(this.setPiece?.taker===T){T.target.copy(T.position);continue}if(this.setPiece?.throwOption===T){const R=this.setPiece.taker.position;T.target.set(Math.sign(R.x)*(this.halfW-6),0,this.setPiece.throwSupportZ),T.chasing=!0;continue}const A=this.setPiece?.wall?.find(R=>R.p===T);if(A){T.target.copy(A.spot);continue}if(T===b||T===C){this._interceptTime(T,8.6*T.pace,s),T.target.set(s.x,0,s.z);continue}const S=this._t2.set(0,0,-c*this.halfL);if(T===x){we(n,S,s),T.target.copy(n).addScaledVector(s,.55);continue}if(T===w){we(n,S,s),T.pressing=!0,T.target.copy(n).addScaledVector(s,m?3.2:4),m&&(T.target.x*=.88);continue}let M=g+(T.base.z+26)*(h?.86:.72),y=T.base.x*(h?1.08:.8)+p*.32;if(T.line==="DEF"?M=ct(M,-45,h?3:-6):T.line==="MID"?M=ct(M,-40,35):M=ct(M,-18,47),!h&&!m&&T.line==="DEF"&&(M=ct(g-(v?7:12),-45,-8)),m&&T.line!=="FWD"){const R=T.line==="DEF"?.52:.66,D=ct(p*.27,-5.5,5.5);y=ct(T.base.x*R+D,-17,17);const k=u-(T.line==="DEF"?5.5:1.8);M=ct(k,-this.halfL+(T.line==="DEF"?5.5:10),-this.halfL+24),T.target.set(y*c,0,M*c),T.pressing=!0;continue}if(h&&i&&i!==T){const R=i.position.z*c;T.line!=="DEF"&&Math.abs(p)>13&&T.base.x*p<0&&Math.abs(T.base.x)>9&&(y=Math.sign(T.base.x)*Math.max(Math.abs(y),Math.abs(T.base.x)*.94)),T.role==="ST"&&(M=Math.max(M,Math.min(R+13,_-1.6))),T.runTimer>0?M=Math.min(47,Math.max(M,_+7)):T.line!=="DEF"&&u>-5&&(M=Math.min(M,Math.max(_-1.6,u)));const D=y-i.position.x*c,k=M-R,F=Math.hypot(D,k);F<8&&(y+=(D>=0?1:-1)*(8-F))}else h&&T.line!=="DEF"&&u>-5&&(M=Math.min(M,Math.max(_-1.6,u)));if(T.target.set(ct(y*c,-this.halfW+1.5,this.halfW-1.5),0,ct(M,-50,50)*c),this.setPiece?.kind==="penalty"){const R=this.setPiece.taker.attackDirection*this.halfL;Math.abs(T.target.z-R)<19&&(T.target.z=R-Math.sign(R)*(19+T.index%3))}if(!h&&T.line!=="FWD"){let R=null,D=81;for(const k of l){if(k===i||k.isGoalkeeper||k.position.z*c>6)continue;const F=jt(k.position,T.target);F<D&&(D=F,R=k)}R&&(we(R.position,S,s),this._t3.copy(R.position).addScaledVector(s,1.7),T.target.lerp(this._t3,.62),T.line==="DEF"&&(T.target.z=ct(T.target.z*c,M-2.3,M+2.3)*c))}}}}_ballIsOurs(t){const e=this.ball;return e.holder?e.holder.team===t.team:e.lastTouch?.team===t.team&&(e.passTeam===t.team||le(e.position,t.position)<3)}_humanActions(t,e,i){const n=this.controlledPlayer;if(!n||this.autoplay)return;const s=this.ball.holder===n;if(n.stun<=0){i.skill&&s&&this._dribbleSkill(n,this._aim(e,n),e);for(const c of["shoot","pass","through","cross"])i[c]&&(s||this._ballIsOurs(n)?this._charge={type:c,t:0,aim:null}:c==="shoot"?this._slideTackle(n):c==="pass"&&this._switchPlayer());i.tackle&&!s&&this._standTackle(n),i.run&&s&&this._triggerRun(n)}const a=this._charge;if(!a||(Math.hypot(e.worldX||0,e.worldZ||0)>.2&&(a.aim={worldX:e.worldX,worldZ:e.worldZ}),a.t+=t,e[`${a.type}Held`]&&a.t<Yr))return;const r=ct(a.t/Yr,.08,1);this._charge=null;const l=a.aim?{...e,...a.aim}:e;this.ball.holder===n?this._execute(n,a.type,r,l):this._buffer={type:a.type,power:r,until:this.state.elapsed+.9,player:n,input:l}}_aim(t,e){const i=new L(Number(t?.worldX)||0,0,Number(t?.worldZ)||0);return i.lengthSq()>.04?i.normalize():i.copy(e.facing).setY(0).normalize()}_inShootingRange(t){const e=this.halfL-t.position.z*t.attackDirection,i=Math.abs(t.position.x);return e>=0&&(e<=16.5&&i<=20.16||e<=23&&i<=13)}_execute(t,e,i,n){if(t.act==="chest"&&this.ball.position.y>$t+.08){this._buffer={type:e,power:i,until:this.state.elapsed+.8,player:t,input:n,afterChest:!0};return}const s=this._aim(n,t);if(t.isGoalkeeper&&this.ball.inHands){this._keeperRelease(t,e,s,i);return}const a=this.setPiece?.taker===t?this.setPiece:null;if(a&&a.readyAt&&!a.ready)return;if(a?.kind==="kickoff"){this._kickoffPass(t);return}if(a?.kind==="throw-in"){this._throwIn(t,s,i);return}if(a?.indirect){this._pass(t,s,i);return}if(a?.kind==="corner"){e==="pass"?this._pass(t,s,i):this._lob(t,s,i,{cross:!0});return}a&&a.kind!=="penalty"&&(this.setPiece=null,a.kind==="goal-kick"&&(this._restartKick=t)),e==="shoot"&&!a&&this.passAssist&&!n?.finesse&&!n?.chip&&!this._inShootingRange(t)?this._pass(t,s,i):e==="shoot"?this._shoot(t,s,Math.max(.25,i),n):e==="cross"?this._lob(t,s,i,{}):this._pass(t,s,i,{through:e==="through"})}_kickoffPass(t){const e=this._teamPlayers[t.team][7],i=we(this.ball.position,e.position,new L);this._pass(t,i,.12,{target:e,kickoff:!0})}_throwIn(t,e,i){if(t.kick)return;const n=this.setPiece,s=-Math.sign(t.position.x);e.x*s<.15&&(e=new L(s,0,e.z).normalize());const a=7+i*15;let r=n.throwOption,l=-1/0;for(const{m:h,dist:u,angle:p}of this._passCandidates(t,e,1.55)){if(h.isGoalkeeper||h.stun>0||u>25||Math.abs(h.position.x)>this.halfW-1)continue;const f=-p*5-Math.abs(u-a)*.16-this._passLane(t,h);f>l&&(l=f,r=h)}we(t.position,r.position,t.facing),t.mesh.rotation.y=Math.atan2(t.facing.x,t.facing.z);const c=t.facing.clone();this._queueKick(t,"throw",.38,.68,0,()=>this._lobNow(t,c,i,{thrown:!0,target:r}))}_keeperRelease(t,e,i,n){if(t.kick||t.act==="dive"||t.act==="getup")return;if(t.facing.copy(i),t.holdFor=null,t.distStyle=null,e==="shoot"||e==="cross"){this._queueKick(t,"punt",.44,.95,1,()=>this._lobNow(t,i,.45+n*.55,{}));return}let s=null,a=-1/0;for(const r of this._passCandidates(t,i,1.1)){if(r.dist>36)continue;const l=-r.angle*5-Math.abs(r.dist-(10+n*22))*.06;l>a&&(a=l,s=r.m)}s&&we(t.position,s.position,t.facing),this._queueKick(t,"gkthrow",.36,.85,0,()=>this._lobNow(t,t.facing,.3+n*.5,{thrown:!0,target:s}))}_triggerRun(t){const e=this._teamPlayers[t.team].filter(n=>n!==t&&n.line!=="GK"&&n.line!=="DEF").sort((n,s)=>jt(n.position,t.position)-jt(s.position,t.position)),i=e.find(n=>n.position.z*n.attackDirection>=t.position.z*n.attackDirection-4)??e[0];i&&(i.runTimer=3.2,this._emit({type:"run",player:i}))}_switchPlayer(){const t=this.ball;if(t.holder?.team==="home")return;const e=t.holder?t.holder.position:this._ballFuture(.4,this._t4),i=this._teamPlayers.home.filter(n=>!n.isGoalkeeper).sort((n,s)=>jt(n.position,e)-jt(s.position,e));this._setControlled(i.find(n=>n!==this.controlledPlayer)??i[0])}_autoSwitch(){const t=this.ball,e=this.controlledPlayer;if(t.holder?.team==="home"&&t.holder!==e&&!t.holder.isGoalkeeper){this._setControlled(t.holder);return}!t.holder&&t.intendedReceiver?.team==="home"&&t.intendedReceiver!==e&&!t.intendedReceiver.isGoalkeeper&&this._setControlled(t.intendedReceiver)}_setControlled(t){if(!(!t||t.team!=="home"||t.isGoalkeeper&&!(this.ball.inHands&&this.ball.holder===t)||t===this.controlledPlayer&&t.selection.visible)){this.controlledPlayer=t,this._charge=null;for(const e of this.players)e.selection.visible=e===t,e.arrow.visible=e===t}}_movePlayers(t,e,i){const n=this.ball,s=Number(e.worldX)||0,a=Number(e.worldZ)||0,r=Math.min(1,Math.hypot(s,a));for(const l of this.players){const c=!i&&!this.autoplay&&l===this.controlledPlayer;let h=9;if(l.sprinting=!1,l.jockeying=c&&!!e.jockey&&!l.hasBall,l.shielding=c&&!!e.jockey&&l.hasBall&&!l.isGoalkeeper&&!l.act&&!l.kick&&l.stun<=0&&!this.setPiece,this.setPiece?.kind==="kickoff"||this.setPiece?.keeper===l){l.velocity.set(0,0,0),l.desired.set(0,0,0),l.animSpeed=0;continue}else if(this.setPiece?.kind==="throw-in"&&this.setPiece.taker===l||l.act==="throw"&&!l.isGoalkeeper&&Math.abs(l.position.x)>this.halfW){l.velocity.set(0,0,0),l.desired.set(0,0,0),l.animSpeed=0;continue}else if(l.isGoalkeeper&&(l.act==="dive"||l.act==="getup")){this._moveKeeperDive(l,t);continue}else if(l.hasBall&&!l.kick&&qn[l.act]){const{forward:f}=l.dribbleMove,{exit:d,pace:_,turn:g}=qn[l.act],m=l.actT/l.actDur,v=ct((m-.37)/.53,0,1),b=l.actParam*(-.62*Math.sin(m*Math.PI)*(1-v)+d*v*4.6);l.desired.set(f.x*Ge(_,5.9,v)+f.z*b,0,f.z*Ge(_,5.9,v)-f.x*b),l.facing.copy(f).applyAxisAngle(Kx,l.actParam*g*v),h=17}else if(l.hasBall&&l.act==="hurdle"){const f=l.actParam;l.desired.copy(l.facing).multiplyScalar(5.8),l.desired.x+=l.facing.z*f*1.2,l.desired.z-=l.facing.x*f*1.2,h=14}else if(l.act==="slide")l.desired.copy(l.facing).multiplyScalar(Math.max(0,9.5-l.actT*14)),h=20;else if(!c&&l.isGoalkeeper&&n.holder===l&&n.inHands&&!l.kick&&!l.act&&l.stun<=0&&!this.setPiece){const f=(l.position.z+l.attackDirection*this.halfL)*l.attackDirection;l.desired.set(-l.position.x*.25,0,f<12.5?l.attackDirection*2.1:0),Si(l.facing,this._t1.set(0,0,l.attackDirection),6,t).normalize(),h=6}else if(l.stun>0||this.setPiece?.taker===l||l.isGoalkeeper&&n.holder===l&&!(c&&n.inHands&&!l.kick&&!l.act)||l.kick)l.desired.set(0,0,0),h=12,l.kick?.facing?Si(l.facing,l.kick.facing,18,t).normalize():c&&r>.2&&Si(l.facing,this._t1.set(s,0,a).normalize(),8,t).normalize();else if(c){const f=!!e.sprint&&!e.jockey&&r>.1&&l.stamina>.03;let d=(l.shielding?3.15:e.jockey?4.2:f?8.9:6.7)*l.pace;if(l.isGoalkeeper&&n.inHands&&(d=3.6),l.hasBall&&(d*=f?.9:.93),this._charge&&l.hasBall&&(d*=.72),!l.hasBall&&!n.holder&&(n.intendedReceiver===l||n.passTeam===l.team&&l.chasing)){const _=Math.max(6.4,d);this._interceptTime(l,_,this._t1),we(l.position,this._t1,this._t2),l.desired.copy(this._t2).multiplyScalar(Math.min(_,le(l.position,this._t1)*6)),r>.68&&s*this._t2.x+a*this._t2.z<-.42&&l.desired.set(s,0,a).multiplyScalar(d)}else r>.05?l.desired.set(s,0,a).multiplyScalar(d):l.hasBall&&l.act==="firsttouch"?l.desired.copy(l.velocity).multiplyScalar(.84):l.desired.set(0,0,0);l.sprinting=f,l.stamina=ct(l.stamina+(f?-.085:.06)*t,0,1),h=f?6.5:l.hasBall?8.5:10.5}else if(l.hasBall){const f=this._dribbleDir(l),d=this._pressureOn(l)<.35;l.desired.copy(f).multiplyScalar((d?7.2:6.2)*l.pace*this.difficulty.pace),l.sprinting=d,h=7.5}else{const f=le(l.position,l.target);we(l.position,l.target,this._t1);const d=l.chasing||l.pressing||l.runTimer>0||i&&l.act==="celebrate";let _=d?7.9:f>12?6.9:5.7;l.isGoalkeeper&&(_=l.sweeping?7.6:6.4),_*=l.pace*(l.team==="away"?this.difficulty.pace:1),l.sprinting=d&&f>2,l.desired.copy(this._t1).multiplyScalar(Math.min(_,f*2.6)),l.stamina=Math.min(1,l.stamina+.04*t)}Si(l.velocity,l.desired,h,t),l.desired.lengthSq()<.01&&l.velocity.multiplyScalar(Math.exp(-6*t)),l.position.addScaledVector(l.velocity,t);const u=this.halfW+(this.setPiece?.taker===l?.8:-.4);if(l.position.x=ct(l.position.x,-u,u),l.position.z=ct(l.position.z,-this.halfL-.6,this.halfL+.6),l.isGoalkeeper&&n.holder===l&&n.inHands){l.position.x=ct(l.position.x,-19.5,19.5);const f=-l.attackDirection*this.halfL;l.position.z=f+l.attackDirection*ct((l.position.z-f)*l.attackDirection,.4,15.8)}const p=Math.hypot(l.velocity.x,l.velocity.z);if(l.animSpeed=p,l.gait+=p*t*1.45,l.shielding){let f=null,d=3.4**2;for(const _ of this._teamPlayers[this._opp(l.team)]){const g=jt(l.position,_.position);g<d&&(f=_,d=g)}f&&Si(l.facing,we(f.position,l.position,this._t1),8,t).normalize()}else!qn[l.act]&&!["slide","dive","getup","hurdle"].includes(l.act)&&(l.jockeying||!c&&!l.hasBall&&p<1.6&&l.stun<=0||l.isGoalkeeper&&!l.hasBall?(we(l.position,n.position,this._t1),this._t1.lengthSq()>.5&&Si(l.facing,this._t1,l.isGoalkeeper?9:5,t).normalize()):p>.7&&(this._t1.copy(l.velocity).setY(0).normalize(),Si(l.facing,this._t1,12,t).normalize()));l.mesh.rotation.y=Math.atan2(l.facing.x,l.facing.z)}}_dribbleDir(t){const e=t.attackDirection,i=e*this.halfL,n=Math.abs(i-t.position.z)>26&&t.line==="FWD"&&t.role!=="ST"?t.position.x:t.position.x*.25,s=we(t.position,this._t1.set(n,0,i),this._t2);for(const a of this._teamPlayers[this._opp(t.team)]){const r=jt(t.position,a.position);if(r>30||(a.position.z-t.position.z)*e<-1)continue;const c=Math.sqrt(r),h=Math.sign(t.position.x-a.position.x)||(t.index%2?1:-1);s.x+=h*ct((5.5-c)/5.5,0,1)*1.1}return Math.abs(t.position.x)>this.halfW-4&&(s.x-=Math.sign(t.position.x)*.9),s.normalize()}_separate(){if(this.setPiece?.kind==="kickoff")return;const t=.62,e=t*t,i=this.players,n=this.setPiece?.kind==="throw-in"?this.setPiece.taker:null;for(let a=0;a<i.length;a+=1){const r=i[a];for(let l=a+1;l<i.length;l+=1){const c=i[l],h=c.position.x-r.position.x,u=c.position.z-r.position.z,p=h*h+u*u;if(p>=e||p<Jn)continue;const f=Math.sqrt(p),d=(t-f)*.4/f,_=r.team!==c.team?ct(.5+(r.strength-c.strength)*.6,.2,.8):.5,g=r===n||r===this.setPiece?.keeper?1:c===n||c===this.setPiece?.keeper?0:_;r.position.x-=h*d*(1-g)*2,r.position.z-=u*d*(1-g)*2,c.position.x+=h*d*g*2,c.position.z+=u*d*g*2,r.team!==c.team&&(r.velocity.multiplyScalar(1-.02*_),c.velocity.multiplyScalar(1-.02*(1-_)),r.animSpeed>2.5&&c.animSpeed>2.5&&!r.isGoalkeeper&&!c.isGoalkeeper&&(r.jostleT=.3,r.jostleSide=h*r.facing.z-u*r.facing.x>0?-1:1,c.jostleT=.3,c.jostleSide=-h*c.facing.z+u*c.facing.x>0?-1:1))}}const s=this.setPiece;if(s)for(const a of this._teamPlayers[this._opp(s.taker.team)]){const r=le(a.position,s.taker.position),l=s.kind==="free-kick"||s.kind==="penalty"?9.15:6;s.wall?.some(c=>c.p===a)||s.kind==="penalty"&&a.isGoalkeeper||r<l&&r>Jn&&(we(s.taker.position,a.position,this._t1),a.position.addScaledVector(this._t1,(l-r)*.15))}}_markOffside(t,e){const i=this.ball;if(i.offside=null,e)return;const n=t.attackDirection,s=this._teamPlayers[this._opp(t.team)];let a=-1/0,r=-1/0;for(const c of s){const h=c.position.z*n;h>a?(r=a,a=h):h>r&&(r=h)}const l=Math.max(r,i.position.z*n,0)+.35;for(const c of this._teamPlayers[t.team])c===t||c.position.z*n<=l||(i.offside??=new Set).add(c)}_offside(t){const e=this.ball;e.offside=null;const i=this.assistants[t.attackDirection>0?0:1];this._setAct(i,"flag",2.2,0),this._stopPlay({kind:"free-kick",indirect:!0,reason:"offside",team:this._opp(t.team),x:t.position.x,z:t.position.z},2.6),this._replayReq={kind:"offside",frame:this._replayCount,before:4.2,after:.9,focus:t},this._emit({type:"offside",team:t.team,player:t,position:t.position.clone()})}_foul(t,e,i){const n=this.state;if(n.phase!=="playing"||this.setPiece)return;const s=e.position,a=-t.attackDirection,r=this.halfL-s.z*a,l=r>=0&&r<=16.5&&Math.abs(s.x)<=Math.min(20.16,this.halfW-1.5);e.stun=Math.max(e.stun,2.1),this._setAct(e,"fall",2.2,0),t.isGoalkeeper||(t.stun=Math.max(t.stun,2),this._setAct(t,"protest",2.2,0)),i?(t.yellow+=1,this._cardTimer=1.7):this._setAct(this.referee,"call",2,0),n.stats[t.team].fouls=(n.stats[t.team].fouls||0)+1;const c=l?{kind:"penalty",team:e.team,x:0,z:a*(this.halfL-11)}:{kind:"free-kick",team:e.team,x:ct(s.x,-this.halfW+1,this.halfW-1),z:ct(s.z,-this.halfL+1,this.halfL-1)};this._stopPlay(c,i?5.6:3.4),this.cine={kind:"foul",victim:e,offender:t,card:i},this._replayReq={kind:"foul",frame:this._replayCount,before:4.4,after:1.4,focus:e},this._emit({type:"foul",kind:c.kind,team:t.team,player:t,victim:e,card:i?"yellow":null,position:s.clone()})}_stopPlay(t,e){const i=this.ball,n=this.state;i.holder&&(i.holder.hasBall=!1,i.holder=null,i.velocity.multiplyScalar(.3));for(const s of this.players)s.kick=null;this._setPossession(null),this._lastPossession=t.team,this._charge=null,this._buffer=null,i.shotTeam=null,i.passTeam=null,i.intendedReceiver=null,i.offside=null,i.kickoffTaker=null,i.indirectTaker=null,this._pendingRestart=t,this._replayReq=null,n.phase="dead",this._phaseTimer=e}_pressureOn(t){let e=0;for(const i of this._teamPlayers[this._opp(t.team)]){const n=le(t.position,i.position);n<6&&(e+=(6-n)/4)}return e}_release(t,e=.38){const i=this.ball;t.hasBall=!1,t.shielding=!1,i.holder===t&&(i.holder=null),i.inHands=!1,t.cooldown=e,i.lastTouch=t,i.kickoffTaker=this.setPiece?.kind==="kickoff"?t:null,i.kickoffSeparated=!1,i.indirectTaker=this.setPiece?.indirect?t:null,this.setPiece?.taker===t&&(this.setPiece=null),this._setPossession(null),i.shotTeam=null,i.shotBy=null,i.passTeam=null,i.intendedReceiver=null,i.lob=!1}_launch(t,e,i,n=0,s=!1){const a=this.ball,r=we(s?a.position:t.position,e,this._t1);if(r.lengthSq()<Jn&&r.copy(t.facing),s||a.position.copy(t.position).addScaledVector(r,.55),n>0){const l=le(a.position,e);a.position.y=Math.max(a.position.y,$t+.05),a.velocity.copy(r).multiplyScalar(l/n),a.velocity.y=.5*cn*n-(a.position.y-$t)/n}else a.position.y=$t,a.velocity.copy(r).multiplyScalar(i),a.velocity.y=0;t.facing.copy(r)}_passCandidates(t,e,i){const n=[];for(const s of this._teamPlayers[t.team]){if(s===t)continue;const a=s.position.x-t.position.x,r=s.position.z-t.position.z,l=Math.hypot(a,r);if(l<2.5)continue;const c=Math.acos(ct((a*e.x+r*e.z)/l,-1,1));c<=i&&n.push({m:s,dist:l,angle:c})}return n}_queueKick(t,e,i,n,s,a){t.kick||this.ball.holder!==t||(this._setAct(t,e,n,s),t.kick={t:i,fn:a})}_pass(t,e,i,n={}){const s=e.clone(),a=this.ball.inHands;this._queueKick(t,a?"throw":"pass",a?.14:.1,a?.45:.5,0,()=>this._passNow(t,s,i,n))}_lob(t,e,i,n={}){const s=e.clone();this._queueKick(t,n.thrown?"throw":"kick",n.thrown?.16:.15,n.thrown?.5:.7,n.thrown?0:.75,()=>this._lobNow(t,s,i,n))}_shoot(t,e,i,n=null){if(t.kick||this.ball.holder!==t)return;const s=e.clone(),a=n?{worldX:n.worldX,worldZ:n.worldZ,finesse:n.finesse,chip:n.chip}:null,r=t.animSpeed>3.25,l=(this.ball.position.x-t.position.x)*t.facing.z-(this.ball.position.z-t.position.z)*t.facing.x,c=Math.abs(l)>.095?-Math.sign(l):t.index%4===1?-1:1,h=!a?.finesse&&!a?.chip,u=h?r?21/120:20/120:.15,p=h?{offset:c*(r?.27:.2),reach:r?.62:.57}:null;this._queueKick(t,"kick",u,h?.66:.75,h?c*(r?2:1):0,()=>this._shootNow(t,s,i,a,!1,p));const f=Math.abs(a?.worldX??0)>.3?Math.sign(a.worldX)*(this.goalHalf-.45):0;t.kick.facing=new L(f-t.position.x,0,t.attackDirection*this.halfL-t.position.z).normalize(),t.kick.contact=p}_strikeSpot(t,e,i){const{reach:n,offset:s}=e,a=t.facing,r=t.position.x+a.x*n-a.z*s,l=t.position.z+a.z*n+a.x*s,c=this.halfL-.01;return i.set(ct(r,-this.halfW,this.halfW),$t,ct(l,-c,c))}_passNow(t,e,i,{through:n=!1,target:s=null,roll:a=!1,kickoff:r=!1}={}){if(this.ball.holder!==t)return;const l=this.ball,c=["corner","goal-kick"].includes(this.setPiece?.kind)||this._restartKick===t;this._restartKick=null;const h=t===this.controlledPlayer&&!this.autoplay;if(!s&&(!h||this.passAssist)){const m=n?14+i*30:7+i*32;let v=-1/0;const b=h&&!n?Math.PI:h?1:1.4;for(const x of this._passCandidates(t,e,b)){if(x.dist>46||x.m.stun>0)continue;const w=(x.m.position.z-t.position.z)*t.attackDirection,C=h?this._passLane(t,x.m):0,T=-x.angle*5.2-Math.abs(x.dist-m)*.055+(n?w*.04:0)-(x.m.isGoalkeeper?.8:0)-C;T>v&&(v=T,s=x.m)}}!s&&h&&this.passAssist&&(s=this._teamPlayers[t.team].filter(m=>m!==t&&!m.isGoalkeeper).sort((m,v)=>jt(m.position,t.position)-jt(v.position,t.position))[0]);let u;const p=l.inHands;if(s){u=this._t2.copy(s.position);const m=le(t.position,s.position);n?(u.addScaledVector(s.velocity,.55),u.z+=t.attackDirection*(3+i*8+m*.08),u.x=Ge(u.x,s.position.x*.85,.3),s.runTimer=Math.max(s.runTimer,2.2)):u.addScaledVector(s.velocity,ct(m/22,.15,.6))}else u=this._t2.copy(t.position).addScaledVector(e,n?16+i*22:8+i*22);u.x=ct(u.x,-this.halfW+1,this.halfW-1),u.z=ct(u.z,-this.halfL+1,this.halfL-1);const f=le(t.position,u),d=(r?0:h&&s&&!n?.035:.16)*(1-t.skill)*(t.team==="away"?this.difficulty.error:.8)*(.6+f/30);u.x+=ws()*d*f*.5,u.z+=ws()*d*f*.5;const _=r?7.2:ct((n?8.5:7.5)+Ts*f,10,31);this._release(t);const g=p&&!a||f>34;g?this._launch(t,u,0,ct(.7+f*.03,.9,2.2)):this._launch(t,u,_,0,r),g&&(l.lob=!0),l.intendedReceiver=s,l.passTeam=t.team,s?.team==="home"&&!s.isGoalkeeper&&h&&this._setControlled(s),r&&(this.state.message=""),s&&(this._tacticTimer=0),this.state.stats[t.team].passes+=1,this._markOffside(t,p||r||c),this._emit({type:"kick",kind:n?"through":"pass",team:t.team,player:t,target:s,position:l.position.clone(),power:ct(_/30,.3,.8)})}_passLane(t,e){let i=0;for(const n of this._teamPlayers[this._opp(t.team)]){const s=Math.sqrt(vu(n.position,t.position,e.position));s<2.6&&le(n.position,t.position)>1.4&&(i=Math.max(i,(2.6-s)*.75))}return i}_lobNow(t,e,i,{cross:n=!1,thrown:s=!1,target:a=null}={}){if(this.ball.holder!==t)return;const r=s&&this.setPiece?.kind==="throw-in"&&this.setPiece.taker===t,l=["corner","goal-kick"].includes(this.setPiece?.kind)||this._restartKick===t;this._restartKick=null;const c=this.ball,h=t.attackDirection,u=t.position.z*h,p=!r&&(n||u>30&&Math.abs(t.position.x)>11);let f=null;if(!a&&p&&!s){const m=this._teamPlayers[t.team].filter(v=>v!==t&&v.position.z*h>33&&Math.abs(v.position.x)<15).sort((v,b)=>jt(v.position,t.position)-jt(b.position,t.position));m.length?a=m[Math.min(m.length-1,Math.floor(i*m.length))]:f=this._t2.set(-Math.sign(t.position.x)*(i*6-2),0,h*(this.halfL-9))}if(!a&&!f){const m=s?8+i*30:16+i*36;let v=-1/0;for(const b of this._passCandidates(t,e,s?1.5:.9)){const x=-b.angle*4.5-Math.abs(b.dist-m)*.06;x>v&&!b.m.isGoalkeeper&&(v=x,a=b.m)}a||(f=this._t2.copy(t.position).addScaledVector(e,m))}if(a){const m=le(t.position,a.position);f=this._t2.copy(a.position).addScaledVector(a.velocity,ct(m*.03,.3,1)),p&&(f.z+=h*.8)}f.x=ct(f.x,-this.halfW+1,this.halfW-1),f.z=ct(f.z,-this.halfL+1.5,this.halfL-1.5);const d=le(t.position,f),_=(1-t.skill)*(t.team==="away"?this.difficulty.error:.8)*d*.1;f.x+=ws()*_,f.z+=ws()*_,r&&(f.x=ct(f.x,-this.halfW+2,this.halfW-2),f.z=ct(f.z,-this.halfL+2,this.halfL-2));const g=s?ct(.5+d*.045,.6,1.5):ct(.75+d*.033,.95,2.4);this._release(t,.45),s&&(c.position.y=2),r&&(c.position.x=Math.sign(t.position.x)*this.halfW,c.position.z=t.position.z,this._tacticTimer=0),this._launch(t,f,0,g,r),c.lob=!0,c.intendedReceiver=a,c.passTeam=t.team,this.state.stats[t.team].passes+=1,this._markOffside(t,s||l),this._emit({type:"kick",kind:s?"throw":"cross",team:t.team,player:t,target:a,position:c.position.clone(),power:s?.2:.75})}_shootNow(t,e,i,n=null,s=!1,a=null){const r=this.ball;if(!s&&r.holder!==t)return;const l=this.setPiece?.kind==="penalty"&&this.setPiece.taker===t,h=t.attackDirection*this.halfL,u=t===this.controlledPlayer&&!this.autoplay,p=this._teamPlayers[this._opp(t.team)][0];let f,d;if(u){const S=Number(n?.worldX)||0;f=Math.abs(S)>.3?Math.sign(S)*(this.goalHalf-.45):(p.position.x>0?-1:1)*de(.6,2.2),d=.3+Math.pow(i,1.6)*1.55,n?.finesse&&(f=Math.sign(f||1)*(this.goalHalf-.3),d=Math.min(d,1.5))}else f=(p.position.x>t.position.x*.2?-1:1)*(this.goalHalf-de(.45,2)),d=de(.25,1.9),i=de(.6,.92);s&&(d=de(.3,1.5),i=.35);const _=Math.hypot(f-t.position.x,h-t.position.z),g=this._pressureOn(t),m=(u?.7:this.difficulty.error)*(1.5-t.skill),v=(.03+i*.06+g*.03+(s?.03:0)+t.animSpeed*.0022)*m*_;f+=ws()*v*(u&&n?.finesse?.7:1.6),d=Math.max(.15,d+ws()*v*(u?.45:.9)+(i>(u?.97:.9)?de(0,u?.7:1.3):0)),u&&!s&&!n?.finesse&&!n?.chip&&this._inShootingRange(t)&&(f=ct(f,-this.goalHalf+.45,this.goalHalf-.45),d=Math.min(d,this.dimensions.goalHeight-.32));let b=s?de(13,16):u?23+i*12:17+i*15;u&&n?.finesse&&(b*=.82);const x=u&&n?.chip&&!s;x&&(b=11+i*6,d=1.2),s?(r.lastTouch=t,r.passTeam=null,r.intendedReceiver=null,r.lob=!1):this._release(t,.5),!s&&!l&&(a?this._strikeSpot(t,a,r.position):r.position.copy(t.position).addScaledVector(t.facing,.5).setY($t));const w=this._t2.set(f,d,h),C=this._t1.copy(w).sub(r.position),A=Math.hypot(C.x,C.z)/b;if(r.velocity.set(C.x/A,(d-r.position.y)/A+.5*cn*A,C.z/A),!x&&!s&&(r.velocity.y=Math.min(r.velocity.y,u?4.6:6.5)),x){const S=Math.max(A,1.1);r.velocity.set(C.x/S,.5*cn*S,C.z/S)}r.shotTeam=t.team,r.shotBy=t,r.shotOnTargetCredited=!1,r.shotFrame=this._replayCount,this.state.stats[t.team].shots+=1,s||we(t.position,w,t.facing),p.react=this.difficulty.keeper*(t.team==="home"?1:.9)+de(0,.08),this._emit({type:"kick",kind:s?"header":"shot",team:t.team,player:t,position:r.position.clone(),power:ct(b/32,.5,1)})}_aiHolder(t){const e=this.ball,i=e.holder;if(!i)return;const n=this.setPiece;if(n?.kind==="kickoff"){n.timer+=t;const C=i===this.controlledPlayer&&!this.autoplay;n.timer>=(C?10:.5)&&this._kickoffPass(i);return}if(n&&n.readyAt&&!n.ready&&n.timer>=n.readyAt&&(n.ready=!0,this._emit({type:"setpiece-ready",kind:n.kind})),!n&&!this.ball.inHands&&Math.random()<t*.8){const C=this._teamPlayers[i.team][1+Math.floor(Math.random()*10)],T=le(C.position,i.position);C!==i&&!C.act&&C.animSpeed<6.5&&T>8&&T<32&&(C.position.z-i.position.z)*i.attackDirection>2&&this._setAct(C,"call",1.4,0)}if(i===this.controlledPlayer&&!this.autoplay){i.isGoalkeeper&&this.ball.inHands&&i.possessionTimer>6&&!i.kick&&this._distribute(i,!0),n&&n.taker===i&&(n.timer+=t,n.timer>(n.readyAt||0)+10&&this._execute(i,n.kind==="penalty"?"shoot":"pass",.5,{}));return}if(i.decisionTimer-=t,n&&n.taker===i){if(n.timer+=t,n.timer<(n.readyAt?n.readyAt+1.1:1.5))return;if(n.kind==="throw-in"){this._throwIn(i,this._t3.set(-Math.sign(i.position.x),0,i.attackDirection*.4).normalize(),.3);return}if(n.kind==="corner"){this._lob(i,i.facing,de(.2,.9),{cross:!0});return}if(n.indirect){this._pass(i,i.facing,.45);return}if(n.kind==="penalty"){this._shoot(i,i.facing,.8);return}if(this.setPiece=null,n.kind==="free-kick"){const C=le(i.position,this._t3.set(0,0,i.attackDirection*this.halfL));if(!n.indirect&&C<27&&Math.abs(i.position.x)<20){this._shoot(i,i.facing,.85);return}if(C<42){this._lob(i,i.facing,de(.3,.8),{cross:!0});return}}this._distribute(i);return}if(i.isGoalkeeper){this.ball.inHands&&i.holdFor==null&&(i.holdFor=de(2.4,4.4));const C=this.ball.inHands?i.holdFor:1.1;i.possessionTimer>C&&!i.kick&&this._distribute(i,i.possessionTimer>C+1.4||!this.ball.inHands)&&(i.holdFor=null);return}if(i.decisionTimer>0||i.kick)return;i.decisionTimer=(.3+Math.random()*.3)*this.difficulty.think;const s=i.attackDirection,a=this._t3.set(0,0,s*this.halfL),r=le(i.position,a),l=this._pressureOn(i),c=Math.abs(i.position.x)<13;if(i.possessionTimer<.4&&l<.8&&r>18){i.decisionTimer=.1;return}if(r<9||r<16&&c&&Math.random()<.6||r<23&&c&&l<.4&&Math.random()<.1){this._shoot(i,i.facing,.8);return}const h=i.position.z*s;if(h>34&&Math.abs(i.position.x)>14&&Math.random()<.22&&this._teamPlayers[i.team].some(T=>T!==i&&T.position.z*s>34&&Math.abs(T.position.x)<14)){this._lob(i,i.facing,Math.random(),{cross:!0});return}const u=this._teamPlayers[this._opp(i.team)];let p=-1/0,f=-1/0;for(const C of u){const T=C.position.z*s;T>p?(f=p,p=T):T>f&&(f=T)}f=Math.max(f,h,0);let d=null,_=-1/0,g=0;const m=this._recycle[i.team],v=i.receivedFrom&&this.state.elapsed-i.receivedAt<5?i.receivedFrom:null;let b=0;for(const C of u)jt(C.position,i.position)<225&&(b+=1);for(const C of this._teamPlayers[i.team]){if(C===i||C.isGoalkeeper&&l<1.2)continue;const T=le(i.position,C.position);if(T<4||T>40||C.position.z*s>f-.2)continue;let A=9,S=25;for(const D of u)A=Math.min(A,le(D.position,C.position)),jt(D.position,i.position)>2.5&&(S=Math.min(S,vu(D.position,i.position,C.position)));S=Math.sqrt(S);let y=ct((C.position.z-i.position.z)*s*.07,-1.6,1.8)+A*.22+(S<2.4?-3.5:Math.min(S,6)*.16)-(T>28?1.2:0)-(A<2.5?1.5:0);le(C.position,a)<20&&(y+=.9),C.isGoalkeeper&&(y-=1);const R=(C.position.z-i.position.z)*s;C===v&&(y+=R>5?.6:-2.4),R<-4?y-=.9*(1-Math.min(1,l))+m*.45:R>3&&(y+=m*.3),b>=4&&Math.abs(C.position.x-i.position.x)>22&&A>7&&(y+=1.3),C.runTimer>0&&R>0&&(y+=.4),y>_&&(_=y,d=C,g=A)}let x=12;for(const C of u){const T=(C.position.z-i.position.z)*s;T>0&&T<12&&Math.abs(C.position.x-i.position.x)<4&&(x=Math.min(x,T))}const w=.9+x*.11-l*1.1+m*.3;if(d&&_>w){const C=d.velocity.z*s>4&&g>6&&d.position.z*s>h+4,T=(d.position.z-i.position.z)*s;T>6?this._recycle[i.team]=0:T<3&&(this._recycle[i.team]=Math.min(5,m+1)),!i.isGoalkeeper&&i.line!=="DEF"&&T>-2&&(i.runTimer=Math.max(i.runTimer,1.6)),le(i.position,d.position)>30&&Math.abs(d.position.x-i.position.x)>22?this._lob(i,i.facing,.6,{target:d}):this._pass(i,i.facing,C?.15:.5,{target:d,through:C})}else l>1.6&&h<-18&&this._lob(i,this._t4.set(Math.sign(i.position.x||1)*.3,0,s).normalize(),.9,{})}_distribute(t,e=!0){if(t.act==="dive"||t.act==="getup")return!1;const i=this._teamPlayers[this._opp(t.team)],n=this.ball.inHands;n&&t.distStyle==null&&(t.distStyle=Math.random());const s=n?t.distStyle:1,a=n&&s<.38,r=n&&!a&&s<.8,l=n?a?13:r?24:46:24;let c=null,h=-1/0;for(const p of this._teamPlayers[t.team]){if(p===t)continue;let f=12;for(const g of i)f=Math.min(f,le(g.position,p.position));const d=le(t.position,p.position);if(n&&(a?d>20:r?d<14||d>33:d<28))continue;const _=f*.3-Math.abs(d-l)*.09+Math.random()*.8;f>(a?5.5:r?3.5:3)&&_>h&&(h=_,c=p)}if(!c){if(!e)return!1;c=this._teamPlayers[t.team][9]}const u=le(t.position,c.position);return n?(t.distStyle=null,we(t.position,c.position,t.facing),u<33?this._queueKick(t,"gkthrow",.36,.85,0,()=>this._lobNow(t,t.facing,.5,{thrown:!0,target:c})):this._queueKick(t,"punt",.44,.95,1,()=>this._lobNow(t,t.facing,.8,{target:c})),!0):(u>30?this._lob(t,t.facing,.6,{target:c}):this._pass(t,t.facing,.5,{target:c}),!0)}_standTackle(t){if(t.cooldown>0||t.stun>0||t.act==="slide")return!1;const e=this.ball,i=e.holder;t.cooldown=.75,this._setAct(t,"tackle",.4,0);const n=we(t.position,e.position,this._t1);if(le(t.position,e.position)<3&&(t.facing.copy(n),t.velocity.addScaledVector(n,2.6)),!i||i.team===t.team||e.inHands||e.protectedTimer>0||this.setPiece)return!1;if(le(t.position,e.position)>1.7)return t.stun=.22,!1;const s=n.dot(i.facing)>.6,a=i.shielding&&n.dot(i.facing)>.35,r=ct(.74+(t.skill-i.skill)*.5-(s?.22:0)+(i.sprinting?.1:-.04)-(a?.24:0),.15,.93);return Math.random()>r?(t.stun=.5,Math.random()<(s?.5:.14)?(this._foul(t,i,Math.random()<(s?.3:.08)),!1):(this._emit({type:"tackle",team:t.team,player:t,success:!1}),!1)):(this.state.stats[t.team].tackles+=1,i.hasBall=!1,e.holder=null,e.lastTouch=t,this._setPossession(null),i.stun=.5,this._setAct(i,"stumble",.5,0),i.velocity.multiplyScalar(.3),Math.random()<.6?this._takePossession(t,"tackle"):(e.velocity.copy(n).multiplyScalar(de(3.5,6)),e.velocity.x+=de(-2,2),t.cooldown=.15),this._emit({type:"tackle",team:t.team,player:t,success:!0,position:e.position.clone()}),!0)}_dribbleSkill(t,e,i={}){if(this.setPiece||t.isGoalkeeper||t.stun>0||t.act||t.kick)return;const n=e.x*t.facing.z-e.z*t.facing.x,s=Math.hypot(i.worldX||0,i.worldZ||0)>.35,a=Math.abs(n)>.45;let r="stepover";s&&e.dot(t.facing)<-.38?r="pullback":a?r=i.sprint?"elastico":t.animSpeed>4.6?"chop":"feint":s&&i.sprint&&(r="stopgo");const l=a?Math.sign(n):-(t.dribbleMove?.side??-1),c=this.ball,h=c.position.x-t.position.x,u=c.position.z-t.position.z,p=t.facing.clone();t.dribbleMove={forward:p,side:l,start:[0,(h*p.z-u*p.x)*l,h*p.x+u*p.z]},this._setAct(t,r,qn[r].duration,l),this.ball.protectedTimer=Math.max(this.ball.protectedTimer,.24)}_slideTackle(t){if(t.cooldown>0||t.stun>0||t.act==="slide")return;const e=this.ball;le(t.position,e.position)<7&&we(t.position,this._ballFuture(.25,this._t2),t.facing),this._setAct(t,"slide",.85,0),t.cooldown=1.25,t.velocity.copy(t.facing).multiplyScalar(9.5),this._emit({type:"slide",team:t.team,player:t})}_slideContacts(){const t=this.ball;for(const e of this.players){if(e.act!=="slide"||e.actT>.5||t.inHands||t.protectedTimer>0||this.setPiece||t.position.y>.9||jt(e.position,t.position)>1.25*1.25)continue;const i=t.holder;if(!(i&&i.team===e.team)){if(i){if(!i.isGoalkeeper&&!i.kick&&i.stun<=0&&i.act!=="hurdle"&&(qn[i.act]||i.animSpeed>3.7&&e.actT<.33&&Math.random()<.35+i.skill*.3)){const s=Math.sign((i.position.x-e.position.x)*i.facing.z-(i.position.z-e.position.z)*i.facing.x)||1;this._setAct(i,"hurdle",.5,s),t.protectedTimer=.4,e.actT=Math.max(e.actT,.5+Jn);continue}const n=e.facing.dot(i.facing)>.45;if(Math.random()<(n?.8:.16)){e.actT=Math.max(e.actT,.5),this._foul(e,i,Math.random()<(n?.75:.3));return}i.hasBall=!1,t.holder=null,i.stun=1.3,this._setAct(i,"fall",1.4,0),i.velocity.multiplyScalar(.2),this._setPossession(null),this.state.stats[e.team].tackles+=1}else if(t.lastTouch===e)continue;t.lastTouch=e,t.passTeam=null,t.intendedReceiver=null,t.shotTeam=null,t.velocity.copy(e.facing).multiplyScalar(de(8,11)),t.velocity.x+=de(-1.5,1.5),t.velocity.y=de(.5,2.2),e.actT=Math.max(e.actT,.5),this._emit({type:"tackle",team:e.team,player:e,success:!0,position:t.position.clone()})}}}_aiTackles(t){this._slideContacts();const e=this.ball,i=e.holder;if(!(!i||e.inHands||this.setPiece))for(const n of this._teamPlayers[this._opp(i.team)]){if(n.isGoalkeeper||n.cooldown>0||n.stun>0)continue;const s=jt(n.position,e.position);if(n===this.controlledPlayer&&!this.autoplay){if(s<1.3*1.3&&n.act!=="tackle"&&n.act!=="slide"&&n.facing.dot(i.facing)<.45&&(we(n.position,e.position,this._t1),n.velocity.x*this._t1.x+n.velocity.z*this._t1.z>1.2&&Math.random()<1-Math.exp(-5*t))){this._standTackle(n);break}continue}if(s>1.6*1.6)continue;const a=n.team==="away"||this.autoplay?(i.sprinting?4.2:3)*this.difficulty.tackle:1.1;if(n.facing.dot(i.facing)>.7&&i.sprinting&&Math.random()<1-Math.exp(-.5*t)){this._slideTackle(n);break}if(Math.random()<1-Math.exp(-a*t)){this._standTackle(n);break}}}_updateBall(t,e){const i=this.ball,n=this._t4.copy(i.position);if(i.holder){const a=i.holder;if(this.setPiece?.kind==="kickoff")return;const r=a.animSpeed;if(i.inHands)i.position.copy(a.position).addScaledVector(a.facing,.32),i.position.y=1.18;else if(this.setPiece?.taker===a&&this.setPiece.kind==="penalty"){i.velocity.set(0,0,0);return}else if(this.setPiece?.taker===a&&this.setPiece.kind==="throw-in")i.position.copy(a.position).addScaledVector(a.facing,.05),i.position.y=2.02;else if(a.kick?.contact)i.position.lerp(this._strikeSpot(a,a.kick.contact,this._t1),1-Math.exp(-24*t)),i.position.y=$t;else if(a.act==="chest"){const l=ct(a.actT/.38,0,1);this._t1.copy(a.position).addScaledVector(a.facing,Ge(.28,.56,l)),this._t1.y=$t+(a.chestHeight-$t)*(1-l*l),i.position.lerp(this._t1,1-Math.exp(-28*t)),i.position.y=this._t1.y}else if(qn[a.act]){const{forward:l,side:c,start:h}=a.dribbleMove,u=qn[a.act].path,p=ct(a.actT/a.actDur,0,1),f=u.findIndex(([b])=>p<=b),d=u[f-1]??h,_=u[f],g=(p-d[0])/(_[0]-d[0]),m=Ge(d[1],_[1],g)*c,v=Ge(d[2],_[2],g);i.position.set(a.position.x+l.x*v+l.z*m,$t,a.position.z+l.z*v-l.x*m)}else if(a.shielding)this._t1.copy(a.position).addScaledVector(a.facing,.42).setY($t),i.position.lerp(this._t1,1-Math.exp(-30*t)),i.position.y=$t;else{const l=a.dribble??(a.dribble={phase:0,side:1,near:0});l.near=Ge(l.near,this._pressureOn(a)>.8?1:0,1-Math.exp(-4*t));const c=(.52+r*.125)*(1-.32*l.near),h=(1.34+r*.19)*(1-.31*l.near);l.phase+=r*t/h,l.phase>=1&&(l.phase-=1,l.side=-l.side,r>2.5&&this._emit({type:"touch",player:a,power:ct(r/9,.2,1)}));const u=l.phase,p=u<.2?u/.2:1-(u-.2)/.8,f=r<.8?.42:.36+(c-.36)*p*p*(3-2*p),d=["firsttouch","trap","stretch"].includes(a.act)?.24*a.actParam*Math.sin(Math.PI*ct(a.actT/a.actDur,0,1)):0,_=l.side*.13*ct(r/3,0,1)+d;if(this._t1.copy(a.position).addScaledVector(a.facing,f),this._t1.x+=a.facing.z*_,this._t1.z-=a.facing.x*_,this._t1.y=$t,i.position.lerp(this._t1,1-Math.exp(-24*t)),a.act==="hurdle"){const g=Math.sin(Math.PI*ct(a.actT/a.actDur,0,1));i.position.y=$t+.32*g}else(a.act!=="stretch"||i.position.y<$t+.02)&&(i.position.y=$t)}if(i.velocity.copy(a.velocity),this._spin(i,a.velocity,t),!e){if(this._goalCheck(n))return;this._boundary()}return}if((i.position.y>$t+.01||i.velocity.y>.2)&&(i.velocity.y-=cn*t),i.position.addScaledVector(i.velocity,t),i.position.y<=$t){i.position.y=$t,i.velocity.y<-1.4?(i.velocity.y*=-.52,i.velocity.x*=.82,i.velocity.z*=.82,Math.abs(i.velocity.y)>2.5&&this._emit({type:"bounce",position:i.position.clone()})):i.velocity.y=0;const a=Math.exp(-Ts*t);i.velocity.x*=a,i.velocity.z*=a,Math.hypot(i.velocity.x,i.velocity.z)<.25&&(i.velocity.x=0,i.velocity.z=0),i.lob=!1}if(this._spin(i,i.velocity,t),e){const a=this.halfL+this.dimensions.goalDepth-.2;Math.abs(i.position.z)>a&&(Math.abs(i.velocity.z)>1.5&&this._emit({type:"net",position:i.position.clone(),power:ct(Math.abs(i.velocity.z)/22,.15,1)}),i.position.z=Math.sign(i.position.z)*a,i.velocity.z*=-.12,i.velocity.x*=.45,i.velocity.y*=.5);const r=this.dimensions.goalHeight*.95;Math.abs(i.position.z)>this.halfL&&i.position.y>r&&i.velocity.y>0&&(this._emit({type:"net",position:i.position.clone(),power:ct(i.velocity.y/14,.15,1)}),i.position.y=r,i.velocity.y*=-.1,i.velocity.z*=.5),Math.abs(i.position.z)>this.halfL&&Math.abs(i.position.x)>this.goalHalf-.15&&Math.abs(n.x)<=this.goalHalf&&(Math.abs(i.velocity.x)>1.5&&this._emit({type:"net",position:i.position.clone(),power:ct(Math.abs(i.velocity.x)/18,.15,1)}),i.position.x=Math.sign(i.position.x)*(this.goalHalf-.15),i.velocity.x*=-.2);return}this._goalCheck(n)||this._boundary()}_spin(t,e,i){const n=Math.hypot(e.x,e.z);n<.05||(t.spinAxis.set(e.z,0,-e.x).normalize(),t.sphere.rotateOnWorldAxis(t.spinAxis,n*i/$t*.8))}_goalCheck(t){const e=this.ball,i=e.position.z>0?1:-1;if(Math.abs(t.z)>=this.halfL||Math.abs(e.position.z)<this.halfL)return!1;const n=(i*this.halfL-t.z)/(e.position.z-t.z||Jn),s=Ge(t.x,e.position.x,n),a=Ge(t.y,e.position.y,n),r=.08+$t,l=this.dimensions.goalHeight;if(Math.abs(s)<this.goalHalf-$t*.5&&a<l-$t*.5){if(e.indirectTaker&&e.lastTouch===e.indirectTaker){const u=i>0?"away":"home",p=e.indirectTaker.team===u;return this._stopPlay(p?{kind:"corner",team:this._opp(u),x:Math.sign(s||1)*(this.halfW-.5),z:i*(this.halfL-.5)}:{kind:"goal-kick",team:u,x:Math.sign(s||1)*4.5,z:i*(this.halfL-5.5)},1.4),!0}return this._score(i>0?"home":"away"),!0}const c=Math.abs(Math.abs(s)-this.goalHalf)<r&&a<l+r,h=Math.abs(a-l)<r&&Math.abs(s)<this.goalHalf+r;return(c||h)&&!e.holder?(e.position.set(s,a,i*(this.halfL-.05)),e.velocity.z*=-.55,c?e.velocity.x+=Math.sign(s)*de(1,4)*(Math.abs(s)>this.goalHalf?1:-.4):e.velocity.y=Math.abs(e.velocity.y)*(a>l?.6:-.6),e.shotTeam&&this._creditOnTarget(),e.shotTeam=null,e.shotBy=null,this._emit({type:"post",position:e.position.clone()}),!0):!1}_creditOnTarget(){const t=this.ball;t.shotTeam&&!t.shotOnTargetCredited&&(this.state.stats[t.shotTeam].shotsOnTarget+=1,t.shotOnTargetCredited=!0)}_score(t){const e=this.state,i=this.ball;if(e.phase!=="playing")return;i.shotTeam===t&&this._creditOnTarget(),e.score[t]+=1,e.stats[t].goals+=1;const n=i.shotBy?.team===t?i.shotBy:i.lastTouch?.team===t?i.lastTouch:null;i.holder&&(i.holder.hasBall=!1,i.holder=null),this._setPossession(null),this._charge=null,this.setPiece=null,e.phase="goal",e.message=`GOAL — ${this.teams[t].short}`,this._phaseTimer=8.2,this._goalFrame=this._replayCount,this._goalShotFrame=i.shotBy===n&&n?i.shotFrame:null,this.cine={kind:"goal",team:t,scorer:n};const s=this.managers[t];for(const l of this.extras)!l.benchSide||l===s||(l.filming||l.benchOfficial?this._setAct(l,"trackplay",8,0):l.benchPlayer?this._setAct(l,l.benchSide===t?"benchcheer":"benchreact",7.7,l.benchIndex):this._setAct(l,l.benchSide===t?"applaud":"despair",7.7,0));s&&this._setAct(s,"applaud",7.7,0);const a=t==="home"?1:-1,r=this._t1.set((n?.position.x??0)>=0?this.halfW-4:-this.halfW+4,0,a*(this.halfL-5));for(const l of this.players)l.chasing=!1,l.pressing=!1,l.runTimer=0,l===n?(l.target.copy(r),this._setAct(l,"celebrate",99,[0,2,3][Math.floor(Math.random()*3)])):n&&l.team===t&&!l.isGoalkeeper?(l.target.copy(r).add(this._t2.set(de(-3,3),0,de(-3,3)-a*2)),this._setAct(l,"celebrate",99,1)):(l.target.set(l.base.x*l.attackDirection,0,Math.min(l.base.z,-3)*l.attackDirection),l.team!==t&&(l.line==="DEF"||l.isGoalkeeper)&&l.act!=="dive"&&Math.random()<.7&&(l.stun=2.4,this._setAct(l,"despair",2.6+Math.random(),0)));this._nextKickoff=this._opp(t),this.scorer=n,this._emit({type:"goal",team:t,scorer:n?.name??null,player:n,score:{...e.score},position:i.position.clone()})}_boundary(){const t=this.ball;if(this.state.phase!=="playing"||this.setPiece)return;const i=Math.abs(t.position.x)>this.halfW+$t,n=Math.abs(t.position.z)>this.halfL+$t;if(!i&&!n)return;const s=t.lastTouch?.team??"away";let a;if(i)a={kind:"throw-in",team:this._opp(s),x:Math.sign(t.position.x)*(this.halfW+.25),z:ct(t.position.z,-this.halfL+3,this.halfL-3)};else{const l=t.position.z>0?"away":"home",c=Math.sign(t.position.z);s===l?a={kind:"corner",team:this._opp(l),x:Math.sign(t.position.x||1)*(this.halfW-.5),z:c*(this.halfL-.5)}:a={kind:"goal-kick",team:l,x:Math.sign(t.position.x||1)*4.5,z:c*(this.halfL-5.5)}}if(i){const l=this.assistants[t.position.x>0?0:1];l&&!l.act&&this._setAct(l,"flag",1.8,0)}const r=n&&t.shotTeam?t.shotBy:null;t.holder&&t.velocity.multiplyScalar(.4),this._stopPlay(a,a.kind==="corner"?2.4:r?2.2:a.kind==="throw-in"?1.9:1.4),r&&(r.isGoalkeeper||(r.stun=Math.max(r.stun,1.9),this._setAct(r,"despair",2.3,0)),this._replayReq={kind:"miss",frame:this._replayCount,before:3.8,after:.5,focus:null},this._emit({type:"miss",team:r.team,player:r})),this._emit({type:"out",kind:a.kind,team:a.team})}_applyRestart(){const t=this._pendingRestart;if(this._pendingRestart=null,!t)return;const e=this.ball,i=this._teamPlayers[t.team];let n;if(t.kind==="goal-kick")n=i[0];else if(t.kind==="penalty")n=i[9];else{const a=this._t1.set(t.x,0,t.z);n=i.filter(l=>!l.isGoalkeeper&&(t.kind!=="corner"||l.line!=="DEF")&&(t.kind!=="throw-in"||l.role!=="CB")).sort((l,c)=>jt(l.position,a)-jt(c.position,a))[0]}const s=this._t2.set(-Math.sign(t.x)||1,0,0);if(t.kind==="corner"&&s.set(-Math.sign(t.x),0,-Math.sign(t.z)).normalize(),t.kind==="goal-kick"&&s.set(0,0,n.attackDirection),(t.kind==="free-kick"||t.kind==="penalty")&&we(this._t1.set(t.x,0,t.z),this._t3.set(0,0,n.attackDirection*this.halfL),s),n.position.set(t.x,0,t.z).addScaledVector(s,t.kind==="throw-in"?0:-.5),n.velocity.set(0,0,0),n.facing.copy(s),n.mesh.rotation.y=Math.atan2(s.x,s.z),n.stun=0,n.act="",e.position.set(t.x,$t,t.z),e.velocity.set(0,0,0),this._takePossession(n,t.kind),this.setPiece={kind:t.kind,taker:n,timer:0,indirect:!!t.indirect,wall:[],readyAt:t.kind==="penalty"?5.2:0,ready:!1},t.kind==="penalty"){const a=this._teamPlayers[this._opp(t.team)][0];this.setPiece.keeper=a,a.position.set(0,0,-a.attackDirection*this.halfL),a.target.copy(a.position),a.facing.set(0,0,a.attackDirection),a.mesh.rotation.y=Math.atan2(a.facing.x,a.facing.z),a.velocity.set(0,0,0),a.animSpeed=a.stun=a.react=0,a.act="",a.sweeping=!1}if(t.kind==="free-kick"){const a=this._t3.set(0,0,n.attackDirection*this.halfL),r=le(e.position,a);if(r<32&&r>12){const l=we(e.position,a,this._t1),c=this._t2.set(-l.z,0,l.x),h=this._teamPlayers[this._opp(t.team)].filter(p=>!p.isGoalkeeper).sort((p,f)=>jt(p.position,e.position)-jt(f.position,e.position)).slice(0,r<24?4:3);h.forEach((p,f)=>{const d=e.position.clone().addScaledVector(l,9.15).addScaledVector(c,(f-(h.length-1)/2)*.72);d.y=0,this.setPiece.wall.push({p,spot:d})}),this.setPiece.readyAt=4.4;const u=this._teamPlayers[this._opp(t.team)][0];this._setAct(u,"organise",3.2,0)}}if(e.protectedTimer=.5,t.kind==="throw-in"){const a=i.filter(l=>l!==n&&!l.isGoalkeeper&&l.stun<=0).sort((l,c)=>jt(l.position,n.position)-jt(c.position,n.position))[0]??i.find(l=>l!==n&&!l.isGoalkeeper);this.setPiece.throwOption=a;const r=ct(a.position.z-t.z,-8,8);this.setPiece.throwSupportZ=ct(t.z+r,-this.halfL+2,this.halfL-2),this._tacticTimer=0,this._setAct(n,"throw",99,1)}this.cine=null,this._emit({type:"restart",kind:t.kind,reason:t.reason,team:t.team,player:n,position:e.position.clone(),ceremony:this.setPiece.readyAt>0,wall:this.setPiece.wall[0]?.p??null,keeper:this._teamPlayers[this._opp(t.team)][0]})}_setPossession(t){if(t&&(this._lastPossession=t),this._possessionTeam===t)return;const e=this._possessionTeam;this._possessionTeam=t,t&&e!==t&&(this._recycle[t]=0),t&&e!==t&&this._emit({type:"possession",team:t})}_takePossession(t,e="control"){const i=this.ball;if(this.state.phase==="goal"||this.state.phase==="fulltime"||this._kickoffSecondTouch(t))return;if(i.indirectTaker!==t&&(i.indirectTaker=null),i.offside&&i.passTeam===t.team&&i.offside.has(t)&&e==="control"){this._offside(t);return}const n=i.passTeam&&i.passTeam!==t.team&&e==="control";if(i.offside=null,i.holder&&i.holder!==t&&(i.holder.hasBall=!1),i.passTeam===t.team&&i.lastTouch!==t?(this.state.stats[t.team].completedPasses+=1,t.receivedFrom=i.lastTouch,t.receivedAt=this.state.elapsed):t.receivedFrom=null,e==="control"&&!t.isGoalkeeper&&!t.act){const a=(i.position.x-t.position.x)*t.facing.z-(i.position.z-t.position.z)*t.facing.x,r=Math.abs(a)>.06?Math.sign(a):t.index%4?-1:1;i.position.y>.42||i.intendedReceiver===t&&jt(t.position,i.position)>.84**2?this._setAct(t,"stretch",.43,r):i.intendedReceiver===t?this._setAct(t,"firsttouch",.34,r):t.animSpeed<4&&i.velocity.length()>10&&this._setAct(t,"trap",.36,r)}i.holder=t,t.hasBall=!0,t.possessionTimer=0,t.runTimer=0,i.passTeam=null,i.intendedReceiver=null,i.shotTeam=null,i.shotBy=null,i.lob=!1,i.lastTouch=t,i.inHands=t.isGoalkeeper&&(e==="save"||e==="collect"),i.protectedTimer=.18,(t.act==="tackle"||t.act==="header")&&(t.act=""),this._setPossession(t.team),t.team==="home"&&(!t.isGoalkeeper||i.inHands)&&this._setControlled(t),this._emit({type:"control",team:t.team,player:t,reason:e,stolen:n});const s=this._buffer;s&&s.player===t&&e==="control"&&(this._buffer=null,this._execute(t,s.type,s.power,s.input))}_kickoffSecondTouch(t){const e=this.ball,i=e.kickoffTaker;return!i||(e.kickoffTaker=null,i!==t||e.lastTouch!==t)?!1:(this._stopPlay({kind:"free-kick",indirect:!0,reason:"second-touch",team:this._opp(t.team),x:e.position.x,z:e.position.z},1.3),!0)}_looseBall(){const t=this.ball;if(t.holder)return;const e=t.position.y;if(e>6)return;const i=t.velocity.length();t.kickoffTaker&&!t.kickoffSeparated&&(t.kickoffSeparated=jt(t.kickoffTaker.position,t.position)>.83**2);let n=null,s=1/0;for(const u of this.players){if(u===t.kickoffTaker&&!t.kickoffSeparated||u.cooldown>0&&u!==t.kickoffTaker||u.stun>0||u.act==="slide"||u.isGoalkeeper)continue;const p=jt(u.position,t.position);p<s&&(s=p,n=u)}if(!n)return;const a=t.intendedReceiver;if(e<=1&&a&&a.team===t.passTeam&&a.cooldown<=0&&a.stun<=0&&!a.isGoalkeeper&&a.act!=="slide"){const u=jt(a.position,t.position);u<=1.05**2&&(n.team===a.team||s>.78**2)&&(n=a,s=u)}const r=n,l=t.intendedReceiver===r;if(e>1.5&&!r.act&&!t.shotTeam&&t.velocity.y<1&&t.headerLock<=0){const u=this._ballFuture(.3,this._t1);u.y>1.45&&u.y<2.6&&jt(r.position,u)<1.5&&this._setAct(r,"header",.74,ct(u.y-1.74,0,.75))}if(e>2.55)return;if(t.shotTeam){t.shotTeam!==r.team&&s<.5*.5&&e<1.9&&t.lastTouch!==r&&(we(r.position,t.position,this._t1),t.velocity.dot(this._t1)<0&&(t.velocity.reflect(this._t1).multiplyScalar(.35),t.velocity.y=Math.abs(t.velocity.y)*.5+1,t.shotTeam=null,t.shotBy=null,t.lastTouch=r,r.cooldown=.3,this._emit({type:"block",player:r,position:t.position.clone()})));return}if(e>1.05){if(s>.85*.85||t.velocity.y>1.5||t.headerLock>0)return;e<1.62?this._chest(r):this._header(r);return}const c=l?1.05:.78;if(s>c*c||e>.45&&t.velocity.y>2)return;const h=this._t1.copy(t.velocity).sub(r.velocity).length();if(l||h<14+r.skill*9||i<6){this._takePossession(r,"control");return}we(r.position,t.position,this._t1),t.velocity.dot(this._t1)<0&&(t.velocity.reflect(this._t1).multiplyScalar(.4),t.velocity.y=Math.max(1,t.velocity.y),t.lastTouch=r,t.passTeam=null,t.intendedReceiver=null,r.cooldown=.25)}_chest(t){if(this._kickoffSecondTouch(t))return;const e=this.ball;if(e.offside&&e.passTeam===t.team&&e.offside.has(t)){this._offside(t);return}if(this._t1.copy(e.velocity).sub(t.velocity).length()<17){t.chestHeight=e.position.y,this._setAct(t,"chest",.54,0),this._takePossession(t,"control"),e.protectedTimer=.34;return}this._setAct(t,"chest",.5,0),e.velocity.multiplyScalar(.22),e.velocity.y=1.6,e.lastTouch=t,e.passTeam=null,e.intendedReceiver=null,e.offside=null,e.lob=!1,e.headerLock=.5,t.cooldown=.2}_header(t){if(this._kickoffSecondTouch(t))return;const e=this.ball,i=t.attackDirection;if(e.offside&&e.passTeam===t.team&&e.offside.has(t)){this._offside(t);return}e.offside=null,(t.act!=="header"||t.actT>.5)&&(this._setAct(t,"header",.62,ct(e.position.y-1.74,0,.75)),t.actT=.2),e.position.x=t.position.x+t.facing.x*.22,e.position.z=t.position.z+t.facing.z*.22,t.cooldown=.4,e.headerLock=.9;const n=this._t2.set(0,0,i*this.halfL),s=le(t.position,n),a=this._buffer?.player===t&&this._buffer.type==="shoot";if(s<17&&(a||t.position.z*i>36)){a&&(this._buffer=null),this._shootNow(t,t.facing,.4,null,!0);return}if(e.velocity.length()<9&&e.position.y<1.5){e.position.y=$t,this._takePossession(t,"control");return}e.lastTouch=t,e.lob=!1,e.shotTeam=null;const r=e.passTeam===t.team;if(e.passTeam=null,e.intendedReceiver=null,t.position.z*i<-28)e.velocity.set(de(-4,4),de(5,7),i*de(10,14));else{let l=null,c=1/0;for(const h of this._teamPlayers[t.team]){if(h===t||h.isGoalkeeper)continue;const u=jt(h.position,t.position);u<c&&u>9&&(c=u,l=h)}l&&c<324?(we(t.position,l.position,this._t1),e.velocity.copy(this._t1).multiplyScalar(ct(Math.sqrt(c)*.9,6,13)),e.velocity.y=-2.5,e.passTeam=t.team,e.intendedReceiver=l,r&&(this.state.stats[t.team].passes+=1)):e.velocity.set(de(-3,3),4,i*8)}this._emit({type:"kick",kind:"header",team:t.team,player:t,position:e.position.clone(),power:.4})}_startKeeperDive(t,e,i,n,s,a){const r=gn[e],l=Math.sign(i);t.dive={kind:e,direction:l,height:n,x:t.position.x,z:t.position.z,upperHand:e==="extension"&&n>1.85&&a<.2,travel:ct((Math.abs(i)-r.bodyGap)/.78,.24,r.travel)},t.diveContact=null,t.facing.set(0,0,t.attackDirection),t.mesh.rotation.y=Math.atan2(t.facing.x,t.facing.z);const c=ct(s/r.contact,r.duration*.7,r.duration*1.14);this._setAct(t,"dive",c,l*t.attackDirection),t.stun=c}_moveKeeperDive(t,e){if(t.desired.set(0,0,0),t.animSpeed=0,t.act==="getup"){t.velocity.set(0,0,0);return}const i=t.dive,{push:n,contact:s,land:a,forward:r}=gn[i.kind],l=t.actT/t.actDur,c=n*.45,h=.78*xu((l-c)/(s-c))+.22*xu((l-s)/(a+.083-s)),u=i.x+i.direction*i.travel*h,p=i.z+t.attackDirection*r*h;t.velocity.set((u-t.position.x)/e,0,(p-t.position.z)/e),t.position.set(u,0,p)}_keeperCanSave(t,e){if(t.act==="getup"||e.y>2.65)return!1;if(t.act!=="dive")return jt(t.position,e)<1**2;const{direction:i,height:n,kind:s}=t.dive,{contact:a,land:r,reach:l}=gn[s],c=t.actT/t.actDur,h=(e.x-t.position.x)*i,u=(e.z-t.position.z)*t.attackDirection;return!t.diveContact&&c>=a-.08&&c<r+.09&&h>=-.34&&h<=l&&u>=-.33&&u<=.36&&Math.abs(e.y-n)<=.62}_updateGoalkeepers(t){const e=this.ball;for(const i of["home","away"]){const n=this._teamPlayers[i][0],s=n.attackDirection,a=-s*this.halfL,r=this._t1.set(0,0,a);if(n.sweeping=!1,e.holder===n){n.target.copy(n.position);continue}const l=le(e.position,r),c=e.holder;if(this.setPiece?.keeper===n)continue;let h=ct(l*.11,1,5.5);if(c&&c.team!==i&&l<24&&Math.abs(c.position.x)<16&&(h=ct(l*.34,1.5,9)),we(r,e.position,this._t2),n.target.copy(r).addScaledVector(this._t2,h),n.target.x=ct(n.target.x,-this.goalHalf-1,this.goalHalf+1),c){if(c.team!==i&&!this.setPiece){const u=le(n.position,c.position);!this._teamPlayers[i].some(f=>!f.isGoalkeeper&&f.stun<=0&&(f.position.z-c.position.z)*s<-.5&&jt(f.position,c.position)<5.5**2)&&u<8.5&&l<21&&Math.abs(e.position.x)<14&&n.stun<=0&&(n.target.copy(n.position).lerp(e.position,.72),n.target.y=0,n.target.z=a+s*ct((n.target.z-a)*s,.6,15.3),n.sweeping=!0),jt(n.position,e.position)<1.25*1.25&&n.stun<=0&&Math.random()<1-Math.exp(-3.2*t)&&(c.hasBall=!1,e.holder=null,c.stun=.5,this._setAct(n,"spread",.8,0),this.state.stats[i].saves+=1,this._takePossession(n,"save"),this._emit({type:"save",team:i,player:n,text:`${n.name} SMOTHERS IT`,position:e.position.clone()}))}}else{if(!n.act&&n.react<=0&&e.lastTouch!==n&&jt(n.position,e.position)>1.6){const _=this._ballFuture(.36,this._t3);jt(n.position,_)<1&&_.y<2.7&&this._catchAct(n,_.y)}!n.act&&l>58&&Math.random()<t*.1&&this._setAct(n,"organise",1.7,0);const u=-e.velocity.z*s,p=(e.position.z-n.position.z)*s,f=Math.hypot(e.velocity.x,e.velocity.z);if(u>4&&p>-.36&&e.shotTeam&&e.shotTeam!==i){const _=Math.max(0,p/u),m=e.position.y<=$t+.01&&e.velocity.y<=.2?-Math.log1p(-Math.min(1,_*Ts))/Ts:_;if(m<1.6){const v=e.position.x+e.velocity.x*_,b=Math.max($t,e.position.y+e.velocity.y*m-.5*cn*m*m);if(Math.abs(v)<this.goalHalf+1.4&&b<3.2){const x=v-n.position.x,w=qx(x,b,m);n.react>0?n.target.copy(n.position):n.target.set(Ge(n.position.x,v,.85),0,n.position.z),w&&n.react<=0&&n.stun<=0&&m>=.045&&m<=gn[w].lead&&b<=2.65&&this._startKeeperDive(n,w,x,b,m,e.velocity.y-cn*m)}}if(n.react<=.02&&e.lastTouch!==n&&this._keeperCanSave(n,e.position)){this._save(n,f);continue}}else{const _=e.lastTouch?.team!==i||e.passTeam!==i,g=m=>Math.abs(m.x)<20.1&&(m.z-a)*s>0&&(m.z-a)*s<16.5;if(_&&e.lastTouch!==n&&n.stun<=0&&(l<35||u>2))for(let m=.15;m<=2.1;m+=.15){const v=this._ballFuture(m,this._t3);if(v.y>2.5)continue;const b=Math.max(0,le(n.position,v)-.85)/7.4+.13;let x=1/0,w=1/0;for(const S of this.players){if(S.isGoalkeeper||S.stun>0)continue;const M=Math.max(0,le(S.position,v)-.55)/(7.5*S.pace);S.team===i?w=Math.min(w,M):x=Math.min(x,M)}const C=(v.z-a)*s<6;if(!C&&w<=m&&w+.3<b&&w+.45<x)break;const T=b+(C?.04:.22)<x;if(!(g(v)&&b<=m+.12&&T)){if(v.y<1.7&&x<=m)break;continue}n.target.set(v.x,0,v.z),n.sweeping=!0;break}if(_&&g(e.position)&&jt(n.position,e.position)<1.3**2&&e.position.y<2.75&&e.lastTouch!==n&&n.stun<=0){let m=0;for(const v of this._teamPlayers[this._opp(i)])jt(v.position,n.position)<4&&(m+=1);if(e.position.y>1.5&&m>0&&Math.random()<.6){e.velocity.set(de(-6,6),de(5,7),s*de(11,15)),e.lastTouch=n,e.passTeam=null,e.intendedReceiver=null,e.offside=null,e.lob=!1,this._setAct(n,"punch",.62,0),n.cooldown=.6,this._emit({type:"punch",team:i,player:n,position:e.position.clone()});continue}this._catchAct(n,e.position.y,!0),this._takePossession(n,"collect"),this._emit({type:"collection",team:i,player:n,position:e.position.clone()});continue}}}}}_catchAct(t,e,i=!1){if(t.act.startsWith("catch")||t.act==="dive")return;const n=this.ball.position,s=(n.z-t.position.z)*t.facing.x-(n.x-t.position.x)*t.facing.z;i&&t.sweeping&&s>.28&&e>1.1&&e<2.4?this._setAct(t,"catchsweep",.86,0):e>1.75?this._setAct(t,"catchhigh",.9,0):e<.5?this._setAct(t,"catchlow",.85,0):this._setAct(t,"catch",.8,0),i&&(t.actT=.3)}_save(t,e){const i=this.ball,n=t.attackDirection,s=i.shotTeam&&i.shotTeam!==t.team;s&&(this._creditOnTarget(),this.state.stats[t.team].saves+=1);const a=t.act==="dive",r=a?gn[t.dive.kind].reach:1,l=Math.abs(i.position.x-t.position.x)>r*.82||i.position.y>2.2,c=e<(l?13:17)||Math.random()<(a?l?.13:.35:.77);if(a&&(t.diveContact={point:i.position.clone(),time:t.actT,hold:c}),c)a||this._catchAct(t,i.position.y,!0),this._takePossession(t,"save");else{const h=Math.sign(i.position.x-t.position.x)||Math.sign(i.position.x)||1;i.position.y>1.7?i.velocity.set(h*de(1,4),de(5,8),-n*de(2,5)):i.velocity.set(h*de(5,10),de(2,5),n*de(1,7)),i.shotTeam=null,i.shotBy=null,i.lastTouch=t,i.passTeam=null,a||(i.position.y>1.9?this._setAct(t,"tip",.7,h*n):i.position.y<.45?this._setAct(t,"footsave",.6,h*n):this._setAct(t,"parry",.55,h*n*(i.position.y>1.3?2:1))),t.cooldown=.5}this._emit({type:s?"save":"collection",team:t.team,player:t,caught:c,technique:a?t.dive.kind:void 0,text:c?`${t.name} HOLDS IT`:`PARRIED BY ${t.name}`,position:i.position.clone()})}_recordFrame(){const t=this._replayFrames[this._replayHead];let e=0;for(const n of this.players)t[e++]=n.position.x,t[e++]=n.position.z,t[e++]=n.mesh.rotation.y,t[e++]=n.gait,t[e++]=n.animSpeed,t[e++]=_u.indexOf(n.act),t[e++]=n.actT,t[e++]=n.actParam;const i=this.ball;t[e++]=i.position.x,t[e++]=i.position.y,t[e++]=i.position.z,t[e++]=i.holder?this.players.indexOf(i.holder):-1,t[e++]=i.inHands?1:0,this._replayHead=(this._replayHead+1)%this._replayFrames.length,this._replayCount+=1}_beginReplay(t){const e=this._replayFrames.length,i=Math.min(this._replayCount,e)-2,n=this._replayCount;this._replayReq=null,this.cine=null;const s=Math.max(n-i,t.frame-Math.round(t.before*Dn)),a=Math.min(n-1,t.frame+Math.round(t.after*Dn)),r=t.kind!=="goal";if(a-s<Dn){r?(this.state.phase="playing",this._applyRestart()):this._endReplay();return}const l=r?{ball:this.ball.position.clone(),players:this.players.map(p=>[p.position.x,p.position.z,p.mesh.rotation.y,p.act,p.actT,p.actDur,p.actParam])}:null,c=t.kind==="goal"&&this._nextKickoff?this._nextKickoff==="away"?1:-1:null,h=t.kind==="goal"?this.scorer:null,u=Math.max(s,(this._goalShotFrame??t.frame-15)-25);this.replay={cursor:s,start:s,stop:a,goal:t.frame,goalSide:c,scorer:h,povStart:u,povStop:Math.min(a,t.frame+8),time:0,kind:t.kind,focus:t.focus??null,pass:0,resume:r,snapshot:l},this.state.phase="replay";for(const p of this.players)p.selection.visible=!1,p.arrow.visible=!1;this._emit({type:"replay-start",kind:t.kind})}_stepReplay(t,e){const i=this.replay;if(!i||e){this._endReplay();return}if(i.cursor>=(i.pass===2?i.povStop:i.stop))if(i.kind==="goal"&&i.pass===0&&i.scorer)i.pass=2,i.cursor=i.povStart,this._emit({type:"replay-angle",view:"scorer"});else if(i.kind==="goal"&&i.pass!==1)i.pass=1,i.cursor=Math.max(i.start,i.goal-1.8*Dn),this._emit({type:"replay-angle",view:"net"});else{this._endReplay();return}const n=Math.abs(i.cursor-i.goal)<Dn*.8,s=i.pass===2?.8:i.pass===1?n?.35:.6:n?.4:.85;i.cursor=Math.min(i.pass===2?i.povStop:i.stop,i.cursor+t*Dn*s),i.time+=t;const a=this._replayFrames.length,r=Math.floor(i.cursor),l=i.cursor-r,c=this._replayFrames[(r%a+a)%a],h=this._replayFrames[((r+1)%a+a)%a];let u=0;for(const f of this.players){f.position.x=Ge(c[u],h[u],l),f.position.z=Ge(c[u+1],h[u+1],l);let d=h[u+2]-c[u+2];d>Math.PI?d-=Math.PI*2:d<-Math.PI&&(d+=Math.PI*2),f.mesh.rotation.y=c[u+2]+d*l,f.gait=Ge(c[u+3],h[u+3],l),f.animSpeed=Ge(c[u+4],h[u+4],l),f.act=_u[c[u+5]]||"",f.actT=c[u+5]===h[u+5]?Ge(c[u+6],h[u+6],l):c[u+6],f.actParam=c[u+7],f.actDur=99,u+=gu}const p=this.ball;this._t1.set(Ge(c[u],h[u],l),Ge(c[u+1],h[u+1],l),Ge(c[u+2],h[u+2],l)),this._t2.copy(this._t1).sub(p.position),t>0&&this._spin(p,this._t2.multiplyScalar(1/Math.max(t,.001)),t),p.position.copy(this._t1)}_endReplay(){const t=this.replay;if(t&&t.resume){this.replay=null,this.players.forEach((e,i)=>{const n=t.snapshot.players[i];e.position.x=n[0],e.position.z=n[1],e.mesh.rotation.y=n[2],e.facing.set(Math.sin(n[2]),0,Math.cos(n[2])),e.act=n[3],e.actT=n[4],e.actDur=n[5],e.actParam=n[6],e.velocity.set(0,0,0),e.animSpeed=0}),this.ball.position.copy(t.snapshot.ball),this.controlledPlayer.selection.visible=!0,this.controlledPlayer.arrow.visible=!0,this.state.phase="playing",this._applyRestart(),this._emit({type:"replay-end"});return}this.replay=null,this.state.phase="kickoff",this.state.message="KICK OFF",this._phaseTimer=1.5,this._resetPositions(this._nextKickoff??"home"),this._setControlled(this._teamPlayers.home[9]),this.controlledPlayer.selection.visible=!0,this.controlledPlayer.arrow.visible=!0,this._emit({type:"replay-end"})}_updateOfficials(t){const e=this.ball,i=this.referee;i.target.set(ct(e.position.x+(e.position.z>0?-7:7),-this.halfW+4,this.halfW-4),0,ct(e.position.z-Math.sign(e.velocity.z||1)*8,-this.halfL+8,this.halfL-8));for(const n of this.assistants){const s=n.lineSide>0?"away":"home",a=n.lineSide;let r=0,l=0;for(const c of this._teamPlayers[s]){const h=c.position.z*a;h>r?(l=r,r=h):h>l&&(l=h)}n.target.set(n.lineSide*(this.halfW+1.4),0,ct(Math.max(l,e.position.z*a,0),0,this.halfL)*a)}for(const n of this.officials){const s=le(n.position,n.target),a=["card","flag","toss"].includes(n.act);we(n.position,n.target,this._t1);const r=n===i?s>14?7.4:5.2:6.6;a||s<.65?n.velocity.set(0,0,0):n.velocity.lerp(this._t2.copy(this._t1).multiplyScalar(Math.min(r,s*1.6)),1-Math.exp(-6*t)),n.position.addScaledVector(n.velocity,t),n.animSpeed=Math.hypot(n.velocity.x,n.velocity.z),n.gait+=n.animSpeed*t*1.45,n===i||n.animSpeed<.6?we(n.position,e.position,this._t1):this._t1.copy(n.velocity).normalize(),n!==i&&n.animSpeed<.6&&this._t1.set(-n.lineSide,0,0),this._t1.lengthSq()>.1&&Si(n.facing,this._t1,6,t).normalize(),n.mesh.rotation.y=Math.atan2(n.facing.x,n.facing.z)}}_present(t){this._time=(this._time||0)+t;const e=this.controlledPlayer;e&&(e.arrow.position.y=2.28+Math.sin(this._time*5.5)*.06,e.arrow.rotation.y+=t*2.4,e.selection.scale.setScalar(1+Math.sin(this._time*6)*.05));const i=this.ball,n=1-Math.exp(-3.2*t);for(const a of this.cameraCrew){if(!a.perimeterRole)continue;const l=Math.atan2(i.position.x-a.position.x,i.position.z-a.position.z)-a.stationYaw,c=ct(Math.atan2(Math.sin(l),Math.cos(l)),-.9,.9),h=Ge(a.mesh.rotation.y,a.stationYaw+c,n);a.mesh.rotation.y=h,a.facing.set(Math.sin(h),0,Math.cos(h))}const s=Math.max(0,i.position.y-$t);this._ballShadow.position.set(i.position.x,.025,i.position.z),this._ballShadow.scale.setScalar(1+s*.12),this._ballShadow.material.opacity=ct(.38-s*.035,.08,.38)}_updateCameraFocus(t){const e=this.ball,i=this._t1.copy(e.position);i.x+=ct(e.velocity.x*.25,-4,4),i.z+=ct(e.velocity.z*.3,-6,6),i.y=.8,i.x=ct(i.x,-this.halfW,this.halfW),i.z=ct(i.z,-this.halfL,this.halfL),Si(this._cameraFocus,i,4.5,t)}}const tv={home:{name:"AURORA FC",short:"AUR",color:"#19e6c7"},away:{name:"SOLARIS UNITED",short:"SOL",color:"#ff3d71"}},ev={quality:new Set(["low","medium","high"]),camera:new Set(["broadcast","dynamic"]),difficulty:new Set(["easy","normal","hard"]),mode:new Set(["kickoff","spectate"]),length:new Set(["short","standard","long"])},iv=[["ATTACKING"],["Move","W A S D / Arrows","Left stick"],["Sprint","Shift","RT / R2"],["Pass (hold = longer)","X","A / Cross"],["Through ball","Q","Y / Triangle"],["Lob / cross","Z","X / Square"],["Shoot (hold = power)","Space","B / Circle"],["Finesse shot","T + Space","RB + B"],["Chip shot","G + Space","LB + B"],["Call a run","F","LB / L1"],["Dribble skill (steer or sprint for variations)","B","R3"],["Shield the ball","Ctrl","LT / L2"],["DEFENDING"],["Switch player","E","A, Y or LB"],["Standing tackle","C","B / Circle"],["Slide tackle","Space","X / Square"],["Jockey","Ctrl","LT / L2"],["MATCH"],["Camera","V","Select / Share"],["Pause","Esc / P","Start / Options"],["Skip replay","X","A / Cross"]];function bu(){return`<div class="keys-table"><div class="keys-head"><span>ACTION</span><b>KEYBOARD</b><b>CONTROLLER</b></div>${iv.map(t=>t.length===1?`<div class="keys-group">${t[0]}</div>`:`<div class="keys-row"><span>${t[0]}</span><kbd>${t[1]}</kbd><kbd class="pad">${t[2]}</kbd></div>`).join("")}</div>
    <p class="keys-tip">Hold pass or shoot to add power. Press it before the ball arrives to play it first time. Set pieces use the same buttons.</p>`}function Mu(){return`
    <div class="setting-row"><span>GRAPHICS</span><div class="segmented-control" data-setting="quality">
      <button class="ui-command" data-ui-command type="button" data-action="quality" data-value="low">LOW</button>
      <button class="ui-command" data-ui-command type="button" data-action="quality" data-value="medium">MED</button>
      <button class="ui-command" data-ui-command type="button" data-action="quality" data-value="high">ULTRA</button></div></div>
    <div class="setting-row"><span>CAMERA</span><div class="segmented-control" data-setting="camera">
      <button class="ui-command" data-ui-command type="button" data-action="camera" data-value="broadcast">BROADCAST</button>
      <button class="ui-command" data-ui-command type="button" data-action="camera" data-value="dynamic">DYNAMIC</button></div></div>
    <div class="setting-row"><span title="Aim passes toward teammates. In open play, Shoot aims at goal near the opponent's box and passes from farther out. Finesse and chip always shoot.">PASS ASSIST</span><div class="segmented-control" data-setting="passAssist">
      <button class="ui-command" data-ui-command type="button" data-action="passAssist" data-value="true">ON</button>
      <button class="ui-command" data-ui-command type="button" data-action="passAssist" data-value="false">OFF</button></div></div>
    <div class="setting-row"><span>SOUND</span><div class="segmented-control" data-setting="sound">
      <button class="ui-command" data-ui-command type="button" data-action="sound" data-value="true">ON</button>
      <button class="ui-command" data-ui-command type="button" data-action="sound" data-value="false">OFF</button></div></div>
    <div class="setting-row"><span>COMMENTARY</span><div class="segmented-control" data-setting="commentary">
      <button class="ui-command" data-ui-command type="button" data-action="commentary" data-value="true">ON</button>
      <button class="ui-command" data-ui-command type="button" data-action="commentary" data-value="false">OFF</button></div></div>`}function Su(){const o=(t,e,i,n)=>`
    <button class="choice-card ui-command" data-ui-command type="button" data-action="difficulty" data-value="${t}">
      <b>${e}</b><span class="pips" aria-hidden="true">${'<i class="on"></i>'.repeat(i)}${"<i></i>".repeat(3-i)}</span><small>${n}</small>
    </button>`;return`<div class="choice-grid three" data-setting="difficulty">
    ${o("easy","AMATEUR",1,"Slower to react, loose passing, a forgiving keeper.")}
    ${o("normal","PRO",2,"Presses in numbers and punishes mistakes.")}
    ${o("hard","LEGEND",3,"Quick decisions, sharp tackling, hard to beat.")}
  </div>`}function ho(o,t=0,e=1){return Math.max(t,Math.min(e,Number(o)||0))}function ei(o){return String(o??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function nv(o,t){if(typeof o=="number"&&Number.isFinite(o))return`#${Math.max(0,o).toString(16).padStart(6,"0").slice(-6)}`;const e=String(o??"").trim();return/^(#[\da-f]{3,8}|(?:rgb|hsl)a?\([\d\s.,%+-]+\))$/i.test(e)?e:t}function ma(o,t,e){const i=tv[t],n=o?.[t]??(Array.isArray(o)?o[e]:null)??{},s=String(n.name||i.name),a=String(n.short||n.code||s.replace(/[^a-z]/gi,"").slice(0,3)||i.short).slice(0,4).toUpperCase();return{name:s,short:a,color:nv(n.ui??n.color??n.primary,i.color)}}function ga(o={}){const t=o.score??o.scores??{},e=Number(t.home??t.homeScore??t[0]??o.homeScore??o.scoreHome??0),i=Number(t.away??t.awayScore??t[1]??o.awayScore??o.scoreAway??0);return{home:Number.isFinite(e)?Math.max(0,Math.floor(e)):0,away:Number.isFinite(i)?Math.max(0,Math.floor(i)):0}}function sv(o){const t=Math.max(0,Number(o)||0),e=Math.floor(t/60);return`${String(e).padStart(2,"0")}:${String(Math.floor(t%60)).padStart(2,"0")}`}function je(o,t,e,i=0){const n=o?.[t]??o?.[t==="home"?0:1]??{},s=Number(n?.[e]??o?.[`${t}${e[0].toUpperCase()}${e.slice(1)}`]??i);return Number.isFinite(s)?s:i}class ov{constructor({teams:t}={}){if(this.app=document.querySelector("#app"),!this.app)throw new Error("GameUI requires an #app element.");this.teams={home:ma(t,"home",0),away:ma(t,"away",1)},this.settings={quality:"high",sound:!0,camera:"broadcast",difficulty:"normal",commentary:!0,mode:"kickoff",length:"standard",passAssist:!0};try{this.settings.passAssist=localStorage.getItem("nova-pass-assist")!=="false"}catch{}this.listeners=new Map,this.timers=new Set,this.lastState={},this.lastMessage="",this.seenEvents=new Set,this.disposed=!1,this.goalTimer=null,this.competitionLabel="EXHIBITION",this._render(),this._cacheElements(),this._bindEvents(),this._syncSettings(),this.showMenu()}_render(){const t=this.teams.home,e=this.teams.away;this.app.innerHTML=`
      <div class="nova-app" data-mode="menu" style="--home:${t.color};--away:${e.color}">
        <div id="game-canvas-host" aria-hidden="true"></div>
        <div class="arena-vignette" aria-hidden="true"></div>

        <section class="loading-screen" data-screen="loading" hidden aria-live="polite">
          <div class="loading-orbit" aria-hidden="true"><i></i><i></i><i></i></div>
          <p class="micro-label">NOVA MATCH ENGINE</p>
          <div class="loading-brand">NOVA <b>26</b></div>
          <p class="loading-copy" data-loading-text>Preparing the floodlights</p>
          <div class="loading-track" role="progressbar" aria-label="Loading match" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
            <span data-loading-bar></span>
          </div>
          <span class="loading-percent" data-loading-percent>0%</span>
        </section>

        <main class="menu-screen" data-screen="menu">
          <div class="menu-grid" aria-hidden="true"></div>
          <header class="menu-header">
            <div class="menu-season"><span class="live-dot"></span> INTERACTIVE MATCHDAY</div>
            <div class="menu-edition">SEASON 26&nbsp;&nbsp;•&nbsp;&nbsp;11v11 MATCHDAY</div>
          </header>

          <div class="menu-layout">
            <section class="hero-copy">
              <p class="eyebrow">THE NEXT PLAY IS YOURS</p>
              <h1><span>NOVA</span><strong>FOOTBALL</strong><em>26</em></h1>
              <p class="hero-lead">Floodlit football, instant control. Read the space, break the line, and own every impossible moment.</p>
              <div class="hero-tags" aria-label="Game features">
                <span>REAL-TIME 3D</span><span>SMART OPPONENTS</span><span>DYNAMIC BROADCAST</span>
              </div>
            </section>

            <section class="match-card" aria-labelledby="next-match-title">
              <div class="card-shine" aria-hidden="true"></div>
              <div class="match-kicker"><span>TONIGHT</span><b id="next-match-title">NOVA PRIME ARENA</b><span>20:26</span></div>
              <div class="matchup">
                <article class="team team-home">
                  <div class="team-crest" data-tc="home" style="--team-color:${t.color}"><span data-tn="home-initial">${ei(t.short.slice(0,1))}</span></div>
                  <h2 data-tn="home-name">${ei(t.name)}</h2><p data-tn="home-short">${ei(t.short)}</p>
                </article>
                <div class="versus"><small>EXHIBITION</small><b>VS</b><span>90 MIN</span></div>
                <article class="team team-away">
                  <div class="team-crest" data-tc="away" style="--team-color:${e.color}"><span data-tn="away-initial">${ei(e.short.slice(0,1))}</span></div>
                  <h2 data-tn="away-name">${ei(e.name)}</h2><p data-tn="away-short">${ei(e.short)}</p>
                </article>
              </div>
              <div class="setup-block">
                <h3>MATCH MODE</h3>
                <div class="choice-grid two" data-setting="mode">
                  <button class="choice-card ui-command" data-ui-command type="button" data-action="mode" data-value="kickoff"><b>KICK-OFF</b><small>You control <span data-tn="home-name">${ei(t.name)}</span> against the AI.</small></button>
                  <button class="choice-card ui-command" data-ui-command type="button" data-action="mode" data-value="spectate"><b>SPECTATE</b><small>Sit back and watch the AI play both sides.</small></button>
                </div>
              </div>
              <div class="setup-block">
                <h3>COMPETITIONS</h3>
                <div class="choice-grid three">
                  <button class="choice-card ui-command" data-ui-command data-needs-assets type="button" data-action="competition" data-value="world"><b>WORLD CHAMPIONSHIP</b><small data-comp-status="world">16 nations, knockout.</small></button>
                  <button class="choice-card ui-command" data-ui-command data-needs-assets type="button" data-action="competition" data-value="cup"><b>CONTINENTAL CUP</b><small data-comp-status="cup">16 clubs, knockout.</small></button>
                  <button class="choice-card ui-command" data-ui-command data-needs-assets type="button" data-action="competition" data-value="league"><b>NOVA LEAGUE</b><small data-comp-status="league">8 clubs, league season.</small></button>
                </div>
              </div>
              <div class="setup-block">
                <h3>OPPONENT AI</h3>
                ${Su()}
              </div>
              <div class="setup-block setup-inline">
                <div class="setting-row"><span>LENGTH</span><div class="segmented-control" data-setting="length">
                  <button class="ui-command" data-ui-command type="button" data-action="length" data-value="short">3 MIN</button>
                  <button class="ui-command" data-ui-command type="button" data-action="length" data-value="standard">5 MIN</button>
                  <button class="ui-command" data-ui-command type="button" data-action="length" data-value="long">8 MIN</button></div></div>
                ${Mu()}
              </div>
              <button class="primary-button ui-command" type="button" data-ui-command data-action="play">
                <span data-play-label>PLAY MATCH</span><i aria-hidden="true">›</i>
              </button>
            </section>
          </div>

          <section class="controls-ribbon" aria-label="Keyboard controls">
            <div class="controls-title"><span>QUICK KEYS</span><small>KEYBOARD</small></div>
            <div class="control-item"><kbd>WASD</kbd><span>MOVE</span></div>
            <div class="control-item"><kbd>⇧</kbd><span>SPRINT</span></div>
            <div class="control-item"><kbd>X</kbd><span>PASS</span></div>
            <div class="control-item"><kbd>Q</kbd><span>THROUGH</span></div>
            <div class="control-item"><kbd>SPACE</kbd><span>SHOOT</span></div>
            <div class="control-item"><kbd>ESC</kbd><span>PAUSE</span></div>
            <button class="secondary-button ui-command ribbon-button" data-ui-command type="button" data-action="controls">ALL CONTROLS</button>
          </section>
        </main>

        <section class="match-hud" data-screen="hud" hidden aria-label="Match interface">
          <div class="scoreboard-wrap">
            <div class="scoreboard">
              <div class="score-team score-home"><i></i><span data-tn="home-short">${ei(t.short)}</span></div>
              <strong data-home-score>0</strong><b>–</b><strong data-away-score>0</strong>
              <div class="score-team score-away"><span data-tn="away-short">${ei(e.short)}</span><i></i></div>
              <time data-clock datetime="PT0S">00:00</time>
            </div>
            <div class="match-phase" data-match-phase>1ST HALF&nbsp;&nbsp;•&nbsp;&nbsp;EXHIBITION</div>
          </div>
          <div class="broadcast-bug"><span></span>NOVA LIVE</div>

          <div class="camera-chip"><b data-camera-label>BROADCAST</b><small>V TO SWITCH</small></div>
          <button class="hud-pause-button" type="button" data-action="pause" aria-label="Pause match"><i></i><i></i></button>

          <aside class="event-feed" aria-label="Match events">
            <div class="event-list" data-event-list></div>
          </aside>

          <div class="player-panel">
            <div class="player-number" data-player-number>07</div>
            <div class="player-meta">
              <small data-player-role>FORWARD</small><strong data-player-name>YOUR PLAYER</strong>
              <div class="stamina-line">
                <span>STAMINA</span>
                <div class="stamina-track" role="meter" aria-label="Player stamina" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"><i data-stamina-bar></i></div>
                <b data-stamina-text>100</b>
              </div>
            </div>
          </div>

          <div class="minimap-shell" aria-label="Tactical minimap">
            <canvas class="minimap" data-minimap width="288" height="148"></canvas>
          </div>

          <div class="restart-bar" data-restart hidden>
            <b data-restart-heading></b>
            <span data-restart-context></span>
          </div>

          <div class="power-meter" data-power-meter hidden>
            <span data-power-label>SHOT POWER</span>
            <div><i data-power-bar></i></div><b data-power-text>0%</b>
          </div>

          <div class="touch-controls" aria-label="Touch controls">
            <div class="joystick-zone" aria-label="Movement joystick"><div class="joystick-ring"></div><div class="joystick-knob"></div><span>MOVE</span></div>
            <div class="touch-actions">
              <!-- Four face buttons laid out like a gamepad; their job switches between attack and defence. -->
              <button type="button" class="touch-button pad-a" data-action="pad" data-pad="a"><b class="on-attack">PASS</b><b class="on-defend">SWITCH</b></button>
              <button type="button" class="touch-button pad-b" data-action="pad" data-pad="b"><b class="on-attack">SHOOT</b><b class="on-defend">TACKLE</b></button>
              <button type="button" class="touch-button pad-x" data-action="pad" data-pad="x"><b class="on-attack">LOB</b><b class="on-defend">SLIDE</b></button>
              <button type="button" class="touch-button pad-y" data-action="pad" data-pad="y"><b class="on-attack">THROUGH</b><b class="on-defend">JOCKEY</b></button>
              <button type="button" class="touch-button pad-sprint" data-action="sprint"><b>SPRINT</b></button>
              <button type="button" class="touch-button pad-skill" data-action="skill"><b>SKILL</b></button>
            </div>
          </div>
        </section>

        <div class="holder-tag" data-holder-tag hidden></div>
        <div class="league-wipe" data-wipe aria-hidden="true"><div class="league-wipe-band"></div><div class="league-wipe-logo"><svg viewBox="0 0 120 120" width="120" height="120"><polygon points="60,6 108,33 108,87 60,114 12,87 12,33" fill="none" stroke="currentColor" stroke-width="7"/><path d="M40 84V36l40 48V36" fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/></svg><b>NOVA LEAGUE</b></div></div>
        <div class="replay-badge"><i></i><span data-replay-label>REPLAY</span><small>X TO SKIP</small><button class="touch-skip" data-ui-command data-action="skip" type="button">SKIP</button></div>
        <div class="intro-caption" data-intro hidden><b data-intro-title></b><span data-intro-sub></span><small>PRESS ANY KEY TO SKIP</small><button class="touch-skip" data-ui-command data-action="skip" type="button">SKIP INTRO</button></div>
        <div class="toast-stack" data-toast-stack aria-live="polite" aria-atomic="false"></div>

        <section class="goal-overlay" data-overlay="goal" hidden aria-live="assertive">
          <div class="goal-word">GOAL</div>
          <div class="goal-team" data-goal-team>${ei(t.name)}</div>
          <div class="goal-details"><span data-goal-scorer>WHAT A FINISH</span><b data-goal-score>1 — 0</b></div>
        </section>

        <section class="modal-overlay pause-overlay" data-overlay="pause" hidden aria-labelledby="pause-title">
          <div class="modal-card pause-card pause-wide" data-pause-tab="controls">
            <nav class="pause-nav" aria-label="Pause menu">
              <p class="micro-label">MATCH PAUSED</p><h2 id="pause-title">PAUSED</h2>
              <button class="primary-button ui-command" data-ui-command type="button" data-action="resume"><span>RESUME</span><i>›</i></button>
              <button class="nav-button ui-command" data-ui-command type="button" data-action="tab" data-value="controls">CONTROLS</button>
              <button class="nav-button ui-command" data-ui-command type="button" data-action="tab" data-value="match">MATCH CENTRE</button>
              <button class="nav-button ui-command" data-ui-command type="button" data-action="tab" data-value="settings">SETTINGS</button>
              <button class="nav-button ui-command" data-ui-command data-exhibition-only type="button" data-action="restart">RESTART MATCH</button>
              <button class="nav-button ui-command quit" data-ui-command type="button" data-action="quit" data-quit-label>QUIT TO MENU</button>
              <small class="escape-hint"><kbd>ESC</kbd> RESUME</small>
            </nav>
            <div class="pause-body">
              <section class="pause-pane" data-pane="match">
                <h3>MATCH CENTRE</h3>
                <div class="pause-score">
                  <span data-tc="home" style="--team-color:${t.color}" data-tn="home-name">${ei(t.name)}</span>
                  <strong data-pause-score>0 – 0</strong>
                  <span data-tc="away" style="--team-color:${e.color}" data-tn="away-name">${ei(e.name)}</span>
                </div>
                <p class="pause-clock" data-pause-clock>00:00</p>
                <div class="match-stats pause-stats">
                  <div class="stat-row"><strong data-pstat="home-possession">50%</strong><span>POSSESSION</span><strong data-pstat="away-possession">50%</strong></div>
                  <div class="stat-row"><strong data-pstat="home-shots">0</strong><span>SHOTS</span><strong data-pstat="away-shots">0</strong></div>
                  <div class="stat-row"><strong data-pstat="home-passes">0</strong><span>PASSES</span><strong data-pstat="away-passes">0</strong></div>
                  <div class="stat-row"><strong data-pstat="home-fouls">0</strong><span>FOULS</span><strong data-pstat="away-fouls">0</strong></div>
                </div>
                <p class="keys-tip">Open CONTROLS for every key and the controller layout.</p>
              </section>
              <section class="pause-pane" data-pane="controls"><h3>CONTROLS</h3>${bu()}</section>
              <section class="pause-pane" data-pane="settings">
                <h3>SETTINGS</h3>
                <div class="settings-panel">${Mu()}</div>
                <h3 class="sub">OPPONENT AI</h3>
                ${Su()}
              </section>
            </div>
          </div>
        </section>

        <section class="modal-overlay controls-overlay" data-overlay="controls" hidden aria-labelledby="controls-title">
          <div class="modal-card controls-card">
            <h2 id="controls-title">CONTROLS</h2>
            ${bu()}
            <button class="primary-button ui-command" data-ui-command type="button" data-action="close-controls"><span>BACK</span><i>›</i></button>
          </div>
        </section>

        <section class="modal-overlay fulltime-overlay" data-overlay="fulltime" hidden aria-labelledby="fulltime-title">
          <div class="modal-card fulltime-card">
            <header><p class="micro-label">NOVA PRIME ARENA</p><h2 id="fulltime-title">FULL TIME</h2><span>MATCH COMPLETE</span></header>
            <div class="final-score">
              <div><i data-tc="home" style="--team-color:${t.color}"></i><span data-tn="home-short">${ei(t.short)}</span></div>
              <strong data-final-home>0</strong><b>—</b><strong data-final-away>0</strong>
              <div><span data-tn="away-short">${ei(e.short)}</span><i data-tc="away" style="--team-color:${e.color}"></i></div>
            </div>
            <p class="result-callout" data-result-callout>THE FINAL WHISTLE</p>
            <div class="shootout" data-shootout hidden></div>
            <div class="match-stats" aria-label="Match statistics">
              <div class="stats-head"><span data-tn="home-short">${ei(t.short)}</span><b>MATCH STATS</b><span data-tn="away-short">${ei(e.short)}</span></div>
              <div class="stat-row"><strong data-stat="home-possession">50%</strong><span>POSSESSION</span><strong data-stat="away-possession">50%</strong></div>
              <div class="stat-row"><strong data-stat="home-shots">0</strong><span>SHOTS</span><strong data-stat="away-shots">0</strong></div>
              <div class="stat-row"><strong data-stat="home-onTarget">0</strong><span>ON TARGET</span><strong data-stat="away-onTarget">0</strong></div>
              <div class="stat-row"><strong data-stat="home-passes">0</strong><span>PASSES</span><strong data-stat="away-passes">0</strong></div>
              <div class="stat-row"><strong data-stat="home-tackles">0</strong><span>TACKLES</span><strong data-stat="away-tackles">0</strong></div>
              <div class="stat-row"><strong data-stat="home-saves">0</strong><span>SAVES</span><strong data-stat="away-saves">0</strong></div>
            </div>
            <div class="fulltime-actions">
              <button class="primary-button ui-command" data-ui-command data-competition-only type="button" data-action="continue" hidden><span>CONTINUE</span><i>›</i></button>
              <button class="primary-button ui-command" data-ui-command data-exhibition-only type="button" data-action="restart"><span>PLAY AGAIN</span><i>↻</i></button>
              <button class="secondary-button ui-command" data-ui-command data-exhibition-only type="button" data-action="quit">RETURN TO MENU</button>
            </div>
          </div>
        </section>

        <section class="modal-overlay tournament-overlay" data-overlay="tournament" hidden aria-label="Competition"></section>
      </div>`,this.root=this.app.querySelector(".nova-app")}_cacheElements(){const t=e=>this.root.querySelector(e);this.screens={loading:t('[data-screen="loading"]'),menu:t('[data-screen="menu"]'),hud:t('[data-screen="hud"]')},this.overlays={pause:t('[data-overlay="pause"]'),controls:t('[data-overlay="controls"]'),goal:t('[data-overlay="goal"]'),fulltime:t('[data-overlay="fulltime"]'),tournament:t('[data-overlay="tournament"]')},this.elements={homeScore:t("[data-home-score]"),awayScore:t("[data-away-score]"),clock:t("[data-clock]"),phase:t("[data-match-phase]"),camera:t("[data-camera-label]"),eventList:t("[data-event-list]"),playerName:t("[data-player-name]"),playerRole:t("[data-player-role]"),playerNumber:t("[data-player-number]"),staminaBar:t("[data-stamina-bar]"),restart:t("[data-restart]"),restartHeading:t("[data-restart-heading]"),restartContext:t("[data-restart-context]"),staminaText:t("[data-stamina-text]"),staminaTrack:t(".stamina-track"),minimap:t("[data-minimap]"),powerMeter:t("[data-power-meter]"),powerBar:t("[data-power-bar]"),wipe:t("[data-wipe]"),holderTag:t("[data-holder-tag]"),powerLabel:t("[data-power-label]"),powerText:t("[data-power-text]"),loadingText:t("[data-loading-text]"),loadingBar:t("[data-loading-bar]"),loadingPercent:t("[data-loading-percent]"),loadingTrack:t(".loading-track"),toastStack:t("[data-toast-stack]"),goalTeam:t("[data-goal-team]"),goalScorer:t("[data-goal-scorer]"),goalScore:t("[data-goal-score]"),finalHome:t("[data-final-home]"),finalAway:t("[data-final-away]"),result:t("[data-result-callout]")},this.minimapContext=this.elements.minimap?.getContext("2d")||null}_bindEvents(){this.handlePointerDown=t=>{t.target.closest?.('[data-ui-command], [data-action="pause"]')&&t.stopPropagation()},this.handleClick=t=>{const e=t.target.closest?.("[data-action]");if(!e||!this.root.contains(e)||e.disabled)return;const i=e.dataset.action,n=e.dataset.value;if(i==="tab"){this.root.querySelector(".pause-card").dataset.pauseTab=n;return}if(i==="controls"){this.overlays.controls.hidden=!1;return}if(i==="close-controls"){this.overlays.controls.hidden=!0;return}if(i==="quality"||i==="camera"||i==="difficulty"||i==="mode"||i==="length"){const s=ev[i].has(n)?n:this.settings[i];this.settings[i]=s,this._syncSettings(),this._emit(i,s,t);return}if(i==="sound"||i==="commentary"||i==="passAssist"){const s=n==="true";if(this.settings[i]=s,i==="passAssist")try{localStorage.setItem("nova-pass-assist",String(s))}catch{}this._syncSettings(),this._emit(i,s,t);return}this._emit(i,{action:i,value:n,originalEvent:t},t)},this.handleKeyDown=t=>{if(t.key!=="Enter"&&t.key!==" "||t.repeat)return;const e=t.target.closest?.("button[data-action]");!e||!this.root.contains(e)||e.disabled||(t.preventDefault(),t.stopPropagation(),e.click())},this.root.addEventListener("pointerdown",this.handlePointerDown),this.root.addEventListener("click",this.handleClick),this.root.addEventListener("keydown",this.handleKeyDown),"ResizeObserver"in window&&this.elements.minimap&&(this.resizeObserver=new ResizeObserver(()=>this._drawMinimap(this.lastState)),this.resizeObserver.observe(this.elements.minimap))}_emit(t,e,i){const n=this.listeners.get(t);if(n)for(const s of[...n])try{s(e,i)}catch(a){console.error(`GameUI ${t} handler failed`,a)}}_syncSettings(){this.root.querySelectorAll("[data-setting]").forEach(t=>{const e=t.dataset.setting;t.querySelectorAll("button").forEach(i=>{const n=i.dataset.value,s=typeof this.settings[e]=="boolean"?n==="true":n,a=this.settings[e]===s;i.classList.toggle("is-active",a),i.setAttribute("aria-pressed",String(a))})})}on(t,e){return typeof e!="function"?()=>{}:(this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),()=>this.listeners.get(t)?.delete(e))}showMenu(){this.disposed||(this._blurActiveControl(),this.root.dataset.mode="menu",this.screens.loading.hidden=!0,this.screens.menu.hidden=!1,this.screens.hud.hidden=!0,Object.values(this.overlays).forEach(t=>{t.hidden=!0}),this.elements.toastStack.replaceChildren())}setTeams(t){this.teams={home:ma(t,"home",0),away:ma(t,"away",1)};for(const e of["home","away"]){const i=this.teams[e],n={name:i.name,short:i.short,initial:i.short.slice(0,1)};this.root.style.setProperty(`--${e}`,i.color),this.root.querySelectorAll(`[data-tn^="${e}-"]`).forEach(s=>{s.textContent=n[s.dataset.tn.slice(e.length+1)]??""}),this.root.querySelectorAll(`[data-tc="${e}"]`).forEach(s=>s.style.setProperty("--team-color",i.color))}}setCompetition(t){this.competitionLabel=t||"EXHIBITION",this.root.querySelectorAll("[data-exhibition-only]").forEach(i=>{i.hidden=!!t}),this.root.querySelectorAll("[data-competition-only]").forEach(i=>{i.hidden=!t});const e=this.root.querySelector("[data-quit-label]");e&&(e.textContent=t?"LEAVE MATCH":"QUIT TO MENU")}setCompetitionStatus(t,e,i=!1){const n=this.root.querySelector(`[data-comp-status="${t}"]`);n&&(n.textContent=e,n.closest("button")?.classList.toggle("has-save",i))}showTournament(t){if(this.disposed)return;const e=this.overlays.tournament,i=e.hidden?0:e.scrollTop;this.showMenu(),e.innerHTML=t,e.hidden=!1,e.scrollTop=i}showHUD(){this.disposed||(this._blurActiveControl(),this.root.dataset.mode="playing",this.screens.loading.hidden=!0,this.screens.menu.hidden=!0,this.screens.hud.hidden=!1,this.overlays.pause.hidden=!0,this.overlays.goal.hidden=!0,this.overlays.fulltime.hidden=!0,this.overlays.tournament.hidden=!0,this._drawMinimap(this.lastState))}update(t={}){if(this.disposed||!t)return;this.lastState=t;const e=ga(t);this.elements.homeScore.textContent=String(e.home),this.elements.awayScore.textContent=String(e.away);const i=t.clockText??t.timeRemaining??t.remaining??t.clock??t.time??0;this.elements.clock.textContent=typeof i=="string"?i:sv(i),this.elements.clock.setAttribute("datetime",`PT${Math.ceil(Number(i)||0)}S`);const n=String(t.phaseLabel??t.phase??"LIVE").replace(/[_-]+/g," ").toUpperCase();this.elements.phase.textContent=`${n}  •  ${this.competitionLabel}`;const s=String(t.cameraMode??this.settings.camera??"broadcast").toUpperCase();this.elements.camera.textContent=s,this._updateRestart(t.restart,e);const a=t.controlledPlayer??t.player??{};this.elements.playerName.textContent=String(a.name??a.displayName??"YOUR PLAYER").toUpperCase(),this.elements.playerRole.textContent=String(a.role??a.positionName??"SELECTED PLAYER").toUpperCase(),this.elements.playerNumber.textContent=String(a.number??a.shirtNumber??"7").padStart(2,"0");let r=Number(t.stamina??a.stamina??1);r>1&&(r/=100),r=ho(r);const l=Math.round(r*100);this.elements.staminaBar.style.width=`${l}%`,this.elements.staminaText.textContent=String(l),this.elements.staminaTrack.setAttribute("aria-valuenow",String(l)),this.elements.staminaTrack.classList.toggle("is-low",r<.28);const c=t.shotPower??t.kickPower??t.power,h=c!=null&&(t.chargingShot!==!1||Number(c)>.015);if(this.elements.powerMeter.hidden=!h,h){let u=Number(c)||0;u>1&&(u/=100);const p=Math.round(ho(u)*100);this.elements.powerBar.style.width=`${p}%`,this.elements.powerText.textContent=`${p}%`,this.elements.powerMeter.classList.toggle("is-hot",p>84);const f={shoot:"SHOT POWER",pass:"PASS POWER",through:"THROUGH BALL",cross:"LOB POWER"}[t.chargeType]??"POWER";this.elements.powerLabel&&this.elements.powerLabel.textContent!==f&&(this.elements.powerLabel.textContent=f)}this._consumeEvents(t),this._drawMinimap(t)}_consumeEvents(t){const e=Array.isArray(t.events)?t.events.slice(-8):[];t.lastEvent&&e.push(t.lastEvent);for(const n of e){if(!n)continue;const s=n.id??`${n.type||"event"}:${n.time??n.minute??""}:${n.text??n.message??""}`;if(this.seenEvents.has(s))continue;this.seenEvents.add(s);const a=n.text??n.message??(n.type?String(n.type).replace(/_/g," "):"MATCH UPDATE");this._pushFeed(a,n.type||"info")}this.seenEvents.size>80&&(this.seenEvents=new Set([...this.seenEvents].slice(-40)));const i=String(t.message??"").trim();i&&i!==this.lastMessage&&(this.lastMessage=i,/goal|save|kick.?off|full.?time|half.?time/i.test(i)&&this._pushFeed(i,i.toLowerCase()))}_updateRestart(t,e){const i=this.elements;if(i.restart.hidden=!t,this.root.classList.toggle("is-restart",!!t),!t)return;const{kind:n,team:s,human:a,ready:r,began:l,indirect:c}=t,h=this.teams[s]?.name??"",u={kickoff:"KICK-OFF","throw-in":"THROW-IN",corner:"CORNER","free-kick":"FREE KICK","goal-kick":"GOAL KICK",penalty:"PENALTY"}[n],p=`${this.teams.home.short} ${e.home} – ${e.away} ${this.teams.away.short}`,d=(window.matchMedia("(pointer: coarse), (max-width: 700px)").matches?{kickoff:"TAP PASS","throw-in":"TAP PASS TO THROW",corner:"LOB TO CROSS  ·  PASS TO PLAY SHORT","free-kick":c?"TAP PASS":"PASS OR SHOOT","goal-kick":"TAP PASS",penalty:"HOLD SHOOT FOR POWER"}:{kickoff:"X / A  PASS","throw-in":"X / A  THROW",corner:"Z / X  CROSS   ·   X / A  SHORT","free-kick":c?"X / A  PASS":"X / A  PASS   ·   SPACE / B  SHOOT","goal-kick":"X / A  PASS",penalty:"SPACE / B  SHOOT"})[n];i.restartHeading.textContent=n==="kickoff"&&l?p:u,i.restartContext.textContent=r&&a?d:`${h}  ·  ${r?u:"WAIT FOR WHISTLE"}`}_pushFeed(t,e="info"){if(!t||!this.elements.eventList)return;const i=document.createElement("div");i.className=`feed-item feed-${String(e).toLowerCase().replace(/[^a-z0-9-]/g,"")}`;const n=document.createElement("i"),s=document.createElement("span");for(s.textContent=String(t).toUpperCase(),i.append(n,s),this.elements.eventList.prepend(i);this.elements.eventList.children.length>4;)this.elements.eventList.lastElementChild.remove()}_drawMinimap(t={}){const e=this.elements.minimap,i=this.minimapContext;if(!e||!i||e.hidden)return;const n=e.getBoundingClientRect(),s=Math.max(220,Math.round(n.width||288)),a=Math.max(108,Math.round(n.height||148)),r=Math.min(window.devicePixelRatio||1,2),l=Math.round(s*r),c=Math.round(a*r);(e.width!==l||e.height!==c)&&(e.width=l,e.height=c),i.setTransform(r,0,0,r,0,0),i.clearRect(0,0,s,a);const h=9,u=s-h*2,p=a-h*2;i.fillStyle="rgba(4, 24, 30, .22)",i.fillRect(h,h,u,p),i.strokeStyle="rgba(218, 255, 248, .55)",i.lineWidth=1,i.strokeRect(h+.5,h+.5,u-1,p-1),i.beginPath(),i.moveTo(s/2,h),i.lineTo(s/2,a-h),i.stroke(),i.beginPath(),i.arc(s/2,a/2,Math.min(15,p*.14),0,Math.PI*2),i.stroke(),i.strokeRect(h,a/2-p*.22,u*.13,p*.44),i.strokeRect(s-h-u*.13,a/2-p*.22,u*.13,p*.44);const f=t.pitch??t.dimensions??{},d=Number(f.width??f.pitchWidth??68)||68,_=Number(f.length??f.pitchLength??105)||105,g=v=>{const b=v?.position??v?.mesh?.position??v,x=Number(b?.x??(Array.isArray(b)?b[0]:0))||0,w=Number(b?.z??b?.y??(Array.isArray(b)?b[2]??b[1]:0))||0;return{x:h+ho(w/_+.5)*u,y:h+ho(.5-x/d)*p}};for(const v of Array.isArray(t.players)?t.players:[]){if(v?.active===!1)continue;const b=g(v),x=v.team??v.side??v.teamId,w=x==="home"||x===0||x===this.teams.home.short,C=w?this.teams.home.color:this.teams.away.color,T=v===t.controlledPlayer||v.id===t.controlledPlayer?.id||v.controlled;T&&(i.beginPath(),i.arc(b.x,b.y,5.5,0,Math.PI*2),i.strokeStyle="#fff",i.lineWidth=1.5,i.stroke());const A=T?3.4:2.8;i.beginPath(),w?i.arc(b.x,b.y,A,0,Math.PI*2):(i.moveTo(b.x,b.y-A-.5),i.lineTo(b.x+A,b.y+A),i.lineTo(b.x-A,b.y+A),i.closePath()),i.fillStyle=C,i.shadowColor=C,i.shadowBlur=T?8:4,i.fill(),i.shadowBlur=0}const m=t.ball?.mesh??t.ball;if(m){const v=g(m);i.beginPath(),i.arc(v.x,v.y,2.2,0,Math.PI*2),i.fillStyle="#ffe285",i.shadowColor="#ffe285",i.shadowBlur=7,i.fill(),i.shadowBlur=0}}toast(t,e="neutral"){if(this.disposed||!t)return;const n=new Set(["neutral","accent","warning","error","success"]).has(e)?e:"neutral",s=document.createElement("div");s.className=`toast toast-${n}`,s.setAttribute("role",n==="error"?"alert":"status");const a=document.createElement("i");a.textContent=n==="warning"?"!":n==="success"?"✓":"◆";const r=document.createElement("span");for(r.textContent=String(t),s.append(a,r),this.elements.toastStack.append(s);this.elements.toastStack.children.length>4;)this.elements.toastStack.firstElementChild.remove();const l=window.setTimeout(()=>{s.classList.add("is-leaving");const c=window.setTimeout(()=>s.remove(),320);this.timers.add(c),this.timers.delete(l)},3e3);this.timers.add(l)}showGoal(t={}){if(this.disposed)return;this.goalTimer&&(clearTimeout(this.goalTimer),this.timers.delete(this.goalTimer));const e=t.team==="away"||t.team===1?"away":"home",i=this.teams[e],n=t.scorer?.name??t.player?.name??t.scorer??t.playerName??"WHAT A FINISH",s=ga(t),a=Number(this.elements.homeScore.textContent)||0,r=Number(this.elements.awayScore.textContent)||0,l=t.score!=null||t.homeScore!=null||t.awayScore!=null;this.elements.goalTeam.textContent=i.name,this.elements.goalTeam.style.color=i.color,this.elements.goalScorer.textContent=String(n).toUpperCase(),this.elements.goalScore.textContent=`${l?s.home:a} — ${l?s.away:r}`,this.overlays.goal.hidden=!1,this.overlays.goal.classList.remove("is-animating"),this.overlays.goal.offsetWidth,this.overlays.goal.classList.add("is-animating");const c=`GOAL — ${i.short}`;this.lastMessage=c,this._pushFeed(c,"goal"),this.goalTimer=window.setTimeout(()=>{this.overlays.goal.hidden=!0,this.overlays.goal.classList.remove("is-animating"),this.timers.delete(this.goalTimer),this.goalTimer=null},2700),this.timers.add(this.goalTimer)}wipe(){const t=this.elements.wipe;!t||this.disposed||(t.classList.remove("is-running"),t.offsetWidth,t.classList.add("is-running"))}setHolderTag(t){const e=this.elements.holderTag;if(e){if(!t){e.hidden||(e.hidden=!0);return}e.hidden&&(e.hidden=!1),e.textContent!==t.text&&(e.textContent=t.text),e.style.transform=`translate(${Math.round(t.x)}px, ${Math.round(t.y)}px) translate(-50%, -100%)`,e.style.setProperty("--tag",t.color),e.classList.toggle("is-own",!!t.own)}}setMenuLoading(t){const e=this.root.querySelector("[data-play-label]"),i=e?.closest("button");if(!e)return;const n=t>=1;e.textContent=n?"PLAY MATCH":`LOADING SQUADS ${Math.round(t*100)}%`,i&&(i.disabled=!n),this.root.querySelectorAll("[data-needs-assets]").forEach(s=>{s.disabled=!n})}setIntro(t,e=""){const i=this.root.querySelector("[data-intro]");i&&(i.hidden=!t,t&&(i.querySelector("[data-intro-title]").textContent=t,i.querySelector("[data-intro-sub]").textContent=e))}setReplay(t,e="REPLAY"){const i=this.root.querySelector("[data-replay-label]");return i&&t&&(i.textContent=e||"REPLAY"),this._setReplay(t)}_setReplay(t){this.disposed||(this.root.classList.toggle("is-replay",!!t),t&&(this.overlays.goal.hidden=!0))}showPause(t=!0){if(!this.disposed){if(t||this._blurActiveControl(),this.overlays.pause.hidden=!t,t){this.root.querySelector(".pause-card").dataset.pauseTab="controls";const e=this.lastState||{},i=ga(e),n=(l,c)=>{const h=this.root.querySelector(l);h&&(h.textContent=c)};n("[data-pause-score]",`${i.home} – ${i.away}`),n("[data-pause-clock]",`${e.clockText??"00:00"}  •  ${e.phaseLabel??""}`);const s=je(e.stats,"home","possessionSeconds"),a=je(e.stats,"away","possessionSeconds"),r=s+a>0?Math.round(s/(s+a)*100):50;n('[data-pstat="home-possession"]',`${r}%`),n('[data-pstat="away-possession"]',`${100-r}%`);for(const l of["home","away"])for(const c of["shots","passes","fouls"])n(`[data-pstat="${l}-${c}"]`,String(je(e.stats,l,c)))}t?this.root.dataset.mode="paused":this.screens.hud.hidden||(this.root.dataset.mode="playing")}}showFullTime(t={},{callout:e="",shootout:i=""}={}){if(this.disposed)return;this.update(t);const n=ga(t);this.elements.finalHome.textContent=String(n.home),this.elements.finalAway.textContent=String(n.away),this.elements.result.textContent=e||(n.home===n.away?"HONOURS EVEN — WHAT A BATTLE":`${n.home>n.away?this.teams.home.name:this.teams.away.name} TAKE THE NIGHT`);const s=this.root.querySelector("[data-shootout]");s&&(s.innerHTML=i,s.hidden=!i);const a=t.stats??t.statistics??{},r=je(a,"home","possessionSeconds"),l=je(a,"away","possessionSeconds"),c=r+l;let h=je(a,"home","possession",c?r/c*100:50),u=je(a,"away","possession",c?l/c*100:50);h<=1&&u<=1&&(h*=100,u*=100);const p={"home-possession":`${Math.round(h)}%`,"away-possession":`${Math.round(u)}%`,"home-shots":je(a,"home","shots"),"away-shots":je(a,"away","shots"),"home-onTarget":je(a,"home","shotsOnTarget"),"away-onTarget":je(a,"away","shotsOnTarget"),"home-passes":je(a,"home","passes"),"away-passes":je(a,"away","passes"),"home-tackles":je(a,"home","tackles"),"away-tackles":je(a,"away","tackles"),"home-saves":je(a,"home","saves"),"away-saves":je(a,"away","saves")};for(const[f,d]of Object.entries(p)){const _=this.root.querySelector(`[data-stat="${f}"]`);_&&(_.textContent=String(d))}this.root.dataset.mode="fulltime",this.overlays.pause.hidden=!0,this.overlays.goal.hidden=!0,this.overlays.fulltime.hidden=!1}setLoading(t=0,e="Preparing the floodlights"){if(this.disposed)return;let i=Number(t)||0;i>1&&(i/=100),i=ho(i);const n=Math.round(i*100);this.elements.loadingText.textContent=String(e||"Preparing the floodlights"),this.elements.loadingBar.style.width=`${n}%`,this.elements.loadingPercent.textContent=`${n}%`,this.elements.loadingTrack.setAttribute("aria-valuenow",String(n)),this.screens.loading.hidden=!1,this.screens.menu.hidden=!0,this.screens.hud.hidden=!0,this.root.dataset.mode="loading",this.screens.loading.classList.toggle("is-ready",i>=1)}getSettings(){return{...this.settings}}_blurActiveControl(){const t=document.activeElement;t&&this.root.contains(t)&&typeof t.blur=="function"&&t.blur()}dispose(){this.disposed||(this.disposed=!0,this.root.removeEventListener("pointerdown",this.handlePointerDown),this.root.removeEventListener("click",this.handleClick),this.root.removeEventListener("keydown",this.handleKeyDown),this.resizeObserver?.disconnect(),this.timers.forEach(t=>clearTimeout(t)),this.timers.clear(),this.listeners.clear(),this.root.remove())}}const av=["anthem","kick-hard","whistle","post","net","crowd-bed","crowd-chant","crowd-goal","crowd-ooh","crowd-boo","crowd-applause"],De=(o,t)=>Array.from({length:t},(e,i)=>`${o}${i+1}`),kd={welcome:["welcome"],kickoff:De("kickoff",2),pass:De("pass",4),switch:["switch1"],back:["back1"],through:De("through",3),cross:De("cross",3),dribble:De("dribble",3),box:De("box",3),shot:De("shot",4),goal:De("goal",5),goalhome:["goalhome"],goalaway:["goalaway"],leadhome:["leadhome"],leadaway:["leadaway"],level:["level"],save:De("save",4),catch:De("catch",3),punch:["punch1"],miss:De("miss",3),post:De("post",2),block:["block1"],tackle:De("tackle",3),intercept:De("intercept",3),foul:De("foul",3),yellow:De("yellow",2),penalty:De("penalty",2),offside:["offside2"],corner:De("corner",2),"goal-kick":["goalkick1"],"throw-in":["throw1"],"free-kick":De("freekick",2),header:De("header",2),headershot:["headershot"],gklong:["gk1"],gkroll:["gk2"],gkthrow:["gk3"],homeattack:De("homeattack",2),awayattack:De("awayattack",2),counter:De("counter",2),replay:De("replay",2),late:["late"],fulltime:["fulltime"],homewin:["homewin"],awaywin:["awaywin"],draw:["draw"]},rv={pass:7,dribble:9,box:6,header:5,tackle:4,intercept:4,homeattack:25,awayattack:25,counter:12,catch:3},Xa=[...new Set(Object.values(kd).flat())];for(const o of["home","away"])for(let t=0;t<11;t+=1)Xa.push(`n-${o}-${t}-a`,`n-${o}-${t}-b`);for(let o=1;o<=11;o+=1)Xa.push(`num${o}`);const uo=(o,t,e)=>Math.max(t,Math.min(e,o));class lv{constructor({enabled:t=!0,volume:e=.8}={}){this.enabled=t!==!1,this.volume=uo(Number(e)||.8,0,1),this.commentary=!0,this.context=null,this.buffers=new Map,this.disposed=!1,this.excitement=0,this.chantLevel=0,this.chantTimer=4,this.voice=null,this.voiceQueue=[],this.lastName=-10,this.lastLine=new Map,this.lastTake=new Map,this.time=0}init(){if(this.disposed||typeof window>"u")return!1;if(this.context)return this.enabled&&this.context.state==="suspended"&&this.context.resume?.().catch(()=>{}),!0;const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;try{const e=new t;this.context=e,this.master=e.createGain(),this.master.gain.value=this.enabled?this.volume:0;const i=e.createDynamicsCompressor();return i.threshold.value=-10,i.knee.value=14,i.ratio.value=6,i.attack.value=.004,i.release.value=.2,this.master.connect(i),i.connect(e.destination),this.crowdBus=this._gain(.9),this.sfxBus=this._gain(1),this.voiceBus=this._gain(1.15),this.bedGain=this._gain(0,this.crowdBus),this.chantGain=this._gain(0,this.crowdBus),this._loadAll(),!0}catch(e){return console.warn("Audio unavailable:",e?.message),!1}}_gain(t,e=this.master){const i=this.context.createGain();return i.gain.value=t,i.connect(e),i}async _load(t){try{const e=await fetch(Ws(`audio/${t}.mp3`));if(!e.ok)return;const i=await this.context.decodeAudioData(await e.arrayBuffer());this.disposed||this.buffers.set(t,i)}catch{}}async _loadAll(){if(await Promise.all(av.map(t=>this._load(t))),!this.disposed){this._loop("crowd-bed",this.bedGain),this._loop("crowd-chant",this.chantGain),this.bedGain.gain.linearRampToValueAtTime(.55,this.context.currentTime+2.5);for(let t=0;t<Xa.length;t+=6)await Promise.all(Xa.slice(t,t+6).map(e=>this._load(e)))}}_loop(t,e){const i=this.buffers.get(t);if(!i)return;const n=this.context.createBufferSource();n.buffer=i,n.loop=!0,n.loopStart=.6,n.loopEnd=Math.max(1,i.duration-.6),n.connect(e),n.start(0,.6)}_shot(t,{gain:e=1,rate:i=1,bus:n=this.sfxBus,offset:s=0,duration:a,delay:r=0}={}){const l=this.buffers.get(t);if(!l||!this.context)return null;const c=this.context.createBufferSource();c.buffer=l,c.playbackRate.value=i;const h=this.context.createGain();return h.gain.value=e,c.connect(h),h.connect(n),c.start(this.context.currentTime+r,s,a),c}setEnabled(t){this.enabled=!!t,this.master&&(this.master.gain.setTargetAtTime(this.enabled?this.volume:0,this.context.currentTime,.05),this.enabled&&this.context.resume?.().catch(()=>{}))}setCommentary(t){this.commentary=!!t,t||this._stopVoice()}play(t,e={}){if(!(!this.context||!this.enabled))switch(t){case"strike":e.power>=.94&&this._shot("kick-hard",{gain:.32,rate:.97+Math.random()*.06,duration:.32});break;case"save":this.excite(.5),this._shot("crowd-ooh",{gain:.7,bus:this.crowdBus});break;case"post":this._shot("post",{gain:1.1}),this._shot("crowd-ooh",{gain:1,bus:this.crowdBus}),this.excite(.6);break;case"ooh":this._shot("crowd-ooh",{gain:.9,bus:this.crowdBus}),this.excite(.4);break;case"boo":this._shot("crowd-boo",{gain:.8,bus:this.crowdBus});break;case"applause":this._shot("crowd-applause",{gain:.8,bus:this.crowdBus});break;case"whistle":this._shot("whistle",{gain:e.short?.55:.8,duration:e.short?.5:1.4});break;case"anthem":this._anthem?.stop?.(),this._anthem=this._shot("anthem",{gain:.8,bus:this.crowdBus});break;case"anthem-stop":try{this._anthem?.stop()}catch{}this._anthem=null;break;case"net":this._shot("net",{gain:.11+.19*uo(e.power??.6,0,1)});break;case"goal":this._shot("crowd-goal",{gain:1.25,bus:this.crowdBus}),this.excite(1);break;case"crowd":this.excite(e.intensity??.2);break;case"ui":this._blip(e.pitch??1);break}}_blip(t){const e=this.context,i=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="triangle",n.frequency.value=660*t,s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(.09,i+.01),s.gain.exponentialRampToValueAtTime(1e-4,i+.12),n.connect(s),s.connect(this.sfxBus),n.start(i),n.stop(i+.14)}excite(t){this.excitement=uo(this.excitement+t,0,1.2)}say(t,e=1){if(!this.context||!this.enabled||!this.commentary)return!1;const i=kd[t];if(!i)return!1;const n=this.lastLine.get(t)??-100;if(e<3&&this.time-n<(rv[t]??3))return!1;let s=Math.floor(Math.random()*i.length);return i.length>1&&s===this.lastTake.get(t)&&(s=(s+1)%i.length),this.lastTake.set(t,s),this._speak([i[s]],e,t)}announceDecision(t){return this._stopVoice(),this.say(t,4)}sayPlayer(t,{excited:e=!1,number:i=!1,priority:n=0}={}){if(!t||!t.voice||this.time-this.lastName<(e?.9:1.6))return!1;const s=[`n-${t.voice}-${e?"b":"a"}`];return i&&!e&&s.unshift(`num${t.number}`),this._speak(s,n,"name")?(this.lastName=this.time,!0):!1}_speak(t,e,i){if(!this.context||!this.enabled||!this.commentary)return!1;const n=t.filter(r=>this.buffers.has(r));if(!n.length)return!1;if(this.voice&&this.time<this.voice.until){if(e<=this.voice.priority)return e>=2&&this.voiceQueue.length<2&&this.voiceQueue.push({names:n,priority:e,key:i}),!1;this._stopVoice()}let s=0;const a=[];for(const r of n)a.push(this._shot(r,{gain:1,bus:this.voiceBus,delay:s})),s+=this.buffers.get(r).duration-.04;return this.voice={sources:a,priority:e,until:this.time+s+.14},this.lastLine.set(i,this.time),this.crowdBus.gain.setTargetAtTime(.6,this.context.currentTime,.08),!0}_stopVoice(){for(const t of this.voice?.sources??[])try{t?.stop()}catch{}this.voice=null,this.voiceQueue.length=0}update(t=0,e={}){if(!this.context)return;if(this.time+=t,this.voice&&this.time>=this.voice.until){this.voice=null;const a=this.voiceQueue.shift();a?this._speak(a.names,a.priority,a.key):this.crowdBus.gain.setTargetAtTime(.9,this.context.currentTime,.3)}const i=Math.abs(e.ball?.position?.z??0),n=uo((i-26)/22,0,1)*(e.phase==="playing"?1:.4);this.excitement=Math.max(0,this.excitement-t*.12);const s=uo(.5+n*.3+this.excitement*.45,0,1.2);if(this.chantTimer-=t,this.chantTimer<=0&&(this.chantLevel=Math.random()<.6?.35+Math.random()*.35:.05,this.chantTimer=9+Math.random()*14),this.buffers.has("crowd-bed")){const a=this.context.currentTime;this.bedGain.gain.setTargetAtTime(s*(e.paused?.35:1)*.9,a,.5),this.chantGain.gain.setTargetAtTime((this.chantLevel+this.excitement*.3)*(e.paused?.2:1),a,1.6)}}dispose(){this.disposed=!0,this._stopVoice(),this.context?.close?.().catch(()=>{}),this.context=null}}function cv(o){const t=new Map,e=new Map,i=o.clone();return Nd(o,i,function(n,s){t.set(s,n),e.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,a=t.get(n),r=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=r.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Nd(o,t,e){e(o,t);for(let i=0;i<o.children.length;i++)Nd(o.children[i],t.children[i],e)}const Ia=["Hips","Spine02","Spine01","Spine","neck","Head","LeftShoulder","LeftArm","LeftForeArm","LeftHand","RightShoulder","RightArm","RightForeArm","RightHand","LeftUpLeg","LeftLeg","LeftFoot","LeftToeBase","RightUpLeg","RightLeg","RightFoot","RightToeBase"],Tu=["nova-player.glb","nova-player-b.glb","nova-player-c.glb","nova-player-d.glb"],Da=["idle","walk","cmu-jog","sprint","kick","hit","victory","cheer","fall","jumpcatch","pickup","despair","fistpump","shout","backflip","shuffle","breath","claprun","hiphand","brake","cmu-cut-left","cmu-cut-right","sweep-catch","standup","strafel","strafer","limp","cmu-strike-left","cmu-strike-right","cmu-running-strike-left","cmu-running-strike-right"],Zr=[...Da,"back"],wu={walk:[1.57,2.25,2.95],"cmu-jog":[0,.4,.8],sprint:[.216,.556,.8]},hv={kick:["kick",.24,1.55,1,.1,.3],punt:["kick",0,1.07,1,.12,.3],stumble:["hit",.1,1.4,1,.15,.3],fall:["fall",1.5,1.7,1,.08,.06],standup:["standup",4.4,2.1,1,.1,.22],catchhigh:["jumpcatch",1.08,1.05,1,.14,.3],catchlow:["pickup",.95,1.55,1,.16,.3],catchsweep:["sweep-catch",.46,1.18,.76,.16,.3],despair:["despair",0,1,1,.12,.2],protest:["shout",.3,1.1,.9,.15,.25],organise:["shout",.3,1.1,.8,.15,.25]},Zl=new Set(["feint","stepover","elastico","pullback","stopgo","chop"]),Jl=new Set(["firsttouch","trap","stretch"]),Eu=new Set(["pass","tackle","slide","dive","throw","catch","flag","card","toss","header","chest","gkthrow","gkroll","parry","punch","getup","tip","footsave","spread","hurdle",...Zl,...Jl]),uv=new Set(["slide","dive","tackle","getup","gkroll"]),dv=[["Hips",.18],["Spine02",.18],["Spine01",.17],["LeftArm",.105],["RightArm",.105]],fv=new Set(["Spine02","Spine01","Spine","neck","Head","LeftShoulder","LeftArm","LeftForeArm","LeftHand","RightShoulder","RightArm","RightForeArm","RightHand"]),pv=Ia.length*4+5,hn=480,he=(o,t,e)=>Math.max(t,Math.min(e,o)),J=(o,t,e)=>o+(t-o)*e,Ft=o=>{const t=he(o,0,1);return t*t*(3-2*t)},Ee=(o,t,e)=>Math.min(Ft(o/t),Ft((1-o)/e)),_a=new Ai(0,0,0,"YXZ"),li=new He,Hi=new He,ya=new He,ge=new L,Ye=new L,xa=new L,Au=new L,va=new L,Ru=new L,Jr=new He,Cu=new He,fo=new L,Es=new L,ba=new L,po=new L,un=new L,dn=new L,Pu=new He,ii=new L,Ma=new L,Qr=new L(0,1,0),mv=new L(1,0,0);function Lu(o){o.updateMatrixWorld(!0);const t={};return o.traverse(e=>{if(!e.isBone)return;const i=e.getWorldQuaternion(new He),n=e.parent?e.parent.getWorldQuaternion(new He):new He;t[e.name]={local:e.quaternion.clone(),world:i,inverse:i.clone().invert(),parentWorld:n,parentInverse:n.clone().invert(),position:e.position.clone(),worldY:e.getWorldPosition(new L).y}}),t}function gv(o,t,e,i){const n=[];for(const s of o.tracks){const a=s.name.lastIndexOf("."),r=s.name.slice(0,a),l=s.name.slice(a+1);if(i==="brake"&&r==="Hips")continue;const c=t[r],h=e[r];if(!(!c||!h)){if(l==="quaternion"){const u=h.parentInverse.clone().multiply(c.parentWorld),p=c.local.clone().invert().multiply(c.parentInverse).multiply(h.parentWorld).multiply(h.local),f=new Float32Array(s.values.length);for(let d=0;d<f.length;d+=4)li.fromArray(s.values,d),Hi.copy(u).multiply(li).multiply(p).normalize().toArray(f,d);n.push(new ns(s.name,s.times,f))}else if(l==="position"&&r==="Hips"){const u=c.position.length()/Math.max(1e-6,c.worldY),p=h.position.length()/Math.max(1e-6,h.worldY),f=h.worldY/c.worldY,d=new Float32Array(s.values.length);for(let _=0;_<d.length;_+=3){ge.fromArray(s.values,_).sub(c.position).applyQuaternion(c.parentWorld);const g=ge.y/u*f;ge.set(0,g*p,0).applyQuaternion(h.parentInverse).add(h.position),ge.toArray(d,_)}n.push(new ss(s.name,s.times,d))}}}return new Io(o.name,o.duration,n)}function _v(o){const t=1-Ft(o/.95),e=Ft((o-1.65)/2.15),i=Ft((o-4.55)/3.4);return[t,(1-t)*(1-e),(1-t)*e*(1-i),(1-t)*e*i]}function yv(o,[t,e,i]){const s=Float32Array.from({length:61},(l,c)=>c/60),a=.065,r=o.tracks.map(l=>{const c=l.createInterpolant(),h=Array.from(c.evaluate(t)),u=Array.from(c.evaluate(0)),p=l.getValueSize(),f=new Float32Array(61*p),d=(_,g,m)=>{if(p===4)li.fromArray(_).slerp(Hi.fromArray(g),m).toArray(_);else for(let v=0;v<p;v++)_[v]=J(_[v],g[v],m)};for(let _=0;_<61;_++){const g=s[_],m=g<=.5?J(t,e,g*2):J(e,i,g*2-1),v=m>o.duration+.001?m%o.duration:Math.min(m,o.duration),b=Array.from(c.evaluate(v));i>o.duration+.005&&m<=o.duration&&v>o.duration-a&&d(b,u,Ft((v-o.duration+a)/a)),g>.9&&d(b,h,Ft((g-.9)/.1)),f.set(b,_*p)}return new l.constructor(l.name,s,f)});return new Io(o.name,1,r)}class xv{constructor(t,e){this.match=t,this.renderer=e,this.rigs=[],this.resources=new Set,this.disposed=!1,this.time=0,this.ready=!1,this._frames=[],this._rigOf=new Map,this._lastRecorded=-1,this.onProgress=null}async load(){const t=new Pc,e=Tu.length+Da.length;let i=0;const n=h=>(i+=1,this.onProgress?.(i/e),h),[s,a]=await Promise.all([Promise.all(Tu.map(h=>t.loadAsync(Ws(`assets/${h}`)).then(n))),Promise.all(Da.map(h=>t.loadAsync(Ws(`assets/anim/anim-${h}.glb`)).then(n)))]);if(this.disposed)return;const r=this.renderer?.capabilities?.getMaxAnisotropy?.()??4,l=a.map((h,u)=>({name:Da[u],clip:h.animations[0],rest:Lu(h.scene)}));this.variants=s.map(h=>{const u=h.scene,p=Lu(u);let f=null;u.traverse(T=>{T.isSkinnedMesh&&(f=T)}),f.geometry.computeBoundingBox();const d=f.geometry.boundingBox,_=d.getSize(new L),g=[new L(1,0,0),new L(0,1,0),new L(0,0,1)],m=[_.x,_.y,_.z],v=m.indexOf(Math.max(...m)),b=m.indexOf(Math.min(...m)),x=3-v-b;for(const T of["map","normalMap","roughnessMap"]){const A=f.material[T];A&&(A.anisotropy=Math.min(8,r),this.resources.add(A))}this.resources.add(f.geometry);const w={};for(const T of l)w[T.name]=gv(T.clip,T.rest,p,T.name);for(const[T,A]of Object.entries(wu))w[T]=yv(w[T],A);w.back=w.walk.clone();const C=this._handData(f,g[v],g[x],(d.min.dot(g[x])+d.max.dot(g[x]))/2);return{source:u,rest:p,material:f.material,animations:w,hands:C,up:g[v],side:g[x],minUp:d.min.dot(g[v]),height:m[v],centerSide:(d.min.dot(g[x])+d.max.dot(g[x]))/2}});const c=[...this.match.players,...this.match.officials??[],...this.match.extras??[]];for(const h of c)this._buildRig(h);for(let h=0;h<hn;h+=1)this._frames.push(new Float32Array(this.rigs.length*pv));this.ready=!0}_handData(t,e,i,n){const s=t.geometry,a=s.attributes.position,r=s.attributes.skinIndex,l=s.attributes.skinWeight,c=t.skeleton,h=_=>c.bones.findIndex(g=>g.name===_),u=new Float32Array(a.count*2),p={wrist:[],dir:[],axis:[],len:[]},f=new L,d=(_,g)=>{let m=0;for(let v=0;v<4;v+=1)r.getComponent(_,v)===g&&(m+=l.getComponent(_,v));return m};return["Left","Right"].forEach((_,g)=>{const m=h(`${_}Hand`),v=h(`${_}ForeArm`),b=[],x=new L,w=new L;let C=0;for(let U=0;U<a.count;U+=1)d(U,m)>=.5?(b.push(U),x.add(f.fromBufferAttribute(a,U))):d(U,v)>=.5&&(C+=1,w.add(f.fromBufferAttribute(a,U)));x.multiplyScalar(1/b.length),w.multiplyScalar(1/Math.max(1,C));const T=x.clone().sub(w).normalize();let A=1/0,S=-1/0;for(const U of b){const V=f.fromBufferAttribute(a,U).sub(x).dot(T);A=Math.min(A,V),S=Math.max(S,V)}const M=x.clone().addScaledVector(T,A),y=S-A,R=b.map(U=>{f.fromBufferAttribute(a,U).sub(M);const V=f.dot(T);return[U,V,f.clone().addScaledVector(T,-V)]}),D=[0,0,0,0,0,0];for(const[,U,V]of R)U<y*.3||(D[0]+=V.x*V.x,D[1]+=V.x*V.y,D[2]+=V.x*V.z,D[3]+=V.y*V.y,D[4]+=V.y*V.z,D[5]+=V.z*V.z);const k=new L(1,.7,.4);for(let U=0;U<40;U+=1)k.set(D[0]*k.x+D[1]*k.y+D[2]*k.z,D[1]*k.x+D[3]*k.y+D[4]*k.z,D[2]*k.x+D[4]*k.y+D[5]*k.z),k.addScaledVector(T,-k.dot(T)).normalize();const F=i.clone().multiplyScalar(Math.sign(n-M.dot(i))||1).sub(e),z=new L().crossVectors(T,k);z.dot(F)<0&&z.negate();const $=new L().crossVectors(T,z).normalize();for(const[U,V]of R)u[U*2]=g===0?-1:1,u[U*2+1]=he(V/y,0,1);p.wrist.push(M),p.dir.push(T),p.axis.push($),p.len.push(y)}),s.setAttribute("aHand",new Fe(u,2)),p}_buildRig(t){const e=this.variants[(t.look??0)%this.variants.length],i=cv(e.source),n=t.kit,s=e.material.clone();s.metalness=0,s.roughness=.8,s.metalnessMap=null,s.envMapIntensity=.5;const a={uUp:{value:e.up},uSide:{value:e.side},uMin:{value:e.minUp},uHeight:{value:e.height},uCenter:{value:e.centerSide},uJersey:{value:new pt(n.jersey)},uJersey2:{value:new pt(n.jersey2??n.jersey)},uShorts:{value:new pt(n.shorts)},uSocks:{value:new pt(n.socks)},uPattern:{value:n.pattern??0},uLong:{value:n.trousers?1:0},uSkin:{value:new pt(t.skinTint??16777215)},uCurl:{value:new Nt(.4,.4)},uHW0:{value:e.hands.wrist[0]},uHW1:{value:e.hands.wrist[1]},uHD0:{value:e.hands.dir[0]},uHD1:{value:e.hands.dir[1]},uHK0:{value:e.hands.axis[0]},uHK1:{value:e.hands.axis[1]},uHL:{value:new Nt(e.hands.len[0],e.hands.len[1])}};s.onBeforeCompile=d=>{Object.assign(d.uniforms,a),d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
          uniform vec3 uUp; uniform vec3 uSide; uniform float uMin; uniform float uHeight; uniform float uCenter; varying float vKitH; varying float vKitX;
          attribute vec2 aHand; uniform vec2 uCurl; uniform vec3 uHW0; uniform vec3 uHW1; uniform vec3 uHD0; uniform vec3 uHD1; uniform vec3 uHK0; uniform vec3 uHK1; uniform vec2 uHL;
          vec3 novaRot(vec3 v, vec3 k, float a) { float c = cos(a), s = sin(a); return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }
          vec3 novaCurl(vec3 p, float isPoint) {
            if (abs(aHand.x) < 0.5) return p;
            bool left = aHand.x < 0.0;
            vec3 w = left ? uHW0 : uHW1; vec3 d = left ? uHD0 : uHD1; vec3 k = left ? uHK0 : uHK1;
            float len = left ? uHL.x : uHL.y; float curl = left ? uCurl.x : uCurl.y;
            float t = aHand.y;
            if (t > 0.82) { vec3 o = (w + d * len * 0.82) * isPoint; p = o + novaRot(p - o, k, curl * 1.15); }
            if (t > 0.64) { vec3 o = (w + d * len * 0.64) * isPoint; p = o + novaRot(p - o, k, curl * 1.5); }
            if (t > 0.44) { vec3 o = (w + d * len * 0.44) * isPoint; p = o + novaRot(p - o, k, curl * 1.3); }
            return p;
          }`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal = novaCurl(objectNormal, 0.0);`).replace("#include <begin_vertex>",`#include <begin_vertex>
vKitH = (dot(position, uUp) - uMin) / uHeight; vKitX = (dot(position, uSide) - uCenter) / uHeight;
transformed = novaCurl(transformed, 1.0);`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uJersey; uniform vec3 uJersey2; uniform vec3 uShorts; uniform vec3 uSocks; uniform vec3 uSkin; uniform float uPattern; uniform float uLong; varying float vKitH; varying float vKitX;`).replace("#include <map_fragment>",`#include <map_fragment>
          {
            vec3 c = diffuseColor.rgb;
            float mx = max(c.r, max(c.g, c.b));
            float mn = min(c.r, min(c.g, c.b));
            float sat = mx > 0.0001 ? (mx - mn) / mx : 0.0;
            float cloth = (1.0 - smoothstep(0.24, 0.44, sat)) * smoothstep(0.035, 0.11, mx) * (1.0 - smoothstep(0.865, 0.885, vKitH));
            // Original club designs: stripes, hoops, sash or halves in the second colour.
            float band = 0.0;
            if (uPattern > 0.5 && uPattern < 1.5) band = step(0.5, fract(vKitX * 11.0 + 0.25));
            else if (uPattern > 1.5 && uPattern < 2.5) band = step(0.55, fract(vKitH * 16.0));
            else if (uPattern > 2.5 && uPattern < 3.5) band = 1.0 - smoothstep(0.04, 0.046, abs((vKitH - 0.7) - vKitX * 1.25));
            else if (uPattern > 3.5) band = step(0.0, vKitX);
            vec3 jersey = mix(uJersey, uJersey2, band);
            // Contrast collar and hem.
            float trim = smoothstep(0.845, 0.855, vKitH) + (1.0 - smoothstep(0.538, 0.548, vKitH));
            jersey = mix(jersey, uJersey2, clamp(trim, 0.0, 1.0) * 0.85);
            vec3 kit = mix(uSocks, uShorts, smoothstep(0.33, 0.36, vKitH));
            kit = mix(kit, jersey, smoothstep(0.525, 0.545, vKitH));
            vec3 dyed = kit * (0.3 + 0.62 * smoothstep(0.0, 0.8, mx));
            c = mix(c, dyed, cloth);
            float skin = smoothstep(0.36, 0.52, sat) * step(0.07, vKitH);
            // Staff wear long trousers: paint the bare legs in the shorts colour.
            float legs = skin * uLong * (1.0 - smoothstep(0.5, 0.53, vKitH));
            c = mix(c, c * uSkin, skin);
            c = mix(c, uShorts * (0.35 + mx * 0.9), legs);
            diffuseColor.rgb = c;
          }`)},s.customProgramCacheKey=()=>"nova-kit-v6",this.resources.add(s);const r={};i.traverse(d=>{d.isSkinnedMesh&&(d.material=s,d.castShadow=!t.noShadow,d.receiveShadow=!1,d.frustumCulled=!1),d.isBone&&(r[d.name]=d)}),i.updateMatrixWorld(!0);let l=null,c=null;if(t.number!=null){const d=e.rest.Spine01.worldY;l=this._textPlane(String(t.number),n.numberColor??16777215,.26,.26,104,(t.name??"").split(" ").pop().toUpperCase()),l.position.set(0,d+.05,-.14),l.rotation.y=Math.PI,i.add(l),l.updateMatrixWorld(!0),r.Spine01.attach(l),c=this._textPlane(String(t.number),n.numberColor??16777215,.09,.09,96),c.position.set(-.085,d+.06,.15),i.add(c),c.updateMatrixWorld(!0),r.Spine01.attach(c)}if(t.prop==="flag"){const d=new Qt(new $s(.012,.012,.55,6),new xi({color:2236962})),_=new Qt(new wi(.34,.26),new xi({color:16765471,emissive:16734751,emissiveIntensity:.25,side:_e}));_.position.set(.17,.14,0),d.add(_);const g=r.RightHand.getWorldPosition(new L),m=g.clone().sub(r.RightForeArm.getWorldPosition(new L)).normalize();d.quaternion.setFromUnitVectors(new L(0,1,0),m),d.position.copy(g).addScaledVector(m,.3),i.add(d),d.updateMatrixWorld(!0),r.RightHand.attach(d),this.resources.add(d.geometry),this.resources.add(d.material),this.resources.add(_.geometry),this.resources.add(_.material)}let h=null;if(t.id==="referee"){const d=new qi(.085,.12,.004).translate(.025,.052,0);h=new Qt(d,new Ze({color:16765952,toneMapped:!1})),r.RightHand.getWorldPosition(h.position);const _=h.position.clone().sub(r.RightForeArm.getWorldPosition(new L)).normalize();h.position.addScaledVector(_,.075),i.add(h),h.updateMatrixWorld(!0),r.RightHand.attach(h),h.visible=!1,this.resources.add(h.geometry),this.resources.add(h.material)}i.scale.setScalar(t.heightScale??1),t.visual.add(i);const u=new gm(i),p={};for(const d of Zr){const _=u.clipAction(e.animations[d]);_.play(),_.setEffectiveWeight(0),p[d]=_}const f=this.rigs.length;this.rigs.push({p:t,model:i,bones:r,variant:e,mixer:u,actions:p,offset:f*1.37,stridePhase:f*.27%1,shufflePhase:f*.3,locoSpeed:0,lean:0,tilt:0,y:0,procW:0,prevYaw:t.mesh.rotation.y,prevSpeed:0,turn:0,accel:0,look:0,shotW:0,curl:a.uCurl.value,stillT:0,shuffleW:0,armW:0,seed:f,card:h,uniforms:a,back:l,front:c}),this._rigOf.set(t,this.rigs[this.rigs.length-1])}refreshKits(){for(const t of this.rigs){const e=t.p,i=e.kit,n=t.uniforms;if(!e.team||!i||!n)continue;n.uJersey.value.set(i.jersey),n.uJersey2.value.set(i.jersey2??i.jersey),n.uShorts.value.set(i.shorts),n.uSocks.value.set(i.socks),n.uPattern.value=i.pattern??0;const s=i.numberColor??16777215;t.back?.userData.paint(String(e.number),s,(e.name??"").split(" ").pop().toUpperCase()),t.front?.userData.paint(String(e.number),s,"")}}_textPlane(t,e,i,n,s,a=""){const r=document.createElement("canvas");r.width=256,r.height=256;const l=r.getContext("2d"),c=new No(r),h=(d,_,g)=>{l.clearRect(0,0,256,256),l.textAlign="center",l.textBaseline="middle",l.fillStyle=`#${new pt(_).getHexString()}`,l.font=`900 ${s*1.75}px "Arial Narrow", Arial, sans-serif`,l.fillText(d,128,g?158:134),g&&(l.font='800 34px "Arial Narrow", Arial, sans-serif',l.fillText(g,128,38,236)),c.needsUpdate=!0};h(t,e,a),c.colorSpace=Ie,c.anisotropy=4;const u=new Ze({map:c,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,toneMapped:!1,opacity:.93}),p=new wi(i,n);this.resources.add(c),this.resources.add(u),this.resources.add(p);const f=new Qt(p,u);return f.userData.paint=h,f}setQuality(t){for(const e of this.rigs)e.p.extra&&(e.p.mesh.visible=t!=="low"||!!(e.p.benchSide||e.p.essential))}eyePosition(t,e){const i=this._rigOf.get(t)?.bones.Head;return i?(i.getWorldPosition(e),e.y+=.1,e):null}update(t=.016){if(!this.ready)return;const e=this.match;if(e.state.phase==="replay"&&e.replay){this._applyReplay(e.replay.cursor);return}this.time+=t;const i=e.ball;for(const n of this.rigs)this._animate(n,t,i);this._holdBall(i),e._replayCount!==this._lastRecorded&&(this._lastRecorded=e._replayCount,this._record((e._replayCount-1+hn*1e3)%hn))}_animate(t,e,i){const n=t.p,{actions:s,bones:a,variant:r}=t,l=this.match.state.phase==="intro"&&this.match._intro?.stage==="lineup",c=n.id==="referee"||!!n.lineSide||n.benchOfficial,h=l?0:n.animSpeed||0,u=n.act||"",p=!!n.isGoalkeeper,f=p&&n.hasBall&&i.inHands;t.locoSpeed=l||h<.13?0:J(t.locoSpeed,h,1-Math.exp(-16*e));let[d,_,g,m]=_v(t.locoSpeed),v=0;if(n.velocity&&h>.5){const ut=(n.velocity.x*n.facing.x+n.velocity.z*n.facing.z)/h,et=Ft((-ut-.25)/.5)*(1-Ft((h-4.2)/1.7));v=(1-d)*et,_*=1-et,g*=1-et,m*=1-et}let b=0;if((p||n.jockeying)&&!u&&!n.hasBall&&h>.7&&h<5.5){const ut=(n.velocity.x*n.facing.z-n.velocity.z*n.facing.x)/h,et=Math.abs(ut);et>.3&&(t.strafeDir=Math.sign(ut)),b=Ft((et-.5)/.3)*.8}if(t.shuffleW=h<.13?0:J(t.shuffleW,b,1-Math.exp(-8*e)),h>.14){const ut=(1.35*_+2.3*g+4.5*m+1.45*v)/Math.max(.01,1-d),et=n.hasBall&&!p?J(.89,.78,n.dribble?.near??0):1,yt=this.match.state.phase==="intro"?.95+t.seed%7*.018:1;t.stridePhase=(t.stridePhase+e*Math.min(2.7,h/Math.max(1.05,ut*et*yt)))%1,t.shufflePhase+=e*he(h/2.5,.4,1.35)}t.stillT=h<1.2?t.stillT+e:0;let x=null,w=0;if(!c&&!p&&!u&&this.match.state.phase==="playing"&&!this.match.setPiece){const ut=n.mesh.rotation.y,et=Math.atan2(Math.sin(ut-t.prevYaw),Math.cos(ut-t.prevYaw));if(!t.transition&&h>2.5&&Math.abs(et)>2.6*e?t.transition={name:et>0?"cmu-cut-left":"cmu-cut-right",time:0,duration:.43}:!t.transition&&h>.85&&h<5&&t.accel<-5&&(t.transition={name:"brake",time:0,duration:.42}),t.transition){const yt=t.transition;yt.time+=e,yt.time<yt.duration&&h>.5?(x=yt,w=.38*Ee(yt.time/yt.duration,.22,.42)):t.transition=null}}else t.transition=null;let C=null,T=0,A=0,S=!1;const M=n.actT/Math.max(.05,n.actDur),y=hv[u];if(u==="kick"&&Math.abs(n.actParam)>=1){const ut=n.actParam<0?"left":"right";C=Math.abs(n.actParam)>1?`cmu-running-strike-${ut}`:`cmu-strike-${ut}`,T=n.actT,A=Ee(M,.14,.32)}else if(y)C=y[0],T=y[1]+n.actT*y[2],A=y[3]*Ee(M,y[4],y[5]);else if(u==="celebrate"){const ut=n.actParam;h<1.2?(ut===2&&t.stillT<2.1?(C="backflip",T=t.stillT):ut>=2?(C="fistpump",T=t.stillT,S=!0):ut<.5?(C="victory",T=n.actT,S=!0):(C=t.seed%3===0?"fistpump":"cheer",T=n.actT+t.offset*.4,S=!0),A=Ft(t.stillT/.3)):ut===1&&t.seed%2===0&&(C="claprun",T=this.time+t.offset,A=.9,S=!0)}else u==="applaud"&&(C="cheer",T=this.time+t.offset,A=1,S=!0);t.card&&(t.card.visible=u==="card"&&M>.08&&M<.95),t.shotW=A;const R=n.managerOf||t.seed%4===1?"hiphand":t.seed%4===3?"breath":null,D=this.match.state.phase,k=D==="dead"||D==="goal"||!!this.match.setPiece,F=R&&!l&&!c&&!p&&!u&&(n.managerOf||k&&!n.static)&&t.stillT>1.2?1:0;t.idleMix=l?0:J(t.idleMix||0,F,1-Math.exp(-2.5*e)),t.limp=J(t.limp||0,n.limpT>0&&h<4.5&&h>.3?1:0,1-Math.exp(-4*e));const z=(1-A)*(1-w),$=t.shuffleW,U=t.weights||(t.weights={});for(const ut of Zr)U[ut]=0;U.idle=d*z*(1-t.idleMix),R&&(U[R]=d*z*t.idleMix),U.walk=_*z*(1-$)*(1-t.limp),U["cmu-jog"]=g*z*(1-$)*(1-t.limp),U.limp=(_+g)*z*(1-$)*t.limp,U.sprint=m*z*(1-$),U.back=v*z*(1-$),U[(t.strafeDir||1)>0?"strafel":"strafer"]=(1-d)*z*$,C&&(U[C]+=A),x&&(U[x.name]+=w);for(const ut of Zr){const et=s[ut],yt=U[ut];if(et.setEffectiveWeight(yt),yt<=0)continue;const Yt=et.getClip().duration;let Gt;ut===C?Gt=S?T%Yt:he(T,0,Yt-.02):ut===x?.name?Gt=ut==="brake"?.72+x.time*1.55:x.time/x.duration*Yt:ut==="idle"?Gt=l||c?0:(this.time*.9+t.offset*2.3)%Yt:ut==="back"?Gt=(1-t.stridePhase)%1:Object.hasOwn(wu,ut)?Gt=t.stridePhase:ut==="strafel"||ut==="strafer"||ut==="limp"?Gt=t.shufflePhase*.95%Yt:Gt=(this.time*.8+t.offset*3.1)%Yt,et.time=Gt}t.mixer.update(0);const V=p&&!u&&D!=="intro",Q=this.match.setPiece?.keeper===n,xt=u==="celebrate"&&h>=1.2&&!C,zt=n.hasBall&&!f&&!u&&!this.match.setPiece&&h>1.2,te=l||n.benchPlayer||n.filming||n.perimeterRole||c&&h<.25||Eu.has(u)||xt?1:n.shielding?.88:zt?.33*Ft(h/5):V?f?1:.75*(1-Ft((h-2)/3))*(1-t.shuffleW*.5):0;t.procW=l||Q?1:J(t.procW,te,1-Math.exp(-(te>t.procW?22:9)*e));let re=0,q=0,lt=0;if(t.procW>.01){const ut=this._pose(t,i,l),et=f&&!u;for(const yt of Ia){const Yt=ut[yt];if(!Yt||et&&!fv.has(yt))continue;const Gt=r.rest[yt];_a.set(Yt[0],Yt[1],Yt[2]),li.setFromEuler(_a),ya.copy(Gt.local).multiply(Gt.inverse).multiply(li).multiply(Gt.world),a[yt].quaternion.slerp(ya,t.procW)}et||(re=ut.rootX*t.procW,q=ut.rootZ*t.procW,lt=ut.rootY*t.procW),(Q||uv.has(u))&&a.Hips.position.lerp(r.rest.Hips.position,t.procW)}let ot="",It=null,Dt=0;n.jostleT>0&&!Eu.has(u)?(ot=n.jostleSide<0?"Left":"Right",It=[[.25,0,(ot==="Left"?1:-1)*.3],[-.55,0,0]],Dt=.85):u==="call"&&(ot=t.seed%2?"Left":"Right",It=[[-.35,0,(ot==="Left"?1:-1)*(2+Math.sin(this.time*9+t.offset)*.18)],[-.3,0,0]],Dt=Ee(M,.2,.3)),t.armW=J(t.armW,Dt,1-Math.exp(-10*e)),It&&(t.armPose=It,t.armSide=ot),t.armW>.02&&t.armPose&&["Arm","ForeArm"].forEach((ut,et)=>{const yt=t.armSide+ut,Yt=r.rest[yt],Gt=t.armPose[et];_a.set(Gt[0],Gt[1],Gt[2]),li.setFromEuler(_a),ya.copy(Yt.local).multiply(Yt.inverse).multiply(li).multiply(Yt.world),a[yt].quaternion.slerp(ya,t.armW)});let Lt=h>5?.82:h>1.5?.62:.4,se=Lt;p&&(!u||u==="dive"||u==="parry"||u==="tip"||u==="footsave"||u==="spread"||u.startsWith("catch"))?Lt=se=f?.3:.06:u==="kick"||u==="pass"||u==="punt"?Lt=se=.66:u==="header"||u==="punch"?Lt=se=.92:u==="tackle"||u==="slide"||u==="trap"||u==="chest"?Lt=se=.18:u==="fall"||u==="stumble"||u==="getup"||u==="applaud"||u==="protest"||u==="organise"?Lt=se=.1:u==="celebrate"?Lt=se=n.actParam<.5?.08:.95:u==="despair"?Lt=se=.3:u==="gkthrow"||u==="gkroll"||u==="throw"?Lt=se=.28:u==="flag"?se=.95:u==="card"&&(se=.55),n.prop==="flag"&&(se=.95),t.armW>.3&&(t.armSide==="Left"?Lt=.08:se=.08);const ee=Math.sin(t.offset*5.1)*.07,N=1-Math.exp(-9*e);t.curl.x=J(t.curl.x,he(Lt+ee,0,1),N),t.curl.y=J(t.curl.y,he(se-ee,0,1),N);const pe=n.mesh.rotation.y;let Et=pe-t.prevYaw;if(Et>Math.PI?Et-=Math.PI*2:Et<-Math.PI&&(Et+=Math.PI*2),e>0){const ut=1-Math.exp(-8*e);t.turn=J(t.turn,he(Et/e,-6,6),ut),t.accel=J(t.accel,he((h-t.prevSpeed)/e,-14,14),ut)}t.prevYaw=pe,t.prevSpeed=h;const ie=1-t.procW;if(re+=he(t.accel*.011,-.13,.16)*ie,q+=he(-t.turn*h*.0075,-.24,.24)*ie,!l&&!n.static&&(c||ie>.3)&&A<.5){const ut=i.position.x-n.position.x,et=i.position.z-n.position.z;let yt=Math.atan2(ut,et)-pe;for(;yt>Math.PI;)yt-=Math.PI*2;for(;yt<-Math.PI;)yt+=Math.PI*2;const Yt=Math.hypot(ut,et);let Gt=Math.abs(yt)>2.6?Math.sign(yt)*.5:he(yt,-1.2,1.2),I=he(Math.atan2(1.62-i.position.y,Math.max(Yt,.6)),-.7,.55);n.hasBall?(Gt=0,I=.12+.2*Math.max(0,Math.sin(this.time*2.1+t.offset))):Yt>30&&(I*=.4),c&&(Gt=he(Gt,-.5,.5),I*=.38);const E=1-Math.exp(-5*e),G=c?.95:ie;t.look=J(t.look,Gt*G,E),t.nod=J(t.nod||0,I*G,E),this._twist(a.Spine02,r.rest.Spine02,t.look*.12),this._twist(a.neck,r.rest.neck,t.look*.38),this._twist(a.Head,r.rest.Head,t.look*.42),this._nod(a.neck,r.rest.neck,t.nod*.4),this._nod(a.Head,r.rest.Head,t.nod*.6)}if(l){const ut=(t.seed*13%11-5)*.006,et=Math.sin(this.time*(1.18+t.seed%5*.11)+t.offset*3.3)*.016,yt=Ee(he(((this.match._intro.t??16)-16-t.seed*1.71%7.4)/1.35,0,1),.34,.5);this._twist(a.neck,r.rest.neck,ut+(t.seed%2?.09:-.09)*yt),this._nod(a.Head,r.rest.Head,et+(t.seed%3===1?.085:.012)*yt),this._nod(a.Spine02,r.rest.Spine02,et*.55),a.Hips.position.copy(r.rest.Hips.position),t.look=t.nod=t.turn=t.accel=0,re=lt=0,q=ut}const Tt=l?1:1-Math.exp(-16*e);t.lean=J(t.lean,re,Tt),t.tilt=J(t.tilt,q,Tt),t.y=J(t.y,lt,Tt),n.visual.rotation.set(t.lean,0,t.tilt),n.visual.position.y=t.y,n.benchPlayer&&(n.visual.position.z=.55*(t.benchRise??0)),p&&(n.visual.position.x=0,(u==="dive"||u==="getup")&&this._stabilizeKeeperDive(t,i,M)),i.holder===n&&!n.kick&&this._matchBootContact(t,i,M,h),(c||l)&&this._positionArms(t,M,h,l)}_aimBone(t,e,i,n,s,a=1){t.getWorldPosition(Au),e.getWorldPosition(va),va.sub(Au).normalize(),Ru.set(i,n,s).normalize().lerp(va,1-a).normalize(),t.parent.getWorldQuaternion(Jr),Cu.setFromUnitVectors(va,Ru),Hi.copy(Jr).invert().multiply(Cu).multiply(Jr),t.quaternion.premultiply(Hi)}_stabilizeKeeperDive(t,e,i){const{p:n,bones:s}=t,{kind:a}=n.dive,r=gn[a],l=n.act==="getup";n.mesh.worldToLocal(s.Hips.getWorldPosition(ge)),n.visual.position.x-=ge.x;let c=1/0;for(const[f,d]of dv)c=Math.min(c,s[f].getWorldPosition(ge).y-d);const h=Ft((i-(r.land-.12))/.12),u=a==="rotation"?.89*Ft((i-.14)/.19):a==="low"?.72*Ft((i-r.push)/.2):0,p=l?1-Ft(i/.66):Math.max(h,u);n.visual.position.y-=c<0?c:c*p,this._matchKeeperHands(t,e,i);for(const f of["Left","Right"]){const d=s[`${f}Foot`];d.getWorldPosition(ii),ii.y<.085&&(ii.y=.085,this._reachLimb(s[`${f}UpLeg`],s[`${f}Leg`],d,ii,n.facing.x,.4,n.facing.z,1));const _=s[`${f}Hand`];_.getWorldPosition(ii),ii.y<.065&&(ii.y=.065,this._reachLimb(s[`${f}Arm`],s[`${f}ForeArm`],_,ii,0,1,-n.attackDirection,1))}}_matchKeeperHands(t,e,i){const{p:n,bones:s}=t,{kind:a,upperHand:r,direction:l}=n.dive,c=gn[a],h=n.diveContact,u=e.holder===n&&e.inHands,p=n.act==="getup",f=h&&!p?Math.max(0,n.actT-h.time):0;if(!u&&(p||(h?f>.15:!e.shotTeam||e.holder)))return;const d=u||h?u?1:1-Ft(f/.15):Ee(i,c.contact*.86,.48);if(d<.02)return;Ma.copy(h?.point??e.position),h||Ma.addScaledVector(e.velocity,.015);const _=u?p?1:Ft(f/(a==="extension"?.28:.23)):0;_>0&&(s.Spine01.getWorldPosition(ge),ge.addScaledVector(n.facing,.24),ge.y=Math.max($t+.02,ge.y),Ma.lerp(ge,_));const g=n.actParam>0?"Left":"Right",m=g==="Left"?"Right":"Left",v=r?m:g,b=(a==="low"||a==="rotation")&&_<.8;for(const x of[v,v===g?m:g]){const w=x===v,C=d*(!w&&!u&&(a==="extension"||a==="rotation"&&h)?.28:1),T=s[`${x}Arm`],A=s[`${x}ForeArm`],S=s[`${x}Hand`],M=(x==="Left"?1:-1)*$t*.74;ii.copy(Ma),b?(ii.y+=w?.025:.09,w&&ii.addScaledVector(n.facing,-.07)):ii.x+=M*n.attackDirection,S.getWorldPosition(ge),A.getWorldPosition(Ye),ge.sub(Ye).normalize(),ii.addScaledVector(ge,-.083),ii.y=Math.max(ii.y,.06),this._reachLimb(T,A,S,ii,-l,.45,-n.attackDirection*.35,C)}}_matchBootContact(t,e,i,n){const{p:s,bones:a}=t;let r=s.actParam,l=0,c=!1;if(Jl.has(s.act))l=Ee(i,.12,.72)*.95;else if(Zl.has(s.act)){const d=i<.47;c=d&&s.act==="pullback";const _=s.act==="elastico"||s.act==="chop";(d||_)&&(r*=-1);const g=i<.44?.29:s.act==="chop"?.51:.62;l=(1-Ft(Math.abs(i-g)/.16))*(d&&(s.act==="feint"||s.act==="stepover")?0:.9)}else!s.act&&n>1.1&&!this.match.setPiece&&!s.shielding&&(r=s.dribble?.side,l=.78*(1-Ft(Math.abs((s.dribble?.phase??1)-.16)/.19)));if(!r||l<.015)return;const h=r>0?"Left":"Right",u=a[`${h}UpLeg`],p=a[`${h}Leg`],f=a[`${h}Foot`];f.getWorldPosition(ba),f.getWorldQuaternion(Pu),a[`${h}ToeBase`].getWorldPosition(ge).sub(ba),po.copy(e.position).addScaledVector(s.facing,c?-.025:-.115).sub(ge),po.y+=c?.11:-.025,this._reachLimb(u,p,f,po,s.facing.x,0,s.facing.z,l),f.parent.getWorldQuaternion(li),f.quaternion.slerp(li.invert().multiply(Pu),l)}_reachLimb(t,e,i,n,s,a,r,l){t.getWorldPosition(fo),e.getWorldPosition(Es),i.getWorldPosition(ba);const c=fo.distanceTo(Es),h=Es.distanceTo(ba);un.subVectors(n,fo);const u=he(un.length(),Math.abs(c-h)+.025,c+h-.012);un.normalize();const p=(c*c-h*h+u*u)/(2*u);dn.subVectors(Es,fo),dn.addScaledVector(un,-dn.dot(un)),dn.lengthSq()<.0025&&(dn.set(s,a,r),dn.addScaledVector(un,-dn.dot(un))),dn.normalize().multiplyScalar(Math.sqrt(Math.max(0,c*c-p*p))),Ye.copy(un).multiplyScalar(p).add(dn),po.copy(fo).addScaledVector(un,u),this._aimBone(t,e,Ye.x,Ye.y,Ye.z,l),e.getWorldPosition(Es),Ye.subVectors(po,Es),this._aimBone(e,i,Ye.x,Ye.y,Ye.z,l)}_positionArms(t,e,i,n){const{p:s,bones:a,card:r}=t,l=-s.facing.z,c=s.facing.x,h=["card","flag","toss","call"].includes(s.act),u=h?Ee(e,.18,.2):0,p=n||h||s.prop==="flag"?1:1-Ft((i-.22)/1.45);if(p<=0)return;const f=h?0:Math.sin(s.gait)*he(i/7,0,1)*.55;for(const d of["Right","Left"]){const _=d==="Right"?1:-1,g=d==="Right"?u:0,m=_*J(.2+(t.seed+(_>0?3:0))%5*.016,s.act==="flag"?.61:.3,g),v=J(f*_,s.act==="toss"?.85:.24,g),b=J(-1,s.act==="toss"?.12:.9,g),x=a[`${d}Arm`],w=a[`${d}ForeArm`],C=a[`${d}Hand`];this._aimBone(x,w,l*m+s.facing.x*v,b,c*m+s.facing.z*v,p);const T=J(.17*_,.18*_,g),A=J(.21+Math.abs(f)*.4,.34,g);this._aimBone(w,C,l*T+s.facing.x*A,J(-.93,.96,g),c*T+s.facing.z*A,p)}r?.visible&&(r.getWorldPosition(ge),Ye.copy(ge).add(s.facing),r.lookAt(Ye))}_holdBall(t){const e=t.holder;if(!e)return;const i=this.match.setPiece,n=i&&i.taker===e&&i.kind==="throw-in";if(!t.inHands&&!n)return;const s=this._rigOf.get(e);if(!s)return;const a=s.bones,r=(c,h)=>(a[`${c}Hand`].getWorldPosition(h),a[`${c}ForeArm`].getWorldPosition(xa),xa.subVectors(h,xa).normalize(),h.addScaledVector(xa,.1)),l=e.act;if(l==="gkthrow"||l==="gkroll")r("Right",ge);else{r("Left",ge),r("Right",Ye);const c=ge.distanceTo(Ye);if(n||!l){const h=c-.25;s.gripPrev!=null&&h>.01&&c>s.gripPrev+4e-4&&(s.gripDir=-(s.gripDir||1)),s.grip=he((s.grip||0)+(s.gripDir||1)*h*.35,-.6,.6),s.gripPrev=c}ge.add(Ye).multiplyScalar(.5),c>.34&&!n&&ge.addScaledVector(e.facing,.06)}if(l==="punt"){const c=Ft((e.actT-.14)/.28);Ye.copy(e.position).addScaledVector(e.facing,.62),Ye.y=.3,ge.lerp(Ye,c)}ge.y=Math.max($t,ge.y),t.position.copy(ge)}_twist(t,e,i){Math.abs(i)<.002||(li.setFromAxisAngle(Qr,i),Hi.copy(e.parentInverse).multiply(li).multiply(e.parentWorld),t.quaternion.premultiply(Hi))}_nod(t,e,i){Math.abs(i)<.002||(li.setFromAxisAngle(mv,i),Hi.copy(e.parentInverse).multiply(li).multiply(e.parentWorld),t.quaternion.premultiply(Hi))}_record(t){const e=this._frames[t];let i=0;for(const n of this.rigs){for(const a of Ia)n.bones[a].quaternion.toArray(e,i),i+=4;const s=n.variant.rest.Hips;e[i++]=n.bones.Hips.position.dot(ge.copy(Qr).applyQuaternion(s.parentInverse)),e[i++]=n.lean,e[i++]=n.tilt,e[i++]=n.p.visual.position.y,e[i++]=n.p.visual.position.x}}_applyReplay(t){const e=Math.floor(t),i=t-e,n=this._frames[(e%hn+hn)%hn],s=this._frames[((e+1)%hn+hn)%hn];let a=0;for(const r of this.rigs){for(const u of Ia)li.fromArray(n,a),Hi.fromArray(s,a),r.bones[u].quaternion.copy(li).slerp(Hi,i),a+=4;const l=r.variant.rest.Hips,c=ge.copy(Qr).applyQuaternion(l.parentInverse),h=J(n[a],s[a],i);a+=1,r.bones.Hips.position.copy(l.position).addScaledVector(c,h-l.position.dot(c)),r.lean=J(n[a],s[a],i),r.tilt=J(n[a+1],s[a+1],i),r.y=J(n[a+2],s[a+2],i),r.p.visual.rotation.set(r.lean,0,r.tilt),r.p.visual.position.y=r.y,r.p.visual.position.x=J(n[a+3],s[a+3],i),a+=4}}_pose(t,e,i){const n=t.p,s=n.animSpeed||0,a=he(s/8.6,0,1),r=Ft(s/1.2),l=t.stridePhase*Math.PI*2+Math.PI/2,c=Math.sin(l),h=Math.cos(l),u=this.time+t.offset,p=Math.sin(u*1.6)*.02,f={rootX:0,rootZ:0,rootY:0},d=(y,R=0,D=0,k=0)=>{f[y]=[R,D,k]};if(n.benchPlayer){const y=n.act==="benchcheer",R=y||n.act==="benchreact",D=.14*n.benchIndex,k=R?Ee(he((n.actT-D)/n.actDur,0,1),.09,.22):0,F=y&&n.benchIndex%2===0?k:0;t.benchRise=F;const z=1-F;f.rootY=-.42*z,f.rootX=.13*z+(R&&!y?.17*k:0);const $=y?k*(.5+.5*Math.sin(u*13)):0;for(const U of["Left","Right"]){const V=U==="Left"?1:-1;d(`${U}UpLeg`,-1.36*z,0,V*.14*z),d(`${U}Leg`,1.46*z,0,0),d(`${U}Foot`,-.1*z,0,0),d(`${U}Arm`,-.35*z-.85*k*Number(y),0,V*(-.22-.28*$)),d(`${U}ForeArm`,-.55*z-.62*$,0,0)}return d("Head",R&&!y?.2*k:-.1*k,0,0),f}if(n.filming){const y=Math.atan2(e.position.z-n.position.z,Math.max(1,e.position.x-n.position.x)),R=n.perimeterRole==="photographer",D=n.perimeterRole?0:he(y*.36,-.3,.3);return d("Spine02",R?.05:.14,D,0),d("Head",-.08,D,0),d("LeftArm",R?-1.22:-.92,0,-.3),d("RightArm",R?-1.16:-.83,0,.32),d("LeftForeArm",R?-.98:-.55,0,0),d("RightForeArm",R?-1.04:-.68,0,0),f}if(n.perimeterRole){const y=Math.sin(u*.63+t.seed)*.33;d("Head",n.perimeterRole==="technician"?.26:-.04,y,0),d("neck",0,y*.25,0),d("Spine02",n.perimeterRole==="technician"?.12:p,y*.18,0)}const _=J(.3,.95,a)*r,g=J(.55,1.95,a)*r,m=J(.25,1,a)*r,v=(.05+.2*a)*r,b=(1-r)*.06,x=[["Left",c,h],["Right",-c,-h]];for(const[y,R,D]of x)d(`${y}UpLeg`,-R*_-.22*a*r-b,0,0),d(`${y}Leg`,g*(.12+.88*Math.max(0,D*.92+R*.38))+b*2,0,0),d(`${y}Foot`,he(-R*.35,-.3,.35)*r-b,0,0);const w=.56,C=(.25+1.15*a)*r+.12;if(d("LeftArm",c*m,0,-w-.08*a),d("RightArm",-c*m,0,w+.08*a),d("LeftForeArm",-C-Math.max(0,-c)*.35*a,0,0),d("RightForeArm",-C-Math.max(0,c)*.35*a,0,0),d("Hips",0,c*.1*r,0),d("Spine02",v*.6+p,-c*.08*r,0),d("Spine01",v*.4+p,-c*.1*r,0),d("Spine",p,-c*.06*r,0),d("neck",-v*.5,0,0),d("Head",-v*.3,0,0),f.rootY=(-.035*a+Math.cos(l*2)*.028*a)*r-b*.2,f.rootX=v*.35,n.shielding&&!n.act){f.rootX=.12,f.rootY=-.08;for(const y of["Left","Right"]){const R=y==="Left"?1:-1;f[`${y}UpLeg`][0]-=.16,f[`${y}UpLeg`][2]+=R*.13,f[`${y}Leg`][0]+=.28,d(`${y}Arm`,.03,0,-R*.36),d(`${y}ForeArm`,-.45,0,0)}return d("Spine02",.19,.12,0),f}if(n.isGoalkeeper&&!n.act&&!i)if(n.hasBall&&e.inHands){const y=t.grip||0;d("LeftArm",-.62,0,-.42+y),d("RightArm",-.62,0,.42-y),d("LeftForeArm",-1.18,0,0),d("RightForeArm",-1.18,0,0),d("Spine02",.06+p,0,0),d("Head",-.12,Math.sin(u*.9)*.35,0)}else{const y=1-a*.7,R=this.match.setPiece?.keeper===n?0:Math.sin(u*5.5)*.012*y;f.LeftUpLeg[0]-=.36*y,f.RightUpLeg[0]-=.36*y,f.LeftUpLeg[2]=.2*y,f.RightUpLeg[2]=-.2*y,f.LeftLeg[0]+=.66*y,f.RightLeg[0]+=.66*y,f.LeftFoot[0]-=.28*y,f.RightFoot[0]-=.28*y,f.Spine02[0]+=.26*y,f.Spine01[0]+=.08*y,d("LeftArm",-.5*y,0,-.18),d("RightArm",-.5*y,0,.18),d("LeftForeArm",-.95,0,0),d("RightForeArm",-.95,0,0),d("neck",-.2*y,0,0),f.rootY+=-.1*y+R}const A=n.act;if(!A)return f;const S=Math.max(.05,n.actDur),M=he(n.actT/S,0,1);if(A==="kick"||A==="pass"){const y=A==="kick"?he(n.actParam||1,.6,1):.55,R=Ee(M,.08,.35),D=he((M+.14)/.6,0,1),k=D<.3?J(.5,.95,D/.3):J(.95,-1.35,Ft((D-.3)/.45)),F=D<.3?1.5:J(1.5,.08,Ft((D-.3)/.35));d("RightUpLeg",k*y*R,A==="pass"?-.45*R:0,.08*R),d("RightLeg",F*y*R,0,0),d("RightFoot",(A==="pass"?0:.45)*R,A==="pass"?-.6*R:0,0),d("LeftUpLeg",-.12*R,0,0),d("LeftLeg",.3*R,0,0),d("LeftFoot",-.15*R,0,0),d("LeftArm",.5*R,0,J(-w,.55*y,R)),d("RightArm",-.7*y*R,0,w+.1),d("LeftForeArm",-.3,0,0),d("RightForeArm",-.5,0,0),d("Spine02",J(v,-.12*y,R),.25*y*R,0),d("Spine01",0,.2*y*R,-.1*y*R),f.rootX=J(f.rootX,-.06,R),f.rootY=J(f.rootY,-.02,R)}else if(A==="tackle"){const y=Ee(M,.2,.4);d("RightUpLeg",-1.15*y,0,0),d("RightLeg",.15*y,0,0),d("RightFoot",.3*y,0,0),d("LeftUpLeg",.35*y,0,0),d("LeftLeg",.9*y,0,0),d("Spine02",.3*y,0,0),d("LeftArm",.4*y,0,-.2),d("RightArm",.6*y,0,.2),f.rootY=-.2*y}else if(A==="slide"){const y=Ee(M,.14,.28);f.rootX=-1.22*y,f.rootY=-.06*y,f.rootZ=.2*y,d("RightUpLeg",-.35*y,0,0),d("RightLeg",.05,0,0),d("RightFoot",.5*y,0,0),d("LeftUpLeg",-.9*y,0,.25*y),d("LeftLeg",1.7*y,0,0),d("LeftFoot",0,0,0),d("Spine02",.55*y,0,0),d("Spine01",.35*y,0,0),d("neck",.3*y,0,0),d("LeftArm",.9*y,0,.1),d("RightArm",.5*y,0,.9*y),d("LeftForeArm",-.4,0,0),d("RightForeArm",-.2,0,0)}else if(A==="dive"||A==="getup")this._poseKeeperDive(n,f,d,M,w);else if(Zl.has(A)){const y=Math.sign(n.actParam),R=y>0?"Left":"Right",D=y>0?"Right":"Left",k=1-Ft(Math.abs(M-.32)/.32),F=1-Ft(Math.abs(M-.67)/.33),z=A==="stepover"||A==="elastico",$=A==="pullback"||A==="stopgo",U=A==="chop"||A==="elastico",V=U?D:R;d(`${D}UpLeg`,-(z?.69:$?.77:.47)*k,y*(z?J(-.65,.72,Ft(M/.6)):-.19)*k,-y*(z?.34:.22)*k),d(`${D}Leg`,(z||$?1.1:.63)*k,0,0),U?(f[`${D}UpLeg`][0]+=(A==="chop"?.36:-.49)*F,f[`${D}UpLeg`][2]+=y*(A==="chop"?.34:.21)*F,f[`${D}Leg`][0]+=.8*F):(d(`${R}UpLeg`,-.63*F,-y*.28*F,y*.21*F),d(`${R}Leg`,.18*k+.79*F,0,0)),d(`${V}Foot`,.14*F,-y*.33*F,0),d(`${V}ToeBase`,-.13*F,0,0),d("Hips",0,y*(-.19*k+.23*F),0),d("Spine02",.17*k+.2*F,y*(.27*k-.15*F),y*.12*k),d("Spine01",.07*F,y*(.16*k-.13*F),-y*.08*F),d("neck",.19*k-.08*F,-y*.12*k,0),d("Head",.11*k-.11*F,y*.2*F,0),d(`${R}Arm`,-.25*k-.51*F,0,-y*(w-.3*k-.09*F)),d(`${D}Arm`,.35*F-.42*k,0,y*(w-.12*k-.33*F)),d(`${R}ForeArm`,-.62*F-.27*k,0,0),d(`${D}ForeArm`,-.72*k-.41*F,0,0),f.rootY=(A==="chop"?.11*F:-.02*F)-.06*k,f.rootZ=y*(.17*k-.11*F)}else if(A==="hurdle"){const y=Math.sign(n.actParam)||1,R=Math.sin(Math.PI*M),D=y>0?"Left":"Right",k=y>0?"Right":"Left",F=Math.sin(2*Math.PI*M);f.rootY=.45*R,f.rootZ=y*.19*R,d(`${D}UpLeg`,-1.02*R,0,y*.18*R),d(`${D}Leg`,1.08*R,0,0),d(`${k}UpLeg`,-.21*R,0,-y*.14*R),d(`${k}Leg`,1.5*R,0,0),d("Spine02",.23*R,y*.45*F,0),d("LeftArm",-.46*R,0,-w+.32*R),d("RightArm",-.46*R,0,w-.32*R)}else if(A==="header"){const y=he(n.actParam,0,.8),R=Ee(M,.14,.3),D=M/.42,k=Math.sin(he(M/.86,0,1)*Math.PI),F=D<1?J(0,-.45,Ft(D)):J(-.45,.55,Ft((D-1)/.3));f.rootY=k*y-(1-k)*.06*R,f.rootX=F*.22*R,d("Spine02",F*.5*R,0,0),d("Spine01",F*.4*R,0,0),d("Spine",F*.2*R,0,0),d("neck",F*.55*R,0,0),d("Head",F*.45*R,0,0);const z=D<1?J(-.45,.4,Ft(D)):.55;d("LeftArm",z*R,0,J(-w,.12,R)),d("RightArm",z*R,0,J(w,-.12,R)),d("LeftForeArm",-1.2*R,0,0),d("RightForeArm",-1.2*R,0,0),d("LeftUpLeg",-.2*R*k,0,0),d("RightUpLeg",.3*R*k,0,0),d("LeftLeg",.75*R*k,0,0),d("RightLeg",1.05*R*k,0,0)}else if(A==="chest"){const y=Ee(M,.08,.52),R=Ft((M-.15)/.42);d("Spine02",J(-.25,.09,R)*y,0,0),d("Spine01",J(-.13,.12,R)*y,0,0),d("Head",J(-.06,.33,R)*y,0,0),d("LeftArm",.35*y,0,J(-w,.25,y)),d("RightArm",.35*y,0,J(w,-.25,y)),d("LeftForeArm",-.45*y,0,0),d("RightForeArm",-.45*y,0,0),f.LeftLeg[0]+=.3*y,f.RightLeg[0]+=.3*y,f.rootY-=.07*y}else if(Jl.has(A)){const y=Ee(M,.15,.55),R=n.actParam>0?"Left":"Right",D=R==="Left"?"Right":"Left",k=R==="Left"?1:-1,F=A==="stretch",z=Ft((M-.21)/.3);d(`${R}UpLeg`,-(F?.83:.32)*y,-k*.33*y,k*(F?.28:.14)*y),d(`${R}Leg`,J(F?.27:.55,.73,z)*y,0,0),d(`${R}Foot`,.15*y,-k*.38*y,0),d(`${R}ToeBase`,-.11*y,0,0),d(`${D}Leg`,(F?.3:.22)*y,0,0),d(`${R}Arm`,.25*y,0,-k*J(w,.3,y)),d(`${D}Arm`,-.32*y,0,k*J(w,.12,y)),d(`${D}ForeArm`,-.54*y,0,0),d("Spine02",(F?.19:.07)*y,-k*.13*y,-k*.15*y),d("Head",.24*y,k*.12*y,0),f.rootZ=k*.086*y}else if(A==="parry"){const y=Math.sign(n.actParam)||1,R=Math.abs(n.actParam)>1.5,D=Ee(M,.14,.4),k=y>0?"Left":"Right",F=y>0?"Right":"Left",z=y>0?1:-1;d(`${k}Arm`,-.35*D,0,z*J(-w,R?2.05:.95,D)),d(`${k}ForeArm`,-.1,0,0),d(`${F}Arm`,-.5*D,0,-z*.2),d(`${F}ForeArm`,-.9*D,0,0),d(`${k}UpLeg`,-.25*D,0,z*.45*D),d(`${k}Leg`,.5*D,0,0),d(`${F}UpLeg`,0,0,0),d(`${F}Leg`,.15*D,0,0),d("Spine02",.1*D,0,-y*.3*D),d("Spine01",0,0,-y*.2*D),f.rootZ=-y*.3*D,f.rootY=(R?.18*Math.sin(M*Math.PI):-.1)*D}else if(A==="tip"){const y=Math.sign(n.actParam)||1,R=Ee(M,.16,.35),D=Math.sin(he(M/.85,0,1)*Math.PI),k=y>0?"Left":"Right",F=y>0?"Right":"Left",z=y>0?1:-1;d(`${k}Arm`,.15*R,0,z*J(-w,2.45,R)),d(`${k}ForeArm`,-.05,0,0),d(`${F}Arm`,.3*R,0,-z*J(-w,.5,R)),d(`${F}ForeArm`,-.5*R,0,0),d("Spine02",-.28*R,0,-y*.12*R),d("Head",-.35*R,0,0),d("LeftUpLeg",.12*R,0,0),d("RightUpLeg",-.4*R*D,0,0),d("RightLeg",.8*R*D,0,0),d("LeftLeg",.15*R,0,0),f.rootY=D*.62}else if(A==="footsave"){const y=Math.sign(n.actParam)||1,R=Ee(M,.14,.4),D=y>0?"Left":"Right",k=y>0?"Right":"Left",F=y>0?1:-1;d(`${D}UpLeg`,-.2*R,0,F*1*R),d(`${D}Leg`,.1*R,0,0),d(`${D}Foot`,0,F*.5*R,0),d(`${k}UpLeg`,-.55*R,0,0),d(`${k}Leg`,1.25*R,0,0),d(`${D}Arm`,0,0,F*(-w-.1)),d(`${D}ForeArm`,-.1,0,0),d(`${k}Arm`,-.3*R,0,-F*.3*R),d(`${k}ForeArm`,-.6*R,0,0),d("Spine02",.2*R,0,-y*.35*R),f.rootY=-.3*R,f.rootZ=-y*.12*R}else if(A==="spread"){const y=Ee(M,.12,.35);d("LeftArm",-.2*y,0,J(-w,.55,y)),d("RightArm",-.2*y,0,J(w,-.55,y)),d("LeftForeArm",-.15,0,0),d("RightForeArm",-.15,0,0),d("LeftUpLeg",-.55*y,0,.6*y),d("RightUpLeg",-.55*y,0,-.6*y),d("LeftLeg",1.1*y,0,0),d("RightLeg",1.1*y,0,0),d("LeftFoot",-.3*y,0,0),d("RightFoot",-.3*y,0,0),d("Spine02",.18*y,0,0),d("Head",-.15*y,0,0),f.rootY=-.36*y}else if(A==="punch"){const y=Ee(M,.16,.35),R=Math.sin(he(M/.85,0,1)*Math.PI),D=J(-.2,-.75,Ft(M/.4));d("LeftArm",D*y,0,J(-w,2,y)),d("RightArm",D*y,0,J(w,-2,y)),d("LeftForeArm",-.35*y,0,0),d("RightForeArm",-.35*y,0,0),d("RightUpLeg",-.95*y*R,0,0),d("RightLeg",1.35*y*R,0,0),d("LeftUpLeg",.1*y,0,0),d("LeftLeg",.2*y*R,0,0),d("Spine02",-.1*y,0,0),f.rootY=R*.5}else if(A==="gkthrow"){const y=Ee(M,.14,.3),R=Ft(M/.3),D=Ft((M-.34)/.3),k=J(J(0,.75,R),-1.35,D);d("RightArm",k*y,0,J(w,-2.3,Ft(M/.22)*(M<.6?1:Ee(M,.14,.3)))),d("RightForeArm",J(-.6,-.08,D)*y,0,0),d("LeftArm",J(-1.35,.3,D)*y,0,J(-w,-.2,y)),d("LeftForeArm",-.2*y,0,0);const F=J(J(0,-.5,R),.45,D);d("Spine02",J(-.18,.35,D)*y,F*y,0),d("Spine01",0,F*.6*y,0),d("LeftUpLeg",-.55*y,0,0),d("LeftLeg",.35*y,0,0),d("LeftFoot",.1*y,0,0),d("RightUpLeg",J(.4,.1,D)*y,0,0),d("RightLeg",J(.35,.7,D)*y,0,0),f.rootY=-.07*y,f.rootX=J(-.06,.12,D)*y}else if(A==="gkroll"){const y=Ee(M,.18,.3),R=J(.9,-1.1,Ft((M-.2)/.34));d("LeftUpLeg",-1.25*y,0,0),d("LeftLeg",1.5*y,0,0),d("LeftFoot",-.2*y,0,0),d("RightUpLeg",.45*y,0,0),d("RightLeg",1.25*y,0,0),d("RightFoot",.5*y,0,0),d("Spine02",.6*y,0,0),d("Spine01",.25*y,0,0),d("neck",-.45*y,0,0),d("RightArm",R*y,0,J(w,.72,y)),d("RightForeArm",-.1*y,0,0),d("LeftArm",-.7*y,0,-.45),d("LeftForeArm",-.9*y,0,0),f.rootY=-.46*y}else if(A==="throw"){const y=n.actParam>=1,R=y?1:Ee(M,.15,.4),D=y?.25:J(.5,-.7,Ft(M/.6)),k=y?t.grip||0:(t.grip||0)*(1-Ft(M/.5));d("LeftArm",D,0,J(-w,2.45,R)+k),d("RightArm",D,0,J(w,-2.45,R)-k),d("LeftForeArm",-.55*R,0,0),d("RightForeArm",-.55*R,0,0),d("Spine02",y?-.12:J(-.2,.3,Ft(M/.6))*R,0,0)}else if(A==="fall"||A==="stumble"){const y=A==="fall",R=Ee(M,.2,.3);y&&(f.rootX=1.3*R,f.rootY=.04*R),d("Spine02",(y?.1:.55)*R,0,0),d("LeftArm",-1.1*R,0,J(-w,.3,R)),d("RightArm",-1.1*R,0,J(w,-.3,R)),d("LeftForeArm",-.8*R,0,0),d("RightForeArm",-.8*R,0,0),y&&(d("LeftUpLeg",.2*R,0,0),d("RightUpLeg",-.3*R,0,0),d("LeftLeg",.5*R,0,0),d("RightLeg",.9*R,0,0))}else if(A==="celebrate"){const y=Ft(n.actT/.35);if(n.actParam<.5)d("LeftArm",0,0,J(-w,1.35,y)),d("RightArm",0,0,J(w,-1.35,y)),d("LeftForeArm",0,0,0),d("RightForeArm",0,0,0),d("Spine02",-.12*y,0,0),d("Head",-.25*y,0,0);else{const R=Math.sin(u*9)*.25;d("RightArm",-.4,0,J(w,-1.9+R,y)),d("RightForeArm",-1.2*y,0,0)}}else if(A==="flag"){const y=Ee(M,.12,.2);d("RightArm",0,0,J(w,-2.7,y)),d("RightForeArm",0,0,0)}else if(A==="card"){const y=Ee(M,.15,.2);d("RightArm",-2.75*y,0,J(w,.42,y)),d("RightForeArm",-.12*y,0,0),d("Spine02",-.06*y,0,0),d("Head",-.1*y,0,0)}else if(A==="catch"){const y=Ee(M,.18,.12),R=Ft((M-.42)/.3);d("LeftArm",J(-1.3,-.5,R)*y,0,J(-.42,-.72,R)),d("RightArm",J(-1.3,-.5,R)*y,0,J(.42,.72,R)),d("LeftForeArm",J(-.35,-1.5,R)*y,.45*R,0),d("RightForeArm",J(-.35,-1.5,R)*y,-.45*R,0),d("Spine02",J(.1,.32,R)*y,0,0),d("neck",.2*R*y,0,0),f.LeftLeg[0]+=.35*y,f.RightLeg[0]+=.35*y,f.LeftUpLeg[0]-=.2*y,f.RightUpLeg[0]-=.2*y,f.rootY-=.1*y}return f}_poseKeeperDive(t,e,i,n,s){const{kind:a,upperHand:r}=t.dive,{push:l,contact:c,land:h}=gn[a],u=t.actParam,p=u>0?"Left":"Right",f=u>0?"Right":"Left",d=a==="extension",_=a==="rotation",g=t.act==="getup",m=g?1:he(n,0,1),v=Ft((m-c)/(h+.12-c)),x=1-(g?Ft(n):0),w=d?.73:a==="collapse"?1.08:1.23,C=_?c*.78:c,T=J(w*Ft(m/C),1.52,v)*x,A=Math.sin(he(m/c,0,1)*Math.PI),S=1-Ft(Math.abs(m-l)/(l+.09)),M=d?Math.sin(he((m-l)/(h-l),0,1)*Math.PI):0,y=g?Math.sin(Math.PI*he(n,0,1)):0;e.rootZ=-u*T,e.rootY=(.32*T/1.52+M*.69-S*.15)*x-y*.27,e.rootX=(d?.07:.21)*A-(_?u*.11*x:0);const R=_?Ft(m/(c*.72))*(1-v):0,D=a==="low"||d?Math.sin(2*Math.PI*he(m/l,0,1))*(1-Ft(m/l)):0;i(`${p}UpLeg`,(-.57*S+(d?.37:.12)*A-.36*v+.34*R)*x-.86*y,u*.62*R,-u*(.11*S+.44*R)),i(`${p}Leg`,(.9*S+.38*v+.33*R)*x+1.42*y,0,0),i(`${p}Foot`,.32*A-.16*v*x,0,0),i(`${f}UpLeg`,(D*.38-(d?.65:.33)*A-.39*v)*x-.68*y,-u*.22*R,-u*(.15*A+.24*v)*x),i(`${f}Leg`,(.45*Math.abs(D)+(d?1.05:.54)*A+.64*v)*x+1.16*y,0,0),i(`${f}Foot`,-.25*y,0,0);const k=Ft(m/(c*.87))*(1-v),F=v*x;i(`${p}Arm`,-.56*k-.36*F-.29*y,0,u*(-s+(r?1.56:2.47)*k+1.2*F)),i(`${f}Arm`,-.54*k-.59*F-.37*y,0,-u*(-s+(r?2.67:1.74)*k+.49*F)),i(`${p}ForeArm`,-.26*k-.6*F-.62*y,0,0),i(`${f}ForeArm`,-.42*k-.86*F-.51*y,0,0),i("Spine02",.18*S+.29*y,u*((_?.47:.14)*A+.21*F),-u*.13*k),i("Spine01",.19*y,u*(_?.16:.04)*A,-u*.14*k),i("Head",(d?-.26:.15)*k+.09*F,u*.24*k,-u*.16*k)}dispose(){this.disposed=!0;for(const t of this.resources)t.dispose();this.rigs=[]}}const ka={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Zs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vv=new ir(-1,1,1,-1,0,1);class bv extends Be{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}}const Mv=new bv;class Ic{constructor(t){this._mesh=new Qt(Mv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,vv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Sv extends Zs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ni?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Po.clone(t.uniforms),this.material=new ni({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ic(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Iu extends Zs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Tv extends Zs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Nt);this._width=i.width,this._height=i.height,e=new Ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sv(ka),this.copyPass.material.blending=bn,this.clock=new Sd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Iu!==void 0&&(a instanceof Iu?i=!0:a instanceof Tv&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ev extends Zs{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const Av={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xs extends Zs{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Nt(t.x,t.y):new Nt(256,256),this.clearColor=new pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ni(s,a,{type:Sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Ni(s,a,{type:Sn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new Ni(s,a,{type:Sn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const r=Av;this.highPassUniforms=Po.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ni({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Nt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Po.clone(ka.uniforms),this.blendMaterial=new ni({uniforms:this.copyUniforms,vertexShader:ka.vertexShader,fragmentShader:ka.fragmentShader,blending:Mo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pt,this._oldClearAlpha=1,this._basic=new Ze,this._fsQuad=new Ic(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Nt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),r=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ni({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Nt(.5,.5)},direction:{value:new Nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new ni({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xs.BlurDirectionX=new Nt(1,0);Xs.BlurDirectionY=new Nt(0,1);const Sa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Rv extends Zs{constructor(){super(),this.uniforms=Po.clone(Sa.uniforms),this.material=new Fp({name:Sa.name,uniforms:this.uniforms,vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader}),this._fsQuad=new Ic(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===ve&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Vu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Cv{constructor(t,e,i){this.renderer=t,this.scene=e,this.camera=i,this.composer=new wv(t),this.composer.addPass(new Ev(e,i)),this.bloom=new Xs(new Nt(1,1),.22,.35,1.05),this.composer.addPass(this.bloom),this.composer.addPass(new Rv),this.setQuality("high")}setQuality(t){this.enabled=t==="high",this.resize()}resize(){this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(window.innerWidth,window.innerHeight)}render(){this.enabled?this.composer.render():this.renderer.render(this.scene,this.camera)}dispose(){this.composer.passes.forEach(t=>t.dispose?.()),this.composer.dispose()}}class Pv extends dd{constructor(){super();const t=new qi;t.deleteAttribute("uv");const e=new xi({side:si}),i=new xi,n=new Ec(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);const s=new Qt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Ds(t,i,6),r=new Se;r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),r.updateMatrix(),a.setMatrixAt(0,r.matrix),r.position.set(-5.607,-.754,-.758),r.rotation.set(0,.994,0),r.scale.set(1.97,1.534,3.955),r.updateMatrix(),a.setMatrixAt(1,r.matrix),r.position.set(6.167,.857,7.803),r.rotation.set(0,.561,0),r.scale.set(3.927,6.285,3.687),r.updateMatrix(),a.setMatrixAt(2,r.matrix),r.position.set(-2.017,.018,6.124),r.rotation.set(0,.333,0),r.scale.set(2.002,4.566,2.064),r.updateMatrix(),a.setMatrixAt(3,r.matrix),r.position.set(2.291,-.756,-2.621),r.rotation.set(0,-.286,0),r.scale.set(1.546,1.552,1.496),r.updateMatrix(),a.setMatrixAt(4,r.matrix),r.position.set(-2.193,-.369,-5.547),r.rotation.set(0,.516,0),r.scale.set(3.875,3.487,2.986),r.updateMatrix(),a.setMatrixAt(5,r.matrix),this.add(a);const l=new Qt(t,As(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Qt(t,As(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Qt(t,As(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Qt(t,As(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const p=new Qt(t,As(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const f=new Qt(t,As(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function As(o){return new Xl({color:0,emissive:16777215,emissiveIntensity:o})}class Lv{constructor(t,e){this.root=new Me,this.root.position.set(-38.6,0,-4.6),this.resources=new Set,this.disposed=!1,t.add(this.root);const i=new Qt(new $s(1.1,1.3,1.25,32),new xi({color:1055529,metalness:.55,roughness:.3}));i.position.y=.625,i.castShadow=i.receiveShadow=!0,this.root.add(i),this.resources.add(i.geometry),this.resources.add(i.material);const n=new $l(e),s=new Pv;this.environment=n.fromScene(s,.04),s.dispose(),n.dispose()}async load(){const{scene:t}=await new Pc().loadAsync(Ws("assets/nova-trophy.glb"));if(t.traverse(a=>{if(a.isMesh){a.castShadow=a.receiveShadow=!0,this.resources.add(a.geometry);for(const r of Array.isArray(a.material)?a.material:[a.material]){r.envMap=this.environment.texture,r.envMapIntensity=1.3,this.resources.add(r);for(const l of Object.values(r))l?.isTexture&&l!==this.environment.texture&&this.resources.add(l)}}}),this.disposed){for(const a of this.resources)a.dispose();return}const e=new Zi().setFromObject(t),i=e.getCenter(new L),n=e.getSize(new L),s=2.2/Math.max(n.y,.001);t.scale.setScalar(s),t.position.set(-i.x*s,1.25-e.min.y*s,-i.z*s),this.root.add(t),this.model=t}dispose(){this.disposed=!0,this.root.removeFromParent();for(const t of this.resources)t.dispose();this.environment.dispose()}}const Iv=[1,3,4,5,2,8,6,10,11,9,7],Du={iberian:[["Mar","Sal","Ro","Fer","Cas","Del","Vi","Mon","Al","Bel","Tor","Que","Zan","Lor"],["ano","ezal","iro","ardo","eira","osa","uela","ique","andes","oval","inho","azar"]],italic:[["Bar","Cor","Fal","Gian","Lom","Mar","Pel","Ros","San","Ter","Val","Zer","Mon","Bel"],["etti","ini","ardi","olo","ucci","anza","esco","iato","ella","onte","ieri","azzo"]],germanic:[["Brun","Eis","Falk","Hart","Kess","Lind","Mer","Rein","Stein","Vogt","Wald","Zimm","Ost","Dorn"],["mann","hoff","berg","ler","ner","feld","bach","wald","rich","hardt","ing","auer"]],dutch:[["Van","Ruy","Koe","Haan","Bleek","Dijk","Meer","Stam","Veld","Wijn","Zeel","Brou","Tim","Goos"],["stra","man","veld","sen","kamp","huis","ink","aert","boom","ema","ers","daal"]],gallic:[["Beau","Char","Del","Four","Gir","Lam","Mor","Reyn","Sau","Val","Ver","Mar","Du","Roch"],["mont","ier","aud","eux","elle","ard","ane","evin","oux","iac","ond","eret"]],anglo:[["Ash","Black","Carr","Daw","Ever","Hal","Kings","Lock","Mar","Nor","Pem","Rad","Whit","Thorn"],["ford","well","ton","ley","worth","field","by","wood","ham","ridge","croft","dale"]],nordic:[["Berg","Dahl","Ek","Hal","Lind","Ny","Sand","Sol","Sten","Thor","Vik","Ask","Hag","Ulv"],["strom","qvist","sen","gren","holm","vik","lund","berg","dal","ander","rud","by"]],slavic:[["Bor","Drag","Kov","Mil","Nov","Pet","Rad","Stan","Vlad","Zor","Jar","Luk","Mar","Vuk"],["ovic","enko","ic","ev","anek","oski","imir","ula","esku","ar","ak","osz"]],japanese:[["Aka","Fuji","Hira","Ishi","Kawa","Mori","Naka","Oka","Saka","Taka","Yama","Haya","Mizu","Kita"],["mura","da","no","shima","zaki","be","hara","moto","gawa","se","ura","tani"]],korean:[["Baek","Cho","Dae","Han","Jin","Kang","Min","Nam","Seo","Tae","Won","Yeon","Hyo","Gyu"],["-su","-ho","-min","-jun","-woo","-seok","-hyun","-il","-tae","-gi","-bin","-han"]],westafrican:[["Ade","Chi","Eze","Ife","Kele","Nna","Obi","Olu","Tun","Uche","Emen","Ayo","Oko","Bala"],["yemi","ndu","kwe","bola","chi","nna","laja","goke","ike","wale","ro","sanya"]],maghrebi:[["Ben","El","Had","Kar","Mah","Naj","Ouar","Rah","Sab","Tah","Zer","Bou","Am","Lak"],["ali","rami","daoui","imi","zane","ouri","hadi","meni","rif","bani","ssi","kari"]],khmer:[["Chan","Dara","Keo","Meas","Nhem","Phal","Rith","Sok","Som","Thy","Vann","Yim","Pich","Bun"],["tha","rith","vong","nak","sara","dy","reak","pheap","leng","vuth","ny","rong"]]},ku="ABCDEFGHIJKLMNOPRSTVWYZ";function Dv(o){let t=2166136261;for(let e=0;e<o.length;e+=1)t^=o.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function kv(o){let t=o>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Nv(o,t){const[e,i]=Du[t]??Du.anglo,n=kv(Dv(o)),s=new Set;return Iv.map(a=>{let r="";for(let l=0;l<40&&(!r||s.has(r));l+=1){const c=i[Math.floor(n()*i.length)],h=e[Math.floor(n()*e.length)];r=c.startsWith("-")?`${h}${c.replace("-","").toLowerCase()}`:`${h}${c}`}return s.add(r),[a,`${ku[Math.floor(n()*ku.length)]}. ${r}`]})}function Uv(o){const t=[o>>16&255,o>>8&255,o&255],e=(.299*t[0]+.587*t[1]+.114*t[2])/255,i=e<.42?(.42-e)*1.3:0;return`#${t.map(n=>Math.round(n+(255-n)*i).toString(16).padStart(2,"0")).join("")}`}function ye(o,t,e,i,n,s,a,r,l={}){return Object.freeze({id:o,name:t,short:e,rating:i,primary:s,secondary:a,stripe:a,socks:s,keeper:15909424,pattern:r,numberColor:16777215,ui:Uv(s),squad:Nv(o,n),...l})}const Ud=Object.freeze([ye("bra","BRAZIL","BRA",88,"iberian",16175642,1855416,0,{stripe:2071114,socks:16053492,numberColor:1335340,keeper:2792796}),ye("arg","ARGENTINA","ARG",88,"iberian",9425141,1317418,1,{stripe:16251387,socks:16251387,numberColor:1317418,keeper:8215797}),ye("fra","FRANCE","FRA",87,"gallic",2047912,16053492,0,{stripe:14165550,socks:14165550}),ye("ger","GERMANY","GER",85,"germanic",16053492,1382172,0,{stripe:1382172,socks:16053492,numberColor:1382172,ui:"#e9edf2",keeper:3126122}),ye("esp","SPAIN","ESP",86,"iberian",13111342,1319770,0,{stripe:16106496,socks:1319770,numberColor:16106496}),ye("ita","ITALY","ITA",84,"italic",2060246,16053492,0,{stripe:16053492,socks:2060246,keeper:10134445}),ye("eng","ENGLAND","ENG",86,"anglo",16250871,1451599,0,{stripe:13111342,socks:16250871,numberColor:1451599,ui:"#dfe6f5",keeper:3126122}),ye("ned","NETHERLANDS","NED",84,"dutch",15952929,1382172,0,{stripe:1382172,socks:15952929,numberColor:1382172,keeper:3842303}),ye("por","PORTUGAL","POR",85,"iberian",10687018,875318,0,{stripe:875318,socks:10687018,numberColor:16106496}),ye("jpn","JAPAN","JPN",79,"japanese",1716106,16053492,1,{stripe:2375839,socks:1716106,keeper:15216735}),ye("mar","MOROCCO","MAR",80,"maghrebi",11866651,748346,3,{stripe:748346,socks:11866651}),ye("nga","NIGERIA","NGA",77,"westafrican",1874507,16053492,2,{stripe:2537562,socks:1874507}),ye("mex","MEXICO","MEX",78,"iberian",879423,16053492,0,{stripe:13111342,socks:13111342,keeper:16742938}),ye("usa","UNITED STATES","USA",77,"anglo",16053492,1780331,3,{stripe:13111342,socks:1780331,numberColor:1780331,ui:"#c9d6ff",keeper:3126122}),ye("kor","SOUTH KOREA","KOR",78,"korean",14165550,1382172,0,{stripe:1382172,socks:14165550,keeper:3842303}),ye("cam","CAMBODIA","CAM",70,"khmer",1785756,13111342,4,{stripe:13111342,socks:1785756})]),Ql=Object.freeze([Object.freeze({...wn.home,rating:82}),Object.freeze({...wn.away,rating:82}),ye("meridian","MERIDIAN CITY","MER",85,"anglo",7321599,16053492,0,{stripe:1319770,socks:7321599,numberColor:1319770}),ye("ironbridge","IRONBRIDGE ROVERS","IRO",79,"anglo",9051180,7321576,0,{stripe:7321576,socks:9051180}),ye("tidewater","TIDEWATER ATHLETIC","TID",81,"iberian",15222060,16053492,1,{stripe:16053492,socks:1382172,numberColor:1382172}),ye("cobalt","COBALT DYNAMO","COB",84,"slavic",1916863,989770,4,{stripe:989770,socks:1916863}),ye("emberfall","EMBERFALL SC","EMB",80,"italic",1382172,14165550,1,{stripe:14165550,socks:1382172,ui:"#ff5a4a"}),ye("northgate","NORTHGATE WANDERERS","NGW",76,"nordic",16053492,1382172,2,{stripe:1382172,socks:16053492,numberColor:14165550,ui:"#e3e8ef",keeper:3126122}),ye("verdant","VERDANT PARK","VER",77,"gallic",1870411,16053492,2,{stripe:16053492,socks:1870411,numberColor:1382172}),ye("halcyon","HALCYON TOWN","HAL",74,"anglo",16103168,1382172,0,{stripe:1382172,socks:16103168,numberColor:1382172,keeper:3842303}),ye("obsidian","OBSIDIAN UNION","OBS",83,"germanic",1776932,16103168,0,{stripe:16103168,socks:1776932,numberColor:16103168,ui:"#f5c84a",keeper:3126122}),ye("saffron","SAFFRON VALE","SAF",75,"maghrebi",16747039,5906298,3,{stripe:5906298,socks:16747039,numberColor:2756672,keeper:3842303}),ye("kestrel","KESTREL ALBION","KES",78,"anglo",8007615,16053492,0,{stripe:16053492,socks:8007615}),ye("lumen","LUMEN SPORTING","LUM",82,"iberian",1874523,16053492,2,{stripe:16053492,socks:1874523,numberColor:1382172}),ye("redwater","REDWATER OLYMPIC","RED",80,"gallic",13111342,16053492,4,{stripe:16053492,socks:13111342,numberColor:1382172}),ye("stormhaven","STORMHAVEN FC","STO",76,"nordic",3820127,10475263,3,{stripe:10475263,socks:3820127,ui:"#9fd6ff"})]),Fv=new Map([...Ud,...Ql].map(o=>[o.id,o])),Xe=o=>Fv.get(o)??null,tn=Object.freeze({world:{id:"world",name:"WORLD CHAMPIONSHIP",short:"WORLD CHAMPIONSHIP",format:"knockout",blurb:"16 nations, straight knockout.",teams:Ud.map(o=>o.id)},cup:{id:"cup",name:"CONTINENTAL CUP",short:"CONTINENTAL CUP",format:"knockout",blurb:"16 clubs, straight knockout.",teams:Ql.map(o=>o.id)},league:{id:"league",name:"NOVA LEAGUE",short:"NOVA LEAGUE",format:"league",blurb:"8 clubs, everyone plays everyone.",teams:Ql.slice(0,8).map(o=>o.id)}}),tc=o=>[o>>16&255,o>>8&255,o&255],Nu=(o,t)=>{const e=tc(o),i=tc(t);return Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2])},Ov=o=>{const[t,e,i]=tc(o);return(.299*t+.587*e+.114*i)/255};function Bv(o,t){if(Nu(o.primary,t.primary)>120)return{home:o,away:t};const e=Ov(o.primary)<.55,i=e?16053492:1712176,n=Nu(t.primary,i)>90?t.primary:t.secondary;return{home:o,away:{...t,primary:i,secondary:n,stripe:n,socks:i,pattern:0,numberColor:e?1382172:16777215,ui:e?"#f1f4f8":"#8fa3c8"}}}const Fd=1,Dc=o=>`nova26.competition.${o}`,kc=["ROUND OF 16","QUARTER-FINALS","SEMI-FINALS","FINAL"];function Nc(){try{return window.localStorage}catch{return null}}function Uc(o){try{Nc()?.setItem(Dc(o.id),JSON.stringify(o))}catch{}}function Uu(o){try{Nc()?.removeItem(Dc(o))}catch{}}function Od(o){try{const t=JSON.parse(Nc()?.getItem(Dc(o))??"null"),e=tn[o];if(!t||!e||t.v!==Fd||t.id!==o||t.format!==e.format||!Xe(t.teamId))return null;const i=t.format==="league"?t.days:t.rounds;if(!Array.isArray(i)||!i.length)return null;for(const n of i)for(const s of n)if(!Xe(s.a)||!Xe(s.b))return null;return t}catch{return null}}function zv(o,t){const e=[...o];for(let i=e.length-1;i>0;i-=1){const n=Math.floor(t()*(i+1));[e[i],e[n]]=[e[n],e[i]]}return e}const Na=(o,t)=>({a:o,b:t,sa:null,sb:null,pens:null,w:null}),sr=o=>o.sa!=null;function Hv(o,t,e=Math.random){const i=tn[o];if(!i||!i.teams.includes(t))throw new Error(`Unknown competition entry: ${o}/${t}`);const n=zv(i.teams,e),s={v:Fd,id:o,format:i.format,teamId:t,champion:null};if(i.format==="knockout"){s.round=0,s.rounds=[[]];for(let a=0;a<n.length;a+=2)s.rounds[0].push(Na(n[a],n[a+1]))}else{s.day=0,s.days=[];const a=[...n],r=a.length;for(let l=0;l<r-1;l+=1){const c=[];for(let h=0;h<r/2;h+=1){const u=a[h],p=a[r-1-h];c.push((l+h)%2?Na(p,u):Na(u,p))}s.days.push(c),a.splice(1,0,a.pop())}}return s}function Fu(o,t){const e=Math.exp(-o);let i=0,n=1;do i+=1,n*=t();while(n>e);return Math.min(i-1,7)}function Gv(o,t,e=Math.random){const i=(Xe(o)?.rating??78)-(Xe(t)?.rating??78);return[Fu(1.35*1.045**i,e),Fu(1.35*1.045**-i,e)]}function Vv(o=Math.random){const t={a:[],b:[]},e=i=>t[i].filter(Boolean).length;for(let i=0;i<5;i+=1)for(const n of["a","b"]){t[n].push(o()<.76);const s=n==="a"?"b":"a";if(e(n)>e(s)+(5-t[s].length)||e(s)>e(n)+(5-t[n].length))return{kicks:t,score:[e("a"),e("b")],winner:e("a")>e("b")?"a":"b"}}for(;e("a")===e("b");)t.a.push(o()<.76),t.b.push(o()<.76);return{kicks:t,score:[e("a"),e("b")],winner:e("a")>e("b")?"a":"b"}}function Bd(o,t,e,i,n){o.sa=t,o.sb=e;let s=null;return i&&(t===e?(s=Vv(n),o.pens=s.score,o.w=s.winner==="a"?o.a:o.b):o.w=t>e?o.a:o.b),s}const Fc=o=>(o.format==="league"?o.days[o.day]:o.rounds[o.round])??[];function Fo(o){return o.champion?null:Fc(o).find(t=>!sr(t)&&(t.a===o.teamId||t.b===o.teamId))??null}function Wv(o){return o.format==="league"?!0:!o.rounds.some(t=>t.some(e=>e.w&&(e.a===o.teamId||e.b===o.teamId)&&e.w!==o.teamId))}function Xv(o){const t=Fc(o);if(t.some(i=>!sr(i)))return;if(o.format==="league"){o.day+=1,o.day>=o.days.length&&(o.champion=Oc(o)[0].id);return}if(t.length===1){o.champion=t[0].w;return}const e=[];for(let i=0;i<t.length;i+=2)e.push(Na(t[i].w,t[i+1].w));o.rounds.push(e),o.round+=1}function zd(o,t){for(const e of Fc(o)){if(sr(e))continue;const[i,n]=Gv(e.a,e.b,t);Bd(e,i,n,o.format==="knockout",t)}Xv(o)}function $v(o,t,e,i=Math.random){const n=Fo(o);if(!n)return null;const s=n.a===o.teamId,a=Bd(n,s?t:e,s?e:t,o.format==="knockout",i);return zd(o,i),{match:n,shootout:a,won:o.format==="knockout"?n.w===o.teamId:t>e}}function qv(o,t=Math.random){return o.champion||Fo(o)?!1:(zd(o,t),!0)}function Oc(o){const t=new Map(tn[o.id].teams.map(e=>[e,{id:e,p:0,w:0,d:0,l:0,gf:0,ga:0,pts:0}]));for(const e of o.days)for(const i of e){if(!sr(i))continue;const n=t.get(i.a),s=t.get(i.b);n.p+=1,s.p+=1,n.gf+=i.sa,n.ga+=i.sb,s.gf+=i.sb,s.ga+=i.sa,i.sa>i.sb?(n.w+=1,s.l+=1,n.pts+=3):i.sa<i.sb?(s.w+=1,n.l+=1,s.pts+=3):(n.d+=1,s.d+=1,n.pts+=1,s.pts+=1)}return[...t.values()].sort((e,i)=>i.pts-e.pts||i.gf-i.ga-(e.gf-e.ga)||i.gf-e.gf||Xe(e.id).name.localeCompare(Xe(i.id).name))}function ec(o){return o.champion?"COMPLETE":o.format==="league"?`MATCHDAY ${o.day+1} OF ${o.days.length}`:kc[o.round+(4-Math.log2(tn[o.id].teams.length))]??`ROUND ${o.round+1}`}function Kv(o){if(o.champion===o.teamId)return"CHAMPIONS";if(o.format==="league"){const e=Oc(o).findIndex(i=>i.id===o.teamId)+1;return`FINISHED ${e}${["TH","ST","ND","RD"][e<4?e:0]}`}const t=o.rounds.findIndex(e=>e.some(i=>(i.a===o.teamId||i.b===o.teamId)&&i.w!==o.teamId));return t===o.rounds.length-1?"RUNNERS-UP":`OUT IN THE ${kc[t]??"KNOCKOUTS"}`}const Le=o=>String(o??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),tl=o=>`#${Number(o).toString(16).padStart(6,"0")}`,Us=o=>`<i class="kit-swatch" style="--k1:${tl(o.primary)};--k2:${tl(o.pattern?o.stripe??o.secondary:o.primary)};--k3:${tl(o.secondary)}"></i>`;function Yv(o){const t=tn[o],e=t.teams.map(i=>{const n=Xe(i);return`<button class="pick-card ui-command" data-ui-command type="button" data-action="t-pick" data-value="${Le(n.id)}">
      ${Us(n)}<b>${Le(n.name)}</b><small>${Le(n.short)} &nbsp;•&nbsp; RATING ${n.rating}</small></button>`}).join("");return`<div class="modal-card tournament-card">
    <header class="t-head"><div><p class="micro-label">${Le(t.blurb)}</p><h2>${Le(t.name)}</h2></div><span class="t-stage">CHOOSE YOUR SIDE</span></header>
    <div class="pick-grid">${e}</div>
    <footer class="t-actions"><button class="secondary-button ui-command" data-ui-command type="button" data-action="t-close">BACK TO MENU</button></footer>
  </div>`}function jv(o,t){const e=(i,n,s,a)=>{const r=i?Xe(i):null;return`<div class="tie-row${a?" is-winner":""}${i&&i===t?" is-me":""}">
      ${r?Us(r):'<i class="kit-swatch is-empty"></i>'}<span>${r?Le(r.short):"—"}</span>
      <b>${n??""}${s!=null?`<sup>${s}</sup>`:""}</b></div>`};return`<div class="tie">${e(o?.a,o?.sa,o?.pens?.[0],o?.w&&o.w===o.a)}${e(o?.b,o?.sb,o?.pens?.[1],o?.w&&o.w===o.b)}</div>`}function Zv(o){const t=o.rounds[0].length,e=Math.log2(t)+1,i=[];for(let n=0;n<e;n+=1){const s=t/2**n,a=Array.from({length:s},(l,c)=>jv(o.rounds[n]?.[c],o.teamId)).join(""),r=!o.champion&&n===o.round;i.push(`<section class="bracket-col${r?" is-live":""}"><h3>${kc[n+4-e]}</h3><div class="bracket-ties">${a}</div></section>`)}return`<div class="bracket" style="--rounds:${e}">${i.join("")}</div><p class="t-note">Small numbers are penalty shoot-out scores.</p>`}function Jv(o){const t=Oc(o).map((n,s)=>{const a=Xe(n.id),r=n.gf-n.ga;return`<tr class="${n.id===o.teamId?"is-me":""}${s===0?" is-top":""}"><td>${s+1}</td><th>${Us(a)}${Le(a.name)}</th>
      <td>${n.p}</td><td>${n.w}</td><td>${n.d}</td><td>${n.l}</td><td>${n.gf}</td><td>${n.ga}</td><td>${r>0?"+":""}${r}</td><td class="pts">${n.pts}</td></tr>`}).join(""),e=(n,s)=>{const a=(o.days[n]??[]).map(r=>`<li class="${r.a===o.teamId||r.b===o.teamId?"is-me":""}"><span>${Le(Xe(r.a).short)}</span><b>${r.sa!=null?`${r.sa} – ${r.sb}`:"v"}</b><span>${Le(Xe(r.b).short)}</span></li>`).join("");return a?`<section class="fixture-list"><h3>${s}</h3><ul>${a}</ul></section>`:""},i=!!o.champion;return`<div class="league-layout">
    <table class="league-table"><thead><tr><td>#</td><th>CLUB</th><td>P</td><td>W</td><td>D</td><td>L</td><td>GF</td><td>GA</td><td>GD</td><td>PTS</td></tr></thead><tbody>${t}</tbody></table>
    <div class="league-side">${i?"":e(o.day,`MATCHDAY ${o.day+1}`)}${o.day>0?e(o.day-1,`MATCHDAY ${o.day} RESULTS`):""}</div>
  </div>`}function Qv(o,{confirmAbandon:t=!1}={}){const e=tn[o.id],i=Xe(o.teamId),n=o.format==="league"?Jv(o):Zv(o);let s="",a="";if(o.champion){const l=Xe(o.champion),c=o.champion===o.teamId;s=`<div class="champion-banner${c?" is-mine":""}" style="--team-color:${Le(l.ui)}">
      <span class="champion-cup" aria-hidden="true">★</span>
      <div><small>${Le(e.name)} CHAMPIONS</small><strong>${Le(l.name)}</strong>
      <em>${c?"YOU LIFT THE TROPHY":`${Le(i.name)} — ${Le(Kv(o))}`}</em></div></div>`,a='<button class="primary-button ui-command" data-ui-command type="button" data-action="t-finish"><span>FINISH</span><i>›</i></button>'}else{const l=Fo(o);if(l){const c=Xe(l.a===o.teamId?l.b:l.a);a=`<button class="primary-button ui-command" data-ui-command type="button" data-action="t-play"><span>PLAY — ${Le(i.short)} v ${Le(c.short)}</span><i>›</i></button>`,s=`<div class="next-banner"><small>NEXT MATCH &nbsp;•&nbsp; ${Le(ec(o))}</small><strong>${Us(i)}${Le(i.name)} <i>v</i> ${Le(c.name)}${Us(c)}</strong></div>`}else a='<button class="primary-button ui-command" data-ui-command type="button" data-action="t-sim"><span>SIMULATE NEXT ROUND</span><i>›</i></button>',s=`<div class="next-banner is-out"><small>${Le(i.name)} ARE OUT</small><strong>${Wv(o)?"WAITING FOR THE ROUND":"FOLLOW THE REST OF THE COMPETITION"}</strong></div>`}const r=o.champion?"":`<button class="secondary-button ui-command danger" data-ui-command type="button" data-action="t-abandon">${t?"CONFIRM — DELETE THIS RUN":"ABANDON"}</button>`;return`<div class="modal-card tournament-card">
    <header class="t-head"><div><p class="micro-label">${Us(i)} ${Le(i.name)}</p><h2>${Le(e.name)}</h2></div><span class="t-stage">${Le(ec(o))}</span></header>
    ${s}
    <div class="t-body">${n}</div>
    <footer class="t-actions">${a}<button class="secondary-button ui-command" data-ui-command type="button" data-action="t-close">BACK TO MENU</button>${r}</footer>
  </div>`}function tb(o,t,e){const i=n=>n.map(s=>`<i class="${s?"is-in":"is-out"}"></i>`).join("");return`<div class="shootout-row"><span>${Le(t)}</span><div>${i(o.kicks.a)}</div><b>${o.score[0]}</b></div>
    <div class="shootout-row"><span>${Le(e)}</span><div>${i(o.kicks.b)}</div><b>${o.score[1]}</b></div>`}const Ou=document.querySelector("#app"),or=new Sd;let ci,fn,es,Fn,yn,dt,Pt,_t,Ki,oe,$i,Js,Ua,ke="menu",Hd=!1,Gi="high",Qn=Math.min(window.devicePixelRatio||1,1.75),Ta=0,el=0,Bc=null,il=20,zc="kickoff",ic=!1,ce=null,Do=!1;window.addEventListener("keydown",o=>{!o.repeat&&o.key!=="Escape"&&dt?.state.phase==="intro"&&(ic=!0)});const Gd={short:180,standard:300,long:480},kn=new L,eb=new L;function ib(){const o=new Qy({antialias:!0,powerPreference:"high-performance"});return o.setPixelRatio(Qn),o.setSize(window.innerWidth,window.innerHeight,!1),o.shadowMap.enabled=!0,o.shadowMap.type=sc,o.outputColorSpace=Ie,o.toneMapping=Ka,o.toneMappingExposure=1.08,o.domElement.id="game-canvas",o.domElement.setAttribute("aria-label","3D football match"),o}function nb(){try{Pt=new ov({teams:wn}),_t=new lv,ci=ib(),fn=new dd,fn.background=new pt(198674),es=new hi(30,window.innerWidth/window.innerHeight,.3,600),oe=new rx(es,ks),oe.onCut=()=>Pt.wipe?.(),(document.querySelector("#game-canvas-host")||Ou).prepend(ci.domElement),Fn=new Vx({scene:fn,renderer:ci,pitch:ks}),Fn.setSupporters(wn),yn=new $x({scene:fn}),dt=new Qx({scene:fn,teams:wn,pitch:ks,onEvent:pb}),Fn.addBroadcastCameras?.(dt.cameraCrew),$i=new xv(dt,ci),Pt.setLoading?.(.05,"Warming up the squads"),$i.onProgress=t=>Pt.setMenuLoading?.(t),$i.load().then(()=>{Pt.setMenuLoading?.(1),$i.setQuality(Gi)}).catch(t=>{console.error("Player assets failed:",t),Pt.toast?.("PLAYER MODELS FAILED TO LOAD","error")}),Js=new Cv(ci,fn,es),Ua=new Lv(fn,ci),Ua.load().catch(t=>console.warn("Trophy unavailable:",t.message)),fn.environment=Ua.environment.texture,fn.environmentIntensity=.3,Ki=new ax(document),sb(),window.matchMedia?.("(pointer: coarse)").matches&&Pt.settings&&(Pt.settings.quality="low",Pt._syncSettings?.()),cb(Pt.getSettings?.()||{}),dt.reset?.(),Pt.showMenu?.(),window.addEventListener("resize",xb),document.addEventListener("visibilitychange",vb),Wd(),ci.setAnimationLoop(_b)}catch(o){console.error(o),Ou.innerHTML=`<main class="fatal-error"><p class="eyebrow">NOVA FOOTBALL 26</p><h1>THE FLOODLIGHTS WENT OUT</h1><p>${bb(o?.message||"Unable to start WebGL.")}</p><button onclick="location.reload()">TRY AGAIN</button></main>`}}function sb(){const o=(t,e)=>Pt.on?.(t,e);o("play",ko),o("pause",()=>$a(ke==="playing")),o("skip",()=>{ke==="playing"&&Ki.edges.add("skip")}),o("resume",()=>$a(!1)),o("restart",ko),o("quit",Xd),o("quality",t=>qd(zi(t,"high"))),o("sound",t=>_t.setEnabled?.(sl(zi(t,!0)))),o("camera",t=>$d(zi(t,oe.mode))),o("difficulty",t=>dt.setDifficulty(zi(t,"normal"))),o("commentary",t=>_t.setCommentary(sl(zi(t,!0)))),o("passAssist",t=>{dt.passAssist=sl(zi(t,!0))}),o("mode",t=>{zc=zi(t,"kickoff")}),o("length",t=>{dt.matchLength=Gd[zi(t,"standard")]??300}),o("competition",t=>ob(zi(t,""))),o("t-pick",t=>ab(zi(t,""))),o("t-play",rb),o("t-sim",()=>{ce&&qv(ce)&&(Uc(ce),Fs())}),o("t-close",nl),o("t-finish",()=>{ce&&Uu(ce.id),nl()}),o("t-abandon",()=>{if(!Do){Do=!0,Fs(!0);return}ce&&Uu(ce.id),nl()}),o("continue",()=>{ce&&Fs()})}function Vd(o,t){const e=Bv(o,t);dt.setTeams(e),Fn.setSupporters(e),$i?.refreshKits(),Pt.setTeams(e)}const vo=()=>dt.teams.home.id===wn.home.id&&dt.teams.away.id===wn.away.id;function Wd(){for(const o of Object.values(tn)){const t=Od(o.id);Pt.setCompetitionStatus?.(o.id,t?`CONTINUE — ${Xe(t.teamId).short} • ${ec(t)}`:o.blurb,!!t)}}function ob(o){!tn[o]||!$i?.ready||(_t.init?.(),_t.play?.("ui"),ke="competition",ce=Od(o),ce?Fs():Pt.showTournament(Yv(o)),bo=o)}let bo=null;function ab(o){!bo||!tn[bo]?.teams.includes(o)||(ce=Hv(bo,o),Uc(ce),_t.play?.("ui",{pitch:1.2}),Fs())}function Fs(o=!1){ce&&(o||(Do=!1),dt.setPaused?.(!0),ke="competition",Ki.clear(),oe.stopShots(),Pt.setReplay?.(!1),Pt.showTournament(Qv(ce,{confirmAbandon:Do})))}function nl(){ce=null,bo=null,Do=!1,Pt.setCompetition?.(null),Vd(wn.home,wn.away),Wd(),Xd()}function rb(){const o=ce&&Fo(ce);if(!o)return;const t=Xe(ce.teamId),e=Xe(o.a===ce.teamId?o.b:o.a);Vd(t,e),Pt.setCompetition?.(tn[ce.id].short),ko()}function lb(){const{home:o,away:t}=dt.state.score,e=dt.teams.home,i=dt.teams.away,n=$v(ce,o,t);if(Uc(ce),!n)return{};let s=o===t?"HONOURS EVEN — A POINT EACH":`${(o>t?e:i).name} TAKE THE POINTS`,a="";if(ce.format==="knockout"){const r=n.won?e:i;if(s=ce.champion?`${r.name} ARE CHAMPIONS`:`${r.name} GO THROUGH`,n.shootout){const c=n.match.a===ce.teamId?n.shootout:{kicks:{a:n.shootout.kicks.b,b:n.shootout.kicks.a},score:[n.shootout.score[1],n.shootout.score[0]]};s=`LEVEL AFTER 90 — ${r.name} WIN ${Math.max(...c.score)}–${Math.min(...c.score)} ON PENALTIES`,a=tb(c,e.short,i.short)}}else ce.champion&&(s=`SEASON OVER — ${Xe(ce.champion).name} ARE CHAMPIONS`);return{callout:s,shootout:a}}function zi(o,t){return o&&typeof o=="object"?o.value??o.target?.value??t:o??t}function sl(o){return o===!0||o==="true"||o==="on"||o==="enabled"||o===1}function cb(o){qd(o.quality||"high"),_t.setEnabled?.(o.sound!==!1),_t.setCommentary?.(o.commentary!==!1),dt.passAssist=o.passAssist!==!1,dt?.setDifficulty(o.difficulty||"normal"),$d(o.camera||"broadcast"),zc=o.mode||"kickoff",dt.matchLength=Gd[o.length]??300}function ko(){ke==="competition"&&!(ce&&Fo(ce))||(_t.init?.(),_t.play?.("ui"),Ki.clear(),dt.autoplay=!ce&&zc==="spectate",ke="playing",Bc=null,Object.assign(Ve,{carryT:0,boxCalled:!1,turnoverT:-10,lateCalled:!1,touches:0}),oe.stopShots(),Pt.setReplay?.(!1),Pt.showHUD?.(),Pt.wipe?.(),dt.startIntro(),dt.setPaused?.(!1),window.setTimeout(()=>{vo()&&_t.say("welcome",2)},500))}function Xd(){if(ce&&ke!=="competition"){Fs();return}dt.setPaused?.(!0),ke="menu",Ki.clear(),oe.stopShots(),Pt.setReplay?.(!1),Pt.showMenu?.()}function $a(o){ke==="menu"||ke==="fulltime"||ke==="competition"||(ke=o?"paused":"playing",dt.setPaused?.(o),Ki.clear(),Pt.showPause?.(o),_t.play?.("ui",{pitch:o?.8:1.15}))}function $d(o){oe.setMode(o==="dynamic"?"dynamic":"broadcast"),ke==="playing"&&Pt.toast?.(`${oe.mode.toUpperCase()} CAMERA`,"neutral")}function qd(o){Gi=["low","medium","high"].includes(o)?o:"high";const t=Gi==="low"?1:Gi==="medium"?1.35:1.75;Qn=Math.min(window.devicePixelRatio||1,t),ci?.setPixelRatio(Qn),ci&&(ci.shadowMap.enabled=Gi!=="low"),Fn?.setQuality?.(Gi),yn?.setQuality?.(Gi),Js?.setQuality(Gi),$i?.setQuality?.(Gi)}function hb(o){const t=o.position||o.player?.position||dt?.ball?.position;return t?.isVector3?t:new L(t?.x||0,t?.y||0,t?.z||0)}const Fa=o=>String(o?.name??"").split(" ").pop().toUpperCase(),Ve={carryT:0,boxCalled:!1,turnoverT:-10,turnoverZ:0,lateCalled:!1,touches:0},qa=o=>o.position.z*o.attackDirection/(ks.length/2);function ub(o){const t=o.player;if(o.kind==="shot"){oe.impact(o.power*.3),_t.say("shot",2),_t.excite(.35);return}if(o.kind==="header"){_t.say(t&&qa(t)>.62?"headershot":"header",1);return}if(o.kind==="through"){_t.say("through",1);return}if(o.kind==="cross"){t?.isGoalkeeper?_t.say("gklong",1):t&&qa(t)>.45?_t.say("cross",1):o.target&&Math.abs(o.target.position.x-t.position.x)>22&&_t.say("switch",1);return}if(o.kind==="throw"){t?.isGoalkeeper&&_t.say("gkthrow",1);return}o.kind==="pass"&&(t?.isGoalkeeper&&o.target?_t.say("gkroll",0):o.target?.isGoalkeeper?_t.say("back",1):o.target&&(o.target.position.z-t.position.z)*t.attackDirection>9&&_t.say("pass",0))}function db(o){const t=o.player;Ve.carryT=0,Ve.boxCalled=!1,o.stolen&&(_t.say("intercept",1),_t.excite(.15),Ve.turnoverT=or.elapsedTime,Ve.turnoverZ=t.position.z),!(o.reason!=="control"||t===Bc)&&(Ve.touches+=1,_t.sayPlayer(t,{excited:qa(t)>.5,number:Ve.touches%5===1}))}function fb(o){if(dt.state.phase!=="playing")return;const t=dt.ball.holder;if(!Ve.lateCalled&&dt.state.elapsed>dt.state.duration*.94&&(Ve.lateCalled=_t.say("late",1)),!t||t.isGoalkeeper||dt.setPiece){Ve.carryT=0;return}const e=qa(t);Ve.carryT=t.animSpeed>5.5?Ve.carryT+o:0,Ve.carryT>2.4&&e>-.2&&_t.say("dribble",1)&&(Ve.carryT=-4),e>1-16.5/(ks.length/2)&&Math.abs(t.position.x)<20.2&&!Ve.boxCalled&&(Ve.boxCalled=!0,_t.say("box",2),_t.excite(.2)),or.elapsedTime-Ve.turnoverT<5&&Math.abs(t.position.z-Ve.turnoverZ)>26&&e>0&&(Ve.turnoverT=-10,_t.say("counter",1))}function pb(o={}){const t=hb(o),e=o.team?dt.teams[o.team]?.ui:void 0;switch(o.type){case"kick":o.kind==="shot"&&_t.play?.("strike",{power:o.power}),o.kind!=="throw"&&yn.emit?.("kick",t,e),ub(o);break;case"control":db(o),Bc=o.player;break;case"tackle":case"block":o.success!==!1&&(yn.emit?.("tackle",t,e),_t.say(o.type==="tackle"?"tackle":"block",1));break;case"slide":yn.emit?.("tackle",t,3111482);break;case"post":_t.play?.("post"),_t.say("post",2),oe.impact(.5),Pt.toast?.("OFF THE WOODWORK!","warning");break;case"save":_t.play?.("save"),_t.say("save",2),yn.emit?.("save",t,e),Pt.toast?.(o.text||"WHAT A SAVE!","warning"),oe.impact(.3);break;case"punch":_t.say("punch",2);break;case"collection":_t.say("catch",1);break;case"net":Fn.netHit?.(t,o.power),_t.play?.("net",{power:o.power});break;case"miss":_t.play?.("ooh"),_t.say("miss",2),o.player&&oe.playShots([{type:"actor",actor:o.player,dur:1.9,dist:4.6,height:1.5,fov:24}]);break;case"out":if(_t.play?.("whistle",{short:!0}),_t.say(o.kind,1),Pt.toast?.(`${o.kind.replace("-"," ").toUpperCase()} — ${dt.teams[o.team].short}`,"neutral"),o.kind==="corner")oe.playShots([{type:"point",point:dt.ball.position.clone(),dur:2.3,fov:30}]);else if(o.kind==="throw-in"){const i=dt.assistants[dt.ball.position.x>0?0:1];oe.playShots([{type:"point",point:dt.ball.position.clone(),dur:1,fov:30},{type:"actor",actor:i,dur:.9,dist:5.2,height:1.6,lookY:1.7,fov:28}])}break;case"offside":_t.play?.("whistle"),_t.announceDecision("offside"),Pt.toast?.(`OFFSIDE — ${Fa(o.player)}`,"warning"),oe.playShots([{type:"actor",actor:dt.assistants[o.player.attackDirection>0?0:1],dur:1.8,dist:4.2,height:1.5,fov:26}]);break;case"foul":{const i=o.kind==="penalty";_t.play?.("whistle"),_t.play?.(o.victim.team==="home"?"boo":"ooh"),_t.announceDecision(i?"penalty":o.card?"yellow":"foul"),Pt.toast?.(i?"PENALTY!":o.card?`YELLOW CARD — ${Fa(o.player)}`:`FREE KICK — ${Fa(o.player)}`,o.card||i?"warning":"neutral"),o.card&&Pt.showCard?.(o.player,dt.teams[o.player.team]);const n=[{type:"actor",actor:o.victim,dur:1.3,dist:4.4,height:1.2,fov:28}];n.push(o.card?{type:"actor",actor:dt.referee,dur:3.9,dist:5.4,height:1.6,lookY:1.55,fov:30}:{type:"actor",actor:dt.referee,dur:1.7,dist:5.4,height:1.6,lookY:1.5,fov:30}),oe.playShots(n);break}case"restart":if(oe.stopShots(!0),o.reason==="offside"){Pt.toast?.("OFFSIDE — INDIRECT FREE KICK","neutral");break}if(o.ceremony){const i=[{type:"actor",actor:o.player,dur:1.5,dist:5.2,height:1.6,lookY:1.3,fov:30}];o.wall&&i.push({type:"actor",actor:o.wall,dur:1.4,dist:8,height:1.8,lookY:1.2,fov:34}),i.push({type:"actor",actor:o.keeper,dur:1.4,dist:6,height:1.6,lookY:1.3,fov:30}),oe.playShots(i),Pt.toast?.(o.kind==="penalty"?"PENALTY — WAIT FOR THE WHISTLE":"FREE KICK — WAIT FOR THE WHISTLE","neutral")}else o.kind==="throw-in"&&o.player&&oe.playShots([{type:"actor",actor:o.player,inside:!0,dur:o.team==="away"||dt.autoplay?2.05:1.5,dist:7.5,height:1.9,lookY:1.5,fov:30}]);o.kind==="free-kick"&&Math.abs(t.z)>22&&_t.say("free-kick",1);break;case"setpiece-ready":_t.play?.("whistle",{short:!0});break;case"whistle":_t.play?.("whistle"),_t.say("kickoff",1);break;case"goal":{_t.play?.("goal"),_t.say("goal",3),vo()&&_t.say(o.team==="home"?"goalhome":"goalaway",2);{const{home:a,away:r}=o.score??dt.state.score,l=vo();window.setTimeout(()=>{a===r?_t.say("level",2):l&&_t.say(a>r?"leadhome":"leadaway",2)},6500)}yn.emit?.("goal",t,e),oe.celebrate(),window.setTimeout(()=>{dt.state.phase==="goal"&&Pt.showGoal?.(o)},2400);const i=o.player??dt.ball,n=Math.sign(t.z||1)*(ks.length/2),s=Math.sign(t.x||1);oe.playShots([{type:"move",from:[s*11,2.6,n-Math.sign(n)*15],to:[s*9,2.2,n-Math.sign(n)*11],actor:dt.ball,lookY:1,fov:30,dur:2.1},{type:"actor",actor:i,dur:2.45,dist:6.4,height:1.5,fov:27,orbit:.35},{type:"bench",side:o.team,dur:2.35},{type:"crowd",side:o.team==="home"?1:-1,dur:1.3}]);break}case"replay-start":oe.stopShots(),Pt.wipe?.(),Pt.setReplay?.(!0,{goal:"GOAL REPLAY",foul:"FOUL",offside:"OFFSIDE",miss:"SO CLOSE"}[o.kind]),_t.say("replay",1);break;case"replay-angle":Pt.wipe?.(),Pt.setReplay?.(!0,o.view==="scorer"?"SCORER’S VIEW":"GOAL REPLAY");break;case"intro":mb(o.stage);break;case"replay-end":Pt.wipe?.(),Pt.setReplay?.(!1);break;case"possession":_t.play?.("crowd",{intensity:.08});break;case"fulltime":{ke="fulltime",_t.play?.("whistle"),_t.say("fulltime",3);const{home:i,away:n}=dt.state.score,s=vo();window.setTimeout(()=>{i===n?_t.say("draw",3):s&&_t.say(i>n?"homewin":"awaywin",3)},3200),Pt.showFullTime?.(Kd(),ce?lb():{});break}}}function mb(o){const t=dt.referee;o==="walkout"?(Pt.setIntro?.("THE TEAMS WALK OUT",`${dt.teams.home.name}  v  ${dt.teams.away.name}`),_t.excite(.9),oe.playShots([{type:"move",from:[-27,2.1,5.3],to:[-19,1.8,6.2],actor:t,lookY:1.2,fov:39,dur:5},{type:"move",from:[-30,7,-16],to:[-22,5.5,-13],actor:t,lookY:1,fov:36,dur:4},{type:"move",from:[-3.5,1.6,-9],to:[-3.5,1.6,-3],aim:[-5.5,-.25,0],fov:38,dur:7}])):o==="lineup"?(Pt.setIntro?.("LINE-UPS",ce?.id==="world"?"THE NATIONAL ANTHEMS":"THE CLUB ANTHEMS"),_t.play?.("anthem"),oe.playShots([{type:"move",from:[-14.2,1.55,-17],to:[-14.2,1.55,-3],aim:[5.2,-.06,1.6],fov:34,dur:5},{type:"move",from:[-14.2,1.55,1],to:[-14.2,1.55,15],aim:[5.2,-.06,1.6],fov:34,dur:5}])):o==="toss"?(Pt.setIntro?.("COIN TOSS","CAPTAINS TO THE CENTRE"),oe.playShots([{type:"move",from:[-11,2.6,4],to:[-6,1.8,3.2],actor:t,lookY:1.4,fov:30,dur:4},{type:"move",from:[-4.2,1.7,.4],to:[-3.6,1.7,-.4],actor:t,lookY:1.6,fov:30,dur:3.5}])):o==="positions"?(Pt.setIntro?.("KICK-OFF NEXT",""),_t.play?.("anthem-stop"),oe.stopShots(!0)):(Pt.setIntro?.(null),_t.play?.("anthem-stop"),oe.stopShots(!0),Pt.toast?.("KICK OFF","accent"))}function Kd(){const o=dt?.controlledPlayer,t=dt?.setPiece,e=t&&!t.taker.kick?{kind:t.kind,team:t.taker.team,ready:!t.readyAt||t.ready,human:t.taker===o&&!dt.autoplay,indirect:t.indirect,began:t.timer<2.6}:null;return{...dt?.state||{},players:dt?.players||[],officials:dt?.officials||[],ball:dt?.ball,controlledPlayer:o,stamina:o?.stamina??1,appPhase:ke,cameraMode:oe?.mode,restart:e}}function gb(){const o=dt.ball.holder??dt.ball.intendedReceiver,t=ke==="playing"&&(dt.state.phase==="playing"||dt.state.phase==="dead")&&!oe.busy;if(!o||!t){Pt.setHolderTag?.(null);return}if(kn.copy(o.position),kn.y=2.15,kn.project(es),Math.abs(kn.z)>1||Math.abs(kn.x)>.98||Math.abs(kn.y)>.98){Pt.setHolderTag?.(null);return}Pt.setHolderTag?.({x:(kn.x*.5+.5)*window.innerWidth,y:(-kn.y*.5+.5)*window.innerHeight,text:`${o.number}  ${Fa(o)}`,color:dt.teams[o.team].ui,own:o.team==="home"})}function _b(){if(Hd)return;const o=Math.min(or.getDelta(),.05);Ki.context=dt.ball.holder?.team==="home"||dt._ballIsOurs?.(dt.controlledPlayer)?"attack":"defend";const t=Ki.consume();if(t.pause&&(ke==="playing"||ke==="paused")&&$a(ke==="playing"),t.camera){const a=oe.cycleMode();Pt.toast?.(`${a.toUpperCase()} CAMERA`,"neutral")}if(t.restart&&ke==="paused"&&!ce&&ko(),dt.state.phase==="intro"&&ke==="playing"&&(t.skip||t.confirm||t.pass||t.shoot||ic)?dt.skipIntro():t.skip&&dt.state.phase==="replay"&&(t.pass=!0),ic=!1,t.confirm&&ke==="menu"&&ko(),ke==="playing"){dt.update?.(o,oe.mapInput(t)),fb(o),il-=o;const a=dt.ball.position.z;il<=0&&dt.state.phase==="playing"&&Math.abs(a)>30&&vo()&&_t.say(a>0?"homeattack":"awayattack",0)&&(il=28)}$i?.update(o),Fn.update?.(o,dt?.state,oe.look),yn.update?.(o);const e=dt.replay?.pass===2?$i?.eyePosition(dt.replay.scorer,eb):null;oe.update(o,dt,e);const i=Kd();_t.update?.(o,i),Pt.update?.(i),gb(),Pt.root?.classList.toggle("is-cine",oe.busy),Pt.root?.classList.toggle("ctx-defend",Ki.context==="defend");const n=oe.povActor?.visual,s=n?.visible;n&&(n.visible=!1);try{Js.render()}finally{n&&(n.visible=s)}yb(o)}function yb(o){if(Gi!=="high"||(Ta+=o,el+=1,Ta<4))return;const t=el/Ta;Ta=0,el=0,t<38&&Qn>1&&(Qn=Math.max(1,Qn-.15),ci.setPixelRatio(Qn),Js.resize())}function xb(){!ci||!es||(es.aspect=window.innerWidth/window.innerHeight,es.updateProjectionMatrix(),ci.setSize(window.innerWidth,window.innerHeight,!1),Js?.resize())}function vb(){document.hidden&&ke==="playing"&&$a(!0),or.getDelta()}function bb(o){return String(o).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}window.addEventListener("beforeunload",()=>{Hd=!0,ci?.setAnimationLoop(null),Ki?.dispose?.(),$i?.dispose(),Js?.dispose(),Ua?.dispose(),dt?.dispose?.(),yn?.dispose?.(),Fn?.dispose?.(),_t?.dispose?.(),Pt?.dispose?.(),ci?.dispose?.()});nb();
