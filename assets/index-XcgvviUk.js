import{u as w,r as d,d as c,m as h,j as e,M as T,n as R,f as L,l as E,c as B}from"./vendor-CN2et5C7.js";import{g as x,S as C,a as k,G as O}from"./gsap-ComQbEoo.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();x.registerPlugin(C);function I(t){const i=w({minWidth:896}),s=w({minWidth:768});d.useEffect(()=>{let n=!1;function r(o){if(!s)return;const m=window.scrollY,u=window.innerHeight;if(t.current){const a=t.current.offsetTop,l=window.innerWidth;let f=0;l>=1152||l>=896&&l<=1151?f=u*10:l>=768&&l<=895?f=u*1:f=u*.1;const z=a+f;if(m>=z)return}if(i&&m<u){o.preventDefault(),window.scrollTo({top:0});return}if(o.preventDefault(),n)return;const b=o.deltaY>0?1:-1;let g=window.scrollY+window.innerHeight*b;n=!0,x.to(window,{scrollTo:g,duration:.2,ease:"power2.out",onComplete:()=>{setTimeout(()=>{n=!1},100)}})}return window.addEventListener("wheel",r,{passive:!1}),()=>window.removeEventListener("wheel",r)},[i,s])}const v=(t=!0)=>{const i=x.timeline({defaults:{duration:.2}}),s=t?"x":"y",n=t?"xPercent":"yPercent";return i.set([".click",".line",".circle"],{visibility:"visible"}).set(".name",{color:"transparent"}).to(".click",{opacity:0}).from(".circle",{opacity:0},"<").from("#name1",{[n]:100,[s]:"1.25rem"},"<").from("#name3",{[n]:-100,[s]:"-1.25rem"},"<").to(".name",{boxShadow:"0 0 5px var(--main)"},"<").fromTo(".scroll",{opacity:0,yPercent:-100},{opacity:1,yPercent:0},"<").set(".click",{visibility:"hidden"},"<0.01").from(".lt",{xPercent:100,yPercent:100,opacity:0}).from(".rt",{xPercent:-100,yPercent:100,opacity:0},"<").from(".lb",{xPercent:100,yPercent:-100,opacity:0},"<").from(".rb",{xPercent:-100,yPercent:-100,opacity:0},"<").fromTo("#textBox",{right:"50%",bottom:"50%",xPercent:50,yPercent:50},{right:"6rem",bottom:"6rem",xPercent:0,yPercent:0},"<").from("#hello",{clipPath:"inset(0 100% 0 0)",opacity:0}).from(".text1",{clipPath:"inset(100% 0 0)",opacity:0},"<").from(".text2",{clipPath:"inset(0 0 100%)",opacity:0},"<").to(".name",{color:"var(--main)"}).from(".circle",{scale:.1,rotate:"360deg"},"<").from(".door",{clipPath:"inset(50% 0)"}).to(".scroll",{opacity:0,yPercent:50},"<").to(".c1",{top:0,yPercent:0},"<").to(".c2",{top:"initial",bottom:0,yPercent:0},"<").to(".c1",{top:"50%",yPercent:-50}).to(".c2",{bottom:"50%",yPercent:50},"<").to(".cl",{rotate:90}).to(".circle",{background:"var(--mainGD)"}).to(".lt",{clipPath:"inset(0 100% 100% 0)"}).to(".rt",{clipPath:"inset(0 0 100% 100%)"},"<").to(".lb",{clipPath:"inset(100% 100% 0 0)"},"<").to(".rb",{clipPath:"inset(100% 0 0 100%)"},"<").to(["#hello","#textBox"],{opacity:0},"<").to(".door",{width:"100%",duration:.4},"<").to(".circleLine",{width:"100%",duration:.4},"<").to(".skip",{clipPath:"inset(0 0 0 100%)"},"<0.2").to(".door",{borderColor:"transparent",duration:.1},"<0.1").to(".circle",{opacity:0,duration:.1},"<").from(".top",{scale:0,duration:.1},"<"),i},y=()=>{const t=x.timeline();return t.set([".click",".line",".circle"],{visibility:"hidden"}).set(".scroll",{opacity:1,yPercent:0}).set(".name",{boxShadow:"0 0 5px var(--main)",color:"var(--main)"}).set("#textBox",{right:"4rem",bottom:"4rem",xPercent:0,yPercent:0}).to(["#hello","#textBox",".box",".scroll"],{opacity:0,clipPath:"inset(0 0 0 100%)"}).set(".page",{borderColor:"transparent"},"<").from(".page",{clipPath:"inset(0 100% 0 0)"},"<").to(".skip",{clipPath:"inset(0 0 0 100%)"},"<"),t};x.registerPlugin(k);const M=t=>{const i=d.useRef(null),s=d.useRef(!1),n=d.useRef(null),r=(a,l="1000%")=>{i.current?.kill(),i.current=k.create({trigger:t.current,end:`+=${l}`,scrub:1,pin:!0,invalidateOnRefresh:!0,animation:a()}),window.scrollTo(0,0),x.to(t.current,{opacity:1})},o=()=>{n.current&&n.current.revert(),n.current=x.matchMedia();let a=n.current;a.add("(min-width: 1152px)",()=>r(()=>v(!0))),a.add("(min-width: 896px) and (max-width: 1151px)",()=>r(()=>v(!1))),a.add("(min-width: 768px) and (max-width: 895px)",()=>r(y,"100%")),a.add("(max-width: 767px)",()=>r(y,"10%"))};d.useEffect(()=>{const a=()=>{s.current&&t.current&&o()},l=()=>{a(),s.current||setTimeout(l,100)};return l(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a),n.current?.revert(),i.current?.kill()}},[o,t]);const m=(a,l)=>{i.current?.animation.progress(a),window.scrollTo({top:l})};return{skip:()=>m(1,window.innerHeight*10),top:()=>m(0,0),setReady:()=>{s.current=!0}}},S=c.div.attrs({className:"box size-29 border-solid border-(--main)"})`
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
`,j=c.div.attrs({className:"flex flex-col gap-10 items-end absolute z-50 break-keep text-8xl whitespace-pre"})`
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
`,$=h`
	to { text-shadow: 0 0 8px var(--main) }
