import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

///Components
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';

///Apollo client setup
const client = new ApolloClient({
	uri: 'http://localhost:5000/'
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div id='main'>
				<h1>My Reading List</h1>
				<BookList />
				<AddBook />
			</div>
		</ApolloProvider>
	);
};

export default App;
