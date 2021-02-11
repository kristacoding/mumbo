import React, { Component } from "react";
import {polarArea} from "react-chartjs-2";
class Kwchart extends Component{
    render(){
        <div class="row">
        <div class="col-sm-6">
            <div class="card shadow p-3 mb-5 bg-white rounded">
            <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
               Organic KW Postion Spread
            </div>
            <div class="card-body">
                <canvas id="myChart" width="75" height="75"></canvas>
            </div>
            </div>
        </div>
    </div>
    }
}
export default Kwchart;