import { useEffect, useState } from "react";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

import ColorLensIcon from "@mui/icons-material/ColorLens";
import CloseBtn from "./CloseBtn";
import CreateBtn from "./CreateBtn";

const CreateCard = ({
  noteText,
  color,
  fontStyle,
  setVisibility,
  setNoteText,
  setColor,
  onHandleCreateCard,
  onHandleBoldText,
  onHandleItalicText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleColorPalette() {
    isOpen != true ? setIsOpen(true) : setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [color]);

  return (
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${color} text-black h-[400px] w-[350px]  min-[768px]:h-[500px] min-[768px]:w-[500px] z-2 border flex flex-col`}
    >
      <div>
        <CloseBtn setVisibility={setVisibility} />
      </div>
      <textarea
        maxLength={900}
        className={`w-[100%] h-[90%] p-[10px] outline-none resize-none ${fontStyle}`}
        placeholder="Type anything to remember"
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
      ></textarea>
      <div className="h-[10%] w-[100%] flex items-center justify-center gap-[20px]">
        <button
          onClick={onHandleBoldText}
          className="h-[40px] w-[40px] cursor-pointer"
        >
          <FormatBoldIcon />
        </button>
        <button
          onClick={onHandleItalicText}
          className="h-[40px] w-[40px] cursor-pointer"
        >
          <FormatItalicIcon />
        </button>
        <div className="relative" id="color-palette">
          <button
            onClick={handleColorPalette}
            className="h-[40px] w-[40px] cursor-pointer"
          >
            <ColorLensIcon />
          </button>
          {isOpen ? (
            <div className="absolute border top-[-120px] bg-black rounded-[5px] h-[120px] w-[120px] flex items-center justify-center">
              <div
                className="grid grid-cols-3 justify-items-center content-center gap-[5px]"
                id="container"
              >
                <div
                  onClick={(e) => {
                    setColor(e.target.dataset.value);
                  }}
                  data-value="bg-yellow-50"
                  className="h-[30px] w-[30px] bg-yellow-50 cursor-pointer"
                ></div>
                <div
                  onClick={(e) => {
                    setColor(e.target.dataset.value);
                  }}
                  data-value="bg-purple-300"
                  className="h-[30px] w-[30px] bg-purple-300 cursor-pointer"
                ></div>
                <div
                  onClick={(e) => {
                    setColor(e.target.dataset.value);
                  }}
                  data-value="bg-green-300"
                  className="h-[30px] w-[30px] bg-green-300 cursor-pointer"
                ></div>
                <div
                  onClick={(e) => {
                    setColor(e.target.dataset.value);
                  }}
                  data-value="bg-orange-300"
                  className="h-[30px] w-[30px] bg-orange-300 cursor-pointer"
                ></div>
                <div
                  onClick={(e) => {
                    setColor(e.target.dataset.value);
                  }}
                  data-value="bg-pink-400"
                  className="h-[30px] w-[30px] bg-pink-400 cursor-pointer"
                ></div>
                <div
                  onClick={(e) => {
                    setColor(e.target.dataset.value);
                  }}
                  data-value="bg-blue-300"
                  className="h-[30px] w-[30px] bg-blue-300 cursor-pointer"
                ></div>
              </div>
            </div>
          ) : null}
        </div>

        <CreateBtn onHandleCreateCard={onHandleCreateCard} />
      </div>
    </div>
  );
};

export default CreateCard;
