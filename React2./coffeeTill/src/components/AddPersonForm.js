import React, {Component} from 'react';


class AddPersonForm extends Component {
    
    personInput = React.createRef();
    
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addPerson(this.personInput.current.value);
        e.currentTarget.reset();
        
    }
    render(){
        
        return(
            <form onSubmit = {this.handleSubmit} > 
                <input
                    type="text"
                    ref={this.personInput}                   
                    placeholder = "Enter person's name here"
                />
                <input
                    type="submit"
                    value="Add Person"
                />    
            </form>
        )
    }
}



export default AddPersonForm;
