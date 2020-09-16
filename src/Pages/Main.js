import React from "react";
import Link from "react-router-dom";
import styled from "styled-components";

const Main = (props) => {
	return (
		<MainStyles>
			<button>I want to drink.</button>
			<button>I want to drink and eat.</button>
			<button>I want to recommend a wine.</button>
		</MainStyles>
	);
};

const MainStyles = styled.main`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
export default Main;
