import styled from 'styled-components';

export const Bg = styled.div.attrs({
	className: 'w-full h-screen flex flex-col items-center justify-center relative'
})``;

export const Box = styled.div.attrs({
	className: 'size-29 border-solid border-(--main)'
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
`;

export const Name = styled(Box).attrs({
	className: 'name text-8xl leading-32 border-1'
})`
	color: var(--main);
	// text-shadow: 0 0 4px var(--main);
	color: transparent;
`;
