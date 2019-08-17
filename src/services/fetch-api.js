export default class FetchApiServices {

	getTest = async () => {
		return [
		    {
		      id: 1,
		      name: 'Bilbo Baggins [TEST DATA]',
		      gender: 'male',
		      birthYear: 'long ago',
		      eyeColor: [
		      	{
		      		tmp: 'tewrerfwef'
		      	}
		      ]
		    },
		    {
		      id: 2,
		      name: 'Bilbo Baggins [TEST DATA]',
		      gender: 'male',
		      birthYear: 'long ago',
		      eyeColor: [
		      	{
		      		tmp: 'tewrerfwef'
		      	}
		      ]
		    }
		];
	};

	_apiBase = 'https://api.github.com';

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

	// 

	_testUrl = 'http://api.openweathermap.org/data/2.5/weather';
	_testOptions = {  
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
			'x-rapidapi-key': 'cb0e36c8d0msh6acee94fe2297a3p1f16ffjsn2476f4200fc4',
		}
	};

	_geoUrl = 'http://api.openweathermap.org/data/2.5/';
	_Api_Key = '8d2de98e089f1c28e1a22fc19a24ef04';


	getGeoResource = async (get) => {

		const res = await fetch(`${this._geoUrl}${get}&appid=${this._Api_Key}`);


		if (!res.ok) {
			throw new Error(`Could not fetch` +
				`, received ${res.status}`);
		}
		return res.json();
	};

	getGeoCityName = async (city, country) => {
		return this.getGeoResource(`weather?q=${city},${country}`);
	};

	getGeoCityId = async (id) => {
		return this.getGeoResource(`weather?id=${id}`);
	};

	getGeoCityCoordinates = async (lat, lon) => {
		return this.getGeoResource(`weather?lat=${lat}&lon=${lon}`);
	};

	getGeoGroup = async () => {
		return this.getGeoResource(`group?id=524901,498817,501175&units=metric`);
	};

	getGeoCitie = async () => {
		return this.getGeoResource(`data/2.5/find?lat=55.5&lon=37.5&cnt=10`);
	};


}