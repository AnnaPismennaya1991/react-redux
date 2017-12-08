import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; //компонент ввода-поиска

const API_KEY = 'AIzaSyB1QTlN7FZziHPIGBYb0c0UVj1PD3Yr08w'; //youtube

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
    console.log(data);
});

//create new component, this component should produce some html

const App = () => { //functional base component
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//take this component's generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
