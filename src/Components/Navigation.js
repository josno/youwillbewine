import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconName } from "react-icons/bi";

const Navigation = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	return (
		<NavStyles>
			<h1>You'll Be Fine - Have Some Wine</h1>
			<button class="button" onClick={() => setMenuOpen(!isMenuOpen)}>
				<div
					class={`button__line ${
						isMenuOpen ? "button__line--top--active" : "button__line--top"
					}`}
				></div>
				<div
					class={`button__line ${
						isMenuOpen ? "button__line--middle--active" : "button__line--middle"
					}`}
				></div>
				<div
					class={`button__line ${
						isMenuOpen ? "button__line--bottom--active" : "button__line--bottom"
					}`}
				></div>
			</button>
			{/* <ul>
				<li>Drink</li>
				<li>Eat</li>
				<li>Recommend</li>
				<li>Login/Logout</li>
			</ul> */}
		</NavStyles>
	);
};

const NavStyles = styled.nav`
	height: 4rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 1rem;
	background-color: #311847;

	h1 {
		display: none;
	}
	.button {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		width: 3rem;
		height: 2.5rem;
		color: #e09f7d;
		padding: 3px;
		background-color: transparent;
		border: 0px;
	}

	.button__line {
		border: 2px solid #e09f7d;
		width: 80%;
		transition: all 0.2s ease-in-out;
	}

	.button__line--top--active {
		transform: translate(0px, 10px) rotate(45deg);
	}

	.button__line--middle--active {
		opacity: 0;
	}

	.button__line--bottom--active {
		transform: translate(0px, -9px) rotate(-45deg);
	}

	// font-size: 2rem;
	// font-weight: 800;

	// color: #e09f7d;

	// ul {
	// 	display: flex;
	// 	justify-content: space-evenly;
	// 	list-style: none;
	// 	padding-left: 0px;
	// 	color: inherit;
	// 	margin: 0px;
	// 	li {
	// 		margin: 10px;
	// 		color: inherit;
	// 		font-size: 1.4rem;
	// 	}
	// }
`;

export default Navigation;
