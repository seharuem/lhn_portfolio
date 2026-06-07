const name = ['이', '하', '늘'];
const box = ['lt', 'rt', 'lb', 'rb'];
const num = [1, 2];
const click = () => {
	window.scrollTo({
		top: window.innerHeight
	});
};

export default function Shape() {
	return (
		<>
			<div className='text hello'>안녕하세요</div>
			<div className='text textbox w-97 z-30'>
				<div className='text1'>웹 퍼블리셔</div>
				<div className='namebox flex gap-5 justify-center'>
					<button onClick={click} className='box click'>
						click
					</button>
					{name.map((n, i) => (
						<div key={n} id={`name${i + 1}`} className='box name'>
							{n}
						</div>
					))}
				</div>
				<div className='text2 translate-y-2'>입니다</div>
			</div>
			{box.map((b) => (
				<div key={b} className={`box ${b}`} />
			))}
			<div className='circleLine'>
				{num.map((n) => (
					<div key={`c${n}`} className={`circle c${n}`}>
						<div className='cl' />
					</div>
				))}
			</div>
			<div className='door' />
			<div className='scroll'>scroll</div>
		</>
	);
}
