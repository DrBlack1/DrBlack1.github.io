const title = React.createElement(
    'h1',
    {id: 'main-title', title: 'This is a title'},
    'My first react element'
);
console.log(title);

// first arg - first element you want to create
// second arg - target css, attribute = title (can be null if not setting a title)
// third arg - content you want to create

// It means: 
// <h1 id='main-title title='This is a title'>My first react element</h1>



const desc = React.createElement(
    'p',
    null,
    'This is a paragraph'
);
    
// null arg means no way to target css (no attribute, class, id etc)
    
const header = React.createElement(
    'header',
    null,
    title,
    desc
);

// first bit of content is title component
// second bit of content is desc component

ReactDOM.render(
    header,
    document.getElementById('root')
);