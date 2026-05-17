import{u as b,r as d,d as l,m as w,j as e,M as T,n as L,f as R,l as E,c as B}from"./vendor-CN2et5C7.js";import{g as u,S as C,a as N,G as M}from"./gsap-ComQbEoo.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();u.registerPlugin(C);function O(t){const r=b({minWidth:896}),s=b({minWidth:768,maxWidth:895}),a=b({maxWidth:767}),o=d.useCallback((i,c)=>{u.to(window,{scrollTo:i,duration:.3,ease:"power2.out",onComplete:c})},[]);d.useEffect(()=>{if(a)return;let i=!1;const c=h=>{const p=window.scrollY,f=window.innerHeight,n=h.deltaY>0?1:-1;let m=9;s&&(m=1);const g=f*m;if(r&&p<f&&n===1){h.preventDefault();return}if(p<=g){if(p>=g&&n===1||p<=0&&n===-1||(h.preventDefault(),i))return;i=!0;const S=Math.round(p/f)+n,z=Math.max(0,Math.min(g,S*f));o(z,()=>{setTimeout(()=>{i=!1},50)});return}if(n===-1&&p>g-f){if(h.preventDefault(),i)return;i=!0,o(g,()=>{i=!1});return}};return window.addEventListener("wheel",c,{passive:!1}),()=>window.removeEventListener("wheel",c)},[s,r,a,o])}const v=(t=!0)=>{const r=u.timeline({defaults:{duration:.2}}),s=t?"x":"y",a=t?"xPercent":"yPercent";return r.to(".click",{opacity:0}).from(".circle",{opacity:0},"<").from("#name1",{[a]:100,[s]:"1.25rem"},"<").from("#name3",{[a]:-100,[s]:"-1.25rem"},"<").to(".name",{boxShadow:"0 0 5px var(--main)"},"<").fromTo(".scroll",{opacity:0,yPercent:-100},{opacity:1,yPercent:0},"<").set(".click",{pointerEvents:"none"},"<0.01").from(".lt",{xPercent:100,yPercent:100,opacity:0}).from(".rt",{xPercent:-100,yPercent:100,opacity:0},"<").from(".lb",{xPercent:100,yPercent:-100,opacity:0},"<").from(".rb",{xPercent:-100,yPercent:-100,opacity:0},"<").fromTo("#textBox",{right:"50%",bottom:"50%",xPercent:50,yPercent:50},{right:"6rem",bottom:"6rem",xPercent:0,yPercent:0},"<").from("#hello",{clipPath:"inset(0 100% 0 0)",opacity:0}).from(".text1",{clipPath:"inset(100% 0 0)",opacity:0},"<").from(".text2",{clipPath:"inset(0 0 100%)",opacity:0},"<").fromTo(".name",{color:"transparent"},{color:"var(--main)"}).from(".circle",{scale:.1,rotate:"360deg"},"<").from(".door",{clipPath:"inset(50% 0)"}).to(".scroll",{opacity:0,yPercent:50},"<").to(".c1",{top:0,yPercent:0},"<").to(".c2",{top:"initial",bottom:0,yPercent:0},"<").to(".c1",{top:"50%",yPercent:-50}).to(".c2",{bottom:"50%",yPercent:50},"<").to(".cl",{rotate:90}).to(".circle",{background:"var(--mainGD)"}).to(".lt",{clipPath:"inset(0 100% 100% 0)"}).to(".rt",{clipPath:"inset(0 0 100% 100%)"},"<").to(".lb",{clipPath:"inset(100% 100% 0 0)"},"<").to(".rb",{clipPath:"inset(100% 0 0 100%)"},"<").to(["#hello","#textBox"],{opacity:0},"<").to("#hello",{clipPath:"inset(0 100% 0 0)"},"<").to("#textBox > div",{clipPath:"inset(0 0 0 100%)"},"<").to(".door",{width:"100%"},"<").to(".circleLine",{width:"100%"},"<").to(".skip",{clipPath:"inset(0 0 0 100%)"},"<").to(".door",{borderColor:"transparent",duration:.1},"<0.1").to(".circle",{opacity:0,duration:.1},"<").from(".top",{scale:0,duration:.1},"<").fromTo(".page",{scale:0},{opacity:1,scale:1,duration:.1},"<"),r};u.registerPlugin(N);const D=t=>{const r=d.useRef(null),s=d.useRef(!1),a=d.useRef(null),o=(n,m="900%")=>{r.current?.kill(),r.current=N.create({trigger:t.current,end:`+=${m}`,scrub:1,pin:!0,invalidateOnRefresh:!0,fastScrollEnd:!0,animation:n()}),window.scrollTo(0,0),u.to(t.current,{opacity:1})},i=()=>{a.current&&a.current.revert(),a.current=u.matchMedia();let n=a.current;n.add("(min-width: 1152px)",()=>o(()=>v(!0))),n.add("(min-width: 896px) and (max-width: 1151px)",()=>o(()=>v(!1)))};d.useEffect(()=>{const n=()=>{s.current&&t.current&&i()},m=()=>{n(),s.current||setTimeout(m,100)};return m(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n),a.current?.revert(),r.current?.kill()}},[i,t]);const c=(n,m)=>{r.current?.animation.progress(n),window.scrollTo({top:m})};return{skip:()=>c(1,window.innerHeight*9),top:()=>c(0,0),setReady:()=>{s.current=!0}}},k=l.div.attrs({className:"box size-29 border-solid border-(--main)"})`
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
`,y=l.div.attrs({className:"flex flex-col gap-10 items-end absolute z-50 break-keep text-8xl whitespace-pre"})`
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
	@media (max-width: 895px) {
		&#textBox {
			right: 4rem;
			bottom: 4rem;
		}
	}
