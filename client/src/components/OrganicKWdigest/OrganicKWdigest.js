import React from "react";
import { Pie } from "react-chartjs-2";
import { Col, Row, Card } from "react-bootstrap";


function OrganicKWdigest(props) {

    let chartData3 = {
        labels: ['Pos. 1-3', 'Pos. 4-10', 'Pos. 11-20', 'Pos.21-30', 'Pos. 31-40'],
        datasets: [{
            label: '',
            data: [props.Top3, props.Top10, props.Top20, props.Top30, props.Top40],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    }

    console.log(props.top3, props.top10, props.top20, props.top30, props.top40)


    return (
            <Card className="card shadow p-3 mb-5 bg-white rounded">
                <Card.Header className="font-weight-bold text-secondary text-uppercase">
                    Organic KW Postion Spread
                </Card.Header>
                <Card.Body>
                    <Pie
                        data={chartData3}
                        options={{ maintainAspectRatio: true }}
                    />
                </Card.Body>
            </Card>
    )
}


export default OrganicKWdigest;