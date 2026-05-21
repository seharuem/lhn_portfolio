import animal from '../assets/img/animal.jpg';
import limbus from '../assets/img/limbus.png';

export const projects = [
	{
		title: '랭킹동숲',
		img: animal,
		tag: ['토이 프로젝트', '팀', '반응형'],
		link: [
			{
				name: 'home',
				href: 'https://animal-guide.pages.dev'
			},
			{
				name: 'figma',
				href: 'https://www.figma.com/design/KLuZWmyOk4Dutb5gI4cOJB/랭킹동숲?node-id=687-756&p=f'
			},
			{
				name: 'github',
				href: 'https://github.com/webAnimalRank/animal_guide.git'
			}
		]
	},
	{
		title: '림버스 서포트패시브',
		img: limbus,
		tag: ['게임 정보', '개인', '반응형'],
		link: [
			{
				name: 'home',
				href: 'http://limbus-sp.kro.kr'
			},
			{
				name: 'github',
				href: 'https://github.com/seharuem/limbusSP2.git'
			}
		]
	}
];
