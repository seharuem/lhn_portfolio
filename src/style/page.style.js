import styled, { keyframes } from 'styled-components';

export const Bg = styled.div.attrs({
	className: 'w-full h-screen flex flex-col items-center justify-center relative'
})`
	@media (max-width: 768px) {
		height: 100dvh;
	}
`;

const skip = keyframes`
to {translate: -8px -2px}`;

export const Skip = styled.button.attrs({
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
	&:hover::before {
		animation: ${skip} 0.3s ease-out alternate infinite;
	}
	@media (max-width: 480px) {
		top: 4rem;
		right: 4rem;
		font-size: 16px;
		&::before {
			height: 24px;
		}
	}
`;

export const Title = styled.h2.attrs({
	className: 'w-50 text-start text-2xl font-bold text-(--main)'
})``;

export const Card = styled.div.attrs({
	className: 'w-full h-80 border-2 border-(--main)'
})``;

export const Category = styled.h3.attrs({
	className: 'border text-(--main) rounded-full w-max px-4'
})``;
