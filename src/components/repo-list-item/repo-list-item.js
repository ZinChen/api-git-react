import React, { Fragment } from 'react';

import './repo-list-item.css';

const RepoListItem = ({ repo }) => {
	const { id, name } = repo;
	return (
		<Fragment>
			<span>{ id } - </span>
			<span>{ name }</span>
		</Fragment>
	);
};

export default RepoListItem;
