import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteIcon from "@material-ui/icons/Delete";
import "../styles/List.css";

const List = ({ items, editItem, removeItem }) => (
  <div className="List">
    {items.map((item) => {
      const { id, title } = item;
      return (
        <div key={id} className="grocery-item">
          <p>{title}</p>
          <div>
            <button
              className="edit-btn"
              type="text"
              onClick={() => editItem(id)}
            >
              <EditRoundedIcon />
            </button>
            <button
              className="delete-btn"
              type="text"
              onClick={() => removeItem(id)}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      );
    })}
  </div>
);

export default List;
