import React from "react";
import classnames from "classnames";

const InfoButton = ({ children, ...props }) => {
  return (
    <button
      className={classnames(
        "flex items-center gap-2 border px-3 py-2 text-light border-gray-400 rounded-lg",
        {
          "bg-zomato-300 text-white border-none": props.isActive,
        }
      )}
    >
      {children}
    </button>
  );
};

export default InfoButton;
