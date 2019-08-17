// fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html&q=London%2Cuk", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
// 		"x-rapidapi-key": "cb0e36c8d0msh6acee94fe2297a3p1f16ffjsn2476f4200fc4"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

export default class FetchApiServices {

	_apiBase = 'https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html&q=London%2Cuk';

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${res.status}`);
		}
		return res.json();
	};

	getAllUsers = async () => {
		const res = await this.getResource('/users');
		return res;
	};

	getUser = async (user) => {
		return this.getResource(`/users/${user}`);
	};

	getAllRepos = async () => {
		return this.getResource('/users/ar-iv/repos');
	};

	getRepo = async (repo) => {
		return this.getResource(`/repos/ar-iv/${repo}`);
	};
}