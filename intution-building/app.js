import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => creates a virtual DOM element ==> HTML render

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

//React component
//class based component - old way
//functional component - new way  

const HeadingFunction = () => {
    return <h1 id="heading">Namaste React using functional component</h1>;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);
