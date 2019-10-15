import React from 'react';
import ReactDOM from 'react-dom';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { image: [] }

    onSubmit = async (term) => {
        const response = await unsplash.get('search/photos', {
            params: {
                query: term
            },
        });
    
        this.setState({ image: response.data.results });
    }

    render(){
        return (
            <div>
                <SearchBar onSubmit={this.onSubmit}/>
                <ImageList image={this.state.image} />
            </div>
        );
    }
}

export default App;