`,I=w`
	to { text-shadow: 0 0 8px var(--main) }
`,j=l(k).attrs({className:"border-1 flex items-center justify-center text-(--main)"})`
	&.name {
		cursor: default;
		transition: rotate 0.2s ease-out;
	}
	&.click {
		padding: 0;
		font-family: 'Montserrat';
		font-size: 1.5rem;
		animation: ${I} 0.6s alternate infinite;
		writing-mode: horizontal-tb;
	}
	&.click:hover ~ &#name2 {
		rotate: 45deg;
	}
	@media (max-width: 895px) {
		&.click {
			visibility: hidden;
		}
	}
`,$=l.div.attrs({className:"circleLine absolute w-0 left-1/2 -translate-x-1/2 inset-y-0 flex justify-center items-center"})`
	.line {
		box-shadow: 0 0 4px var(--main);
	}
	@media (max-width: 895px) {
		visibility: hidden;
		& + .door {
			visibility: hidden;
		}
	}
`,W=l.div.attrs({className:"size-50 rounded-full border-2 border-solid border-(--main) absolute top-1/2 flex items-center justify-center"})`
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
`,H=w`
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
		animation: ${H} 0.6s ease-out alternate infinite;
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
`,F=l.button.attrs({type:"button",className:"top fixed z-50 bottom-10 right-10 size-10 max-lg:right-6 max-lg:bottom-6 rounded-full bg-(--main) text-(--bg) font-extrabold"})`
	border: 2px solid var(--main);
	transition:
		background-color 0.2s ease-out,
		color 0.2s ease-out;
	&:hover {
		background-color: var(--bg);
		color: var(--main);
	}
`,K=["이","하","늘"],G=["lt","rt","lb","rb"],Y=[1,2],_=()=>{window.scrollTo({top:window.innerHeight})};function q(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{id:"hello",children:"안녕하세요"}),e.jsxs(y,{id:"textBox",className:"w-97 z-30",children:[e.jsx("div",{className:"text1",children:"웹 퍼블리셔"}),e.jsxs("div",{className:"namebox flex gap-5 justify-center",children:[e.jsx(j,{as:T,onClick:_,className:"absolute click z-10",children:"click"}),K.map((t,r)=>e.jsx(j,{id:`name${r+1}`,className:"name",children:t},t))]}),e.jsx("div",{className:"text2 translate-y-2",children:"입니다"})]}),G.map(t=>e.jsx(k,{className:t},t)),e.jsx($,{children:Y.map(t=>e.jsx(W,{className:`circle c${t}`,children:e.jsx("div",{className:"cl"})},`c${t}`))}),e.jsx("div",{className:"door absolute h-full border-x border-(--main)"}),e.jsx(A,{className:"scroll",children:"scroll"})]})}const J=l.div.attrs({className:"w-full h-screen flex flex-col items-center justify-center relative"})`
	@media (max-width: 768px) {
		height: 100dvh;
	}
	@media (max-width: 895px) {
		opacity: 1;
	}
