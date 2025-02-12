import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const CloseBtn = ({ setVisibility }) => {
  function handleVisibility() {
    setVisibility(false);
  }

  return (
    <button
      onClick={handleVisibility}
      className="h-[40px] w-[40px] cursor-pointer float-right"
    >
      <CloseIcon />
    </button>
  );
};

export default CloseBtn;
