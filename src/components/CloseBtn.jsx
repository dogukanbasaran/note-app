import CloseIcon from "@mui/icons-material/Close";

const CloseBtn = ({ setVisibility, setDisplayCreateCard }) => {
  function handleVisibility() {
    setVisibility(false);
    setDisplayCreateCard(false);
  }

  return (
    <button
      onClick={handleVisibility}
      className="h-[40px] w-[40px] cursor-pointer float-right"
    >
      <CloseIcon />
    </button>
  );
};

export default CloseBtn;
