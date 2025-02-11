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
        <div className="flex justify-center w-[100%] gap-[20px] h-[20%]">
          <SearchInput />
          <Button icon={<AddIcon sx={{ fontSize: "30px" }} />} text={"Note"} />
        </div>
        <div className="h-[auto] min-[768px]:w-[700px] grid min-[768px]:grid-cols-2 min-[1280px]:w-[1050px] min-[1280px]:grid-cols-3 gap-y-[40px]">
          <NoteCard />
          <NoteCard />
          <NoteCard />
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
