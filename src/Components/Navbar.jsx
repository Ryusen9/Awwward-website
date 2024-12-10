import { useRef } from "react";
import navImage from "/public/img/logo.png";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Navbar = () => {
  const menuItems = ["Home", "Nexus", "About", "Support"];
  const navRef = useRef(null);
  const toggleAudioIndecator = () => {};
  const audioElementRef = useRef(null);
  return (
    <div
      ref={navRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 ">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src={navImage} alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block"></div>
            {menuItems.map((item) => (
              <a
                href={`#${item.toLocaleLowerCase()}`}
                key={Math.random()}
                className="nav-hover-btn"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="ml-10 flex items-center space-x-0.5"
            onClick={toggleAudioIndecator}
          >
            <audio
              src="/public/audio/loop.mp3"
              ref={audioElementRef}
              className="hidden"
              loop
            >
              {[1, 2, 3, 4, 5].map(bar => (
                <div key={bar} className={`indicator-line`}>

                </div>
              ))}
            </audio>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
