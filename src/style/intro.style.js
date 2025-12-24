import styled, { keyframes } from 'styled-components';

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
	@media (max-width: 1152px) {
		width: 5rem;
		height: 5rem;
	}
`;

export const Text = styled.div.attrs({
	className: 'flex flex-col gap-10 items-end absolute break-keep text-8xl whitespace-pre'
})`
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
		transition: rotate 0.2s ease-out;
	}
	&.click {
		padding: 0;
		font-size: 1.5rem;
		color: var(--main);
		animation: ${shadow} 0.6s alternate infinite;
		writing-mode: horizontal-tb;
	}
	&.click:hover ~ &#name2 {
		rotate: 45deg;
	}
	@media (max-width: 1152px) {
		padding-top: 0.4rem;
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

	@media (max-width: 1152px) {
		left: 6rem;
		bottom: 5rem;
	}
`;
