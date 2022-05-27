import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Teamdesigner extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
          {/* <img  src={projectImage} alt="Example2"/>  */}
            <Zmage alt={projects.title} src={projectImage} style={{ textAlign: "center" }}/>
            {/* <h6>{projects.title}</h6> */}
            <div style={{ textAlign: "center" }}>{projects.title}</div>
            <div style={{ textAlign: "center",color:"blue",font:"11px"}}>{projects.category}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>DESIGNER</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Teamdesigner;
