const NoteCard = ({ text, color, fontStyle }) => {
  return (
    <div className="h-[300px] w-[300px] text-black relative justify-self-center">
      <p
        className={`h-[100%] px-[10px] py-[40px] ${color} break-words ${fontStyle}`}
      >
        {text.length > 300 ? text.slice(0, 300) + "..." : text}
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
