import{u as y,r as c,d as l,m as h,j as e,M as N,n as z,f as R,l as S,c as T}from"./vendor-BDHbCBD_.js";import{g as m,S as L,a as u}from"./gsap-tRRvqEZY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();m.registerPlugin(L);function B(){const t=y({minWidth:896}),o=y({minWidth:768});c.useEffect(()=>{let a=!1;function n(r){if(!o)return;const i=window.scrollY,d=window.innerHeight;if(t&&i<d){r.preventDefault(),window.scrollTo({top:0});return}if(r.preventDefault(),a)return;const f=r.deltaY>0?1:-1;let b=window.scrollY+window.innerHeight*f;a=!0,m.to(window,{scrollTo:b,duration:.2,ease:"power2.out",onComplete:()=>{setTimeout(()=>{a=!1},100)}})}return window.addEventListener("wheel",n,{passive:!1}),()=>window.removeEventListener("wheel",n)},[t,o])}const E=()=>{const t=m.timeline({defaults:{duration:.2}});return t.set([".click",".line",".circle"],{visibility:"visible"}).to(".click",{opacity:0}).from("#name1",{xPercent:100,x:"1.25rem"},"<").from("#name3",{xPercent:-100,x:"-1.25rem"},"<").to(".name",{boxShadow:"0 0 5px var(--main)"},"<").fromTo(".scroll",{opacity:0,yPercent:-100},{opacity:1,yPercent:0},"<").set(".click",{visibility:"hidden"},"<0.01").from(".lt",{xPercent:100,yPercent:100,opacity:0}).from(".rt",{xPercent:-100,yPercent:100,opacity:0},"<").from(".lb",{xPercent:100,yPercent:-100,opacity:0},"<").from(".rb",{xPercent:-100,yPercent:-100,opacity:0},"<").fromTo("#textBox",{right:"50%",bottom:"50%",xPercent:50,yPercent:50},{right:"6rem",bottom:"6rem",xPercent:0,yPercent:0},"<").from("#hello",{clipPath:"inset(0 100% 0 0)"}).from(".text1",{clipPath:"inset(100% 0 0)"},"<").from(".text2",{clipPath:"inset(0 0 100%)"},"<").to(".name",{color:"var(--main)"}).from(".circle",{opacity:0},"<").from(".line",{clipPath:"inset(50% 0)"}).to(".scroll",{opacity:0,yPercent:50},"<").to(".c1",{top:0,yPercent:0},"<").to(".c2",{top:"initial",bottom:0,yPercent:0},"<").to(".c1",{top:"50%",yPercent:-50}).to(".c2",{bottom:"50%",yPercent:50},"<").to(".cl",{rotate:90}).to(".circle",{background:"var(--mainGD)"}).to(["#hello","#textBox",".circleLine",".box"],{opacity:0,duration:.4}).from(".page",{clipPath:"inset(0 100%)",duration:.4},"<").to(".skip",{clipPath:"inset(0 0 0 100%)"},"<0.2"),t},O=()=>{const t=m.timeline({defaults:{duration:.2}});return t.set([".click",".line",".circle"],{visibility:"visible"}).to(".click",{opacity:0}).from("#name1",{yPercent:100,y:"1.25rem"},"<").from("#name3",{yPercent:-100,y:"-1.25rem"},"<").to(".name",{boxShadow:"0 0 5px var(--main)"},"<").fromTo(".scroll",{opacity:0,yPercent:-100},{opacity:1,yPercent:0},"<").set(".click",{visibility:"hidden"},"<0.01").from(".lt",{xPercent:100,yPercent:100,opacity:0}).from(".rt",{xPercent:-100,yPercent:100,opacity:0},"<").from(".lb",{xPercent:100,yPercent:-100,opacity:0},"<").from(".rb",{xPercent:-100,yPercent:-100,opacity:0},"<").fromTo("#textBox",{right:"50%",bottom:"50%",xPercent:50,yPercent:50},{right:"6rem",bottom:"6rem",xPercent:0,yPercent:0},"<").from("#hello",{clipPath:"inset(0 100% 0 0)"}).from(".text1",{clipPath:"inset(100% 0 0)"},"<").from(".text2",{clipPath:"inset(0 0 100%)"},"<").to(".name",{color:"var(--main)"}).from(".circle",{opacity:0},"<").from(".line",{clipPath:"inset(50% 0)"}).to(".scroll",{opacity:0,yPercent:50},"<").to(".c1",{top:0,yPercent:0},"<").to(".c2",{top:"initial",bottom:0,yPercent:0},"<").to(".c1",{top:"50%",yPercent:-50}).to(".c2",{bottom:"50%",yPercent:50},"<").to(".cl",{rotate:90}).to(".circle",{background:"var(--mainGD)"}).to(["#hello","#textBox",".circleLine",".box"],{opacity:0,duration:.4}).from(".page",{clipPath:"inset(0 100%)",duration:.4},"<").to(".skip",{clipPath:"inset(0 0 0 100%)"},"<0.2"),t},g=()=>{const t=m.timeline();return t.set([".click",".line",".circle"],{visibility:"hidden"}).set(".scroll",{opacity:1,yPercent:0}).set(".name",{boxShadow:"0 0 5px var(--main)",color:"var(--main)"}).set("#textBox",{right:"4rem",bottom:"4rem",xPercent:0,yPercent:0}).to(["#hello","#textBox",".box",".scroll"],{opacity:0}).from(".page",{clipPath:"inset(100% 0)"},"<").to(".skip",{clipPath:"inset(0 0 0 100%)"},"<"),t};m.registerPlugin(u);const C=t=>{const o=c.useRef(null),a=c.useRef(!1),n=c.useRef(null),r=(s,p="1000%")=>{u.getAll().forEach(k=>k.kill()),o.current=u.create({trigger:t.current,end:`+=${p}`,scrub:1,pin:!0,invalidateOnRefresh:!0,animation:s(),markers:!0})},i=()=>{n.current&&n.current.revert(),n.current=m.matchMedia();let s=n.current;s.add("(min-width: 1152px)",()=>r(E)),s.add("(min-width: 896px) and (max-width: 1151px)",()=>r(O)),s.add("(min-width: 768px) and (max-width: 895px)",()=>r(g,"500%")),s.add("(max-width: 767px)",()=>r(g,"150%"))};c.useEffect(()=>{const s=()=>{a.current&&t.current&&i()},p=()=>{s(),a.current||setTimeout(p,100)};return p(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),n.current&&n.current.revert(),o.current&&o.current.kill()}},[i,t]);const d=(s,p)=>{o.current?.animation.progress(s),window.scrollTo({top:p})};return{skip:()=>d(1,window.innerHeight*10),top:()=>d(0,0),setReady:()=>{a.current=!0}}},P=l.div.attrs({className:"box size-29 border-solid border-(--main)"})`
	scroll-behavior: smooth;
	&:is(.lt, .rt, .lb, .rb) {
		position: absolute;
	}
	&:is(.lt, .rt) {
		top: 40px;
	}
	&:is(.lb, .rb) {
		bottom: 40px;
	}
	&:is(.lt, .lb) {
		left: 40px;
	}
	&:is(.rt, .rb) {
		right: 40px;
	}
	&.lt {
		border-width: 1px 0 0 1px;
	}
	&.rt {
		border-width: 1px 1px 0 0;
	}
	&.lb {
		border-width: 0 0 1px 1px;
	}
	&.rb {
		border-width: 0 1px 1px 0;
	}

	@media (max-width: 1400px) {
		width: 6rem;
		height: 6rem;
	}
	@media (max-width: 1152px) {
		width: 5rem;
		height: 5rem;
	}
	@media (max-width: 480px) {
		width: 4rem;
		height: 4rem;
	}
