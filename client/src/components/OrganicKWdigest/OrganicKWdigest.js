import React from "react";

function OrganicKWdigest() {
  
  return (
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
            <div class="col-md-3">
                <div class="card shadow p-3 mb-5 bg-white rounded">
                <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
                   Organic Traffic vs Adwords Traffic
                </div>
                <div class="card-body">
                    <canvas id="myChart2" width="400" height="400"></canvas>
                </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card border-left-secondary shadow p-3 mb-5 bg-white rounded">
                <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
                Organic Keywords vs Adwords Keywords 
                </div>
                <div class="card-body">
                    <canvas id="myChart3" width="400" height="400"></canvas>
                </div>
                </div>
            </div>
        </div>
  );
}

export default OrganicKWdigest;