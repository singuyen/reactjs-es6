import 'fetch'

import React from 'react'

import RepositoryList from './repository-list'

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h1>Test page reactjs</h1>
				<h2>open sauce</h2>
				<RepositoryList />
			</div>
		)
	}
}

React.render(<HelloWorld/>, document.body)

