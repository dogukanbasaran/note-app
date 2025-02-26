import { useState, useEffect } from "react";

import SearchInput from "./SearchInput";
import Button from "./Button";
import NoteCard from "./NoteCard";
import CreateCard from "./CreateCard";

import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Main = () => {
  const [visibility, setVisibility] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [color, setColor] = useState(`bg-yellow-50`);
  const [fontStyle, setFontStyle] = useState("");
  const [noteCards, setNoteCards] = useState(() => {
    return JSON.parse(localStorage.getItem("noteCards")) || [];
  });
  const [cardCreated, setCardCreated] = useState(false);
  const [searchedText, setSearchedText] = useState("");

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
    setFontStyle("");
    setColor(`bg-yellow-50`);
    setCardCreated(true);
  }

  function handleDeleteCard(id) {
    setNoteCards((noteCards) =>
      noteCards.filter((noteCard) => noteCard.id !== id)
    );
  }

  function handleSearchedText(e) {
    setSearchedText(e.target.value);
  }

  function handleBoldText() {
    setFontStyle((prev) =>
      prev.includes("font-bold")
        ? prev.replace("font-bold", "").trim()
        : `${prev} font-bold`.trim()
    );
  }

  function handleItalicText() {
    setFontStyle((prev) =>
      prev.includes("italic")
        ? prev.replace("italic", "").trim()
        : `${prev} italic`.trim()
    );
  }

  useEffect(() => {
    if (cardCreated) {
      setVisibility(false);
      setCardCreated(false);
    }
  }, [cardCreated]);

  useEffect(() => {
    localStorage.setItem("noteCards", JSON.stringify(noteCards));
  }, [noteCards]);

  const filteredNotes = noteCards.filter((noteCard) =>
    noteCard.text.toLowerCase().includes(searchedText.toLowerCase())
  );

  return (
    <main className={`h-[84vh] py-[50px] gap-[50px]`}>
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
        className="h-[100%] w-[90%] m-auto flex flex-col gap-[0px] items-center"
        id="container"
      >
        {" "}
        {noteCards.length > 0 ? (
          <div
            className={`flex justify-center w-[100%] gap-[20px] h-[20%] ${
              visibility ? "blur-sm" : "blur-none"
            }`}
          >
            <SearchInput onHandleSearchedText={handleSearchedText} />
            <Button
              onHandleVisibility={handleVisibility}
              icon={<AddIcon sx={{ fontSize: "30px" }} />}
              text={"Note"}
            />
          </div>
        ) : null}
        <div
          className={`h-[700px] overflow-auto scrollbar-hide w-[auto]  grid min-[768px]:grid-cols-2  min-[1280px]:grid-cols-3  gap-[50px] ${
            visibility ? "blur-sm" : "blur-none"
          }`}
        >
          {noteCards.length > 0 ? (
            filteredNotes.map((noteCard) => (
              <NoteCard
                id={noteCard.id}
                color={noteCard.color}
                text={noteCard.text}
                fontStyle={noteCard.fontStyle}
                key={noteCard.id}
                onHandleDeleteCard={handleDeleteCard}
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
