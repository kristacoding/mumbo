import React from "react";
import { Bar } from "react-chartjs-2";
function Chartdigest(props) {

  let chartData1 = {
    labels: ['Adwords Traffic', 'Adwords Keywords'],
    datasets: [{
      label: '',
      data: [props.Adtraffic, props.Adkw],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 0
    }]
  };

  let chartData2 = {
    labels: ['Organic Traffic', 'Organic Keywords'],
    datasets: [{
      label: '',
      data: [props.Ortraffic, props.Orkw],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 0
    }]
  };
  return (
    <div>
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
          Adwords Traffic & Adwords Keywords
                        </div>
        <div class="card-body">
          <Bar
            data={chartData1}
            options={{ maintainAspectRatio: true }}
          />
        </div>
      </div>
      <div class="card border-left-secondary shadow p-3 mb-5 bg-white rounded">
        <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
          Organic Traffic & Organic Keywords
                        </div>
        <div class="card-body">
          <Bar
            data={chartData2}
            options={{ maintainAspectRatio: true }}
          />
        </div>
      </div>
    </div>
  );

}

export default Chartdigest