import React from "react";

const Skeleton = ({ width, height, borderRadius }) => {
  const style = {
    width: width || "w-full",
    height: height || "h-full",
    borderRadius: borderRadius || "rounded-sm",
  };

  return (
    <div
      className={`bg-gray-300 mx-auto animate-pulse ${style.width} ${style.height} ${style.borderRadius}`}
    ></div>
  );
};

export default Skeleton;
