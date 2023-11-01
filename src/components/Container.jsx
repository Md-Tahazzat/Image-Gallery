import React from "react";

const Container = ({ children, componentStyle }) => {
  return <div className={componentStyle}>{children}</div>;
};

export default Container;
