import Link from "next/link";

import {useThemeContext} from "../../../context/ThemeContext";
import {NavItem} from "../NavItem";
import {NavItemProps} from "../NavItem/NavItem";
import {FaIcon} from "../../../assets/icons/icons";
import {useEffect, useState} from "react";
import clsx from "clsx";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions";
import {Switch} from "@headlessui/react";

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
  const [darkMode, setDarkMode] = useState(theme === "dark" ? true : false);

  useEffect(() => {
    setTheme(darkMode ? "dark" : "light");
  }, [theme, darkMode, setTheme]);

  return (
    <div className="flex flex-row items-center justify-center px-4 mb-6 cursor-pointer">
      <FaIcon className="pr-3 text-primary" iconname="sun" />
      <Switch
        checked={darkMode}
        onChange={setDarkMode}
        className={`${
          darkMode ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            darkMode ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>
      <FaIcon className="pl-3 text-primary" iconname="moon" />
    </div>
  );
};

// Eventually Take in props
export const NavBar = (): JSX.Element => {
  const {width} = useWindowDimensions();
  const [navBarHidden, setNavBarHidden] = useState<boolean>(true);

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
