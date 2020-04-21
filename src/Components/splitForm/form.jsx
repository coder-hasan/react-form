import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './textInput'

const Form = props => (
    <form onSubmit={props.handleSublit}>
        <TextInput
            name="name"
            label="Enter Name"
            placeholder="Your Name"
            value={props.values.name}
            onChange={props.handleChange}
        />
        <TextInput
            name="email"
            type="email"
            label="Enter Email"
            placeholder="Your Email"
            value={props.values.email}
            onChange={props.handleChange}
        />
        <TextInput
            name="password"
            type="password"
            label="Enter Password"
            placeholder="Your Password"
            value={props.values.password}
            onChange={props.handleChange}
        />
        {/* <input 
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
        /> */}
        <button 
            className="btn btn-success" 
            type="submit"
        >
            Submit
        </button>
    </form>
)

Form.propTypes = {
    values : PropTypes.object.isRequired,
    handleChange : PropTypes.func.isRequired,
    handleSublit : PropTypes.func.isRequired
}

export default Form;