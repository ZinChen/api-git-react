import React, { Fragment } from 'react';

import './repo-list-item.css';

const RepoListItem = ({ repo }) => {
	const { id, name } = repo;
	return (
		<Fragment>
            <div className="col-sm">
				<span>{ id } - </span>
				<span>{ name }</span>
            </div>
		</Fragment>
	);
};

export default RepoListItem;
