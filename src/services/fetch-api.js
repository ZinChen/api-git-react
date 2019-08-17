import axios from "axios";

export default class FetchApiServices {

	// url = 'https://api.github.com/users/ar-iv/repos';

	_apiBase = 'https://api.github.com';


	getResposByUserName = async (url) => {
		// return axios.get(`https://api.github.com/users/ar-iv/repos`)

		try {
			const { data } = await axios.get(`${this._apiBase}/users/ar-iv/repos`)
			return data
		} catch (e) {
			throw new Error(e)
		}
	};

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

	getTest = async (repo) => {
		return [
			{
				id: 1,
				title: 'Production-Ready Microservices',
				author: 'Susan J. Fowler' },
			{
				id: 2,
				title: 'Release It!',
				author: 'Michael T. Nygard'}
		];
	};

	getTmp = async () => {
		// fetch('https://jsonplaceholder.typicode.com/todos/1')
		//   .then(response => response.json())
		//   .then(json => {
		//   	console.log(json);
		//   });
	   fetch('https://jsonplaceholder.typicode.com/todos/1')
	     .then(function(response) {
	        console.log (response.json())
	   })
	};




  _apiBaseTmp = 'https://swapi.co/api';

  getResourceTmp = async (url) => {
    const res = await fetch(`${this._apiBaseTmp}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResourceTmp(`/people/`);
    return res.results
      .map(this._transformPerson)
      .slice(0, 5);
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }


  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

}


// https://api.github.com/users/ar-iv/repos
