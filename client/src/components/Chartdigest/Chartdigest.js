import React from "react";
import { Card } from "react-bootstrap";
import { Pie, Bar } from "react-chartjs-2";


function Chartdigest(props) {

  let chartData1 = {
    labels: ['Adwords Traffic', 'Adwords Keywords'],
    datasets: [{
      label: '',
      data: [props.Adtraffic, props.Adkw],
      backgroundColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 0
    }]
  };

  let chartData2 = {
    labels: ['Organic Value', 'Adwords Value'],
    datasets: [{
      label: '',
      data: [props.Orcost, props.Adwordscost],
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
      <Card className="shadow p-3 mb-5 bg-white ">
        <Card.Header className="font-weight-bold text-secondary">
          Adwords Metrics        
        </Card.Header>
        <Card.Body>
          <Pie
            data={chartData1}
            options={{
              maintainAspectRatio: true, legend: {
                display: false
              }
            }}
          />
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="font-weight-bold text-secondary">
          Total Traffic Value
        </Card.Header>
        <Card.Body>
          <Pie
            data={chartData2}
            options={{
              maintainAspectRatio: true, legend: {
                display: false
              }
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );

}

export default Chartdigest