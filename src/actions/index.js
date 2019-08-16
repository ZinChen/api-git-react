const reposLoaded = (newRepos) => {
	return {
		type: 'REPOS_LOADED',
		payload: newRepos 
	};
};

const repoLoaded = (newRepo) => {
	return {
		type: 'REPO_LOADED',
		payload: newRepo 
	};
};

export {
	reposLoaded,
	repoLoaded
};