// putting a component inside another component is called composition 

// parent component can control how its child components are rendered 

const name = 'patto';

const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className='stats'>Players: 1</span>
        </header>
    );
}

const Player = () => {
    return (
        <div className='player'>
            <span className='player-name'>{ name }</span>
            <Counter />
        </div>
    );
}

const Counter = () => {
    return (
        <div className='counter'>
            <button className='counter-action'>-</button>
            <span className='counter-score'>50</span>
            <button className='counter-action'>+</button>
        </div>
    );
}

const App = () => {
    return (
        <div className='scoreboard'>
            <Header />
            {/* Player list */}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);