import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import CheckIcon from "@mui/icons-material/Check";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CloseBtn from "./CloseBtn";

const CreateCard = ({ setVisibility }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-50 text-black h-[400px] w-[350px]  min-[768px]:h-[500px] min-[768px]:w-[500px] z-2 border flex flex-col">
      <div>
        <CloseBtn setVisibility={setVisibility} />
      </div>
      <textarea
        maxLength={900}
        className="w-[100%] h-[90%] p-[10px] outline-none resize-none"
        name=""
        id=""
        placeholder="Type anything to remember"
      ></textarea>
      <div className="h-[10%] w-[100%] flex items-center justify-center gap-[20px]">
        <button className="h-[40px] w-[40px] cursor-pointer">
          <FormatBoldIcon />
        </button>
        <button className="h-[40px] w-[40px] cursor-pointer">
          <FormatItalicIcon />
        </button>
        <button className="h-[40px] w-[40px] cursor-pointer">
          <ColorLensIcon />
        </button>
        <button className="h-[40px] w-[40px] cursor-pointer">
          <CheckIcon />
        </button>
      </div>
    </div>
  );
};

export default CreateCard;

/*
Properties (for updating):
- delete
- copying notes
*/
