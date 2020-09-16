export default {
	wines: [
		{
			id: 1,
			name: "Baia Tsitska-Tsolikouri-Krakhuna",
			color: "white",
			country: "Georgia",
			food_pairing: ["tacos"],
			image: "./",
		},
		{
			id: 2,
			name: "Cellar Door Granache",
			color: "red",
			country: "USA",
			food_pairing: ["corndogs"],
		},
		{
			id: 3,
			name: "Cinzano Prosecco",
			color: "white",
			country: "USA",
			food_pairing: ["thai food", "tacos"],
		},
		{
			id: 3,
			name: "Cinzano Prosecco",
			color: "white",
			country: "USA",
			food_pairing: ["thai food", "tacos"],
		},
	],
	food_pairing: [
		{
			id: 1,
			name: "tacos",
			wines: [
				{
					name: "Baia Tsitska-Tsolikouri-Krakhuna",
					color: "white",
					country: "Georgia",
					food_pairing: ["tacos"],
					image: "./",
				},
				{
					name: "Cinzano Prosecco",
					variety: "prosecco",
					color: "white",
					country: "USA",
					food_pairing: ["thai food", "tacos"],
				},
			],
		},
		{
			id: 2,
			name: "corndogs",
			wines: [
				{
					name: "Cellar Door Granache",
					color: "red",
					country: "USA",
				},
			],
		},
		{
			id: 3,
			name: "thai food",
			wines: [
				{
					name: "Cinzano Prosecco",
					color: "white",
					country: "USA",
				},
			],
		},
	],
};
