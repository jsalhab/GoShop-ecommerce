import React from "react";
import { connect } from "react-redux";
import "./OrderSuccess.scss";

const OrderSuccess = () => {
  return (
    <div className="order-success">
      <h1>Thank you for your purchase! </h1>
      <div>
        We will email you an order confirmation with details and tracking info.
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orderPlaced: state.cart.orderPlaced,
  };
};

export default connect(mapStateToProps)(OrderSuccess);
