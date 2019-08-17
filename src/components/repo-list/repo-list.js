import React, { Component } from 'react';
import RepoListItem from '../repo-list-item';
import { connect } from 'react-redux';

import { withFetchService } from '../hoc';
import { reposLoaded } from '../../actions';
import { compose } from '../../utils';

import './repo-list.css'

class RepoList extends Component {

	componentDidMount () {
	    const { fetchApiService } = this.props;
	    // const data = fetchApiService
	    fetchApiService
	    	// .getGeoCityName('Ростов-на-Дону', 'Рассия')
	    	// .getGeoCityId('703448')
	    	// .getGeoCityCoordinates('35','139')
	    	.getGeoGroup()
	    	// .getAllRepos()
	    	// .getTest()
	    	.then((data) => {
	    		// console.log('geo tmp', data);
	    		this.props.reposLoaded(data)
	    	});

	};

	render() {
		const { repos } = this.props;
		console.log('geo group', repos.list);

		return (
			<section className="download bg-primary text-center">
				<div className="container">
					<div className="row">
						{
							repos.list.map((repo) => {
								return (
									<div className="col-sm" key={repo.id}>
										{repo.id}
									</div>
								);
							})
						}
					</div>
				</div>
			</section>
		);
	};
};
// <RepoListItem repo={repo} />
// <RepoListItem repo={repos} />

const mapStateToProps = ({ repos }) => {
	return { repos };
};

const mapDispatchToProps = {
	reposLoaded
};

export default compose(
	withFetchService(),
	connect(mapStateToProps, mapDispatchToProps)
)(RepoList);