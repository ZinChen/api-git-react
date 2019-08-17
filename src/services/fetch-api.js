import axios from "axios";

export default class FetchApiServices {

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
}