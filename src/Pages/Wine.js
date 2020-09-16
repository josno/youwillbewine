import React from "react";
import data from "../STORE.js";
import styled from "styled-components";
import Bottle from "../assets/winebottle.svg";

const wines = data.wines;

const Wine = (props) => {
	return (
		<WineStyles>
			<WineContainerStyles>
				{wines.map((item) => {
					return (
						<WineItem key={item.id}>
							<h2>
								<Bold>Label Name:</Bold> {item.name}
							</h2>
							<h3>
								<Bold>Color: </Bold>
								{item.color.charAt(0).toUpperCase() + item.color.slice(1)}
							</h3>
							<h3>
								<Bold>Country:</Bold>{" "}
								{item.country.charAt(0).toUpperCase() + item.country.slice(1)}
							</h3>
						</WineItem>
					);
				})}
			</WineContainerStyles>
		</WineStyles>
	);
};

const WineStyles = styled.div`
	height: 100%;
	h2,
	h3,
	h4 {
		color: white;
		font-size: 1.7em;
	}
`;

const WineContainerStyles = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-left: 0px;
	height: 100%;
	@media (min-width: 1000px) {
		flex-direction: row;
		padding: 20px;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
`;

const WineItem = styled.li`
	list-style: none;
	width: 80%;
	border: 1px solid;
	border-radius: 15px;
	margin: 10px auto;
	max-width: 400px;
	height: 300px;
	padding: 20px;
	background: #e09f7d;
	background-img: "../assets/winebottle";

	@media (min-width: 1000px) {
		margin: 20px;
	}
`;

const Bold = styled.span`
	font-weight: boldest;
	color: #311847;
`;
export default Wine;
