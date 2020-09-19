import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

import Wine from "./Pages/Wine";
import Main from "./Pages/Main";
import Pair from "./Pages/Pair";
import Recommend from "./Pages/Recommend";

import "./App.css";

const App = () => {
	const [headerOn, setHeaderOn] = useState(false);
	return (
		<main>
			{headerOn && (
				<HeaderStyle>
					<H1Style>
						You'll be fine!
						<br />
						<Bold>Drink some wine.</Bold>
					</H1Style>
				</HeaderStyle>
			)}

			<SplashBannerStyles>
				<SplashText>Drink some wine.</SplashText>
			</SplashBannerStyles>

			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>
				<Route exact path='/wine'>
					<Wine />
				</Route>
				<Route exact path='/pair'>
					<Pair />
				</Route>
				<Route
					exact
					path='/recommend'
					render={(props) => <Recommend {...props} />}
				/>
			</Switch>
			<Footer>Made By Joanne</Footer>
		</main>
	);
};

const SplashText = styled.h1`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 5rem;
	text-align: center;

	color: white;
	margin: 0;
	position: relative;
	z-index: 0;
`;

const SplashBannerStyles = styled.header`
	z-index: -1;
	margin: 0px;
	height: 60vh;
	::before {
		position: absolute;
		transform: translateY(-0px);
		width: 100%;
		height: 60vh;
		content: "";
		color: #ef5d60;
		background: #ef5d60;
		animation: slidein 3s;
		@keyframes slidein {
			0% {
				height: 0;
			}
			50% {
				height: 100%;
			}
			100% {
				height: 60vh:

			}
		}

		
	}

	@media (min-width: 768px){
		height: 40vh;
		::before {
			position: absolute;
			transform: translateY(-0px);
			width: 100%;
			height: 40vh;
			content: "";
			color: #ef5d60;
			background: #ef5d60;
			animation: slidein 3s;
			@keyframes slidein {
				0% {
					height: 0;
				}
				50% {
					height: 100%;
				}
				100% {
					height: 40vh:
	
				}
			}
		
	}
`;

const HeaderStyle = styled.header`
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const H1Style = styled.h1`
	font-size: 2.4rem;
	text-align: right;
	padding: 10px;
	margin: 0px;
`;

const Bold = styled.span`
	font-weight: bold;
	color: #ef5d60;
`;

const Footer = styled.footer`
	position: absolute;
	bottom: 0px;
`;

export default App;
