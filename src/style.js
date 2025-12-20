import styled, { keyframes } from 'styled-components';

export const Bg = styled.div.attrs({
	className: 'w-full min-w-7xl h-screen flex flex-col items-center justify-center relative overflow-hidden bg-(--bg)'
})``;

export const Box = styled.div.attrs({
	className: 'box size-29 border-solid border-(--main)'
})`
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
`;

export const Text = styled.div.attrs({
	className: 'flex flex-col gap-10 items-end absolute break-keep text-8xl w-max'
})`
	@media (max-width: 1400px) {
		font-size: 5rem;
	}
`;

const shadow = keyframes`
	to { text-shadow: 0 0 8px var(--main) }
`;

export const Name = styled(Box).attrs({
	className: 'border-1 flex items-center justify-center pt-3'
})`
	&.name {
		color: transparent;
		cursor: default;
	}
	&.click {
		padding: 0;
		font-size: 1.5rem;
		color: var(--main);
		animation: ${shadow} 0.6s alternate infinite;
	}
`;

export const CircleLine = styled.div.attrs({
	className: 'circleLine absolute inset-0 flex justify-center'
})`
	.line {
		box-shadow: 0 0 4px var(--main);
	}
`;

export const Circle = styled.div.attrs({
	className:
		'size-50 rounded-full border-2 border-solid border-(--main) absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'
})`
	&::before {
		content: '';
		position: absolute;
		inset: 25%;
		border-radius: 50%;
		background: #242424;
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
`;

export const Btn = styled.button.attrs({
	type: 'button',
	className: 'absolute top-20 right-20 text-(--main) font-bold flex items-center'
})`
	font-size: 24px;
	&::before {
		content: '';
		height: 32px;
		aspect-ratio: 1;
		background: url('./skip.svg') center / contain no-repeat;
		translate: 0 -2px;
	}
`;

const tok = keyframes`
to { translate: -50% 150% }`;

export const Scroll = styled.div.attrs({
	className:
		'absolute bottom-20 left-1/2 -translate-1/2 rounded-full border-2 border-solid border-(--main) px-1 pt-4 pb-10 text-(--main) font-bold'
})`
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
		animation: ${tok} 0.6s ease-out alternate infinite;
	}
`;

export const Card = styled.div.attrs({
	className: 'w-80 h-100 relative'
})`
	background: var(--main);
	clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
	&::before {
		content: '';
		position: absolute;
		inset: 2px;
		background: var(--bg);
		clip-path: inherit;
	}
`;
