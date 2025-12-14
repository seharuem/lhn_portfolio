import styled from 'styled-components';

export const Bg = styled.div.attrs({
	className: 'w-full min-w-7xl h-screen flex flex-col items-center justify-center relative'
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

	@media (max-width: 1280px) {
		width: 6rem;
		height: 6rem;
	}
`;

export const Text = styled.div.attrs({
	className: 'flex flex-col gap-10 items-end absolute break-keep text-8xl w-max'
})`
	@media (max-width: 1280px) {
		font-size: 5rem;
	}
`;

export const Name = styled(Box).attrs({
	className: 'name border-1 flex items-center justify-center pt-3'
})`
	color: transparent;
`;
