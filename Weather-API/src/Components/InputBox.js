import React from 'react';



const InputBox = (props) => {
    return (
        <div className="head">
            <div className="inputBox">
                <h1>Weather-API</h1>
                <br></br>
                    <form onSubmit={props.testing}>
                        <input text="text" name="textField"></input>
                        <button >Enter</button>
                    </form>
            </div>
            
        </div>
    );
};




export default InputBox;