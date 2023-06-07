import { useNavigate } from "react-router-dom";
const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  function goTo(path: string) {
    return navigate(path);
  }
  return (
    <header className="flex justify-between md:flex-row flex-col items-center pt-2 pb-2 pl-6 pr-6 shadow-lg">
      <div>
        <img src="/Logo.svg" />
      </div>
      <div>
        <ul className="flex items-center gap-3">
          <li className="font-medium cursor-pointer" onClick={() => goTo("/")}>
            Home
          </li>
          <li
            className="font-medium cursor-pointer"
            onClick={() => goTo("/about")}
          >
            About us
          </li>
          <li>
            <button className="text-white cursor-pointer bg-[#056EE9] rounded-full pr-3 pl-3 pt-1 pb-1">
              Download - $10
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
export { HeaderComponent };
