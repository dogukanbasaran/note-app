import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

import { useEffect, useState } from "react";

const NoteCard = ({ text, color, fontStyle, onHandleDeleteCard, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  function handleCopyText() {
    navigator.clipboard.writeText(text);
    setCopied(true);
  }

  function handleTools() {
    isOpen != true ? setIsOpen(true) : setIsOpen(false);
  }

  function handleExpandCard() {
    isExpand != true ? setIsExpand(true) : setIsExpand(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  return (
    <div
      className={`h-[300px] w-[300px] text-black justify-self-center flex flex-col`}
    >
      <div
        id="container"
        className={`${color}  h-[100%] w-[100%] ${
          isExpand
            ? "absolute h-[400px] w-[350px] min-[768px]:h-[500px] min-[768px]:w-[500px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100 border"
            : null
        }`}
      >
        <div className="w-[100%] h-[40px] flex justify-end items-center relative">
          <button
            onClick={handleTools}
            className="h-[30px] w-[30px] flex items-center justify-center cursor-pointer"
          >
            <MoreVertIcon />
          </button>
          {isOpen && (
            <div className="absolute top-[5px] right-[30px] bg-black text-white rounded-[5px] h-[40px] w-[120px] flex items-center justify-center gap-[5px]">
              <button
                onClick={handleCopyText}
                className="h-[30px] w-[30px] cursor-pointer flex items-center justify-center"
              >
                {copied ? <DoneIcon /> : <ContentCopyIcon />}
              </button>
              <button
                onClick={() => onHandleDeleteCard(id)}
                className="h-[30px] w-[30px] cursor-pointer flex items-center justify-center"
              >
                <DeleteIcon />
              </button>
              <button
                onClick={handleExpandCard}
                className="h-[30px] w-[30px] cursor-pointer flex items-center justify-center"
              >
                {<OpenInFullIcon />}
              </button>
            </div>
          )}
        </div>
        <p className={`h-[100%] px-[10px] break-words ${fontStyle}`}>
          {text.length > 300 && isExpand != true
            ? text.slice(0, 300) + "..."
            : text}
        </p>
        {/* <img
          className={`absolute bottom-0 right-[-30px]  -rotate-30 ${
            isExpand ? "hidden" : null
          } `}
          src="/img/tape1.png"
          alt="tape"
          width={100}
        />
        <img
          className={`absolute top-[-5px] left-[-30px] -rotate-30 ${
            isExpand ? "hidden" : null
          } `}
          src="/img/tape2.png"
          alt="tape"
          width={100}
        /> */}
      </div>
    </div>
  );
};

export default NoteCard;
