// import React, { Component } from "react";
// import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";

// class Discover extends Component {
//   state = {
//     image: "",
//     match: false,
//     matchCount: 0
//   };

//   // When the component mounts, load the next dog to be displayed
//   componentDidMount() {
//     this.loadNextDog();
//   }

//   handleBtnClick = event => {
//     // Get the data-value of the clicked button
//     const btnType = event.target.attributes.getNamedItem("data-value").value;
//     // Clone this.state to the newState object
//     // We'll modify this object and use it to set our component's state
//     const newState = { ...this.state };

//     if (btnType === "pick") {
//       // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
//       newState.match = 1 === Math.floor(Math.random() * 5) + 1;

//       // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
//       newState.matchCount = newState.match
//         ? newState.matchCount + 1
//         : newState.matchCount;
//     } else {
//       // If we thumbs down'ed the dog, we haven't matched with it
//       newState.match = false;
//     }
//     // Replace our component's state with newState, load the next dog image
//     this.setState(newState);
//     this.loadNextDog();
//   };

//   loadNextDog = () => {
//     API.getRandomDog()
//       .then(res =>
//         this.setState({
//           image: res.data.message
//         })
//       )
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <h1 className="text-center">Make New Friends</h1>
//         <h3 className="text-center">
//           Thumbs up on any pups you'd like to meet!
//         </h3>
//         <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
//         <h1 className="text-center">
//           Made friends with {this.state.matchCount} pups so far!
//         </h1>
//         <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
//           Yay! That Pup Liked You Too!!!
//         </Alert>
//       </div>
//     );
//   }
// }

import React from "react";
import ReactDataGrid from "react-data-grid";
//import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

 const columns = [
  { key: 'tran_id', name: 'TRANSACTION' }
, { key: 'acct_id', name: 'ACCOUNT ID' }
, { key: 'tran_datetime', name: 'TIME' }
, { key: 'tran_symbol', name: 'SYMBOL' }
, { key: 'tran_desc', name: 'STOCK' }
, { key: 'symbol_quote', name: 'QUOTE' }
, { key: 'symbol_delta', name: 'CHANGE' }
, { key: 'symbol_quantity', name: 'QUANITY' }
, { key: 'symbol_cost_share', name: 'COST/SHARE' }
, { key: 'symbol_cost_basis', name: 'COST BASIS' }
, { key: 'symbol_gain_loss', name: 'GAI/LOSS' }
, { key: 'symbol_market_value', name: 'BALANCE' }
];
const rows = [{
  "tran_id": "3003",
  "acct_id": "123456",
  "tran_datetime": "2018-01-19 03:13:07.000000",
  "tran_symbol": "QQQ",
  "tran_desc": "304326",
  "symbol_quote": 100.00,
  "symbol_delta": 0.00,
  "symbol_quantity": 1.0,
  "symbol_cost_share": 80.00,
  "symbol_cost_basis": 80.00,
  "symbol_gain_loss": 20.00,
  "symbol_market_value": 100.00
},
{
  "tran_id": "3004",
  "acct_id": "123456",
  "tran_datetime": "2018-01-19 03:13:07.000000",
  "tran_symbol": "VOO",
  "tran_desc": "VANGUARD S&P500 ETF",
  "symbol_quote": 1000.00,
  "symbol_delta": 0.00,
  "symbol_quantity": 1.0,
  "symbol_cost_share": 800.00,
  "symbol_cost_basis": 800.00,
  "symbol_gain_loss": 200.00,
  "symbol_market_value": 1000.00
},
{
  "tran_id": "3005",
  "acct_id": "123456",
  "tran_datetime": "2018-01-19 03:13:07.000000",
  "tran_symbol": "VXUS",
  "tran_desc": "VANGUARD TOTAL STOCK MKT ETF",
  "symbol_quote": 500.00,
  "symbol_delta": 0.00,
  "symbol_quantity": 1.0,
  "symbol_cost_share": 400.00,
  "symbol_cost_basis": 400.00,
  "symbol_gain_loss": 100.00,
  "symbol_market_value": 500.00
}
];


const rowGetter = rowNumber => rows[rowNumber];
 
const Discover = () => 
  {
  return <ReactDataGrid
    columns={columns}
    rowGetter={rowGetter}
    rowsCount={rows.length}
    minHeight={500} />;
}


export default Discover;
