import React from 'react'
import axios from 'axios'

class NewStudentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: ''

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    console.log('NewStudentForm this.state: ', this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  async handleSubmit(event) {
    event.preventDefault()
    const {data} = await axios.post('/student', this.state)
    this.props.addStudent(data)
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    })
  }

  render () {
    return (
      <div>
        {console.log('NewStudentForm props: ', this.props)}
        {console.log('NewStudentForm this.state.firstName', this.state.firstName)}
        <h4>Add New Student</h4>
        <form onSubmit={this.handleSubmit}>
          First Name: <input type="text" name="firstName"  value={this.state.firstName} onChange={this.handleChange}/>
          <br></br>
          Last Name: <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          <br></br>
          Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <br></br>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default NewStudentForm
