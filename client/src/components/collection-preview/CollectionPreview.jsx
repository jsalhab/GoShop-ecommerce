import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
              title={title}
              routeName={routeName}
            />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