`,w=l.div.attrs({className:"flex flex-col gap-10 items-end absolute break-keep text-8xl whitespace-pre"})`
	&#hello {
		left: 6rem;
		top: 6rem;
	}
	@media (max-width: 1400px) {
		font-size: 5rem;
		&#textBox {
			width: calc(var(--spacing) * 82);
		}
	}
	@media (max-width: 1152px) {
		font-size: 4rem;
		&#textBox {
			gap: 1.25rem;
			width: max-content;
			height: calc(var(--spacing) * 70);
			writing-mode: vertical-rl;
		}
	}
	@media (max-width: 480px) {
		font-size: 3rem;
		&#textBox {
			gap: 1rem;
			height: calc(var(--spacing) * 58);
		}
		&#hello {
			left: 5rem;
			top: 5rem;
		}
	}
`,M=h`
	to { text-shadow: 0 0 8px var(--main) }
`,v=l(P).attrs({className:"border-1 flex items-center justify-center pt-3"})`
	&.name {
		color: transparent;
		cursor: default;
		transition: rotate 0.2s ease-out;
	}
	&.click {
		padding: 0;
		font-size: 1.5rem;
		color: var(--main);
		animation: ${M} 0.6s alternate infinite;
		writing-mode: horizontal-tb;
	}
	&.click:hover ~ &#name2 {
		rotate: 45deg;
	}
	@media (max-width: 1152px) {
		padding-top: 0.4rem;
	}
	@media (max-width: 480px) {
		padding-top: 0;
	}
`,$=l.div.attrs({className:"circleLine absolute inset-0 flex justify-center"})`
	.line {
		box-shadow: 0 0 4px var(--main);
	}
`,I=l.div.attrs({className:"size-50 rounded-full border-2 border-solid border-(--main) absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"})`
	&::before {
		content: '';
		position: absolute;
		inset: 25%;
		border-radius: 50%;
		background: var(--bg);
		border: inherit;
		box-shadow: inherit;
	}
	div {
		width: 2px;
		height: 100%;
		background: var(--main);
		box-shadow: inherit;
		z-index: 1;
	}
	&.c1 {
		clip-path: inset(0 50% 0 0);
	}
	&.c2 {
		clip-path: inset(0 0 0 50%);
	}
