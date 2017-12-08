import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //компонент ввода-поиска
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
const API_KEY = 'AIzaSyDnTDoUY84IhMCO9Xpy0cYh8TP2w3bUpMA'; //youtube

//create new component, this component should produce some html

class App extends Component { //functional base component
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            //this.setState({ videos: videos });
        });
    }

    render () {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

//take this component's generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
