import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => creates a virtual DOM element ==> HTML render

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

//React component
//class based component - old way
//functional component - new way  

const elem = <span id="span">Namaste React using JSX spam</span>;
const HeadingFunction = () => {
    return <div id="container">
        {elem}
        <title id="title">Namaste React using JSX</title>
        <h1 className='heading'>Namaste React using functional component</h1>
    </div>
   }

const nestedHeader = React.createElement(
    'div',
    { className: 'title' },
    React.createElement('h1', null, 'This is H1'),
    React.createElement('h2', null, 'This is H2'),
    React.createElement('h3', null, 'This is H3')
);

const NestedHeaderComponent = () => (
    <div className="title">
        <h1>This is H1</h1>
        <h2>This is H2</h2>
        <h3>This is H3</h3>
    </div>
);

const NestedHeaderComponentWithAttributes = () => (
    <div className="title">
        <h1 id="header1" style={{ color: 'red' }}>This is H1</h1>
        <h2 id="header2" style={{ color: 'green' }}>This is H2</h2>
        <h3 id="header3" style={{ color: 'blue' }}>This is H3</h3>
    </div>
);

const OuterComponent = () => (
    <div>
        <NestedHeaderComponentWithAttributes />
        <p>This is an outer component</p>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<OuterComponent/>);
