import React from "react";
import { Pie } from "react-chartjs-2";
import { Card } from "react-bootstrap";


function OrganicKWdigest(props) {

    let chartData3 = {
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
    }




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