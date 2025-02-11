import SearchInput from "./SearchInput";
import Button from "./Button";
import NoteCard from "./NoteCard";

import AddIcon from "@mui/icons-material/Add";

const Main = () => {
  return (
    <main className="h-[auto] py-[100px]">
      <div
        className="h-[100%] w-[90%] m-auto flex flex-col gap-[100px]  items-center"
        id="container"
      >
        {" "}
        <div className="flex justify-center gap-[20px] h-[20%]">
          <SearchInput />
          <Button icon={<AddIcon fontSize="large" />} text={"Note"} />
        </div>
        <div className="h-[auto] w-[100%] md:w-[82.5%] grid grid-cols-1 lg:grid-cols-2  place-items-center gap-y-[40px] border">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </main>
  );
};

export default Main;
