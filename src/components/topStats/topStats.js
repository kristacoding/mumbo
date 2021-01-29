import React from "react";

function topStats() {
  
  return (
    <div class="row dash-row">
    <div class="col-md-3">
      <div class="card border-left-info shadow p-3 mb-5 bg-white rounded">
        <div class="card-body left-padding">
          <div class="row mini-dash-row">
            <div class="text-info font-weight-bold text-uppercase">Page Speed Score</div>
          </div>
          <div class="row mini-dash-row">
            <div class="h5 font-weight-bold text-secondary text-uppercase">Projected Traffic</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-left-info shadow p-3 mb-5 bg-white rounded">
        <div class="card-body left-padding">
          <div class="row mini-dash-row">
            <div class="text-info font-weight-bold text-uppercase">Keywords in Position 1-10</div>
          </div>
          <div class="row mini-dash-row">
            <div class="h5 font-weight-bold text-secondary text-uppercase"><span class="average-price"></span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-left-info shadow p-3 mb-5 bg-white rounded">
        <div class="card-body left-padding">
          <div class="row mini-dash-row">
            <div class="text-info font-weight-bold text-uppercase">Keywords in Position 10-20</div>
          </div>
          <div class="row mini-dash-row">
            <div class="h5 font-weight-bold text-secondary text-uppercase"><span class="completion-rate"></span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-left-info shadow p-3 mb-5 bg-white rounded">
        <div class="card-body left-padding">
          <div class="row mini-dash-row">
            <div class="text-info font-weight-bold text-uppercase"></div>
          </div>
          <div class="row mini-dash-row">
            <div class="h5 font-weight-bold text-secondary text-uppercase"><span class="admissions-rate">Keywords in Position 20+</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default topStats;