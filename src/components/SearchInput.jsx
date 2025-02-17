import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ onHandleSearchedText }) => {
  return (
    <div className="border relative h-[50px] min-[768px]:h-[60px] w-[90%] min-[768px]:w-[600px] border border-slate-400/30 rounded-[15px]">
      <div className="absolute top-[10px] min-[768px]:top-[15px] left-[10px] text-slate-400/80">
        <SearchIcon sx={{ fontSize: "30px" }} />
      </div>
      <input
        onChange={onHandleSearchedText}
        className="w-[100%] h-[100%] pl-[50px] pr-[20px] outline-none text-[1.2rem] min-[768px]:text-[1.5rem]"
        placeholder="search a note"
        type="text"
      />
    </div>
  );
};

export default SearchInput;
