const Button = ({ icon, text }) => {
  return (
    <button
      className="h-[60px] w-[180px] flex items-center justify-center 
    rounded-[15px] bg-transparent text-[1.5rem] font-[600] cursor-pointer border border-slate-400/30 hover:bg-white hover:text-black"
    >
      {icon} {text}
    </button>
  );
};

export default Button;
