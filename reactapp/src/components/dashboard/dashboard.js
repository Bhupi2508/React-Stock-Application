import React, { Component } from "react";
import './dashboard.css';

// generate random function
const randomData = Math.floor(Math.random() * 10);
console.log("randomData : ", randomData);

let inputData;


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      numberMessage: ''
    }
  }

  // call on submit
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state
    this.mainInput.value = "";
    inputData = data.number
    console.log("data ", data.number);
    console.log("randomData : ", randomData);
  }

  handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.value.length <= 1) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }



  render() {
    let { number } = this.state
    let { numberMessage } = this.state
    if (number > randomData) {
      numberMessage = "Your value is more than expected"
    } else if ((number < randomData) && (number)) {
      numberMessage = "Your value is less than expected"
    } else if (number) {
      numberMessage = "Your value is Correct"
    }

    return (
      <div>
        <div className="background">
          <form className="form" onSubmit={this.handleSubmit}>
            <div class="forMainDiv">
              <h3 className="h3">Stock Calculator</h3>
              <div className="form-group">
                <input type="text"
                  name="number"
                  className="form-control"
                  placeholder="Enter number between 0-9"
                  onChange={this.handleInputChange}
                  value={number}
                  ref={(ref) => this.mainInput = ref}
                  required />
              </div>
              <button type="submit" onClick={this.onSubmit} className="btn btn-dark btn-lg btn-block">Submit</button>
            </div>

          </form>
        </div>
        <div>
        </div>
        <div>{(number)
          ? <h3 className="h32" >Your Number is :  {number}</h3>
          : null
        }
        </div>

        <div id="message">
          {(number)
            ? <h3 className="h32" >Your Number is : {numberMessage}</h3>
            : null
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
