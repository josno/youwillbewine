import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const list = [
	{ link: "/wine", text: "I want to drink." },
	{ link: "/pair", text: "I want to drink and eat." },
	{ link: "/recommend", text: "I want to recommend a wine." },
];

const Main = (props) => {
	return (
		<MainStyles>
			<ul style={{ padding: "0px" }}>
				{list.map((item) => {
					return (
						<>
							<LinkStyles>
								<Link style={{ textDecoration: "none" }} to={`${item.link}`}>
									<SpanStyles>{item.text}</SpanStyles>
								</Link>
							</LinkStyles>
						</>
					);
				})}
			</ul>
		</MainStyles>
	);
};

const MainStyles = styled.main`
	height: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const LinkStyles = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	font-size: 1.2em;
	font-weight: bold;
	list-style: none;
	width: 250px;
	height: 100px;
	border: 1px solid black;
	border-radius: 15px;
	box-shadow: -3px 3px pink;
	text-align: center;
	margin: 20px;
	background-color: #a01a7d;
	:hover {
		opacity: 70%;
	}
`;

const SpanStyles = styled.span`
	text-decoration: none;
	color: #ffffff;
`;
export default Main;
