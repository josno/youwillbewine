import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Components/Button";

const Recommend = (props) => {
	const [name, setName] = useState("");
	const [country, setCountry] = useState("");
	const [color, setColor] = useState("");
	const [food, setFood] = useState([]);

	const handleFoodChange = (e) => {
		let foodList = "";
		if (e.target.value.includes(",")) {
			foodList = e.target.value.split(",");
			setFood(foodList);
		} else {
			setFood(e.target.value);
		}
	};

	return (
		<WrapperStyles>
			<h1 style={{ textAlign: "center" }}>
				Use this form to recommend a wine.
			</h1>
			<FormStyles>
				<label>
					Wine Name
					<input type='text' onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					Country
					<input type='text' onChange={(e) => setCountry(e.target.value)} />
				</label>
				<label>
					Color
					<label className='checkbox'>
						<input
							name='Red'
							type='radio'
							value='red'
							onChange={(e) => setColor(e.target.value)}
						/>
						Red
					</label>
					<label className='checkbox'>
						<input
							name='Red'
							type='radio'
							value='white'
							onChange={(e) => setColor(e.target.value)}
						/>
						White
					</label>
					{/* <DropDown>
						
					</DropDown> */}
				</label>
				<label>
					Make a list of things on what you found it pairs well with.
					<textarea
						className='input-style'
						type='text'
						style={{ height: "100px" }}
						placeholder='Use commas to separate'
						onChange={(e) => handleFoodChange(e)}
					/>
				</label>
				<div className='button-container'>
					<Button>Cancel</Button>
					<Button>Submit</Button>
				</div>
			</FormStyles>
		</WrapperStyles>
	);
};

const WrapperStyles = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid black;
`;

const FormStyles = styled.form`
	width: 90%;
	border: 1px solid black;
	margin: 0px auto;
	display: flex;
	flex-direction: column;
	max-width: 500px;
	border: 0px;
	border-radius: 60px 0px;
	box-shadow: 3px 3px 15px #8d8d8d;
	padding: 40px;

	background: hsla(346, 82%, 59%, 1);

	background: linear-gradient(
		90deg,
		hsla(346, 82%, 59%, 1) 0%,
		hsla(316, 72%, 36%, 1) 100%
	);

	background: -moz-linear-gradient(
		90deg,
		hsla(346, 82%, 59%, 1) 0%,
		hsla(316, 72%, 36%, 1) 100%
	);

	background: -webkit-linear-gradient(
		90deg,
		hsla(346, 82%, 59%, 1) 0%,
		hsla(316, 72%, 36%, 1) 100%
	);

	input,
	.input-style {
		width: 100%;
		height: 35px;
		margin: 10px;
		border: 0px;
		opacity: 80%;
		border-radius: 5px;
		box-shadow: 3px 3px 10px grey;
		font-size: 1.2rem;
		padding-left: 10px;
		color: black;
	}

	textarea {
		padding-left: 15px
		padding-top: 10px;
		font-size: 1.1rem;
	}

	input[type="radio"] {
		height: 20px;
		width: 20px;
	}

	label {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin: 10px;
		color: white;
		font-weight: bold;
		font-size: 1.5rem;
		width: 90%;
		.checkbox {
			display: block;
		}
	}

	.button-container {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
	}

	@media (min-width: 768px) {
		width: 50%;
		justify-content: flex-start;
		align-items: flex-start;
	}
`;

export default Recommend;
