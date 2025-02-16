import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

const NoteCard = ({ text, color, fontStyle, onHandleDeleteCard }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleTools() {
    isOpen != true ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <div
      className={`h-[300px] w-[300px] text-black relative justify-self-center ${color} flex flex-col`}
    >
      <div className="w-[100%] h-[40px] flex justify-end items-center relative">
        <button
          onClick={handleTools}
          className="h-[30px] w-[30px] flex items-center justify-center cursor-pointer"
        >
          <MoreVertIcon />
        </button>
        {isOpen && (
          <div className="absolute top-[5px] right-[30px] bg-black text-white rounded-[5px] h-[40px] w-[80px] flex items-center justify-center gap-[5px]">
            <button className="h-[30px] w-[30px] cursor-pointer flex items-center justify-center">
              <ContentCopyIcon />
            </button>
            <button
              onClick={onHandleDeleteCard}
              className="h-[30px] w-[30px] cursor-pointer flex items-center justify-center"
            >
              <DeleteIcon />
            </button>
          </div>
        )}
      </div>
      <p className={`h-[100%] px-[10px] break-words ${fontStyle}`}>
        {text.length > 300 ? text.slice(0, 300) + "..." : text}
      </p>
      <img
        className="absolute bottom-0 right-[-30px]  -rotate-30"
        src="/img/tape1.png"
        alt="tape"
        width={100}
      />
      <img
        className="absolute top-[-5px] left-[-30px] -rotate-30"
        src="/img/tape2.png"
        alt="tape"
        width={100}
      />
    </div>
  );
};

export default NoteCard;

/*
Properties (for updating):
- delete
- copying notes
*/
