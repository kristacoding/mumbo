import React, {Component} from "react";
import {Bar} from "react-chartjs-2";
class Chartdigest extends Component{
    constructor(props){
        super(props);
        this.state = {
            ChartData1:{
                labels: ['Organic Traffic', 'Adwords Traffic'],
                datasets: [{
                  label: '',
                  data: [props.Ortraffic, props.Adtraffic],
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
            },
            ChartData2:{
                labels: ['Organic Keywords','Ad Keywords'],
                datasets: [{
                  label: '',
                  data: [props.Orkw, props.Adkw],
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
            }
        }
    }
    render(props){
        return (
                <div>
                    <div class="col-sm-6">
                        <div class="card shadow p-3 mb-5 bg-white rounded">
                        <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
                        Organic Traffic vs Adwords Traffic
                        </div>
                        <div class="card-body">
                        <Bar
                        data={this.state.ChartData1}
                        options={{ maintainAspectRatio: true }}
                        />
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card border-left-secondary shadow p-3 mb-5 bg-white rounded">
                        <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
                        Organic Keywords vs Adwords Keywords 
                        </div>
                        <div class="card-body">
                            <Bar 
                            data={this.state.ChartData2}
                            options={{ maintainAspectRatio: true }}
                            />
                        </div>
                        </div>
                    </div>
                </div>
        );

    }
}

export default Chartdigest;