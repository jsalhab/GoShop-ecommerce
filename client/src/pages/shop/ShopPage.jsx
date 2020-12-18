import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import { connect } from "react-redux";
import { fetchCollections } from "../../redux/actions/shopAction";
import WithSpinner from "../../components/with-spinner/WithSpinner";
import "./ShopPage.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${this.props.match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={this.props.isFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.shop.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollections: () => dispatch(fetchCollections()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
