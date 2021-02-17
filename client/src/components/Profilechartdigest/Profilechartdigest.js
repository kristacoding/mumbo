import React from "react";
import { Card } from "react-bootstrap";
import { Pie, Bar } from "react-chartjs-2";


function Profilechartdigest(props) {

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
    labels: ['Pos. 1-3', 'Pos. 4-10', 'Pos. 11-20', 'Pos.21-30', 'Pos. 31-40'],
    datasets: [{
        label: '',
        data: [props.Top3, props.Top10, props.Top20, props.Top30, props.Top40],
        backgroundColor: [
            '#82C09A',
            '#8289C0',
            '#C082A8',
            '#C0B982',
            '#faae7b',

        ],
        borderColor: [
            '#82C09A',
            '#8289C0',
            '#C082A8',
            '#C0B982',
            '#faae7b',

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
          KW Position Spread
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

export default Profilechartdigest