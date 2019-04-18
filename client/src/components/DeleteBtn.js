import React from "react";

function DeleteBtn(props) {
  return (
    <button className="delete-btn" {...props} tabIndex="0">
      Delete This Book
    </button>
  );
}

export default DeleteBtn;
