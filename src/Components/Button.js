import React from "react";
import styled from "styled-components";

const Button = (props) => {
	return (
		<ButtonStyles onClick={props.handleClick}>{props.children}</ButtonStyles>
	);
};

export default Button;

const ButtonStyles = styled.div`
	text-align: center;
	line-height: 200%;
	border: 2px solid white;
	border-radius: 20px;
	width: 150px;
	height: 50px;
	box-shadow: 3px 3px 12px black;
	opacity: 80%;
	background: hsla(316, 72%, 36%, 1);
	font-size: 1.4rem;
	color: white;
	font-weight: bold;
	margin: 10px;

	:hover {
		cursor: pointer;
		transform: translateY(-2px);
		transition: all 0.2s ease-in-out;
	}
`;
