import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "Symbol", field: "symbol"},
                {headerName: "Company", field: "company"},
                {headerName: "Price", field: "price"},
                {headerName: "Volume", field: "volume"},
                {headerName: "Exchange", field: "exchange"}

            ],
             rowData: [
                {make: "X", model: "", price: 0},
                {make: "Y", model: "", price: 0},
                {make: "Z", model: "", price: 0}
            ]




        }
    }

    componentDidMount() {
      fetch('https://my.api.mockaroo.com/stockmarket1.json?key=be681ad0')
          .then(result => result.json())
          .then(rowData => this.setState({rowData}))
  }


    render() {
        return (
                <div 
                  className="ag-theme-balham"
                  style={{ 
	                height: '500px', 
	                width: '600px' }} 
		            >
                    <AgGridReact
                        enableSorting={true}
                        enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            );
    }
}


export default Search;
