const Button = ({ icon, text }) => {
  return (
    <button
      className=" h-[50px] min-[768px]:h-[60px] w-[50px] min-[768px]:w-[60px] min-[1280px]:w-[180px] flex items-center justify-center 
    rounded-[15px] bg-transparent text-[1.5rem] font-[600] cursor-pointer border border-slate-400/30 hover:bg-white hover:text-black"
    >
      <span className="flex items-center">{icon}</span>
      <span className="hidden min-[1280px]:block flex items-center">
        {text}
      </span>
    </button>
  );
};

export default Button;
