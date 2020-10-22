import config from "../config";

const WineApiService = {
	getWines: () => {
		return fetch(`${config.API_ENDPOINT}/wines`).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	addWine: (wineObj) => {
		return fetch(`${config.API_ENDPOINT}/wines`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(wineObj),
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
};

export default WineApiService;
