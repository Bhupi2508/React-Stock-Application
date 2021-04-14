import React, { Component } from "react";
import './dashboard.css';
import StockInput from '../stockInput/stockInput';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <StockInput />
      </div>
    );
  }
}

export default Dashboard;
