import { useLocation } from "react-router-dom";
import Brainwave from "../assets/brainwave.svg";
import { navigation } from "../constants";
import Button from "./Button";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Header = () => {
  const pathname = useLocation();
  return (
    <div className="fixed top-0 left-0 w-full z-100 bg-n-8/90 backdrop-blur-sm border-b border-n-6">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-48 xl:mr-8 ">
          <img src={Brainwave} alt="Brainwave Logo" width={190} height={40} />
        </a>

        <nav className="hidden fixed top-20 left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-1
              ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-px lg:text-xs lg:font-semibold
              ${item.url === pathname.hash ? "lg:text-n-1" : "lg:text-n-1/50"}
              lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className={"hidden lg:flex"} href={"#login"}>
          Sign In
        </Button>
      </div>
      <ButtonGradient/>
    </div>
  );
};

export default Header;