`,P=c(S).attrs({className:"border-1 flex items-center justify-center "})`
	&.name {
		color: transparent;
		cursor: default;
		transition: rotate 0.2s ease-out;
	}
	&.click {
		padding: 0;
		font-size: 1.5rem;
		color: var(--main);
		animation: ${$} 0.6s alternate infinite;
		writing-mode: horizontal-tb;
	}
	&.click:hover ~ &#name2 {
		rotate: 45deg;
	}
`,H=c.div.attrs({className:"circleLine absolute w-0 left-1/2 -translate-x-1/2 inset-y-0 flex justify-center items-center"})`
	.line {
		box-shadow: 0 0 4px var(--main);
	}
`,W=c.div.attrs({className:"size-50 rounded-full border-2 border-solid border-(--main) absolute top-1/2 flex items-center justify-center"})`
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
`,D=h`
to { translate: -50% 150% }`,A=c.div.attrs({className:"absolute bottom-20 left-1/2 -translate-1/2 rounded-full border-2 border-solid border-(--main) px-1 pt-4 pb-10 text-(--main) font-bold"})`
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
		animation: ${D} 0.6s ease-out alternate infinite;
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
`,F=c.button.attrs({type:"button",className:"top fixed z-50 bottom-10 right-10 size-10 rounded-full bg-(--main) text-(--bg) font-extrabold"})`
	border: 2px solid var(--main);
	transition:
		background-color 0.2s ease-out,
		color 0.2s ease-out;
	&:hover {
		background-color: var(--bg);
		color: var(--main);
	}
`,K=["이","하","늘"],Y=["lt","rt","lb","rb"],G=[1,2],_=()=>{window.scrollTo({top:window.innerHeight})};function q(){return e.jsxs(e.Fragment,{children:[e.jsx(j,{id:"hello",children:"안녕하세요"}),e.jsxs(j,{id:"textBox",className:"w-97 z-30",children:[e.jsx("div",{className:"text1",children:"웹 퍼블리셔"}),e.jsxs("div",{className:"namebox flex gap-5 justify-center",children:[e.jsx(P,{as:T,onClick:_,className:"absolute click z-10",children:"click"}),K.map((t,i)=>e.jsx(P,{id:`name${i+1}`,className:"name",children:t},t))]}),e.jsx("div",{className:"text2 translate-y-2",children:"입니다"})]}),Y.map(t=>e.jsx(S,{className:t},t)),e.jsx(H,{children:G.map(t=>e.jsx(W,{className:`circle c${t}`,children:e.jsx("div",{className:"cl"})},`c${t}`))}),e.jsx("div",{className:"door absolute h-full border-x border-(--main)"}),e.jsx(A,{className:"scroll",children:"scroll"})]})}const J=c.div.attrs({className:"w-full h-screen flex flex-col items-center justify-center relative"})`
	@media (max-width: 768px) {
		height: 100dvh;
	}
