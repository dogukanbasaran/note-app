import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="h-[8vh] border-t border-slate-400/20 flex items-center justify-center">
      <div id="container" className="flex items-center justify-between w-[90%]">
        <span className="text-[1.25rem] font-[600]">
          Dogukan Basaran &copy; 2025.
        </span>
        <div className="flex gap-[10px]">
          <a href="https://www.linkedin.com/in/dogukanbasaran/">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://github.com/dogukanbasaran">
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
