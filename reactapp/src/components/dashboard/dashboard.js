import React, { Component } from "react";
import './dashboard.css';

// generate random function
const randomData = Math.floor(Math.random() * 10);

// create an array for all the stock values
let array = [];

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      numberMessage: ''
    }
  }

  // call on submit
  onSubmit = (e) => {
    e.preventDefault();
    const data = this.state
    this.mainInput.value = "";
    if (Number(data.number)) {
      array.push(data.number)
    }
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // onChange method
  handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.value.length <= 1) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  render() {
    let { number, numberMessage } = this.state
    if (number > randomData) {
      numberMessage = "Which is more than current stock value"
    } else if ((number < randomData) && (number)) {
      numberMessage = "Which is less than current stock value"
    } else if (number) {
      numberMessage = "Which is current stock value"
    }


    return (
      <div>
        <div className="background">
          <form className="form">
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
        <div>{(randomData || randomData === 0)
          ? <h3 className="h32" >Current Stock Value :  {randomData}</h3>
          : null
        }
        </div>
        <div>{(Number(number))
          ? <h3 className="h32" >Your bid is "{number}", {numberMessage}</h3>
          : null
        }
        </div>
        <div>{(number)
          ? <h3 className="h32"><ul>
            {array.map(function (name, index) {
              return <li>Stock values ({index + 1}) = {name}</li>;
            })}
          </ul>
          </h3>
          : null
        }
        </div>
      </div>
    );
  }
}

export default Dashboard;
