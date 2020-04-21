import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import classes from './splitForm.module.css'
import Form from './form'

class SplitForm extends Component{

    state = {
        name : '',
        email : '',
        password : ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSublit = event => {
        event.preventDefault();

        console.log(this.state)
        event.target.reset()
        this.setState({name:'', email:'', password:''})
    }

    render(){
        // const {name, email, password} = this.state
        return(
            <div className={classes.container}>
                <Form
                    values={this.state}
                    handleChange={this.handleChange}
                    handleSublit={this.handleSublit}
                />
            </div>
        )
    }
}

export default SplitForm