`,Q=l.div.attrs({className:"page p-20 max-lg:p-10 flex flex-col gap-40 max-lg:gap-20 -mt-[100vh] opacity-0"})`
	@media (max-width: 895px) {
		opacity: 1 !important;
		margin-top: 0;
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
	@media (max-width: 895px) {
		visibility: hidden;
	}
`,P=l.h2.attrs({className:"w-40  text-start text-2xl font-bold text-(--main)"})``,x=l.div.attrs({className:"w-full h-80 border-2 border-(--main)"})``,X=l.h3.attrs({className:"border text-(--main) px-4 font-medium"})``,Z="/lhn_portfolio/react.svg",ee="/lhn_portfolio/vite.svg",te=[{title:"Development",list:[{name:"html5",icon:"html5-plain colored"},{name:"css3",icon:"css3-plain colored"},{name:"javascript",icon:"javascript-plain colored"}]},{title:"Libraries",list:[{name:"tailwindcss",icon:"tailwindcss-original colored"},{name:"styled components",icon:"styledcomponents-plain colored"},{name:"zustand",icon:"zustand-plain"}]},{title:"Design & Collaboration",list:[{name:"figma",icon:"figma-plain"},{name:"photoshop",icon:"photoshop-plain"},{name:"gitHub",icon:"github-original"}]}];function ie(){return e.jsx("div",{className:"flex-1 min-w-0 h-full flex flex-col gap-10",children:te.map(t=>e.jsxs("div",{className:"flex flex-col gap-8 w-full font-(family-name:--font2)",children:[e.jsx(X,{children:t.title}),e.jsxs("ul",{className:"grid grid-cols-[repeat(auto-fill,minmax(min(100%,100px),1fr))] gap-8 max-lg:text-sm max-lg:gap-5",children:[t.list.map(r=>e.jsxs("li",{className:"flex flex-col items-center gap-2 w-20",children:[e.jsx("i",{className:`devicon-${r.icon} text-2xl`}),r.name]},r.name)),t.title==="Development"&&e.jsxs("li",{className:"flex flex-col gap-2 items-center",children:[e.jsxs("div",{className:"flex gap-4 w-max",children:[e.jsx("img",{className:"h-6",src:ee,alt:"vite"}),e.jsx("img",{className:"h-6",src:Z,alt:"react"})]}),"vite + react"]}),t.title==="Libraries"&&e.jsxs("li",{className:"flex flex-col gap-2 items-center",children:[e.jsx("img",{className:"h-6",src:M,alt:"gsap"}),"gsap"]})]})]},t.title))})}function re(){return e.jsxs("div",{className:"card flex-1 min-w-0 grid gap-4",children:[e.jsx(x,{}),e.jsx(x,{}),e.jsx(x,{}),e.jsx(x,{}),e.jsx(x,{}),e.jsx(x,{}),e.jsx(x,{}),e.jsx(x,{})]})}function oe(){return e.jsxs(Q,{children:[e.jsxs("div",{className:"flex justify-between w-full max-lg:flex-col gap-8",children:[e.jsx(P,{children:"SKILLS"}),e.jsx(ie,{})]}),e.jsxs("div",{className:"flex justify-between w-full max-lg:flex-col gap-8",children:[e.jsx(P,{children:"PROJECTS"}),e.jsx(re,{})]})]})}function ae({onReady:t}){const[r,s]=d.useState(!1);d.useEffect(()=>{L(async i=>{await E(i)}).then(()=>s(!0))},[]);const a=d.useMemo(()=>({background:{color:{value:"#020014"}},fpsLimit:30,particles:{color:{value:"#ffffff"},move:{enable:!0,speed:.2},number:{density:{enable:!0},value:80},opacity:{value:{min:.2,max:.5}},shape:{type:"circle"},size:{value:{min:1,max:3}}},detectRetina:!1}),[]),o=()=>t();return r?e.jsx(R,{id:"tsparticles",particlesLoaded:o,options:a,className:"fixed inset-0 -z-1"}):null}function ne(){const t=d.useRef(null),{skip:r,top:s,setReady:a}=D(t);return O(),e.jsxs(e.Fragment,{children:[e.jsxs(J,{ref:t,className:"opacity-0",children:[e.jsx(q,{}),e.jsx(U,{className:"skip",onClick:r,children:"SKIP"})]}),e.jsx(oe,{}),e.jsx(ae,{onReady:a}),e.jsx(F,{onClick:s,children:"TOP"})]})}B.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(ne,{})}));
