const players = [
    { id: 1, 
        name: "patto",
        score: 50
    },
    { id: 2, 
        name: "stuart",
        score: 90
    },
    { id: 3, 
        name: "dan",
        score: 85
    },
    { id: 4, 
        name: "dean",
        score: 80
    }
]

const Header = (props)=>{
    return(        
        <header>
        <h1>{props.title}</h1>
        <span className="stats">{props.totalPlayers}Players</span>
        </header>
        )
    }

    class Counter extends React.Component{
        state = {
            score: 0
        }
        incrementScore = () => {
            this.setState(prevState => ({
                score: prevState.score + 1
            }))
        }
        decrementScore = () => {
            this.setState(prevState => ({
                score: prevState.score - 1
            }))
        }
        
        render(){
            return (
                <div className="counter">
                    <button className = "counter-action decrement" onClick={() =>this.decrementScore()}>-</button>
                    <span className = "counter-score">{this.state.score}</span>
                    <button className = "counter-action increment" onClick={() =>this.incrementScore()}>+</button>
                </div>)
    }}

    const Player = (props)=>{
        return (
            <div className = "player">
                <span className = "player-name">{props.name}</span>
                <Counter />
            </div>
        )
    }

const App = (props)=>{
    return (
        <div className="scoreboard">
        <Header title="scoreboard" totalPlayers = {props.initialPlayers.length} />
            {/*Player list*/}
            {props.initialPlayers.map(player =>
            <Player 
            key={player.id.toString()}
            name={player.name}
            /> 
        )}
        </div>
    )}

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);