`,Q=h`
to {translate: -8px -2px}`,V=c.button.attrs({type:"button",className:"absolute top-20 right-20 text-(--main) font-bold flex items-center"})`
	font-size: 24px;
	&::before {
		content: '';
		height: 32px;
		aspect-ratio: 1;
		background: url('./skip.svg') center / contain no-repeat;
		translate: 0 -2px;
	}
	&:hover::before {
		animation: ${Q} 0.3s ease-out alternate infinite;
	}
	@media (max-width: 480px) {
		top: 4rem;
		right: 4rem;
		font-size: 16px;
		&::before {
			height: 24px;
		}
	}
`,N=c.h2.attrs({className:"w-50 text-start text-2xl font-bold text-(--main)"})``,p=c.div.attrs({className:"w-full h-80 border-2 border-(--main)"})``,U=c.h3.attrs({className:"border text-(--main) rounded-full w-max px-4"})``,X="/lhn_portfolio/react.svg",Z="/lhn_portfolio/vite.svg",ee=[{title:"Markup & Styling",list:[{name:"html5",icon:"html5-plain colored"},{name:"css3",icon:"css3-plain colored"},{name:"styled components",icon:"styledcomponents-plain colored"},{name:"tailwindcss",icon:"tailwindcss-original colored"}]},{title:"Interactions",list:[{name:"javascript",icon:"javascript-plain colored"},{name:"zustand",icon:"zustand-plain"}]},{title:"Design & Collaboration",list:[{name:"figma",icon:"figma-plain"},{name:"photoshop",icon:"photoshop-plain"},{name:"gitHub",icon:"github-original"}]}];function te(){return e.jsx("div",{className:"h-full px-20 py-12 flex flex-col gap-10",children:ee.map(t=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(U,{children:t.title}),e.jsxs("ul",{className:"flex gap-15",children:[t.title==="Markup & Styling"&&e.jsxs("li",{className:"flex flex-col gap-2 items-center",children:[e.jsxs("div",{className:"flex gap-4 w-max",children:[e.jsx("img",{className:"h-9",src:Z,alt:"vite"}),e.jsx("img",{className:"h-9",src:X,alt:"react"})]}),"vite + react"]}),t.list.map(i=>e.jsxs("li",{className:"flex flex-col items-center gap-2 w-20",children:[e.jsx("i",{className:`devicon-${i.icon} text-4xl`}),i.name]},i.name)),t.title==="Interactions"&&e.jsxs("li",{className:"flex flex-col gap-2 items-center",children:[e.jsx("img",{className:"h-9",src:O,alt:"gsap"}),"gsap"]})]})]},t.title))})}function re(){return e.jsxs("div",{className:"card flex-1 min-w-0 grid gap-4",children:[e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{})]})}function ie(){return e.jsxs("div",{className:"p-20 flex flex-col gap-40 -mt-[100vh]",children:[e.jsxs("div",{className:"flex gap-20 w-full",children:[e.jsx(N,{children:"SKILLS"}),e.jsx("div",{className:"border border-(--main) flex-1 min-w-0",children:e.jsx(te,{})})]}),e.jsxs("div",{className:"flex gap-20 w-full",children:[e.jsx(N,{children:"PROJECTS"}),e.jsx(re,{})]})]})}function oe({onReady:t}){const[i,s]=d.useState(!1);d.useEffect(()=>{R(async o=>{await E(o)}).then(()=>s(!0))},[]);const n=d.useMemo(()=>({background:{color:{value:"#020014"}},fpsLimit:30,particles:{color:{value:"#ffffff"},move:{enable:!0,speed:.2},number:{density:{enable:!0},value:80},opacity:{value:{min:.2,max:.5}},shape:{type:"circle"},size:{value:{min:1,max:3}}},detectRetina:!1}),[]),r=()=>t();return i?e.jsx(L,{id:"tsparticles",particlesLoaded:r,options:n,className:"fixed inset-0 -z-1"}):null}function ne(){const t=d.useRef(null),{skip:i,top:s,setReady:n}=M(t);return I(t),e.jsxs(e.Fragment,{children:[e.jsxs(J,{ref:t,className:"opacity-0",children:[e.jsx(q,{}),e.jsx(V,{className:"skip",onClick:i,children:"SKIP"})]}),e.jsx(ie,{}),e.jsx(oe,{onReady:n}),e.jsx(F,{onClick:s,children:"TOP"})]})}B.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(ne,{})}));
