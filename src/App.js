import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import apiData from "./data"

const App = () => {
  const [rowData, setRowData] = useState([]);

  const [columnDefs] = useState([
    { field: 'username',sortable:true ,editable:true,checkboxSelection:true},
    { field: 'first_name' ,sortable:true },
    { field: 'last_name' ,sortable:true },
    { field: 'email' ,sortable:true },
    { field: 'gender' ,sortable:true ,filter:true},
    { field: 'language' ,sortable:true ,filter:true},
    { field: 'country' ,sortable:true },
    { field: 'city' ,sortable:true ,filter:true},
    { field: 'address' ,sortable:true },
    { field: 'company' ,sortable:true ,filter:true},
    { field: 'credit card' ,sortable:true },
    { field: 'job' ,sortable:true },
    { field: 'car' ,sortable:true ,filter:true},
    { field: 'university' ,sortable:true ,filter:true},
  ])


  useEffect(() => {
    // axios.get("https://my.api.mockaroo.com/ag_grid.json", {
    //   headers: {
    //     "X-API-Key": "f3ad91d0"
    //   }
    // }).then(res => setRowData(res.data)).catch(res => console.error(res));
    setRowData(apiData);
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: "500px", width: "1900px" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}>
      </AgGridReact>
    </div>
  );
};


export default App;
