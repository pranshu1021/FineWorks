import React from "react";

const MobileIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#ffdb00"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M7 22h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2M7 4h10v16H7z"></path>
    <path d="M12 17a1 1 0 1 0 0 2 1 1 0 1 0 0-2"></path>
  </svg>
);

export default MobileIcon;