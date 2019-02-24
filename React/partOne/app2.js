// JSX
// JSX is compiled when browser is run by babel

const title = <h1>My first react element</h1>
const desc = <p>This is a paragraph</p>

const header = (
    <header>
        <h1>My first react element</h1>
        <p>This is a paragraph</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);