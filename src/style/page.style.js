import styled, { keyframes } from 'styled-components';

export const Bg = styled.div.attrs({
	className: 'w-full h-screen flex flex-col items-center justify-center relative overflow-hidden'
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

export const Top = styled.button.attrs({
	type: 'button',
	className: 'absolute z-30 bottom-20 right-20 size-10 rounded-full bg-(--main) text-(--bg) font-extrabold pt-1 pl-0.5'
})`
	border: 2px solid var(--main);
	transition: background-color 0.2s ease-out, color 0.2s ease-out;
	&:hover {
		background-color: var(--bg);
		color: var(--main);
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
