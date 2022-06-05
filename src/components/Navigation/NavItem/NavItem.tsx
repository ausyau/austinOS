import clsx from "clsx";
import Link from "next/link";
import {useRouter} from "next/router";
import {IconType} from "../../../assets/icons/icons";

import {useNavigationContext} from "../../../context/NavigationContext";

export interface NavItemProps {
  label: string;
  link: string; // This should eventually become like navigation links only
  icon?: IconType;
  subItems?: NavItemProps[];
}

export const NavItem = ({label, link, subItems}: NavItemProps): JSX.Element => {
  const {showHobbies, setShowHobbies} = useNavigationContext();
  const {route} = useRouter();
  const selectedNavItem = link === route;

  const toggleDropdown = () => {
    setShowHobbies(!showHobbies);
  };

  if (!subItems) {
    return (
      <Link href={link}>
        <li className={clsx("navItem", selectedNavItem && "selected")}>
          <a className="items-center">
            <span className="tracking-normal text-primary text-l">{label}</span>
          </a>
        </li>
      </Link>
    );
  }

  return (
    <>
      <div className="inline-flex items-center p-1 px-4 m-2 mb-6">
        <button
          className="tracking-normal text-primary text-l"
          onClick={toggleDropdown}
        >
          {label}
        </button>
      </div>
      {showHobbies
        ? subItems.map(({label, link, icon}, index) => {
            const key = `${label}-${index}`;
            return <NavItem key={key} label={label} link={link} icon={icon} />;
          })
        : null}
    </>
  );
};
