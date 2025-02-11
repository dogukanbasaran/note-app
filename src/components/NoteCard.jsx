// import FormatBoldIcon from "@mui/icons-material/FormatBold";
// import FormatItalicIcon from "@mui/icons-material/FormatItalic";
// import CheckIcon from "@mui/icons-material/Check";
// <div className="h-[10%] w-[100%] px-[10px] flex items-center justify-between border-t border-slate-400/60"></div>

const NoteCard = () => {
  return (
    <div className="h-[300px] w-[300px] text-black bg-white relative justify-self-center">
      <p className="h-[100%] px-[10px] py-[40px] bg-yellow-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur
        commodi eaque consequatur? Explicabo fugiat quia corrupti excepturi
        reprehenderit fuga expedita beatae.
      </p>
      <img
        className="absolute bottom-0 right-[-30px]  -rotate-30"
        src="/img/tape1.png"
        alt="tape"
        width={100}
      />
      <img
        className="absolute top-0 left-[-30px] -rotate-30"
        src="/img/tape2.png"
        alt="tape"
        width={100}
      />
    </div>
  );
};

export default NoteCard;
