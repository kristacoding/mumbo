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
        '#82C09A',
        '#8289C0',
      ],
      borderColor: [
        '#5a3573',
        '#cc8b79'
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
        '#82C09A',
        '#8289C0',

      ],
      borderColor: [
        '#5a3573',
        '#cc8b79',
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