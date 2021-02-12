import React from "react";



function Profilecard(props) {

    return (
        <div class="row dash-row">
            <div class="col-md-12">
                <div class="card shadow p-3 mb-5 bg-white rounded">
                    <div class="card-body">
                        <div class="row">
                            <h2 class="font-weight-bold text-secondary text-uppercase">
                                Sample Header for site
                            </h2>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                                <div class="card">
                                    <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
                                        Project Organic Traffic & Adwords Traffic
                                    </div>
                                    <div class="card-body">
                                        <canvas></canvas>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
                                        Organic Traffic Positions
                                    </div>
                                    <div class="card-body">
                                        <canvas></canvas>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header h6 font-weight-bold text-secondary text-uppercase">
                                        Site Speed Stats
                                    </div>
                                    <div class="card-body">
                                        <canvas></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profilecard;