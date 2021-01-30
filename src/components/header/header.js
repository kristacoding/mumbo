import React from "react";

function header() {
  
  return (
    <div className="jumbotron text-center dash">
    <h1 className="display-4">Dashboard<span className="site-name"></span></h1>
    <p className="lead"><span className="site-name"></span></p>
    <sup><button type="button" id="save-button" className="btn btn-success">Save Search!</button></sup>
    </div>

  );
}

export default header;