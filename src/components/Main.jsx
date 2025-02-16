import { useState, useEffect } from "react";

import SearchInput from "./SearchInput";
import Button from "./Button";
import NoteCard from "./NoteCard";
import CreateCard from "./CreateCard";

import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Main = () => {
  const [visibility, setVisibility] = useState(false);
  const [noteCards, setNoteCards] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [color, setColor] = useState(`bg-yellow-50`);
  const [cardCreated, setCardCreated] = useState(false);
  const [fontStyle, setFontStyle] = useState("");

  function handleVisibility() {
    setVisibility(true);
  }

  function handleCreateCard() {
    if (noteText == "") return;
    const newCard = {
      id: Date.now(),
      text: noteText,
      color: color,
      fontStyle: fontStyle,
    };
    setNoteCards((prevCards) => [...prevCards, newCard]);
    setNoteText("");
    setCardCreated(true);
  }

  function handleBoldText() {
    setFontStyle(`font-bold`);
  }

  function handleItalicText() {
    setFontStyle(`italic`);
  }

  useEffect(() => {
    if (cardCreated) {
      setVisibility(false);
      setCardCreated(false);
      localStorage.setItem("key", "value");
    }
  }, [cardCreated]);

  return (
    <main className="h-[auto] py-[100px]">
      {visibility ? (
        <CreateCard
          noteText={noteText}
          color={color}
          fontStyle={fontStyle}
          setVisibility={setVisibility}
          setNoteText={setNoteText}
          setColor={setColor}
          setFontStyle={setFontStyle}
          onHandleCreateCard={handleCreateCard}
          onHandleBoldText={handleBoldText}
          onHandleItalicText={handleItalicText}
        />
      ) : null}
      <div
        className="h-[100%] w-[90%] m-auto flex flex-col gap-[100px]  items-center"
        id="container"
      >
        {" "}
        {noteCards.length > 0 ? (
          <div
            className={`flex justify-center w-[100%] gap-[20px] h-[20%] ${
              visibility ? "blur-sm" : "blur-none"
            }`}
          >
            <SearchInput />
            <Button
              onHandleVisibility={handleVisibility}
              icon={<AddIcon sx={{ fontSize: "30px" }} />}
              text={"Note"}
            />
          </div>
        ) : null}
        <div
          className={`relative min-h-[65vh] h-[auto] w-[100%] min-[768px]:w-[700px] grid min-[768px]:grid-cols-2 min-[1280px]:w-[1050px] min-[1280px]:grid-cols-3 gap-y-[40px] ${
            visibility ? "blur-sm" : "blur-none"
          }`}
        >
          {noteCards.length > 0 ? (
            noteCards.map((noteCard) => (
              <NoteCard
                color={noteCard.color}
                text={noteCard.text}
                fontStyle={noteCard.fontStyle}
                key={noteCard.id}
              />
            ))
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%] flex justify-center items-center">
              <button
                onClick={handleVisibility}
                className="border border-dashed outline-none flex h-[60px] w-[300px] cursor-pointer flex items-center justify-center gap-[5px] text-[1.25rem] font-[700]"
              >
                <span>
                  {<AddCircleOutlineIcon sx={{ fontSize: "30px" }} />}
                </span>
                <span>Create your first note</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
