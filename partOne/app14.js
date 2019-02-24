// increment state score on click using arrow function
// decrement state score on click
const players = [
    {
        name: 'patto',
        score: 0,
        id: 0
    },
    {
        name: 'stuart',
        score: 0,
        id: 1
    },
    {
        name: 'dan',
        score: 5,
        id: 2
    },
    {
        name: 'dean',
        score: 0,
        id: 3
    }
]

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className='stats'>Players: { props.totalPlayer }</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className='player'>
            <span className='player-name'>{ props.name }</span>
            <Counter />
        </div>
    );
}

class Counter extends React.Component {
    state = {
        score: 0
    }

    incrementScore = () => {
        // getting the previous state
        this.setState(prevState => ({ score: prevState.score + 1 }));
    }

    decrementScore = () => {
        this.setState(prevState => ({score: prevState.score - 1 }));
    }

    render() {
        return (
            <div className='counter'>
                <button className='counter-action decrement' onClick={() => this.decrementScore()}>-</button>
                <span className='counter-score'>{ this.state.score }</span>
                <button className='counter-action increment' onClick={() => this.incrementScore()}>+</button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className='scoreboard'>
            <Header title='Scoreboard' totalPlayer={props.initialPlayers.length}/>
            {/* Player list */}
            {props.initialPlayers.map(player => 
                <Player 
                    name={ player.name }
                    key={ player.id.toString() }
                />
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={ players }/>,
    document.getElementById('root')
);