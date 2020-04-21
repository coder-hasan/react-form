import React, {Component} from 'react'
import classes from './uncontrolledForm.module.css'


class ControlledForm extends Component{

    state ={
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
        const {name, email, password} = this.state
        return(
            <div className={classes.container}>
                <form onSubmit={this.handleSublit}>
                    <input 
                        className="form-control my-2" 
                        type="text" 
                        name="name" 
                        placeholder="Mahmud Hasan"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input 
                        className="form-control my-2" 
                        type="email" 
                        name="email" 
                        placeholder="hasan94mahmud@gmail.com"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input 
                        className="form-control my-2" 
                        type="password" 
                        name="password" 
                        placeholder="******"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button 
                        className="btn btn-success" 
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default ControlledForm