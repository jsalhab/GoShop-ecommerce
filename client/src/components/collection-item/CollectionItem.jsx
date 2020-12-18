import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions/cartAction";
import { withRouter } from "react-router-dom";
import "./CollectionItem.scss";
import Modal from "../modal/Modal";
import CollectionItemData from "../collection-item-data/CollectionItemData";

const CollectionItem = ({ item, addItem, routeName, history }) => {
  const [show, showModal] = useState(false);

  const hideModal = () => {
    showModal(false);
  };

  return (
    <div className="collection-item">
      {show && (
        <Modal show={show} handleClose={hideModal}>
          <CollectionItemData item={item} addItem={addItem} />
        </Modal>
      )}
      <div
        className="image"
        onClick={() => history.push(`/shop/${routeName}/${item.id}`)}
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <div className="name">{item.name}</div>
        <div className="price">${item.price}</div>
      </div>
      <CustomButton className="custom-button" onClick={() => showModal(true)}>
        Quick View
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
