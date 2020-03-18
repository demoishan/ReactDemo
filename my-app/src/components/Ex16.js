// import React from 'react';

// const Ex16 = () => {
//     return <Menu colour="blue" language="en" />;
// }

// function Menu(props) {
//     return (
//         <MenuItem
//             colour={props.colour}
//             language={props.language}
//         />
//     )
// }

// function MenuItem(props) {
//     return (
//         <div>
//             <center><h1>Context Demo</h1></center>
//             <p>Theme colour: {props.colour}</p>
//             <p>Locale: {props.language}</p>
//         </div>
//     );
// }

// export default Ex16;

import React from 'react';
import ThemeContext from './ThemeContext';

const App = () => (
    <div>
        <center><h1>Context Demo</h1></center>
        <PrimaryHeadline>Hello React Context</PrimaryHeadline>
        <Paragraph>That's how you use children in React by the way.</Paragraph>
        <SecondaryHeadline>With a React useContext Hook instead of Consumer component this time!</SecondaryHeadline>
    </div>
);

// Component consuming Context via Consumer component
const PrimaryHeadline = ({ children }) => (
    <ThemeContext.Consumer>
        {value => <h1 style={{ color: value }}>{children}</h1>}
    </ThemeContext.Consumer>
);

// Component consuming Context via Consumer component
const Paragraph = ({ children }) => (
    <ThemeContext.Consumer>
        {color => <p style={{ color: color }}>{children}</p>}
    </ThemeContext.Consumer>
);

// Component consuming Context via React's useContext Hook
const SecondaryHeadline = ({ children }) => {
    const color = React.useContext(ThemeContext);
    return <h2 style={{ color }}>{children}</h2>;
};

export default App;