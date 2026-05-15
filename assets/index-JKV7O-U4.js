import{u as g,r as d,d as l,m as w,j as e,M as T,n as L,f as E,l as B,c as C}from"./vendor-CN2et5C7.js";import{g as u,S as M,a as k,G as I}from"./gsap-ComQbEoo.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();u.registerPlugin(M);function O(t){const o=g({minWidth:896}),a=g({minWidth:768,maxWidth:895}),s=g({maxWidth:767}),r=d.useCallback((i,c)=>{u.to(window,{scrollTo:i,duration:.3,ease:"power2.out",onComplete:c})},[]);d.useEffect(()=>{if(s)return;let i=!1;const c=f=>{const x=window.scrollY,h=window.innerHeight,n=f.deltaY>0?1:-1;let m=9;a&&(m=1);const b=h*m;if(x<h&&n===1){f.preventDefault();return}if(x<=b){if(x>=b&&n===1||x<=0&&n===-1||(f.preventDefault(),i))return;i=!0;const z=Math.round(x/h)+n,R=Math.max(0,Math.min(b,z*h));r(R,()=>{setTimeout(()=>{i=!1},50)});return}if(n===-1&&x>b-h){if(f.preventDefault(),i)return;i=!0,r(b,()=>{i=!1});return}};return window.addEventListener("wheel",c,{passive:!1}),()=>window.removeEventListener("wheel",c)},[a,o,s,r])}const v=(t=!0)=>{const o=u.timeline({defaults:{duration:.2}}),a=t?"x":"y",s=t?"xPercent":"yPercent";return o.set([".click",".line",".circle"],{visibility:"visible"}).set(".name",{color:"transparent"}).to(".click",{opacity:0}).from(".circle",{opacity:0},"<").from("#name1",{[s]:100,[a]:"1.25rem"},"<").from("#name3",{[s]:-100,[a]:"-1.25rem"},"<").to(".name",{boxShadow:"0 0 5px var(--main)"},"<").fromTo(".scroll",{opacity:0,yPercent:-100},{opacity:1,yPercent:0},"<").set(".click",{visibility:"hidden"},"<0.01").from(".lt",{xPercent:100,yPercent:100,opacity:0}).from(".rt",{xPercent:-100,yPercent:100,opacity:0},"<").from(".lb",{xPercent:100,yPercent:-100,opacity:0},"<").from(".rb",{xPercent:-100,yPercent:-100,opacity:0},"<").fromTo("#textBox",{right:"50%",bottom:"50%",xPercent:50,yPercent:50},{right:"6rem",bottom:"6rem",xPercent:0,yPercent:0},"<").from("#hello",{clipPath:"inset(0 100% 0 0)",opacity:0}).from(".text1",{clipPath:"inset(100% 0 0)",opacity:0},"<").from(".text2",{clipPath:"inset(0 0 100%)",opacity:0},"<").to(".name",{color:"var(--main)"}).from(".circle",{scale:.1,rotate:"360deg"},"<").from(".door",{clipPath:"inset(50% 0)"}).to(".scroll",{opacity:0,yPercent:50},"<").to(".c1",{top:0,yPercent:0},"<").to(".c2",{top:"initial",bottom:0,yPercent:0},"<").to(".c1",{top:"50%",yPercent:-50}).to(".c2",{bottom:"50%",yPercent:50},"<").to(".cl",{rotate:90}).to(".circle",{background:"var(--mainGD)"}).to(".lt",{clipPath:"inset(0 100% 100% 0)"}).to(".rt",{clipPath:"inset(0 0 100% 100%)"},"<").to(".lb",{clipPath:"inset(100% 100% 0 0)"},"<").to(".rb",{clipPath:"inset(100% 0 0 100%)"},"<").to(["#hello","#textBox"],{opacity:0},"<").to("#hello",{clipPath:"inset(0 100% 0 0)"},"<").to("#textBox > div",{clipPath:"inset(0 0 0 100%)"},"<").to(".door",{width:"100%"},"<").to(".circleLine",{width:"100%"},"<").to(".skip",{clipPath:"inset(0 0 0 100%)"},"<").to(".door",{borderColor:"transparent",duration:.1},"<0.1").to(".circle",{opacity:0,duration:.1},"<").from(".top",{scale:0,duration:.1},"<").fromTo(".page",{scale:0},{opacity:1,scale:1,duration:.1},"<"),o},y=()=>{const t=u.timeline();return t.set([".click",".line",".circle"],{visibility:"hidden"}).set(".scroll",{opacity:1,yPercent:0}).set(".name",{boxShadow:"0 0 5px var(--main)",color:"var(--main)"}).set("#textBox",{right:"4rem",bottom:"4rem",xPercent:0,yPercent:0}).to(["#hello","#textBox",".box",".scroll"],{opacity:0,clipPath:"inset(0 0 0 100%)"}).set(".page",{borderColor:"transparent"},"<").from(".page",{clipPath:"inset(0 100% 0 0)"},"<").to(".skip",{clipPath:"inset(0 0 0 100%)"},"<"),t};u.registerPlugin(k);const $=t=>{const o=d.useRef(null),a=d.useRef(!1),s=d.useRef(null),r=(n,m="900%")=>{o.current?.kill(),o.current=k.create({trigger:t.current,end:`+=${m}`,scrub:1,pin:!0,invalidateOnRefresh:!0,fastScrollEnd:!0,animation:n()}),window.scrollTo(0,0),u.to(t.current,{opacity:1})},i=()=>{s.current&&s.current.revert(),s.current=u.matchMedia();let n=s.current;n.add("(min-width: 1152px)",()=>r(()=>v(!0))),n.add("(min-width: 896px) and (max-width: 1151px)",()=>r(()=>v(!1))),n.add("(min-width: 768px) and (max-width: 895px)",()=>r(y,"100%")),n.add("(max-width: 767px)",()=>r(y,"10%"))};d.useEffect(()=>{const n=()=>{a.current&&t.current&&i()},m=()=>{n(),a.current||setTimeout(m,100)};return m(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n),s.current?.revert(),o.current?.kill()}},[i,t]);const c=(n,m)=>{o.current?.animation.progress(n),window.scrollTo({top:m})};return{skip:()=>c(1,window.innerHeight*9),top:()=>c(0,0),setReady:()=>{a.current=!0}}},S=l.div.attrs({className:"box size-29 border-solid border-(--main)"})`
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
`,j=l.div.attrs({className:"flex flex-col gap-10 items-end absolute z-50 break-keep text-8xl whitespace-pre"})`
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
`,D=w`
	to { text-shadow: 0 0 8px var(--main) }
