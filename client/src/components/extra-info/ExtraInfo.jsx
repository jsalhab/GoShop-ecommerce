import React from "react";
import {
  faShippingFast,
  faBoxOpen,
  faLock,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ExtraInfo.scss";

const ExtraInfo = () => {
  return (
    <div className="extra-info">
      <div className="extra-info-badges">
        <div className="option-link">
          <div>
            <FontAwesomeIcon icon={faShippingFast} className="info-icon" />
          </div>
          <div className="info">
            <h4>Free Shipping on all orders</h4>
            <p>Suffered Alteration in Some Form</p>
          </div>
        </div>

        <div className="option-link">
          <div>
            <FontAwesomeIcon icon={faBoxOpen} className="info-icon" />
          </div>

          <div className="info">
            <h4>14 days free returns</h4>
            <p>Making it Look Like Readable</p>
          </div>
        </div>

        <div className="option-link">
          <div>
            <FontAwesomeIcon icon={faLock} className="info-icon" />
          </div>

          <div className="info">
            <h4>Secure online payment</h4>
            <p>The Internet Tend To Repeat</p>
          </div>
        </div>

        <div className="option-link">
          <div>
            <FontAwesomeIcon icon={faShieldAlt} className="info-icon" />
          </div>
          <div className="info">
            <h4>100 % Authentic products</h4>
            <p>We don not sell Fakes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;
