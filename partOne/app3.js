// JSX
// JSX is compiled when browser is run by babel
// { variableName } = JSX expression
const title = 'My first react element';
const desc = 'This is a paragraph';
const myTitleId = 'main-title';
const name = 'Luke';


const header = (
    <header>
    {/* This is a comment */}
        <h1 id={myTitleId}>{ name }'s first react element!</h1>
        <p className='main-desc'>{ desc }</p>
        <input value={10 * 20} />
    </header>
);
ReactDOM.render(
    header,
    document.getElementById('root')
);
