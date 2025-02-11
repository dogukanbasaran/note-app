import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <div className="border relative h-[60px] w-[600px] border border-slate-400/30 rounded-[15px]">
      <SearchIcon
        sx={{ fontSize: "30px" }}
        className="absolute top-[15px] left-[10px] text-slate-400/80"
      />
      <input
        className="w-[100%] h-[100%] pl-[50px] pr-[20px] outline-none text-[1.5rem]"
        placeholder="search a note"
        type="text"
      />
    </div>
  );
};

export default SearchInput;
