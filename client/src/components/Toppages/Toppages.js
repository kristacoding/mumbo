import React from "react";
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }

function TableURLs(props) {
  let columns = [
    { title: 'URL', field: 'URL'},
    { title: 'Keywords', field: 'Keywords'},
    { title: 'Traffic', field: 'Traffic'}
  ]
  let data = [
    { URL: props.Topurl1, Keywords: props.Topkw1, Traffic: props.Toptraffic1 },
    { URL: props.Topurl2, Keywords: props.Topkw2, Traffic: props.Toptraffic2 },
    { URL: props.Topurl3, Keywords: props.Topkw3, Traffic: props.Toptraffic3 },
    { URL: props.Topurl4, Keywords: props.Topkw4, Traffic: props.Toptraffic4 },
    { URL: props.Topurl5, Keywords: props.Topkw5, Traffic: props.Toptraffic5 },
    { URL: props.Topurl6, Keywords: props.Topkw6, Traffic: props.Toptraffic6 },
    { URL: props.Topurl7, Keywords: props.Topkw7, Traffic: props.Toptraffic7 },
    { URL: props.Topurl8, Keywords: props.Topkw8, Traffic: props.Toptraffic8 },
    { URL: props.Topurl9, Keywords: props.Topkw9, Traffic: props.Toptraffic9 },
    { URL: props.Topurl10, Keywords: props.Topkw10, Traffic: props.Toptraffic10 }
  ]; 
  //initialize table
  let options = [
    {
    autoColumns: true, 
    layout: "fitDataStretch",
  }
];
  return (
    <div class="col-md-12">
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
          Top 10 Organic Pages
              </div>
        <div class="card-body">
        <ReactTabulator columns={columns} data={data} options={options} />
        </div>
      </div>
    </div>
  )
}


export default TableURLs;