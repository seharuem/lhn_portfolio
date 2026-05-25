import{u as g,r as c,d as l,m as b,j as e,M as B,n as C,f as T,l as E,c as R}from"./vendor-CN2et5C7.js";import{g as x,S as L,a as N,G as M}from"./gsap-ComQbEoo.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();x.registerPlugin(L);function I(t){const i=g({minWidth:896}),s=g({minWidth:768,maxWidth:895}),o=g({maxWidth:767}),a=c.useCallback((r,m)=>{x.to(window,{scrollTo:r,duration:.3,ease:"power2.out",onComplete:m})},[]);c.useEffect(()=>{if(o)return;let r=!1;const m=u=>{const p=window.scrollY,h=window.innerHeight,n=u.deltaY>0?1:-1;let d=9;s&&(d=1);const f=h*d;if(i&&p<h&&n===1){u.preventDefault();return}if(p<=f){if(p>=f&&n===1||p<=0&&n===-1||(u.preventDefault(),r))return;r=!0;const z=Math.round(p/h)+n,S=Math.max(0,Math.min(f,z*h));a(S,()=>{setTimeout(()=>{r=!1},50)});return}if(n===-1&&p>f-h){if(u.preventDefault(),r)return;r=!0,a(f,()=>{r=!1});return}};return window.addEventListener("wheel",m,{passive:!1}),()=>window.removeEventListener("wheel",m)},[s,i,o,a])}const w=(t=!0)=>{const i=x.timeline({defaults:{duration:.2}}),s=t?"x":"y",o=t?"xPercent":"yPercent";return i.to(".click",{opacity:0}).from(".circle",{opacity:0},"<").from("#name1",{[o]:100,[s]:"1.25rem"},"<").from("#name3",{[o]:-100,[s]:"-1.25rem"},"<").to(".name",{boxShadow:"0 0 5px var(--main)"},"<").fromTo(".scroll",{opacity:0,yPercent:-100},{opacity:1,yPercent:0},"<").set(".click",{pointerEvents:"none"},"<0.01").from(".lt",{xPercent:100,yPercent:100,opacity:0}).from(".rt",{xPercent:-100,yPercent:100,opacity:0},"<").from(".lb",{xPercent:100,yPercent:-100,opacity:0},"<").from(".rb",{xPercent:-100,yPercent:-100,opacity:0},"<").fromTo("#textBox",{right:"50%",bottom:"50%",xPercent:50,yPercent:50},{right:"6rem",bottom:"6rem",xPercent:0,yPercent:0},"<").from("#hello",{clipPath:"inset(0 100% 0 0)",opacity:0}).from(".text1",{clipPath:"inset(100% 0 0)",opacity:0},"<").from(".text2",{clipPath:"inset(0 0 100%)",opacity:0},"<").fromTo(".name",{color:"transparent"},{color:"var(--main)"}).fromTo(".circle",{scale:.1},{scale:1,rotate:"360deg"},"<").from(".door",{clipPath:"inset(50% 0)"}).to(".scroll",{opacity:0,yPercent:50},"<").to(".c1",{top:0,yPercent:0},"<").to(".c2",{top:"initial",bottom:0,yPercent:0},"<").to(".c1",{top:"50%",yPercent:-50}).to(".c2",{bottom:"50%",yPercent:50},"<").to(".cl",{rotate:90}).to(".circle",{background:"var(--mainGD)"}).to(".lt",{clipPath:"inset(0 100% 100% 0)"}).to(".rt",{clipPath:"inset(0 0 100% 100%)"},"<").to(".lb",{clipPath:"inset(100% 100% 0 0)"},"<").to(".rb",{clipPath:"inset(100% 0 0 100%)"},"<").to(["#hello","#textBox"],{opacity:0},"<").to("#hello",{clipPath:"inset(0 100% 0 0)"},"<").to("#textBox > div",{clipPath:"inset(0 0 0 100%)"},"<").to(".door",{width:"100%"},"<").to(".circleLine",{width:"100%"},"<").to(".skip",{clipPath:"inset(0 0 0 100%)"},"<").to(".door",{borderColor:"transparent",duration:.1},"<0.1").to(".circle",{opacity:0,duration:.1},"<").fromTo(".page",{scale:0},{opacity:1,scale:1,duration:.1},"<"),i};x.registerPlugin(N);const D=t=>{const i=c.useRef(null),s=c.useRef(!1),o=c.useRef(null),a=(n,d="900%")=>{i.current?.kill(),i.current=N.create({trigger:t.current,end:`+=${d}`,scrub:1,pin:!0,invalidateOnRefresh:!0,fastScrollEnd:!0,animation:n()}),window.scrollTo(0,0),x.to(t.current,{opacity:1})},r=()=>{o.current&&o.current.revert(),o.current=x.matchMedia();let n=o.current;n.add("(min-width: 1152px)",()=>a(()=>w(!0))),n.add("(min-width: 896px) and (max-width: 1151px)",()=>a(()=>w(!1)))};c.useEffect(()=>{const n=()=>{s.current&&t.current&&r()},d=()=>{n(),s.current||setTimeout(d,100)};return d(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n),o.current?.revert(),i.current?.kill()}},[r,t]);const m=(n,d)=>{i.current?.animation.progress(n),window.scrollTo({top:d})};return{skip:()=>m(1,window.innerHeight*9),top:()=>m(0,0),setReady:()=>{s.current=!0}}},P=l.div.attrs({className:"box size-29 border-solid border-(--main)"})`
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
`,v=l.div.attrs({className:"flex flex-col gap-10 items-end absolute z-50 break-keep text-8xl whitespace-pre"})`
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
`,W=b`
	to { text-shadow: 0 0 8px var(--main) }
