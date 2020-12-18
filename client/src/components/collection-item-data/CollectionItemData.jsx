import React from "react";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions/cartAction";
import { withRouter } from "react-router-dom";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./CollectionItemData.scss";

const CollectionItemData = ({ item, addItem, addZome }) => {
  return (
    <div className="collection-item-data">
      <div className="item-data">
        <div className="img-conatiner">
          {addZome ? (
            <Zoom>
              <img src={item.imageUrl} className="image" alt="item image" />
            </Zoom>
          ) : (
            <img src={item.imageUrl} className="image-modal" alt="item image" />
          )}
        </div>
        <div>
          <h3>{item.name}</h3>
          <p>
            A customizable and magnetized case that can hold any refill item
            with a magnetic base. This new packaging with a see-through lid
            allows an easy color access.
          </p>
          <h4>${item.price}</h4>
          <p className="delivery-available-container">
            <FontAwesomeIcon icon={faShippingFast} />
            <span> Standard delivery available as of </span>
            <span>04/12/2020</span>
          </p>
          <CustomButton className="add-to-cart" onClick={() => addItem(item)}>
            Add to cart
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default withRouter(
  connect(null, mapDispatchToProps)(CollectionItemData)
);
