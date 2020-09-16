import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

import Wine from "./Pages/Wine";
import Main from "./Pages/Main";
import Pair from "./Pages/Pair";
import Recommend from "./Pages/Recommend";

import "./App.css";

const App = () => {
	return (
		<>
			<HeaderStyle>
				<H1Style>
					You'll be fine!
					<br />
					<Bold>Drink some wine.</Bold>
				</H1Style>
			</HeaderStyle>
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
				<Route exact path='/recommend'>
					<Recommend />
				</Route>
			</Switch>
			<Footer>Made By Joanne</Footer>
		</>
	);
};

const HeaderStyle = styled.header`
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const H1Style = styled.h1`
	font-size: 1.4em;
	text-align: right;
	padding: 10px;
	margin: 0px;
`;

const Bold = styled.span`
	font-weight: bold;
	color: red;
`;

const Footer = styled.footer`
	position: absolute;
	bottom: auto;
`;

export default App;
