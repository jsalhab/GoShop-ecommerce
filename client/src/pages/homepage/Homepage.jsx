import React from "react";
import Directory from "../../components/directory/Directory";
import { withRouter } from "react-router-dom";
import "./Homepage.scss";
import ExtraInfo from "../../components/extra-info/ExtraInfo";

const Homepage = ({ history }) => {
  return (
    <div className="homepage">
      <div className="first-section">
        <div className="container">
          <div className="main-content">
            <h1>Get up to 30% Off New Arrivals</h1>
            <div>
              <button onClick={() => history.push("/shop")}>shop now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <Directory />
      </div>
      <div className="third-section">
        <ExtraInfo />
      </div>
    </div>
  );
};

export default withRouter(Homepage);
