import React from "react";
import ReactDataGrid from "react-data-grid";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

 const columns = [
  { key: 'acct_id', name: 'ACCOUNT NUMBER' }
, { key: 'acct_desc', name: 'DESCRIPTION' }
, { key: 'acct_type', name: 'TYPE' }
, { key: 'balance_amount', name: 'BALANCE' }
];
const rows = [
  { acct_id: 304326, acct_desc: 'ROTH IRA', acct_type: 'MONEY MARKET ACCOUNT', balance_amount: 3500 }
  ,{ acct_id: 304326, acct_desc: 'TRADITIONAL IRA', acct_type: 'HIGH YIELD SAVINGS ACCOUNT', balance_amount: 10000 }
  ,{ acct_id: 304326, acct_desc: 'RETAIL INVESTMENT ACCT', acct_type: '5-YEAR CD', balance_amount: 8887 }
  ,{ acct_id: 304326, acct_desc: 'RETAIL INVESTMENT ACCT', acct_type: 'CHECKING ACCOUNT', balance_amount: 3313 }
];


const rowGetter = rowNumber => rows[rowNumber];
 
const About = () => 
  {
  return <ReactDataGrid
    columns={columns}
    rowGetter={rowGetter}
    rowsCount={rows.length}
    minHeight={500} />;
}



export default About;
