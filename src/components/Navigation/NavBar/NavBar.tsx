import Link from "next/link";

import {useThemeContext} from "../../../context/ThemeContext";
import {NavItem} from "../NavItem";
import {NavItemProps} from "../NavItem/NavItem";
import {FaIcon} from "../../../assets/icons/icons";

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
  return (
    <nav className="fixed flex flex-col justify-between flex-1 w-56 min-h-screen border-r-2 dark:border-slate-800 border-slate-300 bg-secondary md">
      <div>
        <Link href="/">
          <a className="inline-flex items-center p-2 my-2 ml-2 mr-4 ">
            <span className="text-lg font-bold tracking-wide text-primary">
              Austin Yau
            </span>
          </a>
        </Link>
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
  );
};