`,P=l(S).attrs({className:"border-1 flex items-center justify-center "})`
	&.name {
		color: transparent;
		cursor: default;
		transition: rotate 0.2s ease-out;
	}
	&.click {
		padding: 0;
		font-size: 1.5rem;
		color: var(--main);
		animation: ${D} 0.6s alternate infinite;
		writing-mode: horizontal-tb;
	}
	&.click:hover ~ &#name2 {
		rotate: 45deg;
	}
`,W=l.div.attrs({className:"circleLine absolute w-0 left-1/2 -translate-x-1/2 inset-y-0 flex justify-center items-center"})`
	.line {
		box-shadow: 0 0 4px var(--main);
	}
`,H=l.div.attrs({className:"size-50 rounded-full border-2 border-solid border-(--main) absolute top-1/2 flex items-center justify-center"})`
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
		right: 100%;
		translate: 50% -50%;
	}
	&.c2 {
		clip-path: inset(0 0 0 50%);
		translate: -50% -50%;
		left: 100%;
	}
`,A=w`
to { translate: -50% 150% }`,F=l.div.attrs({className:"absolute bottom-20 left-1/2 -translate-1/2 rounded-full border-2 border-solid border-(--main) px-1 pt-4 pb-10 text-(--main) font-bold"})`
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
		animation: ${A} 0.6s ease-out alternate infinite;
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
`,K=l.button.attrs({type:"button",className:"top fixed z-50 bottom-10 right-10 size-10 rounded-full bg-(--main) text-(--bg) font-extrabold"})`
	border: 2px solid var(--main);
	transition:
		background-color 0.2s ease-out,
		color 0.2s ease-out;
	&:hover {
		background-color: var(--bg);
		color: var(--main);
	}
`,G=["이","하","늘"],Y=["lt","rt","lb","rb"],_=[1,2],q=()=>{window.scrollTo({top:window.innerHeight})};function J(){return e.jsxs(e.Fragment,{children:[e.jsx(j,{id:"hello",children:"안녕하세요"}),e.jsxs(j,{id:"textBox",className:"w-97 z-30",children:[e.jsx("div",{className:"text1",children:"웹 퍼블리셔"}),e.jsxs("div",{className:"namebox flex gap-5 justify-center",children:[e.jsx(P,{as:T,onClick:q,className:"absolute click z-10",children:"click"}),G.map((t,o)=>e.jsx(P,{id:`name${o+1}`,className:"name",children:t},t))]}),e.jsx("div",{className:"text2 translate-y-2",children:"입니다"})]}),Y.map(t=>e.jsx(S,{className:t},t)),e.jsx(W,{children:_.map(t=>e.jsx(H,{className:`circle c${t}`,children:e.jsx("div",{className:"cl"})},`c${t}`))}),e.jsx("div",{className:"door absolute h-full border-x border-(--main)"}),e.jsx(F,{className:"scroll",children:"scroll"})]})}const Q=l.div.attrs({className:"w-full h-screen flex flex-col items-center justify-center relative"})`
	@media (max-width: 768px) {
		height: 100dvh;
	}
