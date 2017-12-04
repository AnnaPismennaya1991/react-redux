import React from 'react';

//create new component, this component should
//produce some html
const App = function () {
    return <div>Hi</div>;
}

//take this component's generated html and put it on the page (in the DOM)
React.render(App);
