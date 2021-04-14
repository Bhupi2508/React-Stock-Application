import React, { Component } from "react";
import './stockInput.css';
import Chart from '../chart/chart';
import StockData from '../stockData/stockData'

// generate random function
const randomData = Math.floor(Math.random() * 10);

// create an array for all the stock values
let array = [];
let arrayFixed = [];
array.push(randomData)

class StockInput extends Component {
    sendData = () => {
        this.props.parentCallback("Hey Popsie, How’s it going?");
    }
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
        if (Number(data.number) || data.number === '0') {
            array.push(data.number)
        }
        if (Number(data.number) === randomData) {
            arrayFixed = array.concat(arrayFixed)
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
            numberMessage = " is more than current stock value"
        } else if (Number(number) < randomData) {
            numberMessage = " is less than current stock value"
        } else if (number) {
            numberMessage = " is current stock value"
        }

        return (
            <div>
                <div className="container-fluid background">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <form className="form">
                                <div className="forMainDiv">
                                    <h3 className="h3">Stock Calculator</h3>
                                    <div className="form-group">
                                        <input type="text"
                                            name="number"
                                            className="form-control"
                                            placeholder="Enter number between 1-9"
                                            onChange={this.handleInputChange}
                                            value={number}
                                            ref={(ref) => this.mainInput = ref}
                                            required />
                                    </div>
                                    <button type="submit" onClick={this.onSubmit} className="btn btn-dark btn-lg btn-block">Submit</button>
                                </div>

                            </form>
                        </div>
                        <div className="col-6 col-md-4">
                            <button className="generateBtn">Generate Graph</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            < StockData randomData={randomData} number={number} array={array} numberMessage={numberMessage} />
                        </div>
                        <div className="col-sm">{(Number(number) === randomData)
                            ? <Chart arrayFixed={arrayFixed} randomData={randomData} />
                            : null
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StockInput;
