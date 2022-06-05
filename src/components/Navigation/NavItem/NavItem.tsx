import clsx from "clsx";
import Link from "next/link";
import {useRouter} from "next/router";
import {Icons, IconType} from "../../../assets/icons/icons";

import {useNavigationContext} from "../../../context/NavigationContext";

export interface NavItemProps {
  label: string;
  link: string; // This should eventually become like navigation links only
  icon?: IconType;
  subItems?: NavItemProps[];
}

export const NavItem = ({
  label,
  link,
  subItems,
  icon,
}: NavItemProps): JSX.Element => {
  const {showHobbies, setShowHobbies} = useNavigationContext();
  const {route} = useRouter();
  const selectedNavItem = link === route;

  const toggleDropdown = () => {
    setShowHobbies(!showHobbies);
  };

  console.log("icon", icon);
  const Test = icon && Icons[icon];

  console.log("Test is", Test);

  if (!subItems) {
    return (
      <Link href={link}>
        <li className={clsx("navItem", selectedNavItem && "selected")}>
          {Test ? <Test /> : null}
          <a className="items-center ">
            <span className="tracking-normal text-primary text-l">{label}</span>
          </a>
        </li>
      </Link>
    );
  }

  return (
    <>
      <div className="inline-flex items-center p-3 mr-4 ">
        <button
          className="text-xl tracking-wide text-primary"
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
