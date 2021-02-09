import React from "react";
import "./style.css";


function topStats(props) {
  
  return (
    <div className="row dash-row">
    <div className="col-md-3">
      <div className="card border-left-info shadow p-3 mb-5 bg-white rounded">
        <div className="card-body left-padding">
          <div className="row mini-dash-row">
            <div className="text-info font-weight-bold text-uppercase">Page Speed Score: {props.pageSpeed}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card border-left-info shadow p-3 mb-5 bg-white rounded">
        <div className="card-body left-padding">
          <div className="row mini-dash-row">
            <div className="text-info font-weight-bold text-uppercase">Overall Domain Rank:{props.domainRank}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-2">
      <div className="card border-left-info shadow p-3 mb-5 bg-white rounded">
        <div className="card-body left-padding">
          <div className="row mini-dash-row">
            <div className="text-info font-weight-bold text-uppercase">Projected Oranic Traffic:{props.organicTraffic}</div>
          </div>
          <div className="row mini-dash-row">
            <div className="h5 font-weight-bold text-secondary text-uppercase"><span className="average-price"></span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-2">
      <div className="card border-left-info shadow p-3 mb-5 bg-white rounded">
        <div className="card-body left-padding">
          <div className="row mini-dash-row">
            <div className="text-info font-weight-bold text-uppercase">First Page Keywords:{props.firstPageKW}</div>
          </div>
          <div className="row mini-dash-row">
            <div className="h5 font-weight-bold text-secondary text-uppercase"><span className="completion-rate"></span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-2">
      <div className="card border-left-info shadow p-3 mb-5 bg-white rounded">
        <div className="card-body left-padding">
          <div className="row mini-dash-row">
            <div className="text-info font-weight-bold text-uppercase">Keywords in Striking Distance: {props.kwStriking}</div>
          </div>
          <div className="row mini-dash-row">
            <div className="h5 font-weight-bold text-secondary text-uppercase"><span className="completion-rate"></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default topStats;