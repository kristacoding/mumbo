import React from "react";

function header(props) {
  
  return (
    <div className="jumbotron text-center dash">
    <h1 className="display-4">Mumbo<span className="site-name"></span></h1>
    <h2 className="lead"><span className="site-name">{props.Sitename}</span></h2>
    </div>

  );
}

export default header;