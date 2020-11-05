import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconName } from "react-icons/bi";

const Navigation = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	return (
		<NavStyles>
			<h1>You'll Be Wine</h1>
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
			<ul class={isMenuOpen ? `menu--active` : `menu--hidden`}>
				<li class={`menu__list-item`}>Drink</li>
				<li class={`menu__list-item`}>Eat</li>
				<li class={`menu__list-item`}>Recommend</li>
				<li class={`menu__list-item`}>Login/Logout</li>
			</ul>
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
	color: #e09f7d;

	h1 {
		color: inherit;
		font-size: 2rem;
		font-weight: 800;
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
		background-color: #e09f7d;
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

	.menu--hidden {
		display: none;
		transition: all 0.2s ease-in-out;
	}

	.menu--active {
		list-style: none;
		position: absolute;
		width: 100%;
		left: 0%;
		top: 4rem;
		text-align: center;
		margin: 0px;
		padding: 2rem 3rem;
		background-color: #311847;
		color: #e09f7d;
		z-index: 99;
		animation: fadeIn 0.2s ease-in-out;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.menu__list-item {
		margin: 20px;
		color: inherit;
		font-size: 1.4rem;
		color: inherit;
	}

	@media (min-width: 768px) {
		.button {
			display: none;
		}
	}

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
