import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; //компонент поиска

const API_KEY = 'AIzaSyCOrCVYNL_Pv8TOrZN1rRr1wkDr9rxiEms';

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
