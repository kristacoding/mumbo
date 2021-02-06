import React from "react";

function Chartdigest() {
  
  return (
        <div class="row">
            <div class="col-md-4">
                <div class="card shadow p-3 mb-5 bg-white rounded">
                <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
                   Organic Traffic vs Adwords Traffic
                </div>
                <div class="card-body">
                    <canvas id="myChart3" width="400" height="400"></canvas>
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-left-secondary shadow p-3 mb-5 bg-white rounded">
                <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
                Organic Keywords vs Adwords Keywords 
                </div>
                <div class="card-body">
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow p-3 mb-5 bg-white rounded">
                <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
                    Organic "Cost" vs Adwords Cost
                </div>
                <div class="card-body">
                    <canvas id="myChart2" width="400" height="400"></canvas>
                </div>
                </div>
            </div>
        </div>
  );
}

export default Chartdigest;