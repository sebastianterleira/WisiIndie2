'use client';
import styled from 'styled-components';
import Image from 'next/image';

const Title = styled.h1`
	background-image: var(--textRainbow);
	background-color: #fff;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	font-family: var(--font-family-inter);
	font-style: normal;
	font-weight: 900;
	font-size: 64px;
	line-height: 77px;
	text-align: center;
	letter-spacing: -3px;
`;

const Navbar = styled.header`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const NavLogoContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 9.36px;
	margin: 41px 101px 36px 118px;
`;

const NavButtonContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 9.36px;
	margin: 41px 101px 36px 118px;
`;

const LogoText = styled.p`
	background-image: var(--grisPrimary);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	font-family: var(--font-family-outfit);
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
	text-align: center;
`;

const ButtonNav = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	gap: 14px;
	width: 242px;
	height: 39px;
	border: 1px solid #fff;
	border-radius: 15px;
	text-decoration: none;

	&:hover {
		.right-arrow {
			transform: translate(6px);
		}
	}
`;

const TextButtonNav = styled.h2`
	background-image: var(--textRainbowButton);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	font-family: var(--font-family-inter);
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
`;

const ContentPov = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 100px 210px;
`;

const Subtitle = styled.h2`
	background-image: var(--grisPrimary);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	font-family: var(--font-family-inter);
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	margin: 16px 0 0 0;
`;

const ButtonTryOut = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 7px 20px;
	gap: 10px;
	width: 191px;
	height: 39px;
	background: linear-gradient(
		90deg,
		rgba(228, 228, 231, 0) -82.04%,
		#e4e4e7 53.83%,
		rgba(255, 255, 255, 0) 166.85%
	);
	filter: drop-shadow(-4px -4px 20px rgba(255, 255, 255, 0.1))
		drop-shadow(4px 4px 20px rgba(255, 255, 255, 0.1));
	border-radius: 5px;
	text-decoration: none;
	margin: 29px 0 0 0;

	&:hover {
		.right-arrow {
			transform: translate(10px);
		}
	}
`;

const TryWisiIndie = styled.h2`
	background-image: var(--grisButton);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	font-family: var(--font-family-outfit);
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 25px;
	text-align: center;
`;

export default function App() {
	return (
		<main>
			<Navbar>
				<NavLogoContent>
					<Image
						src='./images/Logo.svg'
						alt='Logo de WiseIndie 💡'
						width={30.53}
						height={41.38}
					/>
					<LogoText>WiseIndie</LogoText>
				</NavLogoContent>
				<NavButtonContent>
					<ButtonNav
						target='_blank'
						href='https://github.com/sebastianterleira/WisiIndie'
					>
						<TextButtonNav>WiseIndie is Open Source</TextButtonNav>
						<Image
							src='./images/ArrowRightIcon.svg'
							alt='Logo de WiseIndie 💡'
							width={12}
							height={16}
							className='right-arrow'
						/>
					</ButtonNav>
				</NavButtonContent>
			</Navbar>
			<ContentPov>
				<Title>CREATIVE AND INNOVATIVE SIDE PROJECTS</Title>
				<Subtitle>
					Fresh ideas to develop your skills and explore new horizons!
				</Subtitle>
				<ButtonTryOut
					target='_blank'
					href='https://github.com/sebastianterleira/WisiIndie'
					className='button'
				>
					<TryWisiIndie>Try WiseIndie</TryWisiIndie>
					<Image
						src='./images/ArrowRightIcon.svg'
						alt='Logo de WiseIndie 💡'
						width={12}
						height={6}
						className='right-arrow'
					/>
				</ButtonTryOut>
			</ContentPov>
		</main>
	);
}
