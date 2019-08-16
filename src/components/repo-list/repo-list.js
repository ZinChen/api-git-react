import React, { Component } from 'react';
import RepoListItem from '../repo-list-item';
import { connect } from 'react-redux';

import './repo-list.css'

import { withFetchService } from '../hoc';
import { reposLoaded } from '../../actions';

class RepoList extends Component {

	componentDidMount () {
	    const { fetchApiService } = this.props;
	    const data = fetchApiService.getAllRepos();
	    this.props.reposLoaded(data);
	};

	render() {
		const { repos } = this.props;
		// console.log(this.props);
		console.log(this.props.repos);
		return (
		    <ul className="repo-list">
				{
					repos.map((repo) => {
						return (
							<li key={repo.id}><RepoListItem repo={repo} /></li>
						);
					})
				}
		    </ul>
		);
	};
};

const mapStateToProps = ({ repos }) => {
	return { repos };
};

const mapDispatchToProps = {
	reposLoaded
};

export default withFetchService()(
	connect(mapStateToProps, mapDispatchToProps)(RepoList)
);