`,V=w`
to {translate: -8px -2px}`,U=l.button.attrs({type:"button",className:"absolute top-20 right-20 text-(--main) font-bold flex items-center"})`
	font-size: 24px;
	&::before {
		content: '';
		height: 32px;
		aspect-ratio: 1;
		background: url('./skip.svg') center / contain no-repeat;
		translate: 0 -2px;
	}
	&:hover::before {
		animation: ${V} 0.3s ease-out alternate infinite;
	}
	@media (max-width: 480px) {
		top: 4rem;
		right: 4rem;
		font-size: 16px;
		&::before {
			height: 24px;
		}
	}
`,N=l.h2.attrs({className:"w-50 text-start text-2xl font-bold text-(--main)"})``,p=l.div.attrs({className:"w-full h-80 border-2 border-(--main)"})``,X=l.h3.attrs({className:"border text-(--main) rounded-full w-max px-4"})``,Z="/lhn_portfolio/react.svg",ee="/lhn_portfolio/vite.svg",te=[{title:"Markup & Styling",list:[{name:"html5",icon:"html5-plain colored"},{name:"css3",icon:"css3-plain colored"},{name:"styled components",icon:"styledcomponents-plain colored"},{name:"tailwindcss",icon:"tailwindcss-original colored"}]},{title:"Interactions",list:[{name:"javascript",icon:"javascript-plain colored"},{name:"zustand",icon:"zustand-plain"}]},{title:"Design & Collaboration",list:[{name:"figma",icon:"figma-plain"},{name:"photoshop",icon:"photoshop-plain"},{name:"gitHub",icon:"github-original"}]}];function re(){return e.jsx("div",{className:"h-full px-20 py-12 flex flex-col gap-10",children:te.map(t=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(X,{children:t.title}),e.jsxs("ul",{className:"flex gap-15",children:[t.title==="Markup & Styling"&&e.jsxs("li",{className:"flex flex-col gap-2 items-center",children:[e.jsxs("div",{className:"flex gap-4 w-max",children:[e.jsx("img",{className:"h-9",src:ee,alt:"vite"}),e.jsx("img",{className:"h-9",src:Z,alt:"react"})]}),"vite + react"]}),t.list.map(o=>e.jsxs("li",{className:"flex flex-col items-center gap-2 w-20",children:[e.jsx("i",{className:`devicon-${o.icon} text-4xl`}),o.name]},o.name)),t.title==="Interactions"&&e.jsxs("li",{className:"flex flex-col gap-2 items-center",children:[e.jsx("img",{className:"h-9",src:I,alt:"gsap"}),"gsap"]})]})]},t.title))})}function ie(){return e.jsxs("div",{className:"card flex-1 min-w-0 grid gap-4",children:[e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{})]})}function oe(){return e.jsxs("div",{className:"page p-20 flex flex-col gap-40 -mt-[100vh] opacity-0",children:[e.jsxs("div",{className:"flex gap-20 w-full",children:[e.jsx(N,{children:"SKILLS"}),e.jsx("div",{className:"border border-(--main) flex-1 min-w-0",children:e.jsx(re,{})})]}),e.jsxs("div",{className:"flex gap-20 w-full",children:[e.jsx(N,{children:"PROJECTS"}),e.jsx(ie,{})]})]})}function se({onReady:t}){const[o,a]=d.useState(!1);d.useEffect(()=>{L(async i=>{await B(i)}).then(()=>a(!0))},[]);const s=d.useMemo(()=>({background:{color:{value:"#020014"}},fpsLimit:30,particles:{color:{value:"#ffffff"},move:{enable:!0,speed:.2},number:{density:{enable:!0},value:80},opacity:{value:{min:.2,max:.5}},shape:{type:"circle"},size:{value:{min:1,max:3}}},detectRetina:!1}),[]),r=()=>t();return o?e.jsx(E,{id:"tsparticles",particlesLoaded:r,options:s,className:"fixed inset-0 -z-1"}):null}function ne(){const t=d.useRef(null),{skip:o,top:a,setReady:s}=$(t);return O(),e.jsxs(e.Fragment,{children:[e.jsxs(Q,{ref:t,className:"opacity-0",children:[e.jsx(J,{}),e.jsx(U,{className:"skip",onClick:o,children:"SKIP"})]}),e.jsx(oe,{}),e.jsx(se,{onReady:s}),e.jsx(K,{onClick:a,children:"TOP"})]})}C.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(ne,{})}));
