import React, { Component } from "react";
import './stockData.css';

class StockData extends Component {

    render() {
        return (
            <div>
                <div col-sm>{(this.props.randomData || this.props.randomData === 0)
                    ? <h3 className="h32" >Current Stock Value :  {this.props.randomData}</h3>
                    : null
                }
                </div>
                <div>{(Number(this.props.number))
                    ? <h3 className="h321" >Your bid {this.props.numberMessage}</h3>
                    : null
                }
                </div>
                <div>{((this.props.number === '0') && (this.props.number))
                    ? <h3 className="h321" >Your bid {this.props.numberMessage}</h3>
                    : null
                }
                </div>
                <div>{(this.props.number)
                    ? <h3 className="h321"><ul>
                        {this.props.array.map(function (name, index) {
                            return <li>Stock values ({index}) = {name}</li>;
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

export default StockData;