`,y=l(P).attrs({className:"border-1 flex items-center justify-center text-(--main)"})`
	&.name {
		cursor: default;
		transition: rotate 0.2s ease-out;
	}
	&.click {
		padding: 0;
		font-family: 'Montserrat';
		font-size: 1.5rem;
		animation: ${W} 0.6s alternate infinite;
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
`,O=l.div.attrs({className:"circleLine absolute w-0 left-1/2 -translate-x-1/2 inset-y-0 flex justify-center items-center"})`
	.line {
		box-shadow: 0 0 4px var(--main);
	}
	@media (max-width: 895px) {
		visibility: hidden;
		& + .door {
			visibility: hidden;
		}
	}
`,_=l.div.attrs({className:"size-50 rounded-full border-2 border-solid border-(--main) absolute top-1/2 flex items-center justify-center"})`
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
`,A=b`
to { translate: -50% 150% }`,$=l.div.attrs({className:"absolute bottom-20 left-1/2 -translate-1/2 rounded-full border-2 border-solid border-(--main) px-1 pt-4 pb-10 text-(--main) font-bold"})`
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
`,G=l.button.attrs({type:"button",className:"top fixed z-50 bottom-10 right-10 size-10 max-lg:right-6 max-lg:bottom-6 rounded-full bg-(--main) text-(--bg) font-extrabold scale-0"})`
	border: 2px solid var(--main);
	transition:
		background-color 0.2s ease-out,
		color 0.2s ease-out,
		scale 0.2s ease-out;
	&:hover {
		background-color: var(--bg);
		color: var(--main);
	}
	&.visible {
		scale: 1;
	}
`,K=["이","하","늘"],Z=["lt","rt","lb","rb"],H=[1,2],V=()=>{window.scrollTo({top:window.innerHeight})};function U(){return e.jsxs(e.Fragment,{children:[e.jsx(v,{id:"hello",children:"안녕하세요"}),e.jsxs(v,{id:"textBox",className:"w-97 z-30",children:[e.jsx("div",{className:"text1",children:"웹 퍼블리셔"}),e.jsxs("div",{className:"namebox flex gap-5 justify-center",children:[e.jsx(y,{as:B,onClick:V,className:"absolute click z-10",children:"click"}),K.map((t,i)=>e.jsx(y,{id:`name${i+1}`,className:"name",children:t},t))]}),e.jsx("div",{className:"text2 translate-y-2",children:"입니다"})]}),Z.map(t=>e.jsx(P,{className:t},t)),e.jsx(O,{children:H.map(t=>e.jsx(_,{className:`circle c${t}`,children:e.jsx("div",{className:"cl"})},`c${t}`))}),e.jsx("div",{className:"door absolute h-full border-x border-(--main)"}),e.jsx($,{className:"scroll",children:"scroll"})]})}const F=l.div.attrs({className:"w-full h-screen flex flex-col items-center justify-center relative"})`
	@media (max-width: 768px) {
		height: 100dvh;
	}
	@media (max-width: 895px) {
		opacity: 1;
	}
`,J=l.div.attrs({className:"page p-20 max-lg:p-10 flex flex-col gap-40 max-lg:gap-20 -mt-[100vh] opacity-0"})`
	@media (max-width: 895px) {
		opacity: 1 !important;
		margin-top: 0;
	}
`,Y=b`
to {translate: -8px -2px}`,q=l.button.attrs({type:"button",className:"skip absolute top-20 right-20 text-(--main) font-bold flex items-center"})`
	font-size: 24px;
	&::before {
		content: '';
		height: 32px;
		aspect-ratio: 1;
		background: url('./skip.svg') center / contain no-repeat;
		translate: 0 -2px;
	}
	&:hover::before {
		animation: ${Y} 0.3s ease-out alternate infinite;
	}
	@media (max-width: 895px) {
		visibility: hidden;
	}
`,j=l.h2.attrs({className:"w-40  text-start text-2xl font-bold text-(--main)"})``,Q=l.div.attrs({className:"w-full h-80 border-2 border-(--main) relative"})``,k=l.h3.attrs({className:"border text-(--main) px-4 font-medium w-max"})``,X=l.ul.attrs({className:"grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-8 max-lg:text-sm max-lg:gap-5"})`
	@media (max-width: 480px) {
		grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
		font-size: 12px;
	}
`,ee=l.span.attrs({className:"border border-(--main) rounded-full px-2 text-sm backdrop-blur-xs"})``,te=l.a.attrs({className:"block size-10 rounded-full border-2 border-(--main)"})`
	font-size: 0;
	background: color-mix(in oklab, var(--bg) 50%, transparent) center / 80% no-repeat;
	&:hover {
		background-color: color-mix(in oklab, var(--bg) 50%, var(--main));
	}
	&.home {
		background-image: url(./link.svg);
	}
	&.figma {
		background-image: url(./figma.svg);
	}
	&.github {
		background-image: url(./github.svg);
	}
`,ie="/lhn_portfolio/react.svg",ae="/lhn_portfolio/vite.svg",re=[{title:"Development",list:[{name:"html5",icon:"html5-plain colored"},{name:"css3",icon:"css3-plain colored"},{name:"javascript",icon:"javascript-plain colored"}]},{title:"Libraries",list:[{name:"tailwindcss",icon:"tailwindcss-original colored"},{name:"styled components",icon:"styledcomponents-plain colored"},{name:"zustand",icon:"zustand-plain"}]},{title:"Design & Collaboration",list:[{name:"photoshop",icon:"photoshop-plain"},{name:"figma",icon:"figma-plain"},{name:"gitHub",icon:"github-original"}]}];function oe(){return e.jsx("div",{className:"flex-1 min-w-0 h-full flex flex-col gap-10",children:re.map(t=>e.jsxs("div",{className:"flex flex-col gap-8 w-full font-(family-name:--font2)",children:[e.jsx(k,{className:"w-max",children:t.title}),e.jsxs(X,{children:[t.list.map(i=>e.jsxs("li",{className:"flex flex-col items-center gap-2 w-20",children:[e.jsx("i",{className:`devicon-${i.icon} text-3xl`}),i.name]},i.name)),t.title==="Development"&&e.jsxs("li",{className:"flex flex-col gap-2 items-center",children:[e.jsxs("div",{className:"flex gap-4 w-max",children:[e.jsx("img",{className:"h-7.5",src:ae,alt:"vite"}),e.jsx("img",{className:"h-7.5",src:ie,alt:"react"})]}),"vite + react"]}),t.title==="Libraries"&&e.jsxs("li",{className:"flex flex-col gap-2 items-center",children:[e.jsx("img",{className:"h-7.5",src:M,alt:"gsap"}),"gsap"]})]})]},t.title))})}const se="/lhn_portfolio/assets/animal-CMx3n4W0.jpg",ne="/lhn_portfolio/assets/limbus-BUPuvcmi.png",le="/lhn_portfolio/assets/mini-BPZNSBot.png",ce="/lhn_portfolio/assets/adot-DCGA472D.png",me="/lhn_portfolio/assets/andaz-ubZGsGC1.webp",de="/lhn_portfolio/assets/lulu-DimcYDD2.jpeg",pe=[{title:"랭킹동숲",img:se,tag:["토이 프로젝트","반응형"],link:[{name:"home",href:"https://animal-guide.pages.dev"},{name:"figma",href:"https://www.figma.com/design/KLuZWmyOk4Dutb5gI4cOJB/랭킹동숲?node-id=687-756&p=f"},{name:"github",href:"https://github.com/webAnimalRank/animal_guide.git"}]},{title:"BMW MINI",img:le,tag:["리디자인","PC"],link:[{name:"home",href:"https://seharuem.github.io/BMW_MINI/"},{name:"figma",href:"https://www.figma.com/proto/Qz7D30J5pMv3PZsKbtPk6d/3%EC%A1%B0-mini?node-id=7-435&page-id=0%3A1&t=6w037e9EwKKBktxM-1"},{name:"github",href:"https://github.com/seharuem/BMW_MINI.git"}]}],he=[{title:"에이닷",img:ce,tag:["리디자인","PC"],link:[{name:"home",href:"https://seharuem.github.io/adot/index.html"},{name:"figma",href:"https://www.figma.com/design/n353XsyfBNgmRCfyrxBsjf/adot-%EC%8B%9C%EC%95%88?node-id=0-1&t=nBnU4P9uip48cnE7-1"},{name:"github",href:"https://github.com/seharuem/adot.git"}]},{title:"안다즈",img:me,tag:["리디자인","PC"],link:[{name:"home",href:"https://seharuem.github.io/andaz/"},{name:"figma",href:"https://www.figma.com/design/utr1xWuOPrHbA1THq38inx/Untitled?node-id=1-2&t=A9G8LSuXdAWzIwdd-1"},{name:"github",href:"https://github.com/seharuem/andaz.git"}]},{title:"룰루레몬",img:de,tag:["리디자인","PC"],link:[{name:"home",href:"https://seharuem.github.io/lululemon/"},{name:"figma",href:"https://www.figma.com/design/b5EzsoZuStZcrPZ40VpV2z/lululemon-%EC%8B%9C%EC%95%88?node-id=2-2&t=WOBsVWUf7MS0iPID-1"},{name:"github",href:"https://github.com/seharuem/lululemon.git"}]},{title:"림버스 서포트패시브",img:ne,tag:["게임 정보","반응형"],link:[{name:"home",href:"http://limbus-sp.kro.kr"},{name:"github",href:"https://github.com/seharuem/limbusSP2.git"}]}],xe=[{title:"Team",data:pe},{title:"Solo",data:he}];function ue(){return e.jsx("div",{className:"flex-1 min-w-0 flex flex-col gap-8",children:xe.map(t=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(k,{children:t.title}),e.jsx("div",{className:"card grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4",children:t.data.map(i=>e.jsxs(Q,{children:[e.jsx("img",{src:i.img,className:"absolute size-full object-cover",alt:""}),e.jsxs("div",{className:"absolute inset-0 flex flex-col",children:[e.jsxs("div",{className:"flex flex-col gap-2 p-5 bg-(--bg)/70",children:[e.jsx("h3",{className:"text-2xl text-left",children:i.title}),e.jsx("div",{className:"flex gap-2 flex-wrap",children:i.tag.map((s,o)=>e.jsx(ee,{children:s},o))})]}),e.jsx("div",{className:"flex gap-1 justify-end mt-auto p-2",children:i.link.map((s,o)=>e.jsx(te,{target:"_blank",rel:"noopener noreferrer",href:s.href,className:s.name,children:s.name},o))})]})]},i.title))})]},t.title))})}function fe(){return e.jsxs(J,{children:[e.jsxs("div",{className:"flex justify-between w-full max-lg:flex-col gap-8",children:[e.jsx(j,{children:"SKILLS"}),e.jsx(oe,{})]}),e.jsxs("div",{className:"flex justify-between w-full max-lg:flex-col gap-8",children:[e.jsx(j,{children:"PROJECTS"}),e.jsx(ue,{})]}),e.jsx("footer",{className:"text-sm text-(--main) opacity-50 font-semibold text-left",children:"© 2026 이하늘 포트폴리오"})]})}function ge({onReady:t}){const[i,s]=c.useState(!1);c.useEffect(()=>{C(async r=>{await E(r)}).then(()=>s(!0))},[]);const o=c.useMemo(()=>({background:{color:{value:"#020014"}},fpsLimit:30,particles:{color:{value:"#ffffff"},move:{enable:!0,speed:.2},number:{density:{enable:!0},value:80},opacity:{value:{min:.2,max:.5}},shape:{type:"circle"},size:{value:{min:1,max:3}}},detectRetina:!1}),[]),a=()=>t();return i?e.jsx(T,{id:"tsparticles",particlesLoaded:a,options:o,className:"fixed inset-0 -z-1"}):null}function be({ref:t,onClick:i}){const[s,o]=c.useState(!1);return c.useEffect(()=>{const a=new IntersectionObserver(([r])=>{o(!r.isIntersecting)},{threshold:0,rootMargin:"0px 0px -500px 0px"});return t.current&&a.observe(t.current),()=>a.disconnect()},[t]),e.jsx(G,{onClick:i,className:s?"visible":"",children:"TOP"})}function we(){const[t,i]=c.useState(!1),s=c.useRef(null),o=c.useRef(null),{skip:a,top:r,setReady:m}=D(s);return I(),e.jsxs(e.Fragment,{children:[e.jsxs(F,{ref:s,className:"opacity-0",children:[e.jsx(U,{}),e.jsx(q,{ref:o,onClick:a,children:"SKIP"})]}),e.jsx(fe,{}),e.jsx(ge,{onReady:m}),e.jsx(be,{ref:o,onClick:r})]})}R.createRoot(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(we,{})}));
