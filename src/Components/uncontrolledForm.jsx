import React, {Component} from 'react'
import classes from './uncontrolledForm.module.css'


class UncontrolledForm extends Component{

    handleSublit = event => {
        event.preventDefault();
        const data = {}
        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value

        console.log(data)
        event.target.reset()
    }

    render(){
        return(
            <div className={classes.container}>
                <form onSubmit={this.handleSublit}>
                    <input 
                        className="form-control my-2" 
                        type="text" 
                        name="name" 
                        placeholder="Mahmud Hasan"
                    />
                    <input 
                        className="form-control my-2" 
                        type="email" 
                        name="email" 
                        placeholder="hasan94mahmud@gmail.com"
                    />
                    <input 
                        className="form-control my-2" 
                        type="password" 
                        name="password" 
                        placeholder="******"
                    />
                    <button 
                        className="btn btn-danger" 
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default UncontrolledForm