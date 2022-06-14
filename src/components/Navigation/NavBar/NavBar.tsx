import Link from "next/link";

import {useThemeContext} from "../../../context/ThemeContext";
import {NavItem} from "../NavItem";
import {NavItemProps} from "../NavItem/NavItem";
import {FaIcon} from "../../../assets/icons/icons";
import {useEffect, useState} from "react";
import clsx from "clsx";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions";

const pages: NavItemProps[] = [
  {label: "Home", link: "/", iconname: "house-blank"},
  // {label: "YouTube", link: "/yt", icon: "YouTube"},
  // {label: "Projects", link: "/projects", icon: "Project"},
  // {label: "My Toolkit", link: "/toolkit", icon: "Toolkit"},
  // {
  //   label: "Hobbies",
  //   link: "/hobbies",
  //   subItems: [
  //     {label: "Cycling", link: "/cycling", icon: "Cycling"},
  //     {label: "Skiing", link: "/skiing", icon: "Skiing"},
  //     {label: "Travel & Photography", link: "/travel", icon: "Photography"},
  //   ],
  // },
  // {label: "Wisdom", link: "/wisdom"},
];

const ThemeButton = (): JSX.Element => {
  const {theme, setTheme} = useThemeContext();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      className="flex flex-row items-center px-4 mb-3 cursor-pointer"
      onClick={toggleTheme}
    >
      <FaIcon
        className="pr-3 text-primary"
        iconname={theme === "dark" ? "sun" : "moon"}
      />
      <label className="text-sm cursor-pointer align-center text-primary">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </label>
    </button>
  );
};

// Eventually Take in props
export const NavBar = (): JSX.Element => {
  const {width} = useWindowDimensions();
  const [navBarHidden, setNavBarHidden] = useState<boolean>(false);

  const hideNavBar = () => {
    setNavBarHidden(true);
  };
  const showNavBar = () => {
    setNavBarHidden(false);
  };

  useEffect(() => {
    if (width >= 1280) {
      setNavBarHidden(false);
    }
  }, [width]);

  return (
    <div>
      <nav className="flex flex-1 fixed bg-primary w-screen xl:hidden">
        <button
          className="flex m-2 p-2 rounded-md w-9 h-9 items-center justify-center hover:bg-slate-600"
          onClick={showNavBar}
        >
          <FaIcon className="text-primary" iconname="bars" size="lg" />
        </button>
      </nav>
      <nav
        className={clsx(
          "fixed flex flex-col justify-between flex-1 w-56 h-screen border-r-2 dark:border-slate-800 border-slate-300 bg-secondary md",
          "transform transition-transform ease-in duration-200 translate-x-0",
          navBarHidden && "-translate-x-full"
        )}
      >
        <div>
          <span className="flex flex-row items-center my-4 xl:mx-5">
            <button
              className="flex items-center justify-center xl:hidden mx-2 p-2 h-6 w-6 rounded-md hover:bg-slate-600"
              onClick={hideNavBar}
            >
              <FaIcon className=" text-primary" iconname="xmark" size="1x" />
            </button>
            <Link href="/">
              <a className="inline-flex items-start">
                <span className="font-bold tracking-wide text-md text-primary">
                  Austin Yau
                </span>
              </a>
            </Link>
          </span>
          <ul>
            {pages.map(({label, link, subItems, iconname}, index) => {
              return (
                <NavItem
                  key={index}
                  label={label}
                  link={link}
                  iconname={iconname}
                  subItems={subItems}
                />
              );
            })}
          </ul>
        </div>
        <ThemeButton />
      </nav>
    </div>
  );
};
