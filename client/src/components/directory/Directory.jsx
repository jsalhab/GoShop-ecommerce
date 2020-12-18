import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/selectors/directorySelector";
import { createStructuredSelector } from "reselect";
import { fetchCollections } from "../../redux/actions/shopAction";
import "./Directory.scss";

class Directory extends Component {
  componentDidMount() {
    this.props.fetchCollections();
  }
  render() {
    return (
      <div className="directory-menu">
        {this.props.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollections: () => dispatch(fetchCollections()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
