import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchCollections,
  fetchCollectionItem,
} from "../../redux/actions/shopAction";
import { addItem } from "../../redux/actions/cartAction";
import CollectionItemData from "../collection-item-data/CollectionItemData";
import Tabs from "../tabs/Tabs";
import "./CollectionItemDetails.scss";

const CollectionItemDetails = ({ fetchCollectionItem, item, addItem }) => {
  const params = useParams();

  useEffect(() => {
    fetchCollectionItem(params.collectionId, params.itemId);
  }, []);

  return item ? (
    <div className="product-details">
      <div className="content">
        <div>
          <div className="header">PRODUCT INFO</div>
          <hr />

          <div className="row">
            <CollectionItemData item={item} addItem={addItem} addZome={true} />
          </div>
          <div className="row">
            <Tabs>
              <div label="DESCRIPTION">
                <h2>Product Description</h2>
                <h2>{item.price}$</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, sapiente illo. Sit error voluptas repellat rerum
                  quidem, soluta enim perferendis voluptates laboriosam.
                  Distinctio, officia quis dolore quos sapiente tempore alias.
                </p>
              </div>
              <div label="INFORMATION">
                After 'while, <em>Crocodile</em>!
              </div>
              <div label="REVIEWS">
                Nothing to see here, this tab is <em>extinct</em>!
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.shop.item,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionItem: (collectionId, itemId) =>
    dispatch(fetchCollectionItem(collectionId, itemId)),
  fetchCollections: () => dispatch(fetchCollections()),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItemDetails);
