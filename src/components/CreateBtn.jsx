import CheckIcon from "@mui/icons-material/Check";
const CreateBtn = ({ onHandleCreateCard }) => {
  return (
    <button
      onClick={onHandleCreateCard}
      className="h-[40px] w-[40px] cursor-pointer"
    >
      <CheckIcon />
    </button>
  );
};

export default CreateBtn;