`,W=h`
to { translate: -50% 150% }`,A=l.div.attrs({className:"absolute bottom-20 left-1/2 -translate-1/2 rounded-full border-2 border-solid border-(--main) px-1 pt-4 pb-10 text-(--main) font-bold"})`
	cursor: default;
	box-shadow: 0 0 4px var(--main);
	&::after {
		content: '';
		position: absolute;
		width: 2px;
		height: 12px;
		border-radius: 8px;
		left: 50%;
		top: 50%;
		translate: -50% 20%;
		background: var(--main);
		box-shadow: inherit;
		animation: ${W} 0.6s ease-out alternate infinite;
	}

	@media (max-width: 1152px) {
		left: 6rem;
		bottom: 5rem;
	}
	@media (max-width: 480px) {
		font-size: 12px;
		bottom: 50%;
		left: 2rem;
		translate: 0 50%;
	}
`,D=["이","하","늘"],F=["lt","rt","lb","rb"],H=[1,2],Y=()=>{window.scrollTo({top:window.innerHeight})};function G(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{id:"hello",children:"안녕하세요"}),e.jsxs(w,{id:"textBox",className:"w-97 z-30",children:[e.jsx("div",{className:"text1",children:"웹 퍼블리셔"}),e.jsxs("div",{className:"namebox flex gap-5 justify-center",children:[e.jsx(v,{as:N,onClick:Y,className:"absolute click z-10",children:"click"}),D.map((t,o)=>e.jsx(v,{id:`name${o+1}`,className:"name",children:t},t))]}),e.jsx("div",{className:"text2 translate-y-2",children:"입니다"})]}),F.map(t=>e.jsx(P,{className:t},t)),e.jsxs($,{children:[H.map(t=>e.jsx(I,{className:`circle c${t}`,children:e.jsx("div",{className:"cl"})},`c${t}`)),e.jsx("div",{className:"line w-0.5 h-full bg-(--main) z-10"})]}),e.jsx(A,{className:"scroll",children:"scroll"})]})}const j=l.div.attrs({className:"w-full h-screen flex flex-col items-center justify-center relative overflow-hidden"})`
	@media (max-width: 768px) {
		height: 100dvh;
	}
`,K=h`
to {translate: -8px -2px}`,q=l.button.attrs({type:"button",className:"absolute top-20 right-20 text-(--main) font-bold flex items-center"})`
	font-size: 24px;
	&::before {
		content: '';
		height: 32px;
		aspect-ratio: 1;
		background: url('./skip.svg') center / contain no-repeat;
		translate: 0 -2px;
	}
	&:hover::before {
		animation: ${K} 0.3s ease-out alternate infinite;
	}
	@media (max-width: 480px) {
		top: 4rem;
		right: 4rem;
		font-size: 16px;
		&::before {
			height: 24px;
		}
	}
`,Q=l.button.attrs({type:"button",className:"absolute z-30 bottom-20 right-20 size-10 rounded-full bg-(--main) text-(--bg) font-extrabold pt-1 pl-0.5"})`
	border: 2px solid var(--main);
	transition: background-color 0.2s ease-out, color 0.2s ease-out;
	&:hover {
		background-color: var(--bg);
		color: var(--main);
	}
`,x=l.div.attrs({className:"w-80 h-100 relative"})`
	background: var(--main);
	clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
	&::before {
		content: '';
		position: absolute;
		inset: 2px;
		background: var(--bg);
		clip-path: inherit;
	}
`;function J({top:t}){return e.jsxs(j,{className:"page z-30",children:[e.jsx("h2",{className:"absolute left-20 top-20 text-2xl font-bold text-(--main)",children:"PORTFOLIO"}),e.jsxs("div",{className:"flex",children:[e.jsx(x,{children:e.jsx("div",{className:"absolute z-10"})}),e.jsx(x,{}),e.jsx(x,{})]}),e.jsx(Q,{onClick:t,children:"TOP"})]})}function U({onReady:t}){const[o,a]=c.useState(!1);c.useEffect(()=>{z(async i=>{await S(i)}).then(()=>a(!0))},[]);const n=c.useMemo(()=>({background:{color:{value:"#020014"}},fpsLimit:30,particles:{color:{value:"#ffffff"},move:{enable:!0,speed:.2},number:{density:{enable:!0},value:80},opacity:{value:{min:.2,max:.5}},shape:{type:"circle"},size:{value:{min:1,max:3}}},detectRetina:!1}),[]),r=()=>t();return o?e.jsx(R,{id:"tsparticles",particlesLoaded:r,options:n,className:"fixed inset-0 -z-1"}):null}function V(){B();const t=c.useRef(null),{skip:o,top:a,setReady:n}=C(t);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{ref:t,children:[e.jsx(G,{className:"test"}),e.jsx(q,{className:"skip",onClick:o,children:"SKIP"}),e.jsx(J,{top:a})]}),e.jsx(U,{onReady:n})]})}T.createRoot(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(V,{})}));
