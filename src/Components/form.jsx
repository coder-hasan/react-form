import React, {Component} from 'react';
import classes from './form.module.css'

class Form extends Component {
  state = {
    name : '',
    country : '',
    bio : '',
    birthDay : '',
    gender : '',
    agree : false,
    skills : []
  }

  handleChange = event => {
    // console.log(event.target.name)
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSkillChange = event => {
    if(event.target.checked){
      this.setState({
        skills : [...this.state.skills, event.target.value]
      })
    }else{
      const skills = this.state.skills.filter(skill => skill !== event.target.value)
      this.setState({skills})
    }
  }

  handleCheckbox = event => {
    this.setState({
      agree : event.target.checked
    })
  }

  render(){
    const {name, country, bio, birthDay, agree, skills} = this.state
    return (
      <div className="App">
        <div className={classes.container}>
          <h1 className={classes.header}>Working With Forms In React</h1>
          <div>
            <input className="form-control my-2"
             type="text" name="name" 
             placeholder="Mahmud Hasan"
             value = {name}
             onChange={this.handleChange} />
            <select className="form-control my-2" 
            name="country" 
            value = {country}
            onChange={this.handleChange}
            >
              <option value="">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Afganistan">Afganistan</option>
              <option value="Srilanka">Srilanka</option>
            </select>
            <textarea className="form-control my-2" 
            name="bio" 
            placeholder="Tell About Yourself"
            value={bio}
            onChange={this.handleChange}
            ></textarea>
            <input className="form-control my-2" type="date" name="birthDay"
            value={birthDay}
            onChange={this.handleChange}/>
            <div>
              <input type="radio" name="gender" value="Male" onChange={this.handleChange}/>
              Male
              <input type="radio" name="gender" value="Female" onChange={this.handleChange}/>
              Female
              <input type="radio" name="gender" value="Other" onChange={this.handleChange}/>
              Other
            </div>
            <div className="my-2">
              <h3>Skills</h3>
              <input type="checkbox" name="skills" value="Java" 
              checked={skills.includes("Java")} 
              onChange={this.handleSkillChange}/>
              Java
              <input type="checkbox" name="skills" value="Javascript" 
              checked={skills.includes("Javascript")} 
              onChange={this.handleSkillChange}/>
              Javascript
              <input type="checkbox" name="skills" value="Python" 
              checked={skills.includes("Python")} 
              onChange={this.handleSkillChange}/>
              Python
              <input type="checkbox" name="skills" value="PHP" 
              checked={skills.includes("PHP")} 
              onChange={this.handleSkillChange}/>
              PHP
            </div>
            <div className="my-2">
              <input type="checkbox" name="agree" checked={agree} onChange={this.handleCheckbox}/>
              agreed the terms
            </div>
            <button className="btn btn-info" onClick={() => console.log(this.state)}>Show Data</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
