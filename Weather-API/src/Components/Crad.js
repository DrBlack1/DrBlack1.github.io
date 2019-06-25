import React from 'react';
import '../card.css';

// const Card = () => {
//     return(
//         // <div className="container">
//            <div className="card">
//           <button className="button">  <i className="fas fa-times-circle"></i> </button>
//            <h3>Location: Manchester</h3>
//             <p>Temperature:</p>
//             <p>Humidity:</p>
//             <p>Conditions:</p>
//            </div>
//         // </div>
//     )
// }




class Card extends React.Component {


    removeCard(){
        console.log('delete');
        
    }



    render() {
        return (
            <div className="card">
                <button className="button" onClick={this.removeCard}>  <i className="fas fa-times-circle"></i> </button>
                <h3>Location: Manchester</h3>
                <p>Temperature:</p>
                <p>Humidity:</p>
                <p>Conditions:</p>
            </div>
        );
    }
}



export default Card